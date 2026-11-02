---
id: deploy-poller
title: À l'aide d'une commande générée automatiquement (VM ou machine physique)
description: "Installer un collecteur sur une machine virtuelle ou physique à l'aide d'une commande générée dans l'interface Centreon"
---

> La fonctionnalité décrite ici est en phase bêta.

Une commande personnalisée pour installer un collecteur sur une machine virtuelle ou physique peut être générée depuis l'interface de votre serveur central.

## Prérequis

* La machine sur laquelle vous allez installer le collecteur doit satisfaire les [prérequis d'installation d'un collecteur](../prerequisites.md#dimensionnement-dun-collecteur).
* Vous devez disposer d'un jeton d'authentification de type collecteur (les plateformes Cloud en ont un par défaut, appelé **poller-default**).

## Étape 1 : Générer la commande d'installation

1. Sur l'interface du serveur central, cliquez sur la zone des collecteurs en haut à gauche de l'écran puis sur **Créer un collecteur**.

   ![image](../../assets/installation/create-poller-banner.png)

2. Remplissez le formulaire avec les informations concernant le collecteur :

   * **Nom du collecteur** : un nom unique pour ce collecteur. Il apparaîtra dans la liste des collecteurs.
   * **Adresse du collecteur** : l'adresse de la machine hôte sur laquelle vous allez installer le collecteur.
      > L'adresse du collecteur n'a aucune incidence sur la connectivité : Gorgone
      > utilise PullWSS, c'est donc toujours le collecteur qui initie la connexion vers le
      > serveur central, et non l'inverse.

3. Sélectionnez **VM ou physique** comme environnement du collecteur.

4. Sélectionnez votre [jeton d'authentification](#prérequis).

5. Dans la section **Générer la commande d'installation**, cliquez sur le bouton et patientez le temps que la commande soit générée.

6. Copiez la commande à l'aide du bouton situé en haut à droite du bloc de code et exécutez-la sur votre machine hôte.

7. Cliquez sur le bouton **Exporter la configuration**. Le collecteur apparaît dans la liste des collecteurs.
