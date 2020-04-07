---
id: configure
title: Configure
---

## Administrate users rights

There is two kinds of administrators, Centreon admins and Map admins.

On fresh install, only Centreon admins exist.

Centreon admins may grant Map admins privileges through ACL groups defined in
Centreon.

Any user contained in that group then become a Map administrator.

### Manage Map administrators

To grant Map administrator privileges on an ACL group:

Go to *Preferences \> Preferences* then select *Admin* tab.

![image](assets/graph-views/admin_preference_page.png)

### Give access on views to other users and manage their privileges

By default non-admin users have no access on views, and have no privileges.

Administrators may grant these accesses and privileges to specifics set of users
through ACL groups.

ACL groups may be allowed to visualize, create, modify and delete one or more
views independently.

Go into *Preferences \> Preferences* and then select *Views \> ACLs*.

![image](assets/graph-views/acl_views_preference_page.png)

Select, from the list, the ACL group you want to configure. Then, for each view,
define the specific rights to attribute.

**GeoViews**

Two simple rules apply on this kind of view:

  - Any user accessing the Monitoring \> Map page will be able to see all the
    created geographic views
  - Users that have "Creation" privilege (through ACL group on Centreon Map
    desktop client) have all privileges on geographic views

## Load disabled resources (or not)

You can decide whether to load disabled resources into Centreon Map desktop
client. If you do (which is the default configuration), all disabled resources
will appear in the resource list. You will also be able to use them into your
views.

They will have no status and appear as shown in the following screenshot:

![image](assets/graph-views/disabled-resources.png)

You may change this configuration by opening the file
/etc/centreon-studio/studio-config.properties and adding the following line:

    resource.load.enabled.only=true

> Be sure to restart the Centreon MAP server after editing the configuration
> file: `systemctl restart centreon-map.`

## Define views & status computation parameters

Centreon Map server gives you the possibility to customize how this inherited
status is computed & rendered in views. You may use the following parameters to
adapt the behavior of inherited status computation to your use case.

| Parameter                           | Possible value | Default value | Description                                                                                  |
| ----------------------------------- | -------------- | ------------- | -------------------------------------------------------------------------------------------- |
| drilldown.useHardState              | true or false  | false         | Only use hard state value for inherited status propagation                                   |
| drilldown.ignoreElementInDowntime   | true or false  | false         | Do not propagate status for resources in downtime                                            |
| drilldown.ignoreElementAcknowledged | true or false  | false         | Do not propagate status for acknowledged resources                                           |
| drilldown.ignoreSeveritySuperior    | integer        | 0             | Do not propagate status for resources having severity superior to this value                 |
| gate.useResourcesAccess             | true or false  | true          | Should Centreon Map consider resources ACL when calculating inherited status of view content |

The following parameters can be configured in
`/etc/centreon-studio/studio-config.properties`.

If you had, remove or update a parameter, make sure to restart centreon-map.

**What's an inherited status ?**

An inherited status is a Centreon Map custom status associated to some objects
that is based on the worst status of its children, here are the rules:

  - A host has two statuses: its own status (up/down/pending) and an inherited
    status that is based on the worst state of its services.
  - A hostgroup only has an inherited status corresponding to the worst status
    of its children (hosts, services)
  - A servicegroup has only an inherited status: the worst status of its
    children (services)
  - A container has only an inherited status: the worst status of its children
    (hosts, services, meta-services, hotsgroups, servicegroups, BA, widgets)

**Inherited status customization**

Centreon Map server gives you the possibility to customize how this inherited
status is computed & rendered in views. You may use the following parameters to
adapt the behavior of inherited status computation to your use case:

Specificity of **gate.useResourcesAccess**: Settings this parameter to "false"
may highly improve Centreon Map performances, here is why:

  - gate.useResourcesAccess = false: all users see the same status & same
    resources in views, no matter the ACL ressources they have, they're ignored.
    In that case, be careful who you're giving access to views
  - gate.useResourcesAccess = true: users see different status & views regarding
    resources ACLs (decrease performance because you need to have one instance
    of each view for each users)

