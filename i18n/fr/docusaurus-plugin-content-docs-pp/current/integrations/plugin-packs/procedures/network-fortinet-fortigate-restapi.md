---
id: network-fortinet-fortigate-restapi
title: Fortinet Fortigate Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **Fortinet Fortigate** apporte un modèle d'hôte :
* Net-Fortinet-Fortigate-Restapi-custom

Il apporte les modèles de services suivants :

| Alias    | Modèle de services                      | Description                                                                           | Défaut  |
|:---------|:----------------------------------------|:--------------------------------------------------------------------------------------|:--------|
| Ha       | Net-Fortinet-Fortigate-Ha-Restapi       | Contrôle l'utilisation système des members du cluster (processeur, mémoire, sessions) |         |
| Health   | Net-Fortinet-Fortigate-Health-Restapi   | Contrôle l'état de santé du firewall                                                 | X       |
| Licenses | Net-Fortinet-Fortigate-Licenses-Restapi | Contrôle le statut des licences                                                       | X       |
| System   | Net-Fortinet-Fortigate-System-Restapi   | Contrôle l'utilisation système des VDOM (processeur, mémoire, sessions)               | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Ha" label="Ha">

| Metric name                                     | Unit  |
| :---------------------------------------------- | :---- |
| members.detected.count                          |       |
| *member_name*#member.cpu.utilization.percentage | %     |
| *member_name*#member.memory.usage.percentage    | %     |
| *member_name*#member.sessions.active.count      |       |

</TabItem>
<TabItem value="Health" label="Health">

| Metric name   | Unit  |
| :-------------| :---- |
| health status |       |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                            | Unit  |
| :------------------------------------- | :---- |
| license status                         |       |
| *license_name*#license.expires.seconds |       |

</TabItem>
<TabItem value="System" label="System">

| Metric name                            | Unit  |
| :------------------------------------- | :---- |
| *vdom_name*#cpu.utilization.percentage | %     |
| *vdom_name*#memory.usage.percentage    | %     |
| *vdom_name*#sessions.active.count      |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Fortinet Fortigate, l'API Rest doit être configurée (cf: https://docs.fortinet.com/document/fortigate/7.2.1/administration-guide/399023/rest-api-administrator).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Fortinet Fortigate** :

```bash
yum install centreon-plugin-Network-Fortinet-Fortigate-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **Fortinet Fortigate Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Fortinet Fortigate** :

```bash
yum install centreon-plugin-Network-Fortinet-Fortigate-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Fortinet Fortigate Rest API** :

```bash
yum install centreon-pack-network-fortinet-fortigate-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **Fortinet Fortigate Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **Fortinet Fortigate**.
* Appliquez le modèle d'hôte **Net-Fortinet-Fortigate-Restapi-custom**.
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
/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \
    --plugin=network::fortinet::fortigate::restapi::plugin \
    --mode=system \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-token='mytoken' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All vdom systems are ok | 'ABS#cpu.utilization.percentage'=0.00%;;;0;100 'ABS#memory.usage.percentage'=0.00%;;;0;100 'ABS#sessions.active.count'=155;;;0; 'ADV#cpu.utilization.percentage'=0.00%;;;0;100 'ADV#memory.usage.percentage'=1.00%;;;0;100 'ADV#sessions.active.count'=553;;;0; 'BGN#cpu.utilization.percentage'=0.00%;;;0;100 'BGN#memory.usage.percentage'=0.00%;;;0;100 'BGN#sessions.active.count'=244;;;0; 'LHE#cpu.utilization.percentage'=0.00%;;;0;100 'LHE#memory.usage.percentage'=0.00%;;;0;100 'LHE#sessions.active.count'=100;;;0; 'MED#cpu.utilization.percentage'=3.00%;;;0;100 'MED#memory.usage.percentage'=11.00%;;;0;100 'MED#sessions.active.count'=6280;;;0; 'MIC#cpu.utilization.percentage'=0.00%;;;0;100 'MIC#memory.usage.percentage'=5.00%;;;0;100 'MIC#sessions.active.count'=3244;;;0; 'MLC#cpu.utilization.percentage'=0.00%;;;0;100 'MLC#memory.usage.percentage'=0.00%;;;0;100 'MLC#sessions.active.count'=431;;;0; 'PRN#cpu.utilization.percentage'=0.00%;;;0;100 'PRN#memory.usage.percentage'=0.00%;;;0;100 'PRN#sessions.active.count'=0;;;0; 'SSTRN#cpu.utilization.percentage'=5.00%;;;0;100 'SSTRN#memory.usage.percentage'=12.00%;;;0;100 'SSTRN#sessions.active.count'=6559;;;0; 'root#cpu.utilization.percentage'=2.00%;;;0;100 'root#memory.usage.percentage'=4.00%;;;0;100 'root#sessions.active.count'=228;;;0;
checking vdom 'ABS'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 155
checking vdom 'ADV'
    cpu load: 0.00 %
    memory used: 1.00 %
    active sessions: 553
checking vdom 'BGN'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 244
checking vdom 'LHE'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 100
checking vdom 'MED'
    cpu load: 3.00 %
    memory used: 11.00 %
    active sessions: 6280
checking vdom 'MIC'
    cpu load: 0.00 %
    memory used: 5.00 %
    active sessions: 3244
checking vdom 'MLC'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 431
checking vdom 'PRN'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 0
checking vdom 'SSTRN'
    cpu load: 5.00 %
    memory used: 12.00 %
    active sessions: 6559
checking vdom 'root'
    cpu load: 2.00 %
    memory used: 4.00 %
    active sessions: 228
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \
    --plugin=network::fortinet::fortigate::restapi::plugin \
    --mode=system \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \
    --plugin=network::fortinet::fortigate::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
