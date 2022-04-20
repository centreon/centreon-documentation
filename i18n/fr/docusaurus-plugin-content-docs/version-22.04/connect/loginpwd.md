---
id: loginpwd
title: Configurer une authentification locale
---

## Autoriser les utilisateurs à accéder à Centreon

1. Pour autoriser un [utilisateur](../monitoring/basic-objects/contacts) à accéder à l'interface Centreon, allez à la page
**Configuration > Utilisateurs > Contacts/Utilisateurs** et cliquez sur l'utilisateur désiré.

2. Dans l'onglet **Authentification Centreon**, mettez le champ **Autoriser l'utilisateur à se connecter à l'interface web**
à **Oui**.

3. Renseignez les champs **Mot de passe** et **Confirmation du mot de passe**: le mot de passe doit être conforme à la [politique de sécurité](#configurer-la-politique-de-sécurité-de-mot-de-passe) définie. Vous pouvez utiliser le bouton **Générer**
pour générer une chaîne de caractères aléatoires basée sur la **politique de sécurité par mot de passe**.

Les utilisateurs peuvent changer leur mot de passe en cliquant sur l'icône profil dans le coin supérieur droit de l'écran,
puis en cliquant sur **Éditer le profil**. De plus, dans cet écran le délai d'expiration du mot de passe est affiché :

![image](../assets/administration/password_expiration.png)

## Configurer la politique de sécurité de mot de passe

Depuis Centreon 22.04, une **politique de sécurité par mot de passe** a été mise en place.
Cette politique permet de renforcer la sécurité des mots de passe des comptes locaux en forcant
l'utilisateur à saisir un mot de passe complexe, de donner une durée de vie aux mots de passe
et de bloquer les tentatives d'attaque de type force brute.

Allez à la page **Administration > Authentification> Politique de sécurité de mot de passe** :

![image](../assets/administration/local-configuration.png)

### Politique de casse du mot de passe

- Définissez la longueur minimum du mot de passe.
- Définissez quels caractères le mot de passe doit contenir pour qu'il soit plus fort (minuscules/majuscules, chiffres, caractères spéciaux).

### Politique d'expiration du mot de passe

Configurez les conditions dans lesquelles les mots de passe expireront :

- **Le mot de passe expire après** : Une fois le mot de passe expiré, l'utilisateur sera redirigé vers une
  [page dédiée](../getting-started/interface.md#réinitialisez-votre-mot-de-passe-après-expiration) pour mettre à jour son mot de passe.
- **Durée minimum entre chaque changement de mot de passe** : Lorsqu'un mot de passe vient d'être changé, combien de temps doit s'écouler avant qu'il puisse être changé à nouveau.
- Activez ou non l'option **Les 3 derniers mot de passe peuvent être réutilisés**.
- **Excluded users** : Sélectionnez des comptes utilisateur pour lesquels la politique d'expiration de mot de passe ne s'appliquera pas (par exemple, le compte **admin**, ou les comptes accédant aux API). Les mots de passe de ces comptes n'expireront jamais.

### Politique de blocage du mot de passe

Pour bloquer les attaques de type force brute, vous pouvez définir le **Nombre de tentatives avant que l'utilisateur soit bloqué**,
ainsi que la **Durée de blocage avant qu'une nouvelle connexion soit autorisée**.
