---
id: cloud-aws-vpn
title: AWS VPN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **AWS VPN** apporte un modèle d'hôte :

* Cloud-Aws-Vpn-custom

Il apporte les modèles de service suivants :

| Alias              | Modèle de service                | Description                                    | Défaut |
|:-------------------|:---------------------------------|:-----------------------------------------------|:-------|
| Vpn-Traffic        | Cloud-Aws-Vpn-Traffic-Api        | Contrôle l'état et le trafic d'un lien VPN AWS | X      |
| Vpn-Traffic-Global | Cloud-Aws-Vpn-Traffic-Global-Api | Contrôle l'état et le trafic d'un lien VPN AWS |        |

### Règles de découverte

Ce pack propose une règle de découverte d'hôtes permettant de découvrir automatiquement des ressources AWS VPN : 

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-vpn-provider.png)

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module : [Découverte des hôtes](/onprem/monitoring/discovery/hosts-discovery)


### Métriques & statuts collectés

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officiel du service VPN:
https://docs.aws.amazon.com/fr_fr/vpn/latest/s2svpn/monitoring-cloudwatch-vpn

<Tabs groupId="sync">
<TabItem value="Vpn-Traffic-*" label="Vpn-Traffic-*">

| Metric name                         | Description                                                                                                                                             | Unit |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| *instance*\#vpn.tunnel.tunnelstate  | The state of the tunnel. For static VPNs, 0 indicates DOWN and 1 indicates UP. For BGP VPNs, 1 indicates ESTABLISHED and 0 is used for all other states |      |
| *instance*\#vpn.tunnel.datain.bytes | The bytes received through the VPN tunnel                                                                                                               | B    |
| *instance*\#vpn.tunnel.datain.bytes | The bytes sent through the VPN tunnel                                                                                                                   | B    |

Il est possible d'afficher l'ensemble de ces métriques de façon relative (par seconde) plutôt que de manière absolue. Pour cela,
ajoutez simplement le paramètre ``` --per-sec``` à la commande.

> Le Modèle de Service *Vpn-Traffic-Global* supervise par défaut l'ensemble des liens VPN de votre infrastructure AWS.
> Utilisez le module de **découverte automatique des Services** afin d'obtenir un Service par *VPN ID*.

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/VPN:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| ec2:DescribeVpnConnections     | Describes one or more of your VPN connections        |
| cloudwatch:listMetrics         | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant. 

> **Attention** il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **AWS VPN** :

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **AWS VPN** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **AWS VPN** :

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **AWS VPN** :

```bash
yum install centreon-pack-cloud-aws-vpn
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **AWS VPN** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **AWS VPN**.
* Appliquez le modèle d'hôte **Cloud-Aws-Vpn-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

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
connectant avec l'utilisateur *centreon-engine* (certaines options comme `--proxyurl` doivent être ajustées en fonction du contexte):

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

```bash
OK: 'vpn-123abc456def789gh' Statistic 'Average' Metrics Tunnel Data Out: 328.69 KB, Tunnel State: 1.00, Tunnel Data In: 715.10 KB | 'vpn-123abc456def789gh~average#vpn.tunnel.dataout.bytes'=336576.82B;;;;
'vpn-123abc456def789gh~average#vpn.tunnel.tunnelstate'=1.00;1:;0.5:;; 'vpn-123abc456def789gh~average#vpn.tunnel.datain.bytes'=732257.42B;;;;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.