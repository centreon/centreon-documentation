---
id: connectors-test
title: Tester un connecteur de supervision
description: "Les étapes pour vérifier qu'un connecteur de supervision fonctionne réellement."
---

Avant de vous appuyer sur un connecteur en production, nous vous recommandons de le tester directement depuis la ligne de commande du collecteur. Exécuter le plugin à la main permet de vérifier que le collecteur peut joindre la ressource supervisée, que les identifiants et les paramètres sont corrects, et que le contrôle renvoie des données. Vous le faites avant d'appliquer le modèle à un hôte et de déployer la configuration. C'est plus rapide à dépanner que d'attendre un contrôle planifié, car le plugin affiche l'erreur exacte qu'il rencontre.

## Avant de commencer

Le plugin doit déjà être installé sur le collecteur depuis lequel vous faites le test. Si ce n'est pas le cas, installez-le d'abord (voir [Installer des connecteurs de supervision](./installing-connectors.md)). Vous aurez aussi besoin des informations de connexion demandées par le connecteur : en général l'adresse de l'hôte, les identifiants et les paramètres propres au connecteur, indiqués dans sa procédure de supervision.

## Exécuter un contrôle depuis la ligne de commande du collecteur

1. Connectez-vous au collecteur en SSH.
2. Allez dans le répertoire des plugins :

```bash
   cd /usr/lib/centreon/plugins/
```

3. Exécutez le plugin avec les paramètres de la ressource à superviser. La commande exacte est donnée dans la procédure de supervision de chaque connecteur. Elle a la forme générale suivante :

```bash
   ./centreon_plugin.pl \
     --plugin=<plugin::path> \
     --mode=<mode> \
     --hostname='<target>' \
     [connection and credential options] \
     [--warning=<value> --critical=<value>]
```

4. Lisez la sortie.

## Comprendre le résultat

Le plugin renvoie une ligne qui commence par un mot-clé de statut, éventuellement suivie de données de performance après un `|` :

* **OK** : le contrôle a réussi et les valeurs sont dans les seuils.
* **ALERTE** / **CRITIQUE** : le contrôle a réussi, mais une valeur a dépassé le seuil que vous avez défini.
* **INCONNU** : le contrôle n'a pas pu aboutir. Cela indique en général un problème de configuration : hôte injoignable, mauvais port, identifiants incorrects ou option manquante.

Une exécution réussie ressemble à ceci :

```bash
OK: CPU(s) average usage is 0.84 % | 'cpu.utilization.percentage'=0.84%;;;0;100
```

Le texte avant le `|` est le statut lisible par un humain. Tout ce qui suit correspond aux données de performance, que Centreon transforme en graphiques et compare aux seuils.

## Si le contrôle échoue

Un résultat INCONNU, ou une erreur à la place d'une ligne de statut, vient presque toujours de la connexion et non du plugin lui-même. Vérifiez les causes habituelles :

* Le collecteur ne peut pas joindre la cible sur le port requis (vérifiez les chemins réseau et les pare-feux).
* Les identifiants sont incorrects, ou le compte n'a pas les droits dont le connecteur a besoin.
* Un paramètre obligatoire est manquant ou mal saisi.
* Un prérequis n'est pas rempli : certains connecteurs ont besoin d'un composant ou d'un agent supplémentaire sur la cible, comme l'indique leur procédure de supervision.

Ajoutez `--verbose` à la commande pour obtenir plus de détails, et utilisez `--help` pour afficher toutes les options disponibles pour le plugin et le mode que vous testez. Une fois que la commande renvoie le résultat attendu en ligne de commande, vous pouvez appliquer le modèle du connecteur à un hôte et déployer la configuration en sachant que le contrôle fonctionnera.

Voir aussi : [Dépanner les erreurs des plugins](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md).
