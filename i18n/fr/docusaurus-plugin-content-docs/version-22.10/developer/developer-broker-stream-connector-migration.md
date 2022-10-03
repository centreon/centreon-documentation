---
id: developer-broker-stream-connector-migration
title : Migration des Stream Connectors vers BBDO 3.0.0
---

Centreon Broker 22.04.0 et suivantes comprend une nouvelle version 3.0.0 de son protocole BBDO. Ce nouveau protocole est beaucoup plus souple que le précédent :

* il n’est pas figé dans le temps, mais peut être mis à jour sans rupture ;
* il supporte des objets plus structurés comme les tableaux, les dictionnaires et autres ;
* la sérialisation se traduit généralement par des tampons plus petits.

Tous les événements du broker n’ont pas encore été migrés, nous nous sommes juste concentrés sur :

* événement **neb::host**
* événement **neb::host\_status**
* événement **neb::service**
* événement **neb::service\_status**

Le broker peut toujours les lire mais il produit maintenant les événements suivants :

* événement **neb::pb\_host**
* événement **neb::pb\_adaptive\_host**
* événement **neb::pb\_host\_status**
* événement **neb::pb\_service**
* événement **neb::pb\_adaptive\_service**
* événement **neb::pb\_service\_status**

L’inconvénient est que si vous avez écrit des Stream Connectors, ils pourraient ne plus fonctionner et vous devrez les réparer.

Dans cette section, nous allons expliquer ce qui a changé et comment résoudre votre problème.

## Exemple de Stream Connector qui ne fonctionnera pas avec BBDO 3.0

Voici du code Lua pour un Stream Connector qui fonctionnait avant BBDO 3.0 et qui ne fonctionnera pas avec Centreon Broker à partir de 22.04 si BBDO 3.0 est activé :

```LUA
    function init(conf)
      broker_log:set_parameters(0, "/tmp/log")
    end

    function write(d)
      if d.category == 1 and d.element == 23 then
        broker_log:info(0, "Here is a service: " .. broker.json_encode(d))
      end
      if d.category == 1 and d.element == 12 then
        broker_log:info(0, "Here is a host: " .. broker.json_encode(d))
      end
      return true
    end
```

Ce script est très simple. La fonction `init()` initialise les journaux pour permettre à tous les journaux d’être écrits dans le fichier `/tmp/log`.

La fonction `write()`, appelée à chaque fois qu’un événement est reçu, ne gère que deux événements, l’événement **neb::service** (avec `category` 1 et `element` 23) et l’événement **neb::host** (avec `category` 1 et `element` 12).

Chaque événement est sérialisé en JSON et écrit dans le fichier journal.

Ce script ne fonctionne pas avec BBDO 3.0 car il attend les anciens événements **neb::host** et **neb::service**, et bien que ces événements puissent toujours être transmis par Centreon Broker, ils ne sont plus produits avec le nouveau protocole. Ainsi, tous les événements reçus par la fonction `write()` ne correspondent pas aux valeurs `category` et `element` attendues.

Au lieu de **neb::service**, les événements produits sont **neb::pb\_service** et au lieu de **neb::host**, les événements produits sont **neb::pb\_host**.

Pour que le script fonctionne à nouveau, il suffit donc d’ajouter la reconnaissance de ces deux nouveaux événements.

En conséquence, nous obtenons le nouveau script suivant :

```LUA
    function init(conf)
      broker_log:set_parameters(0, "/tmp/log")
    end

    function write(d)
      if d.category == 1 and (d.element == 27 or d.element == 23) then
        broker_log:info(0, "Here is a service: " .. broker.json_encode(d))
      end
      if d.category == 1 and (d.element == 30 or d.element == 12) then
        broker_log:info(0, "Here is a host: " .. broker.json_encode(d))
      end
      return true
    end
```

Maintenant, le script devrait fonctionner comme prévu.

Si vous avez besoin de récupérer des champs d’un événement **neb::service**, par exemple la **description**, ce même champ devrait également être disponible dans **neb::pb\_service**. Donc en général, à part les nouveaux types à gérer, vous n’aurez rien d’autre à faire.

Pour la migration, ce tableau peut vous aider :

| **objet hérité**| **Objet BBDO 3.0**| **Commentaires**
|:----------:|:----------:|----------
| **neb::service** <br/> (1, 23)| **neb::pb\_service** <br/> (1, 27)| 
| **neb::host** <br/> (1, 12)| **neb::pb\_host** <br/> (1, 30)| 
| **neb::service\_status** <br/> (1, 24)| **neb::pb\_service\_status** <br/> (1, 29)| Les nouveaux événements sont plus légers. Plusieurs champs peuvent être manquants. Dans ce cas, **pb\_service** est utile pour les obtenir.
| **neb::host\_status** <br/> (1, 14)| **neb::pb\_host\_status** <br/> (1, 32)| Les nouveaux événements sont plus légers. Plusieurs champs peuvent être manquants. Dans ce cas, **pb\_host** est utile pour les obtenir.

Il existe également deux nouveaux événements avec BBDO 3.0, **neb::pb\_adaptive\_host** et **neb::pb\_adaptive\_service**. Ils apportent des changements de configuration pour un hôte ou un service. Ces événements sont conçus pour être de petite taille.

Dans un événement **neb::pb\_adaptive\_service**, il y a deux champs obligatoires, **host\_id** et **service\_id** pour connaître le service concerné. Et tous les autres champs sont facultatifs. Si elle est définie (en Lua pas **nil**), la valeur a été définie et vous devez la gérer, sinon ignorez-la.