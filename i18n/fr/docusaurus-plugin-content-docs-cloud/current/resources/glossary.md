---
id: glossary
title: Glossaire des concepts Centreon
---

## Acquittement

Un utilisateur acquitte une ressource pour signifier à son équipe qu'il est au courant de l'incident et qu'il s'en occupe.

Lorsqu'une ressource est acquittée, les [notifications](#notification) sont suspendues et la ressource acquittée est surlignée en jaune dans les écrans de supervision.

Acquitter une ressource ne signifie pas que l'incident est résolu : il le sera lorsque la ressource sera revenue dans son état nominal (**OK** ou **DISPONIBLE**).

**Voir aussi** : [Acquitter une alerte](../alerts-notifications/acknowledge.md).

## Action de supervision

Toute action exécutée depuis l’interface permettant d’agir sur votre supervision en temps réel. Par exemple, [faire un acquittement](#acquittement), planifier une [plage de maintenance](#plage-de-maintenance), forcer un contrôle, etc. 

## Alerte

Une alerte correspond à l'un des statuts suivants : **Alerte**, **Indisponible**, **Critique**, **Inconnu**.

Le terme d'alerte est utilisé de cette façon dans les [filtres prédéfinis](../alerts-notifications/resources-status.md#filtres-prédéfinis) à la page **Statut des ressources**.

## Collecteur

Un collecteur est un serveur de supervision installé dans votre infrastructure, qui supervise vos resources. Un collecteur est rattaché à un [serveur central](#serveur-central).

- Un collecteur Centreon supervise des [ressources](#ressource). Il possède un [moteur de supervision](#moteur-de-supervision).

- Il n’a pas d’interface graphique : les ressources qu’il supervise s’affichent dans l’interface du serveur central auquel il est rattaché.

On appelle aussi “collecteur” le moteur de supervision présent dans un serveur central ou un collecteur.

## Connecteur de supervision

L'expression "connecteur de supervision" désigne un [plugin](#plugin) et son pack :

Le pack contient la configuration associée au plugin dans Centreon (commandes, [modèles](#modèle), seuils) ainsi que des éléments nécessaires à la mise en œuvre de la découverte automatique.

**Voir aussi** :

- [Utiliser des connecteurs de supervision](../monitoring/pluginpacks.md),
- [Introduction aux connecteurs de supervision](/pp/integrations/plugin-packs/getting-started/introduction).

## Donnée de performance

Voir [**Métrique**](#métrique).

## Engine

Voir [**Moteur de supervision**](#moteur-de-supervision).

## État de l'alerte

Non traité, acquitté, en maintenance.

## FQDN

Fully Qualified Domain Name : correspond au nom d’hôte et de domaine d’un serveur. Ex : demo.centreon.com (nom d’hôte : demo, nom de domaine : centreon.com).

## Graphique

Les graphiques sont générés à partir des [métriques](#métrique) des [services](#service). Ils permettent de représenter l'évolution dans le temps de ces métriques.

**Voir aussi** : [Gestion des graphiques](../metrology/chart-management.md) et les autres topics de cette section.

## Héritage

Principe qui permet qu’un paramètre d’un [modèle](#modèle) soit appliqué sur la ressource qui hérite de ce modèle.

## Hôte

Équipement possédant une adresse IP ou un FQDN, et que l’on veut superviser. Exemples : un serveur Linux, une box internet, un site web, une imprimante 3D, une instance EC2, un hôte docker, une caisse enregistreuse, etc. L’hôte peut avoir un ou plusieurs [services](#service) associés.

Un hôte peut avoir les [statuts](#statut) suivants : DISPONIBLE, INDISPONIBLE et INJOIGNABLE.

**Voir aussi** : [Mettre un hôte en supervision](../monitoring/basic-objects/hosts-create.md) et les autres topics de cette section.

## Métrique

Une métrique ou donnée de performance est rattachée à un [service](#service). Cette donnée permet d’obtenir des graphiques et de positionner des seuils pour être alerté. Ces seuils définissent le [statut](#statut) du service associé à la métrique.

Lorsqu’un service comprend plusieurs métriques, le statut du service est celui de la plus mauvaise métrique.

Vous pouvez voir les métriques associées à un service dans le panneau de détails de celui-ci.

**Voir aussi** : [Comprendre les métriques](../monitoring/metrics.md).

## Mode

Les modes sont utilisés par les [plugins](#plugin). Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

La documentation des connecteurs de supervision fournit une liste des modes disponibles pour chaque connecteur, avec les options correspondantes.

## Modèle

Squelette préconfiguré d’une [ressource](#ressource) qui permet que les paramètres définis sur le squelette soient appliqués sur la ressource qui en hérite automatiquement.

Il existe des modèles d’hôtes et de services.

**Voir aussi** :

- [Utiliser des modèles d'hôtes](../monitoring/basic-objects/hosts-templates.md),
- [Utiliser des modèles de services](../monitoring/basic-objects/services-templates.md),

## Moteur de supervision

Centreon Engine est le composant logiciel qui planifie les contrôles, les exécute et [notifie](#notification) les utilisateurs en cas d’incident.
Il est présent sur les [collecteurs](#collecteur) et le [serveur central](#serveur-central).

## Notification

Message avertissant l’utilisateur d’un incident.

## Ordonnanceur

Voir [**Moteur de supervision**](#moteur-de-supervision).

## Plage de maintenance

Une plage de maintenance ou temps d’arrêt est une période de temps durant laquelle les [notifications](#notification) sont désactivées pour une ressource. Les plages de maintenance sont utilisées lors d'opérations de maintenance programmée ; elles permettent d'éviter de recevoir des alertes de type faux-positif.

**Voir aussi** : [Planifier un temps d'arrêt](../alerts-notifications/downtimes.md).

## Plage de maintenance récurrente

Les temps d'arrêts récurrents sont des temps d'arrêts qui reviennent de manière répétitive.

**Voir aussi** : [Les temps d'arrêt récurrents](../alerts-notifications/downtimes.md#les-temps-darrêt-récurrents).

## Plugin

Est appelé "plugin" une sonde de supervision, c'est-à-dire un binaire exécutable ou un script qui est appelé par le [moteur de supervision](#moteur-de-supervision) pour effectuer un contrôle sur un [hôte](#hôte) ou un [service](#service). Le plugin va déterminer le statut à renvoyer au moteur de supervision à partir des vérifications qu'il fait et des seuils qui ont été définis dans la configuration de l'hôte ou du service.

## Ressource

Objet supervisé par une plateforme Centreon (hôtes, services, métaservices).

## Serveur central

Dans Centreon, le serveur central est la console principale de votre supervision. Il permet :

- de configurer toute la supervision de votre infrastructure,
- des superviser des ressources,
- de consulter la supervision de tous les serveurs Centreon (tous les [collecteurs](#collecteur)) dans son interface web.

## Service

Un service est attaché à un [hôte](#hôte). Il correspond à un point de contrôle de cet hôte. Ce point de contrôle peut être un contrôle : 

- sur le statut d’un composant : est-ce que mon alimentation est branchée ? Est-ce que mon instance est démarrée ?

- sur la performance d’un composant : est-ce que mon site Web est accessible en moins de 0,5s ? Quel est mon niveau d’encre ? Quelle est l’utilisation de la mémoire sur mon serveur ?

Un service peut avoir une ou plusieurs [métriques](#métrique) associées.

Un service peut avoir les [statuts](#statut) suivants : OK, ALERTE, CRITIQUE, INCONNU.

**Voir aussi** : [Mettre un service en supervision](../monitoring/basic-objects/services-create.md) et les autres topics de cette section.

## Statut

Indique :

- la disponibilité d'un [hôte](#hôte) (DISPONIBLE, INDISPONIBLE, INJOIGNABLE),
- la disponibilité ou la performance d'un [service](#service) (OK, ALERTE, CRITIQUE, INCONNU).

EN ATTENTE n’est pas un statut: les ressources sont "en attente" lorsqu'elles viennent d'être créées et n'ont pas encore été contrôlées.

**Voir aussi** : [Statuts possibles d'une ressource](../alerts-notifications/concepts.md).

## Temps d’arrêt

Voir [**Plage de maintenance**](#plage-de-maintenance).

## Type de statut

Indique si un changement de [statut](#statut) est confirmé (HARD) ou non-confirmé (SOFT). Par exemple, l’envoi de notifications ne se déclenche que lors du passage à un statut de type HARD.

**Voir aussi** : [Types de statuts](../alerts-notifications/concepts.md#types-de-statuts).

## Widget

Élément visuel configurable permettant d’afficher des données dans une vue personnalisée.

**Voir aussi** : [Vues personnalisées](../alerts-notifications/custom-views.md).
