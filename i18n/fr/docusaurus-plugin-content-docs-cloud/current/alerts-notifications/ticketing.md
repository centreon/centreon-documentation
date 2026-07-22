---
id: ticketing
title: Configurer Open Tickets
description: Comment les administrateurs configurent les règles de notification, macros et widgets pour activer la création de tickets dans Centreon Cloud
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page s'adresse aux administrateurs qui mettront en place Open Tickets afin que les opérateurs puissent créer et fermer des tickets dans Centreon.

## Étape 1 : Créer une règle de notification

1. Pour créer une règle de notification, allez dans **Configuration > Notifications > Open Tickets > Règles** et cliquez sur **Ajouter**.
2. Sélectionnez un fournisseur (l'outil dans lequel vous souhaitez ouvrir les tickets) : le formulaire est mis à jour avec les champs par défaut pour cette intégration.
3. [Adaptez le formulaire à vos besoins](ticketing/ticketing-body.md#personnalisation), en fonction du fonctionnement de [votre fournisseur](../integrations/itsm/itsm-overview.md).
4. Remplissez le formulaire.

## Étape 2 : Ajouter une macro personnalisée à tous les modèles d'hôtes et de services

Vous devez ajouter une macro personnalisée aux modèles d'hôtes et de services qui s'appliqueront à tous les hôtes et services ; c'est-à-dire **generic-active-host-custom** et **generic-active-service-custom**.

1. Allez à la page **Configuration > Hôtes > Modèles**.
2. Cherchez le modèle **generic-active-host-custom**, puis éditez-le.
3. Ajoutez une macro **TICKET_ID** et cliquez sur **Sauvegarder**.
4. Faites de même pour les services (recherchez le modèle **generic-active-service-custom** dans la page **Configuration > Services > Modèles**).

## Étape 3 : Configurer les widgets où les utilisateurs pourront ouvrir et fermer des tickets

Open Tickets peut être utilisé à deux endroits différents dans Centreon :

* dans le widget **Tableau des ressources** [dans un tableau de bord](../alerts-notifications/dashboards.md)
* dans le widget **Open tickets** dans [une vue personnalisée](../alerts-notifications/custom-views.md) (legacy).

En général, vous ajouterez le même widget deux fois, pour créer deux vues différentes :

* une vue qui permettra aux utilisateurs d'ouvrir des tickets
* une vue qui permettra aux utilisateurs de voir tous les tickets ouverts et de les fermer (le fait que le ticket soit également fermé dans l'outil ITSM dépend du fournisseur).

Donnez à vos deux widgets des titres parlants afin que vos utilisateurs sachent lequel est lequel.

<Tabs groupId="sync">
<TabItem value="Tableaux de bord" label="Tableaux de bord">

1. Allez à la page **Accueil > Tableaux de bord**, sélectionnez votre tableau de bord et ajoutez deux widgets **Tableau des ressources**.

2. Dans les sections **Propriétés du widget** et **Paramètres des valeurs**, remplissez les propriétés à votre convenance. Vérifiez soigneusement les statuts, les états et les types d'état que vous souhaitez que le widget affiche. Pour assurer la cohérence de l'affichage des ressources, appliquez le même paramétrage aux deux widgets.

3. Définissez les paramètres de vos tickets dans la section **Gestion des tickets**.
   - Dans **Règle (fournisseur de tickets)**, vous pouvez choisir d'afficher les **Ressources sans ticket** ou les **Ressources liés à un ticket**.
   - Dans **Afficher les boutons de création de tickets**, vous pouvez **Activer la création de tickets pour les hôtes** et **Activer la création de tickets pour les services**.

4. Enregistrez vos modifications.

Votre tableau de bord affiche désormais deux widgets **Tableau des ressources** contenant vos deux vues.
* Lorsqu'un utilisateur crée un ticket sur un service, le service est automatiquement acquitté.
* Lorsqu'un utilisateur crée un ticket sur un hôte, tous les services de cet hôte seront inclus dans le ticket et affichés dans le widget des tickets ouverts.
* Lorsqu'un utilisateur ferme un ticket, si votre fournisseur le permet, le ticket sera également automatiquement fermé dans votre outil ITSM.

</TabItem>
<TabItem value="Vues personnalisees (legacy)" label="Vues personnalisées (legacy)">

1. Allez à la page **Accueil > Vues personnalisées**, sélectionnez votre vue et ajoutez deux widgets **Open Tickets**.

2. Dans le premier widget, créez une vue qui permettra aux utilisateurs d'ouvrir des tickets. Cliquez sur le bouton **Configuration** :
   - Sélectionnez la **Règle** que vous avez créée à l'étape 1.
   - Ne cochez pas la case **Opened tickets**.
   - Ne cochez pas les cases **Display Ticket ID** et **Display Ticket Time**.
   - Définissez quel services vous souhaitez afficher dans ce tableau, c'est-à-dire les services sur lesquels vous souhaitez pouvoir ouvrir des tickets. Par exemple, vous pouvez les filtrer en fonction de leur statut.
   - Définissez si créer un ticket sur un service acquitte automatiquement le service. (Dans ce cas, créer un ticket sur l'hôte inclura tous les services problématiques dans le ticket et ils seront tous affichés dans le widget des tickets ouverts).

3. Cliquez sur **Apply** pour appliquer vos changements.

4. Dans le deuxième widget, créez une vue qui permettra aux utilisateurs de voir tous les tickets ouverts et de les fermer. Cliquez sur le bouton **Configuration** :
   - Sélectionnez la **Règle** que vous avez créée à l'étape 1.
   - Cochez la case **Opened tickets**.
   - Cochez les cases **Display Ticket ID** et **Display Ticket Time**.
   - Définissez si fermer un ticket dans Centreon doit également automatiquement le fermer dans votre outil ITSM (si votre fournisseur le permet).
   - Définissez toute autre option souhaitée.

3. Cliquez sur **Apply** pour appliquer vos changements.

Votre vue personnalisée affiche maintenant deux widgets contenant vos deux vues.

</TabItem>
</Tabs>
