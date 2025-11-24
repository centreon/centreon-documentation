---
id: install-php-magento-orocommerce-profiler
title: Installer le profiler PHP / Magento / OroCommerce
--- 

# Installer le profiler PHP / Magento / OroCommerce

Le module PHP DEM se présente sous la forme d'une extension PHP et vous permettra de remonter des informations concernant le temps d'exécution de chaque partie de votre CMS.

# Pré-requis

<aside>
⚠️ Le profiler nécessite ****l’installation de l’agent système. Référez-vous à la page dédiée pour installer l’agent.

[Installer les agents systèmes](./install-system-agents.md)

</aside>

# Compatibilité

[QUANTA PHP Module Compatibility list](Installer%20le%20profiler%20PHP%20Magento%20OroCommerce%2015ba69c7c03f4aad8bd54e10d5ee8d61/QUANTA%20PHP%20Module%20Compatibility%20list%200f42fda5162b4ed7bad011eceab8f586.csv)

# Installation

<aside>
💡 Le module PHP est à installer sur chaque serveur exécutant votre application PHP.

</aside>

### Installer le module PHP DEM pour Debian / Ubuntu

Il vous faudra avoir ajouté les [dépôts DEM](https://support.quanta-monitoring.com/hc/fr/articles/360018850454#Debian), vous avez déjà dû le faire lors de l'installation de l'agent.

En fonction de votre version de PHP, il vous faudra installer le package correspondant. Voici quelques exemples:

- Pour PHP 7.3:
    
    ```bash
    apt install php73-quanta-mon
    ```
    
- Pour PHP 7.4:
    
    ```bash
    apt install php74-quanta-mon
    ```
    
- Pour PHP 8.0:
    
    ```bash
    apt install php80-quanta-mon
    ```
    
- Pour PHP 8.1:
    
    ```bash
    apt install php81-quanta-mon
    ```
    
- Pour PHP 8.2:
    
    ```bash
    apt install php82-quanta-mon
    ```
    

Vous devrez ensuite activer l'extension avec la commande:

```bash
phpenmod quanta_mon
```

### Installer le module PHP DEM pour CentOS / RedHat

Il vous faudra avoir ajouté les [dépôts DEM](https://support.quanta-monitoring.com/hc/fr/articles/360018850454#Centos), vous avez déjà dû le faire lors de l'installation de l'agent.

En fonction de votre version de PHP, il vous faudra installer le package correspondant, par exemple:

- Pour PHP 7.2:
    
    ```bash
    yum install php72-quanta-mon
    ```
    
- Pour PHP 7.3:
    
    ```bash
    yum install php73-quanta-mon
    ```
    
- Pour PHP 7.4:
    
    ```bash
    yum install php74-quanta-mon
    ```
    

Vous devrez ensuite activer l'extension avec la commande:

```bash
phpenmod quanta_mon
```

### Installer le module PHP pour les autres OS

Nous ne supportons pas officiellement de packages pour les autres OS. Néanmoins vous pouvez compiler vous-même le module, les sources sont disponibles sur Github: [https://github.com/quanta-computing/quanta-php-module](https://github.com/quanta-computing/quanta-php-module)

# Configurez l'URL de votre backoffice si vous utilisez Magento

Si vous utilisez Magento et qu'une URL customisée est utilisée pour accéder au backoffice Magento (c'est-à-dire une URL qui ne commence pas par **"/admin/"**)

Il est nécessaire de modifier la configuration du module afin que les évènements de type "Magento" remontent correctement dans DEM.

Ce fichier se trouve généralement ici pour Debian/Ubuntu:

```bash
/etc/php<VERSION>/mods-available/quanta_mon.ini
```

et là pour Centos:

```bash
/etc/php.d/quanta_mon.ini
```

Cela peut néanmoins varier en fonction de votre installation PHP.

*Par exemple, si l'URL de votre backoffice est***"http://admin.monsite.com/admin_123456/"** vous devez entrer le paramètre suivant:

```
quanta_mon.admin_url="/admin_123456/"
```

# Redémarrage du serveur web

Après l'installation du module, il vous faudra redémarrer le service web pour que l'extension PHP soit chargée et activée.

- Par exemple si vous utilisez Apache sous Debian :
    
    ```bash
    systemctl restart apache2
    ```
    
- Si vous utilisez PHP-FPM, la commande sera par exemple:
    
    ```bash
    systemctl restart php8.2-fpm
    ```
    

# Vérification du bon fonctionnement

Lorsque tout est installé, **et que le scénario de navigation web est créé dans DEM**, allez dans le menu Scénario Web, puis cliquez sur "+ détails" dans la légende sur l'une des pages nécessitant l'exécution de PHP (exemple : une page Panier qui n'est généralement jamais en cache).

Vous devriez alors voir l'onglet "Application" (autrement cet onglet est grisé) des informations concernant le temps passé dans PHP.

Dans le cas d'utilisation d'un CMS Magento (v1 ou 2) ou de la plateforme OroCommerce, le code couleur est différent. Il est orange pour Magento et jaune pour OroCommerce

<aside>
💡 Les métriques avancées (Apache, MySQL, Redis, etc…) sont à installer à part. Référez-vous à la page dédiée:

[Ajouter les métriques avancées](./add-advanced-metrics.md)

</aside>
