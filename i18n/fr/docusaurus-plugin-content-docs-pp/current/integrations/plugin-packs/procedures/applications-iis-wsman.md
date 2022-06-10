---
id: applications-iis-wsman
title: Microsoft IIS WSMAN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon IIS apporte un modèle d'hôte :

* App-Iis-WSMAN-custom

Il apporte les modèles de service suivants :

| Alias             | Modèle de service               | Description                                                     | Défaut | Découverte |
|:------------------|:--------------------------------|:----------------------------------------------------------------|:-------|:-----------|
| Application-Pools | App-Iis-Application-Pools-WSMAN | Contrôle permettant de vérifier l'état des pools d'applications | X      | X          |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                     | Description                                              |
|:------------------------------------|:---------------------------------------------------------|
| App-Iis-WSMAN-Application-Pool-Name | Découvre les pools d'applications et supervise le statut |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="metrics">
<TabItem value="Dcdiag" label="Dcdiag">

| Metric Name              | Unit  |
|:-------------------------|:------|
| domain controller status |       |

</TabItem>
</Tabs>

## Prérequis

Pour superviser IIS via WSMAN, merci de suivre notre [documentation officielle](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) et de vous assurer que WinRM et vos droits sont correctement configurés.

Sur votre serveur Windows, veuillez installer `IIS WMI provider` via `IIS Management Scripts and Tools component (compatibility IIS 6.0)`.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Microsoft IIS Server WSMAN** :

```bash
yum install centreon-plugin-Applications-Iis-Wsman
```

2. Sur l'interface web de Centreon, installer le Pack **Microsoft IIS Server WSMAN** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Microsoft IIS Server WSMAN** :

```bash
yum install centreon-plugin-Applications-Iis-Wsman
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Microsoft IIS Server WSMAN** :

```bash
yum install centreon-pack-applications-iis-wsman
```

3. Sur l'interface web de Centreon, installer le Pack **Microsoft IIS Server WSMAN** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address/DNS** correspondant à votre serveur **Microsoft IIS Server WSMAN**.
* Appliquez le Modèle d'Hôte **App-Iis-WSMAN-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | WSMANEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | WSMANPASSWORD     |                                                                                        |
|             | WSMANPORT         | 5985                                                                                   |
|             | WSMANPROTO        | http                                                                                   |
|             | WSMANUSERNAME     |                                                                                        |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_iis_wsman.pl \
    --plugin=apps::microsoft::iis::wsman::plugin \
    --mode=application-pools \
    --hostname=10.0.0.1 \
    --wsman-scheme=http \
    --wsman-port=5985 \
    --wsman-username='' \
    --wsman-password=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
All application pools are ok | 'pools.detected.count'=2;;;0;
Application pool 'test1' state: started [auto: on]
Application pool 'test2' state: stopped [auto: off]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_iis_wsman.pl \
    --plugin=apps::microsoft::iis::wsman::plugin \
    --mode=application-pools \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_iis_wsman.pl \
    --plugin=apps::microsoft::iis::wsman::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
