---
id: secure-your-mbi-platform
title: Sécuriser votre plateforme MBI
description: "Sécuriser la connexion entre Centreon MBI et votre base de données avec TLS"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit les procédures avancées pour sécuriser votre plateforme Centreon MBI.

> Si vous souhaitez utiliser MBI avec une connexion à la base de données sécurisée, nous vous recommandons également de sécuriser votre plateforme Centreon. Suivez cette [procédure](https://docs.centreon.com/fr/docs/administration/secure-platform/#secure-the-web-server-with-https) si nécessaire.

## Configurer TLS sur une base de données MySQL ou MariaDB

Cette section décrit comment activer SSL entre Centreon MBI et un serveur MySQL ou MariaDB en utilisant la vérification par autorité de certification (mode VERIFY\_CA / verify-ca).

> **Remarque :** Cette procédure couvre uniquement le mode VERIFY\_CA. Dans ce mode, le certificat du serveur est validé par rapport à une autorité de certification de confiance, mais le nom d'hôte/l'adresse IP n'est pas vérifié. Pour les autres modes de vérification SSL, consultez la section [Référence des modes SSL](#référence-des-modes-ssl).

- Sélectionnez l'onglet correspondant à la base de données que vous souhaitez utiliser.

### Étape 1 - Générer les clés et les certificats

> Si vous avez déjà généré des certificats (par exemple lors de la configuration de Centreon MAP), vous pouvez ignorer cette section et réutiliser le certificat CA existant.

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

**1. Créez un répertoire** (`/etc/mysql/newcerts` dans cet exemple) pour stocker vos fichiers de certificats :

    ```shell
    mkdir -p /etc/mysql/newcerts
    cd /etc/mysql/newcerts
    ```

**2. Générez l'autorité de certification (CA).** La CA est utilisée pour signer les certificats du serveur et du client, établissant ainsi une chaîne de confiance.

    ```shell
    # Générer la clé privée de la CA
    openssl genrsa 2048 > ca-key.pem
    # Générer le certificat auto-signé de la CA
    openssl req -new -x509 -nodes -days 365000 -key ca-key.pem -out ca-cert.pem
    ```

**3. Générez le certificat du serveur.** Le certificat du serveur est présenté par MySQL aux clients lors de la négociation SSL.

    ```shell
    # Générer la clé privée du serveur et la CSR (Certificate Signing Request)
    openssl req -newkey rsa:2048 -days 365000 -nodes -keyout server-key.pem -out server-req.pem

    # Convertir la clé du serveur au format RSA (requis par MariaDB)
    openssl rsa -in server-key.pem -out server-key.pem

    # Signer le certificat du serveur avec la CA
    openssl x509 -req -in server-req.pem -days 365000 \
      -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
      -out server-cert.pem
    ```

**4. Générez le certificat client (optionnel — mTLS uniquement).** Le certificat client est utilisé par l'application pour s'authentifier auprès de MySQL. Ignorez cette section si vous n'avez besoin que de `REQUIRE SSL`.

    ```shell
    # Générer la clé privée du client et la CSR
    openssl req -newkey rsa:2048 -days 365000 -nodes -keyout client-key.pem -out client-req.pem

    # Convertir la clé du client au format RSA
    openssl rsa -in client-key.pem -out client-key.pem

    # Signer le certificat client avec la CA
    openssl x509 -req -in client-req.pem -days 365000 \
      -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
      -out client-cert.pem
    ```

**5. Vérifiez les certificats.** Assurez-vous que les deux certificats sont correctement signés par la CA avant de continuer.

    ```shell
    openssl verify -CAfile ca-cert.pem server-cert.pem client-cert.pem
    # Résultat attendu :
    # server-cert.pem: OK
    # client-cert.pem: OK
    ```

**6. Définissez les droits sur les fichiers.**

    ```shell
    chown -Rv mysql:mysql /etc/mysql/newcerts/*.pem
    chmod 600 /etc/mysql/newcerts/server-key.pem /etc/mysql/newcerts/client-key.pem
    chmod 644 /etc/mysql/newcerts/ca-cert.pem /etc/mysql/newcerts/server-cert.pem /etc/mysql/newcerts/client-cert.pem
    ```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**1. Créez un répertoire** (`/etc/mariadb/newcerts` dans cet exemple) pour stocker vos fichiers de certificats :

  ```shell
  mkdir -p /etc/mariadb/newcerts
  cd /etc/mariadb/newcerts
  ```

**2. Générez l'autorité de certification (CA).** La CA est utilisée pour signer les certificats du serveur et du client, établissant ainsi une chaîne de confiance.

```shell
# Générer la clé privée de la CA
openssl genrsa 2048 > ca-key.pem
# Générer le certificat auto-signé de la CA
openssl req -new -x509 -nodes -days 365000 -key ca-key.pem -out ca-cert.pem
```

**3. Générez le certificat du serveur.** Le certificat du serveur est présenté par MariaDB aux clients lors de la négociation SSL.

```shell
# Générer la clé privée du serveur et la CSR (Certificate Signing Request)
openssl req -newkey rsa:2048 -days 365000 -nodes -keyout server-key.pem -out server-req.pem

# Convertir la clé du serveur au format RSA (requis par MySQL)
openssl rsa -in server-key.pem -out server-key.pem

# Signer le certificat du serveur avec la CA
openssl x509 -req -in server-req.pem -days 365000 \
  -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
  -out server-cert.pem
```

**4. Générez le certificat client (optionnel — mTLS uniquement).** Ignorez cette section si vous n'avez besoin que de `REQUIRE SSL`.

```shell
# Générer la clé privée du client et la CSR
openssl req -newkey rsa:2048 -days 365000 -nodes -keyout client-key.pem -out client-req.pem

# Convertir la clé du client au format RSA
openssl rsa -in client-key.pem -out client-key.pem

# Signer le certificat client avec la CA
openssl x509 -req -in client-req.pem -days 365000 \
  -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
  -out client-cert.pem
```

**5. Vérifiez les certificats.**

```shell
openssl verify -CAfile ca-cert.pem server-cert.pem client-cert.pem
# Résultat attendu :
# server-cert.pem: OK
# client-cert.pem: OK
```

**6. Définissez les droits sur les fichiers.**

```shell
chown -Rv mariadb:mariadb /etc/mariadb/newcerts/*.pem
chmod 600 /etc/mariadb/newcerts/server-key.pem /etc/mariadb/newcerts/client-key.pem
chmod 644 /etc/mariadb/newcerts/ca-cert.pem /etc/mariadb/newcerts/server-cert.pem /etc/mariadb/newcerts/client-cert.pem
```

</TabItem>
</Tabs>

### Étape 2 - Configurer le serveur MySQL/MariaDB

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

> Si le serveur est déjà configuré pour SSL (par exemple pour Centreon MAP), ignorez cette section.

> Assurez-vous d'utiliser le répertoire que vous avez précédemment créé (`/etc/mysql/newcerts` dans cet exemple).

**1. Modifiez la configuration du serveur MySQL.** Ajoutez le bloc suivant à votre fichier de configuration du serveur MySQL (généralement `/etc/mysql/mysql.conf.d/mysqld.cnf`) :

    ```shell
    [mysqld]
    ssl-ca=/etc/mysql/newcerts/ca-cert.pem
    ssl-cert=/etc/mysql/newcerts/server-cert.pem
    ssl-key=/etc/mysql/newcerts/server-key.pem
    # Restreindre aux versions TLS sécurisées uniquement
    tls_version=TLSv1.2,TLSv1.3
    ```

**3. Vérifiez que SSL est actif.**

    ```sql
    SHOW VARIABLES LIKE '%ssl%';
    -- have_ssl doit être YES
    -- ssl_ca, ssl_cert, ssl_key doivent pointer vers vos fichiers de certificats
    ```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

> Si le serveur est déjà configuré pour SSL (par exemple pour Centreon MAP), ignorez cette section.

> Assurez-vous d'utiliser le répertoire que vous avez précédemment créé (`/etc/mariadb/newcerts` dans cet exemple).

**1. Modifiez la configuration du serveur MariaDB.** Ajoutez le bloc suivant à votre fichier de configuration du serveur MariaDB (généralement `etc/mariadb/mariadb.conf.d/50-server.cnf`) :

    ```shell
    [mariadb]
    ssl-ca   = /etc/mariadb/newcerts/ca-cert.pem
    ssl-cert = /etc/mariadb/newcerts/server-cert.pem
    ssl-key  = /etc/mariadb/newcerts/server-key.pem

    # Restreindre aux versions TLS sécurisées uniquement
    tls_version = TLSv1.2,TLSv1.3

    # Redémarrer MariaDB
    systemctl restart mariadb
    ```

**3. Vérifiez que SSL est actif.**

```shell
SHOW VARIABLES LIKE '%ssl%';
-- have_ssl doit être YES
-- ssl_ca, ssl_cert, ssl_key doivent pointer vers vos fichiers de certificats
```

</TabItem>
</Tabs>

### Étape 3 - Configurer l'utilisateur MySQL/MariaDB

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

Centreon MBI utilise l'utilisateur `centreonbi`. Appliquez les exigences SSL à cet utilisateur pour chaque hôte concerné.

**1. Exigez SSL pour l'utilisateur.**

    ```sql
    -- SSL uniquement (aucun certificat client requis)
    ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE SSL;

    -- Ou TLS mutuel (certificat client requis)
    -- ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE X509;

    -- Vérification : ssl_type doit maintenant afficher ANY (pour SSL) ou X509 (pour mTLS)
    SELECT user, host, ssl_type FROM mysql.user WHERE user='centreonbi';
    ```

**2. Accordez les privilèges.**

    ```sql
    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon`.*
      TO `centreonbi`@`<ip_or_hostname>`;

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon_storage`.*
      TO `centreonbi`@`<ip_or_hostname>`;

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon_mbi`.*
      TO `centreonbi`@`<ip_or_hostname>`;

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon_storage_mbi`.*
      TO `centreonbi`@`<ip_or_hostname>`;
    ```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

Centreon MBI utilise l'utilisateur `centreonbi`. Appliquez les exigences SSL à cet utilisateur pour chaque hôte concerné.

**1. Exigez SSL pour l'utilisateur.**

  ```shell
  -- SSL uniquement (aucun certificat client requis)
  ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE SSL;
  -- Ou TLS mutuel (certificat client requis)
  -- ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE X509;
  -- Vérification : ssl_type doit afficher ANY (pour SSL) ou X509 (pour mTLS)
  SELECT user, host, ssl_type FROM mysql.user WHERE user='centreonbi';
  ```

**2. Accordez les privilèges.**

  ```shell
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon_storage`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon_mbi`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon_storage_mbi`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  ```

</TabItem>
</Tabs>

### Étape 4 - Configurer JDBC (Centreon MBI / BIRT)

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

Centreon MBI utilise MySQL Connector/J (`com.mysql.cj.jdbc.Driver`), qui ne prend pas en charge les fichiers PEM directement. Les certificats doivent être stockés dans un Java KeyStore (JKS ou PKCS12).

| Fichier | Contenu | Rôle | Requis |
|---------|---------|------|--------|
| `truststore.jks` | Certificat CA | Permet à Java de vérifier l'identité du serveur de base de données | ✓ Toujours |
| `keystore.jks` | Certificat client + clé privée | Permet à la base de données de vérifier l'identité de l'application | Seulement si `REQUIRE X509` |

> **Remarque : le mTLS est optionnel.** Il n'est nécessaire que si l'utilisateur MySQL a été créé avec `REQUIRE X509`. Si l'utilisateur a été créé avec `REQUIRE SSL`, seul le TrustStore est requis.

**1. Créez le TrustStore.** Le TrustStore contient le certificat CA. Java l'utilise pour valider que le certificat du serveur MySQL a été signé par une autorité de confiance.

    ```shell
    keytool -importcert -alias mysqlServerCACert \
      -file /etc/mysql/newcerts/ca-cert.pem \
      -keystore /etc/mysql/newcerts/truststore.jks \
      -storepass changeit \
      -noprompt
    ```

**2. Créez le KeyStore (optionnel — mTLS uniquement).** Ignorez cette étape si l'utilisateur `centreonbi` a été créé avec `REQUIRE SSL`.

      2.1 Regroupez le certificat et la clé client dans un fichier PKCS12 :

          ```shell
          openssl pkcs12 -export \
            -in /etc/mysql/newcerts/client-cert.pem \
            -inkey /etc/mysql/newcerts/client-key.pem \
            -out /etc/mysql/newcerts/client.p12 \
            -name mbiClient \
            -passout pass:changeit
          ```

      2.2 Convertissez le PKCS12 en JKS :

          ```shell
          keytool -importkeystore \
            -srckeystore  /etc/mysql/newcerts/client.p12   -srcstoretype  PKCS12 -srcstorepass  changeit \
            -destkeystore /etc/mysql/newcerts/keystore.jks  -deststoretype JKS   -deststorepass changeit
          ```

**3. Définissez les permissions sur les fichiers.**

```shell
chown centreon-bi: /etc/mysql/newcerts/*.jks
chmod 640 /etc/mysql/newcerts/*.jks
```

**4. Mettez à jour les fichiers de profil XML BIRT.**

> **Important — encodage XML :** Dans les valeurs d'attributs XML, le séparateur `&` entre les paramètres d'URL doit être écrit sous la forme `&amp;`. Ne pas le faire provoquera une erreur d'analyse XML et empêchera MBI de démarrer.

Deux fichiers doivent être mis à jour, chacun contenant deux profils.

**/etc/cbis-conf/cbis-profile.xml**

  Profil **Centreon** (base de données `centreon`) :

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

  Profil **Censtorage** (base de données `centreon_storage`) :

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon_storage?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

**/etc/cbis-conf/reports-profile.xml**

  Profil **Centreon** (base de données `centreon_mbi`) :

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon_mbi?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

  Profil **Censtorage** (base de données `centreon_storage_mbi`) :

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon_storage_mbi?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

**Optionnel — mTLS (REQUIRE X509) :** ajoutez les paramètres KeyStore à chaque URL :

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit&amp;clientCertificateKeyStoreUrl=file:/etc/mysql/newcerts/keystore.jks&amp;clientCertificateKeyStorePassword=changeit"/>
  ```

  Appliquez le même modèle aux trois autres profils.

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

Contrairement à MySQL Connector/J, **MariaDB Connector/J 3.x prend en charge les fichiers PEM nativement** via le paramètre `serverSslCert` directement dans l'URL JDBC. Aucune conversion en Java KeyStore n'est nécessaire pour le mode SSL simple.

Un keystore PKCS12 n'est nécessaire que pour le mTLS (authentification par certificat client) :

| Fichier | Contenu | Rôle | Requis |
|---------|---------|------|--------|
| `ca-cert.pem` | Certificat CA | Permet au pilote de vérifier l'identité du serveur MariaDB | ✓ Toujours |
| `keystore.p12` | Certificat client + clé privée | Permet à MariaDB de vérifier l'identité de l'application | Seulement si `REQUIRE X509` |

> **Remarque : le mTLS est optionnel.** Il n'est nécessaire que si l'utilisateur MariaDB a été créé avec `REQUIRE X509`. Si l'utilisateur a été créé avec `REQUIRE SSL`, seul `serverSslCert` pointant vers la CA est nécessaire.

**1. (Optionnel) Créez le KeyStore PKCS12 pour le mTLS.**

Ignorez cette étape si `centreonbi` a été créé avec `REQUIRE SSL`.

```shell
openssl pkcs12 -export \
  -in /etc/mysql/newcerts/client-cert.pem \
  -inkey /etc/mysql/newcerts/client-key.pem \
  -out /etc/mysql/newcerts/keystore.p12 \
  -name mbiClient \
  -passout pass:changeit
```

**2. Définissez les permissions sur les fichiers.**

```shell
chown centreon-bi: /etc/mysql/newcerts/ca-cert.pem
chown centreon-bi: /etc/mysql/newcerts/keystore.p12   # uniquement si mTLS
chmod 640 /etc/mysql/newcerts/ca-cert.pem
chmod 640 /etc/mysql/newcerts/keystore.p12             # uniquement si mTLS
```

**3. Mettez à jour les fichiers de profil XML.**

L'`odaURL` doit utiliser le schéma `jdbc:mariadb://` et inclure les paramètres SSL.

> **Important — encodage XML :** Dans les valeurs d'attributs XML, le séparateur `&` entre les paramètres d'URL doit être écrit sous la forme `&amp;`. Ne pas le faire provoquera une erreur d'analyse XML et empêchera MBI de démarrer.

Deux fichiers doivent être mis à jour, chacun contenant deux profils.

**/etc/cbis-conf/cbis-profile.xml**

  Profil **Centreon** (base de données `centreon`) :

  ```xml
  <property name="odaDriverClass" value="org.mariadb.jdbc.Driver"/>
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

  Profil **Censtorage** (base de données `centreon_storage`) :

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon_storage?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

**/etc/cbis-conf/reports-profile.xml**

  Profil **Centreon** (base de données `centreon_mbi`) :

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon_mbi?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

  Profil **Censtorage** (base de données `centreon_storage_mbi`) :

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon_storage_mbi?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

**Optionnel — mTLS (REQUIRE X509) :** ajoutez les paramètres KeyStore à chaque URL :

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem&amp;keyStore=/etc/mysql/newcerts/keystore.p12&amp;keyStorePassword=changeit&amp;keyStoreType=PKCS12"/>
  ```

  Appliquez le même modèle aux trois autres profils.

</TabItem>
</Tabs>

### Étape 5 - Redémarrer Centreon MBI

```shell
systemctl restart cbis
```

### Étape 6 - Vérifier l'expiration des certificats

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

**TrustStore (certificat CA) :**

```shell
keytool -list -v -keystore /etc/mysql/newcerts/truststore.jks -storepass changeit
# Recherchez : Valid from ... until ...
```

**KeyStore (certificat client, mTLS uniquement) :**

```shell
keytool -list -v -keystore /etc/mysql/newcerts/keystore.jks -storepass changeit
# Recherchez : Valid from ... until ...
```

**Certificat CA (PEM) :**

```shell
openssl x509 -in /etc/mysql/newcerts/ca-cert.pem -noout -dates
```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**Certificat CA :**

  ```shell
  openssl x509 -in /etc/mysql/newcerts/ca-cert.pem -noout -dates
  # notBefore=...
  # notAfter=...
  ```

**Certificat du serveur :**

  ```shell
  openssl x509 -in /etc/mysql/newcerts/server-cert.pem -noout -dates
  ```

**KeyStore PKCS12 (mTLS uniquement) :**

  ```shell
  keytool -list -v -keystore /etc/mysql/newcerts/keystore.p12 -storepass changeit
  # Recherchez : Valid from ... until ...
  ```

</TabItem>
</Tabs>

### Référence des modes SSL

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

Le mode `VERIFY_CA` est le minimum recommandé pour la production. Ce tableau répertorie les autres modes disponibles selon vos exigences de sécurité :

| Mode | Certificat serveur vérifié | Nom d'hôte/IP vérifié | Cas d'usage |
|------|--------------------------|----------------------|-------------|
| `DISABLED` | Non | Non | Développement uniquement — pas de chiffrement |
| `PREFERRED` | Non | Non | Utilise SSL si disponible, repli sur connexion non chiffrée |
| `REQUIRED` | Non | Non | Impose SSL, mais ne valide pas le certificat du serveur |
| `VERIFY_CA` | Oui | Non | Utilisé dans cette procédure — valide la chaîne CA |
| `VERIFY_IDENTITY` | Oui | Oui | Le plus strict — vérifie également le nom d'hôte/IP par rapport au SAN du certificat |

> **Remarque :** Si vous souhaitez utiliser le mode `VERIFY_IDENTITY`, le certificat du serveur doit inclure un Subject Alternative Name (SAN) correspondant exactement à l'IP ou au nom d'hôte utilisé dans l'URL JDBC.

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

Le mode `verify-ca` est le minimum recommandé pour la production. Ce tableau répertorie les autres modes disponibles selon vos exigences de sécurité :

| Mode | Certificat serveur vérifié | Nom d'hôte/IP vérifié | Cas d'usage |
|------|--------------------------|----------------------|-------------|
| `disable` | Non | Non | Développement uniquement — pas de chiffrement |
| `trust` | Non | Non | Chiffre le trafic mais ne valide pas le certificat du serveur |
| `verify-ca` | Oui | Non | Utilisé dans cette procédure — valide la chaîne CA |
| `verify-full` | Oui | Oui | Le plus strict — vérifie également le nom d'hôte/IP par rapport au SAN du certificat |

> **Remarque :** Si vous souhaitez utiliser le mode `verify-full`, le certificat du serveur doit inclure un Subject Alternative Name (SAN) correspondant exactement à l'IP ou au nom d'hôte utilisé dans l'URL JDBC. Le champ CN seul n'est pas suffisant pour les connexions basées sur une adresse IP.

</TabItem>
</Tabs>
