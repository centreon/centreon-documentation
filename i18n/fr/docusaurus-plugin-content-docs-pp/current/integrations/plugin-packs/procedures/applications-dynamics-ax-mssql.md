---
id: applications-dynamics-ax-mssql
title: Microsoft Dynamics AX Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Ce Plugin Pack permet d'obtenir des métriques et des statuts collectés via des requêtes SQL.

## Contenu du Plugin-Pack

### Objets surveillés

* Microsoft SQL AX Database

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="EDI-Order" label="EDI-Order">

| Service           | Description                            |
| :---------------- | :------------------------------------- |
| EDI-Order         | Vérifier les erreurs de commandes EDI. |

</TabItem>
</Tabs>

## Prérequis

### Username

La chaîne du "username" ne doit pas dépasser 32 caractères. Le nom d'utilisateur
doit être sous la forme suivante : \[Servername|Domainname\] Pour que le plugin
fonctionnent correctement, un utilisateur de la base de données avec des privilèges
spécifiques est requis. Le moyen le plus simple est d'assigner à "Nagios-user"
le rôle “serveradmin”. En tant qu'alternative, vous pouvez utiliser l'utilisateur
sa-User pour la connexion à la base de données. Hélas, cela ouvre une sérieuse faille
de sécurité, car le mot de passe administrateur (en clair) peut être trouvé dans les
fichiers de configuration de Centreon, Birk Bohne a écrit le script suivant qui permet
la création automatisée d'un espace privilégié minimal mais suffisant dans le cadre de
la surveillance.


    declare @dbname varchar(255)
    declare @check_mssql_health_USER varchar(255)
    declare @check_mssql_health_PASS varchar(255)
    declare @check_mssql_health_ROLE varchar(255)
    declare @source varchar(255)
    declare @options varchar(255)
    declare @backslash int
    
    /*******************************************************************/
    SET @check_mssql_health_USER = '"[Servername|Domainname]\Username"'
    SET @check_mssql_health_PASS = 'Password'
    SET @check_mssql_health_ROLE = 'Rolename'
    /******************************************************************
    
    PLEASE CHANGE THE ABOVE VALUES ACCORDING TO YOUR REQUIREMENTS
    
    - Example for Windows authentication:
      SET @check_mssql_health_USER = '"[Servername|Domainname]\Username"'
      SET @check_mssql_health_ROLE = 'Rolename'
    
    - Example for SQL Server authentication:
      SET @check_mssql_health_USER = 'Username'
      SET @check_mssql_health_PASS = 'Password'
      SET @check_mssql_health_ROLE = 'Rolename'
    
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    It is strongly recommended to use Windows authentication. Otherwise
    you will get no reliable results for database usage.
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    *********** NO NEED TO CHANGE ANYTHING BELOW THIS LINE *************/
    
    SET @options = 'DEFAULT_DATABASE=MASTER, DEFAULT_LANGUAGE=English'
    SET @backslash = (SELECT CHARINDEX('\', @check_mssql_health_USER))
    IF @backslash > 0
      BEGIN
        SET @source = ' FROM WINDOWS'
        SET @options = ' WITH ' + @options
      END
    ELSE
      BEGIN
        SET @source = ''
        SET @options = ' WITH PASSWORD=''' + @check_mssql_health_PASS + ''',' + @options
      END
    
    PRINT 'create Nagios plugin user ' + @check_mssql_health_USER
    EXEC ('CREATE LOGIN ' + @check_mssql_health_USER + @source + @options)
    EXEC ('USE MASTER GRANT VIEW SERVER STATE TO ' + @check_mssql_health_USER)
    EXEC ('USE MASTER GRANT ALTER trace TO ' + @check_mssql_health_USER)
    EXEC ('USE MSDB GRANT SELECT ON sysjobhistory TO ' + @check_mssql_health_USER)
    EXEC ('USE MSDB GRANT SELECT ON sysjobschedules TO ' + @check_mssql_health_USER)
    EXEC ('USE MSDB GRANT SELECT ON sysjobs TO ' + @check_mssql_health_USER)
    PRINT 'User ' + @check_mssql_health_USER + ' created.'
    PRINT ''
    
    declare dblist cursor for
      select name from sysdatabases WHERE name NOT IN ('master', 'tempdb', 'msdb') open dblist
        fetch next from dblist into @dbname
        while @@fetch_status = 0 begin
          EXEC ('USE [' + @dbname + '] print ''Grant permissions in the db '' + ''"'' + DB_NAME() + ''"''')
          EXEC ('USE [' + @dbname + '] CREATE ROLE ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] GRANT EXECUTE TO ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] GRANT VIEW DATABASE STATE TO ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] GRANT VIEW DEFINITION TO ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] CREATE USER ' + @check_mssql_health_USER + ' FOR LOGIN ' + @check_mssql_health_USER)
          EXEC ('USE [' + @dbname + '] EXEC sp_addrolemember ' + @check_mssql_health_ROLE + ' , ' + @check_mssql_health_USER)
          EXEC ('USE [' + @dbname + '] print ''Permissions in the db '' + ''"'' + DB_NAME() + ''" granted.''')
          fetch next from dblist into @dbname
        end
    close dblist
    deallocate dblist

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin Centreon sur chaque Poller :

```bash
yum install centreon-plugin-Applications-Dynamics-Ax-Mssql
```

2. Sur l'interface Web Centreon, installez le Pack Centreon *Dynamics AX Database*
depuis la page **Configuration > Plugin Packs > Manager**


</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin Centreon sur chaque Poller :

```bash
yum install centreon-plugin-Applications-Dynamics-Ax-Mssql
```

2. Installez le RPM Centreon Pack sur le serveur Centreon Central :

```bash
yum install centreon-pack-applications-dynamics-ax-mssql
```

3. Sur l'interface Web Centreon, installez le Pack Centreon *Dynamics AX Database*
depuis la page **Configuration > Plugin Packs > Manager**

</TabItem>
</Tabs>

### RPM

Pour utiliser ce modèle, les RPM suivants sont nécessaires :

  - freetds
  - perl-DBD-Sybase
  - unixODBC

### Configuration du fichier freetds.conf

Le fichier /etc/freetds.conf doit être modifié afin de chiffrer le mot de passe.
Pour faire ça :

```bash
vi /etc/freetds.conf
```

Modifiez la ligne tds 'version = auto' en 'tds version = 8.0'. Puis supprimer le 
symbole de commentaire au début de cette ligne.


## Paramétrage de l'hôte

* Connectez-vous à Centreon et ajoutez un nouvel Host via "Configuration > Hosts".
* Appliquez le modèle *App-Dynamics-AX-Database-Mssql-custom* et configurez toutes les macros obligatoires :

| Obligatoire | Nom           | Description                                                    |
| :---------- | :------------ | :------------------------------------------------------------- |
| X           | MSSQLPASSWORD | Mot de passe MSSQL pour se connecter à la base de données      |
| X           | MSSQLPORT     | Port MSSQL de la base de données cible (Défaut: 1433)          |
| X           | MSSQLUSERNAME | Nom d'utilisateur MSSQL pour se connecter à la base de données |
|             | EXTRAOPTIONS  | Options supplémentaires à utiliser si nécessaire               |
