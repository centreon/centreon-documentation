Règles de publication des rapports {#publication_rules}
==================================

Dans l\'interface Centreon, les règles définies dans la page "Reporting
\> Business Intelligence \> Publication rules" permettent de publier les
rapports sur différentes plate-formes via différents protocoles.

Une règle de publication par « défaut », basée sur le protocole SFTP,
doit être définie afin de publier les rapports sur la plateforme de
supervision Centreon et rendre ces derniers accessibles depuis le menu
« Reporting \> Business Intelligence \> Archives ».

Sur le serveur de supervision
-----------------------------

Un utilisateur système « centreonBI » a été créé. Renseignez un mot de
passe pour cet utilisateur pour les futures connexions SSH entre les
deux serveurs : :

    passwd centreonBI

Sur le serveur de reporting
---------------------------

Générez des clés SSH pour l\'utilisateur « centreonBI » afin d\'éviter
l\'utilisation d\'un mot de passe à chaque publication de rapport sur le
serveur de supervision : :

    su - centreonBI
    ssh-keygen
      Enter file in which to save the key (/home/centreonBI/.ssh/id_rsa):
      > Created directory '/usr/local/centreon-bi/.ssh'.
      > Enter passphrase (empty for no passphrase):
      > Enter same passphrase again:
      > Your identification has been saved in /home/centreonBI/.ssh/id_rsa.

::: {.note}
::: {.title}
Note
:::

A la question \"Enter passphrase\", confirmez sans mettre de passphrase.
:::

Transférez la clé sur le serveur **Centreon**.L\'utilisateur
**centreonBI** sur le serveur Centreon doit être configuré avec un mot
de passe): :

    ssh-copy-id -i ~/.ssh/id_rsa.pub centreonBI@{MONITORING_IP_ADDRESS}

Testez la connexion SSH depuis le serveur de reporting vers le serveur
de supervision : :

    ssh centreonBI@{MONITORING_IP_ADDRESS}

Aucun mot de passe ne doit vous être demandé pour la connexion.

Sur l\'interface Centreon
-------------------------

Dans le menu "Reporting \> Business Intelligence \> Publication rules "
de Centreon, éditez la règle "Default" et spécifiez la configuration
suivante :

  ----------------------------------------------------------------------------
  **Field**                    **Value**
  ---------------------------- -----------------------------------------------
  Name                         Default

  Publication protocol         SFTP

  Global                       \(x\) Yes

  Description                  Default publication rule

  Host                         **\<Centreon server IP address\>**

  Port                         22

  Authentication type          User/Key

  User                         centreonBI

  Path to the SSH key          /home/centreonBI/.ssh/id\_rsa

  Passphrase for SSH key       

  Confirm passphrase for SSH   
  key                          

  Root directory               /var/lib/centreon/centreon-bi-server/archives

  Subdirectory                 \@JOBNAME@
  ----------------------------------------------------------------------------

Cliquez sur le bouton « Test » pour valider la configuration puis
sauvegardez le formulaire.

Poursuivez au chapitre suivant pour configurer l\'ETL.
