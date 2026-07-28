---
id: commands
title: Les commandes
description: "Comment créer des commandes de contrôle personnalisées, gérer la liste blanche de commandes, et utiliser les connecteurs d'optimisation SSH et Perl"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Définition

Les commandes de contrôle sont utilisées par le moteur de supervision pour contrôler le statut d'un hôte ou d'un service. Les commandes de contrôle exécutent des [plugins](../../resources/glossary.md#plugin). Une commande de contrôle est utilisée dans un modèle d'hôte ou de service. Si ces modèles sont appliqués à un hôte ou un service, le script appelé par la commande est exécuté quand l'hôte ou le service est contrôlé, avec les options que vous avez définies.

Le plupart des commandes sont fournies par les connecteurs de supervision installés, et sont prêtes à l'emploi. Cependant si ces commandes ne répondent pas à vos besoins (par exemple, si elles ont trop ou pas assez d'arguments), vous pouvez en créer de nouvelles (commandes personnalisées). Vous devez créer une commande par plugin et par [mode](../../resources/glossary.md#mode). Les commandes personnalisées sont une fonctionnalité avancée.

Les commandes peuvent être configurées à la page **Configuration > Commandes > Commandes**.

> Par défaut, seules les commandes personnalisées (c'est-à-dire créées par l'utilisateur) sont affichées. Toutes les commandes fournies par les connecteurs de supervision sont en lecture seule ("verrouillées") et sont masquées. Cochez la case "éléments verrouillés" pour afficher ces commandes.

## Créer une commande personnalisée

1. Allez à la page **Configuration > Commandes > Commandes**.
2. Cliquez sur **Ajouter**.
3. Remplissez les champs suivants :

   * **Nom** : nom de la commande tel qu'il apparaîtra dans la liste des commandes dans les formulaires de création de modèles d'hôtes ou de services.
   * **Type de commande** : dans Centreon Cloud, seules les options **Contrôle** et **Divers** sont disponibles. Les commandes **Divers** s'utilisent avec les [gestionnaires d'événements](../event-handler.md).
   * **Ligne de commande** : la commande qui sera exécutée quand un contrôle sera effectué. La syntaxe est celle de Nagios. Utilisez les listes à gauche pour insérer rapidement des variables et/ou saisissez votre propre contenu. Spécifiez :

      * Une macro représentant le chemin de l'application ou du script exécuté par la commande (sans le nom de fichier). Pour des plugins Centreon ou Nagios, utilisez une variable afin que Centreon trouve le chemin du répertoire des pugins quel que soit l'OS (la variable est définie à la page **Configuration > Collecteurs > Macros globales**). Si vous utilisez vos propres plugins, spécifiez le chemin du répertoire où vous avez placé les plugins. Les valeurs par défaut apparaissent dans **Macros globales des collecteurs**, mais vous pouvez également saisir le chemin d'accès à votre propre plugin que vous avez enregistré ailleurs.

      Exemples :
         * $CENTREONPLUGINS$ si le plugin que vous utilisez se trouve au même emplacement que les plugins Centreon (comme centreon_linux_snmp.pl)
         * $USER1$ si le plugin que vous utilisez se trouve au même emplacement que les plugins Nagios (comme check_icmp)
         * /custom/path/ si le plugin que vous utilisez se trouve dans un emplacement personnalisé
         * créez la macro globale $MYPLUGINS$  si le chemin est /custom/path/ sur un poller et /alt/path/ sur un autre. De cette façon, vous pouvez utiliser la même commande pour le même plugin situé à différents emplacements selon le poller.

      * Le nom du plugin que vous souhaitez utiliser (stocké dans le chemin spécifié dans la macro globale des collecteurs). **Plugins installés** vous permet de sélectionner des plugins Nagios. Exemples : `centreon_linux_snmp.pl`, `check_icmp`...
      * Toute option que vous souhaitez passer au plugin dans ce [mode](../../resources/glossary.md#mode). Pour les plugins Centreon, reportez-vous à la documentation du plugin dans la section [Connecteurs de surveillance](/pp/integrations/plugin-packs/getting-started/introduction). Exemples : `--community=public`, `--warning=1`, `--verbose`...
      * Au lieu de coder en dur la valeur d'une option, vous pouvez utiliser des [macros](macros.md) (macros d'hôte ou macros de service) pour rendre votre commande plus générique, mais ce n'est pas obligatoire. Le nom de la macro apparaîtra dans le formulaire de configuration de l'hôte ou du service, ce qui vous permettra de lui attribuer une valeur spécifique pour chaque hôte ou service avec lequel vous l'utilisez. Vous pouvez utiliser les [**macros standard**](./macros.md#les-macros-standard) ou créer vos propres [macros personnalisées](./macros.md#les-macros-personnalisées). Exampls: `--hostname='$HOSTADDRESS$'`, `--warning='$_SERVICEWARNING$'`, `--community='$_HOSTSNMPCOMMUNITY$'`...

    * **Activer la syntaxe du shell** : cochez cette case si votre commande utilise des fonctions du shell (pipes, redirections, caractères génériques...). Notez que les commandes nécessitant le shell ralentissent le serveur de supervision.

   * **Connecteurs**: utilisez le **[connecteur Perl](#connecteur-perl)** ou le **[connecteur SSH](#connecteur-ssh)** afin de réduire la consommation de ressources du plugin. Le connecteur Perl peut être utilisé avec toutes les commandes fournies par Centreon qui utilisent des plugins Perl (.pl).  Il n'est pas compatible avec les commandes qui utilisent **check_icmp** et **check_nrpe**.

4. Cliquez sur **Sauvegarder**. La commande apparaît maintenant dans la liste **Commande de vérification** dans les formulaires de configuration de modèles d'hôtes ou de services.

## Utiliser des commandes personnalisées

Une fois votre commande personnalisée créée :

1. Liez la commande au modèle d'hôte ou de service désiré : utilisez le champ **Commande de vérification** dans les formulaires de configuration de modèles d'hôtes ou de services.
2. Liez ce modèle d'hôte ou de service à l'hôte ou au service désiré : dans le formulaire de configuration de l'hôte ou du service, sélectionnez le modèle auquel vous avez lié la commande.
3. Renseignez les valeurs correctes pour les macros dans le formulaire de configuration de l'hôte ou du service.
3. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md). L'hôte ou le service apparaît à la page **Statut des ressources**. Vous pouvez voir la commande personnalisée dans le panneau de détails de l'hôte ou du service, avec les valeurs correctes pour les macros. Une fois le contrôle exécuté, vous pouvez également voir le message de sortie à cet endroit.
4. Ajoutez la commande à la [liste blanche de commandes](#liste-blanche-de-commandes) du poller qui exécutera le contrôle.

## Liste blanche de commandes

Pour des raisons de sécurité, Centreon Cloud inclut une liste blanche préremplie, qui définit quelles commandes sont autorisées à être exécutées par le moteur de supervision de chaque collecteur. Par défaut, il autorise toutes les commandes fournies par les connecteurs de supervision. Si vous créez des plugins personnalisés avec vos propres commandes personnalisées, ou bien si vous utilisez un plugin de la communauté, vous devrez ajouter les commandes utilisées par ceux-ci à la liste blanche de commandes du collecteur qui exécutera le plugin.

### Ajouter une commande à la liste blanche

1. Connectez-vous en **root** au collecteur qui exécutera la commande.
2. Éditez (ou créez) le fichier suivant : **/etc/centreon-engine-whitelist/my-whitelist.yml**. (Vous pouvez créer autant de fichiers de whitelists que vous souhaitez dans ce répertoire.)
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
   
Le bloc "whitelist" définit les commandes pouvant être exécutées par le Collecteur.

> les deux premières lignes doivent toujours être présentes dans le bloc "whitelist", elles correspondent aux commandes Centreon.

Le bloc "cma-whitelist" définit les commandes pouvant être exécutées par l'agent CMA.

Dans le bloc "cma-whitelist", vous pouvez au besoin spécifier des liste blanches par hôte, la syntaxe sera : 


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

#### Mode "less fork"

> **Fonctionnalité beta :** Ce mode n'a pas encore été validé pour l'ensemble des plugins Centreon. Testez-le sur un nombre limité de collecteurs avec vos plugins spécifiques avant de le déployer massivement en production.

En complément d'éviter la recompilation Perl, le connecteur Perl supporte un mode **"less fork"**. En mode standard, un processus fils est créé pour chaque contrôle puis immédiatement tué. En mode "less fork", les processus fils sont réutilisés pour plusieurs contrôles, ce qui réduit drastiquement la consommation CPU.

**Mesures de performance** (50 hôtes × 10 services chacun) :

| Mode | Consommation CPU |
|------|-----------------|
| Engine sans connecteur | 85% |
| Connecteur Perl – standard (fork par contrôle) | 38% |
| Connecteur Perl – less fork (réutilisation des processus) | **11%** |

**Fonctionnement**

L'option `--child-max-reuse-script` contrôle le nombre de contrôles qu'un processus fils peut exécuter avant d'être tué :

- Valeur par défaut : `1` (chaque processus fils meurt après un contrôle — comportement fork classique)
- Mode less fork : définir une valeur plus élevée, par exemple `100`

Le connecteur tue également automatiquement un processus fils s'il dépasse les seuils suivants :
- `--child-max-memory-increase-percent` (défaut : 10%) : augmentation mémoire depuis le premier contrôle
- `--child-max-fd-increase-percent` (défaut : 10%) : augmentation du nombre de descripteurs de fichiers depuis le premier contrôle
- `--child-max-thread` (défaut : 10) : nombre de threads créés
- `--idle-child-ttl` (défaut : 15 min) : temps d'inactivité sans aucun contrôle

**Utilisation**

Le connecteur **Perl Connector Less Fork** est préconfiguré sur votre collecteur. Pour bénéficier du mode "less fork", rendez-vous dans **Configuration > Commandes > Contrôles** et sélectionnez **Perl Connector Less Fork** dans le champ **Connecteurs** de chaque commande de contrôle à optimiser, si ce n'est pas déjà le cas.

**Surcharge par commande**

Il est également possible de surcharger la limite de réutilisation pour une commande spécifique en insérant le mot-clé directement dans la ligne de commande, entre le chemin du script et ses arguments :

```shell
/usr/lib/nagios/plugins/check_something.pl --child-max-reuse-script 5 --arg1 valeur1
```

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
