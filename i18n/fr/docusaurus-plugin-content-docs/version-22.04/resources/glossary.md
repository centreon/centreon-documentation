---
id: glossary
title: Glossaire
---

## ACL

Les listes de contrôles d'accès (Access Control List en anglais) permettent d’attribuer des droits aux utilisateurs Centreon. Il est possible de définir des droits sur :

- les différents menus de l'interface web Centreon

- les [ressources](#ressource) qu'ils pourront voir

- les actions réalisables dans l’interface web Centreon.

**Voir aussi** : [Gérer les droits des utilisateurs Centreon (ACL)](../administration/access-control-lists.md).

## Acquittement

Un utilisateur acquitte une ressource pour signifier à son équipe qu'il est au courant de l'incident et qu'il s'en occupe.

Lorsqu'une ressource est acquittée, les [notifications](#notification) sont suspendues et la ressource acquittée est surlignée en jaune dans les écrans de supervision.

Acquitter une ressource ne signifie pas que l'incident est résolu : il le sera lorsque le contrôle sera revenu dans son état nominal.

**Voir aussi** : [Acquitter un problème](../alerts-notifications/acknowledge.md).

## Action de supervision

Toute action exécutée depuis l’interface permettant d’agir sur votre supervision en temps réel. Par exemple, [faire un acquittement](#acquittement), planifier une [plage de maintenance](#plage-de-maintenance), forcer un contrôle, etc. 

## Architecture simple VS distribuée

- **Architecture simple** : architecture composée d’un [serveur central](#serveur-central) et uniquement d'un serveur central.

- **Architecture distribuée** : architecture composée d’un central et de n [serveurs distants](#serveur-distant) et/ou [collecteur(s)](#collecteur). Ceux-ci permettent de répartir la charge de la supervision, que ce soit pour des contraintes géographiques, historiques, etc.

**Voir aussi** : [Architectures possibles](../installation/architectures.md).

## BBDO

Broker Binary Data Object : c’est le protocole de communication utilisé pour transporter les données de supervision des [serveurs distants](#serveur-distant) et des [collecteurs](#collecteur) vers le [serveur central](#serveur-central).

**Voir aussi** : [Le protocole BBDO](../developer/developer-broker-bbdo.md).

## Broker

Centreon Broker est le composant logiciel qui reçoit les données de supervision collectées par les [moteurs de supervision](#moteur-de-supervision).
Une fois ces données reçues, par défaut, Centreon Broker les redistribue en bases de données MariaDB et RRD.

**Voir aussi** : [Mapping d’événements Centreon Broker](../developer/developer-broker-mapping.md).

## CLAPI

Command-Line API : Permet d’administrer sa supervision directement en ligne de commande.

**Voir aussi** : [Command Line API (v1) - CLAPI](../api/clapi.md).

## Collecteur

Serveur Centreon utilisé dans une [architecture distribuée](#architecture-simple-vs-distribuée). Un collecteur peut être rattaché à un [serveur distant](#serveur-distant) ou bien directement à un [serveur central](#serveur-central).

- Un collecteur Centreon supervise des [ressources](#ressource). Il possède un [moteur de supervision](#moteur-de-supervision).

- Il n’a pas d’interface graphique : les ressources qu’il supervise s’affichent dans l’interface du serveur central et du serveur distant auxquels il est rattaché.

On appelle aussi “collecteur” le moteur de supervision présent dans un serveur central, un serveur distant ou un collecteur.

## Donnée de performance

Voir [**Métrique**](#métrique).

## Dump MySQL

Sauvegarde dans un fichier texte de toute une base de données MySQL/MariaDB.

## Engine

Voir **Moteur de supervision**.

## État du problème

Non traité, acquitté, en maintenance.

## Fichiers de rétention

Les fichiers de rétention sont propres à Centreon [Broker](#broker).
Ces fichiers correspondent aux données de supervision qui n’ont pas pu être insérées en base de données lors d’un problème : par exemple si il y a un problème de connexion entre Engine et Broker, plutôt que de perdre ces données, Broker les stocke dans un fichier. Ce fichier sera ensuite dépilé par Centreon Broker, puis réinséré dans les bases de données pour éviter une perte de données. 

## Fichiers RRD

Un fichier RRD contient les données d'une [métrique](#métrique). Le fichier RRD permet de construire le graphique de performances du service associé à cette métrique. Si les fichiers RRD ne sont pas présents, les graphiques ne peuvent pas être affichés.

## FQDN

Fully Qualified Domain Name : correspond au nom d’hôte et de domaine d’un serveur. Ex : demo.centreon.com (nom d’hôte demo nom de domaine centreon.com).

## Gorgone

Centreon Gorgone est le composant logiciel qui permet la communication du [serveur central](#serveur-central) vers les [collecteurs](#collecteur) et les [serveurs distants](#serveur-distant).
Notamment, Gorgone déploie la configuration des [moteurs de supervision](#moteur-de-supervision).

**Voir aussi** : [Gérer la communication client/serveur](../developer/developer-gorgone-client-server-communication.md) et les autres topics de cette section.

## Graphique

Les graphiques sont générés à partir des [métriques](#métrique) des [services](#service). Ils permettent de représenter l'évolution dans le temps de ces métriques.

**Voir aussi** : [Gestion des graphiques](../metrology/chart-management.md) et les autres topics de cette section.

## Héritage

Principe qui permet qu’un paramètre d’un [modèle](#modèle) soit appliqué sur la ressource qui hérite de ce modèle.

## Hôte

Équipement possédant une adresse IP ou un FQDN, et que l’on veut superviser. Exemples : Un serveur Linux, une box internet, un site web, une imprimante 3D, une instance EC2, un hôte docker, une caisse enregistreuse, etc. L’hôte peut avoir un ou plusieurs [services](#service) associés.

Un hôte peut avoir les [statuts](#statut) suivants : DISPONIBLE, INDISPONIBLE et INJOIGNABLE.

**Voir aussi** : [Mettre un hôte en supervision](../monitoring/basic-objects/hosts-create.md) et les autres topics de cette section.

## LVM 

LVM (logical volume manager) : Centreon recommande d'utiliser ce système de partitionnement lors de l'installation du système hôte. Il vous permettra d'ajuster les partitions à chaud et de mettre en œuvre les snapshots LVM pour la sauvegarde.

## LVM snapshot

Il s’agit d’une fonctionnalité présente dans LVM pour faire un instantané d’un système de fichiers. Centreon se sert de ce mécanisme pour sauvegarder les bases de données.

**Voir aussi** : [Sauvegarde](../administration/backup.md).

## Métrique

Une métrique ou donnée de performance est rattachée à un [service](#service). Cette donnée permet d’obtenir des graphiques et de positionner des seuils pour être alerté. Ces seuils définissent le [statut](#statut) du service associé à la métrique.

Lorsqu’un service comprend plusieurs métriques, le statut du service est celui de la plus mauvaise métrique.

Vous pouvez voir les métriques associées à un service dans le panneau de détails de celui-ci. (mettre un lien vers la doc, et ajouter un screenshot à la doc, comme celui ci-dessous)

## Mode one-peer retention

Configuration avancée de Centreon [Broker](#broker) permettant d’inverser le sens du flux BBDO entre Broker et Engine. Ce mode est très utilisé dans le cadre d’une zone démilitarisée (DMZ). 

## Mode pull

Configuration avancée de Centreon [Gorgone](#gorgone) permettant d’inverser le sens du flux ZMQ. La communication se fait depuis les collecteurs et les serveurs distants vers le serveur central. Ce mode est très utilisé dans le cadre d’un client MSP.

**Voir aussi** : [Configurer Gorgone en mode pull](../developer/developer-gorgone-pull-mode.md).

## Modèle

Squelette préconfiguré d’une [ressource](#ressource) qui permet que les paramètres définis sur le squelette soient appliqués sur la ressource qui en hérite automatiquement.

Il existe des modèles d’hôtes et de services.

**Voir aussi** :

- [Utiliser des modèles d'hôtes](../monitoring/basic-objects/hosts-templates.md)
- [Utiliser des modèles de services](../monitoring/basic-objects/services-templates.md)
- [Utiliser des modèles de contacts](../monitoring/basic-objects/contacts-templates.md).

## Moteur de supervision

Centreon Engine est le composant logiciel qui planifie les contrôles, les exécute et [notifie](#notification) les utilisateurs en cas d’incident.
Il est présent sur les [collecteurs](#collecteur), les [serveurs distants](#serveur-distant) et le [serveur central](#serveur-central).

## Notification

Message avertissant l’utilisateur d’un incident. Il est possible de paramétrer des notifications sur différents [statuts](#statut).

**Voir aussi** : [Fonctionnement des notifications](../alerts-notifications/notif-concept.md) et les autres topics de cette section.

## Ordonnanceur

Voir [**Moteur de supervision**](#moteur-de-supervision).

## Période de rétention

Durée pendant laquelle vous souhaitez conserver vos données de base de données RRD et MariaDB. Elle est exprimée en jours. 

## Période temporelle

Une période temporelle définit un intervalle de temps pour chacun des jours de la semaine. Ces périodes temporelles servent à activer les fonctionnalités du [moteur de supervision](#moteur-de-supervision) sur une période donnée. Elles permettent de définir :

- Quand les commandes de vérification seront exécutées, c’est-à-dire la période de temps durant laquelle on supervise

- Quand des [notifications](#notification) seront envoyées.

**Voir aussi** : [Les périodes temporelles](../monitoring/basic-objects/timeperiods.md).

## Plage de maintenance

Une plage de maintenance ou temps d’arrêt est une période de temps durant laquelle les [notifications](#notification) sont désactivées pour une ressource. Les plages de maintenance sont utilisées lors d'opérations de maintenance programmée ; elles permettent d'éviter de recevoir des alertes de type faux-positif.

**Voir aussi** : [Planifier un temps d'arrêt](../alerts-notifications/downtimes.md).

## Plage de maintenance récurrente

Les temps d'arrêts récurrents sont des temps d'arrêts qui reviennent de manière répétitive.

**Voir aussi** : [Les temps d'arrêt récurrents](../alerts-notifications/downtimes.md##les-temps-darrêt-récurrents).

## Plugin Pack

Paquet Centreon composé d’un plugin et de son pack.

- Le plugin est une sonde ou script qui est appelé par le [moteur de supervision](#moteur-de-supervision) pour effectuer un contrôle sur un [hôte](#hôte) ou un [service](#service). Le plugin va déterminer le statut à renvoyer au moteur de supervision à partir des vérifications qu'il fait et des seuils qui ont été définis dans la configuration de l'hôte ou du service.

- Le pack contient la configuration associée au plugin dans Centreon (commande, [modèles](#modèle), seuils).

**Voir aussi** :

- [Utiliser des Plugin Packs](../monitoring/pluginpacks.md)
- [Introduction aux Plugin Packs](/pp/integrations/plugin-packs/getting-started/introduction).

## Ressource

Objet supervisé par une plateforme Centreon (hôtes, services, métaservices).

## Serveur central

Dans Centreon, le serveur central est la console principale de votre supervision. Il permet : 

- de configurer toute la supervision de votre infrastructure
- de consulter la supervision de tous les serveurs Centreon (serveur central, [serveurs distants](#serveur-distant) et [collecteurs](#collecteur)) dans son interface web.

## Serveur distant

Serveur Centreon utilisé dans une [architecture distribuée](#architecture-simple-vs-distribuée). Un serveur distant est rattaché à un [serveur central](#serveur-central). Des collecteurs peuvent être rattachés à un [serveur distant](#serveur-distant).

- Un serveur distant supervise des ressources. Il possède un moteur de supervision.

- Il a une interface graphique, mais pas de menus de configuration 

- Les ressources qu’il supervise s’affichent dans son interface et dans l’interface du serveur central auquel il est rattaché

## Service

Un service est attaché à un [hôte](#hôte). Il correspond à un point de contrôle de cet hôte. Ce point de contrôle peut être un contrôle : 

- sur le statut d’un composant : Est-ce que mon alimentation est branchée ? Est-ce que mon instance est démarrée ?

- sur la performance d’un composant : Est-ce que mon site Web est accessible en moins de 0,5s ? Quel est mon niveau d’encre ? Quelle est l’utilisation de la mémoire sur mon serveur ?

Un service peut avoir une ou plusieurs [métriques](#métrique) associées.

Un service peut avoir les [statuts](#statut) suivants : OK, ALERTE, CRITIQUE, INCONNU.

**Voir aussi** : [Mettre un service en supervision](../monitoring/basic-objects/services-create.md) et les autres topics de cette section.

## Statut

Indique :

- la disponibilité d'un [hôte](#hôte) (DISPONIBLE, INDISPONIBLE, INJOIGNABLE)
- la disponibilité ou la performance d'un [service](#service) (OK, ALERTE, CRITIQUE, INCONNU).

PENDING n’est pas un statut.

**Voir aussi** : [Statuts possibles d'une ressource](../alerts-notifications/concepts.md).

## Temps d’arrêt

Voir [**Plage de maintenance**](#plage-de-maintenance).

## Type de statut

Indique si un changement de [statut](#statut) est confirmé (HARD) ou non-confirmé (SOFT). Par exemple, un statut qui passe dans un état HARD déclenche l’envoi de notifications.

**Voir aussi** : [Types de statuts](../alerts-notifications/concepts.md#types-de-statuts).

## Widget

Élément permettant d’afficher et configurer des données dans une vue personnalisée.

**Voir aussi** : [Vues personnalisées](../alerts-notifications/custom-views.md).

## ZMQ

Protocole de communication utilisé par Centreon [Gorgone](#gorgone) depuis le [central](#serveur-central) vers les [serveurs distants](#serveur-distant) et les [collecteurs](#collecteur) dans le cadre d’une [architecture distribuée](#architecture-simple-vs-distribuée).
