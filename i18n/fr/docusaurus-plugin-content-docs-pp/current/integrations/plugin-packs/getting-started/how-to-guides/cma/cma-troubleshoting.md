---
title: CMA troubleshoting
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Tests de bon fonctionnement 

Voir page dédiée.

### Vérifications sur l'hôte

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

#### Vérifiez que le service est lancé
```bash
systemctl status centagent
```

Si le service n'est pas démarré, démarrez-le.

```bash
systemctl restart centagent
```

#### Vérifiez que le fichier de log agent ne contient pas d'erreur

Selon le chemin configuré pour votre fichier de log : 
```bash
grep error /var/log/centreon-monitoring-agent/centagent.log
```
Aucune ligne ne doit être retournée.

</TabItem>
<TabItem value="Windows" label="Windows">

#### Vérifiez que le service est lancé
```bash
services.msc
```
Recherchez "Centreon Monitoring Agent" dans la liste des services.
Si le service n'est pas démarré, démarrez-le.

#### Vérifiez que les logs ne contient pas d'erreur

Selon la configuration faite, utilisez l'observateur d'événements ou consultez le fichier spécifié.


#### Vérifiez que la connexion se fait vers le collecteur
```bash
tnc chsysilsuper -p 4317
```
La valeur **true** doit être retournée.

</TabItem>
</Tabs>

### Vérifications sur le collecteur

#### Vérifiez que le serveur est en écoute et que les packets arrivent

<Tabs groupId="sync">
<TabItem value="L'agent se connecte au collecteur" label="L'agent se connecte au collecteur">
   Exécutez la commande suivante : 
   ```bash
   netstat -na | grep 4317
   ```
   Elle doit retourner des résultats, indiquant que le serveur est en écoute (ESTABLISHED).
   Le port 4317 doit être ouvert en entrée sur le collecteur.
   
   Exécutez la commande suivante : 
   ```bash
   tcpdump -i any port 4317
   ```
   Elle doit retourner des résultats, indiquant que des packets arrivent de l'agent.
   
</TabItem>
<TabItem value="Le collecteur se connecte à l'agent" label="Le collecteur se connecte à l'agent">
   Le port 4317 doit être ouvert en entrée sur l'Agent.
</TabItem>
</Tabs>


#### Vérifiez que le fichier de log engine ne contient pas d'erreur
```bash
grep error /var/log/centreon-engine/centengine.log
```
Aucune ligne ne doit être retournée.


### Vérifications dans Centreon

L'hôte et les services configurés doivent remonter un statut et des métriques.