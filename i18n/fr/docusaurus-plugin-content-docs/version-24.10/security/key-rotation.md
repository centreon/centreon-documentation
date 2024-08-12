---
id: key-rotation
title: Rotation de clés
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon ou le dépôt Debian doivent être changées occasionnellement.

## Nouvelle installation

<Tabs groupId="sync">
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

Si vous avez installé une nouvelle plateforme Centreon après la publication de la nouvelle clé, aucune action n'est à effectuer hormis
accepter la nouvelle clé lorsque nécessaire.

```shell
Récupération de la clé à partir de https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
Importation de la clef GPG 0x3FC49C1B :
ID utilisateur : « Centreon Enterprise Server Official Signing Key <admin@centreon.com> »
Empreinte      : 1035 e42c b766 7952 ee42 dee9 a97d aa5a 3fc4 9c1b
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

<Tabs groupId="sync">
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

Si vous avez installé une plateforme Centreon avant la publication de la nouvelle clé, la clé existante doit être remplacée par la nouvelle.

1. Téléchargez le script suivant :

```shell
curl -JO https://raw.githubusercontent.com/centreon/centreon/master/centreon/check-centreon-gpg-key.sh
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

<Tabs groupId="sync">
<TabItem value="Alma/RHEL/Oracle Linux" label="Alma/RHEL/Oracle Linux">

Vérifiez que la nouvelle clé a été correctement importée. Pour la [nouvelle clé publiée le 14 octobre 2021](#list-of-keys) :

<Tabs groupId="sync">
<TabItem value="Nouvelle installation" label="Nouvelle installation">

* Après l'installation, vérifiez si la nouvelle clé a été correctement importée dans la base de données RPM :

```shell
rpm -qi gpg-pubkey-3fc49c1b-651d4c25
```

Le résultat devrait être le suivant :

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

* Vérifiez que la seule clé Centreon présente dans la base de données RPM est la suivante : **gpg-pubkey-3fc49c1b-651d4c25**.

```shell
rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
```

Le résultat devrait être le suivant :

```shell
gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
gpg-pubkey-3fc49c1b-651d4c25	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
```

</TabItem>
<TabItem value="Installation existante" label="Installation existante">

* Vérifiez si la nouvelle clé a été correctement importée dans la base de données RPM :

```shell
rpm -qi gpg-pubkey-3fc49c1b-651d4c25
```

Le résultat devrait être le suivant :

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

* Vérifiez que l'ancienne clé n'apparaît plus dans la base de données RPM (il devrait y avoir uniquement la clé **gpg-pubkey-3fc49c1b-651d4c25**):

```shell
rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
```

Le résultat devrait être le suivant :

```shell
gpg-pubkey-f4a80eb5-53a7ff4b	gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)
gpg-pubkey-f2ee9d55-560cfc0a	gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)
gpg-pubkey-3fc49c1b-651d4c25	gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)
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
| Alma/RHEL/Oracle Linux | 0E52 401B 40F6 044F 928C 0B7B F6FC 4AE3 8A76 52BC | révoquée le 14 octobre 2021                  |
| Alma/RHEL/Oracle Linux | [1035 E42C B766 7952 EE42 DEE9 A97D AA5A 3FC4 9C1B](https://yum-gpg.centreon.com/RPM-GPG-KEY-CES) | valide à partir du 14 octobre 2021 |
| Debian | 1441 882B ED29 D70C F2E8 74D6 5E9C 3745 59B6 C02E | révoquée le 11 avril 2024 |
| Debian | [C903 FA90 C5EC 3C69 C922 9203 0395 7625 73E5 0BC4](https://apt-key.centreon.com) | valide à partir du 12 avril 2024 |
