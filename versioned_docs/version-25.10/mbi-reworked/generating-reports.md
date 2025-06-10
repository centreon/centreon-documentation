---
id: generating-reports
title: Generating reports
---

La première chose que fait la procédure est de me dire ce qu’est un job. On devrait d’abord introduire le concept en expliquant que c’est bien lié à mbi, sinon j’ai l’impression que la page sur laquelle je suis n’est pas forcément liée à mbi.


# Jobs
Report templates comme le nouveau terme
Les informations ici seraient plus pertinentes données au fur et à mesure qu’elles deviennent nécessaires.

Reporting > MBI > jobs > add
Configuration
Je ne vois pas à quoi sert la ligne “state”

Report parameters
Page très générale par nécessité mais peu claire
Report publication
Aucune info sur comment ajouter des publication rules
Spécifier que le job détermine la fréquence des rapports, pas les publication rules. Actuellement, La partie "envoi de reports MBI par mail" est à revoir, notamment sur l'aspect fréquence d'envoi.
La fréquence d'envoi est basée sur la fréquence de génération du rapport (daily, weekly ou monthly). Le rapport est automatiquement envoyé à chaque fois qu’il est généré (à vérifier).
Tuning  
On me dit dans la doc que je peux modifier le thème par défaut sur un autre écran. Ça m’a donné l’impression que je pouvais créer ma propre palette de couleurs pour les rapports alors que c’est juste pour choisir un des thèmes existants comme celui à utiliser par défaut.

Aucune idée de ce que sont les jobs groups. On penserait que ce sont des ensembles de jobs comme pour les host groups ou contact groups mais je dois les ajouter dans un job pour qu’il soit valide


# Publication tab

used to apply the publication rules which in turn determine what is done with the generated report (i.e. who it is sent to and how)