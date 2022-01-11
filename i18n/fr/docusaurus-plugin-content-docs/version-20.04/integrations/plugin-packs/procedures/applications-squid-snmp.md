---
id: applications-squid-snmp
title: Squid SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

* Utilisation du cache
* Statistiques des protocoles

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="CachesUsage" label="CachesUsage">

| Metric name                      | Description                | Unit  |
|:---------------------------------|:---------------------------|:------|
| cache.cpu.utilization.percentage | Cpu usage                  | %     |
| cache.memory.usage.bytes         | Memory usage               | B     |
| cache.filedescriptors.count      | Number of file descriptors | count |
| cache.objects.count              | Number of object stored    | count |

</TabItem>
<TabItem value="ProtocolStats" label="ProtocolStats">

* HTTP statistics

| Metric name                    | Description           | Unit  |
|:-------------------------------|:----------------------|:------|
| http.hits.percentage           | HTTP hits rate        | %     |
| http.errors.count              | Number of HTTP errors | count |
| http.traffic.in.bitspersecond  | HTTP traffic in       | b/s   |
| http.traffic.out.bitspersecond | HTTP traffic out      | b/s   |

* ICP statistics

| Metric name                   | Description     | Unit |
|:------------------------------|:----------------|:-----|
| icp.traffic.in.bitspersecond  | ICP traffic in  | b/s  |
| icp.traffic.out.bitspersecond | ICP traffic out | b/s  |

* Cache statistics

| Metric name                            | Description                   | Unit  |
|:---------------------------------------|:------------------------------|:------|
| cache.server.traffic.in.bitspersecond  | Cache server traffic in       | b/s   |
| cache.server.traffic.out.bitspersecond | Cache server traffic out      | b/s   |
| cache.clients.count                    | Current number of clients: %s | count |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser le proxy Squid, le SNMP v2 ou v3 doit être configuré comme 
indiqué sur la documentation officielle :
https://wiki.squid-cache.org/Features/Snmp

### Flux réseaux

La communication doit être possible depuis le collecteur Centreon vers le port
SNMP (UDP/161) du proxy Squid.

## Installation

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des *proxy Squid*:

```bash
yum install centreon-plugin-Applications-Squid-Snmp
```

2. Sur l'interface Integration de Centreon, installer le Plugin Pack *Squid SNMP* depuis la page `Configuration > Packs de plugins`

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des *proxy Squid*:

```bash
yum install centreon-plugin-Applications-Squid-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Squid SNMP*:

```bash
yum install centreon-pack-applications-squid-snmp
```

3. Sur l'interface Integration de Centreon, installer le Plugin Pack *Squid SNMP* depuis la page `Configuration > Packs de plugins`

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page `Configuration > Hôtes`.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre *proxy Squid*
* Appliquez le Modèle d'Hôte *Applications-Squid-Snmp-custom*

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_squid_snmp.pl \
    --plugin=apps::squid::snmp::plugin \
    --mode=cache-usage \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-counters='' \
    --warning-cpu='80' \
    --critical-cpu='90' \
    --use-new-perfdata
```

 La commande devrait retourner un message de sortie similaire à :

```bash
OK : Cpu usage: 30 % Memory usage: 265289728 B Number of file descriptors: 45 Number of object stored: 23 | 'cache.cpu.utilization.percentage'=30%;;;0;100 
'cache.memory.usage.bytes'=265289728B;;;0; 'cache.filedescriptors.count'=45;;;0; 'cache.objects.count'=23;;;0; 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si l'utilisation du
processeur est supérieure à 80% (`--warning-cpu='80'`); l'alarme sera de type 
CRITICAL au-delà de 90%.

```bash
/usr/lib/centreon/plugins//centreon_squid_snmp.pl  \
    --plugin=apps::squid::snmp::plugin  \
    --mode=cache-usage  \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
 /usr/lib/centreon/plugins//centreon_squid_snmp.pl  \
    --plugin=apps::squid::snmp::plugin  \
    --list-mode
```

### Diagnostic des erreurs communes

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient pas
à contacter le serveur sur le port 161 (firewall ou autre équipement en coupure)
ou que la communauté SNMP configurée n'est pas correcte.

#### UNKNOWN: SNMP GET Request : Cant get a single value

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour
faire fonctionner le mode/Plugin.
