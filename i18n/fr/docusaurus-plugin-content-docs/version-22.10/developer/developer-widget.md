---
id: developer-widget  
title: Comment écrire un widget
---

Centreon offre un système d’affichage personnalisé qui permet à l’utilisateur d’afficher un ou plusieurs widgets sur la même page : **Accueil > Vues personnalisées**.

Vous pourriez avoir des besoins spécifiques qui ne sont pas encore couverts par notre catalogue de widgets et ce tutoriel vous expliquera comment écrire votre premier widget pour Centreon.

## Dois-je développer un widget ou un module ?

Si vous ne savez pas si vous devez créer un module ou un widget, demandez-vous si votre projet est destiné à contenir de nombreux menus ou s’il s’agit plutôt d’une page simple qui affichera peu d’informations.

Bien sûr, vous pourriez créer un widget qui ne fonctionnerait qu’avec un module donné.

## Structure du répertoire

Les widgets fonctionnent à peu près comme les modules. Ils doivent être placés dans le répertoire suivant :

```Shell
centreon/www/widgets/name-of-your-widget/
```

Votre widget doit contenir un fichier obligatoire nommé **configs.xml** à sa racine.

## Fichier de configuration

Voici le fichier de configuration XML de notre widget d'exemple :

```XML
<configs>
    <title>Dummy</title>
    <author>Centreon</author>
    <email>contact@centreon.com</email>
    <website>http://www.centreon.com</website>
    <description>Dummy widget</description>
    <version>1.0.3</version>
    <keywords>dummy, widget, centreon</keywords>
    <screenshot></screenshot>
    <thumbnail>./widgets/dummy/resources/logoCentreon.png</thumbnail>
    <url>./widgets/dummy/index.php</url>
    <autoRefresh></autoRefresh>
    <preferences>
        <preference label="text preference" name="text preference" defaultValue="default value" type="text"/>
        <preference label="boolean preference" name="boolean preference" defaultValue="1" type="boolean"/>
        <preference label="date" name="date" defaultValue="" type="date"/>
        <preference label="host preference" name="host preference" defaultValue="" type="host"/>
        <preference label="list preference" name="list preference" defaultValue="none" type="list">
            <option value="all" label="all"/>
            <option value="none" label="none"/>
        </preference>
        <preference label="range preference" name="range preference" defaultValue="5" type="range" min="0" max="50" step="5"/>
        <preference label="host search" name="host search" defaultValue="notlike _Module_%" type="compare"/>
    </preferences>
</configs>
```

Voyons maintenant à quoi ces balises font référence.

### Balises de base

\* = balise obligatoire

| Nom de la balise| Description
|----------|----------
| title\*| Titre de votre widget
| author\*| Votre nom
| email| Votre adresse e-mail
| website| URL de votre projet
| description\*| Brève description de votre widget
| version\*| Version de votre widget. Incrémentez ce numéro chaque fois que vous publiez une nouvelle version.
| keywords| Quelques mots clés qui décrivent votre widget
| screenshot| Une capture d’écran qui montre votre widget sous son meilleur jour. La capture d’écran doit être placée dans votre répertoire de widgets.
| thumbnail| Le logo de votre projet. La taille qui convient le mieux est 100px x 25px. Les vignettes doivent être placées dans votre répertoire de widgets.
| url\*| Le chemin de la page principale de votre widget
| autorefresh| Ce paramètre n’est pas encore implémenté

### Attributs des paramètres

\* = *Paramètre obligatoire*

| Attributs des balises| Description
|----------|----------
| label\*| Étiquette du paramètre
| name\*| Nom du paramètre qui sera utilisé pour récupérer sa valeur
| defaultValue\*| Valeur par défaut du paramètre
| requirePermission| La valeur peut être « 1 » ou « 0 ». Lorsqu’il est défini sur 1, ce paramètre ne sera pas affiché pour les utilisateurs non autorisés.
| type\*| Type de paramètre, doit être l’un des suivants : text,boolean,date,list,range,compare,host,hostgroup, hostTemplate,servicegroup,serviceTemplate
| min\*| Pour le type de plage uniquement. Il s’agit de la valeur minimale du paramètre de la plage.
| max\*| Pour le type de plage uniquement. Il s’agit de la valeur maximale du paramètre de la plage.
| step\*| Pour le type de plage uniquement. Il s’agit de la valeur de l’étape du paramètre de la plage.

