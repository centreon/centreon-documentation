---
id: ticketing-advanced-mapping
title: Mapping des arguments
description: "Comment configurer le mapping des arguments, les lists et les custom list definitions de la popup Open Tickets"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lorsque vous créez une [règle Open Tickets (à la page **Configuration > Notifications > Règles**)](../ticketing.md), vous pouvez définir des champs à afficher dans la popup de création de ticket. Les informations saisies par l'utilisateur seront insérées dans le corps du ticket lors de sa création.

Dans [l'exemple du corps du ticket par défaut](ticketing-body.md), ces informations seront importées dans le ticket par la ligne `{include file="file:$centreon_open_tickets_path/providers/Abstract/templates/display_selected_lists.ihtml" separator=""}`.

La personnalisation se fait via les sections suivantes :

- [**Mapping ticket arguments**](#mapping-ticket-arguments)
- [**Lists**](#lists)
- [**Custom list definition**](#custom-list-definition).

## Mapping ticket arguments

La section **Mapping ticket arguments** définit les données qui vont être envoyées par Centreon à l'outil ITSM lors de l'ouverture du ticket. Le détail des données correspondantes est défini dans les sections **Lists** et **Custom list definition**. Attention, si une donnée apparaît dans les autres listes mais pas dans celle-ci, elle ne sera simplement pas envoyée à l'outil ITSM.

Chaque ligne comprend deux éléments :

- **Argument** : une information prise en charge par le provider. La liste des arguments est une liste prédéfinie pour chaque provider. Référez-vous à la documentation correspondante pour connaître les informations prises en charge par chaque provider.
- **Value** : une fois le code interprété, la valeur exacte qui va être envoyée à l'outil ITSM. La valeur est généralement constituée de code Smarty dont la signification est très importante. Prenons l'exemple ci-dessous :

```smarty
{$select.urgency.value}
```

Il est possible de décomposer en trois éléments l'expression ci-dessus :

- **$select** : la variable qui indique que l'on va prendre une valeur dans une liste d'arguments.
- **urgency** : ceci est un identifiant. Il doit absolument correspondre au champ **Id** des **Lists** et des **Custom list definition**. Il ne peut être constitué que de valeurs alphanumériques et d'un _. En résumé, cela doit correspondre à l'expression régulière **[A-Za-Z0-9\_]**.
- **value** : dans cet exemple, la valeur exacte de la donnée va être envoyée à l'outil ITSM et non son ID. Voir [les formats des types](#types).

Les arguments suivants ont une syntaxe différente : ne les modifiez pas.

   * **Title**  par défaut, le titre du ticket a le format suivant : pour les hôtes, **Nom de l'hôte/Statut de l'hôte**, pour les services : **Nom de l'hôte/Nom du service/Statut du service**.
   * **Content** : la valeur devra être **\{$body\}** pour appeler l'entrée **Default** dans la section **Body list definition** .

## Lists

La section **Lists** définit quels champs seront affichés dans la popup de création de tickets, et dans quel ordre (en-dessous du titre et du champ **Custom message**).
Elle est constituée des champs suivants :

- **Id** : Cet ID doit absolument correspondre à l'ID qui a été défini dans la section [**Mapping ticket arguments**](#mapping-ticket-arguments). Dans l'exemple [ci-dessus](#mapping-ticket-arguments), le champ **Value** ayant été défini par `{$select.urgency.value}`, l'ID dans la section **Lists** sera obligatoirement **urgency**.
- **Label** : Ce libellé sera le nom qui sera affiché dans la popup d'ouverture du ticket.
- **Type** : [Correspond à la source des données](#types).
- **Filter** : Un filtre pour limiter les résultats obtenus.
   * Les filtres s'appliquent uniquement sur le champ **Label** et non pas sur le champ **ID**.
   * Vous pouvez utiliser des expressions régulières PHP, ou bien appliquer directement des filtres dans l'appel aux API de l'outil ITSM.
- **Mandatory** : Si la case est cochée, le ticket ne pourra être ouvert que si le champ est renseigné dans la popup.
- **Sort** : Dans la popup d'ouverture de tickets, les valeurs possibles pour cette liste seront triées par ordre alphabétique.

Vous pouvez changer l'ordre des éléments de la liste en utilisant la croix bleue à la fin de chaque ligne. L'ordre de la liste sera l'ordre d'affichage des données dans la popup d'ouverture des tickets.

### Types

Il existe trois types de listes :

- Certaines listes récupèrent les données depuis l'outil ITSM
- Certaines récupèrent les données depuis Centreon (Host Group, Host Category, Host Severity, Service Group, Service Category, Service Severity, Contact Group). Celles-ci ne sont généralement pas utilisées.
- **Custom**: celles-ci récupèrent les données depuis les [**Custom list definition**](#custom-list-definition).

Dans la section [Mapping ticket arguments](#mapping-ticket-arguments), il a été évoqué le code Smarty `{$select.urgency.value}`. L'ID **urgency** a été expliqué, il est temps de se concentrer sur le `.value`.

Pour **tous** les **Types** (sauf le type **Custom**) les données récupérées sont souvent de la forme suivante :

- L'ID de la donnée dans l'outil ITSM (ou, dans de rares cas, dans Centreon).
- Une valeur qui correspond généralement à un label compréhensible pour les utilisateurs.

Dans notre exemple avec **urgency**, nous pourrions avoir comme label **High** et comme ID **911** lorsque la donnée est récupérée depuis l'outil ITSM. Il existe alors deux possibilités pour afficher la valeur correspondante dans la popup de création de ticket/envoyer la donnée à l'outil ITSM.

- Si vous souhaitez envoyer l'ID à l'outil ITSM lors de l'ouverture du ticket, utilisez la syntaxe `{$select.urgency.id}`.
- Si vous souhaitez envoyer le label à l'outil ITSM lors de l'ouverture du ticket, utilisez la syntaxe `{$select.urgency.value}`.

## Custom list definition

Les **Custom lists** servent à définir les valeurs possibles d'un champ de l'outil ITSM qui figurera dans la popup d'ouverture de tickets. Cela permet de gérer principalement deux cas de figure :

- Il n'existe pas d'API sur l'outil ITSM pour récupérer ce type d'objet, soit parce que l'endpoint n'existe pas, soit parce qu'il s'agit d'un champ personalisé que vous avez créé vous-même dans votre outil ITSM (seuls certains providers prennent ce cas en charge). Il faut donc définir manuellement les valeurs possibles.
- La règle utilisera toujours la même valeur pour une information. Il n'est donc pas jugé pertinent de faire un appel à une API qui retournera le même résultat des centaines de fois. (Exemple: le compte utilisateur qui sera indiqué comme créateur du ticket.)

Les listes custom sont constituées des champs suivants :

- **Id** : Cet ID doit absolument correspondre à l'ID qui a été défini dans le [**Mapping ticket arguments**](#mapping-ticket-arguments). Dans l'exemple [ci-dessus](#mapping-ticket-arguments), le champ **Value** ayant été défini par `{$select.urgency.value}`, l'ID dans la section **Custom lists** sera obligatoirement **urgency**.
- Une valeur : Il y est généralement renseigné la valeur qui va être acceptée par les API de l'outil ITSM (c'est l'ID de la donnée dans l'outil ITSM).
- Un label (aussi nommé **placeholder**) : C'est la valeur qui va être affichée aux utilisateurs dans la popup d'ouverture de ticket.
- Default : Cochez cette case pour définir la valeur qui sera sélectionnée par défaut dans la popup d'ouverture de ticket.

Vous pouvez changer l'ordre des éléments de la liste en utilisant la croix bleue à la fin de chaque ligne. L'ordre de la liste sera l'ordre d'affichage des données dans le champ correspondant dans la popup d'ouverture des tickets.

Reprenons donc l'exemple du paramètre **urgency**. Cette fois-ci, imaginons que la valeur provient d'une custom list definition et non des API de l'outil ITSM. Nous souhaitons donc avoir une **urgency** nommée **Low** avec pour ID **118218**.

La liste custom doit alors être renseignée de la façon suivante :

| Id      | Value  | Label |
| ------- | ------ | ----- |
| urgency | 118218 | Low   |

Vous pouvez alors choisir la donnée exacte à envoyer à l'outil ITSM :

- Pour envoyer **118218**, saisissez `{$select.urgency.value}` dans la section **Mapping ticket arguments**. C'est le paramètre `value` que vous voudrez envoyer dans la plupart des cas.
- Pour envoyer **Low**, saisissez `{$select.urgency.placeholder}` dans la section **Mapping ticket arguments**.
- L'expression `{$select.urgency.id}` renverrait le libellé **urgency** lui-même, mais cela n'aurait pas de sens.

## Schéma

Voici une représentation en couleur de la correspondance entre les 3 sections décrites ci-dessus :

![mapping relations](../../assets/alerts/ticketing/open_tickets_list_relations.png)
