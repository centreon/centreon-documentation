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

The procedure creates the files you need to set up a TLS connection, in temporary folders. When you set up HTTPS on a server, you will need to deploy the necessary files to the correct location. Example: **/etc/pki/centreon-tls** is the default location for certificates on EL. Debian's default path is **/etc/ssl/certs**.

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

<!-- VIEILLE PROCEDURE
This procedure allows you to create:

- A private key for the server: **centreon7.key** in our case. It will be used by the Apache service.
- A CSR (Certificate Signing Request) file: **centreon7.csr** in our case.
- A private key for the certificate of the certification authority: **ca_demo.key** in our case.
- A x509 certificate to sign your certificate for the server: **ca-demo.crt** in our case.
- A certificate for the server: **centreon7.crt** in our case.

Let's assume that you have a Centreon server with a **centreon7.localdomain** FQDN address.

1. Prepare the OpenSSL configuration:

  Due to a policy change at Google, self-signed certificates may be rejected by the Google Chrome browser (it is not even possible to add an exception). To continue using this browser, you must change the OpenSSL configuration.

  <<Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">>

  Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

  </TabItem>

  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

  </TabItem>
  <TabItem value="Debian 12" label="Debian 12">
  
  Open the file **/etc/ssl/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.
  
  </TabItem>
  </Tabs>
  
  Find the ```[v3_ca]``` section in order to add a new ```alt_names``` tag:
  
  ```text
  # Add the alt_names tag that allows you to inform our various IPs and FQDNs for the server
  [ alt_names ]
  IP.1 = xxx.xxx.xxx.xxx
  DNS.1 = centreon7.localdomain
  # If you have several IP (HA: vip + ip)
  # IP.2 = xxx.xxx.xxx.xxx
  [ v3_ca ]
  subjectAltName = @alt_names
  ```
  
  Here is an example of how the file should look:
  ```text
  [ alt_names ]
  IP.1 = 10.25.11.73
  DNS.1 = centreon7.localdomain
  
  [ v3_ca ]
  subjectAltName = @alt_names
  ```
  
2. Create a private key for the server:
  
  Let's create a private key named **centreon7.key** without a password so that it can be used by the Apache service.
  ```text
  openssl genrsa -out centreon7.key 2048
  ```
  
  Protect your file by limiting rights:
  ```text
  chmod 400 centreon7.key
  ```
  
3. Create a Certificate Signing Request file:
  
  From the key you created, create a CSR (Certificate Signing Request) file: **centreon7.csr** in our case. Fill in the fields according to your company. The **Common Name** field must be identical to the hostname of your Apache server (in our case it is **centreon7.localdomain**).
  ```text
  openssl req -new -key centreon7.key -out centreon7.csr
  ```
  
4. Create a private key for the certificate of certification authority:
  
  Create a private key for this authority: **ca_demo.key** in our case. We add the **-aes256** option to encrypt the output key and include a password. This password will be requested each time this key is used.
  ```text
  openssl genrsa -aes256 2048 > ca_demo.key
  ```
  
5. Create an x509 certificate from the private key of the certificate of certification authority:
  
  Create an x509 certificate that will be valid for one year: **ca_demo.crt** in our case.
  
  > Note that it is necessary to simulate a trusted third party, so the **Common Name** field must be different from the server certificate.
  ```text
  openssl req -new -x509 -days 365 -key ca_demo.key -out ca_demo.crt
  ```
  
  The certificate being created will enable you to sign your server certificate.
  
6. Create a certificate for the server:
  
  Create your certificate for the server by using the x509 certificate (**ca_demo.crt**) to sign it.
  
  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  <TabItem value="Debian 12" label="Debian 12">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/ssl/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  </Tabs>
  
  The password created at step **Create a private key for the certificate of certification authority** must be entered. You get your server certificate named **centreon7.crt**.
  
  You can view the contents of the file: 
  ```text
  less centreon7.crt
  ```
  
7. You must then retrieve the x509 certificate file (**ca_demo.crt**) and import it into your browser's certificate manager.
  
