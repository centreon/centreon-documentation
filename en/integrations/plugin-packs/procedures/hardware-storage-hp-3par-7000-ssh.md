---
id: hardware-storage-hp-3par-7000-ssh
title: HP 3PAR 7000
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `DEPRECATED` | Oct  2 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Hp-3par-7000-Ssh
```

### Configure SSH connection

On each needed poller follow this steps:

a. Login with 'centreon-engine' user:

    # su - centreon-engine

b. If SSH doesn't exist, generate SSH key using following command (press ENTER for each question):

    $ ssh-keygen

c. Get generated SSH public key

    $ vi ~/.ssh/id_rsa.pub

d. Connect to your HP 3PAR equipment using SSH with administrator account and copy centreon-engine public key:

    3PAR01 cli% setsshkey
    Please enter the SSH public key below.  When finished, press enter twice.
    The key is usually long.  It's better to copy it from inside an editor
    and paste it here.  (Please make sure there are no extra blanks.)
    The maximum number of characters used to represent the SSH key
    (including the "from" option, key type, and additional comments) is 4095.
    
    ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAydSr8dvdf+N5apCrij3eom6a6gMZUibiBp6GUurADktPtm1jBdbZ2GVhnwiaeUqiwgxsBSjiGCKRlpIN/zBzM59li4k+fbhyO7SzXfB3IV3ueSVKlrVljyHQL6GqUjj9opxCg8jyKerCx6iTyqUvIJ4zmhaJXQAzxQFE7YLiuaaNN9ylH1z9ebuMZZKUh0gpXNT3ID4Ea+In5CAoPopwF50EdAIZ4QkS1EibhI9Lar8GqXMyHTNR/ZapvZ/KpI3lhduLT5OJ2QMbBzVrQFKXiLbYnU2AASYyFsQQC+7YASFwIEQ6D3sp0Wg8G1Dw/jmM01CsqthTm7j1Mw070OuJSw== centreon-engine@myserver
    
    SSH public key successfully set.
    
    3PAR01 cli%

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                              |
| ----------------------- | ---------------------------------- |
| Host name               | Name of the host                   |
| Alias                   | Host description                   |
| IP                      | Host IP Address                    |
| Monitored from          | Monitoring Poller to use           |
| Host Multiple Templates | HW-Storage-HP-3par-7000-SSH-custom |

Notice: In macro "SSHUSERNAME" define the administrator account used to copy public SSH key of centreon-engine user.

Click on the *Save* button.


