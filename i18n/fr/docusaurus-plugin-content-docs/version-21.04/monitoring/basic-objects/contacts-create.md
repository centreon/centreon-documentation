---
id: contacts-create
title: Créer des utilisateurs/contacts manuellement
---

Pour ajouter un contact, allez à la page **Configuration > Utilisateurs > Contacts/Utilisateurs**, puis cliquez sur **Add**.

![image](../../assets/configuration/06useradd.png)

Pour afficher la matrice de notification d’un contact, cliquez sur **View contact notifications** (à côté du menu
**Add**).

## Onglet Informations générales

* **Alias/Login** : le login que l'utilisateur entrera pour accéder à l’interface web.
* **Nom complet** : le nom et prénom de l’utilisateur.
* **Mail** et **Bipeur** : contiennent respectivement l’adresse mail et le numéro de téléphone de l’utilisateur,
sur lesquels seront envoyés les alertes (dans le cas d’une notification par SMS ou appel par exemple). Les alertes doivent être activées pour l'utilisateur (voir option **Activer les notifications** ci-dessous).
* **Modèle de contact utilisé** : permet de lier un [modèle de contact](contacts-templates) au contact. Le contact héritera des caractéristiques du modèle. Si pour un même champ, le contact et le modèle de contact ont des valeurs différentes, la valeur définie
au niveau du contact prend le pas sur celle définie au niveau du contact.
* **Lié avec le groupe de contacts** : associe le contact à un ou plusieurs groupes de contacts.
* **Activer les notifications** : permet d’activer l’envoi de [notifications](../../alerts-notifications/notif-configuration) à l’utilisateur.
* **Options de notification d'hôte/de service** : permet de définir les statuts des hôtes ou des services pour
 lesquels des notifications seront envoyées.
* **Période de notification d'hôte/de service** : permet de choisir la [période temporelle](timeperiods) pendant laquelle 
les notifications pourront être envoyées. En-dehors de ces périodes de temps, l'utilisateur ne recevra aucune notification. 
* **Commandes de notification d'hôte/de service** : permet de choisir la façon dont laquelle les notifications seront envoyées à l'utilisateur pour un hôte ou pour un service.

## Onglet Authentification Centreon
 
* **Autoriser l'utilisateur à se connecter à l'interface web** : permet d’autoriser l’utilisateur à accéder à l’interface web de Centreon.
* **Mot de passe** et **Confirmation du mot de passe** : contiennent le mot de passe de l'utilisateur.
* **Langue par défaut** permet de définir la langue de l’interface Centreon pour cet utilisateur.
* **Administrateur** définit si cet utilisateur est administrateur de la plateforme de supervision ou non. Un administrateur a tous les droits (lecture, écriture) et peut accéder à toutes les pages de l'interface.
* **Clé d'auto-connexion** : permet de définir une clé de connexion pour l’utilisateur. L’utilisateur n’aura plus
  besoin d’entrer son login et mot de passe mais utilisera directement cette clé pour se connecter. Syntaxe de connexion :

    ```url
    http://[IP_DU_SERVER_CENTRAL]/index.php?autologin=1&useralias=[login_user]&token=[value_autologin]
    ```

  > La possibilité de connexion automatique (auto login) doit être activée dans le menu : **Administration > Options**.

* Le champ **Source d'authentification** spécifie si les informations de connexion proviennent d’un annuaire LDAP ou
  d’informations stockées localement sur le serveur.
* Le champ **Groupes de liste d'accès** permet de définir un groupe d’accès pour un utilisateur, groupe utilisé pour les
  contrôles d’accès (ACL).

  > Un utilisateur Administrateur a tous les droits et les règles de contrôle d’accès ne s'appliquent pas à lui, même si vous l'incluez dans un groupe d’accès.

## Onglet Informations supplémentaires

* **Adresse** : permet de spécifier des informations de contacts supplémentaires (autre mail, autre numéro
  de téléphone...).
* **Statut** : permet d’activer ou de désactiver le contact. Un contact désactivé ne recevra plus aucune notification et ne pourra plus se connecter à l'interface de Centreon.
* **Commentaires**
