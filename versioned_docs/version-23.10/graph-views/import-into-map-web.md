---
id: import-into-map-web
title: Switching from MAP (Legacy) to MAP
---

This topic describes how to move from Centreon MAP (Legacy) to Centreon MAP by importing your legacy maps into your MAP module.

## Requirements

- Centreon MAP must be installed in your environment. See the [MAP installation](map-web-install.md) procedure if needed.

- Before you start the procedure to import legacy maps into MAP, you need to switch from MAP (Legacy) to MAP by [activating the MAP module](./map-web-install.md#step-3-activate-the-map-module).

- In case you want to install MAP on the same server as MAP (Legacy), you need to make sure that free disk space is at least equal to used space. This is because after migration, the new database will coexist with the legacy one.

## Importing legacy maps into MAP

> When you import your legacy maps, any content created in MAP is deleted.

### Step 1: Install MAP

You need first to install Centreon MAP. Go to this [page](map-web-install.md) to perform the installation and switch to the MAP Engine server.

### Step 2: Migrate images

If you have imported images into your desktop client (to custom folders outside the Centreon folder), and used them in your maps, you need first to migrate them to your central server.

1. In the MAP (Legacy) desktop client, in the **Media** panel, select all images you want to migrate from your custom folders, then right-click them and select **Export**.

2. Save the images to your computer.

3. In the central server, go to **Administration > Parameters > Images**, then upload all the images from your computer to the **centreon-map** folder. Be careful not to change the name of your images during this process.

### Step 3: Update MAP (Legacy)

For the icons to be displayed properly after you migrate your maps, you need to update your MAP (legacy) by running the following commands:

```shell
systemctl stop centreon-map
yum update centreon-map-server
systemctl daemon-reload
systemctl start centreon-map
```

### Step 4: Migrate maps

1. To import your legacy maps into MAP, go to the **Monitoring > Map** page, then click the **Migrate** button. The following window appears:

  ![image](../assets/graph-views/ng/map-migrate-1.png)

2. Click **Migrate**.
 
  ![image](../assets/graph-views/ng/map-migrate-2.png)

3. When the migration has succeeded, you can close the window.

  Your legacy maps are now displayed on the **Map** page. 
