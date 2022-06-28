---
id: applications-voip-asterisk-snmp
title: Asterisk VoIP SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Asterisk VoIP SNMP apporte 1 modèle d'hôte :
* App-VoIP-Asterisk-SNMP-custom

Il apporte le Modèle de Service suivant :

| Alias         | Modèle de service                    | Description                                    | Défaut |
|:--------------|:-------------------------------------|:-----------------------------------------------|:-------|
| Channel-Usage | App-Voip-Asterisk-SNMP-Channel-Usage | Contrôle le nombre d'appels et canaux en cours | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Channel-Usage" label="Channel-Usage">

| Métrique              | Unité |
|:----------------------|:------|
| calls.active.count    | count |
| calls.processed.count | count |
| channels.active.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser le serveur Asterisk, le SNMP v2 ou v3 doit être configuré 
comme indiqué sur la [documentation officielle](https://wiki.asterisk.org/wiki/display/AST/Simple+Network+Management+Protocol+%28SNMP%29+Support).

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur Asterisk supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Asterisk** :

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Asterisk VoIP SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Asterisk** :

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Asterisk VoIP SNMP** :

```bash
yum install centreon-pack-applications-voip-asterisk-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Asterisk VoIP SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Asterisk**.
* Appliquez le Modèle d'Hôte **App-VoIP-Asterisk-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS. <br/>
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                 |
|:------------|:-----------------|:--------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_asterisk_snmp.pl \
    --plugin=apps::voip::asterisk::snmp::plugin \
    --mode=channel-usage \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-channels-active='' \
    --critical-channels-active='' \
    --warning-calls-active='100' \
    --critical-calls-active='200' \
    --warning-calls-count='' \
    --critical-calls-count='' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: channels active: 54 calls active: 73 calls count: 746 | 'channels.active.count'=54;;;0; 'calls.active.count'=73;0:100;0:200;0; 'calls.processed.count'=746;;;0; 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre
d'appels en cours est supérieur à 100 (`--warning-calls-active='100'`); l'alarme 
sera de type CRITICAL au-delà de 200 (`--critical-calls-active='200'`).

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_asterisk_snmp.pl \
    --plugin=apps::voip::asterisk::snmp::plugin \
    --mode=channel-usage \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_asterisk_snmp.pl \
    --plugin=apps::voip::asterisk::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.