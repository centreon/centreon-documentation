---
id: poller-update-upgrade
title: Mettre à jour/monter de version un collecteur
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **IMPORTANT** : [Mettre à jour l'OS du collecteur](https://thewatch.centreon.com/product-how-to-21/os-updates-security-3136) relève de la responsabilité du client. D'autre part, Centreon fournit des mises à jour applicatives concernant les collecteurs, mais il revient au client d'appliquer ces mises à jour sur leurs collecteurs.

Votre collecteur doit toujours avoir la dernière version disponible (c'est-à-dire la dernière version mineure de la dernière version majeure).

* Si votre collecteur a déjà la dernière version majeure mais pas la dernière version mineure, effectuer cette procédure le mettra à jour vers la dernière version mineure. Exemple : si la dernière version est 23.10.y et que votre collecteur est en 23.10.x, alors il sera mis à jour vers la version 23.10.y.
* Si votre collecteur a une version autre que la dernière version majeure, effectuer cette procédure ne le mettra pas à jour vers la dernière version mineure de cette version majeure. Le collecteur sera mis à niveau vers la dernière version majeure disponible (par exemple, il sera mis à niveau de la 23.04.x à la 23.10.y).

## Mettre à jour ou mettre à niveau un collecteur

1. [Sur votre serveur central](../getting-started/interface.md#accéder-à-linterface-du-serveur-central), cliquez sur la flèche à côté de **Collecteurs** dans le bandeau en haut à gauche.

2. Dans la pop-up qui apparaît, cliquez sur **Copy install command**. La commande est copiée dans votre presse-papiers.

3. Sur le collecteur, dans le terminal, copiez la commande d'installation et exécutez-la.

4. [Déployez la configuration du collecteur](../monitoring/monitoring-servers/deploying-a-configuration.md), 
en choisissant la méthode **Redémarrer** pour le processus Engine.

5. Redémarrez enfin le service Gorgone s'il est utilisé sur le collecteur :

  ```shell
  systemctl restart gorgoned
  ```
