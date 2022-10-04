---
id: applications-dynamics-ax-nsclient-05-nrpe
title: Microsoft Dynamics NRPE 0.5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

Ce Plugin Pack permet d'obtenir des métriques et statuts collectés grâce à l'agent de supervision NSClient++ et son serveur NRPE intégré.

## Contenu du Plugin-Pack

### Objets supervisés

* OS Windows Server à partir de la version 2003 SP2
* Poste de travail Windows à partir de la version XP

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Service-RIS" label="Service-RIS">

| Nom du service | Description                                                |
| :------------- | :--------------------------------------------------------- |
| Service-RIS    | Vérifiez l'état du service RecurringIntegrationsScheduler. |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Nom du service              | Description                                     |
| :-------------------------- | :---------------------------------------------- |
| RIS-Import-ProcessingErrors | Vérifiez l'échec de l'importation des fichiers. |

</TabItem>
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Nom du service     | Description                                      |
| :----------------- | :----------------------------------------------- |
| RIS-Import-Input   | Vérifiez la présence des fichiers d'importation. |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser **Dynamics AX** via NRPE, installez la version packagée Centreon de l'agent NSClient++.
Suivez notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
et assurez-vous que la configuration du **Serveur NRPE** est correcte.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le package Centreon NRPE Client sur chaque collecteur :

```bash
yum install centreon-nrpe3-plugin
```

2. Sur l'interface Web Centreon, installez le Pack Centreon **Dynamics NSClient**
depuis la page **Configuration > Plugin Packs > Manager**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le package Centreon NRPE Client sur chaque collecteur :

```bash
yum install centreon-nrpe3-plugin
```

2. Installez le RPM du Pack Centreon sur le serveur Centreon Central :

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe applications-dynamics-ax-nsclient-05-nrpe
```

3. Sur l'interface Web Centreon, installez le Pack Centreon **Dynamics NSClient**
depuis la page **Configuration > Plugin Packs > Manager**.

</TabItem>
</Tabs>

## Paramétrage de l'hôte

* Connectez-vous à Centreon et ajoutez un nouvel hôte via **Configuration > Hôtes > Hôtes**.
* Appliquez le modèle **App-Dynamics-AX-NRPE-custom** et configurez toutes les macros obligatoires :

| Obligatoire | Nom              | Description                                                                       |
|:------------|:-----------------|:--------------------------------------------------------------------------------- |
| X           | NRPECLIENT       | Binaire du plugin NRPE à utiliser (Défaut: 'check_centreon_nrpe3')                |
| X           | NRPEPORT         | Port NRPE du serveur cible (Défaut: '5666')                                       |
| X           | NRPETIMEOUT      | Valeur timeout (Défaut: '30')                                                     |
| X           | NRPEEXTRAOPTIONS | Options supplémentaires à utiliser avec le binaire NRPE (Défaut: '-2 -u -P 8192') |
