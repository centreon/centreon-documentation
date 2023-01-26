---
id: developer-broker-mapping
title: Mapping d’événements Centreon Broker
---

Centreon Broker utilise des tables de correspondance globales pour les événements qui peuvent être échangés. Cette page répertorie les propriétés disponibles pour chaque type d’événement.

## NEB

### Acknowledgement

| Propriété| Type| Description
|----------|----------|----------
| acknowledgement\_type| entier court| Acquittement de l’hôte quand 0, acquittement du service quand 1.
| author| chaîne| Auteur de l’acquittement.
| comment| chaîne| Commentaire associé à l’acquittement.
| deletion\_time| temps| Heure à laquelle l’acquittement a été supprimé. Si 0, il n’a pas été supprimé.
| entry\_time| temps| Heure à laquelle l’acquittement a été créé.
| host\_id| entier non signé| ID de l’hôte.
| instance\_id| entier non signé| ID de l’instance.
| is\_sticky| booléen| Indicateur "Persistant (non-OK)".
| notify\_contacts| booléen| Indicateur de notification.
| persistent\_comment| booléen| True si le commentaire est persistant.
| service\_id| entier non signé| ID de service. 0 pour un acquittement de l’hôte.
| state| entier court| État de l’hôte / du service.
| notify\_only\_if\_not\_already\_acknowledged| booléen| Une notification ne doit être envoyée qu’en cas de non acquittement.

### Comment

| Propriété| Type| Description
|----------|----------|----------
| author| chaîne| Auteur du commentaire.
| comment\_type| entier court| 1 pour un commentaire pour un hôte, 2 pour un commentaire pour un service.
| data| chaîne| Données du commentaire (texte).
| deletion\_time| temps| Heure à laquelle le commentaire a été supprimé. 0 si le commentaire n’a pas (encore) été supprimé.
| entry\_time| temps| Heure à laquelle le commentaire a été créé.
| entry\_type| entier court| 1 pour un commentaire de l’utilisateur (par commande externe), 2 pour un commentaire d’arrêt, 3 pour un commentaire de bagotement et 4 pour un commentaire d’acquittement.
| expire\_time| temps| Délai d’expiration des commentaires. 0 si aucun délai d’expiration.
| expires| bool| True si le commentaire expire.
| host\_id| entier non signé| ID de l’hôte.
| internal\_id| entier non signé| ID du moteur de supervision interne du commentaire.
| persistent| booléen| True si le commentaire est persistant.
| instance\_id| entier non signé| ID de l’instance.
| service\_id| entier non signé| ID de service. 0 si c’est un commentaire de l’hôte.
| source| entier court| 0 lorsque le commentaire provient du moteur de supervision (interne) ou 1 lorsque le commentaire provient d’une autre source (externe).

### Custom variable

| Propriété| Type| Description
|----------|----------|----------
| enabled| booléen| True si la variable personnalisée est activée.
| host\_id| entier non signé| ID de l’hôte.
| modified| booléen| True si la variable a été modifiée.
| name| chaîne| Nom de la variable.
| service\_id| entier non signé| ID de service. 0 si c’est une variable d’hôte personnalisée.
| update\_time| temps| Dernière heure à laquelle la variable a été mise à jour.
| var\_type| entier court| 0 pour une variable d’hôte personnalisée, 1 pour une variable de service personnalisée.
| value| chaîne| Valeur variable.
| default\_value| chaîne| La valeur par défaut de la variable personnalisée.

### Custom variable status

Les événements de statut de variable personnalisée sont générés lorsqu’une variable personnalisée doit être mise à jour.

| Propriété| Type| Description
|----------|----------|----------
| host\_id| entier non signé| ID de l’hôte.
| modified| booléen| True si la variable a été modifiée.
| name| chaîne| Nom de la variable.
| service\_id| entier non signé| ID de service. 0 si c’est une variable d’hôte personnalisée.
| update\_time| temps| Dernière heure à laquelle la variable a été mise à jour.
| value| chaîne| Valeur variable.

### Downtime

| Propriété| Type| Description
|----------|----------|----------
| actual\_end\_time| temps| Heure réelle à laquelle le temps d’arrêt s’est terminé.
| actual\_start\_time| temps| Heure réelle à laquelle le temps d’arrêt a commencé.
| author| chaîne| Créateur du temps d’arrêt.
| downtime\_type| entier court| 1 pour un arrêt de service, 2 pour un arrêt d’hôte.
| deletion\_time| temps| Heure à laquelle le temps d’arrêt a été supprimé.
| duration| temps| Durée du temps d’arrêt.
| end\_time| temps| Heure de fin du temps d’arrêt programmé.
| entry\_time| temps| Heure à laquelle le temps d’arrêt a été créé.
| fixed| booléen| True si le temps d’arrêt est fixe, False s’il est flexible.
| host\_id| entier non signé| ID de l’hôte.
| instance\_id| entier non signé| ID de l’instance.
| internal\_id| entier non signé| ID du moteur de supervision interne.
| service\_id| entier non signé| ID de service. 0 s’il s’agit d’un arrêt de l’hôte.
| start\_time| temps| Heure de début de l’arrêt programmé.
| triggered\_by| entier non signé| ID interne du temps d’arrêt qui a déclenché ce temps d’arrêt.
| was\_cancelled| booléen| True si le temps d’arrêt a été annulé.
| was\_started| booléen| True si le temps d’arrêt a été démarré.
| comment| chaîne| Commentaire sur le temps d’arrêt.
| is\_recurring| booléen| True si ce temps d’arrêt est récurrent.
| recurring\_tp| chaîne| La période de temps récurrente du temps d’arrêt récurrent.
| come\_from| court| Id du temps d’arrêt récurrent parent pour les temps d’arrêt engendrés.

### Event handler

| Propriété| Type| Description
|----------|----------|----------
| early\_timeout| booléen| True si le gestionnaire d’événements a été interrompu.
| end\_time| temps| Heure à laquelle l’exécution du gestionnaire d’événements s’est terminée.
| execution\_time| réel| Temps d’exécution en secondes.
| handler\_type| entier court| 0 pour le gestionnaire d’événements spécifiques à l’hôte, 1 pour le gestionnaire d’événements spécifiques au service, 2 pour le gestionnaire d’événements global pour les hôtes et 3 pour le gestionnaire d’événements global pour les services.
| host\_id| entier non signé| ID de l’hôte.
| return\_code| entier court| Valeur renvoyée par le gestionnaire d’événements.
| service\_id| entier non signé| ID de service. 0 si c’est un gestionnaire d’événements d’hôte.
| start\_time| temps| Heure à laquelle le gestionnaire d’événements a démarré.
| state| entier court| État de l’hôte / du service.
| state\_type| entier court| 0 pour SOFT, 1 pour HARD.
| timeout| entier court| Délai d’attente du gestionnaire d’événements en secondes.
| command\_args| chaîne| Arguments du gestionnaire d’événements.
| command\_line| chaîne| Ligne de commande du gestionnaire d’événements.
| output| chaîne| Output retourné par le gestionnaire d’événements.
| source\_id| entier non signé| L’id de l’instance source de cet événement.
| destination\_id| entier non signé| L’id de l’instance de destination de cet événement.

