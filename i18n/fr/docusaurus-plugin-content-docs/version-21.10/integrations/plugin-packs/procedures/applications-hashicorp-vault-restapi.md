---
id: applications-hashicorp-vault-restapi
title: HashiCorp Vault Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

HashiCorp Vault est une solution de stockage sécurisé de données sensibles, tels que des identifiants d'accès aux applications du SI.

Le Plugin Pack Centreon HashiCorp Vault s'appuie sur les APIs Rest fournies par la solution pour collecter les statuts et statistiques
relatifs au fonctionnement de Vault.

## Contenu du Pack

### Objets supervisés

* Instances HashiCorp Vault
    * Health
    * Raft-Storage

### Métriques & statuts collectés 

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Status Name | Description                       |
|:------------|:----------------------------------|
| seal-status | Seal status of the node           |
| init-status | Initialization status of the node |

</TabItem>
<TabItem value="Raft-Storage" label="Raft-Storage">

| Metric Name                                        | Description                                | Unit |
|:---------------------------------------------------|:-------------------------------------------|:-----|
| vault.raftstorage.committime.seconds               | Average time to commit data to the Storage | s    |
| *db_name*#vault.raftstorage.spilltime.seconds      | Average spill time                         | s    |
| *db_name*#vault.raftstorage.rebalance_time.seconds | Average rebalance_time                     | s    |
| *db_name*#vault.raftstorage.write_time.seconds     | Average write time                         | s    |

</TabItem>
</Tabs>

## Prérequis

Un accès à l'API Rest de l'instance Vault doit être possible depuis le collecteur Centreon devant superviser la ressource.
Le compte utilisé pour s'authentifier doit faire partie d'une politique d'accès Vault donnant droits en lecture au *path* `/sys/`.

Il est possible de s'authentifier à l'API en utilisant les méthodes suivantes:
* token (méthode par défaut)
* userpass
* azure
* cert
* github
* ldap
* okta
* radius

Suivant la méthode choisie, les options requises devront être renseignées dans la Macro *EXTRAOPTIONS* de l'hôte. Se réferer à l'aide du Plugin
disponible en ligne de commandes (paramètre ```--help```) pour plus d'informations.
Les options nécessaires à chaque méthode d'authentification sont détaillées dans la documentation officielle de l'éditeur:
https://www.vaultproject.io/api-docs/auth .

## Installation 

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources HashiCorp Vault:

```bash
yum install centreon-plugin-Applications-HashiCorp-Vault-Restapi
```

2. Sur l'interface Integration de Centreon, installer le Pack *HashiCorp Vault Rest API* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Cosmos DB:

```bash
yum install centreon-plugin-Applications-HashiCorp-Vault-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *HashiCorp Vault Rest API*:

```bash
yum install centreon-pack-applications-hashicorp-vault-restapi.noarch
```

3. Sur l'interface Integration de Centreon, installer le Pack *HashiCorp Vault Rest API* depuis la page "Configuration > Plugin Packs > Gestionnaire"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, renseignez l'adresse IP de l'instance HashiCorp Vault dans le champ *Adresse IP/DNS*
et appliquez-lui le Modèle d'Hôte *App-HashiCorp-Vault-Restapi-Custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) doivent être renseignées:

| Mandatory | Nom                | Description                                                        |
|:----------|:-------------------|:-------------------------------------------------------------------|
| X         | VAULTAPIPORT       | Vault API port (default: '8200')                                   |
| X         | VAULTAPIPROTOCOL   | Vault API protocol (default: 'http')                               |
| X         | VAULTAPIVERSION    | Vault API version (default: 'v1')                                  |
| X         | VAULTAPIAUTHMETHOD | The method used to authenticate against the API (default: 'token') |
|           | VAULTTOKEN         | The Vault token used to authenticate (if 'token' method is used)   |
|           | EXTRAOPTIONS       | Associated Resource Group if resource name is used                 |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en
vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_hashicorp_vault_restapi.pl \
    --plugin=apps::hashicorp::vault::restapi::plugin \
    --mode=health \
    --hostname=10.0.0.1 \
    --api-port='8200' \
    --api-proto='http' \
    --auth-method='token' \
    --vault-token='s.1234567890abcd' \
    --critical-seal-status='%{sealed} ne "unsealed"' \ 
    --critical-init-status='%{init} ne "initialized"'
```

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Server vault-cluster-12345abc seal status : unsealed, init status : initialized |
```

La commande ci-dessus vérifie l'état de santé du cluster HashiCorp Vault *10.0.0.1* (```--plugin=apps::hashicorp::vault::restapi::plugin
--mode=health--hostname=1.1.1.1```).
L'API de l'instance est joignable sur le port *8200* en utilisant le protocole *HTTP* (```-api-port='8200' --api-proto='http'```).

L'authenfication à l'API est réalisée en utilisant la méthode *token* et en définissant le token Vault approprié (```--auth-method='token'
--vault-token='s.1234567890abcd'```).

Dans cet exemple, une alarme de type CRITICAL sera déclenchée:
* si le *seal status* de l'instance est différent de 'unsealed' (```--critical-seal-status='%{sealed} ne "unsealed"'```)
* si l'instance renvoie un état différent de 'initialisé' (```--critical-init-status='%{init} ne "initialized"```)

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ```--help```
à la commande:

```bash
/usr/lib/centreon/plugins/centreon_hashicorp_vault_restapi.pl \
    --plugin=apps::hashicorp::vault::restapi::plugin \
    --mode=health \
    --help
```

### Diagnostic des erreurs communes  

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins#http-and-api-checks) des Plugins basés sur HTTP/API.
