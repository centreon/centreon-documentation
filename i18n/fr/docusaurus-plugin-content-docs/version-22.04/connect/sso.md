---
id: sso
title: Configurer une authentification par SSO
---

## Exemple d'architecture SSO

Voici un exemple d’architecture SSO avec LemonLDAP :

![image](../assets/connect/SSO_architecture.png)

1. L’utilisateur s’authentifie sur le portail SSO.

2. Le portail d’authentification vérifie les droits d’accès auprès du serveur LDAP.

3. Le serveur LDAP renvoie les données de l’utilisateur.

4. Le portail d’authentification crée une session pour stocker les données de l’utilisateur et renvoie un cookie SSO à l’utilisateur.

5. L’utilisateur est redirigé vers Centreon Web et intercepté par le handler SSO qui vérifie les droits d’accès de l’utilisateur.

6. Le handler envoie une requête à Centreon Web avec l’en-tête d’authentification (ex: HTTP_AUTH_USER).

7. Centreon Web vérifie les droits d’accès auprès du serveur LDAP grâce à l’en-tête de la requête.

8. Le serveur LDAP renvoie les informations de l’utilisateur.

9. Centreon Web renvoie les informations au handler.

10. Le handler SSO transfère les informations à l’utilisateur.

## Configurer une authentification par SSO

1. Le SSO est géré par Apache : modifiez la configuration Apache pour inclure les paramètres de configuration.

2. Remplissez les champs suivants à la page **Administration > Paramètres > Centreon web**, section **Propriétés d'authentification**.

    - La case **Activer l'authentification SSO** active l'authentification SSO.
    - Champ **Mode SSO** :
        - **Seulement SSO** : l'authentification doit avoir lieu uniquement par SSO (toute autre adresse que celle des clients de confiance sera bloquée)
        - **Mixte** : les utilisateurs autres que les clients de confiance pourront se connecter par identifiant/mot de passe. Vous devez quand même remplir le champ **Adresse des clients de confiance SSO**.
    - Le champ **Adresses des clients SSO de confiance** indique quelles sont les
    adresses IP/DNS qui seront autorisées à se connecter en SSO (par exemple l'adresse
    d'un reverse proxy). Séparez les adresses par une virgule.
    - Le champ **Adresses des clients de bloqués** indique quelles sont les
    adresses IP/DNS des clients qui seront refusés.
    - Le champ **Entête HTTP SSO** indique la variable de l'en-tête qui sera
    utilisée comme login/pseudo.
    - Entrez éventuellement dans le champ **Chaine de recherche (pattern) pour l'authentification (login)**
    une expression régulière à rechercher dans l'identifiant. Par exemple, entrez **/@.\*/** pour trouver la fin de l'adresse email de votre identifiant.
    - Entrez dans le champ **Chaine de remplacement (pattern) pour l'authentification (login)** la chaîne par laquelle remplacer celle définie dans le champ **Chaine de recherche (pattern) pour l'authentification (login)**. Laissez le champ vide pour supprimer cette chaîne.
 
> La fonctionnalité SSO doit être activée seulement dans un environnement dédié et
> sécurisé pour le SSO. Les accès directs des utilisateurs à Centreon Web doivent
> être désactivés.

## Exemple de configuration

Exemple de configuration d'Apache pour Kerberos (extrait du fichier **/etc/httpd/conf.d/10-centreon.conf**) :

```
 <Location /centreon>
        AuthType Kerberos
        AuthName "Kerberos Login"
        KrbServiceName HTTP/supervision.int.centreon.com
        RequestHeader set X-Remote-User %{REMOTE_USER}s
        KrbMethodNegotiate On
        KrbMethodK5Passwd Off
        KrbSaveCredentials Off
        KrbVerifyKDC On
        KrbAuthRealms SUPERVISION.INT
        Krb5KeyTab /opt/rh/httpd24/root/etc/httpd/conf/centreon.keytab
        <RequireAny>
                # Allow this IP without auth
                Require ip xx.xx.xx.xx xx.xx.xx.xx xx.xx.xx.xx
                # Everyone else needs to authenticate
                Require valid-user
        </RequireAny>
   </Location>
   ```