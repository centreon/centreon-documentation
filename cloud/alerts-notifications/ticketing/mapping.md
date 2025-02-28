# Mapping des arguments

## Introduction

une règle open ticket comporte divers listing qui sont :

- Mapping ticket arguments
- Lists
- Custom list definition

ce chapitre va expliquer leur rôle ainsi que le lien qui les uni

## Mapping ticket arguments

Cette liste contient tous les éléments qui vont être envoyés lors de l'ouverture du ticket. Elle est constituée de deux éléments :

- un argument qui représente quel aspect du ticket est géré
- une valeur qui va régir quelle valeur va être affectée.

La valeur est généralement constituée de code Smarty dont la signification est très importante.

Prenons l'exemple ci-dessous :

```smarty
{$select.urgency.value}
```

Il est possible de décomposer en trois éléments l'expression ci-dessus

- $select : la variable qui indique que l'on va prendre une valeur dans une liste d'arguments.
- urgency : ceci est un identifiant. Il doit absolument correspondre au champ **Id** des **Lists** et des **Custom list definition**.
- value : ceci indique quel élément va être envoyé à l'outil ITSM. Les chapitre suivant reviendront sur cette notion car elle à ce stade trop abstraite

> Attention, l'identifiant ne peut être constitué que de valeurs alphanumériques et d'un _. En somme, cela doit correspondre à l'expression régulière [A-Za-Z0-9\_]

## Lists

Les listes définissent principalement la source de données. Elles sont constituées des champs suivants 

- Id : Cet Id doit absolument correspondre à l'Id qui a été défini dans le [**Mapping ticket arguments**](#mapping-ticket-arguments). Donc dans le cas où il avait été mis `{$select.urgency.value}` l'Id doit absolument être **urgency**
- Label : Ce label sera le nom qui sera affiché dans le popup d'ouverture du ticket.
- Type : cela correspond à la source de données, il existe trois "catégories" de Type :
  - ceux qui récupèrent les données depuis l'outil ITSM
  - ceux qui récupèrent les données depuis Centreon
  - ceux qui récupèrent les données depuis les **Custom list definitoin**
- Filter : Un filtre pour limiter les résultats obtenus
- Mandatory : Si cochée, l'ouverture du ticket ne pourra se faire que si le champ est renseigné dans le popup
- Sort : Tri par ordre alphabétique des résultats disponibles dans les listes du popup d'ouverture de tickets
- La croix multidirectionnelle : sert à gérer l'ordre d'affichage des **Lists** dans le popup d'ouverture des tickets

> notes additionnelles :
> les Filtres s'appliquent uniquement sur les label et non pas les ID
> les Filtres peuvent être sous la forme d'expression régulières PHP ou correspondent à un filtre appliqué directement dans l'appel aux API de l'outil ITSM

Concernant les **Types**, qui sont découpés en trois catégories, par élimination vous avez accès à :

- Custom : ce type va utiliser pour source de données les **Custom list definition** crées dans la règle Open Ticket
- Host Group : ce type va récupérer la liste des groupes d'hôtes dans Centreon
- Host Category : ce type va récupérer la liste des catégories d'hôtes dans Centreon
- Host Severity : ce type va récupérer la liste des sévérités d'hôtes dans Centreon
- Service Group : ce type va récupérer la liste des groupes de services dans Centreon
- Service Category : ce type va récupérer la liste des catégories de services dans Centreon
- Service Severity : ce type va récupérer la liste des sévérités de services dans Centreon
- Contact Group : ce type va récupérer la liste des groupes de contacts dans Centreon

Les autres **Types** mis a disposition permettentde récupérer des données depuis l'outil ITSM.

Lors du chapitre précédent, il a été évoqué la code Smarty `{$select.urgency.value}`. L'Id urgency a été expliqué, il est temps de se concentrer sur le `.value`.

Pour **tous** les **Types** (sauf le **Type Custom**) les données récupérées sont souvent de la forme suivante :

- Un ID qui correspond à une référence dans le logiciel qui est la source de données
- Une valeur qui correspond généralement à un label compréhensible pour les utilisateurs

Si on conserve notre exemple des "urgency", elle pourrait avoir comme label "High" et comme ID "911" lorsqu'elle est récupérée depuis l'outil ITSM.
Il existe alors deux possibilités sur la gestion de cette données.

- Ou bien il est souhaité envoyer l'ID à l'outil ITSM lors de l'ouverture du ticket et il faudra alors utiliser la syntaxe `{$select.urgency.id}`
- Ou bien il est souhaité envoyer le label à l'outil ITSM lors de l'ouverture du ticket et il faudra alors utiliser la syntaxe `{$select.urgency.value}`

## Custom list definition

Les listes Custom servent à définir des valeurs directement dans la règle Open Ticket. Cela permet de gérer principalement deux cas de figures :

- Il n'existe pas d'API sur l'outil ITSM pour récupérer ce type d'objets et donc il faut renseigner manuellement les diverses possibilités dans la règle
- La règle utilisera toujours la même valeur pour une information il n'est donc pas jugé pertinent de faire un appel à une API qui répondra des centaines de résultats

Les listes custom sont constitués des champs suivants :

- Id : Cet Id doit absolument correspondre à l'Id qui a été défini dans le [**Mapping ticket arguments**](#mapping-ticket-arguments). Donc dans le cas où il avait été mis `{$select.urgency.value}` l'Id doit absolument être **urgency**
- Une valeur : Il y est généralement renseigné la valeur qui va être accepté par les API de l'outil de ITSM
- Un label (aussi nommé **placeholder**) : C'est la valeur qui va être affichée aux utilisateurs dans le popup d'ouverture de ticket
- Default : permet de définir une valeur qui sera sélectionnée par défaut dans le popup d'ouverture de tickets
- La croix multidirectionnelle : sert à gérer l'ordre d'affichage des valeurs dans les listes de valeurs du popup d'ouverture de tickets

Reprenons donc l'exemple de "l'urgency", cette fois ci la valeur provient de la règle et non des API de l'outil ITSM. Nous souhaitons donc avoir une urgency nommée "Low" avec pour ID "118218" et nous avons toujours un mapping contenant l'information suivante : `{$select.urgency.value}`

La liste custom doit alors être renseignée de la façon suivante :

| Id      | Value  | Label |
| ------- | ------ | ----- |
| urgency | 118218 | Low   |

Il est alors possible de choisir ce qu'il faut envoyer à l'outil ITSM

- 118218 : dans ce cas `{$select.urgency.value}`
- Low : dans ce cas `{$select.urgency.placeholder}`
- urgency (très peu probable) : dans ce cas `{$select.urgency.id}`

Ci-dessous une représentation colorée :

![mapping relations](images/list_relations.png)