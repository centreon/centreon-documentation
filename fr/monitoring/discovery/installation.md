---
id: installation
title: Installation
---

## Procédure

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
