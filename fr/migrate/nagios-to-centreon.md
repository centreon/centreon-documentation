---
id: nagios-to-centreon
title: Nagios Reader vers Centreon CLAPI
---

**Nagios Reader to Centreon CLAPI** est un projet libre et open source qui
permet d'analyser une configuration Nagios contenue dans les fichiers CFG et de
transformer celle-ci en commandes compatibles Centreon CALPI afin de pouvoir
importer les objets dans l'interface Centreon web.

## Prérequis

Avant toute chose vous devez avoir une plate-forme Centreon installée et prête à
l'emploi. Se référer à la documentation
[d'installation de Centreon](../installation/installation-of-a-central-server/using-centreon-iso.html).

## Installation

Le script nécessite le module Perl-Nagios-Object pour lire les fichiers CFG.
Pour installer ce dernier, exécutez les commandes suivantes sur votre serveur
Nagios(R) :

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS-->
```shell
yum install perl-Module-Build
```
<!--Debian-->
```shell
apt-get install libmodule-build-perl
```
<!--END_DOCUSAURUS_CODE_TABS-->

```shell
cd /tmp
wget http://search.cpan.org/CPAN/authors/id/D/DU/DUNCS/Nagios-Object-0.21.20.tar.gz
tar xzf Nagios-Object-0.21.20.tar.gz
cd Nagios-Object-0.21.20
perl Build.PL
./Build
./Build test
./Build install
```

Puis télécharger le script depuis GitHub sur votre serveur Nagios(R) :

```shell
cd /tmp
git clone https://github.com/centreon/nagiosToCentreon.git
cd nagiosToCentreon
```

## Utilisation

Sur une nouvelle installation de Centreon, le collecteur par défaut est appelé
"Central". Si le nom de ce dernier est différent, vous devez modifier le script
pour modifier le nom par défaut à la ligne 65 :

```perl
my $default_poller = "Central";
```

Pour afficher l'aide, exécutez la commande :

```shell
$ perl nagios_reader_to_centreon_clapi.pl --help
######################################################
#    Copyright (c) 2005-2015 Centreon                #
#    Bugs to http://github.com/nagiosToCentreon      #
######################################################

Usage: nagios_reader_to_centreon_clapi.pl
    -V (--version) Show script version
    -h (--help)    Usage help
    -C (--config)  Path to nagios.cfg file
```

Pour exécuter le script lancer la commande :

```shell
perl nagios_reader_to_centreon_clapi.pl --config /usr/local/nagios/etc/ > /tmp/centreon_clapi_import_commands.txt
```

Exportez le fichier **/tmp/centreon\_clapi\_import\_commands.txt** sur votre
serveur Centreon.

Enfin exécutez la commande suivante pour importer les objets dans Centreon web :

```shell
/usr/share/centreon/bin/centreon -u admin -p <PASSWORD> -i /tmp/centreon_clapi_import_commands.txt
```

> Remplacez **<PASSWORD>** par le mot de passe de l'utilisateur **admin** de
> Centreon web.
