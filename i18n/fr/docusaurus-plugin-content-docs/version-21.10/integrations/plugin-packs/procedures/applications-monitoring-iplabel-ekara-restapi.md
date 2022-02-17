---
id: applications-monitoring-iplabel-ekara-restapi
title: IP-Label Ekara Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Pack Centreon IP-Label Ekara Rest API apporte 1 modèle d'hôte :
* App-Monitoring-Iplabel-Ekara-Restapi-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                                    | Description                           | Défaut |
|:----------------|:-----------------------------------------------------|:--------------------------------------|:-------|
| Incidents       | App-Monitoring-Iplabel-Ekara-Incidents-Restapi       | Contrôle les incidents IP-Label Ekara | X      |
| Scenario-Status | App-Monitoring-Iplabel-Ekara-Scenario-Status-Restapi | Contrôle les scénarios IP-Label Ekara | X      |

### Règles de découverte

Le Pack Centreon *IP-Label Ekara Rest API* inclut un *provider* de découverte d'Hôtes nommé **IP-Label Ekara**.
Celui-ci permet de découvrir l'ensemble des scenarios Ekara d'une instance donnée et d'ajouter ceux-ci en tant qu'hôtes dans Centreon.

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](../../../monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Incidents" label="Incidents">

| Métrique                            | Unité  |
|:------------------------------------|:-------|
| ekara.incidents.current.total.count | count  |
| ekara.incident.duration.seconds     | s      |
| incident-severity                   | string |
| incident-status                     | string |
| trigger-status                      | string |

</TabItem>
<TabItem value="Scenario-Status" label="Scenario-Status">

| Métrique                                       | Unité  |
|:-----------------------------------------------|:-------|
| scenario.availability.percentage               | %      |
| scenario-status                                | string |
| scenario.time.interaction.milliseconds         | ms     |
| scenario.time.allsteps.total.milliseconds      | ms     |
| *steps*#scenario.step.time.milliseconds        | ms     |
| *steps*#scenario.steps.time.total.milliseconds | ms     |

</TabItem>
</Tabs>

## Prérequis

* Un compte de service disposant des droits en lecture est requis pour l'accès à l'API Rest Ekara.
* Le collecteur Centreon en charge de la supervision de ces ressources doit être en mesure de pouvoir joindre l'API Ekara sur Internet sur le port TCP/443.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources *IP-Label Ekara* :

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **IP-Label Ekara Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">


1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources *IP-Label Ekara* :

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **IP-Label Ekara Rest API** :

 ```bash
yum install centreon-pack-applications-monitoring-iplabel-ekara-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **IP-Label Ekara Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & remplissez le champ **Adresse IP/DNS** avec l'adresse 127.0.0.1.
* Appliquez le Modèle d'Hôte **App-Monitoring-Iplabel-Ekara-Restapi-custom**.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Macro                | Description                                                                            |
|:------------|:---------------------|:---------------------------------------------------------------------------------------|
|             | EKARAAPIEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
| X           | EKARAAPIHOSTNAME     | api.ekara.ip-label.net                                                                 |
| X           | EKARAAPIUSERNAME     |                                                                                        |
| X           | EKARAAPIPASSWORD     |                                                                                        |
| X           | EKARAAPIPORT         | 443                                                                                    |
| X           | EKARAAPIPROTO        | https                                                                                  |
|             | FILTERID             |                                                                                        |
|             | FILTERNAME           |                                                                                        |
|             | PROXYURL             |                                                                                        |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \
    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \
    --mode=scenarios \
    --hostname='api.ekara.ip-label.net' \
    --api-username='johndoe@company.com' \
    --api-password='MyPassw0rd' \
    --port='443' \
    --proto='https' \
    --proxyurl='' \
    --timeframe='900' \
    --filter-name='MyScenario' \
    --filter-id='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Scenario 'MyScenario': status: Success (1), availability: 100% | 'MyScenario#scenario.availability.percentage'=100%;;;0;100
Scenario 'MyScenario':
    status: Success (1), availability: 100%
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \
    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \
    --mode=scenarios \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \
    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins#http-and-api-checks)
des Plugins basés sur HTTP/API.