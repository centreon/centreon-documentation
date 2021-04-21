---
id: applications-cisco-ise-restapi
title: Cisco ISE
---

## Vue d'ensemble

Cisco Identity Service Engine est une solution d'administration de réseaux qui
permet de simplifier le contrôle d'accès réseaux sécurisés.

Le Plugin-Pack Centreon *Cisco ISE* permet (par l'interrogation de l'API REST)
de récupérer le nombre de sessions active et de sessions *profiler service* 
ainsi que le nombre que le nombre de  *postured endpoints*.

## Contenu du Plugin-Pack

### Objets supervisés

* Cisco Identity Service Engine

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Session-->

| Metric name              | Description                             |
|:-------------------------|:----------------------------------------|
| sessions.active.count    | The number of active sessions           |
| endpoints.postured.count | The number of postured endpoints        |
| sessions.profiler.count  | The number of profiler service sessions |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

L'utilisateur renseigné dans la Macro d'Hôte (plus d'information [ici](###Hôte)
doit faire partie des groupes Admin suivants et les informations 
d'identification doivent être stockées dans la base de données interne de Cisco 
ISE (utilisateurs administratifs internes)

* Super Admin

* System Admin

* MnT Admin

De plus, le collecteur Centreon en charge de la supervision des ressources doit
également pouvoir joindre l'API Rest de Cisco ISE sur le(s) port(s) TCP/80 ou 
TCP/443. Plus d'informations sur le site officiel de Cisco :
https://developer.cisco.com/docs/identity-services-engine/3.0/#!introduction-to-monitoring-rest-apis/verifying-a-monitoring-node

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Cisco Identity Service Engine:

```bash
yum install centreon-plugin-Applications-Cisco-Ise-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco ISE* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Cisco Identity Service Engine :

```bash
yum install centreon-plugin-Applications-Cisco-Ise-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Cisco ISE* :

 ```bash
yum install centreon-pack-applications-cisco-ise-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco ISE* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre Cisco Identity Service Engine
* Appliquez le Modèle d'Hôte *Applications-Cisco-Ise-Restapi-custom*

| Mandatory | Name          | Description                                                                        |
|:----------|:--------------|:-----------------------------------------------------------------------------------|
| X         | ISECUSTOMMODE | Mode used by plugin (Default: 'xmlapi')                                            |
| X         | ISEAPIURLPATH | Path to the ISE API (Default: '/admin/API/mnt')                                    |
| X         | ISEAPIPORT    | Port of the ISE API instance (Default: '443')                                      |
| X         | ISEAPIPROTO   | Protocol used by the ISE API (Default : 'https')                                   |
| X         | USERNAME      | Username to access ISE API                                                         |
| X         | PASSWORD      | Password to access ISE API                                                         |
|           | EXTRAOPTIONS  | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \
    --plugin=apps::cisco::ise::restapi::plugin \
    --mode=session \
    --custommode='xmlapi' \
    --hostname='10.0.0.1' \
    --url-path='admin/API/mnt' \
    --username='user' \
    --password='password' \
    --port='443' \
    --proto='https' \
    --filter-counters='' \
    --warning-active-sessions='20' \
    --critical-active-sessions='50' \
    --warning-postured-endpoints='' \
    --critical-postured-endpoints='' \
    --warning-profiler-service-sessions='' \
    --critical-profiler-service-sessions='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie de la forme ci-dessous :

```bash
OK : Active sessions: 10, Postured endpoints: 20, Profiler service sessions: 20 | 'sessions.active.count'=10;0:20;0:50;0; 'endpoints.postured.count'=20;;;0 'sessions.profiler.count'=20;;;0;
```

Dans cet exemple, une alarme de type WARNING est déclenchée si le nombre de 
sessions actives est supérieur à 20. 

Une alarme CRITICAL est quant à elle déclenchée si le nombre de sessions 
actives est supérieur à 50.

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \
    --plugin=apps::cisco::ise::restapi::plugin \
    --mode=session \
    --help
```

Tous les modes disponibles peuvent être affichés via l'option
```--list-mode``` :

```bash
/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \
    --plugin=apps::cisco::ise::restapi::plugin \
    --list-mode 
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: 500 Can't connect to 10.0.0.1:443 |```

Cette erreur signifie que Centreon n'a pas réussi à se connecter à l'API du 
serveur Ciso ISE. Vérifiez que la requête n'est pas bloquée par un outil externe
(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans la
Macro EXTRAOPTIONS de l'Hôte ou directement dans la commande avec l'option 
```--proxyurl='http://proxy.mycompany:8080'```.

### J'obtiens le message d'erreur suivant:  ``UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Dans certains cas, et plus spécifiquement lors de l'usage d'un proxy 
d'entreprise, le protocole de connexion n'est pas supporté par la libraire lwp 
utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP curl. Pour ce faire, 
ajoutez l'option ```--http-backend='curl'``` dans la Macro EXTRAOPTIONS de 
l'Hôte ou directement à la commande.
