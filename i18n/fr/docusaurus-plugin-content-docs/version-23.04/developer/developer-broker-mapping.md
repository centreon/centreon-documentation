---
id: developer-broker-mapping
title: Mapping d’évènements Centreon Broker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon Broker utilise des tables de correspondance globales pour les évènements qui peuvent être échangés. Cette page répertorie les propriétés disponibles pour chaque type d’évènement.

## NEB

### Acknowledgement

Lorsqu'un incident est acquitté, cela signifie que le problème a été pris en compte par un utilisateur de la supervision. Quand l'utilisateur acquitte le problème, Centreon Engine émet un évènement **acknowledgement**. Cet évènement est différent en BBDO v2 et en BBDO v3.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Acknowledgement

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       1 | 65537 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAcknowledgement

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      45 | 65581 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Acknowledgement** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbAcknowledgement** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message Acknowledgement {
  uint64 host_id = 1;                // Host ID.
  uint64 service_id = 2;             // Service ID or 0 for a host acknowledgement.
  uint64 instance_id = 3;            // Instance ID.
  enum ResourceType {
    HOST = 0;
    SERVICE = 1;
  }
  ResourceType type = 4;             // Type of the resource.
  string author = 5;                 // Acknowledgement author.
  string comment_data = 6;           // Comment associated to the acknowledgement.
  bool sticky = 7;                   // Sticky flag.
  bool notify_contacts = 8;          // Notification flag.
  uint64 entry_time = 9;             // Time at which the acknowledgement was created.
  uint64 deletion_time = 10;         // Time at which the acknowledgement was deleted.
  bool persistent_comment = 11;      // True if the comment is persistent.
  int32 state = 12;                  // The host / service state.
}
```

</TabItem>
</Tabs>

### Comment

Dans certaines situations, l'utilisateur doit saisir un commentaire dans l'interface Centreon. Quand le commentaire est validé, Centreon Engine émet un évènement **comment**. Cet évènement est différent en BBDO v2 et en BBDO v3.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Comment

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       2 | 65538 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbComment

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      35 | 65571 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Comment** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbComment** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

message Comment {
  BBDOHeader header = 1;     // Not currently used.

  enum Src {
    INTERNAL = 0;            // The comment originates from the monitoring engine.
    EXTERNAL = 1;            // The comment comes from another source.
  }

  enum Type {
    NO_TYPE = 0;
    HOST = 1;
    SERVICE = 2;
  }

  enum EntryType {
    NO_ENTRY_TYPE = 0;
    USER = 1;
    DOWNTIME = 2;
    FLAPPING = 3;
    ACKNOWLEDGMENT = 4;
  }

  string author = 2;         // Comment author.
  Type type = 3;             // The comment type following the Type enum.
  string data = 4;           // The content of the comment.
  uint64 deletion_time = 5;  // Time a which the comment was deleted or 0 if the comment was not deleted (yet).
  uint64 entry_time = 6;     // Time at which the comment was created.
  EntryType entry_type = 7;  // Entry type following the EntryType enum.
  uint64 expire_time = 8;    // Comment expiration time or 0 if no expiration time.
  bool expires = 9;          // True if the comment expired.
  uint64 host_id = 10;       // Host ID.
  uint64 internal_id = 11;   // Internal monitoring engine ID of the comment.
  bool persistent = 12;      // True if the comment is persistent.
  uint64 instance_id = 13;   // Instance ID.
  uint64 service_id = 14;    // Service ID or 0 for a host comment.
  Src source = 15;           // Source of the comment following the Src enum.
}
```

</TabItem>
</Tabs>

### Custom variable

Une variable personnalisée consiste en une variable ayant un nom et une valeur. Elle provient souvent de macros Centreon Engine.
Pour que Centreon fonctionne correctement, ces variables personnalisées doivent être envoyées à Centreon Broker. Elles sont envoyées via un évènement **custom variable**. Cet évènement est différent en BBDO v2 et en BBDO v3.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::CustomVariable

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       3 | 65539 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbCustomVariable

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      37 | 65573 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::CustomVariable** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbCustomVariable** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

message CustomVariable {
  enum VarType {
    HOST = 0;
    SERVICE = 1;
  }

  BBDOHeader header = 1;     // Not used
  uint64 host_id = 2;        // Host ID.
  uint64 service_id = 3;     // Service ID or 0 for a host custom variable.
  bool modified = 4;         // True if the variable was modified.
  string name = 5;           // Variable name.
  uint64 update_time = 6;    // Last time at which the variable was updated.
  string value = 7;          // Variable value.
  string default_value = 8;  // The default value of the custom variable.
  bool enabled = 9;          // True if the custom variable is enabled.
  bool password = 10;        // True if the value must be hidden.
  VarType type = 11;         // One of the values of the VarType enum.
}
```

</TabItem>
</Tabs>

### Custom variable status

Les évènements **Custom variable status** sont générés lorsqu’une variable personnalisée doit être mise à jour.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::CustomVariableStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       4 | 65540 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description
|----------|----------|----------
| host\_id| entier non signé| ID de l’hôte.
| modified| booléen| True si la variable a été modifiée.
| name| chaîne| Nom de la variable.
| service\_id| entier non signé| ID de service. 0 si c’est une variable d’hôte personnalisée.
| update\_time| temps| Dernière heure à laquelle la variable a été mise à jour.
| value| chaîne| Valeur variable.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbCustomVariableStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      38 | 65574 |

Le message Protobuf pour **PbCustomVariableStatus** est le même que celui pour **PbCustomVariable**,
excepté que certains des champs peuvent ne pas être renseignés.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

message CustomVariable {
  enum VarType {
    HOST = 0;
    SERVICE = 1;
  }

  BBDOHeader header = 1;     // Not used
  uint64 host_id = 2;        // Host ID.
  uint64 service_id = 3;     // Service ID or 0 for a host custom variable.
  bool modified = 4;         // True if the variable was modified.
  string name = 5;           // Variable name.
  uint64 update_time = 6;    // Last time at which the variable was updated.
  string value = 7;          // Variable value.
  string default_value = 8;  // The default value of the custom variable.
  bool enabled = 9;          // True if the custom variable is enabled.
  bool password = 10;        // True if the value must be hidden.
  VarType type = 11;         // One of the values of the VarType enum.
}
```

</TabItem>
</Tabs>

### Downtime

