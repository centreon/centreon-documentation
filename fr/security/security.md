---
id: security
title: La sécurité chez Centreon
---

La plateforme Centreon est utilisée par des entreprises du monde entier pour éliminer les pannes
informatiques et leur coût et aligner leurs opérations informatiques sur leurs objectifs de croissance
et d'excellence opérationnelle.
Centreon s'engage pour la sécurité des données sur lesquelles elles s'appuient et améliore en
permanence les politiques, les processus et les produits pour répondre aux normes les plus élevées.
Cette page regroupe les informations si vous avez besoin d’en savoir plus.

## La sécurité “by design”

### Process de développement sécurisé

La sécurité « by design » (dès la conception) est une priorité tout au long du processus de
développement de Centreon. Elle garantit que les produits et services sont conçus dès le départ pour
répondre aux exigences de sécurité des données, et incluent le contrôle d'accès, la surveillance et le
chiffrement des données.

Un pipeline d'intégration continue est utilisé pour automatiser le processus de livraison d'images/de
packages. Les modifications de code sont revues dans une première phase par des analyses de
qualité du code automatisées, puis doivent être validées par 2 développeurs avant d'être acceptées,
et une analyse de code statique est exécutée sur chaque version afin que les problèmes de sécurité
potentiels puissent être détectés au plus tôt.

Lorsque les artefacts déployables sont disponibles, toutes les modifications sont testées par les
ingénieurs d'assurance qualité.

Les utilisateurs externes de Centreon (utilisateurs de la communauté ou de l'entreprise) peuvent
également tester et utiliser n'importe quelle version beta en extrayant les packages des référentiels
publics « instables ».

### Opensource

Centreon distribue le cœur de sa plateforme sous licences GPLv2 et Apache Open Source, ce qui
permet aux [contributeurs](https://github.com/centreon/centreon/blob/master/CONTRIBUTING.md) d'étendre les fonctionnalités. Toute personne souhaitant contribuer et
participer au développement du projet doit respecter le [Code de Conduite](https://github.com/centreon/centreon/blob/master/CODE_OF_CONDUCT.md) de Centreon.

Toute contribution est publiée sous forme de « pull request » et livrée avec des [informations](https://github.com/centreon/centreon/blob/master/.github/PULL_REQUEST_TEMPLATE.md) qui
facilitent le processus de révision par Centreon. L'examen comprend la qualité du code, les tests
fonctionnels, la documentation ainsi que la sécurité et détermine si la contribution est acceptée ou
rejetée.

### Test de la sécurité

En plus des contrôles de sécurité effectués via l'intégration continue, des tests d'intrusion manuels
sont exécutés chaque année pour identifier de manière indépendante les vulnérabilités et affiner les
recommandations de meilleures pratiques pour sécuriser les installations.

## Réponse aux vulnérabilités

À réception d'un rapport de vulnérabilité, Centreon tente de répliquer la vulnérabilité signalée et
construit un plan d'action avec des délais variant en fonction de la gravité calculée.

Centreon fournit un retour d'information au rapporteur de la vulnérabilité et travaille avec lui pour
atténuer/corriger la vulnérabilité.

### Score de vulnérabilité

Centreon utilise la version 3.1 du Common Vulnerability Scoring System (CVSS) dans le cadre de son
processus standard d'évaluation des vulnérabilités potentielles signalées.

Centreon calcule le score environnemental en partant du principe que le produit Centreon testé est
configuré comme décrit dans la documentation en ligne du produit et qu’il est placé derrière des
protections appropriées.

En fonction du score CVSS de la vulnérabilité, l'équipe de sécurité de Centreon détermine l'urgence
de la remédiation :

 | Score CVSS          | Rémédiation                                                                                                                                                                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 9.0 - 10 (Critique) | Centreon lance immédiatement une action corrective, développe un correctif ou une solution de contournement et la fournit aux clients dans les plus brefs délais commercialement acceptables sous la forme d'un correctif et/ou d'une mise à jour |
| 7.0 - 8.9 (Haut)    | Centreon fournit un correctif ou une solution de contournement avec la prochaine maintenance planifiée sous forme de mise à jour (généralement dans les 30 jours)                                                                                 |
| 4.0 - 6.9 (Moyen)   | Centreon fournit un correctif ou une solution de contournement avec la  prochaine version prévue (généralement dans les 6 mois)                                                                                                                   |
| 0.1 – 3.9 (Bas)     | Centreon fournit un correctif ou une solution de contournement dans les deux prochaines versions prévues du produit Centreon (généralement dans les 12 mois)                                                                                      |

### Reporter une vulnérabilité

Si vous pensez avoir trouvé une faille de sécurité, veuillez nous la signaler comme décrit dans le
[processus de signalement](https://github.com/centreon/centreon/blob/master/SECURITY.md).

Veuillez ne pas signaler les vulnérabilités de sécurité via des problèmes publics GitHub.

Envoyez un email à [security@centreon.com](mailto:security@centreon.com). Si possible, cryptez votre message avec la [clé PGP](security@centreon.com)
fournie.

Vous devriez recevoir une réponse dans les 48 heures. Si, pour une raison quelconque ce n’est pas le
cas, veuillez faire un suivi par e-mail pour vous assurer que nous avons reçu votre message initial.

## Sécuriser votre installation Centreon

### Configuration sécurisée

La documentation Centreon inclut les bonnes pratiques pour sécuriser les [composants de supervision](https://docs.centreon.com/current/fr/administration/secure-platform.html)
ainsi que la [plateforme MAP](https://docs.centreon.com/current/fr/graph-views/secure-your-map-platform.html). Centreon recommande aux administrateurs de lire attentivement ces
pages lors de la planification d'une installation et de partager ces directives avec leurs équipes de
sécurité internes.

### Service d’audit de la sécurité

Les équipes consulting de Centreon proposent des services d'audit visant à optimiser les
déploiements et la valeur apportée par le logiciel. Ces services d'audit incluent également des
contrôles de sécurité et des recommandations telles que :

- Sécurité du système (mots de passe, ACL, configuration renforcée)
- Configuration sécurisée de la base de données
- Configuration des accès au réseau
- Sécurité des applications (chiffrement, utilisateurs, ACL).

Assurez-vous de contacter votre commercial Centreon ou votre partenaire conseil pour initier cet
audit et planifier des améliorations le plus tôt possible.

## Contact sécurité Centreon

Si vous avez des questions concernant la sécurité, contactez notre équipe de support (si vous êtes
client) ou notre équipe de sécurité à [security@centreon.com](mailto:security@centreon.com).