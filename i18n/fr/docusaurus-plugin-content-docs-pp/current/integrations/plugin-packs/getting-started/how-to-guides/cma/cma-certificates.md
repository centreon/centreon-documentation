---
id: cma-certificates
title: Centreon Monitoring Agent certificates configuration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gestion des certificats

## TLS Full

### Principe de fonctionnement

La connexion TLS Full (1.3) est négociée par le client (collecteur ou agent selon le sens), et nécessite des certificats.
Selon le sens de connexion, l'agent/le collecteur vérifie que l'IP/DNS utilisée pour atteindre le serveur correspond strictement aux informations du certificat.
Si ce n'est pas le cas, la connexion est refusée.
La vérification est faite sur le bloc alt_names du certificat, qui peut contenir plusieurs DNS, IP ou CN.


### Fichiers de certificat

Les formats supportés sont : 
- .crt/.cer : fichier de certificat public, CA ou wildcard
- .key : fichier de clé privée

Les fichiers de certificat déposés sur le collecteur doivent être déposés dans /etc/pki/, à la racine ou dans un sous-repértoire.
Ils doivent avoir les permissions suivantes : 
```
chmod 644 /etc/pki/agent*
```

Les fichiers de certificat déposés sur l'hôte peuvent être déposés dans un répertoire libre. 
Ils doivent avoir les permissions suivantes : TODO
Ces fichiers peuvent également être directement enregistrés dans le magasin de certificats.
Dans ce cas, il n'est pas nécessaire de les renseigner dans la configuration faite sur l'hôte (colonne "Configuration de l'hôte" du tableau précédent).


### Synthèse des configurations possibles

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

L'agent vérifie, lors de la connexion au collecteur, que l'IP/DNS renseignée dans "Poller endpoint" correspond strictement aux informations du certificat (SAN ou CN).
Si ce n'est pas le cas, la connexion est refusée.

| Cas d'usage      															  | Fichier(s) sur le collecteur | Fichier(s) sur l'hôte (si non chargés dans le magasin de certificats) | Configuration du Collecteur (interface) | Configuration de l'hôte    |
| -----------      															  | -----------                  | -----------           |-----------							   | -----------				|
| Certificat signé par CA           	 | Fichiers de certificat public et clé privée                         | Fichier de certificat public                       |	Récepteur OTLP - Certificat public : chemin du certificat public (ex : '/etc'/pki'/certificate.crt)<br/>Récepteur OTLP - Clé privée : chemin de la clé privée (ex : '/etc'/pki'/certificate.key) Récepteur OTLP - CA : vide | Poller endpoint : IP/DNS du Collecteur Private Key file/private_key : vide Certificate file : vide Trusted CA's certificate file/ca_certificate : chemin du certificat public  Certificate Common Name/ca_name : vide	|
| Certificat autosigné         	 | Fichiers de certificat public et clé privée                         | Fichier de certificat public                       |	Récepteur OTLP - Certificat public : chemin du certificat public (ex : '/etc'/pki'/certificate.crt) Récepteur OTLP - Clé privée : chemin de la clé privée (ex : '/etc'/pki'/certificate.key) Récepteur OTLP - CA : vide, sauf besoin d'un double handshake | Poller endpoint : IP/DNS du Collecteur Private Key file/private_key : vide Certificate file/public_cert : vide Trusted CA's certificate file/ca_certificate : chemin du certificat public  Certificate Common Name/ca_name : vide	|
| Certificat wildcard      | Fichiers wildcard et clé privée                         | Fichier wildcard              | Récepteur OTLP - Certificat public : obligatoire (sauf si ajouté dans les chaines de certification de l'hôte).Il s'agira du fichier de certificat wildcard Récepteur OTLP - Clé privée : chemin de la clé privée Récepteur OTLP - CA : vide	 | Private Key file/private_key : vide Certificate file/public_cert : vide Trusted CA's certificate file/ca_certificate : chemin du certificat wildcard  Certificate Common Name/ca_name : vide							|
| Certificat public (service managé, par ex Collecteur central Centreon Cloud)        | Aucun                        | Aucun                 | Récepteur OTLP - Certificat public : vide Récepteur OTLP - Clé privée : vide Récepteur OTLP - CA : vide | Poller endpoint : IP/DNS du Load balancer portant le certificat public Private Key file/private_key : vide Certificate file/public_cert : vide Trusted CA's certificate file/ca_certificate : vide Certificate Common Name/ca_name : vide							|
| Certificat public (fichiers de clés)        | Fichiers de certificat public et clé privée                         | Aucun                 | Récepteur OTLP - Certificat public : chemin du certificat public (ex : '/etc'/pki'/certificate.crt) Récepteur OTLP - Clé privée : chemin de la clé privée (ex : '/etc'/pki'/certificate.key) Récepteur OTLP - CA : vide | Poller endpoint : IP/DNS du Collecteur Private Key file/private_key : vide Certificate file/public_cert : vide Trusted CA's certificate file/ca_certificate : vide Certificate Common Name/ca_name : vide							|


</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">
Le collecteur vérifie, lors de la connexion à l'agent, que l'IP/DNS renseignée pour l'hôte (dans la configuration d'agent) correspond strictement aux informations du certificat (SAN ou CN).
Si ce n'est pas le cas, la connexion vers cet hôte est refusée.

