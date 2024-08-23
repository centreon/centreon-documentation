---
id: cma
title: Centreon Monitoring Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

L'Agent de supervision Centreon (CMA) collecte des métriques et calcule des statuts sur les serveurs qu'il supervise, et les envoie à Centreon. 
Les plugins Centreon comme les plugins personnalisés basés sur Nagios sont compatibles avec l'agent. 


### Limitations

L'Agent de supervision Centreon est en phase Beta. Les limitations suivantes s'appliquent : 

* Le périmètre de supervision supporté est limité, de nouveaux contrôles (natifs) seront apportées dans la version définitive
* Une configuration manuelle est à réaliser. Celle-ci sera possible via l'interface utilisateur, et largement automarisée, dans la version définitive


### OS supportés

L'agent peut être déployé sur les OS suivants : 
<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">
* Windows 10
* Windows 11
* Windows Server 2016
* Windows Server 2019
* Windows Server 2022
</TabItem>
<TabItem value="Linux" label="Linux">
* Alma 8
* Alma 9
* Debian 11
* Debian 12
* Ubuntu 22.04 LTS
</TabItem>
</Tabs>

## Étape 1: Configurez Centreon

### Installez le connecteur de supervision

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. Sur votre serveur central, allez à la page **Configuration > Gestionnaire de connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) le connecteur de supervision **TO BE DEFINED**.

</TabItem>
<TabItem value="Windows" label="Windows">

1. Sur votre serveur central, allez à la page **Configuration > Gestionnaire de connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) le connecteur de supervision **TO BE DEFINED**.

</TabItem>
</Tabs>

### Créez le connecteur Centreon Monitoring Agent

Sur votre serveur central :

1. Allez à la page **Configuration > Commandes > Connecteurs**.
2. Créez un nouveau connecteur avec les données suivantes :

| Paramètre                  | Valeur                                                                                                                                                                                                                           |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nom du connecteur          | Centreon Monitoring Agent                                                                                                                                                                                                                          |
| Description du connecteurn | Centreon Monitoring Agent                                                                                                                                                                                                                         |
| Ligne de commande          | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Utilisé par la commande    | Entrez `TO BE DEFINED` et cliquez sur **Sélectionner tout**                                                                                                                                                                     |
| Statut du connecteur       | Activé                                                                                                                                                                                                                           |

### Configurez Engine

1. Sur le collecteur qui recevra les données de l'agent, créez le fichier suivant :

   ```shell
   touch /etc/centreon-engine/otl_server.json
   ```

2. Entrez le contenu suivant. Cela permettra au collecteur de recevoir les données en provenance de l'agent.

#### usage normal (flux entrant et sortant)

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

#### usage Reverse (flux sortant uniquement)

Cette configuration est à utiliser lorsque tout flux entrant vers le Host est proscrit, pour des raisons de sécurité (ex : DMZ).
Dans ce mode, c'est l'Agent de supervision Centreon qui va demander sa configuration au Collecteur, et les flux sont uniquement sortants.

```json
{
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":15,
      "reverse_connections":[
         {
            "host":"<POLLER ADDRESS>",
            "port":<PORT>
         }
      ]
   }
}
```

```bash
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

* Entrez l'adresse IP du collecteur dans les champs **host** et **port**. Cette adresse doit être accessible depuis le Host, et sera utilisée par l'Agent pour aller chercher sa configuration.
* Le champ **check_interval** correspond à la fréquence des contrôles effectués par l'Agent de supervision Centreon.

> Pour des raisons de simplicité, cette page ne couvre que la configuration de CMA **en mode non sécurisé**, mais vous
> trouverez la procédure pour chiffrer les communications dans la documentation du [connecteur Windows Centreon Monitoring Agent](../../procedures/TODO) ou celle du  [connecteur Linux Centreon Monitoring Agent](../../procedures/TODO).

(NOTE POUR TEAM DOC : ci-dessous le mode chiffré en normal et reverse, à décaler sur autre page ?)

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
            "ca_certificate":"/tmp/ca_1234.crt"
         }
      ]
   }
}
```


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

L'Agent de supervision Centreon est maintenant capable de communiquer avec Centreon. Vous pouvez mettre vos hôtes en supervision.

## Étape 2 : Préparez l'hôte

### Téléchargez et installez l'agent sur l'hôte


<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* TODO JC : étapes d'installation de l'agent sous Linux
* Valider quelles variables JSON sont à modifier et leur signification

1. Modifier le cma.json local (4 cas) 


Non chiffré, sans Reverse


```json
{
    "log_level":"trace",
    "endpoint":"localhost:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/tmp/var/log/centreon-engine/centreon-agent.log" 
}
```

Chiffré, sans Reverse

```json
{
    "log_level":"trace",
    "endpoint":"localhost:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/tmp/var/log/centreon-engine/centreon-agent.log" ,
  "encryption":true,
  "ca_certificate":"/tmp/ca_1234.crt"
}
```

Non chiffré, avec Reverse

```json
{
    "log_level":"trace",
    "endpoint":"localhost:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/tmp/var/log/centreon-engine/centreon-agent.log" ,
  "reverse_connection":true
}
```

Chiffré, avec Reverse

```json
{
    "log_level":"trace",
    "endpoint":"localhost:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/tmp/var/log/centreon-engine/centreon-agent.log" ,
  "reverse_connection":true,
  "encryption":true,
  "private_key":"/tmp/server_1234.key",
  "public_cert":"/tmp/server_1234.crt",
  "ca_certificate":"/tmp/ca_1234.crt"
}

```


</TabItem>
<TabItem value="Windows" label="Windows">

1. [Téléchargez l'agent](TODO JC : lien vers binaire ?) sur tous les serveurs que vous voulez superviser.

2. Exécutez le .reg

3. Modifiez la configuration de l'Agent en base de registre

TODO JC : mode reverse et normal, encrypted ou non (4 cas possibles, équivalent du cma.json)

Note : un installeur sera disponible en version définitive, afin de faciliter la configuration et le déploiement massif.

</TabItem>
</Tabs>




### Déployer les plugins Centreon sur l'hôte

Les plugin Centreon exécuteront les contrôles sur l'hôte.

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

TODO JC  chemin où déposer les plugins
</TabItem>
</Tabs>

## Étape 3 : Mettez l'hôte en supervision

### Créez l'hôte en utilisant le bon modèle

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-leur le modèle d'hôtes **OS-Linux-TO CONFIRM-Agent-custom**.

</TabItem>
<TabItem value="Windows" label="Windows">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-leur le modèle d'hôtes **OS-Windows-TO CONFIRM-Agent-custom**.

</TabItem>
</Tabs>

### Redémarrez l'agent

Pour que l'agent connaisse les services nouvellement créés et puisse les superviser, exécutez la commande suivante sur l'hôte :

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

```bash
systemctl restart centagent
```

</TabItem>
<TabItem value="Windows" label="Windows">

Redémarrer centagent.exe 

</TabItem>
</Tabs>



## Mise à jour de l'Agent

```bash
A discuter JC mécanisme cible pour GA afin que agent se mettre à jour tout seul si nouvelle version dispo en central
Zabbix le fait
```
