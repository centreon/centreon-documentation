---
id: sso
title: Configurer une authentification par SSO
---

L'authentification Web SSO repose sur le serveur Web Apache. C'est Apache qui, selon sa configuration, se charge
d'authentifier l'utilisateur avant d'autoriser l'accès à l'interface web de Centreon.
De nombreux modules Apache permettent l'authentification via les protocoles OIDC, SAMLv2, TLS, Kerberos, etc.

> L'utilisateur doit être présent dans la configuration de Centreon pour accéder à l'interface.

## Configurer l'authentification Web SSO

L'authentification se paramètre à la page **Administration > Authentication > Web SSO Configuration** :

![image](../assets/administration/web-sso-configuration.png)

### Étape 1 : Activer l'authentification

Activez l'authentification :

- **Enable Web SSO authentication** permet d'activer ou de désactiver l'authentification Web SSO.
- **Mode d'authentification** : indique si l'authentification doit se faire uniquement par Web SSO ou en
  utilisant également l'authentification locale (**Mixte**). En mode mixte, des utilisateurs créés manuellement dans Centreon (et non identifiés par Web SSO) pourront également se connecter.

### Étape 2 : Configurer les informations d'accès au fournisseur d'identité

Configurez les informations du fournisseur d'identité:

- **Login header attribute name**: Quelle variable des en-têtes doit être utilisée pour récupérer le login de
  l'utilisateur. Par exemple `REMOTE_USER`.
- **Pattern match login (regex)**: une expression régulière à rechercher dans l'identifiant. Par exemple, entrez
  `/@.*/` pour trouver la fin de l'adresse email de votre identifiant.
- **Pattern replace login (regex)**: la chaîne par laquelle remplacer celle définie dans le champ
  **Pattern match login (regex)** pour l'authentification (login). Laissez le champ vide pour supprimer cette chaîne.

### Étape 3 : Configurer les adresses des clients

Si vous laissez ces deux champs vides, toutes les adresses IP seront autorisées à accéder à l'interface Centreon.

- **Adresses de clients de confiance** : Si vous entrez des adresses IP dans ce champ, seules ces adresses IP seront autorisées à accéder à l'interface Centreon. Toutes les autres adresses IP seront bloquées. Séparez les adressses IP par des virgules.
- **Adresses de clients sur liste noire** : Ces adresses IP seront bloquées. Toutes les autres adresses IP seront autorisées.

### Étape 4 : Configurer le serveur web Apache

Vous devez configurer le module Apache permettant l'authentification auprès du fournisseur d'identité.
Une fois cette configuration effectuée, vous devez modifier la configuration de Centreon pour Apache afin de
n'autoriser l'accès qu'aux utilisateurs authentifiés.

1. Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** et recherchez le bloc suivant :

  ```apache
      Header set X-Frame-Options: "sameorigin"
      Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
      ServerSignature Off
      TraceEnable Off

      Alias ${base_uri}/api ${install_dir}
      Alias ${base_uri} ${install_dir}/www/
  ```

2. Remplacez-le par :

  ```apache
      Header set X-Frame-Options: "sameorigin"
      Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
      ServerSignature Off
      TraceEnable Off

      RequestHeader set X-Forwarded-Proto "http" early

      Alias ${base_uri}/api ${install_dir}
      Alias ${base_uri} ${install_dir}/www/

      <Location ${base_uri}>
          AuthType openid-connect
          Require valid-user
      </Location>
  ```

  > Dans cet exemple, le module Apache utilisé était **mod_auth_openidc**. C'est pourquoi l'authentification est **openid-connect**.

3. Validez la configuration d'Apache à l'aide de la commande suivante :

  ```shell
  /opt/rh/httpd24/root/usr/sbin/httpd -t
  ```

4. Redémarrez ensuite le serveur Web Apache :

  ```shell
  systemctl restart httpd24-httpd
  ```

5. Pour conclure, reconstruisez le cache :

  ```shell
  sudo -u apache /usr/share/centreon/bin/console cache:clear
  ```