### Flapping status

| Propriété| Type| Description
|----------|----------|----------
| event\_time| temps| 
| event\_type| entier| 
| flapping\_type| entier court| 
| high\_threshold| réel| Seuil de bagotement élevé.
| host\_id| entier non signé| ID de l’hôte.
| low\_threshold| réel| Seuil de bagotement bas.
| percent\_state\_change| réel| 
| reason\_type| entier court| 
| service\_id| entier non signé| ID de service. 0 s’il s’agit d’une entrée de bagotement d’hôte.

### Host

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged| booléen| | 
| acknowledgement\_type| entier court| | 
| action\_url| chaîne| | 
| active\_checks\_enabled| booléen| | 
| address| chaîne| | 
| alias| chaîne| | 
| check\_freshness| booléen| | 
| check\_interval| réel| | 
| check\_period| chaîne| | 
| check\_type| entier court| | 
| current\_check\_attempt| entier court| | 
| current\_state| entier court| | 
| default\_active\_checks\_enabled| booléen| | 
| default\_event\_handler\_enabled| booléen| | 
| default\_flap\_detection\_enabled| booléen| | 
| default\_notifications\_enabled| booléen| | 
| default\_passive\_checks\_enabled| booléen| | 
| downtime\_depth| entier court| | 
| display\_name| chaîne| | 
| enabled| booléen| | 
| event\_handler| chaîne| | 
| event\_handler\_enabled| booléen| | 
| execution\_time| réel| | 
| first\_notification\_delay| réel| | 
| flap\_detection\_enabled| booléen| | 
| flap\_detection\_on\_down| booléen| | 
| flap\_detection\_on\_unreachable| booléen| | 
| flap\_detection\_on\_up| booléen| | 
| freshness\_threshold| réel| | 
| has\_been\_checked| booléen| | 
| high\_flap\_threshold| réel| | 
| host\_name| chaîne| | 
| host\_id| entier non signé| | 
| icon\_image| chaîne| | 
| icon\_image\_alt| chaîne| | 
| instance\_id| entier non signé| | 
| is\_flapping| booléen| | 
| last\_check| temps| | 
| last\_hard\_state| entier court| | 
| last\_hard\_state\_change| temps| | 
| last\_notification| temps| | 
| last\_state\_change| temps| | 
| last\_time\_down| temps| | 
| last\_time\_unreachable| temps| | 
| last\_time\_up| temps| | 
| last\_update| temps| | 
| latency| réel| | 
| low\_flap\_threshold| réel| | 
| max\_check\_attempts| entier court| | 
| next\_check| temps| | 
| next\_notification| temps| | 
| no\_more\_notifications| booléen| | 
| notes| chaîne| | 
| notes\_url| chaîne| | 
| notification\_interval| réel| | 
| notification\_number| entier court| | 
| notification\_period| chaîne| | 
| notifications\_enabled| booléen| | 
| notify\_on\_down| booléen| | 
| notify\_on\_downtime| booléen| | 
| notify\_on\_flapping| booléen| | 
| notify\_on\_recovery| booléen| | 
| notify\_on\_unreachable| booléen| | 
| obsess\_over| booléen| | 
| passive\_checks\_enabled| booléen| | 
| percent\_state\_change| réel| | 
| retry\_interval| réel| | 
| should\_be\_scheduled| booléen| | 
| stalk\_on\_down| booléen| | 
| stalk\_on\_unreachable| booléen| | 
| stalk\_on\_up| booléen| | 
| statusmap\_image| chaîne| | 
| state\_type| entier court| | 
| check\_command| chaîne| | 
| output| chaîne| | 
| perf\_data| chaîne| | 
| retain\_nonstatus\_information| booléen| | 
| retain\_status\_information| booléen| | 
| timezone| chaîne| | 

### Host check

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| active\_checks\_enabled| booléen| True si les contrôles actifs sont activés sur l’hôte.| 
| check\_type| entier court| | 
| host\_id| entier non signé| ID de l’hôte.| 
| next\_check| temps| Heure à laquelle le prochain contrôle est prévu.| 
| command\_line| chaîne| Ligne de commande du contrôle.| 
| source\_id| entier non signé| L’ID de l’instance source de cet événement.| 
| destination\_id| entier non signé| L’ID de l’instance de destination de cet événement.| 

### Host dependency

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| dependency\_period| chaîne| | 
| dependent\_host\_id| entier non signé| | 
| enabled| booléen| | 
| execution\_failure\_options| chaîne| | 
| inherits\_parent| booléen| | 
| host\_id| entier non signé| | 
| notification\_failure\_options| chaîne| | 

### Host group

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| host\_group\_id| entier non signé| | 
| name| chaîne| Nom du groupe.| 
| enabled| booléen| True si le groupe est activé, False s’il ne l’est pas (suppression).| 
| poller\_id| entier non signé| | 

### Host group member

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| enabled| booléen| True si l'hôte est membre du groupe, False s'il ne l’est pas (suppression).| 
| group| chaîne| Nom du groupe.| 
| instance\_id| entier non signé| ID de l’instance.| 
| host\_id| entier non signé| ID de l’hôte.| 
| source\_id| entier non signé| L’ID de l’instance source de cet événement.| 
| destination\_id| entier non signé| L’ID de l’instance de destination de cet événement.| 

### Host parent

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| enabled| booléen| True si la fonction parent est activée, False si elle ne l’est pas (suppression).| 
| child\_id| entier non signé| ID d’hôte enfant.| 
| parent\_id| entier non signé| ID d’hôte parent.| 

