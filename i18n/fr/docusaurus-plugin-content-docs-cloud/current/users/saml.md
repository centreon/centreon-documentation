---
id: cloud-saml
title: Configurer une connexion SAML
---

Une connexion SAML (Security Assertion Markup Language) vous permet de mettre en place une authentification unique (SSO) fluide et sécurisée pour votre organisation. Ainsi, vous pouvez lier votre organisation dans [Centreon Hub](centreon-hub.md) à un fournisseur d'identité.

## Prérequis

Dans votre fournisseur d'identité :

1. Créez une application.
2. Créez des rôles d'application, qui seront reliés à un [rôle dans Centreon Hub : **User**, **Editor** et **Administrator**](users.md#rôles-des-utilisateurs).
3. Assignez vos utilisateurs à l'application, puis assignez un rôle à chacun.

Si vous avez déjà des utilisateurs dans Centreon Hub, le rôle de l'utilisateur dans l'IdP remplacera son rôle actuel dans Centreon Hub, à l'exception du rôle **Administrator** dans Centreon Hub, qui ne change pas. Cela permet d'éviter de perdre par erreur l'accès à votre organisation.

## Étape 1 : Accéder à la page de configuration

> Vous devez avoir le rôle **Administrator** dans Centreon Hub pour pouvoir configurer SAML pour une organisation.

1. Connectez-vous à Centreon Hub.
2. Si vous appartenez à plusieurs organisations, sélectionnez l'organization désirée dans la liste en haut à gauche de la page.
3. Allez à la page **Organization > Authentication**.

## Étape 2 : Configurer la connexion à votre fournisseur d'identité

Avant d'activer l'authentification SAML, vous devez remplir tous les paramètres nécessaires, puis [tester votre connexion. L'activation de SAML](#étape-3--tester-la-connexion-et-activer-saml) ne sera possible que si votre configuration est valide.

1. Renseignez le **Nom de domaine** de votre entreprise : seuls les utilisateurs dont l'adresse mail correspond à ce nom de domaine pourront se connecter à l'aide du fournisseur d'identité.

2. Copiez le contenu des deux champs suivants depuis la section **Identity provider** de la page de Centreon Hub dans les champs correspondants de votre fournisseur d'identité :

   * **Identifier (Entity ID)**: entrer l'URL représentant le nom unique de l'entité SAML.
   * **Reply URL (Assertion consumer service URL)**: par exemple, `https:/<Centreon_IP_address>/centreon/api/latest/saml/acs`.

   Une fois ces champs renseignés dans le fournisseur d'identité, celui-ci vous donne les valeurs à copier ci-dessous (elles figurent toutes dans les métadonnées de l'application).
  
3. Remplissez les champs suivants :

   * **Sign in URL**: définir l'URL de connexion du fournisseur d'identité pour identifier les utilisateurs.
   * **Certificate**: copiez-collez le certificat x509 du fournisseur d'identité.
   * **User ID (email) attribute for Centreon user**: définit quelle variable renvoyée par le fournisseur d'identité doit être utilisée pour authentifier les utilisateurs. Il doit être précédé de l'URL de l'espace de noms, que vous trouverez dans la configuration de l'application de votre fournisseur d'identité. Par exemple, **http://schemas.xmlsoap.org/ws/2005/05/identity/claims/email**. (Obligatoire.)
   * **Sign out URL**: lorsque les utilisateurs se déconnectent de Centreon, ils seront redirigés vers cette URL. Cela signifie que vous pouvez également les déconnecter du fournisseur d'identité.

4. **Role mapping**:

   * **Role attribute path**: Récupérez cette valeur dans les métadonnées de votre application. Exemple : `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role`.
   * Créez les mappings désirés. Il existe [3 rôles dans Centreon Hub (**User**, **Editor** et **Administrator**)](users.md#rôles-des-utilisateurs) qui peuvent être mappés aux rôles que vous avez créés dans votre fournisseur d'identité (un rôle Centreon Hub peut être mappé à un, plusieurs ou aucun rôle de votre IdP). Dans le champ **Valeur de l'attribut**, entrez la valeur exacte que vous avez définie pour chaque rôle dans votre fournisseur d'identité (la valeur, pas le nom d'affichage). Les utilisateurs qui se connectent à Centreon se verront automatiquement attribuer des droits sur les menus et les actions, car un rôle leur sera attribué selon les règles que vous avez définies. Notez que si vous assignez plusieurs rôles à un même utilisateur, l'utilisateur aura les droits du rôle avec la plus haute priorité parmi ceux qui lui ont été attribués.

   > Il est possible de ne pas définir de mapping de rôles. Cette option est réservée à des fins de test. Dans ce cas, les utilisateurs devront être invités manuellement dans Centreon Hub avant de pouvoir rejoindre votre organisation à l'aide du SSO.

5. **Group mapping** (optionnel):

   * **Group attribute path**: Récupérez cette valeur dans les métadonnées de votre application.
   * Grâce aux listes apparaissant en dessous, faites correspondre les valeurs d'attribut correctes avec les [groupes d'utilisateurs de Centreon Hub](user_groups.md) désirés. Cela déterminera [quels droits les utilisateurs auront sur les ressources](../administration/resource_access.md).

## Étape 3 : Tester la connexion et activer SAML

Afin d'éviter toute erreur de configuration, il est obligatoire de tester la connexion avant de pouvoir l'activer. Vous serez redirigé vers votre IdP : entrez des identifiants valides pour effectuer le test. Pendant le test, le mapping des rôles est également vérifié, mais s'il échoue, la connexion pourra tout de même être activée.

1. Dans la section **Activation**, cliquez sur **Test**. Une fenêtre s'ouvre, avec les résultats du test.
2. Une fois le test réussi, activez l'option **Enable Saml v2 Connection**. Vos utilisateurs peuvent maintenant se connecter via leur fournisseur d'identité.
