---
id: self-signed-certificate
title: Create a self-signed certificate
description: "Create a self-signed certificate with OpenSSL to enable HTTPS on your Centreon server"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Creating a self-signed certificate

>  This procedure allows you to create:

- A private key for the server: **centreon7.key** in our case. It will be used by the Apache service.
- A CSR (Certificate Signing Request) file: **centreon7.csr** in our case.
- A private key for the certificate of the certification authority: **ca_demo.key** in our case.
- A x509 certificate to sign your certificate for the server: **ca-demo.crt** in our case.
- A certificate for the server: **centreon7.crt** in our case.

Let's assume that you have a Centreon server with a **centreon7.localdomain** FQDN address.

1. Prepare the OpenSSL configuration:

  Due to a policy change at Google, self-signed certificates may be rejected by the Google Chrome browser (it is not even possible to add an exception). To continue using this browser, you must change the OpenSSL configuration.

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

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
