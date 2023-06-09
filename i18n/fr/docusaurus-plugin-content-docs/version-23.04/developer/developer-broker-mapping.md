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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 1       | 65537 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                                    | Type             | Description                                                                    |
| -------------------------------------------- | ---------------- | ------------------------------------------------------------------------------ |
| acknowledgement\_type                        | entier court     | Acquittement de l’hôte quand 0, acquittement du service quand 1.               |
| author                                       | chaîne           | Auteur de l’acquittement.                                                      |
| comment                                      | chaîne           | Commentaire associé à l’acquittement.                                          |
| deletion\_time                               | temps            | Heure à laquelle l’acquittement a été supprimé. Si 0, il n’a pas été supprimé. |
| entry\_time                                  | temps            | Heure à laquelle l’acquittement a été créé.                                    |
| host\_id                                     | entier non signé | ID de l’hôte.                                                                  |
| instance\_id                                 | entier non signé | ID de l’instance.                                                              |
| is\_sticky                                   | booléen          | Indicateur "Persistant (non-OK)".                                              |
| notify\_contacts                             | booléen          | Indicateur de notification.                                                    |
| persistent\_comment                          | booléen          | True si le commentaire est persistant.                                         |
| service\_id                                  | entier non signé | ID de service. 0 pour un acquittement de l’hôte.                               |
| state                                        | entier court     | État de l’hôte / du service.                                                   |
| notify\_only\_if\_not\_already\_acknowledged | booléen          | Une notification ne doit être envoyée qu’en cas de non acquittement.           |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAcknowledgement

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 45      | 65581 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Acknowledgement** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbAcknowledgement** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message Acknowledgement {
  uint64 host_id = 1;                // ID de l'hôte.
  uint64 service_id = 2;             // ID du service, ou 0 pour un acquittement d'hôte.
  uint64 instance_id = 3;            // ID de l'instance.
  enum ResourceType {
    HOST = 0;
    SERVICE = 1;
  }
  ResourceType type = 4;             // Type de la ressource.
  string author = 5;                 // Auteur de l'acquittement
  string comment_data = 6;           // Commentaire associé à  l'acquittement.
  bool sticky = 7;                   // Indicateur "Persistant".
  bool notify_contacts = 8;          // Indicateur de notification.
  uint64 entry_time = 9;             // Heure à laquelle l'acquittement a été créé.
  uint64 deletion_time = 10;         // Heure à laquelle l'acquittement a été supprimé.
  bool persistent_comment = 11;      // True si le commentaire est persistant.
  int32 state = 12;                  // L'état de l'hôte/du service.
}
```

</TabItem>
</Tabs>

### Comment

Dans certaines situations, l'utilisateur doit saisir un commentaire dans l'interface Centreon. Quand le commentaire est validé, Centreon Engine émet un évènement **comment**. Cet évènement est différent en BBDO v2 et en BBDO v3.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Comment

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 2       | 65538 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété      | Type             | Description                                                                                                                                                                |
| -------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| author         | chaîne           | Auteur du commentaire.                                                                                                                                                     |
| comment\_type  | entier court     | 1 pour un commentaire pour un hôte, 2 pour un commentaire pour un service.                                                                                                 |
| data           | chaîne           | Données du commentaire (texte).                                                                                                                                            |
| deletion\_time | temps            | Heure à laquelle le commentaire a été supprimé. 0 si le commentaire n’a pas (encore) été supprimé.                                                                         |
| entry\_time    | temps            | Heure à laquelle le commentaire a été créé.                                                                                                                                |
| entry\_type    | entier court     | 1 pour un commentaire de l’utilisateur (par commande externe), 2 pour un commentaire d’arrêt, 3 pour un commentaire de bagotement et 4 pour un commentaire d’acquittement. |
| expire\_time   | temps            | Délai d’expiration des commentaires. 0 si aucun délai d’expiration.                                                                                                        |
| expires        | bool             | True si le commentaire expire.                                                                                                                                             |
| host\_id       | entier non signé | ID de l’hôte.                                                                                                                                                              |
| internal\_id   | entier non signé | ID du moteur de supervision interne du commentaire.                                                                                                                        |
| persistent     | booléen          | True si le commentaire est persistant.                                                                                                                                     |
| instance\_id   | entier non signé | ID de l’instance.                                                                                                                                                          |
| service\_id    | entier non signé | ID de service. 0 si c’est un commentaire de l’hôte.                                                                                                                        |
| source         | entier court     | 0 lorsque le commentaire provient du moteur de supervision (interne) ou 1 lorsque le commentaire provient d’une autre source (externe).                                    |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbComment

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 35      | 65571 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Comment** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbComment** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

message Comment {
  BBDOHeader header = 1;     // Non utilisé actuellement.

  enum Src {
    INTERNAL = 0;            // Le commentaire provient du moteur de supervision.
    EXTERNAL = 1;            // Le commentaire provient d'une autre source.
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

  string author = 2;         // Auteur du commentaire.
  Type type = 3;             // Type du commentaire, suivant l'enum Type.
  string data = 4;           // Le contenu du commentaire.
  uint64 deletion_time = 5;  // Heure à laquelle le commentaire a été supprimé, ou 0 si le commentaire n'a pas (encore) été supprimé.
  uint64 entry_time = 6;     // Heure à laquelle le commentaire a été créé.
  EntryType entry_type = 7;  // Type d'entrée, suivant l'enum EntryType.
  uint64 expire_time = 8;    // Heure d'expiration du commentaire, ou 0 si le commentaire n'a pas d'heure d'expiration.
  bool expires = 9;          // True si le commentaire a expiré.
  uint64 host_id = 10;       // ID de l'hôte.
  uint64 internal_id = 11;   // ID interne du moteur de supervision pour le commentaire.
  bool persistent = 12;      // True si le commentaire est persistant.
  uint64 instance_id = 13;   // ID de l'instance
  uint64 service_id = 14;    // ID du service, ou 0 pour un commentaire sur un hôte.
  Src source = 15;           // Source du commentaire, suivant l'enum Src.
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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 3       | 65539 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété      | Type             | Description                                                                             |
| -------------- | ---------------- | --------------------------------------------------------------------------------------- |
| enabled        | booléen          | True si la variable personnalisée est activée.                                          |
| host\_id       | entier non signé | ID de l’hôte.                                                                           |
| modified       | booléen          | True si la variable a été modifiée.                                                     |
| name           | chaîne           | Nom de la variable.                                                                     |
| service\_id    | entier non signé | ID de service. 0 si c’est une variable d’hôte personnalisée.                            |
| update\_time   | temps            | Dernière heure à laquelle la variable a été mise à jour.                                |
| var\_type      | entier court     | 0 pour une variable d’hôte personnalisée, 1 pour une variable de service personnalisée. |
| value          | chaîne           | Valeur variable.                                                                        |
| default\_value | chaîne           | La valeur par défaut de la variable personnalisée.                                      |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbCustomVariable

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 37      | 65573 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::CustomVariable** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbCustomVariable** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

message CustomVariable {
  enum VarType {
    HOST = 0;
    SERVICE = 1;
  }

  BBDOHeader header = 1;     // Non utilisé.
  uint64 host_id = 2;        // ID de l'hôte.
  uint64 service_id = 3;     // ID du service, ou 0 pour une variable personnalisée pour un hôte.
  bool modified = 4;         // True si la variable a été modifiée.
  string name = 5;           // Nom de la variable.
  uint64 update_time = 6;    // Dernière heure à laquelle la variable a été mise à jour.
  string value = 7;          // Valeur de la variable.
  string default_value = 8;  // La valeur par défaut de la variable personnalisée.
  bool enabled = 9;          // True si la variable personnalisée est activée.
  bool password = 10;        // True si la valeur doit être masquée.
  VarType type = 11;         // Une des valeurs de l'enum VarType.
}
```

</TabItem>
</Tabs>

### Custom variable status

Les évènements **Custom variable status** sont générés lorsqu’une variable personnalisée doit être mise à jour.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::CustomVariableStatus

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 4       | 65540 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété    | Type             | Description                                                  |
| ------------ | ---------------- | ------------------------------------------------------------ |
| host\_id     | entier non signé | ID de l’hôte.                                                |
| modified     | booléen          | True si la variable a été modifiée.                          |
| name         | chaîne           | Nom de la variable.                                          |
| service\_id  | entier non signé | ID de service. 0 si c’est une variable d’hôte personnalisée. |
| update\_time | temps            | Dernière heure à laquelle la variable a été mise à jour.     |
| value        | chaîne           | Valeur variable.                                             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbCustomVariableStatus

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 38      | 65574 |

Le message Protobuf pour **PbCustomVariableStatus** est le même que celui pour **PbCustomVariable**,
excepté que certains des champs peuvent ne pas être renseignés.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

message CustomVariable {
  enum VarType {
    HOST = 0;
    SERVICE = 1;
  }

  BBDOHeader header = 1;     // Non utilisé.
  uint64 host_id = 2;        // ID de l'hôte.
  uint64 service_id = 3;     // ID du service, ou 0 pour une variable personnalisée pour un hôte.
  bool modified = 4;         // True si la variable a été modifiée.
  string name = 5;           // Nom de la variable.
  uint64 update_time = 6;    // Dernière heure à laquelle la variable a été mise à jour.
  string value = 7;          // Valeur de la variable.
  string default_value = 8;  // La valeur par défaut de la variable personnalisée.
  bool enabled = 9;          // True si la variable personnalisée est activée.
  bool password = 10;        // True si la valeur doit être masquée.
  VarType type = 11;         // Une des valeurs de l'enum VarType.
}
```

</TabItem>
</Tabs>

### Downtime

Cet évènement est émis par Centreon Engine lorsqu'une plage de maintenance est définie sur une ressource.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Downtime

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 5       | 65541 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété           | Type             | Description                                                            |
| ------------------- | ---------------- | ---------------------------------------------------------------------- |
| actual\_end\_time   | temps            | Heure réelle à laquelle le temps d’arrêt s’est terminé.                |
| actual\_start\_time | temps            | Heure réelle à laquelle le temps d’arrêt a commencé.                   |
| author              | chaîne           | Créateur du temps d’arrêt.                                             |
| downtime\_type      | entier court     | 1 pour un arrêt de service, 2 pour un arrêt d’hôte.                    |
| deletion\_time      | temps            | Heure à laquelle le temps d’arrêt a été supprimé.                      |
| duration            | temps            | Durée du temps d’arrêt.                                                |
| end\_time           | temps            | Heure de fin du temps d’arrêt programmé.                               |
| entry\_time         | temps            | Heure à laquelle le temps d’arrêt a été créé.                          |
| fixed               | booléen          | True si le temps d’arrêt est fixe, False s’il est flexible.            |
| host\_id            | entier non signé | ID de l’hôte.                                                          |
| instance\_id        | entier non signé | ID de l’instance.                                                      |
| internal\_id        | entier non signé | ID du moteur de supervision interne.                                   |
| service\_id         | entier non signé | ID de service. 0 s’il s’agit d’un arrêt de l’hôte.                     |
| start\_time         | temps            | Heure de début de l’arrêt programmé.                                   |
| triggered\_by       | entier non signé | ID interne du temps d’arrêt qui a déclenché ce temps d’arrêt.          |
| was\_cancelled      | booléen          | True si le temps d’arrêt a été annulé.                                 |
| was\_started        | booléen          | True si le temps d’arrêt a été démarré.                                |
| comment             | chaîne           | Commentaire sur le temps d’arrêt.                                      |
| is\_recurring       | booléen          | True si ce temps d’arrêt est récurrent.                                |
| recurring\_tp       | chaîne           | La période de temps récurrente du temps d’arrêt récurrent.             |
| come\_from          | court            | Id du temps d’arrêt récurrent parent pour les temps d’arrêt engendrés. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbDowntime

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 36      | 65572 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Downtime** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbDowntime** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message Downtime {
  enum DowntimeType {
    NOT_USED = 0;
    SERVICE = 1;                  // La plage de maintenance est positionnée sur un service.
    HOST = 2;                     // La plage de maintenance est positionnée sur un hôte.
    ANY = 3;                      // Valeur gardée pour des raisons de rétrocompatibilité (non utilisée).
  };
  uint64 id = 1;                  // ID interne au moteur de supervision.
  uint64 instance_id = 2;         // ID de l'instance
  uint64 host_id = 3;             // ID de l'hôte.
  uint64 service_id = 4;          // ID du service, ou 0 s'il s'agit d'une plage de maintenance sur un hôte.
  string author = 5;              // Utilisateur ayant défini la place de maintenance.
  string comment_data = 6;        // Commentaire associé à la plage de maintenance.
  DowntimeType type = 7;          // Une valeur de la précédente énumération.
  uint32 duration = 8;            // Durée de la plage de maintenance.
  uint64 triggered_by = 9;        // ID interne de la plage de maintenance ayant déclenché cette plage de maintenance.
  int64 entry_time = 10;          // Heure à  laquelle la plage de maintenance a été créée.
  uint64 actual_start_time = 11;  // Heure à laquelle la plage de maintenance a réellement démarré.
  uint64 actual_end_time = 12;    // Heure à laquelle la plage de maintenance a réellement terminé.
  uint64 start_time = 13;         // Heure de départ programmée de la plage de maintenance.
  uint64 deletion_time = 14;      // Heure à laquelle la plage de maintenance a été supprimée.
  uint64 end_time = 15;           // Heure de fin programmée de la plage de maintenance.
  bool started = 16;              // True si la plage de maintenance a démarré.
  bool cancelled = 17;            // True si la plage de maintenance a été annulée.
  bool fixed = 18;                // True si la plage de maintenance est fixe, false si elle est flexible.
}
```

