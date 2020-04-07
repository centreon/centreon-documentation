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

Un service a les paramètres de vérifications suivants :

 * Nombre de contrôles avant validation de l'état : 3
 * Intervalle normal de contrôle : 5 minutes
 * Intervalle non-régulier de contrôle : 1 minute
 
Imaginons le scénario suivant :

 * Instant t + 0 : Le service est vérifié, il a le statut OK.
 * Instant t + 5 : La seconde vérification montre que le service a le statut CRITICAL. Le service passe en état SOFT (essai 1/3).
 * Instant t + 6 : La troisième vérification à lieu, le service a toujours le statut CRITICAL en état SOFT (essai 2/3).
 * Instant t + 7 : La quatrième vérification montre que le service a toujours le statut CRITICAL (essai 3/3). Le nombre
   d'essais a été atteint, le statut est configuré (état HARD). Le processus de notification est enclenché.
 * Instant t + 8 : Le service retrouve le statut OK. Il passe directement en état HARD. Le processus de notification est enclenché.
 * Instant t + 13 : Le service a le statut WARNING. Il passe en état SOFT (essai 1/3).
 * Instant t + 14 : Le service a toujours le statut WARNING (essai 2/3).
 * Instant t + 15 : Le service a le statut CRITICAL. Il reste en état SOFT car il a changé de statut.
 