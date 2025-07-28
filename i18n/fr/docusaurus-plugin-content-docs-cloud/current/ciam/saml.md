---
id: cloud-saml
title: Configurer une connexion SAML
---

Vous pouvez lier votre organisation dans le [CIAM](ciam.md) à un fournisseur d'identité, de sorte que vos utilisateurs n'aient pas besoin de se connecter chaque fois qu'ils veulent utiliser Centreon Cloud.

## Prérequis

Dans votre fournisseur d'identité, vous devez :

1. Créer une application.
2. Créer 3 rôles d'application, qui seront chacun reliés au [rôle correspondant dans le CIAM : **Viewer**, **Editor** et **Administrator**](../users/users.md#rôles-des-utilisateurs).
3. Assigner vos utilisateurs à l'application, puis assigner un rôle à chacun.

## Étape 1 : Accéder à la page de configuration

1. Connectez-vous au CIAM.
2. Sélectionnez votre organization dans la liste en haut à gauche de la page.
3. Allez à la page **Organization > Authentication**.

## Étape 2 : Configurer la connexion à votre fournisseur d'identité

Avant d'activer l'authentification SAML, vous devez remplir tous les paramètres nécessaires, puis [tester votre connexion. L'activation de SAML](#étape-3--tester-la-connexion-et-activer-saml) ne sera possible que si votre configuration est valide.

1. Renseignez le **Nom de domaine** de votre entreprise : seuls les utilisateurs dont l'adresse mail correspond à ce nom de domaine pourront se connecter à l'aide du fournisseur d'identité.

2. Copiez le contenu des deux champs suivants depuis la section **Identity provider** de la page du CIAM dans les champs correspondants de votre fournisseur d'identité :

   * **Identifier (Entity ID)**: entrer l'URL représentant le nom unique de l'entité SAML.
   * **Reply URL (Assertion consumer service URL)**: par exemple, `https:/<Centreon_IP_address>/centreon/api/latest/saml/acs`.

   Une fois ces champs renseignés dans le fournisseur d'identité, celui-ci vous donne les valeurs à copier ci-dessous (elles figurent toutes dans les métadonnées de l'application).
  
3. Remplissez les champs suivants :

   * **Sign in URL**: définir l'URL de connexion du fournisseur d'identité pour identifier les utilisateurs.
   * **Certificate**: copiez-collez le certificat x509 du fournisseur d'identité.
   * **User ID (email) attribute for Centreon user**: définit quelle variable renvoyée par le fournisseur d'identité doit être utilisée pour authentifier les utilisateurs. Par exemple, **email**.
   * **Sign out URL**: lorsque les utilisateurs se déconnectent de Centreon, ils seront redirigés vers cette URL. Cela signifie que vous pouvez également les déconnecter du fournisseur d'identité.

4. **Role mapping**:

   * **Role attribute path**: Récupérez cette valeur dans les métadonnées de votre application. Exemple : `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role`.
   * Créez 3 mappings, un pour chaque rôle dans le CIAM (**Viewer**, **Editor** et **Administrator**), qui correspondront à chaque rôle d'application créé dans votre fournisseur d'identité. Dans le champ **Valeur de l'attribut**, entrez la valeur exacte que vous avez définie pour chaque rôle dans votre fournisseur d'identité (la valeur, pas le nom d'affichage). Les utilisateurs qui se connectent à Centreon se verront automatiquement attribuer des droits, car un rôle leur sera attribué selon les règles que vous avez définies.

5. **Group mapping**:

   * **Group attribute path**: Récupérez cette valeur dans les métadonnées de votre application.
   * Grâce aux listes apparaissant en dessous, faites correspondre les valeurs d'attribut correctes avec les [groupes d'utilisateurs du CIAM](users/user_groups.md) désirés.

## Étape 3 : Tester la connexion et activer SAML

1. Dans la section **Activation**, cliquez sur **Test**. Une fenêtre s'ouvre, avec les résultats du test.
2. Une fois le test réussi, activez l'option **Enable Saml v2 Connection**. Vos utilisateurs peuvent maintenant se connecter via leur fournisseur d'identité.
