"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[49142],{95208:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"network-cisco-standard-snmp",title:"Cisco Standard"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-cisco-standard-snmp",id:"integrations/plugin-packs/procedures/network-cisco-standard-snmp",title:"Cisco Standard",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-cisco-standard-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-standard-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-cisco-standard-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-cisco-standard-snmp.md",tags:[],version:"current",frontMatter:{id:"network-cisco-standard-snmp",title:"Cisco Standard"},sidebar:"pp",previous:{title:"Cisco Small Business",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-switchs-cisco-smallbusiness-standard-snmp"},next:{title:"Cisco Standard SSH",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-cisco-standard-ssh"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Plugin-pack assets",id:"plugin-pack-assets",level:2},{value:"Monitored equipments",id:"monitored-equipments",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics",id:"collected-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cisco device configuration",id:"cisco-device-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I test my configuration through the CLI and what do the main parameters stand for ?",id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function h(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cisco develops, manufactures and sells networking hardware, software, telecommunications equipment and other high-technology services and products"),(0,a.kt)("h2",{id:"plugin-pack-assets"},"Plugin-pack assets"),(0,a.kt)("h3",{id:"monitored-equipments"},"Monitored equipments"),(0,a.kt)("p",null,"All Cisco devices supporting standard MIBs can be monitored:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Routers"),(0,a.kt)("li",{parentName:"ul"},"Access Points"),(0,a.kt)("li",{parentName:"ul"},"Switchs"),(0,a.kt)("li",{parentName:"ul"},"...                     ")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-SNMP-HostDiscovery"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover your Cisco devices through a SNMP subnet scan"))))),(0,a.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Cisco-Standard-SNMP-Packet-Errors-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor errors and discards")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Net-Cisco-Standard-SNMP-Traffic-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor status and bandwidth utilization")))))),(0,a.kt)("h2",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)("p",null,"Only standard metrics are described in this section. Be aware that a lot of other checks and metrics are available from Cisco additionnal MIBS. Here is a non-exhaustive list: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hsrp: HSRP protocol state "),(0,a.kt)("li",{parentName:"ul"},"ipsectunnel: State of ipsec tunnels"),(0,a.kt)("li",{parentName:"ul"},"ipsla: IP SLA configuration and performances"),(0,a.kt)("li",{parentName:"ul"},"load: Load of your device cores"),(0,a.kt)("li",{parentName:"ul"},"memoryflash: Memory flash pool usage"),(0,a.kt)("li",{parentName:"ul"},"qosusage: Check QOS configuration and associated consumptions"),(0,a.kt)("li",{parentName:"ul"},"stack: Check the health of your device stack")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cpu",label:"cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5s.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last 5 seconds. Unit: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last minute. Unit: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last 5 minutes. Unit: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"core.cpu.utilization.5s.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Per core CPU utilization for the last 5 seconds. Unit: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"core.cpu.utilization.1m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Per core CPU utilization for the last minute. Unit: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"core.cpu.utilization.5m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Per core CPU utilization for the last 5 minutes. Unit: %"))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage on the device. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage on the device. Unit: %"))))),(0,a.kt)(i.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Interface status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.","*",".bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing traffic going through the interface. Units: B/s & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.","*",".errors.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing errored packets going through an interface. Units: Count & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.","*",".discards.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing discarded packets going through an interface. Units: Count & %")))),(0,a.kt)("p",null,"A regexp filter is available to target a specific interface identifier/ifName ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^my-interface-name$' --name"),"]"," ")),(0,a.kt)(i.Z,{value:"Environment",label:"Environment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"entPhysicalDescr"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A text description of the physical device")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ciscoEnvMonPresent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Environment sensors of the physical device")))),(0,a.kt)("p",null,"Monitoring all hardware components of the device. It may include the following : fan, module, physical, psu, sensor, temperature, voltage, etc."),(0,a.kt)("p",null,"You can use --absent-problem if you want to alert when a component is absent/removed. You can also overload the default status using the --threshold-overload option. ")),(0,a.kt)(i.Z,{value:"Configuration",label:"Configuration",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ccmHistoryRunningLastChanged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of sysUpTime when the running configuration was last changed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ccmHistoryRunningLastSaved"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of sysUpTime when the running configuration was last saved (written)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ccmHistoryStartupLastChanged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of sysUpTime when the startup configuration was last written")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"cisco-device-configuration"},"Cisco device configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your Cisco device. Cisco provides an official documentation to achieve this: ",(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html"},"https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html")),(0,a.kt)("p",null,"Here is an example: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to your router and reach the configuration prompt:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Router#configure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)# \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use this command to enable snmp-server and set a read-only community")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Router(config)#snmp-server community public RO \n")),(0,a.kt)("p",null,"In the example above, 'public' is your snmp community. You do now want to use it in production ;)  "),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"Your centreon server must be able to reach the Cisco device over UDP/161 SNMP port."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Cisco SNMP Centreon Plugin on every poller expected to monitor Cisco devices: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Standard-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install The 'Cisco-Standard-Snmp' Centreon Monitoring Connector from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Cisco SNMP Centreon Plugin on every poller expected to monitor Cisco devices:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Standard-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-cisco-standard-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Install The 'Cisco-Standard-Snmp' Centreon Monitoring Connector from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"When creating an host, fill the 'Snmp Community' and 'Snmp Version' fields to match the device configuration. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I test my configuration through the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the Centreo plugin installed, you can test it logging with the centreon-engine user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \\\n    --plugin=network::cisco::standard::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='test/cisco' \\\n  --verbose \n")),(0,a.kt)("p",null,"The command above checks the CPU utilization of your Cisco box (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),"). You must always define the IP address of the device (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),") as well as the SNMP versions and community (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='test/cisco'"),") "),(0,a.kt)("p",null,"You can display all modes that come with the plugin with the command below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \\\n    --plugin=network::cisco::standard::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"You can display options of a specific mode by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag. Here is an example to display cpu mode parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \\\n    --plugin=network::cisco::standard::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"This message generally means that you are not using the right snmp version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This error message often refers to the following issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the Cisco device doesn't support the MIB used by the plugin"),(0,a.kt)("li",{parentName:"ul"},"the targeted SNMP OID cannot be fetched because of insufficient privileges on the device")))}h.isMDXComponent=!0}}]);