"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[38331],{40102:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const d={id:"applications-protocol-udp",title:"Protocol UDP"},m=void 0,s={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-udp",id:"integrations/plugin-packs/procedures/applications-protocol-udp",title:"Protocol UDP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-protocol-udp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-udp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-protocol-udp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-protocol-udp.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-udp",title:"Protocol UDP"},sidebar:"pp",previous:{title:"Protocol SSH",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-protocol-ssh"},next:{title:"Protocol WHOIS",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-protocol-whois"}},u={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"Service",id:"service",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Available modes",id:"available-modes",level:3},{value:"Available options",id:"available-options",level:3},{value:"Modes options",id:"modes-options",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:c},g="wrapper";function f(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(g,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Protocol UDP")," brings 2 host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Protocol-Udp"),(0,n.kt)("li",{parentName:"ul"},"App-Protocol-Udp-Only")),(0,n.kt)("p",null,"The connector brings the following service template (sorted by host template):"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Protocol-Udp",label:"App-Protocol-Udp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"))))),(0,n.kt)(l.Z,{value:"App-Protocol-Udp-Only",label:"App-Protocol-Udp-Only",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"))))),(0,n.kt)(l.Z,{value:"No host template",label:"No host template",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Udp-Connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check UDP port connection")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These services are not automatically created when the host template is applied.")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connection",label:"Connection",mdxType:"TabItem"},(0,n.kt)("p",null,"Coming soon"))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,n.kt)("p",null,"If the platform uses an ",(0,n.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,n.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,n.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-protocol-udp\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-protocol-udp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-protocol-udp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-udp\n")))),(0,n.kt)("p",null,"Whatever the license type (",(0,n.kt)("em",{parentName:"p"},"online")," or ",(0,n.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,n.kt)("strong",{parentName:"p"},"Protocol UDP")," Pack through\nthe ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,n.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,n.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,n.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Protocol-Udp\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Protocol-Udp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Udp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-protocol-udp\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Protocol-Udp",label:"App-Protocol-Udp",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ressource settings."),(0,n.kt)("li",{parentName:"ol"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Protocol-Udp-custom")," template to the host.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"UDPPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"161")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"UDPTIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"3"))))),(0,n.kt)(l.Z,{value:"App-Protocol-Udp-Only",label:"App-Protocol-Udp-Only",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ressource settings."),(0,n.kt)("li",{parentName:"ol"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Protocol-Udp-Only-custom")," template to the host."),(0,n.kt)("li",{parentName:"ol"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"UDPPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"161")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"UDPTIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"3")))))),(0,n.kt)("h3",{id:"service"},"Service"),(0,n.kt)("p",null,"Once the template is applied, fill in the corresponding macros. Some macros are mandatory."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connection",label:"Connection",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command line (eg. a --verbose flag)"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /usr/lib/centreon/plugins//centreon_protocol_udp.pl \\\n    --plugin=apps::protocols::udp::plugin \\\n    --mode=connection  \\\n    --hostname='10.0.0.1' \\\n    --port='161' \\\n    \n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Connection success on port 161\n")),(0,n.kt)("h3",{id:"available-modes"},"Available modes"),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /usr/lib/centreon/plugins//centreon_protocol_udp.pl \\\n    --plugin=apps::protocols::udp::plugin \\\n    --list-mode\n")),(0,n.kt)("p",null,"The plugin brings the following modes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Linked service template"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Udp-Connection")))),(0,n.kt)("h3",{id:"available-options"},"Available options"),(0,n.kt)("h4",{id:"modes-options"},"Modes options"),(0,n.kt)("p",null,"All  modes specific options are listed here:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connection",label:"Connection",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Choose a mode."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--dyn-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify a mode with the path (separated by '::')."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--list-mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List available modes."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--mode-version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check minimal version of mode. If not, unknown error."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display plugin version."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--pass-manager"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use a password manager."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--verbose"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display long output."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--debug"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display also debug messages."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter perfdata that match the regexp."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-perfdata-adv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq \"\")'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--explode-perfdata-max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Put max perfdata (if it exist) in a specific perfdata (without values: same with '","_","max' suffix) (Multiple options)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-perfdata --extend-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target","[",",","[","newuom","]",",","[","min","]",",","[","m ax","]","]","  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic","_","in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic","_","in,,percent()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--extend-perfdata-group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target","[",",","[","newuom","]",",","[","m in","]",",","[","max","]","]","  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets","_","wrong,sum(packets","_","(discard     ","|","error)","_","(in","|","out))'      Sum traffic by interface:     --extend-perfdata-group='traffic","_","in","_","(.*),traffic","_","$1,sum(traf     fic","_","(in","|","out)","_","$1)'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-short-output --change-long-output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change short/long output display: --change-short-output=pattern~replace~modifier"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--change-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change exit code: --change-exit=unknown=critical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--range-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--filter-uom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter UOM that match the regexp."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--opt-exit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-perfdata"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove perfdata from output."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-ignore-label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove label status from output."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-xml"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display output in XML format."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-json"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display output in JSON format."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-openmetrics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display metrics in OpenMetrics format."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--output-file"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write output in file (can be used with json and xml options)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display discovery arguments (if the mode manages it)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--disco-show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display discovery values (if the mode manages it)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--float-precision"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the float precision for thresholds (Default: 8)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--source-encoding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set encoding of monitoring sources (In some case. Default: 'UTF-8')."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--hostname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP Addr/FQDN of the host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"--timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection timeout in seconds (Default: 3)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode")))))),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /usr/lib/centreon/plugins//centreon_protocol_udp.pl \\\n    --plugin=apps::protocols::udp::plugin \\\n    --mode=connection  \\\n    --help\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}f.isMDXComponent=!0}}]);