# Type de paramètre

| Nom de la balise| Description
|----------|----------
| text| Rend un élément de saisie de texte
| boolean| Rend une case à cocher
| date| Rend deux éléments de saisie de texte. L’un pour la date de début, l’autre pour la date de fin.
| list| Rend une boîte de sélection. La boîte de sélection sera remplie avec les balises d’option qui doivent être définies dans la balise de préférence.
| range| Rend une boîte de sélection qui sera remplie de valeurs en fonction des définitions de min, max et étape.
| compare| Rend une boîte de sélection et une saisie de texte. La boîte de sélection contiendra des opérandes SQL tels que :
| | \> : supérieur à
| | \< : inférieur à
| | \>= : supérieur ou égal à
| | \<= : inférieur ou égal à
| | \= : égal à
| | != : non égal à
| | LIKE : peut être utilisé avec le caractère générique %%.
| | NOT LIKE : peut être utilisé avec le caractère générique %%.
| host| Rend une boîte de sélection remplie d’une liste d’hôtes.
| hostgroup| Rend une boîte de sélection remplie d’une liste de groupes d’hôtes.
| hostTemplate| Rend une boîte de sélection remplie d’une liste de modèles d’hôtes.
| servicegroup| Rend une boîte de sélection remplie d’une liste de groupes de services.
| serviceTemplate| Rend une boîte de sélection remplie d’une liste de modèles de services.

La fenêtre des préférences se présente alors comme suit :

.. image : /\_static/images/extending/pref\_dummy\_widget.png :align: center

### Code

Toutes les langues sont séparées dans différents fichiers, un fichier pour chaque langue. Le fichier « configs.xml » appelle le fichier PHP et le fichier php appelle le fichier HTML, etc...

Nous utilisons Smarty, qui est un moteur et un compilateur de templates PHP (http://smarty.net).

Pour utiliser Smarty, vous devez :

```PHP
require_once $centreon_path . 'GPL_LIB/Smarty/libs/Smarty.class.php';
```

1. Configurer Smarty :

```PHP
$path = $centreon_path . "www/widgets/Dummy/src/";
$template = new Smarty();
$template = initSmartyTplForPopup($path, $template, "./", $centreon_path);
```

2. Créer un modèle PHP à utiliser en html :

```PHP
$template->assign('widgetId', $widgetId);
$template->assign('autoRefresh', $autoRefresh);
$template->assign('data', $data);
```

3. Affecter le fichier HTML à exécuter :

```PHP
$template->display('dummy.ihtml');
```


Cette ligne demande à PHP d'appeler le template smarty **dummy.ihtml** pour afficher le résultat :

```PHP
$template->display('dummy.ihtml');
```

Pour requêter les bases de données (**centreon** pour la configuration et **centstorage** pour les données temps réel),
vous devez initialiser l'objet PHP comme décrit ci-dessous (en utilisant **pearDB**) :

```PHP
try {
    global $pearDB;

    $db_centreon = new CentreonDB("centreon");
    $db = new CentreonDB("centstorage");
    $pearDB = $db_centreon;

    $widgetObj = new CentreonWidget($centreon, $db_centreon);
    $preferences = $widgetObj->getWidgetPreferences($widgetId);
    $autoRefresh = 0;
    if (isset($preferences['refresh_interval'])) {
        $autoRefresh = $preferences['refresh_interval'];
    }
} catch (Exception $e) {
    echo $e->getMessage() . "<br/>";
    exit;
}
```

Puis requêter la base en utilisant les méthodes de la classe.
