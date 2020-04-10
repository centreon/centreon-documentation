Output de Centreon Broker pour BAM {#ref_Conf_Broker_fr}
==================================

L\'installation ou la mise à jour de l\'extension **Centreon BAM** crée
automatiquement les différentes configurations du module **Centreon
Broker** nécessaires à son bon fonctionnement.

Ce chapitre vous permet de vérifier que la configuration de Broker liée
à BAM est correcte sur votre installation.

::: {.note}
::: {.title}
Note
:::

-   Ce chapitre n\'a pas pour but de décrire la configuration standard
    du module **Centreon Broker**.
-   Il se peut que le nom des configurations (\"ouput\") ne soit pas
    strictement identique. Vérifier en plus du nom de configuration le
    type associé.
:::

La configuration nécessaire pour faire fonctionner l\'extension
**Centreon BAM** est composée de deux parties :

-   **centreon-bam-monitoring** de type \"BAM - Monitoring engine
    (BAM)\" : permet d\'insérer en base de données les changements de
    statut des vues métiers
-   **centreon-bam-reporting** de type \"BAM - BI engine (BAM)\" :
    permet d\'insérer en base de données les données de disponibilités

Configuration de l\'output temps réel
-------------------------------------

::: {.note}
::: {.title}
Note
:::

Cette configuration est présente sur l\'instance **Centreon Broker**
centrale du serveur Centreon.
:::

Rendez vous sur la page **Configuration \> Centreon \> Centreon-Broker
\> Configuration\"** puis dans l\'onglet \"Output\".

Vérifier que la configuration suivante est bien présente.

![image](../images/configuration/conf_central_bam_monitoring.png)

Détail des champs :

  -------------------------------------------------------------------------------
  **Champs**                         **Valeurs**
  ---------------------------------- --------------------------------------------
  **Nom**                            centreon-bam-monitoring

  **Filtres par catégories de flux** 

  **Nom de la base de données (1)**  centreon\_storage

  **Activer la réplication**         No

  **Command file path**              /var/lib/centreon-engine/rw/centengine.cmd

  **Adresse de la base de données**  localhost (ou l\'adresse de votre base de
                                     données de monitoring

  **Nom de la base de données (2)**  centreon

  **Mot de passe de l\'utilisateur** in file conf.pm

  **Port de connexion à la base de   3306
  données**                          

  **Type de base de données**        MariaDB

  **Utilisateur pour se connecter à  centreon
  la base de données**               

  **Nom du processus de bascule      
  (failover)**                       

  **Nombre maximum de requêtes par   0
  transaction**                      

  **Temps d\'exécution maximum des   
  \"commit\" de transaction**        

  **Intervalle entre 2 tentatives**  
  -------------------------------------------------------------------------------

Configuration de l\'output de reporting
---------------------------------------

::: {.note}
::: {.title}
Note
:::

Cette configuration est présente sur l\'instance **Centreon Broker**
centrale du serveur Centreon.
:::

Rendez vous sur la page **Configuration \> Centreon \> Centreon-Broker
\> Configuration\"** puis dans l\'onglet \"Output\".

Vérifier que la configuration suivante est bien présente

![image](../images/configuration/conf_central_bam_reporting.png)

Détail des champs :

  ---------------------------------------------------------------------------
  **Champs**                                         **Valeurs**
  -------------------------------------------------- ------------------------
  **Nom**                                            centreon-bam-reporting

  **Filtres par catégories de flux**                 BAM

  **Activer la réplication**                         No

  **Adresse de la base de données**                  localhost

  **Nom de la base de données**                      centreon\_storage

  **Mot de passe de l\'utilisateur**                 in file conf.pm

  **Port de connexion à la base de données**         3306

  **Type de base de données**                        MariaDB

  **Utilisateur pour se connecter à la base de       centreon
  données**                                          

  **Nom du processus de bascule (failover)**         

  **Nombre maximum de requêtes par transaction**     0

  **Temps d\'exécution maximum des \"commit\" de     
  transaction**                                      

  **Intervalle entre 2 tentatives**                  
  ---------------------------------------------------------------------------