| Cas d'usage      															  | Fichier(s) sur le Collecteur | Fichier(s) sur l'hôte | Configuration du Collecteur (interface) | Configuration de l'hôte    |
| -----------      															  | -----------                  | -----------           |-----------								       | -----------							|
| Certificat signé par CA           	 | A confirmer que utile : fichier de certificat public                       | Fichiers de certificat public et clé privée                         | Configurations d'hôte - CA : vide Configurations d'hôte - Nom commun CA (CN) : vide	 | Private Key file/private_key : chemin de la clé privée Certificate file/public_cert : chemin du certificat public  Trusted CA's certificate file/ca_certificate : vide Certificate Common Name/ca_name : vide	|
| Certificat autosigné           	 | A confirmer que utile : fichier de certificat public                       | Fichiers de certificat public et clé privée                         | Configurations d'hôte - CA : obligatoire (sauf si ajouté dans les chaines de certification de l'hôte).Il s'agira du fichier de certificat public Configurations d'hôte - Nom commun CA (CN) : vide	 | Private Key file/private_key : chemin de la clé privée Certificate file/public_cert : chemin du certificat public  Trusted CA's certificate file/ca_certificate : vide Certificate Common Name/ca_name : vide	|
| Certificat wildcard      | Fichier wildcard                       | Fichiers wildcard et clé privée   | Configurations d'hôte - CA : obligatoire (sauf si ajouté dans les chaines de certification de l'hôte).Il s'agira du fichier de certificat wildcard Configurations d'hôte - Nom commun CA (CN) : vide									       | Private Key file/private_key : chemin de la clé privée Certificate file/public_cert : chemin du certificat wildcard  Trusted CA's certificate file/ca_certificate : vide Certificate Common Name/ca_name : vide							|
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
\{server_hostname\} doit correspondre au DNS/IP utilisé dans "Poller endpoint" (Installer) / "endpoint" (json), dans la configuration d'Agent, sur l'hôte.
</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">
\{server_hostname\} doit correspondre au DNS/IP utilisé dans le champ "Configurations d'hôte - Hôte" de la configuration d'Agent, dans l'interface.

</TabItem>
</Tabs>

## Mode test : communication non chiffrée

Vous pouvez configurer une connexion non chiffrée **à des fins de test uniquement**. Dans ce mode, vous n'avez besoin d'aucun certificat ou jeton.

> Notez que cette connexion ne durera qu'une heure. N'utilisez pas ce paramètre en production !

Pour configurer ce mode, sélectionnez **No TLS** dans la liste **Niveau de chiffrement** de la fenêtre [**Configuration collecteur/agent**](#configurez-la-communication-collecteuragent).

L'agent sera configuré de la manière suivante sur l'hôte :
- [pour Windows, en utilisant l'option correspondante dans le programme d'installation ou la CLI](#étape-2--préparez-lhôte)
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
