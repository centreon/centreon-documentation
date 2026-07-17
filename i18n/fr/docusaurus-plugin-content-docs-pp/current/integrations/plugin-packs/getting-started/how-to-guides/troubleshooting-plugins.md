---
id: troubleshooting-plugins
title: Dépanner les erreurs de plugin
description: Diagnostiquez les erreurs courantes des connecteurs de supervision (SNMP, HTTP/API, AWS, SSH, NRPE) et découvrez leurs causes et solutions.
---

Lorsque vous utilisez des plugins et que vous déployez une nouvelle sonde de supervision, des erreurs peuvent apparaître.

Généralement, une mauvaise configuration ou un dispositif tiers sont la source du problème. Cette section décrit les erreurs les plus communes que vous pourriez rencontrer et peut vous aider à en identifier la cause.

Mais, avant tout, rappelons que la majorité des connecteurs ont leur propre documentation contenant des sections "Prérequis" et "Configuration" pour vous aider à éviter les erreurs courantes.

Les collecteurs Centreon emploient un ordonnanceur qui planifie et exécute les contrôles.
Pour dépanner un plugin, vous devez impérativement :

* Copier/coller la commande de l'interface Centreon web pour tenter dépanner le problème en ligne de commande
* Employer l'utilisateur **centreon-engine** pour exécuter manuellement le plugin (et jamais root !)

## Problèmes communs

### No output returned from plugin

Pour cette erreur, vérifiez la ligne de commande qui a été exécutée et vérifiez que le binaire qu'elle contient existe et qu'elle ne présente pas de fautes de frappe.

Pour les systèmes basés sur RPM, vous pouvez utiliser la commande `yum whatprovides "*/the_binary_name"` pour identifier quel paquet fournit le binaire manquant.

### UNKNOWN: Cannot write statefile '/var/lib/centreon/centplugins/\<cache_file_name\>'

La raison la plus commune de cette erreur sont des droits incorrects dans le répertoire de cache (`/var/lib/centreon/centplugins`)  ou dans le fichier cache lui-même. Cela peut aussi être dû à une installation incohérente ou au fait que le répertoire n'existe tout simplement pas.

Vérifiez que le répertoire existe bien et qu'il a les droits appropriés avec la commande **stat** : 
`stat /var/lib/centreon/centplugins`.

Vous devriez obtenir le résultat suivant : 

