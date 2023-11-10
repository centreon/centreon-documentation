"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77607],{22697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-openvpn-omi",title:"OpenVPN OMI"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-openvpn-omi",id:"integrations/plugin-packs/procedures/applications-openvpn-omi",title:"OpenVPN OMI",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-openvpn-omi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-openvpn-omi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-openvpn-omi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-openvpn-omi.md",tags:[],version:"current",frontMatter:{id:"applications-openvpn-omi",title:"OpenVPN OMI"},sidebar:"pp",previous:{title:"OpenMetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-monitoring-openmetrics"},next:{title:"OpenWeatherMap",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-openweathermap-restapi"}},u={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Monitoring Connector OpenVPN OMI brings 1 host template :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Openvpn-OMI-custom")),(0,a.kt)("p",null,"It brings the following Service Template:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Server-Usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Openvpn-Server-Usage-OMI"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Server-Usage",label:"Server-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clients.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of current Clients"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"server.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Server traffic in"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"server.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Server traffic out"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The Open VPN server must have an management interface running and available.\nA user and password dedicated to monitoring is needed for security reasons."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor your ",(0,a.kt)("em",{parentName:"li"},"Open VPN")," server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Openvpn-Omi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"OpenVPN OMI")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor your ",(0,a.kt)("em",{parentName:"li"},"Open VPN")," server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Openvpn-Omi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("em",{parentName:"li"},"OpenVPN OMI")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-openvpn-omi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"OpenVPN OMI")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your ',(0,a.kt)("em",{parentName:"li"},"Open VPN")," server settings"),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"Applications-Openvpn-Omi-custom")," template to apply to the Host"),(0,a.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"OMIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OMIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OMIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"7505")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \\\n    --plugin=apps::openvpn::omi::plugin \\\n    --mode=server-usage \\\n    --omi-hostname='10.0.0.1' \\\n    --omi-password='' \\\n    --omi-port='7505' \\\n    --warning-num-clients='' \\\n    --critical-num-clients='' \\\n    --warning-traffic-in='' \\\n    --critical-traffic-in='' \\\n    --warning-traffic-out='1000000' \\\n    --critical-traffic-out='2000000' \\\n    --use-new-perfdata \n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Current Clients: 9000 Traffic In: 900 kb/s Traffic Out: 900 kb/s | 'clients.current.count'=9000;;;0; 'server.traffic.in.bitspersecond'=900000b/s;;;0; 'server.traffic.out.bitspersecond'=900000b/s;1000000;2000000;0; \n")),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if ",(0,a.kt)("em",{parentName:"p"},"the traffic out")," is reported as\nover  1000000b/s (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-traffic-out=1000000"),") and a CRITICAL alarm if over\nthan 2000000b/s (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-traffic-out='2000000'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \\\n    --plugin=apps::openvpn::omi::plugin \\\n    --mode=server-usage \\\n    --help\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \\\n    --plugin=apps::openvpn::omi::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\nin the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"dedicated page")))}f.isMDXComponent=!0}}]);