---
id: ot-easyvista-rest-api
title: EasyVista API Rest
---

## Installer le fournisseur EasyVistaRest

1. [Téléchargez](https://share.centreon.com/s/qypnoTgYfxHejaS) le dossier **EasyVistaRest** dans **/usr/share/centreon/www/modules/centreon-open-tickets/providers** sur votre serveur central.

2. Modifiez le fichier **/usr/share/centreon/www/modules/centreon-open-tickets/providers/register.php** en ajoutant une ligne pour EasyVistaRest, comme suit:

```shell
$register_providers['RequestTracker2'] = 12;
$register_providers['Itop'] = 13;
$register_providers['EasyVistaRest'] = 14;
```

## Configurer le connecteur

1. Allez dans **Configuration > Notifications > Règles** pour configurer Centreon Open Tickets. Cela ouvre le formulaire **Règles**.

2. Cliquez sur **Ajouter** et renseignez un nouveau nom pour EasyVistaRest.

3. Sélectionnez **EasyvistaRest** dans la liste des **Provider**.

### Définir les paramètres obligatoires

Vous devez saisir les paramètres suivants :

- **Address**: adresse IP du serveur EasyVista sur lequel vous souhaitez ouvrir des tickets.
- Compte utilisateur pour accéder à l'API.
- Sélectionner la méthode d'authentification : token API (Bearer token) ou authentification standard (utilisateur et mot de passe). 
  > L'utilisation d'un token API (Bearer token) est recommandée mais vous pouvez toujours définir une authentification standard. Si vous avez choisi **token API**, référez-vous à la [documentation EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/#HProcE9dures).
- Paramètre **User token** : entrez **0** si vous avez sélectionné **Authentification standard**.

### Ajouter des champs personnalisés EasyVista

Vous pouvez ajouter des champs personnalisés dans les formulaires d'ouverture de ticket en utilisant la syntaxe spécifique à EasyVista.

> Le nom d'un champ personnalisé doit commencer par ``e_``. Dans cet exemple, nous allons ajouter le nom du champ **e_city**.

#### Définir les paramètres du ticket

1. Dans le formulaire **Règles**, cliquez sur **+Ajouter une nouvelle entrée**.
2. Dans la liste **Argument**, sélectionnez **Custom Field**.
3. Remplissez la **Valeur** en suivant ce format : ``{$select.e_city.value}`` (avec **e_city** dans cet exemple).
  > L'élément **e_city** doit être identique au nom du champ EasyVista, [voir cette étape](#define-the-type-of-argument).
  
  > L'élément **.value** peut être remplacé par **.placeholder**, [voir cette étape](#define-possible-values).
4. Ajoutez autant d'entrées que nécessaire.

#### Définir le type de paramètre du ticket

Vous devez maintenant définir le type de l'argument que vous avez paramétré précédemment. Comme vous avez ajouté des champs personnalisés, l'argument doit être de type **custom**.

1. Dans la section **Common**, cliquez sur **+Ajouter une nouvelle entrée** dans le paramètre **Listes**.
2. En suivant notre exemple, entrez **e_city** dans le champ **Id** et sélectionnez **Custom** dans le champ **Type**.
  > Assurez-vous que l'**Id** est identique à celui que vous avez saisi dans le champ personnalisé : **e_city** dans notre cas.

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

## Gestion des éléments de configuration

Vous pouvez entrer le nom de l'hôte ou du groupe d'hôtes auquel le connecteur appartient en tant qu'élément de configuration. Si le ticket est ouvert sur plusieurs hôtes en même temps, seuls les groupes d'hôtes communs seront listés.

## Tester le connecteur

Pour vous aider à analyser les problèmes, utilisez les commandes curl suivantes pour tester le connecteur.

> Notez que vous devez adapter les commandes suivantes avec vos propres valeurs. Par exemple, ``<easy_vista_address>`` doit être remplacé par l'adresse de votre serveur EasyVista.

Les commandes ci-dessous considèrent que vous utilisez la méthode d'authentification par token Bearer.
Si vous utilisez la méthode d'authentification standard (utilisateur et mot de passe), vous devez remplacer ``-H 'Authorization : Bearer`` par `-u ':'`.

### Tester l'ouverture d'un ticket

```shell
curl -X POST -k 'https://<easy_vista_address>/api/v1/requests' -H 'Content-Type:
application/json' -H 'Authorization: Bearer <token>' -d '{"requests":
[{"catalog_guid:"1234","catalog_code":"1234"}]}'
```

> La liste des champs possibles dans le formulaire n'est pas exhaustive, voir la [documentation EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20incident-request/).


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
