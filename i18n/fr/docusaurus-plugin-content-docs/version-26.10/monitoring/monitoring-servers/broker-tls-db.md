---
id: broker-tls-db
title: Sécuriser les connexions de Broker à la base de données avec TLS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon Broker prend en charge les connexions sécurisées TLS 1.2/1.3 vers les bases de données MySQL/MariaDB, permettant de chiffrer les communications entre Centreon Broker et les serveurs de base de données.

## Paramètres de configuration

Les paramètres suivants peuvent être ajoutés à toute configuration de sortie de base de données (`unified_sql`, `sql`, `storage`) dans votre fichier de configuration Centreon Broker :

| Paramètre | Type | Requis | Défaut | Description |
|-----------|------|--------|--------|-------------|
| `db_ssl_enabled` | booléen | Non | `false` | Activer SSL/TLS pour la connexion à la base de données |
| `db_ssl_ca` | chaîne | Non | - | Chemin vers le fichier de certificat de l'Autorité de Certification (CA) au format PEM |
| `db_ssl_cert` | chaîne | Non | - | Chemin vers le fichier de certificat client au format PEM |
| `db_ssl_key` | chaîne | Non | - | Chemin vers le fichier de clé privée du client au format PEM |
| `db_tls_version` | chaîne | Non | `TLSv1.3` | Version(s) du protocole TLS à utiliser (ex. : `TLSv1.2`, `TLSv1.3`, `TLSv1.2,TLSv1.3`) |
| `db_ssl_verify_cert` | booléen | Non | `true` | Activer la vérification du certificat (vérification d'identité) |

## Exemples de configuration

### Configuration TLS minimale (authentification serveur uniquement)

Pour vérifier uniquement l'identité du serveur sans authentification par certificat client :

```json
{
  "centreon-broker-unified-sql": {
    "type": "unified_sql",
    "db_type": "mysql",
    "db_host": "database.example.com",
    "db_port": "3306",
    "db_user": "centreon",
    "db_password": "password",
    "db_name": "centreon_storage",
    "db_ssl_enabled": "true",
    "db_ssl_ca": "/etc/centreon-broker/ssl/ca-cert.pem",
    "db_ssl_verify_cert": "true"
  }
}
```

### TLS sans vérification de certificat

```json
{
  "centreon-broker-unified-sql": {
    "type": "unified_sql",
    "db_type": "mysql",
    "db_host": "database.example.com",
    "db_port": "3306",
    "db_user": "centreon",
    "db_password": "password",
    "db_name": "centreon_storage",
    "db_ssl_enabled": "true",
    "db_ssl_verify_cert": "false"
  }
}
```

## Configuration du serveur MariaDB/MySQL

Configurez votre serveur de base de données pour prendre en charge les connexions SSL.

<Tabs groupId="sync">
<TabItem value="MariaDB" label="MariaDB">

Éditez `/etc/mysql/mariadb.conf.d/99-tls.cnf` :

```ini
[mysqld]
ssl_ca=/chemin/vers/ca-cert.pem
ssl_cert=/chemin/vers/server-cert.pem
ssl_key=/chemin/vers/server-key.pem
```

</TabItem>
<TabItem value="MySQL" label="MySQL">

Éditez `/etc/my.cnf.d/99-tls.cnf` :

```ini
[mysqld]
ssl_ca=/chemin/vers/ca-cert.pem
ssl_cert=/chemin/vers/server-cert.pem
ssl_key=/chemin/vers/server-key.pem
```

</TabItem>
</Tabs>

> Pour imposer SSL à des utilisateurs spécifiques, exécutez la commande suivante dans la console MySQL/MariaDB :
> - Authentification serveur uniquement : `ALTER USER 'centreon'@'%' REQUIRE SSL;`
> - TLS mutuel (certificat client requis) : `ALTER USER 'centreon'@'%' REQUIRE X509;`

Redémarrez le service de base de données après toute modification de la configuration :

```bash
systemctl restart mariadb
```

### Vérifier la configuration SSL du serveur

```bash
mysql -u root -p -e "SHOW VARIABLES LIKE '%ssl%';"
```

La variable `have_ssl` doit être définie à `YES`.

## Vérification

### Vérifier les logs de Broker

Après avoir activé SSL, vérifiez les logs de Centreon Broker pour les messages relatifs à SSL :

```bash
grep -i ssl /var/log/centreon-broker/central-broker-master.log
```

Entrée de log attendue :

```
[2026-02-17 10:00:00] [info] SSL/TLS enabled for database connection
```

### Tester la connexion manuellement

```bash
mysql --ssl-ca=/chemin/vers/ca-cert.pem \
      --ssl-cert=/chemin/vers/client-cert.pem \
      --ssl-key=/chemin/vers/client-key.pem \
      -h <hôte> -u <utilisateur> -p
```