Cet évènement est émis par Centreon Engine lorsqu'une plage de maintenance est définie sur une ressource.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Downtime

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       5 | 65541 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbDowntime

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      36 | 65572 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Downtime** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbDowntime** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message Downtime {
  enum DowntimeType {
    NOT_USED = 0;
    SERVICE = 1;                  // The downtime is set on a service.
    HOST = 2;                     // The downtime is set on a host.
    ANY = 3;                      // This is kept for retro compatibility (not used).
  };
  uint64 id = 1;                  // Internal monitoring engine ID.
  uint64 instance_id = 2;         // Instance ID.
  uint64 host_id = 3;             // Host ID.
  uint64 service_id = 4;          // Service ID or 0 if this is a host downtime.
  string author = 5;              // Downtime author.
  string comment_data = 6;        // Downtime comment.
  DowntimeType type = 7;          // One value from the previous enum.
  uint32 duration = 8;            // Downtime duration.
  uint64 triggered_by = 9;        // Internal ID of the downtime that triggered this downtime.
  int64 entry_time = 10;          // Time at which the downtime was created.
  uint64 actual_start_time = 11;  // Actual time at which the downtime started.
  uint64 actual_end_time = 12;    // Actual time at which the downtime ended.
  uint64 start_time = 13;         // Scheduled downtime start time.
  uint64 deletion_time = 14;      // Time at which the downtime was deleted.
  uint64 end_time = 15;           // Scheduled downtime end time.
  bool started = 16;              // True if the downtime has been started.
  bool cancelled = 17;            // True if the downtime was cancelled.
  bool fixed = 18;                // True if the downtime is fixed, false if it is flexible.
}
```

</TabItem>
</Tabs>

### Event handler

Les **Event handlers** sont des commandes système optionnelles (scripts ou exécutables) qui sont exécutées lorsqu'un changment de statut se produit pour une ressource. Lorsqu'une commande de ce type est configurée, un évènement **event handler** est émis par Centreon Engine. Ces évènements BBDO sont généralement envoyés lorsque Centreon Engine est redémarré ou rechargé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::EventHandler

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       6 | 65542 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description
|----------|----------|----------
| early\_timeout| booléen| True si le gestionnaire d’évènements a été interrompu.
| end\_time| temps| Heure à laquelle l’exécution du gestionnaire d’évènements s’est terminée.
| execution\_time| réel| Temps d’exécution en secondes.
| handler\_type| entier court| 0 pour le gestionnaire d’évènements spécifiques à l’hôte, 1 pour le gestionnaire d’évènements spécifiques au service, 2 pour le gestionnaire d’évènements global pour les hôtes et 3 pour le gestionnaire d’évènements global pour les services.
| host\_id| entier non signé| ID de l’hôte.
| return\_code| entier court| Valeur renvoyée par le gestionnaire d’évènements.
| service\_id| entier non signé| ID de service. 0 si c’est un gestionnaire d’évènements d’hôte.
| start\_time| temps| Heure à laquelle le gestionnaire d’évènements a démarré.
| state| entier court| État de l’hôte / du service.
| state\_type| entier court| 0 pour SOFT, 1 pour HARD.
| timeout| entier court| Délai d’attente du gestionnaire d’évènements en secondes.
| command\_args| chaîne| Arguments du gestionnaire d’évènements.
| command\_line| chaîne| Ligne de commande du gestionnaire d’évènements.
| output| chaîne| Output retourné par le gestionnaire d’évènements.
| source\_id| entier non signé| L’id de l’instance source de cet évènement.
| destination\_id| entier non signé| L’id de l’instance de destination de cet évènement.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Flapping status

Lorsque le statut d'une ressource est instable, Centreon Engine le marque comme en bagotage (**flapping**). Historiquement, un évènement **flapping status** état émis dans ces cas-là. Cela n'est plus d'actualité. L'évènement **flapping status** n'existe plus.

</TabItem>
</Tabs>

### Tag

L'évènement **tag** est un nouvel évènement de configuration, actuellement utilisé pour les catégories et les groupes.

En ce moment il est utilisé (entre autres) en parallèle avec les évènements **group**, mais devrait devenir plus global dans le futur.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

L'évènement **tag** n'existe pas en BBDO v2.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbTag

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      34 | 65570 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3.  Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Tag** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbTag** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
enum TagType {
  SERVICEGROUP = 0;       // Tag representing a service group
  HOSTGROUP = 1;          // Tag representing a host group
  SERVICECATEGORY = 2;    // Tag representing a service category
  HOSTCATEGORY = 3;       // Tag representing a host category
}

message Tag {
  uint64 id = 1;          // Tag ID (unicity obtained by coupling it with the type)
  enum Action {
    ADD = 0;              // With this action, the event adds a new tag.
    DELETE = 1;           // With this action, the event removes a tag.
    MODIFY = 2;           // With this action, the event modifies a tag.
  }

  Action action = 2;      // The current action for this event.
  TagType type = 3;       // The type of this tag.
  string name = 4;        // Name of this tag.
  int64 poller_id = 5;    // Poller ID.
}
```

</TabItem>
</Tabs>

### Host

Cet évènement est émis chaque fois que la configuration d'un hôte est modifiée et la configuration déployée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Host

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      12 | 65548 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHost

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      30 | 65566 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Host** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbHost** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message TagInfo {
  uint64 id = 1;
  TagType type = 2;
}

message Host {
  uint64 host_id = 1;                     // Host ID.

  bool acknowledged = 2;                  // True if the problem has been acknowledged.
  AckType acknowledgement_type = 3;       // Acknowledgement type.

  bool active_checks = 4;                 // True if active checks are enabled.
  bool enabled = 5;                       // True if this host is enabled.
  int32 scheduled_downtime_depth = 6;     // Number of active downtimes.
  string check_command = 7;               // Check command.
  int32 check_interval = 8;               // Interval in units (usually 60s) between 2 checks.
  string check_period = 9;                // Time period when checks are authorized

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 10;              // Type of the last check.
  int32 check_attempt = 11;               // Number of failed checks.
  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 12;                       // Current state.
  bool event_handler_enabled = 13;        // True if an event handler is configured on this host.
  string event_handler = 14;              // Command executed when state changes.
  double execution_time = 15;             // Duration of the last check.
  bool flap_detection = 16;               // True if flap detection is enabled.
  bool checked = 17;                      // check has been executed at least once.
  bool flapping = 18;                     // True if the host is flapping.
  int64 last_check = 19;                  // Timestamp of the last check.
  State last_hard_state = 20;             // Last hard state.
  int64 last_hard_state_change = 21;      // Timestamp of the last hard state change.
  int64 last_notification = 22;           // Timestamp of the last notification.
  int32 notification_number = 23;         // Current notification number or 0 if not.
  int64 last_state_change = 24;           // Timestamp of the last state change.
  int64 last_time_down = 25;              // Timestamp of the last failed check.
  int64 last_time_unreachable = 26;       // Timestamp of the last failed check with all parent hosts down.
  int64 last_time_up = 27;                // Timestamp of the last successful check.
  int64 last_update = 28;                 // Timestamp of the last message creation.
  double latency = 29;                    // Delay between scheduled check time and real check time.
  int32 max_check_attempts = 30;          // Number of failed check after which host state becomes a gard fail state.
  int64 next_check = 31;                  // Next scheduled check timestamp.
  int64 next_host_notification = 32;      // Next renotification timestamp.
  bool no_more_notifications = 33;        // If true, no other notification will be sent.
  bool notify = 34;                       // Notifications allowed
  string output = 35;                     // Output of the check command.
  bool passive_checks = 36;               // Passive checks are enabled.
  double percent_state_change = 37;       // Used by flapping and compared with high and low flap thresholds.
  string perfdata = 38;                   // perfdata extracted from the command's output.
  double retry_interval = 39;             // interval between two checks when host isn't in up state and state type is soft.
  bool should_be_scheduled = 40;          // True if next check should be scheduled
  bool obsess_over_host = 41;             // True if OCSP command is executed after check or notification command.

  enum StateType {
    SOFT = 0;                             // State not still confirmed.
    HARD = 1;                             // State confirmed.
  }

  StateType state_type = 42;              // The state type.
  string action_url = 43;                 // Optional url available in the WUI linked to this host.
  string address = 44;                    // An address
  string alias = 45;                      // An alias for this host.
  bool check_freshness = 46;              // Passive freshness check activated
  bool default_active_checks = 47;        // Same as active_checks but the default value.
  bool default_event_handler_enabled = 48;// Same as event_handler but the default value.
  bool default_flap_detection = 49;       // Same as flap_detection but the default value.
  bool default_notify = 50;               // Same as notify byt the default value.
  bool default_passive_checks = 51;       // Same as passive checks but the default value.
  string display_name = 52;               // Name displayed in the WUI
  double first_notification_delay = 53;   // Delay before notify in units (usually 60s).
  bool flap_detection_on_down = 54;       // Down state is taken into account for flap detection.
  bool flap_detection_on_unreachable = 55;// Unreachable state is taken into account for flap detection.
  bool flap_detection_on_up = 56;         // Up state is taken into account for flap detection.
  double freshness_threshold = 57;        // Delay after check result is stale.
  double high_flap_threshold = 58;        // If percent state change is higher than this, host is considered flapping.
  string name = 59;                       // Host name.
  string icon_image = 60;                 // Icon displayed in the WUI for the host.
  string icon_image_alt = 61;             // Alternative string for icon_image.
  int32 instance_id = 62;                 // Instance ID.
  double low_flap_threshold = 63;         // If percent state change is lower than this, host is not considered flapping.
  string notes = 64;                      // Tooltip in resources status page.
  string notes_url = 65;                  // clickable url in resources status page.
  double notification_interval = 66;      // Interval between two notifications.
  string notification_period = 67;        // Time period during which notifications are allowed.
  bool notify_on_down = 68;               // Users are notified if host becomes down.
  bool notify_on_downtime = 69;           // Users are notified if host enters in downtime.
  bool notify_on_flapping = 70;           // Users are notified if host is flapping.
  bool notify_on_recovery = 71;           // Users are notified if host becomes up.
  bool notify_on_unreachable = 72;        // Users are notified if host becomes unreachable.
  bool stalk_on_down = 73;                // Logs check output changes if state is down.
  bool stalk_on_unreachable = 74;         // Logs check output changes if state is unreachable.
  bool stalk_on_up = 75;                  // Logs check output changes if state is up.
  string statusmap_image = 76;            // Image displayed in map.
  bool retain_nonstatus_information = 77; // Unused
  bool retain_status_information = 78;    // Unused
  string timezone = 79;                   // Time zone of the host.
  uint64 severity_id = 80;                // Severity ID.
  repeated TagInfo tags = 81;             // Tags linked to this host.
  uint64 icon_id = 82;                    // Icon ID.
}
```

</TabItem>
</Tabs>

### Host check

Ce type d'évènement est émis par Centreon Engine lorsqu'un contrôle est exécuté sur un hôte.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostCheck

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       8 | 65544 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| active\_checks\_enabled| booléen| True si les contrôles actifs sont activés sur l’hôte.| 
| check\_type| entier court| | 
| host\_id| entier non signé| ID de l’hôte.| 
| next\_check| temps| Heure à laquelle le prochain contrôle est prévu.| 
| command\_line| chaîne| Ligne de commande du contrôle.| 
| source\_id| entier non signé| L’ID de l’instance source de cet évènement.| 
| destination\_id| entier non signé| L’ID de l’instance de destination de cet évènement.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHostCheck

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      39 | 65575 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::HostCheck** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbHostCheck** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

enum CheckType {
    CheckActive = 0;
    CheckPassive = 1;
}

message Check {
    BBDOHeader header = 1;

    bool active_checks_enabled = 2;   // True if active checks are enabled on the host.
    CheckType check_type = 3;         // One of the values in CheckType.
    string command_line = 4;          // Check command line.
    uint64 host_id = 5;               // Host ID.
    uint64 next_check = 6;            // Timestamp at which the next check is scheduled.
    uint64 service_id = 7;            // Service ID or 0 for a host check.
}
```

