id: physical-vm-poller
title: Installer un collecteur sur une machine virtuelle ou physique
description: "Installer un collecteur sur une machine virtuelle ou physique depuis l'interface Centreon"
---

> La fonctionnalité ci-décrite est en phase bêta.

Une commande personnalisée pour installer un collecteur sur une machine virtuelle ou physique peut être générée depuis l'interface de votre serveur central.

## Prérequis

* Le machine sur laquelle vous allez installer le collecteur doit satisfaire les [prérequis d'installation d'un collecteur](../prerequisites.md#dimensionnement-dun-collecteur).
* Avoir antérieurement créé un jeton de d'authentification de type collecteur.

## Étape 1 : générer la commande d'installation

1. Sur l'interface du serveur central, cliquez sur la zone des collecteurs en haut à gauche de l'écran puis sur **Créer un collecteur**.

![image](../../assets/installation/create-poller-banner.png)

2. Remplissez le formulaire avec les informations du collecteur :

    * **Nom du collecteur** : un nom unique pour ce collecteur. Il apparaîtra dans la liste des collecteurs.
   * **Adresse du collecteur** : l'adresse de la machine hôte sur laquelle vous allez installer le collecteur.
      > L'adresse du collecteur n'a aucune incidence sur la connectivité : Gorgone
      > utilise PullWSS, c'est donc toujours le collecteur qui initie la connexion vers le
      > serveur central, et non l'inverse.
   * **Adresse du serveur central Centreon, telle que vue par ce collecteur** : l'URL que ce collecteur utilise pour joindre le serveur central, par exemple `http(s)://10.10.10.10/centreon`. Si votre serveur central est configuré en HTTPS, la connexion entre le serveur central et le collecteur sera automatiquement configurée en HTTPS aussi.

3. Sélectionnez **Conteneur** comme environnement du collecteur.

4. Sélectionnez le [jeton d'authentification](#prérequis) que vous avez créé pour ce collecteur.

5. Dans la section **Générer la commande d'installation**, cliquez sur le bouton et patientez le temps que la commande soit générée.

6. Copiez la commande à l'aide du bouton situé en haut à droite du bloc de code et exécutez-la.

7. Cliquez sur le bouton **Exporter la configuration**.

