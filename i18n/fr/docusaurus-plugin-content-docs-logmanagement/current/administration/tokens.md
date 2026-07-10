---
id: tokens
title: Gérer les jetons d'authentification
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Chaque hôte a besoin d'un jeton pour s'authentifier auprès de Centreon Log Management. Ce jeton permet à l'hôte de s'identifier de manière sécurisée lors de l'envoi de données, garantissant ainsi que seuls les hôtes autorisés peuvent se connecter à votre plateforme Log Management et l'utiliser.

Vous pouvez également générer un jeton pour [utiliser l'API](../api.md).

## Créer un jeton

1. À la page **Administration > Token management**, cliquez sur **Add**.
2. Dans la fenêtre qui s'ouvre, entrez un nom (obligatoire) et une description (facultative) pour votre jeton.
3. Cliquez sur **Generate token**. La fenêtre affiche votre jeton. Elle ne l'affiche qu'une seule fois : stockez-le de manière sécurisée. Si vous fermez la fenêtre, vous ne pourrez plus afficher le jeton.

Vous pouvez supprimer un jeton à l'aide de l'icône **Delete** sur la page **Administration > Token management**. Si vous supprimez un jeton, tous les hôtes qui l'utilisent ne pourront plus s'authentifier auprès de Log Management. Par conséquent, les logs envoyés par ces hôtes ne parviendront plus à votre plateforme Log Management jusqu'à ce qu'un nouveau jeton valide soit configuré. La suppression d'un jeton est irréversible.

## Utiliser des jetons dans la configuration de votre collecteur Open Telemetry

Voir [Configurer un collecteur OpenTelemetry](../collector/collector.md).
