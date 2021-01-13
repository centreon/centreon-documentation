---
id: integrating-pollers
title: Intégrer des pollers dans un cluster Centreon-HA
---

## Obtention des empreintes des nœuds centraux

Le service Gorgone des deux centraux devront être en mesure de se connecter à celui des collecteurs.

* Pour commencer, il faut obtenir la signature de la clé privée de chacun des nœuds centraux :

```bash
wget -O /root/gorgone_key_thumbprint.pl  https://raw.githubusercontent.com/centreon/centreon-gorgone/master/contrib/gorgone_key_thumbprint.pl
perl /root/gorgone_key_thumbprint.pl --key-path /var/lib/centreon-gorgone/.keys/rsakey.priv.pem
```

La commande doit afficher un retour semblable à celui-ci :

```text
2020-09-25 10:47:35 - INFO - File '/var/lib/centreon-gorgone/.keys/rsakey.priv.pem' JWK thumbprint: RsfNibuDdOvzwP75G72rpIKIG2nRhkyGQrQXE4pXa_s
```

* On doit maintenant avoir deux clés, une pour chaque nœud central. Conserver ces clés (ce qui est affiché après `JWK thumbprint:`) pour plus tard.

## Ajout du poller à la configuration

* Ajouter le poller de façon "standard" [en suivant cette procédure avec le protocole ZeroMQ](../../monitoring/monitoring-servers/add-a-poller-to-configuration.html).

* Le fichier `/etc/centreon-gorgone/config.d/40-gorgoned.yaml` doit avoir été réécrit et doit contenir des lignes de la forme suivante :

```yml
    authorized_clients:
    - key: tRsFMBv9X3ScNFMwvG8D652nXMsgEYMb1qsJek-Mns8
```

## Configuration de Gorgone sur le poller

* Modifier ce fichier pour que cette section ressemble à :

```yml
    authorized_clients:
    - key: cle_1_precedemment_generee
    - key: cle_2_precedemment_generee
```

* Il ne reste plus qu'à redémarrer Gorgone :

```bash
systemctl restart gorgoned
```

À ce stade, n'importe lequel des deux nœuds centraux doit pouvoir se connecter au service Gorgone du poller, et lui transmettre les nouvelles configurations engine/broker, redémarrer des services, récupérer des statistiques...

