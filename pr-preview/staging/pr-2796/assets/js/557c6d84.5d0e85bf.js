"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[43703],{80906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"gdpr-compliance",title:"GDPR compliance"},c=void 0,l={unversionedId:"security/user-data-storage/gdpr-compliance",id:"version-23.10/security/user-data-storage/gdpr-compliance",title:"GDPR compliance",description:"This content is intended for users of Centreon in a Managed Service Provider (MSP) context.",source:"@site/versioned_docs/version-23.10/security/user-data-storage/gdpr-compliance.md",sourceDirName:"security/user-data-storage",slug:"/security/user-data-storage/gdpr-compliance",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/security/user-data-storage/gdpr-compliance",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/security/user-data-storage/gdpr-compliance.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"gdpr-compliance",title:"GDPR compliance"},sidebar:"version-23.10/docs",previous:{title:"Rotating RPM keys",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/security/key-rotation"},next:{title:"What is Centreon CEIP?",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/security/user-data-storage/what-is-centreon-ceip"}},u={},d=[{value:"Storage of user identification information",id:"storage-of-user-identification-information",level:2},{value:"User action logs",id:"user-action-logs",level:2},{value:"HTTP transactions",id:"http-transactions",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Backup",id:"backup",level:2}],p={toc:d},m="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This content is intended for users of Centreon in a Managed Service Provider (MSP) context.")),(0,r.kt)("h2",{id:"storage-of-user-identification-information"},"Storage of user identification information"),(0,r.kt)("p",null,"For each customer of the provider, the Centreon central server stores the following user identification information in its database in order to access the\nmonitoring server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name"),(0,r.kt)("li",{parentName:"ul"},"Alias/Login, password"),(0,r.kt)("li",{parentName:"ul"},"E-mail address"),(0,r.kt)("li",{parentName:"ul"},"Phone number (optional, for associated notification)")),(0,r.kt)("p",null,"The central server also stores additional parameters for each user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Language, time zone"),(0,r.kt)("li",{parentName:"ul"},"Notification settings"),(0,r.kt)("li",{parentName:"ul"},"Access control groups (ACL)")),(0,r.kt)("p",null,"Information management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each user can access their information in the ",(0,r.kt)("strong",{parentName:"li"},"Administration > Settings > My Account")," menu."),(0,r.kt)("li",{parentName:"ul"},"Users can be created, edited and deleted from the ",(0,r.kt)("strong",{parentName:"li"},"Settings > Users")," menu by a user who has the necessary rights.")),(0,r.kt)("h2",{id:"user-action-logs"},"User action logs"),(0,r.kt)("p",null,"If a user has the rights to configure the monitoring (defined in the user's ACLs), an entry in the logs stored in the database and linked to the\nuser account will be created for each editing action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logs can be accessed via ",(0,r.kt)("strong",{parentName:"li"},"Administration > Logs"),", with the ability to filter by user."),(0,r.kt)("li",{parentName:"ul"},"These logs can only be deleted by accessing the SQL database and deleting any relevant records.")),(0,r.kt)("h2",{id:"http-transactions"},"HTTP transactions"),(0,r.kt)("p",null,"Centreon recommends securing access to the monitoring platform by enabling HTTPS mode on the Apache server. An official signed certificate is\nrequired to ensure a minimum level of security."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"In order to remain consistent with your security policy and to better manage the lifecycle and approvals of users, Centreon can\nconnect to an Active Directory or LDAP directory. Centreon recommends enabling this option and not using a local account."),(0,r.kt)("h2",{id:"backup"},"Backup"),(0,r.kt)("p",null,"Centreon provides a Centreon data extraction module to allow the implementation of a backup policy of the monitoring data. Centreon strongly\nrecommends activating this module and, especially, exporting the backup to another server."))}g.isMDXComponent=!0}}]);