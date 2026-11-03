---
id: cma-setup
title: Configurer l’environnement de l’agent
description: "Configurer et déployer l'agent de supervision Centreon sur pollers et hôtes"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from './_poller-agent-configuration.mdx';

## Utilisation de la commande d'installation prête à l'emploi

> Cette procédure n'est valable que pour le mode "Connexion initiée par l'agent". Pour le mode "Connexion inistiée par le collecteur", adaptez la procédure avec les paramètres corrects, ou utilisez la [procédure d'installation manuelle](cma-setup-manual.md).

1. Accédez à **Configuration > Collecteurs > Configurations d'agent**, puis cliquez sur **Commande**.
2. Dans la fenêtre qui s'affiche, renseignez les informations correspondant à votre environnement (collecteur qui supervisera vos hôtes, type de système d'exploitation de vos hôtes).
3. Copiez la commande affichée dans la fenêtre, puis exécutez-la sur chaque hôte que vous souhaitez superviser avec l'agent.
   L'agent CMA est déployé, et la connexion entre CMA et le collecteur est établie via TLS.

> L'exécution de cette commande nécessite que l'hôte dispose d'un accès à internet.

### Comment sont gérés les certificats ?

A la création d'un collecteur, les certificats sont gérés automatiquement :

* le certificat CA est généré et stocké dans **/etc/pki/centreon-engine** (TTL de 10 ans).
* une paire clé privée/publique est générée, à partir des fichiers CA (TTL faible, renouvelée automatiquement tous les 30 jours). Cette paire sera stockée dans la mémoire du collecteur et son empreinte stockée dans la base de données.
* CMA, une fois déployé, utilisera cette empreinte pour récupérer et valider la clé publique et établir la connexion TLS avec le collecteur.

Si vous souhaitez configurer manuellement les certificats, la configuration d'agent et/ou les jetons, reportez-vous à le [documentation dédiée](cma-setup-manual.md).


## Utilisation des scripts d'installation

Les scripts d'installation permettent de déployer CMA sur un hôte directement depuis la ligne de commande, sans passer par l'interface Centreon.
Ces scripts sont téléchargés et récupérés par la commande d'installation décrite ci-dessus, mais peuvent également être utilisés de manière indépendante, par exemple pour des besoins d'automatisation.

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

### Syntaxe

```powershell
.\install_cma.ps1 -Endpoint <endpoint> -Token <token> [options]
```

### Paramètres

| Paramètre | Option script | Option CLI (`/PARAM=`) | Valeur par défaut |
|---|---|---|---|
| Endpoint | `-Endpoint` | `endpoint` | _(requis)_ |
| Token | `-Token` | `token` | _(demandé à l'exécution)_ |
| Nom de l'hôte | `-HostName` | `host` | `%COMPUTERNAME%` |
| Modèle d'hôte | `-HostTemplate` | `hosttemplate` | _(vide)_ |
| Version | `-Version` | — | `25.10` |
| Composants | `-Components` | `components` | `agent,plugins` |
| Chiffrement | `-Encryption` | `encryption` | `full` |
| Reverse (collecteur → agent) | `-Reverse` | `reverse` | `false` |
| Certificat | `-Cert` | `cert` | _(vide)_ |
| Clé privée | `-Key` | `key` | _(vide)_ |
| Certificat CA | `-CA` | `ca` | _(vide)_ |
| Nom commun | `-CommonName` | `commonname` | _(vide)_ |
| Empreinte | `-Fingerprint` | `fingerprint` | _(vide)_ |
| Type de log | `-LogType` | `logtype` | `event-log` |
| Niveau de log | `-LogLevel` | `loglevel` | `error` |
| Fichier de log | `-LogFile` | `logfile` | _(vide)_ |
| Taille max du fichier de log (Mo) | `-MaxFileSize` | `maxfilesize` | `10` |
| Nombre max de fichiers de log | `-MaxNumber` | `maxnumber` | `10` |
| Fichier de checks personnalisés | `-CustomCheckFile` | `customcheckfile` | _(vide)_ |
| Source des plugins | `-PluginSrc` | `pluginsrc` | `auto` |
| Instance d'agent | — | `agentinstance` | _(vide)_ |

</TabItem>
<TabItem value="Linux" label="Linux">

### Syntaxe

```bash
./install_cma.sh --endpoint <endpoint> --token <token> [options]
```

### Paramètres

| Paramètre | Option courte | Option longue | Clé de configuration centagent.json | Valeur par défaut |
|---|---|---|---|---|
| Endpoint | `-e` | `--endpoint` | `endpoint` | _(requis)_ |
| Token | `-t` | `--token` | `token` | _(demandé à l'exécution)_ |
| Nom de l'hôte | `-n` | `--host` | `host` | `$(hostname)` |
| Modèle d'hôte | `-H` | `--host-template` | `host_template` | _(vide)_ |
| Version | `-v` | `--version` | — | `25.10` |
| Composants | `-p` | `--components` | — | `agent,plugins` |
| Chiffrement | `-c` | `--encryption` | `encryption` | `full` |
| Reverse (collecteur → agent) | `-r` | `--reverse` | `reversed_grpc_streaming` | `false` |
| Certificat | `-C` | `--cert` | `public_cert` | _(vide)_ |
| Clé privée | `-k` | `--key` | `private_key` | _(vide)_ |
| Certificat CA | `-a` | `--ca` | `ca_certificate` | _(vide)_ |
| Nom commun | `-N` | `--common-name` | `ca_name` | _(vide)_ |
| Empreinte | `-f` | `--fingerprint` | `fingerprint` | _(vide)_ |
| Type de log | `-T` | `--log-type` | `log_type` | `file` |
| Niveau de log | `-l` | `--log-level` | `log_level` | `error` |
| Fichier de log | `-L` | `--log-file` | `log_file` | `/var/log/centreon-monitoring-agent/centagent.log` |
| Taille max du fichier de log (Mo) | `-M` | `--max-file-size` | `log_max_file_size` | `10` |
| Nombre max de fichiers de log | `-m` | `--max-number` | `log_max_files` | `10` |
| Fichier de checks personnalisés | `-x` | `--custom-check-file` | `custom_check_file` | _(vide)_ |
| Dry run | `-d` | `--dry-run` | — | `false` |

</TabItem>
</Tabs>
