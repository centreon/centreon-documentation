"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[4607],{32279:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"hardware-devices-polycom-hdx-snmp",title:"Polycom HDX SNMP"},s=void 0,d={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",title:"Polycom HDX SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-polycom-hdx-snmp",title:"Polycom HDX SNMP"},sidebar:"pp",previous:{title:"Polycom DMA SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-dma-snmp"},next:{title:"Polycom RMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"What does the &#39;(skipped: no values)&#39; message mean?",id:"what-does-the-skipped-no-values-message-mean",level:3}],g={toc:u},k="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(k,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Polycom HDX Room system is an endpoint device that provides voice and video connectivity\nacross collaboration networks. "),(0,n.kt)("p",null,"This Monitoring Connector checks basic system health indicators and video/audio related protocols\nperformances during a call. "),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HDX Room systems                 ")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Cpu-Detailed",label:"Cpu-Detailed",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.user.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU User utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.nice.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Nice utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.system.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU System utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.idle.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Idle utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.wait.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Wait utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.kernel.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Kernel utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.interrupt.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Interrupt utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.softirq.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU SoftIrq utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.steal.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Steal utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.guest.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Guest utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.guestnice.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU Guest Nice utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface."),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")))),(0,n.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,n.kt)(i.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"load1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System load 1 minute-sample")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"load5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System load 5 minutes-sample")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"load15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System load 15 minutes-sample"))))),(0,n.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage on the device."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free memory on the device."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of Memory usage on the device."),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.buffer.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buffered Memory allocation."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.cached.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cached Memory allocation."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.shared.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Shared Memory allocation."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(i.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.uptime.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System uptime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(i.Z,{value:"ViewStation-Statistics",label:"ViewStation-Statistics",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"viewstation.h323.packet.loss.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current combined (audio/video) average percentage packet loss when in an H.323 call"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"viewstation.h323.jitter.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current combined (audio/video) cumulative average jitter (in ms) when in an H.323 call."),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"viewstation.h323.latency.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current average latency based on round trip delay when in an H.323 call."),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"device-configuration"},"Device Configuration"),(0,n.kt)("p",null,"On the Polycom device, enable and configure the SNMP agent: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- Connect to the HDX Admin Web UI\n- Go to 'System > Manage > Credentials' \n- Create new SNMP credentials specifying community and version\n")),(0,n.kt)("h3",{id:"network-flows"},"Network flows"),(0,n.kt)("p",null,"The Centreon Poller must be able to reach the UDP/161 SNMP port of the Polycom HDX device."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Polycom HDX devices:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Polycom HDX SNMP")," Monitoring Connector\nthrough ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Polycom HDX devices:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-polycom-hdx-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Polycom HDX SNMP")," Monitoring Connector\nthrough ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"HW-Device-Polycom-Hdx-SNMP-Custom")," Host Template"),(0,n.kt)("li",{parentName:"ul"},"Fill SNMP Version and Community fields according to the device's configuration")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl \\\n    --plugin=hardware::devices::polycom::hdx::snmp::plugin  \\\n    --mode=viewstation-stats \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='mysnmpcommunity' \\\n    --warning-h323-packet-loss='5' \\\n    --critical-h323-packet-loss='10' \\\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: View Station Phone Number: '0123456789' Stats: H323 Packet Loss 1.00 %, H323 (audio/video) Jitter 30.00 ms, H323 (audio/video) Latency 4.00 |\n'h323-packet-loss'=1.00%;;;0;100 'h323-jitter'=30.00ms;;;0;100 'vs_latency'=4.00;;;0;100\n")),(0,n.kt)("p",null,"The command above monitors the sessions statistics of a Polycom HDX ViewStation device (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats"),") identified\nby the IP address ",(0,n.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='mysnmpcommunity'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the packet loss rate of the active calls raises over 5% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-h323-packet-loss='5'"),")\nand a CRITICAL alarm over 10% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-h323-packet-loss='10'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl --plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats --help\n")),(0,n.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"If you get this message, you're probably facing one of theses issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured "),(0,n.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,n.kt)("h3",{id:"what-does-the-skipped-no-values-message-mean"},"What does the '(skipped: no values)' message mean?"),(0,n.kt)("p",null,"When using ViewStation-Statistics service, you will get this message when there is\nno audio and/or video call in progress on the HDX Room system. This is the expected\nbehavior. As soon as a call starts, metrics will get populated."))}N.isMDXComponent=!0}}]);