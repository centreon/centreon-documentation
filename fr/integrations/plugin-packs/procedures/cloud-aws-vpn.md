---
id: cloud-aws-vpn
title: Amazon VPN
---

## Vue d'ensemble

AWS Virtual Private Network (AWS VPN) vous permet d'établir un tunnel sécurisé et privé entre votre réseau ou appareil et le cloud AWS. Vous pouvez étendre votre réseau sur site existant dans un VPC ou vous connecter à d'autres ressources AWS à partir d'un client. AWS VPN propose deux types de connexion privée qui offrent chacun la haute disponibilité et la sécurité robuste nécessaires pour vos données.

## Contenu du Plugin-Pack

### Objets supervisés

* Connexions VPN Site-To-Site

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

Pas de règle de découverte d'hôte.

<!--Services-->

| Nom de la règle                       | Description								      |
| :------------------------------------ | :-------------------------------------------------------------------------- |
| Cloud-Aws-Vpn-Connections		| Découverte des liens VPN et supervision du statut et du traffic sur le lien |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officiel du service VPN: https://docs.aws.amazon.com/fr_fr/vpn/latest/s2svpn/monitoring-cloudwatch-vpn.html

<!--DOCUSAURUS_CODE_TABS-->
<!--Traffic-->

| Nom de la métrique  | Description							|
| :------------------ | :-------------------------------------------------------------- |
| TunnelState	      | État du tunnel. Pour les VPN statiques, 0 indique DOWN et 1 indique UP. Pour les VPN BGP, 1 indique ESTABLISHED et 0 est utilisé pour tous les autres états. Unité: Booléen				|
| TunnelDataIn	      | Octets reçus par le biais du tunnel VPN. Unité: Octets		|
| TunnelDataOut	      | Octets envoyés par le biais du tunnel VPN. Unité: Octets	|


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/VPN: 

| Privilège AWS                         | Description                                          |
| :------------------------------------ | :--------------------------------------------------- |
| ec2:DescribeVpnConnections		| Describes one or more of your VPN connections	       |
| cloudwatch:listMetrics                | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics        | Get metrics values from Cloudwatch AWS/VPN namespace |

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

2. Dans l'interface Centreon, installer le Plugin-Pack 'Amazon VPN' depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/VPN:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-cloud-aws-vpn.noarch
```

3. Dans l'interface Web de Centreon, installer le Plugin-Pack 'Amazon VPN' depuis la page "Configuration > Plugin packs > Manager"


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle "Cloud-Aws-VPN-custom". Une fois celui-ci configuré, certaines macros doivent être renseignées: 

| Obligatoire | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL information                                                             |
|             | EXTRAOPTIONS    | Any extraoptions you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

### Services

Une fois l'hôte créé et la configuration de Centreon exportée, un service "Traffic-Generic-VpnID" est créé. Vous pouvez utiliser ce service en modifiant son nom et en renseignant la macro suivante:

| Obligatoire | Nom             | Description                           |
| :---------- | :-------------- | :-------------------------------------|
| X           | VPNID	 	| ID of the VPN link to be monitored    |

Le service peut-être dupliqué et la valeur de la macro ajustée pour chaque *VPNID*.

## FAQ

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

A partir du moment ou le Plugin est installé, vous pouvez tester celui-ci directement depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --vpnid='vpn-123abc456def789gh' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-tunnel-state='1:' \
	--critical-tunnel-state='0.5:'
    --verbose

OK: 'vpn-123abc456def789gh' Statistic 'Average' Metrics Tunnel Data Out: 328.69 KB, Tunnel State: 1.00, Tunnel Data In: 715.10 KB | 'vpn-123abc456def789gh~average#vpn.tunnel.dataout.bytes'=336576.82B;;;;
'vpn-123abc456def789gh~average#vpn.tunnel.tunnelstate'=1.00;1:;0.5:;; 'vpn-123abc456def789gh~average#vpn.tunnel.datain.bytes'=732257.42B;;;;

```

La commande ci-dessus contrôle le trafic et le statut (```--mode=traffic```) sur le lien VPN dont l'ID est  *vpn-123abc456def789gh* (```--name='vpn-123abc456def789gh'```). Ce lien VPN est rattaché à une ressource hébergée dans la région AWS *eu-west-1* (```--region='eu-west-1'```). La métrique obtenue est une moyenne de valeurs (```--statistic='average'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) avec un point par minute / 60 secondes (```--period='60'```).

Cette commande déclenche un WARNING si le statut booléen du lien est inférieur à 1 et un CRITICAL s'il est inférieur à 0.5. Les liens Amazon VPN Site-To-Site peuvent en effet disposer de plusieurs tunnels sur différentes passerelles. Le Plugin récupère ici la valeur moyenne de l'état de tous les tunnels.


Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl --plugin=cloud::aws::vpn::plugin --mode=traffic --help```

### UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.
