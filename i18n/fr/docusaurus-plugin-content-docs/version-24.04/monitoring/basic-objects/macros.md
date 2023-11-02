---
id: macros
title: Les macros
---

Une macro est une variable permettant de récupérer certaines valeurs. Une macro commence et se termine toujours par le
signe "$".

## Les macros standards

Les macros standards sont des macros prédéfinies dans le code source des moteurs de supervision. Ces différentes macros
permettent de récupérer la valeur de différents objets au sein des commandes.

Exemple :

* La macro **$HOSTADDRESS$** permet de récupérer l’adresse IP d’un hôte
* La macro **$CONTACTEMAIL$** permet de récupérer l’adresse mail du contact

> La liste complète des macros est disponible à cette *[adresse](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/macrolist.html)*.

## Les macros personnalisées

### Définition

Les macros personnalisées sont des macros définies par l’utilisateur lors de la création d’un hôte ou d’un service.
Elles sont utilisées dans les commandes de vérifications. Les macros personnalisées commencent par $_HOST pour les
macros personnalisées d’hôtes et par $_SERVICE pour les macros personnalisées de services.

Il y a plusieurs avantages à utiliser les macros personnalisées à la place des arguments :

* La fonction de la macro est définie dans le nom de celle-ci. La macro $_HOSTMOTDEPASSEINTRANET$ est plus facilement
  lisible que $ARG1$
* Les macros héritent des modèles d’hôtes et de services, la modification d’une seule macro est donc possible pour un
  hôte ou un service. En revanche, les arguments doivent être tous redéfinis en cas de modification d’un seul argument
* Le nombre d’arguments est limité à 32 contrairement aux macros personnalisées qui sont infinies

Une macro d’hôte est utilisée pour définir une variable qui est propre à l’hôte et qui ne changera pas qu’importe le
service interrogé : des identifiants de connexion à l’hôte, un port de connexion pour un service particulier, une
communauté SNMP.

Une macro de service est plutôt utilisée pour définir des paramètres propres à un service : un seuil WARNING/CRITICAL,
une partition à interroger...

### Exemple

Lors de la définition d’un hôte, les macros suivantes sont créées :

![image](../../assets/configuration/01hostmacros.png)

Pour faire appel à ces macros dans une commande de vérification, il faudra les invoquer en utilisant les variables
suivantes : $_HOSTUSERLOGIN$, $_HOSTUSERPASSWORD$.

Lors de la définition d’un service, les macros suivantes sont créées :

![image](../../assets/configuration/01servicemacros.png)

Pour faire appel à ces macros dans une commande de vérification, il faudra les invoquer en utilisant les variables
suivantes : $_SERVICEPARTITION$, $_SERVICEWARNING$, $_SERVICECRITICAL$.

### Cas particulier

Les champs **Community SNMP & Version** présent au sein d’une fiche d’hôte génèrent automatiquement les macros
personnalisées suivantes : $_HOSTSNMPCOMMUNITY$ et $_HOSTSNMPVERSION$.

## Les macros de ressources

Les macros de ressources sont des macros globales qui sont utilisées par le moteur de supervision. Ces macros peuvent
être invoquées par n’importe quel type de commande. Elles se présentent sous la forme $USERn$ où ‘n’ est compris entre
1 et 256.

D’une manière générale, ces macros sont utilisées pour faire référence aux chemins contenant les sondes de supervision.
Par défaut, la macro $USER1$ est créée et sa valeur est la suivante : /usr/lib/nagios/plugins.

Pour ajouter une macro de ressources :

* Renez-vous dans le menu **Configuration > Pollers > Resources**
* Cliquez sur le bouton **Add**

![image](../../assets/configuration/01macrosressources.png)

* Le champ **Resource Name** définit le nom de la macro de ressources. Exemple : $USER3$
* Le champ **MACRO Expression** définit la valeur de la macro.
* La liste **Linked Instances** permet de définir quels seront les moteurs de supervision qui pourront accéder à cette
  macro.
* Les champs **Status** et **Comment** permettent d’activer/désactiver la macro ou de la commenter.

## Les macros d’environnement

Les macros d’environnement (aussi appelées macros “à la demande” ou “on demand” en anglais) permettent de récupérer des
informations à partir de tous les objets issus de la supervision. Elles sont utilisées afin de pouvoir récupérer à un
instant "t" la valeur d’un objet.

Elles sont complémentaires aux macros standards. Exemple :

* La macro standard $CONTACTEMAIL$ fait référence à l’adresse email du contact qui utilisera la commande de notification
* La macro d’environnement $CONTACTEMAIL:centreon$ retournera l’adresse email de l’utilisateur "centreon"

La documentation complète des macros à la demande est disponible à cette *[adresse](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/macros.html)*.

> L’utilisation de ces macros n’est pas recommandée car la recherche d’une valeur d’un paramètre d’un objet depuis un
> autre objet est consommateur en termes de ressources.

> L’activation du paramètre **Use large installation tweaks** rend impossible l’utilisation des macros d’environnement.
