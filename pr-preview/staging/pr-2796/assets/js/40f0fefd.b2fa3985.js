"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[50471],{51084:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"virtualization-vmware2-vcenter-generic",title:"VMware vCenter"},s=void 0,d={unversionedId:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic",id:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic",title:"VMware vCenter",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic.md",tags:[],version:"current",frontMatter:{id:"virtualization-vmware2-vcenter-generic",title:"VMware vCenter"},sidebar:"pp",previous:{title:"VMware ESX WS-MAN",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx-wsman"},next:{title:"VMware vCenter v4",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4"}},k={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery Rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon VMWare Connector",id:"centreon-vmware-connector",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I run my plugin through the CLI and what do the main parameters stand for ?",id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"UNKNOWN: Unknown container name &#39;default&#39; |",id:"unknown-unknown-container-name-default-",level:4},{value:"UNKNOWN: Cannot get response (timeout received)",id:"unknown-cannot-get-response-timeout-received",level:4},{value:"UNKNOWN: Container connection problem |",id:"unknown-container-connection-problem-",level:4}],c={toc:u},N="wrapper";function g(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(N,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},c,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"VMware is an software company based in the USA. VMware provides cloud computing and virtualization software and services."),(0,n.kt)("p",null,"The Centreon Plugin and Monitoring Connectors rely on the Centreon VMWare Connector to request the vCenter SDK."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clusters"),(0,n.kt)("li",{parentName:"ul"},"Datastores"),(0,n.kt)("li",{parentName:"ul"},"Licenses"),(0,n.kt)("li",{parentName:"ul"},"VMs")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery Rules"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-Datacenters-Alarm-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover the Datacenters and monitor the alarms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-vCenter-Clusters-Status-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover the Clusters and monitor the status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-vCenter-Datastores-Io-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Datastores and monitor the I/O")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-vCenter-Datastores-Iops-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Datastores and monitor the IOPs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-vCenter-Datastores-Usage-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Datastores and monitor the usage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-vCenter-Datastores-Vm-Count-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Datastores and monitor the number of running VMs")))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Datacenter-Alarms-Global",label:"Datacenter-Alarms-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the Datacenter"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datacenter.alarms.warning.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Total warning alarms"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datacenter.alarms.critical.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Total critical alarms"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dcname#datacenter.alarms.warning.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of warning alarms per Datacenter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dcname#datacenter.alarms.critical.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of critical alarms per Datacenter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Cluster-Cpu-Global",label:"Cluster-Cpu-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"cluster_name"),"#cluster.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total CPU usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"cluster_name"),"#cluster.cpu.utilization.mhz"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total CPU usage in MHz"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MHz"))))),(0,n.kt)(l.Z,{value:"Cluster-Status-Global",label:"Cluster-Status-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the Cluster"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Datastore-Io-Global",label:"Datastore-Io-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.read.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global read rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.write.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global write rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastorename#datastore.read.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Read rate per Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastorename#datastore.write.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write rate per Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,n.kt)(l.Z,{value:"Datastore-Iops-Global",label:"Datastore-Iops-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global read IOPS on the Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Global write IOPS on the Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.vm.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Read IOPS per VM on the Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.vm.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write IOPS per VM on the Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops"))))),(0,n.kt)(l.Z,{value:"Datastore-Usage-Global",label:"Datastore-Usage-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Usage of the Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free space left on the Datastore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Usage of the Datastore in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.space.provisioned.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Provisioned Space allocated to the VMs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(l.Z,{value:"Datastore-Vm-Count-Global",label:"Datastore-Vm-Count-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.vm.poweredon.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of powered on VMs on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.vm.poweredoff.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of powered off VMs on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datastore.vm.suspended.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of suspended VMs on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Esx-Storage-Global",label:"Esx-Storage-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"adapters status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adapter statuses of the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.adapters.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of adapters on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.adapters.online.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of adapters with status online on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.adapters.offline.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of adapters with status offline on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.adapters.fault.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of adapters with status fault on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.adapters.unknown.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of adapters with status unknown on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"luns status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LUN statuses of the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.ok.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs with status ok on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.error.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs with status error on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.off.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs with status off on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.unknown.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs with status unknown on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.quiesced.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs with status quiesced on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.luns.degraded.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of LUNs with status degraded on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"paths status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Paths statuses of the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.paths.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of paths on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.paths.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of paths with status active on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.paths.disabled.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of paths with status disabed on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.paths.standby.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of paths with status standby on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.paths.dead.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of paths with status dead on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"esx_name"),"#host.paths.unknown.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of paths with status unknown on the ESX"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"licenses.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of licenses"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"license_name"),"#license.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of used resources on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"license_name"),"#license.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of free resources on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"license_name"),"#license.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of used resources on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"license_name"),"#license.expires.days"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Expiration time"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Vm-Tools-Global",label:"Vm-Tools-Global",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.tools.notupdated.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of VMs with VM-Tools not updated (default threshold)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.tools.notrunning.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of VMs with VM-Tools not running (default threshold)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm.tools.notinstalled.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of VMs with VM-Tools not installed (default threshold)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"centreon-vmware-connector"},"Centreon VMWare Connector"),(0,n.kt)("p",null,"For the VMWare monitoring, Centreon use daemon to connect and request the vCenter."),(0,n.kt)("p",null,"Install this daemon on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yum install centreon-plugin-Virtualization-VMWare-daemon\n")),(0,n.kt)("p",null,'To configure the access to your infrastructure, edit the\n"/etc/centreon/centreon',"_",'vmware.pm" configuration file:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        default => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        }\n    }\n);\n\n1;\n")),(0,n.kt)("p",null,"Make sure to replace variables with needed information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"ip","_","hostname"),": IP address or hostname of the vCenter or ESX (if standalone),"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"username"),': username with at least "read only" access to the vCenter or ESX (you can use domain user),'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"password"),": password of the username.")),(0,n.kt)("p",null,"You can configure multiple vCenter or ESXi connections using this\nstructure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        'my_first_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        },\n        'my_other_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<DOMAIN>\\<username>',\n            password => '<password>'\n        },\n    },\n    port => 5700\n);\n\n1;\n")),(0,n.kt)("p",null,"Each entry is called a ",(0,n.kt)("strong",{parentName:"p"},"container"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'You can also define the "port" attribute to change listening port.')),(0,n.kt)("p",null,"Then start the daemon and make sure it is configured to start at server boot:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start centreon_vmware\nsystemctl enable centreon_vmware\n")),(0,n.kt)("p",null,'Make sure that the daemon configuration works fine by looking for errors in\n"/var/log/centreon/centreon',"_",'vmware.log".'),(0,n.kt)("h3",{id:"network-flows"},"Network flows"),(0,n.kt)("p",null,"The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the vCenter."),(0,n.kt)("p",null,"The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the VMWare Connector Centreon Plugin on every poller expected to monitor VMWare infrastructures:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the 'Vmware vCenter' Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page "))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the VMWare Connector Centreon Plugin on every poller expected to monitor the VMWare Infrastructures:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-vmware2-vcenter-generic.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Install the 'Vmware vCenter' Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page ")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,n.kt)("li",{parentName:"ul"},'Apply the relevant Host Template "Virt-VMWare2-VCenter-custom", and configure the mandatory Macros:')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWARECONTAINER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of your container in the file centreon_vmware.pm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREHOST"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Centreon server that launches the connection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 5700")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I run my plugin through the CLI and what do the main parameters stand for ?"),(0,n.kt)("p",null,"Once you've installed the plugin, you can test it logging with centreon-engine user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=snapshot-vm \\\n    --custommode=connector \\\n    --connector-hostname='localhost' \\\n    --connector-port='5700' \\\n    --container='vcenter01' \\\n    --vm-hostname='.*' \\\n    --filter \\\n    --filter-uuid='' \\\n    --warning='259200' \\\n    --critical='432000' \\\n    --disconnect-status='ok' \\\n    --nopoweredon-skip \\\n    --check-consolidation \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;\n'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]\n")),(0,n.kt)("p",null,"This command above checks the virtual machine snapshots (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=apps::vmware::connector::plugin --mode=snapshot-vm"),").\nIt connects to the VMWare daemon on ",(0,n.kt)("strong",{parentName:"p"},"localhost")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--connector-hostname='localhost'"),") on the port ",(0,n.kt)("strong",{parentName:"p"},"5700")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--connector-port='5700'"),").\nThen the command requests the container ",(0,n.kt)("strong",{parentName:"p"},"vcenter01")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--container='vcenter01'"),")."),(0,n.kt)("p",null,"It will trigger a WARNING alarm if the age of the snapshot is older than 3 days / 259200s (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning='259200'"),")\nand a CRITICAL alarm if the snapshot is older than 5 days / 432000s (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical='432000'"),")."),(0,n.kt)("p",null,"All available modes with the plugin can be displayed with: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --list-mode\n")),(0,n.kt)("p",null,"The available options for a mode can be displayed using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=snapshot-vm  \\\n    --help\n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,n.kt)("h4",{id:"unknown-unknown-container-name-default-"},"UNKNOWN: Unknown container name 'default' |"),(0,n.kt)("p",null,"This error message means that the container invoked in the command doesn't exist in your VMWare connector configuration.\nCheck your macro ",(0,n.kt)("strong",{parentName:"p"},"CENTREONVMWARECONTAINER")," on your host or check the file ",(0,n.kt)("em",{parentName:"p"},"/etc/centreon/centreon_vmware.pm")),(0,n.kt)("h4",{id:"unknown-cannot-get-response-timeout-received"},"UNKNOWN: Cannot get response (timeout received)"),(0,n.kt)("p",null,"This error message means that the Plugin didn't get a response off the VMWare Daemon.\nCheck your connection parameters and the macros ",(0,n.kt)("strong",{parentName:"p"},"CENTREONVMWAREHOST")," and ",(0,n.kt)("strong",{parentName:"p"},"CENTREONVMWAREPORT"),"."),(0,n.kt)("h4",{id:"unknown-container-connection-problem-"},"UNKNOWN: Container connection problem |"),(0,n.kt)("p",null,"This error message means that you have a issue with the credentials provided for your Container.\nCheck your credentials in ",(0,n.kt)("em",{parentName:"p"},"/etc/centreon/centreon_vmware.pm"),".\nYou can also take a look into the log for more information: ",(0,n.kt)("em",{parentName:"p"},"/var/log/centreon/centreon_vmware.log")))}g.isMDXComponent=!0}}]);