---
id: cma-certificates
title: Configurer les certificats
description: "Configurer les connexions TLS, TLS non sécurisé et non chiffrées de test entre l'agent de supervision Centreon et le collecteur"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## TLS

### Principe de fonctionnement

La connexion TLS (1.3) est négociée par le client (collecteur ou agent selon le sens), et nécessite des certificats.
Selon le sens de connexion, l'agent/le collecteur vérifie que l'IP/DNS utilisée pour atteindre le serveur correspond strictement aux informations du certificat.
Si ce n'est pas le cas, la connexion est refusée.
La vérification est faite sur les blocs **subject** et **alt_names** du certificat, qui peuvent contenir plusieurs DNS, IP ou CN.

### Fichiers de certificat

Les formats supportés sont :

- fichier de certificat public, CA ou wildcard : .crt/.cert/.cer
- fichier de clé privée : .key

Les fichiers de certificat déposés sur le collecteur peuvent être placés dans n'importe quel répertoire (sauf les répertoires interdits).

#### Répertoires interdits

```shell
/tmp 
/root 
/proc 
/mnt 
/run 
/snap 
/sys 
/boot 
/etc (seul /etc/pki/** est autorisé)
/.*
```

#### Permissions

Les fichiers de certificat doivent avoir les permissions suivantes :

```shell
chmod 644 /chemin/vers/le/certificat/agent.crt
chmod 644 /chemin/vers/le/certificat/agent.key
```

> Attention, ne pas appliquer ces droits à l'ensemble du répertoire /etc/pki/ au risque de provoquer une panne globale du collecteur.

Les fichiers de certificat déposés sur l'hôte peuvent être déposés dans le répertoire de votre choix.

Ces fichiers peuvent également être directement enregistrés dans le magasin de certificats (connexion initiée par l'agent).
Dans ce cas, il n'est pas nécessaire de les renseigner dans la configuration faite sur l'hôte (colonne "Configuration de l'hôte" du tableau ci-dessous).

> **Magasin de certificats Windows** : sous Windows, CMA lit les certificats CA depuis le magasin de certificats Windows **Ordinateur local** (Local Computer). Il s'agit du magasin de confiance standard à l'échelle du système, accessible en lecture par tous les processus de la machine, mais qui nécessite des privilèges d'administrateur pour y écrire. L'emplacement correct pour les certificats de CA racine et intermédiaires est : **Ordinateur local > Autorités de certification racines de confiance** (Local Computer > Trusted Root Certification Authorities).

### Synthèse des configurations possibles

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

L'agent vérifie, lors de la connexion au collecteur, que l'IP/DNS renseignée dans le paramètre **Poller endpoint** de la configuration de l'agent correspond strictement aux informations du certificat (SAN ou CN).
Si ce n'est pas le cas, la connexion est refusée.

| Cas d'usage      															  | Fichier(s) sur le collecteur | Fichier(s) sur l'hôte (si non chargés dans le magasin de certificats) | Configuration du Collecteur (interface) | Configuration de la machine hôte    |
| -----------      															  | -----------                  | -----------           |-----------							   | -----------				|
| Certificat signé par CA           	 | Fichiers de certificat public et clé privée                         | Fichier de CA                       |	Dans la section **Récepteur OTLP** :<ul><li>**Certificat public** : chemin du certificat public (ex : '/etc'/pki'/certificate.crt)</li><li>**Clé privée** : chemin de la clé privée (ex : '/etc'/pki'/certificate.key)</li><li>**CA** : vide</li></ul> | <ul><li>**Poller endpoint** : IP/DNS du Collecteur</li><li>**Private Key file/private_key**: vide</li><li>**Certificate file** : vide</li><li>**Trusted CA's certificate file/ca_certificate** : chemin du CA</li></ul>	|
| Certificat autosigné         	 | Fichiers de certificat public et clé privée                         | Fichier de certificat public                       |	Dans la section **Récepteur OTLP** :<ul><li>**Certificat public** : chemin du certificat public (ex : '/etc'/pki'/certificate.crt)</li><li>**Clé privée** : chemin de la clé privée (ex : '/etc'/pki'/certificate.key)</li><li>**CA** : vide, sauf besoin d'un double handshake</li></ul> | <ul><li>**Poller endpoint** : IP/DNS du Collecteur</li><li>**Private Key file/private_key** : vide</li><li>**Certificate file/public_cert** : vide</li><li>**Trusted CA's certificate file/ca_certificate** : chemin du certificat public</li></ul>	|
| Certificat wildcard      | Fichiers wildcard et clé privée                         | Fichier wildcard              | Dans la section **Récepteur OTLP** :<ul><li>**Certificat public** : Fichier de certificat wildcard</li><li>**Clé privée** : chemin de la clé privée</li><li>**CA** : vide</li></ul>	 | <ul><li>**Private Key file/private_key** : vide</li><li>**Certificate file/public_cert** : vide</li><li>**Trusted CA's certificate file/ca_certificate** : chemin du certificat wildcard</li></ul>							|
| Certificat public (service managé, par ex Collecteur central Centreon Cloud)        | Aucun                        | Aucun                 | Dans la section **Récepteur OTLP** :<ul><li>**Certificat public** : vide</li><li>**Clé privée** : vide</li><li>**CA**: vide</li></ul> | <ul><li>**Poller endpoint** : IP/DNS du load balancer portant le certificat public</li><li>**Private Key file/private_key** : vide</li><li>**Certificate file/public_cert** : vide</li><li>**Trusted CA's certificate file/ca_certificate** : vide</li></ul>							|
| Certificat public (fichiers de clés)        | Fichiers de certificat public et clé privée                         | Aucun                 | Dans la section **Récepteur OTLP** :<ul><li>**Certificat public** : chemin du certificat public (ex : '/etc'/pki'/certificate.crt)</li><li>**Clé privée** : chemin de la clé privée (ex : '/etc'/pki'/certificate.key)</li><li>**CA** : vide</li></ul> | <ul><li>**Poller endpoint** : IP/DNS du collecteur</li><li>**Private Key file/private_key** : vide</li><li>**Certificate file/public_cert** : vide</li><li>**Trusted CA's certificate file/ca_certificate** : vide</li></ul>							|

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

Le collecteur vérifie, lors de la connexion à l'agent, que l'IP/DNS renseignée pour l'hôte (dans la configuration d'agent) correspond strictement aux informations du certificat (SAN ou CN).
Si ce n'est pas le cas, la connexion vers cet hôte est refusée.

