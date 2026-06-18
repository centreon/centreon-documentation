---
id: real-user-monitoring-installation
title: Installer le Real User Monitoring
--- 

## Considérations RGPD

Bien qu'Experience Monitoring utilise un cookie, **aucun consentement n’est nécessaire.**

La CNIL exempte de consentement les cookies sous certaines conditions:

- avoir une finalité limitée à la mesure des performances, la détection de problèmes de navigation, l’optimisation des performances techniques ou de son ergonomie...
- produire des statistiques anonymes uniquement
- ne pas recouper les données avec d’autres traitements
- ne pas transmettre les données à des tiers
- ne pas permettre le suivi global de la navigation de la personne sur d’autres sites web

**Experience Monitoring répond à ces conditions.**

Vous pouvez retrouver les recommandations de la CNIL [sur cette page](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience).

## Trouver le tag à insérer dans mon site

Le Real User Monitoring ou RUM, nécessite l’installation d’un tag javascript. Le tag est disponible dans l’application en suivant le chemin suivant:

Aller dans la configuration, puis dans *Intégrations* :

![image](../assets/installation/install-rum-1.png)

Vous trouverez ensuite le tag sur cet écran avec un bouton pour le copier facilement :

![image](../assets/installation/install-rum-2.png)

Ce tag est à insérer dans la section “HEAD” du site web. L’opération peut être effectuée manuellement par un développeur, ou alternativement **il peut être ajouté dans un tag manager comme GTM en suivant la procédure suivante** : 

### Insérer un tag RUM avec GTM

**1-**  **Créer une nouvelle balise** : 

Connectez-vous à votre compte GTM et sélectionnez le conteneur approprié pour votre site web. Cliquez ensuite sur "Ajouter une nouvelle balise".

**2- Configurer la balise** :

Sélectionnez "Balise HTML personnalisée" comme type de balise.
Collez le script que vous avez fourni dans le champ HTML.
Assurez-vous que le type de script est correctement défini comme "JavaScript" si nécessaire. GTM gère généralement cela automatiquement, mais il est bon de vérifier.

**3-** **Définir les déclencheurs** : 

Choisissez quand vous voulez que ce script soit exécuté. Vous pouvez le faire pour toutes les pages ou pour des pages spécifiques en fonction de vos besoins. Les déclencheurs permettent de contrôler précisément quand le script est exécuté.

**4- Sauvegarder et tester la balise** : Après avoir configuré la balise et ses déclencheurs, sauvegardez-la et utilisez la fonction de prévisualisation de GTM pour tester si le script fonctionne comme prévu sur votre site. Cela vous permet de voir les modifications en temps réel sans affecter les visiteurs réels de votre site.

**5- Publier les modifications** : Une fois que vous avez vérifié que tout fonctionne correctement, n'oubliez pas de publier les modifications dans GTM pour que le script soit actif sur votre site en live.
