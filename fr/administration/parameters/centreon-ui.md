---
id: centreon-ui
title: Centreon UI
---

Cette partie traite de la configuration des options générales de l'interface web
Centreon.

Depuis le menu `Administration > Paramètres > Centreon web`.

![image](../../assets/administration/parameters-centreon-ui.png)

- Le champ **Répertoire** désigne le répertoire dans lequel Centreon est
installé
- Le champ **Répertoire Web de Centreon** indique le répertoire web sur lequel
est installé Centreon
- Le champs **Contacts & Contact groups method calculation** permet de définir
comment l'héritage des notifications des hôtes et services vont être calculés
- Le champ **Limite par page (par défaut)** définit le nombre d'objet affiché
par page de **Configuration**
- Le champ **Limite par page pour les pages de supervision** définit le nombre
d'objet affiché par page au sein du menu **Supervision**
- Le champ **Graphique de performance par page** définit le nombre maximum de
graphiques affichés sur la page de *Performances*\*
- Le champ **Nombre d'éléments présent** définit le nombre maximum d'éléments
affichés dans chaque boîte de sélection
- Le champ **Durée d'expiration de la session**, exprimé en minutes, indique
la durée maximale d'une session
- Le champ **Intervalle de rafraîchissement pour la page des statistiques**,
exprimé en secondes, indique l'intervalle de rafraîchissement pour les
objets de la page des statistiques
- Le champ **Intervalle de rafraîchissement pour la page de supervision**,
exprimé en secondes, indique l'intervalle de rafraîchissement pour les
objets de la page supervision
- Le champ **Trier par** indique le tri par défaut pour les pages de
supervision des hôtes et des services.
- Le champ **Choix de tri** indique l'ordre par défaut de tri pour les pages
de supervision des services et des hôtes.
- Le champ **Trier les problèmes par** permet de choisir comment trier les
différents incidents dans le menu **Supervision**
- La champ **Ordre de tri des problèmes** indique l'ordre d'affichage des
incidents par ordre de gravité croissant ou décroissant
- Le champ **Afficher les temps d'arrêts et les acquittements sur les
graphiques** permet d'afficher ou non ces éléments
- Le champ **Afficher les comentaires sur les graphiques** permet d'afficher
ou non ces éléments
- Le champ **Timezone par défaut de l'hôte** permet de définit un timezone par
défaut pour application du décalage horaire
- Le champ **Adresse mail de contact du support (de la plate-forme de
supervision)** indique l'adresse email de support **Centre des services du
client** pour la plate-forme Centreon. Cette adresse mail sera affichée en
bas de page sur le lien **Centre des services**
- **Send anonymous statistics** définit si oui on non la plateforme enverra des
des données anonymes pour le programme **Centreon Customer Experience
Improvement**

### Configuration du proxy

La configuraiton du proxy est nécessaire pour bénéficier de l'offre Centreon IT Edition.

![image](../../assets/administration/proxy_configuration.png)

Renseigner les différents champs:

- **URL du proxy web**
- **Port d'accès au proxy internet**
- **Proxy user**
- **Proxy password**

Pour valider la configuration, cliquez sur le bouton **Test Internet Connection**. Si le message
**Connection Successful** apparaît, votre configuration est valide, sinon modifiez vos paramètres.

## Autologin

Voir [Configurer une authentification par Autologin](../../connect/autologin.html).

## SSO

Voir [Configurer une authentification par SSO](../../connect/sso.html).

## OpenId Connect

Voir [Configurer une authentification par OpenId Connect](../../connect/openid.html).