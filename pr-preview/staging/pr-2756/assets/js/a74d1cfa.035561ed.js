"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81177],{12225:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>m,metadata:()=>k,toc:()=>N});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"virtualization-nutanix-snmp",title:"Nutanix"},s=void 0,k={unversionedId:"integrations/plugin-packs/procedures/virtualization-nutanix-snmp",id:"integrations/plugin-packs/procedures/virtualization-nutanix-snmp",title:"Nutanix",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-nutanix-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp.md",tags:[],version:"current",frontMatter:{id:"virtualization-nutanix-snmp",title:"Nutanix"},sidebar:"pp",previous:{title:"Hyper-V NSCP Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi"},next:{title:"Proxmox VE Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi"}},d={},N=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:N},u="wrapper";function c(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(u,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Nutanix")," brings 4 different host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Virt-Nutanix-SNMP-custom"),(0,n.kt)("li",{parentName:"ul"},"Virt-Nutanix-VM-SNMP-custom"),(0,n.kt)("li",{parentName:"ul"},"Virt-Nutanix-Hypervisor-SNMP-custom"),(0,n.kt)("li",{parentName:"ul"},"Virt-Nutanix-Container-SNMP-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cluster-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Cluster-Usage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check cluster usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Container-Iops-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix containers IOPS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Latency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Container-Latency-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix containers latency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Container-Storage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix container storage usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Container-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Container-Usage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check container usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Disk-Usage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check disk usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Hypervisor-Cpu-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix hypervisor CPU usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Hypervisor-Iops-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix hypervisors IOPS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Latency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Hypervisor-Latency-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix hypervisor latency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Hypervisor-Memory-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix hypervisor memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Hypervisor-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Hypervisor-Usage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check hypervisor usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Vm-count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Hypervisor-Vm-Count-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check hypervisor virtual machines count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage-Pool-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Storage-Pool-Usage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check storage pool usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-VM-Cpu-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix virtual machine CPU usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-VM-Iops-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix virtual machine IOPS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Latency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-VM-Latency-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix virtual machine latency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Power-State"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-VM-Power-State-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix virtual machine power state"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-VM-Traffic-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Nutanix virtual machine traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Vm-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-Vm-Usage-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check virtual machine usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Host",label:"Host",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Nutanix VM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Nutanix virtal machines by requesting its SNMP agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Nutanix Container"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Nutanix containers by requesting its SNMP agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Nutanix Hypervisor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Nutanix hypervisors by requesting its SNMP agent")))),(0,n.kt)("p",null,"More information about discovering hosts automatically is available on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"dedicated page"),".")),(0,n.kt)(i.Z,{value:"Service",label:"Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-SNMP-Disk-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover the disk partitions and monitor space occupation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Nutanix-SNMP-Storage-Pools"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover the storage pools and their usage")))),(0,n.kt)("p",null,"More information about discovering services automatically is available on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"dedicated page"),"\nand in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#discovery-rules"},"following chapter"),"."))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Cluster-Usage",label:"Cluster-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cluster.average.io.latency.microseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\xb5s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cluster.operations.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cluster.storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"))))),(0,n.kt)(i.Z,{value:"Container-Usage",label:"Container-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"container"),"#container.average.io.latency.microseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\xb5s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"container"),"#container.operations.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"container"),"#container.storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"))))),(0,n.kt)(i.Z,{value:"Disk-Usage",label:"Disk-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"disk"),"#disk.average.io.latency.microseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\xb5s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"disk"),"#disk.storage.inodes.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"disk"),"#disk.operations.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"disk"),"#status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"disk"),"#disk.storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"))))),(0,n.kt)(i.Z,{value:"Hypervisor-Usage",label:"Hypervisor-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"hypervisor"),"#hypervisor.average.io.latency.microseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\xb5s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"hypervisor"),"#hypervisor.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"hypervisor"),"#hypervisor.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"hypervisor"),"#hypervisor.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"hypervisor"),"#hypervisor.vm.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"hypervisor"),"#hypervisor.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops"))))),(0,n.kt)(i.Z,{value:"Storage-Pool-Usage",label:"Storage-Pool-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sp"),"#storagepool.average.io.latency.microseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\xb5s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sp"),"#storagepool.operations.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"sp"),"#storagepool.storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"))))),(0,n.kt)(i.Z,{value:"Vm-Usage",label:"Vm-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.average.io.latency.microseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\xb5s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm-power-state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm"),"#vm.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iops")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,n.kt)("p",null,"To monitor your Nutanix system, SNMP v2 or v3 must be enabled and configured: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://portal.nutanix.com/page/documents/kbs/details?targetId=kA0600000008bAECAY"},"https://portal.nutanix.com/page/documents/kbs/details?targetId=kA0600000008bAECAY"))),(0,n.kt)("h3",{id:"network-flow"},"Network flow"),(0,n.kt)("p",null,"The network flows should be allowed from the Centreon poller to the Nutanix appliance over UDP port 161 (SNMP)."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Nutanix")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Nutanix-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Nutanix")," Centreon Monitoring Connector."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Nutanix")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Nutanix-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Nutanix")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-nutanix-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Nutanix")," Centreon Monitoring Connector.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Nutanix")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"Virt-Nutanix-SNMP-custom")," template to the host.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"FILTERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \\\n    --plugin=cloud::nutanix::snmp::plugin \\\n    --mode=hypervisor-usage \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --filter-name='' \\\n    --warning-vm-count='' \\\n    --critical-vm-count='' \\\n    --filter-counters='' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Hypervisor 'abc-123ntx1' VM Count : 2 | 'abc-123ntx1#hypervisor.vm.count'=2;;;0; \n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \\\n    --plugin=cloud::nutanix::snmp::plugin \\\n    --mode=hypervisor-usage \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \\\n    --plugin=cloud::nutanix::snmp::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmp-checks"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}c.isMDXComponent=!0}}]);