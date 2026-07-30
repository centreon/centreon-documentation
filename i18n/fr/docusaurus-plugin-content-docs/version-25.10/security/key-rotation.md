---
id: key-rotation
title: Rotation de clés
description: "Faire tourner les clés utilisées pour signer les paquets Centreon"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon ou le dépôt Debian doivent être changées occasionnellement.

## Nouvelle installation

<Tabs groupId="sync" queryString>
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

Si vous avez installé une nouvelle plateforme Centreon après la publication de la nouvelle clé, aucune action n'est à effectuer hormis
accepter la nouvelle clé lorsque nécessaire.

```shell
Récupération de la clé à partir de https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Importation de la clef GPG 0xFAA09FEB :
ID utilisateur : "Centreon RPM 2025 2027 <technique+gpg@centreon.com>"
Empreinte      : 41fb bebf aeaf 6d07 2267 540a 0b08 79fe faa0 9feb
Provient de    : https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Est-ce correct [o/N] : y
```

</TabItem>
<TabItem value="Debian" label="Debian">

Si vous avez installé une nouvelle plateforme Centreon après la publication de la nouvelle clé, aucune action n'est à effectuer.

</TabItem>
</Tabs>

Vous pouvez cependant [vérifier que vous avez la bonne clé](#vérifications).

## Installation existante

<Tabs groupId="sync" queryString>
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

Si vous avez installé une plateforme Centreon avant la publication de la nouvelle clé, la clé existante doit être remplacée par la nouvelle.

1. Téléchargez le script suivant :

```shell
curl -JLO https://raw.githubusercontent.com/centreon/centreon/refs/heads/develop/centreon/check-centreon-gpg-key.sh
```

2. Rendez le script exécutable :

```shell
chmod u+x check-centreon-gpg-key.sh
```

3. Exécutez le script :

```shell
    sh check-centreon-gpg-key.sh
```

Ce script :
* vérifie la clé RPM dans la base de données RPM, et vous demande de la supprimer
* vérifie le fichier de clé dans le répertoire **/etc/pki/rpm-gpg**
* vous fait importer la nouvelle clé RPM dans la base de données RPM
* vous fait mettre à jour le paquet RPM **release** (cela supprimera la clé révoquée du répertoire **/etc/pki/rpm-gpg**)
* vous fait vérifier la signature des paquets RPM.

</TabItem>
<TabItem value="Debian" label="Debian">

1. Supprimez l'ancienne clé :

   ```shell
   apt-key del 1441882BED29D70CF2E874D65E9C374559B6C02E
   ```

2. Importez la nouvelle clé :

   ```shell
   wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
   apt update
   ```

</TabItem>
</Tabs>

## Vérifications

<Tabs groupId="sync" queryString>
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

Vérifiez que la nouvelle clé a été correctement importée. Pour la [nouvelle clé publiée le 2 décembre 2025](#liste-des-clés) :

<Tabs groupId="sync" queryString>
<TabItem value="Nouvelle installation" label="Nouvelle installation">

* Après l'installation, vérifiez si la nouvelle clé a été correctement importée dans la base de données RPM :

   ```shell
   rpm -qi gpg-pubkey-faa09feb-692eaf2a
   ```

   Le résultat devrait être le suivant :

    ```shell
    Name        : gpg-pubkey
    Version     : faa09feb
    Release     : 692eaf2a
    Architecture: (none)
    Install Date: Tue 02 Dec 2025 12:52:18 PM GMT
    Group       : Public Keys
    Size        : 0
    License     : pubkey
    Signature   : (none)
    Source RPM  : (none)
    Build Date  : Tue 02 Dec 2025 09:19:38 AM GMT
    Build Host  : localhost
    Relocations : (not relocatable)
    Packager    : Centreon RPM 2025 2027 (Centreon RPM 2025 2027) <technique+gpg@centreon.com>
    Summary     : gpg(Centreon RPM 2025 2027 (Centreon RPM 2025 2027) <technique+gpg@centreon.com>)
    Description :
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: rpm-4.14.3 (NSS-3)
 
    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
    kHPSiA==
    =1bjv
    -----END PGP PUBLIC KEY BLOCK-----
    ```

* Vérifiez que la seule clé Centreon présente dans la base de données RPM est la suivante : **gpg-pubkey-faa09feb-692eaf2a**.

   ```shell
   rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
   ```

   Le résultat devrait être le suivant :

   ```shell
   gpg-pubkey-b86b3716-61e69f29	AlmaLinux OS 9 <packager@almalinux.org> public key
   gpg-pubkey-faa09feb-692eaf2a	Centreon RPM 2025 2027 <technique+gpg@centreon.com> public key
   ```

</TabItem>
<TabItem value="Installation existante" label="Installation existante">

* Vérifiez si la nouvelle clé a été correctement importée dans la base de données RPM :

   ```shell
   rpm -qi gpg-pubkey-faa09feb-692eaf2a
   ```

   Le résultat devrait être le suivant :

    ```shell
    Name        : gpg-pubkey
    Version     : faa09feb
    Release     : 692eaf2a
    Architecture: (none)
    Install Date: Tue 02 Dec 2025 12:52:18 PM GMT
    Group       : Public Keys
    Size        : 0
    License     : pubkey
    Signature   : (none)
    Source RPM  : (none)
    Build Date  : Tue 02 Dec 2025 09:19:38 AM GMT
    Build Host  : localhost
    Relocations : (not relocatable)
    Packager    : Centreon RPM 2025 2027 (Centreon RPM 2025 2027) <technique+gpg@centreon.com>
    Summary     : gpg(Centreon RPM 2025 2027 (Centreon RPM 2025 2027) <technique+gpg@centreon.com>)
    Description :
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: rpm-4.14.3 (NSS-3)
 
    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
    kHPSiA==
    =1bjv
    -----END PGP PUBLIC KEY BLOCK-----
    ```

* Vérifiez que l'ancienne clé n'apparaît plus dans la base de données RPM (il devrait y avoir uniquement la clé **gpg-pubkey-faa09feb-692eaf2a**):

   ```shell
   rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
   ```

   Le résultat devrait être le suivant :

   ```shell
   gpg-pubkey-b86b3716-61e69f29	AlmaLinux OS 9 <packager@almalinux.org> public key
   gpg-pubkey-faa09feb-692eaf2a	Centreon RPM 2025 2027 <technique+gpg@centreon.com> public key
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Debian" label="Debian">

Pour afficher des informations détaillées sur la nouvelle clé et vérifier que celle-ci est correctement installée, exécutez la commande suivante :

```shell
apt-key list "C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4"
```

Le résultat devrait être le suivant :

```shell
pub   ed25519 2024-04-11 [SC]
      C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4
uid          [inconnue] Centreon APT <admin@centreon.com>
sub   cv25519 2024-04-11 [E]
```

</TabItem>
</Tabs>

## Liste des clés

| OS | Empreinte                                         | Validité                                     |
| -- |---------------------------------------------------|----------------------------------------------|
| Alma/RHEL/Oracle Linux | [41FB BEBF AEAF 6D07 2267 540A 0B08 79FE FAA0 9FEB](https://yum-gpg.centreon.com/RPM-GPG-KEY-CES) | Valide du 2 décembre 2025 au 2 décembre 2027 |
| Alma/RHEL/Oracle Linux | 1035 E42C B766 7952 EE42 DEE9 A97D AA5A 3FC4 9C1B | Révoquée le 1er décembre 2025 |
| Alma/RHEL/Oracle Linux | 0E52 401B 40F6 044F 928C 0B7B F6FC 4AE3 8A76 52BC | Révoquée le 14 octobre 2021                  |
| Debian | [C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4](https://apt-key.centreon.com) | Valide à partir du 12 avril 2024 |
| Debian | 1441 882B ED29 D70C F2E8 74D6 5E9C 3745 59B6 C02E | Révoquée le 11 avril 2024 |
