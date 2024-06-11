---
id: network-aruba-orchestrator-restapi
title: Aruba Orchestrator Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **Aruba Orchestrator** apporte un modèle d'hôte :
* Net-Aruba-Orchestrator-Restapi-custom

Il apporte les modèles de services suivants :

| Alias      | Modèle de services                        | Description                    | Défaut  |
|:-----------|:------------------------------------------|:-------------------------------|:--------|
| Alarms     | Net-Aruba-Orchestrator-Alarms-Restapi     | Contrôle les alarmes           | X       |
| Appliances | Net-Aruba-Orchestrator-Appliances-Restapi | Contrôle l'état des appliances | X       |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle              | Description               |
|:-----------------------------|:--------------------------|
| Aruba Orchestrator Appliance | Découverte des appliances |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric name                    | Unit  |
| :----------------------------- | :---- |
| alerms.problems.current.count  |       |
| alarms.severity.minor.count    |       |
| alarms.severity.warning.count  |       |
| alarms.severity.major.count    |       |
| alarms.severity.critical.count |       |

</TabItem>
<TabItem value="Appliances" label="Appliances">

| Metric name               | Unit  |
| :------------------------ | :---- |
| appliances.detected.count |       |
| appliance status          |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Aruba Orchestrator, l'API Rest doit être configurée.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Aruba Orchestrator** :

```bash
yum install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **Aruba Orchestrator Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Aruba Orchestrator** :

```bash
yum install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Aruba Orchestrator Rest API** :

```bash
yum install centreon-pack-network-aruba-orchestrator-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **Aruba Orchestrator Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **Aruba Orchestrator**.
* Appliquez le modèle d'hôte **Net-Aruba-Orchestrator-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom             | Description                                                                |
| :---------- | :-------------- | :------------------------------------------------------------------------- |
| X           | APIPORT         | Port used (Default: 443)                                                   |
| X           | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X           | APIACCESSTOKEN  | API token                                                                  |
|             | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
    --plugin=network::aruba::orchestrator::restapi::plugin \
    --mode=appliances \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-token='mytoken' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: appliances detected: 2 - All appliances are ok | 'appliances.detected.count'=2;;;0;
appliance 'EU-FRA-IDF-PARIS-ARCHIVES-SP2' [group: Network > France > Paris] state: normal
appliance 'EU-FRA-IDF-SPATHUS-ARCHIVES-SP2' [group: Network > France > Saint-Pathus] state: normal
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
    --plugin=network::aruba::orchestrator::restapi::plugin \
    --mode=appliances \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
    --plugin=network::aruba::orchestrator::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
