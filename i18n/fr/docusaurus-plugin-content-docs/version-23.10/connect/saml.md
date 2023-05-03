---
id: saml
title: Configurer une authentification par SAML
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Configurer l'authentification SAML

L'authentification se paramètre à la page **Administration > Authentification > Configuration SAML**.

### Étape 1 : Activer l'authentification

Activez l'authentification SAML :

- **Activer l'authentification SAMLv2** : active/désactive l'authentification SAML.
- **Mode d'authentification**: indique si l'authentification doit se faire uniquement par SAML ou en utilisant
  également l'authentification locale (**Mixte**). En mode mixte, des utilisateurs créés manuellement dans Centreon
  (et non identifiés par SAML) pourront également se connecter.

> Lors du paramétrage, il est recommandé d'activer le mode "mixte". Cela vous permettra de garder l'accès au compte local
> `admin` en cas de configuration erronée.

### Étape 2 : Configurer les informations d'accès au fournisseur d'identité

Renseignez les informations du fournisseur d'identité :

- **URL de connexion distante**: définit l'URL de connexion du fournisseur d'identité pour identifier les utilisateurs
  (obligatoire).
- **URL de l'émetteur (Entity ID)**: définit l'URL représentant le nom unique d'une entité SAML (obligatoire).
- **Copier/coller le certificat x509**: ajoutez ici le certificat x509 du fournisseur d'identité (obligatoire).
- **Attribut de l'identifiant utilisateur (login) pour l'utilisateur Centreon**: définit quelle variable renvoyée par
  le fournisseur d'identité doit être utilisée pour authentifier les utilisateurs. Par exemple, **email**. (obligatoire).
- Se déconnecter de:
  * **Interface Centreon uniquement**: les utilisateurs seront uniquement déconnectés de Centreon.
  * **Fournisseur d'identité et interface Centreon**:  les utilisateurs seront déconnectés à la fois de Centreon et du fournisseur
    d'identité.
    > Si vous sélectionnez **Fournisseur d'identité et interface Centreon**, vous devez définir une **URL de déconnexion**.

### Étape 3 : Configurer les conditions d'authentification

Vous pouvez définir des conditions selon lesquelles les utilisateurs seront autorisés à se connecter ou non, en
fonction des données reçues par un endpoint particulier:
  - Activer **Activer les conditions sur le fournisseur d'identité**.
  - Définir quel attribut sera utilisé pour valider les conditions.
  - **Définir les valeurs des conditions autorisées**: définir quelles seront les valeurs autorisées renvoyées. Si vous
    entrez plusieurs valeurs, toutes devront être remplies pour que la condition soit validée. Tous les utilisateurs qui
    tentent de se connecter avec une autre valeur ne pourront pas se connecter.

### Étape 4 : Gérer la création d'utilisateurs

<Tabs groupId="sync">
<TabItem value="Users automatic management" label="Gestion automatique">

Si vous activez **Activer l'importation automatique**, les utilisateurs qui se connectent pour la première fois à Centreon
seront créés dans la configuration de Centreon. (L'activation de l'option n'importe pas automatiquement tous les utilisateur
 de votre infrastructure.)

- **Activer l'importation automatique** : active/désactive l'import automatique des utilisateurs. Si l'import automatique desutilisateurs
  est désactivé, vous devrez [créer chaque utilisateur manuellement](../monitoring/basic-objects/contacts-create.md) avant que celui-ci ne se connecte.
- **Modèle de contact** : sélectionnez un [modèle de contact](../monitoring/basic-objects/contacts-templates.md) qui sera appliqué aux
  nouveaux utilisateurs importés.
  Cela permet notamment de gérer le paramétrage par défaut des [notifications](../alerts-notifications/notif-configuration.md).
- **Attribut de mail** : définit quelle variable sera utilisée pour récupérer l'adresse email de l'utilisateur.
- **Attribut de nom complet** : définit quelle variable sera utilisée pour récupérer le nom complet de l'utilisateur.

