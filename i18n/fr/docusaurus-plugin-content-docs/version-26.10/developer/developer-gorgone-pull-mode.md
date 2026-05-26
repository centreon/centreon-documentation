---
id: developer-gorgone-pull-mode
title : Configurer Gorgone en mode pull
---

Cette procédure décrit comment configurer Gorgone entre un collecteur distant et un serveur central.

- Le mode pull permet au collecteur de fonctionner comme un client et de se connecter au central (qui sera le serveur). 

- Le mode pull est utilisé lorsque des pare-feu sont installés sur les collecteurs et empêchent le trafic entrant.

- Le mode pull est utilisé lorsque le central est dans le Cloud et que les collecteurs ne sont pas joignables via les adresses IP habituelles. Le mode pull (ou reverse) est alors utilisé pour que chaque collecteur initie une connexion à l'adresse IP publique du central. Pour en savoir plus sur ce cas d'utilisation, consultez [cet article](https://thewatch.centreon.com/product-how-to-21/how-to-use-the-gorgone-pull-mode-374).


> Note : notre exemple utilise la configuration décrite ci-dessous (vous devez adapter la procédure à votre propre configuration).

Serveur central :
- Adresse : 10.30.2.203

Collecteur distant :
- ID : 6 (configuré dans l'interface Centreon avec le protocole ZMQ. Vous pouvez obtenir cet identifiant à partir de l'interface Centreon).
- Addresse : 10.30.2.179
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
      target_path: 10.30.2.203:5556
      ping: 1
```

## Côté serveur central

### Prérequis d'installation

Le serveur central et Gorgone doivent être installés.

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
      - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s
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
  - id: 6
    type: pull
    prevail: 1
```
