---
id: other
title: Autres actions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Ajouter un commentaire

### Principe

Centreon permet d'ajouter des commentaires à un objet. Ce commentaire
est visible par toute personne ayant accès à la ressource (hôte ou
service). Un commentaire possède les propriétés suivantes :

-   Nom de l'hôte
-   Nom du service si le commentaire est associé à un service
-   Date de saisie du commentaire
-   Auteur du commentaire
-   Le contenu du commentaire
-   La validité du commentaire face à un redémarrage de l'ordonnanceur

### En pratique

Pour ajouter un commentaire, deux solutions sont possibles :

<Tabs groupId="sync">
<TabItem value="Page de détails d'un objet" label="Page de détails d'un objet">

1.  Accédez à la page de détails de l'objet
2.  Dans la catégorie **Host/Service Commands**, cliquez sur **Add a
    comment for this host/this service**

</TabItem>
<TabItem value="Depuis le menu commentaires" label="Depuis le menu commentaires">

1.  Rendez-vous dans le menu `Monitoring > Downtimes > Comments`
2.  Cliquez sur **Add a Service Comment** ou **Add a Host Comment**

</TabItem>
</Tabs>

La fenêtre suivante s'affiche :

![image](../assets/alerts/comment.png)

-   Le champ **Host Name** définit l'hôte concerné par le commentaire
-   Si vous avez choisi d'ajouter un commentaire pour un service, le
    champ **Service** vous permet de sélectionner le service concerné
    par le commentaire.
-   Si la case **Persistent** en cas de redémarrage de l'ordonnanceur
    est cochée, alors le commentaire sera conservé en cas de redémarrage
    de l'ordonnanceur.
-   Le champ **Comments** contient le commentaire lui-même.

## Gestion des vérifications

### Principe

Il est possible d'activer ou de désactiver momentanément la vérification
d'un hôte ou d'un service.

> La modification des paramètres de vérifications n'impacte pas la
> configuration de l'objet en base de données. Ces modifications sont
> réalisées sur la supervision en temps-réel; elles seront annulées lors
> du redémarrage de l'ordonnanceur.

### En pratique

<Tabs groupId="sync">
<TabItem value="Page de détails d'un objet" label="Page de détails d'un objet">

1.  Accédez à la page de détails de l'objet
2.  Dans la catégorie **Options** rendez-vous à la ligne **Active
    checks** pour vérifier l'état des contrôles.

Pour :

-   Activer la vérification, cliquez sur ![image](../assets/configuration/common/enabled.png)
-   Désactiver la vérification, cliquez sur ![image](../assets/configuration/common/disabled.png)

</TabItem>
<TabItem value="Interface temps réel" label="Interface temps réel">

1.  Rendez-vous dans le menu `Monitoring > Status Details > Hosts` (ou
    `Services`)
2.  Sélectionnez le(s) objet(s) sur lesquels vous souhaitez activer ou
    de désactiver la vérification
3.  Dans le menu **More actions…** cliquez sur :

-   **Hosts : Disable Check** ou **Services: Disable Check** pour
    arrêter la vérification d'un hôte ou d'un service
-   **Hosts: Enable Check** ou **Services: Enable Check** pour activer
    la vérification d'un hôte ou d'un service

</TabItem>
</Tabs>

## Gestion des notifications

### Principe

Il est possible d'activer ou de désactiver momentanément la notification
d'un hôte ou d'un service.

> La modification des paramètres de notifications n'impacte pas la
> configuration de l'objet en base de données. Ces modifications sont
> réalisées sur la supervision en temps-réel; elles seront annulées lors
> du redémarrage de l'ordonnanceur.

### En pratique

Il y a deux moyens de gérer les notifications :

<Tabs groupId="sync">
<TabItem value="Page de détails d'un objet" label="Page de détails d'un objet">

1.  Accédez à la page de détails de l'objet
2.  Dans la catégorie **Options** rendez-vous à la ligne : **Service
    Notifications**

Pour :

-   Activer la notification, cliquez sur ![image](../assets/configuration/common/enabled.png)
-   Désactiver la notification, cliquez sur ![image](../assets/configuration/common/disabled.png)

</TabItem>
<TabItem value="Interface temps réel" label="Interface temps réel">

1.  Rendez-vous dans le menu `Monitoring > Status Details > Hosts` (ou
    `Services`)
2.  Sélectionnez le ou les hôtes/services pour lesquels vous souhaitez
    activer ou de désactiver la notification
3.  Dans le menu **More actions…** cliquez sur:

-   **Hosts: Disable Notification** ou **Services: Disable
    Notification** pour arrêter la notification d'un hôte ou d'un
    service
-   **Hosts: Enable Notification** ou **Services: Enable Notification**
    pour activer la notification d'un hôte ou d'un service

</TabItem>
</Tabs>

## Reprogrammation des contrôles

### Principe

Par défaut, les contrôles (vérifications d'un service) sont exécutés à
intervalle régulier suivant la configuration définie par l'utilisateur.
Il est possible d'interagir sur la pile d'ordonnancement des contrôles
afin de modifier la programmation de ces derniers.

Il existe deux types de programmation :

-   La programmation classique : la vérification du service est mise en
    priorité dans la file d'attente de l'ordonnanceur (dès que
    possible).
-   La programmation forcée : la vérification du service est mise en
    priorité dans la file d'attente de l'ordonnacneur (dès que possible)
    et cela même si l'heure de la demande d'exécution est en dehors de
    la période contrôle ou si le service n'est pas de type actif.

### En pratique

Il y a deux moyens de forcer la vérification d'un service :

<Tabs groupId="sync">
<TabItem value="Page de détails d'un objet" label="Page de détails d'un objet">

1.  Accédez à la page de détail de l’objet
2.  Dans la catégorie **Host Commands** (ou **Service Commands**),
    cliquez sur **Re-schedule the next check for this host / service**
    ou **Re-schedule the next check for this host / service (forced)**

</TabItem>
<TabItem value="Interface temps réel" label="Interface temps réel">

1.  Rendez-vous dans le menu `Monitoring > Status Details > Hosts` (ou
    `Services`)
2.  Sélectionnez le ou les objets pour lesquels vous souhaitez forcer la
    vérification
3.  Dans le menu **More actions…** cliquez sur **Schedule immediate
    check** ou **Schedule immediate check (Forced)**

</TabItem>
</Tabs>
