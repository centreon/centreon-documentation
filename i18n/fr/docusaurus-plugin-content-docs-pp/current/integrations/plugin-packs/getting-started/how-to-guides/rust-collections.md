---
id: rust-collections
title: Collections Rust
description: "Configurez un fichier JSON plutôt que de développer un plugin"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Utiliser le plugin SNMP Rust

Le plugin SNMP Rust (`centreon-plugin-rust-snmp`) est un programme livré sous la forme d'un binaire exécutable qui prend en entrée un fichier JSON et des paramètres tels que l'adresse de l'hôte, la communauté SNMP etc. Il ne contient aucune logique propre à un équipement en particulier. Il lit le fichier JSON — nommé *collection* — qui décrit quelles informations récupérer, comment calculer les métriques et les statuts et comment afficher l'état correspondant au test. Ajouter une supervision revient donc à écrire un fichier de configuration, pas à écrire du code.

```text
     ┌─────────────────┐
     │ centreon-engine │
     └────┬─────▲──────┘
      runs│     │returns
          │     │
        ┌─▼─────┴───────────────────┐ queries  ┌─────────────┐
        │ centreon-plugin-rust-snmp ├─────────►│ SNMP device │
        └───┬───────────────────────┘          └─────────────┘
       reads│
            │
        ┌───▼─────────────┐
        │ collection.json │
        └─────────────────┘
```

Une collection décrit trois étapes, exécutées dans cet ordre :

1. `collect` — les requêtes SNMP envoyées à l'équipement ;
2. `compute` — les métriques dérivées des valeurs collectées, et leurs seuils, qui seront passés par les paramètres
3. `output` — la mise en forme du statut et des métriques en un message conforme aux Monitoring Plugins.

### Avant de commencer

#### Ce qu'il faut sur le collecteur

Le paquet `centreon-plugin-rust-snmp` installe le binaire exécutable dans `/usr/lib/centreon/plugins/`. Le collecteur doit simplement pouvoir joindre l'équipement en UDP sur le port SNMP, 161 par défaut.

Les collections sont livrées à part, par des paquets dédiés — `centreon-plugin-applications-protocol-snmp-rs`, `centreon-plugin-operatingsystems-linux-snmp-rs`… — qui les déposent dans `/usr/lib/centreon/plugins/rs-collections/<pack>/`. Le binaire et les collections évoluent donc indépendamment.

#### Repérer ce que l'on veut interroger

Dans la beta au moment de sa sortie, le plugin supporte la version **2C** du protocole **SNMP**. Le support de la version 3 sera ajouté dans les mois qui suivront. Il faut donc pour l'instant l'adresse de l'équipement et une communauté SNMP en lecture.

Reste à identifier les OID et la structure de la réponse, dont dépendra la structure de la collection :

- une **valeur unique** se récupère avec un `Get`, sur un OID **feuille**, index compris — le plus souvent terminé par `.0` ;
- une **table** se récupère avec un `Walk`, sur l'OID du **sous-arbre**, sans index.

Le réflexe utile est d'explorer toute la table avec `snmpwalk` avant d'écrire quoi que ce soit, pour relever les colonnes qui vous intéressent et vérifier que l'équipement les remplit vraiment :

```bash
snmpwalk -v2c -c public 192.168.0.10 1.3.6.1.2.1.25.2.3.1
```