</TabItem>
</Tabs>

### Event handler

Les **Event handlers** sont des commandes système optionnelles (scripts ou exécutables) qui sont exécutées lorsqu'un changment de statut se produit pour une ressource. Lorsqu'une commande de ce type est configurée, un évènement **event handler** est émis par Centreon Engine. Ces évènements BBDO sont généralement envoyés lorsque Centreon Engine est redémarré ou rechargé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::EventHandler

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 6       | 65542 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété       | Type             | Description                                                                                                                                                                                                                                      |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| early\_timeout  | booléen          | True si le gestionnaire d’évènements a été interrompu.                                                                                                                                                                                           |
| end\_time       | temps            | Heure à laquelle l’exécution du gestionnaire d’évènements s’est terminée.                                                                                                                                                                        |
| execution\_time | réel             | Temps d’exécution en secondes.                                                                                                                                                                                                                   |
| handler\_type   | entier court     | 0 pour le gestionnaire d’évènements spécifiques à l’hôte, 1 pour le gestionnaire d’évènements spécifiques au service, 2 pour le gestionnaire d’évènements global pour les hôtes et 3 pour le gestionnaire d’évènements global pour les services. |
| host\_id        | entier non signé | ID de l’hôte.                                                                                                                                                                                                                                    |
| return\_code    | entier court     | Valeur renvoyée par le gestionnaire d’évènements.                                                                                                                                                                                                |
| service\_id     | entier non signé | ID de service. 0 si c’est un gestionnaire d’évènements d’hôte.                                                                                                                                                                                   |
| start\_time     | temps            | Heure à laquelle le gestionnaire d’évènements a démarré.                                                                                                                                                                                         |
| state           | entier court     | État de l’hôte / du service.                                                                                                                                                                                                                     |
| state\_type     | entier court     | 0 pour SOFT, 1 pour HARD.                                                                                                                                                                                                                        |
| timeout         | entier court     | Délai d’attente du gestionnaire d’évènements en secondes.                                                                                                                                                                                        |
| command\_args   | chaîne           | Arguments du gestionnaire d’évènements.                                                                                                                                                                                                          |
| command\_line   | chaîne           | Ligne de commande du gestionnaire d’évènements.                                                                                                                                                                                                  |
| output          | chaîne           | Output retourné par le gestionnaire d’évènements.                                                                                                                                                                                                |
| source\_id      | entier non signé | L’id de l’instance source de cet évènement.                                                                                                                                                                                                      |
| destination\_id | entier non signé | L’id de l’instance de destination de cet évènement.                                                                                                                                                                                              |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Cet évènement est le même qu'en BBDO v2. Il n'existe pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Flapping status

Lorsque le statut d'une ressource est instable, Centreon Engine le marque comme en bagotage (**flapping**). Historiquement, un évènement **flapping status** était émis dans ces cas-là. Cela n'est plus d'actualité. L'évènement **flapping status** n'existe plus.

### Tag

L'évènement **tag** est un nouvel évènement de configuration, actuellement utilisé pour les catégories et les groupes.

En ce moment il est utilisé (entre autres) en parallèle avec les évènements **group**, mais devrait devenir plus global dans le futur.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

L'évènement **tag** n'existe pas en BBDO v2.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbTag

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 34      | 65570 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3.  Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Tag** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbTag** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
enum TagType {
  SERVICEGROUP = 0;       // Tag représentant un groupe de services
  HOSTGROUP = 1;          // Tag représentant un groupe d'hôtes
  SERVICECATEGORY = 2;    // Tag représentant une catégorie de services
  HOSTCATEGORY = 3;       // Tag représentant une catégorie d'hôtes
}

message Tag {
  uint64 id = 1;          // ID du tag (l'unicité est obtenue en l'associant au type)
  enum Action {
    ADD = 0;              // Par cette action, l'évènement crée un nouveau tag.
    DELETE = 1;           // Par cette action, l'évènement supprime un tag.
    MODIFY = 2;           // Par cette action, l'évènement modifie un tag.
  }

  Action action = 2;      // L'action courante pour cet évènement.
  TagType type = 3;       // Le type du tag.
  string name = 4;        // Nom du tag.
  int64 poller_id = 5;    // ID du collecteur.
}
```

</TabItem>
</Tabs>

### Host

Cet évènement est émis chaque fois que la configuration d'un hôte est modifiée et la configuration déployée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Host

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 12      | 65548 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                         | Type             | Description | Version |
| --------------------------------- | ---------------- | ----------- | ------- |
| acknowledged                      | booléen          |             |
| acknowledgement\_type             | entier court     |             |
| action\_url                       | chaîne           |             |
| active\_checks\_enabled           | booléen          |             |
| address                           | chaîne           |             |
| alias                             | chaîne           |             |
| check\_freshness                  | booléen          |             |
| check\_interval                   | réel             |             |
| check\_period                     | chaîne           |             |
| check\_type                       | entier court     |             |
| current\_check\_attempt           | entier court     |             |
| current\_state                    | entier court     |             |
| default\_active\_checks\_enabled  | booléen          |             |
| default\_event\_handler\_enabled  | booléen          |             |
| default\_flap\_detection\_enabled | booléen          |             |
| default\_notifications\_enabled   | booléen          |             |
| default\_passive\_checks\_enabled | booléen          |             |
| downtime\_depth                   | entier court     |             |
| display\_name                     | chaîne           |             |
| enabled                           | booléen          |             |
| event\_handler                    | chaîne           |             |
| event\_handler\_enabled           | booléen          |             |
| execution\_time                   | réel             |             |
| first\_notification\_delay        | réel             |             |
| flap\_detection\_enabled          | booléen          |             |
| flap\_detection\_on\_down         | booléen          |             |
| flap\_detection\_on\_unreachable  | booléen          |             |
| flap\_detection\_on\_up           | booléen          |             |
| freshness\_threshold              | réel             |             |
| has\_been\_checked                | booléen          |             |
| high\_flap\_threshold             | réel             |             |
| host\_name                        | chaîne           |             |
| host\_id                          | entier non signé |             |
| icon\_image                       | chaîne           |             |
| icon\_image\_alt                  | chaîne           |             |
| instance\_id                      | entier non signé |             |
| is\_flapping                      | booléen          |             |
| last\_check                       | temps            |             |
| last\_hard\_state                 | entier court     |             |
| last\_hard\_state\_change         | temps            |             |
| last\_notification                | temps            |             |
| last\_state\_change               | temps            |             |
| last\_time\_down                  | temps            |             |
| last\_time\_unreachable           | temps            |             |
| last\_time\_up                    | temps            |             |
| last\_update                      | temps            |             |
| latency                           | réel             |             |
| low\_flap\_threshold              | réel             |             |
| max\_check\_attempts              | entier court     |             |
| next\_check                       | temps            |             |
| next\_notification                | temps            |             |
| no\_more\_notifications           | booléen          |             |
| notes                             | chaîne           |             |
| notes\_url                        | chaîne           |             |
| notification\_interval            | réel             |             |
| notification\_number              | entier court     |             |
| notification\_period              | chaîne           |             |
| notifications\_enabled            | booléen          |             |
| notify\_on\_down                  | booléen          |             |
| notify\_on\_downtime              | booléen          |             |
| notify\_on\_flapping              | booléen          |             |
| notify\_on\_recovery              | booléen          |             |
| notify\_on\_unreachable           | booléen          |             |
| obsess\_over                      | booléen          |             |
| passive\_checks\_enabled          | booléen          |             |
| percent\_state\_change            | réel             |             |
| retry\_interval                   | réel             |             |
| should\_be\_scheduled             | booléen          |             |
| stalk\_on\_down                   | booléen          |             |
| stalk\_on\_unreachable            | booléen          |             |
| stalk\_on\_up                     | booléen          |             |
| statusmap\_image                  | chaîne           |             |
| state\_type                       | entier court     |             |
| check\_command                    | chaîne           |             |
| output                            | chaîne           |             |
| perf\_data                        | chaîne           |             |
| retain\_nonstatus\_information    | booléen          |             |
| retain\_status\_information       | booléen          |             |
| timezone                          | chaîne           |             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHost

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 30      | 65566 |

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
  uint64 host_id = 1;                     // ID de l'hôte.

  bool acknowledged = 2;                  // True si l'alerte a été acquittée.
  AckType acknowledgement_type = 3;       // Type d'acquittement.

  bool active_checks = 4;                 // True si les contrôles actifs sont activés.
  bool enabled = 5;                       // True si cet hôte est activé.
  int32 scheduled_downtime_depth = 6;     // Nombre de plages de maintenance actives.
  string check_command = 7;               // Commande de contrôle.
  int32 check_interval = 8;               // Intervalle en unités (en général 60s) entre 2 contrôles.
  string check_period = 9;                // Période de temps durant laquelle les contrôles sont autorisés

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 10;              // Type du dernier contrôle.
  int32 check_attempt = 11;               // Nombre de contrôles non OK.
  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 12;                       // État courant.
  bool event_handler_enabled = 13;        // True si un event handler est configuré sur cet hôte.
  string event_handler = 14;              // Commande exécutée quand l'état change.
  double execution_time = 15;             // Durée du dernier contrôle.
  bool flap_detection = 16;               // True si la détection du bagotement est activée.
  bool checked = 17;                      // La ressource a été contrôlée au moins une fois.
  bool flapping = 18;                     // True si l'hôte est en bagotement.
  int64 last_check = 19;                  // Timestamp du dernier contrôle.
  State last_hard_state = 20;             // Dernier état hard.
  int64 last_hard_state_change = 21;      // Timestamp du dernier passage à l'état hard.
  int64 last_notification = 22;           // Timestamp de la dernière notification.
  int32 notification_number = 23;         // Numéro de la notification courante, ou 0 en l'absence de notification.
  int64 last_state_change = 24;           // Timestamp du dernier changement d'état.
  int64 last_time_down = 25;              // Timestamp du dernier contrôle non OK.
  int64 last_time_unreachable = 26;       // Timestamp du dernier contrôle non OK avec tous les hôtes parents au statut non OK.
  int64 last_time_up = 27;                // Timestamp du dernier contôle OK.
  int64 last_update = 28;                 // Timestamp du dernier message créé.
  double latency = 29;                    // Délai entre l'heure programmée d'un contrôle et celle de son exécution.
  int32 max_check_attempts = 30;          // Nombre de contrôles non OK après lesquels l'hôte rentre dans un état non OK hard.
  int64 next_check = 31;                  // Timestamp du prochain contrôle programmé.
  int64 next_host_notification = 32;      // Timestamp de la prochaine renotification.
  bool no_more_notifications = 33;        // Si true, aucune autre notification ne sera envoyée.
  bool notify = 34;                       // Notifications autorisées
  string output = 35;                     // Output de la commande de contrôle.
  bool passive_checks = 36;               // Les contrôles passsifs sont activés.
  double percent_state_change = 37;       // Utilisé par le bagotement, et comparé aux seuils hauts et bas de bagotement.
  string perfdata = 38;                   // Données de performance extraites de l'output de la commande.
  double retry_interval = 39;             // Interval entre deux contrôles quand l'hôte n'est pas dans un statut disponible et que le type de l'état est soft.
  bool should_be_scheduled = 40;          // True si le prochain contrôle devrait être programmé.
  bool obsess_over_host = 41;             // True si une commande OCSP est exécutée après un contôle ou une commande de notification.

  enum StateType {
    SOFT = 0;                             // État pas encore confirmé.
    HARD = 1;                             // État confirmé.
  }

  StateType state_type = 42;              // Type d'état.
  string action_url = 43;                 // URL optionnelle disponible dans l'interface, associée à cet hôte.
  string address = 44;                    // Adresse
  string alias = 45;                      // Alias de cet hôte.
  bool check_freshness = 46;              // Contrôle de fraîcheur passif activé.
  bool default_active_checks = 47;        // Identique à active_checks, mais valeur par défaut.
  bool default_event_handler_enabled = 48;// Identique à event_handler, mais valeur par défaut.
  bool default_flap_detection = 49;       // Identique à flap_detection, mais valeur par défaut.
  bool default_notify = 50;               // Identique à notify, mais valeur par défaut.
  bool default_passive_checks = 51;       // Identique à passive checks, mais valeur par défaut.
  string display_name = 52;               // Nom affiché dans l'interface
  double first_notification_delay = 53;   // Délai entre deux notifications, en unités (généralement 60s).
  bool flap_detection_on_down = 54;       // Le statut indsponible est pris en compte pour la détection du bagotement.
  bool flap_detection_on_unreachable = 55;// Le statut injoignable est pris en compte pour la détection du bagotement.
  bool flap_detection_on_up = 56;         // Le statut OK est pris en compte pour la détection du bagotement.
  double freshness_threshold = 57;        // Délai après lequel le résultat du contrôle n'est plus considéré comme frais.
  double high_flap_threshold = 58;        // Si le pourcentage de changement de statut dépasse ce seuil, l'hôte est considéré en bagotement.
  string name = 59;                       // Nom de l'hôte.
  string icon_image = 60;                 // Icône affichée dans l'interface pour cet hôte.
  string icon_image_alt = 61;             // Text alternatif pour icon_image.
  int32 instance_id = 62;                 // ID de l'instance
  double low_flap_threshold = 63;         // Si le pourcentage de changement de statut est plus bas que ce seuil, l'hôte n'est pas considéré en bagotement.
  string notes = 64;                      // Infobulle dans la page Statut des Ressources.
  string notes_url = 65;                  // URL cliquable dans la page Statut des Ressources.
  double notification_interval = 66;      // Intervalle entre deux notifications.
  string notification_period = 67;        // Période de temps pendant laquelle les notifications sont autorisées.
  bool notify_on_down = 68;               // Les utilisateurs sont notifiés si l'hôte devient indisponible.
  bool notify_on_downtime = 69;           // Les utilisateurs sont notifiés si l'hôte entre en plage de maintenance.
  bool notify_on_flapping = 70;           // Les utilisateurs sont notifiés si l'hôte est en bagotement.
  bool notify_on_recovery = 71;           // Les utilisateurs sont notifiés si l'hôte devient disponible.
  bool notify_on_unreachable = 72;        // Les utilisateurs sont notifiés si l'hôte devient injoignable.
  bool stalk_on_down = 73;                // Inscrit dans le log le changement d'output si le statut passe à indisponible.
  bool stalk_on_unreachable = 74;         // Inscrit dans le log le changement d'output si le statut passe à injoignable.
  bool stalk_on_up = 75;                  // Inscrit dans le log le changement d'output si le statut passe à disponible.
  string statusmap_image = 76;            // Image affichée sur une carte.
  bool retain_nonstatus_information = 77; // Non utilisé
  bool retain_status_information = 78;    // Non utilisé
  string timezone = 79;                   // Fuseau horaire de l'hôte.
  uint64 severity_id = 80;                // ID de la sévérité.
  repeated TagInfo tags = 81;             // Tags associés à cet hôte.
  uint64 icon_id = 82;                    // ID de l'icône.
}
```

