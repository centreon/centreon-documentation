---
id: dsm
title: Dynamic Service Management
---

Le module Centreon Dynamic Service Management (Centreon-DSM) est une extension pour gérer les alarmes avec un système de
journaux d'événements. Avec DSM, Centreon peut recevoir des événements tels que des interruptions SNMP résultant de la
détection d'un problème et attribuer des événements dynamiquement vers un emplacement défini dans Centreon, comme une
console d'événements.

Une ressource a un nombre défini d'emplacement (slot) sur lesquels des alertes seront attribuées (stockées). Tant que
cet événement ne sera pas pris en compte, par une action humaine, il restera visible dans l'interface Centreon. Quand 
l'événement est acquitté, l'emplacement devient disponible pour de nouveaux événements.

L'objectif de ce module est d'améliorer le système de base de gestion des trap SNMP de Centreon.  C'est un complément
indispensable à la gestion des traps SNMP.

## Installation

### Sur un serveur central

Cette partie consiste à installer **Centreon DSM** sur un serveur central. Le serveur et le client Centreon DSM seront
installés sur le serveur principal.

Exécutez la commande :

```shell
yum install centreon-dsm-server centreon-dsm-client
```

Après avoir installé le rpm, vous devez terminer l'installation du module via l'interface Web. Rendez-vous dans le menu
**Administration > Extensions > Manager** et recherchez **dsm**:

![image](../../assets/configuration/dsm/module-setup.png)

Cliquez sur le bouton ``+`` d'installation.

Votre module Centreon DSM est maintenant installé.

![image](../../assets/configuration/dsm/module-setup-finished.png)

Vous pouvez maintenant démarrer et activer le service sur votre serveur :

```shell
systemctl enable dsmd
systemctl start dsmd
```

### Sur un collecteur

Cette partie consiste à installer **Centreon DSM** sur un poller. Seul le client sera installé.

Exécutez la commande :

```shell
yum install centreon-dsm-client
```

Vous devez maintenant créer un accès du poller au serveur SGBD sur la base de données **centreon_storage**.

## Architecture

L'événement doit être transmis au serveur via une interruption SNMP. Le trap SNMP est ainsi collecté par le service
**snmptrapd**. Si les paramètres de réception ne sont pas valides (communauté autorisée), le trap SNMP est supprimé.

