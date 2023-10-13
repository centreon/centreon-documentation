---
id: security
title: Centreon Cloud security management
---

## Introduction

This document defines and describes the main characteristics of the security management system that the Centreon teams implement around the Centreon Cloud product. Centreon's ISMS aims to follow security best practices and tends toward compliance with reference standards, such as ISO 27001.

We realize the importance to customers of the data entrusted to Centreon, and we apply strict security practices, always striving to improve, so as to guarantee the best protection for the assets in our care.

## Security governance

Centreon relies on a committee dedicated to cybersecurity issues, which is led by the Chief Information Security Officer. This team is organized around four main areas:

- Product security
- Security of infrastructures and user environments
- Network and Cloud Security
- SOC/Incident response

This committee puts cybersecurity at the heart of its action, and plans each of its actions according to the principles of continuous improvement.

Centreon's executive team constantly keeps up with the latest developments in cybersecurity, because security issues and data protection are their number one priority. Risk analysis and a detailed review of these are carried out regularly in line with ISO 27001.

### Raising awareness

All Centreon employees are offered an onboarding process that includes security awareness training. Each department receives tailored support based on core knowledge and practices that apply to the whole company, including security and data protection best practices. We conduct regular training that reminds each department of the good practices and covers the issues and expectations concerning security.

## Software development process

Development processes integrate security requirements and include security by design and continuous improvement practices.

Each development sprint and each architecture decision integrate security in a strict and tracked way, including elements such as access control, integrity, and encryption. Development relies on the most tried and tested principles, practices and third-party elements.

### Integration and release process

An automated and controlled continuous integration and delivery process allows us to implement measures and security checkpoints at each key stage of the development.
These checkpoints use SAST and DAST tools, but also systematic peer reviewing by two experienced developers.
The tools used by the Centreon teams include development security standards such as OWASP Top 10.

### Quality control

Each stable version that is delivered has gone through quality checks carried out by dedicated QA engineers.
External users (community or enterprise users) are also able to test and use any beta versions by pulling the packages from public “unstable” repositories.

## Infrastructure security

All Centreon Cloud services are hosted by Amazon Web Services (AWS). Centreon Cloud relies on the physical security as well as the quality of AWS infrastructures and networks to offer customers a level of security ranked among the strictest in the world.

### Hosting security