### Host status

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged| booléen| | 
| acknowledgement\_type| entier court| | 
| active\_checks\_enabled| booléen| | 
| check\_interval| réel| | 
| check\_period| chaîne| | 
| check\_type| entier court| | 
| current\_check\_attempt| entier court| | 
| current\_state| entier court| | 
| downtime\_depth| entier court| | 
| enabled| booléen| | 
| event\_handler| chaîne| | 
| event\_handler\_enabled| booléen| | 
| execution\_time| réel| | 
| flap\_detection\_enabled| booléen| | 
| has\_been\_checked| booléen| | 
| host\_id| entier non signé| | 
| is\_flapping| booléen| | 
| last\_check| temps| | 
| last\_hard\_state| entier court| | 
| last\_hard\_state\_change| temps| | 
| last\_notification| temps| | 
| last\_state\_change| temps| | 
| last\_time\_down| temps| | 
| last\_time\_unreachable| temps| | 
| last\_time\_up| temps| | 
| last\_update| temps| | 
| latency| réel| | 
| max\_check\_attempts| entier court| | 
| next\_check| temps| | 
| next\_host\_notification| temps| | 
| no\_more\_notifications| booléen| | 
| notification\_number| entier court| | 
| notifications\_enabled| booléen| | 
| obsess\_over| booléen| | 
| passive\_checks\_enabled| booléen| | 
| percent\_state\_change| réel| | 
| retry\_interval| réel| | 
| should\_be\_scheduled| booléen| | 
| state\_type| entier court| | 
| check\_command| chaîne| | 
| output| chaîne| | 
| perf\_data| chaîne| | 

### Instance

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| engine| chaîne| Nom du moteur de supervision utilisé sur cette instance.| 
| id| entier non signé| ID de l’instance.| 
| name| chaîne| Nom de l’instance.| 
| is\_running| booléen| Si cette instance est en cours d’exécution ou non.| 
| pid| entier non signé| Supervision du PID du moteur.| 
| program\_end| temps| Heure à laquelle l’instance s’est arrêtée.| 
| program\_start| temps| Heure à laquelle l’instance a démarré.| 
| version| chaîne| Version du moteur de supervision utilisé sur cette instance.| 

### Instance status

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| active\_host\_checks\_enabled| booléen| Si les contrôles d’hôtes actifs sont activés ou non de manière globale.| 
| active\_service\_checks\_enabled| booléen| Si les contrôles de services actifs sont activés ou non de manière globale.| 
| check\_hosts\_freshness| booléen| Si le contrôle de la fraîcheur des hôtes est activé ou non de manière globale.| 
| check\_services\_freshness| booléen| Si le contrôle de la fraîcheur des services est activé ou non de manière globale.| 
| event\_handler\_enabled| booléen| Si les gestionnaires d’événements sont activés ou non de manière globale.| 
| flap\_detection\_enabled| booléen| Si la détection des bagotements est activée ou non de manière globale.| 
| id| entier non signé| ID de l’instance.| 
| last\_alive| temps| La dernière fois que l’instance a été identifiée comme étant vivante.| 
| last\_command\_check| temps| Dernière fois qu’une commande de contrôle a été exécutée.| 
| notifications\_enabled| booléen| Si les notifications sont activées ou non de manière globale.| 
| obsess\_over\_hosts| booléen| Si oui ou non le moteur de supervision remontera les résultats de contrôles des hôtes.| 
| obsess\_over\_services| booléen| Si oui ou non le moteur de supervision remontera les résultats de contrôles des services.| 
| passive\_host\_checks\_enabled| booléen| Si les contrôles passifs d’hôtes sont activés ou non de manière globale.| 
| passive\_service\_checks\_enabled| booléen| Si les contrôles passifs de services sont activés ou non de manière globale.| 
| global\_host\_event\_handler| chaîne| Gestionnaire d’événements global pour les hôtes.| 
| global\_service\_event\_handler| chaîne| Gestionnaire d’événements global pour les services.| 

