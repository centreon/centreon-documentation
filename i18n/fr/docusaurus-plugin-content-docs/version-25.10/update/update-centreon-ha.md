---
id: update-centreon-ha
title: Mise à jour d'une plateforme Centreon HA
description: "Effectuer une mise à jour mineure d'une plateforme Centreon HA"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La procédure suivante est à utiliser lors de l'application d'une mise à jour mineure sur un cluster Centreon HA installé par Centreon Professional Services, dans le cas où il n'y a pas de rupture de compatibilité Engine/broker entre l'ancienne et la nouvelle version. Celle-ci peut se faire sans interrompre la supervision, mais en rendant l'interface indisponible pendant un court instant.

> Si vous utilisez un fournisseur Open Ticket avec des configurations personnalisées, [sauvegardez-les](../alerts-notifications/ticketing-install.md#sauvegarder-votre-configuration-personnalisée-de-fournisseur-openticket) avant de mettre à jour Centreon.

## Suspendre la gestion des ressources du cluster

Afin d'éviter un basculement du cluster pendant la mise à jour, il est nécessaire de suspendre toutes les ressources Centreon, ainsi que la base de données.

```bash
pcs property set maintenance-mode=true
```

## Déroulement de la mise à jour

> Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer
> la procédure de mise à jour.

### Modifier le script centreon_central_sync script (MBI uniquement)

Cette étape n'est nécessaire que si vous utilisez [MBI](../reporting/introduction.md). Modifiez le script `/usr/share/centreon-ha/bin/centreon_central_sync` aux lignes suivantes :

```shell
rsync_dir => ["/etc/centreon-broker", "/etc/centreon-engine", "/var/log/centreon-engine", "/var/lib/centreon/centplugins",
                     "/etc/centreon/license.d", "/usr/share/centreon-broker/lua"],
```

Pour que les rapports soient toujours téléchargeables, remplacez ces lignes par :

```shell
rsync_dir => ["/etc/centreon-broker", "/etc/centreon-engine", "/var/log/centreon-engine", "/var/lib/centreon/centplugins",
                     "/etc/centreon/license.d", "/usr/share/centreon-broker/lua", "/var/lib/centreon/centreon-bi-server/archives"],
```

### Mise à jour de Centreon-Web

Lancer la mise à jour sur les deux serveurs centraux :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Videz le cache :

```shell
dnf clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
dnf update centreon\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Videz le cache :

```shell
dnf clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
dnf update centreon\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Videz le cache :

```shell
apt clean all
apt update
```

Mettez à jour l'ensemble des composants :

```shell
apt install --only-upgrade "centreon*"
```

</TabItem>
</Tabs>

Une fois les mises à jour des paquets terminées sur les deux centraux, il reste à appliquer la mise à jour via l'interface web **uniquement sur le central actif** en fermant la session en cours ou en rafraîchissant la page de login ou en API [comme indiqué ici](update-centreon-platform.md#mise-à-jour-du-serveur-centreon-central) .

En parallèle, sur le **central passif**, il faut déplacer le répertoire **"install"** et regénérer le cache Symfony pour éviter d'afficher à nouveau l'interface de mise à jour suite à une bascule :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y%m%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```
</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y%m%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```
</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y%m%d`
sudo -u www-data /usr/share/centreon/bin/console cache:clear
```
</TabItem>
</Tabs>

### Suppression des crons

Les crons sont remis en place lors de la mise à jour des RPMs. Supprimez-les sur les deux noeuds centraux afin d'éviter les exécutions concurrentes.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
systemctl restart crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
systemctl restart crond
```
</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
systemctl restart cron
```
</TabItem>
</Tabs>

### Mise à jour des extensions

Les extensions (ou modules) Centreon nécessitent également d'être mises à jour via l'interface, depuis le menu **Administration > Extensions > Gestionnaire** en utilisant le bouton **Update all**.

### Mise à jour des connecteurs de supervision

Afin de maintenir la compatibilité entre les [connecteurs de supervision](../monitoring/pluginpacks.md) et les plugins installés (qui ont été mis à jour sur les serveurs centraux) il faut appliquer les mises à jour des connecteurs de supervision depuis le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Export de la configuration Broker/Engine

Générer une nouvelle configuration pour tous les collecteurs (central compris) via le menu **Configuration > Collecteurs** en cochant les options :

* Générer les fichiers de configuration
* Lancer le débogage du moteur de supervision (-v)
* Déplacer les fichiers générés

Puis les redémarrer **un à un** à partir du même menu, en sélectionnant l'option "Redémarrer" plutôt que "Recharger" dans le cas où les paquets `centreon-engine` et/ou `centreon-broker` ont été mis à jour.

En complément, dans le cas où `centreon-broker` a été mis à jour, il faut redémarrer le broker central **sur le serveur central actif** :

```bash
service cbd-sql restart
```

Dans le cas où des serveurs distants seraient présents, il faut y redémarrer le service `cbd` :

```bash
service cbd restart
```

## Reprise de la gestion des ressources du cluster

Maintenant que la mise à jour est terminée, les ressources peuvent être gérées à nouveau :

```bash
pcs property set maintenance-mode=false
pcs resource cleanup ms_mysql
```

## Vérification de la stabilité de la plateforme

Il est toujours recommandé, après une mise à jour, de contrôler que tout fonctionne bien :

* Accès aux menus dans l'interface.
* Génération de configuration + reload ou restart de Centreon Engine
* Exécuter un contrôle immédiat dans le menu "Monitoring" et contrôler qu'il est bien pris en compte (dans un délai raisonnable). Faire de même avec un acquittement, une plage de maintenance...
* Migrer une ressource ou un groupe de ressources d'un nœud à l'autre, rebooter le serveur actif et contrôler que tout continue de fonctionner (refaire le test ci-dessus).

## Mise à jour des collecteurs

Les collecteurs peuvent être mis à jour par la suite en suivant la [procédure indiquée ici](update-centreon-platform.md#mise-à-jour-des-collecteurs).
