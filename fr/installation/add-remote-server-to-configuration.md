---
id: add-remote-server-to-configuration
title: Ajouter un Remote Server à la configuration
---

## Configurer un nouveau Remote Server

Depuis la version 18.10, un nouvel assistant de configuration permet de créer
toutes les configurations nécessaire pour ajouter un Remote Server.

Rendez-vous au menu **Configuration > Pollers** et cliquez sur **Add server
with wizard** pour accéder à l’assistant de configuration.

Sélectionnez **Add a Centreon Remote Server** et cliquez sur **Next** :

![image](assets/installation/poller/wizard-add-remote-1.png)

Si vous avez activé votre serveur en suivant la documentation, sélectionnez
l'option **Select a Remote Server**. Dans la liste déroulante sélectionnez
votre serveur, puis saisissez les informations demandées :

![image](assets/installation/poller/wizard-add-remote-2a.png)

Sinon, sélectionnez l'option **Create new Remote Server** et saisissez les
informations demandées :

![image](assets/installation/poller/wizard-add-remote-2b.png)

Les champs **Database user** et **Database password** sont les accès aux bases
de données Centreon définis durant l'installation de votre Remote Server.

Le champ **Server IP address** est de la forme : [(http|https)://]@IP[:(port)].
Si votre Remote Server est accessible en HTTPS, il est nécessaire de préciser
la méthode d'accès et le port si celui-ci n'est pas par défaut.

L'option **Do not check SSL certificate validation** permet de contacter le
Remote Server si celui-ci possède un certificat SSL auto-signé.

L'option **Do not use configured proxy tp connect to this server** permet de
contacter le Remote Server en n'utilisant pas la configuration du proxy
configurée sur le serveur Centreon Central.

Cliquez sur **Next** :

Sélectionnez le(s) collecteur(s) à lier à ce Remote Server. Puis cliquez sur **Apply** :

![image](assets/installation/poller/wizard-add-remote-3.png)

**TO REMOVE**

    L'assistant va configurer votre nouveau serveur :

    ![image](assets/installation/poller/wizard-add-remote-4.png)

Le Remote Server est maintenant configuré :

![image](assets/installation/poller/remote-list-zmq.png)

## Activer la communication

La communication entre un Central et un Remote Server est assurée par Gorgone et peut
être faite en utilisant ZMQ (avec un Gorgone s'exécutant sur le Remote Server,
recommandé) ou en utilisant le protocole SSH.

<!--DOCUSAURUS_CODE_TABS-->
<!--Avec ZMQ (Recommandé)-->
#### Sélectionner le type de communication

Editer la configuration du Remote Server fraichement créé, et sélectionner **ZMQ**
comme **Gorgone connection protocol**. Définir le **port** adéquat (le port
**5556** est recommandé).

![image](assets/installation/poller/remote-edit-zmq.png)

Cliquer sur **Save**.

#### Afficher la configuration de Gorgone

Depuis la liste des Pollers, cliquer sur l'icon d'action **Gorgone
configuration**.

Une popin affiche la configuration à copier dans le terminal du Remote Server. Cliquer
sur **Copy to clipboard**.

![image](assets/installation/poller/remote-gorgone-display-config.png)

Copier directement dans le terminal car le contenu suivant est dans le
presse-papier et créera le fichier de configuration attendu :

```shell
cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml
name: gorgoned-My Remote Server
description: Configuration for remote server My Remote Server
gorgone:
  gorgonecore:
    id: 3
    external_com_type: tcp
    external_com_path: "*:5556"
    authorized_clients:
      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"
  modules:
    - name: action
      package: gorgone::modules::core::action::hooks
      enable: true

    - name: nodes
      package: gorgone::modules::centreon::nodes::hooks
      enable: true

    - name: proxy
      package: gorgone::modules::core::proxy::hooks
      enable: true

    - name: legacycmd
      package: gorgone::modules::centreon::legacycmd::hooks
      enable: true
      cmd_file: "/var/lib/centreon/centcore.cmd"
      cache_dir: "/var/cache/centreon/"
      cache_dir_trap: "/etc/snmp/centreon_traps/"
      remote_dir: "/var/cache/centreon/config/remote-data/"

    - name: engine
      package: gorgone::modules::centreon::engine::hooks
      enable: true
      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"

EOF
```

> Vous pouvez copier la configuration en sélectionnant le contenu de la popin
> pour la copier dans un fichier de configuration personnalisé.

#### Démarrer le daemon Gorgone

Depuis le Remote Server, exécuter la commande suivante :

```shell
systemctl start gorgoned
```

Assurez vous que le service est démarrer en exécutant la commande suivante :

```shell
systemctl status gorgoned
```

Le résultat devrait être similaire :

```shell
● gorgoned.service - Centreon Gorgone
   Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2020-03-24 19:45:00 CET; 6s ago
 Main PID: 30902 (perl)
   CGroup: /system.slice/gorgoned.service
           ├─30902 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info
           ├─30916 gorgone-nodes
           ├─30917 gorgone-dbcleaner
           ├─30924 gorgone-proxy
           ├─30925 gorgone-proxy
           ├─30938 gorgone-proxy
           ├─30944 gorgone-proxy
           ├─30946 gorgone-proxy
           ├─30959 gorgone-engine
           ├─30966 gorgone-action
           └─30967 gorgone-legacycmd

Mar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.
```
<!--Avec SSH-->
#### Sélectionner le type de communication

Editer la configuration du Remote Server fraichement créé, et sélectionner **SSH**
comme **Gorgone connection protocol**. Définir le **port** adéquat.

![image](assets/installation/poller/remote-edit-ssh.png)

Cliquer sur **Save**.

## Echange de clés SSH

Si vous n’avez pas de clé SSH privée sur le serveur Central pour l’utilisateur **centreon-gorgone** :

``` shell
su - centreon-gorgone
ssh-keygen -t rsa
```

> Appuyez sur la touche *entrée* quand il vous sera demandé de saisir un fichier pour enregistrer la clé. **Laissez le
> mot de passe vide**. Vous recevrez une empreinte digitale de clé et une image randomart.

Générez un mot de passe sur le nouveau serveur pour l'utilisateur **centreon** :

``` shell
passwd centreon
```

Vous devez copier cette clé sur le nouveau serveur :

``` shell
su - centreon-gorgone
ssh-copy-id -i .ssh/id_rsa.pub centreon@<IP_REMOTE_SERVER>
```
<!--END_DOCUSAURUS_CODE_TABS-->

Pour forcer le Gorgone du Central à se connecter au Remote Server, redémarrez le avec
la commande suivante :

```shell
systemctl restart gorgoned
```

## Exporter la configuration

Depuis la liste des Pollers, sélectionner le Remote Server et cliquer sur **Export
configuration**.

Cocher ensuite les quatre premières cases, sélectionner la méthode **Restart**
et cliquer sur  **Export** :

![image](assets/installation/poller/remote-generate-config.png)

Le Remote Server va alors se connecter au Broker Central.

![image](assets/installation/poller/remote-list-zmq-started.png)

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../tutorials/first-steps.html)
pour mettre en place votre première supervision.
