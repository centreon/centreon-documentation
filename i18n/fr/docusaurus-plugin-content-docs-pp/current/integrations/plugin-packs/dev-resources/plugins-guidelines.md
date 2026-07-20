---
id: plugins-guidelines
title: Directives de développement de plugins
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Une grande partie de ces directives provient du projet [Plugins de surveillance](https://www.monitoring-plugins.org/doc/guidelines.html) . Certaines sont obsolètes, obsolètes ou liées à un langage que vous n'utilisez pas. Nous nous concentrerons sur celles que nous considérons comme les plus importantes, mais ce contenu reste un excellent point de départ.

## Langage de programmation

Vous pouvez utiliser votre langage de programmation préféré pour développer des plugins de surveillance. La seule condition préalable est de respecter les bonnes pratiques pour obtenir un outil fiable et efficace.

Nous vous recommandons d'utiliser notre bibliothèque centreon-plugins dès que possible. Fruit de nombreuses années de développement de sondes de surveillance, elle propose des méthodes prêtes à l'emploi pour répondre à tous les besoins et obtenir une sonde de surveillance flexible.

Nous avons initialement choisi le langage de programmation Perl pour sa stabilité, et depuis, nous sommes convaincus d'avoir fait le bon choix. Perl est toujours fourni avec tous les systèmes d'exploitation d'entreprise et constitue souvent un prérequis. Essayez-le !

## Résultats

### Formatage

La sortie d'une sonde de surveillance doit toujours être :

```bash
STATUS: Information text | metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum> metric2=value[OEM];<warning_value>;<critical_value>;<minimum>;<maximum> \n
Line 1 containing additional details \n
Line 2 containing additional details \n 
Line 3 containing additional details \n
```

Identifions et nommons ses trois parties principales :

Sortie courte : tout ce qui se trouve avant le tube ( |)
Données de performance et métriques : tout ce qui se trouve après le tuyau ( |)
Sortie étendue : tout ce qui se trouve après le premier retour chariot ( \n), diviser chaque ligne de détail est la meilleure pratique.

### Sortie Courtes

Cette partie est celle que les utilisateurs verront probablement dans leur outil de surveillance ou recevront via un message push/d'alerte. Les informations doivent être claires et permettre d'identifier rapidement ce qui se passe.

Un plugin doit toujours proposer au moins une telle sortie :

```bash
STATUS: Information text 
```

`STATUS` doit s'en tenir aux codes de retour :

* 0: OK
* 1: WARNING
* 2: CRITICAL
* 3: UNKNOWN

`Information text` Ne doit afficher que les informations pertinentes. Cela implique :

* Affichant uniquement les bits d'information qui ont conduit à l'état NON OK lorsqu'une alarme est active
* Soyez concis. Lors de la vérification d'un grand nombre d'éléments d'un même composant (par exemple, toutes les partitions d'un fichier), essayez de créer un message global, puis adoptez le format ci-dessus lorsqu'une alarme se déclenche.

#### example de Plugin Centreon 

Le résultat lors de la vérification de plusieurs partitions de stockage sur un serveur, lorsque tout est OK :

`OK: All storages are ok |`

La sortie du même plugin, lorsqu'une des utilisations de l'espace de partition de stockage déclenche un seuil d'AVERTISSEMENT :

`WARNING: Storage '/var/lib' Usage Total: 9.30 GB Used: 956.44 MB (10.04%) Free: 8.37 GB (89.96%) |`

### Données de performances et métriques 

Cette partie n'est pas obligatoire. Cependant, si vous souhaitez bénéficier d'outils de type Centreon ou Nagios© intégrant des fonctionnalités de métrologie, vous devrez adopter ce format :

`metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum>`

Après le signe égal, divisez chaque élément d’information sur la métrique à l’aide d’un point-virgule.

