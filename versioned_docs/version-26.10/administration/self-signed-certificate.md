---
id: self-signed-certificate
title: Create a self-signed certificate
description: "Create a self-signed certificate with OpenSSL"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Self-signed certificates are for test purposes only. You MUST NOT use them in production.

## Files you need to set up TLS connections using self-signed certificates

This procedure allows you to create the following files:

| File         | Where to store it                 | Role                                                                    |
|--------------|-----------------------------------|-------------------------------------------------------------------------|
| server-key.pem  | On the server you want to make secure (central/remote, database...) | Private key for **server.pem**: stays secret on the secure server. Used to prove the server's identity.  |
| server.pem   | On the server you want to make secure (central/remote, database...) | The signed certificate that will be sent automatically to any client that tries to connect to the secure server.         |
| rootCA.pem   | On the client (browser, OS...) | Root CA self-signed certificate. This is a public file, used to validate the **server.pem**  certificate the client has received. **rootCA.pem** will have to be copied to all machines that will interact with the secure machine (that has sent **server.pem**).   |
| rootCA.key   | Only on the machine that generates the CA, stays in a temporary folder | This file plays no role in production. It is used only to sign **rootCA.pem** when creating it.    |

## What this procedure does

The procedure creates the files you need to set up a TLS connection, in temporary folders. When you set up HTTPS on a server, you will need to deploy the necessary files to the correct location. Example: **/etc/pki** is the default location for certificates on EL. Debian's default path is **/etc/ssl/certs**.

The procedure can be run on a Centreon platform that has a local database, or a remote one.

* If you have a local database, run the commands in both tabs on your Centreon server.
* If you have a remote database, run the procedure twice:
   * On your Centreon server, create a CA (steps 1 to 3), then run the commands in the **On the central/remote server** tabs.
   * On the database server, create another CA, then run the commands in the **On the database server** tabs.
   
   You then have two different **rootCA.pem** files. Copy the **rootCA.pem** from the database server to the machines that connect to the database (for example, your Centreon server). Copy the **rootCA.pem** from your Centreon server to the machines that connect to it.

<!-- This procedure creates your own small Certificate Authority (CA), then uses it to issue and sign a server certificate. Here is the general idea:

1. In a temporary folder, create a "root" identity that will act as your trusted authority (the CA).
2. Create a certificate for your actual server, and have the CA "sign" it.
3. Store everything directly under **/etc/pki/centreon-tls**, the standard system location for TLS material, with the right permissions. -->

## Step 1: Create output directories

Set up folders to keep everything organized: one for the CA's own files, one for files meant for the web or database service.

For the CA:

```shell
sudo mkdir -p /out/CA
```

For the central/remote server, or for the database:

<Tabs groupId="sync">
<TabItem value="On the central/remote server" label="On the central/remote server">

```shell
sudo mkdir -p /out/web
```

</TabItem>
<TabItem value="On the database server" label="On the database server">

```shell
sudo mkdir -p /out/db
```

</TabItem>
</Tabs>

## Step 2: Generate the root CA private key (4096-bit RSA)

This is the secret key for your Certificate Authority. **chmod 400** restricts the file so that only its owner can read it (not even write), minimizing exposure.

```shell
sudo openssl genrsa -out /out/CA/rootCA.key 4096
sudo chmod 400 /out/CA/rootCA.key
```

## Step 3: Generate Root CA self-signed certificate (10 years)

Now we create the CA's actual certificate — the public document that identifies your CA (name, organization, etc.) and that will later be distributed to any client/server that needs to trust certificates it signs.

It's "self-signed" because there's no higher authority above it — the CA vouches for itself. This is normal and expected for a root CA.

* `-x509` tells OpenSSL to output a certificate directly (rather than a signing request).
* `-days 3650` sets it to expire in ~10 years, which is standard for a root CA since it's not meant to be renewed often.
* `-subj` sets the identity fields directly on the command line: CN (Common Name) is "Test Dev CA", O (Organization) is "YourOrganization", OU (Organizational Unit) is "R&D". Replace these to fit your organization.

```shell
sudo openssl req -x509 -new -nodes -key /out/CA/rootCA.key \
  -sha256 -days 3650 \
  -subj "/CN=Test Dev CA/O=YourOrganization/OU=R&D" \
  -out /out/CA/rootCA.pem
```

