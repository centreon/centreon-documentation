---
id: acknowledge
title: Acquitter un problème
---



## Acquitter un problème

### Principe

Lorsqu'un hôte ou un service présente un incident et que ce dernier est
validé, le processus de notification est enclenché, pouvant générer une
notification envoyée à un contact. Si le problème persiste et suivant la
configuration réalisée (relancer une notification à intervalle de temps
régulier, escalade de notification) il est possible que d'autres alertes
soient émises.

L'acquittement d'un incident permet de stopper le processus de
notification (envoi de notifications), jusqu'à ce que l'hôte ou le
service retrouve un statut nominal.

Exemple d'utilisation :

Un service est chargé de vérifier la santé des disques durs d'une baie
de disque. Un disque dur physique tombe en panne sur une baie de disque,
une notification est envoyée. L'opérateur de supervision acquitte le
service en précisant qu'une équipe est en train de régler le problème.
Les notifications ne sont plus envoyées. Le service reprendra son état
nominal après changement du disque.

> L'acquittement d'un incident signifie la prise en compte du problème
> par un utilisateur de la supervision (et non la résolution de ce
> dernier qui ne pourra être effective que lorsque le contrôle sera
> revenu dans son état nominal).

### En pratique

Pour acquitter un incident, deux solutions sont possibles :

<!--DOCUSAURUS_CODE_TABS-->
<!--From real time monitoring-->

1.  Rendez-vous dans le menu **Monitoring > Status Details > Hosts** (or
    **Services**) menu
2.  Select the object(s) that you want acknowledge
3.  In the menu: **More actions** click on **Hosts: Acknowledge** or on
    **Services: Acknowledge**

<!--From the detailed sheet of an object-->

A partir de la page de détail d'un objet, cliquez sur l'icône activé
associé au champ **Acknowledged** dans le cadre **Options**

<!--END_DOCUSAURUS_CODE_TABS-->

La fenêtre suivante s'affiche :

![image](../assets/alerts/acknowledged.png)

-   Si la case **Sticky** est cochée, alors l'acquittement sera conservé
    en cas de changement de statut non-OK (Exemple DOWN à UNREACHABLE ou
    bien WARNING à CRITICAL). Sinon, l'acquittement disparait et le
    processus de notification est réactivé.
-   Si la case **Notify** est cochée, alors une notification est envoyée
    aux contacts liés à l'objet pour les avertir que l'incident sur la
    ressource a été acquitté (dans le cas où le contact possède le
    filtre de notification d'acquittement d'activé).
-   Si la case **Persistent** est cochée, alors l'acquittement sera
    conservé en cas de redémarrage de l'ordonnanceur. Sinon,
    l'acquittement disparait et le processus de notification est
    réactivé.
-   Le champ **Comment** est généralement utilisé pour fournir la raison
    de l'acquittement et est obligatoire.
-   Si la casee **Acknowledge services attached to hosts** est cochée,
    alors tous les services liés à l'hôte seront acquittés (option
    visible uniquement si vous acquittez un hôte).
-   Si la case **Force active checks** est cochée, alors une commande
    sera envoyée à l'ordonnanceur pour recontrôler dans les plus brefs
    délais la ressource.

Pour supprimer l'acquittement d'un incident sur un objet :

1.  Rendez-vous dans le menu **Monitoring > Status Details > Hosts** (or
    **Services**) menu
2.  Sélectionnez les objets auxquels vous souhaitez supprimer
    l'acquittement
3.  Dans le menu **More actions**, cliquez sur **Hosts: Disacknowledge**
    ou sur **Services: Disacknowledge**

