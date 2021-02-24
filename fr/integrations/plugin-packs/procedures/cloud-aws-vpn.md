---
id: cloud-aws-vpn
title: AWS VPN
---

## Vue d'ensemble

AWS Virtual Private Network (AWS VPN) vous permet d'établir un tunnel sécurisé et privé entre votre réseau ou appareil et le cloud AWS.
Vous pouvez étendre votre réseau sur site existant dans un VPC ou vous connecter à d'autres ressources AWS à partir d'un client.
AWS VPN propose deux types de connexion privée qui offrent chacun la haute disponibilité et la sécurité robuste nécessaires pour vos données.

Le Plugin-Pack Centreon *AWS VPN* s'appuie sur les APIs Amazon Cloudwatch pour la collecte des données et métriques relatives au service VPN.

## Contenu du Plugin-Pack

### Objets supervisés

* Connexions VPN Site-To-Site & VPC

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                 | Description                                                   |
|:--------------------------|:--------------------------------------------------------------|
| Cloud-Aws-Vpn-Connections | Discover VPN connections and monitor their status and traffic |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officiel du service VPN:
https://docs.aws.amazon.com/fr_fr/vpn/latest/s2svpn/monitoring-cloudwatch-vpn.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Vpn-Traffic-*-->

| Metric name                         | Description                                                                                                                                             | Unit |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| *instance*\#vpn.tunnel.tunnelstate  | The state of the tunnel. For static VPNs, 0 indicates DOWN and 1 indicates UP. For BGP VPNs, 1 indicates ESTABLISHED and 0 is used for all other states |      |
| *instance*\#vpn.tunnel.datain.bytes | The bytes received through the VPN tunnel                                                                                                               | B    |
| *instance*\#vpn.tunnel.datain.bytes | The bytes sent through the VPN tunnel                                                                                                                   | B    |

Il est possible d'afficher l'ensemble de ces métriques de façon relative (par seconde) plutôt que de manière absolue. Pour cela,
ajoutez simplement le paramètre ``` --per-sec``` à la commande.

> Le Modèle de Service *Vpn-Traffic-Global* supervise par défaut l'ensemble des liens VPN de votre infrastructure AWS.
> Utilisez le module de **découverte automatique des Services** afin d'obtenir un Service par *VPN ID*.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/VPN:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| ec2:DescribeVpnConnections     | Describes one or more of your VPN connections        |
| cloudwatch:listMetrics         | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli*, soit le SDK perl Paws. Le SDK est recommandé car plus performant.

**Attention** il n'est pas possible d'utiliser perl-Paws si la connexion s'effectue au travers d'un proxy.

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

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/VPN:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *AWS VPN* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/VPN:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack:

```bash
yum install centreon-pack-cloud-aws-vpn.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *AWS VPN* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 et appliquez-lui le Modèle d'Hôte *Cloud-Aws-Vpn-custom*.
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

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en vous
connectant avec l'utilisateur *centreon-engine* (certaines options comme ```--proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --filter-vpn='vpn-123abc456def789gh' \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-tunnel-state='1:' \
    --critical-tunnel-state='0.5:'
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous : 

```
OK: 'vpn-123abc456def789gh' Statistic 'Average' Metrics Tunnel Data Out: 328.69 KB, Tunnel State: 1.00, Tunnel Data In: 715.10 KB | 'vpn-123abc456def789gh~average#vpn.tunnel.dataout.bytes'=336576.82B;;;;
'vpn-123abc456def789gh~average#vpn.tunnel.tunnelstate'=1.00;1:;0.5:;; 'vpn-123abc456def789gh~average#vpn.tunnel.datain.bytes'=732257.42B;;;;
```

La commande ci-dessus contrôle le trafic et le statut (```--mode=traffic```) du lien VPN dont l'ID est  *vpn-123abc456def789gh* (```--name='vpn-123abc456def789gh'```).
Ce lien VPN est rattaché à une ressource hébergée dans la région AWS *eu-west-1* (```--region='eu-west-1'```).
La métrique obtenue est une moyenne de valeurs (```--statistic='average'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```)
avec un point par minute / 60 secondes (```--period='60'```).

> Remarque: il est possible de filtrer et d'afficher les résultats en utilisant la dénomination des *liens VPN* plutôt que l'ID.
> Pour cela, ajoutez simplement le paramètre ```--name``` à la commande.

Dans cet exemple, une alarme WARNING sera déclenchée si le statut booléen du lien est inférieur à 1; l'alarme sera de type CRITICAL s'il est inférieur à 0.5.
Les liens AWS VPN Site-To-Site peuvent en effet disposer de plusieurs tunnels sur différentes passerelles. Le Plugin récupère ici la valeur moyenne de l'état de tous les tunnels.

La liste de toutes les métriques, seuils associés et options complémentairespeut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --help
```

### J'obtiens le message d'erreur suivant:

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'.

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.
Vous pouvez ajouter ```--zeroed``` à la macro **EXTRAOPTIONS** du *Service* en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a pas les droits suffisants pour réaliser une opération donnée.

#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant : ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API AWS Cloudwatch.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.