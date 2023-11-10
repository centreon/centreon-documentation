"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[68625],{46303:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>d,toc:()=>k});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"hardware-ups-himoinsa-snmp",title:"Himoinsa SNMP"},s=void 0,d={unversionedId:"integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp",id:"integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp",title:"Himoinsa SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-ups-himoinsa-snmp",title:"Himoinsa SNMP"},sidebar:"pp",previous:{title:"Gude EPC PDU SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp"},next:{title:"HP UPS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-ups-hp-snmp"}},u={},k=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:k},c="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(c,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Himoinsa UPS")," brings a host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HW-UPS-Himoinsa-SNMP-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Frequency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HW-UPS-Himoinsa-Frequency-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check frequency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Fuel-Level"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HW-UPS-Himoinsa-Fuel-Level-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check fuel level"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Phase"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HW-UPS-Himoinsa-Phase-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check 1 phase, 2 phase et 3 phase"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HW-UPS-Himoinsa-Status-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Himoinsa UPS device status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Voltage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HW-UPS-Himoinsa-Voltage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check voltage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Frequency",label:"Frequency",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#genset.frequency.hertz"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.frequency.hertz"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hz"))))),(0,n.kt)(l.Z,{value:"Fuel-Level",label:"Fuel-Level",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fuel.level.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Phase",label:"Phase",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#phase1.current.ampere"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#phase2.current.ampere"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#phase3.current.ampere"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A"))))),(0,n.kt)(l.Z,{value:"Status",label:"Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alarm"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closed-commutator"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"motor"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transfer-pump"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Voltage",label:"Voltage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#gen.vl12.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#gen.vl13.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#gen.vl1n.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#gen.vl23.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#gen.vl2n.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#gen.vl3n.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.vl12.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.vl13.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.vl1n.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.vl23.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.vl2n.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"index"),"#mains.vl3n.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,n.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your ",(0,n.kt)("strong",{parentName:"p"},"Himoinsa"),"\ndevice. Please refer to the official documentation."),(0,n.kt)("h3",{id:"network-flow"},"Network flow"),(0,n.kt)("p",null,"The target server must be reachable from the Centreon poller on the UDP/161\nSNMP port."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,n.kt)("p",null,"If the platform uses an ",(0,n.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,n.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,n.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-hardware-ups-himoinsa-snmp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-ups-himoinsa-snmp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-hardware-ups-himoinsa-snmp\n")))),(0,n.kt)("p",null,"Whatever the license type (",(0,n.kt)("em",{parentName:"p"},"online")," or ",(0,n.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,n.kt)("strong",{parentName:"p"},"Himoinsa UPS")," Pack through\nthe ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,n.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,n.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,n.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Hardware-Ups-Himoinsa-Snmp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Himoinsa-Snmp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-hardware-ups-himoinsa-snmp\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Himoinsa")," device settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"HW-UPS-Himoinsa-SNMP-custom")," template to the host.")),(0,n.kt)("p",null,"If you are using SNMP Version 3, use the ",(0,n.kt)("strong",{parentName:"p"},"SNMPEXTRAOPTIONS")," macro to configure"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \\\n    --plugin=hardware::ups::himoinsa::snmp::plugin \\\n    --mode=fuel-level \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-fuel-level='' \\\n    --critical-fuel-level=''\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Fuel level: 9% | 'fuel.level.percentage'=9%;;;0;100 \n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \\\n    --plugin=hardware::ups::himoinsa::snmp::plugin \\\n    --mode=fuel-level \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \\\n    --plugin=hardware::ups::himoinsa::snmp::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}N.isMDXComponent=!0}}]);