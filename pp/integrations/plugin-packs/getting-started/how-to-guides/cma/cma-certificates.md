---
id: cma-certificates
title: Configuring certificates
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## TLS

### How it works

The TLS (1.3) connection is negotiated by the client (poller or agent, depending on the direction) and requires certificates.
Depending on the connection direction, the agent/the poller checks that the IP/DNS used to reach the server strictly matches the information in the certificate. If this is not the case, the connection is not allowed.
The verification is performed on the **alt_names** block of the certificate, which may contain several DNS, IP, or CN entries.

### Certificate files

Supported formats are :

- public certificate file, CA or wildcard: .crt/.cer
- private key file: .key

Certificate files stored on the poller must be stored in **/etc/pki/**, either at the root or in a subdirectory.
They must have the following permissions:

```shell
chmod 644 /etc/pki/agent*
```

Certificate files stored on the host can be stored in the directory of your choice.

These files can also be saved directly in the certificate store.
In this case, it is not necessary to enter them in the configuration made on the host (**Host configuration** column in the table below).

### Summary of possible configurations

<Tabs groupId="sync">
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

When connecting to the poller, the agent verifies that the IP/DNS entered in the **Poller endpoint** parameter of the agent configuration strictly matches the information in the certificate (SAN or CN).
If this is not the case, the connection is not allowed.

| Use case      															  | File(s) on the poller | File(s) on the host (if not loaded in the certificate store) | Poller configuration (interface) | Host configuration   |
| -----------      															  | -----------                  | -----------           |-----------							   | -----------				|
| Certificate signed by a CA           	 | Public certificate and private key files                        | CA file                       | In the **OTLP receiver** section:<ul><li>**Public certificate**: path to the public certificate (example: '/etc'/pki'/certificate.crt)</li><li>**Private key**: path to the private key (example: '/etc'/pki'/certificate.key)</li><li>**CA**: empty</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the poller</li><li>**Private key file/private_key**: empty</li><li>**Certificate file**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: path to the CA</li><li>**Certificate Common Name/ca_name**: empty</li></ul>	|
| Self-signed certificate         	 | Public certificate and private key files                         | Public certificate file                       | In the **OTLP receiver** section:<ul><li>**Public certificate**: path to the public certificate (example: '/etc'/pki'/certificate.crt)</li><li>**Private key**: path to the private key (example: '/etc'/pki'/certificate.key)</li><li>**CA**: empty, except when a double handshake is needed</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the poller</li><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_certificate**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: path to the public certificate</li><li>**Certificate Common Name/ca_name**: empty</li></ul> |
| Wildcard certificate    | Wildcard and private key files                         | Wildcard file              | In the **OTLP receiver** section:<ul><li>**Public certificate**: Wildcard certificate file</li><li>**Private key**: path to the private key</li><li>**CA**: empty</li></ul> | <ul><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_cert**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: path to the wildcard certificate</li><li>**Certificate Common Name/ca_name**: empty</li></ul>							|
| Public certificate (managed service, e.g. central Centreon Cloud poller)        | None                        | None                 | In the **OTLP receiver** section:<ul><li>**Public certificate**: empty</li><li>**Private key**: empty</li><li>**CA**: empty</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the load balancer bearing the public certificate</li><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_cert**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name :** empty</li></ul>							|
| Public certificate (key files)        | Public certificate and private key files                         | None                 | In the **OTLP receiver** section:<ul><li>**Public certificate**: path to the public certificate (example: '/etc'/pki'/certificate.crt)</li><li>**Private key**: path to the private key (example: '/etc'/pki'/certificate.key)</li><li>**CA**: empty</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the poller</li><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_cert**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>							|

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

When connecting to the agent, the poller checks that the IP/DNS entered for the host (in the agent configuration) strictly matches the information in the certificate (SAN or CN).
If this is not the case, the connection to this host is not allowed.

| Use case      															  | File(s) on the poller | File(s) on the host | Poller configuration (interface) | Host configuration  |
| -----------      															  | -----------                  | -----------           |-----------								       | -----------							|
| Certificate signed by a CA            	 | CA file                   | Public certificate and private key files                      | In the **Host configurations** section: <ul><li>**CA:** path to the CA</li><li>**CA common name (CN):** empty</li></ul>	 | <ul><li>**Private Key file/private_key**: path to the private key</li><li>**Certificate file/public_cert**: path to the public certificate</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>	|
| Self-signed certificate  	 | Public certificate file                       | Public certificate and private key files    | In the **Host configurations** section:<ul><li>**CA**: path to the public certificate</li><li>**CA Common Name (CN)**: empty</li></ul> | <ul><li>**Private Key file/private_key**: path to the private key</li><li>**Certificate file/public_cert**: path to the public certificate</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>	|
| Wildcard certificate      | Wildcard file                       | Wildcard and private key files   | In the **Host configurations** section:<ul><li>**CA**: path to the wildcard certificate</li><li>**Nom commun CA (CN)**: empty</li></ul>    | <ul><li>**Private Key file/private_key**: path to the private key</li><li>**Certificate file/public_cert**: path to the wildcard certificate</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>							|

</TabItem>
</Tabs>

### Comment générer un certificat autosigné (facultatif)

Si vous ne possédez pas de certificat, il est possible de générer un certificat autosigné.
Pour générer un certificat autosigné valide un an, exécutez la commande suivante sur votre collecteur ou votre hôte :

```shell
openssl req -new -subj '/CN={server_hostname}' \
                 -addext "subjectAltName = CN:{server_hostname}, DNS:{alt_poller_DNS}, IP:{alt_poller_IP}" \
                 -days 365 -nodes -x509 \
                 -newkey rsa:2048 -keyout {key} -out {cert}
```

- \{key\} = chemin du fichier clé privée
- \{cert\} = chemin du fichier de certificat public
- \{server_hostname\} = nom DNS du serveur et/ou utiliser \{alt_poller_DNS\} et/ou utiliser \{alt_poller_IP\}
Dans le mode de chiffrement TLS Full, le DNS/IP du serveur utilisé par le client doit obligatoirement correspondre à une entrée CN ou SAN (altName) du certificat (\{server_hostname\}).
La ligne -subj '/CN=\{server_hostname\}' \ est facultative si des SAN sont définis.

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

**\{server_hostname\}** doit correspondre au DNS/IP utilisé dans "Poller endpoint" (Installer) / "endpoint" (json), dans la configuration d'Agent, sur l'hôte.

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

**\{server_hostname\}** doit correspondre au DNS/IP utilisé dans le champ "Configurations d'hôte - Hôte" de la configuration d'Agent, dans l'interface.

</TabItem>
</Tabs>

## Mode test : communication non chiffrée

Vous pouvez configurer une connexion non chiffrée **à des fins de test uniquement**. Dans ce mode, vous n'avez besoin d'aucun certificat ou jeton.

> Notez que cette connexion ne durera qu'une heure. N'utilisez pas ce paramètre en production !

Pour configurer ce mode, sélectionnez **No TLS** dans la liste **Niveau de chiffrement** de la fenêtre [**Configuration collecteur/agent**](cma-setup.md#configure-polleragent-communication).

L'agent sera configuré de la manière suivante sur l'hôte :
- [pour Windows, en utilisant l'option correspondante dans le programme d'installation ou la CLI](cma-setup.md#step-2-prepare-the-host)
- pour Linux, en utilisant le fichier **centagent.json** :

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">


```json
{
  "log_level":"info",
  "endpoint":"<IP/DNS COLLECTEUR>:4317",
  "encryption" : "false",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" 
}
```

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

```json
{
  "log_level":"info",
  "endpoint":"0.0.0.0:4317",
  "encryption" : "false",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reversed_grpc_streaming":true
}
```

</TabItem>
</Tabs>