</TabItem>
</Tabs>

### Host check

Ce type d'évènement est émis par Centreon Engine lorsqu'un contrôle est exécuté sur un hôte.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostCheck

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 8       | 65544 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété               | Type             | Description                                           | Version |
| ----------------------- | ---------------- | ----------------------------------------------------- | ------- |
| active\_checks\_enabled | booléen          | True si les contrôles actifs sont activés sur l’hôte. |
| check\_type             | entier court     |                                                       |
| host\_id                | entier non signé | ID de l’hôte.                                         |
| next\_check             | temps            | Heure à laquelle le prochain contrôle est prévu.      |
| command\_line           | chaîne           | Ligne de commande du contrôle.                        |
| source\_id              | entier non signé | L’ID de l’instance source de cet évènement.           |
| destination\_id         | entier non signé | L’ID de l’instance de destination de cet évènement.   |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHostCheck

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 39      | 65575 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::HostCheck** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbHostCheck** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

enum CheckType {
    CheckActive = 0;
    CheckPassive = 1;
}

message Check {
    BBDOHeader header = 1;

    bool active_checks_enabled = 2;   // True si les contôle actifs sont activés sur l'hôte.
    CheckType check_type = 3;         // L'une des valeurs de CheckType.
    string command_line = 4;          // Ligne de commande de contrôle.
    uint64 host_id = 5;               // ID de l'hôte.
    uint64 next_check = 6;            // Timestamp du prochain contrôle programmé.
    uint64 service_id = 7;            // ID du service, ou 0 pour un contrôle sur un hôte.
}
```

</TabItem>
</Tabs>

### Host dependency

Cet évènement est émis lorsqu'une dépendance entre hôtes est définie, et que la configuration est déployée.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostDependency

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 9       | 65545 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                      | Type             | Description | Version |
| ------------------------------ | ---------------- | ----------- | ------- |
| dependency\_period             | chaîne           |             |
| dependent\_host\_id            | entier non signé |             |
| enabled                        | booléen          |             |
| execution\_failure\_options    | chaîne           |             |
| inherits\_parent               | booléen          |             |
| host\_id                       | entier non signé |             |
| notification\_failure\_options | chaîne           |             |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 10      | 65546 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété       | Type             | Description                                                          | Version |
| --------------- | ---------------- | -------------------------------------------------------------------- | ------- |
| host\_group\_id | entier non signé |                                                                      |
| name            | chaîne           | Nom du groupe.                                                       |
| enabled         | booléen          | True si le groupe est activé, False s’il ne l’est pas (suppression). |
| poller\_id      | entier non signé |                                                                      |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 11      | 65547 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété       | Type             | Description                                                                 | Version |
| --------------- | ---------------- | --------------------------------------------------------------------------- | ------- |
| enabled         | booléen          | True si l'hôte est membre du groupe, False s'il ne l’est pas (suppression). |
| group           | chaîne           | Nom du groupe.                                                              |
| instance\_id    | entier non signé | ID de l’instance.                                                           |
| host\_id        | entier non signé | ID de l’hôte.                                                               |
| source\_id      | entier non signé | L’ID de l’instance source de cet évènement.                                 |
| destination\_id | entier non signé | L’ID de l’instance de destination de cet évènement.                         |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 13      | 65549 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété  | Type             | Description                                                                       | Version |
| ---------- | ---------------- | --------------------------------------------------------------------------------- | ------- |
| enabled    | booléen          | True si la fonction parent est activée, False si elle ne l’est pas (suppression). |
| child\_id  | entier non signé | ID d’hôte enfant.                                                                 |
| parent\_id | entier non signé | ID d’hôte parent.                                                                 |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 14      | 65550 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                 | Type             | Description | Version |
| ------------------------- | ---------------- | ----------- | ------- |
| acknowledged              | booléen          |             |
| acknowledgement\_type     | entier court     |             |
| active\_checks\_enabled   | booléen          |             |
| check\_interval           | réel             |             |
| check\_period             | chaîne           |             |
| check\_type               | entier court     |             |
| current\_check\_attempt   | entier court     |             |
| current\_state            | entier court     |             |
| downtime\_depth           | entier court     |             |
| enabled                   | booléen          |             |
| event\_handler            | chaîne           |             |
| event\_handler\_enabled   | booléen          |             |
| execution\_time           | réel             |             |
| flap\_detection\_enabled  | booléen          |             |
| has\_been\_checked        | booléen          |             |
| host\_id                  | entier non signé |             |
| is\_flapping              | booléen          |             |
| last\_check               | temps            |             |
| last\_hard\_state         | entier court     |             |
| last\_hard\_state\_change | temps            |             |
| last\_notification        | temps            |             |
| last\_state\_change       | temps            |             |
| last\_time\_down          | temps            |             |
| last\_time\_unreachable   | temps            |             |
| last\_time\_up            | temps            |             |
| last\_update              | temps            |             |
| latency                   | réel             |             |
| max\_check\_attempts      | entier court     |             |
| next\_check               | temps            |             |
| next\_host\_notification  | temps            |             |
| no\_more\_notifications   | booléen          |             |
| notification\_number      | entier court     |             |
| notifications\_enabled    | booléen          |             |
| obsess\_over              | booléen          |             |
| passive\_checks\_enabled  | booléen          |             |
| percent\_state\_change    | réel             |             |
| retry\_interval           | réel             |             |
| should\_be\_scheduled     | booléen          |             |
| state\_type               | entier court     |             |
| check\_command            | chaîne           |             |
| output                    | chaîne           |             |
| perf\_data                | chaîne           |             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHostStatus

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 32      | 65538 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::HostStatus** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbHostStatus** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message HostStatus {
  uint64 host_id = 1;                 // ID de l'hôte.

  bool checked = 2;                   // True si l'hôte est contrôlé.
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 3;           // Type du dernier contrôle (ACTIVE/PASSIVE).

  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 4;                    // État courant de l'hôte.
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 5;           // État confirmé ou non (HARD/SOFT).
  int64 last_state_change = 6;        // Timestamp du dernier changement d'état.
  State last_hard_state = 7;          // Dernier état hard.
  int64 last_hard_state_change = 8;   // Timestamp du dernier état hard.
  int64 last_time_up = 9;             // Timestamp du dernier statut disponible.
  int64 last_time_down = 10;          // Timestamp du dernier statut indisponible.
  int64 last_time_unreachable = 11;   // Timestamp du dernier statut injoignable.

  string output = 12;                 // Output du contrôle.
  string long_output = 13;            // Output long du contrôle.
  string perfdata = 14;               // Données de performance.

  bool flapping = 15;                 // True si l'hôte est en bagotement.
  double percent_state_change = 16;   // Utilisé par le bagotement, et comparé aux seuils hauts et bas de bagotement.
  double latency = 17;                // Délai entre l'heure où le contrôle est programmé et celle où il est exécuté.
  double execution_time = 18;         // Durée du dernier contrôle.
  int64 last_check = 19;              // Timestamp du dernier contrôle.
  int64 next_check = 20;              // Timestamp du moment ou le prochain contrpole est programmé.
  bool should_be_scheduled = 21;      // True si le prochain contrôle devrait être programmé.
  int32 check_attempt = 22;           // Nombre de contrôles non OK.

  int32 notification_number = 23;     // Nombre de notifications envoyées depuis le début de l'alerte.
  bool no_more_notifications = 24;    // Aucune autre notification ne sera envoyée.
  int64 last_notification = 25;       // Timestamp de la dernière notification envoyée.
  int64 next_host_notification = 26;  // Timestamp de la prochaine renotification.

  AckType acknowledgement_type = 27;  // Une valeur de l'énumération AckType.
  int32 scheduled_downtime_depth = 28;// Nombre de plages de maintenance actives.
}
```

</TabItem>
</Tabs>

### Instance

Cet évènement est émis par Centreon Engine lorsqu'Engine commence à envoyer sa configuration, ou bien lorqu'Engine s'arrête.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Instance

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 15      | 65551 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété      | Type             | Description                                                  | Version |
| -------------- | ---------------- | ------------------------------------------------------------ | ------- |
| engine         | chaîne           | Nom du moteur de supervision utilisé sur cette instance.     |
| id             | entier non signé | ID de l’instance.                                            |
| name           | chaîne           | Nom de l’instance.                                           |
| is\_running    | booléen          | Si cette instance est en cours d’exécution ou non.           |
| pid            | entier non signé | Supervision du PID du moteur.                                |
| program\_end   | temps            | Heure à laquelle l’instance s’est arrêtée.                   |
| program\_start | temps            | Heure à laquelle l’instance a démarré.                       |
| version        | chaîne           | Version du moteur de supervision utilisé sur cette instance. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbInstance

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 44      | 65580 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::Instance** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbInstance** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

