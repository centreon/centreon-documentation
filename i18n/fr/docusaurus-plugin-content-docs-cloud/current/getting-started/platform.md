---
id: platform
title: Étapes de mise en place
---

## Comment obtenir une plateforme prête à la supervision ?

1. Créez votre organisation dans le [CIAM](../ciam/ciam.md). Attention lorsque vous choisissez un nom : ce nom fera partie de l'URL de votre plateforme Centreon.
2. Patientez pendant que votre [serveur central](architecture.md) est généré.
3. Invitez des utilisateurs dans votre organisation. Ils pourront se connecter à votre plateforme Centreon.
4. [Installez vos collecteurs](../installation/deploy-poller.md) (en suivant les [prérequis](../installation/prerequisites.md)). Les collecteurs superviseront vos ressources.
5. Sur les collecteurs, installez les [connecteurs de supervision](../monitoring/pluginpacks.md) nécessaires pour superviser vos ressources.
