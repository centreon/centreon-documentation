---
id: self-signed-certificate
title: Créer un certificat auto-signé
description: "Créez une autorité de certification et un certificat auto-signé avec OpenSSL pour sécuriser en TLS l'interface web et la base de données Centreon."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Les certificats auto-signés sont réservés aux tests. Vous NE DEVEZ PAS les utiliser en production.

## Fichiers nécessaires pour établir des connexions TLS avec des certificats auto-signés

Cette procédure vous permet de créer l'ensemble de fichiers suivant, qui suffit à sécuriser la connexion à l'interface web et à la base de données :

| Fichier         | Où le stocker                 | Rôle                                                                    |
|--------------|-----------------------------------|-------------------------------------------------------------------------|
| web-key.pem | Sur le serveur central/distant à sécuriser | Clé privée de **web.pem** : reste secrète sur le serveur sécurisé. Sert à prouver l'identité du serveur. |
| web.pem | Sur le serveur central/distant à sécuriser | Le certificat signé qui sera envoyé automatiquement à tout client tentant de se connecter au serveur central/distant sécurisé. |
| db-key.pem | Sur le serveur de base de données à sécuriser | Clé privée de **db.pem** : reste secrète sur le serveur sécurisé. Sert à prouver l'identité du serveur. |
| db.pem | Sur le serveur de base de données à sécuriser | Le certificat signé qui sera envoyé automatiquement à tout client tentant de se connecter au serveur de base de données sécurisé. |
| rootCA.pem | Sur le client (navigateur, OS...) | Certificat auto-signé de l'autorité de certification racine. Il s'agit d'un fichier public, qui sert à valider le certificat **web.pem** ou **db.pem** reçu par le client. **rootCA.pem** devra être copié sur toutes les machines qui se connecteront à la machine sécurisée (celle qui a envoyé **web.pem** ou **db.pem**). |
| rootCA.key | À conserver en lieu sûr, afin de pouvoir renouveler les certificats. | Clé privée de l'autorité de certification racine. Sert à signer **web.pem** et **db.pem**, ainsi qu'à signer de nouveaux certificats lorsqu'ils expirent (au bout de 397 jours). Ne la copiez jamais sur une autre machine. Si vous la perdez, vous devrez créer une nouvelle autorité de certification et redéployer **rootCA.pem** partout. |

## Ce que fait cette procédure

La procédure crée les fichiers nécessaires à la mise en place d'une connexion TLS, dans des répertoires temporaires. Lorsque vous configurez HTTPS sur un serveur, vous devez déployer les fichiers nécessaires au bon emplacement (la dernière étape explique où les copier).

La procédure peut être exécutée sur une plateforme Centreon disposant d'une base de données locale ou distante.

* Si vous avez une base de données locale, exécutez les commandes des deux onglets sur votre serveur Centreon.
* Si vous avez une base de données distante, exécutez toute la procédure sur votre serveur Centreon (les deux onglets). La dernière étape explique comment copier **rootCA.pem**, **db.pem** et **db-key.pem** sur le serveur de base de données.

## Étape 1 : Créer les répertoires de sortie

Créez des répertoires pour organiser les fichiers : un pour les fichiers propres à l'autorité de certification, un pour les fichiers destinés au service web ou au service de base de données.

Pour l'autorité de certification :

```shell
sudo mkdir -p /out/CA
```

Pour chaque certificat :

<Tabs groupId="sync">
<TabItem value="Certificat du serveur web" label="Certificat du serveur web">

```shell
sudo mkdir -p /out/web
```

</TabItem>
<TabItem value="Certificat de la base de données" label="Certificat de la base de données">

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

Cette étape crée le certificat de l'autorité de certification : le document public qui identifie votre autorité de certification (nom, organisation, etc.) et qui sera ensuite distribué à tout client ou serveur devant faire confiance aux certificats qu'elle signe.

Ce certificat est "auto-signé", car aucune autorité ne se trouve au-dessus de lui : l'autorité de certification se porte garante d'elle-même. C'est un fonctionnement normal pour une autorité de certification racine.

* `-x509` indique à OpenSSL de produire directement un certificat (et non une demande de signature).
* `-days 3650` fixe l'expiration à environ 10 ans. Cette durée est habituelle pour une autorité de certification racine, qui n'a pas vocation à être renouvelée souvent.
* `-subj` définit les champs d'identité directement dans la ligne de commande : CN (Common Name) vaut « Test Dev CA », O (Organization) vaut « YourOrganization » et OU (Organizational Unit) vaut « R&D ». Remplacez ces valeurs par celles de votre organisation.