| Cas d'usage      															  | Fichier(s) sur le Collecteur | Fichier(s) sur l'hôte | Configuration du Collecteur (interface) | Configuration de la machine hôte    |
| -----------      															  | -----------                  | -----------           |-----------								       | -----------							|
| Certificat signé par CA           	 | Fichier de CA                   | Fichiers de certificat public et clé privée                         | Dans la section **Configurations d'hôte** :<ul><li>**CA** : chemin du CA</li></ul>	 | <ul><li>**Private Key file/private_key** : chemin de la clé privée</li><li>**Certificate file/public_cert** : chemin du certificat public</li><li>**Trusted CA's certificate file/ca_certificate** : vide</li></ul>	|
| Certificat autosigné           	 | Fichier de certificat public                       | Fichiers de certificat public et clé privée                         | Dans la section **Configurations d'hôte** :<ul><li>**CA** : chemin du certificat public</li></ul>	 | <ul><li>**Private Key file/private_key** : chemin de la clé privée</li><li>**Certificate file/public_cert** : chemin du certificat public</li><li>**Trusted CA's certificate file/ca_certificate** : vide</li></ul>	|
| Certificat wildcard      | Fichier wildcard                       | Fichiers wildcard et clé privée   | Dans la section **Configurations d'hôte** :<ul><li>**CA** : chemin du certificat wildcard</li></ul>							       | <ul><li>**Private Key file/private_key** : chemin de la clé privée</li><li>**Certificate file/public_cert** : chemin du certificat wildcard</li><li>**Trusted CA's certificate file/ca_certificate** : vide</li></ul>						|

</TabItem>
</Tabs>

## TLS non sécurisé

### Principe de fonctionnement

Certaines configuration nécessitent un assouplissement de la manière dont la connexion est établie.

