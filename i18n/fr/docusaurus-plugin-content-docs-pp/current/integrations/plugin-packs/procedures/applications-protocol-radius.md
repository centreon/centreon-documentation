---
id: applications-protocol-radius
title: Radius Service
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

RADIUS (Remote Authentication Dial-In User Service) permet de
centraliser l'authentification par l'intermedaire du protocol AAA 
(Authentication, Authorization, Accounting).

Le connecteur de supervision Centreon *Radius Service* permet de récupérer le status et le
temps de réponse d'une connexion à un serveur RADIUS

## Contenu du Pack

### Objets supervisés

* Serveur RADIUS

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Radius-Login" label="Radius-Login">

| Metric name                  | Description         | Unit       |
|:-----------------------------|:--------------------|:-----------|
| status                       | Login status        |            |
| radius.response.time.seconds | Login response time | seconds    |

</TabItem>
</Tabs>

## Prérequis

Pour faire fonctionner le connecteur de supervision, il est nécessaire d'avoir :

* Un serveur RADIUS
* Un utilisateur ainsi que son mot de passe pour l'authentification
* Le secret du serveur RADIUS

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources RADIUS:

```bash
yum install centreon-plugin-Applications-Protocol-Radius
```

2. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Radius Service* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources RADIUS:

```bash
yum install centreon-plugin-Applications-Protocol-Radius
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Radius Service*:

```bash
yum install centreon-pack-applications-protocol-radius
```

3. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Radius Service* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page "Configuration > Hôtes".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur RADIUS
* Appliquez le Modèle d'Hôte *Applications-Protocol-Radius-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) doivent être renseignées 

| Mandatory | Name           | Description                                                                        |
|:----------|:---------------|:-----------------------------------------------------------------------------------|
| X         | RADIUSUSERNAME | RADIUS server username                                                             |
| X         | RADIUSPASSWORD | RADIUS server password                                                             |
| X         | RADIUSADDR     | RADIUS server address                                                              |
| X         | RADIUSSECRET   | RADIUS server shared secret                                                        |
|           | EXTRAOPTIONS   | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

 Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
 de commande depuis votre collecteur Centreon en vous connectant avec 
 l'utilisateur *centreon-engine*:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_radius.pl  \
    --plugin=apps::protocols::radius::plugin  \
    --mode=login  \
    --hostname=  \
    --secret=''  \
    --username=''  \
    --password=''   \
    --warning-status=''  \
    --critical-status='%{status} ne "accepted"'  \
    --warning-time='2'  \
    --critical-time='3'  \
    --use-new-perfdata 
 ```

 La commande devrait retourner un message de sortie similaire à :

 ```bash
OK : Radius Access Request Status: accepted | 'radius.response.time.seconds'=1s;0:2;0:3;; 
 ```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le temps de
réponse de l'identification est supérieure à 2 secondes 
(```--warning-time='2'```); l'alarme sera de type CRITICAL au-delà de 3 secondes
ou si le status de l'identification est différent de "accepted".

 La liste de toutes les options complémentaires et leur signification peut être 
 affichée en ajoutant le paramètre ```--help``` à la commande:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_radius.pl  \
    --plugin=apps::protocols::radius::plugin  \
    --mode=login  \
    --help
 ```

 Tous les modes disponibles peuvent être affichés en ajoute le paramètre 
 ```--list-mode``` à la commande:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_radius.pl  \
    --plugin=apps::protocols::radius::plugin  \
    --list-mode
 ```

### Diagnostic des erreurs communes

#### ```UNKNOWN: Login endpoint returns error code 'Auth_TIMEOUT' ```

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient
pas à contacter le serveur RADIUS (firewall ou autre équipement
en coupure).

#### ```UNKNOWN: Login endpoint returns error code 'Bad Response from server' ```

Cela signifie que le secret utilisé pour s'authentifier au serveur RADIUS 
est incorrect.