---
id: virtualization-vmware2-esx
title: VMware ESX
---

## Vue d'ensemble

VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing.

Le Plugin-Pack Centreon s'appuie sur le Centreon VMWare Connecteur pour requêter le SDK du vCenter.

Avec le connecteur, Centreon peut superviser les VM, les datastores, les ESXs, etc.

## Contenu du Plugin-Pack
	
### Objets supervisés

* ESX ou ESXi
	
### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Nom de la règle                | Description                                  |
| :----------------------------- | :------------------------------------------- |
| Virt-VMWare2-Esx-HostDiscovery | Découvrez vos ESX liés à vCenter ou vos ESXi |
	
<!--Services-->

| Rule name                                | Description                                     |
| :--------------------------------------- | :---------------------------------------------- |
| Virt-VMWare2-Esx-Datastores-Latency-Name | Découvre les datastores et supervise la latence |
| Virt-VMWare2-Esx-Nics-Traffic-Name       | Découvre les Nics et supervise le trafic        |

<!--END_DOCUSAURUS_CODE_TABS-->
	
## Métriques Collectées

En plus des modes et des métriques détaillées ci-après, il est également possible de superviser les éléments suivants :

* Alarms : contrôle les alarmes d'un ESX 
* Datastores-Lateny : contrôle la latence pour accéder aux datastores
* Maintenance : contrôle si une maintenance est prévue
* Time : contrôle la synchronisation temps
* Traffic : Contrôle les interfaces et le trafic
* Uptime : temps écoulé depuis le dernier redémarrage de l'ESX

<!--Esx-Cpu-->

| Metric name   | Description                      | Unit |
| :------------ | :------------------------------- | :--- |
| cpu_total     | Total CPU usage in percentage    | %    |
| cpu_total_MHz | Total CPU usage in MHz           | MHz  |
| cpu_[0-9]     | CPU usage per core in percentage | %    |

<!--Esx-Health-->

| Metric name     | Description                        | Unit  |
| :-------------- | :--------------------------------- | :---- |
| total_problems  | Total number of problem on the ESX | Count |
| problems        | Number of health checks in green   | Count |
| problems_yellow | Number of health checks in yellow  | Count |
| problems_red    | Number of health checks in red     | Count |

<!--Esx-Memory-->

| Metric name | Description                                  | Unit  |
| :---------- | :------------------------------------------- | :---- |
| used        | Memory used                                  | Bytes |
| overhead    | Memory overhead needed by the VMs on the ESX | Bytes |
| state       | Memory state                                 |       |

<!--Esx-Status-->

| Metric name | Description               | Unit |
| :---------- | :------------------------ | :--- |
| Status      | Overall status on the ESX |      |

<!--Esx-Swap-->

| Metric name | Description         | Unit |
| :---------- | :------------------ | :--- |
| swap_in     | Swap in rate Usage  | B/s  |
| swap_out    | Swap out rate Usage | B/s  |

<!--Esx-Vm-Count-->

| Metric name | Description                          | Unit  |
| :---------- | :----------------------------------- | :---- |
| poweredon   | Number of powered on VMs on the ESX  | Count |
| poweredoff  | Number of powered off VMs on the ESX | Count |
| suspended   | Number of suspended VMs on the ESX   | Count |

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

Assurez vous d'avoir remplacé toutes les variables avec les informations nécessaires :

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

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare:
	
```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Installer le Plugin-Pack 'Vmware ESX' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon. 
	
<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```
	
2. Installer le RPM du Plugin-Pack contenant les modèles de supervision:

```bash
yum install centreon-pack-virtualization-vmware2-esx
```

3. Installer le Plugin-Pack 'Vmware ESX' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--END_DOCUSAURUS_CODE_TABS-->
	
## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle "Virt-VMWare2-ESX-custom" et configurez toutes les macros :

| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  | 
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
| X           | CENTREONVMWAREPORT         | By default: 5700                                       |
| X           | ESXNAME                    | Name of the ESX (defined in your VMWare infrastructure |
|             | CENTREONVMWAREEXTRAOPTIONS | Customize it with your own if needed                   |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine :
	
```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl
	--plugin=apps::vmware::connector::plugin
	--mode=cpu-host
	--custommode=connector
	--connector-hostname='localhost'
	--connector-port='5700'
	--container='vcenter01' 
	--esx-hostname='SRV-ESX-TLS'
	--unknown-status='%{status} !~ /^connected$/i'
	--warning-status=''
	--critical-status=''
	--warning-total-cpu='80'
	--critical-total-cpu='90'
	--warning-total-cpu-mhz=''
	--critical-total-cpu-mhz=''
	--warning-cpu=''
	--critical-cpu='' 
```

La commande retourne le message de sortie ci-dessous:

```bash
OK: Host 'SRV-ESX-TLS' : status connected - cpu total average : 48.63 %, 14592.00 MHz - All CPUs are ok |
'cpu_total'=48.63%;;;0;100 'cpu_total_MHz'=14592.00MHz;;;0;30000 'cpu_0'=13.95%;;;0;100 'cpu_1'=12.01%;;;0;100
'cpu_2'=24.58%;;;0;100 'cpu_3'=24.55%;;;0;100 'cpu_4'=26.72%;;;0;100 'cpu_5'=24.38%;;;0;100 'cpu_6'=24.23%;;;0;100
'cpu_7'=26.37%;;;0;100 'cpu_8'=27.71%;;;0;100 'cpu_9'=26.16%;;;0;100
```

Cette commande supervise l'utilisation CPU (```--plugin=apps::vmware::connector::plugin --mode=cpu-host```) de l'ESX **SRV-EX-TLS** (```--esx-hostname='SRV-ESX-TLS'```).

Le plugin se connecte au daemon VMWare sur **localhost** (```--connector-hostname='localhost'```) sur le port **5700** (```--connector-port='5700'```).
Puis la command requête le **container** **vcenter01** (```--container='vcenter01'```) parce que l'ESX **SRV-ESX*TLS** est managé par **vcenter01**.

Cette commande déclenchera un WARNING si l'utilisation du CPU est au dessus de 80% (```--warning-total-cpu='80'```)
et un CRITICAL si l'utilisation CPU est au dessu de 90% (```--critical-total-cpu='90'```).

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
    --mode=cpu-host \
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

#### UNKNOWN: Cannot get value for counters (Maybe, object(s) cannot be reached: disconnected, not running, time not synced (see time-host mode),...) |

Ce message signifie que le plugin n'a pu récupérer des valeurs pour des compteurs.
La plus part du temps, cela est dû à un décalage de temps entre les Serveurs Centreon et l'infrastructure VMWare.
Vérifiez la synchronisation temps avec le mode ```time-host```.
                                                                                                   
#### UNKNOWN: Cannot get counter 'net.received.average' for the sampling period '300' (counter level: 2, sampling level: 1) 

Certains compteurs comme 'mem.state.latest' et 'net.received.average' ne sont disponibles que pour certains niveaux d'échantillonnages par défaut.
Vous pouvez modifier le niveau d'échantillonnage au niveau du vCenter.
Vous pouvez aussi configurer la macro *SERVICEEXTRAOPTIONS* sur les services qui rencontrent cette erreur avec l'option ```--sampling-period='20'```.
