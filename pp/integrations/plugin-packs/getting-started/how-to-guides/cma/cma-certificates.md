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

| Use case      															  | File(s) on the poller | File(s) on the host (if not loaded in the certificate store) | Configuration of the poller (interface) | Configuration of the host   |
| -----------      															  | -----------                  | -----------           |-----------							   | -----------				|
| Certificate signed by a CA           	 | Public certificate and private key files                        | CA file                       |	**OTLP receiver - Public certificate:** path to the public certificate (example: '/etc'/pki'/certificate.crt)<br/>**OTLP receiver - Private key:** path to the private key (example: '/etc'/pki'/certificate.key)<br/>**OTLP receiver - CA:** empty | **Poller endpoint :** IP/DNS du Collecteur Private<br/>**Key file/private_key :** vide<br/>**Certificate file :** vide<br/>**Trusted CA's certificate file/ca_certificate :** chemin du CA<br/>**Certificate Common Name/ca_name :** vide	|
| Certificat autosigné         	 | Fichiers de certificat public et clé privée                         | Fichier de certificat public                       |	**Récepteur OTLP - Certificat public :** chemin du certificat public (ex : '/etc'/pki'/certificate.crt)<br/>**Récepteur OTLP - Clé privée :** chemin de la clé privée (ex : '/etc'/pki'/certificate.key)<br/>**Récepteur OTLP - CA :** vide, sauf besoin d'un double handshake | **Poller endpoint :** IP/DNS du Collecteur **Private Key file/private_key :** vide<br/>Certificate file/public_cert : vide<br/>**Trusted CA's certificate file/ca_certificate :** chemin du certificat public<br/>**Certificate Common Name/ca_name :** vide	|
| Certificat wildcard      | Fichiers wildcard et clé privée                         | Fichier wildcard              | **Récepteur OTLP - Certificat public :** Fichier de certificat wildcard<br/>**Récepteur OTLP - Clé privée :** chemin de la clé privée<br/>**Récepteur OTLP - CA :** vide	 | **Private Key file/private_key :** vide<br/>**Certificate file/public_cert :** vide<br/>**Trusted CA's certificate file/ca_certificate :** chemin du certificat wildcard<br/>**Certificate Common Name/ca_name :** vide							|
| Certificat public (service managé, par ex Collecteur central Centreon Cloud)        | Aucun                        | Aucun                 | **Récepteur OTLP - Certificat public :** vide<br/>**Récepteur OTLP - Clé privée :** vide<br/>**Récepteur OTLP - CA :** vide | **Poller endpoint :** IP/DNS du Load balancer portant le certificat public<br/>**Private Key file/private_key :** vide<br/>**Certificate file/public_cert :** vide<br/>**Trusted CA's certificate file/ca_certificate :** vide<br/>**Certificate Common Name/ca_name :** vide							|
| Certificat public (fichiers de clés)        | Fichiers de certificat public et clé privée                         | Aucun                 | **Récepteur OTLP - Certificat public :** chemin du certificat public (ex : '/etc'/pki'/certificate.crt)<br/>**Récepteur OTLP - Clé privée :** chemin de la clé privée (ex : '/etc'/pki'/certificate.key)<br/>**Récepteur OTLP - CA :** vide | **Poller endpoint :** IP/DNS du Collecteur **Private Key file/private_key :** vide<br/>**Certificate file/public_cert :** vide<br/>**Trusted CA's certificate file/ca_certificate :** vide<br/>**Certificate Common Name/ca_name :** vide							|

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

Le collecteur vérifie, lors de la connexion à l'agent, que l'IP/DNS renseignée pour l'hôte (dans la configuration d'agent) correspond strictement aux informations du certificat (SAN ou CN).
Si ce n'est pas le cas, la connexion vers cet hôte est refusée.

| Cas d'usage      															  | Fichier(s) sur le Collecteur | Fichier(s) sur l'hôte | Configuration du Collecteur (interface) | Configuration de l'hôte    |
| -----------      															  | -----------                  | -----------           |-----------								       | -----------							|
| Certificat signé par CA           	 | Fichier de CA                   | Fichiers de certificat public et clé privée                         | **Configurations d'hôte - CA :** chemin du CA<br/>**Configurations d'hôte - Nom commun CA (CN) :** vide	 | **Private Key file/private_key :** chemin de la clé privée<br/>**Certificate file/public_cert :** chemin du certificat public<br/>**Trusted CA's certificate file/ca_certificate :** vide<br/>**Certificate Common Name/ca_name :** vide	|
| Certificat autosigné           	 | Fichier de certificat public                       | Fichiers de certificat public et clé privée                         | **Configurations d'hôte - CA :** chemin du certificat public<br/>**Configurations d'hôte - Nom commun CA (CN) :** vide	 | **Private Key file/private_key :** chemin de la clé privée<br/>**Certificate file/public_cert :** chemin du certificat public<br/>**Trusted CA's certificate file/ca_certificate :** vide<br/>**Certificate Common Name/ca_name :** vide	|
| Certificat wildcard      | Fichier wildcard                       | Fichiers wildcard et clé privée   | **Configurations d'hôte - CA :** chemin du certificat wildcard<br/>**Configurations d'hôte - Nom commun CA (CN) :** vide									       | **Private Key file/private_key :** chemin de la clé privée<br/>**Certificate file/public_cert :** chemin du certificat wildcard<br/>**Trusted CA's certificate file/ca_certificate :** vide<br/>**Certificate Common Name/ca_name :** vide							|

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
