---
id: develop-with-centreon-plugins
title: Develop with centreon-plugins
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Setup your environment

To use the centreon-plugins framework, you'll need the following: 

- A Linux operating system, ideally Debian 11 or RHEL/RHEL-like >= 8
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) command line utility
- A [GitHub](https://github.com/) account

### Enable our standard repositories

<Tabs groupId="sync">
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://apt.centreon.com/repository/22.04/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
<TabItem value="RHEL 8 and alike" label="RHEL 8 and alike">

```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```

</TabItem>
</Tabs>

Install the following dependencies: 

<Tabs groupId="sync">
<TabItem value="Debian 11" label="Debian 11">

```shell
apt-get install 'libpod-parser-perl' 'libnet-curl-perl' 'liburi-encode-perl' 'libwww-perl' \
    'liblwp-protocol-https-perl' 'libhttp-cookies-perl' 'libio-socket-ssl-perl' 'liburi-perl' \
    'libhttp-proxypac-perl' 'libcryptx-perl' 'libjson-xs-perl' 'libjson-path-perl' \
    'libcrypt-argon2-perl' 'libkeepass-reader-perl' 
```

</TabItem>
<TabItem value="RHEL 8 and alike" label="RHEL 8 and alike">

```shell
dnf install 'perl(Digest::MD5)' 'perl(Pod::Find)' 'perl-Net-Curl' 'perl(URI::Encode)' \
    'perl(LWP::UserAgent)' 'perl(LWP::Protocol::https)' 'perl(IO::Socket::SSL)' 'perl(URI)' \
    'perl(HTTP::ProxyPAC)' 'perl-CryptX' 'perl(MIME::Base64)' 'perl(JSON::XS)' 'perl-JSON-Path' \
    'perl-KeePass-Reader' 'perl(Storable)' 'perl(POSIX)' 'perl(Encode)'
```

</TabItem>
</Tabs>

### Fork and clone centreon-plugins repository 

Within GitHub UI, on the top left, click on the fork button:

![image](../../../assets/integrations/plugin-packs/dev-resources/00_dev-resources_centreon-plugins-fork.png)

Use git utility to fetch your repository fork: 

```shell
git clone https://<githubusername>@github.com/<githubusername>/centreon-plugins
``` 

Create a branch: 
```shell
cd centreon-plugins
git checkout -b 'my-first-plugin'
```

You can also choose 

## Understand project organization

### Layout and concepts

The project content is made of a main binary (`centreon_plugins.pl`), and a logical 
directory structure allowing to separate plugins and modes files across the domain they 
are refering to. 

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

Let's take a deeper look to the layout of the directory containing modes to monitor Linux
system through the command-line (`tree os/linux/local/ -L 1`). 

```shell
os/linux/local/
├── custom      # Type: Directory. Contains code that can be used by several modes (e.g authentication, token management, ...).
│   └── cli.pm  # Type: File. *Custom mode* defining common methods 
├── mode        # Type: Directory. Contains all **modes**. 
[...]
│   └── cpu.pm  # Type: File. **Mode** containing the code to monitor the CPU
[...]
└── plugin.pm   # Type: File. **Plugin** definition.
```

Note the os/linux/**local**. The project offer other way to monitor Linux, SNMP for example. To avoid 
mixing modes using different protocols in the same directory and face some naming collision, we split 
them across several directories making it clear what protocol they rely on.

Now, let's see how these concepets combine to buil a command line:

```shell 
# <perl interpreter> <main_binary> --plugin=<perl_normalized_path_to_plugin_file> --mode=<mode_name> 
perl centreon_plugins.pl --plugin=os::linux::local::plugin --mode=cpu
```

### Shared directories

Some specific directories are not related to a domain (os, cloud, ...) and are used
across all plugins. 

#### The **centreon** directory

The **centreon** directory is specific, it contains:
- Project libraries/packages. This is all the code that will help you to develop faster
by avoiding the coding of protocol related things (SNMP,HTTPx,SSH,...) or common things like 
options or cache management from scratch. You can read the perl modules if you're an experienced developer
but there is a very few chance that you would have to modify anything in it.
- Common files shared by multiple plugins. This is to avoid duplicating code across the 
directory tree and ease the maintenance of the project.

#### The **snmp_standard/mode** directory

The **snmp_standard/mode** exists since the beginning when SNMP monitoring was much more used
than it is today. All the modes it contains use standard OIDs, which means that many plugins are 
relying on these as soon as the the manufacturer supports standard MIBS on their devices.

## Tutorial - How to create a plugin for *my-awesome-app*

### Context: simple JSON health API

In this tutorial, we will create a very simple probe checking an application health 
displayed in JSON through a simple API.

You can mockup an API with the wonderful and free [mocky](https://designer.mocky.io/) tool.
We created one for this tutorial, test it with `curl https://run.mocky.io/v3/6e45073b-068a-40d3-a2c3-31b1ebd54dc9`

It returns the following output: 

```json title="my-awesome-app health JSON" 
{
    "health": "yellow",
    "db_queries": {
        "select": 1230,
        "update": 640,
        "delete": 44
    },
    "connections": [
        {
            "app": "my-awesome-frontend",
            "users": 122
        },
        {
            "app": "my-awesome-db",
            "users": 92
        }
    ],
    "errors": [
        {
            "app": "my-awesome-frontend",
            "users": 32
        },
        {
            "app": "my-awesome-db",
            "users": 27
        }
    ]
}
```

All files showed in this tutorial can be found on the centreon-plugins GitHub in the 
[tutorial](https://github.com/centreon/centreon-plugins/tree/master/contrib/tutorial/)
contrib section. 

> You have to move contrib/tutorial/apps/* content to apps/* if you want to run it for testing purpose.
> `cp -R contrib/tutorial/apps/* apps/`

### Understand the data

Understanding the data is very important as it will drive the way you will design 
the **mode** internals. This is the **first things to do**, no matter what protocol you
are using. 

There is several important properties for a data: 
- Type of the data to process: string, int... There is no limitation in the kind of data you can process
- Dimensions of the data, is it **global** or associated to an **instance**?
- Data layout, in other word anticipate the kind of **data structure** to manipulate

In our example, the most common things are present. we can summarize it like that:
- `health` node is a **global** data and is a string. Structure is a simple *key/value* pair
- `db_queries` node is a collection of **global** integer values about the database. Structure is an hash containing multiple *key/value* pairs
- `connections` node contains integer values (`122`, `92`) refering to specific **instances**(`my-awesome-frontend`, `my-awesome-db`). Structure is an array of hashes
- `errors` is the same as `connections` except the data itself tracks errors instead of connections

Understanding this will be important to code it correctly.

### Create directories for a new plugin

Create directories and files required for your **plugin** and **modes**. 

Go to your centreon-plugins local git and create the appropriate directories and files:

```shell
# path to the main directory and the subdirectory containing modes
mkdir -p apps/myawesomeapp/api/mode/
# path to the main plugin file
touch apps/myawesomeapp/api/plugin.pm
# path to the specific mode(s) file(s)
touch apps/myawesomeapp/api/mode/appsmetrics.pm
```

### Create the plugin.pm file

The `plugin.pm` is the first thing to create, it contains:
- Loading of necessary libraries and compilation options
- A list of all **mode(s)** and path(s) to their associated files/perl packages
- A description that will display when you list all plugins or display this plugin's help

Here is the commented version of the plugin.pm file:

```perl title=my-awesome-app plugin.pm file
[.. license and copyright things ..]

# Name of your perl package
package apps::myawesomeapp::api::plugin;

# Always use strict and warnings, will guarantee that your code is clean and help debugging it
use strict;
use warnings;
# Load the base for your plugin, here we don't do SNMP, SQL or have a custom directory, so we use the _simple base
use base qw(centreon::plugins::script_simple);

# Global sub to create and return the perl object. Don't bother understand what each instruction is doing. 
sub new {
    my ($class, %options) = @_;
    my $self = $class->SUPER::new(package => __PACKAGE__, %options);
    bless $self, $class;

    # A version, we don't really use it but could help if your want to version your code
    $self->{version} = '0.1';
    # Important part! 
    #    On the left, the name of the mode as users will use it in their command line
    #    On the right, the path to the file (note that .pm is not present at the end)
    $self->{modes} = {
        'app-metrics' => 'apps::myawesomeapp::api::mode::appmetrics'
    };

    return $self;
}

# Declare this file as a perl module/package
1;

# Beginning of the documenation/help. __END__ Specify to the interpreter that instructions below don't need to be compiled
# =head1 [..] Specify the section level and the label when using the plugin with --help
# Check my-awesome [..] Quick overview of wath the plugin is doing
# =cut Close the head1 section

__END__

=head1 PLUGIN DESCRIPTION

Check my-awesome-app health and metrics through its custom API

=cut
```

Your first dumb plugin is working, congrats!

Run this command: 

`perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --list-mode`

It already outputs a lot of things. Elipsed lines are basically all standard capabilities
inherited from the script_custom base. 

You probably already recognized things you've previsously defined in your plugin.pm module. 

```perl

Plugin Description:
    Check my-awesome-app health and metrics through its custom API

Global Options:
    --mode  Choose a mode.
[..]
    --version
            Display plugin version.
[..]

Modes Available:
   app-metrics
```

### Create the appmetrics.pm file

The `appmetrics.pm` will contain your code, in other words, all the instructions to: 
- Declare options for the mode
- Connect to run.mocky.io over HTTPS 
- Get the JSON from the '/v3/6e45073b-068a-40d3-a2c3-31b1ebd54dc9' endpoint
- Extract information and format it to be compliant with Centreon

Let's build it iteratively. 

> Important notes: function (sub) names must not be modified. For example, you cannot 
> choose to rename `check_options` to `option_check`. 

#### Common declarations and subs 

```perl
# Path to your package. '::' instead of '/', and no .pm at the end.
package apps::myawesomeapp::api::mode::appmetrics;

# Don't forget these ;)
use strict;
use warnings;
# We want to connect to an HTTP server, let's use the common module
use centreon::plugins::http;
# Use the counter module. It will save you a lot of work and will manage a lot of things for you.
# Consider this as mandatory when writing a new mode. 
use base qw(centreon::plugins::templates::counter);
# Import some functions that will make your life easier
use centreon::plugins::templates::catalog_functions qw(catalog_status_threshold_ng);
# We will have to process some JSON, no need to reinvent the wheel, load the lib you installed in a previous section
use JSON::XS;
```

Add a `new` function (sub) to initialize the mode: 

```perl
sub new {
    my ($class, %options) = @_;
    # All options/properties of this mode, always add the force_new_perfdata => 1 to enable new metric/performance data naming.
    # It also where you can specify that the plugin uses a cache file for example
    my $self = $class->SUPER::new(package => __PACKAGE__, %options, force_new_perfdata => 1);
    bless $self, $class;

    # This is where you can specify options/arguments your plugin supports.
    # All options here stick to what the centreon::plugins::http module needs to establish a connection
    # You don't have to specify all options from the http module, only the one that the user may want to tweak for its needs
    $options{options}->add_options(arguments => {
        # One the left it's the option name that will be used in the command line. The ':s' at the end is to 
        # define that this options takes a value.  
        # On the right, it's the code name for this option, optionnaly you can define a default value so the user 
        # doesn't have to set it
         'hostname:s'           => { name => 'hostname' },
         'port:s'               => { name => 'port', default => 443 },
         'timeout:s'            => { name => 'timeout' },
        # These options are here to defined conditions about which status the plugin will return regarding HTTP response code
         'unknown-status:s'     => { name => 'unknown_status', default => '%{http_code} < 200 or %{http_code} >= 300' },
         'warning-status:s'     => { name => 'warning_status' },
         'critical-status:s'    => { name => 'critical_status', default => '' }
    });

    # This is to create a local copy of a centreon::plugins::http that we will manipulate
    # %options basically overwrite default http value with key/value pairs from options above to instantiate the http module
    # Ref https://github.com/centreon/centreon-plugins/blob/520a1f8c10cd434c6dedd1e342285eecff8b9d1b/centreon/plugins/http.pm#L59
    $self->{http} = centreon::plugins::http->new(%options);
    return $self;
}
```

Add a `check_options` function. This sub will execute right after new and allow you to check that the user passed
 mandatory parameter(s) and in some case check that the format is correct. 

```perl
sub check_options {
    my ($self, %options) = @_;
    $self->SUPER::init(%options);

    # Check if the user provided a value for --hostname option. If not, display a message and exit
    if (!defined($self->{option_results}->{hostname}) || $self->{option_results}->{hostname} eq '') {
        $self->{output}->add_option_msg(short_msg => 'Please set hostname option');
        $self->{output}->option_exit();
    }
    # Set parameters for http module, note that the $self->{option_results} is a hash containing 
    # all your options key/value pairs.
    $self->{http}->set_options(%{$self->{option_results}});
}
```

Nice work, you know have a mode that can be executed without errors!

Run this command `perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics` which 
output this message: 

`UNKNOWN: Please set hostname option`

Enjoy this moment, now let's do some monitoring thanks to centreon-plugins' magic! Fasten your seat belt.

#### Declare your counters

This part essentially maps the data you want to get from the API with the internal
counter mode structure.

Remember how we categorized the data in a previous [section](./develop-with-centreon-plugins### Understand the data).

The `$self->{maps_counters_type}` data structure describes these data while the `$self->{maps_counters}->{global}` ones define 
their properties like thresholds and how they will display to the users.

```perl
sub set_counters {
    my ($self, %options) = @_;

    $self->{maps_counters_type} = [
        # health and queries are global metric, they don't refer to a specific instance. 
        # In other words, you cannot get several values for health or queries
        # That's why the type is 0.
        { name => 'health', type => 0, cb_prefix_output => 'prefix_health_output' },
        { name => 'queries', type => 0, cb_prefix_output => 'prefix_queries_output' },
        # connections and errors will receive value for both instances (my-awesome-frontend and my-awesome-db)
        # The type => 1 explicits that
        { name => 'connections', type => 1, cb_prefix_output => 'prefix_connections_output' },
        # as above, you can define a callback (cb) function to manage the output prefix. This function is called 
        # each time a value is passed to the counter and can be shared across multiple counters.
        { name => 'errors', type => 1, cb_prefix_output => 'prefix_errors_output' }
    ];

    $self->{maps_counters}->{health} = [
        # This counter is specific because it deals with a string value
        {
            label => 'status',
            # All properties below (before et) are related to the catalog_status_ng catalog function imported at the top of our mode
            type => 2,
            # These properties allow you to define default thresholds for each status but not mandatory.
            warning_default => '%{status} =~ /yellow/', 
            critical_default => '%{status} =~ /red/', 
            # To simplify, manage things related to how get value in the counter, what to display and specific threshold 
            # check because of the type of the data (string)
            set => {
                key_values => [ { name => 'health' } ],
                output_template => 'health: %s',
                # Force ignoring perfdata as the collected data is a string
                closure_custom_perfdata => sub { return 0; },
                closure_custom_threshold_check => \&catalog_status_threshold_ng
            }
        }
    ];
    $self->{maps_counters}->{queries} = [
        # The label defines options name, a --warning-select and --critical-select will be added to the mode
        # The nlabel is the name of your performance data / metric that will show up in your graph
        { 
            label => 'select', 
            nlabel => 'myawesomeapp.db.queries.select.count', 
            set => {
            # Key value name is the name we will use to pass the data to this counter. You can have several ones.
                key_values => [ { name => 'select' } ],
                # Output template describe how the value will display
                output_template => 'select: %s',
                # Perfdata array allow you to define relevant metrics properties (min, max) and its sprintf template format
                perfdatas => [
                    { template => '%d', min => 0 }
                ]
            }
        },
        { label => 'update', nlabel => 'myawesomeapp.db.queries.update.count', set => {
                key_values => [ { name => 'update' } ],
                output_template => 'update: %s',
                perfdatas => [
                    { template => '%d', min => 0 }
                ]
            }
        },
        { label => 'delete', nlabel => 'myawesomeapp.db.queries.delete.count', set => {
                key_values => [ { name => 'delete' } ],
                output_template => 'delete: %s',
                perfdatas => [
                    { template => '%d', min => 0 }
                ]
            }
        }
    ];
    $self->{maps_counters}->{connections} = [
        { label => 'connections', nlabel => 'myawesomeapp.connections.count', set => {
                # pay attention the extra display key_value. It holds the instance value. (my-awesome-db, my-awesome-frontend)
                key_values => [ { name => 'connections' }, { name => 'display' } ],
                output_template => 'connections: %s',
                perfdatas => [
                    # we add the label_extra_instance option to have one perfdata per instance
                    { template => '%d', min => 0, label_extra_instance => 1 }
                ]
            }
        },
    ];
    $self->{maps_counters}->{errors} = [
        { label => 'errors', nlabel => 'myawesomeapp.errors.count', set => {
                key_values => [ { name => 'errors' }, { name => 'display' } ],
                output_template => 'errors: %s',
                perfdatas => [
                    { template => '%d', min => 0, label_extra_instance => 1 }
                ]
            }
        },
    ];
}
1;
```

Ok, that's was a big one. Guess what, it compiles. Just to take some rest, run the command 
supplying a value to the `--hostname` option to see what it displays: 

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=fakehost
OK: status : skipped (no value(s)) - select : skipped (no value(s)), update : skipped (no value(s)), delete : skipped (no value(s))
``` 

You can see some of your counters with the `skipped (no value(s))`, it's normal, this is because we 
just created the counters definition and structure but didn't push any value into it. 

#### Create prefix callback functions

These functions are not mandatory but help to make the output more readable for a human. We will create
it now but as you have noticed the mode compiles so you can choose to keep those for the polishing moment.

During counters definitions, we associated a callback function to each of them: 
- `cb_prefix_output => 'prefix_health_output'`
- `cb_prefix_output => 'prefix_queries_output'`
- `cb_prefix_output => 'prefix_connections_output'`
- `cb_prefix_output => 'prefix_errors_output'`

Define those functions by adding it to our `appmetrics.pm` file. They are self-explanatory.

```perl
sub prefix_health_output {
    my ($self, %options) = @_;

    return 'My-awesome-app:';
}

sub prefix_queries_output {
    my ($self, %options) = @_;

    return 'Queries:';
}

sub prefix_connections_output {
    my ($self, %options) = @_;

    # This notation allows you to return the value of the instance (the display key_value)
    # to bring some context to the output.
    return "'" . $options{instance_value}->{display} . "' ";
}

sub prefix_errors_output {
    my ($self, %options) = @_;

    return "'" . $options{instance_value}->{display} . "' ";
}
```

Execute your command and check that the output matches the one below: 

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=fakehost
OK: My-awesome-app: status : skipped (no value(s)) - Queries: select : skipped (no value(s)), update : skipped (no value(s)), delete : skipped (no value(s))
``` 

The output is easier to read and separator are visible between global counters. 

#### Push data into the counters

It's the moment to write the main sub (`manage_selection`), the more complex, but also the one that 
will transform your mode to something useful and alive.

Think about the logic, what we have to do is:
- Connect to run.mocky.io over HTTPS
- Query a specific path corresponding to our API
- Store and process the result
- Spread this result across counters definitions

Start by writing the code to connect to run.mocky.io. It is where the centreon-plugins 
framework delivers its power.

Write the request and add a print to display the received data:

```perl
sub manage_selection {
    my ($self, %options) = @_;
    # We have already loaded all things required for the http module
    # Use the request method from the module to run the GET request against the path
    my ($content) = $self->{http}->request(url_path => '/v3/6e45073b-068a-40d3-a2c3-31b1ebd54dc9');
    print $content . "\n";
}
```

Run this command `perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=run.mocky.io`. 

Output should be: 

```perl
{
    "health": "yellow",
    "db_queries":{
         "select": 1230,
         "update": 640,
         "delete": 44
    },
    "connections":[
      {
        "app": "my-awesome-frontend",
        "users": 122
      },
      {
        "app": "my-awesome-db",
        "users": 92
      }
    ],
    "errors":[
      {
        "app": "my-awesome-frontend",
        "users": 32
      },
      {
        "app": "my-awesome-db",
        "users": 27
      }
    ]
}
OK: My-awesome-app: status : skipped (no value(s)) - Queries: select : skipped (no value(s)), update : skipped (no value(s)), delete : skipped (no value(s))
```

Add an `eval` structure to transform `$content` into a data structure that can be easily manipulated with perl. Remove the print 
as we don't need it anymore. 

```perl
sub manage_selection {
    my ($self, %options) = @_;
    # We have already loaded all things required for the http module
    # Use the request method from the imported module to run the GET request against the path
    my ($content) = $self->{http}->request(url_path => '/v3/6e45073b-068a-40d3-a2c3-31b1ebd54dc9');
    
    # Declare a scalar to hold the encoded version of the output
    my $encoded_content;
    eval {
        $encoded_content = JSON::XS->new->utf8->encode($content);
    };
    # Manage the case where the data received is not JSON or not the one we expected
    if ($@) {
        $self->{output}->add_option_msg(short_msg => "Cannot encode JSON result");
        $self->{output}->option_exit();    
    }

}
```


