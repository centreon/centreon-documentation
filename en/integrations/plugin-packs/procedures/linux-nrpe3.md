# Monitoring procedure
## Prerequisites
This chapter describes the installation prerequisites required by plugins
to run.

### Centreon NRPE Plugin
Install this plugin on each poller:

    # yum install centreon-nrpe3-plugin

### Centreon-packaged NRPE daemon and Linux local plugin
Follow the following instructions 

    # yum install http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
    # yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch

Then change the value of parameter 'allowed_hosts' in /etc/nrpe/centreon-nrpe3.cfg and restart the service:

    # systemctl restart centreon-nrpe3.service