```bash
File: '/var/lib/centreon/centplugins'
[...]
Access: (0775/drwxrwxr-x)  Uid: (  998/centreon)   Gid: (  997/centreon)`
[...]
``` 

Si les droits du répertoire sont corrects, vérifiez les droits du fichier de cache : 
`stat /var/lib/centreon/centplugins/<cache_file_name>`.

Le résultat devrait être : 

```bash
File: '/var/lib/centreon/centplugins/\<cache_file_name\>'
[...]
Access: (0664/-rw-rw-r--)  Uid: (  994/centreon-engine)   Gid: (  991/centreon-engine)
[...]
```

### (Process Timeout)

Cette erreur signifie qu'une commande a atteint le délai d'attente défini sur le moteur de supervision.
Centreon-engine possède un délai d'attente interne qui lui permet de mettre fin à l'exécution d'un plugin lorsque celle-ci dépasse un certain nombre de secondes. Ceci sert à éviter l'exécution infinie de plugins.

La configuration par défaut établit une attente de 60 secondes pour les services et 10 secondes pour les hôtes.

Cette erreur est souvent causée par une mauvaise configuration ou l'absence d'un délai d'attente au niveau du plugin.

Dans certains cas, ceci peut être normal en raison de la complexité du contrôle à effectuer ou du temps de traitement du côté de l'objet chargé de la supervision.
Pour mesurer le temps nécessaire pour effectuer un contrôle, copiez/collez la ligne de commande et exécutez-la depuis votre terminal avec l'utilisateur **centreon-engine**.

Vous pouvez modifier le délai d'attente d'engine dans le menu **Configuration > Collecteurs > Configuration du moteur de collecte**.
Pour que vos changements soient appliqués, déployez la configuration pour ce collecteur avec l'option **Redémarrer**.


### Le résultat du contrôle ou les métriques sont incomplets

Si l'exécution du plugin semble incomplète, c'est qu'il y a probablement un bug quelque part dans le code. Si c'est le cas, vous verrez probablement des lignes *stderr* s'afficher lorsque vous exécuterez le contrôle en ligne de commande.


Un message similaire à celui ci-dessous nous confirme qu'il s'agit d'un bug.

```bash
Use of uninitialized value $options{"value"} in pattern match (m//) and critical return
```

Si c'est le cas, contactez-nous sur notre [plateforme communautaire The Watch](https://thewatch.centreon.com/) ou, encore mieux, ouvrez une *issue* dans notre dépôt GitHub [centreon-plugins](https://github.com/centreon/centreon-plugins/issues). 

## Dépannage de SNMP

### Mapping des options SNMPv3

Pour configurer SNMPv3, Centreon vous recommande d'interroger votre appareil avec la commande "snmpwalk" et ses options. Vous pouvez ensuite utiliser le tableau suivant pour la faire marcher avec le plugin.

Configurez les options SNMP additionnelles dans la macro SNMPEXTRAOPTIONS de l'hôte/du modèle d'hôte.

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
* Une mauvaise configuration de l'Agent SNMP ou de l'hôte Centreon dû à un port SNMP, une version ou une communauté SNMP incorrecte.
* Un équipement tiers (par exemple, un firewall) qui empêche la communication entre le collecteur et l'appareil distant.

Pour aller plus loin, vous pouvez tenter un dépannage avec SNMP en imitant le comportement du plugin afin de voir si vous obtenez un timeout. Sur Linux, le paquet `net-snmp` fournit un binaire `snmp-walk`.

Voici une commande d'exemple :

`snmpwalk -v <1/2c> -c <community-string> <IP_ADDR> .1`

### UNKNOWN: SNMP GET Request : Can't get a single value

Les plugins font une requête pour un ou plusieurs OIDs à la MIB de l'objet ciblé. Si le 
plugin ne peut obtenir une valeur pour un des OIDs, il prévient l'utilisateur avec un statut UNKNOWN.

Un problème fréquent est un objet qui n'inclut pas la MIB ou l'un des OID utilisés par le plugin. En d'autres termes, le plugin employé n'est pas adapté à cet objet.


### UNKNOWN: SNMP Session: Unable to create

Cette erreur est particulière aux checks SNMP v3, elle indique que les identifiants utilisés sont incorrects ou erronés.

Elle peut également apparaître lors d'une requête SNMP v3 sur un appareil ou serveur qui n'a pas de processus SNMP en cours ou dont le port n'est pas à l'écoute.

### UNKNOWN: Can't construct cache...

Pour contrôler le stockage d'un appareil ou d'un système, les plugins Centreon emploient des OIDs standard. Parfois, le fabricant n'implémente qu'une partie de ces OIDs.

Utilisez la commande `snmpwalk` pour vérifier quels sont les OIDs disponibles et adaptez la commande de contrôle en conséquence.

La supervision de la bande passante et des statuts des interfaces sont un exemple parfait de ce problème : par défaut, le plugin utilise l'OID `ifname` pour construire son cache. S'il ne peut pas le trouver, vous obtiendrez cette erreur.

Pour les contrôles d'interface et de stockage, des options permettent de demander à la sonde d'utiliser un autre OID (par exemple `--oid-filter='ifDesc' --oid-display='ifDesc'`).


### Problème d'uptime

### Contexte sur le sysUpTime dans SNMP

Lorsque l'uptime dépasse 497 jours, un problème spécifique peut se produire en raison de la 
manière dont l'uptime est représenté dans le format TimeTicks utilisé par SNMP. Le `sysUpTime` 
dans SNMP est un nombre exprimé en TimeTicks, qui représente le nombre de centi-secondes 
écoulées depuis le dernier démarrage du système. Ce nombre est stocké dans un format de 
32 bits, ce qui signifie qu'il peut stocker des valeurs comprises  entre 0 et 4 294 967 295. 
Ainsi l'uptime atteint sa valeur maximale après environ 497 jours 
(environ 4 294 967 295 centi-secondes). Lorsque cette limite est dépassée, un débordement 
(overflow) se produit, ce qui signifie que le compteur recommence à zéro. 

### Comment identifier le problème ?

Vous pouvez identifier que l'uptime a dépassé la limite de 497 jours en vérifiant directement 
sur l'équipement (si c'est possible) son uptime (sans interroger via SNMP). Par exemple
pour Linux, utilisez la commande suivante :

```commandline
uptime
14:32:12 up 500 days,  3:04,  2 users,  load average: 0.15, 0.10, 0.09
```

Ce qui indique que le système est en fonctionnement depuis 500 jours, 3 heures et 4 minutes.

### Solution proposée en amont : l'option --check-overload

La majorité des modèles de services associés à l'uptime via SNMP utilisent l'option ` --check-overload`
qui va permettre de gérer le débordement de l'uptime après 497 jours. Pour cela ils vont utiliser le cache
du plugin pour déterminer l'ancien uptime et calculer le dépassement qui a eu lieu afin d'ajuster la 
valeur d'uptime retournée par le plugin. Ainsi le débordement est transparent et ne génère pas de 
fausse alerte vis-à-vis de l'uptime et l'utilisateur n'a rien à faire de particulier.

### Si le dépassement a eu lieu mais l'option --check-overload n'était pas présente dans la commande du plugin

Dans le cas où l'option ` --check-overload` n'était pas présente dans la commande du plugin avant que le 
dépassement ait lieu, il est possible de corriger la situation de la façon suivante : 

Lancez la commande du plugin en ajoutant l'option ` --check-overload`:

```commandline
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=uptime --hostname=XXXX --snmp-version='2c' --snmp-community='public' --check-overload
OK: System uptime is: 11h 28m 39s | 'uptime'=41319.00s;;;0;
```

Ensuite vérifiez que l'option s'est ajoutée dans le cache du plugin :

```commandline
cat /var/lib/centreon/centplugins/cache_<hostname>_uptime 
{"last_time":170905862051,"overload":0,"uptime":"4131920"}
```

Remplacez la valeur de l'option "overload" par 1 et vérifiez que cela a fonctionné :

```commandline
sed -i 's/"overload":0/"overload":1/g' /var/lib/centreon/centplugins/cache_<hostname>_uptime
cat /var/lib/centreon/centplugins/cache_<hostname>_uptime 
{"last_time":170905862051,"overload":1,"uptime":"4131920"}
```

Vous pouvez ensuite relancer la commande du plugin avec l'option ` --check-overload` : le 
résultat devrait tenir compte du dépassement et correspondre aux informations d'uptime du
système que vous avez pu vérifier manuellement :

```commandline
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=uptime --hostname=XXXX --snmp-version='2c' --snmp-community='public' --check-overload
OK: System uptime is: 497d 13h 58m 41s | 'uptime'=42991121.00s;;;0;
```

## Contrôles HTTP et API

### UNKNOWN: Cannot decode response (add --debug option to display returned content)

Les plugins réalisent des appels API et déchiffrent le contenu renvoyé par l'API pour l'utiliser comme un statut, un message ou une métrique. Le plugin s'attend à un format spécifique pour les données selon ce qui est supporté par l'API (XML ou JSON).

Si l'API ne renvoie pas les données attendues par le plugin, la librairie utilisée par le plugin ne pourra pas déchiffrer les données.

La raison la plus commune de ce problème est qu'un proxy bloque la requête principale et renvoie un message d'erreur qui n'est pas dans le format attendu. L'option `--proxyurl=<proto>://<address>:<port>` vous permet de spécifier l'adresse et le port d'un proxy.

Il est également possible que l'API renvoie une erreur au lieu de la structure des données attendue.
Vous pouvez investiguer cela en ajoutant le flag `--debug` à votre ligne de commande pour obtenir plus d'informations à propos de la requête et des données reçues.

### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (\<extra_reason_if_available\>)

Lorsque vous récupérez des métriques ou des données d'une API, divers problèmes peuvent apparaître. Ils sont souvent causés par des proxys, des appareils distants, des certificats ou tout simplement la configuration du contrôle.

Cette section est axée sur les causes les plus courantes de ces problèmes et propose quelques conseils pour les résoudre.

Ce que vous devez retenir est que les plugins peuvent dépendre de plusieurs *backends* pour réaliser leur requêtes HTTP. Vous pouvez spécifier quel backend vous souhaitez utiliser pour vos contrôles avec l'option `--http-backend` dont la valeur par défaut est `lwp`, mais `curl` est également disponible et est, généralement, plus facile à dépanner.

Si vous utilisez un proxy, vous pouvez également spécifier au plugin comment communiquer avec en ajoutant l'option `--proxyurl` à votre ligne de commande. Le format attendu est : 
`--proxyurl='<proto>://<proxy_addr>:<proxy_port>`. 

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (Connection refused)

Ce problème a tendance à apparaître lorsque le port ou protocole employé par le plugin est incorrect, mal configuré ou n'est pas supporté par le plugin.

Dans ce cas, au niveau de la configuration de l'hôte, vérifiez que :
* le port utilisé est le bon, surtout si vous utilisez un port spécial pour des raisons de sécurité
* le protocole employé (http ou https) correspond à celui employé du côté de l'API.

Tous les plugins utilisant des backends HTTP ont les options `--proto` et `--port` vous permettant de spécifier ces valeurs.

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (Timeout)

L'erreur "timeout" se produit lorsque le plugin n'arrive pas à contacter le serveur ou lorsqu'un appareil tiers bloque ou filtre la requête du client.

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (`<SSL Error>`)

L'erreur SSL indique que le plugin rencontre des problèmes pour établir un connexion sécurisée afin d'obtenir les données de supervision.

La cause est probablement le certificat employé. Dans ce cas, les meilleures pratiques sont :
* renouveler le certificat lorsqu'il a expiré
* signer officiellement le certificat distant
* deployer le certificat localement pour que le plugin puisse le reconnaître.

Indépendamment du backend HTTP que vous employez, il est possible d'ignorer les erreurs de certificat SSL en ajoutant des flags spécifiques : 

* backend lwp : `--ssl-opt='--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE'`
* backend curl : `--curl-opt='CURLOPT_SSL_VERIFYPEER => 0'`

Parfois, l'hôte distant ne supporte pas la négociation de l'implémentation SSL. Vous devez alors spécifier explicitement au plugin lequel utiliser avec l'option `--ssl` (e.g. `--ssl='tlsv1'`). Référez-vous à la documentation du fabricant ou de l'éditeur du logiciel.

## Troubleshooting AWS

### `UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values`

Le résultat de cette commande signifie qu'Amazon Cloudwatch ne dispose d'aucune valeur pour la période demandée.

Ce résultat peut être annulé en ajoutant l'option --zeroed dans la commande. 
Cela forcera une valeur de 0 lorsqu'aucune métrique n'a été collectée et évitera le message d'erreur UNKNOWN.

### `UNKNOWN: Command error: - An error occurred (AuthFailure) [...] `

Le résultat de cette commande signifie que les informations d'identification fournies 
n'ont pas les privilèges suffisants pour exécuter l'opération AWS sous-jacente.

### `UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |`

Ce message d'erreur signifie que le plugin Centreon n'a pas pu se connecter avec succès à l'API AWS Cloudwatch. 
Vérifiez qu'aucun dispositif tiers (tel qu'un pare-feu) ne bloque la demande. 
Une connexion proxy peut également être nécessaire pour se connecter à l'API. 
Pour ce faire, utilisez l'option suivante dans la commande : --proxyurl='http://proxy.mycompany:8080'.

