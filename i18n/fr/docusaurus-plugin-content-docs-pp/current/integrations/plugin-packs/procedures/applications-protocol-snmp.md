---
id: applications-protocol-snmp
title: Generic SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Generic SNMP** apporte un modèle d'hôte :

* App-Protocol-SNMP-custom

Il apporte les modèles de service suivants :

| Alias         | Modèle de service                      | Description                                                        | Défaut | Découverte |
|:--------------|:---------------------------------------|:-------------------------------------------------------------------|:-------|:-----------|
| Collection    | App-Protocol-SNMP-Collection           | Collecte et calcule des données SNMP                               |        |            |
| Collection    | App-Protocol-SNMP-Collection-Discovery | Collecte et calcule des données SNMP                               |        | X          |
| Generic-Value | App-Protocol-SNMP-Numeric-Value        | Contrôle permettant de récupérer une valeur numérique d'un OID     |        |            |
| Generic-Value | App-Protocol-SNMP-String-Value         | Contrôle permettant de récupérer une chaine de caractères d'un OID |        |            |
| Uptime        | App-Protocol-SNMP-Uptime               | Contrôle l'uptime d'un équipement en utilisant l'OID standard      |        |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle | Description                                                  |
|:----------------|:-------------------------------------------------------------|
| SNMP Agents     | Discover hosts by requesting their SNMP agents               |
| SNMP v3 Agents  | Discover hosts by requesting their SNMP agents using SNMP v3 |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                   | Description |
|:----------------------------------|:------------|
| App-Protocol-SNMP-Collection-Name |             |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte.

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Collection" label="Collection">

| Métrique            | Unité |
|:--------------------|:------|
| *selections*#select |       |

</TabItem>
<TabItem value="Generic-Value" label="Generic-Value">

Could not retrive metrics

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité |
|:------------|:------|
| uptime      |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Generic SNMP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Generic SNMP** :

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Generic SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Generic SNMP** :

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Generic SNMP** :

```bash
yum install centreon-pack-applications-protocol-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Generic SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Generic SNMP**.
* Appliquez le modèle d'hôte **App-Protocol-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro                | Description                                  |
|:------------|:---------------------|:---------------------------------------------|
|             | SNMPCOLLECTIONCONFIG |                                              |
|             | SNMPEXTRAOPTIONS     | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
    --mode=string-value \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version=2c \
    --oid='' \
    --format-ok='' \
    --format-warning='' \
    --format-critical='' \
    --format-unknown='' \
    --warning-regexp= \
    --critical-regexp= \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
    --mode=string-value \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.