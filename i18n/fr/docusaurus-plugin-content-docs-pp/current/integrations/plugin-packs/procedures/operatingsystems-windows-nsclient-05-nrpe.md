---
id: operatingsystems-windows-nsclient-05-nrpe
title: Windows NRPE 0.5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Ce connecteur de supervision permet de récupérer les métriques et les statuts collectés grâce à l'agent de monitoring NSClient++ et son serveur NRPE embarqué. 

### Modèles

Le pack **Windows NSClient 0.5** apporte 1 modèle d'hôte :

* OS-Windows-NSClient-05-NRPE-custom

Il apporte les modèles de service suivants :

| Alias de service      | Modèle de service                                          | Description de service                                                              | Par défaut | Découverte |
|:----------------------|:-----------------------------------------------------------|:------------------------------------------------------------------------------------|:-----------|:-----------|
| Active-Sessions       | OS-Windows-NSClient05-Counter-Active-Sessions-NRPE-custom  | Vérifier les sessions actives en utilisant le protocole NRPE                        |            |            |
| Counter-Generic       | OS-Windows-NSClient05-Counter-Generic-NRPE-custom          | Vérifier un compteur générique en utilisant le protocole NRPE                       |            |            |
| Cpu                   | OS-Windows-NSClient05-Cpu-NRPE-custom                      | Vérifier l'utilisation du Cpu en utilisant le protocole NRPE                        | X          |            |
| Disks                 | OS-Windows-NSClient05-Disks-NRPE-custom                    | Vérifier l'utilisation des disques en utilisant le protocole NRPE                   |            | X          |
| Eventlog-Generic      | OS-Windows-NSClient05-Eventlog-Generic-NRPE-custom         | Vérifier les journaux d'évènements en utilisant le protocole NRPE                   |            |            |
| Files-Generic         | OS-Windows-NSClient05-Files-Generic-NRPE-custom            | Vérifier des fichiers (date, taille, etc...) en utilisant le protocole NRPE         |            |            |
| Logfiles-Generic      | OS-Windows-NSClient05-Logfiles-Generic-NRPE-custom         | Vérifier un fichier de log en utilisant le protocole NRPE                           |            |            |
| Memory                | OS-Windows-NSClient05-Memory-NRPE-custom                   | Vérifier l'utilisation de la mémoire en utilisant le protocole NRPE                 | X          |            |
| Ntp                   | OS-Windows-NSClient05-Ntp-NRPE-custom                      | Vérifier la synchronisation du temps Ntp en utilisant le protocole NRPE             |            |            |
| Pending-Reboot        | OS-Windows-NSClient05-Pending-Reboot-NRPE-custom           | Vérifier si un reboot est attendu en utilisant le protocole NRPE                    |            |            |
| Process-generic       | OS-Windows-NSClient05-Process-Generic-NRPE-custom          | Vérifier l'état d'un processus en utilisant le protocole NRPE                       |            |            |
| Remote-Ping           | OS-Windows-NSClient05-Remote-Ping-NRPE-custom              | Vérifier l'état d'un hote via un ping distant en utilisant le protocole NRPE        |            |            |
| Services-Auto         | OS-Windows-NSClient05-Services-Auto-NRPE-custom            | Vérifier l'état des services démarrés en automatique en utilisant le protocole NRPE | X          |            |
| Services-Generic-Name | OS-Windows-NSClient05-Services-Generic-Name-NRPE-custom    | Vérifier l'état d'un service en utilisant le protocole NRPE                         |            |            |
| Sessions              | OS-Windows-NSClient05-Sessions-NRPE-custom                 | Vérifier les sessions en utilisant le protocole NRPE                                |            |            |
| Swap                  | OS-Windows-NSClient05-Swap-NRPE-custom                     | Vérifier l'utilisation du swap en utilisant le protocole NRPE                       | X          |            |
| Task-Generic          | OS-Windows-NSClient05-Task-Generic-NRPE-custom             | Vérifier les tâches planifiées en utilisant le protocole NRPE                       |            |            |
| Updates               | OS-Windows-Updates-NRPE-custom                             | Vérifier si Windows a des mises à jour en attente                                   |            |            |
| Uptime                | OS-Windows-NSClient05-Uptime-NRPE-custom                   | Vérifier l'uptime en utilisant le protocole NRPE                                    |            |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