</TabItem>
</Tabs>

### Host dependency

Cet évènement est émis lorsqu'une dépendance entre hôtes est définie, et que la configuration est déployée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostDependency

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       9 | 65545 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| dependency\_period| chaîne| | 
| dependent\_host\_id| entier non signé| | 
| enabled| booléen| | 
| execution\_failure\_options| chaîne| | 
| inherits\_parent| booléen| | 
| host\_id| entier non signé| | 
| notification\_failure\_options| chaîne| | 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Host group

Cet évènement est émis lorsqu'un groupe d'hôtes est créé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostGroup

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      10 | 65546 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| host\_group\_id| entier non signé| | 
| name| chaîne| Nom du groupe.| 
| enabled| booléen| True si le groupe est activé, False s’il ne l’est pas (suppression).| 
| poller\_id| entier non signé| | 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Host group member

Ceci est un évènement de configuration. Il est envoyé juste après un évènement **hostgroup** afin de détailler les membres du groupe à configurer. En BBDO v3, la version BBDO v2 de cet évènement est toujours utilisée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostGroupMember

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      11 | 65547 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| enabled| booléen| True si l'hôte est membre du groupe, False s'il ne l’est pas (suppression).| 
| group| chaîne| Nom du groupe.| 
| instance\_id| entier non signé| ID de l’instance.| 
| host\_id| entier non signé| ID de l’hôte.| 
| source\_id| entier non signé| L’ID de l’instance source de cet évènement.| 
| destination\_id| entier non signé| L’ID de l’instance de destination de cet évènement.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Host parent

Ceci est un évènement de configuration envoyé lorsqu'un hôte parent est défini. En BBDO v3, la version BBDO v2 de cet évènement est toujours utilisée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostParent

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      13 | 65549 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| enabled| booléen| True si la fonction parent est activée, False si elle ne l’est pas (suppression).| 
| child\_id| entier non signé| ID d’hôte enfant.| 
| parent\_id| entier non signé| ID d’hôte parent.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Host status

Ceci est un évènement émis par Centreon Engine lorsqu'une modification en temps réel est appliquée à un hôte (statut, output, métriques...).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |       14 | 65550 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHostStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      32 | 65538 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::HostStatus** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbHostStatus** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message HostStatus {
  uint64 host_id = 1;                 // Host ID.

  bool checked = 2;                   // True if the host is checked.
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 3;           // Type of the last check (ACTIVE/PASSIVE).

  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 4;                    // Current state of the host.
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 5;           // Confirmed or not state (HARD/SOFT).
  int64 last_state_change = 6;        // Timestamp of the last state change.
  State last_hard_state = 7;          // Last hard state.
  int64 last_hard_state_change = 8;   // Timestamp of the last hard state.
  int64 last_time_up = 9;             // Timestamp of the last up state.
  int64 last_time_down = 10;          // Timestamp of the last down state.
  int64 last_time_unreachable = 11;   // Timestamp of the last unreachable state.

  string output = 12;                 // Check output.
  string long_output = 13;            // Check long output.
  string perfdata = 14;               // Check performance data.

  bool flapping = 15;                 // True if the host is flapping.
  double percent_state_change = 16;   // Used by flapping and compared with high and low flap thresholds
  double latency = 17;                // Delay between scheduled check time and real check time.
  double execution_time = 18;         // Duration of last check.
  int64 last_check = 19;              // Timestamp of the last check.
  int64 next_check = 20;              // Timestamp at which the next check is scheduled.
  bool should_be_scheduled = 21;      // True if the next check should be scheduled.
  int32 check_attempt = 22;           // Number of failed checks.

  int32 notification_number = 23;     // Number of notifications sent since the start of the problem.
  bool no_more_notifications = 24;    // No other notification will be sent.
  int64 last_notification = 25;       // Timestamp of last notification sent.
  int64 next_host_notification = 26;  // Timestamp of next renotification.

  AckType acknowledgement_type = 27;  // One value of the AckType enum.
  int32 scheduled_downtime_depth = 28;// Number of active downtimes.
}
```

</TabItem>
</Tabs>

### Instance

Cet évènement est émis par Centreon Engine lorsqu'Engine commence à envoyer sa configuration, ou bien lorqu'Engine s'arrête.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Instance

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      15 | 65551 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbInstance

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      44 | 65580 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Instance** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbInstance** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

message Instance {
  BBDOHeader header = 1;

  string engine = 2;        // Name of the monitoring engine used on this instance.
  bool running = 3;         // Whether or not this instance is running.
  string name = 4;          // Instance name.
  int64 pid = 5;            // Monitoring engine PID.
  uint64 instance_id = 6;   // Instance ID.
  int64 end_time = 7;       // Timestamp at which the instance shuts down.
  int64 start_time = 8;     // Timestamp at which the instance starts.
  string version = 9;       // Version of the emitter of this message.
}
```

</TabItem>
</Tabs>

### Instance status

