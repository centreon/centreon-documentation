---
id: import-into-map-web
title: Import legacy maps into MAP Web
---

This chapter describes how to importing your legacy maps into your MAP Web module.

> When you import your legacy maps, any content created in MAP Web is deleted.

## Step 1: Migrate images

If you had imported images into your Desktop client (to custom folders outside the Centreon folder), and used them in your maps, you need to migrate them to your central server first.

In MAP Desktop, in the Media panel, select all images you want to migrate from your custom folders, then right-click them and select Export.
Save the images to your computer.
In the central server, go to Administration > Parameters > Images, then upload all the images from your computer to the "centreon-map" folder. Be careful not to change the name of your images during this process.

## Step 2: Update MAP Legacy

For the icons to be displayed properly after you migrate your maps, you need to update your MAP legacy.

```shell
yum stop centreon-map
yum update centreon-map-server --enablerepo=centreon-beta-stable
systemctl daemon-reload
systemctl start centreon-map
```

## Step 3: Migrate maps

To import your legacy maps into MAP Web Beta:

On the Monitoring > Map page, click Migrate. The following window appears:
 


 

Click Next.
 


