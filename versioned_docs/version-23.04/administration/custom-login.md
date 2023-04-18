---
id: customize-centreon
title: Customize Centreon
---

This part covers customizing the login page and adding a name for your platform visible in the banner.

The Customization of the login page in Centreon relies on the **Centreon IT Edition Extensions**.

> Centreon IT Edition Extensions is a Centreon **extension** that requires a valid [license](../administration/licenses.md).
> To purchase one and retrieve the necessary repositories, contact [Centreon](mailto:sales@centreon.com).

## Installation

### Install the package

Add the Centreon Business repository, you can find it on the
[support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

And install the package using the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 or 9" label="Alma / RHEL / Oracle Linux">

``` shell
dnf install centreon-it-edition-extensions
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt install centreon-it-edition-extensions
```

</TabItem>
</Tabs>

### Install the interface

Go to the **Administration > Extension > Manager** menu and click on the install button for the following modules:

- License Manager (if not yet installed)
- IT Edition Extensions

## Configuration

Go to **Administration > Customize Centreon**.

The different options are:

- **Platform name**: defines the name of the platform. This one will be visible both on the login page and in the banner.
- **Select a logo**: offers the possibility to select an [existing media](./parameters/medias.md) in order to replace **Centreon** default logo.
- **Select a background**: offers the possibility to select an [existing media](./parameters/medias.md) in order to replace **Centreon** default background.
- **Your text position**: defines where the custom text will be displayed, if defined.
- **Preview**: Allows you to preview the result before saving the settings.