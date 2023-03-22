---
id: update-centreon-platform
title: Mise à jour d'une plateforme Centreon 22.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit la procédure de mise à jour de votre plate-forme Centreon
22.10 (c'est-à-dire le passage de 22.10.x à 22.10.y).

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Mise à jour du serveur Centreon Central

### Prérequis

Si vous aviez installé des paquets **debuginfo** (ou **dbgsym** sous Debian), désinstallez-le avant de mettre à jour la plateforme. Vous pourrez les réinstaller après.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf remove \
centreon-collect-debuginfo-22.04.0-13.el8.x86_64 \
centreon-clib-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-extcommands-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-daemon-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbmod-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-core-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbd-debuginfo-22.04.0-13.el8.x86_64
```

</TabItem>
<TabItem value="Centos 7" label="Centos 7">

```shell
yum remove \
centreon-collect-debuginfo-22.04.0-13.el8.x86_64 \
centreon-clib-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-extcommands-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-daemon-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbmod-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-core-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbd-debuginfo-22.04.0-13.el8.x86_64
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt remove 'centreon-*-dbgsym'
```

</TabItem>
</Tabs>

### Mise à jour de la solution Centreon

Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer la procédure de mise à jour.

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
  apt upgrade centreon
  ```

</TabItem>
</Tabs>

Vous devez maintenant finaliser la mise à jour :
  <Tabs groupId="sync">
  <TabItem value="Avec l'assistant d'interface" label="Avec l'assistant d'interface">

1. Connectez-vous à l'interface web Centreon pour démarrer le processus de
mise à jour. Cliquez sur **Next** :

  ![image](../assets/upgrade/web_update_1.png)

2. Cliquez sur **Next** :

  ![image](../assets/upgrade/web_update_2.png)

3. La note de version présente les principaux changements, cliquez sur **Next** :

  ![image](../assets/upgrade/web_update_3.png)

4. Le processus réalise les différentes mises à jour, cliquez sur **Next** :

  ![image](../assets/upgrade/web_update_4.png)

5. Votre serveur Centreon est maintenant à jour, cliquez sur **Finish** pour
accéder à la page de connexion :

  ![image](../assets/upgrade/web_update_5.png)

  > Si le module Centreon BAM est installé, référez-vous à la [documentation associée](../service-mapping/update.md) pour le mettre à jour.

6. Déployez ensuite la configuration du Central depuis l'interface web en
suivant [cette
procédure](../monitoring/monitoring-servers/deploying-a-configuration.md).

</TabItem>
<TabItem value="Avec l'API dédiée" label="Avec l'API dédiée">

1. Connectez-vous au serveur Central via le terminal pour poursuivre le processus de
mise à jour.

  > Vous avez besoin d'un token d'authentification pour accéder à l'endpoint de l'API. Suivez la procédure ci-dessous pour obtenir un token.

  Dans notre cas, nous avons la configuration décrite ci-dessous (vous devez adapter la procédure à votre configuration).

   - adresse : 10.25.XX.XX
   - port : 80
   - version : 22.10
   - identifiant : Admin
   - mot de passe : xxxxx

2. Entrez la requête suivante :

  ```shell
  curl --location --request POST '10.25.XX.XX:80/centreon/api/v22.10/login' \
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

  Voici à quoi ressemble le résultat :

  ```shell
  {"contact":{"id":1,"name":"Admin Centreon","alias":"admin","email":"admin@localhost",  "is_admin":true},"security":{"token":"hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S"}}
  ```

3. Récupérez le numéro du token pour l'utiliser lors de la prochaine requête.

4. Entrez ensuite cette requête :

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

5. Cette requête ne renvoie aucun résultat. Pour vérifier que la mise à jour a bien été appliquée, consultez le numéro de version affiché sur la page de connexion à l'interface web Centreon.

</TabItem>
</Tabs>

Enfin, redémarrez Broker, Engine et Gorgone sur le serveur Central en exécutant la commande suivante :

  ```shell
  systemctl restart cbd centengine gorgoned
  ```

### Réinstaller les paquets **debuginfo** ou **dbgsym** (optionnel)

Si vous aviez désinstallé des paquets **debuginfo** ou **dbgsym** avant la mise à jour, vous pouvez les réinstaller maintenant.

### Mise à jour des extensions

Depuis le menu **Administration > Extensions > Gestionnaire**, mettez à jour
toutes les extensions, en commençant par les suivantes :

- License Manager,
- Gestionnaire de connecteurs de supervision,
- Auto Discovery.

Vous pouvez alors mettre à jour toutes les autres extensions commerciales.

## Mise à jour des Remote Servers

Cette procédure est identique à la mise à jour d'un serveur Centreon Central.

> En fin de mise à jour, la configuration doit être déployée depuis le serveur
> Central.

## Mise à jour des collecteurs

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Videz le cache :

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  dnf update centreon-poller
  ```

</TabItem>
<TabItem value="Centos 7" label="Centos 7">

1. Videz le cache :

  ```shell
  yum clean all --enablerepo=*
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  yum update centreon-poller
  ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

1. Videz le cache :

  ```shell
  apt clean all
  apt update
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  apt upgrade centreon-poller
  ```

</TabItem>
</Tabs>

  > Acceptez les nouvelles clés GPG des dépôts si nécessaire.

3. Déployez la configuration du collecteur depuis l'interface web en suivant [cette
procédure](../monitoring/monitoring-servers/deploying-a-configuration.md), et
en choisissant la méthode **Redémarrer** pour le processus Engine.

4. Redémarrez enfin le service Gorgone s'il est utilisé sur le collecteur :

  ```shell
  systemctl restart centengine gorgoned
  ```
