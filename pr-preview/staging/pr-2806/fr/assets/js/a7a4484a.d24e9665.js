"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[64499],{53936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"virtualization-vmware2-vcenter-4",title:"VMware vCenter v4"},p=void 0,s={unversionedId:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4",id:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4",title:"VMware vCenter v4",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4.md",tags:[],version:"current",frontMatter:{id:"virtualization-vmware2-vcenter-4",title:"VMware vCenter v4"},sidebar:"pp",previous:{title:"VMware vCenter",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic"},next:{title:"VMware vCenter v5",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Centreon VMware daemon",id:"centreon-vmware-daemon",level:3},{value:"Installation",id:"installation",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Centreon configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3},{value:"Host macro configuration",id:"host-macro-configuration",level:3}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,r.kt)("h3",{id:"centreon-vmware-daemon"},"Centreon VMware daemon"),(0,r.kt)("h4",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install this daemon on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Virtualization-VMWare-daemon\n")),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,'To configure the access to your infrastructure, edit the\n"/etc/centreon/centreon',"_",'vmware.pm" configuration file:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        default => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        }\n    }\n);\n\n1;\n")),(0,r.kt)("p",null,"Make sure to replace variables with needed information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ip","_","hostname"),": IP address or hostname of the vCenter or ESX (if standalone),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"username"),': username with at least "read only" access to the vCenter or ESX,'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"password"),": password of the username.")),(0,r.kt)("p",null,"You can configure multiple vCenter / vSphere / ESX connections using this\nstructure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        default => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        },\n        'my_other_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        },\n    },\n    port => 5700\n);\n\n1;\n")),(0,r.kt)("p",null,'Each entry is called a container. You need at least a "default" entry.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'You can also define the "port" attribute to change listening port.')),(0,r.kt)("p",null,"Then start the daemon and make sure it is configured to start at server boot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start centreon_vmware\nsystemctl enable centreon_vmware\n")),(0,r.kt)("p",null,'Make sure that the daemon configuration works fine by looking for errors in\n"/var/log/centreon/centreon',"_",'vmware.log".'),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon configuration"),(0,r.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration > Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-vCenter-4-custom")))),(0,r.kt)("p",null,"Click the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."),(0,r.kt)("h3",{id:"host-macro-configuration"},"Host macro configuration"),(0,r.kt)("p",null,"The following macros must be configured on host:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREHOST"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Host of centreon_vmware daemon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"localhost"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10.1.2.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port of centreon_vmware daemon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5700"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5701")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWARECONTAINER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defined container to use"),(0,r.kt)("td",{parentName:"tr",align:"left"},"default"),(0,r.kt)("td",{parentName:"tr",align:"left"},"srv-vcenter")))))}g.isMDXComponent=!0}}]);