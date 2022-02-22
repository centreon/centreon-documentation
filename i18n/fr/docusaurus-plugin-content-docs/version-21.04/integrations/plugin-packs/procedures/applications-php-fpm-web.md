---
id: applications-php-fpm-web
title: PHP FPM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon PHP FPM apporte 1 modèle d'hôte :
* App-Php-Fpm-Web

Il apporte le Modèle de Service suivant :

| Service Alias | Service Template      | Default |
|:--------------|:----------------------|:--------|
| Php-Fpm-Usage | App-Php-Fpm-Usage-Web | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Php-Fpm-Usage" label="Php-Fpm-Usage">

| Metric name                | Description                               | Unit  |
|:---------------------------|:------------------------------------------|:------|
| fpm.processes.active.count | Number of active processes                | count |
| fpm.processes.idle.count   | Number of idle processes                  | count |
| fpm.queue.listen.count     | Number of connections in the listen queue | count |
| fpm.requests.persecond     | Number of requests per seconds            | /s    |

</TabItem>
</Tabs>

## Prérequis

La page Web PHP FPM doit être joignable depuis le collecteur Centreon sur le 
port spécifié dans la Macro d'Hôte *PHPFPMWEBPORT*. Plus d'information sur 
les Macros d'Hôte dans la partie [Configuration](#Configuration).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *PHP FPM*:

```bash
yum install centreon-plugin-Applications-Php-Fpm-Web
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *PHP FPM* depuis la page **Configuration > Packs de plugins**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *PHP FPM*:

```bash
yum install centreon-plugin-Applications-Php-Fpm-Web
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *PHP FPM*:

```bash
yum install centreon-pack-applications-php-fpm-web
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *PHP FPM* depuis la page **Configuration > Packs de plugins**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre ressources *PHP FPM*
* Appliquez le Modèle d'Hôte *Applications-Php-Fpm-Web-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises(*Mandatory*) doivent être renseignées 

| Mandatory | Name             | Description                                                                                     |
|:----------|:-----------------|:------------------------------------------------------------------------------------------------|
|           | PHPFPMWEBPORT    | (Default: '80')                                                                                 |
|           | PHPFPMWEBPROTO   | (Default: 'http')                                                                               |
|           | PHPFPMWEBURLPATH | (Default: '/fpm-status')                                                                        |
|           | EXTRAOPTIONS     | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_php_fpm_web.pl \
    --plugin=apps::php::fpm::web::plugin \
    --mode=usage \
    --hostname=10.0.0.1 \
    --proto='http' \
    --port='80' \
    --urlpath='/fpm-status' \
    --warning-active-processes='30' \
    --critical-active-processes='35' \
    --warning-idle-processes='' \
    --critical-idle-processes='' \
    --warning-listen-queue='' \
    --critical-listen-queue='' \
    --warning-requests='' \
    --critical-requests='' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK : active processes: 8 (40%) idle processes: 12 (60%) listen queue: 2 requests: 90/s | 'fpm.processes.active.count'=8;30;35;0; 'fpm.processes.idle.count'=12;;;0; 'fpm.queue.listen.count'=2;;;0; 'fpm.requests.persecond'=90/s;;;0; 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre de 
processus est supérieure à 30 (`--warning-active-processes='30'`); l'alarme
sera de type CRITICAL au-delà de 35.

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_php_fpm_web.pl \
    --plugin=apps::php::fpm::web::plugin \
    --mode=usage \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_php_fpm_web.pl \
    --plugin=apps::php::fpm::web::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md)
pour le diagnostique des erreurs commununes des Plugins Centreon.