---
id: troubleshooting
title: Dépannage de la plateforme Centreon
---

Cette page répertorie les rubriques de dépannage disponibles dans cette documentation. Cliquez sur un élément pour accéder à un contenu plus détaillé. 

* [Débogage](../administration/parameters/debug.md)
* [Dépanner les erreurs de plugins](/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins)
* [Dépanner MAP](../graph-views/map-web-troubleshooting.md)
* [Dépanner MAP Legacy](../graph-views/troubleshooter.md)
* [Dépanner l'envoi d'emails avec Postfix](../administration/postfix.md#dépanner-lenvoi-demails-avec-postfix)
* [Dépanner les erreurs sur les licences](../administration/licenses.md#dépanner-les-erreurs-sur-les-licences)
* [Dépanner les incidents sur la découverte des hôtes](../monitoring/discovery/troubleshooting-hosts-discovery.md)

## Sur notre platforme communautaire The Watch

* Un problème pour mettre en place votre solution IT-100? Consultez notre [groupe dédié](https://thewatch.centreon.com/groups/centreon-it-100-users-54).

* Retrouvez plus d'[articles de dépannage](https://thewatch.centreon.com/troubleshooting-41) dans notre base de connaissances.

### Vous avez un conflit entre les paquets mysql-common et MariaDB-common

#### Description

Si vous avez installé mariadb depuis les dépôts officiels de mariadb, il est possible que vous obteniez l'erreur suivante lors de la mise à jour de votre plateforme (`dnf update`) :

```shell
Error: Transaction test error:
  file /usr/share/mysql/charsets/Index.xml conflicts between attempted installs of mysql-common-8.0.43-1.el9_6.x86_64 and MariaDB-common-10.11.15-1.el9.x86_64
  file /usr/share/mysql/charsets/armscii8.xml conflicts between attempted installs of mysql-common-8.0.43-1.el9_6.x86_64 and MariaDB-common-10.11.15-1.el9.x86_64
  ...
```

Cela est dû à la version 4.053 de perl-DBD-MySQL qui nécessite maintenant mysql-common et qui rentre en conflit avec MariaDB-common.

#### Contournement

Afin de pouvoir mettre à jour la plateforme, il est nécessaire de bloquer l'installation de perl-DBD-MySQL-4.053 :

```shell
echo "exclude=perl-DBD-MySQL-4.053*" >> /etc/dnf/dnf.conf
```

Vous devriez maintenant pouvoir mettre à jour votre plateforme :

```shell
dnf update
```
