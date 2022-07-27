---
id: known-issues
title: Problèmes connus
---

Below is a list of know issues and/or bugs you may encounter when using Centreon MAP.
We try to provide workarounds. We apply fixes when necessary and are forever improving our software in order to solve any issues for future releases.

| Problèmes | Solution de contournement si elle existe |
|---|---|
| Dans certains cas rares, le contenu d'un conteneur peut sembler non modifiable. En fait, il peut être modifié mais le rendu n'est pas mis à jour du côté client. | Pour mettre à jour le contenu : Redémarrez centreon-map (tapez : systemctl restart centreon-map) et contactez le support pour que nous puissions analyser votre plateforme. |
| Vous pouvez occasionnellement rencontrer un habillage illogique des mots sur l'interface web (mots coupés en deux). | Ajustez la taille ou l'étiquette de l'élément pour obtenir un rendu parfait sur l'interface Web (mais peut-être pas sur le client de bureau). |
| Le client de bureau peut perdre son temps sans raison apparente, ce qui entraîne une déconnexion et le retour à la page de connexion. Cela peut se produire lors du démarrage du client de bureau ou lors de la migration de MAP 3 à MAP 4. | Cela peut être lié au temps nécessaire au transfert des données. Ouvrez le fichier Centreon-Map4.ini sur le client de bureau et ajoutez -Dread.timeout=600 à la fin. Redémarrez ensuite le client de bureau pour appliquer les modifications. |
| Une fenêtre contextuelle indésirable apparaît sur le client de bureau et affiche des données hexadécimales. Cela peut être dû à certains caractères UTF-8 spéciaux qui peuvent apparaître dans la configuration Centreon ou dans la base de données en temps réel, rendant les fichiers XML invalides. | Sur le serveur MAP de Centreon, exécutez le script suivant : /etc/centreon-studio/findSpecialCharacters.sh. Il localisera tous les caractères spéciaux. Si le script ne met aucun caractère en évidence, veuillez nous contacter. Ce script nécessite un utilisateur MariaDB avec des privilèges de sélection, de création et de suppression sur la base de données "centreon". |
| Lorsque vous ajoutez des groupes d'hôtes à une vue géographique affichée dans un widget, les hôtes ne sont pas correctement positionnés. | Vous devez effectuer un zoom arrière jusqu'à ce que vous voyiez les hôtes. |
| Dans la liste des vues, vous ne pouvez pas entrer dans une vue en cliquant dessus. | Appuyez sur *Entrée* pour accéder à la vue. |
| Un polygone n'est pas correctement rendu, notamment après avoir été redimensionné. | Appelez des images au lieu de dessiner des polygones. |
| Le message "Le serveur de cartes est déconnecté du Broker" peut occasionnellement apparaître sur le client de bureau. | Ignorez ce message. |
| Sur l'interface Web, lorsque vous double-cliquez sur un widget de processus, la commande sous-jacente n'est pas exécutée sur l'hôte cible. |
| La suppression d'images sur le serveur central Centreon n'est pas instantanément appliquée au client de bureau | Redémarrez le client de bureau pour que la ou les images supprimées disparaissent |
| Lorsque vous créez une jauge avec une largeur de 200 et une hauteur de 80, le résultat affiché peut différer entre le client Web et le client de bureau. | Ajustez la taille de la jauge. |
| Le redimensionnement des polygones peut ne pas fonctionner comme prévu. | Nous vous conseillons de les recréer si le rendu échoue sur le client Web. |

