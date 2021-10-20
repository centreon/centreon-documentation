---
id: key-rotation
title: Rotation de clés RPM
---

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon doivent être changées régulièrement.

## Nouvelle installation

Si vous avez installé une nouvelle plateforme Centreon après la publication de la nouvelle clé, aucune action n'est nécessaire hormis
accepter la nouvelle clé lorsque nécessaire.

    ```shell
    Récupération de la clé à partir de https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
    Importation de la clef GPG 0x3FC49C1B :
    ID utilisateur : « Centreon Enterprise Server Official Signing Key <admin@centreon.com> »
    Empreinte      : 1035 e42c b766 7952 ee42 dee9 a97d aa5a 3fc4 9c1b
    Provient de    : https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
    Est-ce correct [o/N] : y
    ```

Vous pouvez cependant [vérifier que vous avez la bonne clé](#vérifications).

## Installation existante

Si vous avez installé une plateforme Centreon avant la publication de la nouvelle clé, la clé existante doit être remplacée par la nouvelle.

1. Téléchargez le script suivant :

    ```shell
    curl -JO https://raw.githubusercontent.com/centreon/centreon/master/check-centreon-gpg-key.sh
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

## Vérifications

Vérifiez que la nouvelle clé a été correctement importée. Pour la [nouvelle clé publiée le 14 octobre 2021](#list-of-keys) :

<!--DOCUSAURUS_CODE_TABS-->

<!--Nouvelle installation-->

* Après l'installation, vérifiez si la nouvelle clé a été correctement importée dans la base de données RPM :

    ```shell
    rpm -qi gpg-pubkey-3fc49c1b-6166eb52
    ```

    Le résultat devrait être le suivant :

    ```shell
    Name        : gpg-pubkey
    Version     : 3fc49c1b
    Release     : 6166eb52
    Architecture: (none)
    Install Date: jeu. 14 oct. 2021 09:25:42 UTC
    Group       : Public Keys
    Size        : 0
    License     : pubkey
    Signature   : (none)
    Source RPM  : (none)
    Build Date  : mer. 13 oct. 2021 14:21:06 UTC
    Build Host  : localhost
    Relocations : (not relocatable)
    Packager    : Centreon Enterprise Server Official Signing Key <admin@centreon.com>
    Summary     : gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    Description :
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: rpm-4.11.3 (NSS-3)

    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
    4nhvUWkBsZoUPIeT
    =BqDF
    -----END PGP PUBLIC KEY BLOCK-----
    ```

* Vérifiez que la seule clé Centreon présente dans la base de données RPM est la suivante : **gpg-pubkey-3fc49c1b-6166eb52**.

    ```shell
    rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
    ```

    Le résultat devrait être le suivant :

    ```shell
    gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
    gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
    gpg-pubkey-3fc49c1b-6166eb52	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    ```

<!--Installation existante-->


* Vérifiez si la nouvelle clé a été correctement importée dans la base de données RPM :

    ```shell
    rpm -qi gpg-pubkey-3fc49c1b-6166eb52
    ```

    Le résultat devrait être le suivant :

    ```shell
    Name        : gpg-pubkey
    Version     : 3fc49c1b
    Release     : 6166eb52
    Architecture: (none)
    Install Date: jeu. 14 oct. 2021 09:25:42 UTC
    Group       : Public Keys
    Size        : 0
    License     : pubkey
    Signature   : (none)
    Source RPM  : (none)
    Build Date  : mer. 13 oct. 2021 14:21:06 UTC
    Build Host  : localhost
    Relocations : (not relocatable)
    Packager    : Centreon Enterprise Server Official Signing Key <admin@centreon.com>
    Summary     : gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    Description :
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: rpm-4.11.3 (NSS-3)

    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
    4nhvUWkBsZoUPIeT
    =BqDF
    -----END PGP PUBLIC KEY BLOCK-----
    ```

* Vérifiez que l'ancienne clé n'apparaît plus dans la base de données RPM (il devrait y avoir uniquement la clé **gpg-pubkey-3fc49c1b-6166eb52**):

    ```shell
    rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
    ```

    Le résultat devrait être le suivant :

    ```shell
    gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
    gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
    gpg-pubkey-3fc49c1b-6166eb52	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    ```
<!--END_DOCUSAURUS_CODE_TABS-->

## Liste des clés

| Empreinte                                         | Validité                                     |
|---------------------------------------------------|----------------------------------------------|
| 0E52 401B 40F6 044F 928C 0B7B F6FC 4AE3 8A76 52BC | révoquée le 14 octobre 2021                  |
| [1035 E42C B766 7952 EE42 DEE9 A97D AA5A 3FC4 9C1B](https://yum-gpg.centreon.com/RPM-GPG-KEY-CES) | valide du 14 octobre 2021 au 13 octobre 2023 |