## SSH and CLI checks


### UNKNOWN: Command error: `<interpreter>`: `<command_name>`: command not found

Cette erreur indique que le plugin n'est pas capable d'exécuter `<command_name>` car la commande n'existe pas dans PATH ou n'est pas installée.

Selon la méthode du contrôle (locale ou à distance), vous devez vous assurer que l'utilitaire employé par le plugin est disponible pour votre utilisateur de supervision. 

### UNKNOWN: Command error: Host key verification failed.

Les contrôles basés sur SSH peuvent utiliser plusieurs *backends*. Que vous utilisiez le backend `ssh` ou `plink`, vous devez valider manuellement l'empreinte du système distant sur le collecteur de supervision et depuis l'utilisateur **centreon-engine**. Pour des raisons de sécurité, si vous ne suivez pas ces instructions, le plugin reste en attente jusqu'à déclencher un timeout car il ne peut accepter l'empreinte.

## Contrôles NRPE

### CHECK_NRPE STATE (CRITICAL|UNKNOWN): Socket timeout after 10 seconds

Lorsque vous voyez ce message, demandez-vous : 
* Est-ce que mon adresse IP et paramètres de port sont corrects ?
* Est-ce que le daemon NRPE est actif sur le système distant ?
* Est-ce qu'un firewall ou une politique de sécurité pourrait être en train de bloquer la requête ?

