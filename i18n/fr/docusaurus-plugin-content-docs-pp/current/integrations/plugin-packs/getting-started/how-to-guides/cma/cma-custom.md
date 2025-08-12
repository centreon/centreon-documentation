---
title: Custom scripts execution
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TODO : contextualiser -> pourquoi ? pour que CMA exécute ces scripts
Centreon Monitoring Agent est capable d'exécuter des scripts personnalisés.
Les langages supportés sont : PS / Perl / Python / Bash
Pour se faire, déposez le script sur l'hôte, et créez/adaptez la commande de la manière suivante : 

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