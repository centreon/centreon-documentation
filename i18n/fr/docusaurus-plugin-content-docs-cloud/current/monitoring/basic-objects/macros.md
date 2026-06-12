---
id: macros
title: Les macros
---

Une macro est une variable qui définit une valeur utilisée par une commande pour contrôler des hôtes ou des services. Les macros vous permettent de personnaliser les contrôles en définissant une valeur particulière pour chaque hôte ou service contrôlé par le me^me modèle: la valeur de la macro pour un hôte ou service sepécifique est défini par l'utilisateur dans la formulaire de configuration de l'hôte ou du service.

Exemple: Dans la commande suivante (qui contrôle l'uptime d'un serveur Linux), **$HOSTADDRESS$**, **$_SERVICEWARNING$** et **$_HOSTSNMPEXTRAOPTIONS$** sont des macros.

```shell
$CENTREONPLUGINS$/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=uptime --hostname=$HOSTADDRESS$ --snmp-version='$_HOSTSNMPVERSION$' --snmp-community='$_HOSTSNMPCOMMUNITY$' \$_HOSTSNMPEXTRAOPTIONS$ --warning-uptime='$_SERVICEWARNING$' --critical-uptime='$_SERVICECRITICAL$' \$_SERVICEEXTRAOPTIONS$
```

