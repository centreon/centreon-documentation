---
id: ticketing-advanced-body
title: Personnaliser les tickets
description: "Comment personnaliser le modèle du corps des tickets Open Tickets avec la syntaxe Smarty, du texte statique et des champs dynamiques"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le corps du ticket qui va être créé est géré par le bloc de texte situé dans le champ **Body list definition**, à la page **Configuration > Notifications > Open Tickets > Rules**. Il utilise la syntaxe du langage de templating Smarty.

## Corps du ticket par défaut

Par défaut, la définition du corps du ticket est la suivante (la même définition prend en charge le cas où l'on ouvre un ticket sur un hôte et le cas où l'on ouvre un ticket sur un service) :

```smarty
{$user.alias} open ticket at {$smarty.now|date_format:"%d/%m/%y %H:%M:%S"}

{$custom_message}

{include file="file:$centreon_open_tickets_path/providers/Abstract/templates/display_selected_lists.ihtml" separator=""}

{if $host_selected|@count gt 0}
  {foreach from=$host_selected item=host}
    Host: {$host.name}
    State: {$host.state_str}
    Duration: {$host.last_hard_state_change_duration}
    Output: {$host.output|substr:0:1024}
  {/foreach}
{/if}

{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
    Host: {$service.host_name}
    Service: {$service.description}
    State: {$service.state_str}
    Duration: {$service.last_hard_state_change_duration}
    Output: {$service.output|substr:0:1024}
{/foreach}
{/if}
```

Si un ticket est ouvert sur un service en utilisant ce modèle, cela pourra donner le résultat suivant :

```txt
t.rex open ticket at 03/02/2025 16:50:35

This is a test ticket

Urgency: 1
Priority: 1
Category: Food

Host: srv-Earth
Service: health
State: Critical
Duration: 5m
Output: a meteorite has just crashed on srv-Earth
```

## Personnalisation

Il est possible d'adapter à sa convenance le contenu du corps du ticket. Vous pouvez :

- ajouter du texte statique dans le corps du ticket.
- [définir des champs à afficher dans la popup de création de ticket](mapping.md), à remplir par l'utilisateur. Les informations saisies par l'utilisateur seront insérées dans le corps du ticket lors de sa création.
- ajouter dans le corps du ticket des informations spécifiques à la ressource sur laquelle le ticket est créé ou à l'utilisateur créant le ticket, en utilisant [des variables](smarty_variables.md) ou [des fonctions](smarty_functions.md) Smarty préconfigurées.
- utiliser les fonctionnalités standard de Smarty (non couvertes par cette documentation), par exemple le @count de `$service_selected|@count`.
