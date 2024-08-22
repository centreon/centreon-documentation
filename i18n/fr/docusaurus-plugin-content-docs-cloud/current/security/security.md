---
id: security
title: Centreon Cloud - Management de la sécurité

---

## Introduction

Ce document définit et décrit les grands axes du système de management de la sécurité de l’information que les équipes de Centreon mettent en œuvre autour du produit Centreon Cloud. Le SMSI de Centreon vise à s’aligner sur les meilleures pratiques de sécurité et tend vers la conformité aux normes de référence, telles que ISO 27001.

Centreon a conscience de la valeur accordée par ses clients aux données qui lui sont confiées, et applique des pratiques de sécurité rigoureuses, en perpétuelle recherche d’amélioration, afin de garantir le meilleur niveau de protection aux assets qui lui sont confiés.

## Gouvernance de la sécurité

Centreon s’appuie sur une cellule dédiée aux enjeux de cybersécurité, dont l’animation est assurée par le RSSI. Son équipe s’articule autour de 4 pôles principaux :

* Sécurité produit
* Sécurité des infrastructures et des environnements utilisateurs
* Sécurité Réseau et Cloud
* SOC/Réponse sur incident

Cette cellule met la cybersécurité au cœur de son action, et décline chacune de ses actions selon les principes d’amélioration continue.

Un suivi récurrent et régulier de l’état de la cybersécurité est traité par le comité de direction de Centreon, qui place les enjeux de sécurité et de protection de la Donnée à très haut niveau.
Une analyse des risques ainsi qu’une revue détaillée de ces derniers sont périodiquement menées dans un esprit de conformité à ISO 27001.

### Sensibilisation

Centreon propose à l’ensemble de ses collaborateurs un parcours d’intégration incluant une sensibilisation aux enjeux de sécurité. Chaque population bénéficie d’un accompagnement adapté qui s’appuie sur un socle de connaissances et de pratiques communes à l’entreprise, en adressant également les pratiques les plus vertueuses du point de vue de la sécurité et de la protection des données.
Chaque population bénéficie d’actions de sensibilisation périodiques, permettant de rappeler les bonnes pratiques, les enjeux et les attentes liés à la sécurité.

## Processus de création et de développement

Les processus de développement intègrent les exigences de sécurité et déclinent des pratiques dites de security by design et d’amélioration continue. 

Chaque sprint de développement et chaque décision d’architecture intègre la sécurité de manière rigoureuse et tracée, intégrant notamment des éléments de contrôle d’accès, d’intégrité, ou encore du chiffrement. Le développement s'appuie sur des principes, pratiques et éléments de tierce partie dont la sécurité se veut la plus éprouvée et maîtrisée possible.

### Processus d’intégration et mise en production

Un processus d’intégration continue/livraison continue automatisé et contrôlé permet d’implémenter les mesures et points de contrôle de sécurité à chaque étape clé du développement.
Ces points de contrôle s’appuient sur des outils de SAST et DAST, mais aussi du peer-reviewing systématique par 2 développeurs expérimentés.
Les équipes de Centreon intègrent dans leurs outils des référentiels de développement sécurisés reconnus, tels que l’OWASP Top 10.

### Contrôle qualité

Chaque livraison de version stable est réputée avoir fait l’objet de contrôles qualité par des équipes dédiées d’ingénieurs qualité.
Les utilisateurs externes peuvent également éprouver les versions de test mises à disposition via les dépôts logiciels “unstable”.

## Sécurité des infrastructures

Les services Centreon Cloud sont intégralement hébergés chez Amazon Web Services (AWS).
Centreon Cloud s’appuie sur la sécurité physique, la qualité des infrastructures et du réseau d’AWS pour offrir à ses clients un niveau de sécurité parmi les plus stricts au monde. 

### Sécurité de l’hébergement

