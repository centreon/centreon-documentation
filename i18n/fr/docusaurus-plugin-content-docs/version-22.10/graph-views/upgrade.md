---
id: upgrade
title: Montée de version de l'extension
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit comment monter de version votre extension Centreon MAP. Pour ce faire, vous devez mettre à niveau les quatre principaux composants :

- le serveur Centreon MAP
- l'interface web Centreon MAP et son widget
- le client lourd (mis à jour automatiquement)
- la base de données MariaDB.

## Prérequis

Avant de mettre à jour le serveur MAP de Centreon, nous vous recommandons vivement d'effectuer un dump (sauvegarde) de votre base de données `centreon_studio`.
Cela vous permettra de revenir facilement à l'état précédent si nécessaire.

Assurez-vous de lire les notes de version pour une explication des fonctionnalités, des corrections et des procédures personnalisées.

**Lorsque vous effectuez une mise à jour vers une nouvelle version majeure ou mineure (c'est-à-dire : A.B.x avec A ou B qui change), vous devez contacter notre service d'assistance pour récupérer le nouveau dépôt**.

### Mise à jour de la clé de signature du RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPM Centreon sont régulièrement renouvelées. Le dernier changement a eu lieu le 14 octobre 2021.
Lorsque vous effectuez une mise à jour à partir d'une ancienne version, vous devez passer par la [procédure de rotation des clés](../security/key-rotation.md#existing-installation), pour supprimer l'ancienne clé et installer la nouvelle.

## Étape 1 : serveur Centreon MAP

> Si vous utilisez toujours la version **4.0.X**, vous **devez d'abord installer et exécuter le serveur dans la version 4.1.X avant de passer à la dernière version**.

### Prérequis de la version Java
  > Assurez-vous qu'une version de Java 17 (ou 18) est installée avant de commencer la procédure.
  
  - Pour vérifier quelle version de Java est installée, entrez la commande suivante :
  
  ```shell
  java -version
  ```
  
  - Pour une mise à jour de Java en version 17 (ou 18), allez sur la [page officielle de téléchargement d'Oracle](https://www.oracle.com/java/technologies/downloads/#java17).

  - Si plusieurs versions de Java sont installées, vous devez activer la bonne version. Affichez les versions installées avec la commande suivante puis sélectionnez la version 17 (ou 18) :
  ```shell
  sudo update-alternatives --config java
  ```
  
  Puis redémarrez le service :
  ```shell
  systemctl restart centreon-map
  ```

  - Si vous souhaitez configurer votre plateforme en HTTPS, vous aurez besoin de générer un fichier keystore pour la version 17 de Java (ou 18) ([voir procédure](./secure-your-map-platform.md#configuration-httpstls-avec-une-clé-auto-signée)).

### Procédure

Exécutez les commandes suivantes pour mettre à niveau votre serveur Centreon MAP :

1. Mettez à jour les dépôts Centreon et Centreon MAP :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el8/centreon-22.10.repo
```

> Installez le dépôt Centreon Business, vous pouvez le trouver sur le [portail du support](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

2. Mettez à jour le serveur Centreon MAP (Legacy) :

    ```shell
    dnf update centreon-map-server
    ```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el7/centreon-22.10.repo
```

> Installez le dépôt Centreon Business, vous pouvez le trouver sur le [portail du support](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

2. Mettez à jour le serveur Centreon MAP (Legacy) :

    ```shell
    yum update centreon-map-server
    ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://packages.centreon.com/apt-standard-22.10-stable $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

> Installez le dépôt Centreon Business, vous pouvez le trouver sur le [portail du support](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

2. Mettez à jour le serveur Centreon MAP (Legacy) :

    ```shell
    apt update && apt upgrade centreon-map-server
    ```

</TabItem>
</Tabs>

3. Activez et démarrez le service **centreon-map** :

    ```shell
    systemctl enable centreon-map
    systemctl start centreon-map
    ```

4. Ce point ne s'applique que si vous avez personnalisé votre fichier de configuration **centreon-map.conf**.
Lors de la mise à jour de votre module MAP, le fichier **/etc/centreon-studio/centreon-map.conf** n'est pas mis à jour automatiquement : le nouveau fichier de configuration apporté par le rpm ne remplace pas l'ancien fichier.
Vous devez copier les modifications manuellement dans votre fichier de configuration personnalisé.

  * L'ancien fichier de configuration est renommé **centreon-map.conf.rpmsave**.
  * La mise à jour installe un nouveau fichier **centreon-map.conf**.

  Lancez une comparaison entre l'ancien fichier de configuration et le nouveau :

  ```shell
  diff -u /etc/centreon-studio/centreon-map.conf /etc/centreon-studio/centreon-map.conf.rpmsave
  ```

  Pour chaque différence entre les fichiers, évaluez si vous devez la copier de **centreon-map.conf.rpmsave** vers **centreon-map.conf**.

## Étape 2 : interface web Centreon MAP

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-map-web-client
```
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade centreon-map-web-client
```

</TabItem>
</Tabs>

Terminez la montée de version :

1. Allez dans **Administration > Extensions > Gestionnaire**.
2. Recherchez **Map web client**.
3. Cliquez sur le bouton de mise à jour (parties module & widget).

## Étape 3 : client lourd Centreon MAP

Si l'ordinateur de l'utilisateur dispose d'une connexion internet, le client lourd est automatiquement mis à jour vers la dernière version correspondant au serveur.

Sinon, le client peut être téléchargé via le menu **Supervision > MAP** et le bouton **client lourd**.

## Étape 4 : mise à jour des dialectes dans les fichiers .properties

Dans les fichiers **/etc/centreon-studio/centreon-database.properties** et **/etc/centreon-studio/studio-database.properties**, remplacez  **MySQL5Dialect** par **MariaDB10Dialect**.

> Cette configuration fonctionne également avec une base MySQL.

## Étape 5 : base de données MariaDB

> Les erreurs de modification des fichiers de configuration peuvent entraîner des dysfonctionnements du logiciel. Nous vous recommandons de faire une sauvegarde du fichier avant de le modifier et de ne changer que les paramètres conseillés par Centreon.

1. Arrêtez le service **centreon-map** :

    ```shell
    systemctl stop centreon-map
    ```

2. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md).

3. Si vous avez mis à niveau votre plateforme Centreon vers la version 22.10, le nouveau protocole BBDO v3 est activé.
Vous devez modifier le fichier suivant pour permettre à MAP de fonctionner correctement : `/etc/centreon-studio/studio-config.properties`.

   ```text
   broker.pb.message.enabled=true
   ```

4. Démarrez le service **centreon-map** :

    ```shell
    systemctl start centreon-map
    ```
