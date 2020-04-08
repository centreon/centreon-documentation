---
id: analyze-resources-availability
title: Analyser la disponibilité des resources
---

Vous débutez avec Centreon MBI et souhaitez extraire vos premières
statistiques ? Ce tutoriel est fait pour vous.

Grâce à lui, apprenez à utiliser le produit et générez votre premier
rapport.

Le principe est simple :

-   Vous déterminez votre besoin
-   Vous sélectionnez parmi les modèles de rapports disponibles, celui
    qui répond à votre besoin d'analyse
-   Vous configurez votre rapport via l'ajout d'une "tâche planifiée"
-   Vous récupérer votre rapport via l'interface

## Définition du besoin

Partons d'un besoin assez simple qui est souvent le point de départ de
l'exploitation de Centreon MBI : nous souhaitons suivre la disponibilité
de nos ressources. Dans notre cas, le responsable du réseau Europe nous
remonte que les routeurs semblent parfois injoignables. Pour répondre à
son besoin d'analyse, nous allons récupérer la disponibilité de nos
routeurs qui se situent en Europe. Le besoin est établi, passons à
l'étape suivante.

## Sélection du modèle de rapport

Chaque modèle de rapport répond à un besoin précis. Dans notre exemple,
nous souhaitons analyser la disponibilité de nos routeurs en Europe.
Pour cela, parcourons la page listant
`les modèles de rapports disponibles <reports_available>`{.interpreted-text
role="ref"} et sélectionnons le modèle de rapport
Hostgroup-Host-Availability-List. Ce modèle affiche sous forme de liste,
la disponibilité des hôtes d'un groupe. Dans notre exemple, les hôtes
sont nos routeurs.

## Configuration du rapport via l'ajout d'une "tâche planifiée"

Dans Centreon MBI, la configuration d'un rapport correspond à la
création d'une tâche planifiée. Allez dans le menu *Reporting →
Monitoring Business Intelligence → Configuration \| Tâches planifiées*
et cliquez sur "Ajouter" :

![image](images/1_FR_createJob.png)

Le formulaire de création d'une nouvelle tâche planifiée s'ouvre :

![image](images/2_FR_createJob_FirstTab.png)

Dans ce premier onglet, partie *Configuration de la tâche planifiée*,
donnez un nom à votre tâche. Ce nom correspond au nom du rapport qui
sera généré.

N.B. : Vous pourrez avoir rapidement plusieurs dizaines de tâches
planifiées configurées, il est donc très important de définir des règles
de nommage.

Choisissez ensuite :

-   le modèle de rapport sur lequel vous vous basez, dans notre exemple
    *Hostgroup-Host-Availability-List*
-   la langue : Français
-   le format de sortie souhaité : PDF

![image](images/createJob_ListReport.png)

Puis rattachez le rapport à un groupe. C'est une obligation liée aux
droits et profils utilisateurs.

Dans la partie Paramètres d'ordonnancement, choisissez le mode de
planification. Vous pouvez choisir une exécution immédiate ou une
exécution planifiée. Dans notre exemple, il est préférable d'utiliser
l'exécution immédiate afin de visualiser directement le résultat de la
génération de la tâche planifiée.

Dans la configuration ci-dessous, le rapport sera généré immédiatement,
en français, sur les données du mois dernier :

![image](images/3_FR_createJob_FirstTab_Filled.png)

Une fois l'onglet de configuration renseigné, nous pouvons passer à
l'onglet "Paramètres du rapports". Cet onglet permet de choisir le
contexte sur lequel le rapport sera généré. Sur cet exemple, nous
choisissons de lister la disponibilité des hôtes du groupe "Routers" qui
se situent en "Europe".

![image](images/4_FR_createJob_Parameter.png)

N.B. : Pour la plupart des modèles de rapports, il est possible de
choisir la plage horaire dans laquelle vous souhaitez générer le
rapport.

Nous choisissons d'analyser la disponibilité sur la plage 24×7. Pour
être visible dans le listing, elle doit obligatoirement et préalablement
être définie dans Centreon et configurée dans les options générales de
Centreon MBI, dans l'onglet "Options de l'ETL".

Enfin, sélectionnez votre logo pour personnaliser votre rapport. Il est
possible d'en rajouter via le menu "Logo" de Centreon MBI. Ces derniers
seront alors visibles lors du paramétrage d'une tâche planifiée.

En cliquant sur "Enregistrer", le rapport est planifié selon le mode
choisi, dans notre cas, immédiatement. Sa génération va démarrer.

![image](images/5_FR_generateJob.png)

Si vous ne voyez pas la tâche planifiée dans la liste, contrôlez les
filtres s'appliquant à la page. Sélectionnez "Tous" si vous voulez être
sûr de voir toutes vos tâches planifiées.

![image](images/6_FR_generateJob_Filter.png)

## Récupération du rapport généré

Une fois la tâche terminée, rendez-vous dans le menu *Report view*.
Cette page contient la liste de tous les rapports générés.

Pour visualiser votre rapport, il vous suffit de le télécharger en
cliquant sur l'icône du format de sortie disponible, dans notre cas,
PDF.

![image](images/7_FR_reportView.png)

S'ouvre alors le rapport de disponibilité des routeurs sur le périmètre
Europe :

![image](images/8_FR_availabilityReport.png)

Bravo ! Vous savez maintenant comment extraire les statistiques de la
base de reporting.

Vous voulez générez d'autres rapports ? Parcourez la liste des rapports
disponibles, déterminer ceux qui seront utiles pour suivre et analyser
la disponibilité et la performance de votre SI, et lancez-vous !
