---
id: upgrade-from-centreon-failover
title: Montée de version de Centreon Failover vers Centreon HA
---

## Prérequis

### Informations importantes

Cette procédure est réservée aux utilisateurs avancés. Il est conseillé de la lire 
de manière complète avant de démarrer toutes opérations. 

Il est nécessaire de comprendre globalement les différentes étapes afin de minimiser
l'interruption de service générée lors de son application en production. 

### Périmètre d'application 

Cette procédure vise à donner les bons pointeurs pour réaliser une migration depuis une 
version de Centreon < 20.04 hautement disponible grâce à la solution centreon-failover.

Si vous n'avez jamais sollicité Centreon ou l'un de ses partenaires, vous n'êtes probablement
pas concerné par le contenu de cette documentation. 

Il est recommandé d'ouvrir un ticket au support afin d'assurer la compatibilité de votre plateforme
avec les opérations décrites dans cette procédure. 

## Suppression du Cluster

Afin de passer de centreon-failover à centreon-ha, il est nécessaire de détruire le cluster
existant. L'interface Web de Centreon est indisponible durant toute la durée de la mise à jour 
et ce jusqu'à la création d'un nouveau Cluster. 

Connectez-vous en SSH à un noeud du cluster et exécutez les commandes ci-après. 

Désactivez les ressources: 

```bash
pcs resource disable ms_mysql
pcs resource disable centreon
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

Détruisez le cluster: 

```bash
pcs cluster destroy
```

À ce moment, aucun des processus applicatifs gérés par le cluster ne doivent fonctionner. 

Stoppez manuellement la partie RRD de Centreon-Broker via la commande suivante: 

```bash
service cbd stop
```

> **ATTENTION:** Il est important de vérifier qu'aucun processus n'est en cours d'exécution. Faites également
la vérification sur les serveurs de bases de données s'ils sont dédiés.  

## Mise à jour de MariaDB / MySQL

Centreon est compatible avec la version 10.5 de MariaDB depuis la version 21.04. 

Réalisez la montée de version des bases de données en suivant [la documentation officielle](../../upgrade/upgrade-from-19-10.html#montée-de-version-du-serveur-mariadb). 

Un fois la mise à jour réalisée sur chaque noeud, arrêter les processus via les commandes suivantes: 

```bash
systemctl stop mysql mariadb
```

## Mise à jour des paquets Centreon

Effectuer les opérations suivantes sur les deux noeuds hébergeant le serveur Apache et l'applicatif Centreon:

Si vous utilisez Centreon 19.10:
* [Déployer les dépôts 20.04](../../upgrade/upgrade-from-19-10.html#mise-à-jour-des-dépôts). Il est également nécessaire de mettre à jour les dépôts des modules de l'édition Business.
* [Mettre à jour les paquets Centreon](../../upgrade/upgrade-from-19-10.html#montée-de-version-de-la-solution-centreon)
* [Réaliser les étapes supplémentaires](../../upgrade/upgrade-from-19-10.html#actions-complémentaires)

Si vous utilisez Centreon 19.04:
* [Déployer les dépôts 20.04](../../upgrade/upgrade-from-19-04.html#mise-à-jour-des-dépôts). Also those of the Business Edition modules if installed.
* [Mettre à jour les paquets Centreon](../../upgrade/upgrade-from-19-04.html#montée-de-version-de-la-solution-centreon)
* [Réaliser les étapes supplémentaires](../../upgrade/upgrade-from-19-04.html#actions-complémentaires)

À la suite de ces opérations, stoppez le processus apache et contrôlez à nouveau qu'aucun processus géré par le Cluster
n'est en cours d'exécution. 

## Créer le cluster Centreon-HA

En fonction de l'architecture utilisée, la procédure pour installer et configurer le Cluster diffère: 
* Si Centreon et les bases de données sont sur le même noeud, suivez ce [guide d'installation](../../installation/installation-of-centreon-ha/installation-2-nodes.html#mise-en-place-du-cluster-centreon)
* Si les bases de données tournent sur un serveur dédié, suivez ce [guide d'installation](../../installation/installation-of-centreon-ha/installation-4-nodes.html#mise-en-place-du-cluster-centreon)

Avant de passer à la finalisation de la mise à jour, assurez-vous que toutes les ressources fonctionnent correctement sans erreurs. 

Si ce n'est pas le cas, il est recommandé de vérifier les éléments suivants:
* [Échanges de clefs SSH pour le Cluster](../../installation/installation-of-centreon-ha/installation-2-nodes.html#échanges-de-clefs-ssh)
* [Droits et privilèges des utilisateurs de bases de données](../../installation/installation-of-centreon-ha/installation-2-nodes.html#création-du-compte-centreon)

Une fois que les clefs SSH des utilisateurs centreon et mysql ont bien été échangées, il est recommandé 
de supprimer la clef publique de root de /root/.ssh/authorized_keys.

### Finaliser la montée de version

Vous pouvez désormais finaliser la mise à jour de Centreon via l'assistant web: 
* Si vous étiez en version 19.10, suivez ce [chapitre](../../upgrade/upgrade-from-19-10.html#finalisation-de-la-mise-à-jour).
* Si vous étiez en version 20.04, suivez ce [chapitre](../../upgrade/upgrade-from-19-04.html#finalisation-de-la-mise-à-jour).

Ensuite, vérifiez que la commande de rechargement de Centreon-Broker pour le Serveur Central intègre bien la modification
décrite [ici](../../installation/installation-of-centreon-ha/installation-2-nodes.html#modification-de-la-commande-de-rechargement-de-cbd). Celle-ci est configurable via le menu
'Configuration > Collecteurs'. 

Enfin, [mettez à jour les Pollers](../../upgrade/upgrade-from-19-04.html#montée-de-version-des-pollers), redéployez la configuration et redémarrez le processus centengine. 
