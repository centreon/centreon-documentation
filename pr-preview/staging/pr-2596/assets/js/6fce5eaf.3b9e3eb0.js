"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[47316],{84444:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});a(67294);var n=a(3905),r=a(51715),o=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"hardware-storage-netapp-santricity-restapi",title:"Netapp Santricity Restapi"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",title:"Netapp Santricity Restapi",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-netapp-santricity-restapi",title:"Netapp Santricity Restapi"},sidebar:"pp",previous:{title:"Netapp SNMP (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-snmp"},next:{title:"Netapp RestAPI (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-restapi"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SANtricity API configuration",id:"santricity-api-configuration",level:3},{value:"Online ressources",id:"online-ressources",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I test my configuration through the CLI and what do the main parameters stand for ?",id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to santricity.int.centreon.com:8080</code>",id:"unknown-500-cant-connect-to-santricityintcentreoncom8080",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"<code>UNKNOWN: Cannot load module &#39;Net::Curl::Easy&#39;</code>",id:"unknown-cannot-load-module-netcurleasy",level:4}],g={toc:u},k="wrapper";function h(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"SANtricity is a data management software that powers and administers the NetApp E-Series storage arrays.\nWith the SANtricity operating system (OS), you can perform all your management tasks while the storage remains online, with complete read and write data access."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardware"),(0,n.kt)("li",{parentName:"ul"},"Storage-Controllers"),(0,n.kt)("li",{parentName:"ul"},"Storage-Pools"),(0,n.kt)("li",{parentName:"ul"},"Storage-Systems"),(0,n.kt)("li",{parentName:"ul"},"Storage-Volumes")),(0,n.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,n.kt)("p",null,"Following metrics are collected from the SANtricity API:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check components operational status: battery, cbd, ctrl, drive, fan, psu, storage, thsensor. Unit: count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hardware.drive.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check drives temperature. Unit: \xb0C"))))),(0,n.kt)(o.Z,{value:"Storage Pools",label:"Storage Pools",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"raid","_","status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Raid status information"))))),(0,n.kt)(o.Z,{value:"Storage Controllers",label:"Storage Controllers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Controller operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU volume utilization. Unit: %")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.read.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO read usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.write.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO write usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System read IOPS usage. Unit: count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System write IOPS usage. Unit: count"))))),(0,n.kt)(o.Z,{value:"Storage Systems",label:"Storage Systems",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool space usage. Unit: B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool space percentage usage. Unit: %")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool free space. Unit: B"))))),(0,n.kt)(o.Z,{value:"Storage Volumes",label:"Storage Volumes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.read.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO read usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.write.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO write usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume read IOPS usage. Unit: count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume write IOPS usage. Unit: count")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"santricity-api-configuration"},"SANtricity API configuration"),(0,n.kt)("p",null,"To use the SANtricity API, you need to install and configure the SANtricity Web Services Proxy on a dedicated machine."),(0,n.kt)("p",null,"More information about the setup steps and the service configuration can be found in the official documentation hereafter:"),(0,n.kt)("h3",{id:"online-ressources"},"Online ressources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Installing the SANtricity Web Services software: ",(0,n.kt)("a",{parentName:"li",href:"https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165"},"https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165")),(0,n.kt)("li",{parentName:"ul"},"Configuring and using the SANtricity Rest API: ",(0,n.kt)("a",{parentName:"li",href:"https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html"},"https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html")," ")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Netapp SANtricity:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the centreon Web interface, install the  ",(0,n.kt)("em",{parentName:"li"},"Netapp Santricity Restapi")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Netapp SANtricity:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-netapp-santricity-restapi.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the centreon Web interface, install the  ",(0,n.kt)("em",{parentName:"li"},"Netapp Santricity Restapi")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Log into Centreon and add new host through "Configuration > Hosts".'),(0,n.kt)("li",{parentName:"ul"},'Apply the template "HW-Storage-Netapp-Santricity-Restapi-custom" and configure all the mandatories Macros:')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8080)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SANtricity API username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SANtricity API password. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify api path (Default: '/devmgr/v2')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I test my configuration through the CLI and what do the main parameters stand for ?"),(0,n.kt)("p",null,"Once the Centreon plugin installed, you can test it directly from the CLI by logging with the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \\\n    --plugin=storage::netapp::santricity::restapi::plugin \\\n    --hostname=sancitricy.int.centreon.com \\\n    --port=8080 \\\n    --proto=http \\\n    --api-path='/devmgr/v2' \\\n    --api-username='admin' \\\n    --api-password='xxxx' \\\n    --mode='storage-volumes' \\\n    --verbose \\\n    --warning-volume-status='%{status} =~ /degraded/i'\n    --critical-volume-status='%{status} =~ /failed/i'\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: storage system 'SAN-XXX' volumes are ok |\nchecking storage system 'SAN-XXXX'\n    volume 'Datastore_X' status: optimal\n    volume 'Datastore_Y' status: optimal\n")),(0,n.kt)("p",null,"The command above checks the status of the volumes (",(0,n.kt)("inlineCode",{parentName:"p"},"-mode=storage-volumes"),") of the SANtricity server ",(0,n.kt)("em",{parentName:"p"},"santricity.int.centreon.com")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=santricity.int.centreon.com"),")\nusing the API username ",(0,n.kt)("em",{parentName:"p"},"admin")," and the related password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='admin' --api-password='xxxx'"),").\nThe API connection uses the ",(0,n.kt)("em",{parentName:"p"},"HTTP")," protocol (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto=http"),") on the port ",(0,n.kt)("em",{parentName:"p"},"8080")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--port=8080"),").\nThe API path used is ",(0,n.kt)("em",{parentName:"p"},"/devmgr/v2")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-path='/devmgr/v2'"),")."),(0,n.kt)("p",null,"This command would trigger the following alerts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WARNING if a volume is in a degraded status."),(0,n.kt)("li",{parentName:"ul"},"CRITICAL if a volume is in a failed status.")),(0,n.kt)("p",null,"Some thresholds can also be set on metrics using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-*")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-*")," options\n(where ","*"," stands for the name of the metric)."),(0,n.kt)("p",null,"The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:               "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \\\n        --plugin=storage::netapp::santricity::restapi::plugin \\\n        --mode=storage-volumes \\\n    --help\n")),(0,n.kt)("p",null,"You can display all of the modes that come with the Plugin with the command below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \\\n    --plugin=storage::netapp::santricity::restapi::plugin \\\n    --list-mode                            \n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-santricityintcentreoncom8080"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to santricity.int.centreon.com:8080")),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Netapp SANtricity API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"When using a proxy to connect to the SANtricity API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,n.kt)("p",null,"In order to prevent this issue, use the ",(0,n.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."),(0,n.kt)("h4",{id:"unknown-cannot-load-module-netcurleasy"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Cannot load module 'Net::Curl::Easy'")),(0,n.kt)("p",null,"This error message means that a Perl library required to use the ",(0,n.kt)("em",{parentName:"p"},"curl")," backend is missing."),(0,n.kt)("p",null,"In order to fix this issue, install the 'Net::Curl::Easy' Perl library using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Net-Curl\n")))}h.isMDXComponent=!0}}]);