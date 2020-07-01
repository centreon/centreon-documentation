---
id: installation
title: Installation de Centreon MBI
---

## Architecture

Ce chapitre présente l'architecture logicielle de l'extension **Centreon MBI**. Il
permet d'acquérir une compréhension de son intégration à la plateforme Centreon.

Ce document s'adresse aux administrateurs qui vont installer ou configurer Centreon MBI.

Dans ce chapitre, vous trouverez :

-   le diagramme d'architecture logicielle
-   le diagramme d'architecture des RPMs

### Un serveur de reporting dédié

Cette architecture et les pré-requis présentés sont valables pour les
environnements suivant:

-   tests
-   production
-   pré-production

Le schéma ci-dessous met en avant les principaux composants de Centreon MBI :

![image](../assets/reporting/installation/architecture.png)

*La base de monitoring n'est pas nécessairement sur le même serveur que le serveur Centreon*

-   **ETL** : Mécanisme d'extraction, calcul et chargement des données
    dans la base de données dediée reporting.
-   **CBIS** : Ordonnanceur gérant la génération et la publication
    automatique des rapports.
-   **Reporting database** : Base de données MariaDB contenant les données
    de reporting et certaines données extraites de la base de
    monitoring.

### Tableaux des flux réseau

Dans le tableau ci-dessous, sont représentés les différents flux
présents entre le serveur de reporting dédié, le serveur Centreon et les
bases de données, par défaut.


  **Application**  |  **Source**              |     **Destination**                   | **Port** |  **Protocol**
  -----------------|--------------------------|---------------------------------------|----------|--------------
  ETL/CBIS         | Serveur de reporting     | Serveur de bases de données Centreon  | 3306     | TCP
  SSH              | Serveur de reporting     | Serveur Centreon                      | 22       | TCP
  CBIS             | Serveur de reporting     | Serveur Centreon                      | 80       | HTTP*
  CBIS             |    Centreon              | Serveur de reporting                  | 1234     | TCP
  Widgets          | Serveur central Centreon | Serveur de reporting                  | 3306     | TCP

\**Uniquement nécessaire pour les rapports Host-Graph-v2 and
Hostgroup-Graph-v2*

### Packages

L'installation de Centreon MBI est basée sur deux paquets RPM :

-   **Centreon-bi-server :** Ce paquet installe l'interface de Centreon
    MBI sur le frontend de Centreon. Ce paquet doit être installé sur le
    serveur web de Centreon.
-   **Centreon-bi-reporting-server** : Ce paquet contient tous les
    éléments composants le serveur reporting : moteur de génération de
    rapports, les rapports standards et l'ETL. Il doit être installé
    sur un serveur dédié aux processus de reporting.

L'installation du moteur de base de données doit être faite en même
temps. Nous conseillons fortement d'installer la base MariaDB sur le
serveur de reporting pour des questions de performances & d'isolation.

## Pré-requis

### Server Centreon central

**Logiciels**

- Centreon Web 20.04
- Vérifiez que `date.timezone` est correctement configurée dans le
fichier `/etc/opt/rh/rh-php72/php.ini` (même que celui retourné par la
commande `timedatectl status`)
- Evitez l'utilisation des variables
ci dessous dans le fichier de configuration MariaDB `/etc/my.cnf`: Elles
arrêtent l'exécution des requêtes longues et ceci pourrait arrêter
l'exécution des ETL ainsi que la génération des rapports.

  - wait_timeout
  - interactive_timeout

**Ajout d'utilisateurs ou de groupes**

  Utilisateur           |   Groupe
|-----------------------|-----------------------------|
|  centreonBI (nouveau) |  apache,centreon,centreonBI |
| apache (existant)     |   centreonBI                |

**Description des utilisateurs, umask et répertoire utilisateur**


  Utilisateur  | umask  |  home
---------------|--------|-----------------------------
  centreonBI   |   0002 | /home/centreonBI

### Serveur de reporting

**Matériel**

 Nombre de services supervisés | CPU minimum  | Mémoire Vive
