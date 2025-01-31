---
id: sms-notifications
title: SMS notifications
---

You can send notification SMS using an SMS provider and a custom notification command in Centreon. Here is an example with OVH SMS.

## Configuring SMS notifications

### Step 1: Install the Centreon SMS notifications plugin

1. Install Git on each poller that will send SMS notifications.
2. On each poller, execute the following commands:

```bash
mkdir /usr/lib/centreon/git-plugins
cd /usr/lib/centreon/git-plugins
git clone https://github.com/centreon/centreon-plugins.git
chown -R centreon-engine. /usr/lib/centreon/git-plugins
```

### Step 2: Create notification commands

1. Go to **Configuration > Commands > Notifications**, then click **Add**.
2. Create a command that will send SMS for hosts and a command that will send SMS for services (replace the sample values and the name of the plugin by the ones you want):

   * Example for a host:

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::ovhsms::plugin --mode=alert --account=sms-ab1234-1 --login=XXXX --password=XXXX --from="Centreon" --to="0033123456789" --message="Alert on a host" --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --priority='$_HOSTCRITICALITY_LEVEL$'
   ```

   * Example for a service:

   ```bash
   $CENTREONPLUGINS$/centreon_plugins.pl --plugin=notification::ovhsms::plugin --mode=alert --account=sms-ab1234-1 --login=XXXX --password=XXXX --from="Centreon" --to="0033123456789" --message="Alert on a service" --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --priority='$_SERCVICECRITICALITY_LEVEL$'
   ```

* **$CENTREONPLUGINS$** must be the complete path to the **centreon_plugins.pl** script (it varies according to where you have cloned the repository). If you cloned the repository like instructed above, the path is likely to be **/usr/lib/centreon/git-plugins/centreon-plugins/src**.
* **--account**: in our example, this is the name of the OVH account used to send SMS.

### Step 3: Configure the user and host

1. Go to **Configuration > Users > Contacts/Users**.
2. Create a dedicated user (e.g., **sms**) and in the **Host Notification Commands** and **Service Notification Commands** fields, select the commands your have created at step 2. Also select values for the **Host/service Notification Options** and **Host/service Notification Period** fields.
3. For the hosts you want, on the **Notification** tab, in the **Linked contacts** field, select the dedicated user you just created.
4. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md). A notification SMS will now be sent to the number you defined when the status changes you have configured go to HARD.
