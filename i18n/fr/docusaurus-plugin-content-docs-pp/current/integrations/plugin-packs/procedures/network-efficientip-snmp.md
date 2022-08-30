---
id: network-efficientip-snmp
title: Efficient IP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Efficient IP** apporte un modèle d'hôte :

* Net-Efficientip-SNMP-custom

Il apporte les modèles de service suivants :

| Service Alias       | Service Template                         | Service Description                                          | Default |
| :------------------ | :--------------------------------------- | :----------------------------------------------------------- | :------ |
| SOLID-Server-status | Net-Efficientip-Status-SNMP              | Vérifie le rôle et le statut du SOLID server                           | X       |
| Dnssec-Validation   | Net-Efficientip-Dnssec-Validation-SNMP   | Vérifie les statistiques de validation DNSSEC du service DNS                          | X       |
| Dns-Transfer        | Net-Efficientip-Dns-Transfer-SNMP        | Vérifie les statistiques des requêtes de transfert du service DNS                       | X       |
| Dns-General         | Net-Efficientip-Dns-General-SNMP         | Vérifie l'utilisation générale du DNS                                      | X       |
| Dns-Anwsers         | Net-Efficientip-Dns-Answers-SNMP         | Vérifie les statistiques de réponses DNS                                 | X       |
| Dhcp-Usage          | Net-Efficientip-Dhcp-Usage-SNMP          | Vérifie l'utilisation du DHCP                                      | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="SOLID-Server-status" label="SOLID-Server-status">

| Metric Name | Unit |
| :---------- | :--- |
| status      |      |

</TabItem>
<TabItem value="Dnssec-Validation" label="Dnssec-Validation">

| Metric Name             | Unit  |
| :---------------------- | :---- |
| res-val                 | count |
| res-valsuccess          | count |
| res-valnegsuccess       | count |
| res-valfail             | count |

</TabItem>
<TabItem value="Dns-Transfer" label="Dns-Transfer">

| Metric Name  | Unit  |
| :----------- | :---- |
| xfrdone      | count |
| xfrrej       | count |

</TabItem>
<TabItem value="Dns-General" label="Dns-General">

| Metric Name     | Unit  |
| :-------------- | :---- |
| udp             | count |
| tcp             | count |
| requestv4       | count |
| requestv6       | count |
| recursion       | count |
| response        | count |
| recurserej      | count |
| duplicate       | count |
| dropped         | count |
| res-queryv4     | count |
| res-queryv6     | count |
| res-retry       | count |
| res-responsev4  | count |
| res-responsev6  | count |

</TabItem>
<TabItem value="Dns-Anwsers" label="Dns-Anwsers">

| Metric Name     | Unit  |
| :-------------- | :---- |
| success         | count |
| formerr         | count |
| servfail        | count |
| nxdomain        | count |
| nxrrset         | count |
| failure         | count |

</TabItem>
<TabItem value="Dhcp-Usage" label="Dhcp-Usage">

| Metric Name     | Unit  |
| :-------------- | :---- |
| ack             | count |
| nack            | count |
| offer           | count |
| inform          | count |
| decline         | count |
| release         | count |
| request         | count |
| discover        | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Efficient IP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur. Veuillez vous référer à la documentation officielle du constructeur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Efficient IP** :

```bash
yum install centreon-plugin-Network-Efficientip-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Efficient IP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Efficient IP** :

```bash
yum install centreon-plugin-Network-Efficientip-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Efficient IP** :

```bash
yum install centreon-pack-network-efficientip-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Efficient IP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Efficient IP**.
* Appliquez le modèle d'hôte **Net-Efficientip-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
| :---------- | :--------------- | :------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_efficientip_snmp.pl --plugin=network::efficientip::snmp::plugin --mode=dns-usage --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='my-community'   --filter-counters='^(success|formerr|servfail|nxdomain|nxrrset|failure)$' --warning-udp='' --critical-udp='' --warning-tcp='' --critical-tcp='' --warning-requestv4='' --critical-requestv4='' --warning-requestv6='' --critical-requestv6='' --warning-recursion='' --critical-recursion='' --warning-response='' --critical-response='' --warning-recurserej='' --critical-recurserej='' --warning-duplicate='' --critical-duplicate='' --warning-dropped='' --critical-dropped='' --warning-res-queryv4='' --critical-res-queryv4='' --warning-res-queryv6='' --critical-res-queryv6='' --warning-res-retry='' --critical-res-retry='' --warning-res-responsev4='' --critical-res-responsev4='' --warning-res-responsev6='' --critical-res-responsev6='' --warning-success='' --critical-success='' --warning-formerr='' --critical-formerr='' --warning-servfail='' --critical-servfail='' --warning-nxdomain='' --critical-nxdomain='' --warning-nxrrset='' --critical-nxrrset='' --warning-failure='' --critical-failure='' --warning-xfrdone='' --critical-xfrdone='' --warning-xfrrej='' --critical-xfrrej='' --warning-res-val='' --critical-res-val='' --warning-res-valsuccess='' --critical-res-valsuccess='' --warning-res-valnegsuccess='' --critical-res-valnegsuccess='' --warning-res-valfail='' --critical-res-valfail='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Sent NOERROR : 0, Sent FORMERR : 0, Sent SERVFAIL : 0, Sent NXDOMAIN : 0, Sent nxrrset : 0, Sent Other failure : 0 | 'success'=0;;;0; 'formerr'=0;;;0; 'servfail'=0;;;0; 'nxdomain'=0;;;0; 'nxrrset'=0;;;0; 'failure'=0;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_efficientip_snmp.pl \
    --plugin=network::efficientip::snmp::plugin \
    --mode=dns-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_efficientip_snmp.pl \
    --plugin=network::efficientip::snmp::plugin \
    --mode=dns-usage \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.