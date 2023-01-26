---
id: cloud-microsoft-office365-azuread
title: Office 365 Azure AD
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Office 365 Azure AD** apporte un modèle d'hôte :

* Cloud-Microsoft-Office365-AzureAD-Api-custom

Il apporte le modèle de service suivant :

| Alias           | Modèle de service                                     | Description                                                    | Défaut |
|:----------------|:------------------------------------------------------|:---------------------------------------------------------------|:-------|
| Directory-Quota | Cloud-Microsoft-Office365-AzureAD-Directory-Quota-Api | Contrôle le quota d'utilisation du répertoire Active Directory | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Directory-Quota" label="Directory-Quota">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| azure.ad.directory.usage.count       |       |

</TabItem>
</Tabs>

## Prérequis

Afin d'utiliser ce Pack de supervision, il est nécessaire d'attribuer les bons privilèges à votre application/client. Ces privilèges 
sont listés [ici](https://docs.microsoft.com/en-us/graph/api/organization-get?view=graph-rest-beta&tabs=http#permissions).

La procédure pour définir une application est disponible [ici](../procedures/cloud-microsoft-office365-management.md#prérequis).

### Spécifiez les autorisations dont votre application a besoin pour accéder aux API de gestion Office 365

Afin de récupérer les données de OneDrive Online, vous devez spécifier les
autorisations que votre application requiert: 
Dans le portail de gestion Azure :

* Microsoft Graph :
    * Organization.Read.All (Application and Delegated)
    * Directory.Read.All (Application and Delegated)

La documentation officielle de Microsoft sur les permissions est disponible [ici](https://docs.microsoft.com/en-us/graph/api/organization-get?view=graph-rest-beta&tabs=http#permissions).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure AD** :

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-AzureAD-Api
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Office 365 Azure AD** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure AD** :

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-AzureAD-Api
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Office 365 Azure AD** :

```bash
yum install centreon-pack-cloud-microsoft-office365-azuread
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Office 365 Azure AD** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Azure AD**.
* Appliquez le modèle d'hôte **Cloud-Microsoft-Office365-AzureAD-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                 | Description                                                                            |
|:------------|:----------------------|:---------------------------------------------------------------------------------------|
|     x       | OFFICE365CLIENTID     |                                                                                        |
|     x       | OFFICE365CLIENTSECRET |                                                                                        |
|             | OFFICE365EXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|     x       | OFFICE365TENANT       |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_office365_azauread_api.pl \
    --plugin=cloud::microsoft::office365::azuread::plugin \
    --mode=directory-size-usage \
    --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
    --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
    --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg=' \
    --warning-usage='90' \
    --critical-usage='95' \
    --units='%' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Directory size usage : 265079/309000 (85.79%) | 'azure.ad.directory.usage.count'=265079;0:278100;0:293550;0;309000
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_office365_azauread_api.pl \
    --plugin=cloud::microsoft::office365::azuread::plugin \
    --mode=directory-size-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_office365_azauread_api.pl \
    --plugin=cloud::microsoft::office365::azuread::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.