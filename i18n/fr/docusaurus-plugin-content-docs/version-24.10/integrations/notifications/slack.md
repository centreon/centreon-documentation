---
id: slack-notifications
title: Notifications Slack
---

Vous pouvez poster des notifications directement dans un canal Slack en utilisant un webhook entrant Slack et une commande de notification personnalisée dans Centreon.

## Configurer des notifications Slack

### Étape 1 : Créer un webhook Slack

Suivez la documentation officielle de Slack pour [créer un webhook Slack](https://api.slack.com/messaging/webhooks) dans le canal de votre choix. Voici un résumé de la procédure :

1. Connectez-vous à Slack et accédez à l'espace de travail et au canal où vous souhaitez poster les notifications.
2. Cliquez sur les 3 points verticaux dans le coin supérieur droit, puis sélectionnez **Modifier les paramètres**.
3. Dans l'onglet **Intégrations**, cliquez sur **Ajouter une application**.
4. Dans la liste **Applications préapprouvées pour \<votre organisation\>**, trouvez **Webooks entrants** puis cliquez sur **Installer**. Une nouvelle page apparaît dans votre navigateur.
5. Cliquez sur **Demander une configuration** et replissez le formulaire correspondant. Lorsque vous validez votre demande, Slack vous notifie que votre demande a été envoyée à vos administrateurs pour qu'ils l'approuvent.
6. Slack vous notifie lorsque votre demande a été approuvée par vos administrateurs : cliquez sur **Go to Slack marketplace**.
7. Dans la page qui s'ouvre, cliquez sur **Add to Slack**.
8. Sélectionnez le canal dans lequel vous souhaitez que les notifications soient postées, puis cliquez sur **Add incoming webhooks integration**.
   * Vous pouvez maintenant récupérer le **Webhook URL** que vous devrez utiliser dans la commande Centreon.
   * Définissez un nom pour votre application/intégration et l'icône correspondante : ceux-ci apparaîtront lorsque vos survolerez une notification.
9. En bas de la page, cliquez sur **Save settings**.
   * La page vous fournit également de l'aide pour personnaliser le contenu de vos notifications.
   * Pour accéder à cette page par la suite, cliquez sur le nom de votre intégration à côté du message **added an integration to this channel:**, ou cliquez sur le nom d'une notification reçue via ce webhook.

### Étape 2 : Installer le plugin de notifications Centreon Slack

1. Installez Git sur chaque collecteur qui postera des notifications.
2. Sur chaque collecteur, exécutez les commandes suivantes :

```bash
mkdir /usr/lib/centreon/git-plugins
cd /usr/lib/centreon/git-plugins
git clone https://github.com/centreon/centreon-plugins.git
chown -R centreon-engine. /usr/lib/centreon/git-plugins
```

### Étape 3 : Créer des commandes de notification

1. Allez à la page **Configuration > Commandes > Notifications**, puis cliquez sur **Ajouter**.
2. Créez une commande qui postera des notifications pour les hôtes et une pour les services (remplacez les valeurs d'exemple par les vôtres) :

   * Exemple pour un hôte :

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::slack::plugin --mode alert --slack-url='https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX' --slack-channel='#votre_canal_slack' --slack-username='Notifications Centreon' --slack-emoji=':ghost:' --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --priority='$_HOSTCRITICALITY_LEVEL$'
   ```

   * Exemple pour un service:

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::slack::plugin --mode alert --slack-url='https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX' --slack-channel='#votre_canal_slack' --slack-username='Notifications Centreon' --slack-emoji=':ghost:' --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --priority='$_SERCVICECRITICALITY_LEVEL$'
   ```

* **$CENTREONPLUGINS$** doit spécifier le chemin complet vers le script **centreon_plugins.pl** (celui-ci varie en fontion de l'emplacement où vous avez cloné le dépôt). Si vous avez cloné le dépôt comme décrit à l'étape 2, le chemin sera sans doute **/usr/lib/centreon/git-plugins/centreon-plugins/src**.
* **--slack-url**: l'URL du webhook que vous avez récupérée à la fin de l'étape 1.
* **--slack-channel**: le nom du canal où vous voulez que les notifications soient postées.
* **--slack-username**: le nom qui sera affiché dans Slack en tant qu'auteur des posts. Il s'agit d'un simple libellé et non d'un vrai nom d'utilisateur Slack.

### Étape 4 : Configurer l'utilisateur et l'hôte

1. Allez à la page **Configuration > Utilisateurs > Contacts/Utilisateurs**.
2. Créez un utilisateur dédié (par exemple **slack**) et dans les champs **Host Notification Commands** et **Service Notification Commands**, sélectionnez les commandes que vous avez crées à l'étape 3. Définissez également des valeurs pour les champs **Host/service Notification Options** et **Host/service Notification Period**.
3. Pour les hôtes désirés, dans l'onglet **Notification**, dans le champ **Linked contacts**, sélectionnez l'utilisateur dédié que vous venez de créer.
4. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md). Une notification sera maintenant postée dans le canal Slack choisi lorsque l'un des changements de statut configurés passeront à HARD.
