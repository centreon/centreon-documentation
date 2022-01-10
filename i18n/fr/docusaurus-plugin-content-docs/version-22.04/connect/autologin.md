---
id: autologin
title: Configurer une authentification par Autologin
---

La fonctionnalité d'Autologin vous permet de donner accès à la plateforme via une simple URL, sans login ni mot de passe. Utilisez l'Autologin par exemple pour afficher des custom views sur un grand écran dans votre espace de travail. 

## Étape 1 : Activer l'autologin

1. Allez à la page **Administration > Paramètres > Centreon web**.

2. Dans la section **Propriétés d'authentification**, cochez les cases suivantes :

    - **Activer la connexion automatique**
    - **Afficher le raccourci de connexion automatique**. 

3. Cliquez sur **Sauvegarder**.

## Étape 2 : Créer un utilisateur autologin

1. [Créez un utilisateur](../monitoring/basic-objects/contacts-create) **autologin**, et [donnez-lui des droits d'accès](../administration/access-control-lists) uniquement sur les pages qui devront être affichées.

2. Éditez l'utilisateur. Allez à l'onglet **Authentification** :
    - activez l'option **Autoriser l'utilisateur à se connecter à l'interface web**.
    - à droite du champ **Clé d'auto-connexion**, cliquez sur **Générer**. Notez la clé ainsi générée.

3. Cliquez sur **Sauvegarder**.

## Étape 3 : Récupérer l'URL de connexion

1. Connectez-vous à Centreon en tant que l'utilisateur **autologin**.

2. Allez à la page que vous voudrez afficher, puis cliquez sur l'icône profil en haut à droite de l'écran.

3. Cliquez sur **Copier le lien de connexion automatique** pour obtenir l'URL à utiliser. Les URLs d'autologin ont la structure suivante :

    ```
    http://[IP_CENTREON]/centreon/main.php?p=[numéro_page]&autologin=1&useralias=[login_utilisateur]&token=[clé_autologin]
    ```

    Exemple : Le lien suivant permet à l'utilisateur **admin** de se connecter à la page **Accueil > Vues personnalisées** : 
    ```
    http://10.29.11.2/centreon/main.php?p=103&autologin=1&useralias=admin&token=3sWymDJk
    ```

    Pour afficher Centreon en plein écran, sans les menus ni l'en-tête, ajoutez **&min=1** à la fin de l'URL.
 	 