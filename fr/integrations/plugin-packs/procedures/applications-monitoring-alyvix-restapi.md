---
id: applications-monitoring-alyvix-restapi
title: Alyvix Server
---

## Vue d'ensemble

Alyvix Server est un logiciel APM permettant une supervision visuelle et une exécution automatisée de scénarios.
La solution permet de créer des robots émulant le comportement d'utilisateurs finaux, en interagissant visuellement
avec n'importe quelle application Windows ou n'importe quel site ouvert depuis votre navigateur préféré.

Le Plugin-Pack Centreon Alyvix Server permet (par l'interrogation de l'API Rest) de récupérer le statut et
le temps d’exécution d'un ou de multiples scénarios (*testcases*) lancés par Alyvix Server, ainsi que le détail de chaque étape
(*transaction*) du scénario élaboré.

> Le Plugin-Pack *Alyvix Server* n'est **pas** compatible avec la version Open-Source d'Alyvix, la fonctionnalité API Rest
> étant exclusive à la version commerciale de la solution.

## Contenu du Plugin-Pack

### Objets supervisés

* *Testcases* et détail des *transactions* Alyvix Server

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Testcases-->

| Rule name                                    | Description                                                        |
| :------------------------------------------- | :----------------------------------------------------------------- |
| App-Monitoring-Alyvix-Restapi-Testcase-Name  | Discover all the testcases handled by Alyvix Server                |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Testcases-Global-->

* Global (pour chaque *testcase*)

| Metric name                        | Description                                    | Unit |
|:-----------------------------------|:-----------------------------------------------|:-----|
| *testcase_alias*#testcase-state    | Status of the case job execution               |      |
| *testcase_alias*#testcase-duration | Total time of the case job execution           | ms   |

* Par *testcase* (pour chaque *transaction*)

| Metric name                                               | Description                                           | Unit |
|:----------------------------------------------------------|:------------------------------------------------------|:-----|
| *testcase_alias*~*transaction_alias*#transaction-state    | Status of the the transaction job execution           |      |
| *testcase_alias*~*transaction_alias*#transaction-duration | Total time of the transaction job execution           | ms   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Pour intégrer la solution *Alyvix Server* avec Centreon, celle-ci doit être installée et configurée sur un serveur Windows dédié.
Le collecteur Centreon en charge de la supervision des ressources doit également pouvoir joindre l'API Rest d'Alyvix Server sur
le(s) port(s) TCP/80 ou TCP/443.

Pour plus d'informations sur la configuration d'Alyvix Server et l'implémentation des *testcases*, vous pouvez consulter la documentation
officielle: https://www.alyvix.com/learn/\.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les ressources *Alyvix Server*:

```bash
yum install centreon-plugin-centreon-plugin-Applications-Monitoring-Alyvix-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Alyvix Server*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les ressources *Alyvix Server*:

```bash
yum install centreon-plugin-centreon-plugin-Applications-Monitoring-Alyvix-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-monitoring-alyvix-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Alyvix Server*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur Alyvix Server
* Appliquez le Modèle d'Hôte *App-Monitoring-Alyvix-Restapi-custom*

Les Macros d'Hôte ci-après doivent être renseignées le cas échéant:

| Mandatory | Name              | Description                                                                        |
|:----------|:------------------|:-----------------------------------------------------------------------------------|
| X         | ALYVIXAPIPORT     | RestAPI port of the Alyvix Server (Default: '80')                                  |
| X         | ALYVIXAPIPROTOCOL | Protocol used to reach the Alyvix Server (Default: 'http')                         |
| X         | ALYVIXAPIURLPATH  | URL path of the API (Default: '/v0/')                                              |
|           | ALYVIXAPIUSERNAME | Username to authenticate against the API (**not available yet**)                   |
|           | ALYVIXAPIPASSWORD | Password to authenticate against the API (**not available yet**)                   |
|           | EXTRAOPTIONS      | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

