---
id: concepts
title: Statuts possibles d'une ressource
---

Les statuts indiquent la disponibilité d'un hôte, et la disponibilité ou la performance d'un service. Chaque
statut a une signification bien précise pour la ressource.

* Les statuts et états d'une ressource sont affichés à la page 
[Statut des ressources](resources-status.md). Vous pouvez filtrer cette page en fonction des statuts et de certains états.
* Certains statuts sont déterminés par des seuils définis par l'utilisateur. 
<!--* À chaque statut correspond un code généré par la sonde de supervision.-->

## Statut des hôtes

Le tableau ci-dessous résume l'ensemble des statuts possibles pour un hôte.

| Status                                               | Description                        |
|------------------------------------------------------|------------------------------------|
| <span style={{color:'#88b917'}}>DISPONIBLE</span>    | L'hôte est disponible et joignable |
| <span style={{color:'#e00b3d'}}>INDISPONIBLE</span>  | L'hôte est indisponible            |
| <span style={{color:'#2ad1d4'}}>EN ATTENTE</span>    | L'hôte vient d'être créé mais n'a pas encore été contrôlé par le moteur de supervision |

## Statut des services

Le tableau ci-dessous résume l'ensemble des statuts possibles pour un service.

| Status                                             | Description                                                            |
|----------------------------------------------------|------------------------------------------------------------------------|
| <span style={{color:'#88b917'}}>OK</span>          | Le service ne présente aucun problème                                  |
| <span style={{color:'#ff9a13'}}>ALERTE</span>      | Le service a dépassé le seuil d'alerte                                 |
| <span style={{color:'#e00b3d'}}>CRITIQUE</span>    | Le service a dépassé le seuil critique                                 |
| <span style={{color:'#bcbdc0'}}>INCONNU</span>     | Le statut du service ne peut être vérifié (exemple : agent SNMP DOWN…) |
| <span style={{color:'#2ad1d4'}}>EN ATTENTE</span>  | Le service vient d'être créé mais n'a pas encore été contrôlé par le moteur de supervision |

## États

En plus de leur statut, les ressources peuvent avoir différents états :

- [Acquitté](acknowledge.md) : indique que l'incident sur le service ou l'hôte est pris en
    compte par un utilisateur. Les ressources acquittées ont un fond jaune.
- [En maintenance](downtimes.md) : indique que les notifications sont temporairement suspendues pour cette ressource. Une plage de maintenance peut être [planifiée à l'avance](downtimes.md#les-temps-darrêt-récurrents) pour éviter de recevoir des alertes pendant une opération de maintenance. Elle peut également être définie suite à un incident. Les ressources en maintenance ont un fond violet.

## Types de statuts

Le statut d'une ressource peut avoir deux types :

-   SOFT : Signifie qu'un incident vient d'être détecté et que ce
    dernier doit être confirmé.
-   HARD : Signifie que le statut de l'incident est confirmé. Lorsque le
    statut est confirmé, le processus de notification est enclenché
    (envoi d'un mail, SMS, …).

Vous pouvez filtrer la page [Resources Status](resources-status.md) suivant le type de statut.

### Explication

Un incident (statut non-OK) est confirmé à partir du moment où le nombre
d'essais de validation est arrivé à son terme. Dès la détection du premier incident, le
statut est dans un état “SOFT” jusqu'à sa validation en état “HARD”
déclenchant le processus de notification.
