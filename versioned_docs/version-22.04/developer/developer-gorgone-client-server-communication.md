---
id: developer-gorgone-client-server-communication
title : Managing client/server communication
---

Centreon Gorgone is used on the central server, the remote servers, and the pollers.
Gorgone is the process for a distributed architecture: it deploys the configuration
generated from the central server to the pollers and distributes external commands to the pollers.

Centreon recommends to use the ZMQ protocol for the communication between two **gorgoned**
processes. 
When using the ZMQ protocol, all communications are encrypted using symmetric-key encryption
based on public/private keys from both client and server. So you need to generate public/private keys to set the configuration.

In a Centreon context:
- the Central server has a Gorgone running (by default) as a client and can connect to Gorgone servers running on remote servers and pollers.
- Remote servers have a Gorgone running (by default) as a client and can connect to Gorgone servers running on pollers.

Follow this procedure to set the communication between client and server.

## Generate private and public keys
On both client and server, generate RSA (format for key encryption) private and public keys using centreon user.

```shell
$ mkdir -p /var/spool/centreon/.gorgone/
$ chmod 700 /var/spool/centreon/.gorgone
$ openssl genrsa -out /var/spool/centreon/.gorgone/privkey.pem 4092
Generating RSA private key, 4092 bit long modulus
...................................++
...........................................................................................................................................................................++
e is 65537 (0x10001)
$ openssl rsa -in /var/spool/centreon/.gorgone/privkey.pem -out /var/spool/centreon/.gorgone/pubkey.pem -pubout -outform PEM
writing RSA key
$ chmod 644 /var/spool/centreon/.gorgone/pubkey.pem
$ chmod 600 /var/spool/centreon/.gorgone/privkey.pem
```

Copy the server public key onto the client in a specific directory (for example **/var/spool/centreon/.gorgone/<target_id>**).

## Get the string-formatted JWK thumbprint
On the client side, execute the following command:
```shell
$ perl /usr/local/bin/gorgone_key_thumbprint.pl --key-path='/var/spool/centreon/.gorgone/pubkey.pem'
2019-09-30 11:00:00 - INFO - File '/var/spool/centreon/.gorgone/pubkey.pem' JWK thumbprint: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4
```

## Set the configurations
You need to make the gorgone IDs match Centreon pollers ID to benefit from legacy command module's actions.

### On the server side
In the **/etc/centreon/confid.d/20-gorgoned.yaml** configuration file, add the following directives under the **gorgonecore** section:

```shell
gorgone:
  gorgonecore:
    id: 1
    privkey: /var/spool/centreon/.gorgone/privkey.pem
    pubkey: /var/spool/centreon/.gorgone/pubkey.pem
```

Add the register module and define the path to the dedicated configuration file.

```shell
modules:
  - name: register
    package: "gorgone::modules::core::register::hooks"
    enable: true
    config_file: /etc/centreon/gorgone-targets.yml
```

Create the file **/etc/centreon/gorgone-targets.yml** and fill it with the following configuration:

```shell
  nodes:
  - id: 2
    type: push_zmq
    address: 10.1.2.3
    port: 5556
```

### On the client side
In the **/etc/centreon/config.d/20-gorgoned.yaml** configuration file, add the following directives:

```shell
gorgone:
  gorgonecore:
    id: 2
    external_com_type: tcp
    external_com_path: "*:5556"
    privkey: /var/spool/centreon/.gorgone/privkey.pem
    pubkey: /var/spool/centreon/.gorgone/pubkey.pem
    authorized_clients:
      - key: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4
```

The **authorized_clients** entry allows to define the client public key thumbprint retrieved earlier.
