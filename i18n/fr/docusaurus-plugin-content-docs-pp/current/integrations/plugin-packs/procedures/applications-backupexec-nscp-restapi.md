---
id: applications-backupexec-nscp-restapi
title: Veritas Backup Exec NSCP Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Veritas Backup Exec apporte un modèle d'hôte :
* App-Backupexec-Nscp-Restapi-custom

Il apporte les modèles de service suivants :

| Alias | Modèle de service                   | Défaut | Découverte |
|:--------------|:-----------------------------------|:--------|:----------|
| Alerts        | App-Backupexec-Alerts-Nscp-Restapi | X       |           |
| Disks         | App-Backupexec-Disks-Nscp-Restapi  | X       | X         |
| Jobs          | App-Backupexec-Jobs-Nscp-Restapi   | X       |           |

### Règles de découverte

| Nom de la règle                       | Description                                                  |
|:--------------------------------------|:-------------------------------------------------------------|
| App-Backupexec-Nscp-Restapi-Disk-Name | Découvre les disques et supervise le statut et l'utilisation |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                       | Description                                  | Unit  |
| :-------------------------------- | :------------------------------------------- | :---- |
| alerts.severity.none.count        | Number of alerts with none severity          |       |
| alerts.severity.question.count    | Number of alerts with question severity      |       |
| alerts.severity.error.count       | Number of alerts with error severity         |       |
| alerts.severity.warning.count     | Number of alerts with warning severity       |       |
| alerts.severity.information.count | Number of alerts with informational severity |       |
| alert status                      | Current alert status                         |       |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                             | Description                                                | Unit |
|:--------------------------------------- |:---------------------------------------------------------- |:---- |
| disk status                             | Status of the disk (enabled or disabled)                   |      |
| *disk_name*#disk.space.usage.bytes      | Space used on the disk                                     | B    |
| *disk_name*#disk.space.free.bytes       | Free space left on the disk                                | B    |
| *disk_name*#disk.space.usage.percentage | Space used on the disk in percentage                       | %    |


</TabItem>
<TabItem value="Jobs" label="Jobs">

| Metric name         | Description                     | Unit  |
| :------------------ | :------------------------------ | :---- |
| jobs.detected.count | Number of jobs detected         |       |
| job status          | Current job status              |       |
| job long status     | Current active job elapsed time |       |

</TabItem>
</Tabs>

## Prérequis

### NSClient Configuration

Pour superviser un **Backup Exec** de Veritas via NRPE, installez la version packagée Centreon de l'agent NSClient++.
Suivez notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)

Veuillez télécharger et installer la dernière version en date de **Centreon-NSClient-xxx.exe**: https://github.com/centreon/centreon-nsclient-build/releases

Par défaut, l'utilisateur **centreon** avec le mot de passe **centreon** est utilisé pour se connecter à NSClient.

### Flux réseau

La communication doit être possible sur le port TCP 8443 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Veritas Backup Exec NSCP API** :

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. Sur l'interface web de Centreon, installez le Pack **Veritas Backup Exec NSCP API** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installez le plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Veritas Backup Exec NSCP API** :

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. Sur le serveur central Centreon, installez le RPM du Pack **Veritas Backup Exec NSCP API** :

```bash
yum install centreon-pack-applications-backupexec-nscp-restapi
```

3. Sur l'interface web de Centreon, installez le Pack **Veritas Backup Exec NSCP API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre serveur **Veritas Backup Exec**.
* Appliquez le modèle d'hôte **App-Backupexec-Nscp-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Obligatoire| Nom                      | Description                                                                                  |
| :-------- | :------------------------ | :------------------------------------------------------------------------------------------- |
|           | NSCPRESTAPIPORT           | Port used (Default: 8443)                                                                    |
|           | NSCPRESTAPIPROTO          | Protocol used (Default: https)                                                               |
|           | NSCPRESTAPIUSERNAME       | NSClient API username                                                                        |
|           | NSCPRESTAPIPASSWORD       | NSClient API password                                                                        |
|           | NSCPRESTAPILEGACYPASSWORD | NSClient API legacy authentication password                                                  |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --insecure)                       |
|           | BEMCLIFILE                | Powershell module file (Default: C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester la bonne configuration NSClient directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** :

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_version
```

La commande devrait retourner un message de sortie similaire à :

```bash
0.5.2.41 2018-04-26
```

Vous pouvez maintenant tester le plugin Backup Exec :

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='disks' \
    --arg='--filter-name="" --verbose' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All disks are ok | 'disk 1#disk.space.usage.bytes'=1000000B;;;0;100000000 'disk 1#disk.space.free.bytes'=99000000B;;;0;100000000 'disk 1#disk.space.usage.percentage'=1.00%;;;0;100 'disk 2#disk.space.usage.bytes'=1000000B;;;0;250000000 'disk 2#disk.space.free.bytes'=249000000B;;;0;250000000 'disk 2#disk.space.usage.percentage'=0.40%;;;0;100
checking disk 'disk 1' [type: tapeDriveDevice]
    status: enabled
    space usage total: 95.37 MB used: 976.56 KB (1.00%) free: 94.41 MB (99.00%)
checking disk 'disk 2' [type: deduplicationDiskStorageDevice]
    status: enabled
    space usage total: 238.42 MB used: 976.56 KB (0.40%) free: 237.46 MB (99.60%)
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='disks' \
    --arg='--help'
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='xxx' \
    --arg='--list-mode'
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
