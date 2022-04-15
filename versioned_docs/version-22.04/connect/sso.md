---
id: sso
title: Configuring an Web SSO connection
---

Web SSO authentication relies on the Apache web server. It is Apache which, depending on its configuration, is
responsible for authenticating the user before allowing access to the Centreon web interface.
Many Apache modules allow authentication via OIDC, SAMLv2, TLS, Kerberos, etc. protocols.

> The user must be present in the Centreon configuration to access the interface.

## Configure Web SSO authentication

Go to the **Administration > Authentication > Web SSO Configuration** page:

![image](../assets/administration/web-sso-configuration.png)

### Enable authentication

First enable authentication:
- **Enable Web SSO authentication** allows to enable or disable Web SSO authentication.
- **Authentication mode** field indicates if the authentication should take place only by Web SSO or using local
  authentication as well (Mixed).

> When setting the parameters, it is recommended to activate the "mixed" mode. This will allow you to retain access to
> the local `admin` account in the event of a misconfiguration.

### Configure Identity Provider access credentials

Then configure Identity Provider information:
- **Login header attribute name**: which variable from the headers should be used to retrieve the user's login.
  For example `REMOTE_USER`.
- **Pattern match login (regex)**: a pattern to search for in the login header attrivute name.
  For instance, type `/@.*/` to find the end of the email address in your login.
- **Pattern replace login (regex)**: the string that will replace the string defined in the **Pattern match login (regex)** field
  Leave **Pattern replace login (regex)** blank to delete the string found by **Pattern match login (regex)**.

### Configure clients addresses

You can also configure clients addresses:
- **Trusted client addresses** field indicates which are the IP of the trusted clients (corresponding to the
  reverse proxy). The trusted clients are separated by comas.
- **Blacklist client addresses** field indicates which are the clients IP rejected.

### Configure Apache web server

You must configure the Apache module allowing authentication with the identity provider.
Once this configuration is done, you must modify the Centreon configuration for Apache in order to allow access only
to authenticated users.

Edit **/etc/httpd/conf.d/10-centreon.conf** file and search the following block:
```apache
    Header set X-Frame-Options: "sameorigin"
    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
    ServerSignature Off
    TraceEnable Off

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/
```

And change for:
```apache
    Header set X-Frame-Options: "sameorigin"
    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
    ServerSignature Off
    TraceEnable Off

    RequestHeader set X-Forwarded-Proto "http" early

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <Location ${base_uri}>
        AuthType openid-connect
        Require valid-user
    </Location>
```

> In this example, the Apache module used was **mod_auth_openidc**. This is why authentication is **openid-connect**.

Validate Apache configuration using:
```shell
/opt/rh/httpd24/root/usr/sbin/httpd -t
```

Then restart Apache web server:
```shell
systemctl restart httpd24-httpd
```

To conclude, rebuild cache:
```shell
sudo -u apache /usr/share/centreon/bin/console cache:clear
```