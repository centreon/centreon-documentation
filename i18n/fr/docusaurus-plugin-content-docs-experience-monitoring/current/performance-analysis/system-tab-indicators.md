---
id: system-tab-indicators
description: Interpréter les indicateurs d'infrastructure serveur comme la bande passante et la RAM
title: Comprendre les indicateurs de l’onglet Système
--- 

La page **Données système** affiche l'état de santé de l'infrastructure serveur hébergeant votre application web. Utilisez-la pour déterminer si un problème de performances provient du code de votre application ou de l'infrastructure sous-jacente.

> **Prérequis :** Les données système nécessitent l'installation d'un [agent système](../installation/servers/install-system-agents.md) sur votre serveur. Les [agents d’application](../installation/servers/add-advanced-metrics.md) débloquent des onglets supplémentaires pour Apache, MySQL, Nginx et d’autres services.

## Indicateurs par défaut

### Interface réseau (bande passante)

Affiche les données **reçues** (entrantes) et **envoyées** (sortantes) par le serveur, en octets par seconde.

Un pic soudain du trafic entrant peut indiquer une forte augmentation du trafic, une tentative de DDoS ou le téléchargement d’un fichier volumineux. Un pic du trafic sortant signifie souvent que des ressources volumineuses sont servies — vérifiez si un déploiement a introduit des ressources plus lourdes.

Des valeurs élevées et soutenues ne constituent pas nécessairement un problème, mais un pic inattendu associé à un ralentissement des temps de chargement des pages suggère que le serveur est saturé au niveau des I/O.

### Mémoire (RAM)

Affiche la mémoire utilisée et disponible au fil du temps.

L'utilisation de la mémoire doit être **relativement stable**. Une tendance à la hausse constante qui ne s'atténue jamais (une courbe en « dents de scie » qui ne fait que monter) indique généralement une fuite de mémoire. Si la mémoire est systématiquement proche de sa limite, le serveur peut recourir à la mise en swap sur le disque, ce qui entraîne une latence importante.

La mémoire atteint rarement des pics spectaculaires de manière spontanée — si vous constatez un pic soudain, recherchez une corrélation avec un déploiement ou un pic de trafic.

### Disque

Affiche l’activité de lecture et d’écriture sur le disque.

Tout comme la mémoire, les I/O disque ne devraient pas varier de manière spectaculaire. Une activité disque élevée peut ralentir les requêtes de base de données, la gestion des sessions et toute autre opération impliquant la lecture ou l’écriture sur le système de fichiers. Une utilisation élevée et persistante du disque mérite d’être examinée — les causes courantes incluent une journalisation excessive, des requêtes de base de données volumineuses ou un stockage de fichiers non optimisé.

L’espace disque n’est pas affiché ici. Surveillez l’espace disque séparément afin d’éviter les interruptions de service dues à des disques pleins.

## Onglets spécifiques aux applications

Si vous avez installé des [agents d'application](../installation/servers/add-advanced-metrics.md), des onglets dédiés apparaissent pour chaque service : **Apache**, **MySQL**, **PostgreSQL**, **Nginx**, **Varnish**, **Redis**, **Memcached** et autres.

Chaque onglet affiche des métriques spécifiques à ce service — par exemple, les connexions actives, le débit de requêtes ou le taux de réussite du cache. Ces informations sont particulièrement utiles pour déterminer si un ralentissement provient de votre serveur web, de votre base de données ou de votre couche de cache.

## Corrélation entre l’infrastructure et les performances

Utilisez les données système en complément des autres fonctionnalités du monitoring de l’expérience utilisateur pour comprendre les relations de cause à effet :

- **Corrélation avec les temps de chargement des pages :** si les temps de chargement connaissent un pic en même temps qu’un pic de mémoire ou de disque, l’infrastructure est probablement le goulot d’étranglement.
- **Établissez une corrélation avec les données métier :** si vous avez configuré les [Données métier](../getting-started/business-view.md), l’onglet **Coût d’infrastructure par clic** de la page **Données métier** relie vos métriques système aux données de conversion et de trafic — ce qui est utile pour comprendre l’impact métier des problèmes d’infrastructure.
