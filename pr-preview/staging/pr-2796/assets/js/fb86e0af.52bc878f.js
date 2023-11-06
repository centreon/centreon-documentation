"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[76029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"cloud-azure-management-monitor",title:"Azure Monitor"},c=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-management-monitor",id:"integrations/plugin-packs/procedures/cloud-azure-management-monitor",title:"Azure Monitor",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-management-monitor.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-management-monitor",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-azure-management-monitor",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-management-monitor.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-management-monitor",title:"Azure Monitor"},sidebar:"pp",previous:{title:"Azure Management Costs",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-azure-management-costs"},next:{title:"Azure Network Interface",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-azure-network-networkinterface"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Perl dependencies (for &#39;api&#39; custom mode)",id:"perl-dependencies-for-api-custom-mode",level:3},{value:"Azure CLI 2.0 (for &#39;azcli&#39; custom mode)",id:"azure-cli-20-for-azcli-custom-mode",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new host",id:"create-a-new-host",level:3},{value:"Set host macros",id:"set-host-macros",level:3},{value:"Common macros",id:"common-macros",level:4},{value:"&#39;api&#39; custom mode macros",id:"api-custom-mode-macros",level:4},{value:"&#39;azcli&#39; custom mode macros",id:"azcli-custom-mode-macros",level:4},{value:"Available metrics",id:"available-metrics",level:2}],u={toc:m},d="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Cloud-Azure-Management-Monitor-Api\n")),(0,r.kt)("h3",{id:"perl-dependencies-for-api-custom-mode"},"Perl dependencies (for 'api' custom mode)"),(0,r.kt)("p",null,"By installing the plugin, some perl depencies will be installed :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON::XS\nDateTime\nDigest::MD5\nDigest::SHA\nLWP::UserAgent\nLWP::Protocol::https\nIO::Socket::SSL\nURI\nHTTP::ProxyPAC\n")),(0,r.kt)("p",null,"The login and access token handling will be made by the plugin itself."),(0,r.kt)("h3",{id:"azure-cli-20-for-azcli-custom-mode"},"Azure CLI 2.0 (for 'azcli' custom mode)"),(0,r.kt)("p",null,"The CLI needs at least Python version 2.7\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"},"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"),")."),(0,r.kt)("p",null,"On CentOS/RedHat, install with following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'(As root)\n# rpm --import https://packages.microsoft.com/keys/microsoft.asc\n# echo -e "[azure-cli]\\nname=Azure CLI\\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo\n# yum install azure-cli\n(As centreon-engine)\n# az login\n')),(0,r.kt)("p",null,"The shell should prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code CWT4WQZAD to authenticate.\n")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.com/devicelogin"},"https://microsoft.com/devicelogin")," and enter the given code."),(0,r.kt)("p",null,"Log in with your account credentials. You should use a service account.\nApplication is not yet supported."),(0,r.kt)("p",null,"The command line should now show:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n  {\n    "cloudName": "AzureCloud",\n    "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",\n    "isDefault": true,\n    "name": "N/A(tenant level account)",\n    "state": "Enabled",\n    "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",\n    "user": {\n      "name": "email@mycompany.onmicrosoft.com",\n      "type": "user"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"You now have a hidden azure directory where your token is stored in an\naccessTokens.json file."),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-new-host"},"Create a new host"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Management-Monitor-custom")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."),(0,r.kt)("h3",{id:"set-host-macros"},"Set host macros"),(0,r.kt)("p",null,"The following macros must be configured on host."),(0,r.kt)("h4",{id:"common-macros"},"Common macros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource name or id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource group (Required if resource's name is used)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCENAMESPACE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource namespace (Required if resource's name is used)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource type (Required if resource's name is used)")))),(0,r.kt)("h4",{id:"api-custom-mode-macros"},"'api' custom mode macros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client secret")))),(0,r.kt)("h4",{id:"azcli-custom-mode-macros"},"'azcli' custom mode macros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."),(0,r.kt)("h2",{id:"available-metrics"},"Available metrics"),(0,r.kt)("p",null,"Go to\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics"},"https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics"),"\nto see the description of available metrics."))}f.isMDXComponent=!0}}]);