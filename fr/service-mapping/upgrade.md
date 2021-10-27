---
id: upgrade
title: Monter de version l'extension
---

> Si vous mettez à jour d'une version inférieure à 18.10 vers une version
> supérieure à 18.10, une nouvelle license doit être récupérée auprès du
> support Centreon.

**Lorsque vous mettez à jour versions une nouvelle version majeure ou
mineure (c'est à dire version A.B.x avec A ou B qui évolue), contactez
le support pour récupérer l'adresse du nouveau dépôt**

## Prérequis

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.html#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Mise à jour du paquet

Afin de mettre à jour le module **Centreon BAM**, lancer la commande
ci-dessous :

``` shell
yum update centreon-bam-server
```

## Mise à jour de l'interface

Se connecter à l'interface web de Centreon et se rendre dans le menu
`Administration > Extensions > Gestionnaire`.

Un bouton orange de mise à jour est visible et signale qu'une mise à
jour est disponible, cliquez dessus pour mettre à jour le module, faire
de même pour le widget.
