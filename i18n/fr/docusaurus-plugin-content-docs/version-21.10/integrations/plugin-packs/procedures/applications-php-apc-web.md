---
id: applications-php-apc-web
title: PHP APC
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon PHP APC apporte 1 modèle d'hôte :
* App-Php-Apc-Web

Il apporte les Modèles de Services suivants :

| Service Alias      | Service Template           | Default |
|:-------------------|:---------------------------|:--------|
| Php-Apc-File-Cache | App-Php-Apc-File-Cache-Web | X       |
| Php-Apc-Memory     | App-Php-Apc-Memory-Web     | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Php-Apc-File-Cache" label="Php-Apc-File-Cache">

| Metric name                      | Description                     | Unit |
|:---------------------------------|:--------------------------------|:-----|
| filecache.requests.persecond     | Global request rate per seconds | r/s  |
| filecache.requests.now.persecond | Request Rate per seconds        | r/s  |
| filecache.hits.persecond         | Global hit rate per seconds     | r/s  |
| filecache.hits.now.persecond     | Hit rate per seconds            | r/s  |
| filecache.misses.persecond       | Global miss rate per seconds    | r/s  |
| filecache.misses.now.persecond   | Miss rate per seconds           | r/s  |
| filecache.hits.percentage        | GLobal hit ratio                | %    |
| filecache.hits.now.percentage    | Hit ratio                       | %    |

</TabItem>
<TabItem value="Php-Apc-Memory" label="Php-Apc-Memory">

| Metric name                     | Description                   | Unit |
|:--------------------------------|:------------------------------|:-----|
| memory.usage.bytes              | Memory usage in bytes         | B    |
| memory.fragmentation.percentage | Memory Fragmentation          | %    |

</TabItem>
</Tabs>

## Prérequis

La page Web PHP APC doit être joignable depuis le collecteur Centreon sur le 
port spécifié dans la Macro d'Hôte *PHPAPCWEBPORT*. Plus d'information sur 
les Macros d'Hôte dans la partie [Configuration](#Configuration).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *PHP APC*:

```bash
yum install centreon-plugin-Applications-Php-Apc-Web
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *PHP APC* depuis la page **Configuration > Packs de plugins**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *PHP APC*:

```bash
yum install centreon-plugin-Applications-Php-Apc-Web
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *PHP APC*:

```bash
yum install centreon-pack-applications-php-apc-web
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *PHP APC* depuis la page **Configuration > Packs de plugins**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur *PHP APC*
* Appliquez le Modèle d'Hôte *Applications-Php-Apc-Web-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises(*Mandatory*) doivent être renseignées 

| Mandatory | Name             | Description                                                                                     |
|:----------|:-----------------|:------------------------------------------------------------------------------------------------|
|           | PHPAPCWEBPORT    | (Default: '80')                                                                                 |
|           | PHPAPCWEBPROTO   | (Default: 'http')                                                                               |
|           | PHPAPCWEBURLPATH | (Default: '/apc.php')                                                                           |
|           | EXTRAOPTIONS     | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_php_apc_web.pl \
    --plugin=apps::php::apc::web::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --proto='http' \
    --port='80' \
    --urlpath='/apc.php' \
    --warning-used='80' \
    --critical-used='90' \
    --warning-fragmentation='' \
    --critical-fragmentation='' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK : Memory Usage Total: 985.22 MB Used: 500.68 MB (50.82%) Free: 484.54 MB (49.18%) Memory Fragmentation: 10% | 'memory.usage.bytes'=525000704B;80;90;0;1033080832 'memory.fragmentation.percentage'=10%;;;0;100 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si l'utilisation
de la mémoire est supérieure à 80% 
(`--warning-used='80'`); l'alarme sera de type CRITICAL au-delà de 90%.

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_php_apc_web.pl \
    --plugin=apps::php::apc::web::plugin \
    --mode=memory \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_php_apc_web.pl \
    --plugin=apps::php::apc::web::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md)
pour le diagnostique des erreurs commununes des Plugins Centreon.