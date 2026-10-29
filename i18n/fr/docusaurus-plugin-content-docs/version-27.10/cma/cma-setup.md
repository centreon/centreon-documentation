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

### Que se passe-t-il sur l'hôte lors de la première connexion ?

Lorsque l'agent se connecte au collecteur et qu'une **empreinte** (fingerprint) est définie dans sa configuration (ce qui est le cas avec la commande d'installation prête à l'emploi), l'agent utilise un mécanisme de confiance à la première utilisation (trust-on-first-use) :

1. L'agent tente d'abord d'établir une connexion TLS avec sa configuration actuelle. Si cela fonctionne, rien d'autre ne se passe.
2. Sinon, l'agent récupère le certificat CA du collecteur via une connexion TLS qui ne vérifie pas la CA.
3. L'agent calcule l'empreinte SHA-256 de cette CA et la compare à l'empreinte configurée. Si elles ne correspondent pas, la CA est rejetée et la connexion n'est pas établie.
4. Si elles correspondent, l'agent ajoute la CA à la configuration de confiance de l'hôte afin de l'utiliser pour toutes les connexions suivantes. Le message **[SECURITY] CA bootstrap succeeded from fingerprint** apparaît dans les [logs de l'agent](cma-troubleshooting.md#emplacement-des-logs-collecteur-et-agent).

L'emplacement de la CA dépend du système d'exploitation de l'hôte :

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

La CA est ajoutée au magasin de certificats système **Ordinateur local > Autorités de certification racines de confiance**. Ce magasin n'est pas limité à CMA : toutes les applications de l'hôte qui s'appuient sur le magasin de certificats Windows font confiance à cette CA.

Si la CA ne peut pas être ajoutée au magasin, l'agent l'enregistre dans le fichier **cma-ca.pem** du répertoire d'installation de l'agent, et enregistre le chemin de ce fichier dans la valeur **ca_certificate** de la clé de registre de l'agent (**HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent** par défaut).

</TabItem>
<TabItem value="Linux" label="Linux">

La CA n'est pas ajoutée au magasin de confiance système. Elle est enregistrée dans le fichier **/etc/centreon-monitoring-agent/cma-ca.crt**, qui appartient à l'utilisateur **centreon-monitoring-agent**, et son chemin est enregistré dans le paramètre **ca_certificate** du fichier **/etc/centreon-monitoring-agent/centagent.json**. Seul l'agent utilise cette CA.

</TabItem>
</Tabs>

Le certificat CA du collecteur est valide 10 ans. L'hôte fait confiance à cette CA jusqu'à son expiration ou jusqu'à ce que vous la supprimiez.

> **Implications de sécurité** : sous Windows, l'hôte fait confiance à tout certificat signé par la CA du collecteur, pour toutes les applications et tous les serveurs, et pas seulement pour CMA. Toute personne qui obtiendrait la clé privée de la CA (stockée sur le collecteur dans **/etc/pki/centreon-engine**) pourrait émettre des certificats auxquels l'hôte ferait confiance. Restreignez l'accès à ce répertoire sur le collecteur, et n'utilisez que des empreintes récupérées depuis votre interface Centreon.

#### Vérifier la CA installée sur l'hôte

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

Exécutez la commande suivante dans PowerShell en tant qu'administrateur, en remplaçant **&lt;FINGERPRINT&gt;** par l'empreinte utilisée par l'agent (valeur **fingerprint** de la clé de registre de l'agent) :

```powershell
Get-ChildItem Cert:\LocalMachine\Root | Where-Object {
  [Convert]::ToBase64String([Security.Cryptography.SHA256]::Create().ComputeHash($_.RawData)) -eq '<FINGERPRINT>'
} | Format-List Subject, NotAfter, Thumbprint
```

Si la commande renvoie un certificat, la CA du collecteur est installée dans le magasin. Vous pouvez également ouvrir le magasin avec la console **certlm.msc**.

</TabItem>
<TabItem value="Linux" label="Linux">

Affichez les détails de la CA et calculez son empreinte :

```shell
openssl x509 -in /etc/centreon-monitoring-agent/cma-ca.crt -noout -subject -enddate
openssl x509 -in /etc/centreon-monitoring-agent/cma-ca.crt -outform DER | openssl dgst -sha256 -binary | base64
```

L'empreinte doit correspondre au paramètre **fingerprint** du fichier **/etc/centreon-monitoring-agent/centagent.json**.

</TabItem>
</Tabs>

#### Supprimer la CA de l'hôte

La désinstallation de l'agent ne supprime pas la CA. Pour ne plus faire confiance à la CA du collecteur, supprimez-la manuellement.

> Si l'empreinte est toujours définie dans la configuration de l'agent, l'agent récupère à nouveau la CA à son prochain démarrage. Supprimez également l'empreinte, sauf si vous souhaitez que l'agent réinstalle la CA.

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

1. Dans PowerShell, en tant qu'administrateur, supprimez la CA du magasin :

   ```powershell
   Get-ChildItem Cert:\LocalMachine\Root | Where-Object {
     [Convert]::ToBase64String([Security.Cryptography.SHA256]::Create().ComputeHash($_.RawData)) -eq '<FINGERPRINT>'
   } | Remove-Item
   ```

2. Si l'agent a plutôt enregistré la CA dans un fichier, supprimez le fichier **cma-ca.pem** du répertoire d'installation de l'agent.
3. Si l'agent est toujours installé, supprimez les valeurs **fingerprint** et **ca_certificate** de la clé de registre de l'agent (ou remplacez **ca_certificate** par le chemin de votre propre CA), puis redémarrez le service de l'agent.

</TabItem>
<TabItem value="Linux" label="Linux">

1. Supprimez le fichier de la CA :

   ```shell
   rm /etc/centreon-monitoring-agent/cma-ca.crt
   ```

2. Si l'agent est toujours installé, dans le fichier **/etc/centreon-monitoring-agent/centagent.json**, supprimez les paramètres **fingerprint** et **ca_certificate** (ou remplacez **ca_certificate** par le chemin de votre propre CA), puis redémarrez l'agent :

   ```shell
   systemctl restart centagent
   ```

</TabItem>
</Tabs>


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
| Version | `-Version` | — | `26.10` |
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
| Version | `-v` | `--version` | — | `26.10` |
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
