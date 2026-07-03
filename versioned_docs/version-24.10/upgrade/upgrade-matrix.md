---
id: upgrade-matrix
title: Matrice des montées de version possibles
---

Pour rappel, les [OS supportés en version 24.10](../installation/compatibility.md#operating-systems) sont les suivants :

* RHEL/Oracle Linux/Alma Linux 8
* RHEL/Oracle/Alma Linux 9
* Debian 12 (bookworm)

Cela signifie qu'une montée de version n'est possible que si vous utilisiez une version 20.10 ou supérieure, avec RHEL/Oracle Linux/Alma Linux 8 ou 9, ou Debian 12. Pour toute autre version ou OS, vous devrez effectuer une [migration](../migrate/introduction.md).

## Montée de version ou migration?

<table>
  <thead>
    <tr>
      <th>Version de départ</th>
      <th>OS supporté à l'époque</th>
      <th>OS toujours supporté en 24.10 ?</th>
      <th>Procédure à suivre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><strong>24.04</strong></td>
      <td>RHEL/Oracle Linux/Alma Linux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-24-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle/Alma Linux 9</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-24-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>Debian 11 "bullseye"</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis Debian</a></td>
    </tr>
    <tr>
      <td>Debian 12 "bookworm"</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-24-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td rowspan="3"><strong>23.10</strong></td>
      <td>RHEL/Oracle Linux/AlmaLinux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-23-10.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle/AlmaLinux 9</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-23-10.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>Debian 11 "bullseye"</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis Debian</a></td>
    </tr>
    <tr>
      <td rowspan="3"><strong>23.04</strong></td>
      <td>RHEL/Oracle Linux/AlmaLinux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-23-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle/AlmaLinux 9</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-23-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>Debian 11 "bullseye"</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis Debian</a></td>
    </tr>
    <tr>
      <td rowspan="4"><strong>22.10</strong></td>
      <td>CentOS 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux/AlmaLinux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-22-10.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>Debian 11 "bullseye"</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis Debian</a></td>
    </tr>
    <tr>
      <td rowspan="4"><strong>22.04</strong></td>
      <td>RHEL/Oracle Linux/AlmaLinux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-22-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td>CentOS 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>Debian 11 "bullseye"</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis Debian</a></td>
    </tr>
    <tr>
      <td rowspan="3"><strong>21.10</strong></td>
      <td>CentOS 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-21-10.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td rowspan="3"><strong>21.04</strong></td>
      <td>CentOS 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
        <tr>
      <td>RHEL/Oracle Linux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-21-04.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td rowspan="3"><strong>20.10</strong></td>
      <td>CentOS 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL/Oracle Linux 8</td>
      <td style={{color: 'green', fontWeight: 'bold'}}>OUI</td>
      <td><a href="upgrade-from-20-10.md">Procédure de montée de version</a></td>
    </tr>
    <tr>
      <td rowspan="2"><strong>20.04</strong></td>
      <td>CentOS 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
    <tr>
      <td>RHEL 7</td>
      <td style={{color: 'red'}}>NON</td>
      <td><a href="../migrate/introduction.md">Procédure de migration depuis EL</a></td>
    </tr>
  </tbody>
</table>

## Cycle de vie des versions

[Voir le tableau des versions de Centreon supportées](../releases/lifecycle.md#maintenance-table-for-centreon-versions).
