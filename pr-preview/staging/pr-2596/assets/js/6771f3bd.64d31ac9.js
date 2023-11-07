"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[69008],{31834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var i=n(3905),o=n(51715),a=n(7626);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"applications-cisco-ise-restapi",title:"Cisco ISE"},c=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-cisco-ise-restapi",id:"integrations/plugin-packs/procedures/applications-cisco-ise-restapi",title:"Cisco ISE",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-cisco-ise-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-cisco-ise-restapi",title:"Cisco ISE"},sidebar:"pp",previous:{title:"Cisco DNA Center Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi"},next:{title:"Cisco SSMS",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following message: <code>UNKNOWN: 500 Can&#39;t connect to 10.0.0.1:443 |</code>",id:"why-do-i-get-the-following-message-unknown-500-cant-connect-to-10001443-",level:3},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],g={toc:m},k="wrapper";function h(e){var{components:t}=e,n=l(e,["components"]);return(0,i.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Cisco Identity Service Engine is network administration solution designed to\nsimplify and control security and access on your company's network."),(0,i.kt)("p",null,"The Centreon Monitoring Connector ",(0,i.kt)("em",{parentName:"p"},"Cisco ISE")," aims to collect the number of active and\nprofiler service sessions and the number of postured endpoints by requesting the\ndedicated built-in REST API."),(0,i.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,i.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cisco Identity Service Engine")),(0,i.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,i.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"Session",label:"Session",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"sessions.active.count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of active sessions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"endpoints.postured.count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of postured endpoints"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"sessions.profiler.count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of profiler service sessions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The users used in the Host Macro (more information ",(0,i.kt)("a",{parentName:"p",href:"#Host"},"here")," must be\nassigned to one of the following Admin Groups and must be authenticated against\nthe credentials stored in the Cisco ISE internal database (internal admin\nusers):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Super Admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"System Admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MnT Admin"))),(0,i.kt)("p",null,"Futhermore, the Centreon Pollers must be able to reach the Ciso ISE Rest API on\nthe TCP/80 or TCP/443 port(s). More information on the official Cisco website:\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.cisco.com/docs/identity-services-engine/3.0/#!introduction-to-monitoring-rest-apis/verifying-a-monitoring-node"},"https://developer.cisco.com/docs/identity-services-engine/3.0/#!introduction-to-monitoring-rest-apis/verifying-a-monitoring-node")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor a Cisco Identity Service Engine:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ise-Restapi\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,i.kt)("em",{parentName:"li"},"Cisco ISE")," Centreon Monitoring Connector on the ",(0,i.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,i.kt)(a.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor a Cisco Identity Service Engine:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ise-Restapi\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-cisco-ise-restapi\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,i.kt)("em",{parentName:"li"},"Cisco ISE")," Centreon Monitoring Connector on the ",(0,i.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"host"},"Host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,i.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Cisco Identity Service Engine settings'),(0,i.kt)("li",{parentName:"ul"},"Apply the ",(0,i.kt)("em",{parentName:"li"},"Applications-Cisco-Ise-Restapi-custom")," template and configure all the mandatory Macros :")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISECUSTOMMODE"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mode used by plugin (Default: 'xmlapi')")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISEAPIURLPATH"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the ISE API (Default: '/admin/API/mnt')")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISEAPIPORT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Port of the ISE API instance (Default: '443')")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISEAPIPROTO"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Protocol used by the ISE API (Default : 'https')")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"USERNAME"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Username to access ISE API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PASSWORD"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password to access ISE API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,i.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the\n",(0,i.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the\nPlugin by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \\\n    --plugin=apps::cisco::ise::restapi::plugin \\\n    --mode=session \\\n    --custommode='xmlapi' \\\n    --hostname='10.0.0.1' \\\n    --url-path='admin/API/mnt' \\\n    --username='user' \\\n    --password='password' \\\n    --port='443' \\\n    --proto='https' \\\n    --filter-counters='' \\\n    --warning-active-sessions='20' \\\n    --critical-active-sessions='50' \\\n    --warning-postured-endpoints='' \\\n    --critical-postured-endpoints='' \\\n    --warning-profiler-service-sessions='' \\\n    --critical-profiler-service-sessions='' \\\n    --use-new-perfdata\n")),(0,i.kt)("p",null,"Expected command output is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Active sessions: 10, Postured endpoints: 20, Profiler service sessions: 20 | 'sessions.active.count'=10;0:20;0:50;0; 'endpoints.postured.count'=20;;;0 'sessions.profiler.count'=20;;;0;\n")),(0,i.kt)("p",null,"This command triggers a WARNING alarm in the following cases if the number of\nactive session is greater than 20 (--warning-active-sessions='20')."),(0,i.kt)("p",null,"A CRITICAL alarm is however triggered if he number ofactive session is greater\nthan 50 (--critical-active-sessions='50')."),(0,i.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \\\n    --plugin=apps::cisco::ise::restapi::plugin \\\n    --mode=session \\\n    --help\n")),(0,i.kt)("p",null,"All plugin modes can be listed with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \\\n    --plugin=apps::cisco::ise::restapi::plugin \\\n    --list-mode \n")),(0,i.kt)("h3",{id:"why-do-i-get-the-following-message-unknown-500-cant-connect-to-10001443-"},"Why do I get the following message: ",(0,i.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 500 Can't connect to 10.0.0.1:443 |")),(0,i.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect\nto the Cisco ISE REST API. Check that no third party device (such as a firewall)\nis blocking the request. A proxy connection may also be necessary to connect to\nthe API. This can be done by using this option in the command:\n",(0,i.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,i.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,i.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,i.kt)("p",null,"When using a proxy to connect to Cisco ISE REST API, this error\nmessage means that the Centreon Plugin library does not support the proxy\nconnection protocol."),(0,i.kt)("p",null,"In order to prevent this issue, use the ",(0,i.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the\nfollowing option to the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}h.isMDXComponent=!0}}]);