## Step 4: Generate leaf server private key (2048-bit RSA)

This is the private key for the actual server (the central/remote server or the database). It's separate from the CA key. The server should never share a key with the CA.

<Tabs groupId="sync">
<TabItem value="On the central/remote server" label="On the central/remote server">

```shell
sudo openssl genrsa -out /out/web/server-key.pem 2048
```

</TabItem>
<TabItem value="On the database server" label="On the database server">

```shell
sudo openssl genrsa -out /out/db/server-key.pem 2048
```

</TabItem>
</Tabs>

## Step 5: Create OpenSSL extension config for SANs

Modern browsers and clients require a certificate to list all the hostnames/IPs it's valid for — this is called the Subject Alternative Name (SAN) list. A single CN is no longer trusted alone. This step writes a small config file describing:

* `basicConstraints = CA:FALSE`: this certificate is not allowed to sign other certificates (only the root CA can).
* `keyUsage / extendedKeyUsage`: restricts the certificate to its intended purpose, which is authenticating a TLS server.
* `subjectAltName`: the actual list of names/IPs the certificate should be valid for. Here: web, localhost, db, and IP 127.0.0.1. Edit this list to match the actual hostnames your server will be reached by.

```shell
sudo tee /out/cert.ext > /dev/null <<EOF
[v3_req]
basicConstraints = CA:FALSE
keyUsage         = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName   = @alt_names

[alt_names]
DNS.1 = web
DNS.2 = localhost
DNS.3 = db
IP.1  = 127.0.0.1
EOF
```

## Step 6: Generate a Certificate Signing Request

A CSR is a request document, generated from the server's private key, that says "here's who I am, please sign me." It doesn't do anything on its own. It's an intermediate file, only useful as input to Step 7 (and can be deleted afterward if you like).


<Tabs groupId="sync">
<TabItem value="On the central/remote server" label="On the central/remote server">

```shell
sudo openssl req -new -key /out/web/server-key.pem -out /out/web/server.csr \
  -subj "/CN=web/O=Centreon"
```

</TabItem>
<TabItem value="On the database server" label="On the database server">

```shell
sudo openssl req -new -key /out/db/server-key.pem -out /out/db/server.csr \
  -subj "/CN=db/O=Centreon"
```

</TabItem>
</Tabs>

## Step 7: Sign leaf cert with Root CA (397 days validity)

This is the step that actually produces the usable server certificate: the CA (its cert + private key from Steps 2–3) signs the CSR from Step 6, applying the extensions/SANs defined in Step 5.

* `-days 397`: 397 days is the current maximum lifetime accepted by major browsers (Apple/Google/Mozilla) for TLS server certificates. Going longer risks clients rejecting the certificate.
* `-CAcreateserial`: creates a serial number tracking file (rootCA.srl) the first time it runs, and increments it on future signings, so every certificate issued by this CA gets a unique serial number.



<Tabs groupId="sync">
<TabItem value="On the central/remote server" label="On the central/remote server">

```shell
sudo openssl x509 -req -in /out/web/server.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/web/server.pem -days 397 -sha256 \
  -extfile /out/cert.ext -extensions v3_req
```

</TabItem>
<TabItem value="On the database server" label="On the database server">

```shell
sudo openssl x509 -req -in /out/db/server.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/db/server.pem -days 397 -sha256 \
  -extfile /out/cert.ext -extensions v3_req
```

</TabItem>
</Tabs>

## Step 8: Set permissions

Permissions here follow the principle of least privilege:

* `0644` (readable by everyone, writable only by owner) for public certificates — they contain no secrets.
* `0640` (readable by owner and group, not others) for the server's private key, since it's sensitive but likely needs to be read by a service running under a specific group.

For the root CA:

```shell
sudo chmod 0644 /out/CA/rootCA.pem
```

For the central/remote server:

```shell
sudo chmod 0644 /out/web/server.pem
sudo chmod 0640 /out/web/server-key.pem
```

For the database:

```shell
sudo chmod 0644 /out/db/server.pem
sudo chmod 0640 /out/db/server-key.pem
```

You now have the files you need in your **/out** folder. You can copy them to the correct locations on your servers (and rename them if you need to).
