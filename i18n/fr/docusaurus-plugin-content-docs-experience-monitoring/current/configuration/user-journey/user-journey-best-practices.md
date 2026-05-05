---
id: user-journey-best-practices
title: Bonnes pratiques des Parcours Utilisateurs
--- 

## Gestion des iframes

Vu la façon dont Experience Monitoring gère la possible présence d’iframes dans une page, un point important est à prendre en compte dans ce cas de figure précis. Si des iframes sont présentes et que nous souhaitons manipuler des sélecteurs CSS, il est nécessaire de choisir des selecteurs CSS qui sont soit à l'intérieur d'une iframe, soit à l'extérieur, mais **PAS** des selecteurs qui "traversent" les 2 contextes, ce qui ne fonctionnera pas. 

Voici un exemple explicatif, imaginons que le code HTML est architecturé comme ceci :

```html
<div class="main">
  <form id="my-form"></form>
  <iframe>
    <div class="frame-content">
      <form id="my-form">
      </form>
    </div>
  </iframe>
</div>
```

```css
.main iframe
```

⇒ renvoie bien l'iframe

```css
#my-form
```

⇒ renvoie le 1er my-form (celui qui n'est pas dans l'iframe)

```
.main iframe .frame-content
```

⇒ ne fonctionne pas, car `.frame-content` appartient au document de l'iframe

```
.frame-content #my-form
```

⇒renvoie bien le form qui se trouve à l'intérieur de l'iframe cette fois-ci

```
iframe #my-form
```

⇒ ne fonctionne pas car #my-form est déja dans le document de l'iframe.

>**Quand on veut un élément qui est à l'intérieur d'une iframe, on doit faire comme si TOUT ce qu'il y a en dehors du CONTENU de l'iframe n'existait pas.**

## Bonnes Pratiques

### Privilégier les sélecteurs CSS au texte
    
    L'avantage des sélecteurs par texte est qu'il suffit de copier coller un texte de la page. L'inconvénient c'est que ce texte peut parfois être trouvé ailleurs dans la page même s'il n'est pas forcément visible et donc ne pas fonctionner comme attendu.
    
    Évidemment, plus le texte est spécifique, plus il a de chances d'être unique.
    
    Attention : une phrase visible à l’écran sur le site peut en réalité être fragmentée dans le code HTML. C’est systématiquement le cas typiquement si un ou plusieurs mots sont dans un style différent (bold ou autre couleur). Or dans son attente d’une chaine de caractère spécifiée dans le scénario, Experience Monitoring ira rechercher à l’intérieur du code HTML ⇒ en clair, si le texte est fractionné, il pourrait ne pas être trouvé.
    
    Pour être certain que la chaîne spécifiée comme élément attendu dans Experience Monitoring est bien celle qui est présente dans le code HTML, nous vous conseillons d’effectuer un “Clic-droit” puis “Inspecter dans le code HTML” pour copier/coller la chaine directement depuis le code HTML, ce qui évite toute erreur. Enfin, les espaces avant et après le texte sont également à éviter, il est préférable de les supprimer manuellement.
    

### Spécifier un sélecteur CSS pour les formulaires
    
    Si vous ne spécifiez pas de sélecteur CSS sur un formulaire, la sonde essaiera de remplir les champs correspondants partout dans la page. De même sans sélecteur, l'envoi automatique soumettra le premier form trouvé.
    
    **Mettre un sélecteur CSS permet donc de garantir que les bons champs soient remplis et que le formulaire soit correctement envoyé.**
    

