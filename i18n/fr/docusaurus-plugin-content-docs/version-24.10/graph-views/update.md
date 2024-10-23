---
id: update
title: Mettre à jour l'extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit comment mettre à jour votre extension Centreon MAP. Pour ce faire, vous devez mettre à jour les trois principaux composants :

- le serveur Centreon MAP
- l'interface web Centreon MAP et son widget
- le client lourd (mis à jour automatiquement).

Avant de mettre à jour le serveur Centreon MAP, nous vous recommandons vivement d'effectuer un dump (sauvegarde) de votre base de données `centreon_studio`.
Cela vous permettra de revenir facilement à l'état précédent si nécessaire.

N'oubliez pas de lire les notes de release pour une explication des fonctionnalités, des corrections et des procédures personnalisées.

## Serveur Centreon MAP

Exécutez les commandes suivantes pour mettre à niveau votre serveur Centreon MAP (Legacy) :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
systemctl stop centreon-map
dnf update centreon-map-server
systemctl start centreon-map
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
systemctl stop centreon-map
dnf update centreon-map-server
systemctl start centreon-map
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

``` shell
systemctl stop centreon-map
apt update && apt install --only-upgrade centreon-map-server
systemctl start centreon-map
```

</TabItem>
</Tabs>

Ce point ne s'applique que si vous avez personnalisé votre fichier de configuration **centreon-map.conf**.
Lors de la mise à jour de votre module MAP, le fichier **/etc/centreon-studio/centreon-map.conf** n'est pas mis à niveau automatiquement : le nouveau fichier de configuration apporté par le rpm ne remplace pas l'ancien fichier.
Vous devez copier les modifications manuellement dans votre fichier de configuration personnalisé.

* L'ancien fichier de configuration est renommé **centreon-map.conf.rpmsave**.
* La mise à niveau installe un nouveau fichier **centreon-map.conf**.

Exécutez un diff entre l'ancien et le nouveau fichier de configuration :

```shell
diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
```

Pour chaque différence entre les fichiers, évaluez si vous devez la copier de **centreon-map.conf.rpmsave** vers **centreon-map.conf**.

## Interface web de Centreon MAP

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-map-web-client
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt update && apt install --only-upgrade centreon-map-web-client
```

</TabItem>
</Tabs>

Terminez la mise à niveau en allant dans **Administration > Extensions > Gestionnaire** (parties module et widget).

## Client lourd Centreon MAP

Si l'ordinateur de l'utilisateur dispose d'une connexion internet, le client de bureau est automatiquement mis à jour à la dernière version correspondant au serveur.

Sinon, le client peut être téléchargé via le menu **Supervision > MAP** et le bouton **Client de bureau**.
