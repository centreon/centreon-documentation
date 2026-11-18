---
id: centreon-ui
title: Centreon UI
description: "Configurez les options générales de l'interface web Centreon : proxy, héritage des notifications, taille des pages, rafraîchissement, tri, graphiques, autologin, fuseau horaire et recherche."
---

La page **Centreon web** regroupe les options qui s'appliquent à toute l'interface web Centreon, pour tous les utilisateurs.

Pour les modifier, allez à la page **Administration > Paramètres > Centreon web**, modifiez les champs, puis cliquez sur **Sauvegarder**.

## Configurer un proxy {#configuration-du-proxy}

Configurez un proxy si votre serveur central accède à Internet par ce biais. Centreon a besoin d'un accès à Internet pour [vérifier votre licence](../licenses.md) et télécharger les connecteurs de supervision.

1. Dans la section **Paramètres du proxy internet**, renseignez les champs suivants :

   | Champ                              | Valeur                                                                          |
   | ---------------------------------- | ------------------------------------------------------------------------------- |
   | **URL du proxy web**               | URL du proxy, avec le protocole : `http://` ou `https://`.                      |
   | **Port d'accès au proxy internet** | Port du proxy.                                                                  |
   | **Utilisateur pour le proxy**      | Utilisateur du proxy. Uniquement si le proxy utilise une authentification basique. |
   | **Mot de passe pour le proxy**     | Mot de passe de cet utilisateur. Uniquement si le proxy utilise une authentification basique. |

2. Cliquez sur **Tester la connexion Internet**. Centreon tente de joindre ses serveurs (`api.imp.centreon.com`) via le proxy, avec l'URL et le port saisis : inutile de sauvegarder avant.

   - Si **Connexion réussie** s'affiche, le proxy fonctionne.
   - Sinon, le message indique l'erreur. Vérifiez l'URL et le port, puis relancez le test.

   > Le test n'utilise pas **Utilisateur pour le proxy** ni **Mot de passe pour le proxy**. Si votre proxy demande une authentification, vérifiez soigneusement ces deux champs.

3. Cliquez sur **Sauvegarder**.

## Référence des options

Les options sont présentées dans l'ordre de la page, section par section.

### Informations sur Centreon

| Option         | Rôle                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| **Répertoire** | Répertoire d'installation de Centreon. À la sauvegarde, Centreon vérifie qu'il peut y écrire. |

### Notification

