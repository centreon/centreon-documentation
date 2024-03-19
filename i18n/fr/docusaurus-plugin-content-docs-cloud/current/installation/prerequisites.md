---
id: prerequisites
title: Prérequis
---

> **IMPORTANT** : La gestion des collecteurs relève uniquement de la responsabilité du client.

## OS

Le collecteur doit être installé sur un serveur dédié et fraîchement installé, sous Alma Linux/RHEL/Oracle Linux 8 ou 9, ou Debian 11.

## Hardware

La machine hôte doit avoir au moins les caractéristiques suivantes :

* Pour traiter des environnements de test ou des petits périmètres (jusqu'à 2000 services avec des contrôles toutes les 5 minutes et 500 services avec des contrôles toutes les minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* Pour traiter des environnements de production (jusqu'à 7000 services avec des contrôles toutes les 5 minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

> Un collecteur peut superviser en moyenne 7000 services actifs. Les vCPU doivent avoir une fréquence avoisinant les 3 GHz.
> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs
> ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

Il est recommandé de partitionner le disque du collecteur pour éviter qu'il ne devienne plein et inutilisable (par exemple, en cas de problème de rétention).
Procédez au partitionnement en suivant les recommandations suivantes :

| Partition                  | Taille                                                                                                     |
|----------------------------|------------------------------------------------------------------------------------------------------------|
| swap                       | 1 à 1.5 la taille totale de la mémoire vive                                                                |
| /                          | au moins 20 Go                                                                                             |
| /var/log                   | au moins 10 Go                                                                                             |
| /var/lib/centreon-broker   | au moins 5 Go                                                                                              |

## Réseau

| Description     | Direction | Protocole  | IP           | Port   |
| --------------- | --------- | ---------- | ------------ | ------ |
| INTERNET        | Sortante  | HTTPS      | *            | 443    |
| NTP (optionnel) | Sortante  | UDP        | TBA          | 123    |

| Source             | Destination                  | Port/Protocole     | Protocole de supervision   |
| ------------------ | ---------------------------- | ------------------ | -------------------------- |
| Serveurs Centreon  | Équipements à superviser     | 80/443 TCP         | API                        |
| Serveurs Centreon  | Base de données à superviser | 3306/1521/1433 TCP | MySQL/Oracle/MSSQL         |

## Autoriser le tafic vers ou en provenance des plages d'IP AWS

Si vous faites du filtrage sur les adresses IP, autorisez les plages d'IP AWS avec lesquelles votre collecteur a besoin d'interagir.

AWS fournit une [liste de leurs plages d'adresses IP](https://ip-ranges.amazonaws.com/ip-ranges.json). Vous pouvez obtenir la liste des adresses IP désirées en utilisant une commande curl. Exemple pour AWS Ireland, utilisant le service EC2 pour IPV6 et IPV4 :

```shell
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.ipv6_prefixes[] | select(.region == "eu-west-1") | select(.service == "EC2") | .ipv6_prefix' 
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.prefixes[] | select(.region == "eu-west-1") | select(.service == "EC2") | .ip_prefix' 
```
