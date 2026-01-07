---
id: cma-setup
title: Configurer l’environnement de l’agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from '../_poller-agent-configuration.mdx';

## Étape 1: Configurez Centreon

Cette étape s'effectue via l'interface du serveur central. (Il est également possible de réaliser ces étapes via [l'API Centreon Web](https://docs-api.centreon.com/api/centreon-web/24.10/).)

### Installez le connecteur de supervision nécessaire (version onPrem)

Sur votre serveur central, installez le connecteur de supervision qui fournira les modèles et les commandes qui vous permettront de configurer les hôtes et les services supervisés dans Centreon.
Dans le cas d'une plateforme Cloud, ces connecteurs sont déjà installés.

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. Sur votre serveur central, allez à la page **Configuration > Connecteurs > Connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks#installer-un-connecteur-de-supervision) le connecteur de supervision [**Linux Centreon Monitoring Agent**](../../../procedures/operatingsystems-linux-centreon-monitoring-agent.md).

</TabItem>
<TabItem value="Windows" label="Windows">

1. Sur votre serveur central, allez à la page **Configuration > Connecteurs > Connecteurs de supervision**.
2. [Installez](/docs/monitoring/pluginpacks#installer-un-connecteur-de-supervision) le connecteur de supervision [**Windows Centreon Monitoring Agent**](../../../procedures/operatingsystems-windows-centreon-monitoring-agent.md).

</TabItem>
</Tabs>

3. Si vous souhaitez superviser une [application supportée par CMA](cma.md#applications-supervisables-par-cma), installez le connecteur correspondant sur votre serveur central.

### Mettez à jour le connecteur Centreon Monitoring Agent (version onPrem)

1. Allez à la page **Configuration > Commandes > Connecteurs**.

2. Mettez à jour le connecteur **Centreon Monitoring Agent** de la façon suivante : dans le champ **Utilisé par la commande**, entrez **Centreon-Monitoring-Agent** puis cliquez sur  **Select all**.

### Créez un jeton d'authentification

Cette étape ne s'applique que pour les plateformes OnPrem. Pour Centreon Cloud, un jeton est fourni par défaut à la page **Administration > Jetons d'authentification**.

1. Allez à la page **Administration > Jetons d'authentification**.

2. Créez un jeton de type **Centreon Monitoring Agent**.

   * Vous pouvez sélectionner une durée d'expiration. Par défaut, les jetons n'expirent pas.
   * Conservez le jeton généré pour la configuration de l'agent. Au besoin, vous pouvez le copier dans le presse-papiers à tout moment, depuis la liste des jetons.
   * Il est possible de n'utiliser qu'un jeton pour tous vos collecteurs et agents, ou d'en gérer plusieurs, pour un contrôle plus fin.

#### Comportement des jetons d'authentification CMA : désactivation/expiration/révocation

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

* Le moteur de collecte vérifie la présence et la validité du jeton, et coupe la connexion en cas d'absence du jeton (car désactivé ou révoqué) ou d'expiration de celui-ci. La mention **Token expired** apparaît dans les [logs collecteur et agent](cma-troubleshooting.md#emplacement-des-logs-collecteur-et-agent).

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

* L'agent vérifie la présence et la validité du jeton, et coupe la connexion en cas d'absence du jeton (car désactivé ou révoqué) ou d'expiration de celui-ci. La mention **Token expired** apparaît dans les [logs collecteur et agent](cma-troubleshooting.md#emplacement-des-logs-collecteur-et-agent).

</TabItem>
</Tabs>

* Lorsque vous désactivez ou révoquez un jeton, [déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration) pour que cette action soit prise en compte.

* L'expiration est prise en compte immédiatement, sans nécessiter d'action utilisateur.

### Créez l'hôte et les services

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-lui le modèle d'hôte **OS-Linux-Centreon-Monitoring-Agent-custom**. Le modèle comprend l'option **Activer les contrôles passifs** qui est définie sur **On**.

> Selon le sens de connexion souhaité, le champ "Adresse" de l'hôte n'aura pas d'impact (connexion initiée par l'agent) ou sera récupéré lors de la sélection de l’hôte dans la configuration d'agent (connexion initiée par le collecteur).

Créez les services associés au modèle d'hôte.

</TabItem>
<TabItem value="Windows" label="Windows">

Sur le serveur central, [créez l'hôte](/docs/monitoring/basic-objects/hosts) et appliquez-lui le modèle d'hôte **OS-Windows-Centreon-Monitoring-Agent-custom**. Le modèle comprend l'option **Activer les contrôles passifs** qui est définie sur **On**.

Créez les services associés au modèle d'hôte.

</TabItem>
</Tabs>

### Configurez la communication collecteur/agent

1. Allez à la page **Configuration > Collecteurs > Configurations d'agent**, puis cliquez sur **Ajouter**.
2. Dans la fenêtre qui s'ouvre, sélectionnez le type d'agent **Centreon Monitoring Agent**. Des champs supplémentaires apparaissent.
3. Sélectionnez le sens de connexion (par défaut : l'agent se connecte au collecteur).
4. Sélectionnez le mode de chiffrement

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

5. Dans la section **Paramètres**, sélectionnez le ou les collecteurs qui recevront des données en provenance de l'agent. <!--(You can select several pollers if the connection is initiated by the agent, but only one if it is initiated by the poller.)-->
6. Dans la section **Récepteur OTLP**, renseignez les chemins des fichiers de certificat. Voir [page dédiée](cma-certificates.md) pour déterminer quels fichiers sont nécessaires, selon votre configuration et le sens de connexion souhaité.
   > Si vous configurez plusieurs collecteurs en même temps, assurez-vous que tous les fichiers de certificat aient le même nom.
7. Cliquez sur **Sauvegarder**.
8. [Déployez la configuration en redémarrant le moteur de collecte](/docs/monitoring/monitoring-servers/deploying-a-configuration).

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

5. Dans la section **Paramètres**, sélectionnez le collecteur qui se connectera aux agents. <!--(You can select several pollers if the connection is initiated by the agent, but only one if it is initiated by the poller.)-->
6. Dans la section **Hôtes supervisés**, sélectionnez l'hôte créé précédemment. Son adresse IP s'affiche, et un port par défaut est renseigné. Modifiez ces informations si nécessaire.
7. Renseignez les chemins des fichiers de certificat. Voir [page dédiée](cma-certificates.md) pour déterminer quels fichiers sont nécessaires, selon votre configuration et le sens de connexion souhaité.
8. Sélectionnez le jeton d'authentification créé précédemment. Il est aussi possible de créer un jeton depuis cet écran.
9. Ajoutez l'hôte.
10. Répétez l'opération pour chaque hôte devant être lié à ce collecteur. Pour configurer de fortes volumétries, il est recommandé de passer par les API dédiées.
11. [Déployez la configuration en redémarrant le moteur de collecte](/docs/monitoring/monitoring-servers/deploying-a-configuration).

</TabItem>
</Tabs>

Cette configuration est déployée sur le collecteur dans le fichier **/etc/centreon-engine/otl_server.json**. Attention, ce fichier ne doit pas être édité à la main car il est écrasé à chaque déploiement de la configuration.

## Étape 2 : Préparez le collecteur

> Cloud : Cette étape n'est pas nécessaire si vous souhaitez utiliser CMA avec le collecteur **Central**.

Cette étape s'effectue sur le collecteur.

### Configurez le firewall

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

Exécutez les commandes suivantes :

```bash
firewall-cmd --zone=public --add-port=4317/tcp --permanent
```
```bash
firewall-cmd --reload 
```

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

Pas d'action nécessaire.

</TabItem>
</Tabs>

### Configurez les paramètres de chiffrement

Voir [section dédiée](cma-certificates.md) pour déterminer quels fichiers sont nécessaires, selon votre configuration et le sens de connexion souhaité. 

### Ajoutez les commandes CMA à vos listes blanches personnalisées

Si vous utilisez des listes blanches sur votre collecteur ([les collecteurs Cloud ont des listes blanches par défaut](/cloud/monitoring/basic-objects/commands#liste-blanche-de-commandes)), celles-ci doivent autoriser les commandes CMA. 
Sur le collecteur, dans votre fichier personnalisé de liste blanche (par exemple, **/etc/centreon-engine-whitelist/my-whitelist.yml**), incluez les lignes suivantes dans le bloc **cma-whitelist** :

```text
whitelist:
  regex:
    - \/usr\/lib(64)?\/nagios\/plugins\/.*
    - \/usr\/lib(64)?\/nagios\/plugins\/.check_.*
    
cma-whitelist:
  default:
    regex:
      - \/usr\/lib(?:64)?\/nagios\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/check_centreon_bam.*
      - \"C:\/Program Files\/Centreon\/Plugins\/centreon_plugins.exe\"\s+.+
      - ^\{\s*"check":".*\}$
      - \/usr\/bin\/echo\s+Host\s+alive
      - cmd\.exe\s+\/C\s+echo\s+.*
```

Vous pouvez au besoin spécifier des liste blanches par hôte. La syntaxe sera :

```text
whitelist:
  regex:
    - \/usr\/lib(64)?\/nagios\/plugins\/.*
    - \/usr\/lib(64)?\/nagios\/plugins\/.check_.*
    
cma-whitelist:
  default:
    regex:
      - \/usr\/lib(?:64)?\/nagios\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/.*
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

Assurez-vous que les droits d'accès corrects sont définis sur tous les fichiers de liste blanche :

```shell
chown root:centreon-engine /etc/centreon-engine-whitelist/my-whitelist.yml
chmod 0640 /etc/centreon-engine-whitelist/my-whitelist.yml
chown root:centreon-engine /etc/centreon-engine-whitelist
chmod 750 /etc/centreon-engine-whitelist
```

Le comportement est le suivant :

* Si le bloc **whitelist** est renseigné et le bloc **cma-whitelist** est absent, le moteur de collecte appliquera sa liste blanche (il n'autorisera que les commandes spécifiées) et CMA n'appliquera pas de liste blanche (toutes les commandes seront autorisées).
* Si les blocs **whitelist** et **cma-whitelist** sont renseignés, le moteur de collecte appliquera le bloc **whitelist** et CMA appliquera le bloc **cma-whitelist** (ils n'autoriseront que les commandes spécifiées).
* Si le bloc **whitelist** est absent et le bloc **cma-whitelist** est renseigné, le moteur de collecte n'appliquera pas de liste blanche (toutes les commandes seront autorisées) et CMA appliquera le bloc **cma-whitelist** (il n'autorisera que les commandes spécifiées).  
* Si aucun bloc n'est renseigné, aucune liste blanche ne sera appliquée : toutes les commandes seront autorisées.

## Étape 3 : Préparez l'hôte

Cette étape s'effectue sur l'hôte supervisé.

### Téléchargez et installez l'agent

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

#### Installer le dépôt Centreon et l'agent

Installez le dépôt Centreon puis l'agent à l'aide des commandes suivantes :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

<Tabs groupId="sync">
<TabItem value="24.10" label="24.10">
```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.10/el8/centreon-25.10.repo
dnf install  centreon-monitoring-agent
```
</TabItem>
<TabItem value="25.10" label="25.10">
```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/25.10/el8/centreon-25.10.repo
dnf install  centreon-monitoring-agent
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
<Tabs groupId="sync">
<TabItem value="24.10" label="24.10">
```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.10/el9/centreon-25.10.repo
dnf install  compat-openssl11 centreon-monitoring-agent
```
</TabItem>
<TabItem value="25.10" label="25.10">
```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/25.10/el9/centreon-25.10.repo
dnf install  compat-openssl11 centreon-monitoring-agent
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

1. Exécutez les commandes suivantes :

<Tabs groupId="sync">
<TabItem value="24.10" label="24.10">
```shell
apt-get update
apt-get -y install lsb-release gpg wget
echo "deb https://packages.centreon.com/apt-standard-24.10-stable $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```
</TabItem>
<TabItem value="25.10" label="25.10">
```shell
apt-get update
apt-get -y install lsb-release gpg wget
echo "deb https://packages.centreon.com/apt-standard/ $(lsb_release -sc)-25.10-stable main" | tee -a /etc/apt/sources.list.d/centreon-25.10-stable.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```
</TabItem>
</Tabs>

2. Importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

3. Installez l'agent :

```shell
apt-get update
apt install centreon-monitoring-agent
```

</TabItem>
<TabItem value="Ubuntu 22.04 & 24.04" label="Ubuntu 22.04 & 24.04">

1. Exécutez les commandes suivantes :

<Tabs groupId="sync">
<TabItem value="24.10" label="24.10">
```shell
apt-get update
apt-get -y install lsb-release gpg wget
echo "deb https://packages.centreon.com/ubuntu-standard-24.10-stable $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/ubuntu-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```
</TabItem>
<TabItem value="25.10" label="25.10">
```shell
apt-get update
apt-get -y install lsb-release gpg wget
echo "deb https://packages.centreon.com/ubuntu-standard/ $(lsb_release -sc)-25.10-stable main" | tee -a /etc/apt/sources.list.d/centreon-25.10-stable.list
echo "deb https://packages.centreon.com/ubuntu-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```
</TabItem>
</Tabs>

2. Importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

3. Installez l'agent :

```shell
apt-get update
apt install centreon-monitoring-agent
```

</TabItem>
</Tabs>

#### Configurez **centreon-monitoring-agent**

1. Remplacez le contenu du fichier **/etc/centreon-monitoring-agent/centagent.json** par le contenu suivant :

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

> Cloud : si vous utilisez le collecteur **Central**, la valeur de **endpoint** sera **engine-centreon-$\{CLOUD_ORG\}.euwest1.centreon.cloud:443**.
$\{CLOUD_ORG\} est présent dans l'URL de votre plateforme Cloud : https://$\{CLOUD_ORG\}.euwest1.centreon.cloud/

```json
{
  "log_level":"info",
  "endpoint":"<IP/DNS COLLECTEUR>:4317",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "encryption":<full/insecure>,
  "ca":"/tmp/ca_1234.crt",
  "ca_common_name":"",
  "token":"<JETON>"
}
```

</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">

```json
{
  "log_level":"info",
  "endpoint":"0.0.0.0:4317",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reversed_grpc_streaming":true,
  "encryption":<full/insecure>,
  "private_key":"/tmp/server_1234.key",
  "public_cert":"/tmp/server_1234.crt",
  "ca":"/tmp/ca_1234.crt",
  "token":"<JETON>"
}
```

</TabItem>
</Tabs>

> Important : dans le champ **host**, entrez le nom de l'hôte à superviser tel que vous l'avez saisi dans l'interface Centreon. Si absent, l'agent utilisera le hostname de la machine. Ce nom sera la clé de correspondance permettant de remonter les données sur l'hôte Centreon.

#### Configurez les paramètres de chiffrement

Voir [section dédiée](cma-certificates.md) pour déterminer quels fichiers sont nécessaires, selon votre configuration et le sens de connexion souhaité. 

> Lors de la migration depuis une version antérieure de CMA, les données configurées sont conservées. Ainsi, tout chiffrement activé sera considéré comme "encryption":insecure.
Vous pouvez modifier cette valeur au besoin, et redémarrer l'agent.

#### Configurez les logs

Deux types de log sont disponibles :

* file: l'agent loggue dans le fichier dont le chemin est donné par **log_file**.
* stdout: l'agent loggue vers la sortie standard de l'exe.

Dans le cas de logging vers un fichier, une rotation peut être paramétrée avec les clés **log_max_file_size** et **log_max_files**.

Les niveaux de logs possibles sont:

* off: aucun log
* critical: erreurs critiques
* error: toutes les erreurs
* info: quelques informations supplémentaires
* debug: quelques informations sur les connections en plus
* trace: le niveau de trace le plus verbeux, permet de voir les messages échangés avec le collecteur

#### Redémarrez l'agent

   ```shell
   systemctl restart centagent
   ```

Vous pouvez vérifier que l'agent a bien redémarré, avec la commande suivante :

```shell
systemctl status centagent
```

</TabItem>
<TabItem value="Windows" label="Windows">

[Téléchargez l'installer de l'agent](https://download.centreon.com)  (onglet **Custom Platform**, puis onglet **Monitoring Agent**), sur tous les serveurs que vous voulez superviser.

Le programme d'installation de l'agent peut s'utiliser suivant deux modes:

<Tabs groupId="sync">
<TabItem value="Mode interactif" label="Mode interactif">

> L'installer doit être lancé avec l'option "Exécuter en tant qu'administrateur".

1. Lancez l'installer (durant la configuration, vous pourrez cliquer sur les (i) pour avoir de l'aide).
   Si vous installez les plugins Centreon, l'installer tentera de télécharger et d'installer la dernière version des plugins Centreon. Si l'installer ne peut pas les télécharger (pas d'accès web, problème réseau), une popup vous demandera confirmation pour installer les plugins Centreon embarqués dans l'installer. Si vous souhaitez utiliser uniquement des contrôles natifs, il est inutile d'installer les plugins.
  
   Les résultats seront affichés dans la fenêtre de l'installer.

2. Configurez le Host name, l'endpoint/listening interface et le sens de connexion :
   * Dans le champ **Host name in Centreon**, entrez le nom de l'hôte à superviser tel que vous l'avez saisi dans l'interface Centreon.
  > Important : Ce nom sera la clé de correspondance permettant de remonter les données sur l'hôte Centreon. Il doit être strictement identique au nom d'hôte Centreon (sensible à la casse).

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">

> Cloud : si vous utilisez le collecteur **Central**, la valeur de **Poller endpoint** sera **engine-centreon-$\{CLOUD_ORG\}.euwest1.centreon.cloud:443**.
$\{CLOUD_ORG\} est présent dans l'URL de votre plateforme Cloud : https://$\{CLOUD_ORG\}.euwest1.centreon.cloud/


   * Dans le champ **Poller endpoint**, saisissez l'adresse IP ou le nom DNS du collecteur, suivi du port d'écoute CMA (4317 par défaut), sous la forme \<adresse IP ou nom DNS\>:port, par exemple 192.168.45.32:4317.
</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">
   * Le champ **Listening interface** pourra rester à sa valeur par défaut (0.0.0.0:4317), et correspond à l'interface sur laquelle l'agent va accepter les connections venant du collecteur.
   La valeur par défaut (0.0.0.0) correspond à "toutes les interfaces", et peut être restreinte pour des raisons de sécurité.
</TabItem>
</Tabs>

</TabItem>
<TabItem value="Mode silencieux" label="Mode silencieux (console)">

Dans ce mode, aucune interface n'est lancée. Comme cet installer n'est pas un programme console, il rend immédiatement la main même s'il n'a pas encore fini. Vous devez attendre de voir apparaître dans la console le message indiquant qu'il a terminé. 
Si vous voulez tester le succès de l'installation, vous devez récupérer l'exit status. Vous pouvez le lancer dans un powershell et attendre la fin du processus. L'exit status vaudra 0 si tout s'est bien passé.

<Tabs groupId="sync">
<TabItem value="avant 25.10" label="Avant 25.10">

> Cloud : si vous utilisez le collecteur **Central**, la valeur de **endpoint** sera **engine-centreon-$\{CLOUD_ORG\}.euwest1.centreon.cloud:443**.
$\{CLOUD_ORG\} est présent dans l'URL de votre plateforme Cloud : https://$\{CLOUD_ORG\}.euwest1.centreon.cloud/

Pour le lancer en mode silencieux, vous devez mettre en premier argument /S.
Vous pouvez afficher une liste des arguments avec la ligne de commande suivante :

```shell
centreon-monitoring-agent.exe /S --help
```

Pour échapper le caractère **-** dans la valeur d'un argument, celui-ci doit être précédé par **--%**. Exemple :

```
--% --hostname "Test-Hostname"
```




Les différents arguments sont:

| flag                       | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --install_cma              | Si ce flag est présent, l'agent sera installé                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --install_plugins          | Si ce flag est présent, la dernière version des plugins sera téléchargée et installée                                                                                                                                                                                                                                                                                                                                                                                                               |
| --install_embedded_plugins | Utilisez ce flag pour installer les plugins fournis par l'installer (cas d'un hôte n'ayant pas accès à internet)                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                 | Le nom de l'hôte à superviser tel que vous l'avez saisi dans l'interface Centreon. Ce nom sera la clé de correspondance permettant de remonter les données sur l'hôte Centreon.                                                                                                                                                                                       |
| --endpoint                 | Dans le cas le plus courant (l'agent se connecte au collecteur), saisissez l'adresse IP ou le nom DNS suivi du port OpenTelemetry sur lequel écoute le collecteur, sous la forme \<adresse IP ou nom DNS\>:port, par exemple 192.168.45.32:4317. Si vous activez l'option **--reverse** (le collecteur se connecte à l'agent), vous devez choisir l'interface (toutes les interfaces : 0.0.0.0) et le port (généralement 4317) sur lequel l'agent va accepter les connections venant du collecteur. |
| --reverse                  | Si ce flag est présent, l'agent accepte les connections venant du collecteur                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --log_type                 | event_log ou file. Si vous choisissez file, le paramètre log_file est obligatoire                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --log_level                | Choisir parmi: off, critical, error, warning, debug ou trace                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --log_file                 | Chemin du fichier de log                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --log_max_file_size        | Taille maximale du fichier de log avant rotation, en Mo.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --log_max_files            | Nombre maximal de fichiers de log. Pour que la rotation des logs soit activée, ces deux paramètres sont nécessaires.                                                                                                                                                                                                                                                                                                                                                                                |
| --encryption               | Mode de chiffrement. Valeurs possibles : \{full;insecure;no\}.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --private_key              | Chemin du fichier contenant la clé privée.                                                                                                                                                                                                                                                                                                                           |
| --public_cert              | Chemin du fichier contenant la clé publique.                                                                                                                                                                                                                                                                                                        |
| --ca                       | Chemin du fichier contenant le certificat de confiance.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --ca_name                  | Nom commun CA (mode TLS non sécurisé uniquement).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --token                    | Jeton d'authentification.

Si vous utilisez l'option **--install_plugins** et que le téléchargement échoue, l'installer va installer les plugins fournis par l'installer.

</TabItem>
<TabItem value="25.10" label="A partir de 25.10">

Pour le lancer en mode silencieux, vous devez mettre en premier argument **/VERYSILENT**.
Vous pouvez afficher une liste des arguments avec la ligne de commande suivante :

```shell
centreon-monitoring-agent.exe /VERYSILENT /HELP
```
> Cloud : si vous utilisez le collecteur central, la valeur de **endpoint** sera **engine-centreon-$\{CLOUD_ORG\}.euwest1.centreon.cloud:443**.
> $\{CLOUD_ORG\} est présent dans l'URL de votre plateforme Cloud : https://$\{CLOUD_ORG\}.euwest1.centreon.cloud/

Les différents arguments sont:

| flag                       | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | obligatoire
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | 
|/COMPONENTS| Composants à installer. "agent", "plugins" ou "agent,plugins"  |X |
|/AGENTINSTANCE| Le nom d'instance de l'agent (nom du service). Si non renseigné, un nom par défaut est généré (CentreonMonitoringAgent) |  |
|/HOST                 | Le nom de l'hôte à superviser tel que vous l'avez saisi dans l'interface Centreon. Ce nom sera la clé de correspondance permettant de remonter les données sur l'hôte Centreon.                          | X |
|/ENDPOINT                 | Dans le cas le plus courant (l'agent se connecte au collecteur), saisissez l'adresse IP ou le nom DNS suivi du port OpenTelemetry sur lequel écoute le collecteur, sous la forme \<adresse IP ou nom DNS\>:port, par exemple 192.168.45.32:4317. Si **/REVERSE=true**, vous devez choisir l'interface (toutes les interfaces : 0.0.0.0) et le port (généralement 4317) sur lequel l'agent va accepter les connections venant du collecteur. | X|
|/TOKEN| Jeton d'authentification | X |
|/PLUGINSRC| Source d'installation des plugins Centreon. "auto" : via internet, "embedded" : version locale. Défaut : "auto" || 
|/REVERSE| Connection initiée par le collecteur. "true" ou "false". Défaut : "false"| |
|/ENCRYPTION| Mode de chiffrement. "no","full","insecure". Défaut : "no"|  |
|/CERT| Chemin du fichier contenant la clé publique | si ENCRYPTION=full ou insecure, et /REVERSE=true |
|/KEY| Chemin du fichier contenant la clé privée | si ENCRYPTION=full ou insecure, et /REVERSE=true |
|/CA| Chemin du fichier contenant le certificat de confiance |  |
|/COMMONNAME| Nom commun CA. Si ENCRYPTION=insecure |  |
|/LOGTYPE| "event-log" ou "file". Défaut : "event-log"|  |
|/LOGFILE| Chemin du fichier de log | si /LOGTYPE=file |
|/LOGLEVEL| "off","critical","error","warning","info","debug","trace". Défaut : "error"| si /LOGTYPE=file |
|/MAXFILESIZE| Taille maximale du fichier de log avant rotation, en Mo. Défaut : 10. Si /LOGTYPE=file | |
|/MAXNUMBER| Nombre maximal de fichiers de log. Pour que la rotation des logs soit activée, ces deux paramètres sont nécessaires. Défaut : 3. Si /LOGTYPE=file | |
|/VERSION| Version de centagent.exe |  |                                                                                                                                                                                                                                                      
                                                                                         
Si **/PLUGINSRC=auto** et que le téléchargement échoue, l'installeur passera automatiquement en mode **embedded**.

Les erreurs d'exécution du mode silencieux, et l'output de /VERSION sont écrits dans ./installer_output.log.

*Exemples de commande*

Commande minimale (paramètres obligatoires) :
```shell
centreon-monitoring-agent-xxx.exe /VERYSILENT /COMPONENTS=agent,plugins /HOST=host_1 /ENDPOINT=localhost:4317 /TOKEN=token_value
```

Commande avec paramètres optionnels : 
```shell
centreon-monitoring-agent-xxx.exe /VERYSILENT /REVERSE /COMPONENTS=agent /HOST=agent1 /ENDPOINT=127.0.0.1:4317 /LOGTYPE=File /LOGLEVEL=Debug /LOGFILE="C:\Logs\agent.log" /MAXFILESIZE=20 /MAXNUMBER=5 /ENCRYPTION=full /CERT="C:\certs\agent.crt" /KEY="C:\certs\agent.key" /CA="C:\certs\ca.crt" /COMMONNAME=centreon /TOKEN=token_value
So
```

</TabItem>
</Tabs>
</TabItem>
</Tabs>

#### Données de configuration

Les données renseignées via l'installer ou le mode silencieux sont écrites en base de registre : 

```
\HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent
```

#### Configurez les paramètres de chiffrement

Voir [section dédiée](cma-certificates.md) pour déterminer quels fichiers sont nécessaires, selon votre configuration et le sens de connexion souhaité. 

> Lors de la migration depuis une version antérieure de CMA, les données configurées sont conservées. Ainsi, tout chiffrement activé sera considéré comme "encryption":insecure.
Vous pouvez modifier cette valeur au besoin, et redémarrer l'agent.

#### Configurez les logs

Deux types de log sont disponibles :
   * **eventlog** : les logs sont envoyés vers les journaux d'évènements Windows.
   * **file** : les logs sont écrits dans un fichier
   Si vous choisissez **file**, vous pouvez configurer le chemin du fichier dans **Log file**, et la rotation de logs en renseignant **Max File Size** et **Max number of files**.

   Les niveaux de logs possibles sont:
     * off: aucun log
     * critical: erreurs critiques
     * error: toutes les erreurs
     * info: ajout d'informations supplémentaires
     * debug: ajout d'informations sur les connexions
     * trace: permet de voir les messages échangés avec le collecteur

</TabItem>
</Tabs>

### Déployer les plugins Centreon agent sur l'hôte (Linux)

Si vous utilisez des connecteurs Centreon et des contrôles non natifs sous Linux :

1. Activez les dépôts Centreon et installez les plugins :

Ce dépôt permettra d'installer les plugins Centreon ainsi que **les dépendances qui ne peuvent pas être satisfaites par les dépôts standard des distributions**.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash

dnf -y install dnf-plugins-core epel-release
dnf config-manager --set-enabled powertools

cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF
```

2. Installez le plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install dnf-plugins-core
dnf install epel-release
dnf config-manager --set-enabled crb

cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF
```

2. Installez le plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl

wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
apt-get update
```

2. Installez le plugin :

```bash
apt -y install centreon-plugin-operatingsystems-linux-local
```

</TabItem>
<TabItem value="Ubuntu 22.04 & 24.04" label="Ubuntu 22.04 & 24.04">

```bash
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2 curl

wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
echo "deb https://packages.centreon.com/ubuntu-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
apt-get update
```

2. Installez le plugin :

```bash
apt -y install centreon-plugin-operatingsystems-linux-local
```

</TabItem>
</Tabs>

### Mettre à jour une configuration existante 

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

Modifier le fichier **/etc/centreon-monitoring-agent/centagent.json**.
Redémarrer l'agent.

</TabItem>
<TabItem value="Windows" label="Windows">

Exécuter **centreon-monitoring-agent-modify.exe** situé dans le répertoire d'installation de CMA.

Cela est également possible en mode silencieux :
```shell
centreon-monitoring-agent-modify.exe /VERYSILENT
```

</TabItem>
</Tabs>

### Configurer plusieurs instances d'agent sur le même hôte

#### Principe général

Il est possible de configurer plusieurs services CMA sur un hôte, par exemple pour communiquer vers différents collecteurs/plateformes Centreon (test/production), supervisant le même hôte.

Une instance correspond à : 
* un service
* sa configuration

Le nom de l'instance doit être unique sur un même hôte.

Chaque instance possède sa propre configuration, et l'exécute de manière indépendante des autres instances.

#### Configuration

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

La configuration de chaque instance est présente dans un fichier json dédié, sur l'hôte.
Le nom du fichier doit être unique.

```shell
/etc/centreon-monitoring-agent/centagent1.json
```

</TabItem>
<TabItem value="Windows" label="Windows">

La configuration de chaque instance est présente dans une clé de registre dédiée, dont le nom est unique.

```shell
Ordinateur\HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\NomDuService
```

</TabItem>
</Tabs>

#### Déployer une instance nommée

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

**Créer et éditer le fichier de configuration**

Un fichier est créé au premier déploiement de CMA.

1. Copier ce fichier

```shell
cp  /etc/centreon-monitoring-agent/centagent.json /etc/centreon-monitoring-agent/centagent1.json
```

2. Si nécessaire, modifier la configuration de la nouvelle instance dans le fichier créé.

**Donner au fichier les droits adéquats**

```shell
chmod 0644 /etc/centreon-monitoring-agent/centagent1.json
chown centreon-monitoring-agent:centreon-monitoring-agent /etc/centreon-monitoring-agent/centagent1.json
```

**Créer et éditer le service**

Un service est créé au premier déploiement de CMA.

3. Copier ce service

```shell
cp /lib/systemd/system/centagent.service /lib/systemd/system/centagent1.service
```

Modifier le chemin présent dans **ExecStart** pour pointer vers le nouveau fichier json

```shell
...
[Service]
ExecStart=/usr/bin/centagent /etc/centreon-monitoring-agent/centagent1.json
ExecReload=/bin/kill -HUP $MAINPID
...
```

**Donner au service les droits adéquats**

```shell
chmod 0644 /lib/systemd/system/centagent1.service
chown centreon-monitoring-agent:centreon-monitoring-agent /lib/systemd/system/centagent1.service
```

**Enregistrer le nouveau service**

```shell
systemctl daemon-reload
systemctl unmask centagent1
systemctl preset centagent1
systemctl enable centagent1
systemctl restart centagent1
```

</TabItem>
<TabItem value="Windows" label="Windows">


<Tabs groupId="sync">
<TabItem value="Mode interactif" label="Mode interactif">

A l’exécution de l’installeur, le champ **Agent instance** propose un nom d’instance par défaut (unique) qui peut être modifié.
Il sera utilisé comme nom de service et de clé de registre.

</TabItem>
<TabItem value="Mode silencieux" label="Mode silencieux (console)">
A chaque exécution, une nouvelle instance est créée, avec nom incrémental “CentreonMonitoringAgent1”, “CentreonMonitoringAgent2”
Si l’on veut nommer le service créé (le nom doit être unique), on ajoute  /AGENTINSTANCE
Ce nom sera utilisé comme nom de service et de clé de registre.

```shell
centreon-monitoring-agent-xxx.exe /VERYSILENT /AGENTINSTANCE="ServiceName"  /COMPONENTS=agent,plugins /HOST=host_1 /ENDPOINT=localhost:4317 /TOKEN=token_value 
```

</TabItem>
</Tabs>
</TabItem>
</Tabs>

#### Modifier une instance nommée

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* Réaliser les modifications souhaitées dans le fichier json correspondant à l'instance.
* Redémarrer le service correspondant

```shell
systemctl restart centagent1
```

</TabItem>
<TabItem value="Windows" label="Windows">


<Tabs groupId="sync">
<TabItem value="Mode interactif" label="Mode interactif">

Exécuter **centreon-monitoring-agent-modify.exe** situé dans le répertoire d'installation de CMA.
Le champ **Agent instance** propose par défaut la première instance trouvée, et peut être modifié.
Toutes les modifications faites ensuite concerneront l’instance sélectionnée.

</TabItem>
<TabItem value="Mode silencieux" label="Mode silencieux (console)">

Exécuter **centreon-monitoring-agent-modify.exe** en mode silencieux.

> Dans ce contexte, le paramètre /AGENTINSTANCE est obligatoire.

```shell
centreon-monitoring-agent-modify.exe /VERYSILENT /AGENTINSTANCE="ServiceName"
```

</TabItem>
</Tabs>
</TabItem>
</Tabs>

#### Désinstaller une instance nommée

Voir "Désinstaller l'agent" (TODO LIEN)

### Mettre à jour une configuration existante

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. Dupliquer et renommer le fichier **/etc/centreon-monitoring-agent/centagent.json**
2. Redémarrer l'agent

```shell
systemctl restart centagent
```

</TabItem>
<TabItem value="Windows" label="Windows">

Exécuter **centreon-monitoring-agent-modify.exe** situé dans le répertoire d'installation de CMA.

Cela est également possible en mode silencieux :
```shell
centreon-monitoring-agent-modify.exe /VERYSILENT /AGENTINSTANCE "ServiceName"
```
</TabItem>
</Tabs>


### Désinstaller l'agent

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

Désinstaller une instance : 

```shell
systemctl stop centagent1
rm /lib/systemd/system/centagent1.service
rm /etc/centreon-monitoring-agent/centagent1.json
systemctl daemon-reload
```

Désinstaller CMA (toutes les instances et groupes utilisateurs)

```shell
systemctl stop centagent centagent1
rm /lib/systemd/system/centagent.service /lib/systemd/system/centagent1.service
rm /etc/centreon-monitoring-agent/centagent.json /etc/centreon-monitoring-agent/centagent.json
systemctl daemon-reload
deluser centreon-monitoring-agent
delgroup centreon-monitoring-agent
```

</TabItem>
<TabItem value="Windows" label="Windows">


<Tabs groupId="sync">
<TabItem value="Mode interactif" label="Mode interactif">

Exécuter **unins000.exe** situé dans le répertoire d'installation de CMA.
La liste des instances est présentée avec les plugins et il est possible de sélectionner les éléments à désinstaller.

</TabItem>
<TabItem value="Mode silencieux" label="Mode silencieux (console)">

Exécuter **unins000.exe** en mode silencieux, et spécifier l'une des trois options possibles.

* /FULL  --> toutes les instances sont désinstallées, ainsi que les plugins
* /PLUGINS --> les plugins sont désinstallés
* /AGENTINSTANCE=SERVICENAME1,SERVICENAME2 --> la/les instances spécifiée(s) est/sont désinstallée(s)

```shell
unins000.exe /VERYSILENT /FULL
unins000.exe /VERYSILENT /PLUGINS
unins000.exe /VERYSILENT /AGENTINSTANCE=SERVICENAME1,SERVICENAME2
```

</TabItem>
</Tabs>
</TabItem>
</Tabs>




## Étape 4 : Tester le fonctionnement de l'agent

Voir [section dédiée](cma-troubleshooting.md).