### Nettoyer les classes utilitaires ou générées des sélecteurs CSS
    
    Lorsque vous utilisez la fonction "Copy CSS selector" de Chrome, le sélecteur généré comporte généralement beaucoup de classes CSS (notation .nom-de-la-classe) dont la plupart peuvent être superflues. On pense notamment aux classes utilitaires (par exemple .alert-danger) ou aux classes générées par le framework (par exemple .menu-item-x823ds83sa9c). Ces classes n'apportent rien à la précision du sélecteur CSS, ce qui au mieux complique la maintenabilité (le moindre changement de classe utilitaire d'un élément causera une erreur "*Element not found*") et pourra même empêcher le sélecteur de fonctionner (dans le cas des classes générées aléatoirement à chaque chargement de la page).
    
    De la même manière, il peut être pertinent d'assouplir la notion "d'enfant" directement dans les sélecteurs CSS (décrite par le symbole ">") car l'insertion d'un élément entre les 2 demandera une modification du CSS sélecteur. Le retrait du symbole ">" conserve la notion de hiérarchie entre les éléments mais n'impose pas une relation "d'enfant" direct.
    
### Éviter l'action "wait"
    
    L'action wait est le dernier recours lorsqu'il n'est pas possible d'ajouter une vérification sur l'action précédente.
    
    **Il est toujours préférable de choisir une vérification** car elle ne demandera pas de micro-réglage de la durée pour conserver le parcours utilisateur stable elle n'impactera pas les mesures de l'interaction (le wait est décompté dans le Hero Time)
    
    Il existe certains cas ou l'action wait est nécessaire car il n'est pas possible d'ajouter une vérification, par exemple :
    
    - La page ajoute des event handlers après le onLoad : l'action souhaitée peut donc être déclenchée avant d'être prête à être traitée par la page (c'est un bug du site mais cela peut se produire plus facilement avec la sonde puisque celle-ci est bien plus rapide qu'un utilisateur)
    - Une action modifie la page mais il n'est pas possible de mettre une vérification sur cette modification. Par exemple si la modification concerne un attribut autre que "id" ou "class", qui n'est donc pas monitoré, on pourra recourir au wait (mais il conviendra de se demander d'abord si cette action à un quelconque intérêt)
    
    Pour éviter d'impacter les mesures, il est recommandé dans la mesure du possible d'isoler l'action wait dans une interaction à part et non mesurée (NB: les vérifications ne sont pas obligatoires pour les interactions non mesurées).
    
### Éviter le random
    
    Le random peut-être utile pour les tests de charge notamment mais peut aussi introduire des variations de performance qui rendront alors les mesures difficilement comparables.
    
    **Il est préférable de choisir une cible fixe ou bien de sélectionner systématiquement le premier élément.** Cela permet aussi de mettre des vérifications plus précises, spécifique à la page visitée.
    

### Choisir intelligemment les éléments à vérifier
    
    Les vérifications servent à mesurer le *Hero Time* — un indicateur clé de la perception de performance par l'utilisateur. Il est donc essentiel de sélectionner des éléments réellement représentatifs de l'expérience utilisateur, tout en évitant les vérifications redondantes qui alourdiraient inutilement la configuration.
    
    **Notre recommandation : identifier 2 à 3 éléments clés** (par exemple, la plus grande image ou *background-image*, un texte structurant comme le titre principal, et le *call-to-action* principal). Cela permet d’avoir une mesure pertinente et maintenable, sans surcharger le scénario avec des vérifications superflues.
    
### L'action "Exécuter un script"

    L'utilisation d'un script n'est recommandée que si vous n'avez pas eu de résultats avec les autres actions disponibles dans la configuration de parcours utilisateurs. Notez que le script garantit la réalisation d'une action mais pas son résultat. Par conséquent, vous devez ajouter au moins une vérification après chaque script.

    Évitez d'utiliser un script pour remplacer une vérification ou pour cacher une instabilité du site.

    Utilisez des scripts courts, simples et avec des spécifications précises.

### Ajouter des vérifications sur les cibles des actions
    
    Lorsqu'une action cible un texte ou un sélecteur CSS, il est bénéfique d'ajouter une vérification sur cet élément **lors de l'action précédente** pour s'assurer que la cible soit bien apparue (et la cible est de-facto un élément important qui mérite d'être compté dans le Hero Time).
    
    **Exemple :** La 4e action de mon parcours est *Cliquer sur le bouton 'Ajouter au panier'.* J'ajoute donc une vérification dans ma 3e action de type *Le text "Ajouter au panier" a été inséré dans la page.*
    

### Ajouter une vérification de navigation pour les interactions qui naviguent
    
    La vérification de navigation permet non seulement d'inclure le temps de la requête de navigation dans le Hero Time mais également:
    - D'en vérifier le code de retour
    - D'attendre (sans le compter dans le Hero Time) l'évènement de load de la page (ce qui permet aussi de récupérer un speedIndex)
    
### Ajouter des vérifications sur les requêtes AJAX importantes
    
    Cela permet d'une part de valider le code de retour de l'appel AJAX, mais aussi de s'assurer que le Hero Time est bien représentatif des éléments les plus importants de la page.
    
### Nettoyer les vérification de requête des paramètres superflus
    
    Certaines requêtes incluent des paramètres qui peuvent varier :
    
    - soit de temps à autre, ex: ID produit sur une étape dynamique
    - soit systématiquement (ex: bypass de cache de type "?_=&lt;timestamp&gt;")
    
    Ce type de paramètres diminue la maintenabilité (voire peut causer des erreurs en cas de paramètre qui change à chaque fois). **L'idéal est de n'inclure que les paramètres qui sont nécessaires pour identifier spécifiquement la requête de la page,** auquel cas la sonde ne sera pas sensible aux paramètres supplémentaires qui pourraient être présents
    
    Exemple : si nous spécifions comme requête attendue “*/addToCart?qty=1”, alors toutes les requêtes finissant par “/addToCart” vont matcher si le paramètre qty=1 est présent, y compris si d’autres paramètres sont présents (avant ou après dans la chaine de l’URL).
    
### Filtrer certains tags 3rd party (*mais pas trop*)
    
    Les sites web ont souvent de nombreuses solutions tierces intégrées à leur page. Il est souvent de bon usage de “blacklister” les trackers de solutions d'analytics pour éviter de fausser les stats de l’équipe digital marketing.
    
    Pour répondre à cette problématique, Experience Monitoring contient une blacklist par défaut configurée dans tout nouveau scénario. Cette blacklist filtre par exemple par défaut les requêtes vers Google Analytics, mais d’autres outils de tracking spécifique au site peuvent encore passer. Il peut donc être judicieux d’évoquer ce point avec l’équipe marketing digital pour s’assurer qu’il n’y a pas de contre-indication à ce qu'Experience Monitoring requête leurs autres tags.
    
    A garder en tête également que certains tags 3rd party sont nécessaires au bon fonctionnement de la page. Dans ce cas il sera donc important de ne pas les bloquer.
    
### Protips sur l’usage des sélecteurs CSS
    
#### Rendre vos sélecteurs CSS robustes et fiables
    
    Pour garantir la fiabilité des scénarios de monitoring, il est essentiel d’utiliser des sélecteurs CSS à la fois explicites et résilients aux évolutions du code HTML. Voici les bonnes pratiques à suivre :
    
    **1. Préférez les identifiants uniques ou les classes explicites**
    
    Un sélecteur comme `div.modal-add-to-cart` est préférable à un générique `div.w-full`, car il est beaucoup plus spécifique à une fonctionnalité métier. Les classes purement stylistiques (souvent courtes, génériques ou issues de frameworks CSS) risquent d’être réutilisées ailleurs sur la page et de provoquer des collisions.
    
    >*Règle simple : plus un nom est lisible et fonctionnel, plus il est fiable.*
    
    **2. Utilisez les identifiants (ID) quand ils sont disponibles**
    
    Les sélecteurs basés sur un `id` HTML (`#add-to-cart-btn`) sont souvent les plus sûrs car ils sont censés être uniques sur la page. Si le bouton ou l’élément que vous ciblez possède un ID, privilégiez-le.
    
    **3. Désambigüisez avec des sélecteurs "en cascade"**
    
    Lorsque plusieurs éléments partagent le même sélecteur (ex : plusieurs `button.qty`), précisez leur contexte pour éviter les erreurs. Par exemple :
    
    ```css
    div.modal-add-to-cart button.qty
    ```
    
    Ce sélecteur ne cible que les boutons `.qty` présents dans une modale spécifique. Cela permet de restreindre la recherche à une zone précise du DOM, rendant votre scénario plus stable face aux évolutions.
    
    **4. Favorisez les sélecteurs hiérarchiques avec un ou plusieurs espaces**
    
    Un sélecteur CSS comme `section.product-detail div.buy-zone button.cta` offre un bon compromis entre spécificité et flexibilité. Il reste robuste même si un nouveau niveau de balise est inséré dans le HTML (ce qui casserait un sélecteur trop strict ou exact).
    
#### Exemples utiles de sélecteur CSS avancés
    
    Voici ici quelques exemples de sélecteur CSS avancés qui peuvent se révéler très utiles dans certaines situations :
    
    **:not()**
    
    Exemple 1 :
    **.counter.qty:not(.empty)** : Class .qty sans la class empty (&lt;div class="qty"&gt;)
    
    L'usage du :not() est particulièrement utile dans l'exemple ci-dessus pour indiquer que le panier n'est plus vide. On se rend d'ailleurs compte que le :not(...) peut servir à détecter la **disparition** d'une classe sur un élément ! Il faut alors bien penser le test de manière inversée.
    
    Exemple 2 : 
    
    Un autre exemple assez fréquent, il s'agit d'un bouton qui est grisé au départ et possède une classe ".disabled". Disons que le bouton a comme ID "product-addtocart-button". Dans le code HTML initial de la page, le bouton va ressembler à ça :

    ```css
    <button id="product-addtocart-button" class="add-to-cart **disabled**">
    ```

    ****Suite à une action sur le site (ex: choix d'une taille d'un produit), le bouton va se dégriser en se voyant supprimer sa classe "disabled", il devient :

    ```css
    <button id="product-addtocart-button" class="add-to-cart">
    ```

    On peut alors insérer un test dans le scénario qui vérifie l'apparition du sélecteur CSS suivant : **#product-addtocart-button:not(.disabled)**
    
    En effet, si on teste cette chaine avec la console de Chrome, alors que le bouton est grisé on voit que le sélecteur CSS ne renvoi rien. Par contre, dès que la taille du produit a été sélectionnée et que la classe .disabled disparait, alors le sélecteur CSS va renvoyer l'objet. Au sens du scénario Experience Monitoring, cet élément **#product-addtocart-button:not(.disabled)** apparait ! C'est donc un parfait test pour vérifier que le bouton d'ajout au panier est désormais dé-grisé, avant d'envisager de le cliquer.
    
    Exemple 3 :
    La formulation :not() peut s'appliquer à d'autres éléments que les classes. En l'occurence, Experience Monitoring surveille également l'apparition et la disparition des paramètres "disabled" ou "disable" au sein des objets du DOM, car il est fréquent que l'aspect "grisé" d'un bouton soit stocké sous forme d'un paramètre et non d'une classe (attention à ces subtilités qui sont spécifique à chaque site !).
    Vous pouvez donc avoir un bouton qui ressemble à ça :

    ```css
    <button id="product-addtocart-button" class="add-to-cart" **disabled**>
    ```

    Vous remarquez ici que le disabled est extérieur aux classes, c'est un autre "paramètre".
    Pour constater la disparition de ce paramètre "disabled", on peut donc attendre l'apparition de la chaine CSS suivante : 
    
    **#product-addtocart-button:not([disabled])**
    
    Attention, ce paramètre peut être également rempli avec une chaine, comme ceci : 
    
    ```css
    <button id="product-addtocart-button" class="add-to-cart" **disabled="disabled"**>
    ```
    
    Si c'est le cas, on peut imaginer que le site ne supprime pas le paramètre, mais le remplisse avec une chaine "false" quand il se dégrise, comme ceci :
    
    ```css
    <button id="product-addtocart-button" class="add-to-cart" **disabled="false"**>
    ```

    Auquel cas, il conviendra de bien préciser la valeur du paramètre dans le not() dans notre chaine attendue comme ceci : 
    
    **#product-addtocart-button:not([disabled="disabled"])**
    
    Dans ce cas, le sélecteur CSS va "apparaitre" dans les cas où le paramètre "disabled" disparaitrait complètement OU BIEN si sa valeur devient n'importe quoi d'autre que "disabled". Dans le cas d'un passage à un état disabled="false", alors le chaine sera bien vérifiée et notre objectif de scénario rempli. 
    **a[href="https://www.xxxxx.com/"]**
    
    Ce sélecteur permet de dire : je veux l'élément cliquable ("a") dont l'URL de destination est "https://www.xxxxx.com/".
    Cela peut être utile dans certains cas, mais attention tout de même, car utiliser cette formule revient un peu à naviguer sur une URL spécifique. En effet, si l'URL de la page de destination devait être ne serait-ce que très légèrement modifiée, alors le scénario sera en échec.
    Quand les boutons ont des classes ou des ID bien explicites, il est préférable de les utiliser pour réaliser les actions clics, ainsi en cas de léger changement d'URL, le scénario Experience Monitoring va s'adapter et faire sa navigation toujours correctement comme le ferait un internaute.
    Notre recommandation est d'utiliser cette formule pour :
    
    - aller sur des URLs dont la formulation n'est pas amené a changer, exemple : "www.site.com/checkout/cart/".
    - ou bien, quand les ID, classes et autres éléments de la page rendent la sélection du bon lien trop incertaine. Dans ce cas il y a un compromis à faire. Exemple, si vous souhaitez cliquer sur une catégorie spécifique au sein d'un menu et que votre sélecteur CSS revient à cliquer sur le 8ème élément d'une liste... dites-vous qu'il est probable qu'un micro-changement sur le site décale votre clic et envoi votre scénario sur la mauvaise page. Dans ce cas, n'hésitez pas à utiliser la formulation a[href="https://www.xxxxx.com/"]**.**
    
    **button[data-role="change-store"]**
    
    Il est possible de désigner des objets en fonction des paramètres spécifiques qui les composent. Cette chaine permettra de cliquer sur l'élément de ce type : &lt;button data-role="change-store"&gt;
    
    >Attention néanmoins, il est important de savoir qu'Experience Monitoring ne vérifie pas systématiquement **les changements d'états des paramètres** des objets de la page après avoir récupéré le code HTML initial. En effet, un compromis a du être fait en matière de performance lors de l'exécution des scénarios, et il a été choisi de surveiller les changements suivants :
    
    - changement sur les classes (apparition, disparition)
    - changement sur les paramètres "disabled" ou "disable"
    
    En dehors de ces éléments, les **changements** peuvent ne pas être détectés ! Dans l'exemple ci-dessus, si suite à l'exécution d'un Javascript dans la page, le bouton **button[data-role="change-store"]** devient **button[data-role="checkout"]** alors il ne faudra pas utiliser ce changement dans une vérification.
    
    Cette expression est donc réservée aux interactions avec des objets dont les paramètres **n'ont pas changé** depuis le chargement du code HTML initial. Si vous avez un doute sur le fait que le paramètre soit bien présent dans le code HTML initial, vous pouvez vous rendre dans la console de Chrome, dans l'onglet Network, puis cliquer sur la toute première requête de la page, puis cliquer dans l'onglet "Response". Vous verrez alors s'afficher le code HTML initial, tel qu'il a été transmis à votre navigateur avant d'éventuelles modifications réalisés par le code javascript. Un "CTRL-F" pour rechercher l'élément vous amènera directement au bon endroit.
    
    Il peut être par exemple tentant de vouloir détecter un changement sur le paramètre "display" (exemple : un objet qui mais ce paramètre malheureusement beaucoup trop de changement pour être surveillé sans une très forte dégradation des performances.
    
    **button[id^="checkout-"]**
    
    Ce sélecteur permet de dire "je souhaite récupérer les boutons de la page, dont l'ID **commence par** "checkout-". Cela permet par exemple de récupérer un bouton de ce type : &lt;button id="checkout-920284853"&gt;
    
    On aurait pu mettre dans le scénario le sélecteur CSS "button#checkout-920284853", mais voyant le très grand chiffre qui figure sur la fin de cette ID, on peut largement supposer qu'il s'agit d'un paramètre généré automatiquement. La mention d'un objet comprenant un grand chiffre ou une chaine de caractère ayant l'air aléatoire est à éviter, car si ce chiffre est re-généré au moment d'une nouvelle mise en production sur le site, le scénario Experience Monitoring se mettra en erreur. Par exemple, si suite à la mise en production le bouton devient &lt;button id="checkout-946202742"&gt;, alors notre chaine de sélection ne correspondra plus et ne trouvera pas le bouton.
    A l'inverse, si nous avons utilisé la chaine **button[id^="checkout-"]** alors le scénario continuera d'identifier le bon bouton avec son chiffre pourtant modifié.
    Ces subtilités sont importantes pour éviter d'avoir à mener des maintenances trop récurrentes sur un scénario. Il y a une balance à trouver entre :
    
    - être suffisamment restrictif dans le scénario pour détecter les erreurs
    - mais en même temps savoir insérer un peu de souplesse dans les sélecteurs CSS utilisés, les requêtes et les chaines vérifiées dans chaque action, afin que le scénario continue de tourner correctement lors de changement mineurs sur le site.
    
    **a.action-button,a.action-checkout**
    
    La virgule au milieu d'un sélecteur CSS dans l'exemple ci-dessus veut dire : "je veux l'objet 'a' qui a la classe "action-button" OU BIEN (dans le cas où le premier n'existe pas) l'objet 'a' qui a la classe "action-checkout".
    
    Les possibilités via ce caractère "," sont assez puissantes, car on peut tout à fait l'utiliser pour créer **une condition** dans Experience Monitoring.
    
    Exemple : j'ai un site Ecommerce à surveiller, et je créé un scénario assez classique qui, depuis la homepage va cliquer sur la première catégorie disponible, puis sur le premier produit de cette catégorie pour ensuite faire un ajout au panier.
    Il peut arriver assez souvent que certains produits du catalogue soit "**configurables"** et d'autres non. Configurable veut dire qu'il y a une option à choisir avant de pouvoir ajouter au panier, des options comme :
    - une pointure pour une paire de chaussures
    - une couleur- un motif de tissu
    - etc.
    Sur certains sites, si l'option n'a pas été choisie (cliquée) par l'utilisateur alors le bouton d'ajout au panier va rester grisé.
    La difficulté ici sera donc de faire un scénario adaptatif, qui sait gérer plusieurs types de produits distincts qui ne sont pas configurables de la même manière, c'est là que notre "," devient une précieuse arme ;-)
    
    Exemple, pour cliquer sur la première couleur proposée OU sur la première pointure proposée OU le premier motif proposé, je vais pouvoir faire un clic sur un sélecteur qui ressemble à ça :
    
    select.choose-color,select.choose-size,select.choose-pattern
    
    Dans ce cas, Experience Monitoring va cliquer sur le premier élément existant dans l'ordre de la gauche vers la droite. De cette façon, qu'il faille configurer le produit par sa couleur, sa taille ou son motif, Experience Monitoring saura alors cliquer celui qui est existant sur la page, ce qui va dégriser le bouton d'ajout au panier. Ceci est un bon exemple de scénario adaptatif.
    
## Pour aller plus loin
    
    Comme vous avez pu le voir par ces exemples, les sélecteurs CSS regorgent de fonctions, qui vont donner une immense flexibilité aux scénarios créés dans Experience Monitoring.
    
    Nous avons regroupé ci-dessus les cas d'utilisation les plus fréquents, mais la liste est non exhaustive. Pour aller plus loin, n'hésitez pas à consulter la "bible", le site w3schools.com :D
    
    [https://www.w3schools.com/cssref/css_selectors.asp](https://www.w3schools.com/cssref/css_selectors.asp)
    