Une fois le trap SNMP reçu, il est envoyé au processus **centreontrapdforward** pour inscrire les informations dans
un cache situé dans le répertoire **/var/spool/centreontrapd/** par défaut.

Le processus **centreontrapd** lit les informations reçues dans le cache et exécute la **special command** liée au trap SNMP.

Cette commande spéciale exécute binaire **dsmclient.pl** avec des arguments. Ce client stockera l'évènement dans une
file d'attente que le processus **dsmd** lit toutes les 5 secondes.

Le processus **dsmd.pl** recherchera dans la base de données "centreon" les emplacements associés à l'hôte (slots). Si
aucun slot n'est configuré, l'événement est supprimé. Sinon, le processus cherchera s'il y a au moins un emplacement
libre. Si au moins un emplacement est libre, il transmettra au moteur de surveillance des commandes externes pour
modifier l'état de l'emplacement. Sinon, les données resteront en attend de la libération d'un slot.

## Configuration

### Configurer les emplacements (slot)

Rendez-vous dans le menu **Administration > Modules > Dynamic Services** et cliquez sur **Add**

![image](../../assets/configuration/dsm/form-slot.png)

Veuillez suivre le tableau ci-dessous afin de comprendre le rôle de tous les paramètres:

* **Name** : Nom du groupe d'emplacements.
* **Description** : Description du groupe.
* **Host Name** : Nom de l'hôte auquel seront ajouté les emplacements.
* **Service template based**: Le modèle de service de base permet de créer des emplacements de service sur l'hôte. Ce
  modèle doit être 100% passif et une macro personnalisée doit être créée dessus. La macro est nommée **ALARM_ID** et
  la valeur par défaut doit être **empty**.
* **Number of slots**: Nombre d'emplacements qui seront créés.
* **Slot name prefix**: Le préfixe est utilisé pour donner le nom des emplacements. Le nom sera suivi d'un incrément
  de 0 juqu'au nombre d'emplacements désirés.
* **Check command**: Cette commande de vérification est utilisée lorsque le service doit être forcé pour libérer un
  slot. La commande doit envoyer un code retour correct.
* **Status**: Le statut de la configuration.

Un exemple de modèle de service passif est disponible ci-dessous:

![image](../../assets/configuration/dsm/form-passive-service.png)

> La macro **ALARM_ID** est obligatoire. La valeur par défaut **empty** est également nécessaire.

Lorsque vous validez le formulaire, Centreon crée ou met à jour tous les emplacements. Si vous n'avez modifié aucune
valeur, vous n'avez pas à effectuer d'autre action. Sinon, vous avez devez
*[générer et exporter la configuration](../monitoring/deploy.html)*.

### Configuration des traps

La dernière étape consiste à configurer les traps que vous souhaitez rediriger vers vos emplacements.

Modifiez un trap SNMP que vous souhaitez rediriger vers les systèmes de emplacements. Rendez-vous dans le menu
**Configuration > SNMP traps > SNMP traps** et éditez un trap.

Pour rediriger les alarmes vers les emplacements, vous devez activer l'option **Execute special command** dans le
formulaire et ajoutez cette commande dans le champ **special command** :

```shell
/usr/share/centreon/bin/dsmclient.pl -H @HOSTADDRESS@ -o 'Example output : $*' -i 'linkdown' -s 1 -t @TIME@
```

Cette commande sera exécutée à chaque réception du trap pour rediriger l'évènement vers le processus dsmd.

Cette commande accepte certains paramètres. Vous trouverez dans le tableau suivant la liste et la description de chaque
paramètre :

* **-H** : Adresse ip ou nom d'hôte vers lequel vous souhaitez rediriger l'alarme. Vous pouvez passer la valeur
  @HOSTADDRESS@ afin de garder le même hôte ou vous pouvez utiliser ce que vous voulez afin de centraliser toutes les
  alarmes sur le même hôte virtuel par exemple qui héberge toutes les alarmes.
* **-o** : Message d'information que dsm mettra lorsque la commande soumettra le résultat dans le bon emplacement. Ce
  message peut être construit avec toutes les valeurs $* et avec une chaîne spécifique que vous passez en paramètre.
* **-i** : Identifiant de l'alarme. L'ID d'alarme peut être construit avec la concaténation de certaines variables
  comme "$ 1- $ 4". L'identifiant permet d'utiliser l'option d'acquittement automatique de l'alarme lorsque vous avez la
  possibilité de créer le même identifiant pendant le traitement d'ouverture et de fermeture de l'alarme.
* **-s** : Etat que vous souhaitez transmettre en paramètre à l'alarme. Vous pouvez utiliser @STATUS@ afin d'utiliser
  la génération de statut héritée du système de règles correspondant.
* **-t** : Temps que vous souhaitez passer à dsm afin de conserver le temps réel de réception du trap.
* **-m** : Liste des macros et de ses valeurs que vous souhaitez mettre à jour lors du traitement de l'alarme. Veuillez
  suivre la syntaxe ci-dessous: macro1=valeur1|macro2=valeur2|macro3=valeur3 Cette fonction est utilisée pour mettre à
  jour certains paramètres en direct sur la mémoire centrale Centreon-Engine sans redémarrage.

Votre formulaire devrait maintenant être comme ça :

![image](../../assets/configuration/dsm/trap-form-2.png)

Après avoir enregistré le formulaire, veuillez générer la
*[définition des traps SNMP](monitoring-with-snmp-traps.html#Applying-the-changes)*.

### Configurer les liens d'évènement

Une chose est différente par rapport au système Centreon Trap, c'est que vous ne devez pas lier directement le modèle de
service de l'emplacement au trap afin de ne pas recevoir x fois le trap (x représente ici le nombre d'emplacements).

Vous devez lier les interruptions à un service actif de la ressource, par exemple le service **Ping**.

## Administration

### Configuration avancée

Il est possible de modifier la configuration par défaut du module en créant / éditant le fichier
**/etc/centreon/centreon_dsmd.pm** :

```shell
%centreon_dsmd_config = (
    # which user will send action to Centcore
    centreon_user => 'centreon',
    # timeout to send command to Centcore
    submit_command_timeout => 5,
    # custom macro used to keep alarm ID
    macro_config => 'ALARM_ID',
    # number of alarms retrieve from the cache for analysis
    sql_fetch => 1000,
    # interval in seconds to clean locks
    clean_locks_time => 3600,
    # duration in seconds to keep locks
    clean_locks_keep_stored => 3600,
);

1;
```

### Purge du cache

Toutes les actions effectuées par le moteur DSMD sont enregistrées dans la base de données
**centreon_storage**. Un cron est fourni pour supprimer les données basées sur la rétention.

Pour modifier la période de rétention, par défaut **180 jours**, vous pouvez créer / modifier le fichier
**/etc/centreon/centreon_dsm_purge.pm** :

```shell
%centreon_dsm_purge_config = (
    # period in days
    history_time => 180,
);

1;
``` 

Pour modifier l'heure de la tâche cron, vous pouvez modifier le fichier **/etc/cron.d/centreon-dsm** :

```shell
#####################################
# Centreon DSM
#

30 22 * * * root /usr/share/centreon/www/modules/centreon-dsm//cron/centreon_dsm_purge.pl --config='/etc/centreon/conf.pm' --severity=error >> /var/log/centreon/centreon_dsm_purge.log 2>&1
```
