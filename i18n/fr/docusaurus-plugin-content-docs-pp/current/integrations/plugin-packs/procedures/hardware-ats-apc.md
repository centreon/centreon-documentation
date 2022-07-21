---
id: hardware-ats-apc
title: APC ATS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **APC ATS** apporte un modèle d'hôte :

* HW-ATS-Apc-SNMP-custom

Il apporte les modèles de service suivants :

| Alias         | Modèle de service             | Description                      | Défaut |
|:--------------|:------------------------------|:---------------------------------|:-------|
| Device-Status | HW-ATS-Apc-Device-Status-SNMP | Contrôle l'état de l'équipement  | X      |
| Input-Lines   | HW-ATS-Apc-Input-Lines-SNMP   | Contrôle les métriques en entrée | X      |
| Output-Lines  | HW-ATS-Apc-Output-Lines-SNMP  | Contrôle les métriques en sortie | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Device-Status" label="Device-Status">

Could not retrive metrics

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Métrique        | Unité |
|:----------------|:------|
| *input*#current | A     |
| *input*#power   | W     |
| *input*#voltage | V     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Métrique              | Unité |
|:----------------------|:------|
| *oline*#current       | A     |
| *oline*#load          | VA    |
| *oline*#load-capacity | %     |
| *oline*#power         | W     |
| *oline*#status        |       |
| *oline*#voltage       | V     |

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **APC ATS** :

```bash
yum install centreon-plugin-Hardware-Ats-Apc-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **APC ATS** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **APC ATS** :

```bash
yum install centreon-plugin-Hardware-Ats-Apc-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **APC ATS** :

```bash
yum install centreon-pack-hardware-ats-apc
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **APC ATS** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **APC ATS**.
* Appliquez le modèle d'hôte **HW-ATS-Apc-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                                                            |
|:------------|:-----------------|:---------------------------------------------------------------------------------------|
|             | SNMPEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_ats_apc_snmp.pl \
    --plugin=hardware::ats::apc::snmp::plugin \
    --mode=device-status \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ats_apc_snmp.pl \
    --plugin=hardware::ats::apc::snmp::plugin \
    --mode=device-status \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ats_apc_snmp.pl \
    --plugin=hardware::ats::apc::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.