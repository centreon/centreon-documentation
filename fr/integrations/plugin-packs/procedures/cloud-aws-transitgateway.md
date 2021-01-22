---
id: cloud-aws-transitgateway
title: AWS Transit Gateway
---

## Vue d'ensemble

AWS Transit Gateway connecte les VPC et les réseaux sur site via une plateforme centrale. Il simplifie votre réseau et met fin
aux relations d'appairage complexes. Il agit comme routeur cloud : chaque nouvelle connexion n'est réalisée qu'une seule fois.

Grâce à sa position centrale, le AWS Transit Gateway Network Manager dispose d'une vue d'ensemble unique de votre réseau et se
connecte même aux dispositifs de réseau étendu défini par logiciel (SD-WAN).

Le Plugin-Pack Centreon *AWS Transit Gateway* s'appuie sur les APIs Amazon Cloudwatch pour la collecte des données et métriques relatives au service Transit Gateway.

## Contenu du Plugin-Pack

### Objets supervisés

* *Passerelles de transit* AWS Transit Gateway

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Gateways-->

| Rule name                           | Description                                                        |
| :---------------------------------- | :----------------------------------------------------------------- |
| Cloud-Aws-Transitgateways-Gateways  | Discover the Transit Gateways within an AWS infrastructure         |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées 

Plus de détails sur les métriques présentées ci-après sont disponibles sur la
documentation officielle du service AWS Transit Gateway:
https://docs.aws.amazon.com/fr_fr/vpc/latest/tgw/transit-gateway-cloudwatch-metrics.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Gateways-Traffic-*-->

| Metric name                            | Description                                                           | Unit |
|:---------------------------------------|:----------------------------------------------------------------------|:-----|
| gateway.traffic.in.bytes               | The number of bytes received by the transit gateway.                  | B    |
| gateway.traffic.out.bytes              | The number of bytes sent from the transit gateway.                    | B    |
| gateway.packets.in.count               | The number of packets received by the transit gateway.                |      |
| gateway.packets.out.count              | The number of packets sent by the transit gateway.                    |      |
| gateway.packets.blackholedropped.count | The number of packets dropped because they matched a blackhole route. |      |
| gateway.packets.noroutedropped.count   | The number of packets dropped because they did not match a route.     |      |

Il est possible d'afficher l'ensemble de ces métriques de façon relative (par seconde) plutôt que de manière absolue. Pour cela,
ajoutez simplement le paramètre ``` --per-sec``` à la commande.

> Le Modèle de Service *Gateways-Traffic-Global* supervise par défaut l'ensemble des *Gateways* de votre infrastructure AWS.
> Utilisez le module de **découverte automatique des Services** afin d'obtenir un Service par *Gateway*.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilège AWS

Un compte de service (paire d'identifiants *access/secret keys*) est nécessaire
afin de pouvoir superviser les resources AWS Transit Gateway. Ce compte doit bénéficier
des privilèges suivants :

| AWS Privilege                  | Description                                                        |
|:-------------------------------|:------------------------------------------------------------------ |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/TransitGateway namespace    |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible
d'utiliser soit le binaire *awscli*, soit le SDK perl *Paws*. Le SDK est
recommandé car plus performant. 

<!--DOCUSAURUS_CODE_TABS-->

<!--perl-Paws-installation-->

```bash
yum install perl-Paws
```

<!--aws-cli-installation-->

```bash
yum install awscli
```

<!--END_DOCUSAURUS_CODE_TABS-->

> **Attention** il n'est pas possible pour le moment d'utiliser perl Paws si la
> connexion s'effectue au travers d'un proxy.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources AWS Transit Gateway:

```bash
yum install centreon-plugin-Cloud-Aws-Transitgateway-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *AWS Transit Gateway* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources AWS Transit Gateway:

```bash
yum install centreon-plugin-Cloud-Aws-Transitgateway-Api
```

2.Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *AWS Transit Gateway*:

```bash
yum install centreon-pack-cloud-aws-transitgateway.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *AWS Transit Gateway* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 et appliquez-lui le Modèle d'Hôte *Cloud-Aws-Transitgateway-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) doivent être renseignées:

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* (certaines options comme ```--proxyurl``` doivent être
ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_aws_transitgateway_api.pl \
    --plugin=cloud::aws::transitgateway::plugin \
    --mode=traffic \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --timeframe='600' \
    --period='60' \
    --filter-gateway='tgw-01234567890abcd' \
    --warning-packets-drop-blackhole='500' \
    --critical-packets-drop-blackhole='1000' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous : 

```bash
OK: 'tgw-01234567890abcd' Statistic 'Average' Metrics Bytes In: 2.89 MB, Bytes Out: 2.78 MB, Packets Received (In): 3844.04 ,
Packets Drop Blackhole: 0.00 , Packets Sent (Out): 3677.79 , Packets Drop No Route: 0.01  |
'tgw-01234567890abcd~average#gateway.traffic.in.bytes'=3026151.39B;;;; 'tgw-01234567890abcd~average#gateway.traffic.out.bytes'=2920220.01B;;;;
'tgw-01234567890abcd~average#gateway.packets.in.count'=3844.04;;;; 'tgw-01234567890abcd~average#gateway.packets.blackholedropped.count'=0.00;;;;
'tgw-01234567890abcd~average#gateway.packets.out.count'=3677.79;;;; 'tgw-01234567890abcd~average#gateway.packets.noroutedropped.count'=0.01;;;;
```

La commande ci-dessus collecte les statistiques de trafic d'une Transit Gateway AWS
(```--plugin=cloud::aws::transitgateway::plugin --mode=traffic```). Cette ressource Transit Gateway est hébergée dans la région AWS
*eu-west-1* (```--region='eu-west-1'```). La connexion à l'API Cloudwatch 
s'effectue à l'aide des identifiants *aws-secret-key* et *aws-access-key*
préalablement configurés sur la console AWS 
(```--aws-secret-key='****' --aws-access-key='****'```). 

Les métriques retournées seront une moyenne sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) 
avec un point par minute / 60 secondes (```--period='60'```). Dans l'exemple ci-dessus, on choisit de ne récupérer que les 
statistiques de la *Gateway* portant l'ID *tgw-01234567890abcd* (```--filter-gateway='tgw-01234567890abcd'```).

Une alarme WARNING sera déclenchée si le nombre de paquets *dropped* par une règle *blackhole*
est supérieur à 500 sur la période de temps sur lesquelles sont calculées les valeurs (```--warning-packets-drop-blackhole='500'```);
l'alarme sera de type CRITICAL au-delà de 1000 paquets *dropped* (```--critical-packets-drop-blackhole='1000'```).

La liste de toutes les métriques, seuils associés et options complémentaires
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_transitgateway_api.pl \
    --plugin=cloud::aws::transitgateway::plugin \
    --mode=traffic \
    --help
```

#### J'obtiens le message d'erreur suivant:  

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No
metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro **EXTRAOPTIONS** du *Service* en
question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a
pas les droits suffisants pour réaliser une opération donnée.

#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant : 
```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API AWS Cloudwatch.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.