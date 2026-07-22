---
id: security
title: Centreon et la sécurité 
description: Présentation de l'approche de Centreon en matière de sécurité
---

Les organisations du monde entier font appel à Centreon pour assurer une supervision de leur informatique adaptée à leur activité,
afin de garantir une disponibilité permanente et l'excellence des performances. Centreon s'engage à assurer la sécurité des
données sur lesquelles elles s'appuient et améliore en permanence ses politiques, ses processus et ses produits afin de répondre aux normes les plus strictes.

## Sécurité des produits dès la conception

### Développement sécurisé

La sécurité dès la conception est une préoccupation majeure tout au long du processus de développement de Centreon, qui garantit que
les produits et services sont conçus dès le départ pour répondre aux besoins en matière de sécurité des données, notamment en termes de contrôle d'accès,
 de surveillance et de chiffrement.

Un pipeline d'intégration continue est utilisé pour automatiser le processus, de la proposition de modification à la
livraison de l'image/du paquet. Les modifications du code sont d'abord examinées à l'aide d'analyses de qualité du code, puis elles doivent être
validées par deux développeurs principaux avant d'être acceptées. Une analyse statique du code est effectuée sur chaque
build afin de détecter le plus tôt possible les éventuels problèmes de sécurité.

Une fois que les artefacts déployables sont disponibles, toutes les modifications sont testées par les ingénieurs de l'assurance qualité.

Les utilisateurs externes de Centreon (utilisateurs communautaires ou professionnels) peuvent également tester et utiliser toutes les versions bêta
en récupérant les paquets à partir de référentiels publics « instables ».

### Sécurité open source

