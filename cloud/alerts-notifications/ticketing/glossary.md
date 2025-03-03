---
id: glossary
title: Glossaire
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#### rule

Une règle open ticket sert à configurer le comportement que le module open ticket va avoir lorsqu'il ouvre des tickets ou les ferme.

#### provider

Un provider est un connecteur du module open ticket qui permet de gérer la communication entre Centreon et les outils ITSM.

#### Mapping arguments

Les "Mapping arguments" sont une liste d'information qui seront transmises à l'outil ITSM. Ils sont composés de deux éléments. 

- Un "argument" qui correspond généralement à un champ de l'outil ITSM.
- Une valeur, souvent de la forme `{$select.itsm_info.value}`. Information qui fait référence à une [**list**](#lists).

#### Lists

Les "lists" servent à définir la provenance des données qui seront mises à disposition des [**Mapping arguments**](#mapping-arguments). On retrouve trois types de données :

- Celles en provenance de l'outil ITSM (par exemple une liste de catégories ITSM)
- Celles en provenance de Centreon (par exemple des groupes d'hôtes)
- Celles définies par l'utilisateur directement dans la [règle open ticket](#rule) qui sont configurées via les [**custom lists**](#custom-lists)

#### Custom lists

Les "custom lists" sont des listes de valeurs possibles pour un champ de l'outil ITSM. Elles sont généralement renseignées dans les cas suivant

- ces valeurs ne peuvent se récupérer depuis l'outil ITSM et sont donc configurées directement dans la règle open ticket
- simplification du module open ticket lorsqu'une valeur unique et/ou une paire de valeurs seulement seront utilisées (exemple: le compte utilisateur qui sera indiqué comme créateur du ticket)

