# Centreon — Versions et systèmes d'exploitation supportés

> Document généré à partir de la documentation officielle Centreon (dépôt `centreon-documentation`
> pour les versions 24.10 à 26.10, et des sites d'archives pour les versions antérieures).
> Date de génération : 2026-07-03.

## Cycle de vie des versions

Source : `versioned_docs/version-26.10/releases/lifecycle.md`

| Version Centreon | Sortie  | Fin de support | État                 |
|-------------------|---------|-----------------|----------------------|
| 26.10             | 10/2026 | 04/2029         | Supportée            |
| 25.10             | 10/2025 | 04/2027         | Supportée            |
| 24.10             | 10/2024 | 10/2027         | Supportée            |
| 24.04             | 04/2024 | 04/2026         | Plus supportée       |
| 23.10             | 10/2023 | 10/2025         | Plus supportée       |
| 23.04             | 04/2023 | 04/2025         | Plus supportée       |
| 22.10             | 10/2022 | 10/2024         | Plus supportée       |
| 22.04             | 05/2022 | 05/2024         | Plus supportée       |
| 21.10             | 11/2021 | 11/2023         | Plus supportée       |
| 21.04             | 04/2021 | 10/2022         | Plus supportée       |
| 20.10             | 10/2020 | 05/2022         | Plus supportée       |
| 20.04             | 04/2020 | 10/2021         | Plus supportée       |
| 19.10             | 10/2019 | 04/2021         | Plus supportée       |
| 19.04             | 04/2019 | 10/2020         | Plus supportée       |
| 18.10             | 10/2018 | 04/2020         | Plus supportée       |

## Systèmes d'exploitation supportés par version

Rappel — OS supportés par la version actuelle **Centreon 26.10** : RHEL/Oracle Linux/Alma Linux 9, RHEL/Oracle Linux/Alma Linux 10, Debian 13 (trixie).

| Version Centreon | OS supportés à l'époque | Parmi eux, toujours supportés en 26.10 |
|-------------------|--------------------------|------------------------------------------|
| **26.10** | RHEL/Oracle Linux/Alma Linux 9 & 10 (RPM, sources) • Debian 13 "trixie" (DEB) | RHEL/Oracle/Alma Linux 9, RHEL/Oracle/Alma Linux 10, Debian 13 (version actuelle) |
| **25.10** | RHEL/Oracle Linux 8 (RPM, sources) • Alma Linux 8 (RPM, VM, sources) • RHEL/Oracle/Alma Linux 9 (RPM, sources) • Debian 12 "bookworm" (DEB) | RHEL/Oracle/Alma Linux 9 |
| **24.10** | RHEL/Oracle Linux 8 (RPM, sources) • Alma Linux 8 (RPM, VM, sources) • RHEL/Oracle/Alma Linux 9 (RPM, sources) • Debian 12 "bookworm" (DEB) | RHEL/Oracle/Alma Linux 9 |
| **24.04** | RHEL/Oracle Linux 8 (RPM, sources) • Alma Linux 8 (RPM, VM, sources) • RHEL/Oracle/Alma Linux 9 (RPM, sources) • Debian 11 "bullseye" (DEB) • Debian 12 "bookworm" (DEB) | RHEL/Oracle/Alma Linux 9 |
| **23.10** | RHEL/Oracle Linux 8 (RPM, sources) • AlmaLinux 8 (RPM, VM, sources) • RHEL/Oracle/AlmaLinux 9 (RPM, sources) • Debian 11 (DEB) | RHEL/Oracle/AlmaLinux 9 |
| **23.04** | RHEL/Oracle Linux 8 (RPM, sources) • AlmaLinux 8 (RPM, VM, sources) • RHEL/Oracle/AlmaLinux 9 (RPM, sources) • Debian 11 (DEB) | RHEL/Oracle/AlmaLinux 9 |
| **22.10** | CentOS 7 (RPM, VM, sources) • RHEL/Oracle Linux 7 (RPM, sources) • RHEL/Oracle Linux 8 (RPM, sources) • AlmaLinux 8 (RPM, VM, sources) • Debian 11 (DEB) — *CentOS/RHEL 7 déconseillés* | Aucun |
| **22.04** | Non trouvé (page d'archive inaccessible, erreur HTTP 403) | N/A |
| **21.10** | CentOS 7 (ISO, RPM, VM, sources) • RHEL/Oracle Linux 7 (RPM, sources) • RHEL/Oracle Linux 8 (RPM, sources) | Aucun |
| **21.04** | CentOS 7 (ISO, RPM, VM, sources) • RHEL/Oracle Linux 7 ou 8 (RPM, sources) | Aucun |
| **20.10** | CentOS 7 (RPM) • RHEL 7/8 (RPM) • Oracle Linux 7/8 (RPM) | Aucun |
| **20.04** | CentOS 7 (ISO) • RHEL 7 (RPM) | Aucun |
| **19.10** | Non trouvé | N/A |
| **19.04** | Non trouvé | N/A |
| **18.10** | Non trouvé | N/A |

### Notes

- Sur toutes les versions où l'information est disponible : seules les architectures **64 bits (x86_64)** sont supportées.
- Les utilisateurs Open Source sans contrat de support peuvent utiliser une autre distribution GNU/Linux en installant depuis les sources, mais les modules IT Edition / Business Edition ne fonctionnent pas sur les distributions non supportées.
- Pour **22.04**, la page d'archive (`archives-docs.centreon.com/22.04/`) a renvoyé une erreur 403 lors de la consultation — non vérifiable.
- Pour **18.10 / 19.04 / 19.10**, la plateforme d'archives (`docs-older.centreon.com`) est dépréciée et ne fournit pas de page dédiée par version pour ces informations — volontairement laissées vides plutôt que devinées.
- À partir de la version 22.10 incluse et en amont, plus aucun OS de l'époque n'est encore supporté en 26.10 (CentOS 7 et RHEL/Oracle/Alma Linux 7-8 sont tous en fin de vie côté Centreon). Seule la lignée « Enterprise Linux 9 » (RHEL/Oracle Linux/AlmaLinux 9), apparue à partir de 22.10, perdure jusqu'en 26.10.

### Sources

- Dépôt local (versions 24.10 à 26.10) : `versioned_docs/version-{24.10,25.10,26.10}/installation/compatibility.md` et `versioned_docs/version-26.10/releases/lifecycle.md`
- Archives (versions 20.04 à 24.04) : `https://archives-docs.centreon.com/{version}/docs/installation/compatibility` (ou `.../installation/prerequisites` pour 20.x et 21.x)
