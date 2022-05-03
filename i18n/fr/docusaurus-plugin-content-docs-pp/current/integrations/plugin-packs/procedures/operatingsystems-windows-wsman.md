---
id: operatingsystems-windows-wsman
title: Windows WSMAN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Windows WSMAN apporte 1 modèle d'hôte :

* OS-Windows-WSMAN-custom

Il apporte les modèles de service suivants :

| Alias              | Modèle de service                   | Description                                                                                                                                                                  | Défaut | Découverte |
|:-------------------|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|:-----------|
| Cpu                | OS-Windows-Cpu-WSMAN                | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur | X      |            |
| Disk-Global        | OS-Windows-Disk-Global-WSMAN        | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque                                                                       |        | X          |
| Files-Date-Generic | OS-Windows-Files-Date-Generic-WSMAN | Contrôle le temps                                                                                                                                                            |        |            |
| Files-Size-Generic | OS-Windows-Files-Size-Generic-WSMAN | Contrôle la taille des fichiers                                                                                                                                              |        |            |
| Memory             | OS-Windows-Memory-WSMAN             | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                            | X      |            |
| Ntp                | OS-Windows-Ntp-WSMAN                | Contrôle la synchronisation avec un serveur NTP                                                                                                                              |        |            |
| Pending-Reboot     | OS-Windows-Pending-Reboot-WSMAN     | Contrôle si Windows nécessite un redémarrage                                                                                                                                 |        |            |
| Process-Global     | OS-Windows-Process-Global-WSMAN     | Contrôle permettant de vérifier que les processus Windows sont démarrés                                                                                                      |        | X          |
| Service-Generic    | OS-Windows-Service-Generic-WSMAN    | Contrôle permettant de vérifier si les services Windows sont démarrés                                                                                                        |        | X          |
| Services-Auto      | OS-Windows-Services-Auto-WSMAN      | Contrôle permettant de vérifier si les services Windows sont démarrés                                                                                                        | X      |            |
| Sessions           | OS-Windows-Sessions-WSMAN           | Contrôle les sessions utilisateurs Windows                                                                                                                                   |        |            |
| Swap               | OS-Windows-Swap-WSMAN               | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                       | X      |            |
| Traffic-Global     | OS-Windows-Traffic-Global-WSMAN     | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                                          |        | X          |
| Uptime             | OS-Windows-Uptime-WSMAN             | Contrôle permettant de vérifier la disponibilité du serveur Windows depuis le dernier redémarrage. Il s'agit d'une indication, il n'y a pas de seuil défini                  |        |            |

### Règles de découverte

| Nom de la règle                 | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| OS-Windows-WSMAN-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-Windows-WSMAN-Processes-Name | Discover processes and monitor their system usage             |
| OS-Windows-WSMAN-Services-Name  | Discover services and monitor their system usage              |
| OS-Windows-WSMAN-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |

### Métriques & statuts collectés

<Tabs groupId="metrics">
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| storages.detected.count                   | count |
| *storages*#storage.space.usage.bytes      | B     |
| *storages*#storage.space.free.bytes       | B     |
| *storages*#storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Métrique        | Unité |
|:----------------|:------|
| file.size.bytes | B     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique            | Unité |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Métrique    | Unité  |
|:------------|:-------|
| status      | string |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Métrique                 | Unité  |
|:------------------------ |:-------|
| processes.detected.count | count  |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique                            | Unité |
|:------------------------------------|:------|
| sessions.active.current.count       | count |
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.disconnected.current.count | count |
| sessions.reconnected.total.count    | count |

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique                            | Unité |
|:------------------------------------|:------|
| *files*#page.space.usage.bytes      | B     |
| *files*#page.space.free.bytes       | B     |
| *files*#page.space.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *interfaces*#interface.packets.in.discard.count  | count |
| *interfaces*#interface.packets.in.error.count    | count |
| *interfaces*#interface.traffic.in.bitspersecond  | B/s   |
| *interfaces*#interface.packets.out.discard.count | count |
| *interfaces*#interface.packets.out.error.count   | count |
| *interfaces*#interface.traffic.out.bitspersecond | B/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité  |
|:------------|:-------|
| uptime      | s      |

</TabItem>
</Tabs>

## Prérequis

Pour superviser les serveurs Windows via WSMAN, merci de suivre notre [documentation officielle](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) et de vous assurer que WinRM et vos droits sont correctement configurés.

## Installation

<Tabs groupId="setup">
<TabItem value="Online License" label="Online License">

1. Installez le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Windows WSMAN** :

  ```bash
  yum install centreon-plugin-Operatingsystems-Windows-Wsman
  ```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Windows WSMAN** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Windows WSMAN** :

  ```bash
  yum install centreon-plugin-Operatingsystems-Windows-Wsman
  ```

2. Sur le serveur central Centreon, installez le RPM du Pack **Windows WSMAN** :

  ```bash
  yum install centreon-pack-operatingsystems-windows-wsman
  ```

3. Sur l'interface web de Centreon, installer le Plugin Pack **Windows WSMAN** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address/DNS** correspondant à votre serveur **Windows WSMAN**.
* Appliquez le Modèle d'Hôte **OS-Windows-WSMAN-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | WSMANEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | WSMANPASSWORD     |                                                                                        |
|             | WSMANPORT         | 5985                                                                                   |
|             | WSMANPROTO        | http                                                                                   |
|             | WSMANUSERNAME     |                                                                                        |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
    --plugin=os::windows::wsman::plugin \
    --mode=uptime \
    --hostname=10.0.0.1 \
    --wsman-scheme=http \
    --wsman-port=5985 \
    --wsman-username='' \
    --wsman-password='' \
    --warning='' \
    --critical='' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | System uptime is: 53m 15s | 'system.uptime.seconds'=3195s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
    --plugin=os::windows::wsman::plugin \
    --mode=uptime \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
    --plugin=os::windows::wsman::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.
