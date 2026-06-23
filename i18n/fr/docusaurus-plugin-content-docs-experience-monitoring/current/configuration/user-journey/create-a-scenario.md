---
id: create-a-scenario
title: Créer un parcours utilisateur
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Notez que si le site que vous souhaitez superviser est interne à votre organisation, vous devrez créer une [zone STM](stm-zones.md) en plus du parcours utilisateur.

> Cette page mentionne fréquemment les [sélecteurs CSS](../../experience-monitoring-glossary.md). Nous vous recommandons de vous documenter sur ce sujet avant de continuer.

Seuls les utilisateurs ayant le rôle **Owner** ou **Administrator** peuvent créer ou modifier des parcours utilisateur.

Les parcours utilisateur vous permettent de configurer une sonde pour naviguer régulièrement sur votre site en suivant un chemin prédéfini. Cette page explique comment configurer à la fois le parcours dans son ensemble et ses étapes individuelles.

Pour que ce module fonctionne correctement, vous devrez peut-être autoriser les adresses IP suivantes utilisées par Experience Monitoring :

<details>
  <summary>Adresses IP</summary>

- 18.200.8.204
- 34.241.126.134
- 34.242.201.38
- 34.243.127.23
- 34.248.113.181
- 34.250.75.1
- 34.252.162.102
- 34.255.79.251
- 52.17.157.120
- 52.18.157.52
- 52.19.60.226
- 52.30.194.126
- 52.31.137.223
- 52.48.148.3
- 52.48.151.164
- 52.50.31.122
- 52.51.174.216
- 52.208.14.10
- 52.209.27.6
- 52.210.233.251
- 52.212.161.58
- 52.214.41.253
- 54.78.224.201
- 54.154.70.169
- 54.170.78.117
- 54.170.157.253
- 63.34.122.21
- 63.34.67.195
- 99.81.201.50
- 176.34.232.22
- 185.48.122.159

</details>

Pour créer un parcours utilisateur, accédez à la page **Configuration** et cliquez sur l'onglet **Parcours Utilisateur**. Ensuite, cliquez sur **Créer un parcours utilisateur**. Un parcours est ajouté avec une première étape nommée « Home » pour accéder automatiquement à la page d'accueil de votre site.

## Configuration du parcours utilisateur

Pour accéder aux paramètres avancés, ouvrez votre parcours en mode édition, cliquez sur le menu à trois points à sa droite et sélectionnez **Avancé**.

N'oubliez pas de cliquer sur **Sauvegarder** après toute modification dans cette fenêtre.

<Tabs groupId="sync">
<TabItem value="General" label="General">

Donnez à votre parcours un nom clair et unique. Ce nom apparaît dans les rapports et dans toute l'interface Experience Monitoring.

À droite du nom, vous pouvez choisir de :

