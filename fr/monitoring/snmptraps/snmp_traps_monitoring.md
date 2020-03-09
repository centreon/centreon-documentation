---
id: monitoring-snmp-traps
title: Monitoring SNMP Traps
---

## Configuration de la supervision

Rendez-vous dans le menu **Configuration \> Services \> Services by host** et cliquez sur **Add**.

* Définir une description du service
* Sélectionnez l'hôte auquel attacher ce service
* Sélectionnez le modèle de service **generic-passive-service-custom**

![image](assets/configuration/06createpassiveservice.png)

* Rendez-vous dans l'onglet **Relation** et sélectionnez les traps SNMP

![image](assets/configuration/06servicetrapsrelation.png)

* Cliquez sur **Save**

## Appliquer les changements

Pour pouvoir exporter les OID présents en base de données en fichier de configuration pour centreontrapd, suivez la
procédure suivante :

1. Rendez-vous dans le menu **Configuration \> SNMP traps \> Generate**
2. Sélectionnez le collecteur vers lequel vous souhaitez exporter les fichiers de configuration
3. Cochez **Generate traps database** et **Apply configurations**
4. Dans la liste déroulante **Send signal** (préférez l’option **Reload**)
5. Cliquez sur le bouton **Generate**
6. [Export the monitoring configuration](deploy)

## Pour aller plus loin

### Modifier le message de sortie

#### Utiliser l’ensemble des arguments

Pour un trap SNMP, lors de la configuration du message de sortie, l’argument **$\*** permet d’afficher l’ensemble des
informations (valeur des arguments) contenu au sein du trap SNMP. Cependant, il est possible d’afficher uniquement
certaines informations contenues au sein du trap SNMP en appelant unitairement les arguments.

Exemple :
![image](assets/configuration/06servicetrapsrelation.png)

Le message de sortie **Link down on interface $2. State: $4.**” permet d’afficher uniquement le nom de l’interface et
l’état de celle-ci (argument $2 et $4).

Où trouver les arguments ?

Les arguments se trouvent au sein de la documentation de la MIB de votre constructeur ou bien au sein du champ
**Comments** de votre trap SNMP.

Par exemple :
![image](assets/configuration/klinkcomment.png)

Pour afficher :

* L’index du lien tombé, utilisez l’argument $1
* Le nom de l’interface tombée, utilisez l’argument $2
* L’état administratif de l’interface, utilisez l’argument $3
* L’état de l’interface, utilisez l’argument $4

Par exemple, le message de sortie suivant permet d’afficher l’ensemble des arguments :
```Bash
Link down on interface: $2 (index: $1). Operational state: $4, Administration state: $3
```

#### Effectuer un contrôle actif suite à la reception d’un trap

Il est possible par l’utilisation de l’option **Reschedule associated services** de réaliser un contrôle actif sur le
service suite à la réception du trap SNMP.

Le contrôle actif défini au niveau du service est alors effectué.

#### Executer une commande spéciale

Centreontrapd peut éxecuter une commande spéciale suite à la réception d’un trap SNMP. Pour utiliser cela, il suffit de
cocher l’option **Execute special command** et d’écrire la commande voulue.

#### Utiliser l’ensemble des arguments (via les OID)

Il est également possible de récupérer directement la valeur d’un argument sans connaître son ordre d’arrivée ($1, $2,
$3, ...). Pour cela, utilisez l’OID complet de l’argument.

Voici un exemple :
```Bash
Link down on interface: @{.1.3.6.1.2.1.2.2.1.2} (index: @{.1.3.6.1.2.1.2.2.1.1}). Operational state: @{.1.3.6.1.2.1.2.2.1.8}, Administration state: @{.1.3.6.1.2.1.2.2.1.7}
```

#### Utiliser une variable externe

Il est également possible de modifier le message de sortie en récupérant des informations via des scripts ou commandes
externes et de récupérer le résultat pour l’insérer au sein du message. Pour cela, au sein de la définition de votre
trap SNMP, rendez-vous dans l’onglet **Advanced** et ajoutez une (ou plusieurs) commande(s) PREEXEC.

Exemple :
![image](assets/configuration/kpreexec.png)

La première commande est **snmpget -v 2c -Ovq -c public @HOSTADDRESS@ ifAlias.$1** et permet de récupérer l’alias de
l’interface. La variable “$1” correspond ici à la valeur associée à l’argument 1 des traps linkUp/linkDown, soit l’index.

