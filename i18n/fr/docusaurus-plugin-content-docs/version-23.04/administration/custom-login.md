---
id: customize-centreon
title: Personnaliser Centreon
---

Cette partie couvre la personnalisation de la page de connexion et l'ajout d'un nom pour votre plateforme visible dans le bandeau.

La fonctionnalité de "Personnalisation de Centreon" se base sur l'extension appellée **Centreon IT Edition Extensions**.

> Centreon  IT Edition Extensions est une extension Centreon qui requiert [license](../administration/licenses.md) valide.
> Pour plus d'information, contactez [Centreon](mailto:sales@centreon.com).

## Installation

### Installation du paquet

Ajouter le dépôt Centreon Business repository, vous pouvez le trouver sur le
[portal support](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

Et installer le paquet en exécutant la commande ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 or 9" label="Alma / RHEL / Oracle Linux">

``` shell
dnf install centreon-it-edition-extensions
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt install centreon-it-edition-extensions
```

</TabItem>
</Tabs>

### Installation sur l'interface

Se rendre dans le menu **Administration > Extensions > Gestionnaire** et cliquez sur le bouton d'installation des modules suivantes :

- License Manager (si celui-ci n'est pas déjà installé)
- IT Edition Extensions

## Configuration

Depuis le menu **Administration > Personnaliser Centreon**.

Les différentes options sont :
- **Nom de la plate-forme**: définit le nom de la plateforme. Celui-ci sera visible à la fois sur la page de connexion et dans le bandeau.
- **Sélectionnez un logo**: offre la possibilité de sélectionner un [média existant](./parameters/medias.md)
  afin de remplacer le logo **Centreon** par défaut.
- **Sélectionnez un fond d'écran**: offre la possibilité de sélectionner un [média existant](./parameters/medias.md)
  afin de remplacer l'arrière-plan par défaut de **Centreon**.
- **Position de votre texte**: définit où le texte personnalisé sera affiché, s'il est défini.
- **Aperçu**: permet de prévisualiser le résultat avant d'enregistrer les paramètres.
