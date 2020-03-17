---
id: generic-actions
title: Actions génériques
---

Au sein du menu Configuration il est possible d’effectuer certaines actions "génériques" sur les différents objets.

## Ajouter / Supprimer

L’ajout d’un nouvel objet se fait via le bouton **Add** à côté du menu **More actions..**

Pour supprimer un objet :

1. Sélectionnez le ou les objets que vous souhaitez supprimer en cochant la ou les cases près du nom de celui-ci
2. Dans le menu **More actions...** cliquez sur **Delete**.

> La suppression d’un objet est définitive. Si vous avez supprimé un objet par accident, il vous faudra le recréer. De
> même, la suppression d’un objet supprime automatiquement tous les objets qui sont liés à lui et ne peuvent vivre
> sans. Exemple : La suppression d’un hôte entraine la suppression de tous les services associés à cet hôte.

## Dupliquer

### Principe

La duplication d’un objet permet de copier/cloner celui-ci afin de pouvoir réutiliser ses attributs pour la création
d’un nouvel objet. Exemple : J’ai 10 serveurs web identiques à superviser :

1. J’ajoute le premier serveur web avec tous les attributs nécessaires
2. Je duplique cet hôte 9 fois
3. Je n’ai plus qu’à changer les noms d’hôtes et les adresses IP de chaque duplication pour les adapter aux 9 autres
  serveurs web à superviser

Grâce à cette méthode, il n’est plus nécessaire de créer unitairement chaque hôte.

### Pratique

<!--DOCUSAURUS_CODE_TABS-->
<!--New pages-->

Pour dupliquer une Business Activity:

1. Sélectionnez la Business Activity que vous souhaitez dupliquer en cochant la case associée
2. Cliquez sur l'icône de duplication : <img src="../assets/configuration/common/duplicate_new.png" width="32" />
3. Entrez le nombre de duplications que vous souhaitez obtenir

<img src="../assets/configuration/common/duplicate_objects_new.png" width="400" />

4. Cliquez sur le bouton **OK**

<!--Legacy pages-->

Pour dupliquer un hôte :

1. Sélectionnez l’hôte que vous souhaitez dupliquer
2. Dans la colonne **Options**, entrez le nombre de duplication que vous souhaitez obtenir

![image](assets/configuration/common/01duplicate.png)

3.	Dans le menu **More actions...** cliquez sur le bouton **Duplicate**

![image](assets/configuration/common/01duplicateobjects.png)

<!--END_DOCUSAURUS_CODE_TABS-->

## Changement massif

### Principe

Les changements massifs permettent d’appliquer un changement sur plusieurs objets.

Exemple : L’ensemble des serveurs web précédemment créés changent de communauté SNMP. Un changement massif permet de
modifier cette communauté sans avoir la peine de modifier chaque fiche de chaque hôte unitairement.

### Pratique

Pour effectuer un changement massif :

1. Sélectionnez les objets que vous souhaitez modifier
2. Dans le menu **More actions...** cliquez sur le bouton **Massive Change**

La fenêtre de changement s’ouvre, il existe deux types de changements :

* **Incrémentale** : signifie que la modification va s’ajouter aux options déjà existantes
* **Remplacement** : signifie que la modification va écraser les options déjà existantes

## Activer / Désactiver

### Principe

L’activation et la désactivation des objets permettent de prendre en compte ou non l’objet lors de la génération de la
configuration. Le principal intérêt est de pouvoir garder la configuration d’un objet sans pour autant l’appliquer.

### Practice

<!--DOCUSAURUS_CODE_TABS-->
<!--New pages-->

Pour activer / désactiver un objet :

1. Sélectionnez les objets que vous souhaitez modifier
2. Cliquez sur l'icône Activer ou Désactiver

Il est également possible d’activer ou de désactiver un objet via le champ **State** de la fiche de détails de l’objet
ou en utilisant les icônes suivantes :

* <img src="../assets/configuration/common/enabled_new.png" width="32" />
* <img src="../assets/configuration/common/disabled_new.png" width="32" />

<!--Legacy pages-->

Pour activer / désactiver un objet :

1. Sélectionnez les objets que vous souhaitez modifier
2. Dans le menu **More actions...** cliquez sur le bouton **Enable / disable**

Il est également possible d’activer ou de désactiver un objet via le champ **Status** de la fiche de détails de l’objet
ou en utilisant les icônes suivantes :

* ![image](assets/configuration/common/enabled.png)
* ![image](assets/configuration/common/disabled.png)

<!--END_DOCUSAURUS_CODE_TABS-->

## Supprimer

<!--DOCUSAURUS_CODE_TABS-->
<!--New pages-->

Pour supprimer un objet :

1. Sélectionnez les objets que vous souhaitez supprimer
2. Cliquez sur l'icône pour supprimer <img src="../assets/configuration/common/delete_new.png" width="32" />
3. Confirmer l'action

<!--Legacy pages-->

Pour supprimer un objet :

1. Sélectionnez les objets que vous souhaitez supprimer
2. Dans le menu **More actions...** cliquez sur le bouton **Delete**
3. Confirmer l'action

<!--END_DOCUSAURUS_CODE_TABS-->
