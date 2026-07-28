---
id: generating-reports
title: Générer des rapports grâce aux tâches planifiées
---

> MBI est une extension de Centreon avec des termes que vous n'avez potentiellement pas vu ailleurs dans notre documentation. Il est fortement recommandé de lire [la page de concepts](concepts.md) avant de suivre les procédures concernant MBI.

Les rapports MBI sont créés en utilisant des tâches planifiées (ou "jobs"). Une tâche planifiée est la définition d'un rapport pouvant être généré dans plusieurs formats et suivant plusieurs modes de publication.

## Étape 1 : Créer une nouvelle tâche

1. Assurez-vous d'avoir [préparé vos données](preparing-data.md) selon les prérequis MBI.
2. Allez à la page **Rapports > Monitoring Business Intelligence > Jobs**.
3. Cliquez sur **Add** pour créer une nouvelle tâche.
4. Dans l'onglet **Configuration**, dans le champ **Modèle de rapport**, sélectionnez le modèle de rapport que vous souhaitez utiliser. Chaque modèle de rapport contient des données spécifiques : consultez notre [catalogue des rapports disponibles](available-reports/available-reports.md) pour choisir un modèle adapté à vos besoins. (Une fois que vous avez choisi un modèle de rapport, le contenu de l'onglet **Paramètres du rapport** se met à jour).

## Étape 2 : Configurer le job

Allez sur l'onglet **Configuration** de la page de création de tâches.

### Configuration des paramètres principaux

Dans la section **Configuration de la tâche planifiée** de l'onglet **Configuration** :

* Choisissez un nom pour la tâche. Celui-ci sera également le nom du rapport généré à la page **Rapports > Monitoring Business Intelligence > Report view**.
* Sélectionnez la langue du rapport : vous pouvez générer des rapports en français ou en anglais (ignorez le bouton **Rafraîchir** à côté de la liste).
* Sélectionnez le **Format de sortie** que vous voulez pour ce rapport : attention, tous les formats de sortie en sont pas supportés par tous les modèles de rapport. Consultez le [catalogue des modèles disponibles](available-reports/available-reports.md) pour confirmer les formats de sortie supportés par le rapport que vous avez choisi.
* Sélectionnez le [**groupe de tâches**](concepts.md#groupes-de-tâches) que vous voulez afin de [partager le rapport avec d'autres utilisateurs non-administrateurs](share.md) :
   * Ils pourront modifier la tâche (s'ils ont le droit d'accéder à la page **Reporting > Monitoring Business Intelligence > Jobs**).
   * Ils pourront voir le rapport généré à la page **Reporting > Monitoring Business Intelligence > Report View** (s'ils ont les bons ACL pour accéder à cette page).
   * Attention, partager le rapport est différent de [publier le rapport pour d'autres utilisateurs](reports-publication-rule.md) : cette dernière action se fait depuis l'onglet **Publication**.

### Planifier l'exécution d'une tâche

Dans la section **Paramètres d'ordonnancement** de l'onglet **Configuration** :

* Sélectionnez un **Mode d'exécution** :

   - **Exécution immédiate** : spécifiez la période de temps couverte par le rapport. Le rapport sera généré lorsque vous cliquerez sur le bouton **Enregistrer** une fois que vous aurez terminé de configurer la tâche. (Notez que si vous décochez la case **Périodes**, le rapport sera vide.)
   - **Exécution planifiée** : choisissez entre :
      - **Cyclique** : s'exécute à intervalles définis (quotidiennement, hebdomadairement ou mensuellement) et utilise son propre intervalle comme période de reporting. Par exemple, les rapports hebdomadaires contiennent des informations sur la semaine écoulée.
      - **Unique** : s'exécute une seule fois au jour et à l'heure prévue. Vous devez spécifier la période de temps couverte par le rapport. (Notez que si vous décochez la case **Périodes**, le rapport sera vide.)
* Si nécessaire, sélectionnez un **État** :
   - **Ordonnancer** (par défaut) : la tâche s'exécutera à l'heure prévue.
   - **Arrêter** : la tâche sera mise en attente et ne sera tout simplement pas exécutée.
   - **Terminé** : sélectionnez **Planifier** et enregistrez pour relancer la tâche.
   - **Échec** : coché après l'annulation d'une tâche en raison d'une erreur. Sélectionnez **Planifier** après avoir résolu le problème pour relancer la tâche.

### Définir des paramètres spécifiques au rapport

Allez dans l'onglet **Paramètres du rapport** de la page de configuration de tâche. Le contenu de cette page varie en fonction du modèle de rapport que vous avez choisi dans [l'onglet **Configuration**](#configuration-des-paramètres-principaux) (la page sera vide si vous n'avez pas encore choisi un modèle de rapport).

* Généralement, les champs vous permettront de définir les groupes d'hôtes, les catégories d'hôtes et les catégories de services à inclure dans le rapport. Les champs comportant deux sections (**Available/Selected**) doivent comporter au moins une catégorie ou un groupe dans la section **Selected**.
* Vous devrez peut-être sélectionner les **périodes temporelles** à inclure dans le rapport.

### Choisir des règles de publication pour partager le rapport généré (facultatif)

Si vous souhaitez partager les rapports générés, par exemple par email ou sur un serveur, allez à l'onglet **Publication** de la page de configuration. Sélectionnez les [**Règles de publication**](reports-publication-rule.md) souhaitées.

- Les règles globales ne sont pas listées dans cet onglet, mais elles sont appliquées automatiquement à chaque exécution de la tâche.
- Les rapports avec des règles personnalisées seront envoyés à chaque fois qu'ils seront générés, en fonction de l'ordonnancement de la tâche.

### Regler les options de tuning (facultatif)

Si vous souhaitez définir des paramètres supplémentaires pour votre tâche, accédez à l'onglet **Tuning** de la page de configuration.

- Sélectionnez le **Thème de couleur du rapport**. Le thème de couleur par défaut est défini dans les options de l'ordonnanceur lors de la configuration de MBI.  
- Définissez le **Multiplicateur du poids de la tâche planifiée** pour augmenter la priorité de la tâche si MBI ne peut pas générer tous les rapports planifiés à la fois.
- **Activez la notification des administrateurs** pour que les administrateurs soient avertis chaque fois que cette tâche est exécutée. Cette option doit être activée dans la page **Rapports > Monitoring Business Intelligence > Options générales**, sous **Options de notification**.

## Étape 3 : Sauvegardez la tâche

Une fois que la tâche est configurée comme vous le souhaitez, sauvegardez-la.

* La tâche apparaît dans la liste des tâches de la page **Reporting > Monitoring Business Intelligence > Tâches**. Une icône à gauche montre le statut actuel de la tâche (**Ordonnancer, en cours, en échec, arrêté, terminé**). 
* Une fois générés, les rapports sont disponibles dans la page **Reporting > Monitoring Business Intelligence > Report view**. Cliquez sur les icônes des formats de sortie pour les télécharger.

Vous rencontrez des problèmes ? [Dépannez](troubleshooting.md) votre configuration.
