---
id: update-centreon-platform
title: Mise à jour d'une plateforme Centreon 22.04
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit la procédure de mise à jour de votre plate-forme Centreon
22.04 (c'est-à-dire le passage de 22.04.x à 22.04.y).

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Mise à jour du serveur Centreon Central

### Mise à jour de la solution Centreon

> Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer
> la procédure de mise à jour.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Videz le cache :

```shell
dnf clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
dnf update centreon\*
```

</TabItem>
<TabItem value="Centos 7" label="Centos 7">

Videz le cache :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Videz le cache :

```shell
apt clean all
apt update
```

Mettez à jour l'ensemble des composants :

```shell
apt install centreon\*
```

</TabItem>
</Tabs>

> Vous pouvez maintenant procéder à la mise à jour en utilisant :
> - [L'assistant d'interface](#finalisation-de-la-mise-à-jour-avec-lassistant-dinterface)
> - [L'API](#finalisation-de-la-mise-à-jour-avec-lapi)

#### Finalisation de la mise à jour avec l'assistant d'interface

Connectez-vous à l'interface web Centreon pour démarrer le processus de
mise à jour :

Cliquez sur **Next** :

![image](../assets/upgrade/web_update_1.png)

Cliquez sur **Next** :

![image](../assets/upgrade/web_update_2.png)

La note de version présente les principaux changements, cliquez sur **Next** :

![image](../assets/upgrade/web_update_3.png)

Le processus réalise les différentes mises à jour, cliquez sur **Next** :

![image](../assets/upgrade/web_update_4.png)

Votre serveur Centreon est maintenant à jour, cliquez sur **Finish** pour
accéder à la page de connexion :

![image](../assets/upgrade/web_update_5.png)

> Si le module Centreon BAM est installé, référez-vous à la [documentation
> associée](../service-mapping/update.md) pour le mettre à jour.

Déployez ensuite la configuration du Central depuis l'interface web en
suivant [cette
procédure](../monitoring/monitoring-servers/deploying-a-configuration.md),

Enfin, redémarrez Broker, Engine et Gorgone sur le serveur Central en exécutant
la commande suivante:

```shell
systemctl restart cbd centengine gorgoned
```

Vous pouvez maintenant passer à cette [étape](#mise-à-jour-des-extensions).

#### Finalisation de la mise à jour avec l'API

Connectez-vous au serveur Central via le terminal pour poursuivre le processus de
mise à jour.

Vous avez besoin d'un token d'authentification pour accéder au endpoint de l'API. Suivez cette procédure pour obtenir un numéro de token.

> Note : dans notre cas, nous avons la configuration décrite ci-dessous (vous devez adapter la procédure à votre configuration).

- adresse : 10.25.XX.XX
- port : 80
- version : 22.04
- identifiant : Admin
- mot de passe : xxxxx

Entrez la requête suivante :

```shell
curl --location --request POST '10.25.XX.XX:80/centreon/api/v22.04/login' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '{
  "security": {
    "credentials": {
      "login": "Admin",
      "password": "xxxxx"
    }
  }
}'
```

Voici ce à quoi le résultat ressemble :

```shell
{"contact":{"id":1,"name":"Admin Centreon","alias":"admin","email":"admin@localhost","is_admin":true},"security":{"token":"hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S"}}
```

Récupérez le numéro du token pour l'utiliser lors de la prochaine requête.

Entrez ensuite cette requête :

```shell
curl --location --request PATCH 'http://10.25.XX.XX:80/centreon/api/latest/platform/updates' \
--header 'X-AUTH-TOKEN: hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S' \
--header 'Content-Type: application/json' \
--data '{
    "components": [
        {
            "name": "centreon-web"
        }
    ]
}'
```

> Cette requête ne renvoie aucun résultat. Pour vérifier que la mise à jour a bien été appliquée, consultez le numéro de version affiché sur la page de connexion de l'interface web Centreon.

### Mise à jour des extensions

Depuis le menu **Administration > Extensions > Gestionnaire**, mettez à jour
toutes les extensions, en commençant par les suivantes :

- License Manager,
- Plugin Packs Manager,
- Auto Discovery.

Vous pouvez alors mettre à jour toutes les autres extensions commerciales.

## Mise à jour des Remote Servers

Cette procédure est identique à la mise à jour d'un serveur Centreon Central.

> En fin de mise à jour, la configuration doit être déployée depuis le serveur
> Central.

## Mise à jour des collecteurs

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

Déployez la configuration du collecteur depuis l'interface web en suivant [cette
procédure](../monitoring/monitoring-servers/deploying-a-configuration.md), et
en choisissant la méthode **Redémarrer** pour le processus Engine.

Redémarrez enfin le service Gorgone s'il est utilisé sur le collecteur :

```shell
systemctl restart centengine gorgoned
```
