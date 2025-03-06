---
id: ticketing-use
title: Utiliser Open Tickets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page s'adresse aux opérateurs qui créeront et fermeront des tickets dans Centreon.

## Où puis-je ouvrir et fermer des tickets ?

En fonction de ce que votre administrateur a configuré, vous pourrez ouvrir et fermer des tickets à partir :

* du widget **Tableau des ressources** [dans un tableau de bord](../alerts-notifications/dashboards.md)
* du widget **Ouvrir des tickets** dans [une vue personnalisée](../alerts-notifications/custom-views.md) (legacy).

En règle générale, votre administrateur aura créé deux widgets, avec des titres parlants :

* un widget qui vous permet d'ouvrir des tickets. Ce widget affiche les services présentant les caractéristiques définies par votre administrateur (par exemple, tous les services au statut CRITIQUE).
* un widget qui vous permet de visualiser tous les tickets ouverts et de les fermer (le fait que le ticket soit également fermé dans l'outil ITSM dépend du fournisseur).

## Comment ouvrir un ticket ?

<Tabs groupId="sync">
<TabItem value="Dans les tableaux de bord" label="Dans les tableaux de bord">

1. Pour ouvrir un ticket, dans le widget d'ouverture de ticket, cliquez sur le bouton **Ouvrir un ticket pour le service** pour le service que vous souhaitez. Vous pouvez également ouvrir un ticket pour l'hôte, en utilisant le bouton **Ouvrir un ticket pour l'hôte** : tous les services de cet hôte seront inclus dans le ticket et affichés dans le widget des tickets ouverts.
2. Une fenêtre apparaît : remplissez les caractéristiques de votre ticket.
3. Cliquez sur **Ouvrir**.
3. Une fois le ticket créé, la fenêtre affiche l'ID du ticket (qui est celui qu'il aura dans votre outil ITSM).
4. Le(s) service(s) disparaissent du widget d'ouverture de ticket et apparaissent dans le widget affichant les tickets ouverts. (Il se peut que vous deviez rafraîchir votre page pour le voir.) Les alertes sont automatiquement acquittées.

</TabItem>
<TabItem value="Dans les vues personnalisées (legacy)" label="Dans les vues personnalisées (legacy)">

1. Pour ouvrir un ticket, sélectionnez un service dans le widget d'ouverture de ticket, et dans le menu **Plus d'actions**, sélectionnez **Service : Ouvrir un ticket**. Vous pouvez également ouvrir un ticket pour l'hôte, en utilisant l'option **Hôte : Ouvrir le ticket** : tous les services de cet hôte seront inclus dans le ticket et affichés dans le widget des tickets ouverts.
2. Une fenêtre apparaît : remplissez les caractéristiques de votre ticket.
3. Cliquez sur **Ouvrir**.
3. Une fois le ticket créé, la fenêtre affiche l'ID du ticket (qui est celui qu'il aura dans votre outil ITSM).
4. Le(s) service(s) disparaissent du widget d'ouverture de ticket et apparaissent dans le widget affichant les tickets ouverts. Si votre administrateur l'a configuré, le(s) service(s) sera(ont) automatiquement acquitté(s).

</TabItem>
</Tabs>

## Comment fermer un ticket ?

Vous pouvez fermer les tickets dans Centreon : pour certains fournisseurs, le ticket sera également automatiquement fermé dans votre outil ITSM.

<Tabs groupId="sync">
<TabItem value="Dans les tableaux de bord" label="Dans les tableaux de bord">

1. Pour fermer un ticket, dans le widget des tickets ouverts, cliquez sur le bouton **Fermer le ticket** dans la colonne **Actions**.
2. Le ticket est fermé dans Centreon, et, si votre fournisseur le permet, dans votre outil ITSM.
3. Le service disparaît du widget des tickets ouverts.

> Ouvrir un ticket acquitte automatiquement le service. Si vous fermez un ticket dans Centreon alors que l'alerte est toujours en cours dans Centreon, le service sera désacquitté.

> Fermer un ticket dans votre outil ITSM ne le ferme pas automatiquement dans Centreon.

</TabItem>
<TabItem value="Dans les vues personnalisées (legacy)" label="Dans les vues personnalisées (legacy)">

1. Pour fermer un ticket, dans le widget des tickets ouverts, sélectionnez le service que vous souhaitez et dans le menu **Plus d'actions**, sélectionnez **Fermer les tickets**.
2. Le ticket est fermé dans Centreon, et, si votre fournisseur le permet et que votre administrateur l'a configuré, dans votre outil ITSM.
3. Le service disparaît du widget des tickets ouverts.

> Si votre administrateur l'a paramétré, ouvir un ticket acquitte automatiquement le service. Si vous fermez un ticket dans Centreon alors que l'alerte est toujours en cours dans Centreon, le service sera désacquitté.

> Fermer un ticket dans votre outil ITSM ne le ferme pas automatiquement dans Centreon.

</TabItem>
</Tabs>