|Nom de la règle            | Description             |
|:--------------------------|:------------------------|
| OS-Winfows-NRPE-Disk-Name | Découverte des disques. |

De plus amples informations sur la découverte automatique des services sont disponibles sur la [page dédiée](/onprem/monitoring/discovery/services-discovery).

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Counter-Active-Sessions" label="Counter-Active-Sessions">

| Nom de la métrique     | Unité |
| :--------------------- | :---- |
| Sessions\_value        | count |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Nom de la métrique    | Unité |
| :-------------------- | :---- |
| Counter\_value        | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Nom de la métrique | Unité |
| :----------------- | :---- |
| total 5m           | %     |
| total 1m           | %     |
| total 5s           | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Nom de la métrique | Unité |
| :----------------- | :---- |
| used               | Bytes |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Nom de la métrique  | Unité |
| :------------------ | :---- |
| problemCount        | count |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Nom de la métrique | Unité |
| :----------------- | :---- |
| count              | count |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Nom de la métrique        | Unité |
| :------------------------ | :---- |
| default\_lines            | count |
| default\_warnings         | count |
| default\_criticals        | count |
| default\_unknowns         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

|Nom de la métrique | Unité  |
| :----------------- | :---- |
| used               | Bytes |

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom de la métrique | Unité |
| :----------------- | :---- |
| swap               | Bytes |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Nom de la métrique                   | Unité |
| :----------------------------------- | :---- |
| sessions-created                     | count |
| sessions-disconnected                | count |
| sessions-reconnected                 | count |
| sessions-active                      | count |
| sessions-disconnected-current        | count |

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric Name                   | Unit   |
|:------------------------------|:-------|
| windows.pending.updates.count |        |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour surveiller les ressources *Windows* via NRPE, installez la version Centreon de l'agent NSClient++.
Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le paquet Centreon NRPE Client sur chaque Poller censé surveiller les ressources *Windows*:

```bash
yum install centreon-nrpe3-plugin
```

2. Sur l'interface Web Centreon, installez le **Windows NRPE 0.5** Centreon connecteur de supervision sur la page **Configuration > Gestionnaire de connecteurs de supervision**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le paquet Centreon Plugin sur chaque Poller censé surveiller les ressources *Windows*:

```bash
yum install centreon-nrpe3-plugin
```

2. Installez le RPM **Windows NRPE 0.5** Centreon Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe
```

3. Sur l'interface Web Centreon, installez le **Windows NRPE 0.5** Centreon connecteur de supervision sur la page **Configuration > Gestionnaire de connecteurs de supervision**.
  
</TabItem>
</Tabs>

## Configuration de l'hôte

* Connectez-vous à Centreon et ajoutez un nouvel hôte via **Configuration > Hôtes**.
* Remplissez les champs **Nom**, **Alias** et **Adresse IP/DNS** selon les paramètres de votre serveur *Windows*.
* Sélectionnez le modèle *OS-Windows-NSClient-05-NRPE-custom* à appliquer à l'hôte.
* Une fois le modèle appliqué, remplissez les macros correspondantes. Si vous êtes en version 21.10 ou supérieure et que vous venez d'installer **centreon-nrpe3-plugin**, vous devrez remplacer les valeurs par défaut des macros par celles en gras :

| Mandatory | Name             | Value                     | Description                                                      |
|:----------|:-----------------|---------------------------| :----------------------------------------------------------------|
| X         | NRPECLIENT       | **check_centreon_nrpe3**  | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | 5666                      | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | 30                        | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | **-u -2 -P 8192**         | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |

## Dépannage

Veuillez trouver la documentation de dépannage pour les contrôles NRPE dans le [chapitre dédié](../getting-started/how-to-guides/troubleshooting-plugins.md#nrpe-checks) de la documentation Centreon.
