"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[34194],{93349:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"concepts",title:"Possible statuses of a resource"},o=void 0,p={unversionedId:"alerts-notifications/concepts",id:"version-23.10/alerts-notifications/concepts",title:"Possible statuses of a resource",description:"Statuses show the availability of a host, and the availability or performance of a service. Each status has a",source:"@site/versioned_docs/version-23.10/alerts-notifications/concepts.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/concepts",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/concepts.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"concepts",title:"Possible statuses of a resource"},sidebar:"version-23.10/docs",previous:{title:"Import/Export",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/web-import-export"},next:{title:"Resources Status page",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/resources-status"}},c={},u=[{value:"Host status",id:"host-status",level:3},{value:"Service status",id:"service-status",level:3},{value:"States",id:"states",level:2},{value:"Status types",id:"status-types",level:2},{value:"Explanation",id:"explanation",level:3}],d={toc:u},m="wrapper";function k(t){var{components:e}=t,s=i(t,["components"]);return(0,n.kt)(m,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},d,s),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Statuses show the availability of a host, and the availability or performance of a service. Each status has a\nprecise meaning for the resource. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The statuses and states of a resource\ncan be seen on page ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/resources-status"},"Resources Status"),". You can filter the page according to these statuses and to certain states."),(0,n.kt)("li",{parentName:"ul"},"Some statuses are determined according to user-defined thresholds.")),(0,n.kt)("h3",{id:"host-status"},"Host status"),(0,n.kt)("p",null,"The table below summarizes all the possible statuses for a host."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#88b917"}},"UP")),(0,n.kt)("td",{parentName:"tr",align:null},"The host is available and reachable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#e00b3d"}},"DOWN")),(0,n.kt)("td",{parentName:"tr",align:null},"The host is unavailable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#818185"}},"UNREACHABLE")),(0,n.kt)("td",{parentName:"tr",align:null},"The host is unreachable: it ",(0,n.kt)("a",{parentName:"td",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-dependencies"},"depends")," on a host whose status is ",(0,n.kt)("strong",{parentName:"td"},"DOWN"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#2ad1d4"}},"PENDING")),(0,n.kt)("td",{parentName:"tr",align:null},"The host has just been created and has not been checked yet by the monitoring engine")))),(0,n.kt)("h3",{id:"service-status"},"Service status"),(0,n.kt)("p",null,"The table below summarizes all the possible statuses for a service."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#88b917"}},"OK")),(0,n.kt)("td",{parentName:"tr",align:null},"The service presents no problem")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#ff9a13"}},"WARNING")),(0,n.kt)("td",{parentName:"tr",align:null},"The service has reached the warning threshold")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#e00b3d"}},"CRITICAL")),(0,n.kt)("td",{parentName:"tr",align:null},"The service has reached the critical threshold")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#bcbdc0"}},"UNKNOWN")),(0,n.kt)("td",{parentName:"tr",align:null},"The status of the service cannot be checked (e.g.: SNMP agent down, etc.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{style:{color:"#2ad1d4"}},"PENDING")),(0,n.kt)("td",{parentName:"tr",align:null},"The service has just been created and has not been checked yet by the monitoring engine")))),(0,n.kt)("h2",{id:"states"},"States"),(0,n.kt)("p",null,"In addition to their status, resources can be in several states:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/acknowledge"},"Acknowledged"),": indicates that the incident on the service or on the host\nhas been taken into account by a user. Acknowledged resources have a yellow background."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/downtimes"},"In downtime"),": indicates that notifications are temporarily stopped. Downtime can be ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/downtimes#recurrent-downtimes"},"planned in advance")," to avoid receiving alerts during maintenance periods, or can be set following an incident. Resources in downtime have a purple background.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-flapping"},"Flapping"),": indicates that the status change\npercentage of the resource is very high. This percentage is obtained\nfrom calculations performed by the network monitoring engine.  Flapping resources have the following icon in their ",(0,n.kt)("strong",{parentName:"li"},"Details")," panel:\n",(0,n.kt)("img",{alt:"image",src:a(62846).Z,width:"531",height:"409"}))),(0,n.kt)("h2",{id:"status-types"},"Status types"),(0,n.kt)("p",null,"The status of a resource can be one of these two types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SOFT: Means that an incident has just been detected and that it\nhas to be confirmed."),(0,n.kt)("li",{parentName:"ul"},"HARD: Means that the status of the incident is confirmed. Once\nthe status is confirmed, the notification process is engaged\n(sending of an email, SMS, etc.).")),(0,n.kt)("p",null,"You can filter the view on the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/resources-status"},"Resources Status")," page according to the status type."),(0,n.kt)("h3",{id:"explanation"},"Explanation"),(0,n.kt)("p",null,'An incident (Not-OK status) is confirmed as soon as the number of\nvalidation attempts has reached its end. The configuration of a resource\n(host or service) requires a regular check interval, a number of\nattempts to confirm a Not-OK status and an irregular check interval. As\nsoon as the first incident is detected, the state is "SOFT" until its\nconfirmation into "HARD", triggering the notification process.'),(0,n.kt)("p",null,"Example:"),(0,n.kt)("p",null,"A service has the following check settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Max check attempts: 3"),(0,n.kt)("li",{parentName:"ul"},"Normal check interval: 5 minutes"),(0,n.kt)("li",{parentName:"ul"},"Retry check interval: 1 minute")),(0,n.kt)("p",null,"Let us imagine the following scenario:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(1609).Z,width:"3300",height:"900"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Time"),(0,n.kt)("th",{parentName:"tr",align:null},"Check attempt"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Status type"),(0,n.kt)("th",{parentName:"tr",align:null},"State change"),(0,n.kt)("th",{parentName:"tr",align:null},"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+0"),(0,n.kt)("td",{parentName:"tr",align:null},"1/3"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial state of the service")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+5"),(0,n.kt)("td",{parentName:"tr",align:null},"1/3"),(0,n.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,n.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"First detection of a non-OK state. Event handlers execute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+6"),(0,n.kt)("td",{parentName:"tr",align:null},"2/3"),(0,n.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,n.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service continues to be in a non-OK state. Event handlers execute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+7"),(0,n.kt)("td",{parentName:"tr",align:null},"3/3"),(0,n.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Max check attempts has been reached, so service goes into a HARD state. Event handlers execute and a problem notification is sent out. Check # is reset to 1 immediately after this happens.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+12"),(0,n.kt)("td",{parentName:"tr",align:null},"3/3"),(0,n.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service changes to a HARD WARNING state. Event handlers execute and a problem notification is sent out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+17"),(0,n.kt)("td",{parentName:"tr",align:null},"3/3"),(0,n.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Service stabilizes in a HARD problem state. Depending on what the notification interval for the service is, another notification might be sent out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+22"),(0,n.kt)("td",{parentName:"tr",align:null},"1/3"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service experiences a HARD recovery. Event handlers execute and a recovery notification is sent out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+27"),(0,n.kt)("td",{parentName:"tr",align:null},"1/3"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Service is still OK.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+32"),(0,n.kt)("td",{parentName:"tr",align:null},"1/3"),(0,n.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,n.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service is detected as changing to a SOFT non-OK state. Event handlers execute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+33"),(0,n.kt)("td",{parentName:"tr",align:null},"2/3"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'Service experiences a SOFT recovery. Event handlers are executed, but no notification is sent, as this wasn\'t a "real" problem. State type is set to HARD and check # is reset to 1 immediately after this happens.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"t+34"),(0,n.kt)("td",{parentName:"tr",align:null},"1/3"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"HARD"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Service stabilizes in an OK state.")))))}k.isMDXComponent=!0},62846:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/flapping_icon-4607d41522b206c05938c4bbd87c8bca.png"},1609:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/soft_hard_states-89855b1b24628042e3a48efb2d231336.png"}}]);