message Instance {
  BBDOHeader header = 1;

  string engine = 2;        // Nom du moteur de supervision utilisé sur cette instance.
  bool running = 3;         // Si l'instance fonctionne ou pas.
  string name = 4;          // Nom de l'instance.
  int64 pid = 5;            // PID du moteur de supervision.
  uint64 instance_id = 6;   // ID de l'instance
  int64 end_time = 7;       // Timestamp auquel l'instance s'éteint.
  int64 start_time = 8;     // Timestamp auquel l'instance s'allume.
  string version = 9;       // Version de l'émetteur de ce message.
}
```

</TabItem>
</Tabs>

### Instance status

Cet évènement est émis régulièrement par Centreon Engine en tant que watchdog. Cet évènement informe Broker que le collecteur est toujours vivant (en même temps que diverses autres informations).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::InstanceStatus

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 16      | 65552 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                         | Type             | Description                                                                               | Version |
| --------------------------------- | ---------------- | ----------------------------------------------------------------------------------------- | ------- |
| active\_host\_checks\_enabled     | booléen          | Si les contrôles d’hôtes actifs sont activés ou non de manière globale.                   |
| active\_service\_checks\_enabled  | booléen          | Si les contrôles de services actifs sont activés ou non de manière globale.               |
| check\_hosts\_freshness           | booléen          | Si le contrôle de la fraîcheur des hôtes est activé ou non de manière globale.            |
| check\_services\_freshness        | booléen          | Si le contrôle de la fraîcheur des services est activé ou non de manière globale.         |
| event\_handler\_enabled           | booléen          | Si les gestionnaires d’évènements sont activés ou non de manière globale.                 |
| flap\_detection\_enabled          | booléen          | Si la détection des bagotements est activée ou non de manière globale.                    |
| id                                | entier non signé | ID de l’instance.                                                                         |
| last\_alive                       | temps            | La dernière fois que l’instance a été identifiée comme étant vivante.                     |
| last\_command\_check              | temps            | Dernière fois qu’une commande de contrôle a été exécutée.                                 |
| notifications\_enabled            | booléen          | Si les notifications sont activées ou non de manière globale.                             |
| obsess\_over\_hosts               | booléen          | Si oui ou non le moteur de supervision remontera les résultats de contrôles des hôtes.    |
| obsess\_over\_services            | booléen          | Si oui ou non le moteur de supervision remontera les résultats de contrôles des services. |
| passive\_host\_checks\_enabled    | booléen          | Si les contrôles passifs d’hôtes sont activés ou non de manière globale.                  |
| passive\_service\_checks\_enabled | booléen          | Si les contrôles passifs de services sont activés ou non de manière globale.              |
| global\_host\_event\_handler      | chaîne           | Gestionnaire d’évènements global pour les hôtes.                                          |
| global\_service\_event\_handler   | chaîne           | Gestionnaire d’évènements global pour les services.                                       |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbInstanceStatus

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 42      | 65578 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::InstanceStatus** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbInstanceStatus** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

message InstanceStatus {
  BBDOHeader header = 1;

  bool event_handlers = 2;                    // Si les event handlers sont activés globalement, ou non.
  bool flap_detection = 3;                    // Si la détection du bagotement est activée globalement, ou non.
  bool notifications = 4;                     // Si les notifications sont activées globalement, ou non.
  bool active_host_checks = 5;                // Si les contrôles actifs sur les hôtes sont activés globalement, ou non.
  bool active_service_checks = 6;             // Si les contrôles actifs sur les services sont activés globalement, ou non.
  bool check_hosts_freshness = 7;             // Si le contrôle de la fraîcheur des hôtes est activé globalement, ou non.
  bool check_services_freshness =  8;         // Si le contrôle de la fraîcheur des services est activé globalement, ou non.
  string global_host_event_handler = 9;       // Event handler global sur les hôtes.
  string global_service_event_handler = 10;   // Event handler global sur les services.
  uint64 last_alive = 11;                     // Dernière fois que l'instance était vivante.
  int64 last_command_check = 12;              // Dernière fois qu'une commande de vérification a été exécutée.
  bool obsess_over_hosts = 13;                // Si le moteur de supervision doit porcéder à des contôles supplémentaires sur les hôtes, ou non.
  bool obsess_over_services = 14;             // Si le moteur de supervision doit porcéder à des contôles supplémentaires sur les services, ou non.
  bool passive_host_checks = 15;              // Si les contôles passifs sur les hôtes sont activés globalement, ou non.
  bool passive_service_checks = 16;           // Si les contôles passifs sur les services sont activés globalement, ou non.
  uint64 instance_id = 17;                    // ID de l'instance.
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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 17      | 65553 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété             | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Version |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| c\_time               | temps            | Temps de connexion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| host\_id              | entier non signé | ID de l’hôte. 0 si l’entrée du journal ne fait pas référence à un hôte ou un service spécifique.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| host\_name            | chaîne           | Nom de l’hôte. Peut être vide si l’entrée du journal ne fait pas référence à un hôte ou un service spécifique.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| instance\_name        | chaîne           | Nom de l’instance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| log\_type             | entier court     | 0 pour SOFT, 1 pour HARD.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| msg\_type             | entier court     | 0 pour SERVICE ALERT (envoyé lors du changement d’état du service), 1 pour HOST ALERT (envoyé lors du changement d’état de l’hôte), 2 pour SERVICE NOTIFICATION (notification envoyée pour un service), 3 pour HOST NOTIFICATION (notification envoyée pour un hôte), 4 pour Warning (avertissement de Centreon Engine), 5 pour EXTERNAL COMMAND (commande externe reçue), 6 pour CURRENT SERVICE STATE (état actuel du service supervisé, généralement envoyé lors du rechargement de la configuration), 7 pour CURRENT HOST STATE (état actuel de l’hôte supervisé, (état actuel de l’hôte supervisé, généralement envoyé lors du rechargement de la configuration), 8 pour INITIAL SERVICE STATE (état initial du service, après traitement de rétention, envoyé au début du processus), 9 pour INITIAL HOST STATE (état initial de l’hôte surveillé, après traitement de rétention, envoyé au début du processus), 10 pour la commande externe ACKNOWLEDGE\_SVC\_PROBLEM (cas particulier de EXTERNAL COMMAND pour l’acquittement du service), 11 pour la commande externe ACKNOWLEDGE\_HOST\_PROBLEM (cas particulier de EXTERNAL COMMAND pour l’acquittement de l’hôte). |
| notification\_cmd     | chaîne           | Commande de notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| notification\_contact | chaîne           | Contact pour la notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| retry                 | entier           | Tentative de contrôle actuelle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| service\_description  | chaîne           | Description du service. Vide si l’entrée du journal ne fait pas référence à un service spécifique.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| service\_id           | entier non signé | ID de service. 0 si l’entrée du journal ne fait pas référence à un service spécifique.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| status                | entier court     | Statut de l’hôte / du service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| output                | chaîne           | Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbLogEntry

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 41      | 65577 |

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

  uint64 ctime = 1;                     // Timestamp du log.
  string instance_name = 2;             // Nom de l'instance.
  string output = 3;                    // Output.
  uint64 host_id = 4;                   // ID de l'hôte.
  uint64 service_id = 5;                // ID du service, ou 0 si l'entrée de log ne se rapporte pas à un service spécifique.
  string host_name = 6;                 // Nom de l'hôte.
  string service_description = 7;       // Description du service, ou vide si l'entrée de log ne se rapporte pas à un service spécifique.
  string notification_contact = 8;      // Contact de notification.
  string notification_cmd = 9;          // Commande de notification.
  LogType type = 10;                    // Une valeur de LogType.
  MsgType msg_type = 11;                // Une valeur de MsgType.
  int32 status = 12;                    // Statut de l'hôte/ du service.
  int32 retry = 13;                     // Tentative de contrôle courante.
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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 18      | 65554 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété          | Type             | Description                                            | Version |
| ------------------ | ---------------- | ------------------------------------------------------ | ------- |
| args               | chaîne           | Arguments du module.                                   |
| enabled            | booléen          | Si ce module est activé ou non.                        |
| filename           | chaîne           | Chemin d’accès au fichier du module.                   |
| instance\_id       | entier non signé | ID de l’instance.                                      |
| loaded             | booléen          | Si ce module est chargé ou non.                        |
| should\_be\_loaded | booléen          | Si ce module doit être (aurait dû être) chargé ou non. |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 23      | 65559 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                         | Type             | Description | Version |
| --------------------------------- | ---------------- | ----------- | ------- |
| acknowledged                      | booléen          |             |
| acknowledged\_type                | entier court     |             |
| action\_url                       | chaîne           |             |
| active\_checks\_enabled           | booléen          |             |
| check\_freshness                  | booléen          |             |
| check\_interval                   | réel             |             |
| check\_period                     | chaîne           |             |
| check\_type                       | entier court     |             |
| current\_check\_attempt           | entier court     |             |
| current\_state                    | entier court     |             |
| default\_active\_checks\_enabled  | booléen          |             |
| default\_event\_handler\_enabled  | booléen          |             |
| default\_flap\_detection\_enabled | booléen          |             |
| default\_notifications\_enabled   | booléen          |             |
| default\_passive\_checks\_enabled | booléen          |             |
| dowtine\_depth                    | entier court     |             |
| display\_name                     | chaîne           |             |
| enabled                           | booléen          |             |
| event\_handler                    | chaîne           |             |
| event\_handler\_enabled           | booléen          |             |
| execution\_time                   | réel             |             |
| first\_notification\_delay        | réel             |             |
| flap\_detection\_enabled          | booléen          |             |
| flap\_detection\_on\_critical     | booléen          |             |
| flap\_detection\_on\_ok           | booléen          |             |
| flap\_detection\_on\_unknown      | booléen          |             |
| flap\_detection\_on\_warning      | booléen          |             |
| freshness\_threshold              | réel             |             |
| has\_been\_checked                | booléen          |             |
| high\_flap\_threshold             | réel             |             |
| host\_id                          | entier non signé |             |
| host\_name                        | chaîne           |             |
| icon\_image                       | chaîne           |             |
| icon\_image\_alt                  | chaîne           |             |
| service\_id                       | entier non signé |             |
| is\_flapping                      | booléen          |             |
| is\_volatile                      | booléen          |             |
| last\_check                       | temps            |             |
| last\_hard\_state                 | entier court     |             |
| last\_hard\_state\_change         | temps            |             |
| last\_notification                | temps            |             |
| last\_state\_change               | temps            |             |
| last\_time\_critical              | temps            |             |
| last\_time\_ok                    | temps            |             |
| last\_time\_unknown               | temps            |             |
| last\_time\_warning               | temps            |             |
| last\_update                      | temps            |             |
| latency                           | réel             |             |
| low\_flap\_threshold              | réel             |             |
| max\_check\_attempts              | entier court     |             |
| next\_check                       | temps            |             |
| next\_notification                | temps            |             |
| no\_more\_notifications           | booléen          |             |
| notes                             | chaîne           |             |
| notes\_url                        | chaîne           |             |
| notification\_interval            | réel             |             |
| notification\_number              | entier court     |             |
| notification\_period              | chaîne           |             |
| notifications\_enabled            | booléen          |             |
| notify\_on\_critical              | booléen          |             |
| notify\_on\_downtime              | booléen          |             |
| notify\_on\_flapping              | booléen          |             |
| notify\_on\_recovery              | booléen          |             |
| notify\_on\_unknown               | booléen          |             |
| notify\_on\_warning               | booléen          |             |
| obsess\_over                      | booléen          |             |
| passive\_checks\_enabled          | booléen          |             |
| percent\_state\_change            | réel             |             |
| retry\_interval                   | réel             |             |
| scheduled\_downtime\_depth        | entier court     |             |
| service\_description              | chaîne           |             |
| should\_be\_scheduled             | booléen          |             |
| stalk\_on\_critical               | booléen          |             |
| stalk\_on\_ok                     | booléen          |             |
| stalk\_on\_unknown                | booléen          |             |
| stalk\_on\_warning                | booléen          |             |
| state\_type                       | entier court     |             |
| check\_command                    | chaîne           |             |
| output                            | chaîne           |             |
| perf\_data                        | chaîne           |             |
| retain\_nonstatus\_information    | booléen          |             |
| retain\_status\_information       | booléen          |             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbService

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 27      | 65563 |

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
  uint64 host_id = 1;                         // ID de l'hôte.
  uint64 service_id = 2;                      // ID du service.

  bool acknowledged = 3;                      // Actuellement acquitté?
  AckType acknowledgement_type = 4;           // Valeur de AckType.

  bool active_checks = 5;                     // Les contrôles actifs sont-ils activés?
  bool enabled = 6;                           // Ce service est-il actif?
  int32 scheduled_downtime_depth = 7;         // Nombre de plages de maintenance actives.
  string check_command = 8;                   // Commande exécutée.
  uint32 check_interval = 9;                  // Intervalle en unités (généralement 60s) entre 2 contrôles.
  string check_period = 10;                   // Période de temps durant laquelle les contrôles sont autorisés.

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 11;                  // Valeur de CheckType.
  int32 check_attempt = 12;                   // Nombre de contrôles non OK.
  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 13;                           // État courant du service.
  bool event_handler_enabled = 14;            // Event handler activé?
  string event_handler = 15;                  // Commande exécutée lors d'un changement d'état.
  double execution_time = 16;                 // Durée du dernier contrôle.
  bool flap_detection = 17;                   // La détaction du bagotement est-elle activée ?
  bool checked = 18;                          // Le service a-t-il été contrôlé ?
  bool flapping = 19;                         // Le service est-il en état de bagotement ?
  int64 last_check = 20;                      // Timestamp du dernier contrôle.
  State last_hard_state = 21;                 // Dernier état hard.
  int64 last_hard_state_change = 22;          // Timestamp du dernier changement d'état hard.
  int64 last_notification = 23;               // Timestamp de la dernière notification.
  int32 notification_number = 24;             // Nombre de notifications envoyées depuis le début de l'alerte.
  int64 last_state_change = 25;               // Timestamp du dernier changement de statut.
  int64 last_time_ok = 26;                    // Timestamp du dernier code retour check OK.
  int64 last_time_warning = 27;               // Timestamp du dernier code retour check WARNING.
  int64 last_time_critical = 28;              // Timestamp du dernier code retour check CRITICAL.
  int64 last_time_unknown = 29;               // Timestamp du dernier code retour check UNKNOWN.
  int64 last_update = 30;                     // Timestamp de la création de cet évènement.
  double latency = 31;                        // Délai entre l'heure de contrôle programmée et celle de l'exécution du contrôle.
  uint32 max_check_attempts = 32;             // Nombre de contrôles non OK après lesquels le service entre dans un état non OK hard.
  int64 next_check = 33;                      // Timestamp du prochain contrôle programmé.
  int64 next_notification = 34;               // Timestamp de la prochaine notification.
  bool no_more_notifications = 35;            // Aucune autre notification ne sera envoyée.
  bool notify = 36;                           // Les notifications sont-elles activées sur ce service?
  string output = 37;                         // Output de la commande de contrôle.
  string long_output = 38;                    // Output long de la commande de contrôle.
  bool passive_checks = 39;                   // Les contrôles passifs sont-ils activés?
  double percent_state_change = 40;           // Utilisé par le bagotement, et comparé aux seuils hauts et bas de bagotement.
  string perfdata = 41;                       // Données de performance extraites de l'output de la commande.
  double retry_interval = 42;                 // Intervalle entre deux contrôles lorsque le service n'est pas dans un statut OK et que le type d'état est SOFT.
  string host_name = 43;                      // Nom de l'hôte pour ce service.
  string description = 44;                    // Description de ce service.
  bool should_be_scheduled = 45;              // Un prochain contrôle est-il programmé ?
  bool obsess_over_service = 46;              // True si une commande OCSP est exécutée après un contrôle ou une commande de notification.

  enum StateType {
    SOFT = 0;
    HARD = 1;
  }

  StateType state_type = 47;                  // Valeur de StateType.
  string action_url = 48;                     // URL permettant d'obtenir des informations sur ce service.
  bool check_freshness = 49;                  // Contrôle de fraîcheur passive activé?
  bool default_active_checks = 50;            // Valeur par défaut pour active_checks.
  bool default_event_handler_enabled = 51;    // Valeur par défaut pour event_handler_enabled.
  bool default_flap_detection = 52;           // Valeur par défaut pour flap detection.
  bool default_notify = 53;                   // Valeur par défaut pour notify.
  bool default_passive_checks = 54;           // Valeur par défaut pour passive checks.
  string display_name = 55;                   // Non affiché dans l'interface.
  double first_notification_delay = 56;       // Délai avant de notifier, en unités (généralement 60s).
  bool flap_detection_on_critical = 57;       // Le statut critique est pris en compte pour la détection du bagotement.
  bool flap_detection_on_ok = 58;             // Le statut ok est pris en compte pour la détection du bagotement.
  bool flap_detection_on_unknown = 59;        // Le statut inconnu est pris en compte pour la détection du bagotement.
  bool flap_detection_on_warning = 60;        // Le statut alerte est pris en compte pour la détection du bagotement.
  double freshness_threshold = 61;            // Délai après lequel le résultat du contrôle n'est plus considéré comme frais.
  double high_flap_threshold = 62;            // Si le pourcentage de changement est plus élevé que ce nombre, le service est considéré comme en état de bagotement.
  string icon_image = 63;                     // Icône affichée dans l'interface pour ce service.
  string icon_image_alt = 64;                 // Texte alternatif pour icon_image.
  bool is_volatile = 65;                      // Le service est-il volatile?
  double low_flap_threshold = 66;             // Si le pourcentage de changement est moins élevé que ce nombre, le service n'est pas considéré comme en état de bagotement.
  string notes = 67;                          // Infobulle dans la page Statut des ressources.
  string notes_url = 68;                      // URL cliquable dans la page Statut des ressources.
  double notification_interval = 69;          // Intervalle entre deux notifications.
  string notification_period = 70;            // Période de temps pendant laquelle les notifications sont autorisées.
  bool notify_on_critical = 71;               // Les utilisateurs sont notifiés si le statut du service devient critique.
  bool notify_on_downtime = 72;               // Les utilisateurs sont notifiés si une plage de maintenance est appliquée au service.
  bool notify_on_flapping = 73;               // Les utilisateurs sont notifiés si le service est en état de bagotement.
  bool notify_on_recovery = 74;               // Les utilisateurs sont notifiés si le statut du service devient Disponible.
  bool notify_on_unknown = 75;                // Les utilisateurs sont notifiés si le statut du service devient inconnu.
  bool notify_on_warning = 76;                // Les utilisateurs sont notifiés si le statut du service devient alerte.
  bool stalk_on_critical = 77;                // Les utilisateurs sont notifiés si le statut du service devient critique.
  bool stalk_on_ok = 78;                      // Inscrit dans le log le changement d'output si le statut passe à disponible.
  bool stalk_on_unknown = 79;                 // Inscrit dans le log le changement d'output si le statut passe à inconnu.
  bool stalk_on_warning = 80;                 // Inscrit dans le log le changement d'output si le statut passe à alerte
  bool retain_nonstatus_information = 81;     // Non utilisé.
  bool retain_status_information = 82;        // Non utilisé.
  uint64 severity_id = 83;                    // ID de la sévérité, ou 0.
  repeated TagInfo tags = 84;                 // IDs des tags.

  ServiceType type = 85;                      // De quel type de service s'agit-il?

  /* Les métaservices et les BA ont un ID interne. Il est stocké ici. */
  uint64 internal_id = 86;                    // ID du métaservice ou de la BA.
  uint64 icon_id = 87;                        // ID de l'icône.
}
```

