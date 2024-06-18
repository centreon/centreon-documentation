---
id: applications-pineapp-securemail-snmp
title: PineApp Mail Secure
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **PineApp Mail Secure** apporte un modèle d'hôte :

* App-Pineapp-Securemail-SNMP-custom

Il apporte le modèle de service suivant :

| Alias  | Modèle de service                  | Description                | Défaut |
|:-------|:-----------------------------------|:---------------------------|:-------|
| System | App-Pineapp-Securemail-System-SNMP | Contrôle l'état du système | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="System" label="System">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| system.load.1m.count                  |       |
| system.load.5m.count                  |       |
| system.load.15m.count                 |       |
| system.messages.priority.high.count   |       |
| system.messages.priority.low.count    |       |
| system.messages.priority.normal.count |       |
| system.messages.queue.inbound.count   |       |
| system.messages.queue.outbound.count  |       |
| system.messages.queue.total.count     |       |
| storage-status                        |       |
| *service*#service-status              |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **PineApp Mail Secure SNMP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* http://www2.pineapp.com/images/pineapp/pdf/Mail_Secure_5.1_User.Manual_edited.pdf

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-pineapp-securemail-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pineapp-securemail-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-pineapp-securemail-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **PineApp Mail Secure**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Pineapp-Securemail-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pineapp-Securemail-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-pineapp-securemail-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **PineApp Mail Secure SNMP**.
* Appliquez le modèle d'hôte **App-Pineapp-Securemail-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_pineapp_securemail_snmp.pl \
    --plugin=apps::pineapp::securemail::snmp::plugin \
    --mode=system \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 0.08 (1m) 0.05 (5m) 0.05 (15m) messages inbound queue: 200 messages outbound queue: 100 messages high priority: 100 messages normal priority: 100 messages low priority: 100 messages queue total: 300  | 'system.load.1m.count'=0.08;;;0; 'system.load.5m.count'=0.05;;;0; 'system.load.15m.count'=0.05;;;0; 'system.messages.queue.inbound.count'=200;;;0; 'system.messages.queue.outbound.count'=100;;;0; 'system.messages.priority.high.count'=100;;;0; 'system.messages.priority.normal.count'=100;;;0; 'system.messages.priority.low.count'=100;;;0; 'system.messages.queue.total.count'=300;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pineapp_securemail_snmp.pl \
    --plugin=apps::pineapp::securemail::snmp::plugin \
    --mode=system \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pineapp_securemail_snmp.pl \
    --plugin=apps::pineapp::securemail::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.