| Option                                                         | Rôle                                                                                                                                                                                                                                                                                                                                    | Par défaut              |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Méthode de calcul pour les contacts et groupes de contacts** | Manière dont Centreon détermine les contacts et groupes de contacts à notifier pour un hôte ou un service qui les hérite de modèles : **Héritage vertical uniquement**, **Valeur la plus proche** ou **Héritage cumulatif**. Voir [Méthode de calcul pour les contacts et groupes de contacts](../../alerts-notifications/notif-configuration.md#méthode-de-calcul-pour-les-contacts-et-groupes-de-contacts). | **Héritage cumulatif** |

### Taille maximum de la page

| Option                                            | Rôle                                                                                                   | Par défaut |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| **Limite par page (par défaut)**                  | Nombre d'objets par page dans les listes du menu **Configuration**.                                    | 30         |
| **Limite par page pour les pages de supervision** | Nombre d'objets par page dans les consoles de supervision, de 10 à 100.                                | 30         |
| **Graphique de performance par page**             | Nombre de graphiques par page sur la page des graphiques de performance.                               | 18         |
| **Nombre d'éléments présent**                     | Nombre d'éléments chargés à la fois dans les listes déroulantes. Les suivants se chargent au défilement. | 60         |

### Propriétés des sessions

| Option                               | Rôle                                                                                                                                                 | Par défaut  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **Durée d'expiration de la session** | Durée de vie d'une session, en minutes. La valeur ne peut pas dépasser celle de `session.gc_maxlifetime` dans le fichier PHP `centreon.ini`. | 120 minutes |

### Propriétés du rafraîchissement

| Option                                                          | Rôle                                                                                  | Par défaut  |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| **Intervalle de rafraîchissement pour la page des statistiques** | Fréquence de rafraîchissement des compteurs du bandeau supérieur, en secondes. Minimum : 10. | 15 secondes |
| **Intervalle de rafraîchissement pour la page de supervision**  | Fréquence de rafraîchissement des consoles de supervision, en secondes. Minimum : 10. | 15 secondes |

### Paramètres d'affichage

| Option           | Rôle                                                                                                                                                                                       | Par défaut    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| **Trier par**    | Colonne de tri par défaut des listes d'hôtes et de services dans les consoles de supervision : **Hôtes**, **Durée**, **Services**, **Statut**, **Dernier contrôle**, **Sortie**, **Criticité** ou **Tentative**. | **Hôtes**     |
| **Ordre de tri** | Ordre de tri par défaut de ces listes : **Croissant** ou **Décroissant**.                                                                                                                  | **Croissant** |

### Propriétés d'affichage des problèmes

| Option                         | Rôle                                                                                                                                                                         | Par défaut    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **Trier les problèmes par**    | Colonne de tri par défaut des listes de problèmes dans les consoles de supervision : **Durée**, **Hôtes**, **Services**, **Statut**, **Dernier contrôle**, **Sortie** ou **Criticité**. | **Durée**     |
| **Ordre de tri des problèmes** | Ordre de tri par défaut des listes de problèmes : **Croissant** ou **Décroissant**.                                                                                          | **Croissant** |

### Paramètres des graphiques

| Option                                           | Rôle                                                                                                       | Par défaut |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ---------- |
| **Display downtime and acknowledgment on chart** | Affiche les plages de maintenance et les acquittements sur les graphiques de métriques. Les graphiques peuvent s'afficher plus lentement. Ce libellé n'est pas traduit dans l'interface. | Désactivé  |
| **Afficher les commentaires sur le graphique**   | Affiche les commentaires sur les graphiques de statut. Les graphiques peuvent s'afficher plus lentement.  | Désactivé  |

### Propriétés d'authentification

| Option                                             | Rôle                                                                                                                                                       | Par défaut |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Activer la connexion automatique**               | Permet aux utilisateurs de se connecter via une URL, sans saisir leurs identifiants. Voir [Configurer une authentification par Autologin](../../connect/autologin.md). | Désactivé  |
| **Afficher le raccourci de connexion automatique** | Ajoute **Copier le lien de connexion automatique** au menu du profil, pour obtenir l'URL d'autologin de la page affichée.                                  | Activé     |

### Fuseau horaire

| Option             | Rôle                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| **Fuseau horaire** | Fuseau horaire par défaut des hôtes et des contacts qui n'en ont pas.    |

### Centre de services

| Option                         | Rôle                                                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Mail du service de support** | Adresse email de votre support. Elle s'affiche en bas de l'interface, pour que les utilisateurs puissent le contacter. |

### Activer les statistiques

| Option                                    | Rôle                                                                                                                                                                                                         |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Envoyer des statistiques anonymisées** | Participation au programme d'amélioration de l'expérience client Centreon : la plateforme envoie des données d'usage anonymes à Centreon, uniquement pour améliorer le produit. Vous pouvez vous désinscrire à tout moment. |

### Performances de la page Statut des ressources

| Option                                        | Rôle                                                                                                                                                                                                                                                                                                                                 | Par défaut             |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| **Comportement de la recherche texte libre** | Champs parcourus par la recherche texte libre de la page **Statut des ressources**. **Recherche restreinte** : nom, alias et adresse de l'hôte, et nom du service. À choisir si vous avez beaucoup de ressources, pour garder une recherche rapide. **Recherche étendue** : parcourt aussi la sortie des contrôles. À réserver aux petits volumes de ressources, car elle ralentit la recherche. | **Recherche étendue** |
