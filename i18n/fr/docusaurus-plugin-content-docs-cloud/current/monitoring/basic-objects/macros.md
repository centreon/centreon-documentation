---
id: macros
title: Les macros
---

Une macro est une variable qui déinit une valeur utilisée par une commande pour contr^^oler des hôtes ou des services. Les macros vous permettent de personnaliser les contrôles en définissant une valeur particulière pour chaque hôte ou service contrôlé par le me^me modèle: la valeur de la macro pour un hôte ou service sepécifique est défini par l'utilisateur dans la formulaire de configuration de l'hôte ou du service.

Exemple: Dans la commande suivante (qui contrôle l'uptime d'un serveur Linux), **$HOSTADDRESS$**, **$_SERVICEWARNING$** et **$_HOSTSNMPEXTRAOPTIONS$** sont des macros.

```shell
$CENTREONPLUGINS$/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=uptime --hostname=$HOSTADDRESS$ --snmp-version='$_HOSTSNMPVERSION$' --snmp-community='$_HOSTSNMPCOMMUNITY$' $_HOSTSNMPEXTRAOPTIONS$ --warning-uptime='$_SERVICEWARNING$' --critical-uptime='$_SERVICECRITICAL$' $_SERVICEEXTRAOPTIONS$
```

Lorsque la commande est utilisée pour contrôler un hôte ayant comme adresse IP 10.10.10.10 (définie dans le formulaire de configuration de l'hôte), la macro est remplacée par la valeur 10.10.10.10 afin que la commande soit adaptée à cet hôte.

* Une macro d’hôte est utilisée pour définir une variable qui est propre à l’hôte et qui ne changera pas quel que soit le
service interrogé : des identifiants de connexion à l’hôte, un port de connexion pour un service particulier, une
communauté SNMP...
* Une macro de service est utilisée pour définir des paramètres propres à un service : un seuil WARNING/CRITICAL, une partition à interroger...

Une macro commence et se termine toujours par le signe **$**.

## Les macros standard

Les macros standard sont des macros prédéfinies dans le code source des moteurs de supervision. Elles peuvent être utilisées dans toute [commande de contrôle](commands.md). Dans le formulaire de création de commandes de contrôle, vous pouvez insérer des macros en utilisant la liste déroulante et les flèches en bas à droite du champ **Ligne de commande**.

Exemple :

* La macro **$HOSTADDRESS$** permet de récupérer l’adresse IP d’un hôte
* La macro **$CONTACTEMAIL$** permet de récupérer l’adresse mail d'un contact.

> La liste complète des macros est disponible [à cette adresse](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/macrolist.html)*.

## Les macros personnalisées

### Définition

Les macros personnalisées sont des macros définies par l’utilisateur et utilisées dans une [commande de contrôle](commands.md).

Les macros personnalisées commencent par $_HOST pour les macros personnalisées d’hôte et par $_SERVICE pour les macros personnalisées de service.

> Si vous aviez l'habitude d'utiliser Centreon OnPrem ou Nagios, vous avez peut-être utilisé des arguments ($ARG1, $ARG2...). Ceux-ci sont dépréciés dans Centreon Cloud : utilisez des macros personnalisées. Les champs concernant les arguments n'aparaissent ici que pour assurer la compatibilité pour les clients OnPrem migrant vers Centreon Cloud.

### Exemple

Dans une commande de contrôle d'hôte, les macros suivantes sont utilisées : **$_HOSTUSERLOGIN$**, **$_HOSTUSERPASSWORD$**. Lorsqu'un hôte est configuré, les valeurs de ces macros sont définies :

![image](../../assets/configuration/01hostmacros.png)

Dans une commande de contrôle de service, les macros suivantes sont utilisées : **$_SERVICEPARTITION$**, **$_SERVICEWARNING$**, **$_SERVICECRITICAL$**. Lorsqu'un service est configuré, les valeurs de ces macros sont définies :

![image](../../assets/configuration/01servicemacros.png)

### Cas particulier

Les champs **Communauté SNMP** et **Version** présents au sein d’une fiche d’hôte génèrent automatiquement les macros
personnalisées suivantes : $_HOSTSNMPCOMMUNITY$ et $_HOSTSNMPVERSION$.
