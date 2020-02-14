---
id: applications-voip-asterisk
title: Asterisk VoIP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.11 | `DEPRECATED` | Dec  7 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Voip-Asterisk
```

### Asterisk server configuration

After connecting with root account to your Asterisk server, you must do the following configurations.

### SNMP mode

  - Install *snmpd* daemon.

  - Modify the file `/etc/asterisk/modules.conf` by commenting out the line containing `res_snmp.so`:
    
    vi /etc/asterisk/modules.conf

example:

    [modules] autoload=yes
    ... noload => res_config_pgsql.so noload => res_phoneprov.so #noload => res_snmp.so noload => res_speech.so noload => res_config_sqlite.so ...

  - Modify or create the file `/etc/asterisk/res_snmp.conf` to add the following parameters:
    
    vi /etc/asterisk/res\_snmp.conf
    
    \[general\] subagent = yes enabled = yes

  - Modify the file `/etc/snmp/snmpd.conf` to add some parameters:
    
    /etc/snmp/snmpd.conf

exemple:

    # Acces to Asterisk snmp
    # Asterisk user
    createUser asteriskUser SHA "password" AES
    rwuser asteriskUser priv
    # Enable AgentX support
    master agentx
    agentXSocket /var/agentx/master
    # Set permissions on AgentX socket and containing
    # directory such that process in group 'asterisk'
    # will be able to connect
    agentXPerms  0660 0550 nobody asterisk

  - Download the following 2 files and place them into /usr/share/snmp/mibs (or mib2c-data):
    
    wget <https://wiki.asterisk.org/wiki/display/AST/Asterisk+MIB+Definitions> wget
    <https://wiki.asterisk.org/wiki/display/AST/Digium+MIB+Definitions>

  - Restart snmpd and asterisk server:
    
    /etc/init.d/snmpd restart /etc/init.d/asterisk restart

Here is an exemple of a command to check the snmp functionality:

    snmpwalk -v 3 -u asteriskUser -l authPriv -a SHA -A "password" -x AES -X "password" <xivo serveur IP> .1.3.6.1.4.1.22736

### Remote mode

1.  Commun

For any remote acces, you must create an Asterisk user:

    vi /etc/aserisk/manager.conf

example of user:

    [xivo_centreon_user]
    secret = centreon
    deny=0.0.0.0/0.0.0.0
    permit=127.0.0.1/255.255.255.0
    read = system,call,log,verbose,command,agent,user,dtmf
    write = system,call,log,verbose,command,agent,user,dtmf

2.  AMI

In te newly created user, add a *permit* line to allow the centreon server to conect to the AMI:

    vi /etc/aserisk/manager.conf

example:

    permit=10.30.2.32/255.255.255.0

3.  SSH

<!-- end list -->

  - Create a system user, *centreon* for exemple:
    
    useradd centreon passwd centreon

  - Echange ssh keys from the centreon server to the asterisk server (user *centreon* in our exemple):
    
    ssh-copy-id centreon@<asterisk server>

  - Push the script `/usr/lib/nagios/plugins/apps/voip/asterisk/remote/remote-script/asterisk_sendcommand.pm` to
    `/home/centreon/bin`:
    
    scp /usr/lib/nagios/plugins/apps/voip/asterisk/remote/remote-script/asterisk\_sendcommand.pm /home/centreon/bin/.

  - Push from the centreon server
    `/usr/lib/nagios/plugins/apps/voip/asterisk/remote/remote-script/asterisk_sendcommand.conf`or create it at
    `/home/centreon/bin/asterisk_centreon.conf` directly on the asterisk server

  - Copy the *user name* and the *secret* of the centreon user contained into `/etc/asterisk/manager.conf` to
    `/home/centreon/bin/asterisk_centreon.conf`:
    
    vi /home/centreon/bin/asterisk\_centreon.conf

add the line:

    xivo_centreon_user centreon

Warning: this file must contain only one line

Warning: the files `/home/centreon/bin/asterisk_centreon.conf` and `/home/centreon/bin/asterisk_centreon.conf` must be
executable and readable by the *centreon* user