To configure these parameters you need to edit the following Centreon MAP server
configuration file (modify or add missing parameters), then restart centreon-map: :

    $ vim /etc/centreon-studio/studio-config.properties
    $ systemctl restart centreon-map

## Change link colors

> This property will only be applied to the user modifying it on the desktop
> client.

You can change the start and end color of a link based on a metric. These colors
represent a scale from 0% to 100% for the metric(s) associated with the link.

![image](assets/graph-views/guide_link_color.png)

## Understand how resources synchronization works

Each time you make changes to Centreon's configuration and push the
configuration to any poller, the configuration is scanned and updated on
Centreon MAP.

However, if you make any changes (add/delete/update) to Centreon's resources and
want these changes to be immediately synchronized on your Centreon MAP without
pushing the configuration, you can force a resource synchronization from
Centreon MAP's desktop client through the following menu "Action \> Synchronize
resources."

This operation may take a few seconds. A pop-up will tell you when the
synchronization is complete.

![image](assets/graph-views/sync_resources.png)

## Highlight problems

> This property will only be applied to the user modifying it on the desktop
> client.

You can change the size of elements according to their status as a way of
highlighting a problem. This only works when elements are expressed in the
*geometric style*.

![image](assets/graph-views/guide_object_ratio_example.png)

To use this feature, edit the Status size properties in the desktop Preferences.
Go to *Status \> Status size* to configure it globally or to *Views \> Status \>
Status size* to configure it at the view level.

![image](assets/graph-views/guide_ratio_preferences.png)

## Geo view configuration

### Configure tiles provider

You can choose the tile service provider or even add your own provider in
*Administration \> Extension | Map Option*. By default, Centreon Map geoviews
comes Open Street Map & Mapbox.

Please refer to [this
link](https://operations.osmfoundation.org/policies/tiles/) to understand Open
Street Map Tile usage policy.

To change the tile provider, select one in the list and click save.

![image](assets/graph-views/geo_options.png)

If you want to use your own Tile service provider, if for example you have an
internal Open Street Map server, go to the *Administration \> Extension | Map
Option* and choose the "Custom" style. Define the parameters needed and then
save.

![image](assets/graph-views/geo_custom_provider.png)

### Configure data layers

You can add any external data layer to Centreon GeoView by going to
*Administration \> Extension \> Map*. The layer mechanism is the same that the
tiles provider: we're compatible with tiles map. (TMS)

Most of the time, the data layer configuration will consist in :

  - Defining the URL
  - Setting your token
  - Adding any extra parameters in a JSON format

![image](assets/graph-views/geo_datalayers_conf_form.png)

## Create and link a Mapbox account

If you want to be able to have a geographic background on standard views and/or
use it as a tile service provider in GeoView, you need to have a Mapbox account
& link it to your Centreon Map.

**Create an account**

Mapbox is a service that generates attractive and customizable maps. You can use
Mapbox with Centreon MAP for free by:

  - Creating an account [on Mapbox](https://www.mapbox.com/).
  - [Retrieving a private
    token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#creating-and-managing-access-tokens)
    from your Mapbox account and add it to the configuration of the Centreon MAP
    Server (or during the installation).

During the token creation, you're asked to select properties, select:

  - Public scopes: *styles:read* and *styles:tiles*
  - Secret scopes: *styles:list*

Your account allows free limited use of the service up to 50k tiles/month.

*A tile is an image used to compose the geographic view.* If you need more
tiles, you can upgrade your account
([pricing](https://www.mapbox.com/pricing/)).

**Configuration on the Centreon MAP server**

Insert the token in the file `/etc/centreon-studio/studio-config.properties.`

    ##### GEO
    mapbox.token=sk.xxxxxxxx

Then restart centreon-map.

    systemctl restart centreon-map