-------------------------------|----------------------|---------------
| < 4 000                      | 2 CPU ( 3Ghz )       | 12Go minimum  |
| < 20 000                     | 4 CPU (3GHz) minimum | 16 Go minimum |
| >= 20 000 and < 40 000       | 4 CPU (3GHz) minimum | 24 Go minimum |
| >= 40 000 and < 100 000      | 8 CPU (3GHz) minimum | 32 Go minimum |
| > 100 000                    | > Contacter Cen      | treon         |

**Espace disque** : Utilisez  [le fichier suivant](../assets/reporting/installation/Centreon-MBI-QuickGuide-Storage-Sizing_EN.xlsx)

**File system**

  File system   |    Taille
------------------------------|-----------------------------------------------------
  /                           |  5GB minimum
  /var (containing MariaDB data)|   utiliser le résultat du fichier de simulation de l'espace disque ci-dessus
  Dossier temporaire de MariaDB | Fortement recommandé de le positionner dans /var
  Volume group*              |  5G minimum d'espace libre sur le **Volume groupe** hébergeant les **données** MySQL/MariaDB.

Pour controler l'espace libre, utiliser la commande suivante en
remplaçant vg_data par le nom du volume groupe:

    vgdisplay vg_data | grep -i free*

**Logiciels**

*  OS : CentOS 7 / Redhat 7
*  SGBD :  MariaDB 10.3.x
*  Firewall :   Désactivé
*  SELinux :   Désactivé

Veillez à optimiser MariaDB sur votre serveur de reporting.Vous aurez
besoin d'au moins 12GB de mémoire vive afin d'utiliser le
[fichier suivant](../assets/reporting/installation/centreon.cnf) Veillez à créer un dossier `tmp` dans `/var/lib/mysql/`.

> N'utilisez pas ce fichier d'optimisation sur le serveur de supervision.

Ajout d'utilisateurs ou de groupes :

Utilisateur  | Groupe
-------------|-------------
centreonBI   | centreonBI

Description des utilisateurs, umask et répertoire utilisateur :

  Utilisateur  |  umask  | home
---------------|---------|---------
  centreonBI   | 0002    | /home/centreonBI

### Bonnes pratiques de supervision

#### Qualité des plugins & données

Pour être en mesure d'avoir des rapports sur les données de performance
en utilisant les rapports par défaut de Centreon MBI, vous devez au
moins superviser quelques indicateurs de performance de base
(métriques) :

- CPU : doit retourner un pourcentage d'une ou plusieurs métriques
    (cpu_total, cpu_sys, cpu_1...) et 100 comme valeur maximum.
- Memory : doit retourner au moins une métrique comportant ces
    informations :
    - L'utilisation mémoire : Cette valeur doit être en octets
    - Le seuil d'alerte d'utilisation mémoire
    - Le seuil critique d'utilisation mémoire
    - La mémoire totale allouée en octet 

    Le plugin utilisé pour superviser cet indicateur doit renvoyer la sortie suivante:

        *any status information* | **$metric_name=$value$unit;$warning_threshold;critical_threshold;$min_value;$max_value**

