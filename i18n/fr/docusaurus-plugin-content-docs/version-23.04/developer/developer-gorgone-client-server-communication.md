---
id: developer-gorgone-client-server-communication
title : Gérer la communication client/serveur
---

Centreon Gorgone est le composant logiciel qui permet la communication du serveur central vers les collecteurs et les serveurs distants. Gorgone déploie notamment la configuration des moteurs de supervision.

> Gorgone remplace Centcore depuis la version Centreon 20.04.

Centreon recommande d'utiliser le protocole ZMQ pour la communication entre deux processus **gorgoned**. Lors de l'utilisation du protocole ZMQ, toutes les communications sont chiffrées à l'aide d'une clé de chiffrement symétrique basé sur les clés publiques/privées du client et du serveur. Vous devez donc générer des clés publiques/privées pour définir la configuration.

Dans un contexte Centreon :
- le serveur central a un Gorgone en cours d'exécution (par défaut) en tant que client et peut se connecter à des serveurs Gorgone fonctionnant sur des serveurs distants et des collecteurs.
- Les serveurs distants disposent de Gorgone fonctionnant (par défaut) comme client et peuvent se connecter aux serveurs Gorgone fonctionnant sur les collecteurs.

Suivez cette procédure pour paramétrer la communication entre le client et le serveur.
## Générer les clés privées et publiques
À la fois côté client et côté serveur, générez des clés privées et publiques au format RSA (format pour le chiffrement des clés) en utilisant l'utilisateur **centreon**.

```shell
$ mkdir -p /var/spool/centreon/.gorgone/
$ chmod 700 /var/spool/centreon/.gorgone
$ openssl genrsa -out /var/spool/centreon/.gorgone/privkey.pem 4092
Generating RSA private key, 4092 bit long modulus
...................................++
...........................................................................................................................................................................++
e is 65537 (0x10001)
$ openssl rsa -in /var/spool/centreon/.gorgone/privkey.pem -out /var/spool/centreon/.gorgone/pubkey.pem -pubout -outform PEM
writing RSA key
$ chmod 644 /var/spool/centreon/.gorgone/pubkey.pem
$ chmod 600 /var/spool/centreon/.gorgone/privkey.pem
```

Copiez la clé publique du serveur dans un répertoire spécifique côté client (par exemple **/var/spool/centreon/.gorgone/\<target_id\>**).

## Récupérer l'empreinte au format JWK

Côté client, exécutez la commande suivante :

```shell
$ perl /usr/local/bin/gorgone_key_thumbprint.pl --key-path='/var/spool/centreon/.gorgone/pubkey.pem'
2019-09-30 11:00:00 - INFO - File '/var/spool/centreon/.gorgone/pubkey.pem' JWK thumbprint: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4
```

## Définir les configurations

Vous devez faire en sorte que les identifiants Gorgone correspondent aux identifiants des collecteurs Centreon pour bénéficier des actions du module de commandes legacy.

### Côté serveur

Dans le fichier de configuration **/etc/centreon/confid.d/20-gorgoned.yaml**, ajoutez les directives suivantes sous la section **gorgonecore** :

```shell
gorgone:
  gorgonecore:
    id: 1
    privkey: /var/spool/centreon/.gorgone/privkey.pem
    pubkey: /var/spool/centreon/.gorgone/pubkey.pem
```

Ajoutez le module de registre et définissez le chemin vers le fichier de configuration dédié :

```shell
modules:
  - name: register
    package: "gorgone::modules::core::register::hooks"
    enable: true
    config_file: /etc/centreon/gorgone-targets.yml
```

Créez le fichier **/etc/centreon/gorgone-targets.yml** et renseignez-le suivant cette configuration :

```shell
  nodes:
  - id: 2
    type: push_zmq
    address: 10.1.2.3
    port: 5556
```

### Côté client

Dans le fichier **/etc/centreon/config.d/20-gorgoned.yaml**, ajoutez les directives suivantes :

```shell
gorgone:
  gorgonecore:
    id: 2
    external_com_type: tcp
    external_com_path: "*:5556"
    privkey: /var/spool/centreon/.gorgone/privkey.pem
    pubkey: /var/spool/centreon/.gorgone/pubkey.pem
    authorized_clients:
      - key: pnI6EWkiTbazjikJXRkLmjml5wvVECYtQduJUjS4QK4
```

L'entrée **authorized_clients** vous permet de définir l'empreinte de la clé publique du client récupérée précédemment.
