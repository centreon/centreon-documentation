---
id: developer-gorgone-rebound-mode
title : Configurer Gorgone en mode rebound
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette procédure décrit comment configurer Gorgone entre un collecteur distant et un serveur central, via un serveur de rebond.

> Note : notre exemple utilise la configuration décrite ci-dessous (vous devez adapter la procédure à votre propre configuration).

Serveur central :

- Addresse : 10.30.2.203

Serveur de rebond :

- ID : 1024 (cet identifiant est un nombre aléatoire et doit être unique).
- Adresse : 10.30.2.67
- Empreinte de la clé publique RSA : NmnPME43IoWpkQoam6CLnrI5hjmdq6Kq8QMUCCg-F4g

Collecteur distant :

- ID : 6 (configured in Centreon interface as zmq. You can get this id from the Centreon interface)
- Adresse : 10.30.2.179
- Empreinte de la clé publique RSA : nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s

## Côté collecteur distant

### Prérequis d'installation

Le collecteur distant et Gorgone doivent être installés.

### Configuration

Configurez le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** de la manière suivante :

```shell
name:  distant-server
description: Configuration for distant server
gorgone:
  gorgonecore:
    id: 6
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"

  modules:
    - name: action
      package: gorgone::modules::core::action::hooks
      enable: true

    - name: engine
      package: gorgone::modules::centreon::engine::hooks
      enable: true
      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"

    - name: pull
      package: "gorgone::modules::core::pull::hooks"
      enable: true
      target_type: tcp
      target_path: 10.30.2.67:5556
      ping: 1
```

## Côté serveur de rebond

### Prérequis d'installation

Assurez-vous d'avoir un [OS supporté](../installation/compatibility.md#operating-systems).

Installez le démon Gorgone en utilisant les commandes suivantes :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">


```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el8/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
dnf install centreon-gorgone
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el9/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
dnf install centreon-gorgone
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Pour installer le dépôt Centreon, exécutez la commande suivante :

```shell
echo "deb https://packages.centreon.com/apt-standard-23.10-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Puis importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

Enfin, installez gorgone:

```shell
apt install centreon-gorgone
```

</TabItem>
</Tabs>

### Configuration

Configurez le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** de la manière suivante :

```shell
name:  rebound-server
description: Configuration for rebound-server
gorgone:
  gorgonecore:
    id: 1024
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"
    external_com_type: tcp
    external_com_path: "*:5556"
    authorized_clients:
        - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s

  modules:
    - name: proxy
      package: "gorgone::modules::core::proxy::hooks"
      enable: true

    - name: pull
      package: "gorgone::modules::core::pull::hooks"
      enable: true
      target_type: tcp
      target_path: 10.30.2.203:5556
      ping: 1
```

## Côté serveur central

### Prérequis d'installation

Le collecteur distant et Gorgone doivent être installés.

### Configuration

Configurez le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** de la manière suivante :

```shell
...
gorgone:
  gorgonecore:
    ...
    external_com_type: tcp
    external_com_path: "*:5556"
    authorized_clients:
      - key: NmnPME43IoWpkQoam6CLnrI5hjmdq6Kq8QMUCCg-F4g
    ...
  modules:
    ...
    - name: register
      package: "gorgone::modules::core::register::hooks"
      enable: true
      config_file: /etc/centreon-gorgone/nodes-register-override.yml
    ...
```

Vous venez de créer le fichier **/etc/centreon-gorgone/nodes-register-override.yml** :

```shell
nodes:
  - id: 1024
    type: pull
    prevail: 1
    nodes:
      - id: 6
        pathscore: 1
```
