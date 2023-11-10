"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71996],{88633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>g});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={id:"categories",title:"Categories and severities"},l=void 0,c={unversionedId:"monitoring/categories",id:"version-23.10/monitoring/categories",title:"Categories and severities",description:"Categories allow you to:",source:"@site/versioned_docs/version-23.10/monitoring/categories.md",sourceDirName:"monitoring",slug:"/monitoring/categories",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/categories",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/categories.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"categories",title:"Categories and severities"},sidebar:"version-23.10/docs",previous:{title:"Groups",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/groups"},next:{title:"Time periods",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/timeperiods"}},p={},g=[{value:"Hosts category",id:"hosts-category",level:2},{value:"Services category",id:"services-category",level:2},{value:"Severities",id:"severities",level:2},{value:"Creating a severity",id:"creating-a-severity",level:3},{value:"Applying the severity to a host or service",id:"applying-the-severity-to-a-host-or-service",level:3}],m={toc:g},u="wrapper";function d(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(u,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Categories allow you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"organize hosts or services so as to define user rights on them using ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/administration/access-control-lists"},"ACLs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/resources-status#filtering-events"},"filter the view")," in the ",(0,n.kt)("strong",{parentName:"li"},"Resources status")," page"),(0,n.kt)("li",{parentName:"ul"},"classify the hosts and services within sub-groups in ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/reporting/concepts"},"MBI reports"),"."),(0,n.kt)("li",{parentName:"ul"},"define types of objects in the Centreon ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/graph-views/introduction"},"MAP module"),".")),(0,n.kt)("p",null,"A special type of category is called severity. Severities can be used to achieve all of the above, but also to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"sort the view on the ",(0,n.kt)("strong",{parentName:"p"},"Resources Status")," page by severity level, e.g., to show the most important alerts first. (Severities are shown in the ",(0,n.kt)("strong",{parentName:"p"},"S")," column in the ",(0,n.kt)("strong",{parentName:"p"},"Resources Status")," page.)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"filter data in the ",(0,n.kt)("strong",{parentName:"p"},"Host monitoring"),", ",(0,n.kt)("strong",{parentName:"p"},"Service monitoring")," and ",(0,n.kt)("strong",{parentName:"p"},"Open Tickets")," widgets in ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/custom-views"},"custom views"),"."))),(0,n.kt)("h2",{id:"hosts-category"},"Hosts category"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Hosts > Categories")," menu and click ",(0,n.kt)("strong",{parentName:"p"},"Add"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(49242).Z,width:"1011",height:"392"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Host Category Name")," and ",(0,n.kt)("strong",{parentName:"li"},"Alias")," fields contain the name and the alias of the category of host, respectively."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Linked hosts")," list allows us to add hosts to the category."),(0,n.kt)("li",{parentName:"ul"},"If a host template is added to the ",(0,n.kt)("strong",{parentName:"li"},"Linked host template")," list, all the hosts that inherit from this Model belong to\nthis category."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Severity type")," box signifies that the category of hosts has a criticality level."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Level")," and ",(0,n.kt)("strong",{parentName:"li"},"Icon")," fields define a criticality level and an associated icon, respectively."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Status")," and ",(0,n.kt)("strong",{parentName:"li"},"Comment")," fields allow us to enable or disable the category of host and to comment on it.")),(0,n.kt)("h2",{id:"services-category"},"Services category"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Categories")," menu and click ",(0,n.kt)("strong",{parentName:"p"},"Add"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(60540).Z,width:"1012",height:"353"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Name")," and ",(0,n.kt)("strong",{parentName:"li"},"Description")," fields define the name and the description of the category of service."),(0,n.kt)("li",{parentName:"ul"},"If a service template is added to the ",(0,n.kt)("strong",{parentName:"li"},"Service Template Descriptions")," list, all the services that inherit from this\ntemplate belong to this category. "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Severity type")," box signifies that the category of service has a criticality level."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Level")," and ",(0,n.kt)("strong",{parentName:"li"},"Icon")," fields define a criticality level and an associated icon, respectively."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Status")," field allows us to enable or disable the category of services.")),(0,n.kt)("h2",{id:"severities"},"Severities"),(0,n.kt)("h3",{id:"creating-a-severity"},"Creating a severity"),(0,n.kt)("p",null,"To create a severity:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts > Categories")," or ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Services > Categories"),", and then click ",(0,n.kt)("strong",{parentName:"li"},"Add"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill in the ",(0,n.kt)("strong",{parentName:"li"},"Name")," and ",(0,n.kt)("strong",{parentName:"li"},"Alias")," fields, and then check ",(0,n.kt)("strong",{parentName:"li"},"Severity type"),"."),(0,n.kt)("li",{parentName:"ol"},"Define a level for the severity (a number that will be used to sort hosts or services in the ",(0,n.kt)("strong",{parentName:"li"},"Resources Status")," page) and an icon that will appear in the ",(0,n.kt)("strong",{parentName:"li"},"S")," column in the ",(0,n.kt)("strong",{parentName:"li"},"Resources Status")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),". The severity appears in the list of severities.")),(0,n.kt)("h3",{id:"applying-the-severity-to-a-host-or-service"},"Applying the severity to a host or service"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Edit the host or service (go to ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts > Hosts")," or ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Services > Services by host"),", and then click the host or service)."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Extended Info")," tab, in the ",(0,n.kt)("strong",{parentName:"li"},"Monitoring Engine")," section, select the severity you want from the ",(0,n.kt)("strong",{parentName:"li"},"Severity level")," list."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),". On the ",(0,n.kt)("strong",{parentName:"li"},"Resources Status")," page, the icon for the severity appears in the ",(0,n.kt)("strong",{parentName:"li"},"S")," column. A tooltip shows the level and name of the severity. If you click the column header, the view is sorted by severity level.")))}d.isMDXComponent=!0},49242:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/08hostcategory-a64902f16b65fb54ae79bd14b187bece.png"},60540:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/08servicecategory-59d82b935d25f5caf9dd7ab8a849ee1c.png"}}]);