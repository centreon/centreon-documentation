---
id: applications-ipfabric-api
title: IP Fabric API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **IP Fabric API** apporte un modèle d'hôte :

* App-Ipfabric-Api-custom

Il apporte le modèle de service suivant :

| Alias             | Modèle de service                  | Description                                       | Défaut |
|:------------------|:-----------------------------------|:--------------------------------------------------|:-------|
| Path-Verification | App-Ipfabric-Path-Verification-Api | Contrôle permettant de vérifier l'état des routes | X      |

### Règles de découverte

Le Plugin Pack IP Fabric inclut une règle de découverte d'hôtes permettant de découvrir automatiquement les équipements réseaux renseignés dans IP Fabric.

![image](../../../assets/integrations/plugin-packs/procedures/applications-ipfabric-api-provider.png)

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Path-Verification" label="Path-Verification">

| Métrique                  | Unité |
|:--------------------------|:------|
| total.path.all.count      | count |
| total.path.error.count    | count |
| total.path.none.count     | count |
| total.path.part.count     | count |
| total.path.mismatch.count | count |
| total.path.count          | count |
| *status*#status           |       |

</TabItem>
</Tabs>

## Prérequis

Assurez-vous d'avoir une clef API avec les droits suffisants ainsi que l'adresse de l'API IP Fabric.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **IP Fabric** :

```bash
yum install centreon-plugin-Applications-Ipfabric-Api
```

2. Sur l'interface Web de Centreon, installez le Plugin Pack **IP Fabric API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **IP Fabric** :

```bash
yum install centreon-plugin-Applications-Ipfabric-Api
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **IP Fabric API** :

```bash
yum install centreon-pack-applications-ipfabric-api
```

3. Sur l'interface Web de Centreon, installez le Plugin Pack **IP Fabric API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **IP Fabric**.
* Appliquez le modèle d'hôte **App-Ipfabric-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro        | Description                                                                            |
|:------------|:-------------|:---------------------------------------------------------------------------------------|
| X           | APIHOSTNAME  | Adresse pour joindre l'API IP Fabric.                                                  |
| X           | APIKEY       | API key utilisée pour requêter l'API IP Fabric.                                        |
|             | CUSTOMMODE   | (Défaut: 'api')                                                                        |
|             | DUMMYOUTPUT  | (Défaut : 'This is a dummy check')                                                     |
|             | DUMMYSTATUS  | (Défaut : 'OK')                                                                        |
|             | EXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --mode=path-verification \
    --custommode='' \
    --api-key='' \
    --hostname='' \
    --warning-status='' \
    --critical-status='%{expected_state} ne %{state}' \
    --warning-total-path='' \
    --critical-total-path='' \
    --warning-total-mismatch='' \
    --critical-total-mismatch='' \
    --warning-error-path='' \
    --critical-error-path='' \
    --warning-none-path='' \
    --critical-none-path='' \
    --warning-part-path='' \
    --critical-part-path='' \
    --warning-all-path='' \
    --critical-all-path='' \
    --http-backend=curl\
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Total number of paths: 10 Total mismatch: 0 Number of paths in All state: 8 Number of paths in Part state: 1 Number of paths in None state: 1 Number of paths in Error state: 0  | 'total.path.count'=10;;;0; 'total.path.mismatch.count'=0;;;0; 'total.path.all.count'=8;;;0; 'total.path.part.count'=1;;;0; 'total.path.none.count'=1;;;0; 'total.path.error.count'=0;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --mode=path-verification \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.