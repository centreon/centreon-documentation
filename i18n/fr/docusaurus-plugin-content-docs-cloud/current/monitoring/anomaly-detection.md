---
id: anomaly-detection
title: Anomaly Detection
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Dans Centreon Cloud, seuls les utilisateurs ayant le [rôle](../users/users.md#rôles-des-utilisateurs) **Administrator** ou **Editor** peuvent configurer un service Anomaly Detection.

## Description

Le module **Anomaly Detection** détecte les déviations par rapport au comportement normal d'un service : il permet d'utiliser des seuils dynamiques pour déclencher des alertes.

Avec la supervision classique, les alertes sont déclenchées à partir de seuils fixes : par exemple, on alerte quand le ping sur un serveur dépasse 700 ms. Cependant, pour certains services, les valeurs "normales" varient au cours du temps, ce qui rend des seuils fixes peu pertinents. Il est possible d'utiliser la détection automatique d'anomalies lorsque le comportement du service est régulier et prévisible :

![image](../../../docusaurus-plugin-content-docs/version-23.10/assets/monitoring/anomaly/simple_scheme.png)

On détermine quelles sont les valeurs normales au cours du temps : la prévision permet de calculer un seuil bas et un seuil élevé. Lorsque le comportement du service dévie du modèle attendu, ces seuils sont dépassés (c'est-à-dire que la métrique descend en-dessous du seuil bas ou dépasse le seuil élevé). Le service passe en statut CRITIQUE et une notification est envoyée. Exemple : un serveur a habituellement peu de trafic la nuit. Une nuit, Centreon détecte des flux réseau plus élevés
que la normale et déclenche une alerte. Cela permet à l'entreprise de se rendre compte d'un piratage.

### Fonctionnement

1. Les données collectées sont envoyées à la plateforme SaaS de Centreon.

2. Centreon calcule un modèle de comportement régulier grâce à l'historique
de ces données.

3. Une fois le modèle calculé, les prédictions sont générées et récupérées
sur votre plateforme Centreon.

4. Les prévisions servent de seuils flottants qui sont ensuite utilisés par le
moteur de supervision pour comparer la valeur collectée avec les seuils prévus
pour mettre en évidence les écarts et générer des alertes. Pour ne pas fausser l'analyse, les données reçues pendant les plages de maintenance sont exclues du calcul des prévisions.

5. Les modèles sont recalculés régulièrement, et les prévisions s'affinent dans le temps.

### Ajouter votre jeton

1. Récupérez votre jeton dans la page de votre organisation dans le [CIAM](../ciam/ciam.md).

2. Rendez-vous dans le menu **Configuration > Services > Anomaly Detection** et
cliquez sur le bouton **Add Centreon Cloud Token**.

3. Saisissez votre jeton et cliquez sur **Save**.

  Votre plateforme Centreon est maintenant prête à utiliser la détection
d'anomalies Centreon.

## Configuration

Pour obtenir un service Anomaly Detection pleinement fonctionnel, il faut passer par 4 étapes :

1. [Créer un service de type **Anomaly Detection**](#étape-1--créer-un-service-anomaly-detection). Cela activera l'envoi des données collectées vers la plateforme SaaS de Centreon,
 afin de démarrer la modélisation du comportement régulier.
2. [Évaluer la pertinence des prévisions calculées](#étape-2--évaluer-la-pertinence-des-prévisions).
3. Une fois que les modèles semblent corrects, [activer les changements de statut](#étape-3--activer-les-changements-de-statut).
4. Lorsque que les changements de statut semblent pertinents, [activer le processus de notification](#étape-4--activer-le-processus-de-notification).

### Étape 1 : Créer un service Anomaly Detection

Vous pouvez créer un service Anomaly Detection manuellement, ou bien [utiliser l'assistant de création](#utiliser-lassistant-de-création).
Pour créer un service Anomaly Detection manuellement :

1. Allez à la page **Configuration > Services > Anomaly Detection** et
cliquez sur le bouton **Create manually**.

2. Remplissez les champs suivants :

    - **Description** : nom du service. Les caractères suivants ne sont pas autorisés : `~!$%^&|'"<>?,()=*{}` et les espaces.
    - **Statut** : permet d'activer ou désactiver le service. Si vous désactivez un service, après avoir déployé la configuration, celui-ci ne sera plus supervisé (notamment, il n'apparaîtra plus à la page **Statut des ressources**).
    - **Select host - service** : définir le couple hôte/service sur lequel le service Anomaly Detection se basera.
    - **Select metric** : sélectionnez la métrique sur laquelle appliquer la détection d'anomalie.
    - Dans un premier temps, laissez le champ **Enable notifications** à **Désactivé**. (L'option sera activée à l'étape 3.)
    - Dans la section **Categories & groups**, vous pouvez sélectionner un [**Niveau de criticité**](../monitoring/categories.md#criticité).

3. Cliquez sur **Sauvegarder**.

4. [Déployez la configuration](monitoring-servers/deploying-a-configuration.md).

   - Le service apparaît à la page **Supervision > Statut des ressources**. Pour afficher uniquement les services de type **Anomaly detection**, utilisez le filtre **Type** dans la fenêtre **Options de filtre**.
  
   - Le calcul du modèle de comportement démarre. Tant qu'un premier calcul n'a pas été effectué et que des prévisions n'ont pas été reçues, le statut du service reste INCONNU. Pour que des prédictions puissent être calculées, il faut disposer d'un minimum de 4h de données.

   - Les premières prévisions apparaîtront dans un délai de 36h maximum. Le service passera alors en statut OK et y restera tant que les alertes ne seront pas activées (étape 3).

### Étape 2 : Évaluer la pertinence des prévisions

Dans un premier temps, les prévisions reçues seront peu fiables : Anomaly Detection a besoin de pouvoir identifier plusieurs répétitions de motifs de données avant de mettre en place des prévisions pertinentes. La durée nécessaire varie donc suivant la saisonnalité du service (quotidienne, hebdomadaire...). En règle générale, comptez environ 6 semaines pour obtenir un modèle stable.

Pour évaluer la pertinence des prévisions, observez le graphe du service à la page **Supervision > Informations de performance > Graphiques**, ou dans l'onglet **Graphique** du panneau de détails du service à la page **Supervision > Statut des ressources**.

Si vous l'estimez nécessaire (par exemple si vous constatez trop de faux positifs, ou si au contraire les prévisions ne détectent pas assez d'incidents), vous pouvez ajuster manuellement la marge entre la courbe et les seuils.

1. À la page **Supervision > Statut des ressources**, cliquez sur le service Anomaly Detection désiré, puis rendez vous dans l'onglet **Graphique** du panneau de détails.
2. Cliquez sur l'icône **Modifier les données de détection d'anomalie** (la clé à molette) en haut à droite de l'onglet. Le graphique s'ouvre dans une pop-up.
3. Utilisez le sélecteur dans la section **Gérer la taille de l'enveloppe** pour changer la marge des prédictions : dans l'aperçu, les vérifications situées en-dehors de l'enveloppe sont matérialisées par un point rouge.
4. Cliquez sur **Sauvegarder**. La nouvelle taille d'enveloppe se met en place à partir de ce moment. Attention, l'enveloppe déjà calculée reste telle quelle (le changement n'est donc pas visible immédiatement).

### Étape 3 : Activer les changements de statut

Si, en suivant régulièrement le modèle généré et les données du menu
**Supervision > Informations de performance > Graphiques**, vous pensez que votre modèle est
stable, vous pouvez activer les changements de statut. Une fois cette option activée, le statut du service passera à CRITIQUE [SOFT](../alerts-notifications/concepts.md#types-de-statuts) dès que la métrique descendra en-dessous du seuil bas ou dépassera le seuil élevé.

1. Allez à la page **Configuration > Services > Anomaly Detection** et cliquez sur le service Anomaly Detection désiré.

2. Dans la section **Alerting options**, activez l'option **Enable change of status**.

3. Dans le champ **Detect anomalies after**, entrez le nombre de déviations à partir duquel le service passera en CRITIQUE [HARD](../alerts-notifications/concepts.md#types-de-statuts). (Les notifications, une fois activées, ne seront envoyées que lorsque le service passera de SOFT à HARD.)

4. Cliquez sur **Sauvegarder**.

5. [Déployez la configuration](monitoring-servers/deploying-a-configuration.md).

### Étape 4 : Activer le processus de notification

Les notifications sur les services de détection d'anomalies sont paramétrées de la même façon que les [notifications concernant les services standard](../alerts-notifications/notif-configuration.md).

## Utiliser l'assistant de création

L'assistant de création permet de mettre en avant les services
présentant soit une saisonnalité, soit une stabilité régulière (dont les valeurs sont comprises en permanence entre deux bornes).

Rendez-vous dans le menu **Configuration > Services > Anomaly Detection** et
cliquez sur **Create from analysis**.

La liste des services existant de votre plateforme Centreon est affichée ainsi
qu'un score en nombre d'étoiles : de 5 étoiles à 0, 5 étoiles représentant les
services à fort potentiel :

![image](../../../docusaurus-plugin-content-docs/version-23.10/assets/monitoring/anomaly/configure_analysis_01.png)

Après avoir sélectionné un service intéressant, cliquez sur le bouton **ADD** à
gauche de la ligne. Vous arrivez sur le formulaire de création pré-rempli :

![image](../../../docusaurus-plugin-content-docs/version-23.10/assets/monitoring/anomaly/configure_analysis_02.png)

Modifez le nom du service puis cliquez sur le bouton **Sauvegarder**.

> Si la liste est vide, c'est que le calcul afin de déterminer les services
> intéressants n'a pas encore démarré. Celui-ci est réalisé toutes les 6 heures.

## Visualiser les anomalies détectées

Une fois un service de type Anomaly Detection créé, vous pouvez le visualiser aux endroits suivants :

- À la page **Supervision > Statut des ressources**.
- À la page **Supervision > Informations de performance > Graphiques**.
- À la page **Supervision > Journaux d'évènements**.
- Dans le widget **service-monitoring** via le menu **Accueil > Vues personnalisées**.
- Vous pouvez utiliser des services Anomaly Detection comme indicateurs dans [Centreon BAM](../service-mapping/ba-management.md).
- Et tous les menus où vous pouvez opérer sur les services.

## FAQ

### Combien de temps les données sont-elles hébergées ?

Les données sont conservées pendant toute la validité de la licence. Elles permettront de recalculer les modèles si
nécessaire. Un délai supplémentaire de 3 mois sera ajouté à la fin de la validité de la licence avant la suppression
de ces dernières.

### Quelles données sont hébergées par le service ?

Les données hébergées par le service de détection d'anomalies ne concernent que les données liées aux services créés
par l'utilisateur. Elles comprennent la date et l'heure du contrôle, l'identifiant de la ressource surveillée,
l'identifiant de l'indicateur associé, le nom des données de performance sur lesquelles les calculs seront effectués
ainsi que la valeur des données de performance.

### Comment l’envoi et le stockage de mes données sont-ils protégés ?

L’envoi de données à notre infrastructure Cloud ne comporte aucun risque.
Les données sont chiffrées de bout en bout. Les données collectées ne contiennent que des métriques et
quelques identifiants Centreon (nom d’hôte, nom de service). Notre environnement est protégé par AWS Web
Application Firewall et AWS Shields pour prévenir les attaques DDoS. Notre architecture a été revue par les
architectes AWS (AWS Foundational Technical Review) et nous sommes un partenaire qualifié d’AWS.

### Quel est l'usage des données ?

Les données sont utilisées pour calculer des modèles de comportement. À partir de ces modèles seront générées des
prédictions utilisées comme seuils flottants par la plateforme Centreon.

### Qui a accès aux données hébergées par le service ?

Les données sont associées au jeton d'accès de l'offre de détection d'anomalies. Elles sont hébergés sur la plateforme
Centreon SaaS et partitionnées par plateforme. Un utilisateur avec un jeton n'a accès qu'à ses propres données.

### Comment puis-je demander la suppression des données ?

La suppression des données peut être demandée à tout moment. Cependant, l'historique des données est utilisé pour
créer un modèle afin de calculer les seuils flottants. Par conséquent, la participation au programme ou l'abonnement à
l'offre sera impossible.
Une demande par mail doit être faite via l'interface de support professionnel Centreon.
