---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Cisco Unified Computing System (UCS) est un ensemble de ressources pour Datacenter comprenant du matériel hardware, un support système de virtualisation, une matrice de commutation et un logiciel de gestion.

Le Plugin Pack *Cisco UCS* utilise le protocole SNMP pour se connecter, récupérer des informations et les métriques relatives aux ressources du serveur UCS.

## Contenu du Plugin Pack

### Objets supervisés

* Les ressources du serveur UCS: Serveurs, Réseau, Disque,...

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Metric name                  | Description                                | Unit  |
| :--------------------------- | :----------------------------------------- | :---- |
| audit.total.count            | Number of audit logs                       | count |
| audit.cleared.count          | Number of cleared audit logs               | count |                          
| audit.info.count             | Number of info audit logs                  | count |                      
| audit.condition.count        | Number of condition audit logs             | count |                             
| audit.warning.count          | Number of warning audit logs               | count |                            
| audit.minor.count            | Number of minor audit logs                 | count |                          
| audit.critical.count         | Number of critical audit logs              | count |                             

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check Hardware status                      |      |

</TabItem>
<TabItem value="Faults" label="Faults">

| Metric name                   | Description                                | Unit  |
| :---------------------------- | :----------------------------------------- | :---- |
| faults.problems.current.count | Number of current faults                   | count |
| faults.total.count            | Number of faults                           | count |
| faults.cleared.count          | Number of cleared faults                   | count |
| faults.info.count             | Number of info faults                      | count |
| faults.condition.count        | Number of conditions faults                | count |
| faults.warning.count          | Number of warning faults                   | count |
| faults.minor.count            | Number of minor faults                     | count |
| faults.major.count            | Number of major faults                     | count |
| faults.critical.count         | Number of critical faults                  | count |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Metric name                     | Description                                | Unit  |
| :------------------------------ | :----------------------------------------- | :---- |
| management_entities.total.count | Number of management entities              | count |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Metric name                   | Description                                | Unit  |
| :---------------------------- | :----------------------------------------- | :---- |
| serviceprofiles.total.count   | Number of service profiles                 | count |
| serviceprofiles.online.count  | Number of online service profiles          | count |
| serviceprofiles.offline.count | Number of offline service profiles         | count |


</TabItem>
</Tabs>


## Prérequis

La communauté SNMP doit être activée sur le serveur UCS en mode Read-only.

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers les ressources UCS.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping). 

| Mandatory   | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs UCS:

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Cisco UCS* depuis la page "Configuration > Plugin Packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs UCS:

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin Pack *Cisco UCS* :

```bash
yum install centreon-pack-hardware-servers-cisco-ucs-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Cisco UCS* depuis la page "Configuration > Plugin Packs > Manager"

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur UCS
* Appliquez le Modèle d'Hôte *HW-Server-Cisco-Ucs-custom*

## Comment tester le Plugin en ligne de commande et comment utiliser ses options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::plugin \
    --mode=faults \ 
    --hostname=10.30.2.11 \
    --snmp-version='2c' \
    --snmp-community='cisco_ucs' \ 
    --filter-severity='critical|major=critical' \
    --filter-severity='warning|minor=warning' \
    --verbose
               
```

La commande ci-dessus contrôle les défauts sur un serveur UCS (``` --mode=faults ```). Les informations importantes sont l'adresse IP/FQDN 

(``` --hostname=10.30.2.11 ```) et la communauté SNMP configurée sur l'équipement (``` --snmp-community='cisco_ucs' ```).

Une alarme de type WARNING est déclenchée si un problème avec une gravité WARNING ou MINOR est détecté sur un composant du serveur UCS (``` --filter-severity='warning|minor=warning' ```).

Une alarme CRITICAL est quant à elle déclenchée si un problème avec une gravité CRITICAL ou MAJOR est détecté sur un composant du serveur UCS (``` --filter-severity='critical|major=critical' ```).

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ``` --help ``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::plugin \
    --mode=faults \
    --help
```

Tous les modes disponibles peuvent être affichés via l'option ``` --list-mode ``` :

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::plugin \
    --list-mode
```

## Diagnostic des erreurs communes

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas à contacter le serveur UCS sur le port UDP 161, ou alors que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. Ce dernier doit avoir accès à la branche entreprise SNMP Cisco UCS: .1.3.6.1.4.1.9.9.719
