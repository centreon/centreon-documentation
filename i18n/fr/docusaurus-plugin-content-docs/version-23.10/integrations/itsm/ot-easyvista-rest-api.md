---
id: ot-easyvista-rest-api
title: EasyVista API Rest
---

Le fournisseur EasyVista Open Tickets utilise l'API Rest EasyVista pour ouvrir des incidents sur vos alertes de supervision.

## Prérequis

- Avant d'aller plus loin, assurez-vous d'avoir installé correctement [Centreon Open Tickets](https://docs.centreon.com/docs/alerts-notifications/ticketing-install/) sur votre instance Centreon.

- Ensuite, vous devez [configurer Open Tickets](../../alerts-notifications/ticketing.md#hosts--services) afin que les ressources (hôtes et services) puissent recevoir un numéro de ticket.

## Installer le fournisseur EasyVistaRest

1. [Téléchargez](https://share.centreon.com/s/qypnoTgYfxHejaS) le dossier **EasyVistaRest** dans **/usr/share/centreon/www/modules/centreon-open-tickets/providers** sur votre serveur central, ou un serveur distant.

2. Modifiez le fichier **/usr/share/centreon/www/modules/centreon-open-tickets/providers/register.php** en ajoutant une ligne pour EasyVistaRest, comme suit:

  ```shell
  $register_providers['RequestTracker2'] = 12;
  $register_providers['Itop'] = 13;
  $register_providers['EasyVistaRest'] = 14;
  ```

## Configurer votre serveur Elasticsearch

Vous devrez paramétrer votre équipement EasyVista pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation d'EasyVista. Assurez-vous qu'EasyVista puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration d'EasyVista ou par un équipement de sécurité.

## Configurer le connecteur dans Centreon

1. Dans Centreon, allez dans **Configuration > Notifications > Règles** pour configurer Centreon Open Tickets. Cela ouvre le formulaire **Règles**.

2. Cliquez sur **Ajouter** et renseignez un nouveau nom pour EasyVistaRest.

3. Sélectionnez **EasyVistaRest** dans la liste des **Provider**.

### Définir les paramètres obligatoires

Vous devez saisir les paramètres suivants dans la section **Easyvista Rest Api** :

- **Address**: adresse IP du serveur EasyVista sur lequel vous souhaitez ouvrir des tickets.
- **API path**
- **Account** : compte utilisateur pour accéder à l'API.
- **Bearer token or account password** : l'utilisation d'un token API (Bearer token) est recommandée mais vous pouvez toujours définir une authentification standard. Si vous avez choisi **Bearer token**, référez-vous à la [documentation EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/#HProcE9dures).
- **Use token** : renseignez **0** si vous avez opté pour une authentification standard.

### Ajouter des champs personnalisés EasyVista

> Vous devez vous référer aux champs personnalisés que vous avez créés dans EasyVista.

Vos champs personnalisés apparaîtront dans la fenêtre pop-up qui vous permettra d'ouvrir un ticket. Vous devez utiliser la syntaxe spécifique à EasyVista : le nom d'un champ personnalisé doit commencer par ``e_``.

Dans cet exemple, nous allons ajouter le champ **e_city**.

#### Ajouter le champ

1. Dans la section **Easyvista Rest Api**, cliquez sur **+Add a new entry**.
2. Dans la liste **Argument**, sélectionnez **Custom Field**.
3. Remplissez la **Valeur** en suivant ce format : ``{$select.e_city.value}`` (avec **e_city** dans cet exemple).
  > L'élément **e_city** doit être identique au nom du champ EasyVista.
  
  > L'élément **.value** peut être remplacé par **.placeholder**.
4. Ajoutez autant d'entrées que nécessaire.

#### Définir le type du champ

Vous devez maintenant définir le type de l'argument que vous avez paramétré précédemment. Comme vous avez ajouté des champs personnalisés, l'argument doit être de type **custom**.

1. Dans la section **Common**, cliquez sur **+Add a new entry** dans le paramètre **Lists**.
2. En suivant notre exemple, renseigner :
   - **e_city** dans le champ **Id**,
   - **Meilleures villes** dans le champ **Label**,
   - **Custom** dans le champ **Type**.
  > Assurez-vous que l'**Id** est identique à celui que vous avez saisi dans le champ personnalisé plus haut : **e_city** dans notre cas.

#### Définir les valeurs possibles

Maintenant que le champ personnalisé est configuré, vous devez lui associer des valeurs possibles. Il s'agit de la liste des valeurs que les utilisateurs verront dans Centreon lorsqu'ils ouvriront un ticket. Dans notre cas, vous allez définir les valeurs possibles pour **e_city**.

> Pour la valeur que vous avez définie précédemment dans le champ **Argument** :
- si vous avez spécifié ``{$select.e_city.value}``: le nom du paramètre **value** sera envoyé à EasyVista,
- si vous avez spécifié ``{$select.e_city.placeholder}``: le nom du paramètre **label** sera envoyé à EasyVista. Le champ **Label** sera celui que les utilisateurs verront dans la liste de sélection des valeurs lorsqu'ils ouvriront le ticket.

1. Dans la partie **Custom list definition**, cliquez sur **+Ajouter une nouvelle entrée**.
2. Remplissez les paramètres **Value** (par exemple le code postal de la ville) et **Label** (par exemple le nom de la ville).
3. Ajoutez autant de nouvelles entrées que nécessaire. Dans notre exemple, il s'agirait de plusieurs villes avec leur code postal et leur nom.

### Définir des filtres pour les ressources

Toutes les informations envoyées par Centreon à EasyVista proviennent de Centreon. La seule exception peut être les Assets (équipements, éléments de configuration et ressources supervisées) qui peuvent être récupérées à partir des API EasyVista.

> Le champ du filtre aura le format suivant (à titre d'exemple) : ``search=field:value1,field:value2`` (voir la [documentation EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20See%20a%20list%20of%20assets/?language=fr)).

Suivez cette procédure si vous devez importer des ressources depuis EasyVista :

1. Dans la section **Common**, cliquez sur **+Ajouter une nouvelle entrée** dans le paramètre **Listes**.
2. Renseignez les paramètres comme suit (il s'agit d'un exemple) :
   - **Id**
   - **Label:** Asset
   - **Type:** Asset
   - **Filter:** search=field:value

## Tester le connecteur

Pour vous aider à analyser les problèmes, utilisez les commandes curl suivantes pour tester le connecteur.

> Notez que vous devez adapter les commandes suivantes avec vos propres valeurs. Par exemple, ``<easy_vista_address>`` doit être remplacé par l'adresse de votre serveur EasyVista.

Les commandes ci-dessous considèrent que vous utilisez la méthode d'authentification par token Bearer.
Si vous utilisez la méthode d'authentification standard (utilisateur et mot de passe), vous devez remplacer ``-H 'Authorization : Bearer`` par `-u ':'`.

> Les commandes ci-dessous sont données à titre d'exemple.

### Tester l'ouverture d'un ticket

```shell
curl -X POST -k 'https://<easy_vista_address>/api/v1/requests' -H 'Content-Type:
application/json' -H 'Authorization: Bearer <token>' -d '{"requests":
[{"catalog_guid:"1234","catalog_code":"1234"}]}'
```

> Ceci est un exemple. Voir la [documentation EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20incident-request/).

### Tester la fermeture d'un ticket

```shell
curl -X PUT -k 'https://<easy_vista_address>/api/v1/requests/<ticket_id>' -H
'Content-Type: application/json' -H 'Authorization: Bearer <token>' -d '{"closed":
{}}
```

### Récupérer des ressources

- Avec le filtre :

  ```shell
  curl -X GET -k 'https://<easy_vista_address>/api/v1/assets/?fields=asset_tag,HREF'
  -H 'Content-Type: application/json' -H 'Authorization: Bearer <token>'
  ```

- Sans le filtre :

  ```shell
  curl -X GET -k 'https://<easy_vista_address>/api/v1/assets/?
  fields=asset_tag,HREF&search=field:value' -H 'Content-Type: application/json' -H
  'Authorization: Bearer <token>'
  ```
