"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84447],{89935:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>N,frontMatter:()=>m,metadata:()=>s,toc:()=>g});a(67294);var r=a(3905),n=a(51715),i=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const m={id:"network-fortinet-fortiadc-snmp",title:"Fortinet FortiADC SNMP"},c=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",id:"integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",title:"Fortinet FortiADC SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp.md",tags:[],version:"current",frontMatter:{id:"network-fortinet-fortiadc-snmp",title:"Fortinet FortiADC SNMP"},sidebar:"pp",previous:{title:"Fiberstore SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-fiberstore-snmp"},next:{title:"Fortinet FortiAuthenticator SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-fortinet-fortiauthenticator-snmp"}},u={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:g},k="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,r.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){o(t,e,a[e])}))}return t}({},d,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Pack Fortinet FortiADC SNMP brings 1 host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Net-Fortinet-Fortiadc-SNMP-custom")),(0,r.kt)("p",null,"It brings the following Service Templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Cpu-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Hardware-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Interfaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Interfaces-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Memory-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Security"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Security-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Uptime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Uptime-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Virtual-Servers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-Virtual-Servers-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-SNMP-Interface-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor utilization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Fortinet-Fortiadc-SNMP-Virtual-Server-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover network virtual servers and monitor utilization")))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.2s.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last 2 seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last minute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last 5 minutes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"core_name"),"#core.cpu.utilization.2s.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU Core utilization for the last 2 seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"core_name"),"#core.cpu.utilization.1m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU Core utilization for the last minute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"core_name"),"#core.cpu.utilization.5m.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU Core utilization for the last 5 minutes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the fan"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"fan_name"),"hardware.fan.speed.rpm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current fan speed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"temperature status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of temperature probes (cpu and device)"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"probe_name"),"#hardware.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current temperature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,r.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.error.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.discard.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.error.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.discard.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(i.Z,{value:"Security",label:"Security",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ddos status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current DDoS attack status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(i.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.uptime.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"System uptime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,r.kt)(i.Z,{value:"Virtual-servers",label:"Virtual-servers",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"virtual_servers.detected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of virtual servers detected"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"virtual_servers.healthy.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of virtual servers with status healthy"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status for the virtual server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"vdom_name~vs_name"),"#virtual_server.connections.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Concurrent connection rate for the virtual server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"vdom_name~vs_name"),"#virtual_server.throughput.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throughput rate for the virtual server"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bps")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,r.kt)("p",null,"To use this Pack, the SNMP service must be properly configured on your device:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.fortinet.com/product/fortiac/"},"https://docs.fortinet.com/product/fortiac/"))),(0,r.kt)("h3",{id:"network-flow"},"Network flow"),(0,r.kt)("p",null,"The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP\nport."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," Centreon Pack on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," Centreon Pack RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-fortinet-fortiadc-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," Centreon Pack on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts")),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," server settings"),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Net-Fortinet-Fortiadc-SNMP-custom")," template to apply to the Host")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Default: 'Configure your own SNMPv3 credentials combo')")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \\\n    --plugin=network::fortinet::fortiadc::snmp::plugin \\\n    --mode=cpu \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-average-5m='' \\\n    --critical-average-5m='' \\\n    --verbose\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 16 CPU(s) average usage is 0.81 % (2s) 0.00 % (1m) 0.12 % (5m) - All core cpu are ok | 'cpu.utilization.2s.percentage'=0.81%;;;0;100 'cpu.utilization.1m.percentage'=0.00%;;;0;100 'cpu.utilization.5m.percentage'=0.12%;;;0;100 'Core 0#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 0#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 0#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 1#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.5m.percentage'=2.00%;;;0;100 'Core 10#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 10#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 10#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 11#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 12#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 13#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 14#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 15#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 2#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 3#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 4#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 6#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 8#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.5m.percentage'=0.00%;;;0;100\nCPU '1' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '2' usage 1.00 % (2s) 0.00 % (1m) 2.00 % (5m)\nCPU '11' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '12' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '13' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '14' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '15' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '16' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '3' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '4' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '5' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '6' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '7' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '8' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '9' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '10' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \\\n    --plugin=network::fortinet::fortiadc::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \\\n    --plugin=network::fortinet::fortiadc::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\nin the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"dedicated page")))}N.isMDXComponent=!0}}]);