Now that you have your self-signed certificate, you can perform the following procedure to activate HTTPS mode on your Apache server.
 -->
<!-- ## Détail de tous les endroits où mettre des certificats

| Fichier / Machine (service) | central (http) | central (gorg) | poller (cbd) | remote (http) | central-db-loc(db) | central-db-rem(db) | map (java) | map (db) | mbi (java) | mbi (db) |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| rootCA.pem                  | v | v | v | v | v | v | v | v | v | v |
| rootCA.key                  |   |   |   |   |   |   |   |   |   |   |
| server.pem                  | v | v |   | v | v | v | v | v | v | v |
| server.key                  | v | v * |   | v | v | v | v | v | v | v | -->
<!-- 
## Where the files should be ultimately stored

This table shows the standard locations (system paths) where the TLS certificates used by the various Centreon components are typically stored, depending on the Linux distribution.

| Machine (Service) | File | Standard path on EL | Standard path on Debian |
|:---|:---|:---|:---|
| central/remote (Apache / Nginx) | rootCA.pem | /etc/pki/ca-trust/source/anchors | /usr/local/share/ca-certificates |
|  | server.pem | /etc/pki/tls/certs | /etc/ssl/certs |
|  | server-key.pem | /etc/pki/tls/private | /etc/ssl/private |
| central/remote (Gorgone - Perl) | rootCA.pem | /etc/pki/centreon-tls | /etc/pki/centreon-tls |
|  | server.pem | /etc/pki/centreon-tls | /etc/pki/centreon-tls |
|  | server-key.pem | /etc/pki/centreon-tls | /etc/pki/centreon-tls|
| central-db | rootCA.pem | /etc/my.cnf.d/ssl | /etc/mysql/ssl |
|  | server.pem | /etc/my.cnf.d/ssl | /etc/mysql/ssl |
|  | server-key.pem | /etc/my.cnf.d/ssl | /etc/mysql/ssl |
 -->
<!-- tableau complet
| Machine (Service) | Fichier | Chemin standard - RHEL (AlmaLinux) | Chemin standard - Debian (Ubuntu) |
|:---|:---|:---|:---|
| central / remote (Apache / Nginx) | rootCA | /etc/pki/ca-trust/source/anchors/rootCA.pem | /usr/local/share/ca-certificates/rootCA.crt * |
|  | server | /etc/pki/tls/certs/centreon-server.pem | /etc/ssl/certs/centreon-server.pem |
|  | key | /etc/pki/tls/private/centreon-server.key | /etc/ssl/private/centreon-server.key |
| central / remote (gorgone - Perl) | rootCA | /etc/pki/centreon-tls/rootCA.pem | /etc/pki/centreon-tls/rootCA.pem |
|  | server | /etc/pki/centreon-tls/server.pem | /etc/pki/centreon-tls/server.pem |
|  | key | /etc/pki/centreon-tls/server-key.pem | /etc/pki/centreon-tls/server-key.pem |
| poller (Centreon Broker) | rootCA | /etc/centreon-broker/ssl/rootCA.pem (ou /etc/pki/tls/certs/ca-bundle.crt) | /etc/centreon-broker/ssl/rootCA.pem (ou /etc/ssl/certs/ca-certificates.crt) |
| central-db / map-db / mbi-db (MariaDB/MySQL) | rootCA | /etc/my.cnf.d/ssl/rootCA.pem | /etc/mysql/ssl/rootCA.pem |
|  | server | /etc/my.cnf.d/ssl/server.pem | /etc/mysql/ssl/server.pem |
|  | key | /etc/my.cnf.d/ssl/server.key | /etc/mysql/ssl/server.key |
| map / mbi (Services Java) | rootCA | Intégré dans : /etc/pki/java/cacerts | Intégré dans : /etc/ssl/certs/java/cacerts |
|  | Keystore | /etc/centreon-map/keystore.p12 (Format PKCS12) | /var/lib/centreon-map/keystore.p12 (ou /etc/) | -->