---
id: map-web-troubleshooting
title: Dépannage de MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page présente quelques recommandations pour résoudre des incidents lors de l'installation de MAP.

## Erreur « Echec d'authentification » lors de la connexion à la page d'accueil MAP

#### Symptôme

Une erreur « Echec d'authentification » se produit à la page d'accueil de MAP lors de la tentative de connexion au service Centreon MAP.

#### Problème

Les informations d'identification utilisées par l'utilisateur **Web interface** (définies lors de l'installation) pour se connecter au module MAP ne sont plus valides car elles ont été modifiées, probablement suite à l'expiration du mot de passe.

#### Solution

Vous pouvez mettre à jour le mot de passe en accédant à ce fichier : **/etc/centreon-map/map-config.properties**.

## La configuration MAP ne fonctionne pas en HTTPS

#### Symptôme

La configuration du module MAP ne fonctionne pas. Ce problème se produit lorsque le module MAP est installé sur le serveur central Centreon alors que la plateforme MAP est sécurisée en HTTPS.

#### Problème

La configuration MAP n'est pas définie en TLS.

#### Solution

Si vous utilisez IPv6, vous devez forcer le serveur MAP à utiliser IPv4. 

1. Accédez au fichier **/etc/centreon-map/centreon-map.conf**.

2. Modifiez le fichier en ajoutant l'option suivante :

  ```shell
  RUN_ARGS="--spring.profiles.active=prod,tls"
  JAVA_OPTS="-Djava.net.preferIPv4Stack=true -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/centreon-map -Dcentreon-map.signing-key=8uT4BM1RsXRmIPQbTEazUAhQHtyM7xZ4nlFMIUqQ7lRkbWz24yemkGs9tS4eOwDfF -Dcentreon-map.access-token-validity-seconds=15552000 -Xms512m -Xmx4G"
  ``` 

## Vérifier que vous avez installé les bons RPMs

1. Exécutez la commande suivante :

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```shell
  dnf info centreon-map-web-client
  dnf info centreon-map-engine
  ```
  
  </TabItem>
  <TabItem value="CentOS 7" label="CentOS 7">

  ```shell
  yum info centreon-map-web-client
  yum info centreon-map-engine
  ``` 
  
  </TabItem>
  <TabItem value="Debian" label="Debian">

  ```shell
  apt info centreon-map-web-client
  apt info centreon-map-engine
  ``` 
  
  </TabItem>
  </Tabs>

2. En sortie, **Repository** doit afficher **centreon-stable-noarch**. Si ce n'est pas le cas, vous n'avez pas installé les bons paquets. Procédez donc comme suit :

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```shell
  sudo dnf install centreon-map-web-client
  ```
  
  </TabItem>
  <TabItem value="CentOS 7" label="CentOS 7">
  
  ```shell
  sudo yum install centreon-map-web-client
  ```
  
  </TabItem>
  <TabItem value="Debian" label="Debian">
  
  ```shell
  sudo apt install centreon-map-web-client
  ```
  
  </TabItem>
  </Tabs>

## Augmenter le niveau des logs

1. Pour augmenter le niveau des logs, éditez le fichier **/etc/centreon-map/map-log.xml** en passant les entrées suivantes en INFO :

  ```shell
  <logger name="com.centreon.studio" level="INFO" />
  <logger name="org.springframework" level="INFO" />
  <logger name="org.springframework.web" level="INFO" />
  <logger name="org.apache" level="INFO" />
  ```
  
2. Redémarrez le serveur **centreon-map-engine** :

  ```shell
  systemctl restart centreon-map-engine
  ```

## Exécuter notre outil de diagnostic

1. Exécutez le script suivant :

  ```shell
  cd /etc/centreon-map
  ./diagnostic.sh
  ```
  
  Toutes les entrées doivent avoir pour valeur **OK** ou **INFO**.

2. Essayez de résoudre les erreurs en suivant les instructions ci-dessous.

> Si l'erreur persiste, envoyez-nous les résultats complets du script (voir la section [Toujours bloqué ?](#toujours-bloqué)).
 
Voici les principales erreurs que vous pouvez rencontrer :

- Connexion à la base de données ou authentification : si la connexion ne fonctionne pas, vérifiez vos informations d'identification, votre réseau et vos utilisateurs mysql.

  ```shell
  ########## Database connection ##########

  [ok]   Connection to centreon
  [ok]   Connection to centreon_storage
  [ok]   Connection to centreon_map
  ```

- Connexion à la sortie Broker : si elle ne fonctionne pas, vérifiez la configuration de la sortie Broker, le réseau et la configuration TLS (si utilisée).

  ```shell
  ########## Broker connection ##########
  
  [ok]   Connection to 127.0.0.1 5758 port
   ```

- Connexion ou authentification de MAP au serveur central : si cela ne fonctionne pas, vérifiez vos informations d'identification, votre réseau, vos proxys et votre configuration TLS (si vous l'utilisez).

  ```shell
  ########## Authentication ##########
  
  [ok]   Centreon Central authentication using user admin
  ``` 

