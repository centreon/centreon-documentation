---
id: customize-centreon
title: Customize Centreon
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can customize some elements of your Centreon platform:

- **Login page:** you can change the background and the logo, and add a text.
- **Name of the platform:** you can define a name for your platform (e.g. Test, Production) that will be displayed in the banner once you are logged in.

Customizing your Centreon platform required the **Centreon IT Edition Extensions** extension. This extension is automatically installed on your platform.

> **Centreon IT Edition Extensions** is a Centreon extension that requires a valid [license](../administration/licenses.md).
> To purchase one, contact [Centreon](mailto:sales@centreon.com).

## Configure the extension

1. Go to **Administration > Customize Centreon**. The different options are:
   
   - **Platform name**: define a name for your platform (e.g. **Test**, **Production**). This name will be visible both on the login page (next to the logo), and in the banner once you are logged in.
   - **Select a logo**: replace the Centreon logo on the login page (but not in the top left corner once you are logged in). Before you can select a logo in this field, you need to add the file to your platform's [media](./parameters/medias.md).
   - **Select a background**: replace the default background. Before you can select a background in this field, you need to add the file to your platform's [media](./parameters/medias.md).
   - **Insert your presentation text**: enter a text to be displayed in the login area.
   - **Your text position**: define where the custom text will be displayed, if defined (above the word **Login** or below the **Connect** button).

2. Check what your login page will look like in the **Preview** and click **Save** when you are satisfied with the results.

## Update the extension

Execute the following command to update the extension:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf update centreon-it-edition-extensions
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf update centreon-it-edition-extensions
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt upgrade centreon-it-edition-extensions
```

</TabItem>
</Tabs>

> For a successful update, please ensure that the package name to update is correct (``centreon-it-edition-extensions``).
