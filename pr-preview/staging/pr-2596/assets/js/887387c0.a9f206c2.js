"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[95467],{44046:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>d});o(67294);var n=o(3905);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const c={id:"introduction",title:"Introduction"},s=void 0,l={unversionedId:"monitoring/discovery/introduction",id:"version-23.10/monitoring/discovery/introduction",title:"Introduction",description:"Centreon Auto Discovery is a Centreon extension that requires a valid",source:"@site/versioned_docs/version-23.10/monitoring/discovery/introduction.md",sourceDirName:"monitoring/discovery",slug:"/monitoring/discovery/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/discovery/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/discovery/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"version-23.10/docs",previous:{title:"Creating Meta Services",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/basic-objects/meta-services"},next:{title:"Installation",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/discovery/installation"}},u={},d=[{value:"How it works",id:"how-it-works",level:2}],p={toc:d},m="wrapper";function v(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){r(e,t,o[t])}))}return e}({},p,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Centreon Auto Discovery is a Centreon ",(0,n.kt)("strong",{parentName:"p"},"extension")," that requires a valid\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/administration/licenses"},"license")," key. To purchase one and retrieve the necessary repositories, contact\n",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,n.kt)("p",null,"The Auto Discovery module allows you to obtain a list of new hosts and services and to create them\nautomatically in your Centreon platform. The discovery is done by discovery providers, which are included\nin ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/pluginpacks"},"Monitoring Connectors"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This discovery mechanism can also be scheduled and executed automatically. Hosts can be added and monitored without manual action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also detect that resources are no longer available and automatically disable them in the configuration.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can link contacts to a service discovery rule, to notify them when any change in the configuration occurs."))),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a discovery job for each type of resource, using the corresponding ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/docs/monitoring/pluginpacks"},"Monitoring Connector"),".\nFor instance, one job to discover ESX nodes and one job to discover virtual machines in a VMWare cluster."),(0,n.kt)("p",{parentName:"li"},"  For services, create discovery rules: for instance, one rule to discover network interfaces and one rule\nto discover disk volumes in a Linux server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The discovery job or rule is performed: you get a list of all new hosts or services that match the Monitoring Connector.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"According to how you have configured the job, you either choose from the list which resources you want\nto add to your Centreon platform, or they are added automatically."))))}v.isMDXComponent=!0}}]);