---
id: develop-with-centreon-plugins
title: Develop with centreon-plugins
---

## Tutorial : How to create a plugin - Using API

All files showed in this tutorial can be found on the centreon-plugins GitHub in the 
[tutorial](https://github.com/centreon/centreon-plugins/tree/develop/src/contrib/tutorial) **contrib** section.

> You have to move the contents of `contrib/tutorial/apps/` to `apps/` if you want to run it for testing purposes.
>
> `cp -R src/contrib/tutorial/apps/* src/apps/`

### Set up your environment

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

### Input

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

### Understand the data

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

### Create directories for a new plugin

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

### Create the plugin.pm file

The `plugin.pm` is the first thing to create, it contains:

- A set of instructions to load required libraries and compilation options
- A list of all **mode(s)** and path(s) to their associated files/perl packages
- A description that will display when you list all plugins or display this plugin's help.

Here is the commented version of the plugin.pm file:

```perl title="my-awesome-app plugin.pm file"
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

# Beginning of the documenation/help. `__END__` Specify to the interpreter that instructions below don't need to be compiled
# =head1 [..] Specify the section level and the label when using the plugin with --help
# Check my-awesome [..] Quick overview of wath the plugin is doing
# =cut Close the head1 section

__END__

=head1 PLUGIN DESCRIPTION

Check my-awesome-app health and metrics through its custom API

=cut
```

Your first dummy plugin is working, congrats!

Run this command:

`perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --list-mode`

It already outputs a lot of things. Ellipsized lines are basically all standard capabilities
inherited from the **script_custom** base.

You probably already recognized things you've previsously defined in your **plugin.pm** module.

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

The `appmetrics.pm` file will contain your code, in other words, all the instructions to:

- Declare options for the mode
- Connect to **run.mocky.io** over HTTPS
- Get the JSON from the **/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656** endpoint
- Extract information and format it to be compliant with Centreon.

Let's build it iteratively.

> Important note: function (sub) names must not be modified. For example, you cannot 
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
         'proto:s'              => { name => 'proto', default => 'https' },
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

Add a `check_options` function. This sub will execute right after `new` and allow you to check that the user passed
 mandatory parameter(s) and in some case check that the format is correct. 

```perl
sub check_options {
    my ($self, %options) = @_;
    $self->SUPER::check_options(%options);

    # Check if the user provided a value for --hostname option. If not, display a message and exit
    if (!defined($self->{option_results}->{hostname}) || $self->{option_results}->{hostname} eq '') {
        $self->{output}->add_option_msg(short_msg => 'Please set hostname option');
        $self->{output}->option_exit();
    }
    # Set parameters for http module, note that the $self->{option_results} is a hash containing 
    # all your options key/value pairs.
    $self->{http}->set_options(%{$self->{option_results}});
}

1;
```

Nice work, you now have a mode that can be executed without errors!

Run this command `perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics`, which
outputs this message:

`UNKNOWN: Please set hostname option`

Now let's do some monitoring thanks to centreon-plugins.

#### Declare your counters

This part essentially maps the data you want to get from the API with the internal
counter mode structure.

Remember how we categorized the data in a previous [section](#understand-the-data).

The `$self->{maps_counters_type}` data structure describes these data while the `$self->{maps_counters}->{global}` one defines
their properties like thresholds and how they will be displayed to the users.

```perl
sub set_counters {
    my ($self, %options) = @_;

    $self->{maps_counters_type} = [
        # health and queries are global metric, they don't refer to a specific instance. 
        # In other words, you cannot get several values for health or queries
        # That's why the type is 0.
        { name => 'health', type => 0, cb_prefix_output => 'prefix_health_output' },
        { name => 'queries', type => 0, cb_prefix_output => 'prefix_queries_output' },
        # app_metrics groups connections and errors and each will receive value for both instances (my-awesome-frontend and my-awesome-db)
        # the type => 1 explicits that
        # as above, you can define a callback (cb) function to manage the output prefix. This function is called 
        # each time a value is passed to the counter and can be shared across multiple counters.
        { name => 'app_metrics', type => 1, cb_prefix_output => 'prefix_app_output' }
    ];

    $self->{maps_counters}->{health} = [
        # This counter is specific because it deals with a string value
        {
            label => 'health',
            # All properties below (before et) are related to the catalog_status_ng catalog function imported at the top of our mode
            type => 2,
            # These properties allow you to define default thresholds for each status but not mandatory.
            warning_default => '%{health} =~ /yellow/', 
            critical_default => '%{health} =~ /red/', 
            # To simplify, manage things related to how get value in the counter, what to display and specific threshold 
            # check because of the type of the data (string)
            set => {
                key_values => [ { name => 'health' } ],
                output_template => 'status: %s',
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
    $self->{maps_counters}->{app_metrics} = [
        # The app_metrics has two different labels, connection and errors.
        { label => 'connections', nlabel => 'myawesomeapp.connections.count', set => {
                # pay attention the extra display key_value. It will receive the instance value. (my-awesome-db, my-awesome-frontend).
                # the display key_value isn't mandatory but we show it here for education purpose
                key_values => [ { name => 'connections' }, { name => 'display' } ],
                output_template => 'connections: %s',
                perfdatas => [
                    # we add the label_extra_instance option to have one perfdata per instance
                    { template => '%d', min => 0, label_extra_instance => 1 }
                ]
            }
        },
        { label => 'errors', nlabel => 'myawesomeapp.errors.count', set => {
                key_values => [ { name => 'errors' }, { name => 'display' } ],
                output_template => 'errors: %s',
                perfdatas => [
                    { template => '%d', min => 0, label_extra_instance => 1 }
                ]
            }
        }
    ];
}

# This should always be present at the end of the script.
1;
```

> Remember to always move the final `1;` instruction at the end of the script when you add new lines during this tutorial.

The mode compiles. Run the command
supplying a value to the `--hostname` option to see what it displays:

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=fakehost
OK: status : skipped (no value(s)) - select : skipped (no value(s)), update : skipped (no value(s)), delete : skipped (no value(s))
```

You can see some of your counters with the `skipped (no value(s))`, it's normal, this is because we
just created the counters definition and structure but didn't push any values into it.

#### Create prefix callback functions

These functions are not mandatory but help to make the output more readable for a human. We will create
it now but as you have noticed the mode compiles so you can choose to keep those for the polishing moment.

During counters definitions, we associated a callback function to each of them:

- `cb_prefix_output => 'prefix_health_output'`
- `cb_prefix_output => 'prefix_queries_output'`
- `cb_prefix_output => 'prefix_app_output'`

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

sub prefix_app_output {
    my ($self, %options) = @_;

    # This notation allows you to return the value of the instance (the display key_value)
    # to bring some context to the output.
    return "'" . $options{instance_value}->{display} . "' ";
}

1;
```

Execute your command and check that the output matches the one below: 

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=fakehost
OK: My-awesome-app: status : skipped (no value(s)) - Queries: select : skipped (no value(s)), update : skipped (no value(s)), delete : skipped (no value(s))
``` 

The output is easier to read and separators are visible between global counters.

#### Get raw data from API and understand the data structure

It's the moment to write the main sub (`manage_selection`) - the most complex, but also the one that
will transform your mode to something useful and alive.

Think about the logic, what we have to do is:

- Connect to **run.mocky.io** over HTTPS
- Query a specific path corresponding to our API
- Store and process the result
- Spread this result across counters definitions

Start by writing the code to connect to **run.mocky.io**. It is where the centreon-plugins
framework delivers its power.

> All print instructions are available as commented code in the GitHub tutorial resources.

Write the request and add a print to display the received data:

```perl
sub manage_selection {
    my ($self, %options) = @_;
    # We have already loaded all things required for the http module
    # Use the request method from the module to run the GET request against the path
    my ($content) = $self->{http}->request(url_path => '/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656');
    print $content . "\n";
}

1;
```

Run this command `perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=run.mocky.io`. 

The output should be:

```perl title="Basic raw content print"
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
OK: My-awesome-app: status : skipped (no value(s)) - Queries: select : skipped (no value(s)), update : skipped (no value(s)), delete : skipped (no value(s))
```

Add an `eval` structure to transform `$content` into a data structure that can be easily manipulated with perl. Let's
introduce the standard `Data::Dumper` library that can help understanding your data structures.

We load the Data::Dumper library and use one of its methods to print the JSON. A second line is here to print
a simple message and get you familiar with how to access data within perl data structures.

```perl
sub manage_selection {
    my ($self, %options) = @_;
    # We have already loaded all things required for the http module
    # Use the request method from the imported module to run the GET request against the URL path of our API
    my ($content) = $self->{http}->request(url_path => '/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656');
    
    # Declare a scalar deserialize the JSON content string into a perl data structure
    my $decoded_content;
    eval {
        $decoded_content = JSON::XS->new->decode($content);
    };
    # Catch the error that may arise in case the data received is not JSON
    if ($@) {
        $self->{output}->add_option_msg(short_msg => "Cannot encode JSON result");
        $self->{output}->option_exit();    
    }
    use Data::Dumper; 
    print Dumper($decoded_content);
    print "My App health is '" . $decoded_content->{health} . "'\n";
}

1;
```

Run the command `perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=run.mocky.io`
again and see how it changed.

You now have your JSON deserialized into a perl `$VAR1` which represents your `$decoded_content` structure.

You can also note the result of the latest print and how we accessed the `yellow` value.

```shell tile="Perl data structure from JSON"
$VAR1 = {
          'connections' => [
                             {
                               'component' => 'my-awesome-frontend',
                               'value' => 122
                             },
                             {
                               'value' => 92,
                               'component' => 'my-awesome-db'
                             }
                           ],
          'health' => 'yellow',
          'errors' => [
                        {
                          'value' => 32,
                          'component' => 'my-awesome-frontend'
                        },
                        {
                          'value' => 27,
                          'component' => 'my-awesome-db'
                        }
                      ],
          'db_queries' => {
                            'select' => 1230,
                            'update' => 640,
                            'delete' => 44
                          }
        };
My App health is 'yellow'
```

#### Push data to global counters (type => 0)

Now that we know our data structure and how to access the values, we have to assign this
value to the counters we initially defined. Pay attention to the comments above
the `$self->{health}` and `$self->{db_queries}` assignations.

```perl title="Global counters (type => 0)"
sub manage_selection {
    my ($self, %options) = @_;
    # We have already loaded all things required for the http module
    # Use the request method from the imported module to run the GET request against the URL path of our API
    my ($content) = $self->{http}->request(url_path => '/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656');
    # Uncomment the line below when you reached this part of the tutorial.
    # print $content;

    # Declare a scalar deserialize the JSON content string into a perl data structure
    my $decoded_content;
    eval {
        $decoded_content = JSON::XS->new->decode($content);
    };
    # Catch the error that may arise in case the data received is not JSON
    if ($@) {
        $self->{output}->add_option_msg(short_msg => "Cannot encode JSON result");
        $self->{output}->option_exit();    
    }
    # Uncomment the lines below when you reached this part of the tutorial.
    # use Data::Dumper; 
    # print Dumper($decoded_content);
    # print "My App health is '" . $decoded_content->{health} . "'\n";

    # Here is where the counter magic happens.
    
    # $self->{health} is your counter definition (see $self->{maps_counters}->{<name>})
    # Here, we map the obtained string $decoded_content->{health} with the health key_value in the counter.
    $self->{health} = { 
        health => $decoded_content->{health}
    };

    # $self->{queries} is your counter definition (see $self->{maps_counters}->{<name>}) 
    # Here, we map the obtained values from the db_queries nodes with the key_value defined in the counter.
    $self->{queries} = {
        select => $decoded_content->{db_queries}->{select},
        update => $decoded_content->{db_queries}->{update},
        delete => $decoded_content->{db_queries}->{delete}
    };

}

1;
```

Let's run our command again: no more `skipped (no value(s))` message. You even get a
WARNING state because of the `yellow` app state.

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=run.mocky.io
WARNING: My-awesome-app status: yellow | 'myawesomeapp.db.queries.select.count'=1230;;;0; 'myawesomeapp.db.queries.update.count'=640;;;0; 'myawesomeapp.db.queries.delete.count'=44;;;0;
```

Performance data confirm that values for database queries are correctly set as well.

This is how the counters mode template work (`use base qw(centreon::plugins::templates::counter);`), the only thing you have
to do is getting the data from the thing you have to monitor and push it to a counter definition.

Behind the scenes, it manages a lot of things for you:

- Options: `--warning-health --warning-select --warning-update --warning-delete and --critical-` have automatically been defined
- Performance data: thanks to `nlabel` and values from `perfdatas:[]` array in your counters
- Display: It writes the status and substitutes values with the one assigned to the counter

Now, you probably understand better why the preparation work about understanding collected data and the counter definition part is essential: simply because it's the bigger part of the job.

#### Push data to counters having an instance (type => 1)

Now let's deal with counters with instances. That means that the same counters will
receive multiple data, each of these data refering to a specific dimension.

They require to be manipulated in a slightly different way as we will have to specify the
name we want to associate with the data.

First, we have to loop over both `connections` and `errors` arrays to access the app name and
measured value and then spread it within counters.

```perl title="Counters with instances (type 1)"
sub manage_selection {
    my ($self, %options) = @_;
    # We have already loaded all things required for the http module
    # Use the request method from the imported module to run the GET request against the URL path of our API
    my ($content) = $self->{http}->request(url_path => '/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656');
    # Uncomment the line below when you reached this part of the tutorial.
    # print $content;

    # Declare a scalar deserialize the JSON content string into a perl data structure
    my $decoded_content;
    eval {
        $decoded_content = JSON::XS->new->decode($content);
    };
    # Catch the error that may arise in case the data received is not JSON
    if ($@) {
        $self->{output}->add_option_msg(short_msg => "Cannot encode JSON result");
        $self->{output}->option_exit();    
    }
    # Uncomment the lines below when you reached this part of the tutorial.
    # use Data::Dumper; 
    # print Dumper($decoded_content);
    # print "My App health is '" . $decoded_content->{health} . "'\n";

    # Here is where the counter magic happens.
    
    # $self->{health} is your counter definition (see $self->{maps_counters}->{<name>})
    # Here, we map the obtained string $decoded_content->{health} with the health key_value in the counter.
    $self->{health} = { 
        health => $decoded_content->{health}
    };

    # $self->{queries} is your counter definition (see $self->{maps_counters}->{<name>}) 
    # Here, we map the obtained values from the db_queries nodes with the key_value defined in the counter.
    $self->{queries} = {
        select => $decoded_content->{db_queries}->{select},
        update => $decoded_content->{db_queries}->{update},
        delete => $decoded_content->{db_queries}->{delete}
    };

    # Initialize an empty app_metrics counter.
    $self->{app_metrics} = {};
    # Loop in the connections array of hashes
    foreach my $entry (@{ $decoded_content->{connections} }) {
        # Same logic than type => 0 counters but an extra key $entry->{component} to associate the value 
        # with a specific instance
        $self->{app_metrics}->{ $entry->{component} }->{display} = $entry->{component};
        $self->{app_metrics}->{ $entry->{component} }->{connections} = $entry->{value};
    };

    # Exactly the same thing with errors
    foreach my $entry (@{ $decoded_content->{errors} }) {
        # Don't need to redefine the display key, just assign a value to the error key_value while 
        # keeping the $entry->{component} key to associate the value with the good instance
        $self->{app_metrics}->{ $entry->{component} }->{errors} = $entry->{value};
    };

}

1;
```

Your `app-metrics` mode is (almost) complete. Once again, the counters template managed a lot
behind the scenes.

Execute this command to see how it evolved since the last execution. We modify the command with some
additional parameters:

- `--warning-health='%{health} eq "care"'` to avoid getting a WARNING, put any value that will not match yellow. Providing it
as a parameter will automatically override the hardcoded default code value
- `--verbose` will display the long output and the details for each `type => 1` counters

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname=run.mocky.io --warning-health='%{health} eq "care"' --verbose
```

Here is the expected output: 

```shell
OK: My-awesome-app status: yellow - Queries: select: 1230, update: 640, delete: 44 | 'myawesomeapp.db.queries.select.count'=1230;;;0; 'myawesomeapp.db.queries.update.count'=640;;;0; 'myawesomeapp.db.queries.delete.count'=44;;;0; 'my-awesome-db#myawesomeapp.connections.count'=92;;;0; 'my-awesome-db#myawesomeapp.errors.count'=27;;;0; 'my-awesome-frontend#myawesomeapp.connections.count'=122;;;0; 'my-awesome-frontend#myawesomeapp.errors.count'=32;;;0;
'my-awesome-db' connections: 92, errors: 27
'my-awesome-frontend' connections: 122, errors: 32
```

You now get metrics displayed for both components `'my-awesome-db'` and `'my-awesome-frontend'` and also performance data
for your graphs. Note how the counter template automatically added the instance dimension on the left of the `nlabel` defined 
for each counters: `**my-awesome-frontend#**myawesomeapp.errors.count'=32;;;0;`

#### Help section and assistant to build your centreon objects

Last but not least, you need to write a help section to explain users what your mode is
doing and what options they can use.

The centreon-plugins framework has a built-in assistant to help you with the list of counters
and options.

Run this command to obtain a summary that will simplify the work of creating Centreon commands and write
the mode's help:

```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --hostname='anyvalue' --list-coun
ters --verbose
```

Get information from its output (shown below) to start building your mode's help:

```shell
counter list: select update delete health connections errors
configuration:  --warning-select='$_SERVICEWARNINGSELECT$' --critical-select='$_SERVICECRITICALSELECT$' --warning-update='$_SERVICEWARNINGUPDATE$' --critical-update='$_SERVICECRITICALUPDATE$' --warning-delete='$_SERVICEWARNINGDELETE$' --critical-delete='$_SERVICECRITICALDELETE$' --warning-health='$_SERVICEWARNINGHEALTH$' --critical-health='$_SERVICECRITICALHEALTH$' --warning-connections='$_SERVICEWARNINGCONNECTIONS$' --critical-connections='$_SERVICECRITICALCONNECTIONS$' --warning-errors='$_SERVICEWARNINGERRORS$' --critical-errors='$_SERVICECRITICALERRORS$'
```

Here is how you can write the help, note that this time you will add the content after the `1;` and add the same
`__END__` instruction like you did in the `plugin.pm` file. 


```perl title="Help section"
__END__

=head1 MODE

Check my-awesome-app metrics exposed through its API

=over 8

=item B<--warning/critical-health>

Warning and critical threshold for application health string. 

Defaults values are: --warning-health='%{health} eq "yellow"' --critical-health='%{health} eq "red"'

=item B<--warning/critical-select>

Warning and critical threshold for select queries

=item B<--warning/critical-update>

Warning and critical threshold for update queries

=item B<--warning/critical-delete>

Warning and critical threshold for delete queries

=item B<--warning/critical-connections>

Warning and critical threshold for connections

=item B<--warning/critical-errors>

Warning and critical threshold for errors

=back
```

You're done! You can enjoy a complete plugin and mode and the help now displays in a specific 
mode section: 


```shell
perl centreon_plugins.pl --plugin=apps::myawesomeapp::api::plugin --mode=app-metrics --help
[..
   All global options from the centreon-plugins framework that your plugin benefits from
..]
Mode:
    Check my-awesome-app metrics exposed through its API

    --warning/critical-health
            Warning and critical threshold for application health string.

            Defaults are: --warning-health='%{health} eq "yellow"' &
            --critical-health='%{health} eq "red"'

    --warning/critical-select
            Warning and critical threshold for select queries

    --warning/critical-update
            Warning and critical threshold for update queries

    --warning/critical-delete
            Warning and critical threshold for delete queries

    --warning/critical-connections
            Warning and critical threshold for connections

    --warning/critical-errors
            Warning and critical threshold for errors
```

### Convert in custom mode

Custom mode is a well established type of plugin. Then it can be usefull to understand the way to build and use it.
Custom is a mode thinking for when you may have different way to collect plugin input. More broadly, build plugins using custom mode afford flexibility if later you have to add a new way to give input in a plugin. This is the main reason why most of latest plugins are in custom mode baseline.

Most of the time the way to collect input use api and this is the most common custom mode you will find in plugins.
There are also cli file for command line or tcp, etc.

In our example case of tutoral it's an api case. 

#### 7.1 Create custom file 

First we need to create the custom file : api.pm

```shell
mkdir -p src/apps/myawesomeapp/api/custom/
touch src/apps/myawesomeapp/api/custom/api.pm
```
#### Change in pulgin.pm

First we need to change plugins script libraririe :
```perl
centreon::plugins::script_simple
```
replace by 
```perl
centreon::plugins::script_custom
```
Then in new constructor a new line calling for the custom is needed
```perl
sub new {
    my ($class, %options) = @_;
    my $self = $class->SUPER::new(package => __PACKAGE__, %options);
        'app-metrics' => 'apps::myawesomeapp::api::mode::appmetrics'
    };

    $self->{custom_modes}->{api} = 'apps::myawesomeapp::api::custom::api';
    return $self;
}
```
#### Change in mode.pm

Custom mode allows to change the way to obtain input, thus all that concern input and the way to process it is push to the custom file. The mode file will contain all needed functions for processing input to give the output needed.

First the new constructor will change :
```perl
sub new {
    my ($class, %options) = @_;
    my $self = $class->SUPER::new(package => __PACKAGE__, %options, force_new_perfdata => 1);
    bless $self, $class;
    
    $options{options}->add_options(arguments => {});
    return $self;
}
```

The check_options function is push into the custom file because it was usefull for the input formating

The manage_selection function is update to remove all that concern the input management.

```perl
sub manage_selection {
    my ($self, %options) = @_;
    
    #This line replace the input section previously available here
    my $results = $options{custom}->request_api();
    
    # $self->{health} is your counter definition (see $self->{maps_counters}->{<name>})
    # Here, we map the obtained string $decoded_content->{health} with the health key_value in the counter.
    $self->{health} = {
        health => $results->{health}
    };
    
    # $self->{queries} is your counter definition (see $self->{maps_counters}->{<name>})
    # Here, we map the obtained values from the db_queries nodes with the key_value defined in the counter.
    $self->{queries} = {
        select => $results->{db_queries}->{select},
        update => $results->{db_queries}->{update},
        delete => $results->{db_queries}->{delete}
    };
    
    # Initialize an empty app_metrics counter.
    $self->{app_metrics} = {};
    # Loop in the connections array of hashes
    foreach my $entry (@{ $results->{connections} }) {
        # Same logic than type => 0 counters but an extra key $entry->{component} to associate the value
        # with a specific instance
        $self->{app_metrics}->{ $entry->{component} }->{display} = $entry->{component};
        $self->{app_metrics}->{ $entry->{component} }->{connections} = $entry->{value}
    };
    
     # Exactly the same thing with errors
    foreach my $entry (@{ $results->{errors} }) {
        # Don't need to redefine the display key, just assign a value to the error key_value while
        # keeping the $entry->{component} key to associate the value with the good instance
        $self->{app_metrics}->{ $entry->{component} }->{errors} = $entry->{value};
    };
}
```

#### New file : api.pm

As explained in the previous section, the custom file will contain all needed functions about input and the way to process it.

This new file needs to contains the packages and libraries declarations :
```perl
package apps::myawesomeapp::api::custom::api;

use strict;
use warnings;

use centreon::plugins::http;
use centreon::plugins::templates::catalog_functions qw(catalog_status_threshold_ng);
use JSON::XS;
```

It also contains the following functions :
* new constructor : construct the object in the same way than in mode file previously
* set_options
* set_defaults
* check_options
* settings
* request_api

##### new constructor

```perl
sub new {
    my ($class, %options) = @_;
    my $self  = {};
    bless $self, $class;

    # Check if an output option is available
    if (!defined($options{output})) {
        print "Class Custom: Need to specify 'output' argument.\n";
        exit 3;
    }
    # Check if options are avaliable
    if (!defined($options{options})) {
        $options{output}->add_option_msg(short_msg => "Class Custom: Need to specify 'options' argument.");
        $options{output}->option_exit();
    }

    if (!defined($options{noptions})) {
        # Adding options legacy from appsmetrics.pm in single mode
        $options{options}->add_options(arguments => {
            'hostname:s'           => { name => 'hostname' },
            'proto:s'              => { name => 'proto', default => 'https' },
            'port:s'               => { name => 'port', default => 443 },
            'timeout:s'            => { name => 'timeout' },
            'unknown-status:s'     => { name => 'unknown_status', default => '%{http_code} < 200 or %{http_code} >= 300' },
            'warning-status:s'     => { name => 'warning_status' },
            'critical-status:s'    => { name => 'critical_status', default => '' }
        });
    }
    # Adding Help structure to the object
    $options{options}->add_help(package => __PACKAGE__, sections => 'REST API OPTIONS', once => 1);
    # Adding output structure to the object
    $self->{output} = $options{output};
    # Command line legacy from appsmetrics.pm in single mode
    $self->{http} = centreon::plugins::http->new(%options);

    return $self;
}
```
##### set_options

This function overwrite the set_options function in http module

```perl
sub set_options {
    my ($self, %options) = @_;

    $self->{option_results} = $options{option_results};
}
```
##### set_defaults

This function is empty and is call remain unclear

```perl
sub set_defaults {}
```
##### check_options

```perl
sub check_options {
    my ($self, %options) = @_;

    # Check if options are propely define
    $self->{hostname} = (defined($self->{option_results}->{hostname})) ? $self->{option_results}->{hostname} : '';
    $self->{proto} = (defined($self->{option_results}->{proto})) ? $self->{option_results}->{proto} : 'https';
    $self->{port} = (defined($self->{option_results}->{port})) ? $self->{option_results}->{port} : 443;
    $self->{timeout} = (defined($self->{option_results}->{timeout})) ? $self->{option_results}->{timeout} : 10;
    $self->{unknown_status} = (defined($self->{option_results}->{unknown_status})) ? $self->{option_results}->{unknown_status} : '';
    $self->{warning_status} = (defined($self->{option_results}->{warning_status})) ? $self->{option_results}->{warning_status} : '';
    $self->{critical_status} = (defined($self->{option_results}->{critical_status})) ? $self->{option_results}->{critical_status} : '';

    # Check if the user provided a value for --hostname option. If not, display a message and exit
    if (!defined($self->{hostname}) || $self->{hostname} eq '') {
        $self->{output}->add_option_msg(short_msg => 'Please set hostname option');
        $self->{output}->option_exit();
    }

    return 0;
}
```
##### settings

This function allows initialize api object options structure and feed it calling set_options

```perl
sub settings {
    my ($self, %options) = @_;

    # Initialize options structure
    $self->{option_results}->{hostname} = $self->{hostname};
    $self->{option_results}->{proto} = $self->{proto};
    $self->{option_results}->{port} = $self->{port};
    $self->{option_results}->{timeout} = $self->{timeout};
    $self->{option_results}->{unknown_status} = $self->{unknown_status};
    $self->{option_results}->{warning_status} = $self->{warning_status};
    $self->{option_results}->{critical_status} = $self->{critical_status};

    # Feed options structure using set_options 
    $self->{http}->set_options(%{$self->{option_results}});
}
```
##### request_api

```perl
sub request_api {
    my ($self, %options) = @_;
    
    # Define APi options needed for request
    $self->settings();

    my ($content) = $self->{http}->request(url_path => '/v3/da8d5aa7-abb4-4a5f-a31c-6700dd34a656');

    if (!defined($content) || $content eq '') {
        $self->{output}->add_option_msg(short_msg => "API returns empty content [code: '" . $self->{http}->get_code() . "'] [message: '" . $self->{http}->get_message() . "']");
        $self->{output}->option_exit();
    }

    my $decoded;
    eval {
        $decoded = JSON::XS->new->decode($content);
    };
    if ($@) {
        $self->{output}->add_option_msg(short_msg => "Cannot encode JSON result");
        $self->{output}->option_exit();
    }

    return $decoded;
}
```

## Tutorial : How to create a plugin - Using SNMP

**Description**

This example explains how to check a single SNMP value on a PfSense firewall (memory dropped packets).
We use cache file because it's a SNMP counter. So we need to get the value between 2 checks.
We get the value and compare it to warning and critical thresholds.

### Plugin file

First, create the plugin directory and the plugin file:

```
  $ mkdir -p apps/pfsense/snmp
  $ touch apps/pfsense/snmp/plugin.pm
```
> **TIP** : PfSense is a firewall application and we check it using SNMP protocol

Then, edit **plugin.pm** and add the following lines:

```perl
  #
  # Copyright 2023 Centreon (http://www.centreon.com/)
  #
  # Centreon is a full-fledged industry-strength solution that meets
  # the needs in IT infrastructure and application monitoring for
  # service performance.
  #
  # Licensed under the Apache License, Version 2.0 (the "License");
  # you may not use this file except in compliance with the License.
  # You may obtain a copy of the License at
  #
  #     http://www.apache.org/licenses/LICENSE-2.0
  #
  # Unless required by applicable law or agreed to in writing, software
  # distributed under the License is distributed on an "AS IS" BASIS,
  # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  # See the License for the specific language governing permissions and
  # limitations under the License.
  #

  # Path to the plugin
  package apps::pfsense::snmp::plugin;

  # Needed libraries
  use strict;
  use warnings;
  # Use this library to check using SNMP protocol
  use base qw(centreon::plugins::script_snmp);
```
> **TIP** : Don't forget to edit 'Authors' line.

Add **new** method to instantiate the plugin:

```perl
  sub new {
    my ($class, %options) = @_;
    my $self = $class->SUPER::new(package => __PACKAGE__, %options);
    bless $self, $class;
    # $options->{options} = options object

    # Plugin version
    $self->{version} = '0.1';

    # Modes association
    %{$self->{modes}} = (
                         # Mode name => path to the mode
                         'memory-dropped-packets'   => 'apps::pfsense::snmp::mode::memorydroppedpackets',
                         );

    return $self;
  }
```
Declare this plugin as a perl module:

```perl
  1;
```
Add a description to the plugin:

```perl
  __END__

  =head1 PLUGIN DESCRIPTION

  Check pfSense in SNMP.

  =cut
```
> **TIP** : This description is printed with '--help' option.

### Mode file

Then, create the mode directory and the mode file:

```shell
  $ mkdir apps/pfsense/snmp/mode
  $ touch apps/pfsense/snmp/mode/memorydroppedpackets.pm
```
Edit **memorydroppedpackets.pm** and add the following lines:

```perl
  #
  # Copyright 2023 Centreon (http://www.centreon.com/)
  #
  # Centreon is a full-fledged industry-strength solution that meets
  # the needs in IT infrastructure and application monitoring for
  # service performance.
  #
  # Licensed under the Apache License, Version 2.0 (the "License");
  # you may not use this file except in compliance with the License.
  # You may obtain a copy of the License at
  #
  #     http://www.apache.org/licenses/LICENSE-2.0
  #
  # Unless required by applicable law or agreed to in writing, software
  # distributed under the License is distributed on an "AS IS" BASIS,
  # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  # See the License for the specific language governing permissions and
  # limitations under the License.
  #

  # Path to the plugin
  package apps::pfsense::snmp::mode::memorydroppedpackets;

  # Needed library for modes
  use base qw(centreon::plugins::mode);

  # Needed libraries
  use strict;
  use warnings;

  # Custom library
  use POSIX;

  # Needed library to use cache file
  use centreon::plugins::statefile;
```
Add **new** method to instantiate the mode:

```perl
  sub new {
    my ($class, %options) = @_;
    my $self = $class->SUPER::new(package => __PACKAGE__, %options);
    bless $self, $class;

    # Mode version
    $self->{version} = '1.0';

    # Declare options
    $options{options}->add_options(arguments =>
                                {
                                  # option name        => variable name
                                  "warning:s"          => { name => 'warning', },
                                  "critical:s"         => { name => 'critical', },
                                });

    # Instantiate cache file
    $self->{statefile_value} = centreon::plugins::statefile->new(%options);
    return $self;
  }
```
> **TIP** : A default value can be added to options.
  Example : "warning:s" => { name => 'warning', default => '80'},

Add **check_options** method to validate options:

```perl
  sub check_options {
    my ($self, %options) = @_;
    $self->SUPER::init(%options);

    # Validate threshold options with threshold_validate method
    if (($self->{perfdata}->threshold_validate(label => 'warning', value => $self->{option_results}->{warning})) == 0) {
       $self->{output}->add_option_msg(short_msg => "Wrong warning threshold '" . $self->{option_results}->{warning} . "'.");
       $self->{output}->option_exit();
    }
    if (($self->{perfdata}->threshold_validate(label => 'critical', value => $self->{option_results}->{critical})) == 0) {
       $self->{output}->add_option_msg(short_msg => "Wrong critical threshold '" . $self->{option_results}->{critical} . "'.");
       $self->{output}->option_exit();
    }

    # Validate cache file options using check_options method of statefile library
    $self->{statefile_value}->check_options(%options);
  }
```
Add **run** method to execute mode:

```perl
  sub run {
    my ($self, %options) = @_;
    # $options{snmp} = snmp object

    # Get SNMP options
    $self->{snmp} = $options{snmp};
    $self->{hostname} = $self->{snmp}->get_hostname();
    $self->{snmp_port} = $self->{snmp}->get_port();

    # SNMP oid to request
    my $oid_pfsenseMemDropPackets = '.1.3.6.1.4.1.12325.1.200.1.2.6.0';
    my ($result, $value);

    # Get SNMP value for oid previsouly defined
    $result = $self->{snmp}->get_leef(oids => [ $oid_pfsenseMemDropPackets ], nothing_quit => 1);
    # $result is a hash table where keys are oids
    $value = $result->{$oid_pfsenseMemDropPackets};

    # Read the cache file
    $self->{statefile_value}->read(statefile => 'pfsense_' . $self->{hostname}  . '_' . $self->{snmp_port} . '_' . $self->{mode});
    # Get cache file values
    my $old_timestamp = $self->{statefile_value}->get(name => 'last_timestamp');
    my $old_memDropPackets = $self->{statefile_value}->get(name => 'memDropPackets');

    # Create a hash table with new values that will be write to cache file
    my $new_datas = {};
    $new_datas->{last_timestamp} = time();
    $new_datas->{memDropPackets} = $value;

    # Write new values to cache file
    $self->{statefile_value}->write(data => $new_datas);

    # If cache file didn't have any values, create it and wait another check to calculate value
    if (!defined($old_timestamp) || !defined($old_memDropPackets)) {
        $self->{output}->output_add(severity => 'OK',
                                    short_msg => "Buffer creation...");
        $self->{output}->display();
        $self->{output}->exit();
    }

    # Fix when PfSense reboot (snmp counters initialize to 0)
    $old_memDropPackets = 0 if ($old_memDropPackets > $new_datas->{memDropPackets});

    # Calculate time between 2 checks
    my $delta_time = $new_datas->{last_timestamp} - $old_timestamp;
    $delta_time = 1 if ($delta_time == 0);

    # Calculate value per second
    my $memDropPacketsPerSec = ($new_datas->{memDropPackets} - $old_memDropPackets) / $delta_time;

    # Calculate exit code by comparing value to thresholds
    # Exit code can be : 'OK', 'WARNING', 'CRITICAL', 'UNKNOWN'
    my $exit_code = $self->{perfdata}->threshold_check(value => $memDropPacketsPerSec,
                                                       threshold => [ { label => 'critical', 'exit_litteral' => 'critical' }, { label => 'warning', exit_litteral => 'warning' } ]);

    # Add a performance data
    $self->{output}->perfdata_add(label => 'dropped_packets_Per_Sec',
                                  value => sprintf("%.2f", $memDropPacketsPerSec),
                                  warning => $self->{perfdata}->get_perfdata_for_output(label => 'warning'),
                                  critical => $self->{perfdata}->get_perfdata_for_output(label => 'critical'),
                                  min => 0);

    # Add output
    $self->{output}->output_add(severity => $exit_code,
                                short_msg => sprintf("Dropped packets due to memory limitations : %.2f /s",
                                    $memDropPacketsPerSec));

    # Display output
    $self->{output}->display();
    $self->{output}->exit();
  }
```
Declare this plugin as a perl module:

```perl
  1;
```
Add a description of the mode options:

```perl
  __END__

  =head1 MODE

  Check number of packets per second dropped due to memory limitations.

  =over 8

  =item B<--warning>

  Threshold warning for dropped packets in packets per second.

  =item B<--critical>

  Threshold critical for dropped packets in packets per second.

  =back

  =cut
```

### Command line

This is an example of command line:

```
  $ perl centreon_plugins.pl --plugin apps::pfsense::snmp::plugin --mode memory-dropped-packets --hostname 192.168.0.1 --snmp-community 'public' --snmp-version '2c' --warning '1' --critical '2'
```
Output may display:

```
  OK: Dropped packets due to memory limitations : 0.00 /s | dropped_packets_Per_Sec=0.00;0;;1;2
```

## Other examples 

---

### Example 1

We want to develop the following SNMP plugin:

* measure the current sessions and current SSL sessions usages.

```perl
  package my::module::name;
  
  use base qw(centreon::plugins::templates::counter);
  
  use strict;
  use warnings;
  
  sub set_counters {
    my ($self, %options) = @_;
    
    $self->{maps_counters_type} = [
        { name => 'global', type => 0, message_separator => ' - ' },
    ];
    $self->{maps_counters}->{global} = [
        { label => 'sessions', set => {
                key_values => [ { name => 'sessions' } ],
                output_template => 'Current sessions : %s',
                perfdatas => [
                    { label => 'sessions', template => '%s', min => 0 },
                ],
            }
        },
        { label => 'sessions-ssl', set => {
                key_values => [ { name => 'sessions_ssl' } ],
                output_template => 'Current ssl sessions : %s',
                perfdatas => [
                    { label => 'sessions_ssl', template => '%s', min => 0 },
                ],
            }
        },
    ];
  }
  
  sub manage_selection {
    my ($self, %options) = @_;

    # OIDs are fake. Only for the example.
    my ($oid_sessions, $oid_sessions_ssl) = ('.1.2.3.4.0', '.1.2.3.5.0');
    
    my $result = $options{snmp}->get_leef(
      oids => [ $oid_sessions, $oid_sessions_ssl ],
      nothing_quit => 1
    );
    $self->{global} = {
      sessions => $result->{$oid_sessions},
      sessions_ssl => $result->{$oid_sessions_ssl}
    };
  }
```
Output may display:

```
  OK: Current sessions : 24 - Current ssl sessions : 150 | sessions=24;;;0; sessions_ssl=150;;;0;
```
As you can see, we create two arrays of hash tables in **set_counters** method. We use arrays to order the output.

* **maps_counters_type**: global configuration. Attributes list:

  * *name*: the name is really important. It will be used in hash **map_counters** and also in **manage_selection** as you can see.
  * *type*: 0 or 1. With 0 value, the output will be written in the short output. With the value 1, it depends if we have one or multiple instances.
  * *message_multiple*: only useful with *type* 1 value. The message will be displayed in short ouput if we have multiple instances selected.
  * *message_separator*: the string displayed between counters (Default: ', ').
  * *cb_prefix_output*, *cb_suffix_output*: name of a method (in a string) to callback. Methods will return a string to be displayed before or after **all** counters.
  * *cb_init*: name of a method (in a string) to callback. Method will return 0 or 1. With 1 value, counters are not checked.

* **maps_counters**: complex structure to configure counters. Attributes list:

  * *label*: name used for threshold options.
  * *type*: depend of data dimensions
    * 0 : global
    * 1 : instance
    * 2 : group
    * 3 : multiple
  * *threshold*: if we set the value to 0. There is no threshold check options (can be used if you want to set and check option yourself).
  * *set*: hash table:
  
    * *keys_values*: array of hashes. Set values used for the counter. Order is important (by default, the first value is used to check). 

      * *name*: attribute name. Need to match with attributes in **manage_selection** method!
      * *diff*: if we set the value to 1, we'll have the difference between two checks (need a statefile!).
      * *per_second*: if we set the value to 1, the *diff* values will be calculated per seconds (need a statefile!). No need to add diff attribute.
    
    * *output_template*: string to display. '%s' will be replaced by the first value of *keys_values*.
    * *output_use*: which value to be used in *output_template* (If not set, we use the first value of *keys_values*).
    * *output_change_bytes*: if we set the value to 1 or 2, we can use a second '%s' in *output_template* to display the unit. 1 = divide by 1024 (Bytes), 2 = divide by 1000 (bits).
    * *perfdata*: array of hashes. To configure perfdatas
    
      * *label*: name displayed.
      * *value*: value to used. It's the name from *keys_values*.
      * *template*: value format (could be for example: '%.3f').
      * *unit*: unit displayed.
      * *min*, *max*: min and max displayed. You can use a value from *keys_values*.
      * *label_extra_instance*: if we set the value to 1, perhaps we'll have a suffix concat with *label*.
      * *instance_use*: which value from *keys_values* to be used. To be used if *label_extra_instance* is 1.

### Example 2

We want to add the current number of sessions by virtual servers.

```perl
  package my::module::name;
  
  use base qw(centreon::plugins::templates::counter);
  
  use strict;
  use warnings;
  
  sub set_counters {
    my ($self, %options) = @_;
    
    $self->{maps_counters_type} = [
        { name => 'global', type => 0, cb_prefix_output => 'prefix_global_output' },
        { name => 'vs', type => 1, cb_prefix_output => 'prefix_vs_output', message_multiple => 'All Virtual servers are ok' }
    ];
    $self->{maps_counters}->{global} = [
        { label => 'total-sessions', set => {
                key_values => [ { name => 'sessions' } ],
                output_template => 'current sessions : %s',
                perfdatas => [
                    { label => 'total_sessions', template => '%s', min => 0 },
                ],
            }
        },
        { label => 'total-sessions-ssl', set => {
                key_values => [ { name => 'sessions_ssl' } ],
                output_template => 'current ssl sessions : %s',
                perfdatas => [
                    { label => 'total_sessions_ssl', template => '%s', min => 0 },
                ],
            }
        },
    ];
    
    $self->{maps_counters}->{vs} = [
        { label => 'sessions', set => {
                key_values => [ { name => 'sessions' }, { name => 'display' } ],
                output_template => 'current sessions : %s',
                perfdatas => [
                    { label => 'sessions', template => '%s', 
                      min => 0, label_extra_instance => 1, instance_use => 'display' },
                ],
            }
        },
        { label => 'sessions-ssl', set => {
                key_values => [ { name => 'sessions_ssl' }, { name => 'display' } ],
                output_template => 'current ssl sessions : %s',
                perfdatas => [
                    { label => 'sessions_ssl', template => '%s', 
                      min => 0, label_extra_instance => 1, instance_use => 'display' },
                ],
            }
        },
    ];
  }
  
  sub prefix_vs_output {
    my ($self, %options) = @_;
    
    return "Virtual server '" . $options{instance_value}->{display} . "' ";
  }
  
  sub prefix_global_output {
    my ($self, %options) = @_;
    
    return "Total ";
  }
  
  sub manage_selection {
    my ($self, %options) = @_;

    # OIDs are fake. Only for the example.
    my ($oid_sessions, $oid_sessions_ssl) = ('.1.2.3.4.0', '.1.2.3.5.0');
    
    my $result = $options{snmp}->get_leef(oids => [ $oid_sessions, $oid_sessions_ssl ],
                                          nothing_quit => 1);
    $self->{global} = { sessions => $result->{$oid_sessions},
                        sessions_ssl => $result->{$oid_sessions_ssl}
                      };
    my $oid_table_vs = '.1.2.3.10';
    my $mapping = {
        vsName        => { oid => '.1.2.3.10.1' },
        vsSessions    => { oid => '.1.2.3.10.2' },
        vsSessionsSsl => { oid => '.1.2.3.10.3' },
    };
    
    $self->{vs} = {};
    $result = $options{snmp}->get_table(oid => $oid_table_vs,
                                        nothing_quit => 1);
    foreach my $oid (keys %{$result->{ $oid_table_vs }}) {
        next if ($oid !~ /^$mapping->{vsName}->{oid}\.(.*)$/;
        my $instance = $1;
        my $data = $options{snmp}->map_instance(mapping => $mapping, results => $result->{$oid_table_vs}, instance => $instance);
        
        $self->{vs}->{$instance} = { display => $data->{vsName}, 
                                     sessions => $data->{vsSessions}, sessions_ssl => $data->{vsSessionsSsl}};
    }
  }
```
If we have at least 2 virtual servers:

```
  OK: Total current sessions : 24, current ssl sessions : 150 - All Virtual servers are ok | total_sessions=24;;;0; total_sessions_ssl=150;;;0; sessions_foo1=11;;;0; sessions_ssl_foo1=70;;;0; sessions_foo2=13;;;0; sessions_ssl_foo2=80;;;0;
  Virtual server 'foo1' current sessions : 11, current ssl sessions : 70
  Virtual server 'foo2' current sessions : 13, current ssl sessions : 80
```

### Example 3

The model can also be used to check strings (not only counters). So we want to check the status of a virtualserver.

```perl
  package my::module::name;
  
  use base qw(centreon::plugins::templates::counter);
  
  use strict;
  use warnings;
  
  sub set_counters {
    my ($self, %options) = @_;
    
    $self->{maps_counters_type} = [
        { name => 'vs', type => 1, cb_prefix_output => 'prefix_vs_output', message_multiple => 'All Virtual server status are ok' }
    ];    
    $self->{maps_counters}->{vs} = [
        { label => 'status', threshold => 0, set => {
                key_values => [ { name => 'status' }, { name => 'display' } ],
                closure_custom_calc => $self->can('custom_status_calc'),
                closure_custom_output => $self->can('custom_status_output'),
                closure_custom_perfdata => sub { return 0; },
                closure_custom_threshold_check => $self->can('custom_threshold_output')
            }
        }
    ];
  }
  
  sub custom_threshold_output {
    my ($self, %options) = @_; 
    my $status = 'ok';
    
    if ($self->{result_values}->{status} =~ /problem/) {
        $status = 'critical';
    }
    return $status;
  }
  
  sub custom_status_output {
    my ($self, %options) = @_;
    
    my $msg = sprintf("status is '%s'", $self->{result_values}->{status});
    return $msg;
  }
  
  sub custom_status_calc {
    my ($self, %options) = @_;
    
    $self->{result_values}->{status} = $options{new_datas}->{$self->{instance} . '_status'};
    $self->{result_values}->{display} = $options{new_datas}->{$self->{instance} . '_display'};
    return 0;
  }
  
  sub prefix_vs_output {
    my ($self, %options) = @_;
    
    return "Virtual server '" . $options{instance_value}->{display} . "' ";
  }
  
  sub check_options {
    my ($self, %options) = @_;
    $self->SUPER::check_options(%options);

  }
  
  sub manage_selection {
    my ($self, %options) = @_;

    my $oid_table_vs = '.1.2.3.10';
    my $mapping = {
        vsName        => { oid => '.1.2.3.10.1' },
        vsStatus      => { oid => '.1.2.3.10.4' },
    };
    
    $self->{vs} = {};
    my $result = $options{snmp}->get_table(oid => $oid_table_vs,
                                        nothing_quit => 1);
    foreach my $oid (keys %{$result->{ $oid_table_vs }}) {
        next if ($oid !~ /^$mapping->{vsName}->{oid}\.(.*)$/;
        my $instance = $1;
        my $data = $options{snmp}->map_instance(mapping => $mapping, results => $result->{$oid_table_vs}, instance => $instance);
        
        $self->{vs}->{$instance} = { display => $data->{vsName}, 
                                     status => $data->{vsStatus} };
    }
  }
```
The following example show 4 new attributes:

* *closure_custom_calc*: should be used to do more complex calculation.
* *closure_custom_output*: should be used to have a more complex output (An example: want to display the total, free and used value at the same time).
* *closure_custom_perfdata*: should be used to manage yourself the perfdata.
* *closure_custom_threshold_check*: should be used to manage yourself the threshold check.

## Code Style Guidelines

**Introduction**

Perl code from Pull-request must conform to the following style guidelines. If you find any code which doesn't conform, please fix it.

### Indentation

Space should be used to indent all code blocks. Tabs should never be used to indent code blocks. Mixing tabs and spaces results in misaligned code blocks for other developers who prefer different indentation settings.
Please use 4 for indentation space width.

```perl
    if ($1 > 1) {
    ....return 1;
    } else {
        if ($i == -1) {
        ....return 0;
        }
        return -1
    }
```

### Comments

There should always be at least 1 space between the # character and the beginning of the comment.  This makes it a little easier to read multi-line comments:

```perl
    # Good comment
    #Wrong comment
```

### Subroutine & Variable Names

Whenever possible, use underscore to seperator words and don't use uppercase characters:

```perl
    sub get_logs {}
    my $start_time;
```
Keys of hash table should be used alphanumeric and underscore characters only (and no quote!):

```perl
    $dogs->{meapolitan_mastiff} = 10;
```

### Curly Brackets, Parenthesis

There should be a space between every control/loop keyword and the opening parenthesis:

```perl
    if ($i == 1) {
        ...
    }
    while ($i == 2) {
        ...
    }
```

###  If/Else Statements

'else', 'elsif' should be on the same line after the previous closing curly brace:

```perl
    if ($i == 1) {
        ...
    } else {
        ...
    }
```
You can use single line if conditional:

```perl
    next if ($i == 1);
```
