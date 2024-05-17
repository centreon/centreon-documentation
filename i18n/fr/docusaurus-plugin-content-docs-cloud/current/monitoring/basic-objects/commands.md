---
id: commands
title: Les commandes
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Définition

Les commandes de contrôle sont utilisées par le moteur de supervision pour contrôler le statut d'un hôte ou d'un service. Les commandes de contrôle exécutent des [plugins](../../resources/glossary.md#plugin). Une commande de contrôle est utilisée dans un modèle d'hôte ou de service. Si ces modèles sont appliqués à un hôte ou un service, le script appelé par la commande est exécuté quand l'hôte ou le service est contrôlé, avec les options que vous avez définies.

Le plupart des commandes sont fournies par les connecteurs de supervision installés, et sont prêtes à l'emploi. Cependant si ces commandes ne répondent pas à vos besoins (par exemple, si elles ont trop ou pas assez d'arguments), vous pouvez en créer de nouvelles (commandes personnalisées). Vous devez créer une commande par plugin et par [mode](../../resources/glossary.md#mode). Les commandes personnalisées sont une fonctionnalité avancée.

Les commandes peuvent être configurées à la page **Configuration > Commands > Checks**.

> Par défaut, seules les commandes personnalisées (c'est-à-dire créées par l'utilisateur) sont affichées. Toutes les commandes fournies par les connecteurs de supervision sont en lecture seule ("verrouillées") et sont masquées. Cochez la case "éléments verrouillés" pour afficher ces commandes.

## Créer une commande personnalisée

1. Allez à la page **Configuration > Commandes > Contrôles**.
2. Cliquez sur le bouton **Ajouter**.
3. Remplissez les champs suivants :

   * **Nom de commande** : nom de la commande tel qu'il apparaîtra dans la liste des commandes dans les forumlaires de création de modèles d'hôtes ou de services.
   * **Ligne de commande** : la commande qui sera exécutée quand un contrôle sera effectué. La syntaxe est celle de Nagios. Spécifiez :

      * l'application ou le script exécuté par la commande (chemin et nom de fichier). Pour des plugins Centreon ou Nagios, utilisez une variable afin que Centreon trouve le chemin du répertoire des pugins quel que soit l'OS (la variable est définie à la page **Configuration > Collecteurs > Ressources** page). Si vous utilisez vos propres plugins, spécifiez le chemin du répertoire où vous avez placé les plugins.
      * le [mode](../../resources/glossary.md#mode) du plugin à utiliser.
      * tout paramètre que vous voulez passer au plugin dans ce mode. Pour les plugins Centreon, reportez-vous à la documentation du plugin dans la section [Connecteurs de supervision](/pp/integrations/plugin-packs/getting-started/introduction).
      * Vous pouvez utiliser des [macros](macros.md) (macros d'hôtes ou de services) afin de rendre votre commande plus générique, mais ce n'est pas obligatoire. Le nom de la macro apparaîtra dans le formulaire de configuration de l'hôte ou du service afin que vous puissiez lui attribuer une valeur spécifique pour chaque hôte ou service avec lequel vous l'utiliserez.

   * **Description des macros** : saisissez une description pour les macros personnalisées. Cette description sera visible lorsque vous utiliserez la commande dans le formulaire de configuration d'hôte ou de service.
   * **Connecteurs**: utilisez le **[connecteur Perl](#perl-connector)** ou le **[connecteur SSH](#ssh-connector)** afin de réduire la comsommation de ressources du plugin. Le connecteur Perl peut être utilisé avec toutes les commandes, sauf **check_icmp** et **check_nrpe**.
   * **Modèle de graphique** : liez la commande à un modèle de graphique.

4. Cliquez sur **Sauvegarder**. La commande apparaît maintenant dans la liste **Commande de vérification** dans les formulaires de configuration de modèles d'hôtes ou de services.

## Utiliser des commandes personnalisées

Une fois votre commande personnalisée créée :

1. Liez la commande au modèle d'hôte ou de service désiré : utilisez le champ **Commande de vérification** dans les formulaires de configuration de modèles d'hôtes ou de services.
2. Liez ce modèle d'hôte ou de service à l'hôte ou au service désiré : dans le formulaire de configuration de l'hôte ou du service, sélectionnez le modèle auquel vous avez lié la commande.
3. Renseignez les valeurs correctes pour les macros dans le formulaire de configuration de l'hôte ou du service.
3. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md). L'hôte ou le service apparaît à la page **Statut des ressources**. Vous pouvez voir la commande personnalisée dans le panneau de détails de l'hôte ou du service, avec les valeurs correctes pour les macros. Une fois le contrôle exécuté, vous pouvez également voir le message de sortie à cet endroit.
4. Ajoutez la commande à la [liste blanche de commandes](#command-whitelist) du poller qui exécutera le contrôle.

## Liste blanche de commandes

Pour des raisons de sécurité, Centreon Cloud inclut une liste blanche préremplie, qui définit quelles commandes sont autorisées à être exécutées par le moteur de supervision de chaque collecteur. Par défaut, il autorise toutes les commandes fournies par les connecteurs de supervision. Si vous créez des plugins personnalisés avec vos propres commandes personnalisées, ou bien si vous utilisez un plugin de la communauté, vous devrez ajouter les commandes utilisées par ceux-ci à la liste blanche de commandes du collecteur qui exécutera le plugin.

### Ajouter une commande à la liste blanche

1. Connectez-vous en **root** au collecteur qui exécutera la commande.
2. Éditez le fichier suivant : **/etc/centreon-engine-whitelist/my-whitelist.yml**.
3. Utilisez une regex pour définir les comandes autorisées. Exemple : pour autoriser toutes les commandes des plugins Centreon, la syntaxe correcte est :

   ```yaml /etc/centreon-engine-whitelist/my_whitelist.yml
	   whitelist:
	     regex:
	       - \/opt\/my_plugins\/my_custom_plugin\.py .*
	    ```
	
	Utilisez `.*` afin d'inclure tous les arguments dans la regex.

> Si vous n'avez pas autorisé votre commande dans la liste blanche du collecteur, cela vous sera signalé dans la colonne **Informations** de la page **Statut des ressources**.

## Connecteurs d'optimisation

### Connecteur Perl

Le connecteur Centreon Perl Connector est un logiciel Centreon gratuit, disponible sous licence Apache Software License version 2 (ASL 2.0).
Utilisé avec Centreon Engine, il accélère l'exécution des scripts Perl.

#### Installation

Exécutez la commande suivante en tant qu'utilisateur privilégié :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-connector-perl
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-connector-perl
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
apt install centreon-connector-perl
```

</TabItem>
</Tabs>

### Connecteur SSH

Le connecteur Centreon SSH Connector est un logiciel Centreon gratuit, disponible sous licence Apache Software License version 2 (ASL 2.0).
Utilisé avec Centreon Engine, il accélère l'exécution des contrôles faits via SSH.

#### Installation

Exécutez la commande suivante en tant qu'utilisateur privilégié :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-connector-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-connector-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
apt install centreon-connector-ssh
```

</TabItem>
</Tabs>
