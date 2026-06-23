---
id: performing-load-tests
title: Tests de charge
---

Les tests de charge génèrent un trafic important sur votre site afin d'évaluer sa réponse. Un [parcours utilisateur](../configuration/user-journey/user-journey-intro.md) fonctionnel est requis, car le trafic généré par le test naviguera sur le site en suivant le parcours utilisateur sélectionné.

> Notez que les tests de charge génèrent du trafic réel sur le site web, ce qui peut impacter les utilisateurs en direct s'ils sont effectués sur un site en production. Les tests de charge peuvent également être réalisés dans des environnements de test.

![image](../assets/getting-started/load-tests-1.png)

## Prérequis

- Un parcours utilisateur configuré
- Un test de charge disponible. Contactez votre représentant commercial pour acquérir des tests de charge.

## Exécuter un test de charge

1. Depuis la page **Tests de charge**, cliquez sur le bouton **Lancer un test de charge**.

2. Sélectionnez le parcours utilisateur qui sera utilisé pour le test et indiquez si le test doit attendre l'événement **onLoad**. Seules les pages incluses dans le parcours utilisateur seront testées.

3. Donnez un nom au test.

4. Déterminez si le test doit être lancé dès que possible ou planifié pour une date ultérieure.

5. Déterminez la durée minimale consacrée à chaque étape du test.

6. Déterminez le nombre d'utilisateurs simultanés qui seront simulés à différents intervalles depuis le début du test. Vous pouvez ajouter des étapes supplémentaires pour mieux contrôler la montée en charge des utilisateurs simultanés.
Notez que le nombre d'utilisateurs simultanés créés pour chaque étape doit toujours être supérieur à celui de l'étape précédente.

7. Définissez les conditions d'échec qui détermineront l'arrêt automatique du test. Les tests peuvent également être arrêtés manuellement.

8. Cochez les deux cases de confirmation et lancez le test.
