	---
	id: virtualization-vmware2-esx
	title: VMware ESX
	---
	
	## Overview
	
	VMware is an software compagny based in USA. VMware provides cloud computing and virtualization software and services.
	
	## Plugin-Pack Assets
	
	### Monitored Objects
	
	VMware ESX/ESXi server via VMware Perl SDK.
	
	## Collected Metrics
	
	In addition to modes and metrics described here, it is also possible to monitor the following indicators: 
	
	* Alarms : See the alarms defined in your esx
	* Datastores Latency : Check latency of your's datastore
	* Maintenance : Status/Maintenance of ESX 
	* Service : Check service
	* Time : Check time 
	* Traffic : Incoming/Outcoming traffic going through the interface
	* Uptime : Duration of last start
	
	### Discovery rules
	
	<!--DOCUSAURUS_CODE_TABS-->
	
	<!--Host-->
	
	| Rule name                                  | Description                                                   |
	| :----------------------------------------- | :------------------------------------------------------------ |
	| Virt-VMWare2-Esx-HostDiscovery             | Discover Vmware esx based connector vmware and SDK            |
	
	<!--Services-->
	
	| Rule name                                    | Description                                    |
	| :------------------------------------------- | :--------------------------------------------- |
	| Virt-VMWare2-Esx-Datastores-Latency-Name     | Discover the Datastores and monitor latency    |
	| Virt-VMWare2-Esx-Nics-Traffic-Name           | Discover the traffic NIC and monitor           |
	
	<!--END_DOCUSAURUS_CODE_TABS-->
	
	## Monitored Metrics 
	
	<!--Cpu-->
	
	| Metric name                          | Description                                |
	| :----------------------------------- | :----------------------------------------- |
	| host.cpu.utilization.percentage      | CPU host utilization. Unit : %             |
	| host.core.cpu.utilization.percentage | Per Core host CPU utilization. Unit : %    |
	| host.cpu.utilization.mhz             | CPU host utilization. Unit : mhz           |
	| cpu.usage.average                    | CPU usage average                          |
	| cpu.usagemhz.average                 | CPU usage average. Unit: mhz               | 
	
	<!--Vm-count-->
	
	| Metric name                      | Description                                   |
	| :------------------------------- | :-------------------------------------------- |
	| host.vm.poweredon.current.count  | Host Virtual Machine power on. Unit : count   |
	| host.vm.poweredoff.current.count | Host Virtual Machine power down. Unit : count |
	| host.vm.suspended.current.count  | Host Virtual Machine suspended. Unit : count  |
	
	<!--Swap-->
	
	| Metric name                        | Description               |
	| :--------------------------------- | :------------------------ |
	| host.swap.in.usage.bytespersecond  | Used swap in. Unit: B/s   |
	| host.swap.out.usage.bytespersecond | Used swap out. Unit: B/s  |
	
	<!--Status-->
	
	| Metric name       | Description   |
	| :---------------- | :------------ |
	| status            | Status of esx |
	
	<!--Memory-->
	
	| Metric name                | Description                                 |
	| :------------------------- | :------------------------------------------ |
	| host.memory.free.bytes     | Memory free on the device. Unit : Bytes     |
	| host.memory.usage.bytes    | Memory usage on the device. Unit : Bytes    |
	| host.memory.overhead.bytes | Memory overhead on the device. Unit : Bytes |
	| host.memory.state.count    | Memory state on the device. Unit : Bytes    |
	| mem.consumed.average       | Memory average consumed on the device       |
	| mem.overhead.average       | Memory average overhead on the device       |
	
	<!--Healt-->
	
	| Metric name                        | Description             |
	| :--------------------------------- | :---------------------- |
	| host.health.problems.current.count | Health problems current |
	| host.health.yellow.current.count   | Health Yellow current   |
	| host.health.red.current.count      | Health red current      |
	
	
	## Installation
	
	<!--DOCUSAURUS_CODE_TABS-->
	
	<!--Online IMP Licence & IT-100 Editions-->
	
	1. Install the Vmware2 Connector Centreon Plugin on every poller expected to monitor the devices: 
	
	```bash
	yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
	```
	
	2. Install the 'Vmware ESX' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 
	
	<!--Offline IMP License-->
	
	1. Install the Vmware ESX Centreon Plugin on every poller expected to monitor the devices:
	
	```bash
	yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
	```
	
	2. Install the Centreon Plugin-Pack RPM: 
	
	```bash
	yum install centreon-pack-virtualization-vmware2-esx
	```
	
	3. Install the 'Vmware ESX' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 
	
	<!--END_DOCUSAURUS_CODE_TABS-->
	
	## Prerequisistes
	
	Install this daemon on each needed poller:
	
	```yum install centreon-plugin-Virtualization-VMWare-daemon```
	
	To configure the access to your infrastructure, edit the
	"/etc/centreon/centreon\_vmware.pm" configuration file:
	
	```perl
	%centreon_vmware_config = (
	    vsphere_server => {
	        default => {
	            url => 'https://<ip_hostname>/sdk',
	            username => '<username>',
	            password => '<password>'
	        }
	    }
	);
	
	1;
	```
	
	Make sure to replace variables with needed information:
	
	- _ip\_hostname_: IP address or hostname of the vCenter or ESX (if standalone),
	- _username_: username with at least "read only" access to the vCenter or ESX,
	- _password_: password of the username.
	
	You can configure multiple vCenter / vSphere / ESX connections using this
	structure:
	
	```perl
	%centreon_vmware_config = (
	    vsphere_server => {
	        default => {
	            url => 'https://<ip_hostname>/sdk',
	            username => '<username>',
	            password => '<password>'
	        },
	        'my_other_vcenter' => {
	            url => 'https://<ip_hostname>/sdk',
	            username => '<username>',
	            password => '<password>'
	        },
	    },
	    port => 5700
	);
	
	1;
	```
	
	Each entry is called a container. You need at least a "default" entry.
	
	> You can also define the "port" attribute to change listening port.
	
	Then start the daemon and make sure it is configured to start at server boot:
	
	```bash
	systemctl start centreon_vmware
	systemctl enable centreon_vmware
	```
	
	Make sure that the daemon configuration works fine by looking for errors in
	"/var/log/centreon/centreon\_vmware.log".

    ## Configuration

	Adding a new host into Centreon, apply the relevant host template matching your instance/cluster type. All of the host templates begin with *Virt-VMWare2-ESX-*. Once the template set, you have to set values.


	### 

	| Mandatory   | Name                       | Description                                            |
	| :---------- | :------------------------- | :----------------------------------------------------- |
	| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  | 
    | X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
    | X           | CENTREONVMWAREPORT         | By default: 5700                                       |
	|             | ESXNAME                    | Esx name use                                           |
	|             | CENTREONVMWAREEXTRAOPTIONS | Customize it with your own if needed                   |
	
	## FAQ
	
	### How do I run my plugin through the CLI and what do the main parameters stand for ?
	
	Once you've installed the plugin, you can test it logging with centreon-engine user:
	
	```bash
	/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl
		--plugin=apps::vmware::connector::plugin
		--mode=cpu-host
		--custommode=connector
		--connector-hostname='localhost'
		--connector-port='5700'
		--container='default' 
		--esx-hostname=''
		--unknown-status='%{status} !~ /^connected$/i'
		--warning-status=''
		--critical-status=''
		--warning-total-cpu=''
		--critical-total-cpu=''
		--warning-total-cpu-mhz=''
		--critical-total-cpu-mhz=''
		--warning-cpu=''
		--critical-cpu='' 
	```
	
	This check monitors CPU utilization (```--mode=cpu-host```) of a ESX. The hostname to use connector vmware and is config file is localhost (```--mode=localhost```) The port is 5700 (```connector-port=5700```)
	
	All available modes with the plugin can be displayed with: 
	
	```bash
	/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	    --plugin=apps::vmware::connector::plugin \
	    --list-mode
	```
	
	The available options for a mode can be displayed using the ```--help``` parameter: 
	
	```bash
	/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	    --plugin=apps::vmware::connector::plugin \
	    --mode=cpu-host  \
	    --help
	```
	
	### Error Cannot find 'HostSuystem' object
	
	Check user can read ESX information
	
	### UNKNOWN: Cannot get counter 'net.received.average' for the sampling period '300' (counter level: 2, sampling level: 1) 
	
	Some counters like 'mem.state.latest' and 'net.received.average' need a configuration to 2 for the VCenter level.
	
	### Uninitialized value in memory-host mode
	
	You can following error in log : 
	```bash
    Use of uninitialized value within %mapping_state in sprintf at /root/centreon-vmware-master/centreon/vmware/cmdmemhost.pm line 156
    ```
	
	### time-host - threshold not working
	
	You need to set an interval like this. Example : 
	```bash
    --warning-time=-15:15 --critical-time=-30:30
    ``` 
