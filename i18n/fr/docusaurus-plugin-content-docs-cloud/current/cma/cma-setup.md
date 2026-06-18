---
id: cma-setup
title: Configurer l’environnement de l’agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from './_poller-agent-configuration.mdx';

## Utilisation de la commande d'installation prête à l'emploi

> Cette procédure n'est valable que pour le mode "Connexion initiée par l'agent"

1. Accédez à **Configuration > Pollers > Configurations d'agent**, puis cliquez sur **Commande**.
2. Dans la fenêtre qui s'affiche, renseignez les informations correspondant à votre environnement (poller qui supervisera vos hôtes, type de système d'exploitation de vos hôtes).
3. Copiez la commande affichée dans la fenêtre, puis exécutez-la sur chaque hôte que vous souhaitez superviser avec l'agent.
   L'agent CMA est déployé, et la connexion entre CMA et le collecteur est établie via TLS.

> L'exécution de cette commande nécessite que l'hôte dispose d'un accès à internet.

### Comment sont gérés les certificats ?

A la création d'un collecteur, les certificats sont gérés automatiquement :
* le certificat CA est généré et stocké dans **/etc/pki/centreon-engine** (TTL de 10 ans).
* une paire clé privée/publique est générée, à partir des fichiers CA (TTL faible, renouvelée automatiquement tous les 30 jours). Cette paire sera stockée dans la mémoire du collecteur et son empreinte stockée dans la base de données.
* CMA, une fois déployé, utilisera cette empreinte pour récupérer et valider la clé publique et établir la connexion TLS avec le collecteur.

Si vous souhaitez configurer manuellement les certificats, la configuration d'agent et/ou les jetons, reportez-vous à le [documentation dédiée](cma-setup-manual.md).


<!-- ## Que se passe-t-il lorsque vous exécutez la commande ?

Sur le collecteur, les [certificats](cma-certificates.md) sont gérés automatiquement :

* le certificat CA est généré et stocké dans **/etc/pki/centreon-engine**.
* une paire clé privée/certificat est générée, à partir des fichiers CA (TTL faible, renouvelée automatiquement tous les 30 jours). Cette paire sera stockée dans la mémoire du collecteur.

Sur le serveur central :

* un [jeton CMA](../administration/api_tokens.md) est créé.
* La [configuration de l'agent](cma-setup-manual.md#configure-polleragent-communication) est créée pour le poller que vous avez sélectionné.
* L'empreinte digitale du certificat est stockée dans la base de données.

Sur l'hôte : l'agent CMA est déployé.

À la fin, la connexion entre CMA et le collecteur est établie via TLS. -->
