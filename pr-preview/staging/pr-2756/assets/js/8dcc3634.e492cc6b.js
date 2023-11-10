"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[63740],{1567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>g});n(67294);var r=n(3905),o=n(51715),a=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"hardware-sensors-netbotz-snmp",title:"Netbotz Sensor"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp",id:"integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp",title:"Netbotz Sensor",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-sensors-netbotz-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-sensors-netbotz-snmp",title:"Netbotz Sensor"},sidebar:"pp",previous:{title:"LM Sensors",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-lmsensors-snmp"},next:{title:"Rittal CMC3 SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-sensors-rittal-cmc3-snmp"}},m={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:g},k="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("strong",{parentName:"p"},"Netbotz Sensor")," brings a host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Sensor-Netbotz-SNMP-custom")),(0,r.kt)("p",null,"It brings the following service template:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sensors-Global"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Sensors-Netbotz-Sensors-Global-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check all sensors of equipment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Sensors-Global",label:"Sensors-Global",mdxType:"TabItem"},(0,r.kt)("p",null,"Could not retrieve metrics"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,r.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your ",(0,r.kt)("strong",{parentName:"p"},"Netbotz Sensor"),"\nserver. Please refer to the official documentation from Netbotz Sensor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.fortinet.com/document/fortisiem/6.5.0/external-systems-configuration-guide/325357/apc-netbotz-environmental-monitor"},"Netbotz Sensor"))),(0,r.kt)("h3",{id:"network-flow"},"Network flow"),(0,r.kt)("p",null,"The target server must be reachable from the Centreon poller on the UDP/161\nSNMP port."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Netbotz Sensor")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Sensors-Netbotz-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"Netbotz Sensor")," Centreon Monitoring Connector."))),(0,r.kt)(a.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Netbotz Sensor")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Sensors-Netbotz-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"Netbotz Sensor")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-sensors-netbotz-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"Netbotz Sensor")," Centreon Monitoring Connector.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,r.kt)("strong",{parentName:"li"},"Netbotz Sensor")," server settings."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("strong",{parentName:"li"},"HW-Sensor-Netbotz-SNMP-custom")," template to the host.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_netbotz.pl \\\n    --plugin=hardware::sensors::netbotz::snmp::plugin \\\n    --mode=sensors \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --component='.*' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: | \n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_netbotz.pl \\\n    --plugin=hardware::sensors::netbotz::snmp::plugin \\\n    --mode=sensors \\\n    --help\n")),(0,r.kt)("p",null,"All available modes can be displayed by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_netbotz.pl \\\n    --plugin=hardware::sensors::netbotz::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}h.isMDXComponent=!0}}]);