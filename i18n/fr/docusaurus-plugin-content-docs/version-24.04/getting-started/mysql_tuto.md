---
id: monitor-mysql-server
title: Superviser une base de données MySQL ou MariaDB
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

L'objectif de ce tutoriel est de superviser une base de données Mysql/MariaDB.

## Prérequis

### Sur la base de données à superviser

Afin de pouvoir collecter les informations nécessaires à partir de la base de données, un utilisateur de la base de données disposant de privilèges spécifiques sera nécessaire. Si la base que vous souhaitez superviser est une base Centreon, un utilisateur dédié existe déjà (il s'appelle **centreon**). Dans le cas contraire, commencez par créer un nouvel utilisateur : connectez-vous à votre base de données, puis exécutez la commande suivante :

```shell
CREATE USER 'username'@'IP_POLLER' IDENTIFIED BY 'password';
```

Puis, que votre base soit une base Centreon ou non, exécutez la commande suivante :

```shell
GRANT SELECT ON *.* TO 'username'@'IP_POLLER';
```

> Remplacez le nom d'utilisateur, l'adresse IP du collecteur et le mot de passe par les valeurs de votre choix.

### Sur le collecteur

Installez le plugin suivant sur le collecteur qui supervisera votre base de données :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt install centreon-plugin-applications-databases-mysql
```

</TabItem>

</Tabs>

### Sur le serveur central

La base de données sera supervisée à l'aide du [connecteur de supervision **MySQL/MariaDB**](/pp/integrations/plugin-packs/procedures/applications-databases-mysql).
Rendez-vous dans le menu **Configuration > Gestionnaire de connecteurs de supervision** et installez le connecteur de supervision **MySQL/MariaDB** :

![image](../assets/getting-started/quick_start_mysql_0.gif)

## Configurer l'hôte et déployer la configuration

1. Allez à la page **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

  ![image](../assets/getting-started/quick_start_mysql_1a.gif)

2. Renseignez les informations suivantes :

  * Le nom de votre serveur
  * Une description de votre serveur
  * Son adresse IP
  * Sélectionnez le collecteur qui supervisera votre base de données (laissez "Central" si vous n'avez pas d'autre collecteur)

3. Cliquez sur le bouton **+ Ajouter une nouvelle entrée** à côté du champ **Modèles** puis sélectionnez le modèle
**App-DB-MySQL-custom**.

  ![image](../assets/getting-started/quick_start_mysql_1a.png)

4. Une liste de macros correspondant au modèle va alors apparaître :

  ![image](../assets/getting-started/quick_start_mysql_1b.png)

  Renseignez la valeur des macros suivantes :

  * **MYSQLUSERNAME** : le nom de l'utilisateur qui se connectera à la base de données.
  * **MYSQLPASSWORD** : le mot de passe associé à cet utilisateur.
  * **MYSQLPORT** : le port d'écoute de la base de données, par défaut 3306.

5. Cliquez sur le bouton **Sauvegarder**. Votre équipement a été ajouté à la liste des hôtes :

  ![image](../assets/getting-started/quick_start_mysql_2.png)

6. Allez dans **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été créé automatiquement.

  ![image](../assets/getting-started/quick_start_mysql_3.png)

7. [Déployez la supervision](first-supervision.md#déployer-une-configuration).

8. À la page **Supervision > Status des ressources**, sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Dans un premier temps, les ressources apparaissent avec le statut **En attente**, ce qui signifie qu'aucun contrôle n'a encore été exécuté. Après quelques minutes, les premiers résultats de la supervision apparaissent :

  ![image](../assets/getting-started/quick_start_mysql_4.gif)