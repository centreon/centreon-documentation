---
id: applications-antivirus-clamav-ssh
title: Antivirus ClamAV
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

* Engine version
* main.cvd version
* daily.cvd version

## Prérequis

### Configuration SSH

L'utilisation de ce Plugin Pack requiert la création d'un utilisateur sur le
serveur ClamAV, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.
Deux méthodes de connexion SSH sont possibles:
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les Macros d'Hôtes.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Antivirus ClamAV*:

```bash
yum install centreon-plugin-Applications-Clamav-Ssh
```

2. Sur l'interface Integration de Centreon, installer le Plugin Pack *Antivirus ClamAV* depuis la page **Configuration > Packs de plugins**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Antivirus ClamAV*:

```bash
yum install centreon-plugin-Applications-Clamav-Ssh
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Antivirus ClamAV*:

```bash
yum install centreon-pack-applications-antivirus-clamav-ssh
```

3. Sur l'interface Integration de Centreon, installer le Plugin Pack *Antivirus ClamAV* depuis la page **Configuration > Packs de plugins**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
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

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre --help à la commande:

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

Lors de l'utilisation des backends SSH `ssh` ou `plink` dans les contrôles, il
est nécessaire de lancer la commande manuellement une première fois afin de
valider le *fingerprint* du serveur distant.
