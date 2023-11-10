"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[5773],{40206:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>s,toc:()=>g});a(67294);var n=a(3905),r=a(51715),l=a(7626);function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"applications-protocol-tcp",title:"TCP Protocol"},d=void 0,s={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-tcp",id:"integrations/plugin-packs/procedures/applications-protocol-tcp",title:"TCP Protocol",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-protocol-tcp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-tcp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-protocol-tcp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-protocol-tcp.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-tcp",title:"TCP Protocol"},sidebar:"pp",previous:{title:"Generic SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-protocol-snmp"},next:{title:"Telnet Scenario",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-protocol-telnet"}},k={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"Service",id:"service",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Available modes",id:"available-modes",level:3},{value:"Available options",id:"available-options",level:3},{value:"Modes options",id:"modes-options",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3}],c={toc:g},N="wrapper";function f(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(N,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){p(t,e,a[e])}))}return t}({},c,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Protocol TCP")," brings 2 host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Protocol-Tcp"),(0,n.kt)("li",{parentName:"ul"},"App-Protocol-Tcp-Only")),(0,n.kt)("p",null,"The connector brings the following service templates (sorted by host template):"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Protocol-Tcp",label:"App-Protocol-Tcp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"))))),(0,n.kt)(l.Z,{value:"App-Protocol-Tcp-Only",label:"App-Protocol-Tcp-Only",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"))))),(0,n.kt)(l.Z,{value:"No host template",label:"No host template",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Tcp-Connection-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check TCP connection status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Response-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Tcp-Response-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check TCP port response time")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These services are not automatically created when the host template is applied.")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connection-Status",label:"Connection-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp.response.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Response-Time",label:"Response-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp.roundtrip.time.average.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp.roundtrip.time.maximum.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp.roundtrip.time.minimum.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp.packets.loss.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,n.kt)("p",null,"If the platform uses an ",(0,n.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,n.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,n.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-protocol-tcp\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-protocol-tcp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-protocol-tcp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-tcp\n")))),(0,n.kt)("p",null,"Whatever the license type (",(0,n.kt)("em",{parentName:"p"},"online")," or ",(0,n.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,n.kt)("strong",{parentName:"p"},"Protocol TCP")," Pack through\nthe ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,n.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,n.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,n.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Protocol-Tcp\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Protocol-Tcp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Tcp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-protocol-tcp\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Protocol-Tcp",label:"App-Protocol-Tcp",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ressource settings."),(0,n.kt)("li",{parentName:"ol"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Protocol-Tcp-custom")," template to the host.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPPACKETLOSSPERCENT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPPACKETS"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPTIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"3"))))),(0,n.kt)(l.Z,{value:"App-Protocol-Tcp-Only",label:"App-Protocol-Tcp-Only",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ressource settings."),(0,n.kt)("li",{parentName:"ol"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Protocol-Tcp-Only-custom")," template to the host."),(0,n.kt)("li",{parentName:"ol"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPPACKETLOSSPERCENT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPPACKETS"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TCPTIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"3")))))),(0,n.kt)("h3",{id:"service"},"Service"),(0,n.kt)("p",null,"Once the template is applied, fill in the corresponding macros. Some macros are mandatory."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connection-Status",label:"Connection-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection timeout in seconds (Default: 3)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNING"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICAL"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command line (eg. a --verbose flag)"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Response-Time",label:"Response-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PACKETS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of packets to send (Default: 5)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set timeout in seconds (Default: 5)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGPL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Packets lost threshold warning in %"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALPL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Packets lost threshold critical in %"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGRTA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Response time threshold warning in milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALRTA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Response time threshold critical in milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGRTMAX"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALRTMAX"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGRTMIN"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALRTMIN"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command line (eg. a --verbose flag)"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \\\n    --plugin=apps::protocols::tcp::plugin \\\n    --mode=response-time  \\\n    --hostname='10.0.0.1' \\\n    --port='80' \\\n    --timeout='' \\\n    --warning-rta='' \\\n    --critical-rta='' \\\n    --warning-rtmax='' \\\n    --critical-rtmax='' \\\n    --warning-rtmin='' \\\n    --critical-rtmin='' \\\n    --warning-pl='' \\\n    --critical-pl='' \\\n    \n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: TCP '10.0.0.1' port 80 rta 0.633ms, lost 0% | 'tcp.roundtrip.time.average.milliseconds'=0.633ms;;;0; 'tcp.roundtrip.time.maximum.milliseconds'=2.145ms;;;0; 'tcp.roundtrip.time.minimum.milliseconds'=0.193ms;;;0; 'tcp.packets.loss.percentage'=0%;;;0;100\n")),(0,n.kt)("h3",{id:"available-modes"},"Available modes"),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \\\n    --plugin=apps::protocols::tcp::plugin \\\n    --list-mode\n")),(0,n.kt)("p",null,"The plugin brings the following modes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Linked service template"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"connection-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Tcp-Connection-Status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"response-time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Tcp-Response-Time")))),(0,n.kt)("h3",{id:"available-options"},"Available options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Choose a mode."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--dyn-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify a mode with the path (separated by '::')."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--list-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List available modes."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode-version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check minimal version of mode. If not, unknown error."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display plugin version."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--pass-manager"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use a password manager."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--verbose"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display long output."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--debug"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display also debug messages."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter perfdata that match the regexp."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata-adv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq \"\")'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--explode-perfdata-max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put max perfdata (if it exist) in a specific perfdata (without values: same with '","_","max' suffix) (Multiple options)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-perfdata --extend-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target","[",",","[","newuom","]",",","[","min","]",",","[","m ax","]","]","  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic","_","in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic","_","in,,percent()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--extend-perfdata-group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target","[",",","[","newuom","]",",","[","m in","]",",","[","max","]","]","  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets","_","wrong,sum(packets","_","(discard     ","|","error)","_","(in","|","out))'      Sum traffic by interface:     --extend-perfdata-group='traffic","_","in","_","(.*),traffic","_","$1,sum(traf     fic","_","(in","|","out)","_","$1)'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-short-output --change-long-output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change short/long output display: --change-short-output=pattern~replace~modifier"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change exit code: --change-exit=unknown=critical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--range-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-uom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter UOM that match the regexp."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--opt-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove perfdata from output."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove label status from output."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-xml"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display output in XML format."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-json"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display output in JSON format."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-openmetrics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display metrics in OpenMetrics format."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-file"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write output in file (can be used with json and xml options)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display discovery arguments (if the mode manages it)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display discovery values (if the mode manages it)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--float-precision"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the float precision for thresholds (Default: 8)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--source-encoding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set encoding of monitoring sources (In some case. Default: 'UTF-8')."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")))),(0,n.kt)("h4",{id:"modes-options"},"Modes options"),(0,n.kt)("p",null,"All  modes specific options are listed here:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connection-Status",label:"Connection-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--hostname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP Addr/FQDN of the host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--ssl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use SSL connection. (no attempt is made to check the certificatevalidity by default)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection timeout in seconds (Default: 3)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--unknown-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set unknown threshold for status. Can used special variables like: %{status}, %{port}, %{error","_","message}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--warning-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set warning threshold for status. Can used special variables like: %{status}, %{port}, %{error","_","message}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--critical-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set critical threshold for status (Default: '%{status} eq \"failed\"'). Can used special variables like: %{status}, %{port}, %{error","_","message}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--warning-time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Threshold warning in seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--critical-time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Threshold critical in seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode"))))),(0,n.kt)(l.Z,{value:"Response-Time",label:"Response-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-counters"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Only display some counters (regexp can be used). Example : --filter-counters='rta'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--hostname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP Addr/FQDN of the host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set timeout in seconds (Default: 5)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--packets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of packets to send (Default: 5)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--warning-rta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Response time threshold warning in milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--critical-rta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Response time threshold critical in milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--warning-pl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Packets lost threshold warning in %"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--critical-pl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Packets lost threshold critical in %"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")))))),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \\\n    --plugin=apps::protocols::tcp::plugin \\\n    --mode=connection-status  \\\n    --help\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}f.isMDXComponent=!0}}]);