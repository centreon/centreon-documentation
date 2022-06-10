---
id: network-cambium-epmp-snmp
title: Cambium ePMP SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Cambium ePMP SNMP** apporte un modèle d'hôte :

* Net-Cambium-Epmp-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service                | Description                                                 | Défaut | Découverte |
|:-----------|:---------------------------------|:------------------------------------------------------------|:-------|:-----------|
| Antenna    | Net-Cambium-Epmp-Antenna-SNMP    | Contrôle le gain d'une antenne en dBi                       | X      |            |
| Cpu        | Net-Cambium-Epmp-Cpu-SNMP        | Contrôle les cpu                                            | X      |            |
| Interfaces | Net-Cambium-Epmp-Interfaces-SNMP | Contrôle les interfaces réseau                              | X      | X          |
| License    | Net-Cambium-Epmp-License-SNMP    | Contrôle la validité de la licence                          | X      |            |
| Uptime     | Net-Cambium-Epmp-Uptime-SNMP     | Durée depuis laquelle l'équipement tourne sans interruption | X      |            |

### Règles de découverte

| Nom de la règle                    | Description                                                          |
|:-----------------------------------|:---------------------------------------------------------------------|
| Net-Cambium-Epmp-SNMP-Traffic-Name | Découverte et mise en supervision automatique des interfaces réseaux |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Antenna" label="Antenna">

| Métrique         | Unité |
|:-----------------|:------|
| antenna.gain.dBi | dBi   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                          | Unité |
|:----------------------------------|:------|
| system.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                 | Unité                                                                        |
| :--------------------------------------- | :--------------------------------------------------------------------------- |
| status                                   |                                                                              |
| interface.traffic.in.bitspersecond       | bps                                                                          |
| interface.traffic.out.bitspersecond      | bps                                                                          |
| interface.packets.in.error.percentage    | %                                                                            |
| interface.packets.in.discard.percentage  | %                                                                            |
| interface.packets.out.error.percentage   | %                                                                            |
| interface.packets.out.discard.percentage | %                                                                            |

</TabItem>
<TabItem value="License" label="License">

| Métrique    | Unité |
|:------------|:------|
| status      |       |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique                    | Unité  |
| :-------------------------- | :----- |
| system.uptime               | s      |


</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Cambium ePMP SNMP** en SNMP,  il est nécessaire de configurer SNMP sur l'équipement comme indiqué par le constructeur :
* https://community.cambiumnetworks.com/t/epmp-configuring-ap-system-simple-network-management-protocol-snmp/59028

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Cambium ePMP SNMP** :

```bash
yum install centreon-plugin-Network-Cambium-Epmp-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Cambium ePMP SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Cambium ePMP SNMP** :

```bash
yum install centreon-plugin-Network-Cambium-Epmp-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Cambium ePMP SNMP** :

```bash
yum install centreon-pack-network-cambium-epmp-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Cambium ePMP SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Cambium ePMP SNMP**.
* Appliquez le modèle d'hôte **Net-Cambium-Epmp-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_cambium_epmp.pl \
    --plugin=network::cambium::epmp::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu='' \
    --critical-cpu='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: CPU usage: 9%  | 'system.cpu.utilization.percentage'=9%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cambium_epmp.pl \
    --plugin=network::cambium::epmp::snmp::plugin \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cambium_epmp.pl \
    --plugin=network::cambium::epmp::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.