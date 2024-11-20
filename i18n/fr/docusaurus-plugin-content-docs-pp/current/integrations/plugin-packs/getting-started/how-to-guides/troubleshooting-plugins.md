---
id: troubleshooting-plugins
title: Dépannage des erreurs de plugin
---

Lorsque vous utilisez des plugins et que vous deployez une nouvelle sonde de supervisions, des erreurs peuvent apparaitre.

Généralement, une mauvaise configuration ou un dispositif tiers sont la source du problème. Cette section décrit les erreurs le plus communes que vous pourriez rencontrer et peut vous aider à identifier 

Mais avant tout, rappelons que la majorité des connecteurs ont leur propre documentation contenant des sections de "Prérequis" et "Configuration" pour vous aider à éviter les erreurs courantes.

Les pollers Centreon emploie un ordonnanceur planifier et executer les checks.
Pour dépanner un plugin, vous devez impérativement :

* Copier/coller la commande du UI Centreon Web pour tenter dépanner le problème avec le CLI
* Employez l'utilisateur Centreon-engine pour exécuter manuellement le plugin (et jamais root !)

## Problèmes communs

### (pas de résultat renvoyé par le plugin)

Pour cette erreur, vérifiez la ligne de commande qui a été exécutée et verifiez que le binaire qu'elle contient existe et qu'elle ne présente pas de fautes de frappe.

Pour les systèmes basés sur RPM, vous pouvez utiliser la commande `yum whatprovides "*/the_binary_name"` pour identifier le binaire manquant du paquet.

### UNKNOWN: Cannot write statefile '/var/lib/centreon/centplugins/<cache_file_name>'

La raison la plus commune de cette erreur sont des droits inadaptés dans le répertoire de cache (`/var/lib/centreon/centplugins`)  ou dans le ficher cache lui-même. Cela peut ausi être dû à une installation inconsistente ou alors le directoire n'existe tout simplement pas.

Vérifiez que le directoire existe bien et qu'il a les droits appropriés avec la commande stat suivante : 
`stat /var/lib/centreon/centplugins`. Vous devriez obtenir le résultat suivant : 