> Par défaut, un Service de type "Global" sera déployé, supervisant l'ensemble des *testcases*.
> Utilisez la fonctionnalité **Service Discovery** si vous souhaitez obtenir un Service par *testcase*.

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \
    --plugin=apps::monitoring::alyvix::restapi::plugin \
    --mode=testcases \
    --hostname='10.0.0.1' \
    --proto='http' \
    --port='80' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --filter-testcase='case_app1|case_app2' \
    --critical-testcase-state='%{state} eq "FAILED"' \
    --critical-transaction-state='%{state} eq "FAILED"' \
    --warning-testcase-duration='40000' \
    --critical-testcase-duration='60000' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All test cases are ok | 'case_app1#testcase.duration.milliseconds'=3883ms;;;0; 'case_app1~1_openapp1#transaction.duration.milliseconds'=77ms;;;0;
'case_app2#testcase.duration.milliseconds'=30658ms;;;0; 'case_app2~1_open_app1#transaction.duration.milliseconds'=3ms;;;0;
'case_app2~2_open_app2#transaction.duration.milliseconds'=4ms;;;0; 'case_app2~3_delay#transaction.duration.milliseconds'=76ms;;;0;
'case_app2~4_open_app1_explorer#transaction.duration.milliseconds'=0ms;;;0; 'case_app2~5_open_file#transaction.duration.milliseconds'=10000ms;;;0;
'case_app2~6_close_app1#transaction.duration.milliseconds'=104ms;;;0; 'case_app2~7_close_app2#transaction.duration.milliseconds'=0ms;;;0;
'case_app2~8_check_picture#transaction.duration.milliseconds'=0ms;;;0;
checking test case 'case_app1'
    duration: 3883 ms, state: OK
    transaction '1_openapp1' state: OK, duration: 77 ms
checking test case 'case_app2'
    duration: 30658 ms, state: OK
    transaction '1_open_app1' state: OK, duration: 3 ms
    transaction '2_open_app2' state: OK, duration: 4 ms
    transaction '3_delay' state: OK, duration: 76 ms
    transaction '4_open_app1_explorer' state: OK, duration: 0 ms
    transaction '5_open_file' state: OK, duration: 10000 ms
    transaction '6_close_app1' state: OK, duration: 104 ms
    transaction '7_close_app2' state: OK, duration: 0 ms
    transaction '8_check_picture' state: OK, duration: 0ms
```

Dans cet exemple, le Plugin récupère les statuts et temps d'éxecution des *testcases* (```--plugin=apps::monitoring::alyvix::restapi::plugin --mode=testcases```)
du serveur Alyvix ayant l'adresse IP *10.0.0.1* (--hostname='10.0.0.1'). On choisit ci-desus de n'afficher que les *testcases* nommés *case_app1* et *case_app2*
(```--filter-testcase='case_app1|case_app2'```).

Une alarme WARNING sera ainsi déclenchée si la durée d'éxecution d'un *testcase* est supérieure à 40s -40000ms- (```--warning-testcase-duration='40000'```).

Une alarme CRITICAL sera quant à elle déclenchée dans les cas suivants:
* la durée d'éxecution d'un *testcase* est supérieure à 60s -60000ms- (```--critical-testcase-duration='60000'```)
* le statut général d'un *testcase* exécuté est renvoyé comme "FAILED" (```--critical-testcase-state='%{state} eq "FAILED"'```)
* le statut d'au moins une *transaction* du *testcase* exécuté est renvoyé comme "FAILED" (```--critical-transaction-state='%{state} eq "FAILED"'```)

La liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \
    --plugin=apps::monitoring::alyvix::restapi::plugin \
    --mode=testcases \
    --help
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: 500 Can't connect to 10.0.0.1:80 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to 10.0.0.1:80 |```.

Cette erreur signifie que Centreon n'a pas réussi à se connecter à l'API du serveur Alyvix Server.
Vérifiez que la requête n'est pas bloquée par un outil externe
(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans
la Macro *EXTRAOPTIONS* de l'Hôte ou directement dans la
commande avec l'option ```--proxyurl```.

### J'obtiens le message d'erreur suivant: ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Dans certains cas, et plus spécifiquement lors de l'usage d'un proxy
d'entreprise, le protocole de connexion n'est pas supporté par la libraire *lwp*
utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*.
Pour ce faire, ajoutez l'option ```--http-backend='curl'``` la Macro *EXTRAOPTIONS* de l'Hôte ou directement à la commande.