---
id: add-advanced-metrics
title: Ajouter les métriques avancées
--- 

L'agent Experience Monitoring dispose de modules (ou agents applicatifs), permettant de récupérer des données systèmes sur différents composants de votre infrastructure tels que vos services Apache, MySQL, Redis, Varnish, PostgreSQL, etc.

Ces agents applicatifs sont à installer **après** l’installation de l’agent système. Référez-vous à la page dédiée pour [installer les agents systèmes](./install-system-agents.md).

## Apache

1. Installez le package
*Sur Debian*
    
    ```bash
    apt-get install quanta-agent-apache
    ```
    
    *Sur CentOS*
    
    ```bash
    yum install quanta-agent-apache
    ```
    
2. Vérifiez que le module de status (*mod_status* d’Apache) est correctement configuré sur votre serveur avec la commande:
    
    ```
    curl http://127.0.0.1/server-status
    ```
    
3. Si ce n'est pas le cas, il faudra [mettre en place le module **mod_status** d'Apache](https://httpd.apache.org/docs/current/fr/mod/mod_status.html).
4. Si vous souhaitez modifier l'URL utilisée par notre module, vous pouvez modifier le fichier: ***/etc/quanta/modules.d/apache.yml***
5. Redémarrez l'agent
    
    ```bash
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

## MySQL

1. Installez le package
*Sur Debian*
    
    ```bash
    apt-get install quanta-agent-mysql
    ```
    
    *Sur CentOS*
    
    ```bash
    yum install quanta-agent-mysql
    ```
    
2. Nous vous recommandons de créer un utilisateur MySQL dédié à notre sonde, bien que ce ne soit pas obligatoire. Pour ce faire utilisez par exemple la commande ci-dessous:
    
    ```bash
    echo "CREATE USER quanta@localhost IDENTIFIED BY 'supersecret'; " | mysql -u root -p
    ```
    
3. Renseignez le nom d'utilisateur et le mot de passe que vous avez choisi dans le fichier: **/etc/quanta/modules.d/mysqlstat.yml**
4. Redémarrez l'agent
    
    ```bash
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

## PostgreSQL

1. Installez le package
*Sur Debian*
    
    ```bash
    apt-get install quanta-agent-postgresql
    ```
    
    *Sur CentOS*
    
    ```bash
    yum install quanta-agent-postgresql
    ```
    
2. Nous vous recommandons de créer un utilisateur PostgreSQL dédié à notre sonde, bien que ce ne soit pas obligatoire. Pour ce faire utilisez par exemple la commande ci-dessous:
    
    ```bash
    echo "CREATE ROLE quanta LOGIN password 'supersecret';" | sudo -u postgres psql postgres
    ```
    
3. Renseignez le nom d'utilisateur et le mot de passe que vous avez choisi dans le fichier: **/etc/quanta/modules.d/postgresql.yml**
4. Redémarrez l'agent
    
    ```
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

## Nginx

1. Installez le package
*Sur Debian*
    
    ```
    apt-get install quanta-agent-nginx
    ```
    
    *Sur CentOS*
    
    ```
    yum install quanta-agent-nginx
    ```
    
2. Vérifiez que le module de status est correctement configuré sur votre serveur avec la commande:
    
    ```
    curl http://127.0.0.1/status
    ```
    
3. Si ce n'est pas le cas, il faudra mettre en place la bonne configuration comme décrit [ici](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html).
4. Si vous souhaitez modifier l'URL utilisée par notre module, vous pouvez modifier le fichier: ***/etc/quanta/modules.d/nginx.yml***
5. Redémarrez l'agent
    
    ```
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

## Varnish

1. Installez le package
*Sur Debian*
    
    ```
    apt-get install quanta-agent-varnish
    ```
    
    *Sur CentOS*
    
    ```
    yum install quanta-agent-varnish
    ```
    
2. Si vous utilisez plusieurs instances Varnish, il faut indiquer pour quelle instance vous souhaitez remonter les données vers Experience Monitoring en ajoutant les lignes suivantes à la fin du fichier **/etc/quanta/modules.d/varnish.yml**
    
    ```
    varnish:
        instance: nom_de_votre_instance
    ```
    
3. Redémarrez l'agent
    
    ```
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

## Redis

1. Installez le package
*Sur Debian*
    
    ```
    apt-get install quanta-agent-redis
    ```
    
    *Sur CentOS*
    
    ```
    yum install quanta-agent-redis
    ```
    
2. Si vous n'utilisez pas le port par défaut (6379), éditez le fichier **/etc/quanta/modules.d/redis.yml**
3. Si vous utilisez de l'authentification Redis, il faut décommenter la ligne et indiquer le mot de passe dans le fichier **/etc/quanta/modules.d/redis.yml**
    
    ```
    auth: password
    ```
    
4. Si vous utilisez plusieurs instances Redis, il faut indiquer pour quelle instance vous souhaitez remonter les données vers Experience Monitoring en ajoutant les lignes suivantes à la fin du fichier **/etc/quanta/modules.d/redis.yml**
    
    ```
    instance: nom_de_votre_instance
    ```
    
5. Redémarrez l'agent
    
    ```
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

## Memcached

1. Installez le package
*Sur Debian*
    
    ```
    apt-get install quanta-agent-memcached
    ```
    
    *Sur CentOS*
    
    ```
    yum install quanta-agent-memcached
    ```
    
2. Si vous n'utilisez pas le port par défaut (11211), éditez le fichier **/etc/quanta/modules.d/memcached.yml**
3. Redémarrez l'agent

    
    ```
    systemctl restart quanta-agent
    ```
    

Vous devriez voir des métriques apparaître dans Experience Monitoring sous quelques minutes.

>Le profileur PHP est à installer à part. Référez-vous à la page dédiée pour [installer le profiler PHP / Magento / OroCommerce](./install-php-magento-orocommerce-profiler.md).

