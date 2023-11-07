"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[68065],{24541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>m});n(67294);var o=n(3905),r=n(51715),a=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"installation",title:"Installation"},p=void 0,d={unversionedId:"monitoring/discovery/installation",id:"version-23.10/monitoring/discovery/installation",title:"Installation",description:"Installing the Autodiscovery module",source:"@site/versioned_docs/version-23.10/monitoring/discovery/installation.md",sourceDirName:"monitoring/discovery",slug:"/monitoring/discovery/installation",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/discovery/installation",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/discovery/installation.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-23.10/docs",previous:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/discovery/introduction"},next:{title:"Discovering hosts automatically",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/discovery/hosts-discovery"}},u={},m=[{value:"Installing the Autodiscovery module",id:"installing-the-autodiscovery-module",level:2}],g={toc:m},y="wrapper";function v(e){var{components:t}=e,c=s(e,["components"]);return(0,o.kt)(y,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},g,c),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-the-autodiscovery-module"},"Installing the Autodiscovery module"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To install packages, execute the following command on the Central server:")),(0,o.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-auto-discovery-server\n"))),(0,o.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y centreon-auto-discovery-server\n"))),(0,o.kt)(a.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install centreon-auto-discovery-server\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect to the Centreon web interface using an account allowed to install\nproducts and go to the ",(0,o.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager")," menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure the ",(0,o.kt)("strong",{parentName:"p"},"License Manager")," and ",(0,o.kt)("strong",{parentName:"p"},"Monitoring Connectors Manager")," modules are\nup to date before installing the ",(0,o.kt)("strong",{parentName:"p"},"Auto Discovery")," module.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the Installation icon corresponding to the ",(0,o.kt)("strong",{parentName:"p"},"Auto Discovery")," module.\nThe module is now installed:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"image",src:n(51741).Z,width:"564",height:"308"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To get ready-to-use discovery rules, go to the ",(0,o.kt)("strong",{parentName:"p"},"Configuration > Plugin\nPacks")," page and ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/pluginpacks#pack-installation"},"install the Monitoring Connectors")," for the\ndiscovery providers you want."))))}v.isMDXComponent=!0},51741:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/install-after-dd0d51f6e89a7f12567170213f4a3c43.png"}}]);