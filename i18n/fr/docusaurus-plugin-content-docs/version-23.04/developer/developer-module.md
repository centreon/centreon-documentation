---
id: developer-module  
title: Comment écrire un module
---

Vous souhaitez créer un nouveau module pour Centreon ou adapter un module existant ? Vous êtes au bon endroit !

Un modèle de module vide est disponible dans le [dépôt Centreon](https://github.com/centreon/centreon-dummy).

---


> **_REMARQUE :_** La documentation principale est directement stockée dans le [dépôt **centreon-dummy** fourni à titre d'exemple](https://github.com/centreon/centreon-dummy/blob/master/README.md).

---


Il faut savoir que Centreon contient une page dédiée à l’installation et à la désinstallation des modules (**Administration > Extensions > Gestionnaire**). Pour que le module apparaisse sur cette page, son répertoire doit être placé dans le répertoire `modules/` de Centreon. Exemple :

```Shell
/usr/share/centreon/www/modules/dummy
```

## Base

Les éléments essentiels que doit contenir le répertoire de votre module sont présentés ci-dessous :

```PHP
$module_conf['dummy'] = [
    // Short module's name. Must be equal to your module's directory name
    'name' => 'dummy',
    // Full module's name
    'rname' => 'Dummy Example Module',
    // Module's version
    'mod_release' => '23.04',
    // Additional information
    'infos' => 'This module is a skeleton',
    // Allow your module to be uninstalled
    'is_removeable' => '1',
    // Module author's name
    'author' => 'Centreon',
    // Stability of module.
    'stability' => 'stable',
    // Last time module was updated.
    'last_update' => '2020-12-01',
    // Release notes link, if any.
    'release_note' => 'https://docs.centreon.com/current/en/releases/centreon-os-extensions',
    // Images associated with this module.
    'images' => [
        'images/centreon.png',
    ],
];
```

**\[php > install.php]**

Ce fichier PHP est exécuté à l’installation du module s’il est configuré dans le fichier *conf.php*.

**\[php > uninstall.php]**

Ce fichier PHP est exécuté à la désinstallation du module s’il est configuré dans le fichier *conf.php*.

**\[sql > install.sql]**

Ce fichier SQL est exécuté lors de l’installation du module s’il est configuré dans le fichier *conf.php*. Si vous souhaitez que votre module soit disponible dans les menus Centreon, vous devez insérer de nouvelles entrées dans la table `topology` de la base de données `centreon`. Un exemple est disponible à l’intérieur du module `Dummy`.

**\[sql > uninstall.sql]**

Ce fichier SQL est exécuté lors de la désinstallation du module s’il est configuré dans le fichier *conf.php*. Il peut également supprimer votre module des menus Centreon.

**\[generate\_files > \*.php]**

Les fichiers PHP contenus dans le répertoire `generate_files` seront exécutés lors de la génération des fichiers de configuration du moteur de supervision (dans **Configuration > Collecteurs > Collecteurs**). Ces fichiers doivent générer des fichiers de configuration.

**\[UPGRADE > dummy-x.x > sql > upgrade.sql]**

Centreon propose un système de mise à niveau des modules. Pour l’utiliser, il suffit d’ajouter un répertoire sous `UPGRADE` nommé selon le modèle suivant : `<module name>-<version>`. Lorsque vous cliquez sur le bouton de mise à niveau, Centreon recherche les scripts à exécuter, en suivant l’ordre logique des versions.

Par exemple, si la version 1.0 du module d'exemple est installée et que les répertoires suivants existent :

```Shell
ls UPGRADE
dummy-1.1 dummy-1.2
```

Centreon exécutera les scripts dans l’ordre suivant : 1.1, 1.2. Un fichier de configuration dans chaque répertoire de mise à niveau est présent afin d’autoriser (ou non) l’exécution.

Vous êtes libre d’organiser les fichiers restants (le contenu de votre module) comme vous le souhaitez.

## Avancé

> **Cette section est obsolète, veuillez vous référer à la [documentation du dépôt d'exemple](https://github.com/centreon/centreon-dummy/blob/master/README.md)**

C’est fantastique, vous savez comment installer un module ! Comme un module vide n’est pas vraiment utile, faites travailler votre imagination. Sachant que vous pouvez presque tout faire, cela ne devrait pas être trop compliqué :-).

### Connexion à la base de données

Vous pouvez utiliser les bases de données `centreon` et `centstorage` en appelant le fichier suivant : `centreon/www/class/centreonDB.class.php`.

Par exemple, exécutez des requêtes comme celle-ci :

```PHP
$pearDB = new CentreonDB();
$pearDB->query("SELECT * FROM host");
```

### Fonctions existantes

Vous pouvez accéder à la plupart des fonctions déjà développées dans Centreon à l’aide d’instructions `include()`. Elles sont généralement stockées dans `centreon/www/class/`.

Avant de développer votre propre fonction, vérifiez le code existant, cela pourrait vous faire gagner du temps !