* `metric1=`: Le nom de la métrique correspond à tout ce qui précède le signe égal (=). Plus il est détaillé, plus il sera facile de comprendre un graphique ou d'étendre l'utilisation de la métrique dans une plateforme d'analyse/d'observabilité tierce. De facto, le nom d'une métrique ne doit pas contenir de signe égal. Essayez de le rendre explicite, même sans contexte hôte/service.
* `<value>`: Le résultat de la mesure doit être un nombre (int, float)
* `[UOM]`: Unité de mesure facultative. Vous pouvez également inclure l'unité dans le nom de la métrique, comme dans la philosophie de nommage des métriques de Centreon. L'unité peut être l'une des suivantes :
  * none (aucune unité spécifiée), lorsqu'il s'agit d'un certain nombre de choses (par exemple, utilisateurs, licences, virus…)
  * 's' lorsqu'il s'agit de secondes. ‘us' et ‘ms' sont également valables pour les microsecondes ou les millisecondes (par exemple, le temps de réponse ou de connexion)
  * '%' lorsqu'il s'agit de pourcentage (par exemple mémoire, CPU, espace de stockage…)
  * 'B' (Bytes), lorsqu'il s'agit de stockage, de mémoire… L'octet doit être la valeur par défaut car il assure la compatibilité avec toutes les extensions Centreon
  * Pour une mesure réseau ou un débit, on utilise ‘b' (Bits). Pour calculer un débit par seconde, on utilise ‘b/s’.  
* `<warning_value>`:  Facultatif. Remplissez-le avec la valeur de l'utilisateur comme seuil d'AVERTISSEMENT pour la métrique.
* `<critical_value>`: Facultatif. Remplissez-le avec la valeur fournie par l'utilisateur comme seuil CRITIQUE pour la métrique.
* `<minimum>`: Facultatif. Remplissez-le avec la valeur la plus basse que la métrique peut prendre.
* `<maximum>`: Facultatif. Remplissez-le avec la valeur la plus élevée que la métrique peut prendre.

Il est fréquent de devoir afficher la même métrique pour plusieurs instances. La meilleure pratique consiste à choisir un caractère pour séparer le nom de la métrique de son instance. Chez Centreon, nous utilisons ce `#` signe, et nous vous recommandons vivement de faire de même (il est reconnu et traité par Centreon-Broker).

Plus rarement, vous souhaiterez peut-être ajouter davantage de contexte ; c'est pourquoi nous avons créé un concept de sous-instance suivant les mêmes principes. Ajoutez-le à l'instance de votre métrique et utilisez un caractère de séparation pour préciser qu'il s'agit d'une autre dimension et ne pas la confondre avec l'instance principale. Nous utilisons le `~` signe ; encore une fois, nous vous recommandons vivement de l'utiliser autant que possible.

#### exemples de données/métriques de performance du plugin Centreon

Une **partition de démarrage système**

`'/boot#storage.space.usage.bytes'=255832064B;;0:99579084;0;995790848`

`/boot` est l'instance

