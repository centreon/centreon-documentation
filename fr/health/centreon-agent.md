---
id: centreon-agent
title: Installer l'Agent Centreon
---

## Introduction

L'Agent Centreon est un logiciel qui supervise sa machine hôte et les services qui y tournent.

L'Agent peut être utilisé pour superviser des serveurs qui exploitent un service Centreon On-Premise (central, serveur distant, collecteur, Map, etc.).

Les données sont envoyées vers la Plateforme Centreon Cloud. Aucune donnée personnelle n'est collectée.

>Bien que la procédure suivante et que les fichiers de configuration de l'Agent en général permettent les personnalisations, nous vous recommandons vivement de laisser les noms de fichiers, etc. tels quels.

## Prérequis

- Pour que les métriques parviennent à la Plateforme Centreon Cloud (où la supervision de la supervision est effectuée), l'Agent Centreon doit pouvoir accéder à notre endpoint public à l'adresse suivante :

    ```https://api.a.prod.mycentreon.com/v1/observability``` (port 443)

    Vous pouvez tester si votre machine peut accéder à notre endpoint à l'aide de la commande suivante :

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability
    ```

    Vous pouvez aussi faire le test en passant par un proxy avec la commande suivante :

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability \
    --proxy [protocol://]host[:port] --proxy-insecure
    ```

    Exemple :

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability \
    --proxy http://proxy.local.net:3128 --proxy-insecure
    ```


    Le message suivant sera retourné si la connexion aboutit:

    ```
    "Missing Authentication Token"
    ```

    Si vous recevez une réponse différente ou pas de réponse du tout, c'est que votre machine ne peut pas accéder à notre endpoint, probablement à cause de vos paramètres réseau (pare-feu, proxy, etc.).

    >Si un proxy est configuré sur la machine hôte, vous devez copier l'adresse et le port du proxy dans le fichier de configuration de l'Agent (voir la section [Réseau](#réseau)).

- Si une machine hôte n'a pas d'accès direct à l'extérieur, deux options complémentaires l'une de l'autre se présentent : la [configuration proxy](#configuration-proxy) et la [configuration passerelle](#configuration-en-mode-passerelle).

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

Tous les composants Centreon que vous voulez superviser (central, collecteur, serveur distant, etc.) doivent chacun avoir un Agent installé sur leur machine hôte.

### Sur un serveur central Centreon

1. Installez l'Agent :

    ```
    yum install centreon-agent
    ```

2. Si vous installez l'Agent pour la première fois sur ce serveur, générez le fichier yaml de configuration à l'aide de la commande Shell suivante :

    >Ne réalisez cette étape que si l'Agent n'a jamais été configuré. Dans le cas contraire, vous écraseriez votre configuration précédente.

    ```yaml
    /usr/sbin/centreon-agent config \
    --token [votre-jeton] \
    --type central \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Exemple :

    ```yaml
    /usr/sbin/centreon-agent config \
    --token aaaa-aaaa-aaaa-aaaa \
    --type central \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Certains paramètres ont des valeurs par défaut. Éditez le fichier `/etc/centreon-agent/centreon-agent.yml` et vérifiez les valeurs suivantes :

    - centreonengine_stats_file : le nom et le chemin du fichier sont-ils corrects (au cas où vous les auriez personnalisés sur votre plateforme)?

    - centreonbroker_stats_files : le nom et le chemin du fichier sont-ils corrects (au cas où vous les auriez personnalisés sur votre plateforme)?

    - centreonweb : les paramètres de la base de données sont-ils corrects? Le format est le suivant :

        ```yaml
        collect:
          centreonweb:
            config_dsn: [utilisateur]:[mot-de-passe]@tcp([hôtebdd])/[nombddcentreon]
            storage_dsn: [utilisateur]:[mot-de-passe]@tcp([hôtebdd])/[nombddcentreon_storage]
        ```

        Exemple :

        ```yaml
        collect:
          centreonweb:
            config_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon
            storage_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon_storage
        ```
        
        >La fonction Topologie se base sur le fichier `centreon-agent.yml` pour collecter les informations dont il a besoin : ce comportement est codé en dur. Si vous changez le nom de ce fichier YAML, la collecte échouera.

3. Ajoutez un [tag](#tags) **environment** :

    Ouvrez le fichier `/etc/centreon-agent/centreon-agent.yml` généré à l'installation et ajoutez les informations suivantes dans la section **collect**.

    ```yaml
    collect:
      tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    Exemple :
    ```yaml
    collect:
      tags:
        environment: production
    ```

    Si vous avez plusieurs environnements du même type, vous pouvez ajouter un _suffixe à votre type d'environnement (par exemple : "production_client1").

4. Activez le service **centreon-agent** :

    ```
    systemctl enable centreon-agent.service
    ```

