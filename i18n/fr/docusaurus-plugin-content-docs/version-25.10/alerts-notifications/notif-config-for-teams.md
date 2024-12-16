---
id: notif-config-for-teams
title: Notifications Microsoft Teams
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page explique comment intégrer et configurer les notifications de Centreon vers les canaux Microsoft Teams.

## Prérequis

- Pour utiliser le plugin de notification Teams, vous devez configurer un workflow Teams à l'aide de l'application Workflows dans Microsoft Teams. 
Consultez cette page pour savoir comment [migrer vos connecteurs vers Workflows[EN]](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/).

- Vous devez configurer votre workflow avec **MS Power Automate**.

 > Pour garantir une intégration optimale, Microsoft recommande d'utiliser *Power Automate workflows comme solution pour relayer les informations dans et en dehors de Teams de manière évolutive, flexible et sécurisée*.

## Configurer Microsoft Teams

Suivez cette procédure Microsoft qui explique comment publier sur un canal lors de la réception d’une demande de webhook : [Publier un flux de travail lorsqu’une demande de webhook est reçue dans Microsoft Teams](https://support.microsoft.com/fr-fr/office/post-a-workflow-when-a-webhook-request-is-received-in-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498#:~:text=You%20can%20post%20to%20a,a%20webhook%20request%20is%20received.&text=next%20to%20the%20channel%20or,that%20best%20suits%20your%20needs). Cela permettra à Centreon d'envoyer une alerte dans un canal Teams.

> Vous obtiendrez une URL que vous pourrez facilement copier/coller. Conservez soigneusement cette URL. Vous en aurez besoin lorsque vous vous connecterez au service pour lequel vous souhaitez envoyer des données à votre groupe.

Vous devriez recevoir une notification Teams confirmant la configuration du connecteur.

## Configurer Centreon

### Installer le plugin de notification Microsoft Teams

Vous devez installer le plugin de notification Teams avec le gestionnaire de paquets sur chaque collecteur devant envoyer des notifications à un canal Teams.

- Entrez la commande suivante :
 
 <Tabs groupId="sync">
 <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
 
 ``` shell
 dnf install centreon-plugin-Notification-Teams
 ```
 
 </TabItem>
 <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
 
 ``` shell
 dnf install centreon-plugin-Notification-Teams
 ```
 
 </TabItem>
 <TabItem value="Debian 12" label="Debian 12">
 
 ``` shell
 apt install centreon-plugin-notification-teams
 ```
 
 </TabItem>
 </Tabs>

### Configurer les objets de configuration à l'aide de l'interface CLAPI

Pour bénéficier des fonctionnalités du plugin, vous devez créer les objets Centreon suivants :
- Une **Commande de notification** correspondant à tous les types de ressources (Hôtes, Services, Activités métier). 
- Un **Contact Centreon**, correspondant à un canal au sein de Teams. Cela signifie que vous aurez besoin de plusieurs contacts si vous devez notifier plusieurs canaux. 

1. Pour faciliter la création de ces objets, vous pouvez copier le contenu suivant issu d'un fichier CLAPI et le coller dans un fichier du répertoire /tmp de votre serveur central (par exemple /tmp/clapi-teams.import).
 
 > Avant de charger le fichier, remplacez ces valeurs par les vôtres :
   - **\<SET_CENTREON_URL\>** avec l'URL que vous utilisez pour accéder à l'interface web de Centreon.
   - **\<SET_TEAMSWORKFLOW_URL\>** avec l'URL de Teams pour le workflow, obtenu précédemment.
   - **\<SET_CONTACT_PASSWORD\>** avec le mot de passe que vous souhaitez pour le nouveau contact.
 
 ``` shell
 CMD;ADD;bam-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=workflowapi --teams-workflow='$CONTACTPAGER$' --bam --service-description='$SERVICEDISPLAYNAME$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --date='$DATE$ $TIME$' --centreonurl='$CONTACTADDRESS1$'
CMD;setparam;bam-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;bam-notify-by-microsoft-teams;command_activate;1
CMD;setparam;bam-notify-by-microsoft-teams;command_locked;0
CMD;ADD;host-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=workflowapi --teams-workflow='$CONTACTPAGER$' --notification-type='$NOTIFICATIONTYPE$' --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --date='$DATE$ $TIME$' --action-links --centreon-url='$CONTACTADDRESS1$' --extra-info='$NOTIFICATIONAUTHOR$//$NOTIFICATIONCOMMENT$'
CMD;setparam;host-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;host-notify-by-microsoft-teams;command_activate;1
CMD;setparam;host-notify-by-microsoft-teams;command_locked;0
CMD;ADD;host-notify-by-microsoft-teams;1;
CMD;ADD;service-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=workflowapi --teams-workflow='$CONTACTPAGER$' --notification-type='$NOTIFICATIONTYPE$' --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --date='$DATE$ $TIME$' --action-links --centreon-url='$CONTACTADDRESS1$' --extra-info='$NOTIFICATIONAUTHOR$//$NOTIFICATIONCOMMENT$'
CMD;setparam;service-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;service-notify-by-microsoft-teams;command_activate;1
CMD;setparam;service-notify-by-microsoft-teams;command_locked;0
CONTACT;ADD;Microsoft-Teams-Consulting-Channel;notify_teams_consulting_channel;node@deadend;<SET_CONTACT_PASSWORD>;0;0;browser;local
CONTACT;setparam;notify_teams_consulting_channel;hostnotifperiod;24x7
CONTACT;setparam;notify_teams_consulting_channel;svcnotifperiod;24x7
CONTACT;setparam;notify_teams_consulting_channel;hostnotifopt;d,u
CONTACT;setparam;notify_teams_consulting_channel;servicenotifopt;w,u,c
CONTACT;setparam;notify_teams_consulting_channel;contact_pager;<SET_TEAMSWORKFLOW_URL>
CONTACT;setparam;notify_teams_consulting_channel;contact_address1;\<SET_CENTREON_URL\>
CONTACT;setparam;notify_teams_consulting_channel;contact_js_effects;0
CONTACT;setparam;notify_teams_consulting_channel;reach_api;0
CONTACT;setparam;notify_teams_consulting_channel;reach_api_rt;0
CONTACT;setparam;notify_teams_consulting_channel;contact_enable_notifications;1
CONTACT;setparam;notify_teams_consulting_channel;contact_activate;1
CONTACT;setparam;notify_teams_consulting_channel;show_deprecated_pages;0
CONTACT;setparam;notify_teams_consulting_channel;contact_ldap_last_sync;0
CONTACT;setparam;notify_teams_consulting_channel;contact_ldap_required_sync;0
CONTACT;setparam;notify_teams_consulting_channel;hostnotifcmd;host-notify-by-microsoft-teams
CONTACT;setparam;notify_teams_consulting_channel;svcnotifcmd;service-notify-by-microsoft-teams
 ```

2. Si l'URL de votre workflow Teams est plus longue que 200 caractères, augmentez la taille de la ligne **contact_pager** dans la base de données de configuration Centreon, en utilisant la requête suivante :
 ``` shell
 ALTER TABLE centreon.contact MODIFY contact_pager VARCHAR(255);
 ```

3. Utilisez vos identifiants Centreon et CLAPI pour charger le fichier :
 ``` shell
 centreon -u ‘<adminuser>’ -p ‘<password>’ -i /tmp/clapi-teams.import
 ```

4. Le fichier créera le contact **Microsoft-Teams-Consulting-Channel**. Utilisez ce contact à l'étape [Configuration des notifications](../alerts-notifications/notif-configuration.md) afin de recevoir des notifications dans votre canal Teams.