Lorsque la commande est utilisée pour contrôler un hôte ayant comme adresse IP 10.10.10.10 (définie dans le formulaire de configuration de l'hôte), la macro est remplacée par la valeur 10.10.10.10 afin que la commande soit adaptée à cet hôte.

* Une macro d'hôte est utilisée pour définir une variable qui est propre à l'hôte et qui ne changera pas quel que soit le
service interrogé : des identifiants de connexion à l'hôte, un port de connexion pour un service particulier, une
communauté SNMP...
* Une macro de service est utilisée pour définir des paramètres propres à un service : un seuil WARNING/CRITICAL, une partition à interroger...

Une macro commence et se termine toujours par le signe **$**.

## Les macros standard

Les macros standard sont des macros prédéfinies dans le code source des moteurs de supervision. Elles peuvent être utilisées dans toute [commande de contrôle](commands.md). Dans le formulaire de création de commandes de contrôle, vous pouvez insérer des macros en utilisant la liste déroulante et les flèches en bas à droite du champ **Ligne de commande**.

Exemple :

* La macro **$HOSTADDRESS$** permet de récupérer l'adresse IP d'un hôte
* La macro **$CONTACTEMAIL$** permet de récupérer l'adresse mail d'un contact.

> Une [liste complète des macros](#liste-des-macros) est disponible sur cette page ainsi qu'une description de ce qu'elles représentent.

## Les macros personnalisées

### Définition

Les macros personnalisées sont des macros définies par l'utilisateur et utilisées dans une [commande de contrôle](commands.md).

Les macros personnalisées commencent par \$_HOST pour les macros personnalisées d'hôte et par \$_SERVICE pour les macros personnalisées de service.

> Si vous aviez l'habitude d'utiliser Centreon OnPrem ou Nagios, vous avez peut-être utilisé des arguments ($ARG1, \$ARG2...). Ceux-ci sont dépréciés dans Centreon Cloud : utilisez des macros personnalisées. Les champs concernant les arguments n'aparaissent ici que pour assurer la compatibilité pour les clients OnPrem migrant vers Centreon Cloud.

### Exemple

Dans une commande de contrôle d'hôte, les macros suivantes sont utilisées : **$_HOSTUSERLOGIN$**, **$_HOSTUSERPASSWORD$**. Lorsqu'un hôte est configuré, les valeurs de ces macros sont définies :

![image](../../assets/configuration/01hostmacros.png)

Dans une commande de contrôle de service, les macros suivantes sont utilisées : **$_SERVICEPARTITION$**, **$_SERVICEWARNING$**, **$_SERVICECRITICAL$**. Lorsqu'un service est configuré, les valeurs de ces macros sont définies :

![image](../../assets/configuration/01servicemacros.png)

### Cas particulier

Les champs **Communauté SNMP** et **Version** présents au sein d'une fiche d'hôte génèrent automatiquement les macros
personnalisées suivantes : \$_HOSTSNMPCOMMUNITY$ et \$_HOSTSNMPVERSION$.

## Macros dans les macros

Lorsque Centreon Engine évalue une commande, la résolution des macros s'effectue en deux passes successives.

**Niveau 1 — Niveau de la commande** : les macros présentes directement dans la ligne de commande sont résolues :

- Une macro standard ou personnalisée résolue est remplacée par sa valeur.
- Une macro non résolue ou vide est remplacée par une chaîne vide.

**Niveau 2 — Niveau de la valeur de macro** : si la valeur produite au niveau 1 contient elle-même des tokens ressemblant à des macros, une seconde passe s'applique à cette valeur :

- Une macro résolue est remplacée par sa valeur.
- Une macro non résolue ou vide est **conservée telle quelle** (non supprimée).

### Syntaxe d'échappement avec doubles accolades

Utilisez le format `{{$MACRO$}}` lorsque vous souhaitez que les macros non résolues dans une valeur soient remplacées par une chaîne vide plutôt que conservées :

- Au niveau 1 ou 2 : une macro résolue est remplacée par sa valeur et les doubles accolades sont supprimées.
- Au niveau 1 ou 2 : une macro non résolue ou vide est remplacée par une chaîne vide et les doubles accolades sont supprimées.

### Cas d'usage : syntaxes de plugins tiers

Certains plugins de supervision utilisent des caractères `$` dans leur propre syntaxe d'arguments, qui ne sont pas des délimiteurs de macros Centreon. Un exemple courant est la syntaxe NSClient++, qui utilise des tokens tels que `${name}`, `${state}`, `${problem_list}` ou `${drive}`.

Ces macros Centreon n'étant pas résolues, le comportement du niveau 2 les conserve telles quelles, ce qui permet au plugin de recevoir la ligne de commande correcte.

> Si vous définissez une valeur de macro contenant de tels tokens et exportez la configuration avec une version de Engine n'implémentant pas le modèle à deux niveaux, ces tokens seront supprimés et le plugin recevra une ligne de commande mal formée.

:::

## Liste des macros

The following is an exhaustive list of macros by resource type, each type of resource also has a description section. 

> Some macros may have a number next to them (i.e. **(2)**). The [notes section](#notes) at the end of this page further explains possible restrictions or recommendations related to these macros.

### Macros d'hôte

| Macro Name [(3)](#notes)             | Service Checks | Host Checks       | Service Event Handlers | Host Event Handlers |
|--------------------------------------|----------------|-------------------|------------------------|---------------------|
| \$HOSTNAME\$                         | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTDISPLAYNAME\$                  | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTALIAS\$                        | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTADDRESS\$                      | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTSTATE\$                        | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$HOSTSTATEID\$                      | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$LASTHOSTSTATE\$                    | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTSTATEID\$                  | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTSTATETYPE\$                    | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$HOSTATTEMPT\$                      | Yes            | Yes               | Yes                    | Yes                 |
| \$MAXHOSTATTEMPTS\$                  | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTEVENTID\$                      | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTEVENTID\$                  | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTPROBLEMID\$                    | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTPROBLEMID\$                | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTLATENCY\$                      | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTEXECUTIONTIME\$                | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$HOSTDURATION\$                     | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTDURATIONSEC\$                  | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTDOWNTIME\$                     | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTPERCENTCHANGE\$                | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTGROUPNAME\$                    | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTGROUPNAMES\$                   | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTCHECK\$                    | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTSTATECHANGE\$              | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTUP\$                       | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTDOWN\$                     | Yes            | Yes               | Yes                    | Yes                 |
| \$LASTHOSTUNREACHABLE\$              | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTOUTPUT\$                       | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$LONGHOSTOUTPUT\$                   | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$HOSTPERFDATA\$                     | Yes            | Yes [(1)](#notes) | Yes                    | Yes                 |
| \$HOSTCHECKCOMMAND\$                 | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTACTIONURL\$                    | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTNOTESURL\$                     | Yes            | Yes               | Yes                    | Yes                 |
| \$HOSTNOTES\$                        | Yes            | Yes               | Yes                    | Yes                 |
| \$TOTALHOSTSERVICES\$                | Yes            | Yes               | Yes                    | Yes                 |
| \$TOTALHOSTSERVICESOK\$              | Yes            | Yes               | Yes                    | Yes                 |
| \$TOTALHOSTSERVICESWARNING\$         | Yes            | Yes               | Yes                    | Yes                 |
| \$TOTALHOSTSERVICESUNKNOWN\$         | Yes            | Yes               | Yes                    | Yes                 |
| \$TOTALHOSTSERVICESCRITICAL\$        | Yes            | Yes               | Yes                    | Yes                 |


### Description des macros d'hôtes (3)

- **\$HOSTNAME\\$** : Nom court de l'hôte (ex. : "biglinuxbox"). Cette valeur vient de la directive `host_name` dans la définition de l'hôte.  
- **\$HOSTDISPLAYNAME\\$** : Nom d'affichage alternatif pour l'hôte. Cette valeur vient de la directive `display_name` dans la définition de l'hôte.  
- **\$HOSTALIAS\\$** : Nom long ou description de l'hôte. Cette valeur vient de la directive `alias` dans la définition de l'hôte.  
- **\$HOSTADDRESS\\$** : Adresse de l'hôte. Cette valeur vient de la directive `address` dans la définition de l'hôte.  
- **\$HOSTSTATE\\$** : Chaîne de caractères indiquant le statut actuel de l'hôte ("DISPONIBLE", "INDISPONIBLE" ou "INJOIGNABLE").  
- **\$HOSTSTATEID\\$** : Numéro correspondant à le statut actuel de l'hôte : 0 = DISPONIBLE, 1 = INDISPONIBLE, 2 = INJOIGNABLE.  
- **\$LASTHOSTSTATE\\$** : Chaîne de caractères indiquant le dernier statut de l'hôte ("DISPONIBLE", "INDISPONIBLE" ou "INJOIGNABLE").  
- **\$LASTHOSTSTATEID\\$** : Numéro correspondant au dernier statut de l'hôte : 0 = DISPONIBLE, 1 = INDISPONIBLE, 2 = INJOIGNABLE.  
- **\$HOSTSTATETYPE\\$** : Chaîne de caractères indiquant le type de statut pour la vérification actuelle de l'hôte ("HARD" ou "SOFT"). Les statuts "soft" surviennent lors qu'un incident vient d'être détecté et que ce dernier doit être confirmé. Les status "hard" lorsque le statut est confirmé.  
- **\$HOSTATTEMPT\\$** : Numéro de la tentative actuelle de vérification de l'hôte. Par exemple, s'il s'agit de la deuxième tentative, cette valeur sera 2. Utile dans les gestionnaires d'événements pour des statuts "soft" qui doivent agir d'une manière spécifique selon le nombre de tentatives de vérification de l'hôte.  
- **\$MAXHOSTATTEMPTS\\$** : Nombre maximal de tentatives de vérification défini pour cet hôte. Utile pour les scripts réagissant aux états "soft" qui doivent agir d'une manière spécifique selon le nombre de tentatives de vérification de l'hôte.  
- **\$HOSTEVENTID\\$** : Identifiant unique global associé au statut actuel de l'hôte. Incrémenté à chaque changement de statut de l'hôte (ou d'un service). Si aucun changement de statut n'a eu lieu, cette valeur est 0.  
- **\$LASTHOSTEVENTID\\$** : Identifiant unique global de l'événement précédent pour cet hôte.  
- **\$HOSTPROBLEMID\\$** : Identifiant unique global associé au statut problème actuel de l'hôte. Incrémenté de un lorsque l'hôte passe d'un statut UP à un statut de problème. Ne change pas si l'hôte passe entre deux états de problème (ex. si l'hôte passe de INDISPONIBLE à INJOIGNABLE). Sert notamment à créer automatiquement des tickets lors de la détection d'un problème.  
- **\$LASTHOSTPROBLEMID\\$** : Identifiant de problème précédent. Peut être utilisé pour clôturer automatiquement les tickets quand l'hôte repasse au statut DISPONIBLE.  
- **\$HOSTLATENCY\\$** : Nombre (flottant) de secondes de retard d'une vérification planifiée par rapport à l'heure prévue. Par exemple, un écart de 2,0 secondes si prévu à 03:14:15 et exécuté à 03:14:17. Les vérifications à la demande ont une latence de 0 seconde.  
- **\$HOSTEXECUTIONTIME\\$** : Nombre (flottant) de secondes que la vérification de l'hôte a pris pour s'exécuter.  
- **\$HOSTDURATION\\$** : Durée pendant laquelle l'hôte est resté dans son statut actuel, au format "XXh YYm ZZs" (heures, minutes et secondes).  
- **\$HOSTDURATIONSEC\\$** : Nombre de secondes depuis que l'hôte est entré dans son statut actuel.  
- **\$HOSTDOWNTIME\\$** : Nombre indiquant la "profondeur de maintenance" actuelle des périodes de maintenance planifiées. Supérieure à 0 si une indisponibilité est en cours, sinon 0.  
- **\$HOSTPERCENTCHANGE\\$** : Pourcentage en nombre flottant de changement de statut détecté pour l'hôte. Utilisé pour la détection de flapping (bagotement).  
- **\$HOSTGROUPNAME\\$** : Nom court du groupe d'hôtes auquel appartient cet hôte. Provient de la directive hostgroup_name. Si l'hôte appartient à plusieurs groupes, ce champ ne contiendra que le nom d'un seul groupe.  
- **\$HOSTGROUPNAMES\\$** : Liste de noms courts, séparés par des virgules, des groupes d'hôtes auxquels appartient cet hôte.  
- **\$LASTHOSTCHECK\\$** : Timestamp (format `time_t`, en secondes depuis l'epoch UNIX) de la dernière vérification de l'hôte.  
- **\$LASTHOSTSTATECHANGE\\$** : Timestamp du dernier changement de statut de l'hôte.  
- **\$LASTHOSTUP\\$** : Timestamp de la dernière détection du statut DISPONIBLE de l'hôte.  
- **\$LASTHOSTDOWN\\$** : Timestamp de la dernière détection du statut INDISPONIBLE de l'hôte.  
- **\$LASTHOSTUNREACHABLE\\$** : Timestamp de la dernière détection du statut INJOIGNABLE de l'hôte.  
- **\$HOSTOUTPUT\\$** : Première ligne du résultat de la dernière vérification de l'hôte (ex. : "Ping OK").  
- **\$LONGHOSTOUTPUT\\$** : Texte complet (à l'exception de la première ligne) du dernier résultat de vérification de l'hôte.  
- **\$HOSTPERFDATA\\$** : Données de performance éventuellement retournées par la dernière vérification de l'hôte.  
- **\$HOSTCHECKCOMMAND\\$** : Nom de la commande (et ses arguments éventuels) utilisée pour vérifier l'hôte.  
- **\$HOSTACTIONURL\\$** : URL d'action pour l'hôte. Peut contenir d'autres macros (ex. : \$HOSTNAME\$), utile pour passer le nom de l'hôte à une page web.  
- **\$HOSTNOTESURL\\$** : URL des notes pour l'hôte. Peut contenir d'autres macros comme \$HOSTNAME\$, utile pour passer le nom de l'hôte à une page web.   
- **\$HOSTNOTES\\$** : Notes associées à l'hôte. Peut inclure d'autres macros pour afficher des informations spécifiques.  
- **\$TOTALHOSTSERVICES\\$** : Nombre total de services associés à l'hôte.  
- **\$TOTALHOSTSERVICESOK\\$** : Nombre de services associés à l'hôte qui sont dans un statut OK.  
- **\$TOTALHOSTSERVICESWARNING\\$** : Nombre de services associés à l'hôte qui sont dans un statut ALERTE.  
- **\$TOTALHOSTSERVICESUNKNOWN\\$** : Nombre de services associés à l'hôte qui sont dans un statut INCONNU.  
- **\$TOTALHOSTSERVICESCRITICAL\\$** : Nombre de services associés à l'hôte qui sont dans un statut CRITIQUE.  

### Macros de groupes d'hôtes

| Macro Name [(5)](#notes)      | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|-------------------------------|----------------|-------------|------------------------|---------------------|
| \$HOSTGROUPALIAS\$            | Yes            | Yes         | Yes                    | Yes                 |
| \$HOSTGROUPMEMBERS\$          | Yes            | Yes         | Yes                    | Yes                 |
| \$HOSTGROUPNOTES\$            | Yes            | Yes         | Yes                    | Yes                 |
| \$HOSTGROUPNOTESURL\$         | Yes            | Yes         | Yes                    | Yes                 |
| \$HOSTGROUPACTIONURL\$        | Yes            | Yes         | Yes                    | Yes                 |

### Description des macros de groupes d'hôtes (5)

- **\$HOSTGROUPALIAS\\$** : Le nom long / alias soit  
  - 1) du nom du groupe d'hôtes passé comme argument de macro à la demande, soit  
  - 2) du groupe d'hôtes principal associé à l'hôte actuel (s'il n'est pas utilisé dans le contexte d'une macro à la demande). Cette valeur est issue de la directive alias dans la définition du groupe d'hôtes.
- **\$HOSTGROUPMEMBERS\\$** : Une liste séparée par des virgules de tous les hôtes appartenant soit  
  - 1) au nom du groupe d'hôtes passé comme argument de macro à la demande, soit  
  - 2) au groupe d'hôtes principal associé à l'hôte actuel (s'il n'est pas utilisé dans le contexte d'une macro à la demande).
- **\$HOSTGROUPNOTES\\$** : Les notes associées soit  
  - 1) au nom du groupe d'hôtes passé comme argument de macro à la demande, soit  
  - 2) au groupe d'hôtes principal associé à l'hôte actuel (s'il n'est pas utilisé dans le contexte d'une macro à la demande). Cette valeur est issue de la directive notes dans la définition du groupe d'hôtes.
- **\$HOSTGROUPNOTESURL\\$** : L'URL des notes associée soit  
  - 1) au nom du groupe d'hôtes passé comme argument de macro à la demande, soit  
  - 2) au groupe d'hôtes principal associé à l'hôte actuel (s'il n'est pas utilisé dans le contexte d'une macro à la demande). Cette valeur est issue de la directive notes_url dans la définition du groupe d'hôtes.
- **\$HOSTGROUPACTIONURL\\$** : L'URL d'action associée soit  
  - 1) au nom du groupe d'hôtes passé comme argument de macro à la demande, soit  
  - 2) au groupe d'hôtes principal associé à l'hôte actuel (s'il n'est pas utilisé dans le contexte d'une macro à la demande). Cette valeur est issue de la directive action_url dans la définition du groupe d'hôtes.

### Macros des service

| Macro Name                              | Service Checks    | Host Checks | Service Event Handlers | Host Event Handlers |
|-----------------------------------------|-------------------|-------------|------------------------|---------------------|
| \$SERVICEDESC\$                         | Yes               | No          | Yes                    | No                  |
| \$SERVICEDISPLAYNAME\$                  | Yes               | No          | Yes                    | No                  |
| \$SERVICESTATE\$                        | Yes [(2)](#notes) | No          | Yes                    | No                  |
| \$SERVICESTATEID\$                      | Yes [(2)](#notes) | No          | Yes                    | No                  |
| \$LASTSERVICESTATE\$                    | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICESTATEID\$                  | Yes               | No          | Yes                    | No                  |
| \$SERVICESTATETYPE\$                    | Yes               | No          | Yes                    | No                  |
| \$SERVICEATTEMPT\$                      | Yes               | No          | Yes                    | No                  |
| \$MAXSERVICEATTEMPTS\$                  | Yes               | No          | Yes                    | No                  |
| \$SERVICEISVOLATILE\$                   | Yes               | No          | Yes                    | No                  |
| \$SERVICEEVENTID\$                      | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICEEVENTID\$                  | Yes               | No          | Yes                    | No                  |
| \$SERVICEPROBLEMID\$                    | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICEPROBLEMID\$                | Yes               | No          | Yes                    | No                  |
| \$SERVICELATENCY\$                      | Yes               | No          | Yes                    | No                  |
| \$SERVICEEXECUTIONTIME\$                | Yes [(2)](#notes) | No          | Yes                    | No                  |
| \$SERVICEDURATION\$                     | Yes               | No          | Yes                    | No                  |
| \$SERVICEDURATIONSEC\$                  | Yes               | No          | Yes                    | No                  |
| \$SERVICEDOWNTIME\$                     | Yes               | No          | Yes                    | No                  |
| \$SERVICEPERCENTCHANGE\$                | Yes               | No          | Yes                    | No                  |
| \$SERVICEGROUPNAME\$                    | Yes               | No          | Yes                    | No                  |
| \$SERVICEGROUPNAMES\$                   | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICECHECK\$                    | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICESTATECHANGE\$              | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICEOK\$                       | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICEWARNING\$                  | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICEUNKNOWN\$                  | Yes               | No          | Yes                    | No                  |
| \$LASTSERVICECRITICAL\$                 | Yes               | No          | Yes                    | No                  |
| \$SERVICEOUTPUT\$                       | Yes [(2)](#notes) | No          | Yes                    | No                  |
| \$LONGSERVICEOUTPUT\$                   | Yes [(2)](#notes) | No          | Yes                    | No                  |
| \$SERVICEPERFDATA\$                     | Yes [(2)](#notes) | No          | Yes                    | No                  |
| \$SERVICECHECKCOMMAND\$                 | Yes               | No          | Yes                    | No                  |
| \$SERVICEACKAUTHOR\$ [(8)](#notes)      | No                | No          | No                     | No                  |
| \$SERVICEACKAUTHORNAME\$ [(8)](#notes)  | No                | No          | No                     | No                  |
| \$SERVICEACKAUTHORALIAS\$ [(8)](#notes) | No                | No          | No                     | No                  |
| \$SERVICEACKCOMMENT\$ [(8)](#notes)     | No                | No          | No                     | No                  |
| \$SERVICEACTIONURL\$                    | Yes               | No          | Yes                    | No                  |
| \$SERVICENOTESURL\$                     | Yes               | No          | Yes                    | No                  |
| \$SERVICENOTES\$                        | Yes               | No          | Yes                    | No                  |

### Description des macros de services

- **\$SERVICEDESC\\$** : Le nom long / la description du service (ex. "Site Web Principal"). Cette valeur est issue de la directive service_description dans la définition du service.
- **\$SERVICEDISPLAYNAME\\$** : Un nom d'affichage alternatif pour le service. Cette valeur est issue de la directive display_name dans la définition du service.
- **\$SERVICESTATE\\$** : Une chaîne de caractères indiquant l'état actuel du service ("OK", "ALERTE", "INCONNU" ou "CRITIQUE").
- **\$SERVICESTATEID\\$** : Un nombre correspondant à l'état actuel du service : 0=OK, 1=ALERTE, 2=CRITIQUE, 3=INCONNU.
- **\$LASTSERVICESTATE\\$**: Une chaîne  de caractères  indiquant le dernier état du service ("OK", "ALERTE", "INCONNU" ou "CRITIQUE").
- **\$LASTSERVICESTATEID\\$** : Un nombre correspondant au dernier état du service : 0=OK, 1=ALERTE, 2=CRITIQUE, 3=INCONNU.
- **\$SERVICESTATETYPE\\$** : Une chaîne  de caractères  indiquant le type d'état pour la vérification actuelle du service ("HARD" ou "SOFT"). Les états SOFT apparaissent lorsque des vérifications de service retournent un état non-OK et sont en cours de réessai. Les états HARD se produisent lorsque les vérifications ont atteint le nombre maximal de tentatives.
- **\$SERVICEATTEMPT\\$** : Le numéro de tentative actuelle de vérification du service. Par exemple, s'il s'agit de la deuxième tentative, cette valeur sera deux. Ce numéro est surtout utile dans les gestionnaires d'événements pour les états "SOFT" qui réagissent en fonction du nombre de tentatives.
- **\$MAXSERVICEATTEMPTS\\$** : Le nombre maximal de tentatives défini pour le service actuel. Utile dans les gestionnaires d'événements pour les états "SOFT" qui déclenchent des actions en fonction du nombre de tentatives.
- **\$SERVICEISVOLATILE\\$** : Indique si le service est marqué comme volatile ou non : 0 = non volatile, 1 = volatile.
- **\$SERVICEEVENTID\\$**: Un numéro unique global associé à l'état actuel du service. À chaque changement d'état d'un service (ou hôte), ce numéro d'événement global est incrémenté. Si aucun changement d'état n'a eu lieu, cette valeur est 0.
- **\$LASTSERVICEEVENTID\\$** : Le numéro d'événement (unique global) précédent attribué au service.
- **\$SERVICEPROBLEMID\\$** : Un numéro unique global associé à l'état de problème actuel du service. À chaque transition de l'état OK vers un état problématique, ce numéro est incrémenté. Cette macro est non nulle si le service est actuellement dans un état non-OK. Les transitions entre états non-OK (ex. ALERTE vers CRITIQUE) ne modifient pas ce numéro. Si le service est actuellement en état OK, cette macro vaut zéro. Combiné à des gestionnaires d'événements, cela peut servir à ouvrir automatiquement des tickets d'incident.
- **\$LASTSERVICEPROBLEMID\\$** : Le précédent numéro de problème (unique global) attribué au service. Combiné aux gestionnaires d'événements, cela peut permettre de fermer automatiquement des tickets lors du retour à l'état OK.
- **\$SERVICELATENCY\\$** : Un nombre flottant indiquant le retard (en secondes) d'une vérification de service par rapport à l'heure prévue. Par exemple, si une vérification devait se produire à 03:14:15 mais a eu lieu à 03:14:17, la latence est de 2.0 secondes.
- **\$SERVICEEXECUTIONTIME\\$** : Un nombre flottant indiquant le temps (en secondes) nécessaire pour exécuter la dernière vérification du service.
- **\$SERVICEDURATION\\$** : Une chaîne de caractères indiquant la durée pendant laquelle le service est resté dans son état actuel. Format : "XXh YYm ZZs", pour heures, minutes et secondes.
- **\$SERVICEDURATIONSEC\\$** : Un nombre indiquant le nombre de secondes pendant lesquelles le service est resté dans son état actuel.
- **\$SERVICEDOWNTIME\\$** : Un nombre indiquant la "profondeur de maintenance" actuelle du service. Si le service est actuellement en période d'indisponibilité planifiée, cette valeur sera supérieure à zéro. Sinon, elle vaudra zéro.
- **\$SERVICEPERCENTCHANGE\\$** : Un nombre flottant indiquant le pourcentage de variation d'état du service. Le pourcentage est utilisé par l'algorithme de détection de flapping.
- **\$SERVICEGROUPNAME\\$** : Le nom court du groupe de services auquel ce service appartient. Cette valeur est issue de la directive servicegroup_name dans la définition du groupe. Si le service appartient à plusieurs groupes, cette macro n'en contiendra qu'un des groupes.
- **\$SERVICEGROUPNAMES\\$** : Une liste des noms courts séparés par des virgules de tous les groupes de services auxquels ce service appartient.
- **\$LASTSERVICECHECK\\$** : Un timestamp au format time_t (secondes depuis l'epoch UNIX) indiquant la dernière fois où une vérification du service a été effectuée.
- **\$LASTSERVICESTATECHANGE\\$** : Un timestamp au format time_t (secondes depuis l'epoch UNIX) indiquant la dernière fois où l'état du service a changé.
- **\$LASTSERVICEOK\\$** : Un timestamp au format time_t (secondes depuis l'epoch UNIX) indiquant la dernière fois où le service a été détecté en état OK.
- **\$LASTSERVICEWARNING\\$** : Un timestamp au format time_t (secondes depuis l'epoch UNIX) indiquant la dernière fois où le service a été détecté en état ALERTE.
- **\$LASTSERVICEUNKNOWN\\$** : Un timestamp au format time_t (secondes depuis l'epoch UNIX) indiquant la dernière fois où le service a été détecté en état INCONNU.
- **\$LASTSERVICECRITICAL\\$** : Un timestamp au format time_t (secondes depuis l'epoch UNIX) indiquant la dernière fois où le service a été détecté en état CRITIQUE.
- **\$SERVICEOUTPUT\\$** : La première ligne de sortie du dernier contrôle de service (ex. "Ping OK").
- **\$LONGSERVICEOUTPUT\\$** : Le texte complet (hors première ligne) de la sortie du dernier contrôle de service.
- **\$SERVICEPERFDATA\\$** : Cette macro contient les données de performance éventuellement retournées par la dernière vérification du service.
- **\$SERVICECHECKCOMMAND\\$** : Cette macro contient le nom de la commande (et ses arguments) utilisée pour vérifier le service.
- **\$SERVICEACKAUTHOR\\$** [(8)](#notes) : Une chaîne contenant le nom de l'utilisateur ayant accusé réception du problème. Cette macro n'est valide que dans les notifications où \$NOTIFICATIONTYPE\$ vaut "ACKNOWLEDGEMENT".
- **\$SERVICEACKAUTHORNAME\\$** [(8)](#notes) : Une chaîne contenant le nom court du contact (si applicable) ayant accusé réception du problème. Valide uniquement si \$NOTIFICATIONTYPE\$ = "ACKNOWLEDGEMENT".
- **\$SERVICEACKAUTHORALIAS\\$** [(8)](#notes) : Une chaîne contenant l'alias du contact (si applicable) ayant accusé réception du problème. Valide uniquement si \$NOTIFICATIONTYPE\$ = "ACKNOWLEDGEMENT".
- **\$SERVICEACKCOMMENT\\$** [(8)](#notes) : Une chaîne contenant le commentaire d'accusé de réception saisi par l'utilisateur. Valide uniquement si \$NOTIFICATIONTYPE\$ = "ACKNOWLEDGEMENT".
- **\$SERVICEACTIONURL\\$** : URL d'action pour le service. Cette macro peut contenir d'autres macros (ex. \$HOSTNAME\$ ou \$SERVICEDESC\$), ce qui permet de transmettre le nom du service à une page web.
- **\$SERVICENOTESURL\\$** : URL des notes pour le service. Cette macro peut contenir d'autres macros (ex. \$HOSTNAME\$ ou \$SERVICEDESC\$), ce qui permet de transmettre le nom du service à une page web.
- **\$SERVICENOTES\\$** : Notes pour le service. Cette macro peut contenir d'autres macros (ex. \$HOSTNAME\$ ou \$SERVICESTATE\$), ce qui permet d'ajouter des informations spécifiques à l'état dans la description.

### Macros de groupe de services

| Macro Name [(6)](#notes)  | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|---------------------------|----------------|-------------|------------------------|---------------------|
| \$SERVICEGROUPALIAS\$     | Yes            | Yes         | Yes                    | Yes                 |
| \$SERVICEGROUPMEMBERS\$   | Yes            | Yes         | Yes                    | Yes                 |

### Description des macros de groupes de services (6)

- **\$SERVICEGROUPALIAS\\$**: Le nom long / alias 
  - 1) soit du nom du groupe de services passé comme argument de macro sur demande,
  - 2) soit du groupe de services principal associé au service actuel (s'il n'est pas utilisé dans le contexte d'une macro sur demande). Cette valeur est issue de la directive alias dans la définition du groupe de services.
- **\$SERVICEGROUPMEMBERS\\$**: Une liste séparée par des virgules de tous les services appartenant
  - 1) soit au nom du groupe de services passé comme argument de macro sur demande,  
  - 2) soit au groupe de services principal associé au service actuel (s'il n'est pas utilisé dans le contexte d'une macro sur demande).

### Macros de contat

| Macro Name          | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|---------------------|----------------|-------------|------------------------|---------------------|
| \$CONTACTNAME\$     | No             | No          | No                     | No                  |
| \$CONTACTALIAS\$    | No             | No          | No                     | No                  |
| \$CONTACTEMAIL\$    | No             | No          | No                     | No                  |
| \$CONTACTPAGER\$    | No             | No          | No                     | No                  |
| \$CONTACTADDRESSn\$ | No             | No          | No                     | No                  |

### Description des macros de contacts

- **\$CONTACTNAME\$** : Nom court du contact (ex. « jdoe ») qui est notifié d'un problème hôte ou service. Cette valeur provient de la directive `contact_name` dans la définition du contact.
- **\$CONTACTALIAS\$** : Nom complet ou description du contact (ex. « John Doe ») qui est notifié. Cette valeur provient de la directive `alias` dans la définition du contact.
- **\$CONTACTEMAIL\$** : Adresse e-mail du contact notifié. Cette valeur provient de la directive `email` dans la définition du contact.
- **\$CONTACTPAGER\$** : Numéro/adresse de téléavertisseur du contact notifié. Cette valeur provient de la directive `pager` dans la définition du contact.
- **\$CONTACTADDRESSn\$** : Adresse du contact notifié. Chaque contact peut avoir six adresses différentes (en plus de l'adresse e-mail et du téléavertisseur). Les macros correspondantes sont \$CONTACTADDRESS1$ à \$CONTACTADDRESS6$. Cette valeur provient de la directive `addressx` dans la définition du contact.
- **\$CONTACTGROUPNAME\$** : Nom court du groupe de contacts auquel appartient ce contact. Cette valeur provient de la directive `contactgroup_name` dans la définition du groupe de contacts. Si le contact appartient à plusieurs groupes, cette macro contiendra le nom de l'un d'entre eux seulement.
- **\$CONTACTGROUPNAMES\$** : Liste des noms courts séparés par des virgules de tous les groupes de contacts auxquels ce contact appartient.

### Macros de groupes de contacts

| Macro Name [(7)](#notes)  | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|---------------------------|----------------|-------------|------------------------|---------------------|
| \$CONTACTGROUPALIAS\$     | Yes            | Yes         | Yes                    | Yes                 |
| \$CONTACTGROUPMEMBERS\$   | Yes            | Yes         | Yes                    | Yes                 |

### Description des macros de groupes de contacts (5)

- **\$CONTACTGROUPALIAS\$** [(7)](#notes) : Nom complet / alias 
  - 1) soit du groupe de contacts transmis comme argument à la macro sur demande, soit  
  - 2) soit du groupe de contacts principal associé au contact actuel (si la macro n'est pas utilisée dans le contexte d'une macro sur demande). Cette valeur provient de la directive `alias` dans la définition du groupe de contacts.
- **\$CONTACTGROUPMEMBERS\$** [(7)](#notes) : Liste séparée par des virgules de tous les contacts appartenant
  - 1) soit au groupe de contacts transmis comme argument à la macro sur demande, soit  
  - 2) soit au groupe de contacts principal associé au contact actuel (si la macro n'est pas utilisée dans le contexte d'une macro sur demande).

### Macros de résumés

| Macro Name [(10)](#notes)          | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|------------------------------------|----------------|-------------|------------------------|---------------------|
| \$TOTALHOSTSUP\$                   | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALHOSTSDOWN\$                 | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALHOSTSUNREACHABLE\$          | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALHOSTSDOWNUNHANDLED\$        | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALHOSTSUNREACHABLEUNHANDLED\$ | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALHOSTPROBLEMS\$              | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALHOSTPROBLEMSUNHANDLED\$     | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESOK\$                | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESWARNING\$           | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESCRITICAL\$          | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESUNKNOWN\$           | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESWARNINGUNHANDLED\$  | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESCRITICALUNHANDLED\$ | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICESUNKNOWNUNHANDLED\$  | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICEPROBLEMS\$           | Yes            | Yes         | Yes                    | Yes                 |
| \$TOTALSERVICEPROBLEMSUNHANDLED\$  | Yes            | Yes         | Yes                    | Yes                 |

### Description des macros de résumés

- **\$TOTALHOSTSUP\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état DISPONIBLE.
- **\$TOTALHOSTSDOWN\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état INDISPONIBLE.
- **\$TOTALHOSTSUNREACHABLE\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état INJOIGNABLE.
- **\$TOTALHOSTSDOWNUNHANDLED\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état INDISPONIBLE qui ne sont pas actuellement « pris en charge ». Les problèmes d'hôtes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.
- **\$TOTALHOSTSUNREACHABLEUNHANDLED\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état INJOIGNABLE et qui ne sont pas « pris en charge ». Les problèmes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.
- **\$TOTALHOSTPROBLEMS\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état INDISPONIBLE ou INJOIGNABLE.
- **\$TOTALHOSTPROBLEMSUNHANDLED\$** : Cette macro reflète le nombre total d'hôtes actuellement dans un état INDISPONIBLE ou INJOIGNABLE et qui ne sont pas « pris en charge ». Les problèmes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.
- **\$TOTALSERVICESOK\$** : Cette macro reflète le nombre total de services actuellement dans un état OK.
- **\$TOTALSERVICESWARNING\$** : Cette macro reflète le nombre total de services actuellement dans un état ALERTE.
- **\$TOTALSERVICESCRITICAL\$** : Cette macro reflète le nombre total de services actuellement dans un état CRITIQUE.
- **\$TOTALSERVICESUNKNOWN\$** : Cette macro reflète le nombre total de services actuellement dans un état INCONNU.
- **\$TOTALSERVICESWARNINGUNHANDLED\$** : Cette macro reflète le nombre total de services actuellement dans un état ALERTE et qui ne sont pas « pris en charge ». Les problèmes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.
- **\$TOTALSERVICESCRITICALUNHANDLED\$** : Cette macro reflète le nombre total de services actuellement dans un état CRITIQUE et qui ne sont pas « pris en charge ». Les problèmes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.
- **\$TOTALSERVICESUNKNOWNUNHANDLED\$** : Cette macro reflète le nombre total de services actuellement dans un état INCONNU et qui ne sont pas « pris en charge ». Les problèmes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.
- **\$TOTALSERVICEPROBLEMS\$** : Cette macro reflète le nombre total de services actuellement dans un état ALERTE, CRITIQUE ou INCONNU.
- **\$TOTALSERVICEPROBLEMSUNHANDLED\$** : Cette macro reflète le nombre total de services actuellement dans un état ALERTE, CRITIQUE ou INCONNU et qui ne sont pas « pris en charge ». Les problèmes non pris en charge sont ceux qui ne sont pas acquittés, qui ne sont pas en maintenance planifiée, et pour lesquels les vérifications sont activées.

### Macros de notifications

| Macro Name                    | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|-------------------------------|----------------|-------------|------------------------|---------------------|
| \$NOTIFICATIONTYPE\$          | No             | No          | No                     | No                  |
| \$NOTIFICATIONRECIPIENTS\$    | No             | No          | No                     | No                  |
| \$NOTIFICATIONISESCALATED\$   | No             | No          | No                     | No                  |
| \$NOTIFICATIONAUTHOR\$        | No             | No          | No                     | No                  |
| \$NOTIFICATIONAUTHORNAME\$    | No             | No          | No                     | No                  |
| \$NOTIFICATIONAUTHORALIAS\$   | No             | No          | No                     | No                  |
| \$NOTIFICATIONCOMMENT\$       | No             | No          | No                     | No                  |
| \$HOSTNOTIFICATIONNUMBER\$    | No             | No          | No                     | No                  |
| \$HOSTNOTIFICATIONID\$        | No             | No          | No                     | No                  |
| \$SERVICENOTIFICATIONNUMBER\$ | No             | No          | No                     | No                  |
| \$SERVICENOTIFICATIONID\$     | No             | No          | No                     | No                  |

### Description des macros de notifications

- **\$NOTIFICATIONTYPE\$** : Une chaîne de caractères identifiant le type de notification envoyée (« PROBLEM », « RECOVERY », « ACKNOWLEDGEMENT », « FLAPPINGSTART », « FLAPPINGSTOP », « FLAPPINGDISABLED », « DOWNTIMESTART », « DOWNTIMEEND » ou « DOWNTIMECANCELLED »).
- **\$NOTIFICATIONRECIPIENTS\$** : Liste séparée par des virgules des noms courts de tous les contacts notifiés à propos de l'hôte ou du service.
- **\$NOTIFICATIONISESCALATED\$** : Un entier indiquant si la notification a été envoyée aux contacts normaux de l'hôte ou du service, ou si elle a été escaladée. 0 = Notification normale (non escaladée), 1 = Notification escaladée.
- **\$NOTIFICATIONAUTHOR\$** : Une chaîne de caractères contenant le nom de l'utilisateur ayant émis la notification. Si la macro \$NOTIFICATIONTYPE$ est définie sur « DOWNTIMESTART » ou « DOWNTIMEEND », ce sera le nom de l'utilisateur ayant planifié la maintenance. Si \$NOTIFICATIONTYPE$ vaut « ACKNOWLEDGEMENT », ce sera le nom de l'utilisateur ayant acquitté le problème hôte ou service. Si \$NOTIFICATIONTYPE$ est « CUSTOM », ce sera le nom de l'utilisateur ayant déclenché manuellement la notification.
- **\$NOTIFICATIONAUTHORNAME\$** : Une chaîne de caractères contenant le nom court du contact (le cas échéant) indiqué dans la macro \$NOTIFICATIONAUTHOR$.
- **\$NOTIFICATIONAUTHORALIAS\$** : Une chaîne de caractères contenant l'alias du contact (le cas échéant) indiqué dans la macro \$NOTIFICATIONAUTHOR$.
- **\$NOTIFICATIONCOMMENT\$** : Une chaîne de caractères contenant le commentaire saisi par l'auteur de la notification. Si la macro \$NOTIFICATIONTYPE$ est « DOWNTIMESTART » ou « DOWNTIMEEND », ce sera le commentaire de l'utilisateur ayant planifié la maintenance. Si \$NOTIFICATIONTYPE$ est « ACKNOWLEDGEMENT », ce sera le commentaire de l'utilisateur ayant acquitté le problème. Si \$NOTIFICATIONTYPE$ est « CUSTOM », ce sera le commentaire de l'utilisateur ayant déclenché manuellement la notification.
- **\$HOSTNOTIFICATIONNUMBER\$** : Le numéro de notification courant pour l'hôte. Ce numéro augmente de un à chaque nouvelle notification envoyée pour l'hôte (sauf pour les acquittements). Le numéro est réinitialisé à 0 lorsque l'hôte redevient DISPONIBLE (après l'envoi de la notification de récupération). Les acquittements, les détections de battements (flapping) et les maintenances planifiées ne modifient pas ce numéro.
- **\$HOSTNOTIFICATIONID\$** : Un identifiant unique de notification pour un hôte. Les identifiants de notification sont uniques pour les hôtes et les services, ce qui permet de les utiliser comme clé primaire dans une base de données. Ils restent uniques même après un redémarrage du moteur, tant que la rétention d'état est activée. Ce numéro est incrémenté à chaque notification hôte envoyée, indépendamment du nombre de contacts notifiés.
- **\$SERVICENOTIFICATIONNUMBER\$** : Le numéro de notification courant pour le service. Ce numéro augmente de un à chaque nouvelle notification envoyée pour le service (sauf pour les acquittements). Le numéro est réinitialisé à 0 lorsque le service redevient DISPONIBLE (après la notification de récupération). Les acquittements, les détections de battements et les maintenances planifiées ne modifient pas ce numéro.
- **\$SERVICENOTIFICATIONID\$** : Un identifiant unique de notification pour un service. Les identifiants sont uniques pour les hôtes et les services et peuvent servir de clé primaire dans une base de données. Ils restent uniques entre les redémarrages du moteur, tant que la rétention d'état est activée. Ce numéro est incrémenté à chaque notification de service envoyée, indépendamment du nombre de contacts notifiés.

### Macros d'heure/date

| Macro Name                      | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|---------------------------------|----------------|-------------|------------------------|---------------------|
| \$LONGDATETIME\$                | Yes            | Yes         | Yes                    | Yes                 |
| \$SHORTDATETIME\$               | Yes            | Yes         | Yes                    | Yes                 |
| \$DATE\$                        | Yes            | Yes         | Yes                    | Yes                 |
| \$TIME\$                        | Yes            | Yes         | Yes                    | Yes                 |
| \$TIMET\$                       | Yes            | Yes         | Yes                    | Yes                 |
| \$ISVALIDTIME\$ [(9)](#notes)   | Yes            | Yes         | Yes                    | Yes                 |
| \$NEXTVALIDTIME\$ [(9)](#notes) | Yes            | Yes         | Yes                    | Yes                 |

### Description des macros d'heure/date

- **\$LONGDATETIME\$** : Horodatage actuel (ex. Fri Oct 13 00:30:28 CDT 2000). Le format de la date est défini par la directive `date_format`.
- **\$SHORTDATETIME\$** : Horodatage actuel (ex. 10-13-2000 00:30:28). Le format de la date est défini par la directive `date_format`.
- **\$DATE\$** : Date actuelle (ex. 10-13-2000). Le format de la date est défini par la directive `date_format`.
- **\$TIME\$** : Heure actuelle (ex. 00:30:28).
- **\$TIMET\$** : Horodatage actuel au format time_t (secondes écoulées depuis l'epoch UNIX).
- **\$ISVALIDTIME:\$** [(9)](#notes) : Macro spéciale à la volée qui renvoie 1 ou 0 selon qu'une heure donnée est valide ou non dans une plage horaire spécifiée. Deux façons d'utiliser cette macro :
  - \$ISVALIDTIME:24x7\$ sera défini à "1" si l'heure actuelle est valide dans la plage horaire "24x7". Sinon, il sera défini à "0".
  - \$ISVALIDTIME:24x7:timestamp\$ sera défini à "1" si l'heure spécifiée par l'argument "timestamp" (qui doit être au format time_t) est valide dans la plage horaire "24x7". Sinon, il sera défini à "0".
- **\$NEXTVALIDTIME:\$** [(9)](#notes) : Macro spéciale à la volée qui renvoie le prochain moment valide (au format time_t) pour une plage horaire spécifiée. Deux façons d'utiliser cette macro :
  - \$NEXTVALIDTIME:24x7\$ retournera le prochain moment valide — à partir de l'heure actuelle incluse — dans la plage horaire "24x7".
  - \$NEXTVALIDTIME:24x7:timestamp\$ retournera le prochain moment valide — à partir de l'heure spécifiée par l'argument "timestamp" (au format time_t) incluse — dans la plage horaire "24x7".
  - Si aucun moment valide ne peut être trouvé dans la plage spécifiée, la macro sera définie à "0".

### Macros diverses

| Macro Name           | Service Checks | Host Checks | Service Event Handlers | Host Event Handlers |
|----------------------|----------------|-------------|------------------------|---------------------|
| \$PROCESSSTARTTIME\$ | Yes            | Yes         | Yes                    | Yes                 |
| \$EVENTSTARTTIME\$   | Yes            | Yes         | Yes                    | Yes                 |
| \$ARGn\$             | Yes            | Yes         | Yes                    | Yes                 |
| \$USERn\$            | Yes            | Yes         | Yes                    | Yes                 |

### Description des macros variées

- **\$PROCESSSTARTTIME\$** : Horodatage au format time_t (secondes écoulées depuis l'epoch UNIX) indiquant quand le processus Engine a été (re)démarré pour la dernière fois. Il est possible de déterminer depuis combien de temps Engine est en cours d'exécution (depuis son dernier redémarrage) en soustrayant \$PROCESSSTARTTIME\$ de \$TIMET\$.
- **\$EVENTSTARTTIME\$** : Horodatage au format time_t (secondes écoulées depuis l'epoch UNIX) indiquant quand le processus Engine a commencé à traiter les événements (vérifications, etc.). Il est possible de déterminer le temps de démarrage d'Engine en soustrayant \$PROCESSSTARTTIME\$ de \$EVENTSTARTTIME\$.
- **\$ARGn\$** : Le énième argument passé à la commande (notification, gestionnaire d'événements, vérification de service, etc.). Engine prend en charge jusqu'à 32 macros d'argument (\$ARG1\$ à \$ARG32\$).
- **\$USERn\$** : La énième macro définissable par l'utilisateur. Les macros utilisateur peuvent être définies dans un ou plusieurs fichiers de ressources. Engine prend en charge jusqu'à 256 macros utilisateur (\$USER1\$ à \$USER256\$).


## Notes

- **(1)** Ces macros ne sont pas valides si l'hôte avec lequel elles sont associées est en train d'être contrôlé (elle n'ont donc pas de sens puisque leur objet n'a pas encore été déterminé).
- **(2)** Ces macros ne sont pas valides si le service avec lequel elles sont associées est en train d'être contrôlé (elle n'ont donc pas de sens puisque leur objet n'a pas encore été déterminé).
- **(3)** Lorsqu'une macro d'hôte est utilisée dans une commande pour services (ex. service notifications, gestionnaire d'évennements, etc), la macro fait référence à l'hôte auquel le service est associé.
- **(4)**  Ces macros sont normalement associées au premier/groupe d'hôtes principal lié à l'hôte actuel. Elles pourraient donc être considérées, dans de nombreux cas, comme des macros d'hôte. Cependant, ces macros ne sont pas disponibles en tant que macros d'hôte à la demande. Elles peuvent en revanche être utilisées comme macros de groupe d'hôtes à la demande lorsque vous fournissez le nom d'un groupe d'hôtes à la macro. Par exemple : $HOSTGROUPMEMBERS:hg1$ renverrait une liste délimitée par des virgules de tous les membres (hôtes) du groupe d'hôtes hg1.
- **(5)** Ces macros sont normalement associées au premier/groupe de services principal lié au service actuel. Elles pourraient donc être considérées, dans de nombreux cas, comme des macros de service. Cependant, ces macros ne sont pas disponibles en tant que macros de service à la demande. Elles peuvent en revanche être utilisées comme macros de groupe de services à la demande lorsque vous fournissez le nom d'un groupe de services à la macro. Par exemple : $SERVICEGROUPMEMBERS:sg1$ renverrait une liste délimitée par des virgules de tous les membres (services) du groupe de services sg1.
- **(6)** Ces macros sont normalement associées au premier/groupe de contacts principal lié au contact actuel. Elles pourraient donc être considérées, dans de nombreux cas, comme des macros de contact. Cependant, ces macros ne sont pas disponibles en tant que macros de contact à la demande. Elles peuvent en revanche être utilisées comme macros de groupe de contacts à la demande lorsque vous fournissez le nom d'un groupe de contacts à la macro. Par exemple : $CONTACTGROUPMEMBERS:cg1$ renverrait une liste délimitée par des virgules de tous les membres (contacts) du groupe de contacts cg1.
- **(7)** Ces macros d'accusé de réception sont obsolètes. Il est recommandé d'utiliser les macros plus génériques telles que : \$NOTIFICATIONAUTHOR\$, \$NOTIFICATIONAUTHORNAME\$, \$NOTIFICATIONAUTHORALIAS\$ ou \$NOTIFICATIONCOMMENT\$.
- **(8)** Ces macros sont uniquement disponibles en tant que macros à la demande — c'est-à-dire que vous devez leur fournir un argument supplémentaire pour pouvoir les utiliser. Elles ne sont pas disponibles en tant que variables d'environnement.
- **(9)** Les macros de résumé ne sont pas disponibles en tant que variables d'environnement si l'option use_large_installation_tweaks est activée, car leur calcul est assez gourmand en ressources processeur.
