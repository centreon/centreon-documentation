---
id: postfix
title: Configurer l'envoi d'emails
---

Pour que votre Centreon puisse envoyer des emails de notification, un serveur smtp local doit être configuré. Si votre système d'exploitation est RHEL, CentOS ou Oracle Linux, Postfix est déjà installé. 

Cette page donne un exemple de configuration. Consultez la  [documentation officielle Postfix](http://www.postfix.org/BASIC_CONFIGURATION_README.html) pour plus d'informations.

Les commandes de notifications sont exécutées par le collecteur qui supervise la ressource : il est nécessaire de configurer le relais mail sur tous les collecteurs.

Nous vous recommandons d'utiliser un compte mail dédié à l'envoi des notifications.

## Étape 1 : Configurer Postfix

1. Dans le terminal de votre serveur, entrez la commande suivante :

    ```
    yum -y install mailx cyrus-sasl-plain
    ```

2. Redémarrez Postfix : 

    ```
    systemctl restart postfix
    ```

3. Configurez Postfix pour qu'il s'exécute au démarrage :

    ```
    systemctl enable postfix
    ```

3. Éditez le fichier suivant :

    ```
    vi /etc/postfix/main.cf
    ```

4. Ajoutez les informations suivantes :

    ```
    myhostname = hostname
    relayhost = [smtp.isp.com]:port
    smtp_use_tls = yes
    smtp_sasl_auth_enable = yes
    smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
    smtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt
    smtp_sasl_security_options = noanonymous
    smtp_sasl_tls_security_options = noanonymous
    ```
    
    - Le paramètre **myhostname** est le hostname du serveur Centreon.
    - Le paramètre **relayhost** correspond au serveur de messagerie du compte qui enverra les emails.

    Dans l'exemple suivant, Centreon utilisera un compte Gmail pour envoyer les notifications :

    ```
    myhostname = centreon-central
    relayhost = [smtp.gmail.com]:587
    smtp_use_tls = yes
    smtp_sasl_auth_enable = yes
    smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
    smtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt
    smtp_sasl_security_options = noanonymous
    smtp_sasl_tls_security_options = noanonymous
    ```

## Étape 2 : Configurer les identifiants du compte qui enverra les emails

1. Créez un fichier `/etc/postfix/sasl_passwd` :

    ```
    touch /etc/postfix/sasl_passwd
    ```

2. Ajoutez la ligne suivante, en remplaçant `identifiant:motdepasse` par les informations de connexion du compte qui enverra les emails de notification :

    ```
    [smtp.fai.com]:port identifiant:motdepasse
    ```

    Exemple:

    ```
    [smtp.gmail.com]:587 username@gmail.com:XXXXXXXX
    ```

3. Enregistrez le fichier.

3. Dans le terminal, entrez la commande suivante : 

    ```
    postmap /etc/postfix/sasl_passwd
    ```

4. Pour plus de sécurité, changez les permissions sur le fichier `sasl_passwd` :

    ```
    chown root:postfix /etc/postfix/sasl_passwd*
    chmod 640 /etc/postfix/sasl_passwd*
    ```

3. Rechargez Postfix pour prendre en compte les modifications:

    ```
    systemctl reload postfix
    ```

## Tester et diagnostiquer Postfix

- Pour envoyer un email de test, utilisez la commande suivante :

    ```
    echo "Test" | mail -s "Test" utilisateur@fai.com
    ```

    Remplacez `utilisateur@fai.com` par une véritable adresse email : le destinataire devrait recevoir l'email de test.

- Si le destinataire n'a pas reçu l'email, vérifiez le fichier de log suivant :

    ```
    tail -f /var/log/maillog
    ```

- Pour vérifier si votre service Postfix tourne, entrez:

    ```
    systemctl status postfix
    ```

    Le résultat devrait ressembler à ça :

    ![image](../assets/administration/postfix-status.png)

## Configuration spécifique à Gmail

Si vous souhaitez envoyer des emails en utilisant un compte Gmail, vous devrez activer l'option **Accès pour les applications moins sécurisées** sur celui-ci : voir la page [Autoriser les applications moins sécurisées à accéder à votre compte](https://support.google.com/accounts/answer/6010255).

