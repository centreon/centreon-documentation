---
id: cma-custom
title: Exécuter des scripts personnalisés
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Centreon Monitoring Agent** est capable d'exécuter des scripts personnalisés.
Cela peut être utile dans le cas où les besoins de supervision sont spécifiques, et non couverts par les contrôles natifs et plugins Centreon.
Les langages supportés sont : PS / Perl / Python / Bash.

## Actions sur l'hôte

Déposez le script sur l'hôte, dans le répertoire de votre choix.


## Actions dans Centreon

* Créez/adaptez la commande exécutant le script, selon le langage 

**PowerShell (Windows) :**

```bash
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -File Z:\\tmp\\custom_script.ps1
```
Chemin de l'interpréteur à adapter selon le cas et la version.

**Perl (Windows) :**
```bash
C:/Strawberry/perl/bin/perl.exe Z:/tmp/custom_script.pl
```

**Perl (Linux) :**
```bash
/<path>/<to>/custom_script.pl
```

**Python (Windows) :**
```bash
"C:\\Program Files\\Python313\\python.exe" "Z:\\tmp\\custom_script.py"
```
Chemin de l'interpréteur à adapter selon le cas et la version.

**Python (Linux) :**
```bash
/<path>/<to>/custom_script.py
```
**Bash (Windows, .bat) :**
```bash
"Z:\\tmp\\custom_script.bat"
```

**Bash (Linux, .sh) :**
```bash
/<path>/<to>/custom_script.sh
```

* Associez le service (et le modèle de service le cas échéant) à la commande

* Déployez la configuration