---
id: virtualization-vmware2-vcenter-5
title: VMware vCenter v5
---

## Vue d'ensemble

VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing.

Le Plugin-Pack Centreon s'appuie sur le Centreon VMWare Connecteur pour requêter le SDK du vCenter.

Avec le connecteur, Centreon peut superviser les VM, les datastores, les ESXs, etc.

## Contenu du Plugin-Pack

### Objets supervisés

* Snapshots
* VM-tools

### Métriques collectées

Ce pack s'appuie sur le pack "VMware vCenter" pour obtenir plus d'indicateurs (virtualization-vmware2-vcenter-generic).

<!--DOCUSAURUS_CODE_TABS-->

<!--Vm-Snapshot-Global-->

| Metric name  | Description                                               | Unit  |
| :----------- | :-------------------------------------------------------- | :---- |
| num_warning  | Number of snapshots older than 3 days (default treshold)  | Count |
| num_critical | Number of snapshots older than 5 days (default threshold) | Count |

<!--Vm-Tools-Global-->

| Metric name   | Description                                                   | Unit  |
| :------------ | :------------------------------------------------------------ | :---- |
| not_updated   | Number of VMs with VM-Tools not updated (default threshold)   | Count |
| not_running   | Number of VMs with VM-Tools not running (default threshold)   | Count |
| not_installed | Number of VMs with VM-Tools not installed (default threshold) | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requêter le vCenter.

Installer le daemon sur tous les pollers :

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

Pour configurer les accès à votre infrastructure, éditer le fichier
"/etc/centreon/centreon\_vmware.pm" :

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

ssurez vous d'avoir remplacé toutes les variables avec les informations nécessaires :

- _ip\_hostname_: Adresse IP ou nom d'hôte du vCenter ou de l'ESX (Si il est en mode standalone),
- _username_: utilisateur avec un accès "lecture seul" au vCenter ou à l'ESX (Vous pouvez utilisez un utilisateur du domaine),
- _password_: le mot de passe de l'utilisateur.

Vous pouvez configurer plusieurs connexions à différents vCenter ou ESX
en utilisant cette structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Chaque entrée est un **container**.

Pour démarrer le daemon et l'activer au démarrage :

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Vous pouvez vérifiez que votre configuration est fonctionelle en consultant les journaux dans :
"/var/log/centreon/centreon\_vmware.log".

### Flux réseau

Le Collecteur Centreon avec le connecteur VMWare d'installé doit accéder en HTTPS (TCP/443) au vCenter.

Les Collecteurs requêtant le Collecteur avec le connecteur VMWare doit accéder en TCP/5700 au Collecteur avec le Connecteur VMWare.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare :

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Installer le Plugin-Pack 'Vmware vCenter v5' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision :

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-5.noarch
```

3. Installer le Plugin-Pack 'Vmware vCenter v5' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle "Virt-VMWare2-VCenter-5-custom", et configurez toutes les macros : 

| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  |
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
| X           | CENTREONVMWAREPORT         | By default: 5700                                       |
|             | CENTREONVMWAREEXTRAOPTIONS | Customize it with your own if needed                   |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine :

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm \
    --custommode=connector \
    --connector-hostname='localhost' \
    --connector-port='5700' \
    --container='vcenter01' \
    --vm-hostname='.*' \
    --filter \
    --filter-uuid='' \
    --warning='259200' \
    --critical='432000' \
    --disconnect-status='ok' \
    --nopoweredon-skip \
    --check-consolidation \
    --verbose
```

La commande retourne le message de sortie ci-dessous:

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
```

Cette commande contrôle les snapshots des machines virtuelles (```--plugin=apps::vmware::connector::plugin --mode=snapshot-vm```).
Le plugin se connecte au daemon VMWare sur **localhost** (```--connector-hostname='localhost'```) sur le port **5700** (```--connector-port='5700'```).
Puis la commande requête le **container** **vcenter01* (```--container='vcenter01'```).

La commande déclenchera une alerte WARNING si un snapshot est plus vieux de 3 jours / 259200s (```--warning='259200'```)
et une alerte CRITICAL si un snapshot est plus vieux de 5 jours / 432000s (```--warning='259200'```)

Vous pouvez afficher tous les modes disponibles à l'aide de la commande suivante :`

```bash
/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --list-mode
```

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option --help à la commande :

```bash
/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm  \
    --help
```

### Pourquoi j'obtiens les erreurs suivantes :

#### UNKNOWN: Unknown container name 'default' |

Ce message d'erreur signifie que le **container* passé en argument n'existe pas dans la configuration du connecteur VMWare.
Vérifiez la macro **CENTREONVMWARECONTAINER** sur l'hôte ou vérifiez la configuration dans le fichier */etc/centreon/centreon_vmware.pm*

#### UNKNOWN: Container connection problem |

Ce message signifie que vous avez un problème avec les identifiants liés à votre **container**.
Vérifiez les identifiants dans le fichier */etc/centreon/centreon_vmware.pm*.
Vous pouvez aussi regarder les logs pour plus d'informations: */var/log/centreon/centreon_vmware.log*

#### UNKNOWN: Cannot get response (timeout received)

Ce messsage d'erreur signifie que le plugin n'a pas eu de réponse du daemon VMWare.
Vérifiez vos paramètres de connexion et les macros **CENTREONVMWAREHOST** et **CENTREONVMWAREPORT**.
