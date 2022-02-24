---
id: first-supervision
title: Superviser votre premier hôte
---

## Principe de base de la supervision

Avant de commencer à superviser, voyons ensemble quelques notions principales :

* Un **hôte** (ou **host** en anglais) est tout équipement qui possède une adresse IP et que l'on souhaite superviser :
  un serveur physique, une machine virtuelle, une sonde de température, une caméra IP, une imprimante ou un espace de
  stockage, par exemple.
* Un **service** est un point de contrôle, ou indicateur, à superviser sur un hôte. Cela peut être le taux d'utilisation
  du CPU, la température, la détection de mouvement, le taux d'utilisation de la bande passante, les E/S disque, etc.
* Afin de mesurer chaque indicateur, on utilise des **sondes** de supervision (**plugin** en anglais) qui sont exécutées
  périodiquement par un moteur de collecte appelé **Centreon Engine**.
* Pour être exécutée, une sonde a besoin d'un ensemble d'arguments qui définissent par exemple à quel hôte se connecter
  ou via quel protocole. La sonde et ses arguments associés forment une **commande** (**command** en anglais).
  
Ainsi, superviser un hôte avec Centreon consiste à configurer l'ensemble des commandes nécessaires à la mesure des
indicateurs désirés, puis à déployer cette configuration sur le moteur de collecte afin que ces commandes soient
exécutées périodiquement.

Pour simplifier la configuration, on utilise des modèles de supervision :

* Un **modèle d'hôte** (**host template** en anglais) définit la configuration des indicateurs pour un type d'équipement donné.
* Il s'appuie sur des **modèles de service** (**service templates**) qui définissent la configuration des commandes
  nécessaires à la mesure de ces indicateurs.
* Centreon fournit des **Plugins Packs** téléchargeables à installer sur sa plateforme de supervision : chaque Plugin
  Pack regroupe des modèles d'hôtes et de services pour configurer en quelques clics la supervision d'un équipement
  particulier.

Ce guide de démarrage rapide propose d'installer les modèles de supervision fournis gratuitement avec la solution
Centreon puis de les mettre en oeuvre pour superviser vos premiers équipements. 

![image](../assets/getting-started/host_service_command.png)

> Pour aller plus loin avec les modèles de configuration, lisez le chapitre [modèles](../monitoring/templates).

