---
id: cloud-azure-management-recovery
title: Azure Recovery

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Azure Recovery** apporte un modèle d'hôte :

* Cloud-Azure-Management-Recovery-Backup-custom

Il apporte les modèles de service suivants :

| Alias               | Modèle de service                                       | Description                                            | Défaut |
| :------------------ | :------------------------------------------------------ | :----------------------------------------------------- | :----- |
| Backup-Items-Status | Cloud-Azure-Management-Recovery-Backup-Items-Status-Api | Contrôle l'état de sauvegarde des éléments d'un coffre | X      |
| Backup-Jobs-Status  | Cloud-Azure-Management-Recovery-Backup-Jobs-Status-Api  | Contrôle l'état des jobs de backup d'un vault  | X      |
| Replication-Health  | Cloud-Azure-Management-Recovery-Replication-Health-Api  | Contrôle l'état de la réplication et du failover d'items d'un vault | X      |

### Règles de découverte

Le connecteur de supervision Centreon **Azure Recovery** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Recovery Vaultss**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-recovery-provider.png)

> La découverte **Azure Recovery** n'est compatible qu'avec le mode **api**. Le mode **azcli** n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Backup-Items-Status" label="Backup-Items-Status">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| Backup item status          |       |

</TabItem>
<TabItem value="Backup-Jobs-Status" label="Backup-Jobs-Status">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| Backup job status           |       |

</TabItem>

<TabItem value="Replication-Health" label="Replication-Health">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| Replication health          |       |
| Failover health             |       |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Recovery** :

```bash
yum install centreon-plugin-Cloud-Azure-Management-Recovery-Api
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure Recovery** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Recovery** :

```bash
yum install centreon-plugin-Cloud-Azure-Management-Recovery-Api
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Azure Recovery** :

```bash
yum install centreon-pack-cloud-azure-management-recovery
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure Recovery** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-Management-Recovery-Backup-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Macro              | Description                                  |
| :-------- | :----------------- | :------------------------------------------- |
| X         | AZUREAPICUSTOMMODE | Custom mode **api**                          |
| X         | AZUREVAULTNAME     | Backup vault name                            |
| X         | AZURECLIENTID      | Client ID                                    |
| X         | AZURECLIENTSECRET  | Client secret                                |
| X         | AZURERESOURCEGROUP | Resource group name                          |
| X         | AZURESUBSCRIPTION  | Subscription ID                              |
| X         | AZURETENANT        | Tenant ID                                    |
|           | PROXYURL           | Proxy URL                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Macro              | Description                                  |
| :-------- | :----------------- | :------------------------------------------- |
|  X        | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|  X        | AZURERESOURCEGROUP | Resource group name                          |
|  X        | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_azure_management_recovery_api.pl \
    --plugin=cloud::azure::management::recovery::plugin \
    --mode=backup-jobs-status \
    --custommode='api' \
    --resource-group='GPBACK1234' \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --proxyurl='' \
    --vault-name='vault123' \
    --warning-status='' \
    --critical-status='%\{status\} eq "Failed"' \
    --warning-total-completed='' \
    --critical-total-completed='' \
    --warning-total-failed='' \
    --critical-total-failed='' \
    --warning-total-inprogress='' \
    --critical-total-inprogress='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Backup Job 'backupjob456' Status 'Completed' [Duration: 41m 12s]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_management_recovery_api.pl \
    --plugin=cloud::azure::management::recovery::plugin \
    --mode=backup-jobs-status \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_management_recovery_api.pl \
    --plugin=cloud::azure::management::recovery::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.