---
id: applications-databases-informix-snmp
title: Informix DB SNMP
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Informix DB SNMP apporte 1 modèle d'hôte :
* App-DB-Informix-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template                   | Default |
|:--------------|:-----------------------------------|:--------|
| Archivelevel0 | App-DB-Informix-Archivelevel0-SNMP | X       |
| Chunk-Status  | App-DB-Informix-Chunk-Status-SNMP  | X       |
| Dbspace-Usage | App-DB-Informix-Dbspace-Usage-SNMP | X       |
| Global-Cache  | App-DB-Informix-Global-Cache-SNMP  | X       |
| Lock-Stats    | App-DB-Informix-Lock-Stats-SNMP    | X       |
| Logfile-Usage | App-DB-Informix-Logfile-Usage-SNMP | X       |
| Sessions      | App-DB-Informix-Sessions-SNMP      | X       |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Archivelevel0-->

| Metric Name | Description                                 | Unit |
|:------------|:--------------------------------------------|:-----|
| seconds     | Number of seconds elapsed since last backup | s    |

<!--Chunk-Status-->

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

<!--Dbspace-Usage-->

| Metric Name | Description                         | Unit |
|:------------|:------------------------------------|:-----|
| used        | Space utilization for each DBspace  | %    |

<!--Global-Cache-->

| Metric Name | Description                         | Unit |
|:------------|:------------------------------------|:-----|
| read        | Disk and logical read operations    |  %   |
| write       | Disk and logical write operations   |  %   |

<!--Lock-Stats-->

| Metric Name  | Unit   |
|:-------------|:-------|
| lock_dead    | count  |
| lock_request | count  |
| lock_timeout | count  |
| lock_wait    | count  |

<!--Logfile-Usage-->

| Metric Name | Description                         | Unit |
|:------------|:------------------------------------|:-----|
| used        | Space utilization of the Logfile    |  %   |

<!--Sessions-->

| Metric Name | Unit |
|:------------|:-----|
| sessions    |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP

Afin de superviser votre Informix en SNMP, il est nécessaire de configurer l'agent
sur le serveur comme indiqué sur la documentation officielle :
* https://www.ibm.com/support/pages/simple-steps-support-snmp-informix-server

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Informix SNMP**:

```bash
yum install centreon-plugin-Applications-Databases-Informix-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Informix DB SNMP** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Informix SNMP**:

```bash
yum install centreon-plugin-Applications-Databases-Informix-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Informix DB SNMP**:

 ```bash
yum install centreon-pack-applications-databases-informix-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Informix DB SNMP** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Informix SNMP**.
* Appliquez le Modèle d'Hôte **App-DB-Informix-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins//centreon_informix_snmp.pl \
    --plugin=database::informix::snmp::plugin \
    --mode=sessions \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-sessions='10' \
    --critical-sessions='20' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: %d client sessions | 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre de sessions 
est supérieur à 10 (`--warning-sessions='10'`); l'alarme sera de type CRITICAL au-delà de 20
sessions (`--critical-sessions='20'`)

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_informix_snmp.pl \
    --plugin=database::informix::snmp::plugin \
    --mode=sessions \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_informix_snmp.pl \
    --plugin=database::informix::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html)
pour le diagnostic des erreurs communes des Plugins Centreon.