```shell
sudo openssl req -x509 -new -key /out/CA/rootCA.key \
  -sha256 -days 3650 \
  -subj "/CN=Test Dev CA/O=YourOrganization/OU=R&D" \
  -out /out/CA/rootCA.pem
```

## Étape 4 : Générer la clé privée du serveur (RSA 2048 bits)

Il s'agit de la clé privée du serveur lui-même (du serveur central/distant ou de la base de données). Elle est distincte de la clé de l'autorité de certification : le serveur ne doit jamais partager une clé avec l'autorité de certification.

<Tabs groupId="sync">
<TabItem value="Certificat du serveur web" label="Certificat du serveur web">

```shell
sudo openssl genrsa -out /out/web/web-key.pem 2048
```

</TabItem>
<TabItem value="Certificat de la base de données" label="Certificat de la base de données">

```shell
sudo openssl genrsa -out /out/db/db-key.pem 2048
```

</TabItem>
</Tabs>

## Étape 5 : Générer une demande de signature de certificat

Une CSR (Certificate Signing Request) est une demande générée à partir de la clé privée du serveur. Elle signifie : « Voici mon identité, merci de me signer ». Elle n'a aucun effet par elle-même. Ce fichier intermédiaire sert uniquement à l'étape 6 (vous pouvez le supprimer ensuite si vous le souhaitez).

Remplacez **centreon.example.com** ou **db.example.com** par le FQDN de votre serveur. Utilisez le même nom que la première entrée DNS du fichier **.ext** à l'étape 6.

<Tabs groupId="sync">
<TabItem value="Certificat du serveur web" label="Certificat du serveur web">

```shell
sudo openssl req -new -key /out/web/web-key.pem -out /out/web/web.csr \
  -subj "/CN=centreon.example.com/O=Centreon"
```

</TabItem>
<TabItem value="Certificat de la base de données" label="Certificat de la base de données">

```shell
sudo openssl req -new -key /out/db/db-key.pem -out /out/db/db.csr \
  -subj "/CN=db.example.com/O=Centreon"
```

</TabItem>
</Tabs>

## Étape 6 : Signer le certificat du serveur avec l'autorité de certification racine (validité de 397 jours)

C'est cette étape qui produit le certificat du serveur utilisable : l'autorité de certification (son certificat et sa clé privée, créés aux étapes 2 et 3) signe la CSR de l'étape 5.

Créez d'abord un fichier qui définit les extensions du certificat. Les entrées `subjectAltName` doivent correspondre aux noms et adresses IP que les clients utilisent pour joindre le serveur. Sinon, la connexion est refusée.

<Tabs groupId="sync">
<TabItem value="Certificat du serveur web" label="Certificat du serveur web">

Remplacez **centreon.example.com** et **192.168.1.10** par le FQDN et l'adresse IP que les utilisateurs et Gorgone utilisent pour accéder à l'interface web :

```shell
sudo tee /out/web/web.ext > /dev/null <<'EOF'
[v3_req]
basicConstraints = critical, CA:FALSE
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1 = centreon.example.com
IP.1 = 192.168.1.10
EOF
```

</TabItem>
<TabItem value="Certificat de la base de données" label="Certificat de la base de données">

Remplacez **db.example.com** et **192.168.1.20** par le FQDN et l'adresse IP que le serveur central utilise pour se connecter à la base de données. Avec une base de données locale, le serveur central se connecte via **localhost** : conservez donc les entrées `localhost` et `127.0.0.1` :

```shell
sudo tee /out/db/db.ext > /dev/null <<'EOF'
[v3_req]
basicConstraints = critical, CA:FALSE
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1 = db.example.com
DNS.2 = localhost
IP.1 = 192.168.1.20
IP.2 = 127.0.0.1
EOF
```

</TabItem>
</Tabs>

Puis signez le certificat. La commande utilise les options suivantes :

* `-days 397` : 397 jours est la durée de vie maximale actuellement acceptée par les principaux navigateurs (Apple, Google, Mozilla) pour les certificats de serveur TLS. Au-delà, les clients risquent de rejeter le certificat.
* `-CAcreateserial` : crée, lors de la première exécution, un fichier de suivi des numéros de série (rootCA.srl), puis l'incrémente à chaque nouvelle signature. Chaque certificat émis par cette autorité de certification reçoit ainsi un numéro de série unique.
* `-extfile` / `-extensions v3_req` : ajoute les extensions définies dans le fichier **.ext**, notamment les noms et adresses IP pour lesquels le certificat est valide (`subjectAltName`).

<Tabs groupId="sync">
<TabItem value="Certificat du serveur web" label="Certificat du serveur web">

