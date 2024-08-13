---
id: ciam
title: Utiliser le site Centreon CIAM
---

## Qu'est-ce que Centreon CIAM?

Centreon CIAM (Customer Identity and Access Management) est un module qui :

- vous permet d'accéder à toutes vos applications Centreon
- permet à votre administrateur de gérer vos organisations, de gérer tous les [comptes utilisateurs](../users/users.md) et groupes d'utilisateurs Centreon pour une organisation, et de gérer la façon dont les utilisateurs vont se connecter à Centreon.

Une organisation correspond à un périmètre d'équipements à superviser. Par exemple, vous pourrez avoir une organisation Europe et une organisation Asie. Les différentes organisations sont indépendantes les unes des autres. Selon vos besoins, vous aurez une seule organisation ou bien plusieurs. Chaque organisation a ses propres applications, dont sa propre plateforme Centreon Cloud.

## Je suis un administrateur

### Créer votre compte

1. Allez à l'URL fournie par le support Centreon, puis cliquez sur **Sign up**.
2. Entrez votre adresse email et votre mot de passe, puis cliquez sur **Continue**. L'écran vous invite à consulter vos emails.
3. Dans l'email que vous avez reçu, cliquez sur **Confirm my account**.
4. Cliquez sur **Back to Centreon Customer identity and Access management Web**. Vous pouvez maintenant créer une organisation.

### Créer une organisation

1. Connectez-vous à Centreon CIAM:
   - Lors de votre première connexion à Centreon CIAM (en utilisant l'URL fournie par le support Centreon), l'écran par défaut vous proposera un bouton **Create your organization**.
   - Si vous avez déjà créé une organisation et vous souhaitez en créer un nouvelle, dans la bannière en haut de la page, cliquez sur **Create an organization** dans la liste **Select organization**.
2. Renseignez les champs suivants :
   - **Domain name**: ce nom déterminera l'URL que vous utiliserez pour accédez à toutes vos applications pour cette organisation (par exemple, votre plateforme Centreon Cloud). Le nom peut contenir des caractères alphanumériques (mnuscules), des tirets et des underscores. Il doit contenir au moins 3 caractères. Exemple : si vous entrez **my-organization**, l'URL de votre plateforme Centreon Cloud sera **my-organization.centreon.cloud**.
   - **Display name**. Il s'agit du nom de votre organization dans l'interface CIAM.
3. Cliquez sur **Create**. La nouvelle organisation apparaît dans la liste **Select organization** dans la bannière en haut de la page.
4. Envoyez votre nom de domaine au support Centreon. L'équipe se chargera de créer une licence pour votre organisation et de générer votre plateforme Centreon Cloud. Vous pourrez ensuite inviter des utilisateurs dans votre organisation.

### Inviter des utilisateurs dans l'organisation

1. À la page **Users**, cliquez sur **Invite user**.
2. Renseignez les emails des utilisateurs que vous souhaitez inviter, et sélectionnez le rôle à leur attribuer dans le CIAM et dans Centreon Cloud (voir [Rôles des utilisateurs](../users##rôles-des-utilisateurs)).
3. Cliquez sur **Invite**. Les personnes recevront un email intitulé **You've been invited to join `<organization>`'s Centreon account**. Votre adresse email sera visible dans cet email.

## Je suis un utilisateur Centreon

Votre administrateur vous a invité dans Centreon CIAM : vous avez reçu un email vous invitant sur la plateforme.

1. Dans l'email, cliquez sur **Accept invitation**.
2. Entrez votre mot de passe, puis cliquez sur **Continue**. Le site Centreon CIAM s'ouvre.
3. Dans le coin supérieur droit de l'écran, cliquez sur l'icône de profil, puis cliquez sur **Edit profile**. Vous pouvez maintenant renseigner vos informations personnelles.
