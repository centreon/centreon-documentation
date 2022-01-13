---
id: applications-nmap-cli
title: Nmap CLI Discovery
---

# Contenu du Pack 

Ce Pack fournit exclusivement une règle de découverte d'Hôte. 

À l'aide du fournisseur **Nmap Discovery** vous pouvez facilement découvrir les Hôtes au 
sein de sous-réseaux donnés. 

## Installation

Pour installer le Plugin et le Pack, suivez les étapes ci-après. 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online Licence-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon utilisant le binaire *Nmap* pour découvrir des ressources: 

```bash
yum install centreon-plugin-Applications-Nmap-Cli
```

2. Sur l'interface web de Centreon, installer le Plugin Pack *Nmap CLI* depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installez le paquet Centreon Plugin sur les collecteurs allant découvrir des ressources grâce à *Nmap*:

```bash
yum install centreon-plugin-Applications-Nmap-Cli
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Nmap CLI*:

 ```bash
yum install centreon-pack-applications-nmap-cli
```

3. Sur l'interface web de Centreon, installer le Plugin Pack *Nmap CLI* depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Ressources complémentaires

Plusieurs articles existent pour vous aider à utiliser ce Pack : 

- [Comment configurer une tâche de découverte ?](https://thewatch.centreon.com/product-how-to-21/discovery-pack-speed-up-your-monitoring-and-make-it-more-reliable-using-the-new-nmap-discovery-tools-149)
- [Comment améliorer la détection d'équipement et améliorer les propositions de Modèles associés ?](https://thewatch.centreon.com/product-how-to-21/network-discovery-nmap-snmp-how-does-it-work-and-how-can-you-help-162)
