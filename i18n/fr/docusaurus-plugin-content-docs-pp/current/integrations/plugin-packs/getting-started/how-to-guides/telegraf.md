---
id: telegraf
title: Telegraf
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

L'agent Telegraf collecte des métriques et calcule des statuts sur les serveurs qu'il supervise, et les envoie à Centreon. Le processeur OpenTelemetry de Centreon lui permet d'interpréter les données envoyées au format OpenTelemetry.

Développé par InfluxDB, l'agent Telegraf peut être installé sur des serveurs Windows ou Linux. Centreon Engine envoie la configuration des ressources supervisées à l'agent (hôtes existants, seuils...), afin que l'agent exécute des contrôles et calcule les statuts de ces ressources.

Étant basés sur Nagios, les plugins Centreon comme les plugins personnalisés sont compatibles avec l'agent. Ceci est dû au fait que l'intégration de Centreon avec Telegraf est basée sur le [format natif Nagios de données d'entrée](https://docs.influxdata.com/telegraf/v1/data_formats/input/nagios/).

### Limitations

Les limitations suivantes sont dues à des contraintes côté Telegraf ou côté Centreon.

* À cause de limitations de Telegraf, la configuration des ressources connues de l'agent est mise à jour uniquement lorsque l'agent est démarré ou [redémarré](#reload-the-agent) (typiquement, un redémarrage de l'agent est nécessaire après avoir [déployé la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration)). Techniquement, c'est l'agent qui demande à Centreon de lui envoyer la configuration la plus à jour.
* Seules les métriques connues (c'est-à-dire les métriques pour les hôtes et services existant dans Centreon) sont envoyées à Centreon. Les métriques concernant des hôtes ou services inconnus sont ignorées.
* Seuls des métriques et des status sont retournés (pas d'outputs).
* Les connexions réseau sont unidirectionnelles : les données vont de l'agent au collecteur. Cela signifie qu'un hôte situé dans une DMZ devra communiquer avec un collecteur situé dans la même DMZ.
* Lorsqu'une amélioration ou une correction sont publiées, le plugin Centreon doit être redéployé sur les hôtes supervisés (il n'y a pas de mise à jour automatique).

## Étape 1: Configurez Centreon

### Installez le connecteur de supervision

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. Sur votre serveur central, allez à la page **Configuration > Gestionnaire de connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) le connecteur de supervision **Linux Telegraf Agent**.

</TabItem>
<TabItem value="Windows" label="Windows">

1. Sur votre serveur central, allez à la page **Configuration > Gestionnaire de connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) le connecteur de supervision **Windows Telegraf Agent**.

</TabItem>
</Tabs>

### Créez le connecteur Telegraf

Installez le processeur Open Telemetry pour Telegraf sur votre serveur central :

1. Allez à la page **Configuration > Commandes > Connecteurs**.
2. Créez un nouveau connecteur avec les données suivantes :

| Paramètre                  | Valeur                                                                                                                                                                                                                           |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nom du connecteur          | Telegraf                                                                                                                                                                                                                         |
| Description du connecteurn | Telegraf                                                                                                                                                                                                                         |
| Ligne de commande          | `opentelemetry --processor=nagios_telegraf --extractor=attributes --host_path=resource_metrics.scope_metrics.data.data_points.attributes.host --service_path=resource_metrics.scope_metrics.data.data_points.attributes.service` |
| Utilisé par la commande    | Entrez `Telegraf-Agent` et cliquez sur **Sélectionner tout**                                                                                                                                                                     |
| Statut du connecteur       | Activé                                                                                                                                                                                                                           |

### Configurez Engine

1. Sur le collecteur qui recevra les données de l'agent, créez le fichier suivant :

   ```shell
   touch /etc/centreon-engine/otl_server.json
   ```

2. Entrez le contenu suivant. Cela permettra au collecteur de recevoir les données en provenance de l'agent.

```json
{
 "otel_server": {
   "host": "0.0.0.0",
   "port": 4317,
   "encryption": false
 },
 "max_length_grpc_log": 0,
 "telegraf_conf_server": {
   "http_server": {
     "port": 1080,
     "encryption": false
   },
   "telegraf_conf": {
     "interval": "60s",
     "service_address": "xxx.xxx.xxx.xxx:4317"
   }
 }
}
```

* Entrez l'adresse IP du collecteur dans le champ **service_address**.
* Le champ **interval** correspond à la fréquence des contrôles effectués par Telegraf, et doit valoir 60 secondes, car il s'agit de la fréquence des contrôles Engine.

> Pour des raisons de simplicité, cette page ne couvre que la configuration de Telegraf **en mode non sécurisé**, mais vous
> trouverez la procédure pour chiffrer les communications dans la documentation du [connecteur Linux Telegraf Agent](../../procedures/operatingsystems-linux-telegraf-agent.md) ou celle du  [connecteur Windows Telegraf Agent](../../procedures/operatingsystems-windows-telegraf-agent.md).

### Ajoutez un nouveau module Broker

1. Allez à la page **Configuration > Collecteurs > Configuration du moteur de collecte**, puis cliquez sur le collecteur qui supervisera les ressources.
2. Dans l'onglet **Données**, dans la section **Commande de lancement du module**, dans le paramètre **Multiple Broker Module**, cliquez sur **Ajouter une nouvelle entrée**.
3. Ajoutez l'entrée suivante :

   ```bash
   /usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json
   ```

4. Exportez la configuration
5. Redémarrez le moteur de collecte

   ```bash
   systemctl restart centengine
   ```

L'agent Telegraf est maintenant capable de communiquer avec Centreon. Vous pouvez mettre vos hôtes en supervision.

## Étape 2 : Préparez l'hôte

### Téléchargez et installez l'agent sur l'hôte

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf -y install epel-release
dnf -y config-manager --set-enabled 'powertools'
```

La partie qui suit est extraite de la [documentation officielle de Telegraf](https://docs.influxdata.com/telegraf/v1/install/?t=RedHat+%26amp%3B+CentOS).

```bash
cat > /etc/yum.repos.d/influxdb.repo <<'EOF'
[influxdb]
name = InfluxData Repository - Stable
baseurl = https://repos.influxdata.com/stable/$basearch/main
enabled = 1
gpgcheck = 1
gpgkey = https://repos.influxdata.com/influxdata-archive_compat.key
EOF
```

```bash
dnf install -y telegraf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf -y install epel-release
dnf -y config-manager --set-enabled 'crb'
```

La partie qui suit est extraite de la [documentation officielle de Telegraf](https://docs.influxdata.com/telegraf/v1/install/?t=RedHat+%26amp%3B+CentOS).

```bash
cat > /etc/yum.repos.d/influxdb.repo <<'EOF'
[influxdb]
name = InfluxData Repository - Stable
baseurl = https://repos.influxdata.com/stable/$basearch/main
enabled = 1
gpgcheck = 1
gpgkey = https://repos.influxdata.com/influxdata-archive_compat.key
EOF
```

```bash
dnf install -y telegraf
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

La partie qui suit est extraite de la [documentation officielle de Telegraf](https://docs.influxdata.com/telegraf/v1/install/).

```bash
wget -q https://repos.influxdata.com/influxdata-archive_compat.key -O influxdata-archive_compat.key
echo '393e8779c89ac8d958f81f942f9ad7fb82a25e133faddaf92e15b16e6ac9ce4c influxdata-archive_compat.key' | sha256sum -c && cat influxdata-archive_compat.key | gpg --dearmor | tee /etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg > /dev/null
echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg] https://repos.influxdata.com/debian stable main' | sudo tee /etc/apt/sources.list.d/influxdata.list
apt-get update
```

```bash
apt-get -y install telegraf
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">

1. [Téléchargez l'agent](https://docs.influxdata.com/telegraf/v1/install/) sur tous les serveurs que vous voulez superviser.

2. Installez l'agent sur les serveurs à l'aide de la commande suivante (remplacez les paramètres d'exemple par vos propres valeurs) :

```shell
.\telegraf.exe --service install --config "http://<ip_poller>:<port poller>/engine?host=<host_to_monitor>"
```

Les arguments de cette commande permettront à Telegraf de savoir où aller chercher la configuration des resources qu'il doit superviser (c'est-à-dire sur le collecteur ou sur le central suivant l'IP définie dans la commande). Le paramètre `<host_to_monitor>` est le nom de l'hôte tel qu'entré dans le champ **Nom** de sa configuration.

</TabItem>
</Tabs>

### Déployer le plugin Centreon sur l'hôte

Le plugin Centreon exécutera les contrôles sur l'hôte.

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

##### Activez les dépôts Centreon et installez le plugin

Ce dépôt permettra d'installer les plugins Centreon ainsi que **les dépendances qui ne peuvent pas être satisfaites par les dépôts standards des distributions**.

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

Sur les hôtes que vous voulez superviser, téléchargez et exécutez le [plugin pour Windows](https://github.com/centreon/centreon-nsclient-build/releases/download/20240711/centreon_plugins.exe).
Nous vous suggérons de le déposer au même emplacement que l'agent Telegraf, par exemple `C:\Program Files\InfluxData\telegraf\telegraf-1.30.3`.

</TabItem>
</Tabs>

## Étape 3 : Mettez l'hôte en supervision

### Créez l'hôte en utilisant le bon modèle

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-leur le modèle d'hôtes **OS-Linux-Telegraf-Agent-custom**.

</TabItem>
<TabItem value="Windows" label="Windows">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-leur le modèle d'hôtes **OS-Windows-Telegraf-Agent-custom**.

</TabItem>
</Tabs>

### Redémarrez l'agent

Pour que l'agent connaisse les services nouvellement créés et puisse les superviser, exécutez la commande suivante sur l'hôte :

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

```bash
systemctl restart telegraf 
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
telegraf.exe --service stop
telegraf.exe --service start
```

</TabItem>
</Tabs>
