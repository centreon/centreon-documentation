---
id: slack-notifications
title: Slack notifications
---

You can post notifications directly to a Slack channel using a Slack incoming webhook and a custom notification command in Centreon.

## Configuring Slack notifications

### Step 1: Create a Slack webhook

Follow Slack's official documentation to [set up an incoming webhook](https://api.slack.com/messaging/webhooks) in the channel you want. Here is a summary:

1. Log in to Slack and access the workspace and channel where you want the notifications to be posted.
2. Click the 3 vertical dots in the top right corner, then select **Edit settings/Modifier les paramètres**.
3. On the **Integrations** tab, click **Add an app**.
4. In the **Pre-approved apps for \<your_organization\>** / **Applications préapprouvées pour \<votre organisation\>** list, find **Incoming webooks** and then click **Install**. A new page opens in your browser.
5. Click **Request configuration** and fill in the corresponding form. When you click **Submit request**, Slack notifies you that your request has been sent to your admins for approval.
6. Slack notifies you when your request has been approved by your admin: click **Go to Slack marketplace**.
7. In the web page that opens, click **Add to Slack**.
8. Select the channel in which you want the notifications to be posted, then click **Add incoming webhooks integration**.
   * You can now retrieve the **Webhook URL** you will need to use in the command in Centreon.
   * Define the name for your app/integration and the corresponding icon: these will appear when you hover over a notification.
9. At the bottom of the page, click **Save settings**.
   * The page also gives you help on how to customize the contents of your notifications.
   * To access this page again later, click the name of your integration next to the message **added an integration to this channel:**, or click the name of a notification you received via this webhook.

### Step 2: Install the Centreon Slack notifications plugin

1. Install Git on each poller that will post notifications to Slack.
2. On each poller, execute the following commands:

```bash
mkdir /usr/lib/centreon/git-plugins
cd /usr/lib/centreon/git-plugins
git clone https://github.com/centreon/centreon-plugins.git
chown -R centreon-engine. /usr/lib/centreon/git-plugins
```

### Step 3: Create notification commands

1. Go to **Configuration > Commands > Notifications**, then click **Add**.
2. Create a command that will post notifications for hosts and a command for services:

   * Example for a host:

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::slack::plugin --mode alert --slack-url='https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX' --slack-channel='#your_slack_channel' --slack-username='Centreon notifications' --slack-emoji=':ghost:' --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --priority='$_HOSTCRITICALITY_LEVEL$'
   ```

   * Example for a service:

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::slack::plugin --mode alert --slack-url='https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX' --slack-channel='#your_slack_channel' --slack-username='Centreon notifications' --slack-emoji=':ghost:' --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --priority='$_SERCVICECRITICALITY_LEVEL$'
   ```

* **$CENTREONPLUGINS$** must be the complete path to the **centreon_plugins.pl** script. If you cloned the repo like instructed above, the path is likely to be **/usr/lib/centreon/git-plugins/centreon-plugins/src**.
* **--slack-url**: the webhook URL you retrieved at the end of step 1.
* **--slack-channel**: the name of the channel where you want the notifications to be posted.
* **--slack-username**: the name that will be displayed in Slack as the author of the posts. This is just a label, not an actual Slack username.

### Step 4: Configure the user and host

1. Go to **Configuration > Users > Contacts/Users**.
2. Create a dedicated user (e.g., **slack**) and in the **Host Notification Commands** and **Service Notification Commands** fields, select the commands your have created at step 3. Also select values for the **Host/service Notification Options** and **Host/service Notification Period** fields.
3. For the hosts you want, on the **Notification** tab, in the **Linked contacts** field, select the dedicated user you just created.
4. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md). A notification will now be posted to Slack when the status changes you have configured go to HARD.
