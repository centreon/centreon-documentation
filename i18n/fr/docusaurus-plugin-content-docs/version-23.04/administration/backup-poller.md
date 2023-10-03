---
id: backup-collecteur
title: Sauvegarder et restaurer vos collecteurs
---

## Cas n°1 : Faire des sauvegardes pour pouvoir installer un nouveau collecteur à partir de zéro

### Données à sauvegarder sur le collecteur actif

Sauvegardez les éléments suivants afin d'être en mesure de complètement reconstruire votre collecteur en cas de problème.

- Plugins personnalisés (par exemple: plugins de la communauté, ou développements spécifiques)
- Si vous utilisez le connecteur **centreon-vmware-daemon** (installation et configuration): sauvegardez **/etc/centreon/centreon_vmware.pm**
- Si vous utilisez le connecteur **centreon-as400** (installation et configuration): sauvegardez **/etc/centreon-as400/**
- Synchronisez les fichiers suivants régulièrement (par exemple avec la commande **rsync**) :
   - **/var/log/centreon-engine/retention.dat** (jusqu'à toutes les 15 minutes) pour garder les acquittements, les plages de maintenance et les statuts.
   - **/var/lib/centreon/centplugins/\*** (jusqu'à toutes les 5 minutes) pour garder le cache des plugins.
   - **/etc/centreon-gorgone/config.d/\*** (une seule fois) pour garder les informations de connexion au serveur central.
   - **/var/lib/centreon-gorgone/.keys/\*** (une seule fois) pour garder l'empreinte pour l'authentification ZeroMQ.

### Basculer vers le nouveau collecteur

Si votre collecteur devient hors d'usage, [installez un nouveau collecteur](../installation/installation-of-a-collecteur/using-packages.md), dans la version correspondant à votre plateforme, rattachez-le au serveur central, puis restaurez tous les éléments listés ci-dessus.

Si vous n'aviez pas sauvegardé le fichier **/var/lib/centreon-gorgone/.keys/\***, vous devrez changer l'empreinte du collecteur dans la configuration du serveur central. Voir [l'article suivant](https://thewatch.centreon.com/troubleshooting-41/collecteur-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177) sur notre plateforme communautaire The Watch.

## Cas n°2: Collecteur de secours

Une autre façon de se préparer à un problème est d'avoir un collecteur de secours sur lequel vous synchronisez les données de votre collecteur actif. Si votre collecteur devient hors d'usage, il vous suffira de basculer sur le collecteur de secours.

### Données à synchroniser

Installez et configurez les mêmes éléments sur votre collecteur de secours que sur votre collecteur actif, et synchronisez les données [comme décrit ici](#données-à-sauvegarder-sur-le-collecteur-actif).

### Basculer vers le collecteur de secours

1. Démarrez le collecteur de secours si celui-ci est arrêté.
2. Changez la configuration réseau du collecteur de secours afin de lui attribuer l'adresse IP de l'ancien collecteur.
3. Redémarrez **gorgoned** d'abord sur le collecteur, puis sur le central.

   ```shell
   systemctl restart gorgoned
   ```

4. Vérifiez que le log de Gorgone ne présente pas d'erreurs de communication.

   ```shell
   tail -F /var/log/centreon-gorgone/gorgoned.log | grep ERROR
   ```

5. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) pour le collecteur, en utilisant la méthode **Restart** (dans la liste **Redémarrer l'ordonnanceur**).
6. Si vous n'aviez pas sauvegardé le fichier **/var/lib/centreon-gorgone/.keys/\***, vous devrez changer l'empreinte du collecteur dans la configuration du serveur central. Voir [l'article suivant](https://thewatch.centreon.com/troubleshooting-41/collecteur-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177) sur notre plateforme communautaire The Watch.

## Cas n°3 : Snapshots de machines virtuelles

Si votre collecteur tourne sur une VM, faites des snapshots réguliers de votre collecteur. Si un problème survient, restaurez le snapshot comme pour n'importe quelle machine virtuelle.
