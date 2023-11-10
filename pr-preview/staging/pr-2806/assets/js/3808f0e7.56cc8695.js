"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81993],{59338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"hardware-storage-purestorage-snmp",title:"Pure Storage SNMP"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp",title:"Pure Storage SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-purestorage-snmp",title:"Pure Storage SNMP"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration Pure Storage Equipment",id:"configuration-pure-storage-equipment",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Installation",id:"installation",level:2},{value:"Host Configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I test in the command line and what do the main options mean?",id:"how-do-i-test-in-the-command-line-and-what-do-the-main-options-mean",level:4},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:c},h="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Pure Storage develops flash-based storage for data centers using consumer-grade solid state drives. It provides\nproprietary de-duplication and compression software to improve the amount of data that can be stored on each drive."),(0,r.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storage array")),(0,r.kt)("h2",{id:"monitored-metrics"},"Monitored metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Stats",label:"Stats",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pureArrayReadBandwidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Read Bandwidth Volume on the storage array. Unit: Bits/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pureArrayWriteBandwidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Write Bandwidth Volume on the storage array. Unit: Bits/second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pureArrayReadIOPS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Read Operations on the storage array. Unit: iops")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pureArrayWriteIOPS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Write Operations on the storage array. Unit: iops")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pureArrayReadLatency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage array Read Latency (us/op). Unit: us/operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pureArrayWriteLatency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage array Write Latency (us/op). Unit: us/operations")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"configuration-pure-storage-equipment"},"Configuration Pure Storage Equipment"),(0,r.kt)("p",null,"The SNMP agent must be configured on the Pure Storage devices."),(0,r.kt)("h3",{id:"network-flow"},"Network flow"),(0,r.kt)("p",null,"Your Centreon poller must be able to reach the PureStorage storage array on the UDP/161 SNMP port."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Plugin on every poller expected to monitor Pure Storage SNMP resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Install the "Pure Storage SNMP" Centreon Monitoring Connector from the ',(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Plugin on every poller expected to monitor Pure Storage resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on your central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-purestorage-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'Install the "Pure Storage SNMP" Centreon Monitoring Connector from the ',(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,r.kt)("h2",{id:"host-configuration"},"Host Configuration"),(0,r.kt)("p",null,'Apply the "HW-Storage-Purestorage-SNMP-custom" template to your newly created host.\nIn the host creation form on the Centreon Web interface, it is necessary to set the proper values in the "SNMP Community" and "SNMP Version" fields.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h4",{id:"how-do-i-test-in-the-command-line-and-what-do-the-main-options-mean"},"How do I test in the command line and what do the main options mean?"),(0,r.kt)("p",null,"Once the Plugin installed, you can test it directly from your Centreon poller CLI using the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_purestorage_snmp.pl \\\n    --plugin=storage::purestorage::snmp::plugin \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='public' \\\n    --mode=stats \\\n    --filter-counters='.*' \\\n    --warning-read-bandwidth='400000000' \\\n    --critical-read-bandwidth='500000000' \\\n    --verbose\n")),(0,r.kt)("p",null,"If everything's fine, it should output something similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Read Bandwith : 376.84 Mb/s - Write Bandwith : 0.00 b/s - Read IOPs : 3871 - Write IOPs : 0 - Read Latency : 197 us/op - Write Latency : 0 us/op | 'read_bandwidth'=376843408.00b/s;;;0; 'write_bandwidth'=0.00b/s;;;0; 'read_iops'=3871iops;;;0; 'write_iops'=0iops;;;0; 'read_latency'=197us/op;;;0; 'write_latency'=0us/op;;;0;\n")),(0,r.kt)("p",null,"The above command requests a PureStorage array using the SNMP protocol (",(0,r.kt)("inlineCode",{parentName:"p"},"--plugin=storage::purestorage::snmp::plugin"),") using the ",(0,r.kt)("em",{parentName:"p"},"public")," SNMP community (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-community='public"),").\nThis command checks the current statistics of the storage array (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=stats"),")."),(0,r.kt)("p",null,"This command will trigger a WARNING alarm if the ",(0,r.kt)("em",{parentName:"p"},"read")," bandwidth increases to more than 400000000b/s (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-read-bandwidth='400000000'"),") and a CRITICAL alarm if more than 500000000b/s (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-read-bandwidth='500000000'"),"). "),(0,r.kt)("p",null,"Thresholds can be set on all of the device metrics using the syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-*metric* --critical-*metric*")),(0,r.kt)("p",null,"The syntax of the different options of the thresholds as well as the list of options and their usage are detailed in the help of the mode by adding the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_snmp.pl \\\n    --plugin=storage::purestorage::snmp::plugin \\\n    --mode=stats \\\n    --help\n")),(0,r.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"If you get this message, it means that you are unable to reach the Pure Storage device on the UDP/161 SNMP port, or that the configured SNMP community is not correct. It is also possible that a firewall is blocking the flow."),(0,r.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"This error message often refers to the following problems: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pure Storage equipment does not support the MIB used by the plugin."),(0,r.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be recovered due to insufficient equipment privileges.")))}k.isMDXComponent=!0}}]);