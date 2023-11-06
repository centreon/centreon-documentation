"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[58183],{74426:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"applications-mulesoft-restapi",title:"Mulesoft Anypoint"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-mulesoft-restapi",id:"integrations/plugin-packs/procedures/applications-mulesoft-restapi",title:"Mulesoft Anypoint",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-mulesoft-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-mulesoft-restapi",title:"Mulesoft Anypoint"},sidebar:"pp",previous:{title:"MS Biztalk",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-biztalk"},next:{title:"Netbackup NSClient++ API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/applications-netbackup-nsclient-05-restapi"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery Rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"API Privileges",id:"api-privileges",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"How do I remove the <em>count</em> perfdatas if I want to filter on just one application ?",id:"how-do-i-remove-the-count-perfdatas-if-i-want-to-filter-on-just-one-application-",level:3}],f={toc:d},k="wrapper";function g(t){var{components:e}=t,a=s(t,["components"]);return(0,n.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},f,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Anypoint Platform helps you build a structured application network that connects applications, data, and devices with reusable APIs.\nThe unified Anypoint Platform makes it easy to discover, create, and manage APIs in a modular, organized layer.\nInstead of retrieving random and possibly unstable code snippets, you can \u201cshop\u201d for APIs created using the industry\u2019s best practices.\nThe Centreon Plugin and Monitoring Connectors rely on the Mulesoft Anypoint Rest API to collect the status of the Mulesoft resources."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Applications"),(0,n.kt)("li",{parentName:"ul"},"Servers"),(0,n.kt)("li",{parentName:"ul"},"Clusters"),(0,n.kt)("li",{parentName:"ul"},"Queue Messages")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery Rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Mulesoft-Restapi-Application-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Anypoint applications and monitor their status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Mulesoft-Restapi-Server-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Anypoint servers and monitor their status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Mulesoft-Restapi-Queue-Messages-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Anypoint MQ queues and monitor the related messages count")))))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)("p",null,"More information about collected metrics is available in the official Mulesoft Rest API documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/"},"https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Applications",label:"Applications",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current status of each application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.status.started.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of started applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.status.stopped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of stopped applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.applications.status.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of failed applications"))))),(0,n.kt)(i.Z,{value:"Clusters",label:"Clusters",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current status of each cluster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.clusters.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of clusters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.clusters.status.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of running clusters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.clusters.status.disconnected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of disconnected clusters"))))),(0,n.kt)(i.Z,{value:"Messages",label:"Messages",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.messages.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.inflight.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of inflight messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.received.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of received messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.sent.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of sent messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.visible.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of visible messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.mq.acked.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of acknowledged messages in the queue"))))),(0,n.kt)(i.Z,{value:"Servers",label:"Servers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current status of each server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.servers.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.servers.status.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of running servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mulesoft.servers.status.disconnected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of disconnected servers")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"api-privileges"},"API Privileges"),(0,n.kt)("p",null,"A service account with proper access in the right Mulesoft environment/organization has to be used.\nThis account has to own the privileges to manage Applications, Servers, Clusters and Messages Queues on the designated environment."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring Mulesoft Anypoint resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Mulesoft Anypoint")," Monitoring Connector"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring Mulesoft Anypoint resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-mulesoft-restapi.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Mulesoft Anypoint")," Monitoring Connector")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The Monitoring Connector is designed to monitor resources based on one host per Mulesoft environment/organization.\nAdding a host into Centreon, link it to the template named ",(0,n.kt)("em",{parentName:"p"},"App-Mulesoft-Restapi-custom"),".\nOnce the template applied, some Macros have to be configured:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ENVID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mulesoft Environment ID fetched from the Mulesoft Web console")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ORGID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mulesoft Organization ID fetched from the Mulesoft Web console")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"(X)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"REGIONID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mulesoft MQ region ID to use (only mandatory for ",(0,n.kt)("em",{parentName:"td"},"messages")," mode)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API password (",(0,n.kt)("em",{parentName:"td"},"password")," type should be ticked)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command (Parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"environment-id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"api-username"),"have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl \\\n    --plugin=apps::mulesoft::restapi::plugin \\\n    --mode=applications \\\n    --environment-id='1234abc-56de-78fg-90hi-1234abcdefg' \\\n    --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg' \\\n    --api-username='myapiuser' \\\n    --api-password='myapipassword' \\\n    --filter-name='myapplication1' \\\n    --warning-status='%{status} =~ /STOPPED/' \\\n    --critical-status='%{status} =~ /FAILED/' \\\n    --verbose\n    \n\nOK: Total applications Total : 1, Started : 1, Stopped : 0, Failed : 0 - Application 'myapplication1' Id: 123456, Status: STARTED |\n'mulesoft.applications.total.count'=1;;;0; 'mulesoft.applications.status.started.count'=1;;;0; 'mulesoft.applications.status.stopped.count'=0;;;0; 'mulesoft.applications.status.failed.count'=0;;;0;\nApplication 'myapplication1' Id: 123456, Status: STARTED\n\n")),(0,n.kt)("p",null,"The command above gets the status of a Mulesoft application (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=applications"),") named ",(0,n.kt)("em",{parentName:"p"},"myapplication1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name='myapplication1'"),").\nThis application stands within the ",(0,n.kt)("em",{parentName:"p"},"1234abc-56de-78fg-90hi-1234abcdefg")," environment and the ",(0,n.kt)("em",{parentName:"p"},"234abcd-56ef-78fg-90hi-1234abcdefg")," organization (",(0,n.kt)("inlineCode",{parentName:"p"},"---environment-id='1234abc-56de-78fg-90hi-1234abcdefg' --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg'"),"). "),(0,n.kt)("p",null,"This command would trigger a WARNING alert if the returned status of the application contains the word ",(0,n.kt)("em",{parentName:"p"},"STOPPED")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} =~ /STOPPED/'"),") and a CRITICAL alert if it contains the word ",(0,n.kt)("em",{parentName:"p"},"FAILED")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} =~ /FAILED/'"),")."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/centreon/plugins//centreon_mulesoft_restapi.pl --plugin=apps::mulesoft::restapi::plugin --mode=applications --help")),(0,n.kt)("h3",{id:"how-do-i-remove-the-count-perfdatas-if-i-want-to-filter-on-just-one-application-"},"How do I remove the ",(0,n.kt)("em",{parentName:"h3"},"count")," perfdatas if I want to filter on just one application ?"),(0,n.kt)("p",null,"The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name")," parameter.\nTherefore, these useless perfdatas can be omitted by adding a perfdata filter : ",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}g.isMDXComponent=!0}}]);