---
id: concepts
title: Concepts
---

## Statut des ressources

Les statuts sont des indicateurs pour les hôtes ou les services. Chaque statut a une signification bien précise pour l'objet.
A chaque statut correspond un code généré par la sonde de supervision en fonction des seuils définis par l'utilisateur.

### Statut des hôtes

Le tableau ci-dessous résume l'ensemble des statuts possibles pour un hôte.

| Status                                         | Description                         |
|------------------------------------------------|-------------------------------------|
| <span style="color:#88b917">UP</span>          | L'hôte est disponible et joignable  |
| <span style="color:#e00b3d">DOWN</span>        | L'hôte est indisponible             |
| <span style="color:#818185">UNREACHABLE</span> | L'hôte est injoignable              |

### Statut des services

Le tableau ci-dessous résume l'ensemble des statuts possibles pour un service.

| Status                                     | Description                                                               |
|--------------------------------------------|---------------------------------------------------------------------------|
| <span style="color:#88b917">OK</span>      | Le service ne présente aucun problème                                     |
| <span style="color:#ff9a13">WARNING</span> | Le service a dépassé le seuil d'alerte                                    |
| <span style="color:#e00b3d">DOWN</span>    | Le service a dépassé le seuil critique                                    |
| <span style="color:#bcbdc0">UNKNOWN</span> | Le statut du service ne peut être vérifié (exemple : agent SNMP DOWN...)  |


### Statuts avancés

En plus des statuts standards, de nouveaux statuts  permettent d'ajouter des informations complémentaires :

* Le statut <span style="color:#2ad1d4">PENDING</span> est un statut affiché pour un service ou un hôte fraîchement
  configuré mais qui n'a pas encore été contrôlé par l'ordonnanceur.
* Le statut <span style="color:#818185">UNREACHABLE</span> est un statut indiquant que l'hôte est situé (relation de
  parenté) en aval d'un hôte dans un statut DOWN.
* Le statut FLAPPING est un statut indiquant que le pourcentage de changement de statut de l'objet est très élevé. Ce
  pourcentage est obtenu à partir de calculs effectués par le moteur de supervision.
* Le statut <span style="color:#ae9500">ACKNOWLEDGED</span> est un statut indiquant que l'incident du service ou de
  l'hôte est pris en compte par un utilisateur.
* Le statut <span style="color:#cc99ff">DOWNTIME</span> est un statut indiquant que l'incident du service ou de l'hôte
  est survenu durant une période de temps d'arrêt programmé.

## Confirmation du statut

Une ressource peut avoir deux états :

* SOFT : Signifie qu'un incident vient d'être détecté et que ce dernier doit être confirmé.
* HARD : Signifie que le statut de l'incident est confirmé. Lorsque le statut est confirmé, le processus de notification
  est enclenché (envoi d'un mail, SMS, ...).

### Explication

Un incident (statut non-OK) est confirmé à partir du moment où le nombre d'essai de validation est arrivé à son terme.
La configuration d'un objet (hôte ou service) implique un intervalle de contrôle régulier, un nombre d'essai pour valider
un état non-OK ainsi qu'un intervalle non-régulier de contrôle.
Dès la détection du premier incident, le statut est dans un état "SOFT" jusqu'à sa validation en état "HARD" déclenchant
le processus de notification.

Exemple :

![image](../assets/configuration/soft_hard_states.png)

| Temps | Nombre de vérifications | Statut   | Etat | Changement d'état | Commentaire                                                                                                                                                                                                                                                                    |
|-------|-------------------------|----------|------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| t+0   | 1/3                     | OK       | HARD | No                | État initial du service                                                                                                                                                                                                                                                        |
| t+5   | 1/3                     | CRITICAL | SOFT | Yes               | Première détection d'un état non-OK. Le gestionnaire d'événements s'exécute (event handlers).                                                                                                                                                                                  |
| t+6   | 2/3                     | WARNING  | SOFT | Yes               | Le service continue à être dans un statut non-OK. Le gestionnaire d'événements s'exécute.                                                                                                                                                                                      |
| t+7   | 3/3                     | CRITICAL | HARD | Yes               | Le nombre maximal de tentatives de vérification a été atteint, le service passe donc à l'état HARD. Le gestionnaire d'événements s'exécute et une notification de problème est envoyée. Le contrôle # est remis à 1 immédiatement après que cela se produit.                   |
| t+12  | 3/3                     | WARNING  | HARD | Yes               | Le service passe à un état HARD WARNING. Le gestionnaire d'événements s'exécute et une notification de problème est envoyée.                                                                                                                                                   |
| t+17  | 3/3                     | WARNING  | HARD | No                | Le service se stabilise dans un état de problème HARD. En fonction de l'intervalle de notification pour le service, une autre notification peut être envoyée.                                                                                                                  |
| t+22  | 1/3                     | OK       | HARD | Yes               | Le service revient à un statut OK HARD. Le gestionnaire d'événements s'exécute et une notification de récupération est envoyée.                                                                                                                                                |
| t+27  | 1/3                     | OK       | HARD | No                | Le service est toujours OK.                                                                                                                                                                                                                                                    |
| t+28  | 1/3                     | UNKNOWN  | SOFT | Yes               | Le service passe à un état SOFT non-OK. Le gestionnaire d'événements s'exécute.                                                                                                                                                                                                |
| t+29  | 2/3                     | OK       | SOFT | Yes               | Le service revient à un état OK SOFT. Le gestionnaire d'événements s'exécutent, mais les notifications ne sont pas envoyées, car ce n'était pas un problème "réel". Le type d'état est défini sur HARD et le contrôle # est remis à 1 immédiatement après que cela se produit. |
| t+30  | 1/3                     | OK       | HARD | No                | Le service se stabilise dans un état OK HARD.                                                                                                                                                                                                                                  |