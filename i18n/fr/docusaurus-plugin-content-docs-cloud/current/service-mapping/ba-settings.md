---
id: ba-settings
title: Paramètres
---

## Paramètres par défaut

Le module **Centreon BAM** offre une série d'option permettant de
déployer vos BA plus facilement et d'avoir une visualisation
personnalisée de vos graphiques.

Les **Paramètres par défaut** ont pour but de pré-remplir certains des champs
de saisie lors de l'ajout de nouvelles BA et de nouveaux indicateurs.

Ils sont configurable depuis le menu
`Configuration > Activités métiers > Paramètres par défaut`.

### Paramètres d'impact

Les valeurs renseignées ici correspondent aux valeurs associées aux
impacts Faible, Mineur,Majeur,Non fonctionnel,Bloquant. Ces valeurs
prédéfinies des impacts sont utilisées lors de la définition de
l'impact des différents status des indicateurs en mode "basique".

![image](../assets/service-mapping/guide/list_impacts_basic.png)

Chaque impacts correspond à un impact en pourcentage.

![image](../assets/service-mapping/guide/impacts_configuration.png)

### Impacts des activités métier et règles booléennes

Ces valeurs sont utilisées lors de la déclaration d'un indicateur de
type "Activité métier" et "Règle booléenne". Elles permettent de
pré-remplir les champs lors de la bascule de la configuration en mode
"Avancé".

![image](../assets/service-mapping/guide/impacts_ba_boolean.png)

### Paramètres des activités métier

Les paramètres ci-dessous permettent de définir les valeurs par défaut
que prendront les activité métiers.

![image](../assets/service-mapping/guide/default_ba_parameters.png)

| Colonne                 | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Seuil dégradé           | Seuil « Warning » : Correspond à un état dégradé de la BA.   |
| Seuil non fonctionnel   | Seuil « Critical » : Correspond à un état critique de la BA. |
| Période du rapport      | Période de reporting par défaut de la BA BA                                                            |
| Période de notification | Option actuellement inactive                                                          |
| Groupes de contact      | Option actuellement inactive                                                        |
| Intervalle entre deux   | Option actuellement inactive                                                           |

## Paramètres utilisateur

Les **Paramètres utilisateur** sont des options personnalisées qui sont
propres à chaque profil d'utilisateur, et peuvent être configurées dans
le menu **Configuration > Activités métiers > Paramètres utilisateurs**.

### Vue d'ensemble personnalisée

Par défaut, le module Centreon BAM affiche la console de supervision
avec toutes les BA autorisées. L'utilisateur a cependant la possibilité
de composer sa propre vue d'ensemble en y ajoutant les BA de son choix,
parmi celles qui sont autorisées.

![image](../assets/service-mapping/guide/user_custom.png)
