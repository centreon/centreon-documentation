---
id: experience-monitoring-ip-addresses
title: Les adresses IP d'Experience Monitoring
--- 

## Adresses des sondes

Nos sondes peuvent interroger votre site sur les ports 80 (HTTP) et 443 (HTTPS) ou utiliser le protocole ICMP. Pour la plupart des sites ouverts au public aucun configuration ne sera nécessaire, néanmoins dans d’autres cas des pare-feux ou des protections contre les robots comme Imperva ou reCaptcha peuvent automatiquement bloquer nos visites.

Si vous êtes dans ce cas, alors voici la liste des IPs devant être utilisées pour ajouter Experience Monitoring en liste blanche :

- 18.200.8.204
- 34.241.126.134
- 34.242.201.38
- 34.243.127.23
- 34.248.113.181
- 34.250.75.1
- 34.252.162.102
- 34.255.79.251
- 52.17.157.120
- 52.18.157.52
- 52.19.60.226
- 52.30.194.126
- 52.31.137.223
- 52.48.148.3
- 52.48.151.164
- 52.50.31.122
- 52.51.174.216
- 52.208.14.10
- 52.209.27.6
- 52.210.233.251
- 52.212.161.58
- 52.214.41.253
- 54.78.224.201
- 54.154.70.169
- 54.170.78.117
- 54.170.157.253
- 63.34.122.21
- 63.34.67.195
- 99.81.201.50
- 176.34.232.22
- 185.48.122.159

## Adresses des points de terminaisons pour les agents serveurs

Si vous utilisez les agents serveurs (section “Système” dans Experience Monitoring), alors chacun de vos serveurs envoi à fréquence régulière (une fois par minute) des données à destination de la solution Experience Monitoring.

Il s’agit d’un **trafic sortant** en HTTPS (port 443) et donc assez souvent ouvert par défaut, mais si vos restrictions firewalls sont assez strictes et qu’il est nécessaire d’ajouter une autorisation spécifique pour l’usage d'Experience Monitoring, voici les adresses IP de destination à lister :

- 52.215.166.110
- 52.215.179.235
- 52.215.180.115
