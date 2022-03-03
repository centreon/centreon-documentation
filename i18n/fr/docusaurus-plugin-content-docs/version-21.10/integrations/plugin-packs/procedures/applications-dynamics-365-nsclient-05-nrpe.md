---
id: applications-dynamics-365-nsclient-05-nrpe
title: Dynamics 365 NRPE 0.5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';						   


## Vue D'ensemble

Ce Plugin Pack permet d'obtenir des métriques et statuts collectés grâce au NSClient++
agent de surveillance et son serveur NRPE intégré.

## Contenu du Plugin-Pack

### Objets surveillés

* OS Windows Serveur à partir de la version 2003 SP2
* Poste de travail Windows à partir de la version XP

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="New-Orders" label="New-Orders">

| Nom du service | Description                                            |
| :------------- | :----------------------------------------------------- |
| New-Orders     | Vérifiez la présence et l'âge des nouvelles commandes. |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour surveiller un *Dynamics AX* via NRPE, installez la version packagée Centreon de l'agent NSClient++. Merci de suivre notre [documentation officielle](../tutorials/centreon-nsclient-tutorial.md)
et assurez-vous que la configuration du **Serveur NRPE** est correcte.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le package Centreon NRPE Client sur chaque Poller :

```bash
yum install centreon-nrpe3-plugin
```

2. Sur l'interface Web Centreon, installez le Pack Centreon *Dynamics 365* 
depuis la page **Configuration > Plugin Packs > Manager**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le package Centreon NRPE Client sur chaque Poller :

```bash
yum install centreon-nrpe3-plugin
```

2. Installez le RPM Centreon Pack sur le serveur Centreon Central :

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

3. Sur l'interface Web Centreon, installez le Pack Centreon *Dynamics 365* 
depuis la page **Configuration > Plugin Packs > Manager**

</TabItem>
</Tabs>

## Host configuration

* Connectez-vous à Centreon et ajoutez un nouvel Host via "Configuration > Hosts".
* Appliquez le modèle *App-Dynamics-365-NRPE-custom* et configurez toutes les macros obligatoires :

| Obligatoire | Nom              | Description                                                                       |
|:------------|:-----------------|:--------------------------------------------------------------------------------- |
| X           | NRPECLIENT       | Binaire du plugin NRPE à utiliser (Défaut: 'check_centreon_nrpe3')                |
| X           | NRPEPORT         | Port NRPE du serveur cible (Défaut: '5666')                                       |
| X           | NRPETIMEOUT      | Valeur timeout (Défaut: '30')                                                     |
| X           | NRPEEXTRAOPTIONS | Options supplémentaires à utiliser avec le binaire NRPE (Défaut: '-2 -u -P 8192') |
