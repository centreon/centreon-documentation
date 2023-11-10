"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[23828],{53790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-vernemq-restapi",title:"VerneMQ Restapi"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-vernemq-restapi",id:"integrations/plugin-packs/procedures/applications-vernemq-restapi",title:"VerneMQ Restapi",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-vernemq-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-vernemq-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-vernemq-restapi",title:"VerneMQ Restapi"},sidebar:"pp",previous:{title:"Veritas Backup Exec NSCP Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi"},next:{title:"VMware VCSA RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-vmware-vcsa-restapi"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to myvernemq.com:8888</code>",id:"unknown-500-cant-connect-to-myvernemqcom8888",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"VerneMQ is a scalable and open source MQTT broker that connects IoT, M2M, Mobile, and web applications\nThe VerneMQ Monitoring Connector monitors Clusters, Listeners, Plugins, and sessions using the RestAPI."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VerneMQ including Clusters, Listeners, Plugins, Sessions")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)("p",null,"More information about collected metrics is available in the official VerneMQ documentation : ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vernemq.com/monitoring/introduction"},"https://docs.vernemq.com/monitoring/introduction")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Clusters",label:"Clusters",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of clusters"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clusters.running.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of clusters running"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clusters.notrunning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of cluster not running"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(o.Z,{value:"Listeners",label:"Listeners",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of listeners"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"listeners.running.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of listeners running"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"listeners.notrunning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of listeners not running"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(o.Z,{value:"Plugins",label:"Plugins",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"plugins.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of plugins"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,a.kt)(o.Z,{value:"Sessions",label:"Sessions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions.online.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of sessions online"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of sessions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"A number of distributions provide VerneMQ, including pre-built binary packages.\nSupport for these builds, if any, is being provided by the associated distribution vendor.\nTheir release cycle may lag behind VerneMQ source releases."),(0,a.kt)("p",null,"More information is available on the official documentation of VerneMQ : ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vernemq.com/getting-started"},"https://docs.vernemq.com/getting-started")),(0,a.kt)("p",null,"The VerneMQ HTTP API is enabled by default and installs an HTTP handler on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://myvernemq.com:8888/api/v1"),".\nThe centreon-engine user performs a RestAPI request to this system.\nYou must have generated one Token on VerneMQ server with the following command :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vmq-admin api-key create\n")),(0,a.kt)("p",null,"More information on VerneMQ HTTP API on : ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vernemq.com/administration/http-administration#managing-api-keys"},"https://docs.vernemq.com/administration/http-administration#managing-api-keys")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring VerneMQ resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Vernemq-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"VerneMQ RestAPI")," Monitoring Connector"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring VerneMQ resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Vernemq-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-vernemq-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"VerneMQ RestAPI")," Monitoring Connector")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Adding a Host into Centreon, link it to the Template named ",(0,a.kt)("em",{parentName:"p"},"App-Vernemq-Restapi-custom"),".\nOnce the template applied, some Macros have to be configured:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is http")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"VerneMQ API Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \\\n    --plugin=apps::mq::vernemq::restapi::plugin \\\n    --mode='sessions' \\\n    --hostname='myvernemq.com' \\\n    --port='8888' \\\n    --proto='http' \\\n    --api-key='12342939495003' \\\n    --warning-total='15' \\\n    --critical-total='20' \\\n    --verbose\n    \nOK: Sessions current online: 14, current total: 14 \n| 'sessions.online.count'=14;;;0; 'sessions.total.count'=14;;;15;20\n")),(0,a.kt)("p",null,"The command above gets the sessions of a VerneMQ RestAPI (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=sessions"),").\nIt uses ",(0,a.kt)("em",{parentName:"p"},"api-key"),", VerneMQ Token, (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-key='12342939495003'"),")\nand it connects to the Host ",(0,a.kt)("em",{parentName:"p"},"myvernemq.com")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--Hostname='myvernemq.com'"),")\non the port 8888 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='8888'"),") using http (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='http'"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \\\n    --plugin=apps::mq::vernemq::restapi::plugin \\\n    --mode='sessions' \\\n    --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-myvernemqcom8888"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to myvernemq.com:8888")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the VerneMQ RestAPI.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the VerneMQ RestAPI, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}h.isMDXComponent=!0}}]);