---
id: slack-notifications
title: Notifications Slack
---

Vous pouvez envoyer des notifications par SMS en utilisant un fournisseur SMS et une commande de notification personnalisée dans Centreon.

## Configurer des notifications SMS

### Étape 1 : Installer le plugin de notifications Centreon SMS

1. Installez Git sur chaque collecteur qui postera des notifications.
2. Sur chaque collecteur, exécutez les commandes suivantes :

```bash
mkdir /usr/lib/centreon/git-plugins
cd /usr/lib/centreon/git-plugins
git clone https://github.com/centreon/centreon-plugins.git
chown -R centreon-engine. /usr/lib/centreon/git-plugins
```

### Étape 2 : Créer des commandes de notification

1. Allez à la page **Configuration > Commandes > Notifications**, puis cliquez sur **Ajouter**.
2. Créez une commande qui enverra des notifications par SMS pour les hôtes et une pour les services (remplacez les valeurs d'exemple et le nom du fournisseur par les valeurs désirées) :

   * Exemple pour un hôte :

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::ovhsms::plugin --mode=alert --account=sms-ab1234-1 --login=XXXX --password=XXXX --from="Centreon" --to="0033123456789" --message="Alert on a host" --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --priority='$_HOSTCRITICALITY_LEVEL$'
   ```

   * Exemple pour un service:

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::ovhsms::plugin --mode=alert --account=sms-ab1234-1 --login=XXXX --password=XXXX --from="Centreon" --to="0033123456789" --message="Alert on a service" --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --priority='$_SERCVICECRITICALITY_LEVEL$'
   ```

* **$CENTREONPLUGINS$** doit spécifier le chemin complet vers le script **centreon_plugins.pl** (celui-ci varie en fontion de l'emplacement où vous avez cloné le dépôt). Si vous avez cloné le dépôt comme décrit à l'étape 2, le chemin sera sans doute **/usr/lib/centreon/git-plugins/centreon-plugins/src**.
* **--account** : dans notre exemple, le nom du compte OVH utilisé pour envoyer les SMS.

### Étape 3 : Configurer l'utilisateur et l'hôte

1. Allez à la page **Configuration > Utilisateurs > Contacts/Utilisateurs**.
2. Créez un utilisateur dédié (par exemple **sms**) et dans les champs **Host Notification Commands** et **Service Notification Commands**, sélectionnez les commandes que vous avez crées à l'étape 2. Définissez également des valeurs pour les champs **Host/service Notification Options** et **Host/service Notification Period**.
3. Pour les hôtes désirés, dans l'onglet **Notification**, dans le champ **Linked contacts**, sélectionnez l'utilisateur dédié que vous venez de créer.
4. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md). Une notification sera maintenant envoyée par SMS au numéro configuré lorsque l'un des changements de statut configurés passeront à HARD.
