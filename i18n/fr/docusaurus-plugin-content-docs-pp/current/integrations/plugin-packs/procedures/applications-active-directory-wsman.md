---
id: applications-active-directory-wsman
title: Microsoft Active Directory WSMAN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Active Directory WSMAN apporte 1 modèle d'hôte :

* App-ActiveDirectory-WSMAN-custom

Il apporte les modèles de service suivants :

| Alias  | Modèle de service                | Description                                                                                 | Défaut | Découverte |
|:-------|:---------------------------------|:--------------------------------------------------------------------------------------------|:-------|:-----------|
| Dcdiag | App-ActiveDirectory-Dcdiag-WSMAN | Contrôle permettant de diagnostiquer le contrôleur de domaine. Exécute la commande `dcdiag`.| X      |            |

### Métriques & statuts collectés

<Tabs groupId="metrics">
<TabItem value="Dcdiag" label="Dcdiag">

| Metric Name              | Unit  |
|:-------------------------|:------|
| domain controller status |       |

</TabItem>
</Tabs>

## Prérequis

Pour superviser Active Directory via WSMAN, merci de suivre notre [documentation officielle](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) et de vous assurer que WinRM et vos droits sont correctement configurés.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Active Directory WSMAN** :

```bash
yum install centreon-plugin-Network-Libraesva-Snmp
```

2. Sur l'interface web de Centreon, installer le Pack **Active Directory WSMAN** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Active Directory WSMAN** :

```bash
yum install centreon-plugin-Network-Libraesva-Snmp
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Active Directory WSMAN** :

```bash
yum install centreon-pack-applications-active-directory-wsman
```

3. Sur l'interface web de Centreon, installer le Pack **Active Directory WSMAN** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address/DNS** correspondant à votre serveur **Active Directory WSMAN**.
* Appliquez le Modèle d'Hôte **App-ActiveDirectory-WSMAN-custom**.
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
/usr/lib/centreon/plugins/centreon_activedirectory_wsman.pl \
    --plugin=apps::microsoft::activedirectory::wsman::plugin \
    --mode=dcdiag \
    --hostname=10.0.0.1 \
    --wsman-scheme=http \
    --wsman-port=5985 \
    --wsman-username='' \
    --wsman-password=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Connectivity - Advertising - DFSREvent - SysVolCheck - KccEvent - MachineAccount - Replications - RidManager - Services - FsmoCheck
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_activedirectory_wsman.pl \
    --plugin=apps::microsoft::activedirectory::wsman::plugin \
    --mode=dcdiag \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_activedirectory_wsman.pl \
    --plugin=apps::microsoft::activedirectory::wsman::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
