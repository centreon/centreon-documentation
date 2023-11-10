"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[59022],{85811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m={id:"hardware-devices-timelinkmicro-tms6001-snmp",title:"Timelinkmicro Tms6001"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp",title:"Timelinkmicro Tms6001",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-devices-timelinkmicro-tms6001-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-timelinkmicro-tms6001-snmp",title:"Timelinkmicro Tms6001"},sidebar:"pp",previous:{title:"Supermicro SuperDoctor SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-servers-supermicro-superdoctor-snmp"},next:{title:"xFusion iBMC SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-servers-xfusion-ibmc-snmp"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for ?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"TimeLink microsystems provides solutions based on a complete line of COTS products and\ndesign specific equipment or system on user's requirements. "),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tms6001                  ")),(0,a.kt)("h2",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Alarms",label:"Alarms",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alarms.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alarms."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"Antenna",label:"Antenna",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Antenna status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"))))),(0,a.kt)(i.Z,{value:"Frequency",label:"Frequency",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"generation.frequency.quality.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Quality of frequency generation:"),(0,a.kt)("td",{parentName:"tr",align:null},"Count"))))),(0,a.kt)(i.Z,{value:"Gnss",label:"Gnss",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A textual description of physical entity."),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"))))),(0,a.kt)(i.Z,{value:"Satellites",label:"Satellites",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"satellites.seen.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of satellites seen."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"Time",label:"Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"generation.time.quality.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Quality of time generation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"device-configuration"},"Device Configuration"),(0,a.kt)("p",null,"On the TMS device, enable and configure the SNMP agent in order to allow the Centreon Poller to request it."),(0,a.kt)("h3",{id:"network-flows"},"Network flows"),(0,a.kt)("p",null,"The Centreon Poller must be able to reach the UDP/161 SNMP port of the TMS device."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Timelinkmicro devices:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Timelinkmicro-Tms6001-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Timelinkmicro Tms6001 Snmp")," Monitoring Connector\nthrough ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Timelinkmicro devices:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Timelinkmicro-Tms6001-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-timelinkmicro-tms6001-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Timelinkmicro Tms6001 Snmp")," Monitoring Connector\nthrough ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"HW-Timelink-tms6001-SNMP-Custom")," Host Template"),(0,a.kt)("li",{parentName:"ul"},"Fill SNMP Version and Community fields according to the device's configuration")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for-"},"How to test the Plugin and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \\\n    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \\\n    --mode=alarms \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='timelink_ro' \\\n    --verbose \n")),(0,a.kt)("p",null,"This check monitors open alarms (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=alarms"),") on a Timelink device with 10.30.2.114 IP (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nusing SNMP v2 and 'timelink_ro' Community string (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='timelink_ro'"),") "),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," option to display all the modes available in the Plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \\\n    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \\\n    --list-mode\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag to display a dedicated manual for a given mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \\\n    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your SNMP server isn't started or misconfigured "),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking your request (firewall, ...)")))}h.isMDXComponent=!0}}]);