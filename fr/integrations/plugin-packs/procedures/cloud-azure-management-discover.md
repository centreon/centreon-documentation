---
id: cloud-azure-management-discover
title: Azure Discover
---

## Vue d'ensemble

Le Plugin Pack Centreon *Azure Discover* permet de découvrir l'ensemble des resources Azure rattachées à une souscription donnée.
Il s'appuie sur les API Azure Monitor afin de récuperer les éléments de l'infrastructure. Il s'appuie sur la collection des Plugin Pack
afin de modéliser une infrastructure Azure dans Centreon

> Le Plugin Pack Centreon *Azure Discover* est uniquement compatible avec le *custom-mode* 'api'.

## Contenu du Plugin Pack

> Le Plugin Pack *Azure Discover* est un pack de *découverte*. Il ne fournit pas de modèles ni d'indicateurs de supervision en propre.

### Règles de découverte

Le Plugin Pack Centreon *Azure Discover* fournit un *provider* de découverte d'Hôtes nommé **Microsoft Azure Management Discover**
Celui-ci permet de découvrir l'ensemble des ressources Microsoft Azure rattachées à une *souscription* donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-discover-provider.png)

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](../../../monitoring/discovery/hosts-discovery.html)

## Prérequis

### Identifiants

Le Plugin Pack Centreon *Azure Discover* est uniquement compatible avec le *custom-mode* 'api'.

Récupérez les informations d'identification associées en suivant la procédure ci-dessous (en anglais)
et notez celles-ci en lieu sûr. Elles seront en effet indispensables lors de la configuration des ressources
dans Centreon.

* Create an *application* in Azure Active Directory:
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *App registrations*.
    - Click on *+ Add*.
    - Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url.
    - Click on the *Create* button.

* Get *Subscription ID*
    - Log in to your Azure account.
    - Select *Subscriptions* in the left sidebar.
    - Select whichever subscription is needed.
    - Click on *Overview*.
    - **Copy the Subscription ID.**

* Get *Tenant ID*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *Properties*.
    - **Copy the directory ID.**

* Get *Client ID*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *Enterprise applications*.
    - Click on *All applications*.
    - Select the application previously created.
    - Click on *Properties*.
    - **Copy the Application ID.**

* Get *Client secret*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *App registrations*.
    - Select the application previously created.
    - Click on *All settings*.
    - Click on *Keys*.
    - Enter the key description and select the duration.
    - Click on *Save*.
    - **Copy and store the key value. You won't be able to retrieve it after you leave this page.**

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant découvrir des resources Azure:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Discover-Api
```

2. Sur l'interface Web Centreon, installer le Plugin Pack *Azure Discover* depuis la page "Configuration > Plugin packs > Manager".
Des Plugin Packs supplémentaires seront installés en dépendance afin de permettre la supervision de l'ensemble des ressources découvertes.

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant découvrir des resources Azure:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Discover-Api
```

2. Sur le serveur Central Centreon, installer l'ensemble des RPM des Plugin Packs *Azure* afin de bénéficier de l'ensemble des dépendances:

```bash
yum install centreon-pack-cloud-azure\*
```

3. Sur l'interface Web Centreon, installer le Plugin Pack *Azure Discover* depuis la page "Configuration > Plugin packs > Gestionnaire".
Les Plugin Packs supplémentaires seront installés en dépendance afin de permettre la supervision de l'ensemble des ressources découvertes.

<!--END_DOCUSAURUS_CODE_TABS-->

## Paramétrer une découverte

> Le descriptif du fonctionnement général de la fonctionnalité *Host Discovery* est disponible [ici](../../../monitoring/discovery/hosts-discovery.html)

### Paramètres d'accès

Après avoir sélectionné le provider **Azure Management Discover**, renseignez les paramètres d'authentification ainsi que les options 
d'accès à l'API comme ci-après:

[image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-discover-accessparameters.png)

- Sélectionnez le **collecteur Centreon** depuis lequel sera lancé la découverte
- Renseignez les paramètres relatifs à l'utilisation d'un **proxy d'entreprise** si besoin
- Sélectionnez le **profil d'authentification Azure** à utiliser

Dans le cadre d'une première utilisation, vous pouvez créer un nouveau profil d'accès à Azure en cliquant sur '+'. Renseignez ensuite
les informations demandées comme ci-après:

[image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-discover-credentials.png)

> Tous les champs du formulaire *credentials* doivent être renseignés

Cliquez sur *confirm* puis sur *next* pour afficher la page des paramètres de la découverte.

### Paramètres de découverte

Renseignez si besoin les information ci-après:

[image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-discover-discoparameters.png)

> Tous les champs de ce formulaire sont facultatifs

- Azure Location/Resource Group: permet de restreindre la découverte à une *location* ou un *resource group* donné
- Filter on namespace/type: permet de restreindre la découverte à un Service Azure spécifique, par exemple:
    - *Resource namepsace*: 'Microsoft.Compute'
    - *Resource type*: 'virtualMachines'
> ** Attention** : pour l'utilisation de ce filtre,
> les champs *Resource namepsace* et *Resource type* doivent dans ce cas être **tous les deux** renseignés

### Lancement de la découverte et affichage des résultats

Les étapes 4, 5 & 6 permettent de modifier les *mappers* et d'ajuster la modélisation des résultats. Réferez-vous à la [documentation
du module](../../../monitoring/discovery/hosts-discovery.html) pour plus d'informations.

Une fois la découverte terminé, vous pouvez afficher les résultats en cliquant sur *job results*. Les modèles relatifs aux types de resources
Azure sont automatiquement appliqués. Sélectionnez les éléments à modéliser dans Centreon et *Sauvegardez*.

## Diagnostic des erreurs communes  

### Les identifiants ont changé et mon Plugin ne fonctionne plus

Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas 
se ré-authentifier à chaque appel. Si des informations sur le Tenant, la Souscription ou les 
Client ID / Secret changent, il est nécessaire de supprimer le fichier de cache du Plugin. 

Celui ci se trouve dans le répertoire ```/var/lib/centreon/centplugins/``` avec le nom azure_api_<md5>_<md5>_<md5>_<md5>.

### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

Lors du déploiement de mes contrôles, j'obtiens le message suivant : 
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

Cela signifie que l'un des paramètres utilisés pour authentifier la requête est incorrect. Le paramètre 
en question est spécifié dans le message d'erreur en lieu et place de 'ERROR_DESC'. 

Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret
n'est (ne sont) pas valide(s).