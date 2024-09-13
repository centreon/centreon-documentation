---
id: map-web-create-standard-map
title: Créer une carte standard
---

Cette page décrit comment créer des cartes standards et comment les personnaliser avec l'éditeur de MAP. 

L'affichage du bouton **Ajouter une carte** signifie que vous êtes autorisé à créer une carte et que vous appartenez à un groupe d'accès auquel est attribué le rôle de créateur.

## Créer une map standard

1. Dans la page **Supervision > Map**, cliquez sur le bouton **Ajouter une carte** situé dans la section **Cartes standard**.

2. Définissez les propriétés de la nouvelle carte :
   - Nom : nommez la carte.
   - Image : sélectionnez une image si vous souhaitez personnaliser l'affichage de la carte dans la liste des cartes.

3. Cliquez sur **Ajouter** pour confirmer la création de la carte.

La nouvelle carte s'ouvre directement dans l'interface de l'éditeur.

## Créer une carte à partir d'un conteneur existant

Vous pouvez créer une vue directement à partir d'un [conteneur](#conteneur). Cela est très pratique lorsque vous souhaitez partager le sous-niveau d'une vue avec un autre utilisateur sans dupliquer son contenu ou sans donner un accès complet à la vue principale.

1. Faites un clic-droit sur le conteneur et cliquez sur **Créer une carte à partir d'un conteneur**.
2. Nommez le conteneur.
3. Cliquez sur **Ajouter**.

Votre carte a été créée. Vous pouvez la retrouver sur la page d'accueil MAP.

> Vous pouvez maintenant personnaliser votre carte en utilisant les fonctionnalités de l'éditeur MAP.

## Utiliser l'éditeur MAP

Suivez cette procédure pour ouvrir votre carte en mode édition :

1. Allez dans **Supervision > Map** pour afficher la liste des cartes existantes.
2. Sélectionnez la carte que vous souhaitez modifier.
3. Cliquez sur le bouton **Éditer** pour l'ouvrir en mode édition.

> Une fois éditée, passez en mode visualisation en enregistrant vos modifications avec le bouton **Enregistrer**. Cliquez ensuite sur **Quitter**.

### Aperçu de l'éditeur MAP

Voici comment se présente l'éditeur MAP :

![image](../assets/graph-views/ng/map-web-editor-description.png)

**1. Fil d'Ariane :** vous permet de savoir quels éléments de la carte vous avez parcourus pour atteindre la vue courante. 
**2. Barre d'outils :** permet de masquer/afficher des panneaux, annuler/répéter des actions, et d'adapter/zoomer/dézoomer l'espace de travail.
**3. Adresse IP :** il s'agit de l'adresse du serveur MAP spécifiée dans les paramètres de Centreon MAP.
**4. Panneau Formes :** ce panneau présente tous les éléments dont vous avez besoin pour concevoir une carte, des formes basiques aux ressources Centreon.
**5. Panneau Format :** ce panneau vous permet d'appliquer un format sur un élément sélectionné.
**6. Espace de travail :** c'est l'espace situé au milieu de l'éditeur, pour concevoir votre diagramme.
**7. Onglet :** vous pouvez naviguer entre plusieurs onglets lorsque votre carte nécessite plusieurs niveaux (pages). Par exemple, lorsque votre carte comporte plusieurs conteneurs, vous pouvez naviguer entre les onglets, où chaque onglet correspond à un conteneur.

### Utiliser des éléments graphiques pour concevoir votre carte

Le panneau **Formes** contient différents types d'éléments pour concevoir votre carte. Les options s'affichent en fonction du type d'élément que vous avez sélectionné.

#### Éléments de base

Utilisez les formes de la section **Basiques** pour organiser vos éléments avec des formes géométriques et des zones de texte. Utilisez ensuite le panneau **Format** pour personnaliser votre forme en appliquant un format de style tel que la couleur, l'opacité, etc.

#### Éléments de widget

Utilisez les éléments **Widget** pour afficher des données graphiques sur les ressources que vous supervisez. Les widgets fournissent des informations telles que des indications sur l'état de santé ou des statistiques de performance. Les widgets disponibles sont les suivants :

- **Graphique à camembert :** affiche l'état d'une ressource à superviser sous forme de données proportionnelles. Il affiche :
  - Pour un hôte : le nombre d'états OK, Alerte, Critique, et NA.
  - Pour un groupe d'hôtes : le nombre d'hôtes en états OK, Alerte, Critique, et NA.
