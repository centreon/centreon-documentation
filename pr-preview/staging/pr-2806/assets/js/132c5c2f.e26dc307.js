"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[41729],{77614:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>u});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"network-cisco-wap-snmp",title:"Cisco Wap SNMP"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-cisco-wap-snmp",id:"integrations/plugin-packs/procedures/network-cisco-wap-snmp",title:"Cisco Wap SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-cisco-wap-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-wap-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-cisco-wap-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-cisco-wap-snmp.md",tags:[],version:"current",frontMatter:{id:"network-cisco-wap-snmp",title:"Cisco Wap SNMP"},sidebar:"pp",previous:{title:"Cisco Waas",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-cisco-waas-snmp"},next:{title:"Cisco WLC SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-cisco-wlc-snmp"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test my plugin and what do the main parameters stand for ?",id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:u},k="wrapper";function N(t){var{components:e}=t,n=c(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cisco  is a provider of network solutions."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Cisco Wap SNMP")," relies on the SNMP protocol to query and collect the status and metrics of the Cisco Wireless Access Point equipment."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client"),(0,a.kt)("li",{parentName:"ul"},"CPU"),(0,a.kt)("li",{parentName:"ul"},"Interfaces"),(0,a.kt)("li",{parentName:"ul"},"Memory"),(0,a.kt)("li",{parentName:"ul"},"Uptime"),(0,a.kt)("li",{parentName:"ul"},"Virtual access point")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Clients-1",label:"Clients",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clients.connected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of clients connected on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"radio.clients.connected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of clients connected radio channel of the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(i.Z,{value:"CPU",label:"CPU",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of CPU utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Clients-2",label:"Clients",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clients.connected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of clients connected on the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"radio.clients.connected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of clients connected radio channel of the access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.uptime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Duration of system has been working and available."),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(i.Z,{value:"Virual Access Point",label:"Virual Access Point",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"virtual_access_points.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of virtual access point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The SNMP agent must be configured and running. Please refer to the manufacturer documentation to achieve this.\nThe Centreon Poller must be able to reach the UDP/161 SNMP port of the Cisco Wap device."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Cisco Wireless Access Point equipments:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Wap-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Cisco Wap SNMP")," Monitoring Connector through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Cisco Wireless Access Point equipments :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Wap-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-cisco-wap-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Cisco Wap SNMP")," Monitoring Connector through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("p",null,"Create your Host and apply the ",(0,a.kt)("em",{parentName:"p"},"Net-Cisco-Wap-SNMP-custom")," Host Template. You must set SNMP Community and Version in the dedicated fields of the Host Form. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for-"},"How to test my plugin and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the plugin is installed, you can test it logging into the CLI with the centreon-engine user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl --plugin=network::cisco::wap::snmp::plugin \\\n    --mode=clients \\    \n    --hostname=10.30.2.11 \\\n    --snmp-community=centreon-cisco-wap \\\n    --snmp-version=2c \\\n    --warning-clients-connected=90 \\\n    --critical-clients-connected=100 \\\n    --verbose\n  \nOK: clients connected: 1 | 'clients.connected.count'=1;0:90;0:100;0; 'wlan0#radio.clients.connected.count'=0;;;0; 'wlan1#radio.clients.connected.count'=1;;;0;\nRadio interface 'wlan0' clients connected: 0\nRadio interface 'wlan1' clients connected: 1\n")),(0,a.kt)("p",null,"The command above collects the number of clients connected to the Cisco Access Point (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=clients"),"). Mandatory options are the IP/FQDN of the device\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),") and the SNMP version you have set on your appliance (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='centreon-cisco-wap'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if the number of clients connected to the device is greater than 90 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-clients-connected='90'"),") and\na CRITICAL alarm if the number of clients connected to the device is greater than 100 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-clients-connected='100'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl \\\n    --plugin=network::cisco::wap::snmp::plugin \\\n    --mode=clients \\\n    --help\n")),(0,a.kt)("p",null,"All plugin modes can be listed with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl \\\n    --plugin=network::cisco::wap::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this error, it may indicate that some flows are blocked between the Centreon Poller and the Cisco devices.\nIt can also mean that the Centreon Host Configuration doesn't reflect the SNMP configuration on Cisco side (version, community). "),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"You may get this error when SNMP privileges are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the Cisco entreprise SNMP branch: .1.3.6.1.4.1.9.6.1.104\nYou can use the snmpwalk utilities which is provided through net-snmp package."))}N.isMDXComponent=!0}}]);