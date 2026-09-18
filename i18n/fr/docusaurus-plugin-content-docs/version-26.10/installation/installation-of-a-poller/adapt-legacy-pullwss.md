---
id: adapt-legacy-pullwss
title: Adapter les anciennes configurations de collecteurs pullwss
description: "Comment adapter les anciennes connexions pullwss à la nouvelle configuration des collecteurs en conteneur"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Quand utiliser cette procédure

Cette page décrit la marche à suivre si les conditions suivantes sont réunies :

* Vous avez mis à jour une plateforme existante en version 26.10.
* Cette plateforme utilisait des collecteurs en mode pullwss.
* Vous souhaitez désormais utiliser des collecteurs en conteneur. (Si vous ne souhaitez pas utiliser de collecteurs en conteneur, vos anciens collecteurs en mode pullwss continueront de fonctionner normalement : vous n'avez rien à faire.)

Selon votre installation, vous pouvez [configurer vos anciens collecteurs pour qu'ils utilisent le port 443 (recommandé)](#configurer-vos-anciens-collecteurs-pour-quils-utilisent-le-port-443-recommandé) ou [rediriger le trafic vers Gorgone (non recommandé)](#rediriger-le-trafic-vers-gorgone-non-recommandé).

## Configurer vos anciens collecteurs pour qu'ils utilisent le port 443 (recommandé)

1. Configurez le serveur central pour qu'il puisse recevoir le trafic pullwss de vos collecteurs en conteneur, comme décrit dans la page [Prérequis pour les collecteurs en conteneur](./pollers-containers-prerequisites.md).
2. Mettez à jour tous vos collecteurs en version 26.10.
3. Sur le collecteur, remplacez le numéro de port cible par 443 dans le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml**, au niveau de la configuration du module **pullwss**.

```json
modules:
    - name: pullwss
      package: "gorgone::modules::core::pullwss::hooks"
      enable: true
      ssl: true
      port: 443
      token: "secret_token"
      address: <your-central-address-here>
      ping: 1
```

## Rediriger le trafic vers Gorgone (non recommandé)

N'utilisez cette section que si vous avez de nombreux collecteurs dont la configuration ne peut pas être modifiée facilement comme décrit ci-dessus. Dans ce cas, modifiez la configuration d'Apache sur votre serveur central afin de conserver l'ancien port pullwss 8086 et de rediriger le trafic vers Gorgone.

### Collecteur avec HTTPS

1. Configurez le serveur central pour qu'il puisse recevoir le trafic pullwss de vos collecteurs en conteneur, comme décrit dans la page [Prérequis pour les collecteurs en conteneur](./pollers-containers-prerequisites.md).
2. Mettez à jour vos collecteurs en version 26.10.
3. Sur le serveur central, exécutez les commandes suivantes pour rediriger le trafic du port 8086 vers Gorgone sur le serveur central.

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">

  ```shell
  cp /usr/share/centreon/examples/centreon-apache-https-gorgone.conf /etc/httpd/conf.d/
  systemctl restart httpd
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  cp /usr/share/centreon/examples/centreon-apache-https-gorgone.conf /etc/apache2/sites-available/
  a2ensite centreon-apache-https-gorgone
  systemctl restart apache2
  ```

  </TabItem>
  </Tabs>

### Collecteur sans HTTPS (HTTP simple, non recommandé)

> Cette configuration n'existe que pour assurer la compatibilité avec d'anciens collecteurs qui ne peuvent pas être configurés pour utiliser TLS. Notez que l'utilisation de pullwss sans TLS est déconseillée en production. Mettez votre configuration à jour dès que possible.

1. Configurez le serveur central pour qu'il puisse recevoir le trafic pullwss de vos collecteurs en conteneur, comme décrit dans la page [Prérequis pour les collecteurs en conteneur](./pollers-containers-prerequisites.md).
2. Mettez à jour vos collecteurs en version 26.10.
3. Sur le serveur central, exécutez les commandes suivantes pour rediriger le trafic du port 8086 vers Gorgone sur le serveur central.

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">

   ```shell
   cp /usr/share/centreon/examples/centreon-apache-gorgone.conf /etc/httpd/conf.d/
   systemctl restart httpd
   ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  cp /usr/share/centreon/examples/centreon-apache-gorgone.conf /etc/apache2/sites-available/
  a2ensite centreon-apache-gorgone
  systemctl restart apache2
  ```

  </TabItem>
  </Tabs>

## Dépanner votre installation

Voir [Dépanner l'installation](./pollers-containers-prerequisites.md#dépanner-linstallation).
