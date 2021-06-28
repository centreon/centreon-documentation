---
id: centreon-agent
title: Installer l'Agent Centreon
---

## Introduction

L'Agent Centreon est un logiciel qui supervise sa machine hôte et les services qui y tournent.

L'Agent est utilisé pour superviser des serveurs qui exploitent un service Centreon On-Premise (central, serveur distant, collecteur, Map, etc.).

Les données sont envoyées vers notre plateforme d'analyse. Aucune donnée personnelle n'est collectée.

>Bien que la procédure suivante et que les fichiers de configuration de l'Agent en général permettent les personnalisations, nous vous recommandons vivement de laisser les noms de fichiers, etc. tels quels.

## Prérequis

- Pour que les métriques parviennent à notre plateforme d'analyse (où la supervision de la supervision est effectuée), les Agents Centreon doivent pouvoir accéder à notre endpoint public à l'adresse suivante :

    ```https://api.a.prod.mycentreon.com/v1/observability``` (port 443)

    Vous pouvez tester si votre machine peut accéder à notre endpoint à l'aide de la commande suivante :

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability
    ```

    Vous pouvez aussi configurer un proxy avec la commande suivante :

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability \
    --proxy [protocol://]host[:port] --proxy-insecure
    ```

    Le message suivant sera retourné si la connexion aboutit:

    ```
    "Missing Authentication Token"
    ```

    Si vous recevez une réponse différente ou pas de réponse du tout, c'est que votre machine ne peut pas accéder à notre endpoint, probablement à cause de vos paramètres réseau (pare-feu, proxy, etc.).

    >Si un proxy est configuré sur la machine hôte, vous devez copier l'adresse et le port du proxy dans le fichier de configuration de l'Agent (voir la section [Network](#network)).

- Si une machine hôte n'a pas d'accès direct à l'extérieur, deux options complémentaires l'une de l'autre se présentent : la [configuration proxy](#proxy-configuration) et la [configuration passerelle](#gateway-configuration).

- Les fichiers RPM sont disponibles sur les dépôts Centreon officiels des versions actuellement supportées. Le dépôt Centreon officiel doit être installé :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

- Vous devez être en possession de votre jeton unique vous permettant d'envoyer des données vers notre plateforme. Ce jeton vous est fourni par notre équipe support.

## Installer l'Agent

- Le RPM **centreon-helios** n'a besoin d'être installé que sur le serveur central. En effet, la topologie est collectée depuis le serveur central (c'est-à-dire une carte de tous les éléments Centreon et de leurs canaux de communication).

- Tous les composants Centreon que vous voulez superviser (central, collecteur, serveur distant, etc.) doivent chacun avoir un Agent installé sur leur machine hôte.

### Sur un serveur central Centreon

1. Installez **centreon-helios**:

    ```
    yum install centreon-helios
    ```

2. Si vous installez l'Agent pour la première fois sur ce serveur, générez le fichier yaml de configuration à l'aide de la commande Shell suivante :

    >Ne réalisez cette étape que si l'Agent n'a jamais été configuré. Dans le cas contraire, vous écraseriez votre configuration précédente.

    ```
    /usr/sbin/centreon-agent config \
    --token [your-token] \
    --type central \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Certains paramètres ont des valeurs par défaut. Éditez le fichier `/etc/centreon-agent/centreon-agent.yml` et vérifiez les valeurs suivantes :

    - centreonengine_stats_file : le nom et le chemin du fichier sont-ils corrects (au cas où vous les auriez personnalisés sur votre plateforme)?

    - centreonbroker_stats_files : le nom et le chemin du fichier sont-ils corrects (au cas où vous les auriez personnalisés sur votre plateforme)?

    - centreonweb : les paramètres de la base de données sont-ils corrects? Le format est le suivant :

        ```
        collect:
            centreonweb:
            config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]
            storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]
        ```

3. Ajoutez un tag **environment** :

    Ouvrez le fichier `/etc/centreon-agent/centreon-agent.yml` généré à l'installation et ajoutez les informations suivantes dans la section **collect**.

    ```
    collect:
    tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    Si vous avez plusieurs environnements du même type, vous pouvez ajouter un _suffixe à votre type d'environnement (par exemple : "production_client1").

4. Activez le service **centreon-agent** :

    ```
    systemctl enable centreon-agent.service
    ```

5. Démarrez le service **centreon-agent** :

    ```
    systemctl restart centreon-agent.service
    ```

6. Pour activer la programmation de la collecte de la topologie, éditez le fichier cron `/etc/cron.d/centreon-helios` et décommentez la ligne suivante (c'est-à-dire supprimez le caractère #) :

    ```
    0 0 * * * centreon /usr/sbin/centreon-helios.phar
    ```

    >Si une version précédente de l'Agent est déjà installée sur la machine, la ligne à décommenter peut être différente : remplacez cette ligne par celle fournie ci-dessus.

    >La fonction Topologie se base sur le fichier `centreon-agent.yml` pour collecter les informations dont il a besoin : ce comportement est codé en dur. Si vous changez le nom de ce fichier YAML, la collecte échouera.

7. Vous pouvez maintenant [configurer votre Agent](#configurer-lagent) (passerelle, proxy etc.), puis [tester](#tester-lagent) votre configuration générale.

### Sur d'autres machines hôtes (serveur distant, collecteur, MAP, etc.)

1. Installez l'Agent:

    ```
    yum install centreon-agent
    ```

2. Si vous installez l'Agent pour la première fois sur ce serveur, configurez le fichier `centreon-agent.yml` :

    >Ne réalisez cette étape que si l'Agent n'a jamais été configuré. Dans le cas contraire, vous écraseriez votre configuration précédente.

    ```yaml
    /usr/sbin/centreon-agent config \
    --token [your-token] \
    --type [system|central|remote|poller|map] \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

3. Ajoutez un tag **environment** :

    Ouvrez le fichier `/etc/centreon-agent/centreon-agent.yml` généré à l'installation et ajoutez les informations suivantes dans la section **collect**.

    ```yaml
    collect:
    tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    Si vous avez plusieurs environnements du même type, vous pouvez ajouter un _suffixe à votre type d'environnement (par exemple : "production_client1").

4. Activez le service **centreon-agent** :

    ```
    systemctl enable centreon-agent.service
    ```

5. Démarrez le service **centreon-agent** :

    ```
    systemctl restart centreon-agent.service
    ```

7. Vous pouvez maintenant [configurer votre Agent](#configurer-lagent) (passerelle, proxy etc.), puis [tester](#tester-lagent) votre configuration générale.

## Configurer l'Agent

### Réseau

Si un Agent n'a pas d'accès direct à l'extérieur, deux options vous permettent de résoudre le problème : l'accès via un proxy HTTP et/ou l'accès en mode passerelle. Dans ce dernier, l'Agent qui a besoin d'accéder à l'extérieur (appelé "Passerelle cliente") peut passer par un autre Agent pouvant accéder à l'extérieur (appelé "Passerelle serveur").

>**Exemple classique**: Votre infrastructure est protégée (en milieu fermé) et un serveur proxy gère tout le trafic sortant. Vous voulez donner accès à l'extérieur uniquement à l'Agent installé sur la machine hôte du serveur central Centreon. Dans ce cas, vous pourriez configurer votre réseau de la manière suivante :
>
><ul><li>Configurez le proxy sur l'Agent du serveur central pour lui permettre d'accéder à l'extérieur</li>
>
><li>Configurez cet Agent en tant que passerelle serveur</li>
>
><li>Configurez tous les autres Agents (installés sur les collecteurs, serveurs distants, MAP, etc.) en tant que passerelles clientes</li></ul>

#### Configuration proxy

Si un accès proxy est configuré sur la machine hôte, copiez les paramètres du proxy dans le fichier `/etc/centreon-agent/centreon-agent.yml` à l'endroit suivant :

```
cmass:
  token: [your-token]
  proxy_url: [your-proxy-address]:[your-desired-port]
  proxy_ssl_insecure: [true|false]
```

Redémarrez ensuite l'Agent:

```
systemctl restart centreon-agent.service
```

#### Configuration en mode passerelle

- Passerelle Serveur: copiez le code suivant dans le fichier `/etc/centreon-agent/centreon-agent.yml` de l'Agent qui tiendra le rôle de passerelle serveur :

    ```
    gateway:
    enable: true
    listen_port: [listening-port]
    ```

    Redémarrez ensuite l'Agent :

    ```
    systemctl restart centreon-agent.service
    ```

- Passerelle cliente

    En mode passerelle, la passerelle cliente délègue la configuration de son jeton à la passerelle serveur (puisque seule celle-ci communique avec la plateforme d'analyse). En conséquence, commentez la ligne “token” à l'aide de l'opérateur yaml “#”.

    ```
    cmass:
    #token: [your-token]
    gateway:
        url: http://[gateway-server-ip-address]:[listening-port]
    ```

    Redémarrez ensuite l'Agent :

    ```
    systemctl restart centreon-agent.service
    ```

### Tags

L'Agent peut contextualizer la collecte de données avec vos propres tags personnalisés afin de définir son périmètre d'action. Ces tags seront utilisés par la suite pour agréger les données de supervision et créer des tableaux de bord ou des rapports dans des contextes pertinents.

>Nous recommandons fortement que le premier tag que vous définissiez soit “environment” afin de disposer d'une référence commune à tous les utilisateurs.

Les tags peuvent être configurés dans le fichier YAML `/etc/centreon-agent/centreon-agent.yml` généré à l'installation :

```yaml
collect:
  tags:
    environment: [staging|preproduction|production|your-custom-value]
    [tag2]: [your-custom-value2]    
    [tag3]: [your-custom-value3]
```

Redémarrez ensuite l'Agent :

```
systemctl restart centreon-agent.service
```

### Base de données déportée

Si le composant Centreon supervisé par l'Agent est configuré avec une base de donnée spécifique ou déportée, vous pouvez spécifier l'accès à la base de données dans le fichier YAML `/etc/centreon-agent/centreon-agent.yml` généré à l'installation.

```
collect:
    centreonweb:
      config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]
      storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]
```

Redémarrez ensuite l'Agent :

```
systemctl restart centreon-agent.service
```

### Rotation des logs

L'Agent enregistre toute activité (nominale ou en erreur) dans le fichier `/var/log/centreon-agent/centreon-agent.log`.

Par défaut, un fichier `/etc/logrotate.d/centreon-agent` a été créé à l'installation et configuré de la manière suivante :

```
/var/log/centreon-agent/centreon-agent.log {
  daily
  copytruncate
  rotate 7
  compress
}
```

Vous pouvez le laisser ainsi ou bien ajuster la politique de rotation des logs pour mieux correspondre à vos besoins en utilisant les paramètres de [logrotate](https://www.unix.com/man-page/redhat/8/LOGROTATE/).

## Tester l'Agent

### Service centreon-agent

À cette étape, le service **centreon-agent** doit tourner, et être paramétré pour se lancer au démarrage du système.
La commande suivante vérifie que le service a été configuré correctement :

```
systemctl status centreon-agent
```

Si tout s'est bien passé, le résultat ressemblera à l'exemple suivant :

```
systemctl status centreon-agent
● centreon-agent.service - The Centreon Agent collect metrics and send them to Centreon SaaS Platform
   Loaded: loaded (/etc/systemd/system/centreon-agent.service; enabled; vendor preset: disabled)
   Active: active (running) since ven. 2019-11-08 14:52:26 CET; 5 days ago
 Main PID: 22331 (centreon-agent)
   CGroup: /system.slice/centreon-agent.service
           └─22331 /usr/sbin/centreon-agent run
```

### Collecte de données

Une fois l'installation et la configuration terminées, vous pouvez utiliser la commande suivante pour forcer la collecte de données :

```
centreon-agent sample
```

Si vous obtenez des erreurs en testant la collecte, les logs du fichier `/var/log/centreon-agent/centreon-agent.log` peuvent vous aider à résoudre le problème.

### Envoi des données

Une fois l'installation et la configuration terminées, utilisez la commande suivante pour tester la connexion entre l'Agent et la plateforme Centreon Cloud :

```
centreon-agent ping --config [chemin vers votre fichier centreon-agent.yml]
```

L'Agent retournera l'un des messages suivants :

- **Unable to reach the platform**: vérifiez votre configuration réseau (proxy etc.)

- **Platform reached but authentication failed**: votre jeton n'est pas reconnu

- **Platform reached and authentication successful**: l'Agent est bien connecté à notre plateforme.

### Topologie

Par défaut, la topologie est programmée pour être collectée toutes les heures.
Utilisez la commande suivante pour forcer manuellement la collecte de la topologie et l'envoyer à notre plateforme :

```
/usr/sbin/centreon-helios.phar
```
 