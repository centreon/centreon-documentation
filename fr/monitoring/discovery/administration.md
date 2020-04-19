---
id: administration
title: Administration
---

## Mise à jour

Pour mettre à jour le module, exécutez la commande suivante :

``` shell
yum update -y centreon-auto-discovery-server
```

Si une mise à jour est disponible, une confirmation vous sera demandée. Répondre
*oui* à la question..

Connectez-vous sur l’interface web de Centreon en utilisant un compte ayant les
droits d’installer des modules et rendez-vous dans le menu `Administration >
Extensions > Gestionnaire`.

Cliquez sur l’icône de mise à jour correspondant au module **Auto Discovery** :

![image](../../assets/configuration/autodisco/update.png)

Le module est maintenant à jour :

![image](../../assets/monitoring/discovery/install-after.png)

## Désinstallation

Connectez-vous sur l’interface web de Centreon en utilisant un compte ayant les
droits d’installer des modules et rendez-vous dans le menu `Administration >
Extensions > Gestionnaire`.

Cliquer sur l’icône de suppression correspondant au module **Auto Discovery** :

![image](../../assets/monitoring/discovery/install-after.png)

Une fenêtre de confirmation apparaît, confirmer l’action :

![image](../../assets/monitoring/discovery/uninstall-popin.png)

Le module est maintenant désinstallé :

![image](../../assets/monitoring/discovery/install-before.png)

> La désinstallation du module supprimera toutes les données associées. Les
> données ne pourront être restaurées sauf si une sauvegarde de la base de
> données a été faite.

## Découverte de services

### Tâche programmée

Toutes les règles de découverte sont exécutées périodiquement à travers des
tâches ordonnancées par le démon cron. La description des exécutions est
disponible dans le fichier **/etc/cron.d/centreon-auto-disco** :

``` shell
#####################################
# Centreon Auto Discovery
#

30 22 * * * centreon /usr/share/centreon/www/modules/centreon-autodiscovery-server//cron/centreon_autodisco --config='/etc/centreon/conf.pm' --config-extra='/etc/centreon/centreon_autodisco.pm' --severity=error >> /var/log/centreon/centreon_auto_discovery.log 2>&1
```

La configuration par défaut exécute les règles de découvertes tous les jours à
22h30.

Les informations et les erreurs relatives à l’exécution des règles de découverte
sont sauvegardées dans le fichier
**/var/log/centreon/centreon\_auto\_discovery.log**.

## Configuration du moteur de découverte

Voici un exemple complet de la configuration possible du fichier
**/etc/centreon/centreon\_autodisco.pm** :

``` perl
%centreon_autodisco_config = (
    internal_com_type => 'ipc',
    internal_com_path => '/tmp/centreonautodisco/routing.ipc',
    # Execute rules in parallel (0) or sequential (1)
    sequential => 1,
    timeout_wait => 60,
    # Use to connect to a Centreon poller
    ssh_password => '',
    ssh_extra_options => {
        user => 'centreon',
        stricthostkeycheck => 0,
        sshdir => '/var/www/.ssh/',
        knownhosts => '/dev/null',
        timeout => 60,
    },
    ssh_exec_options => {
        timeout => 60,
        timeout_no_data => 120,
        parallel => 8, #Max.: 8
    },
    # Centreon CLAPI parameters
    clapi_cmd => '/usr/bin/centreon',
    clapi_user => 'admin',
    clapi_password => 'centreon',
    clapi_reload => 'POLLERRELOAD',
    # Parameters to send email report if enable in rule
    mail_subject => 'Centreon Auto Discovery',
    mail_from => 'centreon-autodisco',
    mail_command => '/bin/mail',
);

1;
```

### Architecture distribuée

Lorsqu’un hôte est supervisé par un collecteur distant, la découverte sera
effectuée depuis ce dernier. Ainsi pour que les commandes puissent être
exécutées correctement, il est nécessaire d’autoriser le processus Apache à
accéder aux clés SSH de l’utilisateur **centreon**. Pour cela exécutez les
commandes suivantes :

``` shell
mkdir /var/www/.ssh/
cp /var/spool/centreon/.ssh/* /var/www/.ssh/
chown -R apache. /var/www/.ssh
chmod 600  /var/www/.ssh/id_rsa
```
