---
id: network-cisco-umbrella-snmp
title: Cisco Umbrella

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Cisco Umbrella** apporte un modèle d'hôte :

* Net-Cisco-Umbrella-SNMP-custom

Il apporte les modèles de service suivants :

| Alias            | Modèle de service                        | Description                                                  | Défaut |
| :--------------- | :--------------------------------------- | :----------------------------------------------------------- | :----- |
| Appliance-Status | Net-Cisco-Umbrella-Appliance-Status-SNMP | Contrôle le statut de l'appliance virtuelle                  | X      |
| Connectivity     | Net-Cisco-Umbrella-Connectivity-SNMP     | Contrôle le statut de la connexion entre l'appliance virtuelle Umbrella et les serveurs DNS, le DNS local, le dashboard Umbrella (cloud) et les connecteurs AD. | X      |
| Cpu              | Net-Cisco-Umbrella-Cpu-SNMP              | Contrôle le taux d'utilisation du CPU                        | X      |
| Load-Average     | Net-Cisco-Umbrella-Load-Average-SNMP     | Contrôle le Load sur 5m et 15m                               | X      |
| Memory           | Net-Cisco-Umbrella-Memory-SNMP           | Contrôle du taux d'utilisation mémoire                       | X      |
| Query            | Net-Cisco-Umbrella-Query-SNMP            | Contrôle le nombre de requêtes DNS par seconde durant les dernières 5 et 15 minutes | X      |
| Storage-Usage    | Net-Cisco-Umbrella-Storage-SNMP          | Contrôle permettant de vérifier l'utilisation de l'espace disque | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Appliance-Status" label="Appliance-Status">

| Métrique | Unité |
| :------- | :---- |
| status   |       |

</TabItem>
<TabItem value="Connectivity" label="Connectivity">

| Métrique                                       | Unité |
| :--------------------------------------------- | :---- |
| DNS connectivity status                        |       |
| Local DNS connectivity status                  |       |
| Umbrella dashboard (cloud) connectivity status |       |
| AD connectors connectivity status              |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                              | Unité |
| :------------------------------------ | :---- |
| cpu.user.utilization.percentage       | %     |
| cpu.nice.utilization.percentage       | %     |
| cpu.system.utilization.percentage     | %     |
| cpu.idle.utilization.percentage       | %     |
| cpu.wait.utilization.percentage       | %     |
| cpu.kernel.utilization.percentage     | %     |
| cpu.interrupt.utilization.percentage  | %     |
| cpu.softirq.utilization.percentage    | %     |
| cpu.steal.utilization.percentage      | %     |
| cpu.guest.utilization.percentage      | %     |
| cpu.guestnice.utilization.percentage  | %     |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Métrique               | Unité |
| :--------------------- | :---- |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                       | Unité |
| :----------------------------- | :---- |
| memory.usage.bytes             | B     |
| memory.free.bytes              | B     |
| memory.usage.percentage        | %     |
| memory.buffer.bytes            | B     |
| memory.cached.bytes            | B     |
| memory.shared.bytes            | B     |

</TabItem>
<TabItem value="Query" label="Query">

| Métrique                           | Unité |
| :--------------------------------- | :---- |
| dns.query.last.15m.persecond.count | count |
| dns.query.last.5m.persecond.count  | count |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Métrique                       | Unité |
| :----------------------------- | :---- |
| storage.utilization.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Cisco Umbrella** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [Cisco Umbrella](https://docs.umbrella.com/deployment-umbrella/docs/appendix-c-enable-snmp-monitoring)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Cisco Umbrella** :

```bash
yum install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Cisco Umbrella** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Cisco Umbrella** :

```bash
yum install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Cisco Umbrella** :

```bash
yum install centreon-pack-network-cisco-umbrella-snmp
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Cisco Umbrella** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Cisco Umbrella**.
* Appliquez le modèle d'hôte **Net-Cisco-Umbrella-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
| :---------- | :--------------- | :------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_cisco_umbrella_snmp.pl \
    --plugin=network::cisco::umbrella::snmp::plugin \
    --mode=query \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-5m='' \
    --critical-5m='' \
    --warning-15m='' \
    --critical-15m='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Query rate: 3/s (5m), 5/s (15m) | 'dns.query.last.5m.persecond.count'=3;;;0; 'dns.query.last.15m.persecond.count'=5;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cisco_umbrella_snmp.pl \
    --plugin=network::cisco::umbrella::snmp::plugin \
    --mode=query \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cisco_umbrella_snmp.pl \
    --plugin=network::cisco::umbrella::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.