> **Avertissement :** la réponse ne sera pas forcément intelligible si vous ne disposez pas des [MIBs](https://en.wikipedia.org/wiki/Management_information_base) SNMP.

### Écrire une collection

La structure complète du format est spécifiée [ici](https://centreon.github.io/centreon-plugins/rs-collections/snmp/v0/rs-collection.schema.json) au format JSON schema et **[détaillée en version lisible ici](https://centreon.github.io/centreon-plugins/rs-collections/snmp/v0/)**.


#### Champs de validation

Il y a deux champs obligatoires à inscrire tels quels dans vos collections. L'un sert à faciliter l'édition de la collection, l'autre permet au plugin de s'assurer qu'il supporte ce format.

##### Schéma

Ajouter l'attribut `$schema` à la racine de votre fichier permet d'avoir la complétion et la validation directement dans l'éditeur.

```json
{
  "$schema": "https://centreon.github.io/centreon-plugins/rs-collections/snmp/v0/rs-collection.schema.json"
}
```

##### Version du format

Ajouter l'attribut `format_version` à la racine de votre fichier permet au plugin de s'assurer que la collection est compatible. Par exemple, une ancienne version du plugin rejettera une collection trop récente nécessitant des fonctionnalités qu'il n'a pas.

```json
{
  "format_version": 0
}
```

#### `collect` : les requêtes SNMP

`collect.snmp` est la liste des requêtes. Chacune porte un `name`, un `oid` et un `query` valant `Get` ou `Walk` — ces deux valeurs sont sensibles à la casse. Tous les `Get` sont regroupés en une seule requête réseau ; chaque `Walk` est une traversée de sous-arbre distincte.

Le `name` n'est pas décoratif : c'est le nom de la macro sous laquelle la valeur devient utilisable dans `compute`. Un `Get` nommé `memTotalReal` s'y référence par `{memTotalReal}` et vaut un scalaire ; un `Walk` nommé `cpu` donne `{cpu}`, un vecteur d'une entrée par ligne.

```json
{
  "collect": {
    "snmp": [
      { "name": "memTotalReal", "oid": ".1.3.6.1.4.1.2021.4.5.0", "query": "Get" },
      { "name": "cpu", "oid": "1.3.6.1.2.1.25.3.3.1.2", "query": "Walk" }
    ]
  }
}
```

Une table se parcourt (*walk* en anglais) en général colonne par colonne, ce qui serait fastidieux. `labels` permet de le faire en une requête. Dans l'exemple ci-dessous, chaque élément du walk sera nommé d'après les labels définis :

```json
{
  "collect": {
    "snmp": [
      {
        "name": "storage",
        "oid": "1.3.6.1.2.1.25.2.3.1",
        "query": "Walk",
        "labels": {
          ".3": "description",
          ".4": "allocation_units",
          ".5": "size",
          ".6": "used"
        }
      }
    ]
  }
}
```

```text
.1.3.6.1.2.1.25.2.3.1.1.37 = INTEGER: 37
.1.3.6.1.2.1.25.2.3.1.1.53 = INTEGER: 53
.1.3.6.1.2.1.25.2.3.1.2.37 = OID: .1.3.6.1.2.1.25.2.1.4
.1.3.6.1.2.1.25.2.3.1.2.53 = OID: .1.3.6.1.2.1.25.2.1.4
.1.3.6.1.2.1.25.2.3.1.3.37 = STRING: /                      # .3 => description = "/"
.1.3.6.1.2.1.25.2.3.1.3.53 = STRING: /boot                  # .3 => description = "/boot"
.1.3.6.1.2.1.25.2.3.1.4.37 = INTEGER: 4096 Bytes            # .4 => allocation_units = 4096
.1.3.6.1.2.1.25.2.3.1.4.53 = INTEGER: 4096 Bytes            # .4 => allocation_units = 4096
.1.3.6.1.2.1.25.2.3.1.5.37 = INTEGER: 60441977              # .5 => size = 60441977
.1.3.6.1.2.1.25.2.3.1.5.53 = INTEGER: 421148                # .5 => size = 421148
.1.3.6.1.2.1.25.2.3.1.6.37 = INTEGER: 45270551              # .6 => used = 45270551
.1.3.6.1.2.1.25.2.3.1.6.53 = INTEGER: 232719                # .6 => used = 232719
```

On obtient alors `{storage.description}`, `{storage.size}`, `{storage.used}` etc., `storage` venant de l'attribut `name` et la suite venant des labels. 

Le suffixe est reconnu avec ou sans point de tête : `".5"` et `"5"` désignent la même colonne.

#### `compute` : déclarer les métriques à partir des données brutes

`compute` transforme les valeurs collectées en métriques, en deux passes :
- `metrics` s'exécute d'abord et ne voit que les macros de `collect`.
- `aggregations` s'exécute ensuite et peut créer de nouvelles métriques dont les valeurs sont agrégées à partir des résultats de la première passe.

Les deux passes partagent la même grammaire d'expression : des nombres, les opérateurs `+ - * /`, des parenthèses, des macros entre accolades, et trois fonctions — `Average()`, `Min()`, `Max()` — qui réduisent un vecteur à un scalaire.

##### `metrics` : une valeur par instance

###### Nommage

Une métrique porte au minimum un attribut `name`, qui apparaîtra dans les perfdata, et un attribut `value`, l'expression qui la calcule. Le reste est optionnel : `uom` pour l'unité, `min` et `max` pour les bornes affichées dans les perfdata — ou `min_expr` et `max_expr` quand ces bornes se calculent.

Le point à comprendre est que la dimension des données collectées (suivant qu'elles sont le fruit d'un `Get` ou d'un `Walk`) détermine le nombre de métriques produites. 
Une expression basée sur le résultat d'un `Get` donne une perfdata unique, une expression basée sur un `Walk` en donne une par instance, automatiquement.

C'est là que l'attribut `prefix` intervient : il permet de nommer chaque instance avec le champ voulu. Sans cet attribut, les instances sont numérotées, ce qui reste exploitable mais moins lisible :

```
'0#core.cpu.usage.percent'=2%   →   sans prefix
'/#storage.usage.bytes'=183434899456B   →   avec "prefix": "{storage.description}"
```

###### Seuils d'alerte

L'attribut `threshold-suffix` expose la métrique en ligne de commande sous `--warning-<suffixe>` et `--critical-<suffixe>`. Les champs `warning` et `critical` de la collection fournissent les valeurs par défaut, que ces options écrasent. Le format est celui des Monitoring Plugins :

- `80` — alerte si la valeur dépasse 80 ;
- `10:20` — alerte hors de l'intervalle ;
- `@0:10` — inversé : alerte *dans* l'intervalle ;
- `5:` — alerte en dessous de 5 ;
- `~:90` — alerte au-dessus de 90, sans borne basse.

La section `metrics` peut être vide si la vérification ne rapporte que des agrégats.

##### `aggregations` : une valeur pour l'ensemble

Une agrégation se déclare exactement comme une métrique, mais s'évalue après elles et peut lire leurs résultats via `{metrics.<nom>}`. C'est ce qui permet de passer du détail à la synthèse : une moyenne sur tous les cœurs, un total sur tous les systèmes de fichiers...

```json
{
  "name": "avg.cpu.usage.percent",
  "value": "Average({cpu})",
  "uom": "%",
  "min": 0,
  "max": 100,
  "threshold-suffix": "avg"
}
```

Une agrégation n'étant liée à aucune instance, sa perfdata porte son nom sans préfixe, là où une métrique par instance est préfixée : `avg.cpu.usage.percent=2.38%` en comparaison avec `'0#core.cpu.usage.percent'=2%`.

#### `output` : mettre en forme le message

La section `output` est facultative dans son ensemble, chaque champ ayant une valeur par défaut. Les messages sont des gabarits dans lesquels `{metrics.<nom>}` et `{aggregations.<nom>}` sont remplacés par les valeurs calculées.

| Champ                | Défaut                         | Rôle                                                                    |
|----------------------|--------------------------------|-------------------------------------------------------------------------|
| `ok`                 | `OK: Everything is ok `        | Message quand aucun seuil n'est dépassé                                 |
| `warning`            | `WARNING: `                    | Préfixe quand le pire statut est WARNING                                |
| `critical`           | `CRITICAL: `                   | Préfixe quand le pire statut est CRITICAL                               |
| `unknown`            | `UNKNOWN: `                    | Préfixe quand le pire statut est UNKNOWN                                |
| `detail_ok`          | `false`                        | Ajoute le détail par instance (*ie* toutes les métriques) au message OK |
| `detail_warning`     | `true`                         | Ajoute le détail des métriques ayant dépassé les seuils d'alerte        |
| `detail_critical`    | `true`                         | Ajoute le détail des métriques ayant dépassé les seuils critiques       |
| `detail_unknown`     | `true`                         | Ajoute le détail des métriques dont la valeur est inconnue              |
| `no_data`            | `No data matching the filters` | Message quand aucune métrique ne subsiste après les filtres             |
| `instance_separator` | ` - `                          | Séparateur entre les détails de deux instances                          |
| `metric_separator`   | `, `                           | Séparateur entre deux métriques d'une même instance                     |

Le choix courant est de laisser `detail_ok` à `false` — un message OK reste court — et les `detail_*` d'alerte à `true`, pour que l'opérateur voie immédiatement la liste des métriques non OK.

### Exécuter la commande

La commande minimale comporte une cible, une communauté et une collection :

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp \
  -H 192.168.0.10 -c public \
  -j /usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/storage.json
```

Elle renvoie un message et des perfdata conformes aux Monitoring Plugins, et le code retour attendu (0=OK, 1=WARNING, 2=CRITICAL, 3=UNKNOWN) :

```
All storages are OK | '/#storage.usage.bytes'=183434899456B;;;0;247570337792 '/#storage.usage.percent'=74.09%;;;0;100
```

| Option                                        | Description                                                                                                                                                                                                                                                                                              | Obligatoire | Valeur par défaut       |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------|
| `-H`, `--hostname`                            | Nom ou adresse IP de l'équipement à interroger. **Ne prend pas en charge un nom d'hôte servi par sssd ou LDAP.**                                                                                                                                                                                         |             | `localhost`             |
| `-p`, `--port`                                | Port UDP de l'agent SNMP.                                                                                                                                                                                                                                                                                |             | `161`                   |
| `-v`, `--snmp-version`                        | Version SNMP annoncée. L'option est acceptée pour l'homogénéité des commandes mais reste sans effet : la requête est toujours construite en v2c.                                                                                                                                                         |             | `2c`                    |
| `-c`, `--snmp-community`                      | Communauté en lecture. Une valeur vide est ignorée et retombe sur `public`, par compatibilité avec les macros de configuration laissées vides.                                                                                                                                                           |             | `public`                |
| `-j`, `--json`                                | Chemin de la collection à exécuter. Sans elle, le plugin sort en UNKNOWN sans rien interroger.                                                                                                                                                                                                           | X           | —                       |
| `-i`, `--filter-in`                           | Expression régulière restreignant la vérification aux instances dont le nom correspond. L'option est répétable, et une instance retenue par l'un des motifs suffit. Utile pour ne surveiller que certains systèmes de fichiers avec une collection générique : `--filter-in '^/$' --filter-in '^/boot$'` |             | —                       |
| `-o`, `--filter-out`                          | L'inverse : exclut les instances dont le nom correspond, également répétable. Pratique pour écarter le bruit — montages temporaires, interfaces d'administration — sans toucher à la collection.                                                                                                         |             | —                       |
| `--no-data-status`                            | Statut rendu quand les filtres ne laissent aucune donnée : `OK`, `WARNING`, `CRITICAL` ou `UNKNOWN`. La valeur par défaut signale un filtre trop restrictif ou une table vide. La basculer sur `OK` a du sens quand l'absence d'instance est un état normal.                                             |             | `UNKNOWN`               |
| `--warning-<suffixe>`, `--critical-<suffixe>` | Seuils appliqués à une métrique, où `<suffixe>` est le `threshold-suffix` déclaré dans la collection. Ces options écrasent les valeurs par défaut du fichier, ce qui permet de servir plusieurs services Centreon avec une seule collection : `--warning-prct 80 --critical-prct 90`                     |             | seuils de la collection |
| `--list-counters`                             | Affiche les métriques de la collection et, pour chacune, le nom exact des options de seuil correspondantes. C'est le moyen le plus rapide de savoir quoi passer en ligne de commande, sans réseau ni équipement joignable.                                                                               |             | —                       |
| `--check-format`                              | Charge la collection, en vérifie la syntaxe et la structure, puis sort sans interroger l'équipement. À utiliser après chaque modification d'un fichier : les erreurs signalent la métrique et le champ fautifs.                                                                                          |             | —                       |
| `--check-response`                            | Exécute la collecte et affiche les valeurs SNMP brutes, avant tout calcul. C'est l'outil de diagnostic quand une métrique sort fausse ou vide : il montre si le problème vient de l'équipement ou de l'expression.                                                                                       |             | —                       |
| `-V`, `--version`                             | Affiche la version du plugin, la version de format de collection qu'il sait traiter et l'URL du schéma correspondant.                                                                                                                                                                                    |             | —                       |
| `-h`, `--help`                                | Affiche la liste des options et leurs valeurs par défaut.                                                                                                                                                                                                                                                |             | —                       |

### Troubleshooting

#### Comment afficher les informations collectées via SNMP ?

Ajouter l'option `--check-response` à la commande pour consulter les données renvoyées par l'équipement.

#### Comment afficher tous les détails de l'exécution du plugin ?

La variable d'environnement `PLUGIN_LOG` permet à la fois d'activer les logs dans la sortie standard et de choisir le niveau de log voulu.

Le niveau de log peut être `error`, `warn`, `info`, `debug`, `trace`. La passer à `trace` donne le niveau de détail maximum, ce qui permet de creuser plus loin que `--check-response` si par exemple la collecte échoue.

```bash
PLUGIN_LOG=trace /usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H 192.168.0.10 -c public -j cpu.json
```

Il est vivement recommandé de produire ces logs pour les présenter lors de l'ouverture d'une [issue Github](https://github.com/centreon/centreon-plugins/issues), d'un [sujet TheWatch](https://thewatch.centreon.com/) ou d'un [ticket au support](https://support.centreon.com/hc/en-us). 
