---
id: azure-credential-configuration
title: Prérequis pour la supervision Azure
---
Deux méthodes sont disponibles pour interroger les API d'Azure :
* Azure API ('api').
* Azure CLI ('azcli').

Centreon recommande d'utiliser la méthode **API** plutôt que Azure CLI.    
Azure CLI n'est pas compatible avec l'autodécouverte d'hôtes.


## Configuration Azure API

Pour permettre à Centreon de récupérer des données de supervision depuis Azure, 4 tokens sont nécessaires :
* **subscription ID**
* **tenant ID**
* **client ID**
* **client secret** 

Pour disposer de ces tokens, il est nécessaire de créer une Application dans Azure et lui assigner les droits suffisants :


* Créer une nouvelle *Application* dans Azure Active Directory:
	- Connectez-vous au Portail Azure.
	- Sélectionnez **Azure Active Directory**.
	- Sur le menu de gauche, rendez-vous dans **Inscriptions d'applications**.
	- Cliquez sur **+ Nouvelle inscription**, renseignez le nom de l'application et cliquez sur **S'inscrire**.
	
* Ajouter le rôle **Lecteur d'analyse** à l'application qui vient d'être créée:
	- Rendez-vous dans **Groupes de ressources**.
	- Cliquez sur le groupe de ressources contenant les ressources à superviser. 
	- Rendez-vous dans **Contrôle d'accès (IAM)** and **+ Ajouter > Ajouter une attribution de rôle**.
	- Recherchez le rôle **Lecteur d'analyse**, sélectionnez-le et cliquez Suivant.
	- Sélectionnez votre application en tant que a membre en cliquant sur **+ Sélectionnez des membres**.
	- Cliquez ensuite sur **Vérifier + Attribuer**.
	
Une fois que l'application est créée et que le rôle **Lecteur d'analyse** lui a été attribué, les 4 tokens sont disponibles. Vous pouvez les récupérer en suivant les étapes ci-dessous : 

*  Obtenir le **subscription ID**:
	- Rendez-vous dans **Abonnement** dans le portail Azure. 
	- A côté du nom de votre abonnement se trouvent le **Subscription ID**, sous le label ID d'abonnement.
* Obtenir le **Tenant ID**:
	- Rendez-vous dans **Azure Active Directory**.
	- Depuis **Vue d'ensemble**, dans **Informations de base** et en dessous du nom du répertoire se trouve le **Tenant ID**, labélisé en français ID du client. Vous pouvez aussi trouver le Tenant ID dans Azure Active Directory > Inscriptions d'applications > nom_de_votre_application et ID de l'annuaire (locataire).
	
* Obtenir le **Client ID**:
	- Allez dans **Azure Active Directory**.
	- Sur le menu de gauche, sélectionnez **Inscriptions d'applications** et cliquez sur le nom de votre application. 
	- Dans la section **Vue d'ensemble** vous allez trouver **ID d'application (client)** qui correspond au Client ID.
* Obtenir le **Client secret**:
	- Toujours dans **Azure Active Directory > Inscriptions d'applications**, rendez-vous dans **Certificats & secrets**.
	- Cliquez sur **+ Nouveau secret client**, remplissez la description ainsi que la date d'expiration puis cliquez sur Ajouter.
	- Gardez la **valeur de la clef** en lieu sûr, il s'agit du **client secret**, une fois la page quittée il vous sera impossible de retrouver la valeur de la clef secrète.

Ces 4 tokens seront requis lors de l'utilisation de l'autodécouverte d'hôte ainsi que pour le fonctionnement des plugins Centreon Azure.	

## Configuration Azure CLI

*Ces étapes sont à ignorer si vous pouvez utiliser l'API d'Azure* 

Installez Azure CLI :

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
sudo yum install azure-cli-2.29.2-1.el7
```

Ensuite, en étant connecté avec l'utilisateur **centreon-engine**, obtenez un token :

```bash
su - centreon-engine
az login
```

Le terminal devrait afficher un code permettant l'authentification :

	*To sign in, use a web browser to open the page https://microsoft.com/devicelogin*
	*and enter the code CWT4WQZAD to authenticate.*

Rendez-vous sur <https://microsoft.com/devicelogin> puis renseignez le code d'authentification, ensuite connectez-vous avec le compte de service de supervision dédiée.

A la suite de la connection, le terminal devrait afficher un message comme ci-dessous : 

```bash
	[
	  {
		"cloudName": "AzureCloud",
		"id": "0ef83f3a-d83e-2039-d930-309df93acd93d",
		"isDefault": true,
		"name": "N/A(tenant level account)",
		"state": "Enabled",
		"tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",
		"user": {
		  "name": "email@mycompany.onmicrosoft.com",
		  "type": "user"
		}
	  }
	]
```


Les crédentiels sont désormais stockés localement dans le fichier **accessTokens.json**, les plugins Centreon Azure pourront les utiliser lors des vérifications.
