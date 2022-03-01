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
