---
id: additional-connector-configuration
title: Configurations supplémentaires de connecteurs  
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour certains connecteurs, les identifiants permettant d'accéder à la ressource à superviser doivent être configurés sur le collecteur qui va la superviser. Le menu **Configurations supplémentaires de connecteurs** vous permet de configurer ces informations via l'interface Centreon plutôt que d'avoir à vous connecter à vos collecteurs manuellement. Pour l'instant, seuls certains connecteurs VMWare peuvent être configurés de cette manière.

Vous pouvez paramétrer la connexion à plusieurs vCenters dans une seule configuration, mais vous devrez créer un hôte par vCenter. Les macros définiront pour chaque hôte quelle sera la ressource à superviser.

## Créer une configuration supplémentaire de connecteur

1. À la page **Configuration > Configurations supplémentaires de connecteurs**, cliquez sur **Ajouter**.
2. Dans la fenêtre qui apparaît, remplissez les champs suivants :
   * **Nom** et **Description** (la description apparaîtra das la liste des configurations).
   * **Type** : pour l'instant, seul le type **VMWare 6/7** est disponible.
   * **Collecteurs** : sélectionnez tous les collecteurs qui superviseront ce type de ressources. (Ici, "collecteur" désigne le moteur de supervision à l'intérieur du serveur central, de serveurs distants ou de collecteurs.)
   * Dans la section **Paramètres**, entrez les informations correspondant à l'infrastructure VMWare infrastructure que vous souhaitez superviser. Le nom du vCenter est le FQDN de votre vCenter server appliance.
3. Cliquez sur **Créer**. La nouvelle configuration apparaît dans la liste des configurations.
4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration) pour tous les collecteurs concernés.
5. Vous pouvez maintenant créer un hôte en utilisant un modèle issu du connecteur de supervision VMWare :
   * [VMware ESX](../../procedures/virtualization-vmware2-esx.md)
   * [VMware vCenter v6](../../procedures/virtualization-vmware2-vcenter-6.md)
   * [VMware vCenter](../../procedures/virtualization-vmware2-vcenter-generic.md)
   * [VMware VM](virtualization-vmware2-vm.md).
