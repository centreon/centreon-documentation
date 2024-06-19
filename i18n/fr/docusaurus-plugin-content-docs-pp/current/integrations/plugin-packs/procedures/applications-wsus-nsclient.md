---
id: applications-wsus-nsclient
title: Microsoft WSUS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Microsoft WSUS** apporte 2 modèles d'hôte différents :

* App-Wsus-NRPE-custom
* App-Wsus-NSClient-05-Restapi-custom

Ils apportent les modèles de service suivants: 

<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

| Alias                  | Modèle de service                                  | Description                                                                    | Défaut |
|:-----------------------|:---------------------------------------------------|:-------------------------------------------------------------------------------|:-------|
| Computers-Status       | App-Wsus-Computers-Status-NRPE                     | Contrôle le nombre d'ordinateurs dans chacun des statuts via NRPE              | X      |
| Server-Statistics      | App-Wsus-Server-Statistics-NRPE                    | Contrôle plusieurs statistiques du serveur WSUS via NRPE                       | X      |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NRPE               | Contrôle la synchronisation des mises à jour avec le serveur WSUS via NRPE     | X      |
| Update-Status          | App-Wsus-Update-Status-NRPE                        | Contrôle le statut des mises à jour via NRPE                                   | X      |

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

| Alias                  | Modèle de service                                  | Description                                                                    | Défaut |
|:-----------------------|:---------------------------------------------------|:-------------------------------------------------------------------------------|:-------|
| Computers-Status       | App-Wsus-Computers-Status-NSClient05-Restapi       | Contrôle le nombre d'ordinateurs dans chacun des statuts via l'API             | X      |
| Server-Statistics      | App-Wsus-Server-Statistics-NSClient05-Restapi      | Contrôle plusieurs statistiques du serveur WSUS via l'API                      | X      |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NSClient05-Restapi | Contrôle la synchronisation des mises à jour avec le serveur WSUS via l'API    | X      |
| Update-Status          | App-Wsus-Update-Status-NSClient05-Restapi          | Contrôle le statut des mises à jour via l'API                                  | X      |

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Métrique           | Unité |
|:-------------------|:------|
| needing-updates    |       |
| not-contacted      |       |
| unassigned         |       |
| up-to-date         |       |
| with-update-errors |       |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Métrique             | Unité |
|:---------------------|:------|
| approved-updates     |       |
| computer-groups      |       |
| computers            |       |
| declined-updates     |       |
| expired-updates      |       |
| not-approved-updates |       |
| stale-updates        |       |
| updates              |       |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Métrique                      | Unité |
|:------------------------------|:------|
| synchronisation-progress      |       |
| synchronisation-status        |       |
| last-synchronisation-duration |       |
| last-synchronisation-status   |       |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Métrique            | Unité |
|:--------------------|:------|
| needed-by-computers |       |
| needing-files       |       |
| up-to-date          |       |
| with-client-errors  |       |
| with-server-errors  |       |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

Pour surveiller les ressources *WSUS Server* via NRPE, installez la version Centreon de l'agent NSClient++.
Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que le **serveur NRPE**
embarqué est correctement configuré.

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

Pour surveiller les ressources *WSUS Server* via NSClient++ API, installez la version Centreon de l'agent NSClient++.
Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur Web / RestAPI** est correcte.

</TabItem>
</Tabs>

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

> Si vous souhaitez utiliser le modèle d'hôte **NRPE**, installez le paquet centreon-nrpe3. 

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-wsus-nsclient
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Microsoft WSUS**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-nrpe3-plugin
apt install centreon-plugin-operatingsystems-windows-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **WSUS Server**.
* Appliquez le modèle d'hôte de votre choix: **App-Wsus-NRPE-custom** ou **App-Wsus-NSClient-05-Restapi-custom**. 
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.


<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

| Obligatoire | Macro                     | Description                                                                            |
|:------------|:--------------------------|:---------------------------------------------------------------------------------------|
|             | NRPECLIENT                | (Défaut : 'check_centreon_nrpe')                                                       |
|             | NRPEEXTRAOPTIONS          | Options spécifiques à NRPE (Défaut: -u -m 8192)                                        |
|             | NRPEPORT                  | Port d'écoute du serveur NRPE (Défaut : '5666')                                        |
|             | NRPETIMEOUT               | Timeout (Défaut : '55')                                                                |
|     X       | WSUSPORT                  | Port d'écoute sur serveur WSUS                                                         |
|     X       | WSUSSERVER                | Nom/FQDN du serveur WSUS                                                               |

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

| Obligatoire | Macro                     | Description                                                                            |
|:------------|:--------------------------|:---------------------------------------------------------------------------------------|
|             | NSCPRESTAPIEXTRAOPTIONS   | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | NSCPRESTAPILEGACYPASSWORD | Mot de passe pour l'authentification basique de l'API                                  |
|             | NSCPRESTAPIPORT           | Port d'écoute de l'API                                                                 |
|             | NSCPRESTAPIPROTO          | Protocole de l'API                                                                     |
|     X       | WSUSPORT                  | Port d'écoute sur serveur WSUS                                                         |
|     X       | WSUSSERVER                | Nom/FQDN du serveur WSUS                                                               |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

> Les exemples suivants sont donnés pour le modèle RestAPI.

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --hostname=10.0.0.1 \
    --port='' \
    --proto='' \
    --legacy-password='' \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::wsus::local::plugin' \
    --arg='server-statistics' \
    --arg=' \
    --wsus-server="my.wsus.server.domain" \
    --wsus-port="443" \
    --filter-counters="" \
    --warning-computers="" \
    --critical-computers="" \
    --warning-computer-groups="" \
    --critical-computer-groups="" \
    --warning-updates="" \
    --critical-updates="" \
    --warning-approved-updates="" \
    --critical-approved-updates="" \
    --warning-declined-updates="" \
    --critical-declined-updates=""\
    --warning-not-approved-updates="" \
    --critical-declined-updates="" \
    --warning-stale-updates="" \
    --critical-stale-updates="" \
    --warning-expired-updates="" \
    --critical-expired-updates="" \
    --verbose'\
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Computers: 120 Computer Groups: 6 Updates: 19 Approved Updates: 3 Declined Updates: 14 Not Approved Updates: 22 Stale Updates: 1 Expired Updates: 5 | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.