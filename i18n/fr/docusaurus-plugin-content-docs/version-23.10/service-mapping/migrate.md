---
id: migrate
title: Migrer l'extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Si vous mettez à jour d'une version inférieure à 18.10 vers une version
> supérieure à 18.10, une nouvelle licence doit être récupérée auprès du
> support Centreon.

> Lorsque vous mettez à jour versions une nouvelle version majeure ou
> mineure (c'est à dire version A.B.x avec A ou B qui évolue), contactez
> le support pour récupérer l'adresse du nouveau dépôt.

## Mise à jour du paquet

Afin de mettre à jour le module **Centreon BAM**, lancer la commande
ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade centreon-bam-server
```

</TabItem>
</Tabs>

## Mise à jour de l'interface

Se connecter à l'interface web de Centreon et se rendre dans le menu
`Administration > Extensions > Gestionnaire`.

Un bouton orange de mise à jour est visible et signale qu'une mise à
jour est disponible, cliquez dessus pour mettre à jour le module, faire
de même pour le widget.
