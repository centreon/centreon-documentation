---
id: security
title: Centreon and Security
description: Overview of Centreon's approach to product and data security
---

Organizations around the world turn to Centreon to provide business-aware monitoring of their IT
for always-on operations and performance excellence. Centreon is committed to the security of the
data they rely on and is continuously improving policies, processes, and products to meet the highest
standards.

## Product security by design

### Secure development

Security by Design is a primary concern throughout the Centreon development process, which ensures that
products and services are designed from inception to meet data security needs, including access
controls, monitoring and encryption.

A continuous integration pipeline is leveraged to automate the process from pull request to
image/package delivery. Code changes are reviewed by code quality scans as a first step, and then they must be
validated by two core developers before they are accepted, and static code analysis is run on every
build so potential security issues can be caught as early as possible.

Once deployable artifacts are available, all changes are tested by Quality Assurance engineers.

Centreon external users (community or enterprise users) are also able to test and use any beta
versions by pulling the packages from “unstable” public repositories.

### Opensource security

Centreon distributes its core platform under Apache Open Source license (GPLv2 for some files), which makes it
possible for [contributors](https://github.com/centreon/.github/blob/master/CONTRIBUTING.md) to extend it.
Any person who wants to contribute and participate in
developing the project must respect Centreon’s [Code of Conduct](https://github.com/centreon/.github/blob/master/CODE_OF_CONDUCT.md).

Any contribution is posted as a pull request and provided with [information](https://github.com/centreon/.github/blob/master/PULL_REQUEST_TEMPLATE.md) that helps with the
review process by Centreon. The review includes code quality, functional tests, documentation and
security, and determines whether the contribution is accepted or rejected.

### Security testing

On top of security checks performed through continuous integration such as release testing, manual
penetration tests are run on a yearly basis to independently identify vulnerabilities and tune best
practice recommendations for safe implementation.

## Vulnerability publication

To mark its commitment to security and vulnerability management, Centreon has become a [CNA](https://www.cve.org/Media/News/item/news/2025/02/11/Centreon-Added-as-CNA) (CVE Numbering Authority). Centreon is now authorized to assign CVE identifiers to vulnerabilities affecting its products, including open-source software components. This designation ensures a more efficient and transparent process for identifying, managing, and disclosing security vulnerabilities. 
This role enables Centreon to swiftly address potential security issues, keeping users and IT professionals informed while enhancing the overall security posture of its solutions.

Centreon also publishes security bulletins to communicate about security fixes. 
Subscribe to the [Security Bulletins thread](https://thewatch.centreon.com/latest-security-bulletins-64) on our community platform The Watch to keep up with the latest vulnerability fixes.

### Vulnerability identification

Managing vulnerabilities means detecting and classifying them. To detect them, certain tools exist
in the Centreon environment:
* SAST (Static application security testing) : This is a built-in CI/CD functionality that
scans 100% of the codebase but also dependencies. It discovers vulnerabilities early in
the SDLC process.
* Infrastructure vulnerability scanning : quite the same as DAST but related to
infrastructure: servers, VM, containers...
* Bug Bounty Program & Public vulnerability disclosure program
* Penetration testing

Upon receipt of a report for a vulnerability, Centreon will attempt to replicate the reported
vulnerability and build an action plan with timelines depending on the computed severity.

Centreon will provide feedback to the reporter of the vulnerability and work with them to mitigate or to fix
the vulnerability.

### Vulnerability scoring

The discovered vulnerabilities are analyzed and assessed to rule out false positives, identify
the issues that pose the most risk to Centreon and remediation that has the least impact on Centreon’s
environment.
The classification must follow the CVSS v3:

| CVSS score           | Remediation plan                                                                                                                                                                                      |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 9.0 - 10 (Critical)  | This is a blocker and  must be taken into account immediately by the team; this will require a hotfix. |
| 7.0 - 8.9 (High)     | Fix or workaround within 30 days                                                                         |
| 4.0 - 6.9 (Medium)   | Next planned release : 6 months (typically within 6 months)                                                                                                  |
| 0.1 – 3.9 (Low)      | 12 months                                                                    |

### Vulnerability disclosure program

Centreon is committed to the security of its product and services and is continuously improving policies, processes, and products to meet the highest standards. Despite our best efforts, due to the highly complex and sophisticated nature of our products and services, vulnerabilities and errors may still be present in our products and services.

As an open source project, Centreon welcomes vulnerability disclosure from the community with a process governed by the vulnerability disclosure policy available at this URL: [Vulnerability disclosure policy](https://vdp.centreon.com/p/centreon-VDP). This policy describes Centreon's approach to requesting and receiving reports related to potential vulnerabilities and errors in its products and services. Customers, users, researchers, partners and any other person that interacts with Centreon's products and services are encouraged to report identified vulnerabilities and errors by using the form present on the Vulnerability Disclosure Policy platform.

Furthermore, Centreon follows a reponsible disclosure policy:

* Denial of service (DoS) attacks on Centreon applications, servers, networks or infrastructure are strictly forbidden.
* Avoid tests that could cause degradation or interruption of our services.
* Do not use automated scanners or tools that generate large amounts of network traffic.
* Do not leak, manipulate, or destroy any user data or files in any of our applications/servers.
* Do not copy any files from our applications/servers and disclose them.

The vulnerability disclosure program is implemented and must be followed for the disclosure to be taken into account.

## Securing your Centreon installation

### Secure configuration

The Centreon documentation includes best practices to secure the [monitoring components](../administration/secure-platform.md) as well as
the [MAP platform](../graph-views/secure-your-map-platform.md). Centreon recommends that administrators carefully review those pages when
planning an installation and share those guidelines with their internal security teams.

### Security audit services

The Centreon consulting teams provide audit services aimed at optimizing deployments and the
value driven by the software. Those audit services also include security checks and recommendations
such as:

- Base system security (passwords, ACLs, hardened configuration)
- Database secure configuration
- Network access configuration
- Application security (encryption, users, ACLs).

Please make sure to reach out to your Centreon sales representative or consulting partner to initiate
such an audit and plan improvements as early as possible.

## Centreon security contact

If you have questions about security, contact our support team if you are a customer or our Security
Team at [security@centreon.com](mailto:security@centreon.com).