En TLS, le client (l'agent/le collecteur) vérifie que l'IP/DNS utilisée pour atteindre le serveur correspond strictement aux informations du certificat.
Si ce n'est pas le cas, la connexion est refusée.
La vérification est faite sur le bloc **alt_names** du certificat, qui peut contenir plusieurs DNS, IP ou CN.

Il peut parfois être nécessaire d'accepter la connexion, y compris lorsque cette correspondance n'est pas vérifiée.

Par exemple, dans le cas d'un MSP, qui mutualise des collecteurs pour ses clients.
Les hôtes, au sein du parc client, ne connaissent pas les DNS des collecteurs, et doivent utiliser l'IP, qui ne correspondra pas nécessairement aux informations du certificat.
Cela fait particulièrement sens dans le cas où le même certificat doit être utilisé sur plusieurs collecteurs, et que des restrictions de sécurité ne permettent pas l'usage d'un wildcard.

Le mode de chiffrement TLS non sécurisé répond à ce cas d'usage.

En TLS non sécurisé, le client (l'agent/le collecteur) vérifie d'abord le champ "Nom commun CA" du client.
* Si le champ "Nom commun CA" est renseigné, sa valeur est comparée avec les informations du certificat, qui doivent correspondre strictement.
* Si le champ "Nom commun CA" est vide, la vérification est basée sur l'IP/DNS utilisée pour atteindre le serveur, comme pour le mode TLS.

Si aucune correspondance n'est trouvée, la connexion est refusée.
La vérification est faite sur les blocs **subject** et **alt_names** du certificat, qui peuvent contenir plusieurs DNS, IP ou CN.


### Fichiers de certificat

Voir [section dédiée pour TLS](#fichiers-de-certificat), les prérequis sont identiques.

### Synthèse des configurations possibles

La configuration est similaire à [celle indiquée pour TLS](#synthèse-des-configurations-possibles).

La différence se situe dans l'usage du champ "Nom commun CA", côté client.

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

Le champ **Certificate Common Name/ca_name** contiendra la valeur (DNS, IP ou CN) renseignée dans le certificat.

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

Dans la section **Configurations d'hôte**, le champ **Nom commun CA (CN)** contiendra la valeur (DNS, IP ou CN) renseignée dans le certificat.

</TabItem>
</Tabs>

## Comment générer un certificat autosigné (facultatif)

Si vous ne possédez pas de certificat, il est possible de générer un certificat autosigné, qui pourra être utilisé par l'ensemble de vos collecteurs et agents.
Pour générer un certificat autosigné valide un an, exécutez la commande suivante sur votre collecteur ou votre hôte :

```shell
openssl req -new -subj '/CN={server_hostname}' \
                 -addext "subjectAltName = DNS:{alt_server_DNS}, IP:{alt_server_IP}" \
                 -days 365 -nodes -x509 \
                 -newkey rsa:2048 -keyout {key} -out {cert}
```

- \{key\} = chemin du fichier clé privée
- \{cert\} = chemin du fichier de certificat public
- \{server_hostname\} = nom DNS du serveur et/ou utiliser \{alt_poller_DNS\} et/ou utiliser \{alt_poller_IP\}
Dans le mode de chiffrement TLS, le DNS/IP du serveur utilisé par le client doit obligatoirement correspondre à une entrée CN ou SAN (altName) du certificat (\{server_hostname\}).
La ligne -subj '/CN=\{server_hostname\}' \ est facultative si des SAN sont définis.
Dans le mode de chiffrement TLS non sécurisé, le DNS/IP du serveur peut être différent des informations du certificat. Il faudra alors renseigner la valeur à utiliser dans "Nom commun CA", au sein de la configuration du client.

Les fichiers de certificat déposés sur le collecteur doivent être déposés dans **/etc/pki/**, à la racine ou dans un sous-repertoire.
Ils doivent avoir les permissions suivantes :

```shell
chmod 644 /etc/pki/agent.crt
chmod 644 /etc/pki/agent.key
```
> Attention, ne pas appliquer ces droits à l'ensemble du répertoire /etc/pki/ au risque de provoquer une panne globale du collecteur.

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

**\{server_hostname\}** doit correspondre au DNS/IP utilisé dans **Poller endpoint"** (installer) / **endpoint** (json), dans la configuration d'agent, sur l'hôte.

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

**\{server_hostname\}** doit correspondre au DNS/IP utilisé dans le champ **Configurations d'hôte > Hôte** de la configuration d'agent, dans l'interface.

</TabItem>
</Tabs>

## Mode test : communication non chiffrée

Vous pouvez configurer une connexion non chiffrée **à des fins de test uniquement**. Dans ce mode, vous n'avez besoin d'aucun certificat mais un jeton reste obligatoire.

> Notez que cette connexion ne durera qu'une heure. N'utilisez pas ce paramètre en production !

Pour configurer ce mode, sélectionnez **No TLS** dans la liste **Niveau de chiffrement** de la fenêtre [**Configuration collecteur/agent**](cma-setup.md#configurez-la-communication-collecteuragent).

L'agent sera configuré de la manière suivante sur l'hôte :
- [pour Windows, en utilisant l'option correspondante dans le programme d'installation ou la CLI](cma-setup.md#étape-3--préparez-lhôte)
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
