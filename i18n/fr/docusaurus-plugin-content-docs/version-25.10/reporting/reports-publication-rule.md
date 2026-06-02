---
id: reports-publication-rule
title: Publier vos rapports
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Par défaut, un rapport ne peut être téléchargé que depuis la page **Reporting > Monitoring Business Intelligence > Report view**.
Si vous souhaitez partager un copie de votre rapport (par email ou sur un autre serveur par exemple), vous devez utiliser une règle de pulication. Les règles de publication permettent d'envoyer un rapport à des utilisateurs spécifiques chaque fois que la tâche correspondante est exécutée. Cela s'applique à tous les formats de sortie (PDF, CSV...).

## Modes de publication

| Mode de publication | Description                                                                                     |
| ---                 | ---                                                                                             |
| CIFS                | Les rapports sont copiés vers un partage de fichiers distant en utilisant le protocole CIFS/SMB |
| FTP                 | Les rapports sont copiés vers un serveur distant en utilisant le protocole FTP                  |
| Local               | Les rapports sont copiés dans un répertoire local (sur le serveur MBI)                          |
| SFTP                | Les rapports sont copiés vers un serveur distant en utilisant le protocole SFTP                 |
| SMTP                | Les rapports sont envoyés par email                                                             |

## Règles globales et règles personnalisées

