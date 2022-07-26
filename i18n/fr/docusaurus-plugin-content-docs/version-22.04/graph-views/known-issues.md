---
id: known-issues
title: Problèmes connus
---

Vous trouverez ci-dessous une liste de problèmes et/ou de bogues connus que vous pouvez rencontrer lors de l'utilisation de Centreon MAP.
Nous essayons de fournir des solutions de contournement. Nous appliquons des correctifs lorsque cela est nécessaire et nous améliorons constamment notre logiciel afin de résoudre tous les problèmes pour les prochaines versions.

| Problèmes | Solution de contournement si elle existe |
|---|---|
| Dans certains cas rares, le contenu d'un conteneur peut sembler non modifiable. En fait, il peut être modifié mais le rendu n'est pas mis à jour du côté client. | Pour mettre à jour le contenu : Redémarrez centreon-map (tapez : systemctl restart centreon-map) et contactez le support pour que nous puissions analyser votre plateforme. |
| Il se peut que vous rencontriez parfois un habillage illogique des mots sur l'interface web (mots coupés en deux). | Ajustez la taille ou l'étiquette de l'élément pour obtenir un rendu parfait sur l'interface web (mais peut-être pas sur le client de bureau). |
| Il se peut que votre client de bureau se déconnecte sans raison apparente, ce qui vous amène à être déconnecté et à revenir à la page de connexion. Cela peut se produire lors du démarrage du client de bureau ou de la migration de MAP 3 à MAP 4. | Cela peut être lié au temps nécessaire au transfert des données. Ouvrez le fichier Centreon-Map4.ini sur le client de bureau et ajoutez -Dread.timeout=600 à la fin. Redémarrez ensuite le client de bureau pour appliquer les modifications. |
| Une fenêtre contextuelle indésirable apparaît sur le client de bureau et affiche des données hexadécimales. Cela peut être dû à certains caractères UTF-8 spéciaux qui peuvent apparaître dans la configuration Centreon ou la base de données en temps réel, rendant les fichiers XML invalides. | Sur le serveur Centreon MAP, exécutez le script suivant : /etc/centreon-studio/findSpecialCharacters.sh. Il localisera tous les caractères spéciaux. Si le script ne met aucun caractère en évidence, veuillez nous contacter. Ce script nécessite un utilisateur MariaDB disposant de privilèges de sélection, de création et de suppression sur la base de données "centreon". |
| Lorsque vous ajoutez des groupes d'hôtes à une vue géographique affichée dans un widget, les hôtes ne sont pas correctement positionnés. | Faites un zoom arrière jusqu'à ce que vous voyiez les hôtes. |
| Dans la liste des vues, vous ne pouvez pas entrer dans une vue en cliquant dessus. | Appuyez sur *Enter* pour accéder à la vue. |
| Un polygone n'est pas rendu correctement, notamment après avoir été redimensionné. | Appelez des images au lieu de dessiner des polygones. |
| Le message "Le serveur de cartes est déconnecté de Broker" peut occasionnellement apparaître sur le client de bureau. | Ignorez ce message. |
| Dans l'interface web, lorsque vous double-cliquez sur un widget de processus, la commande sous-jacente n'est pas exécutée sur l'hôte cible. |   |
| La suppression d'images sur le serveur central Centreon n'est pas appliquée instantanément au client de bureau. | Redémarrez le client de bureau pour que l'image ou les images supprimées disparaissent. |
| Lorsque vous créez une jauge avec une largeur &lt;200 et une hauteur &lt;80, le résultat affiché peut différer entre les clients web et desktop. | Ajustez la taille de la jauge. |
| Le redimensionnement des polygones peut ne pas fonctionner comme prévu | Nous vous conseillons de les recréer si le rendu échoue sur le client web. |
