---
id: applications-vtom-restapi
title: VTOM Rest API
---

## Contenu du Pack

### Modèles

Le Pack Centreon VTOM apporte 1 modèle d'hôte :
* App-Vtom-Restapi-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template       | Default | Discovery |
|:--------------|:-----------------------|:--------|:----------|
| Cache         | App-Vtom-Cache-Restapi |         |           |
| Jobs          | App-Vtom-Jobs-Restapi  | X       | X         |

### Règles de découverte

| Rule name                 | Description                              |
|:--------------------------|:-----------------------------------------|
| App-Vtom-Restapi-Job-Name | Découvre les jobs et supervise le statut |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Jobs-->

| Metric name                                               | Description                                                              | Unit  |
| :-------------------------------------------------------- | :----------------------------------------------------------------------- | :---- |
| jobs.running.count                                        | Number of jobs with status running                                       |       |
| jobs.errors.count                                         | Number of jobs with status errors                                        |       |
| jobs.waiting.count                                        | Number of jobs with status waiting                                       |       |
| jobs.finished.count                                       | Number of jobs with status finished                                      |       |
| jobs.notscheduled.count                                   | Number of jobs with status not scheduled                                 |       |
| jobs.descheduled.count                                    | Number of jobs with status descheduled                                   |       |
| job status                                                | Current status of the job                                                |       |
| job long status                                           | Current duration of the running job                                      |       |
| *environment~application~job_name*#job.success.percentage | Success rate for the last 10 job executions (status finished and errors) | %     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre VTOM, l'API Rest doit être configurée.

Le Pack supporte les méthodes d'authentification:
* par utilisateur et mot de passe
* par token directement

La version minimum VTOM 6.6.1a est nécessaire pour le bon fonctionnement du Pack:
* /auth/1.0/authorize
* /monitoring/1.0/jobs/status 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **VTOM Rest API** :

```bash
yum install centreon-plugin-Applications-Vtom-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack **VTOM Rest API** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **VTOM Rest API** :

```bash
yum install centreon-plugin-Applications-Vtom-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **VTOM Rest API** :

 ```bash
yum install centreon-pack-applications-vtom-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack **VTOM Rest API** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **VTOM Rest API**.
* Appliquez le Modèle d'Hôte **App-Vtom-Restapi-custom**

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                | Description                                                                |
| :-------- | :------------------ | :------------------------------------------------------------------------- |
| X         | VTOMAPIPORT         | Port used (Default: 30002)                                                 |
| X         | VTOMAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | VTOMAPITOKEN        | Api token                                                                  |
| X         | VTOMAPIUSERNAME     | Api username                                                               |
| X         | VTOMAPIPASSWORD     | Api password                                                               |
|           | VTOMAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
    --plugin=apps::vtom::restapi::plugin \
    --mode=jobs \
    --hostname='10.0.0.1' \
    --api-username='my-username' \
    --api-password='my-password' \
    --filter-application='' \
    --filter-environment='' \
    --filter-name='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
CRITICAL: job 'env_1/app_6/job_1' status: error [message: Traitement en erreur (1)] - job 'env_1/app_7/job_2' status: error [message: Traitement en erreur (1)] - job 'env_2/app_6/job_1' status: error [message: Traitement en erreur (1)] - job 'env_2/app_7/job_2' status: error [message: Traitement en erreur (1)] | 'jobs.running.count'=4;;;0;18 'jobs.errors.count'=4;;;0;18 'jobs.waiting.count'=4;;;0;18 'jobs.finished.count'=2;;;0;18 'jobs.notscheduled.count'=2;;;0;18 'jobs.descheduled.count'=2;;;0;18 'env_1~app_5~job_1#job.success.percentage'=100%;;;0;100 'env_2~app_5~job_1#job.success.percentage'=100%;;;0;100
job 'env_1/app_1/job_1' status: notscheduled
job 'env_1/app_2/job_1' status: waiting
job 'env_1/app_3/job_1' status: descheduled
job 'env_1/app_4/job_1' status: running [message: Job en cours d'execution, pid 29592 (ipid 210)], started since: 19h 37m 15s
job 'env_1/app_5/job_1' status: finished [message: Traitement termine (0)], success: 100.00 %
job 'env_1/app_6/job_1' status: error [message: Traitement en erreur (1)]
job 'env_1/app_7/job_1' status: running [message: L'agent nohost (nohost:37714) est ignore car une erreur recente a ete detectee (attente 63s)], started since: 19h 22m 52s
job 'env_1/app_7/job_2' status: error [message: Traitement en erreur (1)]
job 'env_1/app_7/job_3' status: waiting [message: Heure de demarrage non atteinte]
job 'env_2/app_1/job_1' status: notscheduled
job 'env_2/app_2/job_1' status: waiting
job 'env_2/app_3/job_1' status: descheduled
job 'env_2/app_4/job_1' status: running [message: Job en cours d'execution, pid 29651 (ipid 211)], started since: 19h 35m 58s
job 'env_2/app_5/job_1' status: finished [message: Traitement termine (0)], success: 100.00 %
job 'env_2/app_6/job_1' status: error [message: Traitement en erreur (1)]
job 'env_2/app_7/job_1' status: running [message: Impossible de se connecter a l'agent 'nohost' (nohost:37714) tentative 2/2], started since: 19h 26m 52s
job 'env_2/app_7/job_2' status: error [message: Traitement en erreur (1)]
job 'env_2/app_7/job_3' status: waiting [message: Heure de demarrage non atteinte]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
    --plugin=apps::vtom::restapi::plugin \
    --mode=jobs \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
    --plugin=apps::vtom::restapi::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html#http-and-api-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
