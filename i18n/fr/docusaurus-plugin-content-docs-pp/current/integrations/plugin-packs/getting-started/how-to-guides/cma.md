---
id: cma
title: Centreon Monitoring Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

L'Agent de supervision Centreon (Centreon Monitoring Agent, CMA) collecte des métriques et calcule des statuts sur les serveurs qu'il supervise, et les envoie à Centreon.
Les plugins Centreon comme les plugins personnalisés basés sur Nagios sont compatibles avec l'agent.

### Limitations

L'Agent de supervision Centreon est en phase Beta. Les limitations suivantes s'appliquent : 

* Le périmètre de supervision supporté est limité, de nouveaux contrôles (natifs) seront apportés dans la version définitive.
* Une configuration manuelle est à réaliser. Dans la version définitive, celle-ci sera possible via l'interface utilisateur, et largement automatisée.

### OS supportés

L'agent peut être installé sur et superviser les OS suivants :

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* Alma 8
* Alma 9
* Debian 11
* Debian 12
* Ubuntu 22.04 LTS

</TabItem>
<TabItem value="Windows" label="Windows">

* Windows 10
* Windows 11
* Windows Server 2016
* Windows Server 2019
* Windows Server 2022

</TabItem>
</Tabs>

## Étape 1: Configurez Centreon

### Installez le connecteur de supervision

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. Sur votre serveur central, allez à la page **Configuration > Gestionnaire de connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) le connecteur de supervision [**Linux Centreon Monitoring Agent**](../../procedures/operatingsystems-linux-centreon-monitoring-agent.md).

</TabItem>
<TabItem value="Windows" label="Windows">

1. Sur votre serveur central, allez à la page **Configuration > Gestionnaire de connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) le connecteur de supervision [**Windows Centreon Monitoring Agent**](../../procedures/operatingsystems-windows-centreon-monitoring-agent.md).

</TabItem>
</Tabs>

### Créez le connecteur Centreon Monitoring Agent

Sur votre serveur central :

1. Allez à la page **Configuration > Commandes > Connecteurs**.
2. Créez un nouveau connecteur avec les données suivantes :

| Paramètre                 | Valeur                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nom du connecteur         | Centreon Monitoring Agent                                                                                                                                                                     |
| Description du connecteur | Centreon Monitoring Agent                                                                                                                                                                     |
| Ligne de commande         | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Utilisé par la commande   | Entrez `Centreon Monitoring Agent` et cliquez sur **Sélectionner tout**                                                                                                                       |
| Statut du connecteur      | Activé                                                                                                                                                                                        |

### Configurez Engine

1. Sur le collecteur qui recevra les données de l'agent, installez le paquet **centreon-engine-opentelemetry**.
   
2. Sur le collecteur qui recevra les données de l'agent, créez le fichier suivant :

   ```shell
   touch /etc/centreon-engine/otl_server.json
   ```

3. Entrez le contenu suivant. Cela permettra au collecteur de recevoir les données en provenance de l'agent.
   > Le collecteur permet de fonctionner dans les deux modes simultanément (certains agents se connectent au collecteur alors que le collecteur se connecte à d'autres agents).

<Tabs groupId="sync">
<TabItem value="No encryption, agent connects to poller" label="No encryption, agent connects to poller">

```json
{
   "otel_server":{
      "host":"0.0.0.0",
      "port":4317
   },
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":10
   }
}
```

```bash
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

</TabItem>
<TabItem value="Encryption, agent connects to poller" label="Encryption, agent connects to poller">

```json
{
   "otel_server":{
      "host":"0.0.0.0",
      "port":4317,
      "encryption":true,
      "public_cert":"<CERTIFICATE PATH>",
      "private_key":"<KEY PATH>",
      "ca_certificate":"<CA PATH>"
   },
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":10
   }
}
```

</TabItem>
<TabItem value="No encryption, poller connects to agent" label="No encryption, poller connects to agent">

Cette configuration est à utiliser lorsque l'agent ne peut pas se connecter au collecteur, pour des raisons de sécurité (ex : agent situé dans une DMZ).
Dans ce mode, le collecteur se connecte à l'agent.

```json
{
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":15,
      "reverse_connections":[
         {
            "host":"<HOST ADDRESS>",
            "port":<PORT>
         }
      ]
   }
}
```

```bash
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

* Entrez l'adresse IP de l'hôte sur lequel est installé l'agent dans les champs **host** et **port**. Cette adresse doit être accessible depuis le collecteur.
* Le champ **check_interval** correspond à la fréquence des contrôles effectués par l'Agent de supervision Centreon.

</TabItem>
<TabItem value="Encryption, poller connects to agent" label="Encryption, poller connects to agent">

Cette configuration est à utiliser lorsque l'agent ne peut pas se connecter au collecteur, pour des raisons de sécurité (ex : agent situé dans une DMZ).
Dans ce mode, le collecteur se connecte à l'agent.

```json
{
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":15,
      "reverse_connections":[
         {
            "host":"localhost",
            "port":4317,
            "encryption":true,
            "ca_certificate":"<CERTIFICATE PATH>",
            "ca_name":"<CA NAME>"
         }
      ]
   }
}
```

* Entrez l'adresse IP de l'hôte sur lequel est installé l'agent dans les champs **host** et **port**. Cette adresse doit être accessible depuis le collecteur.
* Le champ **check_interval** correspond à la fréquence des contrôles effectués par l'Agent de supervision Centreon.

</TabItem>
</Tabs>

### Ajoutez un nouveau module Broker

