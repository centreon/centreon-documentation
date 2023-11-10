"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[61766],{98470:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>k});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"network-versa-snmp",title:"Versa SNMP"},c=void 0,d={unversionedId:"integrations/plugin-packs/procedures/network-versa-snmp",id:"integrations/plugin-packs/procedures/network-versa-snmp",title:"Versa SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-versa-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-versa-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-versa-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-versa-snmp.md",tags:[],version:"current",frontMatter:{id:"network-versa-snmp",title:"Versa SNMP"},sidebar:"pp",previous:{title:"Versa Director Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-versa-director-restapi"},next:{title:"Viptela SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-viptela-snmp"}},m={},k=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery Rules",id:"discovery-rules",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for ?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3}],g={toc:k},u="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(u,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Versa Networks provides secure cloud IP architecture.\nIn particular, SD-WAN that aims to phase out conventional WAN infrastructures."),(0,n.kt)("p",null,"The Centreon Monitoring Connector relies on the SNMP protocol to query and collect status and metrics of the Versa equipments."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPE"),(0,n.kt)("li",{parentName:"ul"},"Branch"),(0,n.kt)("li",{parentName:"ul"},"Gateway")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery Rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Versa-SNMP-Ipsec-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover IPSec tunnels and monitor traffic and packets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Versa-SNMP-Sdwan-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover SDWAN rules and monitor traffic/hits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Versa-SNMP-Traffic-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor bandwidth utilization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-Versa-SNMP-Packet-Errors-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor packet errors/discard")))))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Bgp-Peers",label:"Bgp-Peers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the peers"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"peer.update.last.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last update by peer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(i.Z,{value:"Devices",label:"Devices",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"device.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Device CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"device.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Device Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"device.sessions.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of actives sessions on the device"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"device.sessions.active.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of active sessions on the device"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"device.sessions.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of failed sessions on the device"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"device.sessions.failed.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of failed sessions on the device"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.errors.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming errored packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.errors.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing errored packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.discards.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming discarded packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.discards.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing discarded packets going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(i.Z,{value:"Ipsec",label:"Ipsec",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ipsec.packets.in.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of incoming packets trough the IPsec tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ipsec.traffic.in.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the IPsec tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ipsec.packets.out.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing packets trough the IPsec tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ipsec.traffic.out.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outcoming taffic going through the IPsec tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ipsec.packets.invalid.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of invalid packets through the IPsec tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ipsec.ike.disconnected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number of IKE disconnect by IPsec tunnel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(i.Z,{value:"Qos-Policy",label:"Qos-Policy",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"by QoS policy")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qos.policy.hit.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of hits by QoS policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qos.policy.sessions.deny.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of sessions denied by QoS Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qos.policy.packets.dropped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of packets dropped by Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qos.policy.traffic.dropped.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Traffic dropped by Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qos.policy.packets.forwarded.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of packets forwarded by Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qos.policy.traffic.forwarded.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Traffic forwarded by QoS Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"by Application Qos Policy")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appqos.policy.hit.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of hits by Application Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appqos.policy.packets.dropped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of packets dropped by Application Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appqos.policy.traffic.dropped.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Traffic dropped by Application Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appqos.policy.packets.forwarded.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of packets forwarded by Application Qos Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appqos.policy.traffic.forwarded.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Traffic forwarded by QoS Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,n.kt)(i.Z,{value:"Sdwan",label:"Sdwan",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sdwan.policy.hit.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of hits by SDWAN policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sdwan.policy.packets.in.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of incoming packets by SDWAN policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sdwan.policy.traffic.in.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through by SDWAN policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sdwan.policy.packets.out.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing packets by SDWAN policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sdwan.policy.traffic.out.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outcoming traffic going through by SDWAN Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"device-configuration"},"Device Configuration"),(0,n.kt)("p",null,"The SNMP agent must be configured and running on the Versa Networks device.\nPlease refer to the manufacturer documentation to achieve this."),(0,n.kt)("h3",{id:"network-flows"},"Network flows"),(0,n.kt)("p",null,"The Centreon Poller must be able to reach the UDP/161 SNMP port of the Versa Networks device."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor\nVersa Networks devices:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Versa-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Versa SNMP")," Monitoring Connector\nthrough ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor\nVersa Networks devices:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Versa-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-versa-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Versa SNMP")," Monitoring Connector\nthrough ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"Net-Versa-SNMP-Custom")," Host Template"),(0,n.kt)("li",{parentName:"ul"},"Fill the SNMP Version and Community fields according to the device's configuration")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for-"},"How to test the Plugin and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_versa_snmp.pl \\\n  --plugin=network::versa::snmp::plugin \\\n  --mode=devices \\\n  --hostname=10.0.0.1 \\\n  --snmp-version='2c' \\\n  --snmp-community='mysnmpcommunity' \\\n  --warning-sessions-active-prct='80' \\\n  --critical-sessions-active-prct='90' \\\n  --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Device '0' cpu load: 8.00 %, memory used: 10.00%, sessions active: 0 (1000000), sessions failed: 0 (1000000) |\n'0#device.cpu.utilization.percentage'=8.00%;;;0;100 '0#device.memory.usage.percentage'=10.00%;;;0;100 \n'0#device.sessions.active.count'=0;;;0;1000000 '0#device.sessions.active.percentage'=0.00%;0:80;0:90;0;100\n'0#device.sessions.failed.count'=0;;;0;1000000 '0#device.sessions.active.percentage'=0.00%;;;0;100\nDevice '0' cpu load: 8.00 %, memory used: 10.00%, sessions active: 0 (1000000), sessions failed: 0 (1000000)\n")),(0,n.kt)("p",null,"The command above monitors a Versa Networks device usage (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=network::versa::snmp::plugin --mode=devices"),") identified"),(0,n.kt)("p",null,"by the IP address ",(0,n.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='mysnmpcommunity'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the active sessions used raise over 80% of the device session capacity\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-sessions-active-prct='80'"),") and a CRITICAL alarm over 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-sessions-active-prct='90'"),")."),(0,n.kt)("p",null,"For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_versa_snmp.pl --plugin=network::versa::snmp::plugin --mode=devices --help\n")),(0,n.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"If you get this message, you're probably facing one of theses issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured "),(0,n.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")))}N.isMDXComponent=!0}}]);