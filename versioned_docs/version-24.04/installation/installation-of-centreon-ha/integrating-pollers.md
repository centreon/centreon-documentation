---
id: integrating-pollers
title: Integrating new pollers in a Centreon-HA cluster
---

## Obtaining the central nodes' thumbprints

The Gorgone services of both central nodes will need to be authorized by the pollers' Gorgone services.

* First, obtain each central node's key:

```bash
wget -O /root/gorgone_key_thumbprint.pl  https://raw.githubusercontent.com/centreon/centreon-gorgone/master/contrib/gorgone_key_thumbprint.pl
```

```
perl /root/gorgone_key_thumbprint.pl --key-path /var/lib/centreon-gorgone/.keys/rsakey.priv.pem
```

The command output should look like this:

```text
2020-09-25 10:47:35 - INFO - File '/var/lib/centreon-gorgone/.keys/rsakey.priv.pem' JWK thumbprint: RsfNibuDdOvzwP75G72rpIKIG2nRhkyGQrQXE4pXa_s
```

* You must have two keys; one for each central node. Copy the last part of the printed lines (what is displayed after `JWK thumbprint:`) and keep it for [later](#configuring-gorgone-on-the-poller).

## Adding the Poller to the configuration

* Add your poller to the configuration "the standard way" [following these steps with the ZeroMQ protocol](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md). Make sure you declare the VIP as the address of the central server the poller will be attached to.

* You should now have overwritten the `/etc/centreon-gorgone/config.d/40-gorgoned.yaml` file, and it should contain lines like these:

```yml
    authorized_clients:
    - key: tRsFMBv9X3ScNFMwvG8D652nXMsgEYMb1qsJek-Mns8
```

## Configuring Gorgone on the poller

* You must now modify `/etc/centreon-gorgone/config.d/40-gorgoned.yaml` on the poller in order to have both central keys in this section:

```yml
    authorized_clients:
    - key: key_1_from_earlier
    - key: key_2_from_earlier
```

* Now restart Gorgone on the poller:

```bash
systemctl restart gorgoned
```

At this point, both your central nodes should be allowed to connect to your poller's Gorgone service and send configurations, retrieve statistics, restart services, etc.
