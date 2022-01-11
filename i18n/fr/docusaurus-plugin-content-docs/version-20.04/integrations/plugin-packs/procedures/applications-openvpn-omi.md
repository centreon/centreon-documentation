---
id: applications-openvpn-omi
title: OpenVPN OMI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon OpenVPN OMI apporte 1 modèle d'hôte :
* App-Openvpn-OMI

Il apporte le Modèle de Service suivant :

| Service Alias | Service Template             | Default |
|:--------------|:-----------------------------|:--------|
| Server-Usage  | App-Openvpn-Server-Usage-OMI | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="ServerUsage" label="ServerUsage">

| Metric name                      | Description               | Unit  |
|:---------------------------------|:--------------------------|:------|
| clients.current.count            | Number of current Clients | count |
| server.traffic.in.bitspersecond  | Server traffic in         | b/s   |
| server.traffic.out.bitspersecond | Server traffic out        | b/s   |

</TabItem>
</Tabs>

## Prérequis

Le serveur Open VPN doit avoir une OMI fonctionnelle. Un utilisateur et un mot
de passe dédiés au monitoring sont fortement conseillés pour des raisons de 
sécurité.

## Installation

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Open VPN*:

```bash
yum install centreon-plugin-Applications-Openvpn-Omi
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *OpenVPN OMI* depuis la page **Configuration > Packs de plugins**

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Open VPN*:

```bash
yum install centreon-plugin-Applications-Openvpn-Omi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *OpenVPN OMI*:

```bash
yum install centreon-pack-applications-openvpn-omi
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *OpenVPN OMI* depuis la page **Configuration > Packs de plugins**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur *Open VPN*
* Appliquez le Modèle d'Hôte *Applications-Openvpn-Omi-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises(*Mandatory*) doivent être renseignées 

| Mandatory | Name            | Description                                                                        |
|:----------|:----------------|:-----------------------------------------------------------------------------------|
|           | OMIEXTRAOPTIONS |                                                                                    |
| X         | OMIPASSWORD     |                                                                                    |
| X         | OMIPORT         | 7505                                                                               |
|           | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \
    --plugin=apps::openvpn::omi::plugin \
    --mode=server-usage \
    --omi-hostname='10.0.0.1' \
    --omi-password='' \
    --omi-port='7505' \
    --warning-num-clients='' \
    --critical-num-clients='' \
    --warning-traffic-in='' \
    --critical-traffic-in='' \
    --warning-traffic-out='1000000' \
    --critical-traffic-out='2000000' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK : Current Clients: 9000 Traffic In: 900 kb/s Traffic Out: 900 kb/s | 'clients.current.count'=9000;;;0; 'server.traffic.in.bitspersecond'=900000b/s;;;0; 'server.traffic.out.bitspersecond'=900000b/s;1000000;2000000;0;
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le traffic out
est supérieur à 2 1000000 b/s
(`--warning-traffic-out='1000000'`); l'alarme sera de type CRITICAL au-delà
 de 2000000 b/s.

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \
    --plugin=apps::openvpn::omi::plugin \
    --mode=server-usage \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \
    --plugin=apps::openvpn::omi::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins)
pour le diagnostic des erreurs communes des Plugins Centreon.