"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81626],{2587:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"applications-haproxy-snmp",title:"Haproxy SNMP"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-haproxy-snmp",id:"integrations/plugin-packs/procedures/applications-haproxy-snmp",title:"Haproxy SNMP",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-haproxy-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-haproxy-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-haproxy-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-haproxy-snmp.md",tags:[],version:"current",frontMatter:{id:"applications-haproxy-snmp",title:"Haproxy SNMP"},sidebar:"pp",previous:{title:"Graylog",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-graylog-restapi"},next:{title:"HashiCorp Vault Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-hashicorp-vault-restapi"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],g={toc:d},k="wrapper";function f(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){i(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"HAProxy is an open source software allowing high availability, load balancing\nand proxying solutions for TCP and HTTP-based applications."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Haproxy SNMP")," aims to collect backend/frontend status\nand sessions and traffic statistics using the SNMP protcol."),(0,a.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Frontend usage ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Backend usage"))),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Frontend-Usage",label:"Frontend-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Frontend status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"frontend.sessions.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of current sessions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"frontend.sessions.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total sessions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"frontend.traffic.in.bitpersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incomming frontend traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"frontend.traffic.out.bitpersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing frontend traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,a.kt)(o.Z,{value:"Backend-Usage",label:"Backend-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Backend status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backend.queue.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of current request in queue"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backend.sessions.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of current sessions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backend.sessions.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total sessions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backend.traffic.in.bitpersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incomming backend traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backend.traffic.out.bitpersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing backend traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your HAProxy\nserver. HAProxy provides an official documentation to achieve this:\n",(0,a.kt)("a",{parentName:"p",href:"https://www.haproxy.com/documentation/hapee/latest/observability/metrics/snmp/"},"https://www.haproxy.com/documentation/hapee/latest/observability/metrics/snmp/")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor HAProxy ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Haproxy-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Haproxy SNMP")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor HAProxy ressources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Haproxy-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("em",{parentName:"li"},"Haproxy SNMP")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-haproxy-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Haproxy SNMP")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your HAProxy Server settings'),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"Applications-Haproxy-Snmp-custom")," template to apply to the Host")),(0,a.kt)("p",null,"I> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null," Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \\\n   --plugin=apps::haproxy::snmp::plugin   \\\n   --mode=frontend-usage  \\\n   --hostname='10.0.0.1'  \\\n   --snmp-version='2c'  \\\n   --snmp-community='my-snmp-community'   \\\n   --filter-name=''  \\\n   --warning-status=''  \\\n   --critical-status='%{status} !~ /OPEN/i'  \\\n   --warning-total-sessions=''  \\\n   --critical-total-sessions=''  \\\n   --warning-current-sessions=''  \\\n   --critical-current-sessions=''  \\\n   --warning-traffic-in=''  \\\n   --critical-traffic-in=''  \\\n   --warning-traffic-out=''  \\\n   --critical-traffic-out=''  \\\n   --use-new-perfdata\n   --verbose \\\n   --use-new-perfdata\n")),(0,a.kt)("p",null," Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK : All frontends are ok | 'frontend.sessions.current.count'=9000;;;; 'frontend.sessions.total.count'=9000;;;; 'frontend.traffic.in.bitpersecond'=9000b/s;;;; 'frontend.traffic.out.bitpersecond'=9000b/s;;;;\n")),(0,a.kt)("p",null,"This command would trigger a CRITICAL alarm if the status of the ",(0,a.kt)("em",{parentName:"p"},"frontend")," is\ndifferent than 'OPEN' (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} !~ /OPEN/i'"),")."),(0,a.kt)("p",null," All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \\\n   --plugin=apps::haproxy::snmp::plugin   \\\n   --mode=frontend-usage  \\\n   --help\n")),(0,a.kt)("p",null," All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \\\n   --plugin=apps::haproxy::snmp::plugin   \\\n   --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Your SNMP server isn't started or misconfigured")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An external device is blocking your request (firewall, ...)"))),(0,a.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This message generally means that SNMP privileges are not wide enough for the\nmode/plugin to work properly."))}f.isMDXComponent=!0}}]);