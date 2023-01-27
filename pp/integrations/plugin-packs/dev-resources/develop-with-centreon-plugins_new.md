# Pluggins / Connectors documentation

<div id='table_of_content_1'/>

*******
Table of contents (1)
 1. [Introduction](#introduction)
 2. [Architecture](#architecture)
 3. [List of shared libraries in centreon folder](#librairies)
 4. [Tutorial : How to create a plugin](#tutoriel)
 5. [Pluggins guidelines and good practices](#guidelines)
*******

<div id='introduction'/>

## I. Pluggins introduction

[Retour à table of content (1)](#table_of_content_1)

A rédiger : Qu'est ce qu'un pluggin, à quoi ça sert, qu'est ce qu'il y a dedans ?

<div id='architecture'/>

## II. Architecture

<div id='table_of_content_2'/>

*******
Table of contents (2)
 1. [Architecture des dossiers](#architecture_dossier)
 2. [Dossiers partagés](#architecture_shared)
 3. [Fichier plugin.pm](#architecture_plugin)
 4. [Fichier mode.pm](#architecture_mode)
*******

[Retour à table of content (1)](#table_of_content_1)

<div id='architecture_dossier'/>

### 1. Architecture des dossiers / Layout and concepts

#### 1.1 Architecture du dossier des plugins

[Retour à table of content (2)](#table_of_content_2)

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

Les répertoires racines sont oganisés par catégorie dont voici certaines détaillées :

* Application            : apps
* Base de données        : database
* Matériel               : hardware
* Equipement réseau      : network
* Système d'exploitation : os
* Equipement de stockage : storage

#### 1.2 Architecture du dossier d'un pluggin

[Retour à table of content (2)](#table_of_content_2)

Selon l'objet supervisé, il existe une organisation qui peut être utilisée :

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

<div id='architecture_shared'/>

### 2. Dossiers partagés

[Retour à table of content (2)](#table_of_content_2)

Some specific directories are not related to a domain (os, cloud...) and are used across all plugins.

#### 2.1 The centreon directory
The centreon directory is specific, it contains:

* Project libraries/packages. This is all the code that will help you to develop faster by avoiding coding protocol-related things (SNMP, HTTPx, SSH...) or common things like options or cache management from scratch. You can read the perl modules if you're an experienced developer but there is very little chance that you would have to modify anything in it.
* Common files shared by multiple plugins. This is to avoid duplicating code across the directory tree and ease the maintenance of the project.

Une description plus en détail des différentes librairies communes est disponible [ici](#librairies)

#### 2.2 The snmp_standard/mode directory
The snmp_standard/mode exists since the beginning when SNMP monitoring was much more used than it is today. All the modes it contains use standard OIDs, which means that many plugins are relying on these when the manufacturer supports standard MIBs on their devices.

<div id='architecture_plugin'/>

### 3. File plugin.mp

[Retour à table of content (2)](#table_of_content_2)

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
* centreon::plugins::script_simple : General use case if no custom is needed
* centreon::plugins::script_custom : Need custom directory - Can using both api or cli (command line)
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

<div id='architecture_mode'/>

### 4. File mode.pm

[Retour à table of content (2)](#table_of_content_2)

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

<div id='librairies'/>

## III. Référentiel des librairies centreon pluggin en commun

Ce chapitre décrit les bibliothèques Centreon qui peuvent être utilisées dans votre développement.

<div id='table_of_content_3'/>

*******
Table of content (3)
 1. [Output](#lib_output)
 2. [Perfdata](#lib_perfdata)
 3. [SNMP](#lib_snmp)
 4. [Misc](#lib_misc)
 5. [Statefile](#lib_statefile)
 6. [HTTP](#lib_http)
 7. [DBI](#lib_dbi)
*******

[Retour à table of content (1)](#table_of_content_1)

<div id='lib_output'/>

### 1. Output

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque vous permet de construire la sortie de votre plugin.

--------------
#### 1.1 output_add
--------------

**Description**

Ajouter une chaîne de caractères à la sortie (affichée avec la méthode **display**).
Si le statut est différent de 'OK', le message de sortie associé à 'OK' ne sera pas affiché.

**Paramètres**

|  Paramètre |    Type |   Défaut |          Description                                          |
| -----------|---------|----------|---------------------------------------------------------------|
| severity   | String  |    OK    | Statut du message de sortie.                                  |
| separator  | String  |    \-    | Séparateur entre le statut et le message de sortie.           |
| short_msg  | String  |          | Message de sortie court (première ligne).                     |
| long_msg   | String  |          | Message de sortie long (utilisé avec l'option ``--verbose``). |

**Exemple**

Voici un exemple de gestion de la sortie du plugin :
```perl

$self->{output}->output_add(severity  => 'OK',
                            short_msg => 'All is ok');
$self->{output}->output_add(severity  => 'Critical',
                            short_msg => 'There is a critical problem');
$self->{output}->output_add(long_msg  => 'Port 1 is disconnected');

$self->{output}->display();
```
La sortie affichera :
```
CRITICAL - There is a critical problem
Port 1 is disconnected
```
--------------
#### 1.2 perfdata_add
--------------

**Description**

Ajouter une donnée de performance à la sortie (affichée avec la méthode **display**).
Les données de performance sont affichées après le symbole '|'.

**Paramètres**

|  Paramètre      |    Type         |   Défaut    |          Description                                    |
|-----------------|-----------------|-------------|---------------------------------------------------------|
| label           | String          |             | Label de la donnée de performance.                      |
| value           | Int             |             | Valeur de la donnée de performance.                     |
| unit            | String          |             | Unité de la donnée de performance.                      |
| warning         | String          |             | Seuil Dégradé.                                          |
| critical        | String          |             | Seuil Critique.                                         |
| min             | Int             |             | Valeur minimum de la donnée de performance.             |
| max             | Int             |             | Valeur maximum de la donnée de performance.             |

**Exemple**

Voici un exemple d'ajout d'une donnée de performance :

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
La sortie affichera :
```
OK - Memory is ok | 'memory_used'=30000000B;80000000;90000000;0;100000000
```

<div id='lib_perfdata'/>

### 2. Perfdata

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque vous permet de gérer les données de performance.

--------------
#### 2.1 get_perfdata_for_output
--------------

**Description**

Gérer les seuils des données de performance pour la sortie.

**Paramètres**

|  Paramètre      |    Type         |   Défaut    |          Description                                                     |
|-----------------|-----------------|-------------|--------------------------------------------------------------------------|
| **label**       | String          |             | Label du seuil.                                                          |
| total           | Int             |             | Seuil en pourcentage à transformer en valeur globale.                    |
| cast_int        | Int (0 or 1)    |             | Cast une valeur absolue en entier.                                       |
| op              | String          |             | Opérateur à appliquer à la valeur de début/fin (utilisé avec ``value``). |
| value           | Int             |             | Valeur à appliquer avec l'option ``op``.                                 |

**Exemple**

Voici un exemple de gestion des données de performance pour la sortie :

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
Dans cet exemple, au lieu d'afficher les seuils Dégradé et Critique en 'pourcentage', la fonction calculera et affichera ceux-ci en 'bytes'.

--------------
#### 2.2 threshold_validate
--------------

**Description**

Valider et associer un seuil à un label.

**Paramètres**

|  Paramètre      |    Type         |   Défaut    |          Description                                    |
|-----------------|-----------------|-------------|---------------------------------------------------------|
| label           | String          |             | Label du seuil.                                         |
| value           | String          |             | Valeur du seuil.                                        |

**Exemple**

Voici un exemple vérifiant si le seuil dégradé est correct :

```perl

if (($self->{perfdata}->threshold_validate(label => 'warning', value => $self->{option_results}->{warning})) == 0) {
  $self->{output}->add_option_msg(short_msg => "Wrong warning threshold '" . $self->{option_results}->{warning} . "'.");
  $self->{output}->option_exit();
}
```
**tip**
Les bon formats de seuils sont consultables ici : https://nagios-plugins.org/doc/guidelines.html#THRESHOLDFORMAT

--------------
#### 2.3 threshold_check
--------------

**Description**

Vérifier la valeur d'une donnée de performance avec un seuil pour déterminer son statut.

**Paramètres**

|  Paramètre      |    Type         |   Défaut    |          Description                                                    |
|-----------------|-----------------|-------------|-------------------------------------------------------------------------|
| value           | Int             |             | Valeur de la donnée de performance à comparer.                          |
| threshold       | String array    |             | Label du seuil à comparer et statut de sortie si celui-ci est atteint.  |

**Exemple**

Voici un exemple vérifiant si une donnée de performance a atteint certains seuils :

```perl
$self->{perfdata}->threshold_validate(label => 'warning', value => 80);
$self->{perfdata}->threshold_validate(label => 'critical', value => 90);
my $prct_used = 85;

my $exit = $self->{perfdata}->threshold_check(value => $prct_used, threshold => [ { label => 'critical', 'exit_litteral' => 'critical' }, { label => 'warning', exit_litteral => 'warning' } ]);

$self->{output}->output_add(severity  => $exit,
                            short_msg => sprint("Used memory is %i%%", $prct_used));
$self->{output}->display();
```

La sortie affichera :
```
  WARNING - Used memory is 85% |
```
--------------
#### 2.4 change_bytes
--------------

**Description**

Convertir des bytes en unité de mesure lisible.
Retourner une valeur et une unité.

**Paramètres**

|  Paramètre      |    Type         |   Défaut    |          Description                                    |
|-----------------|-----------------|-------------|---------------------------------------------------------|
| value           | Int             |             | Valeur de données de performance à convertir.           |
| network         |                 | 1024        | Unité de division (1000 si définie).                    |

**Exemple**

Voici un exemple de conversion des bytes en unité de mesure lisible :

```perl

my ($value, $unit) = $self->{perfdata}->change_bytes(value => 100000);

print $value.' '.$unit."\n";
```
La sortie affichera :
```
  100 KB
```

<div id='lib_snmp'/>

### 3. SNMP

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque vous permet d'utiliser le protocole SNMP dans votre plugin.
Pour l'utiliser, vous devez ajouter la ligne suivant au début de votre fichier **plugin.pm** :

```perl

use base qw(centreon::plugins::script_snmp);
```
--------------
#### 3.1 get_leef
--------------

**Description**

Retourne une table de hashage de valeurs SNMP pour plusieurs OIDs (ne fonctionne pas avec les tables SNMP).

**Paramètres**

**Exemple**

Voici un exemple pour récupérer 2 valeurs SNMP :

```perl

my $oid_hrSystemUptime = '.1.3.6.1.2.1.25.1.1.0';
my $oid_sysUpTime = '.1.3.6.1.2.1.1.3.0';

my $result = $self->{snmp}->get_leef(oids => [ $oid_hrSystemUptime, $oid_sysUpTime ], nothing_quit => 1);

print $result->{$oid_hrSystemUptime}."\n";
print $result->{$oid_sysUpTime}."\n";
```
--------------
#### 3.2 load
--------------

**Description**

Charger une liste d'OIDs à utiliser avec la méthode **get_leef**.

**Paramètres**

**Exemple**

Voici un exemple pour obtenir les 4 premières instances d'une table SNMP en utilisant la méthode **load** :

```perl
my $oid_dskPath = '.1.3.6.1.4.1.2021.9.1.2';

$self->{snmp}->load(oids => [$oid_dskPercentNode], instances => [1,2,3,4]);

my $result = $self->{snmp}->get_leef(nothing_quit => 1);

use Data::Dumper;
print Dumper($result);
```

Voici un exemple pour obtenir plusieurs instances dynamiquement (modules mémoire de matériel Dell) en utilisant la méthode **load** :

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
#### 3.3 get_table
--------------

**Description**

Retourner une table de hashage de valeurs SNMP pour une table SNMP.

**Paramètres**


|  Paramètre      |        Type          |   Défaut       |          Description                                            |
|-----------------|----------------------|----------------|-----------------------------------------------------------------|
| **oid**         |  String              |                | OID de la table SNMP à récupérer.                               |
| start           |  Int                 |                | Premier OID à récupérer.                                        |
| end             |  Int                 |                | Dernier OID à récupérer.                                        |
| dont_quit       |  Int (0 or 1)        |       0        | Ne pas quitter même si une erreur SNMP se produit.              |
| nothing_quit    |  Int (0 or 1)        |       0        | Quitter si aucune valeur n'est retournée.                       |
| return_type     |  Int (0 or 1)        |       0        | Retourner une table de hashage à un niveau au lieu de plusieurs.|

**Exemple**

Voici un exemple pour récupérer une table SNMP :

```perl
my $oid_rcDeviceError            = '.1.3.6.1.4.1.15004.4.2.1';
my $oid_rcDeviceErrWatchdogReset = '.1.3.6.1.4.1.15004.4.2.1.2.0';

my $results = $self->{snmp}->get_table(oid => $oid_rcDeviceError, start => $oid_rcDeviceErrWatchdogReset);

use Data::Dumper;
print Dumper($results);
```
--------------
#### 3.4 get_multiple_table
--------------

**Description**

Retourner une table de hashage de valeurs SNMP pour plusieurs tables SNMP.

**Paramètres**

|  Paramètre      |        Type          |   Défaut       |          Description                                                                  |
|-----------------|----------------------|----------------|---------------------------------------------------------------------------------------|
| **oids**        |  Hash table          |                | Table de hashage des OIDs à récupérer (Peut être spécifié avec la méthode ``load``).  |
|                 |                      |                | Les clés peuvent être : "oid", "start", "end".                                        |
| dont_quit       |  Int (0 or 1)        |       0        | Ne pas quitter même si une erreur snmp se produit.                                    |
| nothing_quit    |  Int (0 or 1)        |       0        | Quitter si aucune valeur n'est retournée.                                             |
| return_type     |  Int (0 or 1)        |       0        | Retourner une table de hashage à un niveau au lieu de plusieurs.                      |

**Exemple**

Voici un exemple pour récupérer 2 tables SNMP :

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
#### 3.5 get_hostname
--------------

**Description**

Récupérer le nom d'hôte en paramètre (utile pour obtenir le nom d'hôte dans un mode).

**Paramètres**

Aucun.

**Exemple**

Voici un exemple pour obtenir le nom d'hôte en paramètre :

```perl
my $hostname = $self->{snmp}->get_hostname();
```
--------------
#### 3.6 get_port
--------------

**Description**

Récupérer le port en paramètre (utile pour obtenir le port dans un mode).

**Parameters**

Aucun.

**Exemple**

Voici un exemple pour obtenir le port en paramètre :

```perl
my $port = $self->{snmp}->get_port();
```
--------------
#### 3.7 oid_lex_sort
--------------

**Description**

Retourner des OIDs triés.

**Paramètres**


|  Paramètre      |    Type           |   Défaut    |          Description                                    |
|-----------------|-------------------|-------------|---------------------------------------------------------|
| **-**           |  String array     |             | Tableau d'OIDs à trier.                                 |

**Exemple**

Cet exemple afichera des OIDs triés :

```perl
foreach my $oid ($self->{snmp}->oid_lex_sort(keys %{$self->{results}->{$my_oid}})) {
  print $oid;
}
```

<div id='lib_misc'/>

### 4. Misc

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque fournit un ensemble de méthodes diverses.
Pour l'utiliser, vous pouvez directement utiliser le chemin de la méthode :

```perl
centreon::plugins::misc::<my_method>;
```
--------------
#### 4.1 trim
--------------

**Description**

Enlever les espaces de début et de fin d'une chaîne de caractères.

**Paramètres**


|  Paramètre      |    Type         |   Défaut    |          Description                                    |
|-----------------|-----------------|-------------|---------------------------------------------------------|
| **-**           | String          |             | Chaîne à modifier.                                   |

**Exemple**

Voici un exemple d'utilisation de la méthode **trim** :

```perl
my $word = '  Hello world !  ';
my $trim_word =  centreon::plugins::misc::trim($word);

print $word."\n";
print $trim_word."\n";
```

La sortie affichera :
```
Hello world !
```
--------------
#### 4.2 change_seconds
--------------

**Description**

Convertir des secondes en unité de mesure lisible.

**Paramètres**

|  Paramètre      |    Type         |   Défaut    |          Description                                    |
|-----------------|-----------------|-------------|---------------------------------------------------------|
| **-**           | Int             |             | Nombre de secondes à convertir.                         |

**Exemple**

Voici un exemple d'utilisation de la méthode **change_seconds** :

```perl
my $seconds = 3750;
my $human_readable_time =  centreon::plugins::misc::change_seconds($seconds);

print 'Human readable time : '.$human_readable_time."\n";
```

La sortie affichera :
```
Human readable time : 1h 2m 30s
```
--------------
#### 4.3 backtick
--------------

**Description**

Exécuter une commande système.

**Paramètres**


|  Paramètre      |    Type         |   Défaut    |          Description                                    |
|-----------------|-----------------|-------------|---------------------------------------------------------|
| **command**     | String          |             | Commande à exécuter.                                    |
| arguments       | String array    |             | Arguments de la commande.                               |
| timeout         | Int             |     30      | Timeout de la commande.                                 |
| wait_exit       | Int (0 or 1)    |     0       | Le processus de la commande ignore les signaux SIGCHLD. |
| redirect_stderr | Int (0 or 1)    |     0       | Afficher les erreurs dans la sortie.                    |

**Exemple**

Voici un exemple d'utilisation de la méthode **backtick** :

```perl
my ($error, $stdout, $exit_code) = centreon::plugins::misc::backtick(
                                    command => 'ls /home',
                                    timeout => 5,
                                    wait_exit => 1
                                    );

print $stdout."\n";
```
La sortie affichera les fichiers du répertoire '/home'.

--------------
#### 4.4 execute
--------------

**Description**

Exécuter une commande à distance.

**Paramètres**

|  Paramètre       |    Type         |   Défaut    |          Description                                                                               |
|------------------|-----------------|-------------|----------------------------------------------------------------------------------------------------|
| **output**       | Object          |             | Sortie du plugin ($self->{output}).                                                                |
| **options**      | Object          |             | Options du plugin ($self->{option_results}) pour obtenir les informations de connexion à distance. |
| sudo             | String          |             | Utiliser la commande sudo.                                                                         |
| **command**      | String          |             | Commande à exécuter.                                                                               |
| command_path     | String          |             | Chemin de la commande.                                                                             |
| command_options  | String          |             | Arguments de la commande.                                                                          |

**Exemple**

Voici un exemple d'utilisation de la méthode **execute**.
Nous supposons que l'option ``--remote`` soit activée :

```perl
my $stdout = centreon::plugins::misc::execute(output => $self->{output},
                                              options => $self->{option_results},
                                              sudo => 1,
                                              command => 'ls /home',
                                              command_path => '/bin/',
                                              command_options => '-l');
```
La sortie affichera les fichier du répertoire /home d'un hôte distant à travers une connexion SSH.

--------------
#### 4.5 windows_execute
---------------

**Description**

Exécuter une commande sur Windows.

**Paramètres**


|  Paramètre       |    Type         |   Défaut    |          Description                                            |
|------------------|-----------------|-------------|-----------------------------------------------------------------|
| **output**       | Object          |             | Sortie du plugin ($self->{output}).                             |
| **command**      | String          |             | Commande à exécuter.                                            |
| command_path     | String          |             | Chemin de la commande.                                          |
| command_options  | String          |             | Arguments de la commande.                                       |
| timeout          | Int             |             | Timeout de la commande.                                         |
| no_quit          | Int             |             | Ne pas quitter même si une erreur SNMP se produit.              |

**Exemple**

Voici un exemple d'utilisation de la méthode **windows_execute**.

```perl
my $stdout = centreon::plugins::misc::windows_execute(output => $self->{output},
                                                      timeout => 10,
                                                      command => 'ipconfig',
                                                      command_path => '',
                                                      command_options => '/all');
```
La sortie affichera la configuration IP d'un hôte Windows.

<div id='lib_statefile'/>

### 5.Statefile

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque fournit un ensemble de méthodes pour utiliser un fichier de cache.
Pour l'utiliser, ajouter la ligne suivante au début de votre **mode** :

```perl
use centreon::plugins::statefile;
```

--------------
#### 5.1 read
--------------

**Description**

Lire un fichier de cache.

**Paramètres**


|  Paramètre        |    Type         |   Défaut    |          Description                                    |
|-------------------|-----------------|-------------|---------------------------------------------------------|
| **statefile**     | String          |             | Nom du fichier de cache.                                |
| **statefile_dir** | String          |             | Répertoire du fichier de cache.                         |
| memcached         | String          |             | Serveur memcached à utiliser.                           |

**Exemple**

Voici un exemple d'utilisation de la méthode **read** :

```perl
$self->{statefile_value} = centreon::plugins::statefile->new(%options);
$self->{statefile_value}->check_options(%options);
$self->{statefile_value}->read(statefile => 'my_cache_file',
                               statefile_dir => '/var/lib/centreon/centplugins'
                              );

use Data::Dumper;
print Dumper($self->{statefile_value});
```
La sortie affichera le fichier de cache et ses paramètres.

--------------
#### 5.2 get
--------------

**Description**

Récupérer les données d'un fichier de cache.

**Paramètres**

|  Paramètre        |    Type         |   Défaut    |          Description                                    |
|-------------------|-----------------|-------------|---------------------------------------------------------|
| name              | String          |             | Récupérer une valeur du fichier de cache.               |

**Exemple**

Voici un exemple d'utilisation de la méthode **get** :

```perl
$self->{statefile_value} = centreon::plugins::statefile->new(%options);
$self->{statefile_value}->check_options(%options);
$self->{statefile_value}->read(statefile => 'my_cache_file',
                               statefile_dir => '/var/lib/centreon/centplugins'
                              );

my $value = $self->{statefile_value}->get(name => 'property1');
print $value."\n";
```

La sortie affichera la valeur associée à 'property1' du fichier de cache.

--------------
#### 5.3 write
--------------

**Description**

Ecrire des données dans le fichier de cache.

**Paramètres**

|  Paramètre        |    Type         |   Défaut    |          Description                                    |
|-------------------|-----------------|-------------|---------------------------------------------------------|
| data              | String          |             | Données à écrire dans le fichier de cache.              |

**Exemple**

Voici un exemple d'utilisation de la méthode **write** :

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

Ensuite, vous pouvez voir le résultat dans le fichier '/var/lib/centreon/centplugins/my_cache_file', le timestamp y est écrit.

<div id='lib_http'/>

### 6. HTTP

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque fournit un ensemble de méthodes pour utiliser le protocole HTTP.
Pour l'utiliser, ajouter la ligne suivante au début de votre **mode** :

```perl
use centreon::plugins::http;
```

Certaines options doivent être spécifiées dans **plugin.pm** :


|  Option         |    Type         |          Description                                                 |
|-----------------|-----------------|----------------------------------------------------------------------|
| **hostname**    | String          | Adresse IP/FQDN du serveur web.                                      |
| **port**        | String          | Port HTTP.                                                           |
| **proto**       | String          | Protocole utilisé ('HTTP' ou 'HTTPS').                               |
| credentials     |                 | Utiliser les informations d'authentification.                        |
| ntlm            |                 | Utiliser l'authentification NTLM (si ``--credentials`` est utilisée).|
| username        | String          | Nom d'utilisateur (si ``--credentials`` est utilisée).               |
| password        | String          | Mot de passe (si ``--credentials`` est utilisée).                    |
| proxyurl        | String          | Proxy à utiliser.                                                    |
| url_path        | String          | URL à se connecter (commence par '/').                               |

--------------
#### 6.1 connect
--------------

**Description**

Tester la connexion vers une url HTTP.
Retourner le contenu de la page web.

**Paramètres**

Cette méthode utilise les options du plugin précédemment définies.

**Exemple**

Voici un exemple d'utilisation de la méthode **connect**.
Nous supposons que ces options sont définies :
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

La sortie affichera le contenu de la page web '\http://google.com/'.

<div id='lib_dbi'/>

### 7. DBI

[Retour à table of content (3)](#table_of_content_3)

Cette bibliothèque vous permet de vous connecter à une ou plusieurs bases de données.
Pour l'utiliser, ajouter la ligne suivante au début de votre fichier **plugin.pm** :

```perl
use base qw(centreon::plugins::script_sql);
```

--------------
#### 7.1 connect
--------------

**Description**

Se connecter à une ou plusieurs bases de données.

**Paramètres**

|  Paramètre |    Type      |   Défaut |          Description                                      |
|------------|--------------|----------|-----------------------------------------------------------|
| dontquit   | Int (0 or 1) |     0    | Ne pas quitter même si une erreur de connexion se produit.|

**Exemple**

Voici un exemple d'utilisation de la méthode **connect**.
Le format de la chaîne de connexion peut avoir les formes suivantes :
```
    DriverName:database_name
    DriverName:database_name@hostname:port
    DriverName:database=database_name;host=hostname;port=port
```

Dans plugin.pm :
```perl
$self->{sqldefault}->{dbi} = ();
$self->{sqldefault}->{dbi} = { data_source => 'mysql:host=127.0.0.1;port=3306' };
```

Dans votre mode :
```perl
$self->{sql} = $options{sql};
my ($exit, $msg_error) = $self->{sql}->connect(dontquit => 1);
```
Vous êtes alors connecté à la base de données MySQL.

--------------
#### 7.2 query
--------------

**Description**

Exécuter une requête SQL sur la base de données.

**Paramètres**

|  Paramètre        |    Type         |   Défaut    |          Description                                    |
|-------------------|-----------------|-------------|---------------------------------------------------------|
| query             | String          |             | Requête SQL à exécuter.                                 |

**Exemple**

Voici un exemple d'utilisation de la méthode **query** :

```perl
$self->{sql}->query(query => q{SHOW /*!50000 global */ STATUS LIKE 'Slow_queries'});
my ($name, $result) = $self->{sql}->fetchrow_array();

print 'Name : '.$name."\n";
print 'Value : '.$value."\n";
```

La sortie affichera le nombre de requêtes MySQL lentes.

--------------
#### 7.3 fetchrow_array
--------------

**Description**

Retourner une tableau à partir d'une requête SQL.

**Paramètres**

Aucun.

**Exemple**

Voici un exemple d'utilisation de la méthode **fetchrow_array** :

```perl
$self->{sql}->query(query => q{SHOW /*!50000 global */ STATUS LIKE 'Uptime'});
my ($dummy, $result) = $self->{sql}->fetchrow_array();

print 'Uptime : '.$result."\n";
```

La sortie affichera l'uptime MySQL.

--------------
#### 7.4 fetchall_arrayref
--------------

**Description**

Retourner un tableau à partir d'une requête SQL.

**Paramètres**

Aucun.

**Exemple**

Voici un exemple d'utilisation de la méthode **fetchrow_array** :

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

La sortie affichera les lectures physiques sur une base de données Oracle.

--------------
#### 7.5 fetchrow_hashref
--------------

**Description**

Retourner une table de hashage à partir d'une requête SQL.

**Paramètres**

Aucun.

**Exemple**

Voici un exemple d'utilisation de la méthode **fetchrow_hashref** :

```perl
$self->{sql}->query(query => q{
  SELECT datname FROM pg_database
});

while ((my $row = $self->{sql}->fetchrow_hashref())) {
  print $row->{datname}."\n";
}
```

La sortie affichera la liste des bases de données PostgreSQL.

<div id='tutoriel'/>

## IV. Tutoriel de création d'un pluggin

[Retour à table of content (1)](#table_of_content_1)

<div id='table_of_content_4'/>

*******
Table of contents (4)
 1. [Set up your environment](#set_up_tuto)
 2. [Input](#input_tuto)
 3. [Understand the data](#understand_data_tuto)
 4. [Create directories for a new plugin](#make_dir_tuto)
 5. [Create the plugin.pm file](#create_plugin_tuto)
 6. [Create the appmetrics.pm file](#create_mode_tuto)
*******

All files showed in this tutorial can be found on the centreon-plugins GitHub in the 
[tutorial](https://github.com/centreon/centreon-plugins/tree/develop/src/contrib/tutorial) **contrib** section.

> You have to move the contents of `contrib/tutorial/apps/` to `apps/` if you want to run it for testing purposes.
>
> `cp -R contrib/tutorial/apps/* apps/`

<div id='set_up_tuto'/>

### 1.Set up your environment

[Retour à table of content (4)](#table_of_content_4)

To use the centreon-plugins framework, you'll need the following: 

- A Linux operating system, ideally Debian 11 or RHEL/RHEL-like >= 8
- The [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) command line utility
- A [GitHub](https://github.com/) account.

#### Enable our standard repositories

##### Debian

If you have not already install lsb-release, first you need to follow this steps :

If needed go to sudo mode
```shell
sudo -i
```
Install lib-release
```shell
apt install lsb-release
```
Create access to centreon repository (note you may need to change the version in example it's 22.04 but you can select one most up to date)
```shell
echo "deb https://apt.centreon.com/repository/22.04/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```
Install the following dependencies: 
```shell
apt-get install 'libpod-parser-perl' 'libnet-curl-perl' 'liburi-encode-perl' 'libwww-perl' \
    'liblwp-protocol-https-perl' 'libhttp-cookies-perl' 'libio-socket-ssl-perl' 'liburi-perl' \
    'libhttp-proxypac-perl' 'libcryptx-perl' 'libjson-xs-perl' 'libjson-path-perl' \
    'libcrypt-argon2-perl' 'libkeepass-reader-perl' 
```
##### RHEL 8 and alike
Create access to centreon repository (note you may need to change the version in example it's 22.04 but you can select one most up to date)
```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```
Install the following dependencies: 
```shell
dnf install 'perl(Digest::MD5)' 'perl(Pod::Find)' 'perl-Net-Curl' 'perl(URI::Encode)' \
    'perl(LWP::UserAgent)' 'perl(LWP::Protocol::https)' 'perl(IO::Socket::SSL)' 'perl(URI)' \
    'perl(HTTP::ProxyPAC)' 'perl-CryptX' 'perl(MIME::Base64)' 'perl(JSON::XS)' 'perl-JSON-Path' \
    'perl-KeePass-Reader' 'perl(Storable)' 'perl(POSIX)' 'perl(Encode)'
```

<div id='input_tuto'/>

### 2.Input

[Retour à table of content (4)](#table_of_content_4)

**Context: simple JSON health API**

In this tutorial, we will create a very simple probe checking an application's health
displayed in JSON through a simple API.

You can mockup an API with the free [mocky](https://designer.mocky.io/) tool.
We created one for this tutorial, test it with `curl https://run.mocky.io/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656`

It returns the following output: 

```json title="my-awesome-app health JSON" 
{
    "health": "yellow",
    "db_queries":{
         "select": 1230,
         "update": 640,
         "delete": 44
    },
    "connections":[
      {
        "component": "my-awesome-frontend",
        "value": 122
      },
      {
        "component": "my-awesome-db",
        "value": 92
      }
    ],
    "errors":[
      {
        "component": "my-awesome-frontend",
        "value": 32
      },
      {
        "component": "my-awesome-db",
        "value": 27
      }
    ]
}
```

<div id='understand_data_tuto'/>

### 3.Understand the data

[Retour à table of content (4)](#table_of_content_4)

Understanding the data is very important as it will drive the way you will design
the **mode** internals. This is the **first thing to do**, no matter what protocol you
are using.

There are several important properties for a piece of data:

- Type of the data to process: string, int... There is no limitation in the kind of data you can process
- Dimensions of the data, is it **global** or linked to an **instance**?
- Data layout, in other words anticipate the kind of **data structure** to manipulate.

In our example, the most common things are present. We can summarize it like that:

- the `health` node is **global** data and is a string. Structure is a simple *key/value* pair
- the `db_queries` node is a collection of **global** integer values about the database. Structure is a hash containing multiple key/value pairs
- the `connections` node contains integer values (`122`, `92`) referring to specific **instances** (`my-awesome-frontend`, `my-awesome-db`). The structure is an array of hashes
- `errors` is the same as `connections` except the data itself tracks errors instead of connections.

Understanding this will be important to code it correctly.

<div id='make_dir_tuto'/>

### 4.Create directories for a new plugin

[Retour à table of content (4)](#table_of_content_4)

Create directories and files required for your **plugin** and **modes**. 

Go to your centreon-plugins local git and create the appropriate directories and files:

```shell
# path to the main directory and the subdirectory containing modes
mkdir -p src/apps/myawesomeapp/api/mode/
# path to the main plugin file
touch src/apps/myawesomeapp/api/plugin.pm
# path to the specific mode(s) file(s)
touch src/apps/myawesomeapp/api/mode/appsmetrics.pm
```

<div id='create_plugin_tuto'/>

### 5.Create the plugin.pm file

[Retour à table of content (4)](#table_of_content_4)

<div id='create_mode_tuto'/>

### 6.Create the appmetrics.pm file

[Retour à table of content (4)](#table_of_content_4)


TUTO 2020

Premièrement, vous avez besoin de créer un dossier sur le git afin de stocker le nouveau plugin.

Par exemple, si vous voulez ajouter un plugin pour superviser Linux par SNMP, vous devez créer ce dossier :
```shell
$ mkdir -p os/linux/snmp
```

Vous avez également besoin de créer une répertoire "mode" pour les futurs modes créés :
```shell
$ mkdir os/linux/snmp/mode
```

<div id='guidelines'/>

## V. Pluggins guidelines

[Retour à table of content (1)](#table_of_content_1)

<div id='table_of_content_5'/>

*******
Table of contents (5)
 1. [Outputs](#outputs)
 2. [Options](#options)
 3. [Discovery](#discovery)
 4. [Performances](#performances)
 5. [Security](#security)
 6. [Help and documentation](#help_doc)
*******

A large part of these guidelines come from the [Monitoring Plugins project](https://www.monitoring-plugins.org/doc/guidelines.html). Indeed, some of these are outdated, not relevant anymore or related to a language you don’t use. We will focus on those that we consider as the most important, but this is still a great piece of content you should read.

<div id='outputs'/>

### 1. Outputs

[Retour à table of content (5)](#table_of_content_5)

#### 1.1 Formatting

The output of a monitoring probe must always be:

```bash
STATUS: Information text | metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum> metric2=value[OEM];<warning_value>;<critical_value>;<minimum>;<maximum> \n
Line 1 containing additional details \n
Line 2 containing additional details \n 
Line 3 containing additional details \n
```

Let’s identify and name its three main parts:

* Short output: everything before the pipe (`|`)
* Performance data and Metrics: everything after the pipe (`|`)
* Extended output: Everything after the first carriage return (`\n`), splitting each detail line is the best practice.

#### 1.2 Short output

This part is the one users will more likely see in their monitoring tool or obtain as part of a push/alert message. The information should be straightforward and help identify what is going on quickly.

A plugin must always propose at least such output:

```bash
STATUS: Information text 
```

`STATUS`must stick with return codes:

* 0: OK
* 1: WARNING
* 2: CRITICAL
* 3: UNKNOWN

`Information text` should display only relevant information. That implies:

* showing only the bits of information that led to the NOT-OK state when an alarm is active
* keeping it short. When checking a large number of a single component (e.g. all partitions on a filer), try to construct a global message, then switch to the format above when an alarm arises.

##### Centreon Plugin example

The output when checking several storage partitions on a server, when everything is OK:

`OK: All storages are ok |`

The output of the same plugin, when one of the storage partition space usages triggers a WARNING threshold:

`WARNING: Storage '/var/lib' Usage Total: 9.30 GB Used: 956.44 MB (10.04%) Free: 8.37 GB (89.96%) |`

#### 1.3 Performance data and metrics

This part is not mandatory. However, if you want to benefit from Centreon or Nagios©-like tools with built-in metrology features, you will need to adopt this format:

`metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum>`

After the equals sign, split each piece of information about the metric using a semi-colon.

* `metric1=`: The metric’s name is everything before the equals (=) sign. The more detailed it is, the easier it will be to understand a graph or to extend the usability of the metric in a third-party analytics/observability platform. De facto, a metric name must not contain an equals sign. Try to make it self-explanatory even without the Host/Service context.
* `<value>`: The measurement result, must be a number (int, float)
* `[UOM]`: Optional Unit Of Measurement. You can also include the unit in the metric’s name as we do in the Centreon metric naming philosophy. It is one of the following:
  * none (no unit specified), when dealing with a number of things (e.g. users, licences, viruses…)
  * 's' when dealing with seconds. ‘us’ and ‘ms’ are also valid for microseconds or milliseconds (e.g. response or connection time)
  * '%' when dealing with percentage (e.g. memory, CPU, storage space…)
  * 'B' (Bytes), when dealing with storage, memory… The Byte must be the default as it ensures compatibility with all Centreon extensions
  * When dealing with a network metric or any throughput, ‘b' (Bits). When computing a rate per second, you can use ‘b/s’
* `<warning_value>`:  Optional. Fill it with the user’s value as a WARNING threshold for the metric.
* `<critical_value>`: Optional. Fill it with the user-supplied value as a CRITICAL threshold for the metric.
* `<minimum>`: Optional. Fill it with the lowest value the metric can take.
* `<maximum>`: Optional. Fill it with the highest value the metric can take.

Frequently, you have to manage the case where you have to display the same metric for several instances of things. The best practice is to choose a character to separate the metric name from its instance with a given character. At Centreon, we use the `#` sign, and we strongly recommend you do the same (it is recognised and processed by Centreon-Broker).

Less frequently, you may want to add even more context; that’s why we created a sub-instance concept following the same principles. Append it to the instance of your metric and use a splitting character to clarify that it is another dimension and not confuse it with the primary instance. We use the `~` sign; once again, we strongly advise you to stick with it whenever it is possible.

##### Centreon Plugin Performance Data / Metrics examples

A **system boot partition**

`'/boot#storage.space.usage.bytes'=255832064B;;0:99579084;0;995790848`

`/boot` is the instance

`storage.space.usage.bytes` is the metric name (note the .bytes at the end specifying the unit)

`B` is the legacy metric’s unit for Bytes.

Pay attention to the critical threshold (0:99579084), always use the same unit.

A **network interface**

`'eth0#interface.traffic.in.bitspersecond'=0.00b/s;;;0;`

`eth0` is the instance

`interface.traffic.in.bitspersecond` is the metric name (note the `.persecond` at the end specifying the unit)

`b/s` is the legacy metric’s unit for bits per second

A **cloud metric**

`'azure-central~/var/lib/mysql#azure.insights.logicaldisk.free.percentage'=94.82%;;;0;100`

`azure-central` is the instance

`/var/lib/mysql` is the sub-instance

`azure.insights.logicaldisk.free.percentage` is the metric name (note the `free` instead of `usage`, and `.percentage` at the end to specify the unit)

`%` is the legacy metric’s unit

#### 1.4 Extended output

The extended output's primary purpose is to display each bit of collected information separately on a single line. It will only print if the user adds a `--verbose` flag to its command.

Overall, you should use it to:

* add extra context (numbered instance, serial number) about a checked component
* print items the check excludes because plugin options have filtered them out
* organize how the information is displayed using groups that follow the logic of the check.

##### Centreon Plugin example

Here is an example of a Cisco device environment check:

```bash
<STATUS>: <information_text> | <perfdata>
Environment type: other
Checking fans
  fan 'Switch X - FAN - T1 1, Normal' status is normal [instance: 1014].
  fan 'Switch X - FAN - T1 2, Normal' status is normal [instance: 1015].
  fan 'Switch X <SERIAL-NUMBER> - FAN 1' status is up [instance: 1014]
  fan 'Switch X <SERIAL-NUMBER> - FAN 2' status is up [instance: 1015]
Checking power supplies
  power supply 'Switch X - Power Supply B, Normal' status is normal [instance: 1013] [source: ac]
  Power supply 'Switch X - Power Supply B' status is on [instance: 1013]
Checking temperatures
  temperature 'Switch X - Inlet Temp Sensor, GREEN ' status is normal [instance: 1010] [value: 23 C]
  temperature 'Switch X - Outlet Temp Sensor, GREEN ' status is normal [instance: 1011] [value: 30 C]
  temperature 'Switch X - HotSpot Temp Sensor, GREEN ' status is normal [instance: 1012] [value: 41 C]
Checking voltages
Checking modules
  module 'C9200L-48P-4G' status is ok [instance: 1000]
Checking physicals
Checking sensors
  sensor 'Switch X <SERIAL-NUMBER> - Temp Inlet Sensor 0' status is 'ok' [instance: 1010] [value: 23 celsius]
  sensor 'Switch X <SERIAL-NUMBER> - Temp Outlet Sensor 1' status is 'ok' [instance: 1011] [value: 30 celsius]
  sensor 'Switch X <SERIAL-NUMBER> - Temp Hotspot Sensor 2' status is 'ok' [instance: 1012] [value: 41 celsius]
  sensor 'GigabitEthernet1/1/1 Module Temperature Sensor' status is 'ok' [instance: 1115] [value: 29.2 celsius]
  sensor 'GigabitEthernet1/1/1 Supply Voltage Sensor' status is 'ok' [instance: 1116] [value: 3.3 voltsDC]
  sensor 'GigabitEthernet1/1/1 Bias Current Sensor' status is 'ok' [instance: 1117] [value: 0.0202 amperes]
  sensor 'GigabitEthernet1/1/1 Transmit Power Sensor' status is 'ok' [instance: 1118] [value: -4.5 dBm]
  sensor 'GigabitEthernet1/1/1 Receive Power Sensor' status is 'ok' [instance: 1119] [value: -1.2 dBm]
```
<div id='options'/>

### 2. Options

[Retour à table of content (5)](#table_of_content_5)

Option management is a central piece of a successful plugin. You should:

* Carefully name your options to make them **self-explanatory**
* For a given option, **only one format** is possible (either a flag or a value, but not both)
* Always **check** for values supplied by the user and print a **clear message** when they do not fit with plugin requirements
* Set default option value when relevant

<div id='discovery'/>

###  3. Discovery

[Retour à table of content (5)](#table_of_content_5)

This section describes how you should format your data to comply with the requirements of Centreon Discovery UI modules.

In a nutshell:

* [host discovery](/docs/monitoring/discovery/hosts-discovery) allows you to return a JSON list the autodiscovery module will understand so the user can choose to automatically or manually add to its monitoring configuration. Optionally, it can use one of the discovered items properties to make some decisions (filter in or out, create or assign a specific host group, etc.)
* [service discovery](/docs/monitoring/discovery/services-discovery) allows you to return XML data to help users configure unitary checks and link them to a given host (e.g. each VPN definition in AWS VPN, each network interface on a router...).

There's no choice here; you should stick with the guidelines described hereafter if you want your code to be fully compliant with our modules.

#### 3.1 Hosts

The discovery plugin can be a specific script or a particular execution mode enabled with an option. In centreon-plugins, we do it through dedicated `discovery*.pm` modes.

This execution mode is limited to a query toward a cloud provider, an application, or whatever contains a list of assets. The expected output must hold some keys:

* `end_time`: the unix timestamp when the execution stops
* `start_time`: the unix timestamp when the execution starts
* `duration`: the duration in seconds (`end_time - start_time`)
* `discovered_items`: the number of discovered items 
* `results`: an array of hashes, each hash being a collection of key/values describing the discovered assets. 

```json title='Sample host discovery output'
{
   "end_time" : 1649431535,
   "start_time" : 1649431534,
   "duration" : 1,
   "discovered_items" : 2,
   "results" : [
         {
         "public_dns_name" : "ec2-name.eu-west-1.compute.amazonaws.com",
         "name" : "prod-ec2",
         "key_name" : "prd-aws-ec2",
         "tags" : [
            {
               "value" : "Licences Management",
               "key" : "Desc"
            },
            {
               "value" : "CI",
               "key" : "Billing"
            }
         ],
         "state" : "running",
         "private_dns_name" : "ip-W-X-Y-Z.eu-west-1.compute.internal",
         "vpc_id" : "vpc-xxxveafea",
         "type" : "ec2",
         "id" : "i-3feafea",
         "private_ip" : "W.X.Y.Z",
         "instance_type" : "t2.medium"
      },
      {
         "public_dns_name" : "other-ec2-name.eu-west-1.compute.amazonaws.com",
         "name" : "prod-other-ec2",
         "key_name" : "prd-aws-ec2",
         "tags" : [
            {
               "value" : "Licences Management",
               "key" : "Desc"
            },
            {
               "value" : "CI",
               "key" : "Billing"
            }
         ],
         "state" : "running",
         "private_dns_name" : "ip-A-B-C-D.eu-west-1.compute.internal",
         "vpc_id" : "vpc-xxxveafea",
         "type" : "ec2",
         "id" : "i-3gfbgfb",
         "private_ip" : "A.B.C.D",
         "instance_type" : "t2.medium"
      }
   ]
}
```

You can use more advanced structures for values in the result sets, it can be: 

* an array of hashes:

```json title='Nmap discovery - Tags'
"services" : [
  {
    "name" : "ssh",
    "port" : "22/tcp"
  },
  {
    "port" : "80/tcp",
    "name" : "http"
  }
]
```

* a flat array: 

```json title='VMWare discovery - IP vMotion'
"ip_vmotion": [
  "10.10.5.21",
  "10.30.5.21"
],
```

Using these structures is convenient when you need to group object properties behind a single key. 

On the users' side, it allows using these values to filter in or out some of the results or make a better choice 
about the host template for a given discovered host.

#### 3.2 Services

Service discovery relies on XML to return information that will be parsed and used by the UI module to 
create new services efficiently.

As for hosts, it can be an option at runtime, or an execution mode. In centreon-plugins, we choose to have dedicated
`list<objectname>.pm` modes. 

All `list<objectname>.pm` modes contain two options that will return properties and results that will be used in the 
discovery rules definitions. 

The first service discovery option is `--disco-format`, it enables the plugin to return the supported keys in the rule: 

```bash title='Linux Network int --disco-format output' 
-bash-4.2$ /usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-format
<?xml version="1.0" encoding="utf-8"?>
<data>
  <element>name</element>
  <element>total</element>
  <element>status</element>
  <element>interfaceid</element>
  <element>type</element>
</data>
```

The output above shows that the discovery of network interfaces on Linux will return those properties:

- `name`: the name of the interface
- `total`: the maximum bandwidth supported
- `status`: the configuration status of the interface (convenient to exclude administratively down interfaces)
- `interfaceid`: the id
- `type`: interface type (like ethernet, fiber, loopback, etc.)

Executing exactly the same command, substituting `--disco-format` with `--disco-show` will output the discovered interfaces:

```bash title='Linux Network int --disco-show output'
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-show
<?xml version="1.0" encoding="utf-8"?>
<data>
  <label status="up" name="lo" type="softwareLoopback" total="10" interfaceid="1"/>
  <label status="up" name="ens5" type="ethernetCsmacd" total="" interfaceid="2"/>
</data>
```

The result contains one line per interface and each line contains each set of properties as a `key="value"` pair. Note that even if
no data is obtained for a given key, it still has to be displayed (e.g `total=""`).

<div id='performances'/>

### 4. Performances

[Retour à table of content (5)](#table_of_content_5)

A monitoring plugin has to do one thing and do it right - it's important to code your plugin with the idea to make
it as efficient as possible. Keep in mind that your Plugin might run every minute, against a large
number of devices, so a minor optimization can result in important benefits at scale.

Also think about the 'thing' you're monitoring, it's important to always try to reduce the overhead of a check
from the monitored object point of view.

#### 4.1 Execution time

The most basic way to bench a plugin performance is its execution time. Use the
`time` command utility to run your check and measure over several runs how it behaves.

#### 4.2 Cache

In some cases, it can be interesting to cache some information.

Caching in a local file might save some calls against an API, for example do not authenticate at every check.
When possible, use the token obtained at the first check and stored in the cache file to only call the
authentication endpoint when it's absolutely necessary.

More generally, when an identifier, name or anything that would never change across different executions requires a
request against the third-party system, cache it to optimize single-check processing time.

#### 4.3 Algorithm

Optimizing the number of requests against a third-party system can also lie in the check algorithm. Prefer scraping
the maximum of data in one check and then filter the results programmatically instead of issuing multiple very specific
requests that would result in longer execution time and greater load on the target system.

#### 4.3 Timeout

A Plugin must always include a timeout to avoid never ending checks that might overload your monitoring
system when something is broken and that, for any reason, the plugin cannot obtain the information.

<div id='security'/>

### 5. Security

[Retour à table of content (5)](#table_of_content_5)

#### 5.1 System commands

If the plugin requires to execute a command at the operating system level, and users can modify the command name or
its parameters, make sure that nobody can leverage your plugin's capabilities to break the underlying
system or access sensitive information.

#### 5.2 Dependencies

There is no need to re-invent the wheel: standard centreon-plugins dependencies provide you with the most common
external libraries that might be required to write a new plugin.

Don't overuse large libraries that might end being unsupported or where some governance modification might lead to
security problems.

<div id='help_doc'/>

### 6. Help and documentation

[Retour à table of content (5)](#table_of_content_5)

For each plugin, the minimum documentation is the help, you have to explain to users what the plugin
is doing and how they can use the built-in options to achieve their own alerting scenario.

You can look at how we handle help at mode level with the centreon-plugins framework [here](develop-with-centreon-plugins.md).

[Retour à table of content (1)](#table_of_content_1)
