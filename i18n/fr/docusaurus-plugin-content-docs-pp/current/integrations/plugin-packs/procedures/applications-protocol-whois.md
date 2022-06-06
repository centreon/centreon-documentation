---
id: applications-protocol-whois
title: Protocol WHOIS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon WHOIS apporte un modèle d'hôte :
* App-Protocol-Whois-custom

Il apporte le modèle de service suivant :

| Alias  | Découverte                | Défaut  | Découverte |
|:-------|:--------------------------|:--------|:-----------|
| Domain | App-Protocol-Whois-Domain |         |            |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Domain" label="Domain">

| Metric name                                    | Description                                   | Unit  |
| :--------------------------------------------- | :-------------------------------------------- | :---- |
| domain status                                  | Domain status: checkError, notRegistered,...  |       |
| *domain_name*#whois.response.time.milliseconds | Time to retrieve whois domain information     | ms    |
| *domain_name*#domain.expires.seconds           | Registration expiration time                  | s     |

</TabItem>
</Tabs>

## Prérequis

Pour superviser vos domaines, la commande système `whois` doit être fonctionnelle. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Protocol WHOIS** :

```bash
yum install centreon-plugin-Applications-Protocol-Whois
```

2. Sur l'interface web de Centreon, installer le Pack **Protocol WHOIS** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Protocol WHOIS** :

```bash
yum install centreon-plugin-Applications-Protocol-Whois
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Protocol WHOIS** :

```bash
yum install centreon-pack-applications-protocol-whois
```

3. Sur l'interface web de Centreon, installer le Pack **Protocol WHOIS** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre domaine **Protocol WHOIS**.
* Appliquez le modèle d'hôte **App-Protocol-Whois-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Obligatoire | Nom                       | Description                                                                |
| :---------- | :------------------------ | :------------------------------------------------------------------------- |
|             | PROTOCOLWHOISEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_protocol_whois.pl \
    --plugin=apps::protocols::whois::plugin \
    --mode=domain \
    --domain='centreon.com' \
    --domain='centreon.fr' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All domains are ok | 'centreon.com#whois.response.time.milliseconds'=237ms;;;0; 'centreon.com#domain.expires.seconds'=27417843s;;;0; 'centreon.fr#whois.response.time.milliseconds'=125ms;;;0; 'centreon.fr#domain.expires.seconds'=24120041s;;;0;
checking domain 'centreon.com'
    whois reponse time: 237 ms
    status: clientDeleteProhibited,clientTransferProhibited,clientDeleteProhibited,clientTransferProhibited
    expires in 10M 1w 5d 23h 13m 33s
checking domain 'centreon.fr'
    whois reponse time: 125 ms
    status: ACTIVE
    expires in 9M 5d 5h 39m 14s
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_whois.pl \
    --plugin=apps::protocols::whois::plugin \
    --mode=domain \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_whois.pl \
    --plugin=apps::protocols::whois::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
des plugins.
