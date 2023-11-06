"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[57519],{75140:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>m,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"network-cisco-firepower-snmp",title:"Cisco Firepower SNMP"},s=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-cisco-firepower-snmp",id:"integrations/plugin-packs/procedures/network-cisco-firepower-snmp",title:"Cisco Firepower SNMP",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-cisco-firepower-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-firepower-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-cisco-firepower-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-cisco-firepower-snmp.md",tags:[],version:"current",frontMatter:{id:"network-cisco-firepower-snmp",title:"Cisco Firepower SNMP"},sidebar:"pp",previous:{title:"Cisco Firepower Management Console Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-cisco-firepower-fmc-restapi"},next:{title:"Cisco IronPort",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-cisco-ironport-snmp"}},u={},d=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for ?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:d},k="wrapper";function f(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(k,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The plugin-pack Cisco Firepower including monitoring of CPU, Faults, Hardware, Interfaces and Memory."),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"securitymodule"),"#cpu.utilization.1m.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"securitymodule"),"#cpu.utilization.5m.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"securitymodule"),"#cpu.utilization.15m.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(i.Z,{value:"Faults",label:"Faults",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fault status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bank status, possible to set string-based alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"faults.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of total faults"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"faults.info.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of informational faults"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"faults.minor.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of minor faults"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"faults.warning.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of warning faults"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"faults.major.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of major faults"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"faults.critical.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of critical faults"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interfacename"),"#interface.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interfacename"),"#interface.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interfacename"),"#interface.packets.in.error.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interfacename"),"#interface.packets.in.discard.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interfacename"),"#interface.packets.out.error.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interfacename"),"#interface.packets.out.discard.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,n.kt)("p",null,"It is possible to filter on the name of an interface using a REGEXP of the form ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--interface='^eth1/0/1$' --name"),"]",".")),(0,n.kt)(i.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"chassis status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the chassis"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.chassis.input.power.watt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input power of the chassis"),(0,n.kt)("td",{parentName:"tr",align:"left"},"W")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.chassis.output.power.watt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output power of the chassis"),(0,n.kt)("td",{parentName:"tr",align:"left"},"W")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpuunit status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the cpu unit"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.cpuunit.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the cpu unit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the fan"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.fan.speed.rpm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Speed of the fan"),(0,n.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fanmodule status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the fan module"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.fanmodule.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature of the fan module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memoryunit status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the memory unit"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.memoryunit.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature of the memory unit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"psu status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the power supply"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"dn"),"#hardware.powersupply.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature of the power supply"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,n.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"securitymodule"),"#memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"securitymodule"),"#memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"securitymodule"),"#memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your Cisco Firepower, the SNMP must be configured."),(0,n.kt)("p",null,"E.g: ",(0,n.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html?dtid=osscdc000283"},"https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html?dtid=osscdc000283")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Firepower-Snmp.noarch\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Cisco Firepower SNMP")," Monitoring Connector"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Firepower-Snmp.noarch\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-cisco-firepower-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Cisco Firepower SNMP")," Monitoring Connector")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"Net-Cisco-Firepower-SNMP-custom")," Host Template"),(0,n.kt)("li",{parentName:"ul"},"Fill the SNMP Version and Community fields according to the device's configuration")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for-"},"How to test the Plugin and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \\\n    --plugin=network::cisco::firepower::fxos::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='cisco_ro' \\\n    --warning-average-5m='60' \\\n    --critical-average-5m='75' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Security module 'sec-svc/slot-1' CPU average usage: 42.00 % (1m), 42.00 % (5m), 42.00 % (15m) | 'sec-svc/slot-1#cpu.utilization.1m.percentage'=42.00%;;;0;100 'sec-svc/slot-1#cpu.utilization.5m.percentage'=42.00%;;;0;100 'sec-svc/slot-1#cpu.utilization.15m.percentage'=42.00%;;;0;100\nSecurity module 'sec-svc/slot-1' CPU average usage: 42.00 % (1m), 42.00 % (5m), 42.00 % (15m)\n")),(0,n.kt)("p",null,"The command above monitors a Cisco Firepower cpu usage (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=network::cisco::firepower::fxos::snmp::plugin --mode=cpu"),") identified"),(0,n.kt)("p",null,"by the IP address ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='cisco_ro'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the CPU 5min average used to raise over 60% of the CPU capacity\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-average-5m='60'"),") and a CRITICAL alarm over 75% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-average-5m='75'"),")."),(0,n.kt)("p",null,"For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \\\n    --plugin=network::cisco::firepower::fxos::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"If you get this message, you're probably facing one of these issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured "),(0,n.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,n.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"This error message often refers to the following issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Cisco Firepower device doesn't support the MIB used by the plugin"),(0,n.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch Cisco Firepower: .1.3.6.1.4.1.9.9.826")))}f.isMDXComponent=!0}}]);