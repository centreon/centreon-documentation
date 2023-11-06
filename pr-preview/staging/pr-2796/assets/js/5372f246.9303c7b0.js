"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10245],{57318:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"cloud-cadvisor-api",title:"cAdvisor API"},p=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-cadvisor-api",id:"integrations/plugin-packs/procedures/cloud-cadvisor-api",title:"cAdvisor API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-cadvisor-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-cadvisor-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-cadvisor-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-cadvisor-api.md",tags:[],version:"current",frontMatter:{id:"cloud-cadvisor-api",title:"cAdvisor API"},sidebar:"pp",previous:{title:"cAdvisor",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-prometheus-cadvisor-api"},next:{title:"Cloud Foundry",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-cloudfoundry-api"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitored objects",id:"monitored-objects",level:2},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"cAdvisor",id:"cadvisor",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:3},{value:"How to test my plugin and what do the main parameters stand for?",id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: curl perform error : Timeout was reached",id:"unknown-curl-perform-error--timeout-was-reached",level:3},{value:"UNKNOWN: No containers found or no data available for this specific metric.",id:"unknown-no-containers-found-or-no-data-available-for-this-specific-metric",level:3}],k={toc:m},g="wrapper";function f(t){var{components:e}=t,n=c(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"cAdvisor (Container Advisor) provides container users an understanding of the resource usage and\nperformance characteristics of their running containers. "),(0,a.kt)("p",null,"It is a running daemon that collects, aggregates, processes, and exports information about running containers."),(0,a.kt)("p",null,"This Pack aims to monitor metrics exposed through cAdvisor API endpoint. "),(0,a.kt)("h2",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("p",null,"This Pack contains one Host Template and several Service Templates to monitor node resource allocation\nand container performances: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Container-Usage"),(0,a.kt)("li",{parentName:"ul"},"Container-Disk-IO"),(0,a.kt)("li",{parentName:"ul"},"Container-Traffic"),(0,a.kt)("li",{parentName:"ul"},"Node-Status")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("p",null,"The cAdvisor API Pack comes with several service discovery rules."),(0,a.kt)("p",null,"To monitor container metrics, you must launch a discovery to add relevant services:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rule"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud-cAdvisor-API-Container-Disk-IO"),(0,a.kt)("td",{parentName:"tr",align:null},"Discover containers and monitor Disk-IO metrics")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud-cAdvisor-API-Container-Usage"),(0,a.kt)("td",{parentName:"tr",align:null},"Discover containers and monitor CPU & RAM consumption")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud-cAdvisor-API-Container-Traffic"),(0,a.kt)("td",{parentName:"tr",align:null},"Discover containers and monitor bandwidth utilization")))),(0,a.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Container-Usage",label:"Container-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.cpu.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of allocated CPU(s)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.cpu.user.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU User utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.cpu.system.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU System utilization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.memory.cache.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cached memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.memory.rss.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"RSS memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id>#container.swap.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SWAP memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")))),(0,a.kt)("p",null,"By default, the --use-name flag will instance the metric with the <container_name>.\nIf you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.")),(0,a.kt)(i.Z,{value:"Container-Disk-IO",label:"Container-Disk-IO",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id:device>#disk.io.read.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Disk I/O Read from the container"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id:device>#disk.io.write.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Disk I/O Read from the container"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")))),(0,a.kt)("p",null,"By default, the --use-name flag will instance the metric with the <container_name>.\nIf you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.")),(0,a.kt)(i.Z,{value:"Container-Traffic",label:"Container-Traffic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id.network_int>#container.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Container incoming traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"<container_name_or_id.network_int>#container.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Container outgoing traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bps")))),(0,a.kt)("p",null,"By default, the --use-name flag will instance the metric with the <container_name>.\nIf you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"cadvisor"},"cAdvisor"),(0,a.kt)("p",null,"A running cAdvisor container should be available. You can refer to the official\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor#quick-start-running-cadvisor-in-a-docker-container"},"quick start"),"."),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The Poller should be able to reach the cAdvisor Host over the TCP/8080 port. Note that the port\nmay be different on your setup. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor containers with cAdvisor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-cAdvisor-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"cAdvisor API")," Monitoring Connector through the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor containers with cAdvisor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-cAdvisor-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-cadvisor-api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"cAdvisor API")," Monitoring Connector through the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,a.kt)("h3",{id:"host-configuration"},"Host configuration"),(0,a.kt)("p",null,"Add a host from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration > Hosts")," menu and select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloud-cAdvisor-API")," template. "),(0,a.kt)("p",null,"Here is a quick description of available configuration Macros: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Macro"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CADVISORAPIPROTO")),(0,a.kt)("td",{parentName:"tr",align:null},"Protocol used to talk with the cAdvisor API"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CADVISORAPIPORT")),(0,a.kt)("td",{parentName:"tr",align:null},"Network port cAdvisor API listens over"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"8080"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CADVISORAPIPATH")),(0,a.kt)("td",{parentName:"tr",align:null},"API Path to container metrics information"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/containers/docker/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CADVISORAPIEXTRAOPTIONS")),(0,a.kt)("td",{parentName:"tr",align:null},"Extraoptions you may want to add to your command"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--http-backend=curl --insecure"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PROXYURL")),(0,a.kt)("td",{parentName:"tr",align:null},"URL of a proxy to use to reach cAdvisor API"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button and you're good to push the configuration to\nthe Engines."),(0,a.kt)("h2",{id:"how-to-test-my-plugin-and-what-do-the-main-parameters-stand-for"},"How to test my plugin and what do the main parameters stand for?"),(0,a.kt)("p",null,"Once the plugin is installed, you can test it by logging into the CLI with the centreon-engine user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cadvisor_api.pl \\\n    --plugin=cloud::cadvisor::restapi::plugin --mode=traffic \\\n    --hostname=10.1.1.136 --port='8080' --proto='http' \\\n    --api-path='/containers/docker/' --http-backend=curl --insecure \\\n    --container-id='' --container-name='' --filter-name='^gray$' \\\n    --warning-traffic-in='' --critical-traffic-in='' \\\n    --warning-traffic-out='' --critical-traffic-out='' \\\n    --verbose --use-name\n")),(0,a.kt)("p",null,"Expected output is shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Container 'gray.eth0' Traffic In: 43.99 b/s, Traffic Out: 39.92 b/s | 'gray.eth0#container.traffic.in.bitspersecond'=43.99b/s;;;0; 'gray.eth0#container.traffic.out.bitspersecond'=39.92b/s;;;0;\nContainer 'gray.eth0' Traffic In: 43.99 b/s, Traffic Out: 39.92 b/s\n")),(0,a.kt)("p",null,"The command above checks the incoming and outgoing traffic for a container (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::cadvisor::restapi::plugin --mode=traffic"),").\nThe focus is on the gray (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name='^gray$'"),") container and we use this name as the perfdata instance ",(0,a.kt)("inlineCode",{parentName:"p"},"--use-name"),". "),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cadvisor_api.pl \\\n    --plugin=cloud::cadvisor::restapi::plugin --mode=traffic \\\n    --help\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-curl-perform-error--timeout-was-reached"},"UNKNOWN: curl perform error : Timeout was reached"),(0,a.kt)("p",null,"When this error occurs, check that you can reach the cAdvisor over the 8080/HTTP port. "),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," flag to obtain additional information about the reason of the failure."),(0,a.kt)("p",null,"If a proxy is required, add its URL within the PROXYURL Macro at the Host level."),(0,a.kt)("h3",{id:"unknown-no-containers-found-or-no-data-available-for-this-specific-metric"},"UNKNOWN: No containers found or no data available for this specific metric."),(0,a.kt)("p",null,"This error means that no data is available for this specific metric or that the container name used in\nthe filter might be mispelled (this can't happen if you use the service discoveru feature)."))}f.isMDXComponent=!0}}]);