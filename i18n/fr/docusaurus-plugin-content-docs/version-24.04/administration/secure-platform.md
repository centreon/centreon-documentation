---
id: secure-platform
title: Sécurisez votre plateforme
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre vous propose de sécuriser votre plateforme Centreon.

## Renforcez la sécurité des comptes utilisateurs

Après l'installation de Centreon, il est nécessaire de changer les mots de passe par défaut des utilisateurs suivants:

- root
- centreon
- centreon-engine
- centreon-broker
- centreon-gorgone

Pour cela, utilisez la commande suivante avec un compte privilégié (par exemple sudo) ou avec root (non recommandé - vous devez
avoir un utilisateur dédié) :

```shell
passwd <account_name>
```

De plus, il est important de vérifier que le compte Apache ne dispose pas de droits de connexion au terminal. Exécutez
la commande suivante :

```shell
cat /etc/passwd | grep apache
```

Vous devez avoir **/sbin/nologin** tel que :

```shell
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
```

> Pour rappel, la liste des utilisateurs et des groupes se trouve [ici](../installation/prerequisites.md#utilisateurs-et-groupes)

## Activer SELinux

Centreon a récemment développé des règles SELinux afin de renforcer le contrôle
des composants par le système d'exploitation.

> Ces règles sont actuellement en **mode bêta** et peuvent être activées. Vous
> pouvez les activer en suivant cette procédure. Lors de la détection d'un
> problème, il est possible de désactiver SELinux globalement et de nous envoyer
> vos commentaires afin d'améliorer nos règles sur
> [Github](https://github.com/centreon/centreon).

### Présentation de SELinux

Security Enhanced Linux (SELinux) fournit une couche supplémentaire de sécurité du système. SELinux répond
fondamentalement à la question: `Le <suject> peut-il faire cette <action> sur <object> ?`, Par exemple: un serveur Web
peut-il accéder aux fichiers des répertoires personnels des utilisateurs ?

La stratégie d'accès standard basée sur l'utilisateur, le groupe et d'autres autorisations, connue sous le nom de
contrôle d'accès discrétionnaire (DAC), ne permet pas aux administrateurs système de créer des stratégies de sécurité
complètes et précises, telles que la restriction d'applications spécifiques à l'affichage uniquement des fichiers
journaux, tout en permettant à d'autres applications d'ajouter de nouvelles données aux fichiers journaux.

SELinux implémente le contrôle d'accès obligatoire (MAC). Chaque processus et ressource système possède une étiquette
de sécurité spéciale appelée contexte SELinux. Un contexte SELinux, parfois appelé étiquette SELinux, est un identifiant
qui fait abstraction des détails au niveau du système et se concentre sur les propriétés de sécurité de l'entité. Non
seulement cela fournit un moyen cohérent de référencer des objets dans la stratégie SELinux, mais cela supprime également
toute ambiguïté qui peut être trouvée dans d'autres méthodes d'identification. Par exemple, un fichier peut avoir plusieurs
noms de chemin valides sur un système qui utilise des montages de liaison.

La politique SELinux utilise ces contextes dans une série de règles qui définissent comment les processus peuvent
interagir entre eux et avec les différentes ressources système. Par défaut, la stratégie n'autorise aucune interaction
à moins qu'une règle n'accorde explicitement l'accès.

Pour plus d'informations à propos de SELinux, visitez la [documentation Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux)

### Activer SELinux en mode permissif

Par défaut, SELinux est désactivé lors du processus d'installation de Centreon. Pour activer SELinux en mode permissif,
vous devez modifier le fichier `/etc/selinux/config` comme tel :

```shell
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=permissive
# SELINUXTYPE= can take one of three two values:
#     targeted - Targeted processes are protected,
#     minimum - Modification of targeted policy. Only selected processes are protected.
#     mls - Multi Level Security protection.
SELINUXTYPE=targeted
```

Puis redémarrez votre serveur :
```shell
shutdown -r now
```

### Installer les paquets Centreon SELinux

Suivant le type de serveur, installer les paquets avec la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   dnf install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   dnf install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   dnf install centreon-mbi-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   dnf install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   dnf install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   dnf install centreon-mbi-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   apt install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   apt install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   apt install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   apt install centreon-mbi-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

Pour vérifier l'installation, exécutez la commande suivante :

```shell
semodule -l | grep centreon
```

Suivant votre type de serveur, vous pouvez voir :
```shell
centreon-broker	0.0.5
centreon-common	0.0.10
centreon-engine	0.0.8
centreon-gorgoned	0.0.3
centreon-plugins	0.0.2
centreon-web	0.0.8
```

### Auditer les journaux et activer SELinux

Avant d'activer SELinux en **mode renforcé**, vous devez vous assurer qu'aucune erreur n'apparaît à l'aide de la
commande suivante :

```shell
cat /var/log/audit/audit.log | grep -i denied
```

Si des erreurs apparaissent, vous devez les analyser et décider si ces erreurs sont régulières et doivent être ajoutées
en plus des règles SELinux par défaut de Centreon. Pour ce faire, utilisez la commande suivante pour transformer
l'erreur en règles SELinux :

```shell
audit2allow -a
```

Exécutez ensuite les règles proposées.

Si après un certain temps, aucune erreur n'est présente, vous pouvez activer SELinux en mode renforcé en suivant cette
[procédure](#activer-selinux-en-mode-permissif) avec le mode **enforcing**.

> N'hésitez pas à nous faire part de vos retours sur [Github](https://github.com/centreon/centreon).

## Sécuriser les fichiers de configuration

Changez les permissions des fichiers de configuration suivants:

```shell
chown centreon:centreon /etc/centreon/conf.pm
chmod 660 /etc/centreon/conf.pm
```

et

```shell
chown apache:apache /etc/centreon/centreon.conf.php
chmod 660 /etc/centreon/centreon.conf.php
```

## Sécuriser l'accès root au SGBD

[MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/) propose une procédure par défaut pour sécuriser
l'installation du SGBD. Vous devez obligatoirement définir un mot de passe pour l'utilisateur **root** de la base de données. Si vous ne l'avez pas déjà fait, exécutez la commande suivante et suivez les instructions :

```shell
mysql_secure_installation
```

## Activer firewalld

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Installez firewalld:

```shell
dnf install firewalld
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Installez firewalld:

```shell
dnf install firewalld
```

</TabItem>

<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Installez firewalld:

```shell
apt install firewalld
```

</TabItem>
</Tabs>

Activez firewalld:
```shell
systemctl enable firewalld
systemctl start firewalld
```

Ajoutez des règles pour firewalld :

> La liste des flux réseau nécessaires pour chaque type de serveur est définie
> [ici](../installation/architectures.md#tableau-des-flux-de-la-plate-forme).

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

Exécutez les commandes suivantes (changez les numéros de port si vous avez personnalisé ceux-ci) :

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --zone=public --add-service=https --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
# Centreon Broker
firewall-cmd --zone=public --add-port=5669/tcp --permanent
```

</TabItem>
<TabItem value="Poller" label="Poller">

Exécutez les commandes suivantes :

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
```

</TabItem>
</Tabs>

Une fois les règles ajoutées, rechargez firewalld:

```shell
firewall-cmd --reload
```

Pour vérifier que la configuration a été correctement appliquée, utilisez la commande suivante afin de lister toutes les règles actives :

```shell
firewall-cmd --list-all
```

Par exemple :

```shell
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: http snmp snmptrap ssh
  ports: 5556/tcp 5669/tcp
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

## Activer fail2ban

Fail2ban est un framework de prévention contre les intrusions, écrit en Python.

Installez le module inotify:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install python3-inotify
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install python3-inotify
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt install python3-inotify
```

</TabItem>
</Tabs>

Installez fail2ban :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install epel-release
dnf install fail2ban fail2ban-systemd
```

Si SELinux est installé, mettez à jour les politiques SELinux :

```shell
dnf update -y selinux-policy*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install epel-release
dnf install fail2ban fail2ban-systemd
```

Si SELinux est installé, mettez à jour les politiques SELinux :

```shell
dnf update -y selinux-policy*
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt install fail2ban
```

</TabItem>
</Tabs>

Activez fail2ban :
```shell
systemctl enable fail2ban
systemctl start fail2ban 
```

Copiez le fichier de règles par défaut :
```shell
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Éditez le fichier `/etc/fail2ban/jail.local` et recherchez le bloc **[centreon]**, puis modifiez tel que :
```shell
[centreon]
port    = http,https
logpath = /var/log/centreon/login.log
backend  = pyinotify
```

Pour activer la règle **centreon** fail2ban, créez le fichier `/etc/fail2ban/jail.d/custom.conf` et ajoutez les lignes
suivantes :
```shell
[centreon]
enabled = true
findtime = 10m
bantime = 10m
maxretry = 3
```

> **maxretry** est le nombre d'authentifications échouées avant bannissement de l'adresse IP.
>
> **bantime** est la durée du bannissement.
>
> **findtime** est la plage de temps pour trouver les authentifications en échecs.

Puis redémarrez fail2ban pour charger votre règle :

```shell
systemctl restart fail2ban
```

Pour vérifier l'état de la règle **centreon**, vous pouvez exécuter :

```shell
fail2ban-client status centreon
```

Voici un exemple de résultat :

```shell
Status for the jail: centreon
|- Filter
|  |- Currently failed:	1
|  |- Total failed:	17
|  `- File list:	/var/log/centreon/login.log
`- Actions
   |- Currently banned:	0
   |- Total banned:	2
   `- Banned IP list:
```

> Pour plus d'informations, visitez le [site officiel](http://www.fail2ban.org).

## Sécuriser le serveur web en HTTPS

Par défaut, Centreon installe un serveur web en mode HTTP. Il est fortement recommandé de passer en mode HTTPS en ajoutant votre certificat. Il est également recommandé d'utiliser un certificat validé par une autorité plutôt qu'un certificat auto-signé.

- Si vous avez déjà un certificat validé par une autorité, vous pouvez passer directement à cette [étape](#activer-le-mode-https-sur-le-serveur-web) pour activer le mode HTTPS sur votre serveur Apache.

- Si vous ne disposez pas d'un certificat validé par une autorité, vous pouvez en générer un sur des plateformes telles que [Let's Encrypt](https://letsencrypt.org/fr/).

- Si vous souhaitez créer un certificat selon la méthode auto-signée, suivez cette [étape](#créer-un-certificat-auto-signé) avant d'activer le mode HTTPS sur votre serveur.

### Créer un certificat auto-signé

>  Cette procédure permet de créer :
- Une clé privée pour le serveur : **centreon7.key** dans notre cas. Elle sera utilisée par le service Apache.
- Un fichier CSR (Certificate Signing Request) : **centreon7.csr** dans notre cas.
- Une clé privée pour le certificat de l'autorité de certification : **ca_demo.key** dans notre cas.
- Un certificat x509 pour signer votre certificat pour le serveur : **ca-demo.crt** dans notre cas.
- Un certificat pour le serveur : **centreon7.crt** dans notre cas.

Soit un serveur Centreon avec le FQDN suivant : **centreon7.localdomain**.

1. Préparez la configuration OpenSSL :
  
  En raison d'un changement de politique chez Google, les certificats auto-signés peuvent être rejetés par le navigateur Google Chrome (sans qu'il soit possible d'ajouter une exception). Pour continuer à utiliser ce navigateur, vous devez modifier la configuration OpenSSL.
  
  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  Ouvrez le fichier **/etc/pki/tls/openssl.cnf**. L'objectif est de modifier ce fichier pour renseigner les différents IPs et FQDNs relatifs au serveur.
  
  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
  
  Ouvrez le fichier **/etc/pki/tls/openssl.cnf**. L'objectif est de modifier ce fichier pour renseigner les différents IPs et FQDNs relatifs au serveur.
  
  </TabItem>
  <TabItem value="Debian 11 & 12" label="Debian 11 & 12">
  
  Ouvrez le fichier **/etc/ssl/openssl.cnf**. L'objectif est de modifier ce fichier pour renseigner les différents IPs et FQDNs relatifs au serveur.
  
  </TabItem>
  </Tabs>
  
  Recherchez la section ```[v3_ca]``` afin d'ajouter le nouveau tag ```alt_names``` :
  
  ```text
  # Add the alt_names tag that allows you to inform our various IPs and FQDNs for the server
  [ alt_names ]
  IP.1 = xxx.xxx.xxx.xxx
  DNS.1 = centreon7.localdomain
  # If you have several IP (HA: vip + ip)
  # IP.2 = xxx.xxx.xxx.xxx
  [ v3_ca ]
  subjectAltName = @alt_names
  ```
  
  Voici un exemple de ce à quoi le fichier peut ressembler :
  ```text
  [ alt_names ]
  IP.1 = 10.25.11.73
  DNS.1 = centreon7.localdomain
  
  [ v3_ca ]
  subjectAltName = @alt_names
  ```
  
2. Créez une clé privée pour le serveur :

Créez une clé privée nommée **centreon7.key** sans mot de passe afin qu'elle puisse être utilisée par le service Apache.
```text
openssl genrsa -out centreon7.key 2048
```

Protégez le fichier en modifiant ses droits :
```text
chmod 400 centreon7.key
```

3. Créez un fichier CSR :

Avec la clé que vous venez de créer, créez un fichier CSR (Certificate Signing Request). Remplissez les champs avec les informations propres à votre entreprise. Le champ **Common Name** doit être identique au hostname de votre serveur Apache (dans notre cas, **centreon7.localdomain**).
```text
openssl req -new -key centreon7.key -out centreon7.csr
```

4. Créez une clé privée pour le certificat de l'autorité de certification :

Créez une clé privée pour cette autorité : **ca_demo.key** dans notre cas. Ajoutez l'option **-aes256** pour chiffrer la clé produite et y appliquer un mot de passe. Ce mot de passe sera demandé chaque fois que la clé sera utilisée.
```text
openssl genrsa -aes256 2048 > ca_demo.key
```

5. Créez un certificat x509 à partir de la clé privée du certificat de l'autorité de certification :

Créez un certificat x509 qui sera valide pendant un an : **ca_demo.crt** dans notre cas.

>  Notez qu'il est nécessaire de simuler un tiers de confiance : le **Common Name** doit être différent de celui du certificat du serveur.
```text
openssl req -new -x509 -days 365 -key ca_demo.key -out ca_demo.crt
```

Ce certificat étant créé, vous pourrez l'utiliser pour signer le certificat du serveur.

6. Créez un certificat pour le serveur :

Créez votre certificat pour le serveur en utilisant le certificat x509 (**ca_demo.crt**) pour le signer.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```text
openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```text
openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```text
openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/ssl/openssl.cnf -extensions v3_ca
```

</TabItem>
</Tabs>

Le mot de passe créé à l'étape **Créer une clé privée pour le certificat de l'autorité de certification**  doit être renseigné. Vous obtenez un certificat pour le serveur nommé **centreon7.crt**.

Vous pouvez voir le contenu du fichier : 
```text
less centreon7.crt
```

7. Vous devez ensuite récupérer le fichier du certificat x509 (**ca_demo.crt**) et l'importer dans le magasin de certificats de votre navigateur.

Maintenant que vous avez votre certificat auto-signé, vous pouvez suivre la procédure suivante pour activer le mode HTTPS sur votre serveur Apache.

### Activer le mode HTTPS sur le serveur web

1. Installez le module SSL pour Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install mod_ssl mod_security openssl
```

2. Installez les certificats :

Installez vos certificats (**centreon7.key** et **centreon7.crt** dans notre cas) en les copiant dans la configuration Apache :

```shell
cp centreon7.key /etc/pki/tls/private/
cp centreon7.crt /etc/pki/tls/certs/
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install mod_ssl mod_security openssl
```

2. Installez les certificats :

Installez vos certificats (**centreon7.key** et **centreon7.crt** dans notre cas) en les copiant dans la configuration Apache :

```shell
cp centreon7.key /etc/pki/tls/private/
cp centreon7.crt /etc/pki/tls/certs/
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
curl -sSL https://packages.sury.org/apache2/README.txt | sudo bash -x
apt update
apt install libapache2-mod-security2
a2enmod ssl
a2enmod security2
systemctl restart apache2
```

2. Installez les certificats :

Installez vos certificats (**centreon7.key** et **centreon7.crt** dans notre cas) en les copiant dans la configuration Apache :

```shell
cp centreon7.key /etc/ssl/private/
cp centreon7.crt /etc/ssl/certs/
```

</TabItem>
</Tabs>

3. Sauvegardez la configuration actuelle du serveur Apache pour Centreon :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
cp /etc/apache2/sites-available/centreon.conf{,.origin}
```

</TabItem>
</Tabs>

4. Éditer la configuration Apache pour Centreon :

> Centreon propose un fichier de configuration d'exemple HTTPS disponible dans le répertoire :
> **/usr/share/centreon/examples/centreon.apache.https.conf**

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** en ajoutant la section **<VirtualHost *:443>**.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** en ajoutant la section **<VirtualHost *:443>**.

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Éditez le fichier **/etc/apache2/sites-available/centreon.conf** en ajoutant la section **<VirtualHost *:443>**.
</TabItem>
</Tabs>

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>
```

Voici un exemple de ce à quoi le fichier peut ressembler :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/pki/tls/certs/centreon7.crt
    SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> N'oubliez pas de changer les directives **SSLCertificateFile** et **SSLCertificateKeyFile** avec les chemins d'accès vers votre clé et votre certificat. Dans notre cas : **SSLCertificateFile /etc/pki/tls/certs/centreon7.crt** et **SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key**.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/pki/tls/certs/centreon7.crt
    SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> N'oubliez pas de changer les directives **SSLCertificateFile** et **SSLCertificateKeyFile** avec les chemins d'accès vers votre clé et votre certificat. Dans notre cas : **SSLCertificateFile /etc/pki/tls/certs/centreon7.crt** et **SSLCertificateKeyFile /etc/pki/tls/private/centreon7.key**.

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/ssl/certs/centreon7.crt
    SSLCertificateKeyFile /etc/ssl/private/centreon7.key

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> N'oubliez pas de changer les directives **SSLCertificateFile** et **SSLCertificateKeyFile** avec les chemins d'accès vers votre clé et votre certificat. Dans notre cas : **SSLCertificateFile /etc/ssl/certs/centreon7.crt** et **SSLCertificateKeyFile /etc/ssl/private/centreon7.key**.

</TabItem>
</Tabs>

5. Activez les flags HttpOnly / Secure et cacher la signature du serveur Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** en ajoutant les lignes suivantes avant la balise `<VirtualHost>` :

```apacheconf
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
```

Éditez le fichier **/etc/php.d/50-centreon.ini** en désactivant le paramètre `expose_php` :

```phpconf
expose_php = Off
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** en ajoutant les lignes suivantes avant la balise `<VirtualHost>` :

```apacheconf
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
```

Éditez le fichier **/etc/php.d/50-centreon.ini** en désactivant le paramètre `expose_php` :

```phpconf
expose_php = Off
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Éditez le fichier **/etc/apache2/sites-available/centreon.conf** en ajoutant les lignes suivantes avant la balise `<VirtualHost>` :

```apacheconf
Header set X-Frame-Options: "sameorigin"
Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
ServerSignature Off
ServerTokens Prod
TraceEnable Off
```

Éditez le fichier **/etc/php/8.1/mods-available/centreon.ini** en désactivant le paramètre **expose_php** :

> Cela a été fait automatiquement pendant l'installation.

</TabItem>
</Tabs>

6. Cachez le répertoire par défaut **/icons** :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Éditez le fichier **/etc/httpd/conf.d/autoindex.conf** en commentant la ligne suivante :

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Éditez le fichier **/etc/httpd/conf.d/autoindex.conf** en commentant la ligne suivante :

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Éditez le fichier **/etc/apache2/mods-available/autoindex.conf** en commentant la ligne suivante :

> Le répertoire est caché par défaut.

</TabItem>
</Tabs>

7. Vous pouvez effectuer ce test vérifiant qu'Apache est bien configuré, en exécutant la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```apacheconf
apachectl configtest
```

Le résultat attendu est le suivant :

```apacheconf
Syntax OK
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```apacheconf
apachectl configtest
```

Le résultat attendu est le suivant :

```apacheconf
Syntax OK
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```apacheconf
apache2ctl configtest
```

Le résultat attendu est le suivant :

```apacheconf
Syntax OK
```

</TabItem>
</Tabs>

8. Redémarrez le serveur web Apache et PHP pour prendre la configuration en compte :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl restart php-fpm httpd
```

Puis vérifiez le statut :

```shell
systemctl status httpd
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/httpd.service.d
           └─php-fpm.conf
   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago
     Docs: man:httpd.service(8)
 Main PID: 1483 (httpd)
   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"
    Tasks: 278 (limit: 5032)
   Memory: 39.6M
   CGroup: /system.slice/httpd.service
           ├─1483 /usr/sbin/httpd -DFOREGROUND
           ├─1484 /usr/sbin/httpd -DFOREGROUND
           ├─1485 /usr/sbin/httpd -DFOREGROUND
           ├─1486 /usr/sbin/httpd -DFOREGROUND
           ├─1487 /usr/sbin/httpd -DFOREGROUND
           └─1887 /usr/sbin/httpd -DFOREGROUND

```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart php-fpm httpd
```

Puis vérifiez le statut :

```shell
systemctl status httpd
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/httpd.service.d
           └─php-fpm.conf
   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago
     Docs: man:httpd.service(8)
 Main PID: 1483 (httpd)
   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"
    Tasks: 278 (limit: 5032)
   Memory: 39.6M
   CGroup: /system.slice/httpd.service
           ├─1483 /usr/sbin/httpd -DFOREGROUND
           ├─1484 /usr/sbin/httpd -DFOREGROUND
           ├─1485 /usr/sbin/httpd -DFOREGROUND
           ├─1486 /usr/sbin/httpd -DFOREGROUND
           ├─1487 /usr/sbin/httpd -DFOREGROUND
           └─1887 /usr/sbin/httpd -DFOREGROUND

```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
systemctl restart php8.1-fpm apache2
```

Puis vérifiez le statut :

```shell
systemctl status apache2
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● apache2.service - The Apache HTTP Server
    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor pres>
     Active: active (running) since Tue 2022-08-09 05:01:36 UTC; 3h 56min ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 518 (apache2)
      Tasks: 11 (limit: 2356)
     Memory: 18.1M
        CPU: 1.491s
     CGroup: /system.slice/apache2.service
             ├─ 518 /usr/sbin/apache2 -k start
             ├─1252 /usr/sbin/apache2 -k start
             ├─1254 /usr/sbin/apache2 -k start
             ├─1472 /usr/sbin/apache2 -k start
             ├─3857 /usr/sbin/apache2 -k start
             ├─3858 /usr/sbin/apache2 -k start
             ├─3859 /usr/sbin/apache2 -k start
             ├─3860 /usr/sbin/apache2 -k start
             ├─3876 /usr/sbin/apache2 -k start
             ├─6261 /usr/sbin/apache2 -k start
             └─6509 /usr/sbin/apache2 -k start
```

</TabItem>
</Tabs>

Vous pouvez maintenant accéder à votre plateforme via votre navigateur en mode HTTPS.

> Une fois que votre serveur web est configuré en mode HTTPS et si vous avez un serveur MAP sur votre plateforme, vous devez le configurer en mode HTTPS également. Sinon, les navigateurs web récents peuvent bloquer la communication entre les deux serveurs. Voir la procédure détaillée [ici](../graph-views/secure-your-map-platform.md/#configure-httpstls-on-the-map-server).

9. Configuration API de Gorgone

Éditez le fichier **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** en remplaçant **127.0.0.1** 
par le FQDN de votre serveur central :

```text
gorgone:
  tpapi:
    - name: centreonv2
      base_url: "http://centreon7.localdomain/centreon/api/latest/"
      username: "centreon-gorgone"
      password: "bpltc4aY"
    - name: clapi
      username: "centreon-gorgone"
      password: "bpltc4aY"
```

Redémarrez le daemon Gorgone :

```shell
systemctl restart gorgoned
```

Puis vérifiez le statut :

```shell
systemctl status gorgoned
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● gorgoned.service - Centreon Gorgone
   Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2023-03-06 15:58:10 CET; 27min ago
 Main PID: 1791096 (perl)
    Tasks: 124 (limit: 23040)
   Memory: 595.3M
   CGroup: /system.slice/gorgoned.service
           ├─1791096 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info
           ├─1791109 gorgone-statistics
           ├─1791112 gorgone-legacycmd
           ├─1791117 gorgone-engine
           ├─1791118 gorgone-audit
           ├─1791125 gorgone-nodes
           ├─1791138 gorgone-action
           ├─1791151 gorgone-cron
           ├─1791158 gorgone-dbcleaner
           ├─1791159 gorgone-autodiscovery
           ├─1791166 gorgone-httpserver
           ├─1791180 gorgone-proxy
           ├─1791181 gorgone-proxy
           ├─1791182 gorgone-proxy
           ├─1791189 gorgone-proxy
           └─1791190 gorgone-proxy

mars 06 15:58:10 ito-central systemd[1]: gorgoned.service: Succeeded.
mars 06 15:58:10 ito-central systemd[1]: Stopped Centreon Gorgone.
mars 06 15:58:10 ito-central systemd[1]: Started Centreon Gorgone.
```

Vous devriez voir la ligne suivante dans les logs de Gorgone **/var/log/centreon-gorgone/gorgoned.log** :

```text
2023-03-06 15:58:12 - INFO - [autodiscovery] -class- host discovery - sync started
```

## URI personnalisée

Il est possible de personnaliser l'URI de connexion à votre plateforme Centreon. Par exemple, **/centreon** peut être remplacé par **/monitoring**.

> Au moins un niveau de chemin est obligatoire.

Pour personnaliser l'URI de Centreon :

1. Éditez le fichier de configuration Apache pour Centreon :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
vi /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
vi /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
vi /etc/apache2/sites-available/centreon.conf
```

</TabItem>
</Tabs>

2. Remplacez le chemin **/centreon** par le chemin désiré :

```apache
Define base_uri "/centreon"
```

3. Redémarrez Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Activation du http2

Il est possible d'activer le protocole http2 pour améliorer les performances réseaux de Centreon.

Pour utiliser http2, vous devez suivre les étapes suivantes:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. [Configurer le https pour Centreon](#sécuriser-le-serveur-web-en-https).

2. Installez le module nghttp2:

```shell
dnf install nghttp2
```

3. Activez le protocole **http2** dans **/etc/httpd/conf.d/10-centreon.conf** :

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Modifiez la méthode utilisée par apache pour le module multi-processus dans **/etc/httpd/conf.modules.d/00-mpm.conf** :

Commentez la ligne suivante :

```shell
LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
```

Décommentez la ligne suivante :

```shell
LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Redémarrez le processus Apache pour prendre en compte la nouvelle configuration :

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. [Configurer le https pour Centreon](#sécuriser-le-serveur-web-en-https).

2. Installez le module nghttp2:

```shell
dnf install nghttp2
```

3. Activez le protocole **http2** dans **/etc/httpd/conf.d/10-centreon.conf** :

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Modifiez la méthode utilisée par apache pour le module multi-processus dans **/etc/httpd/conf.modules.d/00-mpm.conf** :

Commentez la ligne suivante :

```shell
LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
```

Décommentez la ligne suivante :

```shell
LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Redémarrez le processus Apache pour prendre en compte la nouvelle configuration :

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

1. [Configurer le https pour Centreon](#sécuriser-le-serveur-web-en-https).

2. Installez le module nghttp2:

```shell
apt install nghttp2
```

3. Activez le protocole **http2** dans **/etc/apache2/sites-available/centreon.conf** :

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 h2c http/1.1
    ...
</VirtualHost>
...
```

4. Exécutez les commandes suivantes :

```shell
a2dismod php8.1
a2dismod mpm_prefork
a2enmod mpm_event
a2enmod http2
```

5. Redémarrez le processus Apache pour prendre en compte la nouvelle configuration :

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Authentification des utilisateurs

Centreon propose plusieurs méthodes pour authentifier les utilisateurs :

- [localement](../connect/loginpwd.md) (MySQL)
- [LDAP](./parameters/ldap.md)
- [Generic SSO](../connect/sso.md) ou [OpenId Connect](../connect/openid.md)

## Créer des profils d'utilisateurs

Centreon propose de gérer les autorisations d'accès aux différents menus, ressources et actions possibles sur ces ressources
via la gestion de [liste de contrôle d'accès](./access-control-lists.md).

## Communications sécurisées entre les serveurs

Il est fortement recommandé de sécuriser les communications entre les différents serveurs de la plateforme Centreon si
certains serveurs ne sont pas dans un réseau sécurisé.

> Le tableau des flux réseau est disponible [ici](../installation/architectures.md#tableau-des-flux-réseau).

### Communication Centreon Broker

#### Centreon Broker et pare-feu

Parfois, il n'est pas possible d'initialiser le flux Centreon Broker depuis le collecteur (ou Remote Server)
vers le serveur Centreon Central ou le Remote Server.
[Voir la configuration suivante pour inverser le flux](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-and-the-firewall).

#### Authentification des flux Centreon Broker

Si vous devez authentifier des collecteurs qui envoient des données, vous pouvez utiliser le mécanisme d'authentification
Centreon Broker, qui est basé sur des certificats X.509.
[Voir la configuration suivante pour authentifier les collecteurs](../monitoring/monitoring-servers/advanced-configuration.md#authentification-avec-centreon-broker).

#### Compressez et chiffrez la communication Centreon Broker

Il est également possible de compresser et de chiffrer la communication de Centreon Broker. Allez dans le menu
`Configuration > Pollers > Broker configuration`, modifiez votre configuration Centreon Broker et activez les entrées
et sorties **IPv4**:

- Enable TLS encryption: Auto
- Enable negotiation: Yes
- Compression (zlib): Auto

### Communication Centreon Gorgone

Par défaut, les communications ZMQ sont sécurisées, à la fois celles externes (avec le collecteur) et celles internes (entre processus gorgone).

Cependant, l'API gorgone HTTP n'est pas sécurisée par défaut. Seul localhost peut communiquer avec gorgone, mais il n'utilise pas SSL.

Vous pouvez [configurer SSL](https://github.com/centreon/centreon/blob/develop/centreon-gorgone/docs/modules/core/httpserver.md) via le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml**.

Puis configurez gorgone à la page **Administration > Paramètres > Gorgone**.

Vérifiez également que le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** (sur votre serveur central, vos serveurs distants et vos collecteurs) contient bien les lignes suivantes :

```shell
name: action
package: "gorgone::modules::core::action::hooks"
enable: true
command_timeout: 30
whitelist_cmds: true
allowed_cmds:
  - ^sudo\s+(/bin/)?systemctl\s+(reload|restart)\s+(centengine|centreontrapd|cbd)\s*$
  - ^(sudo\s+)?(/usr/bin/)?service\s+(centengine|centreontrapd|cbd|cbd-sql)\s+(reload|restart)\s*$
  - ^/usr/sbin/centenginestats\s+-c\s+/etc/centreon-engine/centengine\.cfg\s*$
  - ^cat\s+/var/lib/centreon-engine/[a-zA-Z0-9\-]+-stats\.json\s*$
  - ^/usr/lib/centreon/plugins/.*$
  - ^/bin/perl /usr/share/centreon/bin/anomaly_detection --seasonality >> /var/log/centreon/anomaly_detection\.log 2>&1\s*$
  - ^/usr/bin/php -q /usr/share/centreon/cron/centreon-helios\.php >> /var/log/centreon-helios\.log 2>&1\s*$
  - ^centreon
  - ^mkdir
  - ^/usr/share/centreon/www/modules/centreon-autodiscovery-server/script/run_save_discovered_host --all --job-id=\d+ --export-conf --token=\S+$
  - ^/usr/share/centreon/bin/centreon -u "centreon-gorgone" -p \S+ -w -o CentreonWorker -a processQueue$
```


## Gestion de l'information et des événements de sécurité (SIEM)

Les journaux des événements Centreon sont disponibles dans les répertoires suivants :

| Répertoires des journaux  | Central server | Remote Server | Poller | Centreon Map server | Centreon MBI Server |
|---------------------------|----------------|---------------|--------|---------------------|---------------------|
| /var/log/centreon         | X              | X             |        |                     |                     |
| /var/log/centreon-broker  | X              | X             | X      |                     |                     |
| /var/log/centreon-engine  | X              | X             | X      |                     |                     |
| /var/log/centreon-gorgone | X              | X             | X      |                     |                     |
| /var/log/centreon-bi      | X              | X             |        |                     |                     |
| /var/log/centreon-map     | X              | X             |        | X                   | X                   |

> De plus, toutes les actions de modification de la configuration de Centreon effectuées par les utilisateurs sont
> disponibles via le menu [**Administration > Logs**](./logging-configuration-changes.md).

## Sauvegardez votre plateforme

Centreon propose de sauvegarder la configuration de la plateforme. Pour ce faire, accédez au menu 
[**Administration > Parameters > Backup**](./backup.md).