## Dépanner à l'aide de l'interface web

1. Assurez-vous que l'URL spécifiée dans **Administration > Extensions > MAP > Options** est accessible (à la fois accessible et résolue) depuis l'ordinateur accédant à l'interface web.

2. Vérifiez le statut de MAP en accédant à l'URL suivante dans le navigateur (utilisez les mêmes valeurs pour **MAP_IP_ADDRESS** et **MAP_PORT** que celles définies dans **Administration > Extensions > MAP > Options**).

  ```shell
  http://[MAP_IP_ADDRESS]:[MAP_PORT]/centreon-map/api/beta/actuator/health
  ```
  
  Exemple:
  
  ```shell
  http://10.0.0.2:8081/centreon-map/api/beta/actuator/health
  ```
  
  Le résultat doit être le suivant :
  
  ```shell
  {
    "status" : "UP"
  }
  ```
  
  > Si ce n'est pas le cas, veuillez envoyer une capture d'écran de l'erreur (voir la section [Toujours bloqué ?](#toujours-bloqué)).

## Toujours bloqué ?

Si vous avez toujours besoin d'aide, veuillez contacter l'[équipe support de Centreon](https://support.centreon.com/) en fournissant les informations de base sur la manière dont Centreon MAP est installé.

Voici un exemple d'installation standard :

|            | Central | MAP | MAP (Legacy) |
|------------|------|--------|--------|
|Y a-t-il une connexion directe entre cet élément et le central (sont-ils sur le même réseau ?)|n/a|Y|Y|
|Cet élément est-il installé sur le même serveur que le central ?   |n/a|Y|N|
|Le protocole HTTPS est-il activé ?  |Y|Y|Y|
|Est-ce une nouvelle installation ? |N|Y|N|

### Résultat du script diagnostic.sh

Voir ci-dessus [Exécuter notre outil de diagnostic](#exécuter-notre-outil-de-diagnostic) et envoyez le résultat complet du script à l'[équipe support de Centreon](https://support.centreon.com/).

Fournissez les fichiers de logs suivants (chemins par défaut) :

  - Centreon MAP Engine server :
   
   ```shell
   /var/log/centreon-map/centreon-map-engine.log
   ```

  - Centreon Central server :
   ```shell
   /var/log/php-fpm/centreon-error.log
   ```

### Captures d'écran de l'interface web

Si vous rencontrez des problèmes sur l'interface web, veuillez fournir des captures d'écran de l'interface présentant l'erreur, avec l'outil de développement du navigateur ouvert sur les onglets suivants :
  
  - Onglet Réseau (touche F12), si possible filtré sur les requêtes qui échouent.
  - Onglet Console (touche F12), si possible filtré sur les erreurs.

### Résultat de la commande `yum list`

Exécutez les commandes suivantes et transmettez le résultat au support :

  - Sur le central :
  
  ```shell
  yum list centreon-map-web-client --showduplicates -q
  ```
    
  - Sur le serveur où **centreon-map-engine** est installé :
  
  ```shell
  yum list centreon-map-engine --showduplicates -q
  ```
