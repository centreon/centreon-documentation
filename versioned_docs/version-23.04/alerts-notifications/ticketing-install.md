---
id: ticketing-install
title: Installing Open Tickets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Centreon Open Tickets** is a community module developed to create
tickets to an ITSM platform using APIs.

Once a provider is configured, the module allows for an operator to
create tickets for hosts and services in a non-ok state using a
dedicated widget. Indeed, a button associated with each host or service
allows you to connect to the API and create the ticket while offering
the possibility to acknowledge in same time the object.

Regarding the widget configuration, it is possible to see the created
tickets by presenting tickets ID and date of creation of these.

## Installing packages

Execute the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-open-tickets
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-open-tickets
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
apt install centreon-open-tickets
```

</TabItem>
</Tabs>

## UI installation

After installing the rpm, you have to finish the module installation
through the web frontend. Go to **Administration > Extensions > Manager**
menu and search **Open Tickets**. Click on **Install selection**:

![image](../assets/alerts/open_tickets_install_01.png)

Your Centreon Open Tickets Module is now installed.

![image](../assets/alerts/open_tickets_install_02.png)
## Créer une sauvegarde

Pour créer une sauvegarde de votre configuration de fournisseur Open Ticket, suivez les étapes ci-dessous : 

* Faites une sauvegarde des dossiers **/usr/share/centreon/www/modules/centreon-open-tickets** et **/usr/share/centreon/www/widgets/open-tickets**.
* Après avoir fait la mise à jour, copiez-collez le(s) fichier(s) **register.php** dans le répertoire **/usr/share/centreon/www/modules/centreon-open-tickets/providers/**.

Il est particulièrement important de sauvegarder votre configuration avant de [mettre à jour Centreon](../update/update-centreon-platform.md) afin de ne pas la perdre.
