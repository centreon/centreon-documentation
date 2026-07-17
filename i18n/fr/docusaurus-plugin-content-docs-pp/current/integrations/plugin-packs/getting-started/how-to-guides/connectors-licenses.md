---
id: connectors-licenses
title: Licences offline/online et connecteurs
description: Découvrez les différences entre licences offline et online pour les connecteurs de supervision Centreon, et comment installer ou mettre à jour vos connecteurs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Les procédures d'installation des connecteurs de supervision diffèrent légèrement suivant que votre licence est offline ou online. Voici un résumé de leurs caractéristiques respectives.

Dans tous les cas, ajouter une licence (jeton pour licence online, fichiers de licence pour licence offline) se fait à la page **Administration > Extensions > Gestionnaire**.

## Licence online

Avec une licence online (toutes les plateformes Cloud, certaines plateformes OnPrem) :

* Votre serveur central/plateforme SaaS doit être connectée à internet.
* La page **Configuration > Connecteurs de supervision** affiche toujours le catalogue complet des connecteurs de supervision.
* Les mises à jour disponibles sont automatiquement indiquées.

## Licence offline

Avec une licence offline (plateformes OnPrem uniquement):

* Il n'est pas obligatoire que votre plateforme ait une connexion à internet (elle peut se trouver dans une DMZ).
* La page **Configuration > Connecteurs de supervision** affiche les connecteurs dont les paquets `centreon-pack-*` sont installés sur le serveur central.
* Vous ne voyez et ne recevez pas automatiquement les nouveaux connecteurs et les mises à jour des connecteurs installés. Pour récupérer les nouveaux connecteurs et mettre à jour ceux existants, utilisez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 & 9" label="Alma / RHEL / Oracle Linux 8 & 9">

```shell
dnf install centreon-pack-*
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt install centreon-pack-*
```

</TabItem>
</Tabs>

Ou, pour uniquement mettre à jour les connecteurs installés :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 & 9" label="Alma / RHEL / Oracle Linux 8 & 9">

```shell
dnf update centreon-pack-*
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt update && apt install --only-upgrade centreon-pack*
```

</TabItem>
</Tabs>

> Si votre plateforme n'a pas de connexion internet, vous devrez installer les mises à jour depuis un dépôt mirroir. Adaptez [la procédure suivante](/docs/installation/offline) au dépôt des connecteurs.

## Mises à jour de connecteurs et "breaking changes"

Attention, certaines mises à jour de connecteurs peuvent introduire des changements de comportement impactants ("breaking changes"). Dans ce cas, si vous utilisiez le connecteur et que vous le mettez à jour, vous devrez modifier sa configuration afin qu'il fonctionne à nouveau. Assurez-vous de consulter les [notes de releases des connecteurs](../../releases/release-notes.md) avant de mettre à jour un connecteur.

Les connecteurs pour lesquels une mise à jour est disponible sont affichés avec une icône flèche sur fond bleu : cliquez dessus pour installer la mise à jour.

## Installation automatique des plugins

À la page **Configuration > Connecteurs > Connecteurs de supervision**, si **Installation automatique des plugins** est à **ON**, les plugins seront mis à jour automatiquement lorsque vous déploierez la configuration d'un collecteur qui supervise un hôte ou un service qui utilise ce plugin.

## Types de licences disponibles sur OnPrem et Cloud

| Version | Licence online | Licence offline |
| ------- |:--------------:|:---------------:|
| Cloud   |    &check;     |  X              |
| OnPrem  |    &check;     |  &check;        |

## De quel type est ma licence ?

Si vous avez déjà installé votre licence mais que vous ne vous souvenez plus de son type, allez à la page **Administration > Extensions > Gestionnaire**.

* Si vous avez un bouton **Voir la licence**, votre licence est online.
* Si vous avez un bouton **Ajouter Token**, votre licence est offline.
