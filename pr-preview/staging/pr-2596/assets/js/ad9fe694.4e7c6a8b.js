"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71499],{7443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"hardware-devices-camera-hikvision-snmp",title:"Hikvision camera SNMP"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp",title:"Hikvision camera SNMP",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-camera-hikvision-snmp",title:"Hikvision camera SNMP"},sidebar:"pp",previous:{title:"Hanwha camera SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hanwha-snmp"},next:{title:"Hikvision NVR SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp"}},u={},d=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector Hikvision SNMP collects metrics for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cpu"),(0,a.kt)("li",{parentName:"ul"},"Disk"),(0,a.kt)("li",{parentName:"ul"},"Memory"),(0,a.kt)("li",{parentName:"ul"},"Time")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Disk",label:"Disk",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Disk usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Disk usage in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Time",label:"Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"time.offset.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Time offset"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To monitor your Hikvision, the SNMP must be configured."),(0,a.kt)("p",null,"The Poller should be able to perform requests against the Hikvision device over SNMP UDP/161 port. "),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Camera-Hikvision-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Hikvision camera SNMP")," Monitoring Connector"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Camera-Hikvision-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-camera-hikvision-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Hikvision camera SNMP")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,a.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,a.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,a.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"HW-Device-Camera-Hikvision-SNMP-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_camera_hikvision_snmp.pl \\\n    --plugin=hardware::devices::camera::hikvision::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='hikvision_ro' \\\n    --warning-usage=90 \\\n    --critical-usage=95 \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: CPU Usage: 62.00 % | 'cpu.utilization.percentage'=62.00%;0:90;0:95;0;100\n")),(0,a.kt)("p",null,"The command above monitors Hikvision (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::devices::camera::hikvision::snmp::plugin --mode=cpu"),") identified\nby the IP address ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,a.kt)("em",{parentName:"p"},"community")," and ",(0,a.kt)("em",{parentName:"p"},"version")," are specified (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='hikvision_ro'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization over 90%\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-usage='90'"),") and a CRITICAL alarm over 95% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-usage='95'"),")."),(0,a.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_camera_hikvision_snmp.pl \\\n    --plugin=hardware::devices::camera::hikvision::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured"),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,a.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This error message often refers to the following issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The agent doesn't support the MIB used by the plugin"),(0,a.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.39165")))}h.isMDXComponent=!0}}]);