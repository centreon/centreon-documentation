---
id: commands
title: Les commandes
description: "Configurer les commandes, listes blanches et connecteurs utilisés pour les contrôles de supervision"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Définition

Une commande est la définition d’une ligne de commande qui utilise un script ou une application afin de réaliser une
action. Il est possible d’exécuter cette commande en précisant des arguments.

Il existe quatre types de commandes :

* **Verification** sont utilisées par les ordonnanceurs afin de vérifier le statut d’un hôte ou d’un service
* **Notification** sont utilisées par les ordonnanceurs pour alerter les contacts (via mail, SMS...).
* **Discovery** sont utilisées par les règles de découverte.
* **Miscellaneous** sont utilisées par les modules complémentaires (pour effectuer certaines actions), par
  l’ordonnanceur pour le traitement des données...

Toutes les commandes peuvent être configurées au sein du menu : **Configuration > Commands**.

![image](../../assets/configuration/04commandlist.png)

> Par défaut, les commandes verrouillées sont masquées. Cocher la case "Eléments verrouillés" pour les afficher toutes.

## Ajouter une commande

1. Rendez-vous dans le menu **Configuration > Commands**
2. Cliquez sur le bouton **Add**

![image](../../assets/configuration/04command.png)

> Les champs de configuration d’une commande sont les mêmes qu’importe le type de commande choisi.

## Les champs de configuration

* Le champ **command Name** définit le nom de la commande.
* Le champ **Command Type** permet de choisir le type de commande.
* Le champ **Command Line** indique l’application ou le script utilisé avec la commande.
* La case **Enable shell**  permet d’activer des fonctions propres à un shell tel que le pipe...
* Le champ **Argument Example** définir des exemples d'arguments (chaque argument commence par un "!")
* Le bouton **Describe arguments** permet d’ajouter une description aux arguments de type “$ARGn$”. Cette description
  sera visible lors de l’utilisation de la commande dans un formulaire d’hôte ou de service.
* Le bouton **Clear arguments** efface la description des arguments définie
* Le bouton **Describe macros** permet d’ajouter une description aux macros personalisées. Ces descriptions seront
  visibles lors de l’ajout de la commande sur un host ou un service.

