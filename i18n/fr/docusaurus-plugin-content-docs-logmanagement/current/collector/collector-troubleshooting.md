---
id: collector-troubleshooting
title: Dépanner votre installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vérifiez l'état de votre collecteur sur l'hôte dont vous souhaitez recevoir les logs :

 ```shell
journalctl -u otelcol-contrib.service
```

Si vous ne recevez pas les journaux attendus dans Log Management, vérifiez que l'utilisateur **otelcol-contrib** dispose des droits suffisants pour lire les fichiers requis, en fonction du type de receiver. Exemple :

```shell
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib
```
