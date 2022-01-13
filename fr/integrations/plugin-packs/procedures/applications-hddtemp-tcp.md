---
id: applications-hddtemp-tcp
title: Hddtemp TCP
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Hddtemp TCP apporte 1 modèle d'hôte :
* App-Hddtemp-Tcp-custom

Il apporte le Modèle de Service suivant :

| Service Alias | Service Template             | Default |
|:--------------|:-----------------------------|:--------|
| Temperatures  | App-Hddtemp-Temperatures-Tcp | X       |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Temperatures-->

| Metric Name | Unit                    |
|:------------|:------------------------|
| status      | string                  |
| temperature | celsius or fahrenheit |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Pour utiliser ce Pack, il est nécessaire d'installer l'utilitaire Hddtemp sur le 
serveur Linux à superviser. La plupart des distributions offre un paquet dans son
socle standard. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Hddtemp**:

```bash
yum install centreon-plugin-Applications-Hddtemp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Hddtemp TCP** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Hddtemp**:

```bash
yum install centreon-plugin-Applications-Hddtemp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Hddtemp TCP**:

 ```bash
yum install centreon-pack-applications-hddtemp-tcp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Hddtemp TCP** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**,**Alias** & **IP Address / DNS** correspondant à votre serveur **Hddtemp**.
* Appliquez le Modèle d'Hôte **App-Hddtemp-Tcp-custom**

* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires ("mandatory"). 

| Mandatory | Name           | Description                                                                            |
|:----------|:---------------|:---------------------------------------------------------------------------------------|
|           | HDDTEMPTCPPORT | Port d'écoute de HDDTemp (Par défaut: '7634')                                          |
|           | EXTRAOPTIONS   | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins//centreon_hddtemp.pl \
    --plugin=apps::hddtemp::plugin \
    --mode=temperatures \
    --custommode=tcp \
    --hostname='10.0.0.1' \
    --port=7634 \
    --filter-name='' \
    --unknown-status='' \
    --warning-status='' \
    --critical-status='%{status} !~ /ok/i' \
    --warning-temperature='30' \
    --critical-temperature='50' \
    --verbose \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Drive '/dev/sda' temperature: 24 C status: ok | '/dev/sda#drive.temperature.celsius'=24C;0:30;0:50;;
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si la température du 
disque est supérieure à 30° (`--warning-temperature='30`).

Une alarme CRITICAL sera déclenchée si la température est supérieure à 50° ou que 
le statut est différent de 'ok' (`--critical-temperature='50' --critical-status='%{status} !~ /ok/i'`).

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_hddtemp.pl \
    --plugin=apps::hddtemp::plugin \
    --mode=temperatures \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_hddtemp.pl \
    --plugin=apps::hddtemp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html)
pour le diagnostic des erreurs communes des Plugins Centreon.