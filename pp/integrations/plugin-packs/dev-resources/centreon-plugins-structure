---
id: centreon-plugins-structure
title: Centreon-plugins structure
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Plugins / Connectors documentation

*******

## Plugins introduction

Centreon plugins are a free and open source way to monitor systems. The project can be used with Centreon and all monitoring softwares compatible with Nagios plugins.
You can monitor many systems:

* application: Apache, Asterisk, Elasticsearch, Github, Jenkins, Kafka, Nginx, Pfsense, Redis, Tomcat, Varnish,...
* cloud: AWS, Azure, Docker, Office365, Nutanix, Prometheus,...
* database: Firebird, Informix, MS SQL, MySQL, Oracle, Postgres, Cassandra
* hardware: printers (rfc3805), UPS (Powerware, Mge, Standard), Sun Hardware, Cisco UCS, SensorIP, HP Proliant, HP Bladechassis, Dell Openmanage, Dell CMC, Raritan,...
* network: Aruba, Brocade, Bluecoat, Brocade, Checkpoint, Cisco AP/IronPort/ASA/Standard, Extreme, Fortigate, H3C, Hirschmann, HP Procurve, F5 BIG-IP, Juniper, PaloAlto, Redback, Riverbed, Ruggedcom, Stonesoft,...
* os: Linux (SNMP, NRPE), Freebsd (SNMP), AIX (SNMP), Solaris (SNMP)...
* storage: EMC Clariion, Netapp, Nimble, HP MSA p2000, Dell EqualLogic, Qnap, Panzura, Synology...

This document introduces the best practices in the development of "centreon-plugins".

As all plugins are written in Perl, “there is more than one way to do it”.
But to avoid reinventing the wheel, you should first take a look at the “example” directory, you will get an overview of how to build your own plugin and associated modes.

The lastest version is available on following git repository: https://github.com/centreon/centreon-plugins.git

## Layout

### Directories layout

#### Plugins directories layout

The project content is made of a main binary (`centreon_plugins.pl`), and a logical
directory structure allowing to separate plugins and modes files across the domain they
are referring to.

You can display it using the command `tree -L 1`. 

```shell
.
├── apps
├── blockchain
├── centreon
├── centreon_plugins.pl
├── changelog
├── cloud
├── contrib
├── database
├── doc
├── example
├── hardware
├── Jenkinsfile
├── LICENSE.txt
├── network
├── notification
├── os
├── README.md
├── snmp_standard
├── sonar-project.properties
└── storage
```
Root directories are organized by section:

* Application       : apps
* Database          : database
* Hardware          : hardware
* Network equipment : network
* Operating System  : os
* Storage equipment : storage

#### Single plugin directory layout

According to the monitored object, it exists an organization which can use:

* Type
* Constructor
* Model
* Monitoring Protocol

Let's take a deeper look at the layout of the directory containing modes to monitor Linux
systems through the command-line (`tree os/linux/local/ -L 1`). 

```shell
os/linux/local/
├── custom      # Type: Directory. Contains code that can be used by several modes (e.g authentication, token management, ...).
│   └── cli.pm  # Type: File. *Custom mode* defining common methods 
├── mode        # Type: Directory. Contains all **modes**. 
[...]
│   └── cpu.pm  # Type: File. **Mode** containing the code to monitor the CPU
[...]
└── plugin.pm   # Type: File. **Plugin** definition.
```
Note the os/linux/local. The project offers other ways to monitor Linux, SNMP for example. To avoid mixing modes using different protocols in the same directory and face some naming collisions, we split them across several directories making it clear what protocol they rely on.

Now, let's see how these concepts combine to build a command line:
```shell
# <perl interpreter> <main_binary> --plugin=<perl_normalized_path_to_plugin_file> --mode=<mode_name> 
perl centreon_plugins.pl --plugin=os::linux::local::plugin --mode=cpu
```

### Shared directories

Some specific directories are not related to a domain (os, cloud...) and are used across all plugins.

#### The centreon directory

The centreon directory is specific, it contains:

* Project libraries/packages. This is all the code that will help you to develop faster by avoiding coding protocol-related things (SNMP, HTTPx, SSH...) or common things like options or cache management from scratch. You can read the perl modules if you're an experienced developer but there is very little chance that you would have to modify anything in it.
* Common files shared by multiple plugins. This is to avoid duplicating code across the directory tree and ease the maintenance of the project.

