"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[96799],{38093:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>c});a(67294);var r=a(3905),n=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"hardware-storage-dell-powerstore-restapi",title:"Dell PowerStore Rest API"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi",title:"Dell PowerStore Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-dell-powerstore-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-dell-powerstore-restapi",title:"Dell PowerStore Rest API"},sidebar:"pp",previous:{title:"Dell ML6000",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-dell-ml6000-snmp"},next:{title:"Dell TL2000",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/hardware-storage-dell-tl2000-snmp"}},k={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:c},u="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,r.kt)(u,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){i(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,r.kt)("p",null,"The Centreon Pack ",(0,r.kt)("strong",{parentName:"p"},"Dell PowerStore")," brings a host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Storage-Dell-Powerstore-Restapi-custom")),(0,r.kt)("p",null,"It brings the following service templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Powerstore-Alerts-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Clusters"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Powerstore-Clusters-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check clusters"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Powerstore-Hardware-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Powerstore-Memory-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.none.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.info.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.minor.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.major.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.severity.critical.count"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Clusters",label:"Clusters",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clusters.detected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.latency.5m.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.latency.30m.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.latency.1h.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.latency.24h.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.latency.5m.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.latency.30m.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.latency.1h.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.latency.24h.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.5m.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.30m.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.1h.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.24h.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.5m.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.30m.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.1h.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.24h.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.bandwidth.5m.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.bandwidth.30m.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.bandwidth.1h.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.read.bandwidth.24h.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.bandwidth.5m.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.bandwidth.30m.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.bandwidth.1h.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"cluster_id"),"#cluster.io.write.bandwidth.24h.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,r.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"appliance status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"battery status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dimm status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enclosure status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"node status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"io module status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sfp status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_id"),"#memory.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_id"),"#memory.free.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_id"),"#memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To control your Dell PowerStore, the Rest API must be configured.\nE.g: ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf"},"https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Dell PowerStore")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"Dell PowerStore Rest API")," Centreon Pack on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Dell PowerStore")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"Dell PowerStore Rest API")," Centreon Pack RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-dell-powerstore-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"Dell PowerStore Rest API")," Centreon Pack on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," and ",(0,r.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,r.kt)("strong",{parentName:"li"},"Dell PowerStore")," server settings."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("strong",{parentName:"li"},"HW-Storage-Dell-Powerstore-Restapi-custom")," template to the host."),(0,r.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \\\n    --plugin=storage::dell::powerstore::restapi::plugin \\\n    --mode=alerts \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --verbose\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: 1 alerts detected | 'alerts.severity.none.count'=0;;;0; 'alerts.severity.info.count'=1;;;0; 'alerts.severity.minor.count'=0;;;0; 'alerts.severity.major.count'=1;;;0; 'alerts.severity.critical.count'=0;;;0; 'alerts.problems.current.count'=1;;;0;\ncritical: alert [severity: major] [name: XMS_JBOD_CONTROLLER_SAS1_HEALTH_LEVEL_LEVEL_1_CLEAR] [resource: ] 2021-09-08T08:13:14.804936+00:00\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \\\n    --plugin=storage::dell::powerstore::restapi::plugin \\\n    --mode=alerts \\\n    --help\n")),(0,r.kt)("p",null,"All available modes can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \\\n    --plugin=storage::dell::powerstore::restapi::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}N.isMDXComponent=!0}}]);