---
id: share
title: Donner accès aux rapports et tâches dans Centreon
description: "Partager les tâches et rapports générés de MBI avec des utilisateurs non administrateurs"
---

* Les administrateurs peuvent voir et modifier toutes les tâches (créées par tous les utilisateurs de la plateforme) et peuvent voir tous les rapports générés.
* Par défaut, les utilisateurs non administrateurs ne peuvent voir aucune tâche ni aucun rapport généré. Si vous souhaitez permettre à un utilisateur de télécharger un rapport depuis l'interface Centreon et/ou de modifier des tâches, vous devez d'abord [associer un groupe de tâches à une règle ACL MBI](#préparer-les-acls), puis [associer le groupe de tâches à la tâche que vous souhaitez partager](#utiliser-un-groupe-de-tâches-dans-la-définition-dune-tâche).

Une option beaucoup plus simple consiste à envoyer le rapport généré à cet utilisateur par email ou à copier le rapport sur un serveur auquel il a accès, à l'aide d'une [règle de publication](reports-publication-rule.md).

Notez que les données incluses dans le rapport dépendent des ACL **de la personne qui crée la tâche**. Il incombe à l'utilisateur qui crée la tâche de s'assurer que les ressources incluses dans le rapport sont autorisées pour les utilisateurs avec lesquels il souhaite partager le rapport.

## Préparer les ACLs

1. Assurez-vous que vos utilisateurs appartiennent à un [groupe d'accès](../administration/access-control-lists.md#créer-un-groupe-daccès). Vérifiez [les menus auxquels vos utilisateurs ont accès](../administration/access-control-lists.md#filtres-daccès-aux-menus) : à cette étape, vous pouvez par exemple choisir de leur donner accès à la liste des rapports générés, mais pas à la liste des tâches, afin qu'ils ne puissent pas modifier les tâches.
2. Allez dans **Reporting > Monitoring Business Intelligence > Job groups** et créez un nouveau groupe de tâches.
3. Allez dans **Administration > ACL > Centreon MBI > Règles ACL** et créez une nouvelle règle ACL pour MBI.
   * Dans l'onglet **General information**, ajoutez les groupes d'accès souhaités.  
   * Dans l'onglet **Report designs**, sélectionnez les modèles de rapports que ces utilisateurs pourront utiliser.
   * Dans l'onglet **Jobs**, sélectionnez les groupes de tâches auxquels vous souhaitez donner accès (vous devrez peut-être enregistrer la règle et la modifier à nouveau avant que la liste des tâches/groupes de tâches ne soit mise à jour).

## Utiliser un groupe de tâches dans la définition d'une tâche

Lorsque vous [créez une tâche](generating-reports.md) (à la page **Reporting > Monitoring Business Intelligence > Jobs**) vous pouvez lier un groupe de tâches à votre tâche pour appliquer les ACLs que vous avez défini. Cela se fait dans la section **Configuration de la tâche planifiée** de l'onglet **Configuration**.
