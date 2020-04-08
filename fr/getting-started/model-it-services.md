---
id: model-it-services
title: Model your IT services
---

## Objectif

Centreon BAM est utilisé pour modéliser des services IT et applications
mis à disposition des utilisateurs finaux. Il permet de connaître en
temps réel l'état du service fourni et d'en suivre l'évolution afin
de comparer les résultats à des engagements (SLA) pris auprès des
métier, utilisateurs internes ou externes.

![image](assets/service-mapping/example.png)

## Concepts

Un service IT ou une application, dans Centreon BAM, correspond à un
nouvel indicateur de supervision orienté "métier", appelé "Activité
métier" (Business Activity - BA), à partir d'une agrégation
d'indicateurs unitaires collectés par la supervision appelé indicateurs
ou KPI (KPI: Key Performance Indicators).

Les KPIs sont soit des services au sens Centreon soit une règle logique
prenant entre plusieurs services soit une autre activité métier. Le
nouvel objet créé à partir des KPis est appelé une Business Activity
(BA).

Il est possible d'utiliser des BA en tant que KPI d'autre BA afin de
créer des arbre d'impact et modéliser finement les services IT ou
applications que vous souhaitez analyser.

L'évolution de l'objet BA déterminera une qualité de service (Qos)
correspondant à la qualité rendu par l'application aux utilisateurs de
cette dernière. En s'appuyant sur cette mesure de Qos, on peut définir
les niveaux de fonctionnement la BA et ainsi des indicateurs de niveau
de service (SLA).

En cas de défaillance de la BA, il est possible d'analyser les
dysfonctionnements qui ont conduit à la baisse de la Qos et par
extension la diminution de la SLA.

Ci-dessous un exemple de ce qu'il est possible de modéliser dans
Centreon BAM.

## Paramétrage initial

La construction d'une BA et de ses KPI associés doit être réalisée de
manière *simple* et par étape. L'idéal est de commencer par intégrer les
KPI les plus évidentes, ceux directement liés au fonctionnement général
de la BA puis d'ajouter au fur et à mesure celles qui ont un impact
potentiel sur le fonctionnement global.

Toutes KPI ajouté aux BA doit être initialement supervisé unitairement
par le système de supervision pour connaître son état de fonctionnement.
Il pourra ensuite être intégré aux BA et associé à un poids qui
impactera l'état de la BA. Les poids peuvent avoir un impact
« bloquants », « majeurs », « mineurs », « null » sur la qualité de
service rendu par une BA.

Par exemple si le ping vers un serveur échoue, le poids associé est
bloquant tandis qu'une partition pleine à 95% n'aura qu'un impacte
« mineur », le service est toujours rendu.

Grâce à cette logique de calcul, la qualité de service (QoS: Quality of
Service) produite sera beaucoup plus fidèle à une réalité de
*disponibilité / état dégradé / indisponibilité /* d'une application ou
d'un service IT.

Un exemple de logique permettant de déterminer la QoS d'une application
:

-   Si QoS = 100%, alors l'application/le service IT est disponible
-   Si QoS > 0% & QoS < 100, l'application/le service IT est rendu et
    potentiellement dégradé ou à risque
-   Si QoS = 0, alors l'application/le service IT est indisponible

les seuils de la BA correspondant à cette logique sont : 

-   Seuil dégradé : 99,99% ;
-   Seuil critique : 0%.

Certains cas sont bien entendus différents et les seuils de QoS seront
différents. Cependant de manière générale, lors de la création de
première BA ceux-ci doivent être appliqués.

## Méthode d'implémentation

Le premier point est de créer une liste des indicateurs qui entrent dans
la composition de la BA et de les trier en plusieurs catégories : 

-   Les indicateurs clés dont on sait qu'ils ont un impact bloquant
-   Les indicateurs clés dont on ne sait pas mesurer l'impact

Puis de répartir uniquement les états "*Critique*" des KPI avec des
impacts "*Bloquants*". Cela permettra de rapidement lister et intégrer
l'ensemble des KPIs indispensable au bon fonctionnement de
l'application/du service IT considéré.

## Calibrage des KPI et calcul de la SLA

C'est ensuite lors de l'usage quotidien du produit qu'il sera possible
de consulter l'évolution réelle de la QoS dans le temps et de
visualiser le véritable seuil de QoS en dessous duquel l'usage de
l'application *n'est plus opérationnel*.

Lors d'une situation d'une application très dégradée, voir
indisponible, d'une mise à jour impactant fortement l'application,
d'un accident de production; il sera alors temps d'ajouter de
nouvelles KPI, ou de pondérer les KPI qui étaient jusqu'ici à faible
impact, à la lumière des nouvelles informations mise en évidence.

Concernant l'ajustement des seuils dégradés et critiques de la BA,
prenons pour exemple une courbe de QoS qui oscillerait entre 80% et 100%
avec au final une disponibilité tout à fait bonne. Il est possible que
certains composantes qui provoquent des chutes sans que celles ci soient
réellement représentatives d'un dysfonctionnement. L'administrateur
pourra alors réviser son seuil d'alerte *dégradé* de la BA en le
passant de 99.99% à 80%.

Ainsi les écrans de supervision temps réel des BA en seront allégés.
L'alerte *dégradée* prendra alors réellement tout son sens. De la même
manière, il est possible de constater par la suite que, sans passer en
alerte *critique*, le fonctionnement n'est pas convenable.
L'observation de la QoS peut indiquer un état critique alors que
celle-ci est inférieur à 10%, il sera alors temps de remonter le seuil
*critique* de la BA de 0% à 10%.

*Cette méthode de calcul permet d'affiner et de rendre de plus en plus
pertinente la mesure de la disponibilité, en tirant partie de la valeur
de sa Qos.*

> Il est important de ne pas associer les seuils dégradé et critique
> d'une BA aux valeurs de SLA. Ce sont deux notions différentes.

La valeur finale de la SLA est liée au temps passé dans les états
opérationnels, dégradés/critiques (indisponibilité/disponibilité),
visible dans les écrans de "reporting".

Exemples : 

-   Paramètre de BA dégradé : 80% ; 
-   Paramètre de BA critique : 10% ; 
-   Supervision 24x7 des indicateurs ; 
-   Sur une période de 1 jour, temps passé dans chaque seuil pour la : 
    -   QoS >= dégradé = 23h30 (Opérationnel)
    -   QoS <= critique = 0h10 (Dégradé)
    -   QoS > critique = 0h20 (Critique)

Dans le cas présent, la SLA n'est ni 80%, ni 10% mais : 

-   % de disponibilité & performance optimale ~ 97,917% (Opérationnel)
-   % de disponibilité ~ 0,694% (Dégradé)
-   % d'indisponibilité ~ 1,388% (Critique)
