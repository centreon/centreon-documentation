---
id: opentelemetry-collector
title: Fonctionnement d'un collecteur OpenTelemetry
description: Comment les collecteurs OpenTelemetry reçoivent, traitent et exportent les logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Comme expliqué dans [Qu'est-ce qu'OpenTelemetry et comment Centreon Log Management l'utilise-t-il ?](../getting-started/concepts.md#quest-ce-quopentelemetry-et-comment-centreon-log-management-lutilise-t-il-), vous devez [installer un collecteur OpenTelemetry](./collector.md) sur chaque hôte à partir duquel vous souhaitez envoyer des logs vers Centreon Log Management.

* Un seul collecteur est nécessaire par hôte.
* Vous pouvez envoyer différents types de logs à l'aide du même collecteur.
* Un collecteur qui recueille les logs directement depuis un hôte est un collecteur en mode agent. Il peut parfois être utile de mettre en chaîne des collecteurs, les collecteurs en mode agent transmettant leurs données à un [collecteur en mode gateway](#collecteurs-opentelemetry-en-mode-gateway).

## Composants d'un collecteur OpenTelemetry

Un collecteur OpenTelemetry comprend trois composants principaux qui s'exécutent les uns après les autres (voir le [schéma](#schémas) ci-dessous) :

* Les **receivers** lisent les données à partir de fichiers ou les reçoivent via un flux. Ils acceptent des logs dans divers formats et provenant de diverses sources (par exemple, OTLP, syslog, etc.). Certains types de receivers incluent des "operators", qui sont similaires aux processors mais s’appliquent uniquement aux logs provenant de ce récepteur spécifique.
* Les **processors** vous permettent d’effectuer des actions sur tous les logs d’un pipeline donné. Ils peuvent filtrer, transformer ou enrichir les données avant qu’elles ne quittent le collecteur.
* Les **exporters** envoient les logs au format OpenTelemetry vers Centreon Log Management.

## Configurer le pipeline de traitement des données

Les receivers, les processors et les exporters sont organisés en un pipeline qui définit l'ordre dans lequel ils s'exécutent.
Chaque composant est défini à l'aide de fichiers YAML.

* Si vous n'avez besoin de recevoir des logs qu'à partir d'un petit nombre de sources, vous pouvez regrouper toute la configuration dans un seul fichier (**config.yaml**).
* Sinon, la meilleure pratique consiste à utiliser un fichier pour la configuration générale du collecteur et un fichier par source de données (c'est la méthode décrite dans [notre procédure principale](./collector.md)).

Dans tous les cas, les receivers, les processors et les exporters doivent être définis.

## Collecteurs OpenTelemetry en mode gateway

Dans certains cas, vous pouvez souhaiter ajouter un collecteur supplémentaire placé entre vos collecteurs hôtes et Centreon Log Management, c'est-à-dire un collecteur en [mode gateway](#schémas). Il reçoit toutes les données provenant de vos autres collecteurs et les transmet à Centreon Log Management. Sa configuration est identique à celle d’un collecteur OpenTelemetry en mode agent : il vous suffit de configurer les exporters des collecteurs hôtes pour qu’ils pointent vers un receiver OTLP sur la gateway.

Utilisez un collecteur OpenTelemetry en mode gateway :

* Lorsque vous ne pouvez pas installer un collecteur en mode agent sur un périphérique réseau (par exemple, un pare-feu).
* Lorsque vous souhaitez contrôler et limiter le trafic réseau sortant en n'ouvrant que les ports nécessaires.
* Lorsque vous disposez de nombreux services. Si vous avez 50 services et que vous souhaitez modifier la destination des logs, le fait d’utiliser une gateway signifie que vous n’avez qu’une seule configuration à mettre à jour.
* Lorsque vous souhaitez nettoyer les données avant qu’elles ne soient transmises. Certains logs contiennent peut-être des données confidentielles, ou trop d’informations. La gateway peut les supprimer avant que les données n’atteignent un outil tiers. Un seul filtre, appliqué partout, automatiquement.

## Schémas

<Tabs groupId="agentgatewaymode" queryString>
<TabItem value="Agent mode" label="Agent mode">

![image](../assets/open_telemetry_collector.svg)

</TabItem>
<TabItem value="Gateway mode" label="Gateway mode">

![image](../assets/open_telemetry_collector_gateway.svg)

</TabItem>
</Tabs>