* Les règles marquées comme globales dans leur configuration sont appliquées automatiquement chaque fois qu'une tâche est exécutée. Les règles globales s'appliquent à toutes les tâches.
* Les règles globales n'apparaissent pas parmi les options dans l'onglet **Publication** des tâches car, de toute façon, elles sont toujours appliquées.
* La [règle de publication globale **Default**](#fonctionnement-de-la-règle-de-publication-default) est une règle SFTP qui copie les rapports sur le serveur central depuis MBI. Cette règle peut être modifiée mais pas supprimée.
* Les rapports auxquels vous [appliquez des règles personnalisées](#utiliser-une-règle-de-publication) (c'est-à-dire les règles créées par des utilisateurs) seront publiés chaque fois qu'ils sont générés, selon l'ordonnancement de la tâche.

## Créer une règle de publication

Pour créer une règle de publication, allez à la page **Reporting > Monitoring Business Intelligence > Publication rules** et sélectionnez le **Protocole de publication** souhaité. Une fois le protocole sélectionné, d'autres champs apparaissent.

<Tabs groupId="publicationRule" queryString>
<TabItem value="CIFS" label="CIFS">

| Champ                                               | Valeur                   | Description                                                                                                                                                   |
|-----------------------------------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                | Nom de la règle CIFS     | Nom permettant d'identifier la règle. Choisissez un nom parlant.                                                                                         |
| Protocole de publication                            | CIFS                     | Dans ce cas, **CIFS**.                                                                                                                                            |
| [Global](#règles-globales-et-règles-personnalisées) | Non                      | Définit si la règle s'appliquera à toutes les tâches. Si la valeur est **Non**, la règle sera une règle personnalisée qui s'appliquera uniquement aux tâches sélectionnées. |
| Description                                         |                          | La description de la règle n'apparaît que dans la liste des règles de publication.                                                                            |
| Publier le fichier log                              | Oui                      | Indique s'il faut inclure l'étape de publication dans les fichiers journaux **cbis.DATE.log**.                                                                    |
| Host                                                |                          | L’adresse du serveur où vous souhaitez publier les rapports. L’utilisateur **centreonBI** doit pouvoir y accéder via le réseau.                                                                                                                  |
| Domaine                                             |                          | Le domaine utilisé à des fins d'authentification.                                                                                                             |
| User                                                |                          | Le nom d'utilisateur utilisé à des fins d'authentification.                                                                                                   |
| Mot de passe                                        |                          | Le mot de passe utilisé à des fins d'authentification.                                                                                                        |
| Confirmer le mot de passe                           |                          | Confirmation du mot de passe.                                                                                           |
| Répertoire racine                                   | \\serveur\partage        | Chemin d'accès au répertoire parent où les rapports seront copiés. Le répertoire doit déjà exister et l'utilisateur **centreonBI** doit pouvoir y accéder via le réseau. |
| Sous-répertoire                                     | @DAY@                    | Chemin d'accès au sous-répertoire, pouvant inclure des variables dynamiques telles que @DAY@. À utiliser si vous souhaitez organiser vos rapports.            |

> Les règles de publication CIFS utilisent le protocole Samba v2 pour communiquer avec le serveur de fichiers de destination.

</TabItem>

<!--<TabItem value="Dropbox" label="Dropbox">-->
<!--</TabItem>-->

<TabItem value="FTP" label="FTP">

| Champ                                               | Valeur                            | Description                                                                                                                                                  |
|-----------------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                | Nom de la règle FTP               | Nom permettant d'identifier la règle. Choisissez un nom parlant.                                                                                        |
| Protocole de publication                            | FTP                               | Dans ce cas, **FTP**.                                                                                                                                            |
| [Global](#règles-globales-et-règles-personnalisées) | Non                               | Définit si la règle s'appliquera à toutes les tâches. Si la valeur est **Non**, la règle sera une règle personnalisée qui s'appliquera uniquement aux tâches sélectionnées. |
| Description                                         |                                   | La description de la règle apparaît uniquement dans la liste des règles de publication.                                                                      |
| Publier le fichier log                              | Oui                               | Indique s'il faut inclure l'étape de publication dans les fichiers journaux **cbis.DATE.log**.                                                                   |
| Host                                                | ftp://server/                     | L’adresse du serveur où vous souhaitez publier les rapports. L’utilisateur **centreonBI** doit pouvoir y accéder via le réseau.                                  |
| Port                                                | 21                                | Le numéro de port pour la connexion.                                                                                                                         |
| User                                                |                                   | Le nom d’utilisateur pour l’authentification.                                                                                                                |
| Password                                            |                                   | Le mot de passe pour l’authentification.                                                                                                                     |
| Confirmer le mote de passe                          |                                   | Confirmation du mot de passe.                                                                                                      |
| Chiffrement                                         | **None**, **SSL** ou **TLS**      | La méthode de chiffrement utilisée pour la connexion.                                                                                                        |
| Répertoire racine                                   |                                   | Le chemin vers le répertoire parent où les rapports seront copiés. Le répertoire doit déjà exister et l’utilisateur **centreonBI** doit pouvoir y accéder.       |
| Sous-répertoire                                     | @DAY@                             | Chemin du sous-répertoire. Peut inclure des variables dynamiques comme @DAY@. À utiliser si vous souhaitez organiser vos rapports.                           |

</TabItem>
<TabItem value="Local" label="Local">

| Champ                                                | Valeur                | Description                                                                                                                                                             |
|------------------------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                                 | Nom de la règle Local | Nom permettant d'identifier la règle. Choisissez un nom parlant.                                                                                                   |
| Protocole de publication                             | Local                 | Dans ce cas, **Local**.                                                                                                                                                     |
| [Global](#règles-globales-et-règles-personnalisées)  | Non                   | Définit si la règle s'appliquera à toutes les tâches. Si la valeur est Non, la règle sera une règle personnalisée qui s'appliquera uniquement aux tâches sélectionnées. |
| Description                                          |                       | La description de la règle apparaît uniquement dans la liste des règles de publication.                                                                                 |
| Publier le fichier log                               | Oui                   | Indique s'il faut inclure l'étape de publication dans les fichiers journaux **cbis.DATE.log**.                                                                              |
| Répertoire racine                                    | /var/www/reports      | Le chemin vers le répertoire parent où les rapports seront copiés. Le répertoire doit déjà exister et l’utilisateur **centreonBI** doit pouvoir y accéder.                  |
| Sous-répertoire                                      | @DAY@                 | Chemin du sous-répertoire. Peut inclure des variables dynamiques comme @DAY@. À utiliser si vous souhaitez organiser vos rapports.                                      |

</TabItem>
<TabItem value="SFTP" label="SFTP">

| Champ                                              | Valeur                                           | Description                                                                                                                                       |
|----------------------------------------------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                               | Nom de la règle SFTP                             | Nom permettant d'identifier la règle. Choisissez un nom parlant.                                                                             |
| Publication protocol                               | SFTP                                             | Dans ce cas, **SFTP** (Secure File Transfer Protocol).                                                                                                |
| [Global](#règles-globales-et-règles-personnalisées) | Non                                             | Définit si la règle s'appliquera à toutes les tâches. Si la valeur est Non, la règle sera une règle personnalisée qui s'appliquera uniquement aux tâches sélectionnées. |
| Description                                        |                                                  | La description de la règle apparaît uniquement dans la liste des règles de publication.                                                           |
| Publier le fichier log                             | Oui                                              | Indique s'il faut inclure l'étape de publication dans les fichiers journaux **cbis.DATE.log**.                                                        |
| Host                                               |                                                  | L'adresse IP ou le nom d'hôte du serveur SFTP vers lequel vous souhaitez copier les rapports.  L’utilisateur **centreonBI** doit pouvoir y accéder via le réseau.                                                    |
| Port                                               | 22                                               | Le port réseau utilisé pour se connecter au serveur SFTP (par défaut 22).                                                                         |
| Type d'authentification                            | User/Key                                         | La méthode utilisée pour l'authentification. Dans ce cas, une combinaison de nom d'utilisateur et de clé SSH.                                     |
| User                                               | centreonBI                                       | Le nom d'utilisateur utilisé pour se connecter au serveur SFTP.                                                                                   |
| Chemin pour la clé SSH                             | `/home/centreonBI/.ssh/id_rsa`                   | Le chemin complet vers la clé privée SSH utilisée pour l'authentification.                                                                        |
| Phrase secrète pour la clé SSH                     | Laisser vide                                     | La phrase de passe de la clé SSH, si elle est définie. Laisser vide si aucune.                                                                    |
| Confirmer la phrase secrète pour la clé SSH        | Laisser vide                                     | Répétez la phrase de passe de la clé SSH pour confirmation, si utilisée.                                                                          |
| Répertoire racine                                  | `/var/lib/centreon/centreon-bi-server/archives`  | Le chemin vers le répertoire parent sur le serveur SFTP où les rapports seront copiés. Ce répertoire doit déjà exister et l’utilisateur **centreonBI** doit pouvoir y accéder.          |
| Sous-répertoire                                    | `@JOBNAME@`                                      | Chemin du sous-répertoire. Peut inclure des variables dynamiques comme `@JOBNAME@`. À utiliser pour organiser les rapports.                       |


</TabItem>
<TabItem value="SMTP" label="SMTP">

> Avant de configurer la règle SMTP dans l'interface MBI, assurez-vous que [Postfix est correctement installé et configuré](../administration/postfix.md) sur votre serveur MBI afin de permettre la livraison du courrier en local.
> 
> Par défaut, Postfix est utilisé comme relais de messagerie sans authentification sur MBI. Cela signifie que :
> - La configuration SMTP dans Centreon MBI ne nécessite pas d'informations d'identification ni de SSL.
> - Les règles d'authentification et de relais de messagerie (par exemple, les domaines de destination, les expéditeurs autorisés) sont gérées directement dans la configuration Postfix (**/etc/postfix/main.cf**, etc.).

| Champ                                     | Valeur                  | Description                                                                                                                                 |
|-------------------------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                      | Nom de la règle SMTP    | Nom permettant d'identifier la règle. Choisissez un nom parlant.                                                                       |
| Protocole de publication                  | SMTP                    | Dans ce cas, **SMTP**.                                                                                                                          |
| [Global](#règles-globales-et-règles-personnalisées) | Non                                             | Définit si la règle s'appliquera à toutes les tâches. Si la valeur est **Non**, la règle sera une règle personnalisée qui s'appliquera uniquement aux tâches sélectionnées. |
| Description                               |                         | La description de la règle apparaît uniquement dans la liste des règles de publication.                                                     |
| Publier le fichier log                    | Oui                     | Indique s'il faut inclure l'étape de publication dans les fichiers journaux **cbis.DATE.log**.                                                  |
| Expéditeur de l'e-mail                    | my_user@my_server       | Adresse de l'expéditeur utilisée dans le champ **De** de l'e-mail.                                                                          |
| Serveur SMTP                              | localhost               | Hôte SMTP. Utilisez `localhost` si Postfix s'exécute sur le même serveur.                                                                   |
| Port SMTP                                 | 25                      | Port SMTP. Par défaut, `25` pour les connexions non sécurisées.                                                                             |
| Utiliser le cryptage SSL                  | No                      | Indique s'il faut utiliser le chiffrement SSL. Désactivé pour une configuration Postfix locale.                                             |
| Utiliser l authentification               | No                      | Utilise l'authentification SMTP. Mettre `No` pour une distribution locale sans identifiants.                                                |
| Titre par défaut de l'email               | MBI Report              | Sujet/titre par défaut utilisé pour les emails sortants. Si ce champ est vide, l'email n'aura pas de sujet.                               |
| Corps par défaut de l e-mail              |                         | Contenu par défaut dans le corps de l'email. Si ce champ est vide, l'email sera vide.                                                     |
| Signature par défaut de l'e-mail          |                         | Signature/pied de page par défaut en bas de l'email. Si ce champ est vide, l’email n’aura pas de signature.                               |
| Taille maximum du rapport                 | 4 Mo                    | Taille maximale totale autorisée pour toutes les pièces jointes (en mégaoctets).                                                            |
| Protocole                                 | http                    | Protocole utilisé pour accéder à l'interface Centreon (HTTP ou [HTTPS](../administration/secure-platform.md)). |
| L'extension de l'adresse web de Centreon  | /centreon               | Extension de chemin web (ce sera `/centreon` si vous ne l’avez pas personnalisée).                                                          |
| Adresse du serveur Web principal Centreon | central_ip              | IP ou FQDN + port de l’interface web Centreon.                                                                                              |
| Contact Groups                            | cg-reports-mbi          | Le(s) [groupe(s) de contacts](../monitoring/basic-objects/contacts-groups.md) qui recevront le rapport. Attention, si vous envoyez une copie du rapport à ces utilisateurs, ils pourront voir toutes les données que cleui-ci contient — qu'ils aient ou non [des droits d’accès sur ces ressources](../administration/access-control-lists.md#filtres-daccès-aux-ressources).  |


</TabItem>
</Tabs>

## Utiliser une règle de publication

Pour vous assurer qu'une copie de votre rapport est publiée à chaque fois que la tâche est exécutée, vous pouvez soit :

* marquer la règle comme globale (aucune configuration supplémentaire n'est nécessaire, car toutes les règles globales sont exécutées à chaque fois qu'une tâche est exécutée - attention, les règles globales s'appliquent à toutes les tâches exécutées par la plateforme).
* dans la tâche souhaitée, sélectionner la règle personnalisée souhaitée dans l'onglet **Publication** de la page **Reporting > Monitoring Business Intelligence > Jobs**.

Veuillez noter que les données incluses dans le rapport dépendent des [droits d'accès aux ressources](../administration/access-control-lists.md#filtres-daccès-aux-ressources) de l'utilisateur qui crée la tâche. Il incombe à l'utilisateur qui crée la tâche de s'assurer que les ressources incluses dans le rapport sont autorisées pour les utilisateurs avec lesquels il souhaite partager le rapport.

## Fonctionnement de la règle de publication Default

La règle SFTP **Default** est celle qui transfère les rapports générés vers votre serveur central.

### Prérequis : échange de clés

1. Sur le serveur central, un utilisateur de service appelé **centreonBI** a été créé. Définissez un mot de passe pour cet utilisateur pour les futures communications SSH entre les deux serveurs :

```shell
passwd centreonBI
```

2. Sur le serveur MBI, générez des clés SSH pour l'utilisateur système appelé **centreonBI** afin d'éviter
d'utiliser le mot de passe lorsque CBIS copie les rapports générés sur le serveur central :

```shell
su - centreonBI
ssh-keygen
  Enter file in which to save the key (/home/centreonBI/.ssh/id_rsa):
  > Created directory '/usr/local/centreon-bi/.ssh'.
  > Enter passphrase (empty for no passphrase): empty
  > Enter same passphrase again:
  > Your identification has been saved in /home/centreonBI/.ssh/id_rsa.
```

> Le phrase secrète (passphrase) doit être vide.

3. Transférez la clé vers le serveur central. L'utilisateur **centreonBI** doit être configuré avec un mot de passe sur le serveur central :

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub centreonBI@\{MONITORING_IP_ADDRESS\}
```

4. Testez la connection SSH du serveur MBI :

```shell
ssh centreonBI@\{MONITORING_IP_ADDRESS\}
```

Vous devriez pouvoir vous connecter sans devoir entrer de mot de passe.

### Configuration de la règle de publication Default

Si pour une raison quelconque la règle **Default** cesse de fonctionner et les nouveaux rapports n'apparaissent pas sur votre serveur central, vérifiez qu'elle est configurée de la manière suivante (cliquez le bouton **Test** pour valider la configuration) :

| Field                                       | Value                                                             |
|---------------------------------------------|-------------------------------------------------------------------|
| Name                                        | Default                                                           |
| Protocole de publication                    | SFTP                                                              |
| Global                                      | Yes                                                               |
| Description                                 | Default publication rule                                          |
| Host                                        | Adresse IP du serveur central                                     |
| Port                                        | 22                                                                |
| Type d authentification                     | User/Key                                                          |
| User                                        | centreonBI                                                        |
| Chemin pour la clé SSH                      | `/home/centreonBI/.ssh/id_rsa`                                    |
| Phrase secrète pour la clé SSH              | laisser vide                                                      |
| Confirmer la phrase secrète pour la clé SSH | laisser vide                                                      |
| Répertoire racine                           | `/var/lib/centreon/centreon-bi-server/archives`                   |
| Sous-répertoire                             | `@JOBNAME@`                                                       |
