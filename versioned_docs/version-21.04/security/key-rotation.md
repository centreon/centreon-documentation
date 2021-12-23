---
id: key-rotation
title: Rotating RPM keys
---

For security reasons, the keys used to sign Centreon RPMs have to be rotated regularly.

## Fresh installation

If you did a fresh installation after the new RPM key was published, 
there are no additional actions to do besides accepting the new rpm key.

```shell
Retrieving key from https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Importing GPG key 0x3FC49C1B:
Userid     : "Centreon Enterprise Server Official Signing Key <admin@centreon.com>"
Fingerprint: 1035 e42c b766 7952 ee42 dee9 a97d aa5a 3fc4 9c1b
From       : https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Is this ok [y/N]: 
```

However, you can [check that you have the correct key](#checks).

## Existing installation

If you did a fresh installation of a Centreon platform 
before the new RPM key was published, the existing key has to be replaced with the new one.

1. Download the following script:

    ```shell
    curl -JO https://raw.githubusercontent.com/centreon/centreon/master/check-centreon-gpg-key.sh
    ```

2. Make the script executable:

    ```shell
    chmod u+x check-centreon-gpg-key.sh
    ```

3. Run the script:

    ```shell
    sh check-centreon-gpg-key.sh
    ```

    The script will:
    * check the RPM key in the RPM database and ask you to remove it
    * check the key file in the **/etc/pki/rpm-gpg** directory
    * ask you to fetch and import the new RPM key into the RPM database
    * ask you to update the **release** RPM package (this will remove the revoked key from **/etc/pki/rpm-gpg**)
    * ask you to check the signature of the RPM packages.

## Checks

You can then check that the new key has been correctly imported. For the [new key published on October 14, 2021](#list-of-keys):

<!--DOCUSAURUS_CODE_TABS-->
<!--Fresh installation-->

* After installation, check if the new key has been correctly imported into the RPM database:

    ```shell
    rpm -qi gpg-pubkey-3fc49c1b-6166eb52
    ```

    The results should be as follows:

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

* Check that the only Centreon key in the RPM database is this one: **gpg-pubkey-3fc49c1b-6166eb52**:

    ```shell
    rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
    ```

    The results should be as follows:

    ```shell
    gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
    gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
    gpg-pubkey-3fc49c1b-6166eb52	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    ```

<!--Existing installation-->

* Check if the new key has been correctly imported into the RPM database:

    ```shell
    rpm -qi gpg-pubkey-3fc49c1b-6166eb52
    ```

    The results should be as follows:

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

* Check that the old key is not in the RPM database anymore (there should 
only be **gpg-pubkey-3fc49c1b-6166eb52**):

  ```shell
  rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
  ```

  The results should be as follows:

  ```shell
  gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
  gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
  gpg-pubkey-3fc49c1b-6166eb52	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
  ```

<!--END_DOCUSAURUS_CODE_TABS-->

## List of keys

| Fingerprint                                       | Validity                                        |
|---------------------------------------------------|-------------------------------------------------|
| 0E52 401B 40F6 044F 928C 0B7B F6FC 4AE3 8A76 52BC | revoked October 14, 2021                        |
| [1035 E42C B766 7952 EE42 DEE9 A97D AA5A 3FC4 9C1B](https://yum-gpg.centreon.com/RPM-GPG-KEY-CES) | valid from October 14, 2021 to October 13, 2023 |