La seconde commande contient **snmpget -v 2c -Ovq -c public @HOSTADDRESS@ ifSpeed.$1** et permet de récupérer la vitesse
de l’interface. La variable “$1” correspond ici à la valeur associée à l’argument 1 des traps linkUp/linkDown, soit l’index.

Pour utiliser le résultat de la première commande dans le message de sortie, utilisez l’argument $p1 et pour utiliser le résultat de la seconde commande dans le message de sortie, utilisez l’argument $p2.

Par conséquent, nous pouvons déduire le message de sortie suivant :
```Bash
Link down on interface: $2 (index: $1). Operational state: $4, Administration state: $3, Alias : $p1, Speed : $p2
```

#### Utiliser une expression régulière

Il est également possible de modifier le message de sortie en utilisant une expression régulière par l’intermédiaire de
l’option **Output Transform**. Il suffit de renseigner une expression régulière et elle sera éxécutée à la réception
d’un trap SNMP.

For example:
```Bash
s/\|/-/g
```

Will replace **|** in the output to **-**.

### Route/Transfer SNMP traps

Parfois, il existe un concentrateur de traps SNMP au sein d’une société. Exemple : Oracle GRID. Oracle GRID est chargé
de fédérer les informations de tous les serveurs Oracle en cas de nécessité, c’est le serveur Oracle GRID qui envoie un
trap SNMP au serveur de supervision.

Or, à partir d’un trap SNMP reçu par Oracle GRID, on souhaite pouvoir extraire l’adresse IP de l’hôte concerné et
afficher le message du trap dans un service appartenant non pas à Oracle Grid mais à l’hôte concerné par le trap (le
véritable émetteur).

Pour cela, exécutez la procédure suivante :

1. Créez un trap générique, ayant les paramètres suivants :

* Dans l'onglet **Main** :

| Attributs                         | Description                                |
|-----------------------------------|--------------------------------------------|
| Trap Name                         | Nom du trap                                |
| Mode                              | Unique                                     |
| OID                               | OID du trap                                |
| Default Status                    | Statut par défaut du trap                  |
| Output Message                    | Message de sortie personnalisé             |

* Dans l'onglet **Advanced**:

| Attributes                        | Description                                                                                                       |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Enable routing                    | Cochez la case                                                                                                    |
| Route definition                  | $2 (ici on part du principe que l’argument numéro 2 du trap contient l’adresse IP de l’hôte concerné par le trap) |

2. Créer une deuxième définition du trap avec :

* Dans l'onglet **Main** :

| Attributs                         | Description                                |
|-----------------------------------|--------------------------------------------|
| Trap Name                         | Nom du trap                                |
| OID                               | OID du trap                                |
| Default Status                    | Statut par défaut du trap                  |
| Output Message                    | Message de sortie personnalisé             |

3. Associer la première définition à un service (par exemple PING) du serveur Oracle GRID
4. Associer la deuxième définition à un service passif de l’hôte concerné
5. Générer les définitions de traps SNMP et redémarrer centreontrapd

Au sein du champ **Route definition** vous pouvez utiliser les arguments suivants :

| Nom de la variable  | Description                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------|
| @GETHOSTBYADDR($1)@ | Résolution DNS inverse permettant de connaitre le nom DNS à partir de l’adresse IP (127.0.0.1 -> localhost) |
| @GETHOSTBYNAME($1)@ | Résolution DNS permettant de connaitre l’adresse IP à partir du nom DNS (localhost -> 127.0.0.1)            |

### Ne pas soumettre le trap SNMP durant un downtime

L’option **Check Downtime** permet à centreontrapd de contrôler si le service n’est pas dans un statut de downtime lors
de la réception du trap SNMP. Il est possible alors d’annuler la soumission du trap.

> Ce mode de focntionnement n’est compatible qu’avec Centreon Broker et des services supervisés depuis le central.

Il est possible d’adapter le comportement selon ces trois méthodes :

* None : Rien de spécial, le trap SNMP est envoyé normalement
* Real-Time : Si un downtime est actif sur le service, il n’est pas mis à jour.
* History : Ooption utilisée pour ne pas prendre en compte un trap SNMP qui concerne un événement passé lors d’un temps d’arrêt.
