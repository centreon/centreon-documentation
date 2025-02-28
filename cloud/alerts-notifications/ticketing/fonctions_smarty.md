# Fonctions open ticket pour Smarty

## Introduction

Les fonctions open ticket pour Smarty sont des fonctions mises à disposition qui permettent d'accéder à un certain nombre d'information.
Ces informations peuvent alors être accessibles pour compléter le corps du ticket.

## Obtenir les groupes d'hôtes

la fonction suivante va permettre de rajouter les groupes d'hôtes dans le corps du ticket

```smarty
{host_get_hostgroups host_id=$host.host_id}
{foreach from=$host_get_hostgroups_result item=hostgroup}
  hostgroup_name: {$hostgroup}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

#### Hostgroups: ######
  {host_get_hostgroups host_id=$service.host_id}
  {foreach from=$host_get_hostgroups_result item=hostgroup}
    hostgroup_name: {$hostgroup}
  {/foreach}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: Cpu
State: UNKNOWN
Duration: 2M 3w
Output: UNKNOWN: SNMP Table Request: Timeout


#### Hostgroups: ######

hostgroup_name: MyHosts
hostgroup_name: open-ticket-hg
```

## Obtenir la sévérité des hôtes

la fonction suivante va permettre d'ajouter la sévérité des hôtes au corps du ticket.

```smarty
{host_get_severity host_id=$service.host_id}
{foreach from=$host_get_severity_result item=severity}
  severity name: {$severity.name}
  severity level: {$severity.level}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

#### Severity: ######
  {host_get_hostgroups host_id=$service.host_id}
  {foreach from=$host_get_hostgroups_result item=hostgroup}
    hostgroup_name: {$hostgroup}
  {/foreach}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: proc-broker-rrd
State: UNKNOWN
Duration: 3w 22h
Output: UNKNOWN: SNMP Table Request: Timeout


#### Severity: ######
severity name: P1
severity level: 1
```

## Obtenir les catégories des hôtes

la fonction suivante va permettre d'ajouter les catégories des hôtes au corps du ticket.

```smarty
{host_get_hostcategories host_id=$service.host_id}
{foreach from=$host_get_hostcategories_result item=category}
  category name: {$category.name}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

#### Categories: ######
  {host_get_hostcategories host_id=$service.host_id}
  {foreach from=$host_get_hostcategories_result item=category}
    category name: {$category.name}
  {/foreach}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: proc-broker-rrd
State: UNKNOWN
Duration: 3w 22h
Output: UNKNOWN: SNMP Table Request: Timeout


#### Severity: ######
category name: P1
category name: sql-category
```

## Obtenir les catégories des services

la fonction suivante va permettre d'ajouter les catégories des services au corps du ticket.

```smarty
{service_get_servicecategories service_id=$service.service_id}
{foreach from=$service_get_servicecategories_result item=category}
  category name: {$category.name}
  category description: {$category.description}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

#### Categories: ######
  {service_get_servicecategories service_id=$service.service_id}
  {foreach from=$service_get_servicecategories_result item=category}
    category name: {$category.name}
    category description: {$category.description}
  {/foreach}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: Memory
State: UNKNOWN
Duration: 3M 1w
Output: UNKNOWN: SNMP GET Request: Timeout


#### Categories: ######
category name: Memory-linux
category description: category for linux memory
category name: Memory
category description: category for memory
category name: P1
category description: service with P1 severity
```

## Obtenir les groupes de services

la fonction suivante va permettre d'ajouter les groupes de services au corps du ticket.

```smarty
{service_get_servicegroups service_id=$service.service_id}
{foreach from=$service_get_servicegroups_result item=sg}
  service group name: {$sg.name}
  service group alias: {$sg.alias}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

#### Service groups: ######
  {service_get_servicegroups service_id=$service.service_id}
  {foreach from=$service_get_servicegroups_result item=sg}
    service group name: {$sg.name}
    service group alias: {$sg.alias}
  {/foreach}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: Load
State: UNKNOWN
Duration: 3M 1w
Output: UNKNOWN: SNMP GET Request: Timeout

#### Service groups: ######
service group name: SG_1
service group alias: first service group
service group name: SG_2
service group alias: second service group
```

## Obtenir la valeur d'une macro custom d'un hôte

la fonction suivante va permettre d'ajouter la valeur d'une [custom macro](https://docs.centreon.com/docs/24.04/monitoring/basic-objects/macros/#custom-macros) d'un hôte au corps du ticket.

```smarty
{host_get_macro_value_in_config host_id=$service.host_id macro_name='RRDSTATSFILE'}
macro value: {$host_get_macro_value_in_config_result}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

### Macro : ######
{host_get_macro_value_in_config host_id=$service.host_id macro_name='RRDSTATSFILE'}
macro value: {$host_get_macro_value_in_config_result}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: Load
State: UNKNOWN
Duration: 3M 1w
Output: UNKNOWN: SNMP GET Request: Timeout

#### Macro: ######
macro value: /var/lib/centreon-broker/central-rrd-master-stats.json
```

## Obtenir la valeur d'une macro custom sur les modèles d'hôtes associés à l'hôte

la fonction suivante va permettre d'ajouter la valeur des [custom macro](https://docs.centreon.com/docs/24.04/monitoring/basic-objects/macros/#custom-macros) qui sont sur les modèles d'hôte associés à l'hôte dans le corps du ticket.

```smarty
{host_get_macro_value_in_config host_id=$service.host_id macro_name='RRDSTATSFILE'}
  {foreach $host_get_macro_value_in_config_result item=macro}
  macro value: {$macro}
  {/foreach}
{/foreach}
```

### exemple

```smarty
{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
Host: {$service.host_name}
Service: {$service.description}
State: {$service.state_str}
Duration: {$service.last_hard_state_change_duration}
Output: {$service.output|substr:0:1024}

### Macro : ######
  {host_get_macro_value_in_config host_id=$service.host_id macro_name='RRDSTATSFILE'}
  {foreach $host_get_macro_value_in_config_result item=macro}
  macro value: {$macro}
  {/foreach}
{/foreach}
{/foreach}
{/if}
```

### résultat

```txt
Host: Api-Host
Service: Load
State: UNKNOWN
Duration: 3M 1w
Output: UNKNOWN: SNMP GET Request: Timeout

#### Macro: ######
macro value : VALUE_FROM_TEMPLATE_A
macro value : VALUE_FROM_TEMPLATE_B
```
