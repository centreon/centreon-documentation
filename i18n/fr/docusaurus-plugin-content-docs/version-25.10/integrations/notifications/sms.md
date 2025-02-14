---
id: sms-notifications
title: Notifications SMS
---

Vous pouvez envoyer des notifications par SMS en utilisant un fournisseur SMS et une commande de notification personnalisée dans Centreon.

## Configurer des notifications SMS

### Prérequis

Dans notre exemple, avec OVH SMS, nous aurons besoin :
* d'un compte OVH SMS. Son nom aura la forma suivante : **sms-ab1234-1**.
* des identifiants nécessaires pour accéder à ce compte.
* d'un [utilisateur OVH SMS correctement configuré](https://help.ovhcloud.com/csm/fr-sms-users?id=kb_article_view&sysparm_article=KB0051417), autorisé à utiliser ce compte.

### Étape 1 : Installer le plugin de notifications Centreon SMS

1. Installez Git sur chaque collecteur qui postera des notifications.
2. Sur chaque collecteur, exécutez les commandes suivantes :

```bash
git clone https://github.com/centreon/centreon-plugins.git /usr/lib/centreon/plugins/git-plugins
```

### Étape 2 : Créer des commandes de notification

1. Allez à la page **Configuration > Commandes > Notifications**, puis cliquez sur **Ajouter**.
2. Créez une commande qui enverra des notifications par SMS pour les hôtes et une pour les services (remplacez les valeurs d'exemple et le nom du fournisseur par les valeurs désirées) :

   * Exemple pour un hôte :

   ```bash
   $CENTREONPLUGINS$/git-plugins/src/centreon_plugins.pl --plugin=notification::ovhsms::plugin --mode=alert --account=sms-ab1234-1 --login=XXXX --password=XXXX --from="Centreon" --to="0033123456789" --message='Alert on host $HOSTNAME$. Status: $HOSTSTATE$, $HOSTOUTPUT$'
   ```

   * Exemple pour un service:

   ```bash
   $CENTREONPLUGINS$/git-plugins/src/centreon_plugins.pl --plugin=notification::ovhsms::plugin --mode=alert --account=sms-ab1234-1 --login=XXXX --password=XXXX --from="Centreon" --to="0033123456789" --message='Alert on service $SERVICEDESC$ for host $HOSTNAME$. Status: $SERVICESTATE$, $SERVICEOUTPUT$'

   ```

* **--account** : dans notre exemple, le nom du compte OVH utilisé pour envoyer les SMS.
* **--from** : dans notre exemple, un utilisateur SMS autorisé pour ce compte.

3. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

### Étape 3 : Configurer l'utilisateur et l'hôte

1. Allez à la page **Configuration > Utilisateurs > Contacts/Utilisateurs**.
2. Créez un utilisateur dédié (par exemple **sms**) et dans les champs **Host Notification Commands** et **Service Notification Commands**, sélectionnez les commandes que vous avez crées à l'étape 2. Définissez également des valeurs pour les champs **Host/service Notification Options** et **Host/service Notification Period**.
3. Pour les hôtes désirés, dans l'onglet **Notification**, dans le champ **Linked contacts**, sélectionnez l'utilisateur dédié que vous venez de créer.
4. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md). Une notification sera maintenant envoyée par SMS au numéro configuré lorsque l'un des changements de statut configurés passeront à HARD.

![image](../../assets/integrations/notifications/sms.png)

> Le processus d'envoi de SMS n'est pas parallélisé. Cela signifie qu'aucun contrôle ne sera effectué tant que le dernier SMS n'aura pas été envoyé par le serveur.

## Troubleshooting

* Si vous ne recevez pas de notifications par SMS, vérifiez le fichier de log de **centengine** :

```shell
tail -f /var/log/centreon-engine/centengine.log
```

* Vous pouvez également essayer d'exécuter votre commande de notification en ligne de commande (exécutez la commande en tant qu'utilisateur **centreon-engine**), afin de vérifier si vous recevez un SMS instantanément ou non.
