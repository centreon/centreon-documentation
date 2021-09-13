---
id: services-templates
title: Utiliser des modèles de service
---

## Définition

Un modèle est une pré-configuration de paramètres d’un objet qui pourra être
utilisé pour configurer ce dernier. Le principal avantage est de pouvoir définir
des valeurs par défaut pour certains objets afin d’accélérer la création
d’objets similaires.

Lors de la création d’un modèle, seul le nom du modèle est obligatoire. Les
autres attributs sont optionnels.

Les avantages sont :

  - Définition simplifiée des éléments
  - Pas de redondance d’information
  - Facilité d’ajout de nouvelles ressources
  - Configurations prédéfinies assimilées à un « catalogue d’indicateurs»
  - Les modèles peuvent hériter d’autres modèles


## Modèles de services

### Inheritance

Un service ou un modèle de service ne peut hériter que d’un seul modèle de
service (héritage de type Père-Fils).

![image](../../assets/configuration/09heritageservice.png)

### Configuration

Pour ajouter un modèle de services :

Rendez-vous dans le menu `Configuration > Services > Modèles` et cliquez
sur le bouton **Ajouter**

> Rapportez-vous au chapitre de configuration des
> *[services](services.html)* pour configurer un modèle car le
> formulaire est identique.

> Par défaut, les modèles de service verrouillés sont masqués. Cocher la case
> “Eléments verrouillés” pour les afficher tous.

## Les bonnes pratiques

### Explications

La bonne pratique veut que des modèles de services soient associés à des modèles
d’hôtes : lors de la création d’un hôte, les services sont générés
automatiquement à partir des modèles d’hôtes. Il y a deux intérêts à lier les
modèles de services aux modèles d’hôtes :

  - Les services générés automatiquement conservent leur granularité : il est
    donc possible de modifier les attributs d’un service sans impacter les
    autres services issus de ce modèle
  - La création de nouveaux hôtes est grandement accélérée : vous n’avez qu’à
    définir l’hôte et les modèles d’hôtes associés à celui-ci

Exemple : Je créé l’hôte srvi-web-01 selon le modèle ci-dessous :

![image](../../assets/configuration/09hostexemple.png)

L’hôte srvi-web-01 possèdera automatiquement les services suivants :

  - Load, CPU, Memory, disk-/ à partir des modèles de services issus du modèle
    d’hôte “Linux-Server-RedHat-5”
  - broken-jobs, hit-ratio, tablespaces, listener à partir des modèles de
    services issus du modèle d’hôte “DB-MySQL”
  - processus et connection à partir des modèles de services issus du modèle
    d’hôte “Web-Server-Apache”

Lorsque les services d’un hôte sont générés à partir des modèles d’hôtes, il est
possible que certains services générés ne soient plus ou pas vérifiés par
l’outil de supervision. Dans ce cas, il est nécessaire de désactiver les
services inutilisés (et non de les supprimer). En cas de suppression des
services, la régénération des services de l’hôte à partir des modèles d’hôtes va
recréer les services supprimés.

### Configuration

La liaison des modèles de services avec les modèles d’hôtes a lieu dans l’onglet
**Relations** des modèles de services ou des modèles d’hôtes.