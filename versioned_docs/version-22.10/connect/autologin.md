---
id: autologin
title: Configuring Autologin
---

The Autologin feature allows you to give access to the Centreon platform through a simple URL, without having to type a username and a password. Use Autologin for instance to display custom views on a large screen in your office. 

## Step 1: Activate autologin

1. Go to **Administration > Parameters > Centreon UI**.

2. In the **Authentication properties** section, select the following options:

    - **Enable Autologin**
    - **Display Autologin shortcut**. 

3. Click **Save**.

## Step 2: Create an autologin user

1. [Create a user](../monitoring/basic-objects/contacts-create.md) called **autologin** and give it [access rights](../administration/access-control-lists.md) only to the pages you will want to display.

2. Edit the user. Go to the **Authentication** tab:
    - enable option **Reach Centreon Front-end**.
    - to the right of the **Autologin Key** field, click **Generate**. Make a note of the generated key.

3. Click **Save**.

## Step 3: Retrieve the connection URL

1. Log in as user **autologin**.

1. Go to the page you will want to display, then click the profile icon in the top right corner of the screen.

2. Click **Copy autologin link** to get the URL you need to use. Autologin URLs have the following structure:

    ```
    http://[IP_CENTREON]/centreon/main.php?p=[page_number]&autologin=1&useralias=[user_login]&token=[autologin_key]
    ```

    Example: The following link allows user **admin** to display the **Home > Custom views** page: 
    ```
    http://10.29.11.2/centreon/main.php?p=103&autologin=1&useralias=admin&token=3sWymDJk
    ```

    To display Centreon in fullscreen mode, without the menus or the header, append **&min=1** to the URL.
 	 