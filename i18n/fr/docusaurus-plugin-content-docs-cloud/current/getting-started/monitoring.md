---
id: monitoring
title: Comment mettre une ressource en supervision?
---

Pour mettre une ressource en supervision dans Centreon Cloud :

1. Créez la ressource.
2. Liez la ressource au collecteur qui la supervisera.
3. Liez la ressource au modèle fourni par le [Plugin Pack](../monitoring/pluginpacks.md) correspondant.
4. [Exportez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). La ressource apparaît à la page Statut des ressources : vous pouvez y suivre tout changement de statut.

Voici quelques tutoriels pour vous aidez à mettre en place votre supervision :

* [Superviser votre premier serveur Linux](monitor-linux-server-with-snmp.md)
* [Superviser votre premier serveur Windows](monitor-windows-server-with-snmp.md)
* [Superviser votre premier routeur Cisco](monitor-cisco-router-with-snmp.md)
* [Superviser une base de données MySQL ou MariaDB](mysql_tuto.md)
* [Découvrir des instances AWS EC2 avec autodiscovery](autodisco-aws.md)

Les articles suivants peuvent également être intéressants (en anglais sur notre plateforme communautaire **The Watch**):

* [Analyze the response time of your websites with precision with Curl and Centreon](https://thewatch.centreon.com/product-how-to-21/analyze-the-response-time-of-your-websites-with-precision-with-curl-and-centreon-113)
* [Monitoring Microsoft Azure with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-azure-with-centreon-114)
* [Monitoring Microsoft Office 365 with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-office-365-with-centreon-120)
