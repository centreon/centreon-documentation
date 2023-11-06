"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[14187],{33707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>k,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"hardware-devices-hikvision-nvr-snmp",title:"Hikvision NVR SNMP"},m=void 0,k={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp",title:"Hikvision NVR SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-devices-hikvision-nvr-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-hikvision-nvr-snmp",title:"Hikvision NVR SNMP"},sidebar:"pp",previous:{title:"Hikvision camera SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/hardware-devices-camera-hikvision-snmp"},next:{title:"HMS Ewon SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/hardware-devices-hms-ewon-snmp"}},c={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:d},g="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Pack Hikvision NVR SNMP brings 1 host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HW-Device-Hikvision-Nvr-SNMP-custom")),(0,a.kt)("p",null,"It brings the following Service Templates:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Disks"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Device-Hikvision-Nvr-Disks-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Device-Hikvision-Nvr-Memory-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Uptime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Device-Hikvision-Nvr-Uptime-SNMP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Disks",label:"Disks",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the disk"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disks.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current number of disks"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disks.errors.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current number of disks with status: abnormal, smartfailed"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"disk_name"),"#disk.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Space used on the disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"disk_name"),"#disk.space.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free space left on the disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"disk_name"),"#disk.space.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Space used on the disk in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(i.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.uptime.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"System uptime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your device."),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP\nport."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Hikvision NVR SNMP")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Hikvision-Nvr-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Hikvision NVR SNMP")," Centreon Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Hikvision NVR SNMP")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Hikvision-Nvr-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Hikvision NVR SNMP")," Centreon Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-hikvision-nvr-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Hikvision NVR SNMP")," Centreon Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts")),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"Hikvision NVR SNMP")," server settings"),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"HW-Device-Hikvision-Nvr-SNMP-custom")," template to apply to the Host")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Default: 'Configure your own SNMPv3 credentials combo')")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \\\n    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \\\n    --mode=memory \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-usage-prct='' \\\n    --critical-usage-prct='' \\\n    --verbose\n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Memory total: 500.00 MB used: 25.00 MB (5.00%) free: 475.00 MB (95.00%) | 'memory.usage.bytes'=26214400B;;;0;524288000 'memory.free.bytes'=498073600B;;;0;524288000 'memory.usage.percentage'=5.00%;;;0;100\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \\\n    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \\\n    --mode=memory \\\n    --help\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \\\n    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\nin the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"dedicated page"),"."))}N.isMDXComponent=!0}}]);