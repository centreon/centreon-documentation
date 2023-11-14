---
id: hosts-switch-poller
title: Modifier le serveur de supervision pour un hôte
---

Si vous voulez modifier le serveur de supervision qui supervise un hôte, vous devez éditer la configuration de l'hôte, puis déployer la configuration de l'ancien et du nouveau serveur de supervision.

## Modification pour un hôte

1. À la page **Configuration > Hôtes > Hôtes**, cliquez sur l'hôte dont vous voulez changer le serveur de supervision.

2. Dans l'onglet **Configuration de l'hôte**, dans la section **Information de base sur l'hôte**, mettez à jour le champ **Serveur de supervision**.

3. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md) de l'ancien serveur de supervision et du nouveau.

## Modification pour plusieurs hôtes

Si vous voulez définir le même serveur de supervision pour plusieurs hôtes :

1. À la page **Configuration > Hôtes > Hôtes**, sélectionnez tous les hôtes que vous voulez modifier.

2. Dans le menu **Plus d'actions**, sélectionnez **Changement massif**.

3. Dans l'onglet **Configuration de l'hôte**, dans la section **Information de base sur l'hôte**, mettez à jour le champ **Serveur de supervision**.

4. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md) des anciens serveurs de supervision et du nouveau.