* La liste de sélection **Connectors** permet de lier un connecteur à la commande. Pour davantage d’informations sur
  les connecteurs reportez-vous au chapitre [les connecteurs](#les-connecteurs).
* Le champ **Graph template** permet de lier la commande à un modèle de graphique.
* Le champ **Comment** permet de commenter la commande.

## Arguments et macros

Au sein du champ **Command Line** il est possible de faire appel à des
*[macros](macros.md)* ainsi qu’à des arguments.

Les arguments sont utilisés afin de pouvoir passer différents paramètres aux scripts appelés par les commandes. Lors de
l’exécution de la commande par l’ordonnanceur, chacun des arguments et macros sont remplacés par leur valeur respective.
Chaque macro se présente sous la forme **$valeur$** :

```shell
$CENTREONPLUGINS$/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=cpu \
--hostname=$HOSTADDRESS$ --snmp-version='$_HOSTSNMPVERSION$' \
--snmp-community='$_HOSTSNMPCOMMUNITY$' $_HOSTSNMPEXTRAOPTIONS$ \
--warning-average='$_SERVICEWARNING$' \
--critical-average='$_SERVICECRITICAL$' $_SERVICEEXTRAOPTIONS$
```

> La bonne pratique veut que nous remplacions les arguments par des
*[macros personnalisées](macros.md#les-macros-personnalisées)*.

## Tester une commande

Pour vous assurer qu'une commande fonctionne, vous pouvez la tester en ligne de commande sur votre collecteur.

1. Sur votre serveur central, dans la page **Statut des ressources**, sélectionnez l'hôte ou le service dont vous souhaitez tester la commande de contrôle.
2. Copiez la commande de contrôle située en bas du panneau **Détails**.
3. Connectez-vous à votre collecteur en tant que l'utilisateur **centreon-engine** (`su - centreon-engine`).
4. Exécutez la commande que vous avez copiée (pour les macros de mot de passe, remplacez *** par le mot de passe réel).

La commande renvoie les mêmes informations que la colonne **Informations** de la page **Statut des ressources** (c'est-à-dire la sortie, les métriques et la sortie étendue fournies par stdout), ainsi que les messages d'erreur (stderr). La solution à tout problème est susceptible d'y être indiquée.

## Listes blanches de commandes

Centreon vous permet de créer des listes blanches, qui définissent quelles commandes sont autorisées à être exécutées par le moteur de supervision de chaque collecteur. Par défaut, aucune liste blanche n'est définie et toutes les commandes sont autorisées. Cependant, à partir du moment où vous insérez une commande dans un fichier de liste blanche, toutes les autres commandes seront bloquées. Dans ce cas, assurez-vous d'autoriser toutes les commandes des plugins Centreon (voir ci-dessous). Aussi, si vous créez des plugins personnalisés avec vos propres commandes personnalisées, ou bien si vous utilisez un plugin de la communauté, vous devrez ajouter les commandes utilisées par ceux-ci à la liste blanche de commandes du collecteur qui exécutera le plugin.

### Ajouter une commande à la liste blanche

1. Connectez-vous en **root** au collecteur qui exécutera la commande.
2. Créez le répertoire et le fichier suivant : **/etc/centreon-engine-whitelist/my-whitelist.yml**. (Vous pouvez créer autant de fichiers de liste blanche que vous souhaitez dans ce répertoire.)
3. Assurez-vous que les droits d'accès corrects sont définis sur tous les fichiers de liste blanche :

   ```yaml
   chown root:centreon-engine /etc/centreon-engine-whitelist/my-whitelist.yml
   chmod 0640 /etc/centreon-engine-whitelist/my-whitelist.yml
   chown root:centreon-engine /etc/centreon-engine-whitelist
   chmod 750 /etc/centreon-engine-whitelist
   ```
   
4. Utilisez une regex pour définir les commandes autorisées. Exemple : 

   ```text
   whitelist:
      regex:
		 - \/usr\/lib(64)?\/nagios\/plugins\/.*
		 - \/usr\/lib(64)?\/nagios\/plugins\/.check_.*
         - \/opt\/my_plugins\/my_custom_plugin\.py .*
   cma-whitelist:
   default:
    regex:
      - \/usr\/lib(?:64)?\/nagios\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/check_centreon_bam.*
      - \"C:\/Program Files\/Centreon\/Plugins\/centreon_plugins.exe\"\s+.+
      - ^\{\s*"check":".*\}$
      - \/usr\/bin\/echo\s+Host\s+alive
      - cmd\.exe\s+\/C\s+echo\s+.*
   ```

5. Rechargez le service **centengine** :

   ```text
   systemctl reload centengine
   ```

Le bloc "whitelist" définit les commandes pouvant être exécutées par le collecteur.

> Les deux premières lignes doivent toujours être présentes dans le bloc **whitelist** : elles correspondent aux commandes Centreon.

Le bloc **cma-whitelist** définit les commandes pouvant être exécutées par l'agent CMA.

Dans le bloc **cma-whitelist**, vous pouvez au besoin spécifier des liste blanches par hôte. La syntaxe sera la suivante :


```text
whitelist:
  regex:
	 - \/usr\/lib(64)?\/nagios\/plugins\/.*
	 - \/usr\/lib(64)?\/nagios\/plugins\/.check_.*
	 - \/opt\/my_plugins\/my_custom_plugin\.py .*
cma-whitelist:
  default:
    regex:
      - \/usr\/lib(?:64)?\/nagios\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/check_centreon_bam.*
      - \"C:\/Program Files\/Centreon\/Plugins\/centreon_plugins.exe\"\s+.+
      - ^\{\s*"check":".*\}$
      - \/usr\/bin\/echo\s+Host\s+alive
      - cmd\.exe\s+\/C\s+echo\s+.*
  hosts:
    - hostname:Host_1
    regex:
      - ...
      
    - hostname:Host_2
    regex:
      - ...
```

Utilisez `.*` afin d'inclure tous les arguments dans la regex.
Le `.*` à la fin de la regex lui permet de gérer tout argument qu'elle contiendrait. Attention, le format doit être strictement identique à celui ci-dessus (cela inclut les indentations).

> Si vous n'avez pas autorisé votre commande dans la liste blanche du collecteur, cela vous sera signalé dans la colonne **Informations** de la page **Statut des ressources**.

## Les connecteurs

### Connecteur SSH

Le connecteur Centreon SSH Connector est un logiciel Centreon gratuit, disponible sous licence Apache Software License version 2 (ASL 2.0).
Utilisé avec Centreon Engine, il accélère l'exécution des contrôles faits via SSH.

#### Installation

Exécutez la commande suivante en tant qu'utilisateur privilégié :

<Tabs groupId="os" queryString>
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
<TabItem value="Debian 12" label="Debian 12">

``` shell
apt install centreon-connector-ssh
```

</TabItem>
</Tabs>

### Perl connector

Le connecteur Centreon Perl Connector est un logiciel Centreon gratuit, disponible sous licence Apache Software License version 2 (ASL 2.0).
Utilisé avec Centreon Engine, il accélère l'exécution des scripts Perl.

#### Installation

Exécutez la commande suivante en tant qu'utilisateur privilégié :

<Tabs groupId="os" queryString>
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
<TabItem value="Debian 12" label="Debian 12">

``` shell
apt install centreon-connector-perl
```

</TabItem>
</Tabs>
