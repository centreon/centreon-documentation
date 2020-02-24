---
id: post-install
title: Première configuration
---

## Installation web

Pour obtenir l'adresse IP de votre serveur, exécutez la commande :

```Bash
ip addr
```

Connectez-vous à l'interface web via http://[ADRESSE_IP_DE_VOTRE_SERVEUR]/centreon.
L'assistant de configuration de Centreon s'affiche, cliquez sur **Next**.

![image](assets/installation/acentreonwelcome.png)

L'assistant de configuration de Centreon contrôle la disponibilité des modules, cliquez sur **Next**.

![image](assets/installation/acentreoncheckmodules.png)

Cliquez sur **Next**.

![image](assets/installation/amonitoringengine2.png)

Cliquez sur **Next**.

![image](assets/installation/abrokerinfo2.png)

Définissez les informations concernant l'utilisateur admin, cliquez sur **Next**.

![image](assets/installation/aadmininfo.png)

Par défaut, le serveur 'localhost' est défini, l'utilisateur root est défini à *root* et le mot de passe root est vide.
Si vous utilisez un serveur de base de données déporté, il convient de modifier ces deux informations.
Dans notre cas, nous avons uniquement besoin de définir un mot de passe pour l'utilisateur accédant aux bases de données
Centreon, à savoir 'centreon'.

![image](assets/installation/adbinfo.png)

> Si le message d'erreur suivant apparaît **Add innodb_file_per_table=1 in my.cnf file under the [mysqld] section and
> restart MySQL Server**, effectuez les opérations ci-dessous :
> 
> 1. Connectez-vous avec l'utilisateur *root* sur votre serveur
> 
> 2. Editez le fichier suivant **/etc/my.cnf**
> 
> 3. Ajoutez la ligne suivante au fichier :
>
>```Bash
>[mysqld]
>innodb_file_per_table=1
>```
>
>4. Redémarrez le service mysql :
>
>```Bash
>systemctl restart mysql
>```
>
>5. Cliquez sur **Refresh**

> Si vous utilisez une base de données déportée MySQL 8.x, vous pouvez avoir l'erreur suivante : *erreur*.
> Référez-vous à l'aide suivante @TODO@(:ref:`procedure`) pour corriger le problème.

L'assistant de configuration configure les bases de données.

Cliquez sur **Next**.

![image](assets/installation/adbconf.png)

L'assistant de configuration propose ensuite d'installer les modules présents sur le serveur Centreon.

Cliquez sur **Install**.

![image](assets/installation/module_installationa.png)

Une fois les modules installés, cliquez sur **Next**.

![image](assets/installation/module_installationb.png)

À cette étape une publicité permet de connaître les dernières nouveautés de Centreon. Si votre plate-forme est connectée
à Internet vous disposez des dernières informations, sinon l’information présente dans cette version sera proposée.

![image](assets/installation/aendinstall.png)

L’installation est terminée, cliquez sur **Finish**.

Vous pouvez maintenant vous connecter.

![image](assets/installation/aconnection.png)

## Initialisation de la supervision

To start the monitoring engine:

Pour démarrer l'ordonnanceur de supervision :

1. Sur l'interface web, rendez-vous dans le menu **Configuration > Collecteurs**
2. Laissez les options par défaut, et cliquez sur **Exporter la configuration**
3. Sélectionnez le collecteur **Central** dans la liste de sélection
4. Décochez **Générer les fichiers de configuration** et **Lancer le débogage du moteur de supervision (-v)**
5. Cochez **Déplacer les fichiers générés** ainsi que **Redémarrer l'ordonnanceur** en sélectionnant l'option **Redémarrer**
6. Cliquez à nouveau sur **Exporter**
7. Connectez-vous avec l'utilisateur 'root' sur votre serveur
8. Démarrez le composant Centreon Broker :
```Bash
systemctl start cbd
```

9. Démarrez Centreon Engine :
```Bash
systemctl start centengine
```

10.  Démarrez centcore :
```Bash
systemctl start centcore
```

11. Démarrez centreontrapd :
```Bash
systemctl start centreontrapd
```

La supervision est maintenant opérationnelle.

Activer le lancement automatique de services au démarrage.

Lancer les commandes suivantes sur le serveur Central :
```Bash
systemctl enable centcore
systemctl enable centreontrapd
systemctl enable cbd
systemctl enable centengine
systemctl enable centreon
```

### Installer les extensions disponibles

Rendez-vous au menu **Administration \> Extensions \> Manager** et clicquez sur le bouton **Install all** :

![image](assets/installation/install_imp_2.png)

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../tutorials/tutorials) pour mettre en place votre première supervision.
