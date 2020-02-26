---
id: disco-service-create-rule
title: Create services discovery rules
---

## Discovery rules

### General options

A discovery rule allows to dynamically create services and to link them to a host, based on the elements discovered by
the probes. The created unit services will be attached to a service template so that Centreon's functionalities can be
used (inheritance, overloading and more).

To create a rule, go to **Configuration \> Services \> Auto Discovery \> Rules** and click on the **Add** button:

![image](assets/configuration/autodisco/create_rule_1.png)

Fill the first fields:

![image](assets/configuration/autodisco/create_rule_2.png)

Here is the description of the firsts fields located inside the *General* tab:

* **Rule name**: the rule's name
* **Command Macro**: discovery command which allow to list available XML attributes
* **Command Discover**: discovery command which will be executed to enumerate the elements
* **Service template**: the service template used to dynamically create new services based 
  on the discovery

Go to the second **Inclusions / Exclusions & Macros** tab. You should see available XML attributes:

![image](assets/configuration/autodisco/create_rule_3.png)

Come back to the first **General** tab, define the **Service display name** and select values for the other fields:

![image](assets/configuration/autodisco/create_rule_4.png)

Define the name of the service that will be created.

> The service name can contain a macro corresponding to an XML stream's attribute. For example: when looking for network
> interfaces, the interface name will be given by the **name** attribute. **Traffic-$name$** will be replaced by
> **Traffic-eth0** if the interface's name is **eth0**. The XML attribute's name must be described between two **$**
> characters. You can use many XML attributes to build the service name.

Here is the description of the other fields located inside the *General* tab:

* **Hosts templates**: the templates used to retrieve the list of hosts for which a discovery rule should be run
* **Linked Instances**: execute only the rule for host attached to selected instances.

> Keep empty to execute rule for any instance.

* **Contacts**: contacts that will be notified about creation or deactivation during a discovery
* **Contact groups**: contact groups that will be notified about creation or deactivation during a discovery
* **Disable elements not found**: let the module deactivate services
  associated to elements that cannot be found anymore
* **Update existing services**: update created service property if enable (custom macro, etc.).
* **Activate**: activate or deactivate the rule (will be ignored by the discovery process if deactivated)

Click on the **Save** button to save the discovery rule.

### Inclusions / Exclusions & Macros

The **Inclusions / Exclusions & Macros** tab works as follows:

![image](assets/configuration/autodisco/create_rule_5.png)

The **Inclusions / Exclusions** part allows elements to be included or excluded during the discovery. This
inclusion/exclusion is relative to an XML attribute.

The inclusion/exclusion rules, are defined using the following algorithm:

* If only inclusion rules are present, the attribute's value corresponding to at least one inclusion will be considered
* If only exclusion rules are present, every element will be considered, except the ones corresponding to an exclusion
* If both types are present, the process checks if the element corresponds to an inclusion and then checks if it is not
  listed into the exclusion list

The second part **Macros** allows to define matches between an XML attribute and a service's template macro. For all
created services the macros' values will be replaced by the attributes' values.

![image](assets/configuration/autodisco/create_rule_6.png)

> On the image above all macros will be created for the service because the checkbox **Empty** are selected. To don't
> create them do not check the **Empty** checkbox. The **$_SERVICEINTERFACEID** macro created on the service will contain
> the value of **$interfaceid** from the value of XML element.

### Advanced options

On the last **Advanced** tab you can apply a regexp on the **Service display name**.
Click on **Add a new entry** button and define Pattern and expression result:

![image](assets/configuration/autodisco/create_rule_7.png)

The regexp can be apply on **String** field for:

* **@SERVICENAME@**: The name of service will be created
* All XML attributes defined by **$attribute_name$**

The second part **Customize code** allows to use Perl code.

**Custom display scan** gives you the capability to change the display of a manual scan.
By default, manual scan display the service name. Here an example to add the size of the disk:

```Perl
my ($value, $unit) = change_bytes(value => $total$);
$description = "<span style='color: red; font-weight: bold'>@SERVICENAME@</span> [size = <b>$value $unit</b>]";
 ```

