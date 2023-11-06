"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[23139],{56245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m={id:"sc-service-now-incident-events",title:"ServiceNow Incident"},p=void 0,c={unversionedId:"integrations/event-management/sc-service-now-incident-events",id:"version-23.10/integrations/event-management/sc-service-now-incident-events",title:"ServiceNow Incident",description:"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on slack.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-service-now-incident-events.md",sourceDirName:"integrations/event-management",slug:"/integrations/event-management/sc-service-now-incident-events",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/integrations/event-management/sc-service-now-incident-events",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-service-now-incident-events.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"sc-service-now-incident-events",title:"ServiceNow Incident"},sidebar:"version-23.10/docs",previous:{title:"PagerDuty Events",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/integrations/event-management/sc-pagerduty-events"},next:{title:"ServiceNow Event Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/integrations/event-management/sc-service-now-em-events"}},u={},d=[{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Service Now mandatory parameters",id:"add-service-now-mandatory-parameters",level:3},{value:"Add Service Now optional parameters",id:"add-service-now-optional-parameters",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Curl commands",id:"curl-commands",level:2},{value:"Get OAuth tokens",id:"get-oauth-tokens",level:3},{value:"Refresh OAuth tokens",id:"refresh-oauth-tokens",level:3},{value:"Send events",id:"send-events",level:3}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on ",(0,a.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"),".")),(0,a.kt)("h2",{id:"before-starting"},"Before starting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,a.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,a.kt)("strong",{parentName:"li"},"host_status")," and ",(0,a.kt)("strong",{parentName:"li"},"service_status")," events. The event format is shown ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#event-format"},"there")),"."),(0,a.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Login as ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," on the Centreon central server using your favorite SSH client."),(0,a.kt)("p",null,"Run the command according on your system:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-servicenow\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-servicenow\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-stream-connector-servicenow\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure your stream connector, you must ",(0,a.kt)("strong",{parentName:"p"},"head over")," the ",(0,a.kt)("strong",{parentName:"p"},"configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,a.kt)("strong",{parentName:"p"},"Select")," the ",(0,a.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,a.kt)("strong",{parentName:"p"},"click")," the ",(0,a.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add")," a new ",(0,a.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,a.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Servicenow events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Path"),(0,a.kt)("td",{parentName:"tr",align:null},"/usr/share/centreon-broker/lua/servicenow-incident-events-apiv2.lua")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filter category"),(0,a.kt)("td",{parentName:"tr",align:null},"Neb")))),(0,a.kt)("h3",{id:"add-service-now-mandatory-parameters"},"Add Service Now mandatory parameters"),(0,a.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,a.kt)("th",{parentName:"tr",align:null},"Value exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"instance"),(0,a.kt)("td",{parentName:"tr",align:null},"the name of the service now instance"),(0,a.kt)("td",{parentName:"tr",align:null},"MyCompany")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"client_id"),(0,a.kt)("td",{parentName:"tr",align:null},"The Oauth client_id"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,a.kt)("td",{parentName:"tr",align:null},"The Oauth client_secret"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"The Oauth user"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"The Oauth pasword"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"add-service-now-optional-parameters"},"Add Service Now optional parameters"),(0,a.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"http_server_url"),(0,a.kt)("td",{parentName:"tr",align:null},"service-now.com"),(0,a.kt)("td",{parentName:"tr",align:null},"the address of the service-now server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"incident_table"),(0,a.kt)("td",{parentName:"tr",align:null},"incident"),(0,a.kt)("td",{parentName:"tr",align:null},"the name of the incident table")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"centreon"),(0,a.kt)("td",{parentName:"tr",align:null},"the source name of the incident")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"logfile"),(0,a.kt)("td",{parentName:"tr",align:null},"the file in which logs are written"),(0,a.kt)("td",{parentName:"tr",align:null},"/var/log/centreon-broker/servicenow-incident-stream-connector.log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"log_level"),(0,a.kt)("td",{parentName:"tr",align:null},"logging level from 1 (errors) to 3 (debug)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h3",{id:"standard-parameters"},"Standard parameters"),(0,a.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,a.kt)("p",null,"All those parameters are documented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"},"here")),"."),(0,a.kt)("p",null,"Some of them are overridden by this stream connector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value for the stream connector"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"accepted_categories"),(0,a.kt)("td",{parentName:"tr",align:null},"neb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"accepted_elements"),(0,a.kt)("td",{parentName:"tr",align:null},"host_status,service_status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"host_status"),(0,a.kt)("td",{parentName:"tr",align:null},"1,2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"service_status"),(0,a.kt)("td",{parentName:"tr",align:null},"1,2,3")))),(0,a.kt)("h2",{id:"event-bulking"},"Event bulking"),(0,a.kt)("p",null,"This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Service Now REST API."),(0,a.kt)("p",null,"To use this feature you must add the following parameter in your stream connector configuration."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"max_buffer_size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"more than one"))))),(0,a.kt)("h2",{id:"event-format"},"Event format"),(0,a.kt)("p",null,"This stream connector is not compatible with event bulking. Meaning that the option ",(0,a.kt)("inlineCode",{parentName:"p"},"max_buffer_size")," can't be higher than 1"),(0,a.kt)("h3",{id:"service_status-event"},"service_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": "centreon",\n  "short_description": "CRITICAL  my_host my_service is not doing well",\n  "cmdb_ci": "my_host",\n  "comments": "HOST: my_host\\n SERVICE: my_service\\n OUTPUT: is not doing well"\n}\n')),(0,a.kt)("h3",{id:"host_status-event"},"host_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": "centreon",\n  "short_description": "CRITICAL  my_host is not doing well",\n  "cmdb_ci": "my_host",\n  "comments": "HOST: my_host\\n OUTPUT: is not doing well"\n}\n')),(0,a.kt)("h3",{id:"custom-event-format"},"Custom event format"),(0,a.kt)("p",null,"This stream connector allows you to change the format of the event to suit your needs. Only the ",(0,a.kt)("strong",{parentName:"p"},"records")," part of the json is customisable. It also allows you to handle events type that are not handled by default such as ",(0,a.kt)("strong",{parentName:"p"},"ba_status events"),"."),(0,a.kt)("p",null,"In order to use this feature you need to configure a json event format file and add a new stream connector parameter."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"format_file"),(0,a.kt)("td",{parentName:"tr",align:null},"/etc/centreon-broker/servicenow-incident-events-format.json")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The event format configuration file must be readable by the centreon-broker user")),(0,a.kt)("p",null,"To learn more about custom event format and templating file, head over the following ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation"},"documentation")),"."),(0,a.kt)("h2",{id:"curl-commands"},"Curl commands"),(0,a.kt)("p",null,"Here is the list of all the curl commands that are used by the stream connector."),(0,a.kt)("p",null,"You must replace all the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<xxxx>"))," inside the below commands with their appropriate value. ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<instance>"))," may become ",(0,a.kt)("em",{parentName:"p"},"MyCompany"),"."),(0,a.kt)("h3",{id:"get-oauth-tokens"},"Get OAuth tokens"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST -H \"Content-Type: application/x-www-form-urlencoded\" 'https://<instance_name>.service-now.com/oauth_token.do' -d 'grant_type=password&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>'\n")),(0,a.kt)("h3",{id:"refresh-oauth-tokens"},"Refresh OAuth tokens"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST -H \"Content-Type: application/x-www-form-urlencoded\" 'https://<instance_name>.service-now.com/oauth_token.do' -d 'grant_type=refresh_token&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>&refresh_token=<refresh_token>'\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<refresh_token>"))," is obtained thanks to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#get-oauth-tokens"},"this curl")),"."),(0,a.kt)("h3",{id:"send-events"},"Send events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H \'content-type: application/json\' -H \'Accept: application/json\' -H \'Authorization: Bearer <access_token>\' \'https://<instance_name>.service-now.com/api/now/table/incident\' -d \'{"source":"centreon","short_description":"CRITICAL  my_host my_service is not doing well","cmdb_ci":"my_host","comments":"HOST: my_host\\n SERVICE: my_service\\n OUTPUT: is not doing well"}\'\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<access_token>"))," is obtained thanks to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#get-oauth-tokens"},"this curl")),"."))}h.isMDXComponent=!0}}]);