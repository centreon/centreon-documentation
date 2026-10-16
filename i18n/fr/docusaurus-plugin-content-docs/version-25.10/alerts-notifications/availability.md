---
id: availability
title: Rapports de disponibilité
description: "Consulter les taux de disponibilité des hôtes et groupes de ressources"
---

## Rapports de disponibilité

Les rapports de disponibilité des objets accessibles via l'interface web Centreon
permettent de visualiser de manière intuitive le taux de disponibilité d'un hôte,
d'un groupe d'hôtes ou d'un groupe de services sur une période de temps donnée.

Pour visualiser le rapport de disponibilité d'un hôte :

- Rendez-vous dans le menu **Rapports > Disponibilité > Hôtes**
- Sélectionnez l'hôte désiré dans la liste déroulante **Hôte** située en haut à gauche

![image](../assets/reporting/os-reporting/os-host-reporting.png)

* La liste **Période de génération** permet de choisir la période de temps sur laquelle on souhaite visualiser le taux de disponibilité. Il est possible de sélectionner une période prédéfinie via la liste déroulante ou de sélectionner manuellement sa période en définissant les champs **Du** et **Au**
* Le tableau **État de l'hôte** permet de visualiser le taux et la durée de disponibilité associés par état de l'objet
* Le tableau **Statuts des éléments du rapport** permet de visualiser la disponibilité des services associés à l'hôte suivant leurs statuts
* La frise chronologique permet de visualiser de manière intuitive le statut de l'objet au cours du temps

![image](../assets/reporting/os-reporting/os-host-timeline.png)

De plus, en cliquant sur une journée de la frise chronologique, vous obtenez le rapport de la journée :

![image](../assets/reporting/os-reporting/os-host-tooltip.png)

Il est également possible de visualiser des rapports web pour :

- Les groupes d'hôtes : Cliquez sur **Rapports > Disponibilité > Groupes d'hôtes** dans le menu de gauche
- Les groupes de services : Cliquez sur **Rapports > Disponibilité > Groupes de services** dans le menu de gauche


L'icône CSV permet d'exporter les données du rapport au format CSV.

![image](../assets/reporting/os-reporting/os-csv.png)

> Cliquez sur le service d'un hôte dans le rapport de disponibilité de l'hôte pour obtenir un rapport détaillé du service.