```bash
File: '/var/lib/centreon/centplugins'
[...]
Access: (0775/drwxrwxr-x)  Uid: (  998/centreon)   Gid: (  997/centreon)`
[...]
``` 

Si les droits du directoire sont corrects, vérifiez les droits du fichier de cache : 
`stat /var/lib/centreon/centplugins/<cache_file_name>`. Le résultat devrait être : 

```bash
File: '/var/lib/centreon/centplugins/<cache_file_name>'
[...]
Access: (0664/-rw-rw-r--)  Uid: (  994/centreon-engine)   Gid: (  991/centreon-engine)
[...]
```

### (Process Timeout)

Cette erreur signifie qu'une commande a atteint le délai d'attente établi par Centreon-engine.
Centreon-engine possède un délai d'attente interne qui lui permet de mettre fin à l'exécution d'un plugin lorsque celle-ci dépasse un certain nombre de secondes. Ceci sert à éviter l'exécution infinie de plugin. 

La configuration par défaut établit une attente de 60 secondes pour les Services et 10 secondes pour les Hôte.

Cette erreur est souvent causée par une mauvaise configuration ou l'absence d'un délai d'attente au niveau du plugin.

Dans certains cas, ceci peut être normal en raison de la complexité du check à effectuer ou du temps de traitement du côté de l'objet chargé de la supervision.
Pour mesurer le temps nécessaire pour compléter un check, copiez/collez la ligne de commande et executez-la depuis CLI avec un utilisateur Centreon-engine

Vous pouvez modifier le délai d'attente d'engine dans le menu **Configuration > Pollers > Engine Configuration**.
Pour que vos changements soient appliqués, exportez la configuration et **redémarrez** le poller


### Le résultat ou metrique du check est incomplet

Si l'exécution du plugin semble incomplète, c'est qu'il y a probablement un bug quelque part dans le code. Si c'est le cas, vous verrez probablement des lignes *stderr* s'afficher lorsque vous exécutez le check avec CLI.


Un message similaire à celui ci-dessous nous confirme qu'il s'agit d'un bug.

```bash
Use of uninitialized value $options{"value"} in pattern match (m//) and critical return
```

Si c'est le cas, contactez-nous sur notre [plateforme communautaire The Watch](https://thewatch.centreon.com/) ou, encore mieux, aidez-nous à traquer le problème dans notre répositoire Github [centreon-plugins](https://github.com/centreon/centreon-plugins/issues). 

## Dépannage de SNMP

### SNMPv3 options mapping

Pour configurer SNMPv3, Centreon vous recommande interroger votre appareil avec la commande "snmpwalk" et ses options. Vous pouvez ensuite utilisez le tableau suivant pour le faire marcher avec le centreon-plugin.

Configurez les options SNMP additionnelles dans la macro SNMPEXTRAOPTIONS dans la partie de configuration de l'hôte/modèle d'hôte.

| snmpwalk  | centreon-plugins       |
| :-------: | :--------------------- |
| -a        | --authprotocol         |
| -A        | --authpassphrase       |
| -u        | --snmp-username        |
| -x        | --privprotocol         |
| -X        | --privpassphrase       |
| -l        | not needed (automatic) |
| -e        | --securityengineid     |
| -E        | --contextengineid      |


### UNKNOWN: SNMP GET Request : Timeout

Généralement, un "timeout" est causé par : 
* Une mauvaise configuration de l'Agent SNMP ou de l'hôte Centreon dû à un port SNMP, une version ou une chaîne communautaire incorrecte.
* Un équipement tiers (par exemple, un firewall) qui empêche la communication entre le poller et l'appareil à distance.

Pour aller plus loin, vous pouvez tenter un dépannage avec SNMP en imitant le comportement du plugin afin de voir si vous obtenez un timeout. Sur Linux, le paquet `net-snmp` fournit un binaire `snmp-walk`.

Voici une commande échantillon

`snmpwalk -v <1/2c> -c <community-string> <IP_ADDR> .1`

### UNKNOWN: SNMP GET Request : Can't get a single value
Les plugins font une requête pour un ou plusieurs OIDs au MIB de l'objet ciblé. Si le 
plugin ne peut obtenir une valeur pour un des OIDs, il prévient l'utilisateur avec un statut UNKNOWN.

Un problème fréquent est un objet qui ne renvoie pas le MIB ou l'un des OID utilisé par le plugin. C'est-à-dire, le plugin employé n'est pas adapté pour cet objet.


### UNKNOWN: SNMP Session: Unable to create
Cette erreur est particulière aux checks SNMP v3, elle indique que les informations d'identification sont incorrectes ou erronées.

Elle peut également apparaître lors d'une requête SNMP v3 sur un appareil ou serveur qui n'a pas de processus SNMP en cours ou dont le port n'est pas à l'écoute.

### UNKNOWN: Can't construct cache...

Pour checker le stockage d'un appareil ou d'un système, les plugins Centreon employent des OID standard. Occasionnellement, le manufactureur n'implémente qu'une partie de ces OIDs.

Utilisez la commande `snmpwalk` pour vérifier quels sont les OIDs disponibles et adaptez la commande de check en conséquence.

La bande passante et la supervision de status sont l'exemple parfait : le comportement par défaut du plugin utilise l'OID `ifname` pour construire son cache, s'il ne peut pas le trouver, vous obtiendrez cette erreur.

Pour les contrôles d'interface et de stockage, il est possible de demander à la sonde d'utiliser un autre OID (par exemple `--oid-filter='ifDesc' --oid-display='ifDesc'`).

## Contrôles HTTP et API

### UNKNOWN: Cannot decode response (ajoutez l'option --debug pour voir le contenu reçu)

Les plugins réalisent des appels API et déchiffrent le contenu rendu par l'API pour l'utiliser comme un statut, une message ou une metrique. Le plugin attend un certain format pour les données selon ce qui est supporté par l'API (XML ou JSON).

Si l'API ne renvoie pas les données attendues par le plugin, la librairie utilisée par le plugin ne pourra pas déchiffrer les données.

La raison la plus commune de ce problème est qu'un proxy bloque la requête principale et rend un message d'erreur qui n'est pas dans le format attendu. L'option `--proxyurl=<proto>://<address>:<port>` peut vous permettre de spécifier l'adresse et le port d'un proxy.

It may also happen when the API returns an error instead of the expected data structure. 
You may want to dig deeper into this by adding the `--debug` flag to your command line 
to get more information on the query and data received.

### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (<extra_reason_if_available>)

When grabbing metrics or statuses from an API, multiple issues can show up because
of proxies, remote devices' certificates, or simply the check configuration.

This section focuses on the most common error reasons and shares some tips to solve them. 

An important thing to know is that Plugins can rely on several *backends* to perform 
HTTP requests. You can specify which backend you want to use to perform checks using 
the `--http-backend` option. The default value is `lwp`, though `curl` is also 
available and generally easier to debug.

In the same way, if you use a proxy, you can tell the Plugin how to go through 
by adding the `--proxyurl` option to your command line. The expecte format is: 
`--proxyurl='<proto>://<proxy_addr>:<proxy_port>`. 

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (Connection refused)

This issue generally means that the port or protocol used by the Plugin is incorrect, 
misconfigured, or unsupported. 

In this situation, at the Host configuration level, double-check that:
* the port used is correct, primarily if you use a non-standard port for security reasons
* the protocol used (http or https) matches the one configured on the API-side

Each Plugin using HTTP backends does have `--proto` and `--port` options allowing 
you to specify these values.

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (Timeout)

The timeout error occurs when the Plugin doesn't succeed in contacting the server 
or when a third-party device is blocking or filtering the client's request. 

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (`<SSL Error>`)

SSL Errors indicate that the Plugin has some trouble establishing a secure connection 
to get the monitoring information.

The primary cause could be the certificate used. In this case, the best practice 
would be either to: 
* renew the certificate when it expired 
* sign the remote certificate officially
* deploy the certificate locally so the Plugin can recognize it

Regardless of what HTTP backend you're using, it's possible to ignore SSL certificate 
errors by adding specific flags: 

* lwp backend: `--ssl-opt='--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE'`
* curl backend: `--curl-opt='CURLOPT_SSL_VERIFYPEER => 0'`

Sometimes, the remote host doesn't support negotiation about the SSL implementation, 
so you must specify explicitly which one the Plugin has to use thanks to the `--ssl` 
option (e.g. `--ssl='tlsv1'`). Refer to the manufacturer or software publisher documentation.

## SSH and CLI checks

### UNKNOWN: Command error: `<interpreter>`: `<command_name>`: command not found

This error warns that the Plugin is not able to execute the `<command_name>` because it 
doesn't exist in PATH or is not installed.

Depending on how the check is performed (locally or remotely), make sure that the 
utility the Plugin uses is available to your monitoring user. 

### UNKNOWN: Command error: Host key verification failed.

SSH-Based checks can use several *backends*. Whether you use the `ssh` or `plink` backend, 
you have to manually validate the remote system fingerprint from the *centreon-engine*
user on the monitoring Poller. If you don't do that, the Plugin will hang and cause a timeout
because it cannot accept the fingerprint for obvious security reasons.

## NRPE checks

### CHECK_NRPE STATE (CRITICAL|UNKNOWN): Socket timeout after 10 seconds

Here are the questions you may want to ask yourself when obtaining this result: 

* Does my IP Address and port parameters are correct? 
* Is the NRPE daemon running on the remote system?
* Is there any firewall or security policy that might block the request? 

### connect to address x.x.x.x port 5666: Connection refused

This error means that the client made a successful connection to the remote host and port 
but the server refused the connection.

Frequently, this is because the client is trying to connect to a server from an 
unauthorized IP. 

Check that the `allowed_hosts` directive defined in the NRPE Server config file 
allows your monitoring server to send remote command execution. 

Do not forget to restart your NRPE daemon to update the configuration.

### NRPE: Command <a_command> not defined

The NRPE Server throws this error when the client asks to run a command it doesn't understand. 

It might highlight either a configuration issue on the server-side or a typo in the 
command line on the client-side. 

Check the NRPE Server configuration to ensure that the command exists: 
```text
[a_command]=/path/to/a/command --option1='<value_or_macro>' --optionN='<value_or_macro>'
```
Do not forget to restart your NRPE daemon to update the configuration.

### NRPE: unable to read output

This error can occur when the NRPE server fails to execute the command for some reason.
In this situation, connect to the server running the NRPE server and execute the 
command manually with the NRPE user.

Most of the time, it's due to unsufficient rights (missing execution bit or wrong 
owner) or a missing dependency at code level. 