- **Graphique linéaire :** affiche les données de performance relatives à un service, sur une période de temps.
- **Jauge :** décrit la sortie d'un service. Vous pouvez placer une jauge dans n'importe quelle direction (de gauche à droite, de bas en haut, etc.).
- **Output :** décrit la sortie d'un service. La couleur d'arrière-plan est la même que le statut.
- **Processus :** permet de déclencher une action sur n'importe quelle ressource à l'aide d'une commande. Voici un exemple :
  - Vous avez un site internet interne qui utilise Apache et parfois,  Apache se bloque. Vous avez besoin d'investiguer sur la raison principale de ce crash, mais votre priorité est de vous assurer que les utilisateurs finaux peuvent accéder au site internet.
  - Vous pouvez utiliser le widget Processus en attribuant une commande telle que `services httpd restart` de sorte que lorsque le processus Apache se bloque, les utilisateurs peuvent immédiatement redémarrer le service Apache à partir de la vue en double-cliquant sur le widget.
  - Pour créer un service dédié à une "action" : créez une commande (dans **Configuration > Commande > Contrôles > Ajouter**) qui contient `services httpd restart` (n'oubliez pas d'activer le shell). Liez la commande à un service passif. Reliez le service passif à un hôte (par exemple, l'hôte qui héberge le site internet). Vous pouvez ensuite affecter ce service au widget.

#### Éléments médias

Utilisez les éléments de la section **Médias** pour ajouter :
- Une **URL** : vous permet d'ajouter un accès à un lien spécifié.
- Une **Image** : vous permet de personnaliser votre diagramme en ajoutant des images.  

1. Faites un glisser-déposer de l'élément vers l'espace de travail.
2. Faites un clic-droit dessus et sélectionnez **Modifier les paramètres...**.
3. Remplissez le paramètre requis et cliquez sur **Soumettre**.

#### Eléments de lien

Utilisez les éléments de la section **Liens** pour établir des liens entre les éléments (avec des points d'ancrage) :
- **Link :** est un élément de lien simple de type flèche pour connecter deux éléments.
- **Status link :** utilisez ce lien entre deux éléments et configurez une ressource à superviser à partir de celui-ci. Ensuite, ce lien affichera l'état de la couleur de la ressource que vous avez spécifiée.
- **Metric link :** utilisez ce lien entre deux éléments et configurez un service et ses métriques à partir de celui-ci. Ensuite, ce lien affichera les métriques du service que vous avez spécifié. 

#### Eléments Centreon

- Eléments de la section **Ressources Centreon** :
  - Host group
  - Host
  - Service
  - Service group
  - Meta service

- Elément de la section **Centreon MAP** :
  - ### Conteneur
  Utilisez des conteneurs lorsque vous souhaitez créer plusieurs niveaux de votre carte. Chaque niveau est représenté par un conteneur.
    - En mode vue, chaque conteneur devient une carte avec son propre statut.
    - En mode éditeur, chaque niveau devient un onglet. Vous pouvez alors naviguer entre les conteneurs à l'aide des différents onglets.

- Eléments de la section **Centreon BAM** :
  - Business activity

Les paramètres s'affichent en fonction du type d'élément que vous avez sélectionné.

1. Faites un glisser-déposer de l'élément vers l'espace de travail.
2. Faites un clic-droit dessus et sélectionnez **Modifier les paramètres...**.
3. Remplissez le paramètre requis et cliquez sur **Soumettre**.

#### Personnaliser les éléments

Le panneau **Format** vous permet d'appliquer des options de formatage en fonction du type d'élément que vous avez sélectionné.
- Onglet **Style** : pour personnaliser les formes, les liens et le texte.
- Onglet **Texte** : pour mettre en forme tous les éléments de texte.
- Onglet **Organiser** : pour organiser les éléments dans l'espace de travail (taille, position, alignement) et les placer sur différents calques.

### Ajouter plusieurs ressources en utilisant le mode groupé

En mode édition, vous pouvez ajouter plusieurs ressources à votre vue en une seule action.

1. Cliquez dans la barre **Rechercher une ressource** au-dessus de la vue.
2. Dans la liste déroulante, sélectionnez les ressources que vous souhaitez dans **Groupes d'hôtes, Hôtes, Groupes de services, Services, Méta-services et Activités métier**.
3. Cliquez ensuite sur le bouton **Ajouter à la carte**.

Les ressources que vous avez sélectionnées sont maintenant ajoutées à la vue !
