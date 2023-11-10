"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81719],{6511:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>k});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"cloud-azure-network-vpngateway",title:"Azure VPN Gateway"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-network-vpngateway",id:"integrations/plugin-packs/procedures/cloud-azure-network-vpngateway",title:"Azure VPN Gateway",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-network-vpngateway",title:"Azure VPN Gateway"},sidebar:"pp",previous:{title:"Azure Virtual Network",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork"},next:{title:"cAdvisor",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-prometheus-cadvisor-api"}},m={},k=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],c={toc:k},g="wrapper";function N(t){var{components:e}=t,s=p(t,["components"]);return(0,n.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},c,s),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Azure VPN Gateway")," brings a host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Azure-Network-VpnGateway-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Health"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Network-VpnGateway-Health-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check VPN gateway state"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Site-Traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Network-VpnGateway-Site-Traffic-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check inbound and outbound site traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Tunnel-Traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Network-VpnGateway-Tunnel-Traffic-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check inbound and outbound tunnel traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Vpn-Gateway-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Network-VpnGateway-Vpn-Gateway-Status-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check VPN gateway provisionning status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Azure VPN Gateway")," includes a Host Discovery provider to\nautomatically discover the Azure instances of a given subscription and add them\nto the Centreon configuration. This provider is named ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure VPN Gateway"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(87988).Z,width:"406",height:"126"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the ",(0,n.kt)("strong",{parentName:"p"},"api")," custom mode. ",(0,n.kt)("strong",{parentName:"p"},"azcli")," is not supported.")),(0,n.kt)("p",null,"More information about discovering hosts automatically is available on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"dedicated page"),"."),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Status Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last related status message"))))),(0,n.kt)(l.Z,{value:"Site-Traffic",label:"Site-Traffic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.site.traffic.bandwidth.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.p2s.traffic.bandwidth.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.p2s.connections.count"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Tunnel-Traffic",label:"Tunnel-Traffic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.tunnel.dropped.packets.in.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.tunnel.dropped.packets.out.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.tunnel.packets.in.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.tunnel.packets.out.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.tunnel.ingress.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvpngateway.tunnel.egress.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(l.Z,{value:"Vpn-Gateway-Status",label:"Vpn-Gateway-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Status Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status of the gateway deployment"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure on the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Azure VPN Gateway")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-VpnGateway-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Azure VPN Gateway")," Centreon Monitoring Connector."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Azure VPN Gateway")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-VpnGateway-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Azure VPN Gateway")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-network-vpngateway\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Azure VPN Gateway")," Centreon Monitoring Connector.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," field, set the following IP address: ",(0,n.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ul"},"Aplly the ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Azure-Network-VpnGateway-custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.\nThese mandatory macros differ depending on the custom mode used.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Two methods can be used to set the macros:")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Full ID of the Resource (",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>"),")\nin ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCE")),(0,n.kt)("li",{parentName:"ul"},"Resource name in the ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCE")," macro, and resource group name in the ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCEGROUP")," macro."))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZUREAPICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure VPN Gateway resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID"))))),(0,n.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"azcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure VPN Gateway resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \\\n    --plugin=cloud::azure::network::vpngateway::plugin \\\n    --mode=health \\\n    --custommode='api' \\\n    --resource='' \\\n    --resource-group='' \\\n    --subscription='' \\\n    --tenant='' \\\n    --client-id='' \\\n    --client-secret='' \\\n    --proxyurl='' \\\n    --ok-status='%{status} =~ /^Available$/' \\\n    --warning-status='' \\\n    --critical-status='%{status} =~ /^Unavailable$/' \\\n    --unknown-status='%{status} =~ /^Unknown$/' \\\n    --api-version=2017-07-01\\\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: VPN Gateway '%s' Provisioning State '%s' [Gateway type: '%s'] [VPN type: '%s'] | \n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \\\n    --plugin=cloud::azure::network::vpngateway::plugin \\\n    --mode=site-traffic \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \\\n    --plugin=cloud::azure::network::vpngateway::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}N.isMDXComponent=!0},87988:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);