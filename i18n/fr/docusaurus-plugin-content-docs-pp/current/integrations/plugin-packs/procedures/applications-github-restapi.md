---
id: applications-github-restapi
title: Github
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Github** apporte 2 modèles d'hôte :

* **App-Github-Repository-Restapi-custom**
* **App-Github-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Github-Repository-Restapi-custom" label="App-Github-Repository-Restapi-custom">

| Alias         | Modèle de service                                   | Description                                            |
|:--------------|:----------------------------------------------------|:-------------------------------------------------------|
| Commits       | App-Github-Repository-Commits-Restapi-custom        | Trace le nombre de commit réalisés sur un dépôt github |
| Issues        | App-Github-Repository-Issues-Restapi-custom         | Trace le nombre d'issue ouvertes sur un dépôt github   |
| Pull-Requests | App-Github-Repository-Pull-Resquests-Restapi-custom | Trace le nombre de PR ouvertes sur un dépôt github     |
| Statistics    | App-Github-Repository-Statistics-Restapi-custom     | Requête et trace les statistiques d'un dépôt           |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Github-Repository-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="App-Github-Restapi-custom" label="App-Github-Restapi-custom">

| Alias         | Modèle de service                | Description                                            |
|:--------------|:---------------------------------|:-------------------------------------------------------|
| Github-Status | App-Github-Status-Restapi-custom | Contrôle le statut de la plateforme github via son API |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Github-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Commits" label="Commits">

| Métrique    | Unité |
|:------------|:------|
| commits     | N/A   |

</TabItem>
<TabItem value="Github-Status" label="Github-Status">

| Métrique | Unité |
|:---------|:------|
| status   | N/A   |

</TabItem>
<TabItem value="Issues" label="Issues">

| Métrique    | Unité |
|:------------|:------|
| issues      | N/A   |

</TabItem>
<TabItem value="Pull-Requests" label="Pull-Requests">

| Métrique     | Unité |
|:-------------|:------|
| pullrequests | N/A   |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Métrique    | Unité |
|:------------|:------|
| forks       | N/A   |
| watchers    | N/A   |
| stars       | N/A   |

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link\n\
to the manufacturer official documentation BUT you should try to be as complete\n\
as possible here as it will save time to everybody.*

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-github-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-github-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-github-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-github-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Github**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Github-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Github-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-github-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Github-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Github-Repository-Restapi-custom" label="App-Github-Repository-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Github-Repository-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| GITHUBAPIHOSTNAME | IP Addr/FQDN of the GitHub's API                                                                                                                   | api.github.com    |             |
| GITHUBAPIPROTO    | Protocol used by GitHub's API                                                                                                                      | https             |             |
| GITHUBAPIPORT     | Port used by GitHub's API                                                                                                                          | 443               |             |
| GITHUBOWNER       | Specify GitHub's owner                                                                                                                             |                   | X           |
| GITHUBREPOSITORY  | Specify GitHub's repository                                                                                                                        |                   | X           |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Github-Restapi-custom" label="App-Github-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Github-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                                                                        | Valeur par défaut      | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| GITHUBSTATUSHOSTNAME | IP Address or FQDN of the GitHub's status website                                                                                                  | status.github.com      |             |
| GITHUBSTATUSPROTO    | Protocol used by GitHub's API                                                                                                                      | 443                    |             |
| GITHUBSTATUSPORT     | Port used by GitHub's API                                                                                                                          | https                  |             |
| GITHUBSTATUSURLPATH  | Set path to get GitHub's status information                                                                                                        | /api/last-message.json |             |
| EXTRAOPTIONS         | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                        |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Commits" label="Commits">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Github-Status" label="Github-Status">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Issues" label="Issues">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold on issues count                                                                                                                |                   |             |
| CRITICAL     | Critical threshold on issues count                                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Pull-Requests" label="Pull-Requests">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold on pull request count                                                                                                          |                   |             |
| CRITICAL     | Critical threshold on pull request count                                                                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_github_restapi.pl \
	--plugin=apps::github::plugin \
	--mode=stats \
	--hostname='api.github.com' \
	--port='443' \
	--proto='https' \
	--owner='' \
	--repository='' \
	--credentials \
	--username='' \
	--password=''  
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 'forks'=6;;;0;'watchers'=90;;;0;'stars'=82;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_github_restapi.pl \
	--plugin=apps::github::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                  | Modèle de service associé                           |
|:----------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| commits [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/github/mode/commits.pm)]           | App-Github-Repository-Commits-Restapi-custom        |
| issues [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/github/mode/issues.pm)]             | App-Github-Repository-Issues-Restapi-custom         |
| pullrequests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/github/mode/pullrequests.pm)] | App-Github-Repository-Pull-Resquests-Restapi-custom |
| stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/github/mode/stats.pm)]               | App-Github-Repository-Statistics-Restapi-custom     |
| status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/github/mode/status.pm)]             | App-Github-Status-Restapi-custom                    |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Commits" label="Commits">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Github-Status" label="Github-Status">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Issues" label="Issues">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Pull-Requests" label="Pull-Requests">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_github_restapi.pl \
	--plugin=apps::github::plugin \
	--mode=stats \
	--help
```
