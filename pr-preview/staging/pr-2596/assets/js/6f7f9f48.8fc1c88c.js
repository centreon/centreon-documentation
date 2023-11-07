"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[64870],{67903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),i=n(51715),r=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"applications-nginx-plus-restapi",title:"Nginx Plus Restapi"},c=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-nginx-plus-restapi",id:"integrations/plugin-packs/procedures/applications-nginx-plus-restapi",title:"Nginx Plus Restapi",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-nginx-plus-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-nginx-plus-restapi",title:"Nginx Plus Restapi"},sidebar:"pp",previous:{title:"Netdata RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi"},next:{title:"Nginx Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for ?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to mynginxplus.com:443</code>",id:"unknown-500-cant-connect-to-mynginxpluscom443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"How do I remove the <em>count</em> perfdatas if I want to filter on just one application ?",id:"how-do-i-remove-the-count-perfdatas-if-i-want-to-filter-on-just-one-application-",level:3}],g={toc:m},k="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"NGINX Plus is a software load balancer, web server, and content cache built on top of open source NGINX."),(0,a.kt)("p",null,"The Centreon Plugin and Monitoring Connectors rely on the Nginx Plus Rest API to collect the status of the Nginx resources."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications"),(0,a.kt)("li",{parentName:"ul"},"Web Server"),(0,a.kt)("li",{parentName:"ul"},"Load Balancer"),(0,a.kt)("li",{parentName:"ul"},"Content cache")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)("p",null,"More information about collected metrics is available in the official Nginx Plus API documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/"},"https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/")),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.idle.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of idle connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.accepted.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of accepted connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.dropped.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of dropped connections"))))),(0,a.kt)(r.Z,{value:"Http-Zone",label:"Http-Zone",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.requests.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Requests http-zone per second. Unit : /s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.requests.discarded.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of requests http-zone discarded.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic in of http-zone in Bytes per second. Unit : b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic out of http-zone in Bytes per second. Unit : b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.responses.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number total of http-zone responses")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.responses.","[1xx,2xx,3xx,4xx,5xx]",".count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number 1xx,2xx,3xx,4xx,5xx of http-zone responses"))))),(0,a.kt)(r.Z,{value:"Ssl",label:"Ssl",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ssl.handshakes.succeeded.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSL Handshakes succeeded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ssl.handshakes.failed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSL Handshakes failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ssl.sessions.reuses.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSL sessions reuses")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"A service account is required to request the Nginx Plus API. It needs to have sufficient reading privileges in the environment.\nMore infomation is avaible in official Nginx documentation : ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api"},"https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring Nginx Plus resources: :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Nginx Plus")," Monitoring Connector"))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring Nginx Plus resources :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-nginx-plus-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Nginx Plus")," Monitoring Connector")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This Monitoring Connector is designed to have in Centreon one host per Nginx Plus environment.\nAdding a host into Centreon, link it to the template named ",(0,a.kt)("em",{parentName:"p"},"App-Nginx-Plus-Restapi-custom"),".\nOnce the template applied, some Macros have to be configured:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nginx basic username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nginx basic password.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify api path (Default: '/api/6')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for-"},"How to test the Plugin and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test\nby running the following command (Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api-path")," have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \\\n    --plugin=apps::nginx::nginxplus::restapi::plugin \\\n    --mode=connections \\\n    --hostname='mynginxplus.com' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiuser' \\\n    --api-password='myapipassword' \\\n    --api-path='/api/6' \\\n    --warning-active='60' \\\n    --critical-active='80'\n    --warning-idle='8' \\\n    --critical-idle='10' \\\n    --warning-accepted='50' \n    --critical-accepted='65' \\\n    --warning-dropped='3' \\\n    --critical-dropped='5' \\\n    --verbose\n\nOK: Active : 5, Idle : 0, Accepted : 5, Dropped : 0|\n'connections.active.count'=5;;60;80; 'connections.idle.count'=1;;8;10; 'connections.accepted.count'=5;;50;65; 'connections.dropped.count'=0;;3;5;\n")),(0,a.kt)("p",null,"The above command checks the Nginx PLus connections (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=connections"),").\nIt uses an api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiuser'"),"), an api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,a.kt)("em",{parentName:"p"},"mynginxplus.com")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='mynginxplus.com'"),") on the port 443 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='/443'"),")\non the url ",(0,a.kt)("em",{parentName:"p"},"/api/6")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-path='/api/6'"),") using https (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),").\nThis command will trigger a WARNING alarm if the active connections increase to 60 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-active='60'"),")\nand a CRITICAL alarm if it increases to 80 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-active='80'"),")."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl --plugin=apps::nginx::nginxplus::restapi::plugin \n--mode=connections --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-mynginxpluscom443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to mynginxplus.com:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Nginx Plus API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," option in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the Nginx Plus API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."),(0,a.kt)("h3",{id:"how-do-i-remove-the-count-perfdatas-if-i-want-to-filter-on-just-one-application-"},"How do I remove the ",(0,a.kt)("em",{parentName:"h3"},"count")," perfdatas if I want to filter on just one application ?"),(0,a.kt)("p",null,"The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name")," parameter.\nTherefore, these useless perfdatas can be omitted by adding a perfdata filter : ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}h.isMDXComponent=!0}}]);