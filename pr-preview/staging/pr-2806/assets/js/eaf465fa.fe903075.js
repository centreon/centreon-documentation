"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40732],{74805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"about",title:"Basic principles of monitoring"},c=void 0,p={unversionedId:"monitoring/about",id:"version-23.10/monitoring/about",title:"Basic principles of monitoring",description:"Here are a few basic Centreon concepts:",source:"@site/versioned_docs/version-23.10/monitoring/about.md",sourceDirName:"monitoring",slug:"/monitoring/about",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/about",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/about.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"about",title:"Basic principles of monitoring"},sidebar:"version-23.10/docs",previous:{title:"Secure your MAP platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/graph-views/secure-your-map-platform"},next:{title:"Monitoring Connectors",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/pluginpacks"}},l={},m=[],u={toc:m},d="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here are a few basic Centreon concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts-create"},(0,o.kt)("strong",{parentName:"a"},"host"))," is any device that has an IP address and that one wishes to monitor. For example, this could be a physical server, a\nvirtual machine, a temperature probe, an IP camera, a printer or a storage space."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/services-create"},(0,o.kt)("strong",{parentName:"a"},"service"))," is a check point, or indicator, to be monitored on a host. This can be the CPU usage rate, temperature,\nmotion detection, bandwidth usage rate, disk I/O, and so on."),(0,o.kt)("li",{parentName:"ul"},"In order to collect each indicator value, monitoring ",(0,o.kt)("strong",{parentName:"li"},"plugins")," are used. These are periodically executed by a\ncollection engine called ",(0,o.kt)("strong",{parentName:"li"},"Centreon Engine"),"."),(0,o.kt)("li",{parentName:"ul"},"To be executed, a plugin needs a set of arguments that define, for example, which host to connect to, or through which protocol.\nThe plugin and its associated arguments form a ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/commands"},(0,o.kt)("strong",{parentName:"a"},"command")),".")),(0,o.kt)("p",null,"For example, to monitor a host with Centreon is to configure all the commands needed to measure the desired indicators,\nand then ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/monitoring-servers/deploying-a-configuration"},"deploy that configuration")," to the collection engine so that these commands are run periodically."),(0,o.kt)("p",null,"Once hosts and services are monitored, they have a ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/concepts"},"status")," in Centreon (e.g. ",(0,o.kt)("strong",{parentName:"p"},"OK"),", ",(0,o.kt)("strong",{parentName:"p"},"Warning"),", ",(0,o.kt)("strong",{parentName:"p"},"Critical"),", etc.). You can keep track of any changes using the ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/resources-status"},"Resources Status")," page."),(0,o.kt)("p",null,"If an alert occurs (not-OK/not-UP status), ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/contacts"},"contacts")," will be able to receive ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/notif-configuration"},"notifications")," within set ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/timeperiods"},"time periods"),"."),(0,o.kt)("p",null,"In Centreon, monitoring is made easy by the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts-templates"},"Host templates")," and ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/services-templates"},"service templates")," that allow you to define default values to speed up the creation of these objects.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/pluginpacks"},"Monitoring Connectors")," that provide ready-to-use host and service templates. These greatly simplify the configuration of hosts and services; for instance, all you have to do is to apply Monitoring Connector templates to a host for it to be monitored.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/discovery/introduction"},"autodiscovery feature for hosts and services"),", which allows you to obtain a list of new hosts and services and add them automatically to the list of monitored resources."))))}g.isMDXComponent=!0}}]);