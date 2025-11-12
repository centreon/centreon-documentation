---
id: key-rotation
title: Rotating keys
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For security reasons, the keys used to sign Centreon RPMs or the Debian repository must be rotated occasionally.

## Fresh installation

<Tabs groupId="sync">
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

If you performed a fresh installation after the new RPM key was published,
no additional actions are necessary, apart from accepting the new rpm key.

```shell
Retrieving key from https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Importing GPG key 0x3FC49C1B:
Userid     : "Centreon Enterprise Server Official Signing Key <admin@centreon.com>"
Fingerprint: 1035 e42c b766 7952 ee42 dee9 a97d aa5a 3fc4 9c1b
From       : https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Is this ok [y/N]: 
```

</TabItem>
<TabItem value="Debian" label="Debian">

If you performed a fresh installation after the new key was published,
no additional actions are necessary.

</TabItem>
</Tabs>

However, you can [check that you have the correct key](#checks).

## Existing installation

<Tabs groupId="sync">
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

If you performed a fresh installation of a Centreon platform 
before the new RPM key was published, the existing key must be replaced with the new one.

1. Download the following script:

    ```shell
    curl -JO https://raw.githubusercontent.com/centreon/centreon/master/centreon/check-centreon-gpg-key.sh
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

</TabItem>
<TabItem value="Debian" label="Debian">

1. Remove the old key:

   ```shell
   apt-key del 1441882BED29D70CF2E874D65E9C374559B6C02E
   ```

2. Import the new key:

   ```shell
   wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
   apt update
   ```

</TabItem>
</Tabs>

## Checks

<Tabs groupId="sync">
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

You can then check that the new key has been correctly imported. For the [new key published on October 14, 2021](#list-of-keys):

<Tabs groupId="sync">
<TabItem value="Fresh installation" label="Fresh installation">

* After installation, check if the new key has been correctly imported into the RPM database:

    ```shell
    rpm -qi gpg-pubkey-3fc49c1b-651d4c25
    ```

    The results should be as follows:

    ```shell
    Name        : gpg-pubkey
    Version     : 3fc49c1b
    Release     : 651d4c25
    Architecture: (none)
    Install Date: Mon Apr 22 11:49:38 2024
    Group       : Public Keys
    Size        : 0
    License     : pubkey
    Signature   : (none)
    Source RPM  : (none)
    Build Date  : Wed Oct  4 11:27:33 2023
    Build Host  : localhost
    Relocations : (not relocatable)
    Packager    : Centreon Enterprise Server Official Signing Key <admin@centreon.com>
    Summary     : gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    Description :
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: rpm-4.14.3 (NSS-3)

    mQGNBGFm61IBDADen8ge1CEXjHG/9CWwu1sNkhQ1w5oaExK1FtkVO4ueI8k9jNPn
    pZYeD8ZaqouSSFP8Rl0acz2MfNBZvhxLpTUIothea2HcWQ7fsuIJVPnADazDr045
    YhxfjDy6qMsZ2yWfh3cRzpbJ2BqRFsMcMkGgq/et9LUbDy8WJ0O86YDPL5RX4wDE
    ske7b8ffRu2uhK29hs76UeuuUIGLrVFqlnkuMC8u9YxVgxSONonja3tdkmhl+qR/
    xCRN++l2GNjwRVwE0TyoGN5kNLHVoPWMGUZmQMG0CRZx4+H1wNualUvzRNn/y9V/
    X9Z2+kjEv1c+Zi7oJ7bsYtHgulqEXVEKT5fTPLXapwhKw+uv23JjP7IAFBLlaNhn
    MdRxiM+x2Ej+ZwKaxlXl578wBmpXOlQw6sji+2PM8aWmmO4A4ekYyO5ZRMG0X6OG
    Y+doln8oe5djmvVp9iNvdmblHPOFTzDtpsAJRkRywipSnH21dqqMuZFrU1G46nW3
    f150TbH2zSv1AccAEQEAAbREQ2VudHJlb24gRW50ZXJwcmlzZSBTZXJ2ZXIgT2Zm
    aWNpYWwgU2lnbmluZyBLZXkgPGFkbWluQGNlbnRyZW9uLmNvbT6JAc4EEwEKADgC
    GwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AWIQQQNeQst2Z5Uu5C3umpfapaP8Sc
    GwUCZR1MJQAKCRCpfapaP8ScG4OwDACdOUJekvmHX3LJTdP5xm6mWOnlaAhuPZoo
    csMvJp8oEeeZeIXPq3py0IVyBzB1GrXHVdPYZ6VZ9BREJrZO99lxdgME+2lsFfLW
    oGeGotr99e5c/28kaM/lZdakHelwo42b3Ik9W/SdHMjWIE3dUhIKRIktC5/R2X6m
    Zj7lrAjNdATLyyc6WvrmxoRU3Kw9THb9m+U3Scw+DH9tLNf3gTmXLZLQeN2unGIM
    /bo/VGsg8inZxY0+yABNrIS+xNwx9p0/1deDMk631VTvfi5OwxBZOE7Gv2mcOc4P
    /wgx//X/wQUGitJ2nGEgndg/ab8VxlSgOPWHsNpDFDT7xmFt/d+FYgEO7aNNl4x/
    KlN5RL/NfToBK4kCUiNY7dCCx13w/bXQoTdstlrtV4F3urGyKy5l3JLD6MWg3SYA
    KRaVY9cCU+ZHdITzOSQUHPFEXrxi/4Dl7hfGqL2l1Y6s3DZdJKCO3c1EM4ERVx2Z
    Vrd3a4nRnqGbPvpNQhdt/VfPJ1j9K525AY0EYWbrUgEMAKTcgo0/qtDuB44K4qVD
    K2MchhNENEfx3EbgybfEuRMd2q6MvYcd1LsKfTKT0vQJnWffPq+BhleHQ0HYNvII
    ohKBu24T3LUZnl+bz4Pb4zJXKSm7yVhwg4W4rW+mH6nvyjVzP2KzK2/AI004UKKc
    u693eOpvT5LLlCFz47gXGysJH9v2dDI7u3r7G/xZRd29V+aLk1T+O2RI31HXVSSF
    Zqxnwh1albTTSCOCiae7WeG4ON0jluBLUZCRsTvWG7osubQzxcEO9zT/Ilwdv8ig
    yiYc78j8WPFLb4ngukDOr65NpVWf0gyqf1CtpDxhNue9myTVXce6w3oXW4npX3Ze
    KZwtaCYyvrfuKhXXG8fy0M0mGVvxRVsVJGgq1h1j7dJQI+d9yJmZrYxRmDtO7jgi
    r1YBk/j5noTzbjUSyuztkUGJwwrOXCI+CE/9jKZRFsn5dz8hmRGz/64v13ctNV6b
    Pz1zFDGGeav4ZJzyyXM0XI7LDY834WhCQHwXX6lkXqYp6wARAQABiQG2BBgBCgAg
    AhsMFiEEEDXkLLdmeVLuQt7pqX2qWj/EnBsFAmUdSvkACgkQqX2qWj/EnBuoNAwA
    hwst2AZCSmNNDUPSypCvpTkKdOPG315kJHQv/rcqDkCG2p2jvfT08Kd2636ErPBU
    7yCDOvanNzSOloNKodOsY7MrcGVnY5qSyJPxHNwp0niR+eGtwBpowLf6wO7LzWL+
    UOBzcAhgL+xIBaxlGC2CaV+ilq+wVqsJkBvJSdr/L5fydpW8y0Qk+O2Deml4bQVF
    tKRSTz+pDuII63189T7B5LnlWExNmhF8U0R+MEqZb+TWMorBrEy5giSsMV+LgXy5
    8lBqheQL3uasxNH/zaihBHA0sp7jpswiBOSnwiSOaRJOhGk/BLksCnf8yFnPEUMa
    CqskzKhfZDOYBol226SMavErj/6/5fy8dfoLYsDUW2UB0ojqGSYIYG9invVhEg5+
    exr+xNI6MB01EJkcSw/GowXUh5MFDtSdtRNGtZxymEObjkauLj9L1daAkHWYdFmn
    LCEHvNUqYnxkVFiNRQHlY3ZoZMYOmLleEbTPnGiRmukG+EipqeI1nmeFUmPXeDnC
    =sZGh
    -----END PGP PUBLIC KEY BLOCK-----
    ```

* Check that the only Centreon key in the RPM database is this one: **gpg-pubkey-3fc49c1b-651d4c25**:

    ```shell
    rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
    ```

    The results should be as follows:

    ```shell
    gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
    gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
    gpg-pubkey-3fc49c1b-651d4c25	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    ```

</TabItem>
<TabItem value="Existing installation" label="Existing installation">

* Check if the new key has been correctly imported into the RPM database:

    ```shell
    rpm -qi gpg-pubkey-3fc49c1b-651d4c25
    ```

    The results should be as follows:

    ```shell
    Name        : gpg-pubkey
    Version     : 3fc49c1b
    Release     : 651d4c25
    Architecture: (none)
    Install Date: Mon Apr 22 11:49:38 2024
    Group       : Public Keys
    Size        : 0
    License     : pubkey
    Signature   : (none)
    Source RPM  : (none)
    Build Date  : Wed Oct  4 11:27:33 2023
    Build Host  : localhost
    Relocations : (not relocatable)
    Packager    : Centreon Enterprise Server Official Signing Key <admin@centreon.com>
    Summary     : gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
    Description :
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: rpm-4.14.3 (NSS-3)

    mQGNBGFm61IBDADen8ge1CEXjHG/9CWwu1sNkhQ1w5oaExK1FtkVO4ueI8k9jNPn
    pZYeD8ZaqouSSFP8Rl0acz2MfNBZvhxLpTUIothea2HcWQ7fsuIJVPnADazDr045
    YhxfjDy6qMsZ2yWfh3cRzpbJ2BqRFsMcMkGgq/et9LUbDy8WJ0O86YDPL5RX4wDE
    ske7b8ffRu2uhK29hs76UeuuUIGLrVFqlnkuMC8u9YxVgxSONonja3tdkmhl+qR/
    xCRN++l2GNjwRVwE0TyoGN5kNLHVoPWMGUZmQMG0CRZx4+H1wNualUvzRNn/y9V/
    X9Z2+kjEv1c+Zi7oJ7bsYtHgulqEXVEKT5fTPLXapwhKw+uv23JjP7IAFBLlaNhn
    MdRxiM+x2Ej+ZwKaxlXl578wBmpXOlQw6sji+2PM8aWmmO4A4ekYyO5ZRMG0X6OG
    Y+doln8oe5djmvVp9iNvdmblHPOFTzDtpsAJRkRywipSnH21dqqMuZFrU1G46nW3
    f150TbH2zSv1AccAEQEAAbREQ2VudHJlb24gRW50ZXJwcmlzZSBTZXJ2ZXIgT2Zm
    aWNpYWwgU2lnbmluZyBLZXkgPGFkbWluQGNlbnRyZW9uLmNvbT6JAc4EEwEKADgC
    GwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AWIQQQNeQst2Z5Uu5C3umpfapaP8Sc
    GwUCZR1MJQAKCRCpfapaP8ScG4OwDACdOUJekvmHX3LJTdP5xm6mWOnlaAhuPZoo
    csMvJp8oEeeZeIXPq3py0IVyBzB1GrXHVdPYZ6VZ9BREJrZO99lxdgME+2lsFfLW
    oGeGotr99e5c/28kaM/lZdakHelwo42b3Ik9W/SdHMjWIE3dUhIKRIktC5/R2X6m
    Zj7lrAjNdATLyyc6WvrmxoRU3Kw9THb9m+U3Scw+DH9tLNf3gTmXLZLQeN2unGIM
    /bo/VGsg8inZxY0+yABNrIS+xNwx9p0/1deDMk631VTvfi5OwxBZOE7Gv2mcOc4P
    /wgx//X/wQUGitJ2nGEgndg/ab8VxlSgOPWHsNpDFDT7xmFt/d+FYgEO7aNNl4x/
    KlN5RL/NfToBK4kCUiNY7dCCx13w/bXQoTdstlrtV4F3urGyKy5l3JLD6MWg3SYA
    KRaVY9cCU+ZHdITzOSQUHPFEXrxi/4Dl7hfGqL2l1Y6s3DZdJKCO3c1EM4ERVx2Z
    Vrd3a4nRnqGbPvpNQhdt/VfPJ1j9K525AY0EYWbrUgEMAKTcgo0/qtDuB44K4qVD
    K2MchhNENEfx3EbgybfEuRMd2q6MvYcd1LsKfTKT0vQJnWffPq+BhleHQ0HYNvII
    ohKBu24T3LUZnl+bz4Pb4zJXKSm7yVhwg4W4rW+mH6nvyjVzP2KzK2/AI004UKKc
    u693eOpvT5LLlCFz47gXGysJH9v2dDI7u3r7G/xZRd29V+aLk1T+O2RI31HXVSSF
    Zqxnwh1albTTSCOCiae7WeG4ON0jluBLUZCRsTvWG7osubQzxcEO9zT/Ilwdv8ig
    yiYc78j8WPFLb4ngukDOr65NpVWf0gyqf1CtpDxhNue9myTVXce6w3oXW4npX3Ze
    KZwtaCYyvrfuKhXXG8fy0M0mGVvxRVsVJGgq1h1j7dJQI+d9yJmZrYxRmDtO7jgi
    r1YBk/j5noTzbjUSyuztkUGJwwrOXCI+CE/9jKZRFsn5dz8hmRGz/64v13ctNV6b
    Pz1zFDGGeav4ZJzyyXM0XI7LDY834WhCQHwXX6lkXqYp6wARAQABiQG2BBgBCgAg
    AhsMFiEEEDXkLLdmeVLuQt7pqX2qWj/EnBsFAmUdSvkACgkQqX2qWj/EnBuoNAwA
    hwst2AZCSmNNDUPSypCvpTkKdOPG315kJHQv/rcqDkCG2p2jvfT08Kd2636ErPBU
    7yCDOvanNzSOloNKodOsY7MrcGVnY5qSyJPxHNwp0niR+eGtwBpowLf6wO7LzWL+
    UOBzcAhgL+xIBaxlGC2CaV+ilq+wVqsJkBvJSdr/L5fydpW8y0Qk+O2Deml4bQVF
    tKRSTz+pDuII63189T7B5LnlWExNmhF8U0R+MEqZb+TWMorBrEy5giSsMV+LgXy5
    8lBqheQL3uasxNH/zaihBHA0sp7jpswiBOSnwiSOaRJOhGk/BLksCnf8yFnPEUMa
    CqskzKhfZDOYBol226SMavErj/6/5fy8dfoLYsDUW2UB0ojqGSYIYG9invVhEg5+
    exr+xNI6MB01EJkcSw/GowXUh5MFDtSdtRNGtZxymEObjkauLj9L1daAkHWYdFmn
    LCEHvNUqYnxkVFiNRQHlY3ZoZMYOmLleEbTPnGiRmukG+EipqeI1nmeFUmPXeDnC
    =sZGh
    -----END PGP PUBLIC KEY BLOCK-----
    ```

* Check that the old key is no longer in the RPM database (there should 
only be **gpg-pubkey-3fc49c1b-651d4c25**):

  ```shell
  rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
  ```

  The results should be as follows:

  ```shell
  gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
  gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
  gpg-pubkey-3fc49c1b-651d4c25	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
  ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Debian" label="Debian">

To get detailed info about the new key and check that it is correctly installed, run the following command:

```shell
apt-key list "C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4"
```

The results should look like this:

```shell
pub   ed25519 2024-04-11 [SC]
      C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4
uid          [unknown] Centreon APT <admin@centreon.com>
sub   cv25519 2024-04-11 [E]
```

</TabItem>
</Tabs>

## List of keys

| OS | Fingerprint                                       | Validity                                        |
| -- |---------------------------------------------------|-------------------------------------------------|
| Alma/RHEL/Oracle Linux | 0E52 401B 40F6 044F 928C 0B7B F6FC 4AE3 8A76 52BC | revoked October 14, 2021                        |
| Alma/RHEL/Oracle Linux | [1035 E42C B766 7952 EE42 DEE9 A97D AA5A 3FC4 9C1B](https://yum-gpg.centreon.com/RPM-GPG-KEY-CES) | valid from October 14, 2021 |
| Debian | 1441 882B ED29 D70C F2E8 74D6 5E9C 3745 59B6 C02E | revoked April 11, 2024 |
| Debian | [C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4](https://apt-key.centreon.com) | valid from April 12, 2024 |
