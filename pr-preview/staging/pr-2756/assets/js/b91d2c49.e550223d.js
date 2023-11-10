"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26053],{66779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"hardware-storage-ibm-ds4000-smcli",title:"IBM DS4000"},s=void 0,p={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli",id:"integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli",title:"IBM DS4000",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds4000-smcli.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-ibm-ds4000-smcli",title:"IBM DS4000"},sidebar:"pp",previous:{title:"IBM DS3000",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds3000-smcli"},next:{title:"IBM DS5000",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-ibm-ds5000-smcli"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],m={toc:u},d="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This chapter describes the prerequisites installation needed by plugins to run."),(0,n.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Hardware-Storage-Ibm-Ds4000-Smcli\n")),(0,n.kt)("p",null,"The plugin need the installation of SMcli command."),(0,n.kt)("p",null,"When you install the package, choose 'Management Station':"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Please choose the Install Set to be installed by this installer.\n\n->1- Typical (Full Installation)\n  2- Management Station\n  3- Host\n  \n  4- Customize...\n  \nENTER THE NUMBER FOR THE INSTALL SET, OR PRESS <ENTER> TO ACCEPT THE\nDEFAULT : 2\n")),(0,n.kt)("p",null,"After install, monitoring engine user needs root privileges to execute the\ncommand :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# chmod 4775 /opt/dell/mdstoragemanager/client/SMcli\n")),(0,n.kt)("p",null,"Please ask to your support for the package. You can have following error if the\nstorage firmware and SMcli client are not accurate :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The XXXXX Modular Disk storage management software (version 11.10.0G06.0020) you are attempting to use is not compatible with the firmware on the RAID controller modules in Storage Array ANG1-D90002.\n\nIf you have recently updated your RAID controller module firmware, you need to make sure that its compatible PowerVault Modular Disk storage management software has also been installed on all clients connected to this Storage Array.\n\nIf the appropriate version is not available, please provide your Customer Support Representative with the following information.\n\nRAID Controller Module firmware version: 06.60.34.00 RAID Controller\nRAID Controller Module appware version: 06.60.34.00 Device API version required:\nDevice API version required: devmgr.v0960api00.Manager\n")),(0,n.kt)("p",null,"SMcli from IBM or Dell can work with the storage. If you use IBM package, set\nfollowing macros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Host macro 'CLIEXTRAOPTIONS' = ",(0,n.kt)("inlineCode",{parentName:"li"},"--smcli-path='/opt/IBM_DS/client'")),(0,n.kt)("li",{parentName:"ul"},"Service macro 'EXTRAOPTIONS' = ",(0,n.kt)("inlineCode",{parentName:"li"},"--verbose --storage-command='show\nstorageSubsystem healthstatus;'"))),(0,n.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,n.kt)("h3",{id:"create-a-host-using-the-appropriate-template"},"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Template provided by the Monitoring Connector")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}g.isMDXComponent=!0}}]);