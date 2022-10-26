---
id: hosts-create
title: Mettre un hôte en supervision
---

Un hôte est toute entité possédant une adresse IP correspondant à une ressource du système d’informations. Exemples : Un
serveur, une imprimante réseau, un serveur NAS, une base de données, une sonde de température, une caméra IP...

La liste des hôtes apparaît à la page **Configuration > Hôtes > Hôtes**.

Vous pouvez :
- [créer des hôtes manuellement](hosts.md), en utilisant des [modèles d'hôtes](hosts-templates.md)
- utiliser la [fonctionnalité de découverte automatique d'hôtes](../discovery/introduction.md).

## Mettre un hôte en supervision

Pour mettre un hôte en supervision, le plus simple est de lui attribuer un [modèle](hosts-templates.md) issu d'un [Plugin Pack](../pluginpacks.md) : 

1. Pour connaître le nom du modèle correspondant à un Plugin Pack, allez à la page **Configuration > Packs de plugins**. Recherchez le Plugin Pack désiré, puis cliquez sur l'icône "i" en bas à gauche de celui-ci. 

    ![image](../../assets/configuration/pluginpacks/doc.png)

    La documentation correspondant au Plugin Pack s'ouvre : elle vous indiquera le nom exact du modèle associé au Plugin Pack.

2. Créez l'hôte :

    - [manuellement](hosts.md) : dans le champ **Modèles**, choisissez le modèle correspondant au plugin pack désiré.
    - par [autodécouverte](../discovery/hosts-discovery.md) : le Plugin Pack sera automatiquement renseigné.

3. [Déployez](../monitoring-servers/deploying-a-configuration.md) la configuration. L'hôte et ses services sont maintenant supervisés : ils apparaissent à la page [Statut des ressources](../../alerts-notifications/resources-status.md).