Les services d’hébergement AWS répondent aux exigences de conformité des référentiels et programmes les plus reconnus au monde. (Voir [AWS Compliance program](https://aws.amazon.com/compliance/programs/).)

Par ailleurs, Centreon Cloud a passé avec succès les évaluations [Foundational Technical Review](https://aws.amazon.com/partners/foundational-technical-review/) (FTR) et [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) (WAR). Ces évaluations ont permis à Centreon d’intégrer le réseau de partenaires AWS Partner Network, et garantissent à nos clients de bénéficier d’un service conforme aux meilleures pratiques et outils d’architecture, de gestion des comptes, de journalisation, de PRA/PCA et d’amélioration continue.

Les services de Centreon Cloud sont intégralement hébergés et opérés depuis l’Union Européenne :

| Service   | Hosting   |
|---------|-----------|
| Centreon Cloud   | AWS EU Ireland (eu-west-1) |
| Centreon Cloud   | AWS US East N. Virginia (us-east-1) |
| Fournisseur d'identité   |  Auth0 Europe |
| Plateforme d'engagement produit   |  Pendo Europe |

Plus d’informations sur les pratiques de sécurité et de conformité d’AWS sont disponibles [ici](https://d1.awsstatic.com/whitepapers/compliance/AWS_Compliance_Quick_Reference.pdf).

### Sécurité réseau

Centreon intègre dans son infrastructure des équipements dédiés de sécurité réseau à chaque changement de zone. Des équipements complémentaires de type pare-feu applicatif, système de détection ou de protection contre les intrusions, analyseur de flux sont mis en place et supervisés rigoureusement.
Des contrôles stricts sont appliqués sur les flux pour permettre le transit sécurisé des données des clients.

### Administration

L’accès administrateur au produit est limité aux seuls administrateurs dûment autorisés. 
Centreon prend des dispositions pour contrôler l’ensemble des actions et garantir la bonne détection des actions malveillantes.

### Authentification et autorisation

L’authentification est strictement nominative.
L’autorisation d’accès à l’infrastructure est multifactorielle (authentification, accès depuis un réseau autorisé, accès depuis un équipement autorisé).
L’authentification et l’autorisation font l’objet de contrôles de sécurité et de conformité continus.

### Logs

Centreon dispose et analyse les logs d’infrastructure mis à disposition par AWS. Ces logs font l’objet de contrôles de sécurité et de conformité continus.

## Sécurité des données

Les données confiées à Centreon sont protégées par des mécanismes de chiffrement symétriques et asymétriques, selon les usages. Cela répond aux meilleures pratiques en vigueur, que les données soient en transit ou au repos.
Les données en transit sont chiffrées à l’aide d’une offre technologique open source, à jour et maintenue.
Les données au repos sont chiffrées via les mécanismes proposés par AWS, renforcés par une clé générée par Centreon.
Centreon s’appuie sur une infrastructure de gestion de clé pour gérer, stocker, distribuer ou révoquer ses clés et certificats.
Centreon utilise des protocoles, certificats, algorithmes et logiciels à jour pour garantir la sécurité des données quel que soit leur état :

| Élément | Description |
|------------|---------------------|
| Protocole de communication | TLS 1.2/TLS 1.3 |
| Certificats | RSA 2048 bits |
| Algorithmes | PKCS #1 SHA-256 avec chiffrement RSA |
| Logiciels | OpenSSL v1.1.x |

## Sécurité du produit

### Configuration

Centreon garantit à ses clients la configuration sécurisée de son application. Cette configuration produit n’est opérée que par des collaborateurs certifiés. Elle s’appuie sur une orchestration et une automatisation garantissant la résilience, la robustesse et l’homogénéisation du service proposé.

### Accès et authentification à l’administration de la plateforme

L’accès administrateur au produit est limité aux seuls administrateurs dûment autorisés. Cette autorisation est multifactorielle (authentification, accès depuis un réseau autorisé, accès depuis un équipement autorisé).

### Authentification utilisateur

L’accès utilisateur au produit est limité aux seuls utilisateurs dûment autorisés. Cette autorisation peut être multifactorielle, selon l’expression du besoin du client et sa capacité à sécuriser son environnement (authentification radius, MFA, sécurité et filtrage réseau, etc…).
Le client peut configurer ses accès et habilitations utilisateurs en s’appuyant sur le portail CIAM (Customer Identity and Access Management) proposé par Centreon. Ce portail s’appuie sur OpenID Connect, et peut être configuré avec d’autres fournisseurs d’identité propres au client.

### Logs

Centreon dispose des journaux de l’application et exerce un contrôle régulier sur ces derniers.
Les journaux sont conservés durant 12 mois révolus.

## Traitement des incidents

Centreon surveille activement ses infrastructures et ses services pour assurer la détection de tout évènement et anomalie susceptible d’impacter la sécurité du produit délivré. 
Des process de signalement, d’escalade et de gestion de crise interne sont mis en œuvre et testés plusieurs fois par an.

L’architecture et le design de Centreon Cloud rendent par défaut le service résilient aux pannes et incidents techniques.

Les mécanismes d’automatisation et d’orchestration en place garantissent un rétablissement rapide du service fourni au client.

## Traitement des vulnérabilités

### Signalement de vulnérabilités

Centreon dispose d’un process permettant la bonne réception et le bon traitement des signalements de vulnérabilité.
Si vous pensez avoir trouvé une faille de sécurité, veuillez nous la signaler via le [portail support](https://support.centreon.com/), comme décrit dans le
[processus de signalement](https://github.com/centreon/centreon/security/policy#reporting-a-vulnerability).

### Détection de vulnérabilités

Centreon dispose de process et d’outils de sécurité multicouches permettant de détecter proactivement les anomalies de code ou d’infrastructure susceptibles d’introduire des vulnérabilités.
Cette sécurité multicouche intègre du contrôle humain interne, de l’analyse automatisée et des audits de sécurité externes.

### Qualification des vulnérabilités

Centreon qualifie les vulnérabilités signalées ou détectées et évalue leur sévérité selon la méthodologie CVSS (version 3.1). Un plan d’action adapté est ensuite établi, pour aboutir à la correction de la vulnérabilité.

### Correction de vulnérabilités

Centreon met en œuvre tous les moyens nécessaires pour traiter les vulnérabilités qui seraient découvertes. Centreon s’engage à mitiger et à corriger les vulnérabilités signalées selon les conditions suivantes :

#### Vulnérabilité produit

| Score CVSS | Délai de mitigation | Délai de correction |
| --- | --- | --- |
| 9.0 - 10 | 24h | Dès que possible |
| 7.0 - 8.9 | 48h ouvrées | 30 jours |
| 4.0 - 6.9 | 96h ouvrées | 180 jours |
| 0.1 – 3.9 | 120h ouvrées | 365 jours |

#### Vulnérabilité infrastructure

| Score CVSS | Délai de mitigation | Délai de correction |
| --- | --- | --- |
| 9.0 - 10 | 24h | Dès que possible |
| 7.0 - 8.9 | 48h ouvrées | 8 jours |
| 4.0 - 6.9 | 96h ouvrées | 15 jours |
| 0.1 – 3.9 | 120h ouvrées | 30 jours |

Nota : La correction des vulnérabilités infrastructure peut être soumise à des délais complémentaires et peut dépendre de la publication de correctifs par les fournisseurs (hébergeur, éditeur de l’OS). Centreon s’engage à réagir dans les meilleurs délais lorsqu'un tel cas de figure est amené à se présenter.

### Programme de récompense

Centreon ne propose pas de programme de récompense structuré pour les signalements de vulnérabilité.
Des discussions ad-hoc peuvent être engagées selon la sévérité de la vulnérabilité rapportée.

## Sous-traitance et service continu

Centreon renforce sa capacité à délivrer du service en appuyant une partie de son activité sur de la sous-traitance. Cette sous-traitance qualifiée dispose des meilleures certifications et compétences AWS, et n’intervient que dans un cadre de sécurité strictement approuvé par Centreon.
Cette sous-traitance permet à Centreon d’assurer un service et une veille continus sur les infrastructures AWS.

## Amélioration continue

Centreon s’engage dans une démarche de sécurité et de qualité basée sur de l’amélioration continue. Au même titre que ses produits, Centreon audite, revoit et améliore périodiquement sa gouvernance sécurité, dont le présent document fait partie.
Cette gouvernance fera l’objet d’une relecture, d’éventuels ajustements et de la validation idoine au moins une fois par an.

## Communications de sécurité

Centreon communique de manière ad-hoc via les canaux usuels (communication directe par mail, via The Watch, ou par le biais du support).

Centreon communique activement avec les autorités compétentes en cas de vulnérabilité significative ou de violation de données à caractère personnel.

Centreon maintient un effort de transparence et communique sur les vulnérabilités auprès des dictionnaires publics de référence (MITRE).

## Auditabilité

Centreon procède à un audit complet des services selon une base annuelle, complété par des audits de contrôles ponctuels programmés de manière ad-hoc.
Les points clés de cette démarche seront partagés par Centreon, des points détaillés peuvent être mis à disposition des clients sous conditions.
