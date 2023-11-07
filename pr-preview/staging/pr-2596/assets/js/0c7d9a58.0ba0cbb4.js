"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[96464],{74411:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-monitoring-iplabel-ekara-restapi",title:"IP-Label Ekara Rest API"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",title:"IP-Label Ekara Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-ekara-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-iplabel-ekara-restapi",title:"IP-Label Ekara Rest API"},sidebar:"pp",previous:{title:"IP-Label datametrie API (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-datametrie-restapi"},next:{title:"IP-Label Newtest Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-newtest-restapi"}},k={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},u="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(u,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," brings 1 host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Monitoring-Iplabel-Ekara-Restapi-custom")),(0,n.kt)("p",null,"It brings the following Service Templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incidents"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Iplabel-Ekara-Incidents-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check IP-Label Ekara incidents"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scenario-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Iplabel-Ekara-Scenario-Status-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check IP-Label Ekara scenarios"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," includes a Host Discovery provider to automatically discover the Ekara scenarios and add them as hosts to the Centreon inventory.\nThis provider is named ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara"),"."),(0,n.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Incidents",label:"Incidents",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ekara.incidents.current.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ekara.incident.duration.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"incident-severity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"incident-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"trigger-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"))))),(0,n.kt)(i.Z,{value:"Scenario-Status",label:"Scenario-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario.availability.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario.time.interaction.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scenario.time.allsteps.total.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"steps"),"#scenario.step.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"steps"),"#scenario.steps.time.total.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A valid user account (username/password) with RO rights is required to authenticate against the Ekara Rest API"),(0,n.kt)("li",{parentName:"ul"},"The Ekara API must be reachable on port TCP/443 from the Centreon Poller")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara")," resources:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara")," resources:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," Centreon Monitoring Connector RPM on the Centreon Central server:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-iplabel-ekara-restapi\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"p"},"IP-Label Ekara Rest API")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," page."))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name")," & ",(0,n.kt)("strong",{parentName:"li"},"Alias")),(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," to ",(0,n.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Iplabel-Ekara-Restapi-custom")," template to apply to the Host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This is a dummy check")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"api.ekara.ip-label.net")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EKARAAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"https")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"FILTERID"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"FILTERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the Plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \\\n    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \\\n    --mode=scenarios \\\n    --hostname='api.ekara.ip-label.net' \\\n    --api-username='johndoe@company.com' \\\n    --api-password='MyPassw0rd' \\\n    --port='443' \\\n    --proto='https' \\\n    --proxyurl='' \\\n    --timeframe='900' \\\n    --filter-name='MyScenario' \\\n    --filter-id='' \\\n    --verbose\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Scenario 'MyScenario': status: Success (1), availability: 100% | 'MyScenario#scenario.availability.percentage'=100%;;;0;100\nScenario 'MyScenario':\n    status: Success (1), availability: 100%\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \\\n    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \\\n    --mode=scenarios \\\n    --help\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \\\n    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the API-based Plugins in\nthe ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"dedicated chapter"),"\nof the Centreon documentation."))}N.isMDXComponent=!0}}]);