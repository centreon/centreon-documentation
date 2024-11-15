---
id: plugin-customization
title: Personnaliser le comportement d'un plugin
---

Les connecteurs de supervision sont fournis avec une configuration par défaut. Cependant, vous pouvez personnaliser leur comportement (plus précisément, le comportement du plugin, qui exécute la commande de contrôle). Voici quelques exemples avec le connecteur de supervision [**HTTP Server**](../../procedures/applications-protocol-http.md), qui permet de tester la connexion à un site web.

> Lorsque vous testez un plugin en ligne de commande, faites-le avec l'utilisateur **centreon-engine**. En effet, en conditions réelles le plugin est exécuté par cet utilisateur.

**Voir aussi :**

* la page [Comprendre les métriques](/docs/monitoring/metrics).
* sur notre plateforme communautaire The Watch : [How to use thresholds](https://thewatch.centreon.com/product-how-to-21/how-to-use-the-thresholds-694).
* [un guide sur GitHub](https://github.com/centreon/centreon-plugins/blob/develop/doc/en/user/guide.rst#how-can-i-remove-perfdatas-).

## Configuration avec les options par défaut

1. Vérifiez que le connecteur de supervision [**HTTP Server**](../../procedures/applications-protocol-http.md) est bien installé et que le plugin et le pack sont [tous les deux à jour](/docs/monitoring/pluginpacks#mettre-à-jour-un-connecteur-de-supervision).
2. [Créez un hôte](/docs/monitoring/basic-objects/hosts) (par exemple, `www.centreon.com`) et appliquez-lui le modèle d'hôte **App-Protocol-HTTP-custom**.
3. Vérifiez que la case **Créer aussi les services liés aux modèles** est bien cochée.
4. Cliquez sur **Sauvegarder**.
5. [Déployez la configuration](docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes, et à la page **Statut des ressources**.
6. À la page **Statut des ressources**, filtrez sur le nom de l'hôte (dans notre exemple, entrez `h.name:www.centreon.com` dans la barre de recherche). Vous pouvez voir qu'un service **HTTP-Response-Time** a été créé.
7. Cliquez sur celui-ci : dans le panneau de détails, plusieurs tuiles donnent des informations intéressantes :
   - **Données de performance** : le service comprend 2 métriques, **time** (le temps que prend la page HTML à répondre) et **size** (la taille de la page obtenue). Exemple : `'time'=0.035s;;;0; 'size'=915B;;;0;`.
   - **Commande** : la commande exécutée par le plugin, avec la configuration par défaut. Un bouton vous permet de la copier dans votre presse-papiers afin de l'utiliser facilement dans un terminal. Exemple :
   
   ```shell
   /usr/lib/centreon/plugins//centreon_protocol_http.pl --plugin=apps::protocols::http::plugin --mode=response --hostname=www.centreon.com --proto='http' --port='80' --urlpath='/' --warning=''  --critical='' 
   ```

8. Survolez le service puis cliquez sur **Vérification forcée**. La commande est exécutée : la colonne **Informations** affiche l'output du plugin.

   ```shell
   OK: response time 0.268s
   ```   

   De plus, dans le panneau de détails, la tuile **Données de performance** affiche la valeur des métriques pour le dernier contrôle :

   ```shell
   'time'=0.268s;;;0; 'size'=158714B;;;0;
   ```

   Si vous exécutez la commande en ligne de commande (en tant qu'utilisateur **centreon-engine**), vous obtiendrez les mêmes informations, au format suivant :

   ```shell
   OK: response time 0.268s | 'time'=0.268s;;;0; 'size'=158714B;;;0;
   ```

## Personnaliser le comportement du plugin

Pour changer le comportement du plugin (c'est-à-dire modifier les données retournées par celui-ci), utilisez les options correspondant à ce plugin dans la macro **EXTRAOPTIONS** du service **HTTP-Response-Time**. Pour connaître les options de ce connecteur de supervision, reportez-vous à la documentation de [celui-ci](../../procedures/applications-protocol-http.md).

### Procédure générique

1. À la page **Statut des ressources**, cliquez sur le service **HTTP-ResponseTime**, puis, dans le panneau de détails, cliquez sur la roue dentée à côté du nom du service afin d'accéder à sa page de configuration.
2. Dans la section **Macros personnalisées**, entrez les valeurs désirées dans la macro **EXTRAOPTIONS**.
3. Cliquez sur **Sauvegarder**.
4. [Déployez la configuration](docs/monitoring/monitoring-servers/deploying-a-configuration).
5. À la page **Statut des ressources**, cliquez sur le service **HTTP-Response-Time** : dans le panneau de détails, la commande a été mise à jour.
6. Survolez le service puis cliquez sur **Vérification forcée**. La commande est exécutée : la colonne **Informations** affiche l'output du plugin. Dans le panneau de détails, dans la tuile **Données de performance**, les valeurs des métriques sont mises à jour.

## Exemples spécifiques

### Vérifier si le serveur est en maintenance

On souhaite vérifier si notre plateforme Centreon est en maintenance ou non, et avoir un statut CRITIQUE si elle l'est. Pour cela, on utilise le connecteur **HTTP Server** plutôt que le connecteur **Centreon central**.

On vérifie que la page obtenue par le plugin est bien celle demandée, et non une réponse d'erreur ou de maintenance. Nous allons donc utiliser le mode **--mode expected-content** et l'option **--expected-string** (qui permet de spécifier quelle chaîne doit être cherchée dans le contenu de la page afin de confirmer qu'il s'agit de la bonne).

Dans la macro **EXTRAOPTIONS**, entrez la valeur : **--mode expected-content --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'**.

La commande devient :

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'
```

Une fois la configuration déployée et la commande réexécutée, on obtient le résultat suivant :

```shell
OK: HTTP test(s) | 'size'=158714B;;;0; 'time'=0.157s;;;0;
```


```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname 127.0.0.1 --urlpath='/centreon/api/latest/platform/installation/status' --expected-string='"has_upgrade_available":false' --change-short-output='Content test .*~Centreon is in maintenance' --change-short-output='HTTP test.*~Centreon is functional'
```

```shell
CRITICAL: Centreon is in maintenance| 'size'=50B;;;0; 'time'=0.137s;;;0;
```

or

```shell
OK: Centreon is functional| 'size'=51B;;;0; 'time'=0.178s;;;0;
```

### Modifier le message d'output

Puisque la commande vérifie maintenant que la page est conforme ou non, on souhaite modifier le message d'output affiché au cas où le résultat du contrôle est OK. Au lieu de **OK: HTTP test(s)**, on affichera **Expected content found**. Pour cela, on utilise l'option **--change-short-output** dans la macro **EXTRAOPTIONS** du service.

Commande :

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --change-short-output='OK: HTTP test\(s\)~Expected content found~g'
```

Résultat :

```shell
Expected content found | 'size'=158714B;;;0; 'time'=0.262s;;;0;
```

### Ne collecter qu'une seule métrique

Pour le service **HTTP-response-Time**, on décide que seule la métrique **time** nous intéresse. Il est donc inutile de collecter la métrique **size**, qui utilisera de l'espace de stockage pour rien. On peut utiliser l'option **--filter perfdata** ou bien l'option **--filter-perfdata-adv** dans la macro **EXTRAOPTIONS** du service.

Commande :

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --filter-perfdata=time
```

ou :

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --filter-perfdata-adv='(%(label) eq "time")'
OK: HTTP test(s) | 'time'=0.255s;;;0;
```

Résultat :

```shell
OK: HTTP test(s) | 'time'=0.259s;;;0;
```

### Changer le nom d'une métrique

Pour le service **HTTP-response-Time**, on souhaite renommer la métrique **time** en **response-time.** On utilise l'option **--change-perfdata** dans la macro **EXTRAOPTIONS** du service.

Commande :

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'  --change-perfdata='time,response-time'
```

Résultat :

```shell
OK: HTTP test(s) | 'size'=158714B;;;0; 'response-time'=0.287s;;;0;
```

Si vous souhaitez supprimer les données collectées jusque-là pour la métrique **size** qui ne vous intéressait pas, allez à la page **Administration > Paramètres > Données** (Centreon OnPrem uniquement). Recherchez votre hôte/service puis cliquez sur le service **HTTP-response-Time**. Sélectionnez la métrique **size** puis cliquez sur **Supprimer les graphiques**.

### Alerte en cas de valeur supérieure à un seuil

Cette fois-ci, prenons l'exemple d'un serveur Centreon supervisé par un collecteur. Comptons le nombre de workers **php-fpm** en cours d'exécution :

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning=''
```

Pour que le service passe en CRITIQUE lorsque le nombre de workers est supérieur à 5, nous utilisons l'option **--critical='5'** :

Commande :

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5'
```

Résultat :

```shell
CRITICAL: Number of current processes running: 11 | 'nbproc'=11;;0:5;0;
```

Il est également possible d'utiliser **--critical='0:5'**. (Les deux syntaxes ont la même signification.)

Commande :

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='0:5'
```

Résultat :

```shell
CRITICAL: Number of current processes running: 11 | 'nbproc'=11;;0:5;0;
```

### Inverser le seuil : alerte en cas de valeur inférieure au seuil

Il est également possible de passer le service en CRITIQUE lorsque le nombre retourné est moins élevé qu'une certaine valeur. On utilisera la syntaxe suivante : **--critical='5:'**.

Commande :

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5:'
```

Résultat :

```shell
CRITICAL: Number of current processes running: 4 | 'nbproc'=4;;5:;0;
```

### Plages de valeurs

Dans l'exemple suivant, le service passe en statut CRITIQUE quand la métrique est comprise dans une plage de valeurs (entre 0 et 5) :

Commande :

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='@0:5'
```

Résultat :

```shell
CRITICAL: Number of current processes running: 4 | 'nbproc'=4;;@0:5;0;
```

Et dans celui-ci, le service passe en CRITIQUE lorsque la métrique est en-dehors d'une plage de valeurs :

Commande :

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5:15'
```

Résultat :

```shell
CRITICAL: Number of current processes running: 4 | 'nbproc'=4;;5:15;0;
```
