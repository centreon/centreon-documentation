---
id: architecture
title: Architecture de Centreon Cloud
---

Votre plateforme Centreon Cloud est constituée principalement d'un serveur central fourni par Centreon, et de collecteurs que vous installez dans votre infrastructure. De plus, le module Centreon [CIAM](../ciam/ciam.md) vous permet de gérer vos organisations et vos utilisateurs, et de vous connecter à Centreon Cloud.

![image](../assets/getting-started/infra3.png)

* **Serveur central** :
  * Le serveur central vous est fourni par Centreon, prêt à l'emploi.
  * Le serveur central ne supervise pas de ressources au sein de votre infrastructure (c'est le rôle des collecteurs).
  * Le serveur central offre une [interface utilisateur](interface.md), dans laquelle vous pouvez voir toutes les ressources supervisées par tous les collecteurs.
  * Vous pouvez vous connecter à l'interface utilisateur depuis n'importe où en tapant `<organisation>.<region>.centreon.cloud` dans votre navigateur web.
  * Le serveur central est hosté dans le cloud.
  * Centreon installe et met à jour le serveur central.

* **Un ou plusieurs collecteurs** :
  * Les collecteurs supervisent des ressources dans votre infrastructure. Ils doivent être situés dans le même réseau que les ressources à superviser.
  * Les collecteurs n'ont pas d'interface utilisateur (l'activité des pollers est visible sur l'interface du serveur central).
  * Les collecteurs sont situés dans votre infrastructure, ce qui veut dire une meilleure sécurité, latence et bande passante.
  * Vous [installez vos collecteurs](../installation/deploy-poller.md) à l'aide d'un simple script.
  * La communication entre le central et les collecteurs se fait en HTTPS.

## Centreon CIAM

* Le [CIAM](../ciam/ciam.md) a une interface utilisateur distincte de celle du serveur central.
* Avant de pouvoir utiliser Centreon Cloud, vous devez configurer votre organisation dans le CIAM, et inviter vos utilisateurs sur la plateforme.
