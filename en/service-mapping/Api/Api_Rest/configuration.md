Configuring objects
===================

**Getting started**

At lease 90% of the actions performed through the command line API
(CLAPI) are available in the REST API.

Here is an example on how to list a Business View (BV) using the REST
API.

Use the POST method and URL below: :

    api.domain.tld/centreon/api/index.php?action=action&object=centreon_clapi

**Header:**

+---------------------+---------------------------------+
| > key               | > value                         |
+---------------------+---------------------------------+
| Content-Type        | application/JSON                |
+---------------------+---------------------------------+
| centreon-auth-token | the value of authToken received |
|                     | from authentication response    |
+---------------------+---------------------------------+

**Body:** :

    {
     "action":"show",
     "object":"bv"
    }

-   The **action** key corresponds to the option **-a** in Centreon
    CLAPI. The value **show** corresponds to the **-a** option value.
-   The **object** key corresponds to the option **-o** in Centreon
    CLAPI. The value **bv** corresponds to the **-o** option value.

The equivalent action using Centreon CLAPI is: :

    [root@centreon ~]# ./centreon -u $USER$ -p $PASS$ -o BV -a show

**Response:**

The response is a JSON flow listing all hosts, formated as follows: :

    {
       "result": [
           {
               "id_ba_group": "1",
               "name": "BA-Mail-View",
               "description": "BA Mail View"
           },
           {
               "id_ba_group": "2",
               "name": "BA-CIO-View",
               "description": "BA CIO View"
           }
       ]
    }

::: {.note}
::: {.title}
Note
:::

Some actions require the values key (the option **-v** in Centreon
CLAPI). Depending on the action called, the body may contain the
**values** key. This will be discussed in detail below.
:::

The CLAPI chapter in this documentation describes all add/update/delete
actions possible for Centreon BAM objects.
