---
id: licenses
title: Licences
---

## Types de licences

Selon votre [édition Centreon](https://www.centreon.com/editions/), votre licence peut être :
- hors ligne : gérée avec des fichiers de licence
- en ligne (abonnement) : gérée avec un jeton.

## Voir les modules soumis à licence

Allez à la page **Administration > Extensions > Gestionnaire**. Tous les modules installés sur votre plateforme ont une bordure verte et une coche verte dans le coin supérieur droit. Les modules nécessitant une licence ont un bandeau coloré en bas (rouge si vous n'avez pas de licence valide, vert si vous en avez une).

![image](../assets/administration/licenses.png)

Les modules suivants doivent être installés séparément et nécessitent une licence valide.

- [Plugin Packs](https://docs.centreon.com/current/en/monitoring/pluginpacks.html#installation)
- [Autodiscovery](https://docs.centreon.com/current/en/monitoring/discovery/installation.html)
- [Anomaly detection](https://docs.centreon.com/current/en/monitoring/anomaly-detection.html)
- [BAM](https://docs.centreon.com/current/en/service-mapping/install.html)
- [MAP](https://docs.centreon.com/current/en/graph-views/install.html)
- [MBI](https://docs.centreon.com/current/en/reporting/introduction.html)

## Ajouter une licence

### Licences hors ligne

1. Pour demander votre licence:

    1. Allez à la page **Administration > Extensions > Gestionnaire**.

    2. Cliquez sur **Récupérer l'empreinte**.

    3. Collez l'empreinte dans un email à notre équipe support pour demander votre licence.

2. Une fois votre licence reçue, à la page **Administration > Extensions > Gestionnaire**, cliquez sur **Télécharger une licence**.

5. Naviguez jusqu'au fichier de licence, puis cliquez sur **OK**. La licence est appliquée et la date de validité de la licence est indiquée dans l'encadré de chaque module.

    ![image](../assets/administration/license_valid.png)

6. Si vous avez plusieurs licences à ajouter (par exemple pour BAM, MBI...), répétez les étapes précédentes jusqu'à ce que vous ayez téléchargé tous les fichiers de licence.

### Licences en ligne

Pour utiliser une licence en ligne, votre plateforme Centreon doit être connectée à internet.

1. Munissez-vous de votre jeton de licence (fourni par notre équipe support).

2. Allez à la page **Administration > Extensions > Gestionnaire**.

3. Cliquez sur **Ajouter Token**. Une fenêtre popup s'ouvre.

4. Collez votre jeton dans la fenêtre popup, puis cliquez sur **Ajouter**. 

    - Si votre jeton contient une seule licence, une coche s'affiche à côté du bouton **Ajouter**.

    - Si votre jeton contient plusieurs licences, choisissez la licence désirée puis cliquez sur **Choisir**.

    Appuyez sur **Esc** pour fermer la popup. La licence est appliquée et la date de validité de la licence est indiquée dans l'encadré de chaque module.

        ![image](../assets/administration/license_valid.png)

        Le bouton **Ajouter Token** devient un bouton **Voir la licence**.

## Licence gratuite IT-100

La licence IT-100 est une licence en ligne. Voir le chapitre [Mettre en place sa solution gratuite IT-100](https://docs.centreon.com/current/fr/getting-started/IT100.html).

## Troubleshooting

### No valid file uploaded

![image](../assets/administration/license_not_valid.png)

Vérifiez le contenu du dossier suivant :

```
ll /etc/centreon/licenses.d
```
Si le dossier contient déjà des licences avec des droits autres que apache/apache, supprimez-les ou changez-en les droits pour qu'elles puissent être écrasées par les nouvelles :

```
chown apache:apache /etc/centreon/license.d/*
chmod 644 /etc/centreon/license.d/*
```

### Your EPP license is not valid

* Vérifiez que l'empreinte du serveur central (récupérable à la page **Administration > Extensions > Gestionnaire**) correspond à celui renseigné dans la licence.

    ```
    less /etc/centreon/license.d/epp.license
    ```

* Vérifiez que le nombre d'hôtes enregistrés est inférieur à celui prévu par votre licence :

    ```
    #mysql centreon
    SELECT COUNT(*) FROM host WHERE host_register='1';
    ```