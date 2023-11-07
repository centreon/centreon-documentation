"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83641],{63635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/view_creation-40750b8dad6e40d6e628d82828222318.sql"},38746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"install",title:"Install the Centreon BAM extension"},p=void 0,u={unversionedId:"service-mapping/install",id:"version-23.10/service-mapping/install",title:"Install the Centreon BAM extension",description:"Centreon BAM is a Centreon extension that requires a valid license key. To",source:"@site/versioned_docs/version-23.10/service-mapping/install.md",sourceDirName:"service-mapping",slug:"/service-mapping/install",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/service-mapping/install",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/service-mapping/install.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"install",title:"Install the Centreon BAM extension"},sidebar:"version-23.10/docs",previous:{title:"Widgets",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/service-mapping/widgets"},next:{title:"Update the extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/service-mapping/update"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Install the package",id:"install-the-package",level:3},{value:"Upload the license",id:"upload-the-license",level:3},{value:"Install the interface",id:"install-the-interface",level:3}],g={toc:m},h="wrapper";function b(e){var{components:t}=e,c=s(e,["components"]);return(0,a.kt)(h,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,c),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Centreon BAM is a Centreon ",(0,a.kt)("strong",{parentName:"p"},"extension")," that requires a valid license key. To\npurchase one, contact\n",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/installation/prerequisites#software"},"software requirements"),"."),(0,a.kt)("p",null,"Install BAM on the central server.\nThe central server and Centreon BAM must be installed in the same major versions (i.e. both in 23.04.x).\nIf you want to be able to view the Business activities monitored by a remote server, install BAM on the remote server too. When BAM is installed on a remote server, the Business activities will only include the resources monitored by the remote server."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"install-the-package"},"Install the package"),(0,a.kt)("p",null,"Add the Centreon Business repository; you can find it on the\n",(0,a.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories"},"support portal"),"."),(0,a.kt)("p",null,"And install the package using the following command:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-bam-server\n"))),(0,a.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-bam-server\n"))),(0,a.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install centreon-bam-server\n")))),(0,a.kt)("h3",{id:"upload-the-license"},"Upload the license"),(0,a.kt)("p",null,"A license file ",(0,a.kt)("em",{parentName:"p"},"bam.license")," is provided by Centreon. Go to the\n",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager")," menu and upload the license\nusing the interface."),(0,a.kt)("h3",{id:"install-the-interface"},"Install the interface"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extension > Manager")," menu and click the install\nbutton for the following modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"License Manager (if not yet installed)"),(0,a.kt)("li",{parentName:"ul"},"Business Activity Monitoring")),(0,a.kt)("p",null,"Once installed and the license added, the module will have a green banner that indicates\nthe license expiry date:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(3370).Z,width:"561",height:"324"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are using MariaDB replication for your monitoring databases,\ninstalling Centreon BAM generates a view. You need to exclude it from\nreplication by adding the following line on the my.cnf file of the\nslave server:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"replicate-ignore-table=centreon.mod_bam_view_kpi\n")),(0,a.kt)("p",{parentName:"blockquote"},"Create the view manually on the slave server ",(0,a.kt)("a",{target:"_blank",href:n(63635).Z},"using this file"),", by executing the\nfollowing command:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql centreon < view_creation.sql\n"))))}b.isMDXComponent=!0},3370:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-web-step-2-324f16632520e65b9590455dbf1bd0ae.png"}}]);