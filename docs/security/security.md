---
id: security
title: Centreon and Security
---

Organizations around the world turn to Centreon to provide business-aware monitoring of their IT
for always-on operations and performance excellence. Centreon is committed to the security of the
data they rely on and is continuously improving policies, processes, and products to meet the highest
standards. Read more information throughout this page.

## Product security by design

### Secure development

Security by Design is top-of-mind throughout the Centreon development process which ensures that
products and services are designed from inception to meet data security needs, including access
controls, monitoring and encryption.

A continuous integration pipeline is leveraged to automate the process from pull request to
image/package delivery. Code changes are reviewed by code quality scans as a first step then must be
validated by 2 core developers before they are accepted, and static code analysis is run on every
build so potential security issues can be caught as early as possible.

Once deployable artifacts are available, all changes are tested by Quality Assurance engineers.

Centreon external users (community or enterprise users) are also able to test and use any beta
versions by pulling the packages from public “unstable” repositories.

### Opensource security

Centreon distributes its core platform under GPLv2 and Apache Open Source licenses which makes it
possible for [contributors](https://github.com/centreon/centreon/blob/master/CONTRIBUTING.md) to extend.
Any person who wants to contribute and participate in
developing the project must respect Centreon’s [Code of Conduct](https://github.com/centreon/centreon/blob/master/CODE_OF_CONDUCT.md).

Any contribution is posted as a pull request and provided with [information](https://github.com/centreon/centreon/blob/master/.github/PULL_REQUEST_TEMPLATE.md) that helps through the
review process by Centreon. The review includes code quality, functional tests, documentation as
well as security and determines whether the contribution is accepted or rejected.

### Security testing

On top of security checks performed through continuous integration as release testing, manual
penetration tests are run on a yearly basis to independently identify vulnerabilities and tune best
practice recommendations for safe implementations.

## Vulnerability response
Upon receipt of a report for a vulnerability, Centreon will attempt to replicate the reported
vulnerability and build an action plan with timelines depending on the computed severity.

Centreon will provide feedback to the reporter of the vulnerability and work with them to mitigate
the vulnerability.

### Vulnerability scoring

Centreon uses version 3.1 of the Common Vulnerability Scoring System (CVSS) as part of its standard
process of evaluating reported potential vulnerabilities.

Centreon will compute the environmental score assuming the tested Centreon product is configured
as defined in the online product documentation and placed behind appropriate in-depth protections.

Depending on the CVSS score of the vulnerability, the Centreon security team will determine the urgency
of remediating the vulnerability:

| CVSS score           | Remediation plan                                                                                                                                                                                      |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 9.0 - 10 (Critical)  | Centreon will begin corrective action immediately, develop a fix or workaround, and provide it to customers in the shortest commercially reasonable time in the form of a patch and/or update release |
| 7.0 - 8.9 (High)     | Centreon will deliver a fix or workaround with the next planned maintenance as  an update release (typically within 30 days)                                                                          |
| 4.0 - 6.9 (Medium)   | Centreon will deliver a fix or workaround with the next planned release (typically  within 6 months)                                                                                                  |
| 0.1 – 3.9 (Low)      | Centreon will deliver a fix or workaround with the next two planned releases of  the Centreon product (typically within 12 months)                                                                    |

### Reporting a vulnerability

If you believe you have found a security vulnerability, please report it to us as described in the
[reporting process](https://github.com/centreon/centreon/blob/master/SECURITY.md).

Please do not report security vulnerabilities through public GitHub issues.

Send an email to [security@centreon.com](mailto:security@centreon.com). If possible, encrypt your message with the [provided PGP
key](https://github.com/centreon/centreon/blob/master/SECURITY.md#pgp-information).

You should receive a response within 48 hours. If for some reason you do not, please follow up via
email to ensure we received your original message.

## Securing your Centreon installation

### Secure configuration

The Centreon documentation includes best practices to secure the [monitoring components](https://docs.centreon.com/current/en/administration/secure-platform.html) as well as
the [MAP platform](https://docs.centreon.com/current/en/graph-views/secure-your-map-platform.html). Centreon recommends that administrators carefully review those pages when
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