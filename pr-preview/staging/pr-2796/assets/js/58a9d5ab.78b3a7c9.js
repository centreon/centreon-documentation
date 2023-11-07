"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[78901],{18640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"services",title:"Creating services manually"},l=void 0,c={unversionedId:"monitoring/basic-objects/services",id:"version-23.10/monitoring/basic-objects/services",title:"Creating services manually",description:"To create a service manually, go to Configuration \\> Services > Services by host and then click Add.",source:"@site/versioned_docs/version-23.10/monitoring/basic-objects/services.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/services",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/services",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/basic-objects/services.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"services",title:"Creating services manually"},sidebar:"version-23.10/docs",previous:{title:"Monitoring a service",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/services-create"},next:{title:"Creating services automatically",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/services-create-disco"}},h={},p=[{value:"Configuration of the service",id:"configuration-of-the-service",level:2},{value:"General information tab",id:"general-information-tab",level:3},{value:"Service Basic Information",id:"service-basic-information",level:4},{value:"Service Check Options",id:"service-check-options",level:4},{value:"Service Scheduling Options",id:"service-scheduling-options",level:4},{value:"Notifications tab",id:"notifications-tab",level:3},{value:"Relations tab",id:"relations-tab",level:3},{value:"Data processing tab",id:"data-processing-tab",level:3},{value:"Extended Info tab",id:"extended-info-tab",level:3},{value:"Centreon",id:"centreon",level:4},{value:"Monitoring engine",id:"monitoring-engine",level:4},{value:"Additional information",id:"additional-information",level:4},{value:"Detachment of a service",id:"detachment-of-a-service",level:2}],d={toc:p},m="wrapper";function u(e){var{components:t}=e,s=o(e,["components"]);return(0,i.kt)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create a service manually, go to ",(0,i.kt)("strong",{parentName:"p"},"Configuration ",">"," Services > Services by host")," and then click ",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("h2",{id:"configuration-of-the-service"},"Configuration of the service"),(0,i.kt)("h3",{id:"general-information-tab"},"General information tab"),(0,i.kt)("h4",{id:"service-basic-information"},"Service Basic Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": define the name of the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hosts"),": Host(s) to which the service is attached. We recommend that you link a service to only one host."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Template"),": indicates the service template to which the service is linked.")),(0,i.kt)("h4",{id:"service-check-options"},"Service Check Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Check Command")," field indicates the command used to check the availability of the service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Custom Macros"),": add customized macros."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"macro name")," and ",(0,i.kt)("strong",{parentName:"p"},"macro value")," fields allow us to define the name and value of the macro. The ",(0,i.kt)("strong",{parentName:"p"},"Password")," box\ncan be used to hide the value of the macro.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To reinitialize to the default value (defined in template) click ",(0,i.kt)("img",{alt:"image",src:n(73573).Z+"#thumbnail1",width:"32",height:"32"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To view the description of the macro, click ",(0,i.kt)("img",{alt:"image",src:n(89733).Z+"#thumbnail1",width:"32",height:"32"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To delete the macro, click ",(0,i.kt)("img",{alt:"image",src:n(18261).Z+"#thumbnail1",width:"24",height:"24"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To change the order of the macros, click ",(0,i.kt)("img",{alt:"image",src:n(56410).Z+"#thumbnail1",width:"24",height:"24"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Args")," table defines the arguments given for the check command (the number of arguments varies according to the\ncheck command chosen)."))),(0,i.kt)("h4",{id:"service-scheduling-options"},"Service Scheduling Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Check Period")," field defines the time period during which the scheduler checks the status of the service."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Max Check Attempts")," of the status field defines the number of checks to be carried out to confirm the status of\nthe service. When the status is validated, the notification process is engaged"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Normal Check Interval")," field is expressed in minutes. It defines the interval between checks when the service status is OK."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Retry Check Interval")," field is expressed in minutes. It defines the confirmation interval for the Not-OK service status"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Active Checks Enabled")," and ",(0,i.kt)("strong",{parentName:"li"},"Passive Checks Enabled")," fields enable / disable the type of check on the service."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Is Volatile")," field indicates if the service is volatile or not (normally only passive services are volatile).")),(0,i.kt)("h3",{id:"notifications-tab"},"Notifications tab"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Notification Enabled")," field allows us to enable or disable the notifications for the object.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("strong",{parentName:"p"},"Inherit only contacts/contact group from host")," box is checked, then when generating the configuration, contact\nand/or host groups of contacts (or those inherited from templates) will overwrite the service or its service\ntemplates. This function disables entering contacts and contact groups for this service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Implied Contacts")," indicates the contacts that will receive the notifications.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Implied Contact Groups")," list, all the contacts belonging to the contact groups defined will receive the notifications."),(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("strong",{parentName:"p"},"Vertical inheritance only")," option is enabled on the page ",(0,i.kt)("strong",{parentName:"p"},"Administration > Parameters > Centreon UI"),", two extra checkboxes appear:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("strong",{parentName:"li"},"Contact additive inheritance")," box is checked, Centreon does not overwrite the configuration of the parent host template, but adds the contacts in addition to the contacts defined in the parent template."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("strong",{parentName:"li"},"Contact group additive inheritance")," box is checked, Centreon does not overwrite the configuration of the parent host template, but adds the contact groups in addition to the contact groups defined in the parent template."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Notification Interval")," field is expressed in minutes. It indicates the time between the sending of notifications\nwhen the status is Not-OK. If the value is defined as 0, the scheduler sends a single notification per status change.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Notification Period")," field defines the ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/timeperiods"},"time period")," during which notifications will be sent. No notifications will be sent outside this time period.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Notification Type")," defines the statuses for which a notification will be sent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"First notification delay")," time is expressed in minutes. It refers to the time delay to be respected before\nsending the first notification when a Not-OK status is validated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Recovery notification delay")," is the time that must pass before a recovery notification is sent (when the service goes back to an OK state)."))),(0,i.kt)("h3",{id:"relations-tab"},"Relations tab"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Servicegroups")," list allows us to link the service to one or more service groups."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Service Trap Relation")," field allows us to define the SNMP traps that will be able to change the behavior of the service.")),(0,i.kt)("h3",{id:"data-processing-tab"},"Data processing tab"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("strong",{parentName:"li"},"Obsess over service")," field is enabled, the monitoring feedback command of the host will be enabled."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Check freshness")," field allows us to enable or disable the check on the freshness of the result."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Freshness threshold")," field is expressed in seconds. If no request for a change in the status\nof the service (passive command) is received during this period, the check command is executed."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Flap Detection Enabled")," field allows us to enable or disable the detection of disruption in the statuses (status\nvalue changing too often in a given period)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Low flap threshold")," and ",(0,i.kt)("strong",{parentName:"li"},"High flap threshold")," fields define the high and low thresholds for the detection of\ndisruption in percentage of status change."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Performance data processing")," field allows us to enable or disable performance data processing (and hence the\ngeneration of performance graphics). This option is not necessary when Centreon Broker is used."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Retain status information")," and ",(0,i.kt)("strong",{parentName:"li"},"Retention non status information")," fields indicate if the information concerning\nor not concerning the status is saved after every time the check command is repeated."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Stalking Options")," field defines the options to be recorded if retention is enabled."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Event handler enabled")," field allows us to enable or disable the events manager."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Event handler")," field defines the command to be executed if the event manager is enabled."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Args")," field defines the arguments of the events handler command.")),(0,i.kt)("h3",{id:"extended-info-tab"},"Extended Info tab"),(0,i.kt)("h4",{id:"centreon"},"Centreon"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Graph template"),": Defines the graphics model to be use to present the performance data linked to the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Categories"),": Defines the category or categories to which the service belongs.")),(0,i.kt)("h4",{id:"monitoring-engine"},"Monitoring engine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Note URL")," field defines a URL that can be used to give more information on the service."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Note")," field can be used to add optional notes concerning the service."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Action URL")," field defines a URL normally used for giving information on actions on the service (maintenance, etc.)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Icon")," field indicates the icon used for the service."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Alt icon")," field is the text used if the icon cannot be displayed."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Host severity")," field indicates the severity level of the host."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Geographic coordinates"),' field defines the geographical coordinates used by the Centreon MAP module to position the resource on a map.\nDefine "Latitude,Longitude"; for example, the set of coordinates for Paris is "48.51,2.20"')),(0,i.kt)("h4",{id:"additional-information"},"Additional information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Enable/disable resource")," field allows us to enable or disable the service."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to add a comment concerning the service.")),(0,i.kt)("h2",{id:"detachment-of-a-service"},"Detachment of a service"),(0,i.kt)("p",null,"If a service is linked to several hosts, it will be identical for each one of them. Hence it will not be possible to\nmodify the service of one host individually to change a property. This why it is possible to convert this service linked\nto multiple hosts into a single service for each host:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the list of services, select the service linked to multiple hosts (this service is usually highlighted in orange)."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"More actions...")," menu, click ",(0,i.kt)("strong",{parentName:"li"},"Detach")," and confirm.")),(0,i.kt)("p",null,"There is now a single service per host."))}u.isMDXComponent=!0},18261:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACU0lEQVRIS7VV3Y3aYBCcxY6E7IdcCXYFx71FJ6NABUcJXAUhFeSuA1IBdHBcBecIK68HFZgSyIOtSMFstJ/9GRv/gZT4BYnP3tmdmZ2P8J8faqsfYnTTs/88MNMEgAOigXqfeQNgR8SrY/Th1YW/b6pTC6AKW4cvTDQDcNMx5J6Y58fY/F4HVAEI+58c6pkvulsG/wBoCSQbN/opnSO07weAMQB4SqDPeiqOzfE5SAlAOic7CaVrZt7iiJn7O/Bbaex7I/QwJ6JbAHuODLcIkgOo4tbhTTpXxWNz1MZtEVS+hXXwFQjzpjjJCcDynojo27XFNVARhJmf3Th4kjMFUKIm4XEXLU2UhX1vRAa9FalKAezhlICFCOpGwag0vkwG3HJsPmrKMjoXDGx1p/kktueL8Aw8utF6mQJYwxURHvSfZYD0THOrxs61wqsbr2VH8idvltOzDMDbiECM5E5bsY7bbMHQZgSxMMF4l3edOLhTADt7yPLrROvGxctdoha53WXFehcDaFralkpPXQEIrXaKSvshGtT4/SRySpFM6cbB4GKRNS2qULZUnAnZLXJmU4B9JwrG5zYFaIDYmBZtCitZAry5zKay6nayI+Aj/4NFY+AXIsORhipRcZ4lHVF98r/KsuQdBKcSFToumgKrC+Q8KEVc/U0lrjVVapIjvnblksqfHi1U5wVqagEqk6Sm9wm8PIK3xQunB9l8mgKksqtp+do2dwaimQjfRpHqmnmO2JxfdGWWLJq6awLGBGAnu7XSbkE7EFaIjNXVl36XqNec/wVYN7EoykSzzwAAAABJRU5ErkJggg=="},89733:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA00lEQVRYR+2X4QnCMBCF303gCDUu5ArGBRxBu4ETWCdr6wZucHJpFS2FQkjzEJJ/5eDel3tc6BPYaborgD2Abfhe7/QA7vCufkvIKH5aT3O2cw3vLlYR3NonRDaZAXp45waAptPM4oOcdzIPMBaSQ00vWgDKBP5nArFrOt2m6C2gA6R6EKInQAegW0AHoFtAB6BbQAegW0AHoFtAB6BbUACyTyCV4FKfzz8hI5qpPnDchSBs0cxC4nkJOHH9K5xaZ4NQPUCkSiz0285uLmLxPCRjOy/LXM4hjbE3IQAAAABJRU5ErkJggg=="},56410:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABRElEQVRIS7WVa1HFQAxGzzoACVXAlXCRUgXgAHAABrhSQEKvgkoAB2W2+360CWXor840ydnN9yU1aJ/LfAN8+PB7xuFbk2o0QaTiJx8/ASqIDGiLhzOpIPuAvPjCFcPdWj29ixAJ8Aw8+YJn4Msf/5aFTw98YRxsXPeRAFbYR+B1FfUyL2uVcTBel/TtEKBOygEqd0B5A9fzB+Cta8M9wEZuApRu6fd1H+D0gkJ4B2jdcj50gyR8hASx7ISeolu2plTSwB60ghje5yn6WyncL8Km/wUsXF2LOr3rnlLTIrcQY7uTyBqIbNNGy9Km0vhrbOr2VHRhb9C2x1++QZMrr+tcDEmDjnCaZZdWR7vstteKh0mAcvzzdR3cAn9c16W78l+mPPnU27Rn/nJOUkTllmM/nJBVQ5TFbbreRQHisvrbtnONHxhhz88vTc1OAAAAAElFTkSuQmCC"},73573:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+UlEQVRYR+WX4VXCMBSFv0ygI5gJ1AnADdhA0wlkA91AF6A4gTqBZQLLBHEEN4jntQVKSGhrin985wAHEt69ue/mpVH8NhZ2gmIGXAEXzUuylcA38AasMFq+R0MNxl/YWxQPLcCuFAXwiNHyeRD9CeT2HPhoVtwFGhpfYrTxB/oRyK3ILOBCIiWkHDcYLSWqQpFbt5fR6H1Sx8GfgQKjpd511ErNcNyhmATYlhh93Y9ADNzxjuIeo7+OypHbKY4nFJfevG054grEVy6GEhP2C1HE8RZQQ0pRhAnEwQ1GL/sht2bVJApPCSndzSEBkPqEDPc78J03pk3eNn8dIiAO9d2eBr6BXFhRoW3MeYiAr/A44PUOuZP3LYBj1UVgPPCagPSTz9YKyy4Ch37z+8RQR3p9558R8EvgWP+tAkETDq1hyvzcSn+RfrCJeb/TMAW0sxGNkbwrR+hZwrEi09O/USC3r9URvR/NYdTFPnU8t9L5pAPuwvFCpqvfTqtAGHxNpqUjVnE6Av6WEzTHGsV0/5EsVeJj/1/YJYrbakoA/LQKbIgJCbk7eCs/fQnaysg2bD0Jt4fG84BcWDL9MrSi4xDYuT14+ThGKp3A4VYbRCKNQG4vcK5EqbPtKiNuj6mQRkCyyhnvXFGRGAg+3jasSFQ3oFnM7TEFfgAMb8xH00G9TQAAAABJRU5ErkJggg=="}}]);