An more detailed desception of this libraries is availible [here](#librairies)

#### The snmp_standard/mode directory

The snmp_standard/mode exists since the beginning when SNMP monitoring was much more used than it is today. All the modes it contains use standard OIDs, which means that many plugins are relying on these when the manufacturer supports standard MIBs on their devices.

### Plugin.mp

This file must contain : 
* license / copyright
* package name
* libraries
* new constructor

First this file contains the Copyright section. At the end of it, you can add your author informations like this :

```
# ...
# Authors : <your name> <<your email>>
```
Then the **package** name : path to your package. '::' instead of '/', and no .pm at the end.

```perl
package path::to::plugin;
```
Used libraries (strict and warnings are mandatory). 

```perl
use strict;
use warnings;
```
Centreon librarie :

```perl
use base qw(**centreon_library**);
```
There are five kinds of centreon libraries here :
* centreon::plugins::script_simple : Previously the general use case if no custom is needed, more explainations [here]((#custom_mode_tuto) in this section.
* centreon::plugins::script_custom : Need custom directory - More explainations [here]((#custom_mode_tuto) in this section.
* centreon::plugins::script_snmp : If SNMP protocol is needed for this plugin
* centreon::plugins::script_sql : If DB acess is needed for this plugin
* centreon::plugins::script_wsman : Concern Windows specific protocols

The plugin need a new constructor to instantiate the object:

```perl

sub new {
      my ($class, %options) = @_;
      my $self = $class->SUPER::new(package => __PACKAGE__, %options);
      bless $self, $class;

      ...

      return $self;
}
```
Plugin version declaration is in the new constructor:

```perl
$self->{version} = '0.1';
```
Several modes can be declared in the new constructor:

```perl
%{$self->{modes}} = (
                      'mode1'    => '<plugin_path>::mode::mode1',
                      'mode2'    => '<plugin_path>::mode::mode2',
                      ...
                      );
```
Then, the module is declared:

```perl
1;
```
A description of the plugin is needed to generate the documentation:

```perl
__END__

=head1 PLUGIN DESCRIPTION

<Add a plugin description here>.

=cut
```
> **TIP** : You can copy-paste an other plugin.pm and adapt some lines (package, arguments...).
 The plugin has ".pm" extension because it's a Perl module. So don't forget to add 1; at the end of the file.

### Mode.pm file

Mode.pm as plugin.pm has also :
* license / copyright
* package name
* libraries
* new constructor

But mode.pm also needs at least :
* options in the new constructor
* check_options method
* manage_selection method (called run in old contain)

```perl

  # ...
  # Authors : <your name> <<your email>>
  
  package path::to::plugin::mode::mode1;

  use strict;
  use warnings;
  use base qw(centreon::plugins::mode);

  sub new {
        my ($class, %options) = @_;
        my $self = $class->SUPER::new(package => __PACKAGE__, %options);
        bless $self, $class;

        ...

        return $self;
  }
```
Mode version must be declared in the **new** constructor:

```perl

  $self->{version} = '1.0';

```
Several options can be declared in the **new** constructor:

```perl

  $options{options}->add_options(arguments => {
      "option1:s" => { name => 'option1' },
      "option2:s" => { name => 'option2', default => 'value1' },
      "option3"   => { name => 'option3' },
  });

```
Here is the description of arguments used in this example:

* option1 : String value
* option2 : String value with default value "value1"
* option3 : Boolean value

> **TIP** : You can have more informations about options format here: http://perldoc.perl.org/Getopt/Long.html

The mode need a **check_options** method to validate options:

```perl

  sub check_options {
    my ($self, %options) = @_;
    $self->SUPER::init(%options);
    ...
  }

```
For example, Warning and Critical thresholds must be validate in **check_options** method:

```perl

  if (($self->{perfdata}->threshold_validate(label => 'warning', value => $self->{option_results}->{warning})) == 0) {
       $self->{output}->add_option_msg(short_msg => "Wrong warning threshold '" . $self->{option_results}->{warning} . "'.");
       $self->{output}->option_exit();
  }
  if (($self->{perfdata}->threshold_validate(label => 'critical', value => $self->{option_results}->{critical})) == 0) {
       $self->{output}->add_option_msg(short_msg => "Wrong critical threshold '" . $self->{option_results}->{critical} . "'.");
       $self->{output}->option_exit();
  }

```
In this example, help is printed if thresholds do not have a correct format.

Then comes the **run** method, where you perform measurement, check thresholds, display output and format performance datas.

This is an example to check a SNMP value:

```perl

  sub run {
    my ($self, %options) = @_;
    $self->{snmp} = $options{snmp};
    $self->{hostname} = $self->{snmp}->get_hostname();

    my $result = $self->{snmp}->get_leef(oids => [$self->{option_results}->{oid}], nothing_quit => 1);
    my $value = $result->{$self->{option_results}->{oid}};

    my $exit = $self->{perfdata}->threshold_check(value => $value,
                               threshold => [ { label => 'critical', 'exit_litteral' => 'critical' }, { label => 'warning', exit_litteral => 'warning' } ]);
    $self->{output}->output_add(severity => $exit,
                                short_msg => sprintf("SNMP Value is %s.", $value));

    $self->{output}->perfdata_add(label => 'value', unit => undef,
                                  value => $value,
                                  warning => $self->{perfdata}->get_perfdata_for_output(label => 'warning'),
                                  critical => $self->{perfdata}->get_perfdata_for_output(label => 'critical'),
                                  min => undef, max => undef);

    $self->{output}->display();
    $self->{output}->exit();
  }

```
In this example, we check a SNMP OID that we compare to warning and critical thresholds.
There are the methods which we use:

* get_leef        : get a SNMP value from an OID
* threshold_check : compare SNMP value to warning and critical thresholds
* output_add      : add output
* perfdata_add    : add perfdata to output
* display         : display output
* exit            : exit

Then, declare the module:

```perl

  1;

```
A description of the mode and its arguments is needed to generate the documentation:

```perl

  __END__

  =head1 PLUGIN DESCRIPTION

  <Add a plugin description here>.

  =cut

```

### Model Classes Usage

**Introduction**

With the experience of plugin development, we have created two classes:

* centreon::plugins::templates::counter
* centreon::plugins::templates::hardware

It was developed to have a more consistent code and less redundant code. According to context, you should use one of two classes for modes. 
Following classes can be used for whatever plugin type (SNMP, Custom, DBI,...).

#### 5.1 Class counter

##### When to use it ?

If you have some counters (CPU Usage, Memory, Session...), you should use that class.
If you have only one global counter to check, it's maybe not useful to use it (but only for these case).

##### Class methods

List of methods:

* **new**: class constructor. Overload if you need to add some specific options or to use a statefile.
* **check_options**: overload if you need to check your specific options.
* **manage_selection**: overload if *mandatory*. Method to get informations for the equipment.
* **set_counters**: overload if **mandatory**. Method to configure counters.

#### 5.2 Class hardware






TODO





### Commit and push

Before committing a plugin, you need to create an **enhancement ticket** on the centreon-plugins forge : http://forge.centreon.com/projects/centreon-plugins

Once plugin and modes are developed, you can commit (commit messages in english) and push your work:

```shell
  git add path/to/plugin
  git commit -m "Add new plugin for XXXX refs #<ticked_id>"
  git push
```

<div id='librairies'/>

## List of shared libraries in centreon directory

This chapter describes Centreon libraries which you can use in your development.

### Output

This library allows you to build output of your plugin.

--------------
#### output_add
--------------

**Description**

Add string to output (print it with display method). If status is different than 'ok', output associated with 'ok' status is not printed

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|--------------------------------------------
severity  | String | OK      | Status of the output.
separator | String | \-      | Separator between status and output string.
short_msg | String |         | Short output (first line).
long_msg  | String |         | Long output (used with --verbose option).

**Example**

This is an example of how to manage output:

```perl

$self->{output}->output_add(severity  => 'OK',
                            short_msg => 'All is ok');
$self->{output}->output_add(severity  => 'Critical',
                            short_msg => 'There is a critical problem');
$self->{output}->output_add(long_msg  => 'Port 1 is disconnected');

$self->{output}->display();
```
Output displays :

```
CRITICAL - There is a critical problem
Port 1 is disconnected
```
--------------
#### perfdata_add
--------------

**Description**

Add performance data to output (print it with **display** method).
Performance data are displayed after '|'.

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|---------------------------------------
label     | String |         | Label of the performance data.
value     | Int    |         | Value of the performance data.
unit      | String |         | Unit of the performance data.
warning   | String |         | Warning threshold.
critical  | String |         | Critical threshold.
min       | Int    |         | Minimum value of the performance data.
max       | Int    |         | Maximum value of the performance data.

**Example**

This is an example of how to add performance data:

```perl

$self->{output}->output_add(severity  => 'OK',
                            short_msg => 'Memory is ok');
$self->{output}->perfdata_add(label    => 'memory_used',
                              value    => 30000000,
                              unit     => 'B',
                              warning  => '80000000',
                              critical => '90000000',
                              min      => 0,
                              max      => 100000000);

$self->{output}->display();
```
Output displays :

```
OK - Memory is ok | 'memory_used'=30000000B;80000000;90000000;0;100000000
```

### Perfdata

This library allows you to manage performance data.

--------------
#### get_perfdata_for_output
--------------

**Description**
Manage thresholds of performance data for output.

**Parameters**

Parameter | Type         | Default | Description
----------|--------------|---------|----------------------------------------------------------
**label** | String       |         | Threshold label.
total     | Int          |         | Percent threshold to transform in global.
cast_int  | Int (0 or 1) |         | Cast absolute to int.
op        | String       |         | Operator to apply to start/end value (uses with 'value').
value     | Int          |         | Value to apply with 'op' option.

**Example**

This is an example of how to manage performance data for output:

```perl

my $format_warning_perfdata  = $self->{perfdata}->get_perfdata_for_output(label => 'warning', total => 1000000000, cast_int => 1);
my $format_critical_perfdata = $self->{perfdata}->get_perfdata_for_output(label => 'critical', total => 1000000000, cast_int => 1);

$self->{output}->perfdata_add(label    => 'memory_used',
                              value    => 30000000,
                              unit     => 'B',
                              warning  => $format_warning_perfdata,
                              critical => $format_critical_perfdata,
                              min      => 0,
                              max      => 1000000000);

```
**tip**
Dans cet Example, au lieu d'afficher les seuils Dégradé et Critique en 'pourcentage', la fonction calculera et affichera ceux-ci en 'bytes'.

--------------
#### threshold_validate
--------------

**Description**

Validate and affect threshold to a label.

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|-----------------
label     | String |         | Threshold label.
value     | String |         | Threshold value.

**Example**

This example checks if warning threshold is correct:

```perl

if (($self->{perfdata}->threshold_validate(label => 'warning', value => $self->{option_results}->{warning})) == 0) {
  $self->{output}->add_option_msg(short_msg => "Wrong warning threshold '" . $self->{option_results}->{warning} . "'.");
  $self->{output}->option_exit();
}
```
**tip**
Les bon formats de seuils sont consultables ici : https://nagios-plugins.org/doc/guidelines.html#THRESHOLDFORMAT

--------------
#### threshold_check
--------------

**Description**


Check performance data value with threshold to determine status.

**Parameters**

Parameter | Type         | Default | Description
----------|--------------|---------|-------------------------------------------------------
value     | Int          |         | Performance data value to compare.
threshold | String array |         | Threshold label to compare and exit status if reached.

**Example**

This example checks if performance data reached thresholds:

```perl
$self->{perfdata}->threshold_validate(label => 'warning', value => 80);
$self->{perfdata}->threshold_validate(label => 'critical', value => 90);
my $prct_used = 85;

my $exit = $self->{perfdata}->threshold_check(value => $prct_used, threshold => [ { label => 'critical', 'exit_litteral' => 'critical' }, { label => 'warning', exit_litteral => 'warning' } ]);

$self->{output}->output_add(severity  => $exit,
                            short_msg => sprint("Used memory is %i%%", $prct_used));
$self->{output}->display();
```
Output displays :

```
  WARNING - Used memory is 85% |
```
--------------
#### change_bytes
--------------

**Description**

Convert bytes to human readable unit.
Return value and unit.

**Parameters**

Parameter | Type | Default | Description
----------|------|---------|-----------------------------------
value     | Int  |         | Performance data value to convert.
network   |      | 1024    | Unit to divide (1000 if defined).

**Example**

This example change bytes to human readable unit:

```perl

my ($value, $unit) = $self->{perfdata}->change_bytes(value => 100000);

print $value.' '.$unit."\n";
```
Output displays :

```
  100 KB
```

### SNMP

This library allows you to use SNMP protocol in your plugin.
To use it, add the following line at the beginning of your **plugin.pm**:

```perl

use base qw(centreon::plugins::script_snmp);
```
--------------
#### get_leef
--------------

**Description**

Return hash table table of SNMP values for multiple OIDs (do not work with SNMP table).

**Parameters**

**Example**

This is an example of how to get 2 SNMP values:

```perl

my $oid_hrSystemUptime = '.1.3.6.1.2.1.25.1.1.0';
my $oid_sysUpTime = '.1.3.6.1.2.1.1.3.0';

my $result = $self->{snmp}->get_leef(oids => [ $oid_hrSystemUptime, $oid_sysUpTime ], nothing_quit => 1);

print $result->{$oid_hrSystemUptime}."\n";
print $result->{$oid_sysUpTime}."\n";
```
--------------
#### load
--------------

**Description**

Load a range of OIDs to use with **get_leef** method.

**Parameters**

Parameter       | Type         | Default | Description
----------------|--------------|---------|---------------------------------------------------------------
**oids**        | String array |         | Array of OIDs to check.
instances       | Int array    |         | Array of OID instances to check.
instance_regexp | String       |         | Regular expression to get instances from **instances** option.
begin           | Int          |         | Instance to begin
end             | Int          |         | Instance to end

**Example**

This is an example of how to get 4 instances of a SNMP table by using **load** method:

```perl
my $oid_dskPath = '.1.3.6.1.4.1.2021.9.1.2';

$self->{snmp}->load(oids => [$oid_dskPercentNode], instances => [1,2,3,4]);

my $result = $self->{snmp}->get_leef(nothing_quit => 1);

use Data::Dumper;
print Dumper($result);
```
This is an example of how to get multiple instances dynamically (memory modules of Dell hardware) by using **load** method:

```perl
my $oid_memoryDeviceStatus = '.1.3.6.1.4.1.674.10892.1.1100.50.1.5';
my $oid_memoryDeviceLocationName = '.1.3.6.1.4.1.674.10892.1.1100.50.1.8';
my $oid_memoryDeviceSize = '.1.3.6.1.4.1.674.10892.1.1100.50.1.14';
my $oid_memoryDeviceFailureModes = '.1.3.6.1.4.1.674.10892.1.1100.50.1.20';

my $result = $self->{snmp}->get_table(oid => $oid_memoryDeviceStatus);
$self->{snmp}->load(oids => [$oid_memoryDeviceLocationName, $oid_memoryDeviceSize, $oid_memoryDeviceFailureModes],
                    instances => [keys %$result],
                    instance_regexp => '(\d+\.\d+)$');

my $result2 = $self->{snmp}->get_leef();

use Data::Dumper;
print Dumper($result2);
```
--------------
#### get_table
--------------

**Description**

Return hash table of SNMP values for SNMP table.

**Parameters**

Parameter    | Type         | Default | Description
-------------|--------------|---------|--------------------------------------------------------
**oid**      | String       |         | OID of the snmp table to check.
start        | Int          |         | First OID to check.
end          | Int          |         | Last OID to check.
dont_quit    | Int (0 or 1) | 0       | Don't quit even if an SNMP error occured.
nothing_quit | Int (0 or 1) | 0       | Quit if no value is returned.
return_type  | Int (0 or 1) | 0       | Return a hash table with one level instead of multiple.

**Example**

This is an example of how to get a SNMP table:

```perl
my $oid_rcDeviceError            = '.1.3.6.1.4.1.15004.4.2.1';
my $oid_rcDeviceErrWatchdogReset = '.1.3.6.1.4.1.15004.4.2.1.2.0';

my $results = $self->{snmp}->get_table(oid => $oid_rcDeviceError, start => $oid_rcDeviceErrWatchdogReset);

use Data::Dumper;
print Dumper($results);
```
--------------
#### get_multiple_table
--------------

**Description**

Return hash table of SNMP values for multiple SNMP tables.

**Parameters**

|Parameter    | Type         | Default | Description
|-------------|--------------|---------|-----------------------------------------------------------|
|oids         | Hash table   |-        | Hash table of OIDs to check (Can be set by 'load' method).|
|-            |-             |-        | Keys can be: "oid", "start", "end".                       |
|dont_quit    | Int (0 or 1) | 0       | Don't quit even if an SNMP error occured.                 |
|nothing_quit | Int (0 or 1) | 0       | Quit if no value is returned.                             |
|return_type  | Int (0 or 1) | 0       | Return a hash table with one level instead of multiple.   |      

**Example**

This is an example of how to get 2 SNMP tables:

```perl
my $oid_sysDescr        = ".1.3.6.1.2.1.1.1";
my $aix_swap_pool       = ".1.3.6.1.4.1.2.6.191.2.4.2.1";

my $results = $self->{snmp}->get_multiple_table(oids => [
                                                      { oid => $aix_swap_pool, start => 1 },
                                                      { oid => $oid_sysDescr },
                                                ]);

use Data::Dumper;
print Dumper($results);
```
--------------
#### get_hostname
--------------

**Description**

Get hostname parameter (useful to get hostname in mode).

**Parameters**

None.

**Example**

This is an example of how to get hostname parameter:

```perl
my $hostname = $self->{snmp}->get_hostname();
```
--------------
#### get_port
--------------

**Description**


Get port parameter (useful to get port in mode).

**Parameters**

None.

**Example**

This is an example of how to get port parameter:

```perl
my $port = $self->{snmp}->get_port();
```
--------------
#### oid_lex_sort
--------------

**Description**

Return sorted OIDs.

**Parameters**

Parameter | Type         | Default | Description
----------|--------------|---------|-----------------------
**-**     | String array |         | Array of OIDs to sort.

**Example**

This example prints sorted OIDs:

```perl
foreach my $oid ($self->{snmp}->oid_lex_sort(keys %{$self->{results}->{$my_oid}})) {
  print $oid;
}
```

### Misc

This library provides a set of miscellaneous methods.
To use it, you can directly use the path of the method:

```perl
centreon::plugins::misc::<my_method>;
```
--------------
#### trim
--------------

**Description**

Strip whitespace from the beginning and end of a string.

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|-----------------
**-**     | String |         | String to strip.

**Example**

This is an example of how to use **trim** method:

```perl
my $word = '  Hello world !  ';
my $trim_word =  centreon::plugins::misc::trim($word);

print $word."\n";
print $trim_word."\n";
```
Output displays :

```
Hello world !
```
--------------
#### change_seconds
--------------

**Description**

Convert seconds to human readable text.

**Parameters**

Parameter | Type | Default | Description
----------|------|---------|------------------------------
**-**     | Int  |         | Number of seconds to convert.

**Example**

This is an example of how to use **change_seconds** method:

```perl
my $seconds = 3750;
my $human_readable_time =  centreon::plugins::misc::change_seconds($seconds);

print 'Human readable time : '.$human_readable_time."\n";
```
Output displays :

```
Human readable time : 1h 2m 30s
```
--------------
#### backtick
--------------

**Description**

Execute system command.

**Parameters**

Parameter       | Type         | Default | Description
----------------|--------------|---------|----------------------------------------
**command**     | String       |         | Command to execute.
arguments       | String array |         | Command arguments.
timeout         | Int          | 30      | Command timeout.
wait_exit       | Int (0 or 1) | 0       | Command process ignore SIGCHLD signals.
redirect_stderr | Int (0 or 1) | 0       | Print errors in output.

**Example**

This is an example of how to use **backtick** method:

```perl
my ($error, $stdout, $exit_code) = centreon::plugins::misc::backtick(
                                    command => 'ls /home',
                                    timeout => 5,
                                    wait_exit => 1
                                    );

print $stdout."\n";
```
Output displays files in '/home' directory.

--------------
#### execute
--------------

**Description**

Execute command remotely.

**Parameters**

Parameter       | Type   | Default | Description
----------------|--------|---------|----------------------------------------------------------------
**output**      | Object |         | Plugin output ($self->{output}).
**options**     | Object |         | Plugin options ($self->{option_results}) to get remote options.
sudo            | String |         | Use sudo command.
**command**     | String |         | Command to execute.
command_path    | String |         | Command path.
command_options | String |         | Command arguments.

**Example**

This is an example of how to use **execute** method.
We suppose ``--remote`` option is enabled:

```perl
my $stdout = centreon::plugins::misc::execute(output => $self->{output},
                                              options => $self->{option_results},
                                              sudo => 1,
                                              command => 'ls /home',
                                              command_path => '/bin/',
                                              command_options => '-l');
```
Output displays files in /home using ssh on a remote host.

--------------
#### windows_execute
---------------

**Description**

Execute command on Windows.

**Parameters**

Parameter       | Type   | Default | Description
----------------|--------|---------|-------------------------------------
**output**      | Object |         | Plugin output ($self->{output}).
**command**     | String |         | Command to execute.
command_path    | String |         | Command path.
command_options | String |         | Command arguments.
timeout         | Int    |         | Command timeout.
no_quit         | Int    |         | Don't quit even if an error occured.

**Example**

This is an example of how to use **windows_execute** method.

```perl
my $stdout = centreon::plugins::misc::windows_execute(output => $self->{output},
                                                      timeout => 10,
                                                      command => 'ipconfig',
                                                      command_path => '',
                                                      command_options => '/all');
```
Output displays IP configuration on a Windows host.

### Statefile

This library provides a set of methods to use a cache file.
To use it, add the following line at the beginning of your **mode**:

```perl
use centreon::plugins::statefile;
```

--------------
#### read
--------------

**Description**

Read cache file.

**Parameters**

Parameter         | Type   | Default | Description
------------------|--------|---------|-----------------------------
**statefile**     | String |         | Name of the cache file.
**statefile_dir** | String |         | Directory of the cache file.
memcached         | String |         | Memcached server to use.

**Example**

This is an example of how to use **read** method:

```perl
$self->{statefile_value} = centreon::plugins::statefile->new(%options);
$self->{statefile_value}->check_options(%options);
$self->{statefile_value}->read(statefile => 'my_cache_file',
                               statefile_dir => '/var/lib/centreon/centplugins'
                              );

use Data::Dumper;
print Dumper($self->{statefile_value});
```
Output displays cache file and its parameters.

--------------
#### get
--------------

**Description**

Get data from cache file.

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|-----------------------------
name      | String |         | Get a value from cache file.

**Example**

This is an example of how to use **get** method:

```perl
$self->{statefile_value} = centreon::plugins::statefile->new(%options);
$self->{statefile_value}->check_options(%options);
$self->{statefile_value}->read(statefile => 'my_cache_file',
                               statefile_dir => '/var/lib/centreon/centplugins'
                              );

my $value = $self->{statefile_value}->get(name => 'property1');
print $value."\n";
```
Output displays value for 'property1' of the cache file.

--------------
#### write
--------------

**Description**

Write data to cache file.

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|-----------------------------
data      | String |         | Data to write in cache file.

**Example**

This is an example of how to use **write** method:

```perl
$self->{statefile_value} = centreon::plugins::statefile->new(%options);
$self->{statefile_value}->check_options(%options);
$self->{statefile_value}->read(statefile => 'my_cache_file',
                               statefile_dir => '/var/lib/centreon/centplugins'
                              );

my $new_datas = {};
$new_datas->{last_timestamp} = time();
$self->{statefile_value}->write(data => $new_datas);
```
Then, you can read the result in '/var/lib/centreon/centplugins/my_cache_file', timestamp is written in it.

### HTTP

This library provides a set of methodss to use HTTP protocol.
To use it, add the following line at the beginning of your **mode**:

```perl
use centreon::plugins::http;
```

Some options must be set in **plugin.pm**:

 Option       | Type   | Description
-------------|--------|--------------------------------------------------------
**hostname** | String | IP Addr/FQDN of the webserver host.
**port**     | String | HTTP port.
**proto**    | String | Used protocol ('http' or 'https').
credentials  |        | Use credentials.
ntlm         |        | Use NTLM authentication (if ``--credentials`` is used).
username     | String | Username (if ``--credentials`` is used).
password     | String | User password (if ``--credentials`` is used).
proxyurl     | String | Proxy to use.
url_path     | String | URL to connect (start to '/').

--------------
#### connect
--------------

**Description**

Test a connection to an HTTP url.
Return content of the webpage.

**Parameters**

This method use plugin options previously defined.

**Example**

This is an example of how to use **connect** method.

We suppose these options are defined :
* --hostname = 'google.com'
* --urlpath  = '/'
* --proto    = 'http'
* --port     = 80

```perl
$self->{http} = centreon::plugins::http->new(output => $self->{output}, options => $self->{options});
$self->{http}->set_options(%{$self->{option_results}});
my $webcontent = $self->{http}->request();
print $webcontent;
```
Output displays content of the webpage '\http://google.com/'.

### DBI

This library allows you to connect to databases.
To use it, add the following line at the beginning of your **plugin.pm**:

```perl
use base qw(centreon::plugins::script_sql);
```

--------------
#### connect
--------------

**Description**

Connect to databases.

**Parameters**

Parameter | Type         | Default | Description
----------|--------------|---------|-----------------------------------
dontquit  | Int (0 or 1) | 0       | Don't quit even if errors occured.

**Example**

This is an example of how to use **connect** method.

The format of the connection string can have the following forms:

```
    DriverName:database_name
    DriverName:database_name@hostname:port
    DriverName:database=database_name;host=hostname;port=port
```
In plugin.pm:

```perl
$self->{sqldefault}->{dbi} = ();
$self->{sqldefault}->{dbi} = { data_source => 'mysql:host=127.0.0.1;port=3306' };
```
In your mode:

```perl
$self->{sql} = $options{sql};
my ($exit, $msg_error) = $self->{sql}->connect(dontquit => 1);
```
Then, you are connected to the MySQL database.

--------------
#### query
--------------

**Description**

Send query to database.

**Parameters**

Parameter | Type   | Default | Description
----------|--------|---------|-------------------
query     | String |         | SQL query to send.

**Example**

This is an example of how to use **query** method:

```perl
$self->{sql}->query(query => q{SHOW /*!50000 global */ STATUS LIKE 'Slow_queries'});
my ($name, $result) = $self->{sql}->fetchrow_array();

print 'Name : '.$name."\n";
print 'Value : '.$value."\n";
```
Output displays count of MySQL slow queries.

--------------
#### fetchrow_array
--------------

**Description**

Return Array from sql query.

**Parameters**

None.

**Example**

This is an example of how to use **fetchrow_array** method:

```perl
$self->{sql}->query(query => q{SHOW /*!50000 global */ STATUS LIKE 'Uptime'});
my ($dummy, $result) = $self->{sql}->fetchrow_array();

print 'Uptime : '.$result."\n";
```
Output displays MySQL uptime.

--------------
#### fetchall_arrayref
--------------

**Description**

Return Array from SQL query.

**Parameters**

None.

**Example**

This is an example of how to use **fetchrow_array** method:

```perl
$self->{sql}->query(query => q{
      SELECT SUM(DECODE(name, 'physical reads', value, 0)),
          SUM(DECODE(name, 'physical reads direct', value, 0)),
          SUM(DECODE(name, 'physical reads direct (lob)', value, 0)),
          SUM(DECODE(name, 'session logical reads', value, 0))
      FROM sys.v_$sysstat
});
my $result = $self->{sql}->fetchall_arrayref();

my $physical_reads = @$result[0]->[0];
my $physical_reads_direct = @$result[0]->[1];
my $physical_reads_direct_lob = @$result[0]->[2];
my $session_logical_reads = @$result[0]->[3];

print $physical_reads."\n";
```
Output displays physical reads on Oracle database.

--------------
#### fetchrow_hashref
--------------

**Description**

Return Hash table from SQL query.

**Parameters**

None.

**Example**

This is an example of how to use **fetchrow_hashref** method:

```perl
$self->{sql}->query(query => q{
  SELECT datname FROM pg_database
});

while ((my $row = $self->{sql}->fetchrow_hashref())) {
  print $row->{datname}."\n";
}
```
Output displays Postgres databases.
