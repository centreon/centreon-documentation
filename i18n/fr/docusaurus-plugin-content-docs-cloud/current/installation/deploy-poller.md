---
id: deploy-poller
title: Déployer un collecteur
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Avec Centreon Cloud, votre serveur central est déjà prêt à l'emploi. Il ne vous reste qu'à installer un ou des collecteurs dans votre infrastructure, ce qui est très facile : exécutez un script, exportez la configuration et le collecteur est prêt.

Avant de déployer un collecteur, assurez-vous que votre machine hôte répond aux [prérequis](prerequisites.md).

## Étape 1 : Exécuter le script

1. [Sur votre serveur central](../getting-started/interface.md#accéder-à-linterface-du-serveur-central), cliquez sur la flèche à côté de **Collecteurs** dans le bandeau en haut à gauche.

2. Dans la pop-up qui apparaît, cliquez sur **Copy install command**. La commande est copiée dans votre presse-papiers.

3. Connectez-vous en SSH au serveur qui deviendra un collecteur Centreon.

4. Dans le terminal, copiez la commande d'installation et exécutez-là (cela devrait prendre environ 10 minutes).

5. Une fois le script exécuté, sur le serveur central, allez à la page **Configuration > Collecteurs > Collecteurs**. Le nouveau collecteur apparaît dans la liste des collecteurs.
   * Par défaut, le nom du collecteur est son hostname (celui-ci peut avoir été abrégé). Cliquez sur le nom du collecteur pour le renommer.
   * Dans la colonne **Adresse IP**, l'adresse indiquée est celle du collecteur vu par le serveur central. En effet, pendant le processus d'installation, un VPN est installé : l'adresse IP est celle du collecteur à l'intérieur du VPN.
   * Le collecteur n'est pas encore démarré (**Non** dans la colonne **En cours d'exécution?**).

## Étape 2 : Exporter la configuration et redémarrer le collecteur

Exportez la configuration du collecteur :

1. Sur le serveur central, allez à la page **Configuration > Collecteurs > Collecteurs**, puis sélectionnez le collecteur que vous venez de créer.
2. Cliquez sur **Exporter la configuration**. Un nouvelle page s'ouvre :
   * Sélectionnez les 4 premières options
   * À côté de **Redémarrer l'ordonnanceur**, sélectionnez la méthode **Redémarrer**.
3. Cliquez sur **Exporter**. Un log de l'export s'affiche : il ne devrait pas y avoir d'erreurs.
4. Retournez à la page **Configuration > Collecteurs > Collecteurs** : le collecteur affiche **Oui** dans la colonne **En cours d'exécution?**. Votre collecteur est maintenant prêt à superviser des ressources.
