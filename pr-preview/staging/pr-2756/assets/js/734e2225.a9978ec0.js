"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10504],{87428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"hosts-templates",title:"Using host templates"},c=void 0,l={unversionedId:"monitoring/basic-objects/hosts-templates",id:"version-23.10/monitoring/basic-objects/hosts-templates",title:"Using host templates",description:"Definition",source:"@site/versioned_docs/version-23.10/monitoring/basic-objects/hosts-templates.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/hosts-templates",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/hosts-templates",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/basic-objects/hosts-templates.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"hosts-templates",title:"Using host templates"},sidebar:"version-23.10/docs",previous:{title:"Creating hosts automatically",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/hosts-create-disco"},next:{title:"Change the monitoring server for a host",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/hosts-switch-poller"}},p={},h=[{value:"Definition",id:"definition",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Parent-child type inheritance",id:"parent-child-type-inheritance",level:3},{value:"Associative type inheritance",id:"associative-type-inheritance",level:3},{value:"Configuration",id:"configuration",level:3}],m={toc:h},d="wrapper";function u(e){var{components:t}=e,a=r(e,["components"]);return(0,i.kt)(d,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A Template is a pre-configuration of settings of an object that can be used to\nconfigure it. The main advantage is to be able to define default values for\ncertain objects to speed up the creation of similar objects."),(0,i.kt)("p",null,"A template can inherit properties from another template."),(0,i.kt)("p",null,"Templates from Monitoring Connectors make monitoring hosts easy, because they provide ready-to-use check ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/commands"},"commands"),"."),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"A host or a host template can inherit from one or more host templates. This\nheritage may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"associative (addition of multiple host templates)"),(0,i.kt)("li",{parentName:"ul"},"parent-child type")),(0,i.kt)("h3",{id:"parent-child-type-inheritance"},"Parent-child type inheritance"),(0,i.kt)("p",null,"This is a predefinition of settings at \u201cn\u201d levels. The object inherits from its\nTemplate which can itself inherit from its Template. If the child redefines a\nsetting, this setting overwrites the one defined in the higher-level templates.\nOtherwise it is added to the settings."),(0,i.kt)("h3",{id:"associative-type-inheritance"},"Associative type inheritance"),(0,i.kt)("p",null,"This consists of adding together several templates within the same object in\norder to add together all the settings available. If a host inherits from\nseveral host templates and if the same setting is defined on several templates,\nthe host template situated above the other templates has priority over\nits ancestors."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(36998).Z,width:"1157",height:"132"})),(0,i.kt)("p",null,"The diagram below shows a host inheriting from multiple host templates."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(40086).Z,width:"961",height:"874"})),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To add a host template:"),(0,i.kt)("p",null,"Go into the ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Hosts > Templates")," menu and click ",(0,i.kt)("strong",{parentName:"p"},"Add")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Refer to the chapter covering configuration of\n",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/hosts-create"},"hosts")," to configure a template because the form\nis identical.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'By default, locked host templates are hidden. Check the "Locked elements" box\nto list all templates.')))}u.isMDXComponent=!0},36998:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/09hostmodels-a426b91b188edde8024103e638ca9635.png"},40086:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/09hostmodelsheritage-8fc4d663668086c07a3321683d28b1ae.png"}}]);