</TabItem>
</Tabs>

### Service check

Cet évènement est émis par Centreon Engine lorsqu'un contrôle est effectué sur un service.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceCheck

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 19      | 65555 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété               | Type             | Description                                               | Version |
| ----------------------- | ---------------- | --------------------------------------------------------- | ------- |
| active\_checks\_enabled | booléen          | True si les contrôles actifs sont activés sur le service. |
| check\_type             | court            |                                                           |
| host\_id                | entier non signé | ID de l’hôte.                                             |
| next\_check             | temps            | Heure à laquelle le prochain contrôle est prévu.          |
| service\_id             | entier non signé | ID de service.                                            |
| command\_line           | chaîne           | Ligne de commande du contrôle.                            |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbServiceCheck

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 40      | 65576 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::ServiceCheck** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbServiceCheck** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

enum CheckType {
    CheckActive = 0;
    CheckPassive = 1;
}

message Check {
    BBDOHeader header = 1;

    bool active_checks_enabled = 2;   // True si les contrôles actifs sont activés sur l'hôte.
    CheckType check_type = 3;         // L'une des valeurs de CheckType.
    string command_line = 4;          // Commande de contrôle.
    uint64 host_id = 5;               // ID de l'hôte.
    uint64 next_check = 6;            // Timestamp pour lequel le prochain contrôle est programmé.
    uint64 service_id = 7;            // ID du service, ou 0 pour un contrôle sur un hôte.
}
```

</TabItem>
</Tabs>

### Service dependency

Ceci est un évènement de configuration envoyé lorsqu'une dépendance entre services est définie.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceDependency

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 20      | 65556 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                      | Type             | Description | Version |
| ------------------------------ | ---------------- | ----------- | ------- |
| dependency\_period             | chaîne           |             |
| dependent\_host\_id            | entier non signé |             |
| dependent\_service\_id         | entier non signé |             |
| enabled                        | booléen          |             |
| execution\_failure\_options    | chaîne           |             |
| host\_id                       | entier non signé |             |
| inherits\_parent               | booléen          |             |
| notification\_failure\_options | chaîne           |             |
| service\_id                    | entier non signé |             |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 21      | 65557 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété  | Type             | Description                                                         | Version |
| ---------- | ---------------- | ------------------------------------------------------------------- | ------- |
| id         | entier non signé |                                                                     |
| name       | chaîne           | Nom du groupe.                                                      |
| enabled    | enabled          | True si le groupe est activé, faux s’il ne l’est pas (suppression). |
| poller\_id | entier non signé |                                                                     |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 22      | 65558 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété   | Type             | Description                                                         | Version |
| ----------- | ---------------- | ------------------------------------------------------------------- | ------- |
| id          | entier non signé |                                                                     |
| host\_id    | entier non signé |                                                                     |
| service\_id | entier non signé |                                                                     |
| enabled     | enabled          | True si le groupe est activé, faux s’il ne l’est pas (suppression). |
| group\_name | chaîne           | Nom du groupe.                                                      |
| poller\_id  | entier non signé |                                                                     |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 24      | 65560 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété                 | Type             | Description |
| ------------------------- | ---------------- | ----------- |
| acknowledged              | booléen          |             |
| acknowledgement\_type     | entier court     |             |
| active\_checks\_enabled   | booléen          |             |
| check\_interval           | réel             |             |
| check\_period             | chaîne           |             |
| check\_type               | entier court     |             |
| current\_check\_attempt   | entier court     |             |
| current\_state            | entier court     |             |
| downtime\_depth           | entier court     |             |
| enabled                   | booléen          |             |
| event\_handler            | chaîne           |             |
| event\_handler\_enabled   | booléen          |             |
| execution\_time           | réel             |             |
| flap\_detection\_enabled  | booléen          |             |
| has\_been\_checked        | booléen          |             |
| host\_id                  | entier non signé |             |
| host\_name                | chaîne           |             |
| is\_flapping              | booléen          |             |
| last\_check               | temps            |             |
| last\_hard\_state         | entier court     |             |
| last\_hard\_state\_change | temps            |             |
| last\_notification        | temps            |             |
| last\_state\_change       | temps            |             |
| last\_time\_critical      | temps            |             |
| last\_time\_ok            | temps            |             |
| last\_time\_unknown       | temps            |             |
| last\_time\_warning       | temps            |             |
| last\_update              | temps            |             |
| latency                   | réel             |             |
| max\_check\_attempts      | entier court     |             |
| modified\_attributes      | entier non signé |             |
| next\_check               | temps            |             |
| next\_notification        | temps            |             |
| no\_more\_notifications   | booléen          |             |
| notification\_number      | entier court     |             |
| notifications\_enabled    | booléen          |             |
| obsess\_over              | booléen          |             |
| passive\_checks\_enabled  | booléen          |             |
| percent\_state\_change    | réel             |             |
| retry\_interval           | réel             |             |
| service\_description      | chaîne           |             |
| service\_id               | entier non signé |             |
| should\_be\_scheduled     | booléen          |             |
| state\_type               | entier court     |             |
| check\_command            | chaîne           |             |
| output                    | chaîne           |             |
| perf\_data                | chaîne           |             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbServiceStatus

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 29      | 65565 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::ServiceStatus** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbServiceStatus** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message ServiceStatus {
  uint64 host_id = 1;                         // ID de l'hôte.
  uint64 service_id = 2;                      // ID du service.

  bool checked = 3;                          // Le service est-il contrôlé?
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 4;                  // Valeur de CheckType.

  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 5;                           // État courant du service.
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 6;                  // Valeur de StateType.
  int64 last_state_change = 7;               // Timestamp du dernier changement d'état.
  State last_hard_state = 8;                 // Dernier état hard.
  int64 last_hard_state_change = 9;          // Timestamp du dernier changement d'état hard.
  int64 last_time_ok = 10;                   // Timestamp du dernier code retour OK.
  int64 last_time_warning = 11;              // Timestamp du dernier code retour WARNING.
  int64 last_time_critical = 12;             // Timestamp  du dernier code retour CRITICAL.
  int64 last_time_unknown = 13;              // Timestamp  du dernier code retour UNKNOWN.

  string output = 14;                        // Output de la commande de contrôle.
  string long_output = 15;                   // Output long de la commande de contrôle.
  string perfdata = 16;                      // Données de performance extraites de l'output de la commande.

  bool flapping = 17;                        // Le service est-il en état de bagotement ?
  double percent_state_change = 18;          // Utilisé par le bagotement, et comparé aux seuils hauts et bas de bagotement.
  double latency = 19;                       // Délai entre l'heure de contrôle programmée et celle à laquelle le contrôle a été exécuté.
  double execution_time = 20;                // Durée du dernier contrôle.
  int64 last_check = 21;                     // Timestamp du dernier contrôle.
  int64 next_check = 22;                     // Timestamp du prochain contrôle programmé.
  bool should_be_scheduled = 23;             // Un prochain contrôle est-il programmé?
  int32 check_attempt = 24;                  // Nombre de contrôles non OK après lesquels un service entre dans un état non OK hard.

  int32 notification_number = 25;            // Nombre de notifications envoyées depuis le début de l'alerte.
  bool no_more_notifications = 26;           // Aucune autre notification ne sera envoyée.
  int64 last_notification = 27;              // Timestamp de la dernière notification.
  int64 next_notification = 28;              // Timestamp de la prochaine notification.

  AckType acknowledgement_type = 29;         // Valeur de AckType.
  int32 scheduled_downtime_depth = 30;       // Nombre de plages de maintenance actives.

  ServiceType type = 31;                     // De quel type de service s'agit-il ?

  /* Les métaservices et les BA ont un ID interne. Il est stocké ici. */
  uint64 internal_id = 32;                   // ID du métaservice ou de la BA.
}
```

</TabItem>
</Tabs>

### Instance configuration

Ceci est un évènement de configuration annonçant tous les évènements de configuration qui seront envoyés par un collecteur.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::InstanceConfiguration

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 25      | 65561 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété  | Type             | Description                                                                          | Version |
| ---------- | ---------------- | ------------------------------------------------------------------------------------ | ------- |
| loaded     | booléen          | True si l’instance s’est chargée avec succès.                                        |
| poller\_id | entier non signé | ID du collecteur qui a reçu une demande de mise à jour de la configuration (reload). |

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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 26      | 65562 |

Le contenu de ce message est sérialisé de la manière suivante :

| Propriété  | Type             | Description                                                                          | Version |
| ---------- | ---------------- | ------------------------------------------------------------------------------------ | ------- |
| poller\_id | entier non signé | ID du collecteur qui a reçu une demande de mise à jour de la configuration (reload). |
| responsive | booléen          | Un booléen indiquant si le collecteur ayant l’ID **poller_id** répond ou non.        |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbResponsiveInstance

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 46      | 65582 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::ResponsiveInstance** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbResponsiveInstance** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message BBDOHeader {
  uint32 conf_version = 1;   // Un nombre interne, non utilisé actuellement.
}

