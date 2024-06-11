---
id: cloud-iics-restapi
title: IICS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **Informatica Intelligent Cloud Services** apporte un modèle d'hôte :
* Cloud-Iics-Restapi-custom

Il apporte les modèles de services suivants :

| Alias  | Modèle de services        | Description                | Défaut  |
|:-------|:--------------------------|:---------------------------|:--------|
| Agents | Cloud-Iics-Agents-Restapi | Contrôle l'état des agents | X       |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle               | Description                                |
|:------------------------------|:-------------------------------------------|
| Cloud-Iics-Restapi-Agent-Name | Découvre les agents et supervise le statut |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Agents" label="Agents">

| Metric name           | Unit  |
| :---------------------| :---- |
| agents.detected.count |       |
| agent status          |       |
| application status    |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler **Informatica Intelligent Cloud Services**, l'API Rest doit être configurée (cf: https://docs.informatica.com/integration-cloud/cloud-platform/current-version/rest-api-reference/informatica-intelligent-cloud-services-rest-api.html).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Informatica Intelligent Cloud Services** :

```bash
yum install centreon-plugin-Cloud-Iics-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **IICS Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Informatica Intelligent Cloud Services** :

```bash
yum install centreon-plugin-Cloud-Iics-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **IICS Rest API** :

```bash
yum install centreon-pack-cloud-iics-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **IICS Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Complétez les champs **Nom** et **Alias** correspondant à **Informatica Intelligent Cloud Services**.
* Appliquez le modèle d'hôte **Cloud-Iics-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom             | Description                                                                |
| :---------- | :-------------- | :------------------------------------------------------------------------- |
| X           | APIREGION       | Region used (Default: 'eu')                                                |
| X           | APIUSERNAME     | API username                                                               |
| X           | APIPASSWORD     | API password                                                               |
|             | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_iics_restapi.pl \
    --plugin=cloud::iics::restapi::plugin \
    --mode=agents \
    --region='eu' \
    --api-username='myusername' \
    --api-password='mypassword' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All agents are ok | 'agents.detected.count'=2;;;0;
checking agent 'agent1.centreon.com'
    readyToRun: yes [active: yes]
    engine application 'Elastic Server' status: running [desired: running]
    engine application 'Common Integration Components' status: running [desired: running]
    engine application 'Data Integration Server' status: running [desired: running]
    engine application 'Discovery Agent Application' status: running [desired: running]
    engine application 'File Integration Service' status: running [desired: running]
    engine application 'GitRepoConnectApp' status: running [desired: running]
    engine application 'Mass Ingestion' status: running [desired: running]
    engine application 'Metadata Foundation Application' status: running [desired: running]
    engine application 'OI Data Collector' status: running [desired: running]
    engine application 'Process Server' status: running [desired: running]
checking agent 'agent2.centreon.com'
    readyToRun: yes [active: yes]
    engine application 'Elastic Server' status: running [desired: running]
    engine application 'CIH Processor' status: running [desired: running]
    engine application 'Common Integration Components' status: running [desired: running]
    engine application 'Data Integration Server' status: running [desired: running]
    engine application 'Discovery Agent Application' status: running [desired: running]
    engine application 'File Integration Service' status: running [desired: running]
    engine application 'GitRepoConnectApp' status: running [desired: running]
    engine application 'Mass Ingestion' status: running [desired: running]
    engine application 'Metadata Foundation Application' status: running [desired: running]
    engine application 'OI Data Collector' status: running [desired: running]
    engine application 'CMI Streaming Agent' status: running [desired: running]
    engine application 'Process Server' status: running [desired: running]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_iics_restapi.pl \
    --plugin=cloud::iics::restapi::plugin \
    --mode=agents \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_iics_restapi.pl \
    --plugin=cloud::iics::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
