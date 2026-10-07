---
id: using-packages
title: À partir des paquets (collecteur)
description: "Installer et enregistrer un collecteur à partir des paquets RPM ou DEB"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InstallCommon from '../_install-common.mdx';

Vous devez exécuter la procédure d'installation en tant qu'utilisateur privilégié.

> Lorsque vous exécutez une commande, vérifiez ce qu'elle affiche. En cas de message d'erreur, arrêtez la procédure et corrigez le problème.

<InstallCommon />

<!-- ### Nom du serveur

Si vous souhaitez changer le nom du serveur, utilisez la commande suivante :
```shell
hostnamectl set-hostname new-server-name
```

Remplacez **new-server-name** par le nom de votre choix. Exemple :
```shell
hostnamectl set-hostname poller1
``` -->

### Installer les dépôts

#### Dépendances

<Tabs groupId="sync">
<TabItem value="Alma 9" label="Alma 9">


```shell
dnf install dnf-plugins-core
dnf install epel-release
dnf config-manager --set-enabled crb
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf install -y dnf-plugins-core
dnf install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

Si votre serveur est une instance RHEL dans le cloud, vous devez exécuter la commande suivante :

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

</TabItem>
<TabItem value="Oracle Linux 9" label="Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf config-manager --set-enabled ol9_codeready_builder
```

</TabItem>
<TabItem value="Alma Linux 10" label="Alma Linux 10">

```shell
dnf install dnf-plugins-core -y
dnf config-manager --set-enabled crb
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm
```

</TabItem>
<TabItem value="RHEL Linux 10" label="RHEL Linux 10">

```shell
dnf install dnf-plugins-core -y
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-10-x86_64-rpms
```

Si votre serveur est une instance RHEL dans le cloud, vous devez exécuter la commande suivante :

```shell
dnf config-manager --set-enabled codeready-builder-for-rhel-9-rhui-rpms
```

</TabItem>
<TabItem value="Oracle Linux 10" label="Oracle Linux 10">

```shell
dnf install dnf-plugins-core -y
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm
dnf config-manager --set-enabled ol10_codeready_builder
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl
```

</TabItem>
</Tabs>

#### Dépôt Centreon

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el9/centreon-26.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el10/centreon-26.10.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
echo "deb https://packages.centreon.com/apt-standard/ $(lsb_release -sc)-26.10-stable main" | tee -a /etc/apt/sources.list.d/centreon-26.10-stable.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Importez ensuite la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

</TabItem>
</Tabs>

## Étape 2 : Installer le serveur

Pour installer le moteur de supervision, exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y centreon-poller
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install -y centreon-poller
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt install -y --no-install-recommends centreon-poller
```

</TabItem>
</Tabs>

Pour que les services démarrent automatiquement au démarrage du système, exécutez la
commande suivante :

``` shell
systemctl enable centreon centengine centreontrapd snmptrapd gorgoned
```

Les services de supervision passive peuvent être démarrés :

```shell
systemctl start centreontrapd snmptrapd gorgoned
```

Redémarrez Centreon Engine :

```shell
systemctl restart centengine
```

<!-- ## Étape 3 : Enregistrer le collecteur

Pour transformer le serveur en collecteur et l'enregistrer sur le serveur central ou un serveur distant, exécutez la commande suivante sur le futur collecteur :

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin \
-t poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Exemple :

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t poller -h 192.168.0.1 -n poller-1
```

> Remplacez **\<IP_TARGET_NODE\>** par l'adresse IP du serveur central ou du serveur distant auquel vous voulez rattacher le collecteur (adresse IP vue par le collecteur).

> Si vous devez changer la méthode HTTP ou le port, utilisez le format suivant pour l'option **-h** :
> `HTTPS://<IP_TARGET_NODE>:PORT`

Suivez ensuite les instructions :

1. Saisissez votre mot de passe :

    ``` shell
    please enter the password for 192.168.0.1:
    ```

2. Sélectionnez l'adresse IP si plusieurs interfaces réseau existent :

    ```shell
    Which IP do you want to use as CURRENT NODE IP?
    1) 192.168.0.2
    2) 192.168.0.3
    1
    ```

3. Validez ensuite les informations :

    ``` shell
    Summary of the information that will be sent:
    
    API connection:
    username: admin
    password: ******
    target server: 192.168.0.1
    
    Pending Registration Server:
    name: poller-1
    type: poller
    address: 192.168.0.2
    
    Do you want to register this server with the previous information? (y/n)y
    ```

Vous recevrez la validation du serveur central Centreon ou du serveur distant :

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'poller': 'poller-1@192.168.0.2' linked to TARGET NODE: '192.168.0.1' has been added
```

### Principaux messages d'erreur

``` shell
2023-05-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Vos informations d'identification sont incorrectes pour le compte **\<API_ACCOUNT\>**.

``` shell
2023-05-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> L'utilisateur **\<API_ACCOUNT\>** n'a pas accès à l'API de configuration.

``` shell
Couldn't connect to 192.168.0.1:444; Connection refused
```

> Impossible d'accéder à l'API. Contrôlez les valeurs **\<IP_TARGET_NODE\>**, la méthode et le port.

``` shell
2023-05-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> L'URL d'accès n'est pas complète ou n'est pas valide. Utilisez l'option **--root** pour définir le chemin de l'URL de l'API. Par exemple : **--root monitoring**.

``` shell
2023-05-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur cible n'est pas valide. Elle doit être supérieure ou égale à 26.10. -->

## Étape 3 : Rattacher le collecteur à un serveur central ou distant

Rendez-vous au chapitre [Rattacher un collecteur à un serveur central ou distant](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Étape 4 : Sécuriser votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../../administration/secure-platform.md).
