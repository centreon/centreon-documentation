---
id: applications-selenium
slug: /applications-selenium
title: Selenium
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Selenium** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Selenium** apporte 2 modèles d'hôte :

* **App-Selenium-Katalon-custom**
* **App-Selenium-WAA-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Selenium-Katalon-custom" label="App-Selenium-Katalon-custom">

| Alias             | Modèle de service                    | Description                                                                                                                                                                         |
|:------------------|:-------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Scenario-Selenium | App-Selenium-Scenario-Katalon-custom | Contrôle permettant d'exécuter un scénario Selenium et de récupérer son temps d'exécution (scénario se basant sur le plugin navigateur Katalon Automation Recorder avec export XML) |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Selenium-Katalon-custom** est utilisé.

</TabItem>
<TabItem value="App-Selenium-WAA-custom" label="App-Selenium-WAA-custom">

| Alias             | Modèle de service                | Description                                                                               |
|:------------------|:---------------------------------|:------------------------------------------------------------------------------------------|
| Scenario-Selenium | App-Selenium-Scenario-WAA-custom | Contrôle permettant d'exécuter un scénario Selenium et de récupérer son temps d'exécution |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Selenium-WAA-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Scenario-Selenium-Katalon" label="Scenario-Selenium-Katalon">

| Nom                | Unité |
|:-------------------|:------|
| _prct              | %     |
| time-scenario      | ms    |
| state              | N/A   |
| *steps1*#time-step | ms    |
| *steps2*#time-step | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Scenario-Selenium-WAA" label="Scenario-Selenium-WAA">

| Nom          | Unité |
|:-------------|:------|
| time         | s     |
| steps        | count |
| availability | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