5. Démarrez le service **centreon-agent** :

    ```
    systemctl start centreon-agent.service
    ```

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
    --token [votre-jeton] \
    --type [system|central|remote|poller|map] \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Exemple :

    ```yaml
    /usr/sbin/centreon-agent config \
    --token aaaa-aaaa-aaaa-aaaa \
    --type poller \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

3. Ajoutez un [tag](#tags) **environment** :

    Ouvrez le fichier `/etc/centreon-agent/centreon-agent.yml` généré à l'installation et ajoutez les informations suivantes dans la section **collect**.

    ```yaml
    collect:
      tags:
        environment: [staging|preproduction|production|valeur-personnalisée]
    ```

    Exemple :

    ```yaml
    collect:
      tags:
        environment: production
    ```

    Si vous avez plusieurs environnements du même type, vous pouvez ajouter un _suffixe à votre type d'environnement (par exemple : "production_client1").

4. Activez le service **centreon-agent** :

    ```
    systemctl enable centreon-agent.service
    ```

5. Démarrez le service **centreon-agent** :

    ```
    systemctl start centreon-agent.service
    ```

7. Vous pouvez maintenant [configurer votre Agent](#configurer-lagent) (passerelle, proxy etc.), puis [tester](#tester-lagent) votre configuration générale.

## Configurer l'Agent

### Réseau

Si un Agent n'a pas d'accès direct à l'extérieur, deux options vous permettent de résoudre le problème : l'accès via un proxy HTTP et/ou l'accès en mode passerelle. Dans ce dernier, l'Agent qui a besoin d'accéder à l'extérieur (appelé "Passerelle cliente") peut passer par un autre Agent pouvant accéder à l'extérieur (appelé "Passerelle serveur").

**Exemple** 

Votre infrastructure est protégée (en milieu fermé) et un serveur proxy gère tout le trafic sortant. Vous voulez donner accès à l'extérieur uniquement à l'Agent installé sur la machine hôte du serveur central Centreon. Dans ce cas, vous pourriez configurer votre réseau de la manière suivante :

- Configurez le proxy sur l'Agent du serveur central pour lui permettre d'accéder à l'extérieur

- Configurez cet Agent en tant que passerelle serveur

- Configurez tous les autres Agents (installés sur les collecteurs, serveurs distants, MAP, etc.) en tant que passerelles clientes

#### Configuration proxy

Si un accès proxy est configuré sur la machine hôte, copiez les paramètres du proxy dans le fichier `/etc/centreon-agent/centreon-agent.yml` à l'endroit suivant :

```yaml
output:
  token: [votre-jeton]
  proxy_url: [addresse-du-proxy]:[port]
  proxy_ssl_insecure: [true|false]
```

Exemple :

```yaml
output:
  token: aaaa-aaaa-aaaa-aaaa
  proxy_url: http//proxy.local.net:3128
  proxy_ssl_insecure: false
```

Redémarrez ensuite l'Agent:

```
systemctl restart centreon-agent.service
```

#### Configuration en mode passerelle

- Passerelle Serveur: copiez le code suivant dans le fichier `/etc/centreon-agent/centreon-agent.yml` de l'Agent qui tiendra le rôle de passerelle serveur. Pour renforcer la sécurité des échanges entre la passerelle client et la passerelle serveur, vous pouvez définir un jeton d'authentification `auth-token`, c'est-à-dire la chaîne de caractères de votre choix (différente du jeton que vous avez entré pour configurer le fichier `centreon-agent.yml`).

    ```yaml
    gateway:
      enable: true
      listen_port: [port-d-écoute]
      auth_token: [votre-jeton-de-passerelle]
    ```
    
    Example:

    ```yaml
    gateway:
      enable: true
      listen_port: 54321
      auth_token: azerty1234
    ```

    Redémarrez ensuite l'Agent :

    ```
    systemctl restart centreon-agent.service
    ```

- Passerelle cliente

    En mode passerelle, la passerelle cliente délègue la configuration de son jeton principal à la passerelle serveur (puisque seule celle-ci communique avec la Plateforme Centreon Cloud). En conséquence, commentez la ligne `token` à l'aide de l'opérateur yaml “#”.
    Si vous avez défini un jeton d'authentification (`auth_token`) sur la passerelle serveur, vous devez également l'ajouter à la configuration de la passerelle cliente. 

    ```yaml
    output:
    #token: [votre-jeton]
      gateway:
        url: http://[addresse-ip-de-la-passerelle-serveur]:[port-d-écoute]
        auth_token: [votre-jeton-de-passerelle]
    ```

    Exemple :

    ```yaml
    output:
    #token: aaaa-aaaa-aaaa-aaaa
      gateway:
        url: http://172.28.6.145:54321
        auth_token: azerty1234
    ```

    Redémarrez ensuite l'Agent :

    ```
    systemctl restart centreon-agent.service
    ```

### Activer la collecte de logs Centreon

À partir de la version 2 de **centreon-agent**, il est possible de récupérer les logs générés par le composant Centreon supervisé. 

Pour définir quels logs doivent être récupérés, vous devez créer des fichiers yml de configuration dans le dossier suivant : `/etc/centreon-agent/conf.d`.
Pour récupérer un log précis, le fichier de configuration doit contenir les arguments suivants : `path`, `type` et `pattern` du log choisi. Exemple :

```
- path: /var/log/centreon-gorgone/gorgoned.log
  pattern: "%{CENTREONGORGONE}"
  type: file
