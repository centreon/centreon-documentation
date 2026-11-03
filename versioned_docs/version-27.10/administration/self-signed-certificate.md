---
id: self-signed-certificate
title: Create a self-signed certificate
description: "Create a self-signed certificate with OpenSSL"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Self-signed certificates are for test purposes only. You MUST NOT use them in production.

## Files you need to set up TLS connections using self-signed certificates

This procedure allows you to create the following set of files, which is enough to secure the connection to the web interface and to the database:

| File         | Where to store it                 | Role                                                                    |
|--------------|-----------------------------------|-------------------------------------------------------------------------|
| web-key.pem  | On the central/remote server you want to make secure | Private key for **web.pem**: stays secret on the secure server. Used to prove the server's identity.  |
| web.pem  | On the central/remote server you want to make secure | The signed certificate that will be sent automatically to any client that tries to connect to the secure central/remote server.         |
| db-key.pem  | On the database server you want to make secure | Private key for **db.pem**: stays secret on the secure server. Used to prove the server's identity.  |
| db.pem  | On the database server you want to make secure | The signed certificate that will be sent automatically to any client that tries to connect to the secure database server.         |
| rootCA.pem   | On the client (browser, OS...) | Root CA self-signed certificate. This is a public file, used to validate the **web.pem** or **db.pem** certificate the client has received. **rootCA.pem** will have to be copied to all machines that will interact with the secure machine (that has sent **web.pem** or **db.pem**).   |
| rootCA.key   | Store it somewhere safe, so as to be able to renew the certificates. | Private key of the root CA. Used to sign **web.pem** and **db.pem**, and to sign new certificates when they expire (after 397 days). Never copy it to another machine. If you lose it, you have to create a new CA and redeploy **rootCA.pem** everywhere.    |

## What this procedure does

The procedure creates the files you need to set up a TLS connection, in temporary folders. When you set up HTTPS on a server, you will need to deploy the necessary files to the correct location (the last step explains where to copy them).

The procedure can be run on a Centreon platform that has a local database, or a remote one.

* If you have a local database, run the commands in both tabs on your Centreon server.
* If you have a remote database, run the whole procedure on your Centreon server (both tabs). The last step explains how to copy **rootCA.pem**, **db.pem** and **db-key.pem** to the database server.

## Step 1: Create output directories

Set up folders to keep everything organized: one for the CA's own files, one for files meant for the web or database service.

For the CA:

```shell
sudo mkdir -p /out/CA
```

For each certificate:

<Tabs groupId="sync">
<TabItem value="Web server certificate" label="Web server certificate">

```shell
sudo mkdir -p /out/web
```

</TabItem>
<TabItem value="Database certificate" label="Database certificate">

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

## Step 3: Generate the root CA self-signed certificate (10 years)

This step creates the CA's certificate: the public document that identifies your CA (name, organization, etc.) and that will later be distributed to any client/server that needs to trust certificates it signs.

It's "self-signed" because there's no higher authority above it — the CA vouches for itself. This is normal and expected for a root CA.

* `-x509` tells OpenSSL to output a certificate directly (rather than a signing request).
* `-days 3650` sets it to expire in ~10 years, which is standard for a root CA since it's not meant to be renewed often.
* `-subj` sets the identity fields directly on the command line: CN (Common Name) is "Test Dev CA", O (Organization) is "YourOrganization", OU (Organizational Unit) is "R&D". Replace these to fit your organization.

```shell
sudo openssl req -x509 -new -key /out/CA/rootCA.key \
  -sha256 -days 3650 \
  -subj "/CN=Test Dev CA/O=YourOrganization/OU=R&D" \
  -out /out/CA/rootCA.pem
```

## Step 4: Generate the server private key (2048-bit RSA)

This is the private key for the actual server (the central/remote server or the database). It's separate from the CA key. The server should never share a key with the CA.

<Tabs groupId="sync">
<TabItem value="Web server certificate" label="Web server certificate">

```shell
sudo openssl genrsa -out /out/web/web-key.pem 2048
```

</TabItem>
<TabItem value="Database certificate" label="Database certificate">

```shell
sudo openssl genrsa -out /out/db/db-key.pem 2048
```

</TabItem>
</Tabs>

## Step 5: Generate a Certificate Signing Request

A CSR is a request document, generated from the server's private key, that says "here's who I am, please sign me." It doesn't do anything on its own. It's an intermediate file, only useful as input to Step 6 (and can be deleted afterward if you like).

Replace **centreon.example.com** or **db.example.com** with the FQDN of your server. Use the same name as the first DNS entry of the **.ext** file in Step 6.

<Tabs groupId="sync">
<TabItem value="Web server certificate" label="Web server certificate">

```shell
sudo openssl req -new -key /out/web/web-key.pem -out /out/web/web.csr \
  -subj "/CN=centreon.example.com/O=Centreon"
```

</TabItem>
<TabItem value="Database certificate" label="Database certificate">

```shell
sudo openssl req -new -key /out/db/db-key.pem -out /out/db/db.csr \
  -subj "/CN=db.example.com/O=Centreon"
```

</TabItem>
</Tabs>

## Step 6: Sign the server certificate with the root CA (397 days validity)

