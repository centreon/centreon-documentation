---
id: install-php-magento-orocommerce-profiler
title: Installer le profileur PHP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Ce module sera bientôt déprécié.

Le profileur PHP vous permet de collecter des informations détaillées sur le temps d'exécution de chaque partie d'une application PHP (par exemple, Magento, Orocommerce...). Les données collectées s'afficheront dans un onglet dédié de la page **Données système**.

## Prérequis

> Avant d'installer le profileur PHP, vous devez installer l'[agent système](./install-system-agents.md).

## Compatibilité

| Distribution | Version OS | Version PHP | Module PHP Experience Monitoring |
|--------------|------------|-------------|-------------------|
| Debian | Buster (10) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Debian | Bullseye (11) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Debian | Bookworm (12) | 7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Ubuntu | Jammy (22.04) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Ubuntu | Kinetic (22.10) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Ubuntu | Lunar (23.04) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |

## Installation

> Le module PHP doit être installé sur chaque serveur exécutant votre application PHP.

### Étape 1 : installation du paquet

<Tabs groupId="os">
<TabItem value="Debian/Ubuntu" label="Debian/Ubuntu">

Vous devez avoir ajouté les dépôts Experience Monitoring, ce que vous devriez déjà avoir fait lors de l’installation de l’agent système.

En fonction de votre version de PHP, installez le paquet correspondant. Voici quelques exemples :

- Pour PHP 7.3 :

    ```bash
    apt install php73-quanta-mon
    ```

- Pour PHP 7.4 :

    ```bash
    apt install php74-quanta-mon
    ```

- Pour PHP 8.0 :

    ```bash
    apt install php80-quanta-mon
    ```

- Pour PHP 8.1 :

    ```bash
    apt install php81-quanta-mon
    ```

- Pour PHP 8.2 :

    ```bash
    apt install php82-quanta-mon
    ```

Ensuite, activez l'extension à l'aide de la commande suivante :

```bash
phpenmod quanta_mon
```

</TabItem>
<TabItem value="CentOS/RedHat" label="CentOS/RedHat">

Vous devez avoir ajouté les dépôts Experience Monitoring, ce que vous devriez déjà avoir fait lors de l'installation de l'agent système.

En fonction de votre version de PHP, installez le paquet correspondant, par exemple :

- Pour PHP 7.2 :

    ```bash
    yum install php72-quanta-mon
    ```

- Pour PHP 7.3 :

    ```bash
    yum install php73-quanta-mon
    ```

- Pour PHP 7.4 :

    ```bash
    yum install php74-quanta-mon
    ```

Ensuite, activez l'extension à l'aide de la commande suivante :

```bash
phpenmod quanta_mon
```

</TabItem>
<TabItem value="Autres systèmes d'exploitation" label="Autres systèmes d'exploitation">

Nous ne supportons pas officiellement de paquets destinés à d'autres systèmes d'exploitation. Vous pouvez toutefois compiler le module vous-même, car le code source est [disponible sur GitHub](https://github.com/quanta-computing/quanta-php-module).

</TabItem>
</Tabs>

### Étape 2 (facultative) : Configurer l’URL de votre back-office Magento

Si vous utilisez Magento et qu’une URL personnalisée est utilisée pour accéder au back-office Magento (c’est-à-dire une URL qui **ne** commence **pas** par **« /admin/ »**), vous devez modifier la configuration du module afin que les événements de type Magento soient correctement signalés dans Experience Monitoring.

Ce fichier se trouve généralement ici sous Debian/Ubuntu :

```bash
/etc/php<VERSION>/mods-available/quanta_mon.ini
```

et ici sous CentOS :

```bash
/etc/php.d/quanta_mon.ini
```

Toutefois, cela peut varier en fonction de votre installation PHP.

Par exemple, si l’URL de votre back-office est « http://admin.mysite.com/admin_123456/ », vous devez saisir le paramètre suivant :

```
quanta_mon.admin_url=« /admin_123456/ »
```

### Étape 3 : Redémarrer le serveur web

Une fois le module installé, vous devez redémarrer votre serveur web afin que l'extension PHP soit chargée et activée.

- Par exemple, si vous utilisez Apache sous Debian :

    ```bash
    systemctl restart apache2
    ```

- Si vous utilisez PHP-FPM, la commande serait par exemple :

    ```bash
    systemctl restart php8.2-fpm
    ```

## Vérifiez que tout fonctionne

Une fois que tout est installé **et que le scénario web a été créé dans Experience Monitoring**, rendez-vous dans le menu Scénario web, puis cliquez sur « + détails » dans la légende de l’une des pages nécessitant l’exécution de PHP (par exemple : une page Panier, qui n’est généralement jamais mise en cache).

Vous devriez alors voir un onglet « Application » (sinon, cet onglet est grisé) contenant des informations sur le temps passé en PHP.

Dans le cas d’un CMS Magento (v1 ou 2) ou de la plateforme OroCommerce, le code couleur diffère : il est orange pour Magento et jaune pour OroCommerce.
