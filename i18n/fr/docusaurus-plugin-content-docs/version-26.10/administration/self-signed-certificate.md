---
id: self-signed-certificate
title: Créer un certificat auto-signé
description: "Créer un certificat auto-signé avec OpenSSL"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Les certificats auto-signés sont réservés aux tests. Vous NE DEVEZ PAS les utiliser en production.

## Fichiers nécessaires pour établir des connexions TLS avec des certificats auto-signés

Cette procédure vous permet de créer les fichiers suivants :

| Fichier         | Où le stocker                 | Rôle                                                                    |
|--------------|-----------------------------------|-------------------------------------------------------------------------|
| server-key.pem  | Sur le serveur à sécuriser (central/distant, base de données...) | Clé privée de **server.pem** : reste secrète sur le serveur sécurisé. Sert à prouver l'identité du serveur.  |
| server.pem   | Sur le serveur à sécuriser (central/distant, base de données...) | Certificat signé, envoyé automatiquement à tout client qui tente de se connecter au serveur sécurisé.         |
| rootCA.pem   | Sur le client (navigateur, système d'exploitation...) | Certificat auto-signé de l'autorité de certification racine. Ce fichier public sert à valider le certificat **server.pem** reçu par le client. Vous devrez copier **rootCA.pem** sur toutes les machines qui communiqueront avec la machine sécurisée (celle qui a envoyé **server.pem**).   |
| rootCA.key   | Uniquement sur la machine qui génère l'autorité de certification, dans un dossier temporaire | Ce fichier ne joue aucun rôle en production. Il sert uniquement à signer **rootCA.pem** lors de sa création.    |

## Ce que fait cette procédure

La procédure crée, dans des dossiers temporaires, les fichiers nécessaires pour établir une connexion TLS. Lorsque vous configurerez HTTPS sur un serveur, vous devrez déployer ces fichiers au bon emplacement. Par exemple, **/etc/pki/centreon-tls** est l'emplacement par défaut des certificats sous EL. Sous Debian, le chemin par défaut est **/etc/ssl/certs**.

Vous pouvez suivre cette procédure sur une plateforme Centreon dont la base de données est locale ou distante.

* Si votre base de données est locale, exécutez les commandes des deux onglets sur votre serveur Centreon.
* Si votre base de données est distante, suivez la procédure deux fois :
   * Sur votre serveur Centreon, créez une autorité de certification (étapes 1 à 3), puis exécutez les commandes des onglets **Sur le serveur central/distant**.
   * Sur le serveur de base de données, créez une autre autorité de certification, puis exécutez les commandes des onglets **Sur le serveur de base de données**.
   
   Vous obtenez alors deux fichiers **rootCA.pem** différents. Copiez le fichier **rootCA.pem** du serveur de base de données sur les machines qui se connectent à la base de données (par exemple, votre serveur Centreon). Copiez le fichier **rootCA.pem** de votre serveur Centreon sur les machines qui se connectent à celui-ci.

<!-- Cette procédure crée votre propre petite autorité de certification (CA), puis l'utilise pour émettre et signer un certificat serveur. Voici le principe général :

1. Dans un dossier temporaire, créez une identité « racine » qui jouera le rôle d'autorité de confiance (la CA).
2. Créez un certificat pour votre serveur, et faites-le « signer » par la CA.
3. Stockez le tout directement dans **/etc/pki/centreon-tls**, l'emplacement système standard des éléments TLS, avec les bonnes permissions. -->

## Étape 1 : Créer les répertoires de sortie

Créez des dossiers pour organiser les fichiers : un pour les fichiers propres à l'autorité de certification, un pour les fichiers destinés au service web ou au service de base de données.

Pour l'autorité de certification :

```shell
sudo mkdir -p /out/CA
```

Pour le serveur central/distant, ou pour la base de données :

<Tabs groupId="sync">
<TabItem value="Sur le serveur central/distant" label="Sur le serveur central/distant">

```shell
sudo mkdir -p /out/web
```

</TabItem>
<TabItem value="Sur le serveur de base de données" label="Sur le serveur de base de données">

```shell
sudo mkdir -p /out/db
```

</TabItem>
</Tabs>

## Étape 2 : Générer la clé privée de l'autorité de certification racine (RSA 4096 bits)

Il s'agit de la clé secrète de votre autorité de certification. La commande **chmod 400** limite l'accès au fichier : seul son propriétaire peut le lire (et personne ne peut y écrire). L'exposition de la clé est ainsi réduite au minimum.

```shell
sudo openssl genrsa -out /out/CA/rootCA.key 4096
sudo chmod 400 /out/CA/rootCA.key
```

## Étape 3 : Générer le certificat auto-signé de l'autorité de certification racine (10 ans)

Créez maintenant le certificat de l'autorité de certification. Ce document public identifie votre autorité de certification (nom, organisation, etc.). Vous le distribuerez ensuite à tous les clients et serveurs qui doivent faire confiance aux certificats qu'elle signe.

Ce certificat est "auto-signé", car aucune autorité ne se trouve au-dessus de lui : l'autorité de certification se porte garante d'elle-même. C'est un fonctionnement normal pour une autorité de certification racine.

* `-x509` indique à OpenSSL de produire directement un certificat (et non une demande de signature).
* `-days 3650` fixe l'expiration à environ 10 ans. Cette durée est habituelle pour une autorité de certification racine, qui n'a pas vocation à être renouvelée souvent.
* `-subj` définit les champs d'identité directement dans la ligne de commande : CN (Common Name) vaut « Test Dev CA », O (Organization) vaut « YourOrganization » et OU (Organizational Unit) vaut « R&D ». Remplacez ces valeurs par celles de votre organisation.

```shell
sudo openssl req -x509 -new -nodes -key /out/CA/rootCA.key \
  -sha256 -days 3650 \
  -subj "/CN=Test Dev CA/O=YourOrganization/OU=R&D" \
  -out /out/CA/rootCA.pem
```

## Étape 4 : Générer la clé privée du serveur final (RSA 2048 bits)

Il s'agit de la clé privée du serveur lui-même (du serveur central/distant ou de la base de données). Elle est distincte de la clé de l'autorité de certification : le serveur ne doit jamais partager une clé avec l'autorité de certification.

<Tabs groupId="sync">
<TabItem value="Sur le serveur central/distant" label="Sur le serveur central/distant">

```shell
sudo openssl genrsa -out /out/web/server-key.pem 2048
```

</TabItem>
<TabItem value="Sur le serveur de base de données" label="Sur le serveur de base de données">

```shell
sudo openssl genrsa -out /out/db/server-key.pem 2048
```

</TabItem>
</Tabs>

## Étape 5 : Créer le fichier de configuration des extensions OpenSSL pour les SAN

Les navigateurs et clients récents exigent qu'un certificat liste tous les noms d'hôte et adresses IP pour lesquels il est valide : c'est la liste SAN (Subject Alternative Name). Un CN seul ne suffit plus pour être considéré comme fiable. Cette étape crée un petit fichier de configuration qui définit :

* `basicConstraints = CA:FALSE` : ce certificat n'est pas autorisé à signer d'autres certificats (seule l'autorité de certification racine le peut).
* `keyUsage / extendedKeyUsage` : limite le certificat à son usage prévu, c'est-à-dire l'authentification d'un serveur TLS.
* `subjectAltName` : la liste des noms et adresses IP pour lesquels le certificat doit être valide. Ici : web, localhost, db et l'adresse IP 127.0.0.1. Modifiez cette liste pour qu'elle corresponde aux noms d'hôte réels par lesquels votre serveur sera joint.

```shell
sudo tee /out/cert.ext > /dev/null <<EOF
[v3_req]
basicConstraints = CA:FALSE
keyUsage         = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName   = @alt_names

[alt_names]
DNS.1 = web
DNS.2 = localhost
DNS.3 = db
IP.1  = 127.0.0.1
EOF
```

## Étape 6 : Générer une demande de signature de certificat

Une CSR (Certificate Signing Request) est une demande générée à partir de la clé privée du serveur. Elle signifie : « Voici mon identité, merci de me signer. » Elle n'a aucun effet par elle-même. Ce fichier intermédiaire sert uniquement à l'étape 7 (vous pouvez le supprimer ensuite si vous le souhaitez).


<Tabs groupId="sync">
<TabItem value="Sur le serveur central/distant" label="Sur le serveur central/distant">

```shell
sudo openssl req -new -key /out/web/server-key.pem -out /out/web/server.csr \
  -subj "/CN=web/O=Centreon"
```

</TabItem>
<TabItem value="Sur le serveur de base de données" label="Sur le serveur de base de données">

```shell
sudo openssl req -new -key /out/db/server-key.pem -out /out/db/server.csr \
  -subj "/CN=db/O=Centreon"
```

</TabItem>
</Tabs>

## Étape 7 : Signer le certificat final avec l'autorité de certification racine (validité de 397 jours)

C'est cette étape qui produit le certificat serveur utilisable : l'autorité de certification (son certificat et sa clé privée, créés aux étapes 2 et 3) signe la CSR de l'étape 6, en appliquant les extensions et les SAN définis à l'étape 5.

* `-days 397` : 397 jours est la durée de vie maximale actuellement acceptée par les principaux navigateurs (Apple, Google, Mozilla) pour les certificats de serveur TLS. Au-delà, les clients risquent de rejeter le certificat.
* `-CAcreateserial` : crée, lors de la première exécution, un fichier de suivi des numéros de série (rootCA.srl), puis l'incrémente à chaque nouvelle signature. Chaque certificat émis par cette autorité de certification reçoit ainsi un numéro de série unique.

<Tabs groupId="sync">
<TabItem value="Sur le serveur central/distant" label="Sur le serveur central/distant">

```shell
sudo openssl x509 -req -in /out/web/server.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/web/server.pem -days 397 -sha256 \
  -extfile /out/cert.ext -extensions v3_req
```

</TabItem>
<TabItem value="Sur le serveur de base de données" label="Sur le serveur de base de données">

```shell
sudo openssl x509 -req -in /out/db/server.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/db/server.pem -days 397 -sha256 \
  -extfile /out/cert.ext -extensions v3_req
```

</TabItem>
</Tabs>

## Étape 8 : Définir les permissions

Les permissions suivent ici le principe du moindre privilège :

* `0644` (lecture pour tous, écriture pour le propriétaire uniquement) pour les certificats publics : ils ne contiennent aucun secret.
* `0640` (lecture pour le propriétaire et le groupe, aucun accès pour les autres) pour la clé privée du serveur. Cette clé est sensible, mais un service exécuté sous un groupe spécifique aura probablement besoin de la lire.

Pour l'autorité de certification racine :

```shell
sudo chmod 0644 /out/CA/rootCA.pem
```

Pour le serveur central/distant :

```shell
sudo chmod 0644 /out/web/server.pem
sudo chmod 0640 /out/web/server-key.pem
```

Pour la base de données :

```shell
sudo chmod 0644 /out/db/server.pem
sudo chmod 0640 /out/db/server-key.pem
```

Les 3 fichiers nécessaires se trouvent maintenant dans votre dossier **/out**. Vous pouvez les copier aux emplacements appropriés sur vos serveurs (et les renommer si besoin).

<!-- VIEILLE PROCEDURE
This procedure allows you to create:

- A private key for the server: **centreon7.key** in our case. It will be used by the Apache service.
- A CSR (Certificate Signing Request) file: **centreon7.csr** in our case.
- A private key for the certificate of the certification authority: **ca_demo.key** in our case.
- A x509 certificate to sign your certificate for the server: **ca-demo.crt** in our case.
- A certificate for the server: **centreon7.crt** in our case.

Let's assume that you have a Centreon server with a **centreon7.localdomain** FQDN address.

1. Prepare the OpenSSL configuration:

  Due to a policy change at Google, self-signed certificates may be rejected by the Google Chrome browser (it is not even possible to add an exception). To continue using this browser, you must change the OpenSSL configuration.

  <<Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">>

  Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

  </TabItem>

  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  Open the file **/etc/pki/tls/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.

  </TabItem>
  <TabItem value="Debian 12" label="Debian 12">
  
  Open the file **/etc/ssl/openssl.cnf**. The goal here is to edit this file in order to inform the various IPs and FQDNs for the server.
  
  </TabItem>
  </Tabs>
  
  Find the ```[v3_ca]``` section in order to add a new ```alt_names``` tag:
  
  ```text
  # Add the alt_names tag that allows you to inform our various IPs and FQDNs for the server
  [ alt_names ]
  IP.1 = xxx.xxx.xxx.xxx
  DNS.1 = centreon7.localdomain
  # If you have several IP (HA: vip + ip)
  # IP.2 = xxx.xxx.xxx.xxx
  [ v3_ca ]
  subjectAltName = @alt_names
  ```
  
  Here is an example of how the file should look:
  ```text
  [ alt_names ]
  IP.1 = 10.25.11.73
  DNS.1 = centreon7.localdomain
  
  [ v3_ca ]
  subjectAltName = @alt_names
  ```
  
2. Create a private key for the server:
  
  Let's create a private key named **centreon7.key** without a password so that it can be used by the Apache service.
  ```text
  openssl genrsa -out centreon7.key 2048
  ```
  
  Protect your file by limiting rights:
  ```text
  chmod 400 centreon7.key
  ```
  
3. Create a Certificate Signing Request file:
  
  From the key you created, create a CSR (Certificate Signing Request) file: **centreon7.csr** in our case. Fill in the fields according to your company. The **Common Name** field must be identical to the hostname of your Apache server (in our case it is **centreon7.localdomain**).
  ```text
  openssl req -new -key centreon7.key -out centreon7.csr
  ```
  
4. Create a private key for the certificate of certification authority:
  
  Create a private key for this authority: **ca_demo.key** in our case. We add the **-aes256** option to encrypt the output key and include a password. This password will be requested each time this key is used.
  ```text
  openssl genrsa -aes256 2048 > ca_demo.key
  ```
  
5. Create an x509 certificate from the private key of the certificate of certification authority:
  
  Create an x509 certificate that will be valid for one year: **ca_demo.crt** in our case.
  
  > Note that it is necessary to simulate a trusted third party, so the **Common Name** field must be different from the server certificate.
  ```text
  openssl req -new -x509 -days 365 -key ca_demo.key -out ca_demo.crt
  ```
  
  The certificate being created will enable you to sign your server certificate.
  
6. Create a certificate for the server:
  
  Create your certificate for the server by using the x509 certificate (**ca_demo.crt**) to sign it.
  
  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/pki/tls/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  <TabItem value="Debian 12" label="Debian 12">
  
  ```text
  openssl x509 -req -in centreon7.csr -out centreon7.crt -CA ca_demo.crt -CAkey ca_demo.key -CAcreateserial -CAserial ca_demo.srl  -extfile /etc/ssl/openssl.cnf -extensions v3_ca
  ```
  
  </TabItem>
  </Tabs>
  
  The password created at step **Create a private key for the certificate of certification authority** must be entered. You get your server certificate named **centreon7.crt**.
  
  You can view the contents of the file: 
  ```text
  less centreon7.crt
  ```
  
7. You must then retrieve the x509 certificate file (**ca_demo.crt**) and import it into your browser's certificate manager.
  
Now that you have your self-signed certificate, you can perform the following procedure to activate HTTPS mode on your Apache server.
 -->
<!-- ## Détail de tous les endroits où mettre des certificats

| Fichier / Machine (service) | central (http) | central (gorg) | poller (cbd) | remote (http) | central-db-loc(db) | central-db-rem(db) | map (java) | map (db) | mbi (java) | mbi (db) |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| rootCA.pem                  | v | v | v | v | v | v | v | v | v | v |
| rootCA.key                  |   |   |   |   |   |   |   |   |   |   |
| server.pem                  | v | v |   | v | v | v | v | v | v | v |
| server.key                  | v | v * |   | v | v | v | v | v | v | v | -->
<!-- 
## Emplacement final des fichiers

Ce tableau indique les emplacements standard (chemins système) où sont généralement stockés les certificats TLS utilisés par les différents composants Centreon, selon la distribution Linux.

| Machine (service) | Fichier | Chemin standard sous EL | Chemin standard sous Debian |
|:---|:---|:---|:---|
| central/distant (Apache / Nginx) | rootCA.pem | /etc/pki/ca-trust/source/anchors | /usr/local/share/ca-certificates |
|  | server.pem | /etc/pki/tls/certs | /etc/ssl/certs |
|  | server-key.pem | /etc/pki/tls/private | /etc/ssl/private |
| central/distant (Gorgone - Perl) | rootCA.pem | /etc/pki/centreon-tls | /etc/pki/centreon-tls |
|  | server.pem | /etc/pki/centreon-tls | /etc/pki/centreon-tls |
|  | server-key.pem | /etc/pki/centreon-tls | /etc/pki/centreon-tls|
| base de données centrale | rootCA.pem | /etc/my.cnf.d/ssl | /etc/mysql/ssl |
|  | server.pem | /etc/my.cnf.d/ssl | /etc/mysql/ssl |
|  | server-key.pem | /etc/my.cnf.d/ssl | /etc/mysql/ssl |
 -->
<!-- tableau complet
| Machine (Service) | Fichier | Chemin standard - RHEL (AlmaLinux) | Chemin standard - Debian (Ubuntu) |
|:---|:---|:---|:---|
| central / remote (Apache / Nginx) | rootCA | /etc/pki/ca-trust/source/anchors/rootCA.pem | /usr/local/share/ca-certificates/rootCA.crt * |
|  | server | /etc/pki/tls/certs/centreon-server.pem | /etc/ssl/certs/centreon-server.pem |
|  | key | /etc/pki/tls/private/centreon-server.key | /etc/ssl/private/centreon-server.key |
| central / remote (gorgone - Perl) | rootCA | /etc/pki/centreon-tls/rootCA.pem | /etc/pki/centreon-tls/rootCA.pem |
|  | server | /etc/pki/centreon-tls/server.pem | /etc/pki/centreon-tls/server.pem |
|  | key | /etc/pki/centreon-tls/server-key.pem | /etc/pki/centreon-tls/server-key.pem |
| poller (Centreon Broker) | rootCA | /etc/centreon-broker/ssl/rootCA.pem (ou /etc/pki/tls/certs/ca-bundle.crt) | /etc/centreon-broker/ssl/rootCA.pem (ou /etc/ssl/certs/ca-certificates.crt) |
| central-db / map-db / mbi-db (MariaDB/MySQL) | rootCA | /etc/my.cnf.d/ssl/rootCA.pem | /etc/mysql/ssl/rootCA.pem |
|  | server | /etc/my.cnf.d/ssl/server.pem | /etc/mysql/ssl/server.pem |
|  | key | /etc/my.cnf.d/ssl/server.key | /etc/mysql/ssl/server.key |
| map / mbi (Services Java) | rootCA | Intégré dans : /etc/pki/java/cacerts | Intégré dans : /etc/ssl/certs/java/cacerts |
|  | Keystore | /etc/centreon-map/keystore.p12 (Format PKCS12) | /var/lib/centreon-map/keystore.p12 (ou /etc/) | -->
