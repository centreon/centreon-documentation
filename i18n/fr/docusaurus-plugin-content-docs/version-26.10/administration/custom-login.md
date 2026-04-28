---
id: customize-centreon
title: Personnaliser Centreon
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vous pouvez personnaliser certains éléments de votre plateforme Centreon :

- **Page de connexion :** vous pouvez changer l'arrière-plan et le logo, ainsi qu'ajouter un texte.
- **Nom de la plateforme :** vous pouvez définir un nom pour votre plateforme (par exemple **Test**, **Production**). Celui-ci sera affiché dans le bandeau lorsque vous serez connecté.

La personnalisation de votre plateforme Centreon utilise l'extension **Centreon IT Edition Extensions**. Celle-ci est installée par défaut sur votre plateforme.

> **Centreon IT Edition Extensions** est une extension Centreon qui requiert une [licence](../administration/licenses.md) valide.
> Pour plus d'informations, contactez [Centreon](mailto:sales@centreon.com).

## Configurer l'extension

1. Allez à la page **Administration > Personnaliser Centreon**. Les différentes options sont :
   
   - **Nom de la plateforme** : définissez un nom pour la plateforme (par exemple **Test**, **Production**). Ce nom sera visible à la fois sur la page de connexion (à côté du logo) et dans le bandeau une fois que vous serez connecté.
   - **Sélectionnez un logo** : remplacez le logo Centreon sur la page de connexion (mais pas dans le coin supérieur gauche, une fois connecté). Avant de pouvoir sélectionner un logo dans ce champ, vous devez ajouter le fichier aux [médias](./parameters/medias.md) de la plateforme.
   - **Sélectionnez un fond d'écran** : remplacez l'arrière-plan par défaut. Avant de pouvoir sélectionner un arrière-plan dans ce champ, vous devez ajouter le fichier aux [médias](./parameters/medias.md) de la plateforme.
   - **Insérez votre texte de présentation** : entrez un texte à afficher dans la zone de connexion.
   - **Position de votre texte** : définissez où le texte personnalisé sera affiché, s'il est défini (en-dessous du mot **Connexion** ou sous le bouton **Connexion**).

2. Vérifiez l'aspect de votre page de connexion dans le champ **Aperçu** puis cliquez sur **Sauvegarder** lorsque celui-ci vous convient.

## Mettre à jour l'extension

Exécutez la commande suivante pour mettre à jour l'extension :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf update centreon-it-edition-extensions
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf update centreon-it-edition-extensions
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt update && apt install --only-upgrade centreon-it-edition-extensions
```

</TabItem>
</Tabs>

> Pour une mise à jour réussie, assurez-vous que le nom du paquet à mettre à jour est bien correct (`centreon-it-edition-extensions`).