`storage.space.usage.bytes` est le nom de la métrique (notez les .bytes à la fin spécifiant l'unité)

`B` est l'unité de mesure héritée pour les octets.

Faites attention au seuil critique (0:99579084), utilisez toujours la même unité.

Une **interface réseau**

`'eth0#interface.traffic.in.bitspersecond'=0.00b/s;;;0;`

`eth0` est l'instance

`interface.traffic.in.bitspersecond` is the metric name (note the `.persecond` à la fin spécifiant l'unité)

`b/s` est l'unité de mesure héritée pour les bits par seconde

Une **métrique cloud**

`'azure-central~/var/lib/mysql#azure.insights.logicaldisk.free.percentage'=94.82%;;;0;100`

`azure-central` est l'instance

`/var/lib/mysql` est la sous-instance

`azure.insights.logicaldisk.free.percentage` est le nom de la métrique (notez le `free` au lieu de `usage`, et `.percentage` à la fin pour spécifier l'unité)

`%` est l'unité de la métrique héritée

### Sortie étendue

L'objectif principal de la sortie étendue est d'afficher chaque information collectée séparément sur une seule ligne. Elle ne s'affichera que si l'utilisateur ajoute un `--verbose` indicateur à sa commande.

Dans l’ensemble, vous devriez l’utiliser pour :

* ajouter un contexte supplémentaire (instance numérotée, numéro de série) sur un composant vérifié
* imprimer les éléments que la vérification exclut car les options du plugin les ont filtrés
* organiser la manière dont les informations sont affichées à l'aide de groupes qui suivent la logique du contrôle.

#### Exemple de plugin Centreon

Voici un exemple de vérification de l’environnement d’un périphérique Cisco :

```bash
<STATUS>: <information_text> | <perfdata>
Environment type: other
Checking fans
  fan 'Switch X - FAN - T1 1, Normal' status is normal [instance: 1014].
  fan 'Switch X - FAN - T1 2, Normal' status is normal [instance: 1015].
  fan 'Switch X <SERIAL-NUMBER> - FAN 1' status is up [instance: 1014]
  fan 'Switch X <SERIAL-NUMBER> - FAN 2' status is up [instance: 1015]
Checking power supplies
  power supply 'Switch X - Power Supply B, Normal' status is normal [instance: 1013] [source: ac]
  Power supply 'Switch X - Power Supply B' status is on [instance: 1013]
Checking temperatures
  temperature 'Switch X - Inlet Temp Sensor, GREEN ' status is normal [instance: 1010] [value: 23 C]
  temperature 'Switch X - Outlet Temp Sensor, GREEN ' status is normal [instance: 1011] [value: 30 C]
  temperature 'Switch X - HotSpot Temp Sensor, GREEN ' status is normal [instance: 1012] [value: 41 C]
Checking voltages
Checking modules
  module 'C9200L-48P-4G' status is ok [instance: 1000]
Checking physicals
Checking sensors
  sensor 'Switch X <SERIAL-NUMBER> - Temp Inlet Sensor 0' status is 'ok' [instance: 1010] [value: 23 celsius]
  sensor 'Switch X <SERIAL-NUMBER> - Temp Outlet Sensor 1' status is 'ok' [instance: 1011] [value: 30 celsius]
  sensor 'Switch X <SERIAL-NUMBER> - Temp Hotspot Sensor 2' status is 'ok' [instance: 1012] [value: 41 celsius]
  sensor 'GigabitEthernet1/1/1 Module Temperature Sensor' status is 'ok' [instance: 1115] [value: 29.2 celsius]
  sensor 'GigabitEthernet1/1/1 Supply Voltage Sensor' status is 'ok' [instance: 1116] [value: 3.3 voltsDC]
  sensor 'GigabitEthernet1/1/1 Bias Current Sensor' status is 'ok' [instance: 1117] [value: 0.0202 amperes]
  sensor 'GigabitEthernet1/1/1 Transmit Power Sensor' status is 'ok' [instance: 1118] [value: -4.5 dBm]
  sensor 'GigabitEthernet1/1/1 Receive Power Sensor' status is 'ok' [instance: 1119] [value: -1.2 dBm]
```

## Options

La gestion des options est un élément clé du succès d'un plugin. Vous devez :

* Nommez soigneusement vos options pour les rendre **explicites**
* Pour une option donnée, **un seul format** est possible (soit un indicateur, soit une valeur, mais pas les deux)
* **Vérifiez** toujours les valeurs fournies par l'utilisateur et imprimez **un message clair** lorsqu'elles ne correspondent pas aux exigences du plugin
* Définir la valeur de l'option par défaut si nécessaire

## Découvertes

Cette section décrit comment vous devez formater vos données pour respecter les exigences des modules de l'interface utilisateur de Centreon Discovery.

En un mot:

* [La découverte d'hôtes](/docs/monitoring/discovery/hosts-discovery) vous permet de renvoyer une liste JSON que le module de découverte automatique comprendra, permettant ainsi à l'utilisateur de l'ajouter automatiquement ou manuellement à sa configuration de surveillance. Le module peut également utiliser l'une des propriétés des éléments découverts pour prendre des décisions (filtrage, création ou affectation d'un groupe d'hôtes spécifique, etc.).
* [La découverte de services](/docs/monitoring/discovery/services-discovery) permet de renvoyer des données XML pour aider les utilisateurs à configurer des contrôles unitaires et à les lier à un hôte donné (par exemple, chaque définition VPN dans AWS VPN, chaque interface réseau sur un routeur...).

Il n'y a pas d'autre choix ici ; vous devez vous en tenir aux directives décrites ci-après si vous souhaitez que votre code soit entièrement conforme à nos modules.

### Hôtes

Le plugin de découverte peut être un script spécifique ou un mode d'exécution particulier activé via une option. Dans Centreon-plugins, nous le faisons via `discovery*.pm` des modes dédiés.

Ce mode d'exécution est limité à une requête adressée à un fournisseur cloud, une application ou tout autre élément contenant une liste d'actifs. Le résultat attendu doit contenir certaines clés :

* `end_time`: l'horodatage Unix lorsque l'exécution s'arrête
* `start_time`: l'horodatage Unix lorsque l'exécution démarre
* `duration`: la durée en secondes (`end_time - start_time`)
* `discovered_items`: le nombre d'éléments découverts
* `results`: un tableau de hachages, chaque hachage étant une collection de clés/valeurs décrivant les actifs découverts.

```json title='Exemple de sortie de découverte d'hôte'
{
   "end_time" : 1649431535,
   "start_time" : 1649431534,
   "duration" : 1,
   "discovered_items" : 2,
   "results" : [
         {
         "public_dns_name" : "ec2-name.eu-west-1.compute.amazonaws.com",
         "name" : "prod-ec2",
         "key_name" : "prd-aws-ec2",
         "tags" : [
            {
               "value" : "Licences Management",
               "key" : "Desc"
            },
            {
               "value" : "CI",
               "key" : "Billing"
            }
         ],
         "state" : "running",
         "private_dns_name" : "ip-W-X-Y-Z.eu-west-1.compute.internal",
         "vpc_id" : "vpc-xxxveafea",
         "type" : "ec2",
         "id" : "i-3feafea",
         "private_ip" : "W.X.Y.Z",
         "instance_type" : "t2.medium"
      },
      {
         "public_dns_name" : "other-ec2-name.eu-west-1.compute.amazonaws.com",
         "name" : "prod-other-ec2",
         "key_name" : "prd-aws-ec2",
         "tags" : [
            {
               "value" : "Licences Management",
               "key" : "Desc"
            },
            {
               "value" : "CI",
               "key" : "Billing"
            }
         ],
         "state" : "running",
         "private_dns_name" : "ip-A-B-C-D.eu-west-1.compute.internal",
         "vpc_id" : "vpc-xxxveafea",
         "type" : "ec2",
         "id" : "i-3gfbgfb",
         "private_ip" : "A.B.C.D",
         "instance_type" : "t2.medium"
      }
   ]
}
```

Vous pouvez utiliser des structures plus avancées pour les valeurs dans les ensembles de résultats, cela peut être :

* un tableau de hachages :

```json title='Découverte Nmap - Tags'
"services" : [
  {
    "name" : "ssh",
    "port" : "22/tcp"
  },
  {
    "port" : "80/tcp",
    "name" : "http"
  }
]
```

* un tableau plat : 

```json title='Découverte VMware - IP vMotion'
"ip_vmotion": [
  "10.10.5.21",
  "10.30.5.21"
],
```

L’utilisation de ces structures est pratique lorsque vous devez regrouper les propriétés d’un objet derrière une seule clé.

Du côté des utilisateurs, cela permet d'utiliser ces valeurs pour filtrer ou exclure certains résultats ou faire un meilleur choix concernant le modèle d'hôte pour un hôte découvert donné.

### Services

La découverte de services s'appuie sur XML pour renvoyer des informations qui seront analysées et utilisées par le module d'interface utilisateur pour créer efficacement de nouveaux services.

Concernant les hôtes, cela peut être une option à l'exécution ou un mode d'exécution. Dans Centreon-plugins, nous avons choisi des
`list<objectname>.pm` modes dédiés.

Tous `list<objectname>.pm` les modes contiennent deux options qui renverront des propriétés et des résultats qui seront utilisés dans les définitions des règles de découverte.

La première option de découverte de service est `--disco-format`, elle permet au plugin de renvoyer les clés prises en charge dans la règle :

```bash title='Sortie réseau Linux int --disco-format' 
-bash-4.2$ /usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-format
<?xml version="1.0" encoding="utf-8"?>
<data>
  <element>name</element>
  <element>total</element>
  <element>status</element>
  <element>interfaceid</element>
  <element>type</element>
</data>
```

La sortie ci-dessus montre que la découverte des interfaces réseau sous Linux renverra ces propriétés :

- `name`: le nom de l'interface
- `total`: la bande passante maximale prise en charge
- `status`: l'état de configuration de l'interface (pratique pour exclure les interfaces administrativement en panne)
- `interfaceid`: l'identifiant
- `type`: type d'interface (comme Ethernet, fibre, boucle de retour, etc.)

En exécutant exactement la même commande, en la remplaçant `--disco-format` par `--disco-show` vous obtiendrez les interfaces découvertes :

```bash title='Sortie du réseau Linux int --disco-show'
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-show
<?xml version="1.0" encoding="utf-8"?>
<data>
  <label status="up" name="lo" type="softwareLoopback" total="10" interfaceid="1"/>
  <label status="up" name="ens5" type="ethernetCsmacd" total="" interfaceid="2"/>
</data>
```

Le résultat contient une ligne par interface, chaque ligne contenant chaque ensemble de propriétés par `key="value"` paire. Notez que même si aucune donnée n'est obtenue pour une clé donnée, celle-ci doit être affichée (par exemple`total=""`).

## Performances

Un plugin de surveillance doit faire une chose, et le faire correctement : il est important de le coder de manière à ce qu'il soit aussi efficace que possible. Gardez à l'esprit que votre plugin peut s'exécuter toutes les minutes, sur un grand nombre d'appareils. Une optimisation mineure peut donc générer des avantages importants à grande échelle.

Pensez également à la 'chose' que vous surveillez, il est important de toujours essayer de réduire la surcharge d’une vérification du point de vue de l’objet surveillé.

### Délai d'exécution

La méthode la plus simple pour évaluer les performances d'un plugin est son temps d'exécution. Utilisez l'
`time` utilitaire de commande pour effectuer votre test et mesurer son comportement sur plusieurs exécutions.

### Cache

Dans certains cas, il peut être intéressant de mettre en cache certaines informations.

La mise en cache dans un fichier local peut permettre d'éviter certains appels à une API, par exemple en évitant de s'authentifier à chaque vérification. Dans la mesure du possible, utilisez le jeton obtenu lors de la première vérification et stocké dans le fichier cache pour n'appeler le point de terminaison d'authentification que lorsque cela est absolument nécessaire.

Plus généralement, lorsqu'un identifiant, un nom ou tout autre élément qui ne changerait jamais au cours des différentes exécutions nécessite une requête auprès du système tiers, mettez-le en cache pour optimiser le temps de traitement d'une seule vérification.

L'optimisation du nombre de requêtes adressées à un système tiers peut également résider dans l'algorithme de vérification. Privilégiez l'extraction d'un maximum de données en une seule vérification, puis le filtrage programmatique des résultats, plutôt que l'émission de multiples requêtes très spécifiques, qui allongeraient le temps d'exécution et alourdiraient la charge du système cible.

### Algorithme

L'optimisation du nombre de requêtes adressées à un système tiers peut également résider dans l'algorithme de contrôle. Préférer le scraping
au maximum de données en un seul contrôle, puis filtrer les résultats de manière programmatique plutôt que d'émettre plusieurs requêtes
très spécifiques qui entraîneraient un temps d'exécution plus long et une charge plus importante sur le système cible.

### Délai d'attente

Un plugin doit toujours inclure un délai d'attente afin d'éviter des vérifications incessantes qui pourraient surcharger votre système de surveillance
lorsque quelque chose est cassé et que, pour une raison quelconque, le plugin ne peut pas obtenir l'information.

## Sécurité

### Commandes du système

Si le plugin doit exécuter une commande au niveau du système d'exploitation et que les utilisateurs peuvent modifier le nom de la commande ou
ses paramètres, assurez-vous que personne ne peut exploiter les capacités de votre plugin pour casser le système
sous-jacent ou accéder à des informations sensibles.

### Dépendances

Il n'est pas nécessaire de réinventer la roue : les dépendances standard de centreon-plugins vous fournissent les bibliothèques externes les plus courantes
qui peuvent être nécessaires pour écrire un nouveau plugin.

N'utilisez pas trop de grandes bibliothèques qui pourraient finir par ne plus être supportées ou pour lesquelles une modification de la gouvernance pourrait conduire à des problèmes de sécurité sur.

## Aide et documentation

Pour chaque plugin, la documentation minimale est l'aide, vous devez expliquer aux utilisateurs ce que fait le plugin
et comment ils peuvent utiliser les options intégrées pour réaliser leur propre scénario d'alerte.

Vous pouvez voir comment nous gérons l'aide au niveau du mode avec le framework centreon-plugins [ici](https://docs.centreon.com/pp/integrations/plugin-packs/dev-resources/develop-with-centreon-plugins).
