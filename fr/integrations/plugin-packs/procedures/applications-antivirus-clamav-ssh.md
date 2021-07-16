---
id: applications-antivirus-clamav-ssh
title: Antivirus ClamAV
---

## Contenu du Pack

### Objets supervisés

* Engine version
* main.cvd version
* daily.cvd version

## Prérequis

### Configuration SSH

Un simple utilisateur est nécessaire pour interroger le serveur ClamAV par SSH. 
Il n'est pas nécessaire d'avoir des privilèges root ou sudo. Il y a deux façons 
possibles d'effectuer la vérification SSH, soit en échangeant la clé SSH de 
l'utilisateur `centreon-engine` du collecteur Centreonau serveur cible, 
ou en définissant votre utilisateur et votre mot de passe directement dans les 
macros hôtes.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Antivirus ClamAV*:

```bash
yum install centreon-plugin-Applications-Clamav-Ssh
```

2. Sur l'interface Integration de Centreon, installer le Plugin Pack *Antivirus ClamAV* depuis la page `Configuration > Packs de plugins`

<!--Offline IMP License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Antivirus ClamAV*:

```bash
yum install centreon-plugin-Applications-Clamav-Ssh
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Antivirus ClamAV*:

 ```bash
yum install centreon-pack-applications-antivirus-clamav-ssh
```

3. Sur l'interface Integration de Centreon, installer le Plugin Pack *Antivirus ClamAV* depuis la page `Configuration > Packs de plugins`

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page `Configuration > Hôtes`.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur *Antivirus ClamAV*
* Appliquez le Modèle d'Hôte *Applications-Antivirus-Clamav-Ssh-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises(*Mandatory*) doivent être renseignées 

| Mandatory | Name         | Description                                                                        |
|:----------|:-------------|:-----------------------------------------------------------------------------------|
|           | EXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
 /usr/lib/centreon/plugins//centreon_clamav_ssh.pl \
    --plugin=apps::antivirus::clamav::local::plugin \
    --mode=update-status \
    --hostname=10.0.0.1 \
    --remote \
    --critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}' \
    --use-new-perfdata
 ```

 La commande devrait retourner un message de sortie similaire à :

```bash
OK : clamav engine version '0.103.2/0.103.2' main.cvd version '60/60', last update 1d 3h 46m 40s daily.cvd version '25839/25839', last update 1d 3h 46m 40s | 
 ```

Dans cet exemple, une alarme de type CRITICAL sera déclenchée si la dernière
version *maindb* installée n'est pas égale à la dernière version *maindb*
disponible
(`--critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}'`).

```bash
/usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \
    --plugin=apps::antivirus::clamav::local::plugin  \
    --mode=update-status  \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoute le paramètre 
`--list-mode` à la commande:

```bash
 /usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \
    --plugin=apps::antivirus::clamav::local::plugin  \
    --list-mode
 ```

### Diagnostic des erreurs communes

#### `UNKNOWN: Command error: Host key verification failed.`

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint)
du serveur cible avec `ssh` or `plink` sur le Poller Centreon.