La communication doit être possible sur le port 4444 (ou un autre port mais vous devrez 
modifier le port par défaut dans le modèle d'hôte) depuis le collecteur Centreon vers le serveur Selenium.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-selenium
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-selenium
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-selenium
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-selenium
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Selenium**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Applications-Selenium
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Selenium
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-selenium
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Selenium
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Selenium-Katalon-custom" label="App-Selenium-Katalon-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Selenium-Katalon-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                                                                        | Valeur par défaut      | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| SELENIUMHOSTNAME  | IP Addr/FQDN of the Selenium server                                                                                                                |                        |             |
| SELENIUMPORT      | Port used by Selenium server                                                                                                                       | 4444                   |             |
| SCENARIODIRECTORY | Directory where scenarios are stored                                                                                                                | /var/lib/centreon\_waa |             |
| SELENIUMBROWSER   | Browser used by Selenium server                                                                                                                    | *firefox               |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                        |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Selenium-WAA-custom" label="App-Selenium-WAA-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Selenium-WAA-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro        | Description                         | Valeur par défaut      | Obligatoire |
|:-------------|:------------------------------------|:-----------------------|:-----------:|
| SELENIUMPORT | Port used by Selenium server        | 4444                   |             |
| SCENARIODIR  | Directory where scenarios are stored | /var/lib/centreon\_waa |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Scenario-Selenium-Karalon" label="Scenario-Selenium-Katalon">

| Macro                | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| TIMEOUT              | Set scenario execution timeout in second                                                                                                         | 50                  |             |
| ACTIONTIMEOUT        | Set action execution timeout in second                                                                                                           | 10                  |             |
| SCENARIONAME         | Scenario to play (without extension)                                                                                                             |                     |      x      |
| WARNINGFAILED        | Threshold                                                                                                                                        |                     |             |
| CRITICALFAILED       | Threshold                                                                                                                                        |                     |             |
| CRITICALSTATE        | Critical threshold for step state                                                                                                                | %\{state\} !~ /OK/i |             |
| WARNINGSTATE         | Warning threshold for step state                                                                                                                 |                     |             |
| WARNINGSUCCESSFUL    | Threshold                                                                                                                                        |                     |             |
| CRITICALSUCCESSFUL   | Threshold                                                                                                                                        |                     |             |
| WARNINGTIMESCENARIO  | Warning threshold in milliseconds for scenario execution time                                                                                    |                     |             |
| CRITICALTIMESCENARIO | Critical threshold in milliseconds for scenario execution time                                                                                   |                     |             |
| WARNINGTIMESTEP      | Warning threshold in milliseconds for step execution time                                                                                        |                     |             |
| CRITICALTIMESTEP     | Critical threshold in milliseconds for step execution time                                                                                       |                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose           |             |

</TabItem>
<TabItem value="Scenario-Selenium-WAA" label="Scenario-Selenium-WAA">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEOUT      | Set scenario execution timeout in second                                                                                                         | 40                |             |
| SCENARIONAME | Scenario to play (without extension)                                                                                                             |                   |      x      |
| WARNING      | Warning threshold in seconds (scenario execution time)                                                                                           | 20                |             |
| CRITICAL     | Critical threshold in seconds (scenario execution response time)                                                                                 | 30                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_selenium.pl \
	--plugin=apps::selenium::plugin \
	--mode=scenario-katalon \
	--selenium-hostname= \
	--selenium-port='4444' \
	--browser='*firefox' \
	--directory='/var/lib/centreon\_waa'  \
	--scenario='XXXX' \
	--timeout='50' \
	--action-timeout='10' \
	--warning-state='' \
	--critical-state='%\{state\} !~ /OK/i' \
	--warning-failed='' \
	--critical-failed='' \
	--warning-successful='' \
	--critical-successful='' \
	--warning-time-scenario='' \
	--critical-time-scenario='' \
	--warning-time-step='' \
	--critical-time-step='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:   Total execution time : 912 ms All steps state are ok | '_prct'=75%;;;;100 '_prct'=96%;;;;100 'time-scenario'=912ms;;;0; 'steps1#time-step'=39595ms;;;0; 'steps2#time-step'=64207ms;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_selenium.pl \
	--plugin=apps::selenium::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                           | Modèle de service associé            |
|:-------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| scenario [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/selenium/mode/scenario.pm)]                | App-Selenium-Scenario-WAA-custom     |
| scenario-katalon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/selenium/mode/scenariokatalon.pm)] | App-Selenium-Scenario-Katalon-custom |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Scenario-Selenium" label="Scenario-Selenium">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --selenium-hostname      |   IP Addr/FQDN of the Selenium server.                                                                                        |
| --selenium-port          |   Port used by Selenium server.                                                                                               |
| --browser                |   Browser used by Selenium server (default : '*firefox').                                                                     |
| --directory              |   Directory where scenarios are stored.                                                                                        |
| --scenario               |   Scenario to play (without extension).                                                                                       |
| --timeout                |   Set scenario execution timeout in second (default: 50).                                                                     |
| --warning                |   Warning threshold in seconds (scenario execution time)                                                                      |
| --critical               |   Critical threshold in seconds (scenario execution response time)                                                            |
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --force-continue         |   Don't stop if error.                                                                                                        |
| --action-timeout         |   Set action execution timeout in second (default: 10).                                                                       |
| --warning-*              |   Warning threshold for steps state count (can be: 'failed', 'successful').                                                   |
| --warning-state          |   Warning threshold for step state.                                                                                           |
| --critical-*             |   Critical threshold for steps state count (can be: 'failed', 'successful').                                                  |
| --critical-state         |   Critical threshold for step state (default: '%\{state\} !~ /OK/i').                                                         |
| --warning-time-scenario  |   Warning threshold in milliseconds for scenario execution time.                                                              |
| --critical-time-scenario |   Critical threshold in milliseconds for scenario execution time.                                                             |
| --warning-time-step      |   Warning threshold in milliseconds for step execution time.                                                                  |
| --critical-time-step     |   Critical threshold in milliseconds for step execution time.                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_selenium.pl \
	--plugin=apps::selenium::plugin \
	--mode=scenario-katalon \
	--help
```
