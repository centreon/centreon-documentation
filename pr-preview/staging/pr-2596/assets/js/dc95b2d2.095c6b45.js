"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77708],{90806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});a(67294);var n=a(3905),o=a(51715),r=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const p={id:"applications-google-workspace-api",title:"Google Workspace"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-google-workspace-api",id:"integrations/plugin-packs/procedures/applications-google-workspace-api",title:"Google Workspace",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-google-workspace-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-google-workspace-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-google-workspace-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-google-workspace-api.md",tags:[],version:"current",frontMatter:{id:"applications-google-workspace-api",title:"Google Workspace"},sidebar:"pp",previous:{title:"Google Gsuite (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-google-gsuite-api"},next:{title:"Gorgone Restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-gorgone-restapi"}},g={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:m},k="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Google Workspace, is a collection of cloud computing, productivity and collaboration tools, software and products developed and marketed by Google."),(0,n.kt)("p",null,"The Centreon Monitoring Connector aims to collect the real-time status and availability of the services by requesting the\ndedicated Status API available on Google servers."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Services: Gmail, Meet, Drive, etc...")),(0,n.kt)("p",null,"The list of the applications that can be monitored is available here:\n",(0,n.kt)("a",{parentName:"p",href:"https://workspace.google.fr/intl/en/features/"},"https://workspace.google.fr/intl/en/features/")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Google-Workspace-Services-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover services and monitor their status")))))),(0,n.kt)("h2",{id:"monitored-metrics"},"Monitored metrics"),(0,n.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"google.workspace.services.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of services currently monitored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the service")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The Centreon Poller that will be used to monitor Google Workspace must be able to reach the related servers (",(0,n.kt)("a",{parentName:"p",href:"http://www.google.com"},"www.google.com"),") on the Internet\nusing the TCP/443 HTTPS port. The plugin allows you to use a proxy if needed."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Google Workspace")," services:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Google-Workspace-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Google Workspace")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Google Workspace")," services:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Google-Workspace-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-google-workspace-api\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Google Workspace")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),". "),(0,n.kt)("li",{parentName:"ul"},'Fill the "IP Address / DNS" field with a localhost IP address (e.g 127.0.0.1)'),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("em",{parentName:"li"},"App-Google-Workspace-Api-custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This Host Template is a ",(0,n.kt)("em",{parentName:"p"},"dummy")," type so the Host check command won't initiate a ",(0,n.kt)("em",{parentName:"p"},"ping"),"\nrequest to an Internet ressource (this kind of request usually being denied). The Host status would then always be ",(0,n.kt)("em",{parentName:"p"},"OK"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACESTATUSHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP or name of the Status server (Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"www.google.com"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACESTATUSPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used to reach the Google server (Default: '443')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACESTATUSPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocol used to reach the Google server (Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure a proxy URL to use if needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGLEWORKSPACEEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'This template will deploy one "Global" Service that will monitor all of the services.\nUse the ',(0,n.kt)("strong",{parentName:"p"},"Service Discovery")," feature if you wish to get one Service per google workspace service.")),(0,n.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin\nby running the following command (Some of the parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"proxyurl")," have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \\\n    --plugin='apps::google::workspace::plugin' \\\n    --mode=services \\\n    --hostname='www.google.com' \\\n    --proto='https' \\\n    --port='443' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-name='mail|drive|meet' \\\n    --warning-status='%{status} eq \"disruption\"' \\\n    --critical-status='%{status} eq \"outage\"' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All Google workspace services are ok | 'google.workspace.services.count'=3;;;0;\nService 'Gmail' status is available\nService 'Google Drive' status is available\nService 'Google Meet' status is available\n")),(0,n.kt)("p",null,"In this example, the Plugin gets the status and availability of Google workspace services (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin='apps::google::workspace::plugin' --mode=services"),")\nby requesting the official Google status server API (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='www.google.com' --proto='https' --port='443'"),"). Only the status of\nthe ",(0,n.kt)("em",{parentName:"p"},"gmail"),", ",(0,n.kt)("em",{parentName:"p"},"drive")," and ",(0,n.kt)("em",{parentName:"p"},"meet")," applications will be displayed (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name='gmail|drive|meet'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alert if one of the service is reported as ",(0,n.kt)("em",{parentName:"p"},"degraded")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} eq \"disruption\"'"),")\nand a CRITICAL alert for a total outage on an service (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} eq \"outage\"'"),")."),(0,n.kt)("p",null,"All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \\\n    --plugin='apps::google::workspace::plugin' \\\n    --mode=services \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Troubleshooting plugins")))}h.isMDXComponent=!0}}]);