### Log entry

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| c\_time| temps| Temps de connexion.| 
| host\_id| entier non signé| ID de l’hôte. 0 si l’entrée du journal ne fait pas référence à un hôte ou un service spécifique.| 
| host\_name| chaîne| Nom de l’hôte. Peut être vide si l’entrée du journal ne fait pas référence à un hôte ou un service spécifique.| 
| instance\_name| chaîne| Nom de l’instance.| 
| log\_type| entier court| 0 pour SOFT, 1 pour HARD.| 
| msg\_type| entier court| 0 pour SERVICE ALERT (envoyé lors du changement d’état du service), 1 pour HOST ALERT (envoyé lors du changement d’état de l’hôte), 2 pour SERVICE NOTIFICATION (notification envoyée pour un service), 3 pour HOST NOTIFICATION (notification envoyée pour un hôte), 4 pour Warning (avertissement de Centreon Engine), 5 pour EXTERNAL COMMAND (commande externe reçue), 6 pour CURRENT SERVICE STATE (état actuel du service supervisé, généralement envoyé lors du rechargement de la configuration), 7 pour CURRENT HOST STATE (état actuel de l’hôte supervisé, (état actuel de l’hôte supervisé, généralement envoyé lors du rechargement de la configuration), 8 pour INITIAL SERVICE STATE (état initial du service, après traitement de rétention, envoyé au début du processus), 9 pour INITIAL HOST STATE (état initial de l’hôte surveillé, après traitement de rétention, envoyé au début du processus), 10 pour la commande externe ACKNOWLEDGE\_SVC\_PROBLEM (cas particulier de EXTERNAL COMMAND pour l’acquittement du service), 11 pour la commande externe ACKNOWLEDGE\_HOST\_PROBLEM (cas particulier de EXTERNAL COMMAND pour l’acquittement de l’hôte).| 
| notification\_cmd| chaîne| Commande de notification.| 
| notification\_contact| chaîne| Contact pour la notification.| 
| retry| entier| Tentative de contrôle actuelle.| 
| service\_description| chaîne| Description du service. Vide si l’entrée du journal ne fait pas référence à un service spécifique.| 
| service\_id| entier non signé| ID de service. 0 si l’entrée du journal ne fait pas référence à un service spécifique.| 
| status| entier court| Statut de l’hôte / du service.| 
| output| chaîne| Output.| 

### Module

Les événements relatifs aux modules sont générés lors du chargement ou du déchargement des modules de Centreon Broker.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| args| chaîne| Arguments du module.| 
| enabled| booléen| Si ce module est activé ou non.| 
| filename| chaîne| Chemin d’accès au fichier du module.| 
| instance\_id| entier non signé| ID de l’instance.| 
| loaded| booléen| Si ce module est chargé ou non.| 
| should\_be\_loaded| booléen| Si ce module doit être (aurait dû être) chargé ou non.| 

### Service

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged| booléen| | 
| acknowledged\_type| entier court| | 
| action\_url| chaîne| | 
| active\_checks\_enabled| booléen| | 
| check\_freshness| booléen| | 
| check\_interval| réel| | 
| check\_period| chaîne| | 
| check\_type| entier court| | 
| current\_check\_attempt| entier court| | 
| current\_state| entier court| | 
| default\_active\_checks\_enabled| booléen| | 
| default\_event\_handler\_enabled| booléen| | 
| default\_flap\_detection\_enabled| booléen| | 
| default\_notifications\_enabled| booléen| | 
| default\_passive\_checks\_enabled| booléen| | 
| dowtine\_depth| entier court| | 
| display\_name| chaîne| | 
| enabled| booléen| | 
| event\_handler| chaîne| | 
| event\_handler\_enabled| booléen| | 
| execution\_time| réel| | 
| first\_notification\_delay| réel| | 
| flap\_detection\_enabled| booléen| | 
| flap\_detection\_on\_critical| booléen| | 
| flap\_detection\_on\_ok| booléen| | 
| flap\_detection\_on\_unknown| booléen| | 
| flap\_detection\_on\_warning| booléen| | 
| freshness\_threshold| réel| | 
| has\_been\_checked| booléen| | 
| high\_flap\_threshold| réel| | 
| host\_id| entier non signé| | 
| host\_name| chaîne| | 
| icon\_image| chaîne| | 
| icon\_image\_alt| chaîne| | 
| service\_id| entier non signé| | 
| is\_flapping| booléen| | 
| is\_volatile| booléen| | 
| last\_check| temps| | 
| last\_hard\_state| entier court| | 
| last\_hard\_state\_change| temps| | 
| last\_notification| temps| | 
| last\_state\_change| temps| | 
| last\_time\_critical| temps| | 
| last\_time\_ok| temps| | 
| last\_time\_unknown| temps| | 
| last\_time\_warning| temps| | 
| last\_update| temps| | 
| latency| réel| | 
| low\_flap\_threshold| réel| | 
| max\_check\_attempts| entier court| | 
| next\_check| temps| | 
| next\_notification| temps| | 
| no\_more\_notifications| booléen| | 
| notes| chaîne| | 
| notes\_url| chaîne| | 
| notification\_interval| réel| | 
| notification\_number| entier court| | 
| notification\_period| chaîne| | 
| notifications\_enabled| booléen| | 
| notify\_on\_critical| booléen| | 
| notify\_on\_downtime| booléen| | 
| notify\_on\_flapping| booléen| | 
| notify\_on\_recovery| booléen| | 
| notify\_on\_unknown| booléen| | 
| notify\_on\_warning| booléen| | 
| obsess\_over| booléen| | 
| passive\_checks\_enabled| booléen| | 
| percent\_state\_change| réel| | 
| retry\_interval| réel| | 
| scheduled\_downtime\_depth| entier court| | 
| service\_description| chaîne| | 
| should\_be\_scheduled| booléen| | 
| stalk\_on\_critical| booléen| | 
| stalk\_on\_ok| booléen| | 
| stalk\_on\_unknown| booléen| | 
| stalk\_on\_warning| booléen| | 
| state\_type| entier court| | 
| check\_command| chaîne| | 
| output| chaîne| | 
| perf\_data| chaîne| | 
| retain\_nonstatus\_information| booléen| | 
| retain\_status\_information| booléen| | 

### Service check

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| active\_checks\_enabled| booléen| True si les contrôles actifs sont activés sur le service.| 
| check\_type| court| | 
| host\_id| entier non signé| ID de l’hôte.| 
| next\_check| temps| Heure à laquelle le prochain contrôle est prévu.| 
| service\_id| entier non signé| ID de service.| 
| command\_line| chaîne| Ligne de commande du contrôle.| 

### Service dependency

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| dependency\_period| chaîne| | 
| dependent\_host\_id| entier non signé| | 
| dependent\_service\_id| entier non signé| | 
| enabled| booléen| | 
| execution\_failure\_options| chaîne| | 
| host\_id| entier non signé| | 
| inherits\_parent| booléen| | 
| notification\_failure\_options| chaîne| | 
| service\_id| entier non signé| | 

### Service group

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| | 
| name| chaîne| Nom du groupe.| 
| enabled| enabled| True si le groupe est activé, faux s’il ne l’est pas (suppression).| 
| poller\_id| entier non signé| | 

### Service group member

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| | 
| host\_id| entier non signé| | 
| service\_id| entier non signé| | 
| enabled| enabled| True si le groupe est activé, faux s’il ne l’est pas (suppression).| 
| group\_name| chaîne| Nom du groupe.| 
| poller\_id| entier non signé| | 

### Service status

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged| booléen| | 
| acknowledgement\_type| entier court| | 
| active\_checks\_enabled| booléen| | 
| check\_interval| réel| | 
| check\_period| chaîne| | 
| check\_type| entier court| | 
| current\_check\_attempt| entier court| | 
| current\_state| entier court| | 
| downtime\_depth| entier court| | 
| enabled| booléen| | 
| event\_handler| chaîne| | 
| event\_handler\_enabled| booléen| | 
| execution\_time| réel| | 
| flap\_detection\_enabled| booléen| | 
| has\_been\_checked| booléen| | 
| host\_id| entier non signé| | 
| host\_name| chaîne| | 
| is\_flapping| booléen| | 
| last\_check| temps| | 
| last\_hard\_state| entier court| | 
| last\_hard\_state\_change| temps| | 
| last\_notification| temps| | 
| last\_state\_change| temps| | 
| last\_time\_critical| temps| | 
| last\_time\_ok| temps| | 
| last\_time\_unknown| temps| | 
| last\_time\_warning| temps| | 
| last\_update| temps| | 
| latency| réel| | 
| max\_check\_attempts| entier court| | 
| modified\_attributes| entier non signé| | 
| next\_check| temps| | 
| next\_notification| temps| | 
| no\_more\_notifications| booléen| | 
| notification\_number| entier court| | 
| notifications\_enabled| booléen| | 
| obsess\_over| booléen| | 
| passive\_checks\_enabled| booléen| | 
| percent\_state\_change| réel| | 
| retry\_interval| réel| | 
| service\_description| chaîne| | 
| service\_id| entier non signé| | 
| should\_be\_scheduled| booléen| | 
| state\_type| entier court| | 
| check\_command| chaîne| | 
| output| chaîne| | 
| perf\_data| chaîne| | 

### Instance configuration

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| loaded| booléen| True si l’instance s’est chargée avec succès.| 
| poller\_id| entier non signé| ID du collecteur qui a reçu une demande de mise à jour de la configuration (reload).| 

### Responsive instance

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| poller\_id| entier non signé| ID du collecteur qui a reçu une demande de mise à jour de la configuration (reload).| 
| responsive| booléen| Un booléen indiquant si le collecteur ayant l’ID **poller\_id** répond ou non.| 

### Pb Service

Cet événement est un événement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les événements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **Service** ne devrait être envoyé, vous devriez voir ceux-ci à la place.

Un tel message est envoyé pour déclarer un nouveau service ou pour déclarer un changement de service.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
enum ServiceType {
  SERVICE = 0;
  METASERVICE = 2;
  BA = 3;
}

message Service {
  uint64 host_id = 1;
  uint64 service_id = 2;

  enum AckType {
    NONE = 0;
    NORMAL = 1;
    STICKY = 2;
  }
  bool acknowledged = 3;
  AckType acknowledgement_type = 4;

  bool active_checks = 5;
  bool enabled = 6;
  int32 scheduled_downtime_depth = 7;
  string check_command = 8;
  uint32 check_interval = 9;
  string check_period = 10;

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 11;
  int32 check_attempt = 12;
  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 13;
  bool event_handler_enabled = 14;
  string event_handler = 15;
  double execution_time = 16;
  bool flap_detection = 17;
  bool checked = 18;
  bool flapping = 19;
  int64 last_check = 20;
  State last_hard_state = 21;
  int64 last_hard_state_change = 22;
  int64 last_notification = 23;
  int32 notification_number = 24;
  int64 last_state_change = 25;
  int64 last_time_ok = 26;
  int64 last_time_warning = 27;
  int64 last_time_critical = 28;
  int64 last_time_unknown = 29;
  int64 last_update = 30;
  double latency = 31;
  uint32 max_check_attempts = 32;
  int64 next_check = 33;
  int64 next_notification = 34;
  bool no_more_notifications = 35;
  bool notify = 36;
  string output = 37;
  string long_output = 38;
  bool passive_checks = 39;
  double percent_state_change = 40;
  string perfdata = 41;
  double retry_interval = 42;
  string host_name = 43;
  string description = 44;
  bool should_be_scheduled = 45;
  bool obsess_over_service = 46;

  enum StateType {
    SOFT = 0;
    HARD = 1;
  }

  StateType state_type = 47;
  string action_url = 48;
  bool check_freshness = 49;
  bool default_active_checks = 50;
  bool default_event_handler_enabled = 51;
  bool default_flap_detection = 52;
  bool default_notify = 53;
  bool default_passive_checks = 54;
  string display_name = 55;
  double first_notification_delay = 56;
  bool flap_detection_on_critical = 57;
  bool flap_detection_on_ok = 58;
  bool flap_detection_on_unknown = 59;
  bool flap_detection_on_warning = 60;
  double freshness_threshold = 61;
  double high_flap_threshold = 62;
  string icon_image = 63;
  string icon_image_alt = 64;
  bool is_volatile = 65;
  double low_flap_threshold = 66;
  string notes = 67;
  string notes_url = 68;
  double notification_interval = 69;
  string notification_period = 70;
  bool notify_on_critical = 71;
  bool notify_on_downtime = 72;
  bool notify_on_flapping = 73;
  bool notify_on_recovery = 74;
  bool notify_on_unknown = 75;
  bool notify_on_warning = 76;
  bool stalk_on_critical = 77;
  bool stalk_on_ok = 78;
  bool stalk_on_unknown = 79;
  bool stalk_on_warning = 80;
  bool retain_nonstatus_information = 81;
  bool retain_status_information = 82;
  uint64 severity_id = 83;
  repeated TagInfo tags = 84;

  ServiceType type = 85;

  /* In case of metaservice and ba, they also have an internal id. We keep it
   * here. */
  uint64 internal_id = 86;
  uint64 icon_id = 87;
}
```

### Pb Adaptive service

Lorsque la version BBDO 3 est utilisée, cet événement est envoyé lorsqu’un service a des changements au niveau de sa configuration.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message AdaptiveService {
  uint64 host_id = 1;
  uint64 service_id = 2;

  optional bool notify = 3;
  optional bool active_checks = 4;
  optional bool should_be_scheduled = 5;
  optional bool passive_checks = 6;
  optional bool event_handler_enabled = 7;
  optional bool flap_detection_enabled = 8;
  optional bool obsess_over_service = 9;
  optional string event_handler = 10;
  optional string check_command = 11;
  optional uint32 check_interval = 12;
  optional uint32 retry_interval = 13;
  optional uint32 max_check_attempts  = 14;
  optional bool check_freshness = 15;
  optional string check_period = 16;
  optional string notification_period = 17;
}
```

### Pb Service Status

Lorsque la version BBDO 3 est utilisée, ce type d’événement est envoyé à la place de **Service Status**. Son contenu est presque le même mais l’ancien contient certains éléments de configuration en plus. Un **Pb Service Status** est plus petit qu’un **Service Status**. Les éléments manquants se trouvent dans **Pb Service**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message ServiceStatus {
  uint64 host_id = 1;
  uint64 service_id = 2;

  bool checked = 3;
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 4;

  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 5;
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 6;
  int64 last_state_change = 7;
  State last_hard_state = 8;
  int64 last_hard_state_change = 9;
  int64 last_time_ok = 10;
  int64 last_time_warning = 11;
  int64 last_time_critical = 12;
  int64 last_time_unknown = 13;

  string output = 14;
  string long_output = 15;
  string perfdata = 16;

  bool flapping = 17;
  double percent_state_change = 18;
  double latency = 19;
  double execution_time = 20;
  int64 last_check = 21;
  int64 next_check = 22;
  bool should_be_scheduled = 23;
  int32 check_attempt = 24;

  int32 notification_number = 25;
  bool no_more_notifications = 26;
  int64 last_notification = 27;
  int64 next_notification = 28;

  enum AckType {
    NONE = 0;
    NORMAL = 1;
    STICKY = 2;
  }
  AckType acknowledgement_type = 29;
  int32 scheduled_downtime_depth = 30;

  ServiceType type = 31;

  /* In case of metaservice and ba, they also have an internal id. We keep it
   * here. */
  uint64 internal_id = 32;
}
```

### Pb Host

Lorsque la version BBDO 3 est utilisée, ce type d’événement est envoyé à la place de **Host**. Son contenu est presque le même.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message Host {
  uint64 host_id = 1;

  enum AckType {
    NONE = 0;
    NORMAL = 1;
    STICKY = 2;
  }
  bool acknowledged = 2;
  int32 acknowledgement_type = 3;

  bool active_checks = 4;
  bool enabled = 5;
  int32 scheduled_downtime_depth = 6;
  string check_command = 7;
  int32 check_interval = 8;
  string check_period = 9;

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 10;
  int32 check_attempt = 11;
  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 12;
  bool event_handler_enabled = 13;
  string event_handler = 14;
  double execution_time = 15;
  bool flap_detection = 16;
  bool checked = 17;
  bool flapping = 18;
  int64 last_check = 19;
  State last_hard_state = 20;
  int64 last_hard_state_change = 21;
  int64 last_notification = 22;
  int32 notification_number = 23;
  int64 last_state_change = 24;
  int64 last_time_down = 25;
  int64 last_time_unreachable = 26;
  int64 last_time_up = 27;
  int64 last_update = 28;
  double latency = 29;
  int32 max_check_attempts = 30;
  int64 next_check = 31;
  int64 next_host_notification = 32;
  bool no_more_notifications = 33;
  bool notify = 34;
  string output = 35;
  bool passive_checks = 36;
  double percent_state_change = 37;
  string perfdata = 38;
  double retry_interval = 39;
  bool should_be_scheduled = 40;
  bool obsess_over_host = 41;

  enum StateType {
    SOFT = 0;
    HARD = 1;
  }

  StateType state_type = 42;
  string action_url = 43;
  string address = 44;
  string alias = 45;
  bool check_freshness = 46;
  bool default_active_checks = 47;
  bool default_event_handler_enabled = 48;
  bool default_flap_detection = 49;
  bool default_notify = 50;
  bool default_passive_checks = 51;
  string display_name = 52;
  double first_notification_delay = 53;
  bool flap_detection_on_down = 54;
  bool flap_detection_on_unreachable = 55;
  bool flap_detection_on_up = 56;
  double freshness_threshold = 57;
  double high_flap_threshold = 58;
  string name = 59;
  string icon_image = 60;
  string icon_image_alt = 61;
  int32 instance_id = 62;
  double low_flap_threshold = 63;
  string notes = 64;
  string notes_url = 65;
  double notification_interval = 66;
  string notification_period = 67;
  bool notify_on_down = 68;
  bool notify_on_downtime = 69;
  bool notify_on_flapping = 70;
  bool notify_on_recovery = 71;
  bool notify_on_unreachable = 72;
  bool stalk_on_down = 73;
  bool stalk_on_unreachable = 74;
  bool stalk_on_up = 75;
  string statusmap_image = 76;
  bool retain_nonstatus_information = 77;
  bool retain_status_information = 78;
  string timezone = 79;
  uint64 severity_id = 80;
  repeated TagInfo tags = 81;
  uint64 icon_id = 82;
}
```

### Pb Adaptive host

Lorsque la version BBDO 3 est utilisée, cet événement est envoyé lorsqu’un hôte a des changements au niveau de sa configuration.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message AdaptiveHost {
  uint64 host_id = 1;

  optional bool notify = 2;
  optional bool active_checks = 3;
  optional bool should_be_scheduled = 4;
  optional bool passive_checks = 5;
  optional bool event_handler_enabled = 6;
  optional bool flap_detection = 7;
  optional bool obsess_over_host = 8;
  optional string event_handler = 9;
  optional string check_command  = 10;
  optional uint32 check_interval  = 11;
  optional uint32 retry_interval  = 12;
  optional uint32 max_check_attempts  = 13;
  optional bool check_freshness = 14;
  optional string check_period  = 15;
  optional string notification_period  = 16;
}
```

### Pb Host Status

Lorsque la version BBDO 3 est utilisée, ce type d’événement est envoyé à la place de **Host Status**. Son contenu est presque le même mais l’ancien contient certains éléments de configuration en plus. Un **Pb Host Status** est plus petit qu’un **Host Status**. Les éléments manquants se trouvent dans **Pb Host**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message HostStatus {
  uint64 host_id = 1;

  bool checked = 2;
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 3;

  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 4;
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 5;
  int64 last_state_change = 6;
  State last_hard_state = 7;
  int64 last_hard_state_change = 8;
  int64 last_time_up = 9;
  int64 last_time_down = 10;
  int64 last_time_unreachable = 11;

  string output = 12;
  string long_output = 13;
  string perfdata = 14;

  bool flapping = 15;
  double percent_state_change = 16;
  double latency = 17;
  double execution_time = 18;
  int64 last_check = 19;
  int64 next_check = 20;
  bool should_be_scheduled = 21;
  int32 check_attempt = 22;

  int32 notification_number = 23;
  bool no_more_notifications = 24;
  int64 last_notification = 25;
  int64 next_host_notification = 26;

  enum AckType {
    NONE = 0;
    NORMAL = 1;
    STICKY = 2;
  }
  AckType acknowledgement_type = 27;
  int32 scheduled_downtime_depth = 28;
}
```

### Pb Severity

Cet événement est compris dans BBDO 3. Il contient la gravité d’une ressource. Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message Severity {
  uint64 id = 1;
  enum Action {
    ADD = 0;
    DELETE = 1;
    MODIFY = 2;
  }
  Action action = 2;
  uint32 level = 3;
  uint64 icon_id = 4;
  string name = 5;
  enum Type {
    SERVICE = 0;
    HOST = 1;
  }
  Type type = 6;
  uint64 poller_id = 7;
}
```

### Pb Tag

Cet événement est compris dans BBDO 3. Il est utilisé pour associer une balise à une ressource. Il existe quatre types de balises, **SERVICEGROUP**, **HOSTGROUP**, **SERVICECATEGORY**, **HOSTCATEGORY**. Un tag n’est pas associé à un collecteur, mais nous devons savoir quel collecteur a envoyé la balise à des fins de gestion interne, c’est pourquoi le message comporte un élément **poller\_id**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
enum TagType {
  SERVICEGROUP = 0;
  HOSTGROUP = 1;
  SERVICECATEGORY = 2;
  HOSTCATEGORY = 3;
}

message Tag {
  uint64 id = 1;
  enum Action {
    ADD = 0;
    DELETE = 1;
    MODIFY = 2;
  }

  Action action = 2;
  TagType type = 3;
  string name = 4;
  int64 poller_id = 5;
}
```

## Storage

### Metric

Cet événement est généré par un point de terminaison Storage pour notifier qu’un graphique de métriques RRD doit être mis à jour.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ctime| temps| Heure à laquelle la valeur métrique a été générée.| 
| interval| entier non signé| Intervalle de contrôle du service normal en secondes.| 
| metric\_id| entier non signé| ID de la métrique (à partir du tableau des métriques).| 
| name| chaîne| Nom de la métrique.| 
| rrd\_len| entier| Durée de rétention des données RRD en secondes.| 
| value| réel| Valeur de la métrique.| 
| value\_type| entier court| Type de métrique (1 =3D compteur, 2 =3D dérive, 3 =3D absolu, autre =3D jauge).| 
| is\_for\_rebuild| booléen| Défini sur True quand un graphique est en cours de reconstruction (voir l’événement rebuild).| 
| host\_id| entier non signé| L’id de l’hôte auquel cette métrique est attachée.| Depuis la version 3.0.0
| service\_id| entier non signé| L’id du service auquel cette métrique est attachée.| Depuis la version 3.0.0

### Rebuild

Les événements de reconstruction sont générés lorsqu’un point de terminaison Storage détecte qu’un graphique doit être reconstruit. Il envoie d’abord un événement de début de reconstruction (end =3D false), puis des valeurs métriques (événement métrique avec is\_for\_rebuild défini sur True) et enfin un événement de fin de reconstruction (end =3D true).

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| end| booléen| Indicateur de fin. Défini sur True si la reconstruction commence, False si elle se termine.| 
| id| entier non signé| ID de la métrique à reconstruire si is\_index est False, ou ID de l’index à reconstruire (graphique d’état) si is\_index est True.| 
| is\_index| booléen| Indicateur d’index. Reconstruction de l’index (état) si True, reconstruction de la métrique si False.| 

### Remove graph

Un point de terminaison Storage génère un événement de suppression de graphique lorsqu’un graphique doit être supprimé.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| ID de l’index (is\_index =3D true) ou ID de la métrique (is\_index =3D false) à supprimer.| 
| is\_index| booléen| Indicateur d’index. Si True, un graphique d’index (état) sera supprimé. Si False, un graphique de métrique sera supprimé.| 

### Status

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ctime| temps| Heure à laquelle l’état a été généré.| 
| index\_id| entier non signé| ID de l’index.| 
| interval| entier non signé| Intervalle de contrôle du service normal en secondes.| 
| rrd\_len| temps| Rétention des données RRD en secondes.| 
| state| entier court| État du service.| 
| is\_for\_rebuild| booléen| Défini sur True quand un graphique est en cours de reconstruction (voir l’événement rebuild).| 

### Metric mapping

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| index\_id| entier non signé| ID de l’index.| 
| metric\_d| entier non signé| ID de l’index.| 

### Index mapping

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| index\_id| entier non signé| ID de l’index.| 
| host\_id| entier non signé| ID de l’index.| 
| service\_id| entier non signé| ID de l’index.| 

### Pb Rebuild Message

Cet événement est compris dans BBDO 3. Quand certains graphiques doivent être reconstruits. Les messages qui concernent ces reconstructions sont de ce type. Ils remplacent l’ancien message de reconstruction de BBDO.

Il existe trois états pour ce message :

* START : il s’agit du premier état, ce message initialise les métriques qui doivent être reconstruites.
* DATA : une fois que l’état START a été envoyé, un ou plusieurs messages avec l’état DATA peuvent être envoyés au broker RRD.
* END : lorsque tous les événements de reconstruction ont été envoyés, celui-ci est envoyé pour clôturer les reconstructions. Et le broker RRD revient à un état nominal.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message Point {
  int64 ctime = 1;
  double value = 2;
}

message Timeserie {
  repeated Point pts = 1;
  int32 data_source_type = 2;
  uint32 check_interval = 3;
  uint32 rrd_retention = 4;
}

message RebuildMessage {
  enum State {
    START = 0;
    DATA = 1;
    END = 2;
  }
  State state = 1;
  /* Only used on DATA state */
  map<uint64, Timeserie> timeserie = 2;

  /* Only used on START/END state */
  repeated uint64 metric_id = 3;
}
```

### Pb Remove Graph Message

Cet événement est compris dans BBDO 3. Lorsque nous voulons supprimer des fichiers graphiques, nous pouvons utiliser l’API gRPC de centengine et cet appel fait en sorte que cbd génère un **Pb Remove Graph Message**. Deux possibilités sont combinées dans cet événement. Nous pouvons supprimer les graphiques correspondant à certaines données d’index ou les graphiques correspondant à certaines données métriques. Il est également possible de combiner les deux types.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message RemoveGraphMessage {
  repeated uint64 index_ids = 1;
  repeated uint64 metric_ids = 2;
}
```

## BBDO

### Version response

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bbdo\_major| entier court| La version majeure du protocole BBDO utilisée par le pair qui envoie ce paquet **version\_response**. La seule version actuelle du protocole est la 1.0.0.| 
| bbdo\_minor| entier court| La version mineure du protocole BBDO utilisée par le pair qui envoie ce paquet **version\_response**.| 
| bbdo\_patch| entier court| Le correctif du protocole BBDO utilisé par le pair qui envoie ce paquet **version\_response**.| 
| extensions| chaîne| Chaîne séparée par des espaces des extensions prises en charge par le pair qui envoie ce paquet **version\_response**.| 

### Ack

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged events| entier non signé| Nombre d’événements acquittés. Utilisé uniquement par les clients « intelligents » (c’est-à-dire capables d’acquitter des événements). Ne doit pas être utilisé par des clients non intelligents.| 

## BAM

### BA status event

Cet événement est envoyé lorsque le statut d’une BA a changé.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’id de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si la BA est en temps d’arrêt.| Depuis la version 2.8.0 (BBDO 1.2.0).
| last\_state\_change| temps| L’heure du dernier changement d’état de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_acknowledgement| réel| Le niveau d’acquittement de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_downtime| réel| Le niveau de temps d’arrêt de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_nominal| réel| Le niveau nominal de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state| entier court| L’état de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state\_changed| booléen| True si l’état de la BA vient de changer.| Depuis la version 2.8.0 (BBDO 1.2.0).

### KPI status event

Cet événement est envoyé lorsque le statut d’un KPI a changé.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| kpi\_id| entier non signé| L’ID du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| bool| True si le KPI est en temps d’arrêt.| 
| level\_acknowledgement\_hard| réel| Le niveau d’acquittement hard du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_acknowledgement\_soft| réel| Le niveau d’acquittement soft du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_downtime\_hard| réel| Le niveau de temps d’arrêt hard du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_downtime\_soft| réel| Le niveau de temps d’arrêt soft du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_nominal\_hard| réel| Le niveau nominal hard du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| level\_nominal\_soft| réel| Le niveau nominal soft du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state\_hard| entier court| L’état hard du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state\_soft| entier court| L’état soft du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| last\_state\_change| temps| L’heure du dernier changement d’état du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| last\_impact| réel| Le dernier impact du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| valid| bool| True si le KPI est valide.| 

### Meta service status event

Cet événement est envoyé lorsque le statut d’un méta-service a changé.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| meta\_service\_id| entier non signé| L’ID du méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| value| réel| La valeur du méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state\_changed| booléen| True si l’état vient de changer.| Depuis la version 2.8.0 (BBDO 1.2.0).

### BA-event event

Cet événement est envoyé lorsqu’un nouvel événement BA est ouvert, ou qu’un ancien est fermé.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| first\_level| réel| Le premier niveau de l’événement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’événement. 0 ou (temps)-1 pour un événement ouvert.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si BA était en arrêt pendant l’événement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’événement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| status| entier court| Le statut de la BA pendant l’événement.| Depuis la version 2.8.0 (BBDO 1.2.0).

### KPI-event event

Cet événement est envoyé lorsqu’un nouvel événement KPI est ouvert, ou qu’un ancien est fermé.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| kpi\_id| entier non signé| L’ID du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’événement. 0 ou (temps)-1 pour un événement ouvert.| Depuis la version 2.8.0 (BBDO 1.2.0).
| impact\_level| entier| Le niveau de l’impact.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si BA était en arrêt pendant l’événement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| first\_output| chaîne| Le premier output du KPI pendant l’événement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| perfdata| chaîne| La première perfdata du KPI pendant l’événement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’événement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| status| entier court| Le statut de la BA pendant l’événement.| Depuis la version 2.8.0 (BBDO 1.2.0).

### BA duration event event

Cet événement est envoyé lorsqu’un nouvel événement de durée BA est calculé par le broker BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| real\_start\_time| temps| Le premier niveau de l’événement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’événement, dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’événement, dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| duration| entier non signé| end\_time - start\_time.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_duration| entier non signé| La durée de l’événement dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| timeperiod\_is\_default| booléen| True si la période de temps est la valeur par défaut pour cette BA.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension BA

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_name| chaîne| Le nom de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_description| chaîne| La description de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_percent\_crit| réel| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_percent\_warn| réel| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_duration\_crit| entier non signé| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_duration\_warn| entier non signé| | Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension KPI

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| kpi\_id| entier non signé| L’ID du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_id| entier non signé| L’identifiant de la BA parent de ce KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_name| chaîne| Le nom de la BA parent de ce KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| host\_id| entier non signé| L’ID de l’hôte associé à ce KPI pour le KPI de service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| host\_name| chaîne| Le nom de l’hôte associé à ce KPI pour le KPI de service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| service\_id| entier non signé| L’ID du service associé à ce KPI pour le KPI de service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| service\_description| chaîne| La description du service associé à ce KPI pour le KPI de service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| kpi\_ba\_id| entier non signé| L’ID de la BA associée à ce KPI pour le KPI de BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| kpi\_ba\_name| chaîne| Le nom de la BA associée à ce KPI pour le KPI de BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| meta\_service\_id| entier non signé| L’ID du méta-service associé à ce KPI pour le KPI de méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| meta\_service\_name| chaîne| Le nom du méta-service associé à ce KPI pour le KPI de méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| boolean\_id| entier non signé| L’ID de l’expression booléenne associée à ce KPI pour le KPI booléen.| Depuis la version 2.8.0 (BBDO 1.2.0).
| boolean\_name| chaîne| Le nom de l’expression booléenne associée à ce KPI pour le KPI booléen.| Depuis la version 2.8.0 (BBDO 1.2.0).
| impact\_warning| réel| L’impact d’un état d’alerte pour ce KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| impact\_critical| réel| L’impact d’un état critique pour ce KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| impact\_unknown| réel| L’impact d’un état inconnu pour ce KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension BA BV relation

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_id| entier non signé| L’ID de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension BV

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bv\_id| entier non signé| L’ID de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_name| chaîne| Le nom de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_description| chaîne| La description de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension table signal

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

Ce signal est envoyé avant le dump de toutes les dimensions, et à nouveau à la fin du dump.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| update\_started| booléen| True si c’est le début du dump, False si c’est la fin.| Depuis la version 2.8.0 (BBD0 1.2.0).

### Rebuild signal

Cet événement est envoyé lorsqu’une reconstruction des durées et des disponibilités des événements est demandée au point de terminaison du broker BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bas\_to\_rebuild| chaîne| Une chaîne contenant les ID de toutes les BA à reconstruire, séparés par une virgule et un espace (par exemple « 1, 5, 8, 12 »).| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension timeperiod

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| tp\_id| entier non signé| L’ID de la période de temps.| Depuis la version 2.8.0 (BBDO 1.2.0).
| name| chaîne| Le nom de la période de temps.| Depuis la version 2.8.0 (BBDO 1.2.0).
| monday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).
| tuesday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).
| wednesday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).
| thursday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).
| friday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).
| saturday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sunday| chaîne| La règle de la période de temps pour ce jour.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension BA timeperiod relation

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| timeperiod\_id| entier non signé| L’ID de la période de temps.| Depuis la version 2.8.0 (BBDO 1.2.0).
| is\_default| booléen| True si la période de temps est celle par défaut pour cette BA.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension timeperiod exception

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| timeperiod\_id| entier non signé| L’ID de la période de temps ayant cette exception.| Depuis la version 2.8.0
| daterange| chaîne| Une chaîne de caractères contenant la date de la plage.| Depuis la version 2.8.0
| timerange| chaîne| Une chaîne de caractères contenant l’heure de la plage.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Dimension timeperiod exclusion

Cet événement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| timeperiod\_id| entier non signé| L’ID de la période de temps ayant cette exclusion.| Depuis la version 2.8.0 (BBDO 1.2.0).
| excluded\_timeperiod\_id| entier non signé| L’ID de la période exclue.| Depuis la version 2.8.0 (BBDO 1.2.0).

### Inherited downtime

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bad\_id| entier non signé| L’ID de la BA en temps d’arrêt.| 
| in\_downtime| booléen| True si le BA est en temps d’arrêt.| 

## Extcmd

### Command request

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| command| chaîne| La demande de commande.| 
| endp| chaîne| Le point de terminaison auquel cette commande est destinée.| 
| uuid| chaîne| L’uuid de cette demande.| 
| with\_partial\_result| booléen| True si la commande doit recevoir une réponse avec un résultat partiel.| 

### Command result

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| code| entier| Le code de retour de cette commande.| 
| uuid| chaîne| L’uuid de la demande dont cette commande est le résultat.| 
| msg| chaîne| Le message en chaîne du résultat de la commande.| 
