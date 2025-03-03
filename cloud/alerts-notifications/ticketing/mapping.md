---
id: ticketing-advanced-mapping
title: Mapping des arguments
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Une [règle Open Ticket (créée à la page **Configuration > Notifications > Règles**)](../ticketing.md) comporte entre autres les sections suivantes :

- **Mapping ticket arguments**
- **Lists**
- **Custom list definition**.

Cette page va expliquer leur rôle et les relations entre elles.

## Mapping ticket arguments

Cette liste contient tous les éléments qui vont être envoyés par centreon à l'outil ITSM lors de l'ouverture du ticket. Elle est constituée de deux éléments :

- **Argument** : un argument qui représente quel aspect du ticket est géré (le libellé du champ dans votre outil ITSM?)
- **Value** : une fois le code interprété, quelle valeur exacte va être envoyée à l'outil ITSM.

La valeur est généralement constituée de code Smarty dont la signification est très importante. Prenons l'exemple ci-dessous :

```smarty
{$select.urgency.value}
```

Il est possible de décomposer en trois éléments l'expression ci-dessus :

- **$select** : la variable qui indique que l'on va prendre une valeur dans une liste d'arguments.
- **urgency** : ceci est un identifiant. Il doit absolument correspondre au champ **Id** des **Lists** et des **Custom list definition**.
- **value** : ceci indique, quelle valeur va être envoyée à l'outil ITSM. Voir [exemple ici](#types).

> Attention, l'identifiant ne peut être constitué que de valeurs alphanumériques et d'un _. En somme, cela doit correspondre à l'expression régulière **[A-Za-Z0-9\_]**.

Sauf title et body

## Lists

Les listes définissent principalement la source de données. Elles sont constituées des champs suivants :

- **Id** : Cet ID doit absolument correspondre à l'ID qui a été défini dans la section [**Mapping ticket arguments**](#mapping-ticket-arguments). Dans l'exemple [ci-dessus](#mapping-ticket-arguments), le champ **Value** ayant été défini par `{$select.urgency.value}`, l'ID dans la section **Lists** sera obligatoirement **urgency**.
- **Label** : Ce libellé sera le nom qui sera affiché dans la popup d'ouverture du ticket.
- **Type** : [Correspond à la source de données](#types).
- **Filter** : Un filtre pour limiter les résultats obtenus
   * Les filtres s'appliquent uniquement sur le champ **Label** et non pas sur le champ **ID**.
   * Vous pouvez utiliser des expressions régulières PHP, ou bien des filtres appliqués directement dans l'appel aux API de l'outil ITSM.
- **Mandatory** : Si la case est cochée, le ticket ne pourra être ouvert que si le champ est renseigné dans la popup.
- **Sort** : Tri par ordre alphabétique des résultats disponibles dans les listes de la popup d'ouverture de tickets.

Vous pouvez changer l'ordre des éléments de la liste en utilisant la croix bleue à la fin de chaque ligne. L'ordre de la liste sera l'ordre d'affichage des données dans la popup d'ouverture des tickets.

### Types

Il existe trois types de listes :

- celles qui récupèrent les données depuis l'outil ITSM
- celles qui récupèrent les données depuis Centreon :
   - Host Group : ce type va récupérer la liste des groupes d'hôtes dans Centreon
   - Host Category : ce type va récupérer la liste des catégories d'hôtes dans Centreon
   - Host Severity : ce type va récupérer la liste des sévérités d'hôtes dans Centreon
   - Service Group : ce type va récupérer la liste des groupes de services dans Centreon
   - Service Category : ce type va récupérer la liste des catégories de services dans Centreon
   - Service Severity : ce type va récupérer la liste des sévérités de services dans Centreon
   - Contact Group : ce type va récupérer la liste des groupes de contacts dans Centreon
- **Custom**: celles qui récupèrent les données depuis les [**Custom list definition**](#custom-list-definition).

Dans la section [Mapping ticket arguments](#mapping-ticket-arguments), il a été évoqué le code Smarty `{$select.urgency.value}`. L'ID **urgency** a été expliqué, il est temps de se concentrer sur le `.value`.

Pour **tous** les **Types** (sauf le type **Custom**) les données récupérées sont souvent de la forme suivante :

- Un ID qui correspond à une référence dans le logiciel qui est la source de données
- Une valeur qui correspond généralement à un label compréhensible pour les utilisateurs.

Dans notre exemple avec **urgency**, nous pourrions avoir comme label **High** et comme ID **911** lorsque la donnée est récupérée depuis l'outil ITSM. Il existe alors deux possibilités ~~sur la gestion de cette donnée~~ pour afficher la valeur correspondante dans la popup de création de ticket/envoyer la donnée à l'outil ITSM.

- Si vous souhaitez envoyer l'ID à l'outil ITSM lors de l'ouverture du ticket, utilisez la syntaxe `{$select.urgency.id}`.
- Si vous souhaitez envoyer le label à l'outil ITSM lors de l'ouverture du ticket, utlisez la syntaxe `{$select.urgency.value}`.

## Custom list definition

Les **Custom lists** servent à définir des valeurs directement dans la règle Open Ticket. Cela permet de gérer principalement deux cas de figure :

- Il n'existe pas d'API sur l'outil ITSM pour récupérer ce type d'objet. Il faut donc renseigner manuellement les diverses possibilités dans la règle.
- La règle utilisera toujours la même valeur pour une information. Il n'est donc pas jugé pertinent de faire un appel à une API qui retournera le même résultat des centaines de fois.

Les listes custom sont constitués des champs suivants :

- **Id** : Cet ID doit absolument correspondre à l'ID qui a été défini dans le [**Mapping ticket arguments**](#mapping-ticket-arguments). Dans l'exemple [ci-dessus](#mapping-ticket-arguments), le champ **Value** ayant été défini par `{$select.urgency.value}`, l'ID dans la section **Custom lists** sera obligatoirement **urgency**.
- Une valeur : Il y est généralement renseigné la valeur qui va être acceptée par les API de l'outil ITSM.
- Un label (aussi nommé **placeholder**) : C'est la valeur qui va être affichée aux utilisateurs dans la popup d'ouverture de ticket.
- Default : permet de définir une valeur qui sera sélectionnée par défaut dans la popup d'ouverture de tickets

Vous pouvez changer l'ordre des éléments de la liste en utilisant la croix bleue à la fin de chaque ligne. L'ordre de la liste sera l'ordre d'affichage des données dans la popup d'ouverture des tickets.

Reprenons donc l'exemple du paramètre **urgency**. Cette fois-ci la valeur provient de la règle et non des API de l'outil ITSM. Nous souhaitons donc avoir une **urgency** nommée **Low** avec pour ID **118218** et nous avons toujours un mapping contenant l'information suivante : `{$select.urgency.value}`.

La liste custom doit alors être renseignée de la façon suivante :

| Id      | Value  | Label |
| ------- | ------ | ----- |
| urgency | 118218 | Low   |

Vous pouvez alors choisir la donnée exacte à envoyer à l'outil ITSM :

- Pour envoyer **118218**, saisissez `{$select.urgency.value}` dans ...
- Pour envoyer **Low**, saisissez `{$select.urgency.placeholder}` dans...
- L'expression `{$select.urgency.id}` renverrait le libellé **urgency** lui-même, mais cela n'aurait pas de sens.

## Schéma

Voici une représentation en couleur de la correspondance entre les 3 sections décrites ci-dessus :

![mapping relations](images/list_relations.png)