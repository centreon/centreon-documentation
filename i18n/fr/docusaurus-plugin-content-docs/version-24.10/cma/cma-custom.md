---
id: cma-custom
title: Utiliser des plugins personnalisés avec CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Centreon Monitoring Agent** est capable d'exécuter des plugins personnalisés. Utilisez cette fonctionnalité si vos besoins de supervision sont spécifiques et non couverts par les contrôles natifs et plugins Centreon. Les langages supportés sont : PowerShell, Perl, Python, Bash.

Pour commencer, créez votre plugin : vous pouvez par exemple utiliser [notre guide développeur](/pp/integrations/plugin-packs/getting-started/develop-plugin).

## Actions sur l'hôte

Copiez le plugin sur l'hôte, dans le répertoire de votre choix.

## Actions dans Centreon

1. Sur votre serveur central, créez une commande exécutant le plugin (ou, si vous utilisiez NSClient++, adaptez la commande existante), selon le langage. Voici un exemple pour chaque langage supporté :

   * PowerShell (Windows)
     ```bash
     "C:\\Program Files\\PowerShell\\7\\pwsh.exe" -File Z:\\tmp\\custom_script.ps1
     ```

     Adaptez le chemin de l'interpréteur selon le cas et la version.

   * Perl (Windows)
     ```bash
     C:/Strawberry/perl/bin/perl.exe Z:/tmp/custom_script.pl
     ```

   * Perl (Linux)
     ```bash
     /<path>/<to>/custom_script.pl
     ```

    * Python (Windows)
      ```bash
      "C:\\Program Files\\Python313\\python.exe" "Z:\\tmp\\custom_script.py"
      ```

      Adaptez le chemin de l'interpréteur selon le cas et la version.

     * Python (Linux)

       ```bash
       /<path>/<to>/custom_script.py
       ```

     * Bash (Windows, .bat)

       ```bash
       "Z:\\tmp\\custom_script.bat"
       ```

    * Bash (Linux, .sh)

      ```bash
      /<path>/<to>/custom_script.sh
      ```

2. Associez cette commande au connecteur **Centreon Monitoring Agent** (champ **Connectors**).

3. Si ce n'est pas déjà fait, [creéz l'hôte](/docs/monitoring/basic-objects/hosts) correspondant à la ressource à superviser.
4. Vous pouvez associer la commande à un modèle de service existant ou créer un modèle de service dédié.
Le modèle doit hériter (directement ou via son parent) des modèles **OS-Windows-Centreon-Monitoring-Agent** ou **OS-Linux-Generic-Centreon-Monitoring-Agent**, ou à défaut être configuré avec les contrôles passifs activés et les contrôles actifs désactivés.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration).