1. Allez à la page **Configuration > Collecteurs > Configuration du moteur de collecte**, puis cliquez sur le collecteur qui supervisera les ressources.
2. Dans l'onglet **Données**, dans la section **Commande de lancement du module**, dans le paramètre **Multiple Broker Module**, cliquez sur **Ajouter une nouvelle entrée**.
3. Ajoutez l'entrée suivante :

   ```bash
   /usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json
   ```

4. Exportez la configuration.
5. Redémarrez le moteur de collecte.

   ```bash
   systemctl restart centengine
   ```

L'Agent de supervision Centreon est maintenant capable de communiquer avec Centreon. Vous pouvez mettre vos hôtes en supervision.

## Étape 2 : Préparez l'hôte

### Téléchargez et installez l'agent sur l'hôte

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* Installez le paquet **centreon-monitoring-agent**.
1. Modifiez le fichier **/etc/centreon-monitoring-agent/centagent.json** local (4 cas) :

<Tabs groupId="sync">
<TabItem value="Non chiffré, l'agent se connecte au collecteur" label="Non chiffré, l'agent se connecte au collecteur">

```json
{
    "log_level":"trace",
    "endpoint":"<IP POLLER>:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" 
}
```

</TabItem>
<TabItem value="Chiffré, l'agent se connecte au collecteur" label="Chiffré, l'agent se connecte au collecteur">

```json
{
    "log_level":"trace",
    "endpoint":"<IP POLLER>:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "encryption":true,
  "ca_certificate":"/tmp/ca_1234.crt"
}
```

</TabItem>
<TabItem value="Non chiffré, le collecteur se connecte à l'agent" label="Non chiffré, le collecteur se connecte à l'agent">

```json
{
    "log_level":"trace",
    "endpoint":"0.0.0.0:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reversed_grpc_streaming":true
}
```
</TabItem>
<TabItem value="Chiffré, le collecteur se connecte à l'agent" label="Chiffré, le collecteur se connecte à l'agent">

```json
{
    "log_level":"trace",
    "endpoint":"0.0.0.0:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reversed_grpc_streaming":true,
  "encryption":true,
  "private_key":"/tmp/server_1234.key",
  "public_cert":"/tmp/server_1234.crt",
  "ca_certificate":"/tmp/ca_1234.crt"
}
```

</TabItem>
</Tabs>

#### Options de log

Deux types de log sont disponibles :

* file: l'agent loggue dans le fichier dont le chemin est donné par **log_file**.
* stdout: l'agent loggue vers la sortie standard de l'exe.

Dans le cas de logging vers un fichier, une rotation peut être paramétrée avec les clés **log_max_file_size** et **log_max_files**.

Les niveaux de logs possibles sont: trace, debug, info, warning, error, critical et off.

2. Redémarrer l'agent : 
   ```shell
   systemctl restart centagent
   ```

</TabItem>
<TabItem value="Windows" label="Windows">

1. [Téléchargez l'installer de l'agent] (https://github.com/centreon/centreon-collect/releases/download/centreon-collect-24.04.6/centreon-monitoring-agent-24.10.0.exe) sur tous les serveurs que vous voulez superviser.

2. Lancez l'installer (durant la configuration, vous pourrez cliquer sur les (i) pour avoir de l'aide).

3. Configurez l'endpoint et le type de connexion :
   * Dans le champ **Host name in Centreon**, entrez le nom de l'hôte à superviser tel que vous l'avez saisi dans l'interface Centreon.
   * Dans le cas le plus courant (l'agent se connecte au poller), saisissez l'adresse IP ou le nom DNS suivi du port OpenTelemetry sur lequel écoute le poller, sous la forme \<adresse IP ou nom DNS\>:port, par exemple 192.168.45.32:4317.
   * Si vous activez l'option **Poller-initiated connection** (le collecteur se connecte à l'agent), vous devez choisir l'interface (toutes les interfaces : 0.0.0.0) et le port (généralement 4317) sur lequel l'agent va accepter les connections venant du collecteur.

4. Configurez les options de log. Deux types de log sont disponibles :
   * **File** : les logs sont écrits dans un fichier
   * **EventLog** : les logs sont envoyés vers les [journaux d'évènements](/docs/alerts-notifications/event-log).
  Si vous choisissez de logger dans un fichier, vous pouvez configurer la rotation de logs en renseignant **Max File Size** et **Max number of files**.
  Les niveaux de logs possibles sont: trace, debug, info, warning, error, critical et off.

5. Configurez les paramètres de chiffrement.
Le chiffrement est activé par défaut. Dans le cas où l'option **Poller-initiated connection** est activée, renseignez **Max File Size** et **Max number of files**.

</TabItem>
</Tabs>

### Déployer les plugins Centreon sur l'hôte

Les plugins Centreon exécuteront les contrôles sur l'hôte.

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

##### Activez les dépôts Centreon et installez le plugin

Ce dépôt permettra d'installer les plugins Centreon ainsi que **les dépendances qui ne peuvent pas être satisfaites par les dépôts standard des distributions**.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF
```

Installez le plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF
```

Installez le plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
apt-get update
```

Installez le plugin :

```bash
apt -y install centreon-plugin-operatingsystems-linux-local
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="Windows" label="Windows">

Sur les hôtes que vous voulez superviser, le plugins est déjà installé par l'installer du Centreon Monitoring Agent.

</TabItem>
</Tabs>

## Étape 3 : Mettez l'hôte en supervision

### Créez l'hôte en utilisant le bon modèle

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-lui le modèle d'hôte **OS-Linux-Centreon-Monitoring-Agent-custom**.

</TabItem>
<TabItem value="Windows" label="Windows">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-lui le modèle d'hôte **OS-Windows-Centreon-Monitoring-Agent-custom**.

</TabItem>
</Tabs>