</TabItem>
<TabItem value="Users manual management" label="Gestion manuelle">

À la page **Configuration > Utilisateurs > Contacts/Utilisateurs**, [créez les utilisateurs](../monitoring/basic-objects/contacts-create.md)
qui se connecteront à Centreon avec SAML.

</TabItem>
</Tabs>

### Étape 5 : Gérer les autorisations

<Tabs groupId="sync">
<TabItem value="Role automatic management" label="Gestion automatique">

Si vous activez l'option **Activer la gestion automatique**, les utilisateurs qui se connectent à Centreon se verront
automatiquement accorder des [droits](../administration/access-control-lists.md), car ils seront liés à des
[groupes d'accès](../administration/access-control-lists.md#créer-un-groupe-daccès) selon les règles que vous avez définies.
  
- Définissez quel attribut et quel point d'entrée seront utilisés pour récupérer des valeurs afin d'appliquer des relations
  avec des groupes d'accès.
- **Appliquer uniquement le premier rôle**: si plusieurs rôles sont trouvés pour un utilisateur spécifique dans les informations du fournisseur
  d'identité, alors seul le premier rôle sera appliqué. Si l'option est désactivée, tous les rôles seront appliqués.
- Faites correspondre un attribut extrait du fournisseur d'identité avec le groupe d'accès auquel vous souhaitez que l'utilisateur
  appartienne.

> À chaque connexion de l'utilisateur, la gestion des autorisations est réinitialisée pour prendre en compte toute nouvelle
> information en provenance du fournisseur d'identité.

</TabItem>
<TabItem value="Role manual management" label="Gestion manuelle">

Si vous désactivez l'option **Activer la gestion automatique**, vous devrez [attribuer des droits](../administration/access-control-lists.md)
à vos utilisateurs manuellement en liant ceux-ci à des [groupes d'accès](../administration/access-control-lists.md#créer-un-groupe-daccès).

</TabItem>
</Tabs>

### Étape 6 : Gérer les groupes de contacts

<Tabs groupId="sync">
<TabItem value="Groups automatic management" label="Gestion automatique">

Si vous activez l'option **Activer la gestion automatique**, les utilisateurs qui se connectent à Centreon seront rattachés
aux [groupes de contacts](../monitoring/basic-objects/contacts-groups.md#créer-un-groupe-de-contacts) que vous avez définis.

- Définissez quel attribut et quel point d'entrée seront utilisés pour récupérer des valeurs afin de créer des relations avec
  des groupes d'accès.
- Faites correspondre les attributs extraits du fournisseur d'identité avec les groupes de contacts auxquels vous souhaitez
  que l'utilisateur appartienne.

> À chaque connexion de l'utilisateur, la gestion des groupes est réinitialisée pour prendre en compte toute nouvelle
> information en provenance du fournisseur d'identité.

</TabItem>
<TabItem value="Groups manual management" label="Gestion manuelle">

Si vous désactivez l'otion **Activer la gestion automatique**, vous devrez gérer manuellement les relations entre contacts et
[groupes de contacts](../monitoring/basic-objects/contacts-groups.md#créer-un-groupe-de-contacts).

</TabItem>
</Tabs>

### Étape 7 : Configurer le fournisseur d'identité

Configurez votre fournisseur d'identité afin que l'application Centreon puisse utiliser le protocole SAML pour authentifier
vos utilisateurs. Voici un exemple de champs que vous devrez peut-être remplir :

| Option fournisseur d'identité        | Valeur Centreon                                                |
|--------------------------------------|----------------------------------------------------------------|
| Client ID                            | https://<Centreon_IP_address>                                  |
| Assertion Consumer Service (ACS) URL | https://<Centreon_IP_address>/centreon/api/latest/saml/acs     |
| Redirect Binding URLs for SLO        | https://<Centreon_IP_address>/centreon/api/latest/saml/sls     |