```shell
sudo openssl x509 -req -in /out/web/web.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/web/web.pem -days 397 -sha256 \
  -extfile /out/web/web.ext -extensions v3_req
```

</TabItem>
<TabItem value="Certificat de la base de données" label="Certificat de la base de données">

```shell
sudo openssl x509 -req -in /out/db/db.csr \
  -CA /out/CA/rootCA.pem -CAkey /out/CA/rootCA.key \
  -CAserial /out/CA/rootCA.srl -CAcreateserial \
  -out /out/db/db.pem -days 397 -sha256 \
  -extfile /out/db/db.ext -extensions v3_req
```

</TabItem>
</Tabs>

## Étape 7 : Définir les permissions

Les permissions suivent ici le principe du moindre privilège :

* `0644` (lecture pour tous, écriture pour le propriétaire uniquement) pour les certificats publics : ils ne contiennent aucun secret.
* `0640` (lecture pour le propriétaire et le groupe, aucun accès pour les autres) pour la clé privée du serveur. Cette clé est sensible, mais un service exécuté sous un groupe spécifique aura probablement besoin de la lire. La [procédure d'installation](../installation/installation-of-a-central-server/using-packages.md) attribue le bon groupe (par ex. **mysql**) une fois les fichiers copiés.

Pour l'autorité de certification racine :

```shell
sudo chmod 0644 /out/CA/rootCA.pem
```

Pour le serveur central/distant :

```shell
sudo chmod 0644 /out/web/web.pem
sudo chmod 0640 /out/web/web-key.pem
```

Pour la base de données :

```shell
sudo chmod 0644 /out/db/db.pem
sudo chmod 0640 /out/db/db-key.pem
```

## Étape 8 : Copier les fichiers

Vous disposez maintenant des fichiers nécessaires dans votre dossier **/out**. Vous pouvez les copier aux emplacements appropriés sur vos serveurs (par exemple **/etc/pki/centreon-tls/** sur EL 9 ou 10 comme dans l'exemple ci-dessous, ou **/etc/ssl/certs/centreon-tls** sur Debian 13).

1. Déplacez **rootCA.key** dans un endroit sûr, puis supprimez-le de votre répertoire **/out**.

2. Sur le serveur central/distant :

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/web/web.pem /out/web/web-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/web/web.pem /out/web/web-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mkdir -p /etc/ssl/certs/centreon-tls/
  sudo cp /out/CA/rootCA.pem /out/web/web.pem /out/web/web-key.pem /etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

3. Pour la base de données :

* Si votre base de données est locale, exécutez ces commandes sur le serveur central :

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  sudo cp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem /etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mkdir -p /etc/ssl/certs/centreon-tls/
  sudo cp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem /etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

* Si votre base de données est distante, créez le dossier sur le serveur de base de données :

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mkdir -p /etc/pki/centreon-tls
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mkdir -p /etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

  Ensuite, sur le serveur central, copiez les fichiers vers le serveur de base de données à l'aide d'une méthode sécurisée, car **db-key.pem** est une clé privée. Remplacez **db.example.com** par l'adresse de votre serveur de base de données :

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem root@db.example.com:/etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">
  
  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem root@db.example.com:/etc/pki/centreon-tls/
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem root@db.example.com:/etc/ssl/certs/centreon-tls/
  ```

  </TabItem>
  </Tabs>

  Si l'utilisateur root ne peut pas se connecter en SSH au serveur de base de données, copiez les fichiers dans le dossier personnel d'un utilisateur qui le peut (remplacez **user**) :

  ```shell
  sudo scp /out/CA/rootCA.pem /out/db/db.pem /out/db/db-key.pem user@db.example.com:~/
  ```

  Puis, sur le serveur de base de données, déplacez-les dans le bon dossier :

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

  ```shell
  sudo mv ~/rootCA.pem ~/db.pem ~/db-key.pem /etc/pki/centreon-tls/
  sudo chown root:root /etc/pki/centreon-tls/*.pem
  ```

  </TabItem>
  <TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

  ```shell
  sudo mv ~/rootCA.pem ~/db.pem ~/db-key.pem /etc/pki/centreon-tls/
  sudo chown root:root /etc/pki/centreon-tls/*.pem
  ```

  </TabItem>
  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  sudo mv ~/rootCA.pem ~/db.pem ~/db-key.pem /etc/ssl/certs/centreon-tls/
  sudo chown root:root /etc/ssl/certs/centreon-tls/*.pem
  ```

  </TabItem>
  </Tabs>

4. Supprimez les clés privées du dossier **/out**, puisqu'elles se trouvent désormais à leur emplacement définitif :

    ```shell
    sudo rm /out/web/web-key.pem /out/db/db-key.pem
    ```
