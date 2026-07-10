---
id: enable-disable-scenario-or-alert-via-api
title: Automatiser l’activation/désactivation d’un scénario ou d’une alerte par API
--- 

## Préambule

Dans certains cas, il peut être utile de modifier la configuration d'Experience Monitoring de façon automatisée. Les cas d’usage sont très nombreux, mais les plus fréquents vont être :

- de désactiver ou réactiver le fonctionnement d’un scénario (typiquement pour le désactiver lors d’une mise en maintenance du site, afin d’exclure la plage de maintenance des statistiques d’indisponibilité)
- de modifier une variable à l’intérieur de la configuration du scénario (par exemple pour changer le parcours suite à une mise en production d’une nouvelle version du site), ou bien pour modifier l’adresse email à utiliser dans un scénario de création de compte utilisateur.

## Exemple avec une requête REST simple

Dans Experience Monitoring, l’ensemble des fonctionnalités sont accessibles par API, il est donc possible d’effectuer des requêtes vers Experience Monitoring avec des outils comme “*curl*” ou “*wget*” en spécifiant l’ID du site, l’ID du Parcours Utilisateurs ainsi que les paramètres d’authentification (*x-csrf-token* et *_qm3k_session*).

Exemple de requête REST pour désactiver un scénario dont l’URL du panel de modification dans Experience Monitoring est https://app.quanta.io/app/settings/sites/29274/user-journey?ids=2913 :

```bash
curl "https://app.quanta.io/api/sites/29274/uj/journeys/2913" -X 'PUT' \
  -H "authority: app.quanta.io" \
  -H "accept: application/json" \
  -H "accept-language: fr-FR,fr;q=0.9" \
  -H "x-csrf-token: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX=" \
  -H "content-type: application/json;charset=UTF-8" \
  -H "cookie: _qm3k_session=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" \
  --data-raw '{"user_journey":{id:"**29274**","enabled":**false**}}'
```

## Mise en oeuvre en script Shell

Pour + de souplesse, nous proposons ici un exemple de script Shell qui permet d’effectuer ces différents types de modifications.

```bash
#!/bin/bash

# Définir les variables CSRF-Token et _qm3k_session
csrf_token="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX="
qm3k_session="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# Fonction pour afficher l'aide du script
function show_help {
  echo "Utilisation : ./modif-uj.sh <id_site> <id_journey> [--set-variable <nom_variable>=<valeur>] [--enable <valeur>]"
  echo "Exemple : ./modif-uj.sh 4028 2830 --set-variable example=42 --enable true"
}

# Vérifier si les IDs du site et du Journey sont passés en paramètre
if [ $# -lt 2 ]; then
  show_help
  exit 1
fi

# Récupérer les IDs du site et du Journey
site_id="$1"
journey_id="$2"
shift 2

# Traiter les paramètres en ligne de commande
while [[ $# -gt 0 ]]; do
  case $1 in
    --set-variable)
      if [[ "$2" =~ ^[^=]+=.+$ ]]; then
        variable_name="${2%%=*}"
        variable_value="${2#*=}"
      fi
      shift
      ;;
    --enable)
      enable_value="$2"
      shift
      ;;
    *)
      show_help
      exit 1
      ;;
  esac
  shift
done

# Définir l'URL de l'API
api_url="https://app.quanta.io/api/sites/$site_id/uj/journeys/$journey_id"

# Construire le corps de la requête "request_body" en fonction des paramètres
request_body="{\"user_journey\":{\"id\":$journey_id"
if [ "$enable_value" == "true" ]; then
  request_body+=",\"enabled\":true"
elif [ "$enable_value" == "false" ]; then
  request_body+=",\"enabled\":false"
fi
if [ -n "${variable_name+set}" ]; then
    request_body+=",\"variables\":[{\"name\":\"$variable_name\",\"value\":\"$variable_value\"}]"
fi
request_body+='}}'

# Effectuer la requête PUT à l'API en utilisant curl
curl "$api_url" -X 'PUT' \
  -H "authority: app.quanta.io" \
  -H "accept: application/json" \
  -H "accept-language: fr-FR,fr;q=0.9" \
  -H "x-csrf-token: $csrf_token" \
  -H "content-type: application/json;charset=UTF-8" \
  -H "cookie: _qm3k_session=$qm3k_session" \
  --data-raw "$request_body"
```

## Token d’authentification

Ces requêtes ayant besoin des droits d’administration sur le site concerné dans Experience Monitoring, il sera nécessaire d’utiliser des tokens d’authentification et de les spécifier en haut du script : 

```bash
# Définir les variables CSRF-Token et _qm3k_session
csrf_token="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX="
qm3k_session="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Pour récupérer ces paramètres, il suffit d’ouvrir la console “Network” dans Chrome au moment du chargement d’une page de l’interface Experience Monitoring, puis d’aller chercher les paramètres **csrf_token** et **qm3k_session** dans la requête HTTP effectuée par le navigateur web, comme ici :

![image](../../assets/configuration/advanced-config/scenario-or-alert-via-api-1.png)

Pour assurer une bonne sécurité des données du site dans Experience Monitoring, il est fortement conseillé de créer un compte utilisateur dédié à cet usage dans Experience Monitoring.

Par exemple : monlogin+api@mondomaine.com

## Exemple d’utilisation du script

Dans notre script d’exemple les 2 premiers chiffres à passer en paramètre correspondent à l’ID du site, et l’ID du Parcours Utilisateur. Ils sont tous les deux présents dans l’URL d’accès au scénario quand on accède à la configuration du scénario en question dans Experience Monitoring.

Une fois ces paramètres récupérés, on utilise le script de modification automatique comme ceci :

```bash
$ ./modif-uj.sh 29274 2913 --enable false
{"success":"Journey successfully updated!",[...]
$ ./modif-uj.sh 29274 2913 --set-variable variable-to-change=50 --enable true
{"success":"Journey successfully updated!",[...]
$
```

## Pour aller plus loin

La même logique s’applique à l’ensemble des fonctionnalités d'Experience Monitoring, qui sont toutes accessibles par API. N’hésitez pas à observer le fonctionnement des requêtes et à reproduire une variante de ce même script selon vos besoins.