Cet évènement est émis régulièrement par Centreon Engine en tant que watchdog. Cet évènement informe Broker que le collecteur est toujours vivant (en même temps que diverses autres informations).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::InstanceStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      16 | 65552 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| active\_host\_checks\_enabled| booléen| Si les contrôles d’hôtes actifs sont activés ou non de manière globale.| 
| active\_service\_checks\_enabled| booléen| Si les contrôles de services actifs sont activés ou non de manière globale.| 
| check\_hosts\_freshness| booléen| Si le contrôle de la fraîcheur des hôtes est activé ou non de manière globale.| 
| check\_services\_freshness| booléen| Si le contrôle de la fraîcheur des services est activé ou non de manière globale.| 
| event\_handler\_enabled| booléen| Si les gestionnaires d’évènements sont activés ou non de manière globale.| 
| flap\_detection\_enabled| booléen| Si la détection des bagotements est activée ou non de manière globale.| 
| id| entier non signé| ID de l’instance.| 
| last\_alive| temps| La dernière fois que l’instance a été identifiée comme étant vivante.| 
| last\_command\_check| temps| Dernière fois qu’une commande de contrôle a été exécutée.| 
| notifications\_enabled| booléen| Si les notifications sont activées ou non de manière globale.| 
| obsess\_over\_hosts| booléen| Si oui ou non le moteur de supervision remontera les résultats de contrôles des hôtes.| 
| obsess\_over\_services| booléen| Si oui ou non le moteur de supervision remontera les résultats de contrôles des services.| 
| passive\_host\_checks\_enabled| booléen| Si les contrôles passifs d’hôtes sont activés ou non de manière globale.| 
| passive\_service\_checks\_enabled| booléen| Si les contrôles passifs de services sont activés ou non de manière globale.| 
| global\_host\_event\_handler| chaîne| Gestionnaire d’évènements global pour les hôtes.| 
| global\_service\_event\_handler| chaîne| Gestionnaire d’évènements global pour les services.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbInstanceStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      42 | 65578 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::InstanceStatus** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbInstanceStatus** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

message InstanceStatus {
  BBDOHeader header = 1;

  bool event_handlers = 2;                    // Whether or not event handlers are globally enabled.
  bool flap_detection = 3;                    // Whether or not flap detection is globally enabled.
  bool notifications = 4;                     // Whether or not notifications are globally enabled.
  bool active_host_checks = 5;                // Whether or not active host checks are globally enabled.
  bool active_service_checks = 6;             // Whether or not active service checks are globally enabled.
  bool check_hosts_freshness = 7;             // Whether or not hosts freshness checking is globally enabled.
  bool check_services_freshness =  8;         // Whether or not services freshness checking is globally enabled.
  string global_host_event_handler = 9;       // Global host event handler.
  string global_service_event_handler = 10;   // Global service event handler.
  uint64 last_alive = 11;                     // Last time the instance was known alive.
  int64 last_command_check = 12;              // Last time a check command was executed.
  bool obsess_over_hosts = 13;                // Whether or not the monitoring engine should obsess over hosts.
  bool obsess_over_services = 14;             // Whether or not the monitoring engine should obsess over services.
  bool passive_host_checks = 15;              // Whether or not passive host checks are globally enabled.
  bool passive_service_checks = 16;           // Whether or not passive service checks are globally enabled.
  uint64 instance_id = 17;                    // Instance ID.
}
```

</TabItem>
</Tabs>

### Log entry

Centreon Engine génère beaucoup de logs. Certains sont envoyés à Centreon Broker
afin d'être stockés dans la base de données. Ces logs sont envoyés via des évènements **log entry**.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::LogEntry

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      17 | 65553 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbLogEntry

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      41 | 65577 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::LogEntry** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbLogEntry** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message LogEntry {
  enum LogType {
    SOFT = 0;
    HARD = 1;
  }
  enum MsgType {
    SERVICE_ALERT = 0;
    HOST_ALERT = 1;
    SERVICE_NOTIFICATION = 2;
    HOST_NOTIFICATION = 3;
    WARNING = 4;
    OTHER = 5;
    SERVICE_INITIAL_STATE = 8;
    HOST_INITIAL_STATE = 9;
    SERVICE_ACKNOWLEDGE_PROBLEM = 10;
    HOST_ACKNOWLEDGE_PROBLEM = 11;
    SERVICE_EVENT_HANDLER = 12;
    HOST_EVENT_HANDLER = 13;
    GLOBAL_SERVICE_EVENT_HANDLER = 14;
    GLOBAL_HOST_EVENT_HANDLER = 15;
  }

  uint64 ctime = 1;                     // Log timestamp.
  string instance_name = 2;             // Instance name.
  string output = 3;                    // Output.
  uint64 host_id = 4;                   // Host ID.
  uint64 service_id = 5;                // Service ID or 0 if log entry does not refer to a specific service.
  string host_name = 6;                 // Host name.
  string service_description = 7;       // Service description or empty if log entry does not refer to a specific service.
  string notification_contact = 8;      // Notification contact.
  string notification_cmd = 9;          // Notification command.
  LogType type = 10;                    // One value of LogType.
  MsgType msg_type = 11;                // One value of MsgType.
  int32 status = 12;                    // Host / service status.
  int32 retry = 13;                     // Current check attempt.
}
```

</TabItem>
</Tabs>

### Module

Les évènements relatifs aux modules sont générés lors du chargement ou du déchargement des modules de Centreon Broker. Ils sont peu utiles car les seuls modules disponibles dans Engine sont les modules obligatoires **external command** et **cbmod**.

L'évènement **Module** devrait être supprimé dans un futur proche.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Module

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      18 | 65554 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| args| chaîne| Arguments du module.| 
| enabled| booléen| Si ce module est activé ou non.| 
| filename| chaîne| Chemin d’accès au fichier du module.| 
| instance\_id| entier non signé| ID de l’instance.| 
| loaded| booléen| Si ce module est chargé ou non.| 
| should\_be\_loaded| booléen| Si ce module doit être (aurait dû être) chargé ou non.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Service

Ceci est un évènement de configuration. Il est émis par Centreon Engine lorsque la configuration d'un service est modifiée, et que la configuration est déployée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Service

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      23 | 65559 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbService

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      27 | 65563 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Service** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbService** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
enum ServiceType {
  SERVICE = 0;
  METASERVICE = 2;
  BA = 3;
  ANOMALY_DETECTION = 4;
}

enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message Service {
  uint64 host_id = 1;                         // Host ID.
  uint64 service_id = 2;                      // Service ID.

  bool acknowledged = 3;                      // Is it currently acknowledged?
  AckType acknowledgement_type = 4;           // AckType value.

  bool active_checks = 5;                     // Are active checks enabled?
  bool enabled = 6;                           // Is this service active?
  int32 scheduled_downtime_depth = 7;         // Number of active downtimes.
  string check_command = 8;                   // Command executed.
  uint32 check_interval = 9;                  // Interval in units (usually 60s) between 2 checks.
  string check_period = 10;                   // Time period when checks are authorized.

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 11;                  // CheckType value.
  int32 check_attempt = 12;                   // Number of failed checks.
  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 13;                           // Current state of this service.
  bool event_handler_enabled = 14;            // Event handler enabled?
  string event_handler = 15;                  // Command executed when state changes.
  double execution_time = 16;                 // Duration of last check.
  bool flap_detection = 17;                   // Is flap detection enabled?
  bool checked = 18;                          // Is this service checked?
  bool flapping = 19;                         // Is this service flapping?
  int64 last_check = 20;                      // Timestamp of the last check.
  State last_hard_state = 21;                 // Last hard state.
  int64 last_hard_state_change = 22;          // Timestamp of the last hard state change.
  int64 last_notification = 23;               // Timestamp of the last notification.
  int32 notification_number = 24;             // Number of notifications sent since the start of the problem.
  int64 last_state_change = 25;               // Timestamp of the last state change.
  int64 last_time_ok = 26;                    // Timestamp of the last check OK return code.
  int64 last_time_warning = 27;               // Timestamp of the last check WARNING return code.
  int64 last_time_critical = 28;              // Timestamp of the last check CRITICAL return code.
  int64 last_time_unknown = 29;               // Timestamp of the last check UNKNOWN return code.
  int64 last_update = 30;                     // Timestamp of this event creation.
  double latency = 31;                        // Delay between scheduled check time and real check time.
  uint32 max_check_attempts = 32;             // Number of failed checks after which service state becomes a hard fail state.
  int64 next_check = 33;                      // Next scheduled check timestamp.
  int64 next_notification = 34;               // Next notification timestamp.
  bool no_more_notifications = 35;            // No other notification will be sent.
  bool notify = 36;                           // Are notifications enabled on this service?
  string output = 37;                         // Output of the check command.
  string long_output = 38;                    // Long output of the check command.
  bool passive_checks = 39;                   // Are passive checks enabled?
  double percent_state_change = 40;           // Used by flapping and compared with high and low flap thresholds.
  string perfdata = 41;                       // Perfdata extracted from the command's output.
  double retry_interval = 42;                 // Interval between two checks when service isn't in ok state and state type is SOFT.
  string host_name = 43;                      // Host name of this service.
  string description = 44;                    // Description of this service
  bool should_be_scheduled = 45;              // Is there a next check scheduled?
  bool obsess_over_service = 46;              // True if OCSP command is executed after check or notification command.

  enum StateType {
    SOFT = 0;
    HARD = 1;
  }

  StateType state_type = 47;                  // StateType value.
  string action_url = 48;                     // Url to obtain information about this service.
  bool check_freshness = 49;                  // Passive freshness check activated?
  bool default_active_checks = 50;            // Default value of active_checks.
  bool default_event_handler_enabled = 51;    // Default value of event_handler_enabled.
  bool default_flap_detection = 52;           // Default value of flap detection.
  bool default_notify = 53;                   // Default value of notify.
  bool default_passive_checks = 54;           // Default value of passive checks.
  string display_name = 55;                   // Name displayed in WUI.
  double first_notification_delay = 56;       // Delay before notify in units (usually 60s).
  bool flap_detection_on_critical = 57;       // Critical state is taken into account for flap detection.
  bool flap_detection_on_ok = 58;             // Ok state is taken into account for flap detection.
  bool flap_detection_on_unknown = 59;        // Unknown state is taken into account for flap detection.
  bool flap_detection_on_warning = 60;        // Warning state is taken into account for flap detection.
  double freshness_threshold = 61;            // Delay after check result is stale.
  double high_flap_threshold = 62;            // If percent state change is higher than this, service is considered flapping.
  string icon_image = 63;                     // Icon displayed in the WUI for the service.
  string icon_image_alt = 64;                 // Alternate string for icon_image.
  bool is_volatile = 65;                      // Is the service volatile?
  double low_flap_threshold = 66;             // If percent state change is lower than this, service is not considered flapping.
  string notes = 67;                          // Tooltip in resources status page.
  string notes_url = 68;                      // Clickable url in resources status page.
  double notification_interval = 69;          // Interval between two notifications.
  string notification_period = 70;            // Time period during which notifications are allowed.
  bool notify_on_critical = 71;               // Users are notified if service state becomes critical.
  bool notify_on_downtime = 72;               // Users are notified if service enters in downtime.
  bool notify_on_flapping = 73;               // Users are notified if service is flapping.
  bool notify_on_recovery = 74;               // Users are notified if service becomes OK.
  bool notify_on_unknown = 75;                // Users are notified if service state becomes unknown.
  bool notify_on_warning = 76;                // Users are notified if service state becomes warning.
  bool stalk_on_critical = 77;                // Users are notified if service state becomes critical.
  bool stalk_on_ok = 78;                      // Logs check output event change if state is OK.
  bool stalk_on_unknown = 79;                 // Logs check output event change if state is unknown.
  bool stalk_on_warning = 80;                 // Logs check output event change if state is warning.
  bool retain_nonstatus_information = 81;     // unused.
  bool retain_status_information = 82;        // unused.
  uint64 severity_id = 83;                    // Severity ID or 0.
  repeated TagInfo tags = 84;                 // Tag IDs.

  ServiceType type = 85;                      // What kind of service is it?

  /* In case of metaservice and ba, they also have an internal id. We keep it
   * here. */
  uint64 internal_id = 86;                    // ID of metaservice or ba.
  uint64 icon_id = 87;                        // Icon ID.
}
```

</TabItem>
</Tabs>

### Service check

Cet évènement est émis par Centreon Engine lorsqu'un contrôle est effectué sur un service.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceCheck

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      19 | 65555 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| active\_checks\_enabled| booléen| True si les contrôles actifs sont activés sur le service.| 
| check\_type| court| | 
| host\_id| entier non signé| ID de l’hôte.| 
| next\_check| temps| Heure à laquelle le prochain contrôle est prévu.| 
| service\_id| entier non signé| ID de service.| 
| command\_line| chaîne| Ligne de commande du contrôle.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbServiceCheck

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      40 | 65576 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::ServiceCheck** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbServiceCheck** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // A internal number not currently used.
}

enum CheckType {
    CheckActive = 0;
    CheckPassive = 1;
}

message Check {
    BBDOHeader header = 1;

    bool active_checks_enabled = 2;   // True if active checks are enabled on the host.
    CheckType check_type = 3;         // One of the values in CheckType.
    string command_line = 4;          // Check command line.
    uint64 host_id = 5;               // Host ID.
    uint64 next_check = 6;            // Timestamp at which the next check is scheduled.
    uint64 service_id = 7;            // Service ID or 0 for a host check.
}
```

</TabItem>
</Tabs>

### Service dependency

Ceci est un évènement de configuration envoyé lorsqu'une dépendance entre services est définie.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceDependency

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      20 | 65556 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Service group

Cet évènement de configuration est émis lorsqu'un groupe de services est créé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceGroup

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      21 | 65557 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| | 
| name| chaîne| Nom du groupe.| 
| enabled| enabled| True si le groupe est activé, faux s’il ne l’est pas (suppression).| 
| poller\_id| entier non signé| | 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Service group member

Ceci est un évènement de configuration. Il est envoyé juste après un évènement **servicegroup** afin de détailler les membres du groupe à configurer. En BBDO v3, la version BBDO v2 de l'évènement est toujours utilisée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceGroupMember

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      22 | 65558 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| | 
| host\_id| entier non signé| | 
| service\_id| entier non signé| | 
| enabled| enabled| True si le groupe est activé, faux s’il ne l’est pas (suppression).| 
| group\_name| chaîne| Nom du groupe.| 
| poller\_id| entier non signé| | 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Service status

Cet évènement est émis par Centreon Engine losque des modifications en temps réel sont apportées à un service.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      24 | 65560 |