Centreon distribue sa plateforme principale sous licence Apache Open Source (GPLv2 pour certains fichiers), ce qui permet aux
contributeurs (https://github.com/centreon/.github/blob/master/CONTRIBUTING.md) de l'étendre.
Toute personne souhaitant contribuer et participer au
développement du projet doit respecter le [Code de conduite](https://github.com/centreon/.github/blob/master/CODE_OF_CONDUCT.md) de Centreon.

Toute contribution est publiée sous forme de pull request et accompagnée d'informations (https://github.com/centreon/.github/blob/master/PULL_REQUEST_TEMPLATE.md) qui facilitent le
processus de révision par Centreon. La révision porte sur la qualité du code, les tests fonctionnels, la documentation et la
sécurité, et détermine si la contribution est acceptée ou rejetée.

### Tests de sécurité

En plus des contrôles de sécurité effectués dans le cadre de l'intégration continue, tels que les tests de version, des
tests de pénétration manuels sont effectués chaque année afin d'identifier de manière indépendante les vulnérabilités et d'ajuster les recommandations de bonnes pratiques pour une mise en œuvre sécurisée.


## Publication des vulnérabilités


Pour marquer son engagement en faveur de la sécurité et de la gestion des vulnérabilités, Centreon est devenue une [CNA](https://www.cve.org/Media/News/item/news/2025/02/11/Centreon-Added-as-CNA) (CVE Numbering Authority). Centreon est désormais autorisé à attribuer des identifiants CVE aux vulnérabilités affectant ses produits, y compris les composants logiciels open source. Cette désignation garantit un processus plus efficace et plus transparent pour identifier, gérer et divulguer les vulnérabilités de sécurité. 
Ce rôle permet à Centreon de traiter rapidement les problèmes de sécurité potentiels, en tenant informés les utilisateurs et les professionnels de l'informatique tout en renforçant la sécurité globale de ses solutions.

Centreon publie également des bulletins de sécurité pour communiquer sur les correctifs de sécurité : 
Abonnez-vous au [fil de discussion des bulletins de sécurité](https://thewatch.centreon.com/latest-security-bulletins-64) sur notre plateforme communautaire The Watch pour vous tenir au courant des derniers correctifs de vulnérabilité.

### Identification des vulnérabilités

La gestion des vulnérabilités consiste à les détecter et à les classer. Pour les détecter, certains outils existent
dans l'environnement Centreon :
* SAST (Static application security testing) : il s'agit d'une fonctionnalité CI/CD intégrée qui
analyse 100 % du code source, mais aussi les dépendances. Elle permet de détecter les vulnérabilités plus tôt dans
le processus SDLC.
* Analyse des vulnérabilités de l'infrastructure : assez similaire au DAST, mais liée à l'
infrastructure : serveurs, VM, conteneurs...
 Programme de prime aux bugs et programme de divulgation publique des vulnérabilités
* Tests d'intrusion

À la réception d'un rapport sur une vulnérabilité, Centreon tentera de reproduire la vulnérabilité signalée
et élaborera un plan d'action avec un calendrier en fonction de la gravité calculée.

Centreon fournira un retour d'information à la personne qui a signalé la vulnérabilité et travaillera avec elle pour atténuer ou corriger
la vulnérabilité.

### Notation des vulnérabilités

Les vulnérabilités découvertes sont analysées et évaluées afin d'exclure les faux positifs, d'identifier
les problèmes qui présentent le plus de risques pour Centreon et les mesures correctives qui ont le moins d'impact sur l'environnement de Centreon.
La classification doit suivre le CVSS v3 :

| Score CVSS           | Plan de remédiation                                                                                                                                                                                      |
|----------------------|----------------------------------|
| 9,0 - 10 (Critique)  | Il s'agit d'un blocage qui doit être pris en compte immédiatement par l'équipe. Un hotfix est nécessaire. |
| 7,0 - 8,9 (Élevé)     | Correction ou solution de contournement dans les 30 jours                                                                         |
| 4,0 - 6,9 (Moyen)   | Prochaine version prévue : 6 mois (généralement dans les 6 mois)                                                                                                  |
| 0,1 – 3,9 (Faible)      | 12 mois                                                                    |

### Programme de divulgation des vulnérabilités

Centreon s'engage à assurer la sécurité de ses produits et services et améliore en permanence ses
politiques, ses processus et ses produits afin de répondre aux normes les plus strictes.
Malgré tous nos efforts, en raison de la nature très complexe et sophistiquée de nos produits et
services, des vulnérabilités et des erreurs peuvent encore être présentes dans nos produits et services.

En tant que projet open source, Centreon autorise la divulgation des vulnérabilités par la communauté, suivant un 
process régi par la politique de divulgation des vulnérabilités disponible à l'adresse suivante : [Vulnerability disclosure policy](https://vdp.centreon.com/p/centreon-VDP).
Cette politique décrit l'approche de Centreon en matière de demande et de réception de rapports liés à des
vulnérabilités et erreurs potentielles dans ses produits et services.
Les clients, utilisateurs, chercheurs, partenaires et toute autre personne qui interagit avec les
produits et services de Centreon sont encouragés à signaler les vulnérabilités et erreurs identifiées en utilisant le
formulaire disponible sur la plateforme de politique de divulgation des vulnérabilités.

De plus, Centreon suit une politique de divulgation responsable :

* Les attaques par déni de service (DoS) sur les applications, serveurs, réseaux ou infrastructures de Centreon
sont strictement interdites.
* Évitez les tests susceptibles d'entraîner une dégradation ou une interruption de nos services.
* N'utilisez pas de scanners automatisés ou d'outils générant un trafic réseau important.
* Ne divulguez, ne manipulez et ne détruisez aucune donnée ou fichier utilisateur dans nos applications/serveurs.
* Ne copiez aucun fichier de nos applications/serveurs et ne les divulguez pas.

Le programme de divulgation des vulnérabilités est mis en œuvre et doit être suivi pour que la divulgation soit prise
en compte. 

## Sécurisation de votre installation Centreon

### Configuration sécurisée

La documentation Centreon comprend les meilleures pratiques pour sécuriser les [composants de supervision](../administration/secure-platform.md) ainsi que la
[plateforme MAP](../graph-views/secure-your-map-platform.md). Centreon recommande aux administrateurs de lire attentivement ces pages lorsqu'ils
planifient une installation et de partager ces directives avec leurs équipes de sécurité internes.

### Services d'audit de sécurité

Les équipes de consultants Centreon fournissent des services d'audit visant à optimiser les déploiements et la
valeur apportée par le logiciel. Ces services d'audit comprennent également des contrôles de sécurité et des recommandations
tels que :

- Sécurité du système de base (mots de passe, ACL, configuration renforcée)
- Configuration sécurisée de la base de données
- Configuration de l'accès au réseau
- Sécurité des applications (cryptage, utilisateurs, ACL).

Veuillez contacter votre représentant commercial Centreon ou votre partenaire consultant afin de lancer
cet audit et de planifier les améliorations dès que possible.

## Contact sécurité Centreon

Si vous avez des questions concernant la sécurité, contactez notre équipe d'assistance si vous êtes client ou notre équipe sécurité
à l'adresse [security@centreon.com](mailto:security@centreon.com).
