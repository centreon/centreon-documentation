"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[18350],{8065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"cloud-azure-network-firewall",title:"Azure Firewall"},d=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-network-firewall",id:"integrations/plugin-packs/procedures/cloud-azure-network-firewall",title:"Azure Firewall",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-network-firewall.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-network-firewall",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-azure-network-firewall",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-network-firewall.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-network-firewall",title:"Azure Firewall"},sidebar:"pp",previous:{title:"Azure ExpressRoute",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-azure-network-expressroute"},next:{title:"Azure Front Door",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-azure-network-frontdoor"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"The Azure credentials have changed and the Plugin does not work anymore",id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],k={toc:m},h="wrapper";function g(e){var{components:t}=e,s=p(e,["components"]);return(0,a.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,s),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Azure Firewall is a managed, cloud-based network security service that protects your Azure Virtual Network resources.\nIt's a fully stateful firewall as a service with built-in high availability and unrestricted cloud scalability."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Azure Firewall")," can rely on Azure API or Azure CLI to collect the metrics related to the\nFirewall service."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure ",(0,a.kt)("em",{parentName:"li"},"Firewall")," instances")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Azure Firewall")," includes a Host Discovery ",(0,a.kt)("em",{parentName:"p"},"provider")," to automatically discover the Azure instances of a given\nsubscription and add them to the Centreon configuration.\nThis provider is named ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Azure Firewall"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(66017).Z,width:"609",height:"188"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.")),(0,a.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"firewall.health.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Firewall health state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(o.Z,{value:"Hits",label:"Hits",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"firewall.applications.rules.hits.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Application rules hit count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"firewall.newtork.rules.hits.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Network rules hit count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(o.Z,{value:"Throughput",label:"Throughput",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"firewall.data.processed.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Data processed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"firewall.throughput.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Throughput"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure on the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Firewall resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-Firewall-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Azure Firewall")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Firewall resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-Firewall-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-network-firewall.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Azure Firewall")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Log into Centreon and add a new Host through "Configuration > Hosts".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("em",{parentName:"p"},"IP Address/FQDN")," field, set the following IP address: '127.0.0.1'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("em",{parentName:"p"},"Cloud-Azure-Network-Firewall-custom")," template to apply to the Host.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.\nThese mandatory Macros differ regarding the custom mode used:"))),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the Firewall instance"))))),(0,a.kt)(o.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the Firewall instance")))))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser account and test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_network_firewall_api.pl \\\n    --plugin=cloud::azure::network::firewall::plugin \\\n    --mode=health \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='FWL001ABCD' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --warning-firewall-health-percentage='100:' \\\n    --critical-firewall-health-percentage='50:'\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'FWL001ABCD' Statistic 'average' Metrics Firewall health state: 100.00% |\n'FWL001ABCD~average#firewall.health.percentage'=100.00%;100:;50:;0;100\n")),(0,a.kt)("p",null,"The command above checks the ",(0,a.kt)("em",{parentName:"p"},"health")," of an Azure ",(0,a.kt)("em",{parentName:"p"},"Firewall")," instance using the 'api' custom-mode\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::network::firewall::plugin --mode=health --custommode=api"),").\nThis Key Vault is identified by its id (",(0,a.kt)("inlineCode",{parentName:"p"},"--resource='FWL001ABCD'"),") and the authentication parameters\nto be used with the custom mode are specified in the options (",(0,a.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx'\n--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,a.kt)("p",null,"The calculated metrics are an average (",(0,a.kt)("inlineCode",{parentName:"p"},"--aggregation='average'"),") of values on a 900 secondes / 15 min period (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\nwith one sample per 5 minutes (",(0,a.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if the ",(0,a.kt)("em",{parentName:"p"},"health")," of the Firewall instance is reported as less then 100%\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-firewall-health-percentage='100:'"),") and a CRITICAL alarm if less than 50% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-firewall-health-percentage='50:'"),")."),(0,a.kt)("p",null,"All the available options for a given mode can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_network_firewall_api.pl \\\n    --plugin=cloud::azure::network::firewall::plugin \\\n    --mode=datapath \\\n    --help\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h4",{id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore"},"The Azure credentials have changed and the Plugin does not work anymore"),(0,a.kt)("p",null,"The Plugin is using a cache file to keep connection information and avoid an authentication at each call.\nIf some of the authentication parameters change, you must delete the cache file. "),(0,a.kt)("p",null,"The cache file can be found within  ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," folder with a name similar to azure",(0,a.kt)("em",{parentName:"p"},"api"),(0,a.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,a.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,a.kt)("p",null,"When I run my command I obtain the following error message:\n",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,a.kt)("p",null,"It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives\nsome hints about where the problem stands. "),(0,a.kt)("p",null,"As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. "),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party\ndevice (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"This command result means that Azure does not have any value for the requested period.\nThis result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric has\nbeen collected and will prevent the UNKNOWN error message."))}g.isMDXComponent=!0},66017:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-azure-network-firewall-provider-7462475bea0f29497c0de1e485c70fba.png"}}]);