Le contenu de ce message est sérialisé de la manière suivante :

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbServiceStatus

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      29 | 65565 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::ServiceStatus** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbServiceStatus** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message ServiceStatus {
  uint64 host_id = 1;                         // Host ID.
  uint64 service_id = 2;                      // Service ID.

  bool checked = 3;                          // Is this service checked?
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 4;                  // CheckType value.

  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 5;                           // Current state of this service.
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 6;                  // StateType value.
  int64 last_state_change = 7;               // Timestamp of the last state change.
  State last_hard_state = 8;                 // Last hard state.
  int64 last_hard_state_change = 9;          // Timestamp of the last hard state change.
  int64 last_time_ok = 10;                   // Timestamp of the last check OK return code.
  int64 last_time_warning = 11;              // Timestamp of the last check WARNING return code.
  int64 last_time_critical = 12;             // Timestamp of the last check CRITICAL return code.
  int64 last_time_unknown = 13;              // Timestamp of the last check UNKNOWN return code.

  string output = 14;                        // Output of the check command.
  string long_output = 15;                   // Long output of the check command.
  string perfdata = 16;                      // Perfdata extracted from the command's output.

  bool flapping = 17;                        // Is this service flapping?
  double percent_state_change = 18;          // Used by flapping and compared with high and low flap thresholds.
  double latency = 19;                       // Delay between scheduled check time and real check time.
  double execution_time = 20;                // Duration of last check.
  int64 last_check = 21;                     // Timestamp of the last check.
  int64 next_check = 22;                     // Next scheduled check timestamp.
  bool should_be_scheduled = 23;             // Is there a next check scheduled?
  int32 check_attempt = 24;                  // Number of failed checks after which service state becomes a hard fail state.

  int32 notification_number = 25;            // Number of notifications sent since the start of the problem.
  bool no_more_notifications = 26;           // No other notification will be sent.
  int64 last_notification = 27;              // Timestamp of the last notification.
  int64 next_notification = 28;              // Next notification timestamp.

  AckType acknowledgement_type = 29;         // AckType value.
  int32 scheduled_downtime_depth = 30;       // Number of active downtimes.

  ServiceType type = 31;                     // What kind of service is it?

  /* In case of metaservice and ba, they also have an internal id. We keep it
   * here. */
  uint64 internal_id = 32;                   // ID of metaservice or ba.
}
```

</TabItem>
</Tabs>

### Instance configuration

Ceci est un évènement de configuration annonçant tous les évènements de configuration qui seront envoyés par un collecteur.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::InstanceConfiguration

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      25 | 65561 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| loaded| booléen| True si l’instance s’est chargée avec succès.| 
| poller\_id| entier non signé| ID du collecteur qui a reçu une demande de mise à jour de la configuration (reload).| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Responsive instance

Cet évènement est émis par cbd. Il indique si un collecteur répond ou non.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ResponsiveInstance

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      26 | 65562 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| poller\_id| entier non signé| ID du collecteur qui a reçu une demande de mise à jour de la configuration (reload).| 
| responsive| booléen| Un booléen indiquant si le collecteur ayant l’ID **poller\_id** répond ou non.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbResponsiveInstance

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      46 | 65582 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::ResponsiveInstance** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbResponsiveInstance** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // An internal number, not currently used.
}

message ResponsiveInstance {
  BBDOHeader header = 1;

  uint64 poller_id = 2;      // Poller ID.
  bool responsive = 3;       // Is this poller responsive?
}
```

</TabItem>
</Tabs>

### Adaptive service

Cet évènement a été introduit en BBDO v3. Il est émis lorsque la configuration d'un service est mise à jour à chaud (par exemple à l'aide d'une commande externe).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

**Adaptive service** n'est pas disponible en BBDO v2.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAdaptiveService

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      41 | 65577 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::AdaptiveService** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbAdaptiveService** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message AdaptiveService {
  uint64 host_id = 1;                         // Host ID.
  uint64 service_id = 2;                      // Service ID.

  optional bool notify = 3;                   // Are notifications enabled on this service?
  optional bool active_checks = 4;            // Are active checks enabled?
  optional bool should_be_scheduled = 5;      // Is there a next check scheduled?
  optional bool passive_checks = 6;           // Are passive checks enabled?
  optional bool event_handler_enabled = 7;    // Event handler enabled?
  optional bool flap_detection_enabled = 8;   // Is flap detection enabled?
  optional bool obsess_over_service = 9;      // True if OCSP command is executed after check or notification command.
  optional string event_handler = 10;         // Command executed when state changes.
  optional string check_command = 11;         // Command executed.
  optional uint32 check_interval = 12;        // Interval in units (usually 60s) between 2 checks.
  optional uint32 retry_interval = 13;        // Interval between two checks when service isn't in ok state and state type is SOFT.
  optional uint32 max_check_attempts  = 14;   // Number of failed checks after which service state becomes a hard fail state.
  optional bool check_freshness = 15;         // Passive freshness check activated?
  optional string check_period = 16;          // Time period when checks are authorized.
  optional string notification_period = 17;   // Time period when notifications are authorized.
}
```

</TabItem>
</Tabs>

### Adaptive host

Cet évènement a été introduit en BBDO v3. Il est émis lorsque la configuration d'un hôte est mise à jour à chaud (par exemple à l'aide d'une commande externe).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

**Adaptive host** n'est pas disponible en BBDO v2.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAdaptiveHost

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      31 | 65567 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::AdaptiveHost** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbAdaptiveHost** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message AdaptiveHost {
  uint64 host_id = 1;                         // Host ID.

  optional bool notify = 2;                   // Are notifications enabled on this service?
  optional bool active_checks = 3;            // Are active checks enabled?
  optional bool should_be_scheduled = 4;      // Is there a next check scheduled?
  optional bool passive_checks = 5;           // Are passive checks enabled?
  optional bool event_handler_enabled = 6;    // Event handler enabled?
  optional bool flap_detection = 7;           // Is flap detection enabled?
  optional bool obsess_over_host = 8;         // True if OCSP command is executed after check or notification command.
  optional string event_handler = 9;          // Command executed when state changes.
  optional string check_command  = 10;        // Command executed.
  optional uint32 check_interval  = 11;       // Interval in units (usually 60s) between 2 checks.
  optional uint32 retry_interval  = 12;       // Interval between two checks when service isn't in ok state and state type is SOFT.
  optional uint32 max_check_attempts  = 13;   // Number of failed checks after which service state becomes a hard fail state.
  optional bool check_freshness = 14;         // Passive freshness check activated?
  optional string check_period  = 15;         // Time period when checks are authorized.
  optional string notification_period  = 16;  // Time period when notifications are authorized.
}
```

</TabItem>
</Tabs>

### Severity

Ceci est un évènement de configuration. il définit une sévérité. Cet évènement a été introduit en BBDO v3.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

IL n'y a pas de version BBDO v2 de cet évènement.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbSeverity

| Catégorie | élément | ID |
| -------- | ------- | ----- |
|        1 |      33 | 65569 |

Cet évènement est compris dans BBDO 3. Il contient la sévérité d’une ressource.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

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

</TabItem>
</Tabs>

## Storage

### Metric

Cet évènement est généré par un point de terminaison Storage pour notifier qu’un graphique de métriques RRD doit être mis à jour.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ctime| temps| Heure à laquelle la valeur métrique a été générée.| 
| interval| entier non signé| Intervalle de contrôle du service normal en secondes.| 
| metric\_id| entier non signé| ID de la métrique (à partir du tableau des métriques).| 
| name| chaîne| Nom de la métrique.| 
| rrd\_len| entier| Durée de rétention des données RRD en secondes.| 
| value| réel| Valeur de la métrique.| 
| value\_type| entier court| Type de métrique (1 =3D compteur, 2 =3D dérive, 3 =3D absolu, autre =3D jauge).| 
| is\_for\_rebuild| booléen| Défini sur True quand un graphique est en cours de reconstruction (voir l’évènement rebuild).| 
| host\_id| entier non signé| L’id de l’hôte auquel cette métrique est attachée.| Depuis la version 3.0.0
| service\_id| entier non signé| L’id du service auquel cette métrique est attachée.| Depuis la version 3.0.0

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ctime| temps| Heure à laquelle la valeur métrique a été générée.| 
| interval| entier non signé| Intervalle de contrôle du service normal en secondes.| 
| metric\_id| entier non signé| ID de la métrique (à partir du tableau des métriques).| 
| name| chaîne| Nom de la métrique.| 
| rrd\_len| entier| Durée de rétention des données RRD en secondes.| 
| value| réel| Valeur de la métrique.| 
| value\_type| entier court| Type de métrique (1 =3D compteur, 2 =3D dérive, 3 =3D absolu, autre =3D jauge).| 
| is\_for\_rebuild| booléen| Défini sur True quand un graphique est en cours de reconstruction (voir l’évènement rebuild).| 
| host\_id| entier non signé| L’id de l’hôte auquel cette métrique est attachée.| Depuis la version 3.0.0
| service\_id| entier non signé| L’id du service auquel cette métrique est attachée.| Depuis la version 3.0.0

