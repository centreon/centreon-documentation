"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=r.createContext({}),c=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(A.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,A=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),g=c(n),p=i,d=g["".concat(A,".").concat(p)]||g[p]||u[p]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var A in t)hasOwnProperty.call(t,A)&&(a[A]=t[A]);a.originalType=e,a[g]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>A,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>g});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"logging-configuration-changes",title:"Logging configuration changes"},A=void 0,c={unversionedId:"administration/logging-configuration-changes",id:"version-23.10/administration/logging-configuration-changes",title:"Logging configuration changes",description:"Principle",source:"@site/versioned_docs/version-23.10/administration/logging-configuration-changes.md",sourceDirName:"administration",slug:"/administration/logging-configuration-changes",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/logging-configuration-changes",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/administration/logging-configuration-changes.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"logging-configuration-changes",title:"Logging configuration changes"},sidebar:"version-23.10/docs",previous:{title:"Knowledge Base",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/knowledge-base"},next:{title:"Platform statistics",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/platform-statistics"}},s={},g=[{value:"Principle",id:"principle",level:2},{value:"Practice",id:"practice",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:g},p="wrapper";function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(p,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"By default, Centreon records all user actions concerning changes to the\nconfiguration in a log. To access this data, go to ",(0,r.kt)("strong",{parentName:"p"},"Administration > Logs"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(6609).Z,width:"1709",height:"729"})),(0,r.kt)("p",null,"The gray search bar can be used to filter the information presented via filters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Object")," used to filter on object name (host, service, contact, SNMP trap\ndefinition, group, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User")," used to filter by change author"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Object Type")," used to filter by object type")),(0,r.kt)("h2",{id:"practice"},"Practice"),(0,r.kt)("p",null,"For example: To see all the actions performed by the user ",(0,r.kt)("strong",{parentName:"p"},"admin"),", enter \u201cadmin\u201d in\nthe ",(0,r.kt)("strong",{parentName:"p"},"User")," field and click ",(0,r.kt)("strong",{parentName:"p"},"Search"),"."),(0,r.kt)("p",null,"The table below defines the columns in the results table:"),(0,r.kt)("table",null,(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:"17%"}}),(0,r.kt)("col",{style:{width:"82%"}})),(0,r.kt)("thead",null,(0,r.kt)("tr",{class:"header"},(0,r.kt)("th",null,"Column Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"Time"),(0,r.kt)("td",null,"Indicates the date of the event")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"Modification type"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Contains the type of action applied. There are several possible types of action:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Added: Indicates that the object has been added"),(0,r.kt)("li",null,"Changed: Indicates that the object has been changed"),(0,r.kt)("li",null,"Deleted: Indicates that the object has been deleted"),(0,r.kt)("li",null,"Mass Change: Indicates a mass change of configuration on objects."),(0,r.kt)("li",null,"Enabled: Indicates that the object has been enabled"),(0,r.kt)("li",null,"Disabled: Indicates that the object has been disabled")))),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Indicates object type")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Indicates object name")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"Author"),(0,r.kt)("td",null,"Indicates the user having performed this change")))),(0,r.kt)("p",null,"By clicking the name of an object, you can view the history of the changes\napplied to it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(88754).Z,width:"1239",height:"566"})),(0,r.kt)("p",null,"The table below defines the columns of the changes table:"),(0,r.kt)("table",null,(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:"27%"}}),(0,r.kt)("col",{style:{width:"72%"}})),(0,r.kt)("thead",null,(0,r.kt)("tr",{class:"header"},(0,r.kt)("th",null,"Column Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"Date"),(0,r.kt)("td",null,"Date of the change")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"Contact Name"),(0,r.kt)("td",null,"Name of the person who performed the change")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Modification type")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"The last column describes the change itself :"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Field name: Describes the field that has been changed"),(0,r.kt)("li",null,"Before: Indicates the previous value"),(0,r.kt)("li",null,"After: Indicates the new value")))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To enable user audit logs, go to ",(0,r.kt)("strong",{parentName:"p"},"Administration > Parameters > Options")," and\ncheck the ",(0,r.kt)("strong",{parentName:"p"},"Enable/Disable audit logs")," option:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(9028).Z,width:"523",height:"64"})))}d.isMDXComponent=!0},88754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fobjectmodif-638762c67c2d79baf44884f8bdde2fdc.png"},6609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fsearchlogs-a3336f1b2c4337bb585209aceb9701d0.png"},9028:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);