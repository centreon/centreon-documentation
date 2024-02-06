---
id: poller-upgrade
title: Monter de version un collecteur
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette procédure décrit la montée de version d'un collecteur, d'une version majeure à une autre (c'est-à-dire par exemple le passage de 23.04.x à 23.10.y).

## Montée de version d'un collecteur

1. [Sur votre serveur central](../getting-started/interface.md#accéder-à-linterface-du-serveur-central), cliquez sur la flèche à côté de **Collecteurs** dans le bandeau en haut à gauche.

2. Dans la pop-up qui apparaît, cliquez sur **Copy install command**. La commande est copiée dans votre presse-papiers.

3. Sur le collecteur, dans le terminal, copiez la commande d'installation et exécutez-la.

4. [Déployez la configuration du collecteur](../monitoring/monitoring-servers/deploying-a-configuration.md), 
en choisissant la méthode **Redémarrer** pour le processus Engine.

5. Redémarrez enfin le service Gorgone s'il est utilisé sur le collecteur :

  ```shell
  systemctl restart centengine gorgoned
  ```
