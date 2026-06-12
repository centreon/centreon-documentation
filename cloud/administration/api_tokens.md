---
id: api-tokens
title: Using APIs with Centreon Cloud
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## API tokens

You need an API Token (a type of [authentication token](./authentication_tokens.md)) to authenticate with the Centreon APIs. To generate one, go to **Administration > Authentication tokens**.

An API token is linked to one [Centreon user](../users/users.md) and is valid only for a certain period of time. API calls will be executed according to the [rights assigned to this user](../users/users.md#user-roles). A specific user can have several tokens.

Insert your API token in the header of your API call:
  
```
Headers {
    Content-Type = application/json
    X-AUTH-TOKEN = your-centreon-token
}
```

If authentication fails, check whether the token is not revoked or expired.

## Centreon Cloud API address

```shell
http://[organization].centreon.com/[instance-name]/api/latest/...
```

**Example**: `http://my-organization.centreon.com/centreon/api/latest/...`

## Centreon MAP API address

Replace **serverURL** with the URL of your MAP server (not your central server).

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
