---
id: installation
title: Installation
---

## Installer le module d'autodécouverte

1. Pour installer le paquet, exécutez la commande suivante sur le serveur Central :

``` shell
yum install -y centreon-auto-discovery-server
```

2. Pour installer l'extension, connectez-vous à l’interface web de Centreon avec un compte ayant le
droit d’installer des modules et rendez-vous dans le menu **Administration >
Extensions > Manager**.

3. Assurez-vous que les modules **License Manager** et **Plugin Packs Manager** sont à jour
 avant de procéder à l'installation du module **Auto Discovery**.

4. Cliquez sur l’icône d’installation correspondant au module **Centreon Auto
Discovery** :

    ![image](../../assets/monitoring/discovery/install-before.png)

    Le module est maintenant installé :

    ![image](../../assets/monitoring/discovery/install-after.png)

5. Rendez-vous dans le menu **Configuration > Packs de plugins** et [installez les plugin packs
](../pluginpacks.html#installation-du-pack) correspondant aux fournisseurs de découverte désirés.

## Mettre en place un compte dédié à l'autodécouverte

Il est recommandé d'utiliser un compte technique dédié qui exécutera les tâches de découverte en arrière-plan (différent du compte que vous utilisez pour créer et lancer des tâches de découverte dans l'interface). 

1. À la page **Configuration > Utilisateurs > Contacts/Utilisateurs**, [créez un utilisateur](../basic-objects/contacts.html) dédié (par exemple, **autodisco**). Dans l'onglet **Authentification Centreon**, donnez-lui les droits suivants :
    - **Autoriser l'utilisateur à se connecter à l'interface web** : **Non**
    - **Administrateur** : **Oui**
    - **Accès à l'API de configuration** : **Oui**.

2. Dans le terminal du serveur central, éditez le fichier suivant :

    ```
    /etc/centreon-gorgone/config.d/31-centreon-api.yaml
    ```
    Remplacez les identifiants par défaut par ceux de votre compte dédié à l'autodécouverte.

    Exemple :

    ```
    gorgone:
        tpapi:
        - name: centreonv2
        base_url: "http://127.0.0.1/centreon/api/beta/"
        username: autodisco
        password: 27v3Ax5hffQRYV5x
        - name: clapi
        username: autodisco
        password: 27v3Ax5hffQRYV5x
    ```

3. Redémarrez le service **gorgoned** :

    ```
    systemctl restart gorgoned
    ```