- Utilisation d'espace disque: Deux types de service possibles :
    - Superviser une partition par service (les métriques sont souvent
        nommées « used » et « size »
    - Superviser plusieurs partitions par service et chaque métrique
        correspond au nom d'une partition.

    Dans les deux cas, les données de performance renvoyées par les
    plugins doivent correspondre à ce format :

        *any status information* | **$metric_name=$value$unit;$warning_threshold;$critical_threshold;$min_value;$max_value**

-   Données de trafic : les rapports standards utilisent une metrique
    pour le trafic entrant et une metrique pour le trafic sortant. Pour
    être compatible, vos plugins doivent renvoyer également deux
    métriques (peu importe leurs noms). Il est également important que
    pour chaque métrique, la valeur maximum atteignable soit présente.
    Le format du plugin est donc le même que conseillé ci-dessus :

        any status information | $inboundTrafic=$value$unit;$warning_threshold;$critical_threshold;$min_value;$max_value $outBoundTrafic=...

#### Unité par défaut

Il est important de s'assurer que les unités des données renvoyées par
les plugins soient communes à tous les services pour un même type de
données. Nous conseillons donc fortement de vérifier que les plugins
renvoient les données dans les unités suivantes :

-   Temps: secondes
-   Trafic: bits/sec
-   Stockage: Octets
-   Mémoire/Swap: Octets

### Bonnes pratiques de configuration

Chaque modèle de rapport dans Centreon MBI prend en compte plusieurs
paramètres qui permettent de générer des rapports adaptés à vos besoins.

Plusieurs types de paramètres sont disponibles pour chaque modèle :

-   Un objet principal sur lequel le rapport est généré. Cela peut
    être :
    -   Un hôte
    -   Un groupe d'hôtes : groupe fonctionnel défini dans Centreon
        afin de classer les hôtes par client, application, domaine
        d'activité stratégique, pays, ...
    -   Plusieurs groupes d'hôtes
-   Une période temporelle (ou « plage horaire » ) sur laquelle les
    statistiques seront calculées.
-   Des filtres pour prendre en compte seulement des types spécifiques
    d'équipements, des services ou des métriques dans les groupes
    d'hôtes sélectionnés :
    -   Catégories d'hôtes : Permet de classer les hôtes dans des
        groupes techniques afin de déterminer le type ou la fonction
        d'un hôte ; Par exemple : serveurs Linux, serveurs Windows,
        routeurs cisco, imprimantes, ...
    -   Catégories de services : Permet de définir le type d'un service
        : CPU, mémoire, stockage, ...
    -   Métriques : Données de performances collectées par les services
        (indicateurs de supervision). Un service de supervision peut
        collecter plusieurs métriques. Cependant les noms des métriques
        et les unités ne sont pas normalisés (par exemple : un service
        de type CPU peut collecter seulement une métrique nommée
        'cpu_average' définie en pourcentage et un autre service de
        type CPU peut collecter une métrique par cœur de processeur
        configuré dans l'équipement), il est donc nécessaire, à la
        génération du rapport, de sélectionner les métriques à prendre à
        compte pour le calcul des statistiques.

### Groupes d'hôtes et catégories

Les définitions des groupes d'hôtes et des catégories listées
ci-dessous sont données à partir des bonnes pratiques établies par
Centreon.

Cependant, les groupes et les catégories que vous allez créer doivent
correspondre à vos besoins.

Exemple :

Si vous avez besoin de mettre en évidence le nombre d'alertes générées
par domaines d'activité de votre SI avec une répartition par type
d'équipement, il sera nécessaire de définir des groupes et et des
catégories d'hôtes de la manière suivante :

-   Groupe d'hôtes : **Databases**, Applications, Security, Network,
    Mail ...
-   Catégorie d'hôtes : DB2-Servers, MySQL-Servers, Oracle-Servers,
    SQL-Servers ...

Voici un exemple de statistiques que vous pourriez obtenir en utilisant
ces groupes et catégories :

![image](../assets/reporting/installation/pie_charts.png)

Le groupe d'hôte est le premier axe d'analyse. La catégorie d'hôte
permet d'analyser les statistiques en sous-domaines.

De la même manière, nous pouvons analyser les statistiques en se basant
sur les dimensions suivantes :

-   Par pays (groupe d'hôte) avec une répartition des données par type
    d'équipement réseau (catégorie d'hôtes)
-   Par pays (groupe d'hôte) avec une répartition des données par
    client (catégorie d'hôte)
-   Par client (groupe d'hôte) avec une répartition des données par
    pays (catégorie d'hôte)
-   Par client (groupe d'hôte) avec une répartition des données par
    serveur d'application (catégorie d'hôte)
-   ...

Il n'existe pas de règles standards pour définir des groupes d'hôtes
ou des catégories. Cela doit être adapté à vos besoins.

**Comment créer ces catégories et groupes?**

-   La relation entre les hôtes et les groupes d'hôtes est faite à
    partir du menu *Configuration > Hosts > Host groups* sur
    l'interface de Centreon. Il est également possible d'utiliser
    l'onglet *Relation* présent dans le formulaire
    d'ajout/modification d'un hôte.
-   La relation entre un hôte et une catégorie d'hôte est faite à
    partir du menu *Configuration > Hosts > Categories* sur
    l'interface de Centreon. Il est également possible d'utiliser
    l'onglet *Relation* présent dans le formulaire
    d'ajout/modification d'un hôte.

### Catégories de Service

Les catégories de services permettent d'organiser les services
(indicateurs de supervision) en sous-domaines. L'usage le plus commun
des catégories de services est de définir des catégories basées sur des
types de services : CPU, mémoire, stockage, processus Oracle, DNS,
processus Websphere, ...

Ce genre de configuration permet, par exemple, de :

-   Comparer le nombre d'alertes générées pour chaque type de services
-   Sélectionner la catégorie de service qui indique l'utilisation
    d'espace disque quand vous souhaitez générer un rapport de
    capacité.

**Comme les groupes d'hôtes et les catégories d'hôtes, les catégories
de service doivent être définies selon vos besoins.**

Par exemple : Si vous avez besoin d'analyser l'espace disque alloué et
utilisé par un SGDB ou par un type d'application, vous devez créer
plusieurs catégories de services. A la place d'utiliser une seule
catégorie nommée « Stockage » ou « Disque » nous aurons :

-   « Operating system » : contenant les espaces de stockage de type
    système
-   « Oracle » : contenant les espaces de stockage des serveurs Oracle
-   « SQL Server » : les espaces de stockage des serveur SQL

Voici un exemple de statistiques que vous pourriez obtenir en utilisant
ces catégories de services :

![image](../assets/reporting/installation/storage_example.png)

La relation entre les services et leurs catégories peut être faite à
partir de menu *Configuration > Services > Categories* sur
l'interface de Centreon. Il est également possible d'utiliser
l'onglet *Relation* présent dans le formulaire d'ajout/modification
d'un service.

> Il est fortement conseillé de gérer les catégories de service en
> utilisant uniquement les modèles de services.

## Installer l'extension sur Centreon

Les actions listées dans ce chapitre doivent être lancées sur le serveur
de supervision Centreon.

Contactez le Centre de service de Centreon afin d'obtenir les
repository de Centreon MBI.

Lancez la commande suivante :

    yum install centreon-bi-server

### Activer l'extension

Le menu *Administration > Extensions > Manager* de Centreon permet
d'installer les différentes extensions détectées. Une carte
référence **Centreon MBI**. Cliquer sur le "+" pour installer l'extension.

Uploader via l'interface la license reçue correspondant à Centreon MBI.

### Configurer l'extension

Renseignez les valeurs suivantes dans les options générales de Centreon
MBI, menu *Rapports > Monitoring Business Intelligence > Options Générales* :

  Tab           |    Option            |         Value
  -----------------|-------------------------|---------------------------------
  Options de  l'ordonnanceur |    Hôte de CBIS    |      Adresse IP du serveur de reporting
  Options de l'ETL Une base de données MariaDB dédiée au reporting a été  mise en place. |  Oui
  Widgets de reporting*   |     Reporting MariaDB database |  Adresse IP de la base de reporting (par défaut = adresse IP du serveur de reporting)

\* *Le test de connexion ne fonctionnera pas encore à ce moment de l'installation*

### Accès à la base de données Centrale

#### Cas #1 : La base MariaDB de monitoring est hébèrgée sur le même serveur que le serveur Central Centreon

Lancez la commande ci dessous pour autoriser le serveur de reporting à
se connecter aux bases de données du serveur de supervision.

    /usr/share/centreon/www/modules/centreon-bi-server/tools/centreonMysqlRights.pl --root-password=@ROOTPWD@

**@ROOTPWD@ :** Mot de passe root du serveur MariaDB du serveur de supervision.
Si il n'y a pas de mot de passe root, ne spécifiez pas l'option "root-password".

#### Cas2 # La base MariaDB de monitoring est hébergée sur un serveur dédié

Connectez vous en SSH sur le serveur de base de données, et lancez les
commandes suivantes : :

    mysql -u root -p
    mysql> CREATE USER 'centreonbi'@'$BI_ENGINE_IP$' IDENTIFIED BY 'centreonbi';
    mysql> GRANT ALL PRIVILEGES ON centreon.* TO 'centreonbi'@'$BI_ENGINE_IP$';
    mysql> GRANT ALL PRIVILEGES ON centreon_storage.* TO 'centreonbi'@'$BI_ENGINE_IP$';

**$BI_ENGINE_IP$ :** Adresse IP du serveur de reporting

> Si vous utilisez une réplication MariaDB pour vos bases de données de
> **monitoring**, lors de l'installation de Centreon MBI, des vues sont
> créées. Il faut les exclure de la réplication en rajoutant la ligne
> suivante dans le fichier my.cnf du slave
>
>       replicate-wild-ignore-table=centreon.mod_bi_%v01,centreon.mod_bi_%V01
> puis créer les vues sur le slave en lançant la commande:
>
>  #mysql centreon < [view_creation.sql](../assets/reporting/installation/view_creation.sql)

Allez au chapitre suivant pour continuer l'installation.

## Installer le serveur de reporting

### Installer les paquets

Ce chapitre aborde l'installation du serveur de reporting.

Lors de ce chapitre, vous aurez besoin des informations suivantes,
veillez à les connaître avant de commencer :

-   IP/DNS de la base de monitoring
-   IP/DNS de l'interface de Centreon
-   IP/DNS de la base de reporting (localhost fortement recommandé)
-   accès (user/password) aux bases de données de monitoring & reporting
-   définir puis récupérer le mot de passe ssh de l'utilisateur
    centreonBI, sur le serveur Central (pour la mise à disposition des
    rapports générés sur l'interface)

Pour lancer l'installation du serveur de reporting, installer le dépôt correspondant (fourni par le support)
puis lancer la commande suivante:

    yum install centreon-bi-reporting-server MariaDB-server MariaDB-client

Dans le cas d'une installation basée sur une image CentOS vierge, installez la clé GPG : :

    cd /etc/pki/rpm-gpg/
    wget http://yum.centreon.com/standard/20.04/el7/stable/RPM-GPG-KEY-CES

### Configurer le serveur de reporting

#### Optimisations MariaDB

Assurez vous que [le fichier](../assets/reporting/installation/centreon.cnf) de configuration optimisé fourni dans les
pré-requis est bien présent dans `/etc/my.cnf.d/`, puis redémarrez le service MariaDB

    systemctl restart mysql

Pour les systèmes **CentOS / RHEL en version 7**, il est nécessaire de
modifier la limitation **LimitNOFILE**. Changer cette option dans
`/etc/my.cnf` NE fonctionnera PAS.

    mkdir -p  /etc/systemd/system/mariadb.service.d/
    echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mariadb.service.d/limits.conf
    systemctl daemon-reload
    systemctl restart mysql

Si le service MariaDB échoue lors du démarrage, supprimer les fichiers
*ib_logfile* (MariaDB doit absolument être stoppé) puis redémarrer à
nouveau MariaDB:

    rm -f /var/lib/mysql/ib_logfile*
    systemctl start mysql

Si vous utilisez un fichier de socket spécifique pour MariaDB, modifiez le
fichier `/etc/my.cnf` et dans la section [client], ajoutez :

    socket=$PATH_TO_SOCKET$

#### Installer la configuration

Vérifiez que le MariaDB de reporting est bien démarré puis lancez les
commandes ci dessous et répondez aux questions:

    /usr/share/centreon-bi/config/install.sh

Le script effectue l'échange de clés ssh entre le serveur de
supervision et le serveur de reporting, et configure la règle de
publication sftp standard pour pouvoir publier les rapports sur le
Centreon Web. Enfin, il active les backup et démarre le service cbis.

Une fois l'installation terminée, poursuivez au chapitre suivant pour
configurer l'ETL.


### ETL : Configuration

Centreon MBI intègre un ETL qui permet de :

-   Synchroniser les données brutes de la supervision vers le serveur de
    reporting
-   Alimenter les bases de données du serveur de reporting avec les
    données statistiques
-   Contrôler la rétention des données sur le serveur de reporting

Avant de passer aux étapes suivantes, il est nécessaire de lire le
chapitre des [bonnes pratiques](#TODO) afin de
vous assurer que la configuration des objets dans Centreon (groupes,
categories...) est conforme aux attentes de Centreon MBI.

Dans le menu « Rapports > Monitoring Business Intelligence > General
Options > Options de l ETL »  de Centreon, spécifiez les options
suivantes :

Option                                                                                                                                      | Values
--------------------------------------------------------------------------------------------------------------------------------------------|---------
| **Options générales**                                                                                                                     | |
  Une base de données MariaDB dédiée au reporting a été mise en place.		                                                            | Oui. Vous devez avoir un serveur de reporting dédié.
  Espace de stockage des fichiers temporaires sur le serveur de reporting *		                                                            | Dossier sur le serveur de reporting dans lequel les dumps de données seront positionnés
  Type de statistiques à traiter		                                                                                                    | <ul><li>Sélectionnez « Disponibilité uniquement » si vous utilisez uniquement les rapports de disponibilité. </li><li>Sélectionnez « Performance et capacité uniquement» si vous souhaitez utiliser uniquement les rapports de capacité et de performance</li><li>Sélectionnez «Tous» afin de calculer les statistiques pour les deux types de rapports.</li></ul>
  Activer le stockage des tables temporaires en mémoire (uniquement si la mémoire physique allouée au serveur de reporting est suffisante)  | Activé uniquement si votre configuration MariaDB et la mémoire physique allouée au serveur de reporting le permet.
| **Sélection du périmètre du reporting**                                                                                                   | |
Groupes d hotes                                                                                                                             | Sélectionnez les groupes d’hôtes pour lesquels vous souhaitez conserver les statistiques.
Catégories d hôtes                                                                                                                          | Sélectionnez les catégories d’hôtes pour lesquels vous souhaitez conserver les statistiques.
Catégories de services	                                                                                                                    | Sélectionnez les catégories de services pour lesquels vous souhaitez conserver les statistiques.
| **Calcul des données de disponibilité**                                                                                                   | |
  Sélectionner les plages de services pour le calcul des statistiques de disponibilité	                                                    | Plages horaires (time periods) pour lesquelles les calculs de disponibiltié des hôtes et des services sont réalisées
| **Calcul des données de performance et de capacité**                                                                                      | |
  Granularité des données statistiques à calculer	                                                                                        | Sélectionnez le ou les niveaux de granularité pour le calcul des données de performance (1)
  Sélectionner les plages de services pour le calcul des statistiques de performance                                                        | Plages horaires sur les jours de la semaine pris en compte dans le calcul des données de capacité et de performance
| **Capacity statistic aggregated by month**                                                                                                | |
  Sélectionner la plage de service 24h/24, 7j/7 pour le calcul des statistiques mensuelles de capacité	                                    | Selectionnez la plage horaire 24x7.
  Sélectionner les catégories de services liées aux indicateurs de capacité                                                                 | Sélectionnez les catégories de services ayant été rattachés à des services de type capacité
  Exclure les métriques qui ne renvoient pas une indication d utilisation des espaces de stockage                                           | Concerne uniquement les métriques liées aux services qui renvoient une information de capacité. Sélectionnez uniquement les métriques qui donnent une valeur maximale ou une valeur totale de capacité et non une valeur d’utilisation. (exemple, la métrique “ size ” returnée par le plugins check_centreon_snmp_remote_storage »)
 | **Paramètres pour le calcul des centiles**                                                                                               | |
   Calculating centile aggregation by	                                                                                                    | Selectionnez la granularité des calculs. Le rapport de trafic fourni en standard avec BI 2.1 utilise les données au Mois.
  Sélectionner les catégories de services sur lesquelles aggréger les données                                                               | Selectionnez uniquement les catégories de services pertinente (Ex: Traffic)
  Premier jour de la semaine	                                                                                                            | Selectionnez le premier jour à considérer pour les statistiques à la semaine
Créer les combinaisons centile-plage horaire qui couvrent vos besoins (Format du centile : 00.0000)	                                        | Créez des combinaisons centile/plage horaire sur lesquels les statistiques seront effectuées

**(1)** Les rapports nécessitant une granularité des données à l'heure
sont listés ci-dessous. Si vous ne souhaitez pas utiliser ces rapports,
désactivez le calcul des statistiques à l'heure:

-   Hotsgroup-Host-details-1
-   Host-detail-v2
-   Hostgroup-traffic-Average-Usage-By-Interface
-   Hostgroup-traffic-by-Interface-And-Bandwith-Ranges


### ETL: Rétention de données

Le serveur de reporting contient des données de statistiques dans des
tables spécifiques à Centreon MBI. Ces données sont stockées dans la
base de données *centreon_storage*.

L'espace utilisé par ces tables augmentera de jour en jour; il est
possible de contrôler la volumétrie de ces données en configurant des
règles de rétention.

Dans le menu : *Reporting > Monitoring Business Intelligence > Options
générales > Options de rétention des données* la rétention peut être
gérée par:

-   type de données (disponibilité ou performance)
-   granularité des données (données brutes de la supervision, données
    agrégées par heure, jour ou mois)

Activez la rétention de données en cochant "Yes" puis paramétrez les
différents options de configuration.

![image](../assets/reporting/installation/bi_retention.png)

Pour activer la purge automatique des données, éditez le cron
`/etc/cron.d/centreon-bi-purge` sur le serveur de reporting puis
dé-commentez la ligne suivante: :

    0 20 * * * root @CENTREON_BI_HOME@/etl/dataRetentionManager.pl >> @CENTREON_BI_LOG@/dataRetentionManager.log 2>&1

> Évitez les périodes pendant lesquelles les calculs de statistiques avec
> l'ETL Centreon MBI et la génération des rapports sont programmés.

Il est possible d'exécuter le cron de manière journalière ou
hebdomadaire, cela dépendra de la charge générée par la purge des
données sur votre serveur de reporting.

Redémarrez le service cron: :

    systemctl restart crond

**BONNES PRATIQUES**: Sélectionnez différentes périodes de rétention en
fonction de la granularité des données statistiques:

-   Les données agrégées par heure sont souvent exploitées afin
    d'analyser des métriques sur une période proche. Il n'est pas
    nécessaire de conserver ces données sur plusieurs mois;
-   Au delà de 5 ou 6 mois, vous auriez probablement besoin de voir la
    tendance de la disponibilité et des statistiques de performances. Il
    serait donc envisageable de conserver au plus 6 mois les données
    agrégées par jour et configurer une rétention des données agrégées
    au mois sur plusieurs dizaines de mois.

Passez à la section suivante pour continuer l'installation.


### ETL : Execution

> Avant d'aller plus loin, assurez vous d'avoir positionné les
> optimisations MariaDB fournis dans les pré-requis. Assurez vous également
> d'avoir configuré la rétention des données et de l'avoir activée afin
> de ne récupérer et calculer que les données dont vous avez besoins.

#### Reconstruire les statistiques en utilisant les données historiques

La commande qui suit, à exécuter sur le serveur de *REPORTING*, aura
pour effet de :

-   Supprimer les données existantes sur la base de reporting
-   Importer les données brutes à partir de la base de données de
    supervision, en utilisant les paramètres de retention
-   Alimenter les tables qui contiennent les informations de
    disponibilité des équipements et des services
-   Alimenter les tables qui contiennent les informations de performance
    et de capacité des équipements et des services

        /usr/share/centreon-bi/bin/centreonBIETL -r

#### Activer l'exécution journalière

Une fois que la reconstruction des données est terminée, il faut activer
l'exécution journalière du script. Pour cela, sur le serveur de
reporting, éditez le fichier « /etc/cron.d/centreon-bi-engine » et
dé-commentez la ligne suivante : :

    30 4 * * * root /usr/share/centreon-bi/bin/centreonBIETL -d >> /var/log/centreon-bi/centreonBIETL.log 2>&1

Redémarrez le service cron sur le serveur de reporting : :

    systemctl restart crond

> Verifiez que le batch *centreonBIETL* commence une fois que le batch
> *eventReportBuilder* est terminé sur le serveur de monitoring (vérifiez
> les heures dans le cron `/etc/cron.d/centreon`).

La configuration de votre installation de Centreon MBI est terminée, consultez le [tutorial](../getting-started/analyze-resources-availability.html)
