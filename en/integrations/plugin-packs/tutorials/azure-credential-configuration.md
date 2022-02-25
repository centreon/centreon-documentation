---
id: azure-credential-configuration
title: Azure Monitoring Prerequisites
---
Two methods are available to get metrics from Azure:
* Azure API ('api').
* Azure CLI ('azcli').

Centreon recommends to use Azure Monitor API instead of Azure CLI for the following reasons: 
* The API is much more efficient by avoiding CLI binary execution
* The API supports application authentication while CLI does not (yet)

> This discovery feature is only compatible with Azure Monitor API.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](../../../monitoring/discovery/hosts-discovery.html)

## Azure API setup 

4 tokens are needed for Centreon to request Azure Monitor API:
* subscription ID
* tenant ID
* client ID
* client secret 

You need to create a new application in Azure to obtain these tokens. The steps below detail how to create this application and set the right permissions to monitor Azure resources.

* Create an *Application* in Azure Active Directory:
	- Log in to Azure Portal.
	- Select **Azure Active Directory**.
	- Go to **App registrations** in the sidebar on the left.
	- Click on **+ New registration**, put the name of your application and then click on **Register**.
	
* Add the **Monitoring Reader role** to your new application:
	- Go back to the Azure Portal home menu.
	- Go to **Resource groups**.
	- Choose the resource group containing the resources you want to monitor. 
	- Click on **Access Control (IAM)** and **+ Add > Add role assignment**.
	- Search for the *Monitoring Reader* role, select it and click Next.
	- Select your new application as a member for this role by clicking on **+ Select members**.
	- Review and assign.
	
Now that the application is created, the steps below will guide you to retrieve the 4 tokens: 
* Get the **subscription ID**:
	- Go to **Subscriptions** in Azure portal. 
	- Copy the *Subscription ID* next to the name of your subscription.
* Get the **Tenant ID**:
	- Go to **Azure Active Directory**.
	- Go to **Overview** and copy the *Tenant ID*.
	
* Get the **Client ID**:
	- Go to **Azure Active Directory**.
	- Go to **App registrations** in the sidebar on the left and click on your application.
	- Go to **Overview** and copy the *Application (client) ID*.
* Get the **Client secret**:
	- Still in **Azure Active Directory > App registrations**, go to **Certificates & secrets**.
	- Click on **+ New client secret**, set description as well as expiration date and Add.
	- Save the **key value**, it is the **client secret** and you won't be able to retrieve it after you leave this page.
	
These 4 tokens will be mandatory when using host autodiscovery and Centreon Azure based plugins. 

## Azure CLI setup 

> These steps are not required if you can use Azure Monitor API.

Install Azure CLI on every Centreon poller expected to monitor Azure Resources:

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
sudo yum install azure-cli-2.29.2-1.el7
```

Then, use the **centreon-engine** account to obtain a token:

```bash
su - centreon-engine
az login
```

The shell will output this message including an authentication code:

```text
To sign in, use a web browser to open the page https://microsoft.com/devicelogin
and enter the code CWT4WQZAD to authenticate.*

Go to <https://microsoft.com/devicelogin> and enter the code, then log in with the dedicated monitoring service account.

As a result, the shell should prompt the information below:

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

Credentials are now stored locally in the **accessTokens.json**, Centreon Azure based plugins will be able to retrieve them.
