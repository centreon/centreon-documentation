---
id: prerequisites
title: Prérequis
---

## OS

Le collecteur doit être installé sur un serveur CentOS 7 dédié, fraîchement installé.

## Hardware

La machine hôte doit avoir au moins les caractéristiques suivantes :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 1 CPU     |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

Il est recommandé de partitionner le disque du collecteur pour éviter qu'il ne devienne plein et inutilisable (par exemple, en cas de problème de rétention).
Procédez au partitionnement en suivant les recommandations suivantes :

| Partition                  | Taille                                                                                                     |
|----------------------------|------------------------------------------------------------------------------------------------------------|
| swap                       | 1 à 1.5 la taille totale de la mémoire vive                                                                |
| /                          | au moins 20 Go                                                                                             |
| /var/log                   | au moins 10 Go                                                                                             |
| /var/lib/centreon-broker   | au moins 5 Go                                                                                              |
| /var/cache/centreon/backup | au moins 5 Go (penser à exporter les sauvegarde de manière régulière puis supprimer les données exportées) |

## Réseau

| Description | Direction | Protocole  | IP           | Port   |
| ----------- | --------- | ---------- | ------------ | ------ |
| VPN         | Sortante  | UDP        | VPN IP (TBA) | 1194   |
| INTERNET    | Sortante  | HTTP/HTTPS | *            | 80/443 |
| NTP         | Sortante  | UDP        | TBA          | 123    |

| Source             | Destination                  | Port/Protocole     | Protocole de supervision   |
| ------------------ | ---------------------------- | ------------------ | -------------------------- |
| Serveurs Centreon  | Équipements à superviser     | 80/443 TCP         | API                        |
| Serveurs Centreon  | Base de données à superviser | 3306/1521/1433 TCP | MySQL/Oracle/MSSQL         |
