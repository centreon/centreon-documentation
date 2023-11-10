"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[96050],{9463:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-pvx-restapi",title:"Skylight PVX"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-pvx-restapi",id:"integrations/plugin-packs/procedures/applications-pvx-restapi",title:"Skylight PVX",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-pvx-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-pvx-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-pvx-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-pvx-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-pvx-restapi",title:"Skylight PVX"},sidebar:"pp",previous:{title:"Sendmail",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-sendmail-snmp"},next:{title:"Skype 2015",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-skype-2015-mssql"}},k={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"PVX API",id:"pvx-api",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},N="wrapper";function u(t){var{components:e}=t,s=o(t,["components"]);return(0,n.kt)(N,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,s),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Every PVX-Skylight instance provides XML API endpoints allowing Centreon to\nperform queries against it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:a(45834).Z,width:"1050",height:"1035"})),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector PVX brings 1 host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Pvx-Application-Restapi-custom")),(0,n.kt)("p",null,"It brings the following Service Templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Http-Hits-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Http-Hits-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the number of HTTP errors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Http-Hits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Http-Hits-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the number of HTTP errors"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Http-Hits-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Http-Hits-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the number of HTTP errors"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Connection-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Connection-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the connections attemps"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Connection-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check connections attemps"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Connection-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Connection-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the connections attemps"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check traffic by application."),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic-Layer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Layer-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check traffic by layer."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check traffic by instance"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-Traffic-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-Traffic-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check traffic by IP"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-User-Experience-Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-User-Experience-Application-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the user experience by application."),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-User-Experience"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-User-Experience-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the user experience by instance"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network-User-Experience-Server-Ip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Pvx-Network-User-Experience-Server-Ip-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the user experience by IP"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Http-Hits",label:"Http-Hits",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#http.hits.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"hits/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#http.hits.error.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"hits/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#http.hits.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(i.Z,{value:"Network-Connection",label:"Network-Connection",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connections.attempts.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"connections/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connection.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connections.ratio.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#connections.successful.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"connections/s"))))),(0,n.kt)(i.Z,{value:"Network-Traffic",label:"Network-Traffic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"traffic.client.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"traffic.server.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"traffic.aggregated.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#instance.traffic.client.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#instance.traffic.server.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#instance.traffic.aggregated.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,n.kt)(i.Z,{value:"Network-User-Experience",label:"Network-User-Experience",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"instances"),"#enduser.experience.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"The connector has been tested with the following versions: ","*"," PVX version 5.1.1"),(0,n.kt)("h3",{id:"pvx-api"},"PVX API"),(0,n.kt)("p",null,"To query PVX API, you need to generate an access key. This key will never expire\nand the procedure below is an extract from the\n",(0,n.kt)("a",{parentName:"p",href:"http://docs.performancevision.com/api_use.html"},"official documentation"),". In\neach step replace the value of the macros enclosed by '< ",">","' with yours."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k 'https://**<pvxapihost>**/api/login?user=**<user>**&password=**<password>**'`\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "result",\n    "result": "**session:91554086-842b-4b73-9028-c51d20d91b94**"\n}\n')),(0,n.kt)("p",null,"Thanks to the obtained session ID, execute the command below get a secret key"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k 'https://**<pvxapihost>**/api/create-api-key?name=**<keyname>**&_session=session:91554086-842b-4b73-9028-c51d20d91b94'`\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "result",\n    "result": "**secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0**"\n}\n')),(0,n.kt)("p",null,'In this example the API key is "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0".'),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"PVX")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Pvx-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"PVX")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"PVX")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Pvx-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"PVX")," Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-pvx-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"PVX")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"PVX")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"App-Pvx-Application-Restapi-custom")," template to apply to the Host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVX hostname")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVX API key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '443')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXAPIURLPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '/api')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PVXCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: 'api')")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the Plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \\\n    --plugin=apps::pvx::restapi::plugin \\\n    --mode=http-hits \\\n    --custommode='api' \\\n    --hostname='10.0.0.1' \\\n    --url-path='/api' \\\n    --api-key='' \\\n    --port='443' \\\n    --proto='https' \\\n    --timeframe='3600' \\\n    --instance='' \\\n    --warning-ratio='' \\\n    --critical-ratio='' \\\n    --warning-hits-error='' \\\n    --critical-hits-error='' \\\n    --warning-hits='40' \\\n    --critical-hits='60' \\\n    --use-new-perfdata \n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: ratio: 18 hits error: 2 hits/s hits: 39 hits/s | 'http.hits.percentage'=18;;;0; 'http.hits.error.persecond'=2hits/s;;;0; 'http.hits.persecond'=39hits/s;0:40;0:60;0; \n")),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the HTTP hits count is reported as\nover 40 (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-hits='40'"),") and a CRITICAL if over than 60\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-hits='40'"),") in the last hour (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='3600'"),")."),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \\\n    --plugin=apps::pvx::restapi::plugin \\\n    --mode=http-hits \\\n    --help\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \\\n    --plugin=apps::pvx::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the API-based Plugins in\nthe ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"dedicated chapter"),"\nof the Centreon documentation."))}u.isMDXComponent=!0},45834:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/skylight-pvx-connector-c10a1b9365cdaa0b44eb896d61bfbc98.png"}}]);