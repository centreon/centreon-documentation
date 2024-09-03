---
id: poller-secure
title: Sécuriser votre collecteur
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **IMPORTANT** : Sécuriser la machine hôte du collecteur relève de la responsabilité du client, ainsi que [mettre à jour l'OS de celle-ci](https://thewatch.centreon.com/product-how-to-21/os-updates-security-3136).

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

### Activer SELinux

Par défaut, SELinux est désactivé lors du processus d'installation de Centreon et doit être réactivé par la suite pour des raisons de sécurité.

Pour réactiver SELinux, éditez le fichier **/etc/selinux/config** et changez la valeur avec les options suivantes :
- ``SELINUX=enforcing`` pour que la politique de sécurité SELinux soit appliquée en mode strict.
- ``SELINUX=permissive`` pour que les erreurs d’accès soient enregistrées dans les logs, mais l’accès ne sera pas bloqué.

Puis redémarrez votre serveur :

```shell
shutdown -r now
```

### Installer les paquets Centreon SELinux

Suivant le type de serveur, installer les paquets avec la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

   ```shell
   apt install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

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
[procédure](#activer-selinux) avec le mode **enforcing**.

> N'hésitez pas à nous faire part de vos retours sur [Github](https://github.com/centreon/centreon).

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

<TabItem value="Debian 11" label="Debian 11">

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

Exécutez les commandes suivantes :

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=443/tcp --permanent
```

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
  ports: 443/tcp
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

### Communication Centreon Gorgone

Sur chaque collecteur, le fichier **/etc/centreon-gorgone/config.d/whitelist.conf.d/centreon.yaml** contient les listes blanches pour Gorgone. Si vous souhaitez personnaliser les commandes autorisées, n'éditez pas ce fichier. Créez un nouveau fichier dans le même dossier, par exemple **/etc/centreon-gorgone/config.d/whitelist.conf.d/custom.yaml**.

## Security Information and Event Management - SIEM

Les journaux des événements Centreon sont disponibles dans les répertoires suivants :

* /var/log/centreon-broker
* /var/log/centreon-engine
* /var/log/centreon-gorgone

## Sauvegardez votre plateforme

Assurez-vous de réaliser une sauvegarde de vos plugins personnalisés, et des fichiers de configuration suivants :

   - /etc/centreon/centreon_vmware.pm
   - /etc/centreon-as400/
   - /var/lib/centreon/centplugins/*
   - /var/log/centreon-engine/*.dat
   - /var/lib/centreon-broker/*

## Reprise après sinistre pour un collecteur

La procédure suivante permet de remplacer un collecteur défectueux par un nouveau collecteur :

1. Sur une nouvelle machine, [installez le nouveau collecteur](./deploy-poller.md).

2. Sur la nouvelle machine, restaurez les sauvegardes des fichiers de configuration locaux que vous aviez réalisées avant que le collecteur ne devienne défectueux :

   - /etc/centreon/centreon_vmware.pm
   - /etc/centreon-as400/
   - /var/lib/centreon/centplugins/*
   - /var/log/centreon-engine/*.dat
   - /var/lib/centreon-broker/*

3. Utilisez la fonctionnalité de [**Chagement massif**](../monitoring/generic-actions.md#changement-massif) afin de transférer vers le nouveau collecteur tous les hôtes que l'ancien collecteur supervisait.

4. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) pour le nouveau colecteur.

5. Supprimez l'ancien collecteur.
