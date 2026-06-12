---
id: api-tokens
title: Utiliser les API Centreon Cloud
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Jetons d'API

Un jeton d'API (un type de [jeton d'authentification](./authentication_tokens.md)) est nécessaire pour vous authentifier auprès des API Centreon. Pour en générer un, rendez-vous à la page **Administration > Jetons d'authentification**.

Un jeton est lié à un [utilisateur Centreon](../users/users.md) et a une durée de validité. Les appels API seront exécutés en fonction des [droits assignés à cet utilisateur](../users/users.md#rôles-des-utilisateurs). Un même utilisateur peut avoir plusieurs jetons.

Insérez votre jeton d'API dans l'en-tête de votre appel API :
  
```
Headers {
    Content-Type = application/json
    X-AUTH-TOKEN = your-centreon-token
}
```

Si l'authentification échoue, vérifiez si le jeton n'a pas été révoqué ou s'il n'a pas expiré.

## Adresse de l'API Centreon Cloud

```shell
http://[organization].centreon.com/[instance-name]/api/latest/...
```

**Exemple**: http://my-organization.centreon.com/centreon/api/latest/...``

## Adresse de l'API Centreon MAP

Remplacez **serverURL** par l'URL de votre serveur MAP (et non celle de votre serveur central).

<Tabs groupId="sync">
<TabItem value="HTTP" label="HTTP">
  
```shell
http://serverURL:8081/_centreon/centreon-map/api/latest/
```
  
</TabItem>
  
<TabItem value="HTTPS" label="HTTPS">
  
```shell
https://serverURL:9443/_centreon/centreon-map/api/latest/
```
  
</TabItem>
</Tabs>
