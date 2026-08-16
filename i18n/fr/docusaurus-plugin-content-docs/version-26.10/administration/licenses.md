---
id: licenses
title: Licences
description: "Obtenir, ajouter et dépanner les licences Centreon en ligne ou hors ligne"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Comment obtenir une licence?

* Vous pouvez demander votre jeton pour [l'édition gratuite IT-100](../getting-started/it100.md) sur notre site web.
* Si vous avez acheté une licence, demandez vos fichiers de licence à notre équipe [support](https://support.centreon.com).

## Types de licences

Selon votre [édition Centreon](https://www.centreon.com/fr/editions-centreon/), votre licence peut être :

- en ligne : gérée avec un jeton. Votre plateforme Centreon doit être connectée à internet.
- hors ligne : gérée avec des fichiers de licence

## Quels modules demandent une licence?

Les modules suivants doivent être installés séparément et nécessitent une licence valide.

- [connecteurs de supervision](../monitoring/pluginpacks.md#installer-le-pack)
- [Auto Discovery](../monitoring/discovery/installation.md)
- [Anomaly Detection](../monitoring/anomaly-detection.md)
- [Service mapping (BAM)](../service-mapping/install.md)
- [Vues graphiques (MAP)](../graph-views/introduction-map.md)
- [Reporting (MBI)](../reporting/installation.md)

## Voir les modules soumis à licence

Allez à la page **Administration > Extensions > Gestionnaire**. Tous les modules installés sur votre plateforme ont un bouton vert avec une coche blanche dedans. Les modules nécessitant une licence ont un bandeau coloré en bas (rouge si vous n'avez pas de licence valide, vert si vous en avez une).

![image](../assets/administration/licenses.png)

## Ajouter une licence

<Tabs groupId="sync" queryString>
<TabItem value="Licences en ligne" label="Licences en ligne">

> Consultez les [tableaux des flux réseau](../installation/technical.md#tableaux-des-flux-réseau) pour l'intégration de votre plateforme de supervision.

Pour utiliser une licence en ligne, votre plateforme Centreon doit être connectée à internet.

#### Vérifier la connexion à internet

Assurez-vous que votre plateforme Centreon est autorisée à accéder à internet :

- Vérifier que la machine peut accéder à cette URL : https://api.imp.centreon.com

- Ajouter un serveur proxy si besoin :
  - Allez à la page **Administration > Paramètres > Centreon UI**, puis **Options de proxy**.
  - Cliquez sur **Tester la connexion Internet**. Le message "Connexion réussie" doit apparaître.

1. Munissez-vous de votre jeton de licence (fourni par notre équipe support).

2. Allez à la page **Administration > Extensions > Gestionnaire**.

3. Cliquez sur **Ajouter Token**. Une fenêtre popup s'ouvre.

4. Collez votre jeton dans la fenêtre popup, puis cliquez sur **Ajouter**. 

    - Si votre jeton contient une seule licence, un message de confirmation apparaît.

    - Si votre jeton contient plusieurs licences, choisissez la licence désirée puis cliquez sur **Choisir**.

    Appuyez sur **Esc** pour fermer la popup. La licence est appliquée et la date de validité de la licence est indiquée dans l'encadré de chaque module.

    ![image](../assets/administration/license_valid.png)

    Le bouton **Ajouter Token** devient un bouton **Voir la licence**.

</TabItem>
<TabItem value="Licences hors ligne" label="Licences hors ligne">

1. Pour demander votre licence:

    1. Allez à la page **Administration > Extensions > Gestionnaire**.

    2. Cliquez sur **Récupérer l'empreinte**.

    3. Collez l'empreinte dans un email à notre équipe [support](mailto:support@centreon.com) pour demander votre licence.

2. Une fois votre licence reçue, à la page **Administration > Extensions > Gestionnaire**, cliquez sur **Télécharger une licence**.

5. Naviguez jusqu'au fichier de licence, puis cliquez sur **OK**. La licence est appliquée et la date de validité de la licence est indiquée dans l'encadré de chaque module.

    ![image](../assets/administration/license_valid.png)

6. Si vous avez plusieurs licences à ajouter (par exemple pour BAM, MBI...), répétez les étapes précédentes jusqu'à ce que vous ayez téléchargé tous les fichiers de licence.

</TabItem>
</Tabs>

## Licence gratuite IT-100

La licence IT-100 est une licence en ligne. Voir le chapitre [Mettre en place sa solution gratuite IT-100](../getting-started/it100.md).

## Dépanner les erreurs sur les licences

### "No valid file uploaded"

![image](../assets/administration/license_not_valid.png)

Vérifiez le contenu du dossier suivant :

```shell
ls  -lah /etc/centreon/license.d/
```
Si le dossier contient déjà des licences avec des droits autres que apache/apache, supprimez-les ou changez-en les droits pour qu'elles puissent être écrasées par les nouvelles :

```shell
chown apache:apache /etc/centreon/license.d/*
chmod 640 /etc/centreon/license.d/*
```

### "Your EPP license is not valid"

* Vérifiez que l'empreinte du serveur central (récupérable à la page **Administration > Extensions > Gestionnaire**) correspond à celui renseigné dans la licence.

    ```shell
    less /etc/centreon/license.d/epp.license
    ```

* Vérifiez que le nombre d'hôtes enregistrés est inférieur à celui prévu par votre licence. Utilisez la commande suivante :

  ```sql
  SELECT COUNT(*) FROM centreon.host WHERE host_register='1';
  ```

  > Les hôtes désactivés sont pris en compte par la licence. Assurez-vous que le total des hôtes existants (activés + désactivés) est inférieur à la limite fixée par votre licence.

### Licence expirée ou limite d'hôtes dépassée

Lorsqu'une licence expire ou que le nombre d'hôtes sur votre plateforme dépasse la limite autorisée par la licence, certains modules cessent de fonctionner correctement. Cette section explique comment identifier le problème et quel comportement anticiper.

#### Vérifier le nombre d'hôtes enregistrés

Votre licence comptabilise tous les hôtes présents dans la base de données, y compris ceux qui sont désactivés. Pour connaître le nombre total d'hôtes enregistrés, exécutez la requête SQL suivante sur le serveur central :

```sql
SELECT COUNT(*) FROM centreon.host WHERE host_register='1';
```

Le résultat doit être strictement inférieur à la limite de votre licence. Si le nombre d'hôtes dépasse cette limite, vous devez soit supprimer les hôtes inutilisés, soit mettre à niveau votre licence vers une limite supérieure.

> Les hôtes désactivés sont pris en compte par la licence. Assurez-vous que le nombre total d'hôtes existants (activés + désactivés) reste inférieur à la limite définie par votre licence.

#### Vérifier la limite de votre licence

Les fichiers de licence sont stockés dans le répertoire suivant :

```shell
/etc/centreon/license.d/
```

Pour afficher la limite d'hôtes définie dans votre licence, examinez le fichier de licence concerné :

```shell
less /etc/centreon/license.d/epp.license
```

Le fichier contient des informations sur le nombre maximal d'hôtes autorisés par votre licence.

#### Comportement des modules lorsque la licence n'est pas valide

Lorsque votre licence est expirée ou que la limite d'hôtes est dépassée, les comportements suivants sont observés dans l'interface :

| Module | Comportement |
|---|---|
| Service Mapping (BAM) | Affiche le message : "Oops! License Invalid or Expired" |
| Vues graphiques (MAP) | Affiche une page blanche, ou le message : "Map server license is not valid, please contact Centreon support service" |
| Monitoring Connectors (EPP) | Affiche le message : "Your EPP License is not valid" |
| Auto Discovery (Host/Service Discovery) | Affiche le message : "Oops! License Invalid or Expired" |

> Lorsque le nombre d'hôtes de la licence est dépassé, il est toujours possible d'ajouter de nouveaux hôtes, mais ceux-ci ne pourront plus hériter des modèles d'hôtes issues des connecteurs de supervision.

#### Résoudre le problème

Pour rétablir le fonctionnement normal des modules :

* Si votre licence est expirée : contactez l'équipe support Centreon pour la renouveler.
* Si la limite d'hôtes est dépassée, vous pouvez :
   * Supprimer les hôtes inutilisés (y compris ceux qui sont désactivés) afin de ramener le total sous la limite de la licence.
   * Mettre à niveau votre licence vers une limite d'hôtes supérieure en contactant votre représentant commercial.
