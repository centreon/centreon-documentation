"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[12034],{25891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>k});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"network-firewalls-pfsense-snmp",title:"pfSense"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp",id:"integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp",title:"pfSense",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-firewalls-pfsense-snmp.md",tags:[],version:"current",frontMatter:{id:"network-firewalls-pfsense-snmp",title:"pfSense"},sidebar:"pp",previous:{title:"Perle IDS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-perle-ids-snmp"},next:{title:"Rad Airmux SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/network-rad-airmux-snmp"}},f={},k=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"pfSense firewall configuration",id:"pfsense-firewall-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3}],u={toc:k},d="wrapper";function g(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"pfSense is an open source router and firewall software based on FreeBSD and\nentirely configurable throught a user-friendly web interface."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"pfSense")," aims to collect the status of the interfaces\nand the several number of packets per second using with the SNMP protocol."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pfSense firewall")),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Blocked-Packets-Per-Interface",label:"Blocked-Packets-Per-Interface",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pfinterface.pass.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic in Pass"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pfinterface.pass.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic out Pass"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pfinterface.block.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic in Block"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pfinterface.block.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic out Block"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,a.kt)(l.Z,{value:"Short-Packets",label:"Short-Packets",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"packets.short.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of short packets per second"))))),(0,a.kt)(l.Z,{value:"Normalize-Packets",label:"Normalize-Packets",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"packets.normalized.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of normalized  packets per second"))))),(0,a.kt)(l.Z,{value:"Memory-Dropped-Packets",label:"Memory-Dropped-Packets",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"packets.memorydropped.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of dropped packets due to memory per second"))))),(0,a.kt)(l.Z,{value:"Match-Packets",label:"Match-Packets",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"packets.matched.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of matched packets per second"))))),(0,a.kt)(l.Z,{value:"Fragment-Packets",label:"Fragment-Packets",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"packets.fragmented.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of fragmented packets per second"))))),(0,a.kt)(l.Z,{value:"Bad-Offset-Packets",label:"Bad-Offset-Packets",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"packets.badoffset.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of bad offset packets per second")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"pfsense-firewall-configuration"},"pfSense firewall configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your\npfSense firewall. Netgate provides an official documentation\nto achieve this: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.netgate.com/pfsense/en/latest/services/snmp.html"},"https://docs.netgate.com/pfsense/en/latest/services/snmp.html")),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The target server must be reachable from the Centreon Poller on the UDP/161 SNMP\nport."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor a pfSense firewall:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"pfSense")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor a pfSense firewall:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-firewalls-pfsense-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"pfSense")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Log into Centreon and add a new Host through "Configuration > Hosts".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your pfSense firewall settings')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Apply the ",(0,a.kt)("em",{parentName:"p"},"Network-Firewalls-Pfsense-Snmp-custom")," template and configure all the mandatory Macros:"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the\nPlugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pfsense.pl \\\n    --plugin=apps::pfsense::snmp::plugin \\\n    --mode=pfinterfaces \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --filter-name='em.*' \\\n    --warning-traffic-in-block='80' \\\n    --warning-traffic-out-block='90' \\\n    --critical-traffic-in-block='80' \\\n    --critical-traffic-out-block='90' \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK : All pfInterfaes are ok | 'pfinterface.pass.traffic.in.bitspersecond'=43978.08b/s;0:8000000000;0:9000000000;0;10000000000\n'pfinterface.pass.traffic.out.bitspersecond'=77012.32b/s;0:8000000000;0:9000000000;0;10000000000\n'pfinterface.block.traffic.in.bitspersecond'=33878.08b/s;0:8000000000;0:9000000000;0;10000000000\n'pfinterface.block.traffic.out.bitspersecond'=25014.32b/s;0:8000000000;0:9000000000;0;10000000000\n")),(0,a.kt)("p",null,"This command triggers a WARNING alarm in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The traffic in Pass is greater than 80% (--warning-traffic-in-block='80')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The traffic in Block is greater than 80% (--warning-traffic-out-block='80')"))),(0,a.kt)("p",null,"A CRITICAL alarm is however triggered in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The traffic in Pass is greater than 90% (--critical-traffic-in-block='90')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The traffic in Block is greater than 90% (--critical-traffic-out-block='90')"))),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pfsense.pl \\\n    --plugin=apps::pfsense::snmp::plugin \\\n    --mode=pfinterfaces \\\n    --help\n")),(0,a.kt)("p",null,"All plugin modes can be listed with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pfsense.pl \\\n    --plugin=apps::pfsense::snmp::plugin \\\n    --list-mode \\\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your SNMP server isn't started or misconfigured"),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking your request (firewall, ...)")))}g.isMDXComponent=!0}}]);