message ResponsiveInstance {
  BBDOHeader header = 1;

  uint64 poller_id = 2;      // ID du collecteur.
  bool responsive = 3;       // Le collecteur répond-il?
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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 41      | 65577 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::AdaptiveService** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbAdaptiveService** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message AdaptiveService {
  uint64 host_id = 1;                         // ID de l'hôte.
  uint64 service_id = 2;                      // ID du service.

  optional bool notify = 3;                   // Les notifications sont-elles activées sur ce service?
  optional bool active_checks = 4;            // Les contrôles actifs sont-ils activés ?
  optional bool should_be_scheduled = 5;      // Un prochain contrôle est-il programmé ?
  optional bool passive_checks = 6;           // Les contrôles passifs sont-ils activés ?
  optional bool event_handler_enabled = 7;    // Event handler est-il activé ?
  optional bool flap_detection_enabled = 8;   // La détection du bagotement est-elle activée ?
  optional bool obsess_over_service = 9;      // True si une commande OCSP est exécutée après un contôle ou une commande de notification.
  optional string event_handler = 10;         // Commande exécutée quand le statut change.
  optional string check_command = 11;         // Command exécutée.
  optional uint32 check_interval = 12;        // Intervalle en unités (généralement 60s) entre 2 contrôles.
  optional uint32 retry_interval = 13;        // Intervalle entre deux contrôles lorsque le service n'est pas dans un statut OK et que le type d'état est SOFT.
  optional uint32 max_check_attempts  = 14;   // Nombre de contrôles non OK après lesquels un service entre dans un état non OK hard.
  optional bool check_freshness = 15;         // Le contrôle passif de fraîcheur est-il activé ?
  optional string check_period = 16;          // Période de temps pendant laquelle les contrôles sont autorisés.
  optional string notification_period = 17;   // Période de temps pendant laquelle les notifications sont autorisées.
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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 31      | 65567 |

Cet évènement est un évènement Protobuf, de sorte que les éléments ne sont pas sérialisés comme dans les évènements précédents, mais en utilisant le mécanisme de sérialisation Protobuf 3. Lorsque la version BBDO 3 est utilisée, plus aucun message **NEB::AdaptiveHost** ne devrait être envoyé, vous devriez voir des évènements **NEB::PbAdaptiveHost** à la place.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

```cpp
message AdaptiveHost {
  uint64 host_id = 1;                         // ID de l'hôte.

  optional bool notify = 2;                   // Les notifications sont-elles activées sur ce service ?
  optional bool active_checks = 3;            // Les contrôles actifs sont-ils activés ?
  optional bool should_be_scheduled = 4;      // Un prochain contrôle est-il programmé ?
  optional bool passive_checks = 5;           // Les contrôles passifs sont-ils activés ?
  optional bool event_handler_enabled = 6;    // Event handler est-il activé ?
  optional bool flap_detection = 7;           // La détection du bagotement est-elle activée ?
  optional bool obsess_over_host = 8;         // True si une commande OCSP est exécutée après un contôle ou une commande de notification.
  optional string event_handler = 9;          // Commande exécutée quand le statut change.
  optional string check_command  = 10;        // Commande exécutée.
  optional uint32 check_interval  = 11;       // Intervalle en unités (généralement 60s) entre 2 contrôles.
  optional uint32 retry_interval  = 12;       // Intervalle entre deux contrôles lorsque le service n'est pas dans un statut OK et que le type d'état est SOFT.
  optional uint32 max_check_attempts  = 13;   // Nombre de contrôles non OK après lesquels un service entre dans un état non OK hard.
  optional bool check_freshness = 14;         // Le contrôle passif de fraîcheur est-il activé ?
  optional string check_period  = 15;         // Période de temps pendant laquelle les contrôles sont autorisés.
  optional string notification_period  = 16;  // Période de temps pendant laquelle les notifications sont autorisées.
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

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 33      | 65569 |

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

### Tag

Ceci est un évènement de configuration. Cet événement est compris dans BBDO 3. 
Il est utilisé pour associer une balise à une ressource. Il existe quatre types de balises, **SERVICEGROUP**, **HOSTGROUP**, **SERVICECATEGORY**, **HOSTCATEGORY**. 
Un tag n’est pas associé à un collecteur, mais nous devons savoir quel collecteur a envoyé la balise à des fins de gestion interne, c’est pourquoi le message comporte un élément **poller\_id**.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

IL n'y a pas de version BBDO v2 de cet évènement.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbTag

| Catégorie | élément | ID    |
| --------- | ------- | ----- |
| 1         | 33      | 65570 |

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3) est le suivant :

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

</TabItem>
</Tabs>

## Storage

### Metric

Cet évènement est généré par un point de terminaison Storage pour notifier qu’un graphique de métriques RRD doit être mis à jour.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::Metric

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 1       | 196609 |

Le contenu de ce message est sérialisé comme suit :

| Propriété        | Type             | Description                                                                                   |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| ctime            | temps            | Heure à laquelle la valeur métrique a été générée.                                            |
| interval         | entier non signé | Intervalle de contrôle du service normal en secondes.                                         |
| metric\_id       | entier non signé | ID de la métrique (à partir du tableau des métriques).                                        |
| name             | chaîne           | Nom de la métrique.                                                                           |
| rrd\_len         | entier           | Durée de rétention des données RRD en secondes.                                               |
| value            | réel             | Valeur de la métrique.                                                                        |
| value\_type      | entier court     | Type de métrique (1 =3D compteur, 2 =3D dérive, 3 =3D absolu, autre =3D jauge).               |
| is\_for\_rebuild | booléen          | Défini sur True quand un graphique est en cours de reconstruction (voir l’évènement rebuild). |
| host\_id         | entier non signé | ID de l’hôte auquel cette métrique est attachée.                                              |
| service\_id      | entier non signé | ID du service auquel cette métrique est attachée.                                             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbMetric

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 9       | 196617 |

Cet événement est un événement Protobuf, ainsi son contenu n'est pas sérialisé
comme pour les événements en BBDO v2 mais plutôt en utilisant le mécanisme de
sérialisation Protobuf 3. Lorsque BBDO v3 est utilisé, les événements
**Storage::Metric** ne devraient plus être émis, vous devriez voir à la place
des événements **Storage::PbMetric**.

Voici la définition de cet événement [protobuf](https://developers.google.com/protocol-buffers/docs/proto3)

```cpp
message Metric {
  enum ValueType {
    GAUGE = 0;
    COUNTER = 1;
    DERIVE = 2;
    ABSOLUTE = 3;
    AUTOMATIC = 4;
  }
  uint64 metric_id = 4;       // ID de la métrique.
  int32 rrd_len = 5;          // Longueur en secondes de la rétention RRD.
  int32 interval = 6;         // Intervalle de check de service normal en secondes.
  ValueType value_type = 7;   // Une valeur de ValueType.
  uint64 time = 8;            // Timestamp à laquelle la valeur de la métrique a été générée.
  double value = 9;           // Valeur de la métrique.
}
```

</TabItem>
</Tabs>

### Rebuild

Les évènements de reconstruction sont générés lorsqu’un point de terminaison Storage détecte qu’un graphique doit être reconstruit. Il envoie d’abord un évènement de début de reconstruction (end `false`),
puis des valeurs métriques (évènement métrique avec is\_for\_rebuild défini sur True) et enfin un évènement de fin de reconstruction (end `true`).

Ce message et son fonctionnement sont uniquement disponibles en BBDO v2.
Avec BBDO v3, on profite de la puissance de Protobuf. Pour reconstruire les
graphiques, on utilise l'événement [Storage::PbRebuildMessage](#storagepbrebuildmessage).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::Rebuild

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 2       | 196610 |

Le contenu de ce message est sérialisé comme suit :

| Propriété | Type             | Description                                                                                                                        |
| --------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| end       | booléen          | Indicateur de fin. Défini sur True si la reconstruction commence, False si elle se termine.                                        |
| id        | entier non signé | ID de la métrique à reconstruire si is\_index est False, ou ID de l’index à reconstruire (graphique d’état) si is\_index est True. |
| is\_index | booléen          | Indicateur d’index. Reconstruction de l’index (état) si True, reconstruction de la métrique si False.                              |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Non disponible avec Protobuf 3.

Veuillez consulter [Storage::PbRebuildMessage](#storagepbrebuildmessage) pour l'alternative.

</TabItem>
</Tabs>

### Remove graph

Un point de terminaison Storage génère un évènement de suppression de graphique lorsqu’un graphique doit être supprimé.

Ce message et son fonctionnement sont uniquement disponibles en BBDO v2.
Avec BBDO v3, on profite de la puissance de Protobuf. Pour supprimer les
graphiques, on utilise l'événement [Storage::PbRemoveGraphMessage](#storagepbremovegraphmessage).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::RemoveGraph

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 3       | 196611 |

Le contenu de ce message est sérialisé comme suit:

| Propriété | Type             | Description                                                                                                               |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| id        | entier non signé | ID de l’index (is\_index =`true`) ou ID de la métrique (is\_index =`false`) à supprimer.                                  |
| is\_index | booléen          | Indicateur d’index. Si True, un graphique d’index (état) sera supprimé. Si False, un graphique de métrique sera supprimé. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Non disponible avec Protobuf 3.

Veuillez consulter [Storage::PbRemoveGraphMessage](#storagepbremovegraphmessage)
pour l'alternative.

</TabItem>
</Tabs>

### Status

Cet événement est émis par Centreon Broker lorsqu'un événement de type **Service Status** ou **Host Status** est reçu.
Il contient essentiellement une ressource avec son état.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::Status

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 4       | 196612 |

Le contenu de ce message est sérialisé comme suit :

| Propriété        | Type             | Description                                                                                   |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| ctime            | temps            | Heure à laquelle l’état a été généré.                                                         |
| index\_id        | entier non signé | ID de l’index.                                                                                |
| interval         | entier non signé | Intervalle de contrôle du service normal en secondes.                                         |
| rrd\_len         | temps            | Rétention des données RRD en secondes.                                                        |
| state            | entier court     | État du service.                                                                              |
| is\_for\_rebuild | booléen          | Défini sur True quand un graphique est en cours de reconstruction (voir l’évènement rebuild). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbStatus

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 10      | 196618 |

Cet évènement est un évènement Protobuf, par conséquent ses éléments ne sont pas
sérialisés comme avec BBDO v2 mais en utilisant le mécanisme de sérialisation
Protobuf 3. Lorsque BBDO v3 est utilisé, il ne devrait plus y avoir d'émission
d'évènements **Storage::Status**, à la place on devrait avoir des
**Storage::PbStatus**.

Voici la définition de l'évènement [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) :

```cpp
message Status {
  uint64 index_id = 1;      // ID de l'index.
  uint32 interval = 2;      // Intervalle en secondes entre deux checks de service normaux.
  uint32 rrd_len = 3;       // Rétention RRD en secondes.
  uint64 time = 4;          // Timestamp auquel le status est généré.
  uint32 state = 5;         // État du service.
}
```

</TabItem>
</Tabs>

### Metric mapping

Cet évènement est émis par Centreon Broker lorsqu'une nouvelle configuration de
service est reçue. Il établit la relation entre un ID d'index d'un service et un
ID de métrique. Voir [Index mapping](#indexmapping) pour davantage d'informations
sur les ID d'index.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::MetricMapping

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 6       | 196614 |

Le contenu de ce message est sérialisé comme suit :

| Propriété | Type             | Description    |
| --------- | ---------------- | -------------- |
| index\_id | entier non signé | ID de l’index. |
| metric\_d | entier non signé | ID de l’index. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbMetricMapping

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 12      | 196620 |

Cet évènement est un évènement Protobuf, ainsi ses éléments ne sont pas sérialisés
comme avec BBDO v2 mais plutôt en utilisant le mécanisme de sérialisation de
Protobuf 3. Quand BBDO v3 est actif, il ne devrait plus y avoir d'évènements
**Storage::MetricMapping** émis mais plutôt des **Storage::PbIndexMapping**.

Voici la définition de cet événement [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) :

```cpp
message MetricMapping {
  uint64 index_id = 1;    // ID de l'index de service.
  uint64 metric_id = 2;   // ID de la métrique liée au service.
}
```

</TabItem>
</Tabs>

### Index mapping

Cet évènement est émis par Centreon Broker lorsqu'une nouvelle configuration de service
est reçue. Il crée l'association entre un ID et un service identifié par le couple
**(host ID/service ID)**. Ce nouvel ID est utile pour la déclaration des métriques
de service.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::IndexMapping

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 5       | 196613 |

Le contenu de ce message est sérialisé de la façon suivante :

| Propriété   | Type             | Description    |
| ----------- | ---------------- | -------------- |
| index\_id   | entier non signé | ID de l’index. |
| host\_id    | entier non signé | ID de l’index. |
| service\_id | entier non signé | ID de l’index. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbIndexMapping

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 11      | 196619 |

Cet évènement est un évènement Protobuf, ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais plutôt en utilisant le mécanisme de sérialisation de 
Protobuf 3. Lorsque BBDO v3 est actif, les événements **Storage::IndexMapping**
ne devraient plus être émis, à la place on devrait avoir des évènements
**Storage::PbIndexMapping**.

Voici la définition de l'évènement [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) :

```cpp
message IndexMapping {
  uint64 index_id = 1;      // ID de l'index d'un service.
  uint64 host_id = 2;       // ID de l'hôte du service.
  uint64 service_id = 3;    // ID du service.
}
```

</TabItem>
</Tabs>

### Rebuild Message

Cet événement arrive avec BBDO v3. Quand on doit reconstruire des graphes,
c'est cet évènement qui contient les informations de reconstruction. Il remplace
les anciens messages BBDO v2 de **rebuild**.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

Non disponible en BBDO v2.

Voir [Storage::Rebuild](#storagerebuild)

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbRebuildMessage

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 7       | 196615 |

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

### Remove Graph Message

Cet évènement est compris dans BBDO 3. Lorsque nous voulons supprimer des fichiers graphiques, nous pouvons utiliser l’API gRPC de centengine et cet appel fait en sorte que cbd génère un **Pb Remove Graph Message**. Deux possibilités sont combinées dans cet évènement. Nous pouvons supprimer les graphiques correspondant à certaines données d’index ou les graphiques correspondant à certaines données métriques. Il est également possible de combiner les deux types.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

Non disponible en BBDO v2.

Voir [Storage::RemoveGraph](#storageremovegraph)

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbRemoveGraphMessage

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 3         | 8       | 196616 |

Voici la définition de cet évènement [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) :

```cpp
message RemoveGraphMessage {
  repeated uint64 index_ids = 1;
  repeated uint64 metric_ids = 2;
}
```

</TabItem>
</Tabs>

## BBDO

### Version response

Voici le message de négociation utilisé jusqu'à la version BBDO v3.0.0.
Chaque fois qu'une connexion BBDO est établie, chaque interlocuteur envoie
ce message pour négocier les options à activer.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BBDO::VersionResponse

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 2         | 1       | 131073 |

Le contenu de ce message est sérialisé comme suit :

| Propriété   | Type         | Description                                                                                                                                               |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bbdo\_major | entier court | La version majeure du protocole BBDO utilisée par le pair qui envoie ce paquet **version_response**. La seule version actuelle du protocole est la 1.0.0. |
| bbdo\_minor | entier court | La version mineure du protocole BBDO utilisée par le pair qui envoie ce paquet **version_response**.                                                      |
| bbdo\_patch | entier court | Le correctif du protocole BBDO utilisé par le pair qui envoie ce paquet **version_response**.                                                             |
| extensions  | chaîne       | Chaîne séparée par des espaces des extensions prises en charge par le pair qui envoie ce paquet **version_response**.                                     |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

L'événement est le même qu'en BBDO v2. Il n'y a pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Ack

Généralement, un **envoyeur BBDO** envoie des événements tandis qu'un
**récepteur BBDO** reçoit des événements. Ceci dit, il envoie quelques évènements
comme le **Ack**.

Le principe est le suivant : l'envoyeur garde en mémoire tous les évènements qu'il
envoie au récepteur. Et lorsque le récepteur a terminé d'en traiter un lot, il
envoie un **Ack** avec le nombre d'évènements qu'il a traité. L'envoyeur peut
alors les jeter.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BBDO::Ack

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 2         | 2       | 131074 |

Le contenu de ce message est sérialisé comme suit :

| Propriété           | Type             | Description                                                                                                                                                                                       |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| acknowledged events | entier non signé | Nombre d’évènements acquittés. Utilisé uniquement par les clients « intelligents » (c’est-à-dire capables d’acquitter des évènements). Ne doit pas être utilisé par des clients non intelligents. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAck

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 2         | 8       | 131080 |

Cet évènement est un évènement Protobuf, ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation de Protobuf 3.
Quand BBDO v3 est actif, il ne devrait plus y avoir d'évènements **NEB::Ack**
émis mais plutôt des **NEB::PbAck**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant:

```cpp
message Ack {
  uint32 acknowledged_events = 1;   // Le nombre d'évènements à acquitter.
}
```

</TabItem>
</Tabs>

### Stop

Quand un côté d'une connexion BBDO va s'éteindre, il émet un événement **Stop**
afin que l'autre côté puisse, si possible, lui envoyer un **Ack** permettant de
jeter les éventuels événements déjà traités.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BBDO::Stop

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 2         | 3       | 131075 |

Le contenu de ce message est vide.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BBDO::PbStop

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 2         | 9       | 131081 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais plutôt en utilisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, on ne devrait plus voir de **BBDO::Stop** émis mais plutôt
des **BBDO::PbStop**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message Stop {}
```

</TabItem>
</Tabs>

## BAM

### BA status event

Cet évènement est envoyé lorsque le statut d’une BA a changé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::BaStatus

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 1       | 393217 |

Le contenu de ce message est sérialisé comme suit:

| Propriété              | Type             | Description                                    |
| ---------------------- | ---------------- | ---------------------------------------------- |
| ba\_id                 | entier non signé | L’id de la BA.                                 |
| in\_downtime           | booléen          | True si la BA est en temps d’arrêt.            |
| last\_state\_change    | temps            | L’heure du dernier changement d’état de la BA. |
| level\_acknowledgement | réel             | Le niveau d’acquittement de la BA.             |
| level\_downtime        | réel             | Le niveau de temps d’arrêt de la BA.           |
| level\_nominal         | réel             | Le niveau nominal de la BA.                    |
| state                  | entier court     | L’état de la BA.                               |
| state\_changed         | booléen          | True si l’état de la BA vient de changer.      |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbBaStatus

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 19      | 393235 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisé
comme avec BBDO v2 mais plutôt en utilisant le mécanisme de sérialisation de
Protobuf. Quand BBDO v3 est actif, les évènements **BAM::BaStatus** devraient
être remplacés par les évènements **BAM::PbBaStatus**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant:

```cpp
enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
}

message BaStatus {
    uint32 ba_id = 2;                   // ID de la BA.
    bool in_downtime = 3;               // Vrai si la BA est en downtime.
    uint64 last_state_change = 4;       // Timestamp du dernier changement d'état de la BA.
    double level_acknowledgement = 5;   // Niveau d'acquittement de la BA.
    double level_downtime = 6;          // Niveau de downtime de la BA.
    double level_nominal = 7;           // Niveau nominal de la BA.
    State state = 8;                    // État de la BA.
    bool state_changed = 9;             // Vrai si l'état de la BA vient juste de changer.
}
```

</TabItem>
</Tabs>

### KPI status event

Cet évènement est envoyé lorsque le statut d’un KPI a changé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::KpiStatus

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 2       | 393218 |

Le contenu de ce message est sérialisé comme suit:

| Propriété                    | Type             | Description                                  |
| ---------------------------- | ---------------- | -------------------------------------------- |
| kpi\_id                      | entier non signé | L’ID du KPI.                                 |
| in\_downtime                 | bool             | True si le KPI est en temps d’arrêt.         |
| level\_acknowledgement\_hard | réel             | Le niveau d’acquittement hard du KPI.        |
| level\_acknowledgement\_soft | réel             | Le niveau d’acquittement soft du KPI.        |
| level\_downtime\_hard        | réel             | Le niveau de temps d’arrêt hard du KPI.      |
| level\_downtime\_soft        | réel             | Le niveau de temps d’arrêt soft du KPI.      |
| level\_nominal\_hard         | réel             | Le niveau nominal hard du KPI.               |
| level\_nominal\_soft         | réel             | Le niveau nominal soft du KPI.               |
| state\_hard                  | entier court     | L’état hard du KPI.                          |
| state\_soft                  | entier court     | L’état soft du KPI.                          |
| last\_state\_change          | temps            | L’heure du dernier changement d’état du KPI. |
| last\_impact                 | réel             | Le dernier impact du KPI.                    |
| valid                        | bool             | True si le KPI est valide.                   |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbKpiStatus

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 27      | 393243 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utlisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, les évènements **BAM::KpiStatus** ne sont plus envoyés
et sont remplacés par des évènements **BAM::PbKpiStatus**.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```cpp
enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
}

message KpiStatus {
    uint32 kpi_id = 1;                      // ID du KPI.
    bool in_downtime = 2;                   // Vrai si le KPI est en downtime.
    double level_acknowledgement_hard = 3;  // Niveau hard d'acquittement du KPI.
    double level_acknowledgement_soft = 4;  // Niveau soft d'acquittement du KPI.
    double level_downtime_hard = 5;         // Niveau hard du downtime du KPI.
    double level_downtime_soft = 6;         // Niveau soft du downtime du KPI.
    double level_nominal_hard = 7;          // Niveau nominal hard du KPI.
    double level_nominal_soft = 8;          // Niveau nominal soft du KPI.
    State state_hard = 9;                   // État hard du KPI.
    State state_soft = 10;                  // État soft du KPI.
    int64 last_state_change = 11;           // Timestamp du dernier changement d'état du KPI.
    double last_impact = 12;                // Dernier impact du KPI.
    bool valid = 13;                        // Vrai si le KPI est valide.
}
```

</TabItem>
</Tabs>

### Meta service status event

Cet évènement a été créé pour envoyer les changements d'état d'un méta-service.

Actuellement, les méta-services n'étant pas gérés par Centreon Broker, cet
évènement n'est pas utilisé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::MetaServiceStatus

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 3       | 393219 |

Le contenu de ce message est sérialisé comme suit :

| Propriété         | Type             | Description                      |
| ----------------- | ---------------- | -------------------------------- |
| meta\_service\_id | entier non signé | L’ID du méta-service.            |
| value             | réel             | La valeur du méta-service.       |
| state\_changed    | booléen          | True si l’état vient de changer. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

Il n'y a pas d'évènement Protobuf.

</TabItem>
</Tabs>

### BA-event event

Cet évènement est envoyé lorsqu’un nouvel évènement BA est ouvert, ou qu’un ancien est fermé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::BaEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 4       | 393220 |

Le contenu de ce message est sérialisé comme suit :

| Propriété    | Type             | Description                                                             |
| ------------ | ---------------- | ----------------------------------------------------------------------- |
| ba\_id       | entier non signé | L’ID de la BA.                                                          |
| first\_level | réel             | Le premier niveau de l’évènement BA.                                    |
| end\_time    | temps            | L’heure de fin de l’évènement. 0 ou (temps)-1 pour un évènement ouvert. |
| in\_downtime | booléen          | True si BA était en arrêt pendant l’évènement BA.                       |
| start\_time  | temps            | L’heure de début de l’évènement.                                        |
| status       | entier court     | Le statut de la BA pendant l’évènement.                                 |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbBaEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 20      | 393236 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comment en BBDO v2 mais en utilisant le mécanisme de sérialisation Protobuf.
Quand BBDO v3 est actif, les événements **BAM::BaEvent** ne devraient plus être
envoyés et sont remplacés par des **BAM::PbBaEvent**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
}

message BaEvent {
    uint32 ba_id = 1;         // ID de la BA.
    double first_level = 2;   // Premier niveau de l'évènement BA.
    int64 end_time = 3;       // Le timestamp de fin de l'évènement. 0 ou -1 si l'évènement est ouvert.
    bool in_downtime = 4;     // Vrai si la BA est en downtime.
    uint64 start_time = 5;    // Timestamp de démarrage de l'évènement.
    State status = 6;         // L'état de la BA sur cet évènement.
}
```

</TabItem>
</Tabs>

### KPI Event

Cet évènement est envoyé lorsqu’un nouvel évènement KPI est ouvert, ou qu’un ancien est fermé.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::KpiEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 5       | 393221 |

Le contenu de ce message est sérialisé comme suit :

| Propriété     | Type             | Description                                                             |
| ------------- | ---------------- | ----------------------------------------------------------------------- |
| kpi\_id       | entier non signé | L’ID du KPI.                                                            |
| end\_time     | temps            | L’heure de fin de l’évènement. 0 ou (temps)-1 pour un évènement ouvert. |
| impact\_level | entier           | Le niveau de l’impact.                                                  |
| in\_downtime  | booléen          | True si BA était en arrêt pendant l’évènement BA.                       |
| first\_output | chaîne           | Le premier output du KPI pendant l’évènement.                           |
| perfdata      | chaîne           | La première perfdata du KPI pendant l’évènement.                        |
| start\_time   | temps            | L’heure de début de l’évènement.                                        |
| status        | entier court     | Le statut de la BA pendant l’évènement.                                 |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbKpiEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 21      | 393237 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation Protobuf.
Quand BBDO v3 est actif, les évènements **BAM::KpiEvent** devraient être
remplacés par des **BAM::PbKpiEvent**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
}

message KpiEvent {
    uint32 ba_id = 1;         // ID de la BA.
    uint64 start_time = 2;    // Timestamp de démarrage de l'évènement.
    int64 end_time = 3;       // Timestamp de fin de l'évènement. 0 ou -1 pour un évènement encore ouvert.
    uint32 kpi_id = 4;        // ID du KPI.
    int32  impact_level = 5;  // Niveau de l'impact.
    bool in_downtime = 6;     // Vrai si la BA est en downtime sur l'évènement.
    string output = 7;        // Premier output du KPI sur l'évènement.
    string perfdata = 8;      // Premières données de performance du KPI sur l'évènement.
    State status = 9;         // État de la BA sur l'évènement.
}
```

</TabItem>
</Tabs>

### BA duration event event

Cet évènement est envoyé lorsqu’un nouvel évènement de durée BA est calculé par le broker BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::BaDurationEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 6       | 393222 |

Le contenu de ce message est sérialisé comme suit :

| Propriété               | Type             | Description                                                         |
| ----------------------- | ---------------- | ------------------------------------------------------------------- |
| ba\_id                  | entier non signé | L’ID de la BA.                                                      |
| real\_start\_time       | temps            | Le premier niveau de l’évènement BA.                                |
| end\_time               | temps            | L’heure de fin de l’évènement, dans la période de temps donnée.     |
| start\_time             | temps            | L’heure de début de l’évènement, dans la période de temps donnée.   |
| duration                | entier non signé | end\_time - start\_time.                                            |
| sla\_duration           | entier non signé | La durée de l’évènement dans la période de temps donnée.            |
| timeperiod\_is\_default | booléen          | True si la période de temps est la valeur par défaut pour cette BA. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbBaDurationEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 28      | 393244 |

Cet évènement est un évènement Protobuf ainsi les éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation Protobuf.
Quand BBDO v3 est actif, les évènements **BAM::BaDurationEvent** devraient être
remplacés par des **BAM::PbBaDurationEvent**.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```cpp
message BaDurationEvent {
    uint32 ba_id = 1;                 // ID de la BA.
    int64 real_start_time = 2;        // Timestamp du départ effectif de l'évènement.
    int64 end_time = 3;               // Timestamp de fin de l'évènement. 0 ou -1 si l'évènement est encore ouvert.
    int64 start_time = 4;             // Timestamp de création de l'évènement.
    uint32 duration = 5;              // Durée en secondes de l'évènement.
    uint32 sla_duration = 6;          // Durée en secondes de l'évènement dans la timeperiod en cours.
    uint32 timeperiod_id = 7;         // ID de la timeperiod.
    bool timeperiod_is_default = 8;   // Vrai si la timeperiod est celle par défaut pour cette BA.
}
```
</TabItem>
</Tabs>

### Dimension BA

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBaEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 7       | 393223 |

Le contenu de ce message est sérialisé comme suit :

| Propriété                  | Type             | Description              |
| -------------------------- | ---------------- | ------------------------ |
| ba\_id                     | entier non signé | L’ID de la BA.           |
| ba\_name                   | chaîne           | Le nom de la BA.         |
| ba\_description            | chaîne           | La description de la BA. |
| sla\_month\_percent\_crit  | réel             |                          |
| sla\_month\_percent\_warn  | réel             |                          |
| sla\_month\_duration\_crit | entier non signé |                          |
| sla\_month\_duration\_warn | entier non signé |                          |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionBaEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 25      | 393241 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation Protobuf.
Quand BBDO v3 est actif, les messages **BAM::DimensionBaEvent** devraient
être remplacés par des **BAM::PbDimensionBaEvent**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionBaEvent {
    uint32 ba_id = 1;                   // ID de la BA.
    string ba_name = 2;                 // Nom de la BA.
    string ba_description = 3;          // Description de la BA.
    double sla_month_percent_crit = 4;
    double sla_month_percent_warn = 5;
    uint32 sla_duration_crit = 6;
    uint32 sla_duration_warn = 7;
}
```
</TabItem>
</Tabs>

### Dimension KPI

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionKpiEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 8       | 393224 |

Le contenu de ce message est sérialisé comme suit :

| Propriété            | Type             | Description                                                             |
| -------------------- | ---------------- | ----------------------------------------------------------------------- |
| kpi\_id              | entier non signé | L’ID du KPI.                                                            |
| ba\_id               | entier non signé | L’identifiant de la BA parent de ce KPI.                                |
| ba\_name             | chaîne           | Le nom de la BA parent de ce KPI.                                       |
| host\_id             | entier non signé | L’ID de l’hôte associé à ce KPI pour le KPI de service.                 |
| host\_name           | chaîne           | Le nom de l’hôte associé à ce KPI pour le KPI de service.               |
| service\_id          | entier non signé | L’ID du service associé à ce KPI pour le KPI de service.                |
| service\_description | chaîne           | La description du service associé à ce KPI pour le KPI de service.      |
| kpi\_ba\_id          | entier non signé | L’ID de la BA associée à ce KPI pour le KPI de BA.                      |
| kpi\_ba\_name        | chaîne           | Le nom de la BA associée à ce KPI pour le KPI de BA.                    |
| meta\_service\_id    | entier non signé | L’ID du méta-service associé à ce KPI pour le KPI de méta-service.      |
| meta\_service\_name  | chaîne           | Le nom du méta-service associé à ce KPI pour le KPI de méta-service.    |
| boolean\_id          | entier non signé | L’ID de l’expression booléenne associée à ce KPI pour le KPI booléen.   |
| boolean\_name        | chaîne           | Le nom de l’expression booléenne associée à ce KPI pour le KPI booléen. |
| impact\_warning      | réel             | L’impact d’un état d’alerte pour ce KPI.                                |
| impact\_critical     | réel             | L’impact d’un état critique pour ce KPI.                                |
| impact\_unknown      | réel             | L’impact d’un état inconnu pour ce KPI.                                 |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionKpiEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 26      | 393242 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation Protobuf.
Quand BBDO v3 est actif, les messages **BAM::DimensionKpiEvent** devraient
être remplacés par des **BAM::PbDimensionKpiEvent**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionKpiEvent {
    uint32 kpi_id = 1;               // ID du KPI.
    uint32 ba_id = 2;                // ID de la BA parent du KPI.
    string ba_name = 3;              // Nom de la BA parent du KPI.
    uint32 host_id = 4;              // ID de l'hôte associé au KPI (KPI de type service)
    string host_name = 5;            // Nom de l'hôte associé au KPI (KPI de type service)
    uint32 service_id = 6;           // ID du service associé au KPI (KPI de type service)
    string service_description = 7;  // Description du service associé au KPI (KPI de type service)
    uint32 kpi_ba_id = 8;            // ID de la BA associée au KPI (KPI de type BA)
    string kpi_ba_name = 9;          // Nom de la BA associée au KPI (KPI de type BA)
    uint32 meta_service_id = 10;     // ID du méta-service associé au KPI (KPI de type méta-service)
    string meta_service_name = 11;   // Nom du méta-service associé au KPI (KPI de type méta-service)
    uint32 boolean_id = 12;          // Id of the boolean expression associated with this KPI for boolean KPI.
    string boolean_name = 13;        // Nom de l'expression booléenne associée au KPI (KPI de type booléen)
    double impact_warning = 14;      // Impact d'un état warning pour le KPI.
    double impact_critical = 15;     // Impact d'un état critique pour le KPI.
    double impact_unknown = 16;      // Impact d'un état inconnu pour le KPI.
}
```

</TabItem>
</Tabs>

### Dimension BA BV relation

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 8       | 393225 |

Le contenu de ce message est sérialisé comme suit :

| Propriété | Type             | Description    |
| --------- | ---------------- | -------------- |
| ba\_id    | entier non signé | L’ID de la BA. |
| bv\_id    | entier non signé | L’ID de la BV. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionKpiEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 26      | 393242 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation Protobuf.
Quand BBDO v3 est actif, les messages **BAM::DimensionBaBvRelationEvent** devraient
être remplacés par des **BAM::PbDimensionBaBvRelationEvent**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionBaBvRelationEvent {
    uint32 ba_id = 1; // ID de la BA
    uint32 bv_id = 2; // ID de l'event
}
```

</TabItem>
</Tabs>

### Dimension BV

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBvEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 10      | 393226 |

Le contenu de ce message est sérialisé comme suit :

| Propriété       | Type             | Description              |
| --------------- | ---------------- | ------------------------ |
| bv\_id          | entier non signé | L’ID de la BV.           |
| bv\_name        | chaîne           | Le nom de la BV.         |
| bv\_description | chaîne           | La description de la BV. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionBvEvent

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 22      | 393238 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, les évènements **BAM::DimensionBvEvent** devraient
être remplacés par des évènements **BAM::PbDimentionBvEvent**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionBvEvent {
    uint32 bv_id = 1;           // ID de la BV.
    string bv_name = 2;         // Nom de la BV.
    string bv_description = 3;  // Description de la BV.
}
```
</TabItem>
</Tabs>

### Dimension Truncate Table Signal

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

Ce signal est envoyé avant le dump de toutes les dimensions, et à nouveau à la fin du dump.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionTruncateTableSignal

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 11      | 393228 |

Le contenu de ce message est sérialisé comme suit :

| Propriété       | Type    | Description                                            |
| --------------- | ------- | ------------------------------------------------------ |
| update\_started | booléen | True si c’est le début du dump, False si c’est la fin. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionTruncateTableSignal

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 30      | 393246 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, les évènements **BAM::DimensionTruncateTableSignal**
devraient être remplacés par des évènements
**BAM::PbDimensionTruncateTableSignal**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionTruncateTableSignal {
    bool update_started = 1;  // Vrai pour signaler le départ du dump, faux pour la fin.
}
```

</TabItem>
</Tabs>

### Rebuild signal

Cet évènement est envoyé lorsqu’une reconstruction des durées et des disponibilités des évènements est demandée au point de terminaison du broker BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::Rebuild

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 12      | 393228 |

Le contenu de ce message est sérialisé comme suit :

| Propriété        | Type   | Description                                                                                                                      |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| bas\_to\_rebuild | chaîne | Une chaîne contenant les ID de toutes les BA à reconstruire, séparés par une virgule et un espace (par exemple « 1, 5, 8, 12 »). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

L'évènement est le même qu'en BBDO v2. Il n'y a pas d'évènement Protobuf.

</TabItem>
</Tabs>

### Dimension timeperiod

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionTimeperiod

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 13      | 393230 |

Le contenu de ce message est sérialisé comme suit :

| Propriété | Type             | Description                                   |
| --------- | ---------------- | --------------------------------------------- |
| tp\_id    | entier non signé | L’ID de la période de temps.                  |
| name      | chaîne           | Le nom de la période de temps.                |
| monday    | chaîne           | La règle de la période de temps pour ce jour. |
| tuesday   | chaîne           | La règle de la période de temps pour ce jour. |
| wednesday | chaîne           | La règle de la période de temps pour ce jour. |
| thursday  | chaîne           | La règle de la période de temps pour ce jour. |
| friday    | chaîne           | La règle de la période de temps pour ce jour. |
| saturday  | chaîne           | La règle de la période de temps pour ce jour. |
| sunday    | chaîne           | La règle de la période de temps pour ce jour. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionTimeperiod

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 24      | 393240 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, les **BAM::DimensionTimeperiod** devraient être remplacés
par des **BAM::PbDimensionTimeperiod**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionTimeperiod {
    uint32 id = 1;          // ID de la période de temps.
    string name = 2;        // Nom de la période de temps.
    string monday = 3;      // Règle de la période de temps pour ce jour.
    string tuesday = 4;     // Règle de la période de temps pour ce jour.
    string wednesday = 5;   // Règle de la période de temps pour ce jour.
    string thursday = 6;    // Règle de la période de temps pour ce jour.
    string friday = 7;      // Règle de la période de temps pour ce jour.
    string saturday = 8;    // Règle de la période de temps pour ce jour.
    string sunday = 9;      // Règle de la période de temps pour ce jour.
}
```
</TabItem>
</Tabs>

### Dimension BA timeperiod relation

Cet évènement fait partie du dump de dimension (c’est-à-dire, la configuration) qui se produit au démarrage et après chaque rechargement de la configuration BAM.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBaTimeperiodRelation

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 14      | 393231 |

Le contenu de ce message est sérialisé comme suit :

| Propriété      | Type             | Description                                                     |
| -------------- | ---------------- | --------------------------------------------------------------- |
| ba\_id         | entier non signé | L’ID de la BA.                                                  |
| timeperiod\_id | entier non signé | L’ID de la période de temps.                                    |
| is\_default    | booléen          | True si la période de temps est celle par défaut pour cette BA. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbDimensionBaTimeperiodRelation

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 29      | 393245 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, les **BAM::DimensionBaTimeperiodRelation** devraient être remplacés
par des **BAM::PbDimensionBaTimeperiodRelation**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message DimensionBaTimeperiodRelation {
    uint32 ba_id = 1;           // ID de la BA.
    uint32 timeperiod_id = 2;   // ID de la période de temps.
    bool is_default = 3;        // Vrai si la période de temps est celle par défaut de cette BA.
}
```
</TabItem>
</Tabs>

### Inherited downtime

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::InheritedDowntime

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 17      | 393233 |

Le contenu de ce message est sérialisé comme suit :

| Propriété    | Type             | Description                         |
| ------------ | ---------------- | ----------------------------------- |
| bad\_id      | entier non signé | L’ID de la BA en temps d’arrêt.     |
| in\_downtime | booléen          | True si la BA est en temps d’arrêt. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### BAM::PbInheritedDowntime

| Catégorie | élément | ID     |
| --------- | ------- | ------ |
| 6         | 18      | 393234 |

Cet évènement est un évènement Protobuf ainsi ses éléments ne sont pas sérialisés
comme en BBDO v2 mais en utilisant le mécanisme de sérialisation de Protobuf.
Quand BBDO v3 est actif, les **BAM::InheritedDowntime** devraient être remplacés
par des **BAM::PbInheritedDowntime**.

Le [message protobuf](https://developers.google.com/protocol-buffers/docs/proto3)
est le suivant :

```cpp
message BBDOHeader {
    uint32 conf_version = 1;
}
message InheritedDowntime {
    BBDOHeader header = 1;
    uint32 ba_id = 2;       // ID de la BA concernée par le downtime.
    bool in_downtime = 3;   // Vrai si la BA est en downtime.
}
```

</TabItem>
</Tabs>
