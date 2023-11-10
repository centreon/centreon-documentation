"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[48311],{55538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});r(67294);var a=r(3905),n=r(51715),l=r(7626);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"cloud-azure-database-sqlserver",title:"Azure SQL Server"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-database-sqlserver",id:"integrations/plugin-packs/procedures/cloud-azure-database-sqlserver",title:"Azure SQL Server",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-database-sqlserver",title:"Azure SQL Server"},sidebar:"pp",previous:{title:"Azure SQL Managed Instance",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-azure-database-sqlmanagedinstance"},next:{title:"Azure Storage Account",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-azure-storage-storageaccount"}},m={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,p=s(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){o(e,t,r[t])}))}return e}({},k,p),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("strong",{parentName:"p"},"Azure SQL Server")," brings a host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-Azure-Database-SqlServer-custom")),(0,a.kt)("p",null,"It brings the following service template:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Server-Status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Database-SqlServer-Server-Status-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check SQL server status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("strong",{parentName:"p"},"Azure SQL Server")," includes a Host Discovery provider to\nautomatically discover the Azure instances of a given subscription and add them\nto the Centreon configuration. This provider is named ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Azure SQL Server"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:r(44504).Z,width:"406",height:"126"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the ",(0,a.kt)("strong",{parentName:"p"},"api")," custom mode. ",(0,a.kt)("strong",{parentName:"p"},"azcli")," is not supported.")),(0,a.kt)("p",null,"More information about discovering hosts automatically is available on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"dedicated page"),"."),(0,a.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,a.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Server-Status",label:"Server-Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Server health status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure on the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Azure SQL Server")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-SqlServer-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("strong",{parentName:"li"},"Azure SQL Server")," Centreon Monitoring Connector."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Azure SQL Server")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-SqlServer-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Azure SQL Server")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-database-sqlserver\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("strong",{parentName:"li"},"Azure SQL Server")," Centreon Monitoring Connector.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," field, set the following IP address: ",(0,a.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,a.kt)("li",{parentName:"ul"},"Aplly the ",(0,a.kt)("strong",{parentName:"li"},"Cloud-Azure-Database-SqlServer-custom")," template to the host."),(0,a.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.\nThese mandatory macros differ depending on the custom mode used.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Two methods can be used to set the macros:")),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Full ID of the Resource (",(0,a.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>"),")\nin ",(0,a.kt)("strong",{parentName:"li"},"AZURERESOURCE")),(0,a.kt)("li",{parentName:"ul"},"Resource name in the ",(0,a.kt)("strong",{parentName:"li"},"AZURERESOURCE")," macro, and resource group name in the ",(0,a.kt)("strong",{parentName:"li"},"AZURERESOURCEGROUP")," macro.")))),(0,a.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZUREAPICUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,a.kt)("strong",{parentName:"td"},"api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure SQL Server resource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant ID"))))),(0,a.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLICUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,a.kt)("strong",{parentName:"td"},"azcli"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure SQL Server resource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))))),(0,a.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_database_sqlserver_api.pl \\\n    --plugin=cloud::azure::database::sqlserver::plugin \\\n    --mode=server-status \\\n    --resource='SQLSRV001ABCD' \\\n    --resource-group='RSG1234' \\\n    --custommode='api' \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --proxyurl='' \\\n    --location='' \\\n    --filter-name='' \\\n    --warning-status='' \\\n    --critical-status='%{state} ne \"Ready\"' \\\n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Server 'SQLSRV001ABCD' State: '%s' [FQDN:'%s'] | \n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_database_sqlserver_api.pl \\\n    --plugin=cloud::azure::database::sqlserver::plugin \\\n    --mode=server-status \\\n    --help\n")),(0,a.kt)("p",null,"All available modes can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_database_sqlserver_api.pl \\\n    --plugin=cloud::azure::database::sqlserver::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}h.isMDXComponent=!0},44504:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);