---
id: cma-custom
title: Utiliser des plugins personnalisés avec CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Centreon Monitoring Agent** est capable d'exécuter des plugins personnalisés. Utilisez cette fonctionnalité si vos besoins de supervision sont spécifiques et non couverts par les contrôles natifs et plugins Centreon. Les langages supportés sont : PowerShell, Perl, Python, Bash.

Pour commencer, créez votre plugin : vous pouvez par exemple utiliser [notre guide développeur](/pp/integrations/plugin-packs/dev-resources/introduction).

## Actions sur l'hôte

1. Copiez le plugin sur l'hôte, dans le répertoire de votre choix.
2. Créer le fichier de commandes

La déclaration des plugins personnalisés (commandes) se fait dans un fichier dédié, sur l’hôte.

Formats supportés : .txt ou .ini

Exemple de contenu :

```bash
[custom_checks]
check_echo = /usr/bin/echo "$ARG1$ $ARG2$"
custom_check_2 = /path/to/custom_check_2 -c /arg=$ARG1$
...
```

3. Déclarer le fichier

Le chemin vers le fichier doit être déclaré dans la configuration de l'agent, vie le paramètre **custom_check_file**.

* Linux : centagent.json

```json
{
  ...
  "custom_check_file":"/path/to/commandsfile.ini",
  ...
}
```

* Windows : via l'installeur/mode silencieux (**/CUSTOMCHECK**) ou directement en base de registre (**custom_check_file**).

## Actions dans Centreon

1. Sur votre serveur central, si ce n'est pas déjà fait, [creér l'hôte](../monitoring/basic-objects/hosts.md) correspondant à la ressource à superviser.

2. Créer un service basé sur le modèle de service proposé ou créer un modèle de service dédié.
Auquel cas, le modèle doit hériter (directement ou via son parent) des modèles **OS-Linux-Custom-Script-Centreon-Monitoring-Agent** ou **OS-Windows-Custom-Script-Centreon-Monitoring-Agent**, et être configuré avec les contrôles passifs activés et les contrôles actifs désactivés.

3. Renseigner les macros

$_SERVICECUSTOMCHECK$ : le nom de la commande déclarée sur l'hôte (ex : **check_echo**)
$_SERVICEARG1$ : valeur qui sera passée à **$ARG1$** dans la commande déclarée

Il est possible de passer jusqu'à 8 valeurs ($_SERVICEARG1$ à $_SERVICEARG8$).

4. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).
