"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[3478],{55312:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const m={id:"sc-signl4-events",title:"Signl4 Events"},p=void 0,u={unversionedId:"integrations/event-management/sc-signl4-events",id:"version-23.10/integrations/event-management/sc-signl4-events",title:"Signl4 Events",description:"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on slack.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-signl4-events.md",sourceDirName:"integrations/event-management",slug:"/integrations/event-management/sc-signl4-events",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/event-management/sc-signl4-events",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-signl4-events.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"sc-signl4-events",title:"Signl4 Events"},sidebar:"version-23.10/docs",previous:{title:"ServiceNow Event Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/event-management/sc-service-now-em-events"},next:{title:"ITSM",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/integrations/itsm/itsm-overview"}},d={},c=[{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Signl4 mandatory parameters",id:"add-signl4-mandatory-parameters",level:3},{value:"Add Signl4 optional parameters",id:"add-signl4-optional-parameters",level:3},{value:"Proxy configuration",id:"proxy-configuration",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Curl commands",id:"curl-commands",level:2},{value:"Send events",id:"send-events",level:3}],g={toc:c},k="wrapper";function h(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(k,s(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on ",(0,a.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"),".")),(0,a.kt)("h2",{id:"before-starting"},"Before starting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,a.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,a.kt)("strong",{parentName:"li"},"host_status")," and ",(0,a.kt)("strong",{parentName:"li"},"service_status")," events. The event format is shown ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#event-format"},"there")),"."),(0,a.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Connectez vous en tant que ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," sur le serveur Centreon central en utilisant votre client SSH pr\xe9f\xe9r\xe9."),(0,a.kt)("p",null,"Lancer la commande adapt\xe9e \xe0 votre syst\xe8me :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-signl4\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-signl4\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-stream-connector-signl4\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure your stream connector, you must ",(0,a.kt)("strong",{parentName:"p"},"head over")," the ",(0,a.kt)("strong",{parentName:"p"},"Configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,a.kt)("strong",{parentName:"p"},"Select")," the ",(0,a.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,a.kt)("strong",{parentName:"p"},"click")," the ",(0,a.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add")," a new ",(0,a.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,a.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Signl4 events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Path"),(0,a.kt)("td",{parentName:"tr",align:null},"/usr/share/centreon-broker/lua/signl4-events-apiv2.lua")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filter category"),(0,a.kt)("td",{parentName:"tr",align:null},"Neb")))),(0,a.kt)("h3",{id:"add-signl4-mandatory-parameters"},"Add Signl4 mandatory parameters"),(0,a.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,a.kt)("th",{parentName:"tr",align:null},"Value exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"team_secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Team secret"),(0,a.kt)("td",{parentName:"tr",align:null},"x3x","[..]","2c")))),(0,a.kt)("h3",{id:"add-signl4-optional-parameters"},"Add Signl4 optional parameters"),(0,a.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"server_address"),(0,a.kt)("td",{parentName:"tr",align:null},"url of your Centreon serversignl4 instance"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://connect.signl4.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"x_s4_source_system"),(0,a.kt)("td",{parentName:"tr",align:null},"source system to display in Signl4"),(0,a.kt)("td",{parentName:"tr",align:null},"Centreon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"logfile"),(0,a.kt)("td",{parentName:"tr",align:null},"the file in which logs are written"),(0,a.kt)("td",{parentName:"tr",align:null},"/var/log/centreon-broker/signl4-events-apiv2.log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"log_level"),(0,a.kt)("td",{parentName:"tr",align:null},"logging level from 1 (errors) to 3 (debug)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h3",{id:"proxy-configuration"},"Proxy configuration"),(0,a.kt)("p",null,"When using a proxy to connect to the Signl4 endpoint, you can use additional parameters to configure it:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"proxy_address"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"proxy_port"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy port (mandatory when proxy_address is set)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"proxy_username"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy username the file in which logs are written")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"proxy_password"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy password (mandatory when proxy_username is set)")))),(0,a.kt)("h3",{id:"standard-parameters"},"Standard parameters"),(0,a.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,a.kt)("p",null,"All those parameters are documented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"},"here")),"."),(0,a.kt)("p",null,"Some of them are overridden by this stream connector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value for the stream connector"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"accepted_categories"),(0,a.kt)("td",{parentName:"tr",align:null},"neb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"accepted_elements"),(0,a.kt)("td",{parentName:"tr",align:null},"host_status,service_status")))),(0,a.kt)("h2",{id:"event-bulking"},"Event bulking"),(0,a.kt)("p",null,"This stream connector is not compatible with event bulking. Meaning that the option ",(0,a.kt)("inlineCode",{parentName:"p"},"max_buffer_size")," can't be higher than 1"),(0,a.kt)("h2",{id:"event-format"},"Event format"),(0,a.kt)("p",null,"This stream connector will send event with the following format."),(0,a.kt)("h3",{id:"service_status-event"},"service_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "EventType": "SERVICE",\n  "Date": "Fri Nov 26 11:54:29 CET 2021",\n  "Host": "Highway",\n  "Service": "to hell!",\n  "Message": "acdc song",\n  "Status": "CRITICAL",\n  "Title": "Highway/to hell! is CRITICAL",\n  "X-S4-SourceSystem": "Centreon",\n  "X-S4-ExternalID": "HOSTALERT_666",\n  "X-S4-Status": "new"\n}\n')),(0,a.kt)("h3",{id:"host_status-event"},"host_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "EventType": "HOST",\n  "Date": "Fri Nov 26 11:54:29 CET 2021",\n  "Host": "Highway",\n  "Message": "to hell!",\n  "Status": "DOWN",\n  "Title": "Highway is DOWN",\n  "X-S4-SourceSystem": "Centreon",\n  "X-S4-ExternalID": "HOSTALERT_666",\n  "X-S4-Status": "new"\n}\n')),(0,a.kt)("h3",{id:"custom-event-format"},"Custom event format"),(0,a.kt)("p",null,"This stream connector allows you to change the format of the event to suit your needs. Only the ",(0,a.kt)("strong",{parentName:"p"},"event")," part of the json is customisable. It also allows you to handle events type that are not handled by default such as ",(0,a.kt)("strong",{parentName:"p"},"ba_status events"),"."),(0,a.kt)("p",null,"In order to use this feature you need to configure a json event format file and add a new stream connector parameter."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"format_file"),(0,a.kt)("td",{parentName:"tr",align:null},"/etc/centreon-broker/lua-conf/signl4-events-format.json")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The event format configuration file must be readable by the centreon-broker user")),(0,a.kt)("p",null,"To learn more about custom event format and templating file, head over the following ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation"},"documentation")),"."),(0,a.kt)("h2",{id:"curl-commands"},"Curl commands"),(0,a.kt)("p",null,"Here is the list of all the curl commands that are used by the stream connector."),(0,a.kt)("h3",{id:"send-events"},"Send events"),(0,a.kt)("p",null,"You can trigger a signal with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H \'content-type: application/json\' \'https://connect.signl4.com/webhook/<team_secret>\' -d \'{"EventType": "HOST","Date": "Fri Nov 26 11:54:29 CET 2021","Host": "Highway","Message": "to hell!","Status": "DOWN", "Title": "Highway is DOWN", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "new"}\'\n')),(0,a.kt)("p",null,"You can then close this signal with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H \'content-type: application/json\' \'https://connect.signl4.com/webhook/<team_secret>\' -d \'{"EventType": "HOST","Date": "Fri Nov 26 12:00:00 CET 2021","Host": "Highway","Message": "to hell!","Status": "OK", "Title": "Highway is UP", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "resolved"}\'\n')),(0,a.kt)("p",null,"You must replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"<team_secret>")," inside the URL with yours."))}h.isMDXComponent=!0}}]);