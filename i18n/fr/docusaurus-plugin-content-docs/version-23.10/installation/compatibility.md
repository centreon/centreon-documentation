---
id: compatibility
title: Compatibilité
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface web de Centreon

L'interface Centreon web est compatible avec les navigateurs web suivants :

* Google Chrome (version la plus récente lors de la sortie du logiciel Centreon, et suivantes).  Rendez-vous sur la [FAQ de Google Chrome](https://support.google.com/chrome/a/answer/188447?hl=fr) pour consuler la politique de support Chrome. 
* Mozilla Firefox (version la plus récente lors de la sortie du logiciel Centreon, et suivantes).  Rendez-vous sur la [FAQ Mozilla](https://www.mozilla.org/en-US/firefox/organizations/faq/) pour consuler la politique de support Firefox.
* Apple Safari (version la plus récente lors de la sortie du logiciel Centreon, et suivantes)
* Microsoft Edge Chromium (version la plus récente lors de la sortie du logiciel Centreon, et suivantes)

Si une mise à jour de ces navigateurs devait causer une incompatibilité, Centreon travaillerait à résoudre le problème le plus vite possible (pour les versions de Centreon supportées). D'autres navigateurs peuvent fonctionner, cependant Centreon ne tentera pas de résoudre les problèmes avec des navigateurs autres que ceux listés ci-dessus.

Votre résolution doit être au minimum à 1280 x 768.

## Logiciels

### Système d'exploitation

Les OS supportés par Centreon sont AlmaLinux/RedHat/OracleLinux 8 et 9 et Debian 11.

| Version                  | Mode d'installation                                   |
|--------------------------|-------------------------------------------------------|
| Alma Linux 8             | paquets RPM, sources, machine virtuelle               |
| RHEL/Oracle Linux 8      | paquets RPM, sources                                  |
| RHEL/Oracle Linux/Alma Linux 9              | paquets RPM, sources               |
| Debian 11                | paquets DEB                                           |

Voir notre article de base de connaissances [How to install Linux to host Centreon software](https://thewatch.centreon.com/product-how-to-21/how-to-install-linux-to-host-centreon-software-3759).

Les utilisateurs Open Source, sans contrat de support, peuvent utiliser une autre distribution GNU/Linux.
L'installation de la plate-forme sera plus complexe, à partir des fichiers sources de chaque composant.
Attention, les modules de l'IT Edition et de la Business Edition ne fonctionnent pas encore sur une distribution non supportée.

> Seuls les systèmes d'exploitation 64bits (x86_64) sont supportés.

### SGBD

| Logiciel | Version |
|----------|---------|
| MariaDB  | 10.5.x  |

> Vous pouvez utiliser un autre SGBD basé sur MySQL, mais celui-ci sera uniquement supporté par la communauté.
