"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[80909],{55641:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>h});A(67294);var o=A(3905),n=A(51715),i=A(7626);function a(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,o)}return A}(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))})),e}function l(e,t){if(null==e)return{};var A,o,n=function(e,t){if(null==e)return{};var A,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)A=i[o],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)A=i[o],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}const c={id:"other",title:"Other actions"},s=void 0,m={unversionedId:"alerts-notifications/other",id:"version-23.10/alerts-notifications/other",title:"Other actions",description:"Adding a comment",source:"@site/versioned_docs/version-23.10/alerts-notifications/other.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/other",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/other",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/other.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"other",title:"Other actions"},sidebar:"version-23.10/docs",previous:{title:"Submitting a status",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/submit"},next:{title:"How notifications work",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-concept"}},p={},h=[{value:"Adding a comment",id:"adding-a-comment",level:2},{value:"Principle",id:"principle",level:3},{value:"Practice",id:"practice",level:3},{value:"Management of checks",id:"management-of-checks",level:2},{value:"Principle",id:"principle-1",level:3},{value:"Practice",id:"practice-1",level:3},{value:"Management of notifications",id:"management-of-notifications",level:2},{value:"Principle",id:"principle-2",level:3},{value:"Practice",id:"practice-2",level:3},{value:"Reprogramming checks",id:"reprogramming-checks",level:2},{value:"Principle",id:"principle-3",level:3},{value:"Practice",id:"practice-3",level:3}],d={toc:h},u="wrapper";function k(e){var{components:t}=e,c=l(e,["components"]);return(0,o.kt)(u,r(function(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{},o=Object.keys(A);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(A).filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable})))),o.forEach((function(t){a(e,t,A[t])}))}return e}({},d,c),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-a-comment"},"Adding a comment"),(0,o.kt)("h3",{id:"principle"},"Principle"),(0,o.kt)("p",null,"Centreon allows us to add comments on an object. This comment is visible by\nanyone having access to the resource (host or service). A comment has the\nfollowing properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hostname"),(0,o.kt)("li",{parentName:"ul"},"Servicename if the comment is associated with a service"),(0,o.kt)("li",{parentName:"ul"},"Date of entry of the comment"),(0,o.kt)("li",{parentName:"ul"},"Author of the comment"),(0,o.kt)("li",{parentName:"ul"},"The contents of the comment"),(0,o.kt)("li",{parentName:"ul"},"The validity of the comment against a restart of the scheduler")),(0,o.kt)("h3",{id:"practice"},"Practice"),(0,o.kt)("p",null,"There are two solutions to add a comment:"),(0,o.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"From the detailed sheet of an object",label:"From the detailed sheet of an object",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access to the details page of the object"),(0,o.kt)("li",{parentName:"ol"},"In the category ",(0,o.kt)("strong",{parentName:"li"},"Host/Service Commands"),", click ",(0,o.kt)("strong",{parentName:"li"},"Add a comment\nfor this host/this service")))),(0,o.kt)(i.Z,{value:"From the Comment menu",label:"From the Comment menu",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go into the ",(0,o.kt)("strong",{parentName:"li"},"Monitoring > Downtimes > Comments")," menu"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add a Service Comment")," or ",(0,o.kt)("strong",{parentName:"li"},"Add a Host Comment"))))),(0,o.kt)("p",null,"The following window appears:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:A(29486).Z,width:"1053",height:"178"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Host Name")," field defines the host concerned by the comment."),(0,o.kt)("li",{parentName:"ul"},"If you have chosen to add a comment to a service, the ",(0,o.kt)("strong",{parentName:"li"},"Service"),"\nfield can be used to select the service concerned by the comment."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("strong",{parentName:"li"},"Persistent")," box is checked, the comment will be maintained\nin the event of a restart of the scheduler."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Comments")," field contains the comment itself.")),(0,o.kt)("h2",{id:"management-of-checks"},"Management of checks"),(0,o.kt)("h3",{id:"principle-1"},"Principle"),(0,o.kt)("p",null,"It is possible to temporarily enable or disable a check on a host or a service."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changes to settings checks do not affect the configuration of the\nobject in the database. These changes are made on the supervision in\nreal time, and they are canceled if the scheduler is restarted.")),(0,o.kt)("h3",{id:"practice-1"},"Practice"),(0,o.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"From the detailed sheet of an object",label:"From the detailed sheet of an object",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the details page of the object"),(0,o.kt)("li",{parentName:"ol"},"In the category: ",(0,o.kt)("strong",{parentName:"li"},"Options")," go to the line: ",(0,o.kt)("strong",{parentName:"li"},"Active checks")," to\ncheck the state of the checks.")),(0,o.kt)("p",null,"To:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the check, click ",(0,o.kt)("img",{alt:"image",src:A(39407).Z,width:"32",height:"32"})),(0,o.kt)("li",{parentName:"ul"},"Disable the check, click ",(0,o.kt)("img",{alt:"image",src:A(12038).Z,width:"32",height:"32"})))),(0,o.kt)(i.Z,{value:"From real time monitoring",label:"From real time monitoring",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go into the ",(0,o.kt)("strong",{parentName:"li"},"Monitoring > Status Details > Hosts")," (or ",(0,o.kt)("strong",{parentName:"li"},"Services"),")\nmenu"),(0,o.kt)("li",{parentName:"ol"},"Select the object(s) on which you want to enable or disable the\ncheck."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"More actions")," menu, click:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hosts: Disable Check")," or ",(0,o.kt)("strong",{parentName:"li"},"Services: Disable Check")," to stop the\nchecks for a host or a service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hosts: Enable Check")," or ",(0,o.kt)("strong",{parentName:"li"},"Services: Enable Check")," to enable the\ncheck of a host or of a service")))),(0,o.kt)("h2",{id:"management-of-notifications"},"Management of notifications"),(0,o.kt)("h3",{id:"principle-2"},"Principle"),(0,o.kt)("p",null,"It is possible to temporarily enable or disable the notification of a\nhost or a service."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changes to the notification settings do not affect the configuration of\nthe object in the database. These changes are made on the real time\nmonitoring, and they are canceled if the scheduler is restarted.")),(0,o.kt)("h3",{id:"practice-2"},"Practice"),(0,o.kt)("p",null,"There are two ways of managing notifications:"),(0,o.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"From the detailed sheet of an object",label:"From the detailed sheet of an object",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the details page of the object"),(0,o.kt)("li",{parentName:"ol"},"In the  ",(0,o.kt)("strong",{parentName:"li"},"Options")," category, go to the line: ",(0,o.kt)("strong",{parentName:"li"},"Service\nNotifications"))),(0,o.kt)("p",null,"To:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the notification, click ",(0,o.kt)("img",{alt:"image",src:A(39407).Z,width:"32",height:"32"})),(0,o.kt)("li",{parentName:"ul"},"Disable the notification, click ",(0,o.kt)("img",{alt:"image",src:A(12038).Z,width:"32",height:"32"})))),(0,o.kt)(i.Z,{value:"From real time monitoring",label:"From real time monitoring",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go into the ",(0,o.kt)("strong",{parentName:"li"},"Monitoring > Status Details > Hosts")," (or ",(0,o.kt)("strong",{parentName:"li"},"Services"),")\nmenu"),(0,o.kt)("li",{parentName:"ol"},"Select the host(s) / service(s) whose notification you want\nto enable or disable"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"More actions")," menu, click:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hosts: Disable Notification")," or ",(0,o.kt)("strong",{parentName:"li"},"Services: Disable\nNotification")," to stop the notification of a host or of a service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hosts: Enable Notification")," or ",(0,o.kt)("strong",{parentName:"li"},"Services: Enable Notification"),"\nto enable the notification of a host or a service")))),(0,o.kt)("h2",{id:"reprogramming-checks"},"Reprogramming checks"),(0,o.kt)("h3",{id:"principle-3"},"Principle"),(0,o.kt)("p",null,"By default, the checks (checks on a service) are executed at regular\nintervals following the configuration defined by the user. It is\npossible to act on the check scheduling pile to change the\nprogramming of the checks."),(0,o.kt)("p",null,"There are two types of programming:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normal programming: the service check is given priority in the\nscheduler queue (asap)."),(0,o.kt)("li",{parentName:"ul"},"Forced programming: the service check is given priority in the\nscheduler queue (asap) even if the time of the execution request is\noutside the check period or if the service is not of the active\ntype.")),(0,o.kt)("h3",{id:"practice-3"},"Practice"),(0,o.kt)("p",null,"There are two ways of forcing the check of a service:"),(0,o.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"From the detailed sheet of an object",label:"From the detailed sheet of an object",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the detail page of the object"),(0,o.kt)("li",{parentName:"ol"},"In the category ",(0,o.kt)("strong",{parentName:"li"},"Host Commands")," (or ",(0,o.kt)("strong",{parentName:"li"},"Service Commands"),"), click\n",(0,o.kt)("strong",{parentName:"li"},"Re-schedule the next check for this host / service")," or\n",(0,o.kt)("strong",{parentName:"li"},"Re-schedule the next check for this host / service (forced)")))),(0,o.kt)(i.Z,{value:"From real time monitoring",label:"From real time monitoring",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go into the following menu: ",(0,o.kt)("strong",{parentName:"li"},"Monitoring > Status Details > Hosts")," (or\n",(0,o.kt)("strong",{parentName:"li"},"Services"),")"),(0,o.kt)("li",{parentName:"ol"},"Select the objects for which you want to force the check"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"More actions\u2026")," click ",(0,o.kt)("strong",{parentName:"li"},"Schedule immediate check"),"\nor ",(0,o.kt)("strong",{parentName:"li"},"Schedule immediate check (Forced)"))))))}k.isMDXComponent=!0},29486:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,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"},12038:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADNklEQVRYR61X23HTQBQ9V0pmQPrANIClCuL8McEenAriVEBSAU4FcSrAVEBSAaKCmJHD8IdSgZwOzIcWZhL5MqsXkryWZEf6XO3uOXvuvWfvErb4fGMw0oATJrbA6ICoFy1n9kBYEtOCAOeNcL813ZbqJvov3lqatn/JhBGATt385P+SGM5K6Bc2ZsuqNZUEfKM/IaKPWwCXsZbEPO2K+dUmEkoCPoYdMp5uM4kbHnvjNGaPxd6xSo01Ar551CPot6pTM/MDCA6YZlg9evbfnwsJKteAdQvEQzBGRNRVkFkywmM7+OHl/xUIRCc3Q78MHgPTxA7c6yZi+ObgDMwyfGUiSw50O69EkYDR94jooAzCq9WF/edu2gQ8nSMPAyO8JsJJYR2zZ4n5YTqWEUgS7nITCAPnTRXI7+EbA0niQ36Mma9sMZ/IsYiALDXS93/VZfszSDglJbJQxARKLKOYM09J0z6thWMHJaJwmKE0qVfpfsy4sYV7FhMwB8vCzwREJhMBX1ohsb7X0grc1yTtlQhf/zPjB1vMrSyZ2iRh9Bf5ymDGqSRQSBIGf7aD+biQSC2R8M3+lBA5a/RJLPLN/oxA73OxObWF65RlbyMca2qDv5Nfqn0OH+3U4domkbisrLZEAvZoYQ44D2QFbvUF9cxwlPG2JpBUzc7VsUZgLQQID8sXhsodd8mJxPDkXRMnIfN94yRsg8SGJKwvQxX4Lj6hLsOSEYGxsIRrV4HuWh2+yoiqrLhNEuWcYeC3Hbgd5WUkVWChH9Y1lI2VWK0uSNPkVZ81tcXLSHFbgdmxxPx0GxWqSjS/jzw9At2SB6xsSIhx3RXuedsk1hqSLKNVLRmzw2LvfOtwvHw3VvYTzPe2mMcPmrQjygioQhE5BhZEq0k3uLtpokaScLKZKTxk8tIrCcQxPOoB+izfoGSgERE4xJiFFD6kjikdTtf2D5gwZMYIhKyfyFxPxh3hsLItLyhhPM1UHXITBcpzpOVC7A0bPUzyi2WnDKKxUo0GTCLJmadpB6xaUv84jfv7KQijpkRiYDgQ+rgueWsJFBUZjKLnF9CTz/M0RJHEBPkK9uSzTdVRbRLsHxyj9Ix2AmO2AAAAAElFTkSuQmCC"},39407:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJUlEQVRYR+2WyxXCIBBFIT1Yj+60jNiFVmAZahvubCdFOB44kkMITN7wSTZmHbiXYd4kWm386I356i+wWgVur12vP3p/OQ1n/9pXEbBw6u4WTPTwJZoLTODu6J5EU4EoPJBoJsDCPYkmAhDctIOiZ3UBCfx6HPqqAlK4uYmZQCqvSyM7Bz4T4PLKCeTCJwJLeU0JlMBHASSvMYFSuBWANgnGp1kIrftFzXR7qoKYQDDDa8GxK/DViR7U0Xv8sDCdaYYMd3K3dIwheqqlONpigXA+hggp8o4Enh5E7tstlJDCowKSDp+0h6Ds0B+RpCdyTj5rwtxBUwJPXoEvw1WiFA4JpHqiBhwWCCVqwUUCTkKRPiATDk1w1T8iFArFMGeznDWbV+ALBrLyDLOJa8cAAAAASUVORK5CYII="}}]);