### connect to address x.x.x.x port 5666: Connection refused

Cette erreur indique que le client a réussi à se connecter à l'hôte distant et au port mais que le serveur a refusé la connexion.
Cela est généralement dû au fait que le client essaie d'établir une connexion avec le serveur depuis une IP non autorisée.

Vérifiez que la directive `allowed_hosts` définie dans le fichier de configuration du serveur NRPE autorise votre serveur de supervision à envoyer des commandes d'exécution à distance.

Pensez à redémarrer votre daemon NRPE pour mettre à jour la configuration.

### NRPE: Command \<a_command\> not defined

Le serveur NRPE renvoie cette erreur lorsque le client tente d'exécuter une commande qu'il ne comprend pas.

Cela peut être dû à un problème de configuration du côté du serveur ou une faute de frappe dans la ligne de commande du côté du client.

Vérifiez la configuration du serveur NRPE pour confirmer que la commande existe :

```text
[a_command]=/path/to/a/command --option1='<value_or_macro>' --optionN='<value_or_macro>'
```

Redémarrez votre daemon NRPE pour mettre à jour la configuration.

### NRPE: unable to read output
Cette erreur survient lorsque le serveur NRPE n'arrive pas à exécuter la commande. 
Dans ce cas, connectez-vous au serveur contenant le serveur NRPE et exécutez la commande manuellement avec l'utilisateur NRPE.

La plupart du temps, cette erreur est causée par des droits insuffisants (il manque une partie d'exécution ou le propriétaire est incorrect) ou une dépendance manquante au niveau du code.
