---
id: introduction
title: Introduction
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Un site mobile est disponible et vous permet de visualiser le statut des resources supervisées
par Centreon, sur une tablette ou un téléphone.

  ![image](../assets/mobile/mobile-app-screens.png)

Les fonctionnalités principales de ce site sont:

- Visualisation des statuts de vos ressources: hôtes et services
- Filtrer la liste des ressources
- Prendre des actions sur les ressources: acquitter ou démarrer une plage de maintenance programmée
- Accéder aux informations détaillées des ressources
- Accéder à l'historique d'une métrique via un graphique

  `<video width="375" height="812" controls="true" allowfullscreen="true" poster="../assets/mobile/mobile-login.png">`
    `<source src="../assets/mobile/mobile-demo.mp4" type="video/mp4"/>`
  `</video>`

## Pre-requis

Voici les pré-requis vous permettant de profiter du site mobile et d'être en mesure de vous
connecter à votre plateforme Centreon :

- Disposer d'un Centreon >= 20.04
- Avoir un accès direct à votre plateforme Centreon à partir de votre téléphone (même réseau ou VPN par exemple)
- Disposer d'un certificat SSL valide sur votre plateforme Centreon provenant d'une autorité de certification reconnue par votre téléphone.

## Accéder au site mobile

Rendez-vous à l'URL suivante : [mobile.centreon.com](https://mobile.centreon.com/).

## Se connecter à l'application

Une fois connecté au site, vous devez remplir les champs
suivants afin de vous connecter à votre plateforme Centreon:

- URL: L'adresse que vous utilisez pour votre connecter à votre plateforme. Ne pas oublier le "/centreon" sauf si une personnalisation
de l'URL a été mise en place. Exemple: `https://yourcentreon.int.com:PORT/centreon`
- User: le login pour vous connecter à Centreon
- Password: votre mot de passe pour vous connecter à Centreon

![image](../assets/mobile/mobile-login.png)

Si vous rencontrez des problèmes de connexion:

- Assurez-vous que votre téléphone a bien accès en direct à votre plateforme Centreon (en vous rendant directement sur l'URL par exemple)
- Il se peut que votre configuration Apache ait été modifiée et empêche l'applicatiaon d'accéder aux APIs de Centreon, dans ce cas,
consultez [la section suivante](../upgrade/upgrade-from-19-10.md#configure-apache-api-access).
Assurez-vous d'avoir donné à l'utilisateur les droits d'accès à l'API temps réel. Vous pouvez vérifier cela dans le menu
`Configuration > Utilisateurs > Contacts / Utilisateurs` : dans l'onglet **Authentification Centreon**, le paramètre **Accès à l'API de temps réel** doit être activé.
