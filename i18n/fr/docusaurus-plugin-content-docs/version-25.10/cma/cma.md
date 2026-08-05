---
id: cma
title: Introduction à l'agent CMA
description: "Introduction à l'agent de supervision Centreon et ses cas d'usage"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

L'agent de supervision Centreon (Centreon Monitoring Agent, CMA) est un logiciel qu'on installe sur les hôtes à superviser : il collecte des métriques et calcule des statuts, et les envoie à Centreon.

L'agent peut exécuter des contrôles natifs ou utiliser des plugins Centreon pour exécuter des contrôles non natifs. Les contrôles natifs sont exécutés directement par l'agent (contrairement aux contrôles non natifs, qui nécessitent l'installation de plugins locaux sur l'hôte). Les contrôles natifs sont plus performants et ont une meilleure empreinte (réduction de l'utilisation du processeur et de la mémoire).

Les contrôles natifs et non natifs sont définis dans les connecteurs **Linux Centreon Monitoring Agent** et **Windows Centreon Monitoring Agent**. Les connecteurs fournissent des modèles qui contiennent des commandes prêtes à l'emploi, et l'agent récupère la configuration de ces contrôles à intervalles réguliers après l'établissement de la connexion.

L'agent effectue les contrôles (pour les contrôles non natifs, en utilisant les plugins locaux) et envoie les données au collecteur. La partie du moteur du collecteur qui reçoit les données de l'agent est appelée récepteur OTLP (OTLP signifie OpenTelemetry protocol).

Les plugins Centreon comme les plugins personnalisés basés sur Nagios sont compatibles avec l'agent.

## Quand utiliser un agent ?

Utilisez l'agent CMA :

* lorsque les politiques de sécurité n'autorisent que les flux sortants (aucun contrôle ne peut être effectué par les collecteurs, le SNMP n'est pas autorisé).
* sur les sites qui n'ont pas de collecteur local.
* lorsque vous avez besoin d'exécuter un script localement sur la machine supervisée pour des raisons de sécurité (droits et/ou protocoles) ou de performance.

## OS supervisables par CMA

L'agent peut être installé sur et superviser les OS suivants :

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* RHEL/Oracle Linux/Alma Linux 8
* RHEL/Oracle Linux/Alma Linux 9
* RHEL/Oracle Linux/Alma Linux 10
* Debian 11
* Debian 12
* Debian 13
* Ubuntu 22.04/24.04 LTS

</TabItem>
<TabItem value="Windows" label="Windows">

* Windows 10
* Windows 11
* Windows Server 2016
* Windows Server 2019
* Windows Server 2022
* Windows Server 2025

</TabItem>
</Tabs>

## Applications supervisables par CMA

* Inclus dans les connecteurs Centreon :

   * [**Hitachi E Series**](/pp/integrations/plugin-packs/procedures/hardware-storage-hitachi-eseries-cma)
   * [**Hyper-V 2012**](/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-cma)
   * [**Linux**](/pp/integrations/plugin-packs/procedures/operatingsystems-linux-centreon-monitoring-agent)
   * [**Linux Libvirt**](/pp/integrations/plugin-packs/procedures/virtualization-linux-libvirt-cma)
   * [**Microsoft Active Directory**](/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-centreon-monitoring-agent)
   * [**Microsoft Cluster Server**](/pp/integrations/plugin-packs/procedures/applications-mscs-cma)
   * [**Microsoft Exchange**](/pp/integrations/plugin-packs/procedures/applications-exchange-cma)
   * [**Microsoft SCCM**](/pp/integrations/plugin-packs/procedures/applications-sccm-cma)
   * [**Microsoft WSUS**](/pp/integrations/plugin-packs/procedures/applications-wsus-cma)
   * [**Veeam**](/pp/integrations/plugin-packs/procedures/applications-veeam-centreon-monitoring-agent)
   * [**Windows**](/pp/integrations/plugin-packs/procedures/operatingsystems-windows-centreon-monitoring-agent).


* Vous pouvez également [développer vos propres plugins](cma-custom.md).

## Comment interagissent le collecteur et l'hôte?

### Sens de connexion

Suivant le cas, soit l'agent soit le collecteur initie la connexion.
> Attention, le fonctionnement des 2 sens de connexion décrit ci-dessous ne concerne que l'établissement de la connexion. 
> Une fois celle-ci établie, le comportement de l'agent (planification des contrôles, remontée d'information) et du collecteur (alertes, envoi de la configuration) sont strictement identiques et la connexion est bidirectionnelle.

* Dans le cas d'une **connexion initiée par l'agent**, le collecteur écoute sur un port spécifique, et peut recevoir des données de n agents/hôtes. Il s'agit du mode par défaut, qui permet une configuration dynamique des agents (on peut ajouter ou retirer des agents sans changer la configuration côté collecteur).
* Vous pouvez également opter pour une **connexion initiée par le collecteur**. Ceci est pertinent dans le cas où, par exemple, l'agent n'est pas autorisé à se connecter au collecteur pour des raisons de sécurité (par exemple, lorsque l'hôte se trouve dans une DMZ). Vous devez déclarer chaque agent auquel le collecteur devra se connecter, dans le menu **Configuration > Collecteur > Configuration d'agent**.

Les deux sens de connexion peuvent être combinés au sein d'un même collecteur, en fonction de la typologie de votre parc supervisé.

<!--You can use both types of communication at the same time (for different hosts).-->

### Sécurisation de la connexion

La connexion entre le collecteur et l'agent doit être sécurisée en production. Vous devez utiliser :

- [une connexion TLS avec certificats](cma-certificates.md)
- [un jeton d'authentification](cma-setup.md#créez-un-jeton-dauthentification).

<!-- 2 options are possible:-->
<!--* TLS: the certificate is signed by a certification authority and the Common Name (CN) is verified.
* TLS insecure: the certification authority and Common Name are not verified (self-signed certificates can be used).-->

### Schéma de fonctionnement

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">
![image](../assets/cma/initiated-by-agent.png)
</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">
![image](../assets/cma/initiated-by-poller.png)
</TabItem>
</Tabs>
