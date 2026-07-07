---
id: speed-up-website-with-applications-or-server-configuration
title: Accélérez votre site avec applicatifs ou configuration serveurs
--- 

**Décomposition du waiting time**

Le waiting time correspond au temps passé à attendre le serveur (contient le temps passé dans Magento). Experience Monitoring le décompose ensuite en deux étapes grâce au module de profiling que vous avez fait installer par votre intégrateur.

- **Magento Time** : temps pris par Magento pour générer la pageNB : L’optimisation de ce facteur est à réaliser en collaboration avec votre agence (ou votre développeur)
- **Other** : temps de traitement en dehors de l’applicatif MagentoNB : L’optimisation de ce facteur est à réaliser en collaboration avec votre hébergeur dans la plupart des cas

Si le plus gros du temps est passé dans le « Magento time », alors cliquez une nouvelle fois sur « Plus de détails » pour analyser le temps passé par Magento dans chaque fonctionnalité.

**Analyse du code Magento**

Experience Monitoring détaille le temps de génération de la page au sein de Magento en différentes étapes.

- Trouvez la source des optimisations de votre site en commençant par les étapes qui sont les plus consommatrices de temps.
- Vous pouvez zommer sur deux étapes particulières : l'étape de "Chargement de Magento" et l'étape de "Rendu des blocs". Pour cela, cliquez sur les boutons « Plus de détails ».
- Dans cet exemple nous allons zoomer au sein du Layout Rendering Time.

## Focus sur les blocs Magento

Experience Monitoring identifie automatiquement les blocs du code Magento représentant le plus de temps ou bien ayant représenté la plus grande variation.

Sélectionnez les blocs qui vous intéressent (de préférence les blocs qui ont été les plus longs à se générer, soit en haut de la liste) et cliquez sur « Voir les détails des blocs ».

Chaque bloc peut-être analysé/comparé sous forme de graphiques afin d’en constater l’évolution au fil du temps (la timeline est ici intéressante pour constater la possible récurrence d’un problème).