- Activer ou désactiver ce parcours utilisateur afin qu'il ne soit pas exécuté, mais reste sauvegardé pour une utilisation ultérieure.
- Activer ou désactiver le profilage PHP pour ce parcours si vous avez l'agent système Experience Monitoring et le module PHP installés sur vos serveurs. Vous n'êtes pas sûr que cela vous concerne ? Consultez la [liste de vérification d'installation Experience Monitoring](../../installation/installation-checklist.md).
- Activer ou désactiver la vérification SSL. La sonde fera échouer le parcours si votre site présente un certificat SSL invalide ou expiré. Désactivez cette option uniquement si vous exécutez intentionnellement le parcours dans un environnement non sécurisé.

#### Zones de Synthetic Monitoring

Si vous avez préalablement configuré des [zones STM](stm-zones.md), vous aurez la possibilité de sélectionner une zone privée ici. Votre site public est sélectionné par défaut.

#### Audits de recommandations quotidiens

En plus de la sonde de parcours utilisateur, une sonde de recommandations est exécutée une fois par jour pour vous donner des conseils personnalisés sur l'optimisation de votre site.
Les options du **Mode de fonctionnement** vous permettent de désactiver cette sonde, de lui faire vérifier uniquement votre première étape ou toutes les étapes.
Vous pouvez également modifier la langue des recommandations.

</TabItem>
<TabItem value="Requêtes HTTP" label="Requêtes HTTP">

#### Authentification HTTP Basique

Si votre site (ou un environnement de staging) est protégé par une authentification HTTP Basic (parfois appelée protection `.htaccess`), saisissez les identifiants ici. Laissez les champs vides si aucune protection de ce type n'est utilisée.

#### Cookies

Ajoutez des cookies personnalisés pour stocker des données ou des sessions au démarrage du parcours.

#### En-têtes HTTP

Vous pouvez ajouter des en-têtes HTTP personnalisés.

</TabItem>
<TabItem value="Simulation" label="Simulation">

#### Activer le cache du navigateur

Lorsque cette option est activée, la sonde stocke certains éléments du site qui sont réutilisés au fil des différentes pages pour réduire les temps de chargement.
Par exemple, la sonde peut stocker le logo de votre site car il est souvent présent sur toutes les pages.
Cela simule un utilisateur qui revient sur le site. Désactivez cette option pour simuler un premier visiteur qui télécharge tout.

#### Version du navigateur

Détermine sur quelle version de Chromium la sonde sera exécutée.

#### Agent utilisateur

L'agent utilisateur est une chaîne d'en-tête HTTP que chaque navigateur envoie à la page qu'il consulte. Il informe la page sur le navigateur et le type d'appareil utilisés pour y accéder.
Vous pouvez saisir une chaîne personnalisée pour simuler un navigateur spécifique.

#### Options d'appareil

Ici, vous pouvez déterminer la taille d'écran que la sonde simulera ainsi que son orientation si vous avez sélectionné la taille d'écran d'un téléphone ou d'une tablette.

Vous pouvez également déterminer la puissance de l'appareil utilisé par l'utilisateur.

</TabItem>
<TabItem value="Timings" label="Timings">

Déterminez l'intervalle entre chaque exécution de la sonde. Vous pouvez également configurer le temps que la sonde attend pour une étape avant de la considérer comme un délai d'attente dépassé.

Notez que le temps d'exécution de l'ensemble du parcours par la sonde doit être inférieur au temps entre chaque exécution.
Par exemple, ne définissez pas un intervalle de 5 minutes entre les exécutions pour un parcours utilisateur dont l'exécution moyenne dure 7 minutes.

Pour cette raison, il est recommandé de définir un intervalle élevé au début, puis de le réduire au fur et à mesure que vous déterminez la durée d'exécution de la sonde.

#### Attendre le chargement complet

La sonde attend que tous les éléments de la page soient entièrement chargés avant de passer à l'action suivante. Cela imite mieux le comportement d'un utilisateur réel.

</TabItem>
<TabItem value="Variables" label="Variables">

Les variables vous permettent de transmettre des valeurs dynamiques telles que des identifiants de connexion dans un parcours au moment de l'exécution, sans les coder en dur dans l'étape.

Exemple : définissez une variable `login` et `password`, puis référencez les variables dans l'étape où la sonde remplit un formulaire de connexion.

Les variables sont particulièrement utiles lorsque vous avez besoin de valeurs différentes dans des contextes différents :
- Surveillance régulière vs. exécutions d'audit : utilisez un ensemble d'identifiants pour les vérifications quotidiennes, un autre pour les audits de recommandations.
- Tests de charge : attribuez des connexions différentes à différentes instances de navigateur pour simuler plusieurs utilisateurs distincts.

> Les variables sont fixes par configuration de parcours. Pour utiliser des valeurs différentes, vous devrez définir des variables séparées par contexte (surveillance vs. test de charge).

</TabItem>
<TabItem value="URLs bloquées" label="URLs bloquées">

Vous pouvez indiquer à la sonde d'ignorer les requêtes vers des domaines ou des URL spécifiques. Ceci est utile pour :

- Exclure le trafic de la sonde de vos analyses, ce qui évite à la sonde de gonfler le nombre de visites dans des outils comme Google Analytics.
- Éviter les coûts par requête. Certains services (comme Google Maps) facturent par requête. Si une page de votre parcours charge une carte, chaque exécution de sonde génère une requête facturable. Bloquer ce domaine élimine le coût.

Vous pouvez utiliser un astérisque `*` comme caractère générique pour exclure toutes les versions d'un domaine. Par exemple, bloquer `https://my-analytics-tool.fr/api/v*/` exclura toutes les versions de cette API (v1, v2, v3, etc.).

Les domaines suivants sont bloqués par défaut :

- DoubleClick
- Hotjar
- Google Analytics
- Centreon RUM
- Google Ads
- Google Maps

</TabItem>
</Tabs>

## Configuration d'une étape ou d'une action

Les parcours utilisateur sont composés d'étapes et d'actions.
Les étapes représentent une page, tandis que les actions sont tout ce qu'un utilisateur peut faire dans la même page (cliquer sur quelque chose, ouvrir la barre de recherche, etc.).
Une étape peut contenir plusieurs actions.

> Chaque licence dispose d'un nombre limité d'étapes disponibles à utiliser entre tous les parcours utilisateur. Ces étapes sont partagées entre tous les sites de votre organisation.
> Pour voir combien d'étapes vous avez de disponibles, accédez à l'onglet **Licences & Sites** dans la page **Organisation**.

Étant donné que les actions de navigation sont toujours la seule ou la dernière action d'une étape, et qu'une étape pour accéder à la page d'accueil de votre site est déjà configurée, vous devez maintenant créer une nouvelle étape.
Pour ce faire, cliquez sur l'icône + sous la première étape.

![image](../../assets/configuration/user-journey/user-journey-add-step.png)

Donnez un nom à cette nouvelle étape et cliquez sur l'icône + à l'intérieur de l'étape pour choisir une action à effectuer.


### Actions possibles dans un parcours utilisateur

Il existe 6 actions possibles que la sonde peut effectuer lors d'un parcours utilisateur :

<Tabs groupId="sync">
<TabItem value="Naviguer" label="Naviguer">

Choisissez une URL vers laquelle naviguer. Cette action est identique à la saisie d'une URL dans la barre d'adresse et à l'accès à cette URL. Un parcours utilisateur commence toujours par une action de navigation.
Les actions de navigation sont également toujours la seule ou la dernière action d'une étape.

L'URL doit appartenir au domaine autorisé pour votre licence Experience Monitoring.

</TabItem>
<TabItem value="Cliquer" label="Cliquer">

Cliquez sur un objet de la page sur laquelle vous vous trouvez actuellement. Pour choisir sur quoi cliquer, vous avez deux options :

- Rechercher un élément par son sélecteur CSS.
- Rechercher du texte

Si vous recherchez par texte, le texte doit appartenir à une seule balise HTML. Notez que du texte qui apparaît visuellement comme une seule phrase peut être réparti sur plusieurs balises. Dans certains cas, ce qui ressemble à du texte peut en réalité être une image de texte ; dans ce cas, vous devez sélectionner l'image comme élément, car la sonde ne reconnaît pas le contenu d'une image.

```html
<p>Click <span class="emphasis">quickly</span> to see what comes next</p>
```

```html
<p>Click quickly to see what comes next</p>
```

Par défaut, Experience Monitoring recherche la première occurrence du texte ou de l'élément sélectionné. Vous pouvez cliquer sur l'icône crayon sous le champ de texte pour choisir de :

- cliquer sur la première occurrence (par défaut)
- cliquer sur la deuxième, troisième, etc.
- cliquer aléatoirement parmi toutes les occurrences.

</TabItem>
<TabItem value="Survoler" label="Survoler">

Hover utilise les mêmes conditions que Click, mais déplace uniquement la souris sur le texte ou l'élément CSS choisi sans cliquer dessus.

Cette action est utile si des éléments se chargent après que la souris a survolé une partie de l'écran sans avoir besoin d'être cliqués.

Si vous recherchez par texte, le texte doit appartenir à une seule balise HTML. Notez que du texte qui apparaît visuellement comme une seule phrase peut être réparti sur plusieurs balises. Dans certains cas, ce qui ressemble à du texte peut en réalité être une image de texte ; dans ce cas, vous devez sélectionner l'image comme élément, car la sonde ne reconnaît pas le contenu d'une image.

```html
<p>Click <span class="emphasis">quickly</span> to see what comes next</p>
```

```html
<p>Click quickly to see what comes next</p>
```

Par défaut, Experience Monitoring recherche la première occurrence du texte ou de l'élément sélectionné. Vous pouvez cliquer sur l'icône crayon sous le champ de texte pour choisir de :

- cliquer sur la première occurrence (par défaut)
- cliquer sur la deuxième, troisième, etc.
- cliquer aléatoirement parmi toutes les occurrences.

</TabItem>
<TabItem value="Remplir un formulaire" label="Remplir un formulaire">

Remplissez des champs de texte avec un contenu spécifique. La sonde s'appuie sur les standards HTML pour ce faire.

**Sélecteur CSS du formulaire**

Nécessaire si la page contient plusieurs formulaires, cette option limitera la sonde au formulaire choisi.

**Remplir le champ nommé** : les champs peuvent être sélectionnés par leur nom, leur texte de substitution, leur texte d'étiquette ou par des sélecteurs CSS.
**avec** : le texte que la sonde saisira dans le champ.

Cliquez sur **Ajouter un champ** pour chaque champ que la sonde doit remplir.

Par défaut, Experience Monitoring soumet le formulaire une fois rempli. Vous pouvez cliquer sur l'icône crayon sous **Ajouter un champ** pour choisir de :

- Soumettre automatiquement (par défaut) : équivalent à appuyer sur Entrée dans un formulaire
- Désactivé : ne rien faire une fois le formulaire rempli
- Cliquer sur un texte : utile si le formulaire est soumis ailleurs sur la page
- Cliquer sur un élément CSS : même idée.

</TabItem>
<TabItem value="Attendre" label="Attendre">

Parfois, il n'y a pas de meilleure solution qu'attendre qu'une action se produise. Par exemple, si des éléments apparaissent en fondu après 1 seconde, essayer d'ajouter une étape sans action d'attente entraînera l'échec du parcours utilisateur, car la sonde recherche immédiatement des éléments qui ne sont pas encore visibles.

Cette option doit être utilisée en dernier recours et de façon rare, car elle ralentit les statistiques de votre parcours utilisateur.

</TabItem>
<TabItem value="Exécuter un script" label="Exécuter un script">

Si toutes les autres actions échouent, vous pouvez utiliser cette option pour exécuter du JavaScript dans le navigateur afin de forcer une action. Évitez d'utiliser des scripts pour remplacer d'autres actions, sauf si nécessaire. Notez que le script garantit que l'action est exécutée, mais pas qu'elle réussit ; vous devez donc ajouter une [étape de vérification](#ajouter-une-vérification) après chaque script :
- DOM : (élément visible, classe modifiée)
- Réseau : requête attendue (URL, statut HTTP...)

Gardez vos scripts courts, simples et avec des spécifications précises.

</TabItem>
</Tabs>

## Ajouter une vérification

Il existe une septième action (parfois) facultative que la sonde peut effectuer après chaque autre action.
Cette action n'apparaît pas parmi les autres actions à sélectionner, mais s'affiche en bas de la fenêtre d'action une fois que l'action a été configurée.

**Ajouter une vérification** permet à la sonde de vérifier que l'action a été correctement exécutée. Vous pouvez ajouter une vérification après chaque action.

Par exemple, imaginez que votre parcours utilisateur simule un utilisateur effectuant des achats sur votre site et passant à la caisse.
Ajouter une vérification à l'étape « ajouter un article au panier » (c'est-à-dire rechercher du texte confirmant que l'article a été ajouté) vous permet de confirmer que la sonde ajoute bien des articles au panier et ne procède pas à la caisse avec un panier vide.

> Une action de vérification est automatiquement ajoutée pour chaque action **Naviguer** afin de confirmer que la sonde a atteint avec succès l'URL cible. Cette vérification ne peut pas être supprimée.
> De plus, la dernière action du parcours utilisateur doit comporter au moins une vérification.

#### Confirmer que la navigation a eu lieu

> Cette vérification est ajoutée automatiquement pour une action **Naviguer** et ne peut pas être supprimée.

La sonde vérifie qu'un nouveau document HTML a été correctement chargé, ce qui signifie :

- Le document HTML s'est entièrement chargé
- Le code de statut de la réponse est 200

Aucune vérification du contenu n'est effectuée.

#### Trouver du texte

> Nous recommandons d'utiliser des sélecteurs CSS car ils sont moins sensibles aux changements de site.
Si vous ne savez pas comment créer des sélecteurs CSS, vous pouvez rejoindre notre [plateforme communautaire](https://thewatch.centreon.com/) pour demander de l'aide pour configurer votre parcours utilisateur.

Cette vérification utilise la même logique que les actions Click et Hover. Si le texte que vous recherchez existe sur la page après l'action, la vérification réussit.

#### Trouver l'élément CSS

Cette vérification trouve un élément en utilisant son sélecteur CSS. S'il s'agit d'une image, la sonde vérifie également que l'image se charge correctement.

#### Effectuer une requête

Cette vérification valide qu'une requête vers une adresse a été effectuée à un moment donné après l'action. La requête doit réussir ; les redirections sont autorisées.

## Étape ou action échouée

![image](../../assets/configuration/user-journey/failed-step.png)

Lorsque la sonde ne parvient pas à exécuter une étape ou une action, l'étape correspondante est colorée en rouge.
L'icône « ! » indique où l'échec s'est produit.
Cliquez sur l'icône pour afficher les détails de ce qui a causé cet échec, avec une capture d'écran de la page où la sonde a échoué.
Vous pouvez trouver des informations sur ce qui a causé l'échec de cette étape ou action ; pour plus d'informations à ce sujet, lisez notre [guide de dépannage des parcours utilisateur](../../performance-analysis/errors-and-unavailability-front-end.md).
