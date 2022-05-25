---
id: applications-protocol-http
title: HTTP Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **HTTP Server** apporte un modèle d'hôte :

* App-Protocol-HTTP-custom

Il apporte les modèles de service suivants :

| Alias                 | Modèle de service                  | Description                                                       | Défaut |
|:----------------------|:-----------------------------------|:------------------------------------------------------------------|:-------|
| HTTP-Expected-Content | App-Protocol-HTTP-Expected-Content | Contrôle la présence d'une chaîne de caractères dans une page Web |        |
| HTTP-Json-Content     | App-Protocol-HTTP-Json-Content     | Contrôle un webservice JSON                                       |        |
| HTTP-Response-Time    | App-Protocol-HTTP-Response-Time    | Contrôle le temps de réponse d'une page Web                       | X      |
| HTTP-Soap-Content     | App-Protocol-HTTP-Soap-Content     | Contrôle un webservice SOAP                                       |        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="HTTP-Expected-Content" label="HTTP-Expected-Content">

| Métrique                   | Unité |
|:---------------------------|:------|
| content                    |       |
| http.extracted.value.count | count |
| http.content.size.bytes    | B     |
| http.response.time.seconds | s     |

</TabItem>
<TabItem value="HTTP-Json-Content" label="HTTP-Json-Content">

| Métrique                   | Unité |
|:---------------------------|:------|
| http.response.time.seconds | s     |

</TabItem>
<TabItem value="HTTP-Response-Time" label="HTTP-Response-Time">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| http.response.connect.time.milliseconds    | ms    |
| http.response.processing.time.milliseconds | ms    |
| http.response.resolve.time.milliseconds    | ms    |
| http.response.size.count                   | B     |
| status                                     |       |
| http.response.time.seconds                 | s     |
| http.response.tls.time.milliseconds        | ms    |
| http.response.transfer.time.milliseconds   | ms    |

</TabItem>
<TabItem value="HTTP-Soap-Content" label="HTTP-Soap-Content">

| Métrique                   | Unité |
|:---------------------------|:------|
| http.response.time.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **HTTP Server** :

```bash
yum install centreon-plugin-Applications-Protocol-Http
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **HTTP Server** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **HTTP Server** :

```bash
yum install centreon-plugin-Applications-Protocol-Http
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **HTTP Server** :

```bash
yum install centreon-pack-applications-protocol-http
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **HTTP Server** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **HTTP Server**.
* Appliquez le modèle d'hôte **App-Protocol-HTTP-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro        | Description                                                                            |
|:------------|:-------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | PORT         | (Défaut : '80')                                                                        |
|             | PROTOCOL     | (Défaut : 'http')                                                                      |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_protocol_http.pl \
    --plugin=apps::protocols::http::plugin \
    --mode=soap-content \
    --hostname=10.0.0.1 \
    --proto='http' \
    --port='80' \
    --urlpath='/' \
    --service-soap='' \
    --header='' \
    --data='' \
    --lookup='' \
    --threshold-value='' \
    --format-ok='' \
    --format-warning='' \
    --format-critical='' \
    --warning-numeric='' \
    --critical-numeric='' \
    --warning-string='' \
    --critical-string='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 'http.response.time.seconds'=9000s;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_http.pl \
    --plugin=apps::protocols::http::plugin \
    --mode=soap-content \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_http.pl \
    --plugin=apps::protocols::http::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.