AWS's hosting services meet the compliance requirements of the world's most highly recognized standards and programs. (See the [AWS Compliance program](https://aws.amazon.com/compliance/programs/).)

In addition, Centreon Cloud has passed the [Foundational Technical Review](https://aws.amazon.com/partners/foundational-technical-review/) (FTR) and [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) (WAR) reviews. These reviews have allowed Centreon to join the AWS Partner Network, and guarantee that our customers will enjoy a service that is in compliance with the best practices with regard to architecture, account management, logging, disaster recovery and business continuity, and continuous improvement.

Centreon Cloud services are all hosted and run from the European Union:

| Service   | Hosting   | IT outsourcing |
|---------|-----------|----------------|
| Centreon Cloud   | AWS EU Ireland Region (eu-west-1) | France |

More information on AWS's security and compliance practices [here](https://d1.awsstatic.com/whitepapers/compliance/AWS_Compliance_Quick_Reference.pdf).

### Network security

The Centreon infrastructure includes dedicated network security resources at each change of zone. Additional resources such as software firewalls, intrusion detection and protection software, or flow analysis are implemented and monitored closely.
Strict controls are applied to the flows to allow the safe transit of customer data.

### Administration

Admin access to the product is strictly limited to duly authorized administrators. Centreon takes steps to control all actions and to guarantee that malicious actions are detected.

### Authentication and authorization

Authentication is strictly personal.
Authorization to access the infrastructure is multi-factor (authentication, access from an authorized network, access from an authorized device).
Authentication and authorization are subject to continual security and compliance checks.

### Logs

Centreon has access to and analyzes infrastructure logs provided by AWS. These logs are subject to continual security and compliance checks.

## Data security

Data entrusted to Centreon is protected by symmetric and asymmetric encryption systems, depending on usage. This meets the current best practices, whether the data is in transit or static.
Data in transit is encrypted using an up-to-date and maintained open-source technological solution. Static data is encrypted using AWS mechanisms, reinforced by a key generated by Centreon.
Centreon Cloud services use a Public Key Infrastructure to manage, store, distribute and destroy encryption keys and certificates.
Centreon uses up-to-date protocols, certificates, algorithms and software to guarantee the security of data, whatever its state.

| Element | Description |
|------------|---------------------|
| Communication protocols | TLS 1.2/TLS 1.3 |
| Certificates | RSA 2048 bits |
| Algorithms | PKCS #1 SHA-256 with RSA encryption |
| Software | OpenSSL v1.1.x, OpenVPN 2.4.x |

## Product security

### Configuration

Centreon guarantees its customers that the application is configured in a secure manner. Actions on product configuration are only performed by certified employees.
It relies on orchestration and automation that guarantee the resilience, robustness and standardization of the service that is offered.

### Authentication and access to the platform's administration

Admin access to the product is strictly limited to duly authorized administrators. This authorization is multi-factor (authentication, access from an authorized network, access from an authorized device).

### User authentication

User access to the product is strictly limited to duly authorized users. This authorization can be multi-factor, depending on the customer's requirements and their ability to make their environment secure (radius authentication, MFA, network security and filtering, etc).
Customers can configure their user accesses and authorizations using Centreon's CIAM (Customer Identity and Access Management) portal. This portal uses OpenID Connect, and can be configured to use the customer's own identity provider.

### Logs

Centreon keeps the application logs and checks them regularly. Logs are kept for 12 full months.

## Incident processing

Centreon actively monitors infrastructure and services to detect any event or anomaly that could impact the security of the product it delivers.
Reporting, escalation and internal crisis management processes are implemented and tested several times a year.

Centreon Cloud's architecture and design make the service resilient to breakdowns and technical incidents by default.

Automation and orchestration mechanisms guarantee a quick restoration of the service provided to customers.

## Vulnerability response

### Reporting vulnerabilities

Centreon has a process that allows for effective receipt and processing of vulnerability reports.
If you believe you have found a security vulnerability, please report it to us as described in the [reporting process](https://github.com/centreon/centreon/security/policy#reporting-a-vulnerability).

### Vulnerability detection

Centreon has processes and multilayer security tools that make it possible to proactively detect anomalies in code or infrastructure that could introduce vulnerabilities.
This multilayer security includes internal human control, automatic analysis and external security audits.

### Vulnerability categorization

Centreon categorizes any reported or detected vulnerabilities and assesses their severity using the CVSS (version 3.1) methodology. An appropriate action plan is then set up, resulting in the correction of the vulnerability.

### Vulnerability fixes

Centreon implements all necessary means to handle any vulnerabilities that are discovered. Centreon's commitment is to mitigate and fix any reported vulnerabilities in the following manner:

#### Product vulnerability

| CVSS score | Mitigation deadline | Fix deadline |
|------------|---------------------|--------------|
| 9.0 - 10 | 24h | As soon as possible |
| 7.0 - 8.9 | 48 working hours | 30 days |
| 4.0 - 6.9 | 96 working hours | 180 days |
| 0.1 – 3.9 | 120 working hours | 365 days |

#### Infrastructure vulnerability

| CVSS score | Mitigation deadline | Fix deadline |
|------------|---------------------|--------------|
| 9.0 - 10 | 24h | As soon as possible |
| 7.0 - 8.9 | 48 working hours | 8 days |
| 4.0 - 6.9 | 96 working hours | 15 days |
| 0.1 – 3.9 | 120 working hours | 30 days |

Note: Fixing infrastructure vulnerabilities can be subject to extended time limits and can depend on providers publishing fixes (hosting provider, OS publisher). Centreon is committed to reacting as soon as possible should such a situation arise.

### Rewards program

Centreon does not offer a structured rewards plan for reporting vulnerabilities. This can be discussed in specific cases, according to the severity of the reported vulnerability.

## Outsourcing and uninterrupted service

Centreon strengthens its ability to deliver service partly by using outsourcing.
Qualified outsourcers hold the best AWS qualifications and skills, and take action within a security framework that has been strictly approved by Centreon.
This outsourcing allows Centreon to guarantee an uninterrupted service and watch over the AWS infrastructure.

## Continuous improvement

Centreon is committed to security and quality processes based on continuous improvement. In the same way as for its products, Centreon audits, reviews and improves its security governance (including this document) regularly.
This governance will be reviewed, possibly revised, and appropriately validated at least once a year.

## Communications about security

Centreon communicates on an ad hoc basis via the usual channels (direct communication by email, via The Watch, or through the support team).

Centreon communicates actively with the relevant authorities in the event of a significant vulnerability or personal data breach.

Centreon strives for transparency and communicates about vulnerabilities to the public reference frameworks (MITRE).

## Auditability

Centreon carries out a complete audit of Cloud services on an annual basis, complemented by control audits on an ad hoc basis.
The key points of this process will be shared by Centreon; more details can be provided to customers under certain conditions.
