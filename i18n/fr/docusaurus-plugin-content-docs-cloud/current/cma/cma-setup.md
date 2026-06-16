---
id: cma-setup
title: Configurer l’environnement de l’agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from './_poller-agent-configuration.mdx';

## Utilisation de la commande d'installation prête à l'emploi

1. Accédez à **Configuration > Pollers > Configurations d'agent**, puis cliquez sur **Commande**.
2. Dans la fenêtre qui s'affiche, renseignez les informations correspondant à votre environnement (poller qui supervisera vos hôtes, type de système d'exploitation de vos hôtes).
3. Copiez la commande affichée dans la fenêtre, puis exécutez-la sur chaque hôte que vous souhaitez superviser avec l'agent.
   L'agent CMA est déployé, et la connexion entre CMA et le collecteur est établie via TLS.

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
