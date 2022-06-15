---
id: applications-monitoring-speedtest
title: Speedtest
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Speedtest apporte un modèle d'hôte :
* App-Monitoring-Speedtest-custom

Il apporte le modèle de service suivant :

| Alias              | Modèle de Service                           | Défaut  | Découverte |
|:-------------------|:--------------------------------------------|:--------|:-----------|
| Internet-Bandwidth | App-Monitoring-Speedtest-Internet-Bandwidth |         |            |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Internet-Bandwidth" label="Internet-Bandwidth">

| Metric name                               | Description                                                                             | Unit  |
| :---------------------------------------- | :-------------------------------------------------------------------------------------- | :---- |
| ping.time.milliseconds                    | Round trip time for the packet to reach the test serveur and for the response to return | ms    |
| internet.bandwidth.download.bitspersecond | Download speed                                                                          | b/s   |
| internet.bandwidth.upload.bitspersecond   | Upload speed                                                                            | b/s   |

</TabItem>
</Tabs>

## Prérequis

La communication doit être possible avec `speedtest.net`.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Speedtest** :

```bash
yum install centreon-plugin-Applications-Monitoring-Speedtest
```

2. Sur l'interface web de Centreon, installer le Pack **Speedtest** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Speedtest** :

```bash
yum install centreon-plugin-Applications-Monitoring-Speedtest
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Speedtest** :

```bash
yum install centreon-pack-applications-monitoring-speedtest
```

3. Sur l'interface web de Centreon, installer le Pack **Speedtest** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS**.
* Appliquez le modèle d'hôte **App-Monitoring-Speedtest-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Obligatoire | Nom                   | Description                                                                |
| :---------- | :-------------------- | :------------------------------------------------------------------------- |
|             | SPEEDTESTEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \
    --plugin=apps::monitoring::speedtest::plugin \
    --mode=internet-bandwidth
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: speedtest ping time: 35 ms, download: 97.15 Mb/s, upload: 105.55 Mb/s | 'ping.time.milliseconds'=35.768ms;;;0; 'internet.bandwidth.download.bitspersecond'=97153647b/s;;;0; 'internet.bandwidth.upload.bitspersecond'=105554658b/s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \
    --plugin=apps::monitoring::speedtest::plugin \
    --mode=internet-bandwidth
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \
    --plugin=apps::monitoring::speedtest::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
des plugins.