```

Vous pouvez avoir plusieurs fichiers de configuration (chaque fichier est analysé et les fichiers de logs définis sont ajoutés à la collecte).

#### Utiliser les modèles

Pour simplifier la configuration de la collecte de logs, des modèles pré-configurés sont fournis. Chaque modèle couvre un périmètre spécifique en fonction du composant Centreon, de sa version, etc.

Les modèles sont situés dans le répertoire suivant :

```
/usr/share/centreon-agent/examples
```

Suivant le composant Centreon supervisé, vous pouvez simplement copier-coller le modèle correspondant dans votre répertoire `/etc/centreon-agent/conf.d`.

#### Finaliser la configuration des modèles

>Pour les collecteurs Centreon, les fichiers de log sont préfixés du nom du collecteur. Vous devez donc adapter le modèle.
>Ouvrez le modèle `poller` et remplacez tous les noms génériques `POLLERNAME` dans la section `path` par le vrai nom du collecteur.

Les modèles fournis fonctionneront directement avec une installation Centreon standard. En cas de doute, vous pouvez localiser le fichier de log désiré et comparer son chemin avec celui indiqué dans la section `path` du modèle.

En cas d'erreurs, vous trouverez des explications détaillées du problème dans les logs de **centreon-agent** dans `/var/log/centreon-agent/centreon-agent.log`.

#### Démarrer la collecte des logs

Une fois la collecte de vos logs configurée, redémarrez l'agent en utilisant la commande suivante :

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
    environment: [staging|preproduction|production|valeur-personnalisée]
    [tag2]: [valeur-personnalisée2]    
    [tag3]: [valeur-personnalisée3]
```

```yaml
collect:
  tags:
    environment: production
    City: Paris   
```

Redémarrez ensuite l'Agent :

```
systemctl restart centreon-agent.service
```

### Base de données déportée

Si le composant Centreon supervisé par l'Agent est configuré avec une base de donnée spécifique ou déportée, vous pouvez spécifier l'accès à la base de données dans le fichier YAML `/etc/centreon-agent/centreon-agent.yml` généré à l'installation.

```yaml
collect:
    centreonweb:
        config_dsn: [utilisateur]:[mot-de-passe]@tcp([hôtebdd])/[nombddcentreon]
        storage_dsn: [utilisateur]:[mot-de-passe]@tcp([hôtebdd])/[nombddcentreon_storage]
```

Exemple :

```yaml
collect:
    centreonweb:
      config_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon
      storage_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon_storage

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

### Tester le service centreon-agent

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

### Tester la collecte de données

Une fois l'installation et la configuration terminées, vous pouvez utiliser la commande suivante pour forcer la collecte de données :

```
centreon-agent sample
```

Le résultat devrait ressembler à ça :

```
1624977737000000// centreonengine_uptime_seconds{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 693583
1624977737000000// centreonengine_command_buffers_used{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
1624977737000000// centreonengine_command_buffers_high{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
1624977737000000// centreonengine_command_buffers_total{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 4096
1624977737000000// centreonengine_external_command_1m{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
1624977737000000// centreonengine_general_external_command_5m{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
```

Si vous obtenez des erreurs en testant la collecte, les logs du fichier `/var/log/centreon-agent/centreon-agent.log` peuvent vous aider à résoudre le problème.

### Tester l'accès à la Plateforme Centreon Cloud

Une fois l'installation et la configuration terminées, utilisez la commande suivante pour tester la connexion entre l'Agent et la Plateforme Centreon Cloud :

```
centreon-agent ping --config [chemin vers votre fichier centreon-agent.yml]
```

L'Agent retournera l'un des messages suivants :

- **Unable to reach the Centreon Cloud Platform, check your network configuration** : vérifiez votre configuration réseau (proxy etc.)

- **Centreon Cloud Platform reached successfully but your token is not recognized** : votre jeton n'est pas reconnu

- **Centreon Cloud Platform reached successfully and authentication was successful** : l'Agent est bien connecté à notre plateforme.

## Mettre à jour l'Agent

Pour mettre à jour l'Agent, entrez :

```
yum update centreon-agent
```