> Si vous disposez d'une licence adéquate, vous pouvez utiliser notre [module d'autodécouverte](../monitoring/discovery/introduction) afin de trouver et de configurer vos hôtes facilement. Voir aussi notre tutoriel [sur la détection d'instances AWS EC2](autodisco-aws).

### Installation des modèles de supervision de base

Rendez-vous dans le menu **Configuration > Packs de plugins**.

> Avant toute chose, appliquez la procédure de [configuration du proxy](../administration/parameters/centreon-ui#configuration-du-proxy)
> pour configurer et vérifier la connexion de votre serveur Centreon à internet.

Commencez par installer le Plugin Pack **Base Pack** (s'il n'est pas déjà installé) en déplaçant votre curseur sur ce dernier et en cliquant sur
l'icône **+** (il s'agit d'un pré-requis à l'installation de tout autre Plugin Pack) :

![image](../assets/getting-started/pp_base_generic_1.png)

Vous pouvez aussi cliquer sur le Plugin Pack afin d'en connaître son contenu avant de l'installer :

![image](../assets/getting-started/pp_base_generic_2.png)

Installez ensuite les Plugin Packs inclus gratuitement avec la solution, par exemple **Linux SNMP** et **Windows SNMP** :

![image](../assets/getting-started/pp_install_basic.gif)

Vous disposez maintenant des modèles de base pour configurer votre supervision !

## Superviser votre premier hôte

### Superviser un serveur Linux en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **Linux SNMP** :

![image](../assets/getting-started/quick_start_linux_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_linux_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis sélectionnez le modèle **OS-Linux-SNMP-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_linux_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_linux_3.png)

D'autres indicateurs peuvent être supervisés. Cliquez sur le bouton **Ajouter** pour ajouter par exemple la supervision de
la bande passante d'une interface réseau :

![image](../assets/getting-started/quick_start_linux_4a.png)

Dans le champ **Description**, saisissez le nom du service à ajouter puis sélectionnez l'hôte auquel lier cet
indicateur. Dans le champ **Modèle** sélectionner le modèle **OS-Linux-Traffic-Generic-Name-SNMP-custom**.

Une liste de macros en correspondance avec le modèle va alors apparaître :

![image](../assets/getting-started/quick_start_linux_4b.png)

Saisissez le nom de votre interface pour la macro **INTERFACENAME** et cliquez sur le bouton **Sauvegarder** pour ajouter cet
indicateur à la configuration.

Faites de même pour ajouter la supervision des erreurs de paquets :

![image](../assets/getting-started/quick_start_linux_5.png)

Ou la supervision d'une partition système :

![image](../assets/getting-started/quick_start_linux_6.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_linux_7.png)

#### Pour aller plus loin

Le Plugin Pack **Linux SNMP** apporte de nombreux modèles de supervision. Lors de la création d'un service, il est
possible de rechercher les modèles disponibles dans la liste de sélection :

![image](../assets/getting-started/quick_start_linux_8.png)

Il est également possible d'accéder au menu **Configuration > Services > Templates** pour en connaître la liste :

![image](../assets/getting-started/quick_start_linux_9.png)

> Avec **Centreon IT Edition**, vous pouvez ajouter très rapidement et très simplement la surveillance de vos cartes
> réseau, partition, processus et services en utilisant la fonctionnalité de **[Découverte des services](../monitoring/discovery/services-discovery)**.

Pour connaître manuellement le nom des partitions disponibles, vous pouvez exécuter le plugin Centreon en ligne de commande tel quel&nbsp;:

```Shell
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin \
    --hostname=10.40.1.169 --snmp-community=public --snmp-version=2c --mode=list-storages
```
Voici le résultat :
```Shell
List storage:
Skipping storage 'Physical memory': no type or no matching filter type
Skipping storage 'Swap space': no type or no matching filter type
Skipping storage 'Virtual memory': no type or no matching filter type
'/' [size = 21003583488B] [id = 31]
'/dev/shm' [size = 1986875392B] [id = 36]
'/run' [size = 1986875392B] [id = 38]
'/sys/fs/cgroup' [size = 1986875392B] [id = 39]
'/boot' [size = 1015308288B] [id = 57]
'/var/cache/centreon/backup' [size = 5150212096B] [id = 58]
'/var/lib/centreon-broker' [size = 5150212096B] [id = 59]
Skipping storage 'Memory buffers': no type or no matching filter type
'/var/lib/centreon' [size = 7264002048B] [id = 60]
'/var/log' [size = 10434662400B] [id = 61]
'/var/lib/mysql' [size = 16776032256B] [id = 62]
'/run/user/0' [size = 397377536B] [id = 63]
Skipping storage 'Cached memory': no type or no matching filter type
Skipping storage 'Shared memory': no type or no matching filter type
```

Faites de même pour connaître la liste des interfaces réseau :

```Shell
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin \
    --hostname=10.40.1.169 --snmp-community=public --snmp-version=2c --mode=list-interfaces
```
Voici le résultat : 
```Shell
List interfaces:
'lo' [speed = 10, status = up, id = 1]
'enp0s3' [speed = 1000, status = up, id = 2]
```

### Superviser un serveur Windows en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **Windows SNMP** :

![image](../assets/getting-started/quick_start_windows_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_windows_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis
sélectionnez le modèle **OS-Windows-SNMP-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_windows_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_windows_3.png)

D'autres indicateurs peuvent être supervisés. Cliquez sur le bouton **Ajouter** pour ajouter par exemple la supervision
de la partition C :

![image](../assets/getting-started/quick_start_windows_4a.png)

Dans le champ **Description**, saisissez le nom du service à ajouter, puis sélectionnez l'hôte auquel lier cet
indicateur. Dans le champ **Modèle** sélectionnez le modèle **OS-Windows-Disk-Generic-Name-SNMP-custom**.

Une liste de macros en correspondance avec le modèle va alors apparaître :

![image](../assets/getting-started/quick_start_windows_4b.png)

Saisissez le nom de votre partition pour la macro **DISKNAME**, ajoutez la valeur **--regexp** pour la macro
**EXTRAOPTIONS** afin de ne pas donner le nom complet de la partition et cliquez sur le bouton **Sauvegarder** pour ajouter
cet indicateur à la configuration.

Faites de même pour ajouter la supervision de la bande passante des interfaces réseau :

![image](../assets/getting-started/quick_start_windows_5.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_windows_6.png)

#### Pour aller plus loin

Le Plugin Pack **Windows SNMP** apporte de nombreux modèles de supervision. Lors de la création d'un service, il est
possible de rechercher les modèles disponibles dans la liste de sélection :

![image](../assets/getting-started/quick_start_windows_7.png)

Il est également possible d'accéder au menu **Configuration > Services > Templates** pour en connaître la liste :

![image](../assets/getting-started/quick_start_windows_8.png)

> Avec **Centreon IT Edition**, vous pouvez ajouter très rapidement et très simplement la surveillance de vos cartes
> réseau, partition, processus et services en utilisant la fonctionnalité de **[Découverte des services](../monitoring/discovery/services-discovery)**.

Pour connaître manuellement le nom des partitions disponibles, vous pouvez exécuter le plugin Centreon en ligne de commande tel quel&nbsp;:

```Shell
/usr/lib/centreon/plugins/centreon_windows_snmp.pl --plugin=os::windows::snmp::plugin \
    --hostname=10.40.1.169 --snmp-version='2c' --snmp-community='public' --mode=list-storages
```
Voici le résultat : 
```Shell
List storage:
'C:\ Label:  Serial Number 2cb607df' [size = 53317988352B] [id = 1]
Skipping storage 'Virtual Memory': no type or no matching filter type
Skipping storage 'Physical Memory': no type or no matching filter type
```

Faites de même pour connaître la liste des interfaces réseau :

```Shell
/usr/lib/centreon/plugins/centreon_windows_snmp.pl --plugin=os::windows::snmp::plugin \
    --hostname=10.40.1.169 --snmp-version='2c' --snmp-community='public' --mode=list-interfaces
```
Voici le résultat :
```Shell
List interfaces:
'loopback_0' [speed = 1073, status = up, id = 1]
'ethernet_3' [speed = , status = notPresent, id = 10]
'ppp_1' [speed = , status = notPresent, id = 11]
'ethernet_10' [speed = 1000, status = up, id = 12]
'tunnel_4' [speed = 0.1, status = down, id = 13]
'ethernet_4' [speed = , status = up, id = 14]
'ethernet_5' [speed = , status = up, id = 15]
'ethernet_6' [speed = , status = up, id = 16]
'ethernet_7' [speed = , status = up, id = 17]
'ethernet_8' [speed = , status = up, id = 18]
'ethernet_9' [speed = , status = up, id = 19]
'tunnel_0' [speed = , status = down, id = 2]
'ethernet_11' [speed = 1000, status = up, id = 20]
'ethernet_12' [speed = 1000, status = up, id = 21]
'ethernet_13' [speed = 1000, status = up, id = 22]
'tunnel_1' [speed = , status = down, id = 3]
'tunnel_2' [speed = , status = down, id = 4]
'tunnel_3' [speed = , status = down, id = 5]
'ppp_0' [speed = , status = down, id = 6]
'ethernet_0' [speed = , status = up, id = 7]
'ethernet_1' [speed = , status = up, id = 8]
'ethernet_2' [speed = , status = up, id = 9]
```

### Superviser un routeur Cisco en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **Cisco Standard** :

![image](../assets/getting-started/quick_start_cisco_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_cisco_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis sélectionnez le modèle
**Net-Cisco-Standard-SNMP-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_cisco_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_cisco_3.png)

D'autres indicateurs peuvent être supervisés. Cliquez sur le bouton **Ajouter** pour ajouter par exemple la supervision de
la bande passante d'une interface réseau :

![image](../assets/getting-started/quick_start_cisco_4a.png)

Dans le champ **Description**, saisissez le nom du service à ajouter, puis sélectionnez l'hôte auquel lier cet
indicateur. Dans le champ **Modèle** sélectionner le modèle **Net-Cisco-Standard-Traffic-Generic-Name-SNMP-custom**.

Une liste de macros en correspondance avec le modèle va alors apparaître :

![image](../assets/getting-started/quick_start_cisco_4b.png)

Saisissez le nom de votre interface pour la macro **INTERFACENAME** et cliquez sur le bouton **Sauvegarder** pour ajouter cet
indicateur à la configuration.

Faites de même pour ajouter la supervision des erreurs de paquets :

![image](../assets/getting-started/quick_start_cisco_5.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_cisco_6.png)

#### Pour aller plus loin

Le Plugin Pack **Cisco Standard** apporte de nombreux modèles de supervision. Lors de la création d'un service, il est
possible de rechercher les modèles disponibles dans la liste de sélection :

![image](../assets/getting-started/quick_start_cisco_7.png)

Il est également possible d'accéder au menu **Configuration > Services > Templates** pour en connaître la liste :

![image](../assets/getting-started/quick_start_cisco_8.png)

> Avec **Centreon IT Edition**, vous pouvez ajouter très rapidement et très simplement la surveillance de vos cartes
> réseau, partition, processus et services en utilisant la fonctionnalité de **[Découverte des services](../monitoring/discovery/services-discovery)**.

Pour connaître manuellement le nom des interfaces réseau disponibles, vous pouvez exécuter le plugin Centreon en ligne de commande tel quel :

```Shell
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin --hostname=10.40.1.254 \
    --snmp-community=public --snmp-version=2c --mode=list-interfaces
```
Voici le résultat : 
```Shell
List interfaces:
'Gi1/0/1' [speed = 1000, status = up, id = 10101]
'Gi1/0/2' [speed = 1000, status = up, id = 10102]
'Gi1/0/3' [speed = 10, status = down, id = 10103]
'Gi1/0/4' [speed = 10, status = down, id = 10104]
'Gi1/0/5' [speed = 10, status = down, id = 10105]
'Gi1/0/6' [speed = 1000, status = up, id = 10106]
'Gi1/0/7' [speed = 10, status = down, id = 10107]
'Gi1/0/8' [speed = 10, status = down, id = 10108]
'Gi1/0/9' [speed = 10, status = down, id = 10109]
'Gi1/0/10' [speed = 10, status = down, id = 10110]
'Gi1/0/11' [speed = 10, status = down, id = 10111]
'Gi1/0/12' [speed = 10, status = down, id = 10112]
'Gi1/0/13' [speed = 10, status = down, id = 10113]
'Gi1/0/14' [speed = 10, status = down, id = 10114]
'Gi1/0/15' [speed = 10, status = down, id = 10115]
'Gi1/0/16' [speed = 10, status = down, id = 10116]
'Gi1/0/17' [speed = 1000, status = up, id = 10117]
'Gi1/0/18' [speed = 10, status = down, id = 10118]
'Gi1/0/19' [speed = 10, status = down, id = 10119]
'Gi1/0/20' [speed = 100, status = up, id = 10120]
'Gi1/0/21' [speed = 10, status = down, id = 10121]
'Gi1/0/22' [speed = 1000, status = up, id = 10122]
'Gi1/0/23' [speed = 10, status = down, id = 10123]
'Gi1/0/24' [speed = 1000, status = up, id = 10124]
'Gi1/0/25' [speed = 10, status = down, id = 10125]
'Gi1/0/26' [speed = 10, status = down, id = 10126]
'Gi1/0/27' [speed = 10, status = down, id = 10127]
'Gi1/0/28' [speed = 10, status = down, id = 10128]
```

Ou pour récupérer la liste des spanning-tree :

```Shell
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin --hostname=10.40.1.254 \
    --snmp-community=public --snmp-version=2c --mode=list-spanning-trees
```
Voici le résultat : 
```Shell
List ports with Spanning Tree Protocol:
[port = GigabitEthernet1/0/20] [state = forwarding] [op_status = up] [admin_status = up] [index = 10120]
[port = Port-channel1] [state = forwarding] [op_status = up] [admin_status = up] [index = 5001]
```


### Superviser une imprimante en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **Printer Standard** :

![image](../assets/getting-started/quick_start_printer_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_printer_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis
sélectionnez le modèle **HW-Printer-standard-rfc3805-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_printer_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_printer_3.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_printer_4.png)

### Superviser un onduleur en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **UPS Standard** :

![image](../assets/getting-started/quick_start_ups_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_ups_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis sélectionnez le modèle
**HW-UPS-Standard-Rfc1628-SNMP-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_ups_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_ups_3.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_ups_4.png)

## Déployer une configuration

Lors de la création/suppression/modification des objets via l'interface de configuration, les changements effectués ne
sont pas appliqués de manière automatique aux serveurs de supervision. Afin de pouvoir appliquer les modifications
effectuées, il est nécessaire de suivre la procédure ci-dessous.

1. Rendez-vous dans le menu **Configuration > Collecteurs > Collecteurs**.
2. Choisissez les collecteurs sur lesquels exporter la configuration.
3. Cliquez sur **Exporter la configuration**.

    ![image](../assets/monitoring/monitoring-servers/export_conf.png)

4. Cochez les cases suivantes :
  - **Générer les fichiers de configuration**
  - **Lancer le débogage du moteur de supervision (-v)**
  - **Déplacer les fichiers générés**
  - **Redémarrer l'ordonnanceur**.

5. Cliquez sur **Exporter**.

    ![image](../assets/monitoring/monitoring-servers/export_conf_done.png)

6. Vérifiez qu'aucune erreur n'apparaît lors de la génération.