**Custom variables** gives you the capability to create some custom macros. Here an example to have dynamic threshold
according the disk size:
```Perl
my $total_gb = $total$ / 1000 / 1000 / 1000;
if ($total_gb < 100) {
    $warning$ = 80;
    $critical$ = 90;
} elsif ($total_gb < 500) {
    $warning$ = 90;
    $critical$ = 95;
} else {
    $warning$ = 95;
    $critical$ = 98;
}
```

Now, you could use **$warning$** and **$critical$** macro in **Macros** part.

.. _disco_cmd:

## Discovery commands

A **discovery commands** is a command line to execute a [discovery plugin](#discovery-plugins).

For each discovery plugins you need to define two commands:

* The first one to get the list of available XML attributes
* The second one to discover items on a host

![image](assets/configuration/autodisco/commands_list.png)

### Command to list available XML attributes

Go to **Configuration \> Commands \> Discovery** menu and click on **Add** button to create the first command.

Fill the fileds:

* **Command Name**: Name of your command
* **Command type**: check **Discovery** option
* **Command Line**: Define the command to get the list of XML attributes

> All commands using Centreon Plugin project need to set the **hostname** option so add **--hostname=127.0.0.1** in
> your command line

![image](assets/configuration/autodisco/command_attributes.png)

This is an example of the command line executed in a shell:
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=127.0.0.1 --disco-format
```
And the result:
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <element>name</element>
    <element>total</element>
    <element>status</element>
    <element>interfaceid</element>
</data>
```

Save the command.

### Command to get the list of items on a host

Go to **Configuration \> Commands \> Discovery** menu and click on **Add** button to create the first command.

Fill the fileds:

* **Command Name**: Name of your command
* **Command type**: check **Discovery** option
* **Command Line**: Define the command to get the list of items.

![image](assets/configuration/autodisco/command_disco.png)

This is an example of the command line executed in a shell:
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=192.168.220.129 --snmp-version=2 --snmp-community=public --disco-show
```
And the result:
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <label status="1" name="lo" total="10" interfaceid="1"/>
    <label status="1" name="eth0" total="1000" interfaceid="2"/>
</data>
```

Save the command.

## Discovery plugins

A **discovery plugin** (also called **plugin**) is a script that lists a set of similar elements such as file systems
or network interfaces on a given equipment.

This plugins must be executable from the command line (shell) by the **centreon** user (or the user running the
monitoring engine). It can be run locally or remotely using protocols such as SSH or NRPE.

The result must be a valid XML stream where each element must be described as an attribute of a XML node. This
execution must be available using an option. The Centreon Plugins use '--mode=xxx --disco-show'.

For example:
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=192.168.220.129 --snmp-version=2 --snmp-community=public --disco-show
```
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <label status="1" name="lo" total="10" interfaceid="1"/>
    <label status="1" name="eth0" total="1000" interfaceid="2"/>
</data>
```

In the previous example, the ``name`` attribute corresponds to the network interface. The ``status`` describes the
IFOPERSTATUS, ``total`` describes the IFSPEED of the interface and ``interfaceid`` describes the IFINDEX.

The discovery plugin should also list (XML output) the available XML attributes using an option.
The The Centreon Plugins use '--mode=xxx --disco-format'.

For example:
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=127.0.0.1 --disco-format
```
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <element>name</element>
    <element>total</element>
    <element>status</element>
    <element>interfaceid</element>
</data>
```

Here, four attributes are available: ``name``, ``total``, ``status`` and ``interfaceid``.

## Manually test a rule

You can run manually discovery using following options:

* ``--filter-rule=<rule_name>``: Run selected rule
* ``--filter-host=<host_name>``: Run all rules linked to hosttemplates used by host
* ``--filter-poller=<poller_name>``: Run rules for ressources linked to the poller
* ``--dry-run``: Run tests without configuration change

> You can combine ``--filter-*=<value>`` options. ``--dry-run`` option is an independant option.

### Examples

Run all rules:
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco
```

Test all rules:
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --dry-run
```

Test specific rule:
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --filter-rule="OS-Linux-SNMP-Network-Interfaces-Discovery" \
  --dry-run
```

Test all rules linked to hosttemplates used by specific host:
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --filter-host="centreon-server" \
  --dry-run
```

Test specific rule on predifined host:
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --filter-rule="OS-Linux-SNMP-Network-Interfaces-Discovery" \
  --filter-host="centreon-server" \
  --dry-run
```
