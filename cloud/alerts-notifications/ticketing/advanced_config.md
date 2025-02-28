# Configuration avancée

## Gestion du corps du ticket

Le corps du ticket qui va être créé est géré par le bloc de texte situé dans la partie "Body list definition" Il est souvent sous la forme suivante :

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

Ce qui s'apparente à du pseudo-code n'est autre que la syntaxe du langage de templating Smarty.

Si un ticket est ouvert sur un service, cela donnera le résultat suivant :

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

Il est possible d'adapter à sa convenance le contenu de ce corps de ticket. Pour cela, il est possible :

- d'utiliser les fonctionnalité standard de Smarty qui ne seront pas couvertes par cette documentation. (par exemple le @count de `$service_selected|@count`)
- d'utiliser des variables créées et mises à disposition par le module open ticket (par exemple : `{$service_selected}`)
- d'utiliser des fonctions créées et mises à disposition par le module open ticket (par exemple : `{host_get_severity}`)

La liste des variables est disponible sur l