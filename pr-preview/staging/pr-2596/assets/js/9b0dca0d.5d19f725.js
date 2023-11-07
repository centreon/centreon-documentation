"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77692],{22730:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>g});a(67294);var r=a(3905),n=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"cloud-azure-database-mariadb",title:"Azure Database for MariaDB"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-database-mariadb",id:"integrations/plugin-packs/procedures/cloud-azure-database-mariadb",title:"Azure Database for MariaDB",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-database-mariadb",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-database-mariadb",title:"Azure Database for MariaDB"},sidebar:"pp",previous:{title:"Azure Data Factory",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-azure-datafactory-factories"},next:{title:"Azure Database for MySQL",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql"}},u={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],c={toc:g},k="wrapper";function b(t){var{components:e}=t,s=p(t,["components"]);return(0,r.kt)(k,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){i(t,e,a[e])}))}return t}({},c,s),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("strong",{parentName:"p"},"Azure Database for MariaDB")," brings a host templates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud-Azure-Database-MariaDB-custom")),(0,r.kt)("p",null,"It brings the following service templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Connections"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-Connections-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB connections statistics"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-Cpu-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB CPU usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IO-Consumption"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-IO-Consumption-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB IO usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-Memory-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB memory usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replication"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-Replication-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB replication status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-Storage-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB storage statistics"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Traffic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-MariaDB-Traffic-Api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Azure Database for MariaDB network usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("strong",{parentName:"p"},"Azure Database for MariaDB")," includes a Host Discovery provider to\nautomatically discover the Azure instances of a given subscription and add them\nto the Centreon configuration. This provider is named ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Azure Database for MariaDB"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(40699).Z,width:"581",height:"181"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the ",(0,r.kt)("strong",{parentName:"p"},"api")," custom mode. ",(0,r.kt)("strong",{parentName:"p"},"azcli")," is not supported.")),(0,r.kt)("p",null,"More information about discovering hosts automatically is available on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"dedicated page"),"."),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.connections.active.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.connections.failed.count"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.cpu.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"IO-Consumption",label:"IO-Consumption",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.ioconsumption.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Replication",label:"Replication",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.slave.latency.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.serverlog.limit.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.serverlog.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.serverlog.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.backup.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.limit.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.storage.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,r.kt)(l.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.traffic.in.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"azmariadb.traffic.out.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure on the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Azure Database MariaDB")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-MariaDB-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"Azure Database for MariaDB")," Centreon Monitoring Connector."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"Azure Database MariaDB")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-MariaDB-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"Azure Database for MariaDB")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-database-mariadb\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"Azure Database for MariaDB")," Centreon Monitoring Connector.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," field, set the following IP address: ",(0,r.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,r.kt)("li",{parentName:"ul"},"Aplly the ",(0,r.kt)("strong",{parentName:"li"},"Cloud-Azure-Database-MariaDB-custom")," template to the host."),(0,r.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.\nThese mandatory macros differ depending on the custom mode used.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Two methods can be used to set the macros:")),(0,r.kt)("blockquote",null,(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Full ID of the Resource (",(0,r.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>"),")\nin ",(0,r.kt)("strong",{parentName:"li"},"AZURERESOURCE")),(0,r.kt)("li",{parentName:"ul"},"Resource name in the ",(0,r.kt)("strong",{parentName:"li"},"AZURERESOURCE")," macro, and resource group name in the ",(0,r.kt)("strong",{parentName:"li"},"AZURERESOURCEGROUP")," macro.")))),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZUREAPICUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,r.kt)("strong",{parentName:"td"},"api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Database MariaDB resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tenant ID"))))),(0,r.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLICUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,r.kt)("strong",{parentName:"td"},"azcli"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Database MariaDB resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_database_mariadb_api.pl \\\n    --plugin=cloud::azure::database::mariadb::plugin \\\n    --mode=traffic \\\n    --custommode='api' \\\n    --resource='' \\\n    --resource-group='' \\\n    --subscription='' \\\n    --tenant='' \\\n    --client-id='' \\\n    --client-secret='' \\\n    --proxyurl='' \\\n    --filter-metric='' \\\n    --filter-dimension='' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='Average' \\\n    --warning-serverlog-percent='' \\\n    --critical-serverlog-percent='' \\\n    --warning-storage-percent='' \\\n    --critical-storage-percent='' \\\n    --warning-storage-backup='' \\\n    --critical-storage-backup='' \\\n    --warning-storage-used='' \\\n    --critical-storage-used='' \\\n    --warning-storage-limit='' \\\n    --critical-storage-limit='' \\\n    --warning-serverlog-usage='' \\\n    --critical-serverlog-usage='' \\\n    --warning-serverlog-limit='' \\\n    --critical-serverlog-limit='' \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'myresource' Statistic 'maximum' Metrics Server Log storage percent: 0.00%, Storage Percent: 14.41%, Backup Storage used: 28.90GB, Storage Used: 21.62GB, Storage Limit: 150.00GB, Server Log storage used: 0.00B, Server Log storage limit: 7.00GB | 'myresource~maximum#azmariadb.storage.serverlog.usage.percentage'=0.00%;;;0; 'myresource~maximum#azmariadb.storage.usage.percentage'=14.41%;;;0; 'myresource~maximum#azmariadb.storage.backup.usage.bytes'=31029043513.00B;;;0; 'myresource~maximum#azmariadb.storage.usage.bytes'=23212425216.00B;;;0; 'myresource~maximum#azmariadb.storage.limit.bytes'=161061273600.00B;;;0; 'myresource~maximum#azmariadb.storage.serverlog.usage.bytes'=0.00B;;;0; 'myresource~maximum#azmariadb.storage.serverlog.limit.bytes'=7516192768.00B;;;0;\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_database_mariadb_api.pl \\\n    --plugin=cloud::azure::database::mariadb::plugin \\\n    --mode=storage \\\n    --help\n")),(0,r.kt)("p",null,"All available modes can be displayed by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_database_mariadb_api.pl \\\n    --plugin=cloud::azure::database::mariadb::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}b.isMDXComponent=!0},40699:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/cloud-azure-database-mariadb-provider-88915f9c85d7c847faea90221a0767c9.png"}}]);