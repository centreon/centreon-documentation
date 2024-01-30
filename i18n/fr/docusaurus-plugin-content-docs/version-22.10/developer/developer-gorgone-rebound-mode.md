---
id: developer-gorgone-rebound-mode
title : Configurer Gorgone en mode rebound
---

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

Le serveur CentOS 7 doit être installé.

Installez le démon Gorgone en utilisant les commandes suivantes :

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el7/centreon-22.10.repo
yum install centreon-gorgone
```

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
