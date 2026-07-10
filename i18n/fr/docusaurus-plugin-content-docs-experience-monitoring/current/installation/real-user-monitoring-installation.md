---
id: real-user-monitoring-installation
title: Installer le Real User Monitoring
--- 

Le Real User Monitoring (RUM) nécessite l'insertion d'un tag JavaScript dans les pages de votre site.

## Procédure

1. Pour récupérer la balise RUM de votre application, rendez-vous dans **Paramètres > Intégrations** :

   ![image](../assets/installation/install-rum-1.png)

   La balise s'affiche à l'écran, accompagnée d'un bouton « Copier ».

   ![image](../assets/installation/install-rum-2.png)

2. Insérez la balise dans la section HEAD de votre site. Cette opération peut être effectuée manuellement par un développeur, ou bien la balise peut être ajoutée à un gestionnaire de balises tel que GTM en suivant la procédure ci-dessous.

3. Accédez à **Real User Monitoring**. Les données devraient s'afficher en quelques minutes.

### Utiliser Google Tag Manager (GTM) pour ajouter un tag Centreon RUM à vos pages

1. Créez une nouvelle balise : connectez-vous à votre compte GTM et sélectionnez le conteneur correspondant à votre site web. Cliquez sur **Ajouter une nouvelle balise**.

2. Configurez la balise :

   1. Sélectionnez **Balise HTML personnalisée** comme type de balise.
   2. Collez le script fourni dans le champ HTML.
   3. Assurez-vous que le type de script est correctement défini sur **JavaScript** si nécessaire. GTM s’en charge généralement automatiquement, mais il est préférable de vérifier.

3. Définissez les déclencheurs : choisissez à quel moment vous souhaitez que le script s’exécute. Vous pouvez l’appliquer à toutes les pages ou à des pages spécifiques, selon vos besoins. Les déclencheurs permettent de contrôler avec précision le moment où le script s’exécute.

4. Enregistrez et testez la balise : après avoir configuré la balise et ses déclencheurs, enregistrez-la et utilisez la fonctionnalité de prévisualisation de GTM pour vérifier si le script fonctionne comme prévu sur votre site. Cela vous permet de voir les modifications en temps réel sans affecter les visiteurs réels.

5. Publiez les modifications : une fois que vous avez vérifié que tout fonctionne correctement, n’oubliez pas de publier les modifications dans GTM afin que le script soit actif sur votre site en production.

## Considérations relatives au RGPD

Bien que Centreon Experience Monitoring utilise un cookie, **aucun consentement n'est requis en France**.

La CNIL (Commission nationale de l'informatique et des libertés) exempte certains cookies de l'obligation de consentement sous réserve des conditions suivantes :

- ils ont une finalité limitée, telle que la mesure des performances, la détection de problèmes de navigation, l'optimisation des performances techniques ou de l'ergonomie…
- ils ne produisent que des statistiques anonymes
- ils ne font l'objet d'aucun recoupement avec d'autres ensembles de données
- ils ne sont pas transmis à des tiers
- ils ne permettent pas de suivre la navigation d'un utilisateur sur d'autres sites web.

**Centreon Experience Monitoring répond à ces conditions.**

Vous pouvez consulter les recommandations de la CNIL sur [cette page](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience).

Dans d’autres pays, les exigences peuvent varier. Si le consentement est requis, chargez la balise RUM de manière conditionnelle via votre plateforme de gestion du consentement (CMP) : seuls les utilisateurs ayant donné leur consentement seront suivis.
