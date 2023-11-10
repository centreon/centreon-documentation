"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46674],{67643:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"network-firewalls-paloalto-standard-ssh",title:"Palo Alto firewall SSH"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",id:"integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",title:"Palo Alto firewall SSH",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh.md",tags:[],version:"current",frontMatter:{id:"network-firewalls-paloalto-standard-ssh",title:"Palo Alto firewall SSH"},sidebar:"pp",previous:{title:"Palo Alto firewall SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-snmp"},next:{title:"Patton SmartNode SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-patton-smartnode-snmp"}},k={},c=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery Rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host Configuration",id:"host-configuration",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I have that error message: <code>UNKNOWN: Command error: Host key verification failed.</code>. What does it mean ?",id:"i-have-that-error-message-unknown-command-error-host-key-verification-failed-what-does-it-mean-",level:3}],u={toc:c},g="wrapper";function N(t){var{components:e}=t,a=s(t,["components"]);return(0,n.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Centreon Monitoring Connector includes monitoring of the system, interfaces, licenses, ipsec, high availability between nodes and hardware components using system commands."),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery Rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-PaloAlto-Standard-SNMP-Packet-Errors-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor errors and discards")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-PaloAlto-Standard-SNMP-Traffic-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor status and bandwidth utilization")))))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Environnement",label:"Environnement",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature of the different sensors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hardware.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Voltage of the different sensors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,n.kt)(l.Z,{value:"HA",label:"HA",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sync status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA Sync status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"member status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA member status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA Link status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface operationnal and high availability state"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"IPSec",label:"IPSec",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tunnels.ipsec.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of ipsec tunnels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Licence validity check of enabled features Sync status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.antivirus.lastupdate.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last antivirus update"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.threat.lastupdate.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last threat update"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.sessions.traffic.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of traffic sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.sessions.total.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of active sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"In order to work, the Plugin requires an SSH connection between the Poller and the Palo Alto firewall.\nThe remote user must have enough privileges to execute system commands. "),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Palo Alto firewall SSH")," Monitoring Connector"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-firewalls-paloalto-standard-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Palo Alto firewall SSH")," Monitoring Connector")))),(0,n.kt)("h2",{id:"host-configuration"},"Host Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"Net-PaloAlto-Standard-SSH-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Three SSH backends are available to connect to the remote server: ",(0,n.kt)("em",{parentName:"p"},"sshcli"),", ",(0,n.kt)("em",{parentName:"p"},"plink")," and ",(0,n.kt)("em",{parentName:"p"},"libssh")," which are detailed below.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cannot be used with backend. Only ssh key authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used)."))),(0,n.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used)."))),(0,n.kt)(l.Z,{value:"libssh backend (default)",label:"libssh backend (default)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"With that backend, you do not have to validate the target server fingerprint manually."))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and run the following command :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \\\n    --plugin=network::paloalto::ssh::plugin \\\n    --mode=environment \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=sshcli \\\n    --component='.*' \\\n    --verbose\n")),(0,n.kt)("p",null,"Which output something similar to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 12 components are ok [4/4 psus, 4/4 temperatures, 4/4 voltages].\nChecking power supplies\nPower supply 'Power Supply A1' status is normal [instance: 1].\nPower supply 'Power Supply B1' status is normal [instance: 2].\nPower supply 'Power Supply A2' status is normal [instance: 1].\nPower supply 'Power Supply B2' status is normal [instance: 2].\nChecking temperatures\nTemperature sensor on slot 1' temperature is 69C [instance: 18.1].\nTemperature sensor on slot 2' temperature is 59C [instance: 40.1].\nTemperature sensor on slot 3' temperature is 57C [instance: 89.1].\nTemperature sensor on slot 4' temperature is 67C [instance: 89.2].\nChecking voltages\n1,500V voltage sensor, slot 1' voltage is 1,732 V [instance: 18.1].\n1,800V voltage sensor, slot 1' voltage is 1,072 V [instance: 18.2].\n1,500V voltage sensor, slot 2' voltage is 1,732 V [instance: 89.1].\n1,800V voltage sensor, slot 2' voltage is 1,072 V [instance: 89.2].\n")),(0,n.kt)("p",null,"The above command gets the state of the Palo Alto firewall environment (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=environment"),").\nIt uses a SSH username ",(0,n.kt)("em",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"), a SSH password ",(0,n.kt)("em",{parentName:"p"},"centreon-password")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),"),\nuses a SSH backend ",(0,n.kt)("em",{parentName:"p"},"sshcli")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='sshcli'"),") and it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.81"),")."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," options:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \\\n    --plugin=network::paloalto::ssh::plugin \\\n    --mode=environment \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"i-have-that-error-message-unknown-command-error-host-key-verification-failed-what-does-it-mean-"},"I have that error message: ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". What does it mean ?"),(0,n.kt)("p",null,"It means you haven't manually validated the target server fingerprint with ",(0,n.kt)("inlineCode",{parentName:"p"},"libssh")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"plink")," on the Centreon Poller."))}N.isMDXComponent=!0}}]);