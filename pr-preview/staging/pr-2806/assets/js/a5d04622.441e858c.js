"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[48309],{56080:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const m={id:"network-switchs-symbol-wing-snmp",title:"Symbol WiNG Switchs SNMP"},s=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",id:"integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",title:"Symbol WiNG Switchs SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp.md",tags:[],version:"current",frontMatter:{id:"network-switchs-symbol-wing-snmp",title:"Symbol WiNG Switchs SNMP"},sidebar:"pp",previous:{title:"Stormshield SSH",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-stormshield-ssh"},next:{title:"Teltonika SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-teltonika-snmp"}},g={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; statuses",id:"collected-metrics--statuses",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:d},u="wrapper";function N(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(u,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("strong",{parentName:"p"},"Symbol WiNG switch SNMP")," brings 1 host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Net-Symbol-Wing-SNMP-custom")),(0,a.kt)("p",null,"It brings the following service templates:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Systems"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-Wing-Systems-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic-Generic-Id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-Wing-Traffic-Generic-Id-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic-Generic-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-Wing-Traffic-Generic-Name-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic-Global"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-Wing-Traffic-Global-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Packet-Errors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-wing-Packet-Errors-Global-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-Wing-SNMP-Traffic-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor bandwidth utilization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Symbol-Wing-SNMP-Packet-Errors-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor errored and discarded packets")))),(0,a.kt)("h3",{id:"collected-metrics--statuses"},"Collected metrics & statuses"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Systems",label:"Systems",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"devices.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total devices"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"core"),"#cpu.utilization.1m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cpu usage for 1m"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"core"),"#cpu.utilization.5m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cpu usage for 5m"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"core"),"#cpu.utilization.15m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cpu usage for 15m"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"memory"),"#device.memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Used memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"memory"),"#device.memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"memory"),"#device.memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of used memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bits/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bits/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.in.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.in.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.out.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.out.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface."),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Configure SNMP on your Symbol WiNG device."),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The target device must be reachable from the Centreon Poller on the UDP/161 SNMP\nport."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Symbol-Wing-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG switch SNMP")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Symbol-Wing-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG switch SNMP")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-switchs-symbol-wing-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG switch SNMP")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," and ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("strong",{parentName:"li"},"Net-Symbol-Wing-SNMP-custom")," template to the host.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_symbol_wing.pl \\\n    --plugin=network::symbol::wing::snmp::plugin \\\n    --mode=systems \\\n    --hostname='10.0.0.1' \\\n    --snmp-community='my-snmp-community' \\\n    --snmp-version='2c' \\\n    --filter-name='' \\\n    --warning-cpu-utilization-1m='' \\\n    --critical-cpu-utilization-1m='' \\\n    --warning-cpu-utilization-5m='80' \\\n    --critical-cpu-utilization-5m='90' \\\n    --warning-cpu-utilization-15m='' \\\n    --critical-cpu-utilization-15m='' \\\n    --warning-memory-usage='' \\\n    --critical-memory-usage='' \\\n    --warning-memory-usage-free='' \\\n    --critical-memory-usage-free='' \\\n    --warning-memory-usage-prct='' \\\n    --critical-memory-usage-prct='' \\\n    --warning-devices-total='' \\\n    --critical-devices-total='' \n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: total devices: %s %.2f %% (1m) %.2f %% (5m) %.2f %% (15m)    | 'devices.total.count'=1;;;0; 'cpu.utilization.1m.percentage'=1%;;;0;100 'cpu.utilization.5m.percentage'=3%;80;90;0;100 'cpu.utilization.15m.percentage'=20%;;;0;100 'device.memory.usage.bytes'=8000B;;;0; 'device.memory.free.bytes'=192B;;;0; 'device.memory.usage.percentage'=99%;;;0;100 \n")),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if the CPU was reported as over 80% during the last 5 minutes\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-cpu-utilization-5m='80'"),") and a CRITICAL alarm if over\n90% during the last 5 minutes (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-cpu-utilization-5m='90'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_symbol_wing.pl \\\n    --plugin=network::symbol::wing::snmp::plugin \\\n    --mode=systems \\\n    --help\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_symbol_wing.pl \\\n    --plugin=network::symbol::wing::snmp::plugin \\\n    --list-mode \n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\non the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"dedicated page"),"."))}N.isMDXComponent=!0}}]);