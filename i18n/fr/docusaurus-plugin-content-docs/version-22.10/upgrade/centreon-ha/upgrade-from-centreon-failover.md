---
id: upgrade-from-centreon-failover
title: Passage de Centreon-Failover à Centreon-HA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Conditions préalables

### Compréhension

Cette procédure est réservée aux utilisateurs avancés. Lisez-la entièrement avant de commencer toute opération. 
Assurez-vous de bien comprendre l'ensemble de la procédure afin de minimiser les interruptions de service lorsque 
le moment de le faire sur les serveurs de production viendra.

### Champ d'application

Cette procédure vise à fournir un guide détaillé sur la façon de mettre à niveau une version de Centreon installée en version < 20.04 avec 
la solution centreon-failover déployée. 

Si vous n'avez jamais travaillé avec l'équipe des services professionnels de Centreon ou avec l'un de nos partenaires, vous n'êtes probablement pas concerné par le contenu ci-dessous. 
ci-dessous.

Veuillez toujours ouvrir un ticket de support pour vous assurer que votre plateforme est conforme au processus de mise à niveau décrit ici.

## Destruction de l'ancien cluster

Pour migrer de centreon-failover vers centreon-ha, il est nécessaire de détruire le Cluster existant. Sachez que l'interface 
Web UI ne sera pas disponible pendant ce processus.

Connectez-vous par SSH à un nœud du Cluster pour exécuter la commande suivante :

Désactiver les ressources : 

```bash
pcs resource disable ms_mysql
pcs resource disable centreon
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

Détruisez le cluster :

```bash
pcs cluster destroy
```

À cette étape, aucun des processus gérés par le cluster ne doit s'exécuter sur aucun nœud.

> **Attention : ** Assurez-vous de vérifier à la fois le serveur central et le serveur de base de données. 

## Mise à jour de MariaDB

Centreon >= 21.10 est livré avec une compatibilité avec MariaDB 10.5.

Mettez à niveau les deux nœuds de base de données en suivant la [procédure officielle de mise à niveau de MariaDB](../../upgrade/upgrade-from-19-10.md#Montée-de-version-du-serveur-MariaDB). 

Une fois que les deux nœuds exécutent la version 10.5 de MariaDB, arrêtez les processus mysql/mariadb. 

##Mettre à niveau les paquets Centreon 

Suivez ces étapes sur chaque nœud Centreon.

Si vous mettez à jour depuis la version 19.10 : 
* [Mettez à jour vos référentiels](../../upgrade/upgrade-from-19-10.md#Mettre-à-jour-le-dépôt-Centreon). Egalement ceux des modules de l'édition Business s'ils sont installés.
* [Mettre à jour vos paquets](../../upgrade/upgrade-from-19-10.md#Montée-de-version-de-la-solution-Centreon)
* [Prendre les mesures supplémentaires requises](../../upgrade/upgrade-from-19-10.md#Actions-complémentaires)

Si vous effectuez une mise à niveau depuis la version 19.04 : 
* [Mettre à jour vos référentiels](../../upgrade/upgrade-from-19-04.md#Mise-à-jour-des-dépôts). Egalement ceux des modules Business Edition s'ils sont installés.
* [Mettre à jour vos paquets](../../upgrade/upgrade-from-19-04.md#Montée-de-version-de-la-solution-Centreon)
* [Prendre les mesures supplémentaires nécessaires](../../upgrade/upgrade-from-19-04.md#Actions-complémentaires)

Arrêtez le processus apache après ces opérations et vérifiez à nouveau qu'aucun des processus gérés par le cluster n'est en cours d'exécution. 
processus géré par le cluster est en cours d'exécution.

## Créer le nouveau cluster

Selon l'architecture de votre Cluster, la procédure de création du cluster est différente. 
* Si le serveur web et les bases de données sont exécutés sur le même noeud, suivez ce [guide d'installation de HA 2 noeuds](../../installation/installation-of-centreon-ha/installation-2-nodes.md#Mise-en-place-du-cluster-Centreon)
* Si les bases de données sont exécutées sur un serveur dédié, suivez ce [guide d'installation de HA 4 nœuds](../../installation/installation-of-centreon-ha/installation-4-nodes.md#Mise-en-place-du-cluster-Centreon)

Avant de passer aux étapes suivantes, assurez-vous que toutes les ressources fonctionnent sans problème et qu'aucune action n'a échoué.

Si un problème survient à cette étape, assurez-vous que les conditions préalables suivantes sont remplies : 

<Tabs groupId="sync">
<TabItem value="HA 2 nodes" label="HA 2 nodes">

* [Échange de clés SSH](../../installation/installation-of-centreon-ha/installation-2-nodes.md#Échanges-de-clefs-SSH), Centreon-HA est plus sécurisé car il ne nécessite pas de privilèges root.
* [Informations d'identification et privilèges de la base de données](../../installation/installation-of-centreon-ha/installation-2-nodes.md#Création-du-compte-centreon), comme ci-dessus, le compte SQL root n'est plus nécessaire.

</TabItem>
<TabItem value="HA 4 nodes" label="HA 4 nodes">

* [Échange de clés SSH](../../installation/installation-of-centreon-ha/installation-4-nodes.md#Échanges-de-clefs-SSH), Centreon-HA est plus sécurisé car il ne nécessite pas de privilèges root.
* [Informations d'identification et privilèges de la base de données](../../installation/installation-of-centreon-ha/installation-4-nodes.md#Création-du-compte-centreon), comme ci-dessus, le compte SQL root n'est plus nécessaire.

</TabItem>
</Tabs>

Une fois que les clés SSH de centreon et de mysql ont été échangées, vous pouvez supprimer les clés publiques SSH de root de /root/.ssh/authorized_keys.

### Finalisation de la mise à niveau

Tout d'abord, effectuez les étapes de l'assistant Web pour terminer le processus de mise à niveau de Central :
* Si vous effectuez une mise à niveau depuis la version 19.10, suivez ce [chapitre](../../upgrade/upgrade-from-19-10.md#Finalisation-de-la-mise-à-jour).
* Si vous effectuez une mise à niveau depuis la version 19.04, suivez ce [chapitre](../../upgrade/upgrade-from-19-04.md#Finalisation-de-la-mise-à-jour).

<Tabs groupId="sync">
<TabItem value="HA 2 nodes" label="HA 2 nodes">

Ensuite, modifiez la commande de rechargement de Centreon-Broker de votre serveur central dans 'Configuration > Pollers' comme décrit [ici](../../installation/installation-of-centreon-ha/installation-2-nodes.md#Modification-de-la-commande-de-rechargement-de-`cbd`).

</TabItem>
<TabItem value="HA 4 nodes" label="HA 4 nodes">

Ensuite, modifiez la commande de rechargement de Centreon-Broker de votre serveur central dans 'Configuration > Pollers' comme décrit [ici](../../installation/installation-of-centreon-ha/installation-4-nodes.md#Modification-de-la-commande-de-rechargement-de-`cbd`).

</TabItem>
</Tabs>

Enfin, mettez à jour votre/vos poller(s) comme décrit [ici](../../upgrade/upgrade-from-19-04.md#Montée-de-version-des-Pollers)