This is the step that actually produces the usable server certificate: the CA (its certificate and private key from Steps 2–3) signs the CSR from Step 5.

First, create a file that defines the certificate's extensions. The `subjectAltName` entries must match the names and IP addresses that clients use to reach the server. Otherwise, the connection is rejected.

<Tabs groupId="sync">
<TabItem value="Web server certificate" label="Web server certificate">

Replace **centreon.example.com** and **192.168.1.10** with the FQDN and IP address that users and Gorgone use to reach the web interface:

```shell
sudo tee /out/web/web.ext > /dev/null <<'EOF'
[v3_req]
basicConstraints = critical, CA:FALSE
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1 = centreon.example.com
IP.1 = 192.168.1.10
EOF
```

</TabItem>
<TabItem value="Database certificate" label="Database certificate">

Replace **db.example.com** and **192.168.1.20** with the FQDN and IP address that the central server uses to connect to the database. With a local database, the central server connects through **localhost**, so keep the `localhost` and `127.0.0.1` entries:

```shell
sudo tee /out/db/db.ext > /dev/null <<'EOF'
[v3_req]
basicConstraints = critical, CA:FALSE
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1 = db.example.com
DNS.2 = localhost
IP.1 = 192.168.1.20
IP.2 = 127.0.0.1
EOF
```

</TabItem>
</Tabs>

Then sign the certificate. The command uses the following options:

* `-days 397`: 397 days is the current maximum lifetime accepted by major browsers (Apple/Google/Mozilla) for TLS server certificates. Going longer risks clients rejecting the certificate.
* `-CAcreateserial`: creates a serial number tracking file (rootCA.srl) the first time it runs, and increments it on future signings, so every certificate issued by this CA gets a unique serial number.
* `-extfile` / `-extensions v3_req`: adds the extensions defined in the **.ext** file, including the names and IP addresses the certificate is valid for (`subjectAltName`).

<Tabs groupId="sync">
<TabItem value="Web server certificate" label="Web server certificate">

```shell
sudo openssl x509 -req -in /out/web/web.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/web/web.pem -days 397 -sha256 \
  -extfile /out/web/web.ext -extensions v3_req
```

</TabItem>
<TabItem value="Database certificate" label="Database certificate">

```shell
sudo openssl x509 -req -in /out/db/db.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/db/db.pem -days 397 -sha256 \
  -extfile /out/db/db.ext -extensions v3_req
```

</TabItem>
</Tabs>

## Step 7: Set permissions

Permissions here follow the principle of least privilege:

* `0644` (readable by everyone, writable only by owner) for public certificates — they contain no secrets.
* `0640` (readable by owner and group, not others) for the server's private key, since it's sensitive but likely needs to be read by a service running under a specific group. The [installation procedure](../installation/installation-of-a-central-server/using-packages.md) sets the correct group (e.g. **mysql**) once the files are copied.

For the root CA:

```shell
sudo chmod 0644 /out/CA/rootCA.pem
```

For the central/remote server:

```shell
sudo chmod 0644 /out/web/web.pem
sudo chmod 0640 /out/web/web-key.pem
```

For the database:

```shell
sudo chmod 0644 /out/db/db.pem
sudo chmod 0640 /out/db/db-key.pem
```

## Step 8: Copy the files

You now have the files you need in your **/out** folder. You can copy them to the correct locations on your servers (e.g. **/etc/pki/centreon-tls/** on EL 9 or 10 like in the example below, or **/etc/ssl/certs/centreon-tls** on Debian 13).

1. Move **rootCA.key** to a safe place, then delete it from your **/out** directory.

2. On the central/remote server:

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/web/web.pem /out/web/web-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/web/web.pem /out/web/web-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mkdir -p /etc/ssl/certs/centreon-tls/
  sudo cp /out/CA/rootCA.pem /out/web/web.pem /out/web/web-key.pem /etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

3. For the database:

* If your database is local, run these commands on the central server:

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mkdir -p /etc/ssl/certs/centreon-tls/
  sudo cp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem /etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

* If your database is remote, create the folder on the database server:

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mkdir -p /etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

  Then, on the central server, copy the files to the database server using a secure method, as **db-key.pem** is a private key. Replace **db.example.com** with the address of your database server:

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem root@db.example.com:/etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">
  
  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem root@db.example.com:/etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem root@db.example.com:/etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

  If root cannot log in through SSH on the database server, copy the files to the home folder of a user who can (replace **user**):

  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem user@db.example.com:~/
  ```

  Then, on the database server, move them to the right folder:

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mv ~/rootCA.pem ~/db.pem ~/db-key.pem /etc/pki/centreon-tls/
  sudo chown root:root /etc/pki/centreon-tls/*.pem
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mv ~/rootCA.pem ~/db.pem ~/db-key.pem /etc/pki/centreon-tls/
  sudo chown root:root /etc/pki/centreon-tls/*.pem
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mv ~/rootCA.pem ~/db.pem ~/db-key.pem /etc/ssl/certs/centreon-tls/
  sudo chown root:root /etc/ssl/certs/centreon-tls/*.pem
  ```

  </TabItem>
  </Tabs>

4. Delete the private keys from the **/out** folder, as they are now in their final locations:

    ```shell
    sudo rm /out/web/web-key.pem /out/db/db-key.pem
    ```
