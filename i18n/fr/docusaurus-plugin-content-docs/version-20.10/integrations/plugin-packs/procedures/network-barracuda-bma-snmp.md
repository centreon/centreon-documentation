---
id: network-barracuda-bma-snmp
title: Barracuda Message Archiver SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Barracuda Message Archiver SNMP apporte 1 modèle d'hôte :
* Net-Barracuda-Bma-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template               | Default | Discovery |
|:--------------|:-------------------------------|:--------|:----------|
| Load          | Net-Barracuda-Bma-Load-SNMP    | X       |           |
| Mails         | Net-Barracuda-Bma-Mails-SNMP   | X       |           |
| Storage       | Net-Barracuda-Bma-Storage-SNMP | X       |           |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Load" label="Load">

| Metric name                | Description                                 | Unit  |
| :------------------------- | :------------------------------------------ | :---- |
| system.cpu.load.percentage | Estimate of CPU and disk load on the system | %     |

</TabItem>
<TabItem value="Mails" label="Mails">

| Metric name                 | Description                                                                        | Unit  |
| :-------------------------- | :--------------------------------------------------------------------------------- | :---- |
| mails.inbound.hourly.count  | Number of inbound e-mails during the current hour                                  |       |
| mails.inbound.daily.count   | Number of inbound e-mails during the current calendar day (beginning at midnight)  |       |
| mails.inbound.total.count   | Number of inbound e-mails during the check period                                  |       |
| mails.internal.hourly.count | Number of internal e-mails during the current hour                                 |       |
| mails.internal.daily.count  | Number of internal e-mails during the current calendar day (beginning at midnight) |       |
| mails.internal.total.count  | Number of internal e-mails during the check period                                 |       |
| mails.outbound.hourly.count | Number of outbound e-mails during the current hour                                 |       |
| mails.outbound.daily.count  | Number of outbound e-mails during the current calendar day (beginning at midnight) |       |
| mails.outbound.total.count  | Number of outbound e-mails during the check period                                 |       |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                             | Description                             | Unit  |
| :-------------------------------------- | :-------------------------------------- | :---- |
| storage.firmware.space.usage.percentage | Storage space occupied by the firmware  | %     |
| storage.maillog.space.usage.percentage  | Storage space occupied by mail and logs | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Barracuda Message Archiver SNMP** :

```bash
yum install centreon-plugin-Network-Barracuda-Bma-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Barracuda Message Archiver SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Barracuda Message Archiver SNMP** :

```bash
yum install centreon-plugin-Network-Barracuda-Bma-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Barracuda Message Archiver SNMP** :

```bash
yum install centreon-pack-network-barracuda-bma-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Barracuda Message Archiver SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **Barracuda Message Archiver SNMP**.
* Appliquez le Modèle d'Hôte **Net-Barracuda-Bma-SNMP-custom**

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
/usr/lib/centreon/plugins/centreon_barracuda_bma_snmp.pl \
    --plugin=network::barracuda::bma::snmp::plugin \
    --mode=load \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu-load='' \
    --critical-cpu-load='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: system cpu load: 2.00% | 'system.cpu.load.percentage'=2.00%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_barracuda_bma_snmp.pl \
    --plugin=network::barracuda::bma::snmp::plugin \
    --mode=load \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_barracuda_bma_snmp.pl \
    --plugin=network::barracuda::bma::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
