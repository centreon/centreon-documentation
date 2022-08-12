---
id: troubleshooting-hosts-discovery
title: Dépanner les incidents sur la découverte des hôtes
---

## Les tâches de découverte ne s'affichent plus

La page **Découverte** (dans **Configuration > Hôtes**) est vide et n'affiche plus aucune tâche de découverte des hôtes.

### Problème

L'erreur suivante apparaît dans le fichier **gorgoned.log** :

``` shell
ERROR - [autodiscovery] -class- host discovery - cannot get host discovery jobs - request error [code: '500'] [message: 'Call to a member function getUuidAttributes() on null']
```

### Solution

> Ne procédez pas à la suppression et nouvelle installation du Plugin Pack !

Vous devez réinstaller le Plugin Pack correspondant en cliquant sur le bouton de réinstallation : ![image](../../assets/monitoring/discovery/reinstall-complete.png).

## Le scan de l'hôte reste bloqué à l'état planifié

Lorsqu'un scan de l'hôte est lancé, il reste bloqué à l'état planifié.

### Problème

Cette erreur apparaît dans le fichier **gorgoned.log** :

``` shell
ERROR - [autodiscovery] -class- host discovery - cannot get platform versions - Login error [code: '401'] [message: 'Unauthorized']
```

### Solution

Dans le fichier **/etc/centreon-gorgone/config.d/31-centreon-api.yaml**, remplacez la valeur **base_url** par **http://127.0.0.1/centreon/api/latest/**

### Vérifications complémentaires

Vérifiez que le nom d'utilisateur et le mot de passe sont corrects dans le fichier **/etc/centreon-gorgone/config.d/31-centreon-api.yaml**.

Vérifiez que le nom d'utilisateur spécifié dans le fichier **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** accède bien à la configuration de l'API.

## Le message "Aucun fournisseur trouvé" apparaît lors de la création d'une tâche de découverte des hôtes

Lorsque vous cliquez sur le bouton **Ajouter** dans la page **Configuration > Hôtes > Découverte**, le message "Aucun fournisseur trouvé" s'affiche dans l'assistant de création.

### Vérifications

Vérifiez que le module Auto Discovery est bien à jour dans la page **Administration > Extensions > Gestionnaire**.

Réinstallez le Plugin Pack correspondant en cliquant sur le bouton de réinstallation : ![image](../../assets/monitoring/discovery/reinstall-complete.png).
