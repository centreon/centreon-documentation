"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[89277],{89261:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const r={id:"notif-escalation",title:"Escalation"},c=void 0,l={unversionedId:"alerts-notifications/notif-escalation",id:"version-23.10/alerts-notifications/notif-escalation",title:"Escalation",description:"Definition",source:"@site/versioned_docs/version-23.10/alerts-notifications/notif-escalation.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-escalation",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/notif-escalation",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/notif-escalation.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"notif-escalation",title:"Escalation"},sidebar:"version-23.10/docs",previous:{title:"Dependencies",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/notif-dependencies"},next:{title:"Flapping",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/notif-flapping"}},f={},p=[{value:"Definition",id:"definition",level:2},{value:"Principle",id:"principle",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Application of the escalation",id:"application-of-the-escalation",level:3}],h={toc:p},u="wrapper";function d(t){var{components:e}=t,r=s(t,["components"]);return(0,i.kt)(u,a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){o(t,e,n[e])}))}return t}({},h,r),{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Generally, if an alert is triggered, a notification serves to contact\none or more contacts (or groups of contacts). In the same way, it is\npossible to send multiple notifications at regular time intervals."),(0,i.kt)("p",null,"An escalation of notifications is used to contact various groups of\ncontacts during the notifications process or to change the means of\nnotification (replace mails by an SMS). The definition of a notification\nescalation to a host, a host group, a service, a service group or a\nmeta-service overwrites the normal configuration of notifications for\nthis object."),(0,i.kt)("p",null,"Example: a service A is set to send notifications to a group of contacts\n\u201cA\u201d in case of Not-OK status. These notifications are sent every 5\nminutes. If, after a certain number of notifications is sent, the status of\nthe service is still Not-OK, it is possible to contact the individuals\nof the group of contacts \u201cB\u201d etc\u2026"),(0,i.kt)("p",null,"Escalations of notification are convenient in the situation where level\n1, level 2, level 3, etc., support level teams exist within a company.\nWhen a problem appears, the level 1 support team is contacted. If, after a\ncertain time,the level 1 team has not succeeded in solving the problem,\nthe level 2 team is alerted, etc."),(0,i.kt)("h2",{id:"principle"},"Principle"),(0,i.kt)("p",null,"Notification escalations allow two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notifying various contacts according to the number of notifications\nsent"),(0,i.kt)("li",{parentName:"ul"},"Changing the command of notification over time")),(0,i.kt)("p",null,"When notification escalations are used, the retrieval of the\nlist of contacts is a little different:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A service (or a host) is checked at regular intervals according to\nthe check period defined for it"),(0,i.kt)("li",{parentName:"ol"},"If an anomaly occurs (Not-OK status), the service (or the host) goes\ninto the SOFT state"),(0,i.kt)("li",{parentName:"ol"},"After the Max Check Attempts is exceeded and if the service (or the\nhost) persists in its Not-OK status, its state changes from SOFT to\nHARD. The monitoring engine caches the notification number for the\nservice (or the host): i.e. 0.")),(0,i.kt)("p",null,"At each interval or sending of notification to the service (or the host)\nand until the end of the Not-OK status, the monitoring engine performs\nthe following operations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If no notification escalation is defined for the service (or the\nhost) and the current notification number, the notification is\nprocessed in the same way as for a normal notification: the\nmonitoring engine uses the notification configuration defined for\nthe service (or the host)."),(0,i.kt)("li",{parentName:"ol"},"If a notification escalation is defined for the service (or the\nhost) and the current notification number, the monitoring engine\nbases itself on the configuration of the escalation to select the\ncontacts to be notified and the mechanism to be used."),(0,i.kt)("li",{parentName:"ol"},"The processing mechanism for a notification is the same as the\nsending of a normal notification")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To add a notification escalation, go into the menu:\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration > Notifications > Escalations")," and click ",(0,i.kt)("strong",{parentName:"p"},"Add")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(27260).Z,width:"970",height:"451"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Escalation Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Alias")," fields are used to define a name\nand an alias for the notification escalation."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"First Notification")," field allows us to choose the\nnotification number as of which the group of contacts is alerted."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Last Notification")," allows us to choose the last notification\nnumber at which the group of contacts is alerted. If the group of\ncontacts is the last level of the escalation, the value of this field\nis 0."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Notification Interval")," field defines the notification\ninterval between alerts."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Escalation Period")," field defines the notification time\nperiod."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Hosts Escalation Options")," and ",(0,i.kt)("strong",{parentName:"li"},"Services Escalation Options"),"\nservice escalation fields define the statuses of hosts and of\nservices for which the escalation is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linked Contact Groups")," defines the group of contacts to be\ncontacted on triggering the escalation."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to comment on the escalation.")),(0,i.kt)("h3",{id:"application-of-the-escalation"},"Application of the escalation"),(0,i.kt)("p",null,"To select the various objects that will be concerned by this escalation,\nthe ",(0,i.kt)("strong",{parentName:"p"},"Hosts Escalation"),", ",(0,i.kt)("strong",{parentName:"p"},"Services Escalation"),", ",(0,i.kt)("strong",{parentName:"p"},"Hostgroups\nEscalation"),", ",(0,i.kt)("strong",{parentName:"p"},"Meta Service Escalation")," and ",(0,i.kt)("strong",{parentName:"p"},"Servicegroups\nEscalation")," tabs are used to choose the objects to which the escalations\nare applied."))}d.isMDXComponent=!0},27260:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/04notificationsescalation-484178295314404371e74ca99685e023.png"}}]);