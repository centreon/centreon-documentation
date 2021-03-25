---
id: contacts
title: Les contacts
---

## Définition

Les contacts au sein de Centreon sont utilisés afin de :

* Pouvoir se connecter à l’interface web de Centreon : chaque contact dispose de ses propres droits afin de se
  connecter à l’interface web.
* Etre alerté en cas de nécessité (notification).

Afin d’ajouter un contact, il suffit de se rendre dans le menu **Configuration > Users > Add**.

![image](../../assets/configuration/06useradd.png)

Pour afficher la matrice de notification d’un contact, cliquez sur **View contact notifications** (à côté du menu
**Add**).

## Informations générales

* Le champ **Alias/Login** définit le login afin d’accéder à l’interface web.
* Le champ **Full Name** contient le nom et prénom de l’utilisateur.
* Les champs **Email** et **Pager** contiennent respectivement l’adresse mail et le numéro de téléphone de l’utilisateur
  (dans le cas d’une notification par SMS ou appel par exemple).
* Le champ **Contact template used** permet de lier le contact à un modèle de contact.
* La liste **Linked to Contact Groups** associe le contact à un ou plusieurs groupes de contacts.
* Le champ **Enable Notifications** permet d’activer l’envoi de notifications pour l’utilisateur.
* Le champ **Host / Service Notification Options** permet de définir les statuts pour lesquels il y a envoi de
  notifications.
* Le champ **Host / Service Notification Period** permet de choisir la période temporelle pour laquelle il y a envoi de
  notification.
* Le champ **Host / Service Notification Command** permet de choisir la commande de notification pour un hôte ou pour
  un service.

## Authentification Centreon
 
* Le champ **Reach Centreon Front-end** permet d’autoriser l’utilisateur à accéder à l’interface web de Centreon.
* Les champs **Password** et **Confirm Password** contiennent le mot de passe utilisateur.
* Le champ **Default Language** permet de définir la langue de l’interface Centreon pour cet utilisateur.
* Le champ **Admin** définit si cet utilisateur est administrateur de la plateforme de supervision ou non.
* Le champ **Autologin key** permet de définir une clé de connexion pour l’utilisateur. L’utilisateur n’aura plus
  besoin d’entrer son login et mot de passe mais utilisera directement cette clé pour se connecter. Syntaxe de connexion :

```url
http://[IP_DU_SERVER_CENTRAL]/centreon/main.php?autologin=1&useralias=[login_user]&token=[value_autologin]
```

> La possibilité de connexion automatique (auto login) doit être activée dans le menu : **Administration > Options**.

* Le champ **Authentication Source** spécifie si les informations de connexion proviennent d’un annuaire LDAP ou
  d’informations stockées localement sur le serveur.
* Le champ **Access list groups** permet de définir un groupe d’accès pour un utilisateur, groupe utilisé pour les
  contrôles d’accès (ACL).

> Un utilisateur Administrateur ne peut souffrir de contrôle d’accès même lié dans un groupe d’accès.

## Informations supplémentaires

* Les champs **Address** permettent de spécifier des informations de contacts supplémentaires (autre mail, autre numéro
  de téléphone...).
* Les champs **Status** et **Comment** permettent d’activer ou de désactiver le contact et de commenter celui-ci.