</TabItem>
</Tabs>

### Rebuild

Les évènements de reconstruction sont générés lorsqu’un point de terminaison Storage détecte qu’un graphique doit être reconstruit. Il envoie d’abord un évènement de début de reconstruction (end =3D false), puis des valeurs métriques (évènement métrique avec is\_for\_rebuild défini sur True) et enfin un évènement de fin de reconstruction (end =3D true).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| end| booléen| Indicateur de fin. Défini sur True si la reconstruction commence, False si elle se termine.| 
| id| entier non signé| ID de la métrique à reconstruire si is\_index est False, ou ID de l’index à reconstruire (graphique d’état) si is\_index est True.| 
| is\_index| booléen| Indicateur d’index. Reconstruction de l’index (état) si True, reconstruction de la métrique si False.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| end| booléen| Indicateur de fin. Défini sur True si la reconstruction commence, False si elle se termine.| 
| id| entier non signé| ID de la métrique à reconstruire si is\_index est False, ou ID de l’index à reconstruire (graphique d’état) si is\_index est True.| 
| is\_index| booléen| Indicateur d’index. Reconstruction de l’index (état) si True, reconstruction de la métrique si False.| 

</TabItem>
</Tabs>

### Remove graph

Un point de terminaison Storage génère un évènement de suppression de graphique lorsqu’un graphique doit être supprimé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| ID de l’index (is\_index =3D true) ou ID de la métrique (is\_index =3D false) à supprimer.| 
| is\_index| booléen| Indicateur d’index. Si True, un graphique d’index (état) sera supprimé. Si False, un graphique de métrique sera supprimé.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| id| entier non signé| ID de l’index (is\_index =3D true) ou ID de la métrique (is\_index =3D false) à supprimer.| 
| is\_index| booléen| Indicateur d’index. Si True, un graphique d’index (état) sera supprimé. Si False, un graphique de métrique sera supprimé.| 

</TabItem>
</Tabs>

### Status

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ctime| temps| Heure à laquelle l’état a été généré.| 
| index\_id| entier non signé| ID de l’index.| 
| interval| entier non signé| Intervalle de contrôle du service normal en secondes.| 
| rrd\_len| temps| Rétention des données RRD en secondes.| 
| state| entier court| État du service.| 
| is\_for\_rebuild| booléen| Défini sur True quand un graphique est en cours de reconstruction (voir l’évènement rebuild).| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ctime| temps| Heure à laquelle l’état a été généré.| 
| index\_id| entier non signé| ID de l’index.| 
| interval| entier non signé| Intervalle de contrôle du service normal en secondes.| 
| rrd\_len| temps| Rétention des données RRD en secondes.| 
| state| entier court| État du service.| 
| is\_for\_rebuild| booléen| Défini sur True quand un graphique est en cours de reconstruction (voir l’évènement rebuild).| 

</TabItem>
</Tabs>

### Metric mapping

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| index\_id| entier non signé| ID de l’index.| 
| metric\_d| entier non signé| ID de l’index.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| index\_id| entier non signé| ID de l’index.| 
| metric\_d| entier non signé| ID de l’index.| 

</TabItem>
</Tabs>

### Index mapping

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| index\_id| entier non signé| ID de l’index.| 
| host\_id| entier non signé| ID de l’index.| 
| service\_id| entier non signé| ID de l’index.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| index\_id| entier non signé| ID de l’index.| 
| host\_id| entier non signé| ID de l’index.| 
| service\_id| entier non signé| ID de l’index.| 

</TabItem>
</Tabs>

### Pb Rebuild Message

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

Cet évènement est compris dans BBDO 3. Quand certains graphiques doivent être reconstruits. Les messages qui concernent ces reconstructions sont de ce type. Ils remplacent l’ancien message de reconstruction de BBDO.

Il existe trois états pour ce message :

* START : il s’agit du premier état, ce message initialise les métriques qui doivent être reconstruites.
* DATA : une fois que l’état START a été envoyé, un ou plusieurs messages avec l’état DATA peuvent être envoyés au broker RRD.
* END : lorsque tous les évènements de reconstruction ont été envoyés, celui-ci est envoyé pour clôturer les reconstructions. Et le broker RRD revient à un état nominal.

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est compris dans BBDO 3. Quand certains graphiques doivent être reconstruits. Les messages qui concernent ces reconstructions sont de ce type. Ils remplacent l’ancien message de reconstruction de BBDO.

Il existe trois états pour ce message :

* START : il s’agit du premier état, ce message initialise les métriques qui doivent être reconstruites.
* DATA : une fois que l’état START a été envoyé, un ou plusieurs messages avec l’état DATA peuvent être envoyés au broker RRD.
* END : lorsque tous les évènements de reconstruction ont été envoyés, celui-ci est envoyé pour clôturer les reconstructions. Et le broker RRD revient à un état nominal.

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

</TabItem>
</Tabs>

### Pb Remove Graph Message

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

