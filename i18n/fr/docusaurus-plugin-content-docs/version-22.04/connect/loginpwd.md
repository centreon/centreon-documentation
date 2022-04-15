---
id: loginpwd
title: Configurer une authentification locale
---

Depuis Centreon 22.04, une **politique de sécurité par mot de passe** a été mise en place.
Cette politique permet de renforcer la sécurité des mots de passe des comptes locaux en forcant l'utilisateur à saisir
un mot de passe complexe, de donner une durée de vie aux mots de passe et de bloquer les tentative d'attue de type force
brute.

## Configurer la politique de sécurité de mot de passe

Allez à la page **Administration > Authentication> Politique de sécurité de mot de passe** :

![image](../assets/administration/local-configuration.png)

### Politique de casse du mot de passe

Premièrement, définissez la **Minimum password length** et **Choisir les casses d'écriture**.

### Politique d'expiration du mot de passe

Puis, configurez la politique d'expiration :
- **Le mot de passe expire après** : Une fois le mot de passe expiré, l'utilisateur sera redirigé vers une
  [page dédiée](../getting-started/interface.md#réinitialisez-votre-mot-de-passe-après-expiration) pour mettre à jour son mot de passe.
- **Durée minimum entre chaque changement de mot de passe**
- activez ou non l'option **Les 3 derniers mot de passe peuvent être réutilisés**.
- **Excluded users** : Cette option permet d'exclure des comptes utilisateurs, notamment les comptes accédant aux API,
  de la politique d'expiration des mots de passe.

### Politique de blocage du mot de passe

Pour bloquer les attaques de type force brute, vous pouvez définir le **Nombre de tentatives avant que l'utilisateur soit bloqué**,
ainsi que la **Durée de blocage avant qu'une nouvelle connexion soit authorisée**.

## Autoriser les utilisateurs à accéder à Centreon

Pour autoriser un [utilisateur](../monitoring/basic-objects/contacts) à accéder à l'interface Centreon, allez à la page
**Configuration > Utilisateurs > Contacts/Utilisateurs** et cliquez sur l'utilisateur désiré.

Dans l'onglet **Authentification Centreon**, mettez le champ **Autoriser l'utilisateur à se connecter à l'interface web**
à **Oui**, puis renseignez les champs **Mot de passe** et **Confirmation du mot de passe**. Utilisez le bouton **Générer**
pour générer une chaîne de caractères aléatoires basée sur la **politique de sécurité par mot de passe**:

![image](../assets/administration/user_reach_centreon_frontend.png)

Les utilisateurs peuvent changer leur mot de passe en cliquant sur l'icône profil dans le coin supérieur droit de l'écran,
puis en cliquant sur **Éditer le profil**. De plus, le délai d'expiration du mot de passe est maintenant affiché :

![image](../assets/administration/password_expiration.png)