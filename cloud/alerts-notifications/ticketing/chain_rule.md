---
id: ticketing-advanced-rule-commands
title: Chain rules et commandes
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Open Tickets permet d'exécuter des actions lors de l'ouverture d'un ticket, un peu à la manière des event handler dans Centreon.

Parmi ces actions, il en existe deux :

- les chain rules : permettent d'activer une autre règle Open Tickets après avoir ouvert un ticket
- les commandes : permettent d'exécuter une commande lors de l'ouverture d'un ticket.

## Commandes

Les commandes servent à déclencher des scripts ou de simples commandes après l'ouverture d'un ticket.
Elles sont exécutées par l'utilisateur système **apache** (**www-data** sur Debian). Ce dernier doit donc être en mesure d'exécuter les scripts indiqués.

> Attention, même pour des tests, le répertoire **/tmp** n'est pas utilisable. Servez-vous de **/var/log/php-fpm**.

Il est par exemple possible d'utiliser un simple script en renseignant l'information suivante :

```bash
bash /var/log/php-fpm/test_opt.sh
```

Il est possible de passer des arguments à ce script. Il est notamment possible de renseigner du code Smarty dans ce champ commande (voir [ici les variables Smarty disponibles](./smarty_variables.md)

En plus de celles évoquées, d'autres sont disponibles :

| Nom de la variable | Description | Exemple de contenu |
| -- | -- | -- |
| $ticket_error_message | le message d'erreur à l'ouverture du ticket s'il y a eu un échec | HTTP timeout |
| $ticket_id | le numéro de ticket | 40000 |
| ticket_time | le timestamp d'ouverture de ticket | 1740747421 |

Par exemple, avec le script bash **test_opt.sh** suivant :

```bash
#!/bin/bash
echo "[$(date +%s)] ticket id: $1" >> /var/log/php-fpm/ticket.log
```

une commande configurée :

```bash
bash /var/log/php-fpm/test_opt.sh "{$ticket_id}"
```

on obtient le fichier de log suivant après avoir ouvert un ticket :

```txt
[1740748238] ticket id: 35
```