Cet évènement est compris dans BBDO 3. Lorsque nous voulons supprimer des fichiers graphiques, nous pouvons utiliser l’API gRPC de centengine et cet appel fait en sorte que cbd génère un **Pb Remove Graph Message**. Deux possibilités sont combinées dans cet évènement. Nous pouvons supprimer les graphiques correspondant à certaines données d’index ou les graphiques correspondant à certaines données métriques. Il est également possible de combiner les deux types.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message RemoveGraphMessage {
  repeated uint64 index_ids = 1;
  repeated uint64 metric_ids = 2;
}
```

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est compris dans BBDO 3. Lorsque nous voulons supprimer des fichiers graphiques, nous pouvons utiliser l’API gRPC de centengine et cet appel fait en sorte que cbd génère un **Pb Remove Graph Message**. Deux possibilités sont combinées dans cet évènement. Nous pouvons supprimer les graphiques correspondant à certaines données d’index ou les graphiques correspondant à certaines données métriques. Il est également possible de combiner les deux types.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```text
message RemoveGraphMessage {
  repeated uint64 index_ids = 1;
  repeated uint64 metric_ids = 2;
}
```

</TabItem>
</Tabs>

## BBDO

### Version response

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bbdo\_major| entier court| La version majeure du protocole BBDO utilisée par le pair qui envoie ce paquet **version\_response**. La seule version actuelle du protocole est la 1.0.0.| 
| bbdo\_minor| entier court| La version mineure du protocole BBDO utilisée par le pair qui envoie ce paquet **version\_response**.| 
| bbdo\_patch| entier court| Le correctif du protocole BBDO utilisé par le pair qui envoie ce paquet **version\_response**.| 
| extensions| chaîne| Chaîne séparée par des espaces des extensions prises en charge par le pair qui envoie ce paquet **version\_response**.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bbdo\_major| entier court| La version majeure du protocole BBDO utilisée par le pair qui envoie ce paquet **version\_response**. La seule version actuelle du protocole est la 1.0.0.| 
| bbdo\_minor| entier court| La version mineure du protocole BBDO utilisée par le pair qui envoie ce paquet **version\_response**.| 
| bbdo\_patch| entier court| Le correctif du protocole BBDO utilisé par le pair qui envoie ce paquet **version\_response**.| 
| extensions| chaîne| Chaîne séparée par des espaces des extensions prises en charge par le pair qui envoie ce paquet **version\_response**.| 

</TabItem>
</Tabs>

### Ack

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged events| entier non signé| Nombre d’évènements acquittés. Utilisé uniquement par les clients « intelligents » (c’est-à-dire capables d’acquitter des évènements). Ne doit pas être utilisé par des clients non intelligents.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| acknowledged events| entier non signé| Nombre d’évènements acquittés. Utilisé uniquement par les clients « intelligents » (c’est-à-dire capables d’acquitter des évènements). Ne doit pas être utilisé par des clients non intelligents.| 

</TabItem>
</Tabs>

## BAM

### BA status event

Cet évènement est envoyé lorsque le statut d’une BA a changé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

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

</TabItem>
</Tabs>

### KPI status event

Cet évènement est envoyé lorsque le statut d’un KPI a changé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

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

</TabItem>
</Tabs>

### Meta service status event

Cet évènement est envoyé lorsque le statut d’un méta-service a changé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| meta\_service\_id| entier non signé| L’ID du méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| value| réel| La valeur du méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state\_changed| booléen| True si l’état vient de changer.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| meta\_service\_id| entier non signé| L’ID du méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| value| réel| La valeur du méta-service.| Depuis la version 2.8.0 (BBDO 1.2.0).
| state\_changed| booléen| True si l’état vient de changer.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### BA-event event

Cet évènement est envoyé lorsqu’un nouvel évènement BA est ouvert, ou qu’un ancien est fermé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| first\_level| réel| Le premier niveau de l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’évènement. 0 ou (temps)-1 pour un évènement ouvert.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si BA était en arrêt pendant l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| status| entier court| Le statut de la BA pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| first\_level| réel| Le premier niveau de l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’évènement. 0 ou (temps)-1 pour un évènement ouvert.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si BA était en arrêt pendant l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| status| entier court| Le statut de la BA pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### KPI-event event

Cet évènement est envoyé lorsqu’un nouvel évènement KPI est ouvert, ou qu’un ancien est fermé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| kpi\_id| entier non signé| L’ID du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’évènement. 0 ou (temps)-1 pour un évènement ouvert.| Depuis la version 2.8.0 (BBDO 1.2.0).
| impact\_level| entier| Le niveau de l’impact.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si BA était en arrêt pendant l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| first\_output| chaîne| Le premier output du KPI pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| perfdata| chaîne| La première perfdata du KPI pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| status| entier court| Le statut de la BA pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| kpi\_id| entier non signé| L’ID du KPI.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’évènement. 0 ou (temps)-1 pour un évènement ouvert.| Depuis la version 2.8.0 (BBDO 1.2.0).
| impact\_level| entier| Le niveau de l’impact.| Depuis la version 2.8.0 (BBDO 1.2.0).
| in\_downtime| booléen| True si BA était en arrêt pendant l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| first\_output| chaîne| Le premier output du KPI pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| perfdata| chaîne| La première perfdata du KPI pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).
| status| entier court| Le statut de la BA pendant l’évènement.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### BA duration event event

Cet évènement est envoyé lorsqu’un nouvel évènement de durée BA est calculé par le broker BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| real\_start\_time| temps| Le premier niveau de l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’évènement, dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’évènement, dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| duration| entier non signé| end\_time - start\_time.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_duration| entier non signé| La durée de l’évènement dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| timeperiod\_is\_default| booléen| True si la période de temps est la valeur par défaut pour cette BA.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| real\_start\_time| temps| Le premier niveau de l’évènement BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| end\_time| temps| L’heure de fin de l’évènement, dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| start\_time| temps| L’heure de début de l’évènement, dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| duration| entier non signé| end\_time - start\_time.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_duration| entier non signé| La durée de l’évènement dans la période de temps donnée.| Depuis la version 2.8.0 (BBDO 1.2.0).
| timeperiod\_is\_default| booléen| True si la période de temps est la valeur par défaut pour cette BA.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension BA

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_name| chaîne| Le nom de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_description| chaîne| La description de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_percent\_crit| réel| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_percent\_warn| réel| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_duration\_crit| entier non signé| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_duration\_warn| entier non signé| | Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_name| chaîne| Le nom de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| ba\_description| chaîne| La description de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_percent\_crit| réel| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_percent\_warn| réel| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_duration\_crit| entier non signé| | Depuis la version 2.8.0 (BBDO 1.2.0).
| sla\_month\_duration\_warn| entier non signé| | Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension KPI

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

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

</TabItem>
</Tabs>

### Dimension BA BV relation

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_id| entier non signé| L’ID de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_id| entier non signé| L’ID de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension BV

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bv\_id| entier non signé| L’ID de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_name| chaîne| Le nom de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_description| chaîne| La description de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bv\_id| entier non signé| L’ID de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_name| chaîne| Le nom de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).
| bv\_description| chaîne| La description de la BV.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension table signal

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

Ce signal est envoyé avant le dump de toutes les dimensions, et à nouveau à la fin du dump.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| update\_started| booléen| True si c’est le début du dump, False si c’est la fin.| Depuis la version 2.8.0 (BBD0 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| update\_started| booléen| True si c’est le début du dump, False si c’est la fin.| Depuis la version 2.8.0 (BBD0 1.2.0).

</TabItem>
</Tabs>

### Rebuild signal

Cet évènement est envoyé lorsqu’une reconstruction des durées et des disponibilités des évènements est demandée au point de terminaison du broker BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bas\_to\_rebuild| chaîne| Une chaîne contenant les ID de toutes les BA à reconstruire, séparés par une virgule et un espace (par exemple « 1, 5, 8, 12 »).| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bas\_to\_rebuild| chaîne| Une chaîne contenant les ID de toutes les BA à reconstruire, séparés par une virgule et un espace (par exemple « 1, 5, 8, 12 »).| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension timeperiod

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

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

</TabItem>
</Tabs>

### Dimension BA timeperiod relation

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| timeperiod\_id| entier non signé| L’ID de la période de temps.| Depuis la version 2.8.0 (BBDO 1.2.0).
| is\_default| booléen| True si la période de temps est celle par défaut pour cette BA.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| ba\_id| entier non signé| L’ID de la BA.| Depuis la version 2.8.0 (BBDO 1.2.0).
| timeperiod\_id| entier non signé| L’ID de la période de temps.| Depuis la version 2.8.0 (BBDO 1.2.0).
| is\_default| booléen| True si la période de temps est celle par défaut pour cette BA.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension timeperiod exception

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| timeperiod\_id| entier non signé| L’ID de la période de temps ayant cette exception.| Depuis la version 2.8.0
| daterange| chaîne| Une chaîne de caractères contenant la date de la plage.| Depuis la version 2.8.0
| timerange| chaîne| Une chaîne de caractères contenant l’heure de la plage.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| timeperiod\_id| entier non signé| L’ID de la période de temps ayant cette exception.| Depuis la version 2.8.0
| daterange| chaîne| Une chaîne de caractères contenant la date de la plage.| Depuis la version 2.8.0
| timerange| chaîne| Une chaîne de caractères contenant l’heure de la plage.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Dimension timeperiod exclusion

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| timeperiod\_id| entier non signé| L’ID de la période de temps ayant cette exclusion.| Depuis la version 2.8.0 (BBDO 1.2.0).
| excluded\_timeperiod\_id| entier non signé| L’ID de la période exclue.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| timeperiod\_id| entier non signé| L’ID de la période de temps ayant cette exclusion.| Depuis la version 2.8.0 (BBDO 1.2.0).
| excluded\_timeperiod\_id| entier non signé| L’ID de la période exclue.| Depuis la version 2.8.0 (BBDO 1.2.0).

</TabItem>
</Tabs>

### Inherited downtime

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bad\_id| entier non signé| L’ID de la BA en temps d’arrêt.| 
| in\_downtime| booléen| True si le BA est en temps d’arrêt.| 

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

| Propriété| Type| Description| Version
|----------|----------|----------|----------
| bad\_id| entier non signé| L’ID de la BA en temps d’arrêt.| 
| in\_downtime| booléen| True si le BA est en temps d’arrêt.| 

</TabItem>
</Tabs>
