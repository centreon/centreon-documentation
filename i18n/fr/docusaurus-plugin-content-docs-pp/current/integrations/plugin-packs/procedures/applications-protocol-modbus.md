---
id: applications-protocol-modbus
title: Modbus
description: "Supervisez des équipements Modbus (TCP/RTU) avec Centreon : installez le connecteur et configurez registres, seuils et métriques calculées."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Modbus** apporte un modèle d'hôte :

* **App-Protocol-Modbus-custom**

Le connecteur apporte le modèle de service suivant
(classé selon le modèle d'hôte auquel il est rattaché) :

<Tabs groupId="sync">
<TabItem value="App-Protocol-Modbus-custom" label="App-Protocol-Modbus-custom">

Aucun service par défaut n'est créé pour ce modèle d'hôte.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                 | Modèle de service                                | Description                         |
|:----------------------|:-------------------------------------------------|:------------------------------------|
| Numeric-Value-Generic | App-Protocol-Modbus-Numeric-Value-Generic-custom | Supervision de métriques via Modbus |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Numeric-Value-Generic" label="Numeric-Value-Generic">

Ce mode étant générique, les métriques retournées dépendent de sa configuration.

</TabItem>
</Tabs>

## Prérequis

Le serveur distant doit avoir un service Modbus en fonctionnement et disponible.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-modbus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-modbus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-protocol-modbus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-modbus
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Modbus**
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
dnf install centreon-plugin-Applications-Protocol-Modbus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Modbus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-protocol-modbus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Modbus
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-Modbus-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Numeric-Value-Generic" label="Numeric-Value-Generic">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CONFIG       | Define the configuration of the check (can be a file or a json string directly).                                                                 |                   |      X      |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

> **CONFIG :** Davantage d'informations sont disponibles [ici](https://github.com/centreon/centreon-plugins/blob/master/doc/en/user/guide.rst#modbus-protocol).

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
/usr/lib/centreon/plugins/centreon_protocol_modbus.pl \
	--plugin=apps::protocols::modbus::plugin \
	--mode=numeric-value \
	--tcp-host=''  \
	--config='my-modbus.json' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All metrics are OK | 'metric1'=10;;;; 'metric2'=40;;;; 'metric3'=72;;;; 
```

> Le contenu du fichier JSON peut aussi être passé directement :  
> `--config='{ "selection": { "metric1": { ... } } }'`

### Structure générale du fichier JSON

```json
{
  "selection": { ... },
  "virtualcurve": { ... },
  "command": { ... }
}
```

| Section        | Obligatoire | Description                                   |
|----------------|-------------|-----------------------------------------------|
| `selection`    | Oui         | Définit les registres Modbus à lire           |
| `virtualcurve` | Non         | Agrège et transforme les valeurs lues         |
| `command`      | Non         | Personnalise le formatage global de la sortie |


### Section `selection`

Chaque entrée de `selection` correspond à un registre (ou groupe de registres) Modbus à lire. 
La clé est le **nom de la métrique** résultante.

```json
{
  "selection": {
    "<nom_metrique>": {
      "address": <entier>,
      "quantity": <entier>,
      "type": "<type_registre>",
      "display": <true|false>,
      "formatting": { ... }
    }
  }
}
```

#### Clés disponibles dans `selection`

| Clé          | Type    | Obligatoire | Description                                                               |
|--------------|---------|-------------|---------------------------------------------------------------------------|
| `address`    | entier  | Oui         | Adresse du registre Modbus (décimal)                                      |
| `quantity`   | entier  | Oui         | Nombre de registres consécutifs à lire                                    |
| `type`       | chaîne  | Non         | Type de registre (voir valeurs ci-dessous). Défaut : `holding`            |
| `display`    | booléen | Non         | Afficher la valeur brute dans la sortie. Défaut : `true`                  |
| `formatting` | objet   | Non         | Personnaliser le message de sortie (voir section [Formatage](#formatage)) |

#### Valeurs possibles pour `type`

| Valeur     | Description                                               |
|------------|-----------------------------------------------------------|
| `holding`  | Registre de maintien (lecture/écriture) — le plus courant |
| `input`    | Registre d'entrée (lecture seule)                         |
| `coil`     | Bobine (valeur binaire 0/1, lecture/écriture)             |
| `discrete` | Entrée discrète (valeur binaire 0/1, lecture seule)       |

#### Exemple minimal

```json
{
  "selection": {
    "temperature": {
      "address": 100,
      "quantity": 1,
      "type": "holding",
      "display": true
    }
  }
}
```

#### Exemple avec plusieurs métriques

```json
{
  "selection": {
    "metric1": { "address": 1, "quantity": 1, "type": "holding", "display": true },
    "metric2": { "address": 2, "quantity": 1, "type": "holding", "display": true },
    "metric3": { "address": 3, "quantity": 1, "type": "holding", "display": true }
  }
}
```

#### Lecture de plusieurs registres d'un coup (`quantity > 1`)

Quand `quantity` est supérieur à 1, le plugin lit plusieurs registres consécutifs et les nomme automatiquement `<nom>.0`, `<nom>.1`, etc. 
Cela est utile pour réduire les échanges réseau sur les liens à faible débit.

```json
{
  "selection": {
    "phases": {
      "address": 1045,
      "quantity": 3,
      "type": "holding",
      "display": false
    }
  }
}
```

> Les métriques générées seront nommées : `phases.0`, `phases.1`, `phases.2`

### Section `virtualcurve`

La section `virtualcurve` permet de créer des métriques dérivées à partir des valeurs lues dans `selection`. Elle est indispensable pour :
- Appliquer une mise à l'échelle (ex : diviser par 10 si l'équipement renvoie `153` pour `15.3A`)
- Agréger plusieurs registres (moyenne, somme, min, max)
- Définir des seuils d'alerte et critique
- Réaliser des calculs complexes (ex : puissance = courant × tension)

```json
{
  "virtualcurve": {
    "<nom_metrique>": {
      "aggregation": "<méthode>",
      "pattern": "<regex>",
      "custom": "<expression>",
      "unit": "<unité>",
      "warning": "<seuil>",
      "critical": "<seuil>",
      "formatting": { ... }
    }
  }
}
```

#### Clés disponibles dans `virtualcurve`

| Clé           | Type    | Obligatoire | Description                                                                                                               |
|---------------|---------|-------------|---------------------------------------------------------------------------------------------------------------------------|
| `aggregation` | chaîne  | Oui         | Méthode d'agrégation des valeurs sélectionnées                                                                            |
| `pattern`     | chaîne  | Non         | Expression régulière pour filtrer les métriques source depuis `selection`. Si absent, toutes les métriques sont utilisées |
| `custom`      | chaîne  | Non         | Expression arithmétique appliquée à la valeur agrégée                                                                     |
| `unit`        | chaîne  | Non         | Unité de la métrique résultante (ex : `A`, `W`, `°C`)                                                                     |
| `warning`     | chaîne  | Non         | Seuil d'avertissement (format Nagios : valeur simple ou range `min:max`)                                                  |
| `critical`    | chaîne  | Non         | Seuil critique (format Nagios : valeur simple ou range `min:max`)                                                         |
| `formatting`  | objet   | Non         | Personnaliser le message de sortie (voir section [Formatage](#formatage))                                                 |

#### Valeurs possibles pour `aggregation`

| Valeur | Description                                     |
|--------|-------------------------------------------------|
| `avg`  | Moyenne des valeurs sélectionnées               |
| `sum`  | Somme des valeurs sélectionnées                 |
| `min`  | Valeur minimale parmi les valeurs sélectionnées |
| `max`  | Valeur maximale parmi les valeurs sélectionnées |

### Section `command` (formatage global)

La section `command` permet de modifier l'affichage de toutes les métriques de la sélection globalement, et de surcharger ce comportement pour une métrique spécifique via `override`.

```json
{
  "selection": { ... },
  "command": {
    "formatting": {
      "printf_msg": "My Metric '%s' value is %.2f",
      "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
    },
    "override": {
      "metric3": {
        "formatting": {
          "printf_msg": "Override '%s' value is %.2f",
          "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
        }
      }
    }
  }
}
```

### Formatage des messages de sortie {#formatage}

L'objet `formatting` (utilisable dans `selection`, `virtualcurve` ou `command`) permet de personnaliser le texte affiché pour chaque métrique.

| Clé           | Description                                                                   |
|---------------|-------------------------------------------------------------------------------|
| `printf_msg`  | Format du message, syntaxe `printf` Perl (ex : `"Metric '%s' value is %.2f"`) |
| `printf_var`  | Variables Perl à injecter dans le message                                     |

Variables disponibles dans `printf_var` :

| Variable                             | Contenu                         |
|--------------------------------------|---------------------------------|
| `$self->{result_values}->{instance}` | Nom de la métrique              |
| `$self->{result_values}->{value}`    | Valeur numérique de la métrique |

### Exemples de calculs personnalisés (`custom`)

L'attribut `custom` accepte une expression arithmétique Perl qui sera appliquée à la valeur agrégée. 
La valeur courante est implicite — l'expression commence directement par l'opérateur.

#### Mise à l'échelle simple

L'équipement retourne `1530` pour représenter `15.3 A` :

```json
{
  "selection": {
    "rawCurrent": { "address": 1045, "quantity": 1, "display": false }
  },
  "virtualcurve": {
    "currentA": {
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    }
  }
}
```

#### Calcul de puissance (courant × tension)

À partir du courant brut, calculer la puissance en kW (tension supposée 230V) :

```json
{
  "selection": {
    "rawCurrent": { "address": 1045, "quantity": 1, "display": false }
  },
  "virtualcurve": {
    "currentA": {
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A"
    },
    "powerKW": {
      "aggregation": "avg",
      "custom": "/10*230/1000",
      "unit": "kW",
      "formatting": {
        "printf_msg": "Power '%s' is %.3f kW",
        "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
      }
    }
  }
}
```

#### Agrégation de plusieurs registres avec `pattern`

Lire 4 registres d'un coup et calculer deux moyennes sur des paires :

```json
{
  "selection": {
    "phases": {
      "address": 1,
      "quantity": 4,
      "type": "holding",
      "display": false
    }
  },
  "virtualcurve": {
    "avg_phases_12": {
      "pattern": "phases\\.[01]$",
      "aggregation": "avg",
      "unit": "V"
    },
    "avg_phases_34": {
      "pattern": "phases\\.[23]$",
      "aggregation": "avg",
      "unit": "V"
    }
  }
}
```

> Les métriques `phases.0`, `phases.1`, `phases.2`, `phases.3` sont créées automatiquement par `quantity: 4`. Le `pattern` filtre ensuite lesquelles entrent dans chaque `virtualcurve`.

### Exemple complet — Supervision d'un générateur électrique [inspiré d'un cas de la communauté](https://thewatch.centreon.com/infra-monitoring-data-collection-6/monitor-an-electric-generator-with-modbus-376)

Ce fichier monitore la tension batterie, le courant et la puissance d'un groupe électrogène. L'équipement renvoie des valeurs ×10 (ex : `230` = `23.0 V`).

```json
{
  "selection": {
    "batteryVoltageRaw": { "address": 1029, "quantity": 1, "type": "holding", "display": false },
    "currentPhase1Raw":  { "address": 1045, "quantity": 1, "type": "holding", "display": false },
    "currentPhase2Raw":  { "address": 1046, "quantity": 1, "type": "holding", "display": false },
    "currentPhase3Raw":  { "address": 1047, "quantity": 1, "type": "holding", "display": false }
  },
  "virtualcurve": {
    "batteryVoltage": {
      "aggregation": "avg",
      "custom": "/10",
      "unit": "V",
      "warning": "22",
      "critical": "20",
      "formatting": {
        "printf_msg": "Battery voltage '%s' is %.1f V",
        "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
      }
    },
    "currentPhase1": {
      "pattern": "currentPhase1Raw",
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    },
    "powerPhase1": {
      "pattern": "currentPhase1Raw",
      "aggregation": "avg",
      "custom": "/10*230/1000",
      "unit": "kW"
    },
    "currentPhase2": {
      "pattern": "currentPhase2Raw",
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    },
    "currentPhase3": {
      "pattern": "currentPhase3Raw",
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    }
  }
}
```

### Format des seuils (`warning` / `critical`)

Les seuils suivent la syntaxe standard Nagios/Centreon :

| Exemple   | Signification                                   |
|-----------|-------------------------------------------------|
| `"50"`    | Alerte si valeur > 50                           |
| `"0:50"`  | Alerte si valeur hors de `[0, 50]`              |
| `"@0:50"` | Alerte si valeur **dans** `[0, 50]` (inversé)   |
| `"~:50"`  | Alerte si valeur > 50 (pas de borne inférieure) |
| `"50:"`   | Alerte si valeur < 50                           |

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
/usr/lib/centreon/plugins/centreon_protocol_modbus.pl \
	--plugin=apps::protocols::modbus::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                             | Modèle de service associé                        |
|:---------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| numeric-value [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/modbus/mode/numericvalue.pm)] | App-Protocol-Modbus-Numeric-Value-Generic-custom |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Numeric-Value-Generic" label="Numeric-Value-Generic">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --rtu-port                                 | The serial port to open. Example: --rtu-port=/dev/ttyUSB0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --rtu-baudrate                             | A valid baud rate (default: 9600)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --rtu-databits                             | An integer from 5 to 8 (default: 8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --rtu-parity                               | Either 'even', 'odd' or 'none' (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --rtu-stopbits                             | 1 or 2 (default: 1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --tcp-host                                 | Host address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --tcp-port                                 | Host port (default: 502)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Timeout in seconds (default: 10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --config                                   | Specify the config (can be a file or a json string directly).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-counters                          | Filter some counter (can be 'unique' or 'global') Useless, if you use selection/filter but not global/virtual curves                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --warning-*                                | Warning threshold (can be 'unique' or 'global') (Override config if set)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --critical-*                               | Critical threshold (can be 'unique' or 'global') (Override config if set)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_protocol_modbus.pl \
	--plugin=apps::protocols::modbus::plugin \
	--mode=numeric-value \
	--help
```
