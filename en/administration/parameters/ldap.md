---
id: ldap
title: LDAP
---

> If you want to use SSO for authentication, please read
> *[this procedure](centreon-ui#sso)*. You can also use Keycloack SSO using
> *[this procedure](centreon-ui#keycloak-sso)*.

This part allows to configure the connection to LDAP directories.

Go to **Administration > Parameters > LDAP** and click on **Add**.

![image](assets/administration/parameters-ldap-add.png)

- **Configuration name** and **Description** fields define the name and the
description of the LDAP server
- **Enable LDAP authentication** field serves to enable authentication via the
LDAP server
- **Store LDAP password** field can be used to store user passwords in the
database, useful to authenticate users in the event of loss of connection
with the LDAP
- **Auto import users** field used to import the users of the LDAP directory
automatically into Centreon. By clicking on **Import users manually**, you
can chose the users that you want to import

> If the **Auto import users** option is checked, the LDAP settings of any new
> user who logs into the Centreon interface will automatically be imported into
> Centreon (name, first name, e-mail address, etc.). ACL profiles will be applied
> on access (see *[ACL](../access-control-lists)*). However, if this option
> is not checked, only the users imported manually will be able to authenticate.

- **LDAP search size limit** field can be used to limit the size of user
searches.
- **LDAP search timeout** field can be used define the maximum time for the
LDAP search.
- **Contact template** field defines the contact template that will be linked
to all the users imported from this LDAP directory.
- **Default contactgroup** optional field, which is used to add a new user to
a default contactgroup.
- **Use service DNS** field indicates if it is necessary to use the DNS server
to solve the IP address of the LDAP directory.
- **Enable LDAP synchronization on login** If enabled, a user LDAP
synchronization will be performed on login to update contact's data and
calculate new Centreon ACLs.
- **LDAP synchronization interval (in hours)** Displayed only if the previous
option is enabled. This field is used to specify the time between two LDAP
synchronization.

> The contact's LDAP data won't be updated in Centreon until the next
> synchronization is expected.
>
> If needed, "on-demand" synchronization are
> available from the **Administration > Session** page and from the
> **Configuration > Users > Contact / Users** list.
>
> The interval is expressed in hours. By default, this field is set to the lower
> value : 1 hour.

> We save a timestamp as reference date in the DB and use the CentAcl CRON to
> update it.
>
> The reference date is used to calculate the next expected LDAP synchronization.
>
> If you modify one of these two fields the reference timestamp will be reset to
> your current time.
>
> The reference date won't be updated if you modify or not, only the other fields
> / options.

- **LDAP servers** field can be used to add one or more LDAP directories to
which Centreon will connect.

The table below summarizes the settings to add an LDAP server:

| Column       | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| Host address | Contains the IP address or DNS name of the LDAP server                 |
| Port         | Indicates the connection port to access the LDAP                       |
| SSL          | Indicates if the SSL protocol is used for the connection to the server |
| TLS          | Indicates if the TLS protocol is used for the connection to the server |

- **Bind user** and **Bind password** fields define the user name and the
password for logging to the LDAP server
- **Protocol version** field indicates the version of the protocol using to
login
- **Template** list can be used to pre-configure the search filters for users
on the LDAP directory. These filters serve to propose, by default, a search
on the MS Active Directory, Okta or of Posix type directories.

> Before any import, check the default settings proposed. If you have not selected
> a Model, you will need to define the search filters manually by filling in the
> fields.

> You can use **Okta** as LDAP server with [SWA
> plugin](https://help.okta.com/en/prod/Content/Topics/Apps/Apps_Configure_Template_App.htm).
> Please define:
>
> - **uid=\<USER\>,dc=\<ORGANIZATION\>,dc=okta,dc=com** for **Bind DN** field
> - **ou=\<OU\>,dc=\<ORGANIZATION\>,dc=okta,dc=com** \*\* for **Search group
> base DN** field.

With CentOS 7, it's possible to not check server certificate, follow procedure:

Add the following line in file "/etc/openldap/ldap.conf":

```shell
TLS_REQCERT never
```

Then restart Apache:

```shell
systemctl restart httpd24-httpd
```
