---
id: overview
title: Fonctionnement de Centreon HA
description: "Comment un cluster Centreon HA bascule et se rétablit"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Comment fonctionne un cluster Centreon HA ?

Dans le cluster central, tous les processus Centreon (« ressources ») sont gérés par les outils de clustering (Pacemaker et Corosync).

1. Tout va bien : le nœud central 1 (le nœud actif actuel) reçoit les données des collecteurs, et tous les fichiers concernés sont synchronisés par un script dédié (**centreon_central_sync**) sur le nœud central 2 (le nœud passif actuel) afin que le nœud passif soit prêt à devenir le nœud actif à tout moment.
2. Un incident se produit et le nœud central 1 (le nœud actif) tombe en panne.
   - Corosync détecte qu'il est hors service : après avoir consulté le quorum device, il indique au nœud central 2 de devenir le nœud actif.
   - Un opérateur est notifié que le nœud central 1 est en panne, [grâce au monitoring Centreon mis en place sur le collecteur](../../administration/centreon-ha/monitoring-guide.md).
3. Le nœud central 2 est maintenant le nœud actif. Il reçoit les données des collecteurs. Pendant ce temps, l'opérateur essaie de comprendre pourquoi le nœud central 1 est en panne. Il doit résoudre le problème, puis redémarrer les processus à l'aide de l'outil de gestion de cluster **pcs**, et non en manipulant directement le nœud central 1.
4. Le nœud central 1 est réparé et revient en ligne. Le script **centreon_central_sync** synchronise tous les fichiers concernés du nœud central 2 vers le nœud central 1, de sorte que le nœud central 1 puisse rattraper ce qui s'est passé pendant son temps d'arrêt. Le nœud central 1 est prêt à devenir le nœud actif si le nœud central 2 tombe en panne.

Le processus est le même pour le cluster de bases de données.

## Que se passe-t-il en cas de basculement du cluster ?

[Si vous avez supervisé votre cluster comme décrit ici](../../administration/centreon-ha/monitoring-guide.md), lorsque le cluster bascule (par exemple, lorsque le nœud actif est affecté par une panne de réseau, si ses partitions Broker sont pleines...).

* L'hôte de la VIP doit être OK dans la page **État des ressources** (il peut temporairement tomber dans un état SOFT si le contrôle correspondant est effectué exactement au moment où le cluster bascule).
* L'hôte du nœud central en panne apparaîtra comme DOWN et/ou avec des services CRITIQUES.
* Vous pouvez recevoir des notifications si vous les avez configurées.
* Vous devrez peut-être vous connecter à nouveau à l'interface.

Vous devez agir et résoudre le problème pour que le nœud central défaillant (disons, le nœud central 1) revienne en ligne. Une fois que le nœud central 1 est de nouveau en ligne :

* Le nœud central 1 est toujours le nœud passif : le cluster **ne bascule pas** automatiquement à nouveau.
* Si vous utilisez EL8 ou Debian, vous devez effacer manuellement la contrainte créée par le basculement (en utilisant `pcs resource clear centreon`).
* Dans un contexte de production, vous n'êtes pas **obligé** de revenir au nœud central 1 en tant que nœud actif - mais vous pouvez le faire si vous le souhaitez (par exemple, si le nœud central 2 a des performances limitées), en [effectuant un basculement](../../administration/centreon-ha/operating-guide.md#comment-effectuer-un-basculement-manuel) sur le nœud central 2.
