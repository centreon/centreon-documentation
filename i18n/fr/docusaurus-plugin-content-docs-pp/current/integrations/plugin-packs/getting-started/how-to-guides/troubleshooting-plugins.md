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

Il est également possible que l'API vous renvoie une erreur au lieu des des données attendues.
Vous pouvez investiguer ceci en ajoutant le flag `--debug` à votre ligne de commande pour obtenir plus d'informations à propos de la requête et des données reçues.

### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (<extra_reason_if_available>)

Lorsque vous récuperez des metriques ou des données d'un API, divers problèmes peuvent appraitre. Ils sont souvent causés par des proxy, des appareils à distance, des certificats ou tout simplement la configuration du check.

Cette section est axée sur les causes les plus courantes de ces problèmes et propose quelques conseils pour les résoudre.

Ce que vous devez retenir est que les plugins peuvent dépendre de plusieurs *backends* pour réaliser leur requêtes HTTP. Vous pouvez spécifier quel backend vous souhaitez utiliser pour vos contrôles avec l'option `--http-backend` dont la valeur par défaut est `lwp` mais `crurl` est également disponible et est, généralement, plus facile à dépanner.

Si vous utilisez un proxy vous pouvez également spécifier au plugin comment communiquer avec en ajoutant l'option `--proxyurl` à votre ligne de commande. Le format attendu est : 
`--proxyurl='<proto>://<proxy_addr>:<proxy_port>`. 

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (Connection refused)

Ce problème a tendance à appraître lorsque le port ou protocole employé par le plugin est incorrect, mal configuré ou n'est pas supporté par le plugin.

Dans ce cas, vérifiez les configurations suivantes au niveau de la configuration de l'hôte :
* le port utilisé est le bon, principalement si vous utilisez un port spécial pour des raisons de sécurité
* le protocole employé (http ou https) correspond à celui employé du côté de l'API

que tous les plugins utilisant des backend HTTP ont les options `--proto` et `--port` vous permettant de spécifier ces valeurs.

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (Timeout)

L'erreur "timeout" se produit lorsque le plugin n'arrive pas à contacter le serveur ou lorsqu'un appareil tiers bloque ou filtre la requête du client.

#### UNKNOWN: 500 Can't connect to `<ip_address>:<port>` (`<SSL Error>`)

L'erreur SSL indique que le plugin rencontre des problèmes pour établir un connexion sécurisée pour obtenir les données de supervision.

La cause est probablement le certificat employé, dans ce cas, les meilleures pratiques sont :
* renouveler le certificat lorsu'il a expiré
* signer officiellement la certification à distance
* deployer le certificat localement pour que le plugin puisse le reconnaître

Indépendament du backend HTTP que vous employez, il est possible d'ignorer les erreurs de certificat SSL en ajoutant des flags specifiques : 

* backend lwp : `--ssl-opt='--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE'`
* backend curl : `--curl-opt='CURLOPT_SSL_VERIFYPEER => 0'`

Occasionnellement, l'hôte à distance ne suppoorte pas la négotiation de l'implémentation SSL. Vous devez alors spécifier explicitement au plugin lequel utiliser avec l'option `--ssl` (e.g. `--ssl='tlsv1'`). Referez-vous à la documentation du manufactureur ou de l'éditeur du logiciel.

## Contrôles SSH et CLI

### UNKNOWN: Command error: `<interpreter>`: `<command_name>`: command not found

Cette erreur indique que le plugin n'est pas capble d'executer `<commande_name>` care la commande n'existe pas dans PATH ou n'est pas installée.

Selon la méthode du contrôle (locale ou à distance), vous devez vous assurer que l'utilitaire employé par le plugin est disponible pour votre utilisateur de supervision. 

### UNKNOWN: Command error: Host key verification failed.

Les contrôles basés sur SSH peuvent utiliser de nombreux *backends*, peu importe que vous utilisez le backend `ssh` ou `plink`, vous devez valider manuellement l'empreinte digitale du système à distance sur le poller de supervision et depuis l'utilisateur *centreon-engine*. Pour des raisons de sécurité, si vous ne suivez pas ces instructions, le plugin reste en attente jusqu'à déclencher un timeout car il ne peut accepter l'empreinte digitale.

## Contrôles NRPE

### CHECK_NRPE STATE (CRITICAL|UNKNOWN): Socket timeout after 10 seconds

Lorsque vous voyez ce message, demandez-vous : 
* Est-ce que mon adresse IP et paramètres de port sont corrects ?
* Est-ce que le daemon NRPE est actif dans le système à distance ?
* Est-ce qu'il y a un firewall ou une politique de sécurité qui pourrait être en train de bloquer la requête ?

### connect to address x.x.x.x port 5666: Connection refused

Cette erreur indique que le client a réussi à se connecter à l'hôte à distance et au port mais que le serveur a refusé la connexion.
Cela est généralement dû au fait que le client essaie d'établir une connexion avec le serveur depuis une IP non-autorisée.

Verifiez que le directif `allowed_hosts` défini dans le fichier config du serveur NRPE autorise votre serveur de supervision à envoyer des commandes d'exécution à distance.

Pensez à redémarrer votre daemon NRPE pour mettre à jour la configuration.

### NRPE: Command <a_command> not defined

Le serveur NRPE renvoie cette erreur lorsque le client tente d'exécuter une commande qu'il ne comprend pas.

Cela peut être dû à un problème de configuration du côté du serveur ou une faute de frappe dans la ligne de commande du côté du client.

Vérifiez la configuration du serveur NRPE pour confirmer que la commande existe : 
```text
[a_command]=/path/to/a/command --option1='<value_or_macro>' --optionN='<value_or_macro>'
```

Redémarrez votre daemon NRPE pour mettre à jour la configuration.

### NRPE: unable to read output
Cette erreur survient lorsque le serveur NRPE n'arrive pas à exécuter la commande. 
Dans ce cas, connectez-vous au serveur contenant le serveur NRPE et exécutez la commande manuellement en utilisant l'utilisateur NRPE.

La plupart du temps, cette erreur est causée par un manque de droits (il manque une partie d'exécution ou le propriétaire est incorrect) ou une dépendance manquante au niveau du code.
