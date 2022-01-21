---
id: applications-vtom-restapi
title: VTOM Rest API
---

## Pack Assets

### Templates

The Centreon Pack VTOM brings 1 host template:
* App-Vtom-Restapi-custom

It brings the following Service Templates:

| Service Alias | Service Template       | Default | Discovery |
|:--------------|:-----------------------|:--------|:----------|
| Cache         | App-Vtom-Cache-Restapi |         |           |
| Jobs          | App-Vtom-Jobs-Restapi  | X       | X         |

### Discovery rules

| Rule name                 | Description                      |
|:--------------------------|:---------------------------------|
| App-Vtom-Restapi-Job-Name | Discover jobs and monitor status |

### Collected metrics & status

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

## Prerequisites

To control your VTOM, the Rest API must be configured.

The Pack supports following authentication:
* username/password
* direct token

At least VTOM 6.6.1a is mandatory for the Pack:
* /auth/1.0/authorize
* /monitoring/1.0/jobs/status

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **VTOM Rest API** resources:

```bash
yum install centreon-plugin-Applications-Vtom-Restapi
```

2. On the Centreon Web interface, install the **VTOM Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **VTOM Rest API** resources:

```bash
yum install centreon-plugin-Applications-Vtom-Restapi
```

2. Install the **VTOM Rest API** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-vtom-restapi
```

3. On the Centreon Web interface, install the **VTOM Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **VTOM Rest API** server settings
* Select the **App-Vtom-Restapi-custom** template to apply to the Host

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | VTOMAPIPORT         | Port used (Default: 30002)                                                 |
| X         | VTOMAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | VTOMAPITOKEN        | Api token                                                                  |
| X         | VTOMAPIUSERNAME     | Api username                                                               |
| X         | VTOMAPIPASSWORD     | Api password                                                               |
|           | VTOMAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

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

The expected command output is shown below:

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

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
    --plugin=apps::vtom::restapi::plugin \
    --mode=jobs \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vtom_restapi.pl \
    --plugin=apps::vtom::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html#http-and-api-checks)
