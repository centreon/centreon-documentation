"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[63406],{76669:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>g});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"virtualization-proxmox-ve-restapi",title:"Proxmox VE Rest API"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",id:"integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",title:"Proxmox VE Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi.md",tags:[],version:"current",frontMatter:{id:"virtualization-proxmox-ve-restapi",title:"Proxmox VE Rest API"},sidebar:"pp",previous:{title:"Nutanix",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp"},next:{title:"VMware ESX",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx"}},k={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:g},c="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(c,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Pack Proxmox VE brings a host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Virt-Proxmox-Ve-Restapi-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Proxmox-Ve-Node-Usage-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Proxmox-Ve-Storage-Usage-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Vm-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Proxmox-Ve-Vm-Usage-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Host",label:"Host",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Proxmox VM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover Proxmox virtual machines")))),(0,n.kt)("p",null,"More information about discovering hosts automatically is available on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"dedicated page"),".")),(0,n.kt)(i.Z,{value:"Service",label:"Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Proxmox-Ve-Restapi-Node-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover nodes and monitor utilization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Proxmox-Ve-Restapi-Storage-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover storages and monitor utilization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Virt-Proxmox-Ve-Restapi-Vm-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover virtual machines and monitor utilization")))),(0,n.kt)("p",null,"More information about discovering services automatically is available on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"dedicated page"),"\nand in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#discovery-rules"},"following chapter"),"."))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Node-Usage",label:"Node-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"node status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current overall node status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"node_id"),"#node.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"node_id"),"#node.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"node_id"),"#node.filesystem.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space used for root filesystem"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"node_id"),"#node.swap.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(i.Z,{value:"Storage-Usage",label:"Storage-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current overall storage status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storage_id"),"#storage.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(i.Z,{value:"Vm-Usage",label:"Vm-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"node status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current overall node status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.swap.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of read operations"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of write operations"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"vm_name"),"#vm.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To monitor, a user with read privileges is required: ",(0,n.kt)("inlineCode",{parentName:"p"},"VM.Monitor"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"VM.Audit"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Datastore.Audit"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Sys.Audit"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Sys.Syslog"),"."),(0,n.kt)("p",null,"Please refer to their official documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://pve.proxmox.com/wiki/Proxmox_VE_API"},"https://pve.proxmox.com/wiki/Proxmox_VE_API")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Proxmox VE")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Proxmox VE")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Proxmox VE")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Proxmox VE")," Centreon Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-proxmox-ve-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Proxmox VE")," Centreon Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Proxmox VE")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"Virt-Proxmox-Ve-Restapi-custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXMOXAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXMOXAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify http if needed (default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXMOXAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXMOXAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXMOXAPIREALM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api username realm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXMOXAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \\\n    --plugin=apps::proxmox::ve::restapi::plugin \\\n    --mode=storage \\\n    --hostname='10.0.0.1' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='my-username' \\\n    --api-password='my-password' \\\n    --realm='my-realm' \\\n    --verbose\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Storage 'storage/nuc/local' state: available, space total: 217.61 GB used: 145.86 GB (67.03%) free: 71.76 GB (32.97%) | 'storage/nuc/local#storage.space.usage.bytes'=156610641920B;;;0;233658822656\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \\\n    --plugin=apps::proxmox::ve::restapi::plugin \\\n    --mode=storage \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \\\n    --plugin=apps::proxmox::ve::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}N.isMDXComponent=!0}}]);