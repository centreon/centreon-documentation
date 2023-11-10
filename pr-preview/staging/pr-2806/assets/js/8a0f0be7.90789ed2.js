"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10591],{68191:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>k,default:()=>u,frontMatter:()=>m,metadata:()=>s,toc:()=>g});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"network-viptela-snmp",title:"Viptela SNMP"},k=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-viptela-snmp",id:"integrations/plugin-packs/procedures/network-viptela-snmp",title:"Viptela SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-viptela-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-viptela-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-viptela-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-viptela-snmp.md",tags:[],version:"current",frontMatter:{id:"network-viptela-snmp",title:"Viptela SNMP"},sidebar:"pp",previous:{title:"Versa SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-versa-snmp"},next:{title:"Watchguard",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-watchguard-snmp"}},d={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],N={toc:g},c="wrapper";function u(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(c,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},N,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Pack Viptela SNMP brings 1 host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Net-Viptela-SNMP-custom")),(0,n.kt)("p",null,"It brings the following Service Templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Control-Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Control-Connections-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Cpu-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Disk-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Gre-Tunnels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Gre-Tunnels-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Hardware-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Interfaces-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Memory-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Uptime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-Uptime-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-SNMP-Interface-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor utilization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Viptela-SNMP-Gre-Tunnel-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover GRE tunnels and monitor utilization")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Control-Connections",label:"Control-Connections",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.detected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections detected"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.down.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status down"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.connect.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status connect"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.handshake.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status handshake"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.trying.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status trying"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.challenge.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status challenge"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.challengeResp.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status challengeResp"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.challengeAck.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status challengeAck"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.up.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status up"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"control.connections.tearDown.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of control connections with status tearDown"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status for the control connection"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Disk",label:"Disk",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free disk"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Gre-Tunnels",label:"Gre-Tunnels",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gre_tunnels.detected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of GRE tunnels detected"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gre_tunnels.operational.up.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of GRE tunnels with status up"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gre_tunnels.operational.down.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of GRE tunnels with status down"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gre_tunnels.operational.invalid.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of GRE tunnels with status invalid"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status for the GRE tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"source_ip~dest_ip"),"#gre_tunnel.packets.in.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of incoming packets for the GRE tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"source_ip~dest_ip"),"#gre_tunnel.packets.out.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing packets for for the GRE tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the fan"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"led status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the LED"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nim status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the NIM"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pem status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the PEM"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pim status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the PIM"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"usb status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the USB"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"temperature status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of temperature probes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"probe_name"),"#hardware.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current temperature"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.error.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.discard.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.error.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.discard.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.buffer.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buffers memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.cached.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cached memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.uptime.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System uptime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,n.kt)("p",null,"To use this Pack, the SNMP service must be properly configured on your device."),(0,n.kt)("h3",{id:"network-flow"},"Network flow"),(0,n.kt)("p",null,"The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP\nport."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Viptela SNMP")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Viptela-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Viptela SNMP")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Viptela SNMP")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Viptela-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Viptela SNMP")," Centreon Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-viptela-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Viptela SNMP")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts")),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Viptela SNMP")," server settings"),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Net-Viptela-SNMP-custom")," template to apply to the Host")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'Configure your own SNMPv3 credentials combo')")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \\\n    --plugin=network::viptela::snmp::plugin \\\n    --mode=cpu \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-cpu-utilization='' \\\n    --critical-cpu-utilization='' \\\n    --verbose\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Cpu utilization: 95.00% | 'cpu.utilization.percentage'=95%;;;0;100\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \\\n    --plugin=network::viptela::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \\\n    --plugin=network::viptela::snmp::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\nin the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"dedicated page")))}u.isMDXComponent=!0}}]);