"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[3505],{39620:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"sc-splunk-metrics",title:"Splunk Metrics"},m=void 0,u={unversionedId:"integrations/data-analytics/sc-splunk-metrics",id:"version-23.10/integrations/data-analytics/sc-splunk-metrics",title:"Splunk Metrics",description:"Before starting",source:"@site/versioned_docs/version-23.10/integrations/data-analytics/sc-splunk-metrics.md",sourceDirName:"integrations/data-analytics",slug:"/integrations/data-analytics/sc-splunk-metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/integrations/data-analytics/sc-splunk-metrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/data-analytics/sc-splunk-metrics.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"sc-splunk-metrics",title:"Splunk Metrics"},sidebar:"version-23.10/docs",previous:{title:"Datadog Metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/integrations/data-analytics/sc-datadog-metrics"},next:{title:"Splunk Events",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/integrations/data-analytics/sc-splunk-events"}},c={},d=[{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Splunk mandatory parameters",id:"add-splunk-mandatory-parameters",level:3},{value:"Add Splunk optional parameters",id:"add-splunk-optional-parameters",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Curl commands",id:"curl-commands",level:2},{value:"Send events",id:"send-events",level:3}],k={toc:d},g="wrapper";function h(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(g,s(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"before-starting"},"Before starting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,a.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,a.kt)("strong",{parentName:"li"},"metrics")," from ",(0,a.kt)("strong",{parentName:"li"},"host_status")," and ",(0,a.kt)("strong",{parentName:"li"},"service_status")," events. The event format is shown ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#event-format"},"there")),"."),(0,a.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Login as ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," on the Centreon central server using your favorite SSH client."),(0,a.kt)("p",null,"Run the command according on your system:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-splunk\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-splunk\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-stream-connector-splunk\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure your stream connector, you must ",(0,a.kt)("strong",{parentName:"p"},"head over")," the ",(0,a.kt)("strong",{parentName:"p"},"Configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,a.kt)("strong",{parentName:"p"},"Select")," the ",(0,a.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,a.kt)("strong",{parentName:"p"},"click")," the ",(0,a.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add")," a new ",(0,a.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,a.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Splunk metrics")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Path"),(0,a.kt)("td",{parentName:"tr",align:null},"/usr/share/centreon-broker/lua/splunk-metrics-apiv2.lua")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filter category"),(0,a.kt)("td",{parentName:"tr",align:null},"Neb")))),(0,a.kt)("h3",{id:"add-splunk-mandatory-parameters"},"Add Splunk mandatory parameters"),(0,a.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,a.kt)("th",{parentName:"tr",align:null},"Value exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"http_server_url"),(0,a.kt)("td",{parentName:"tr",align:null},"the url of the Splunk service collector"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://mysplunk.centreon.com:8088/services/collector"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"splunk_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Token to use the event collector api"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"add-splunk-optional-parameters"},"Add Splunk optional parameters"),(0,a.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that are associated with. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"splunk_sourcetype"),(0,a.kt)("td",{parentName:"tr",align:null},"Identifies the data structure of the event"),(0,a.kt)("td",{parentName:"tr",align:null},"_json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"splunk_host"),(0,a.kt)("td",{parentName:"tr",align:null},"Name or address of the server that generated the event"),(0,a.kt)("td",{parentName:"tr",align:null},"Central")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"splunk_index"),(0,a.kt)("td",{parentName:"tr",align:null},"Index where the events are stored"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"splunk_source"),(0,a.kt)("td",{parentName:"tr",align:null},"source of the http event collector. like ",(0,a.kt)("inlineCode",{parentName:"td"},"http:<name_of_index>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"logfile"),(0,a.kt)("td",{parentName:"tr",align:null},"the file in which logs are written"),(0,a.kt)("td",{parentName:"tr",align:null},"/var/log/centreon-broker/splunk-metrics.log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"log_level"),(0,a.kt)("td",{parentName:"tr",align:null},"logging level from 1 (errors) to 3 (debug)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h3",{id:"standard-parameters"},"Standard parameters"),(0,a.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,a.kt)("p",null,"All those parameters are documented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"},"here"))),(0,a.kt)("p",null,"Some of them are overridden by this stream connector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value for the stream connector"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"accepted_categories"),(0,a.kt)("td",{parentName:"tr",align:null},"neb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"accepted_elements"),(0,a.kt)("td",{parentName:"tr",align:null},"host_status,service_status")))),(0,a.kt)("h2",{id:"event-bulking"},"Event bulking"),(0,a.kt)("p",null,"This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Splunk REST API."),(0,a.kt)("p",null,"To use this feature you must add the following parameter in your stream connector configuration."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"max_buffer_size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"more than one"))))),(0,a.kt)("h2",{id:"event-format"},"Event format"),(0,a.kt)("p",null,"This stream connector will send event with the following format."),(0,a.kt)("h3",{id:"service_status-event"},"service_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sourcetype": "_json",\n  "source": "http:my_index",\n  "index": "my_index",\n  "host": "Central",\n  "time": 1630590530,\n  "fields": {\n    "event_type": "service",\n    "state": 2,\n    "state_type": 1,\n    "hostname": "my_host",\n    "service_description": "my_service",\n    "ctime": 1630590520,\n    "metric: pl": 0,\n    "metric: rta": 10,\n    "metric: rtmin": 5,\n    "metric: rtmax": 15\n  }\n}\n')),(0,a.kt)("h3",{id:"host_status-event"},"host_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sourcetype": "_json",\n  "source": "http:my_index",\n  "index": "my_index",\n  "host": "Central",\n  "time": 1630590530,\n  "fields": {\n    "event_type": "host",\n    "state": 1,\n    "state_type": 1,\n    "hostname": "my_host",\n    "ctime": 1630590520,\n    "metric: pl": 0,\n    "metric: rta": 10,\n    "metric: rtmin": 5,\n    "metric: rtmax": 15\n  }\n}\n')),(0,a.kt)("h3",{id:"custom-event-format"},"Custom event format"),(0,a.kt)("p",null,'You can"t change the format of the event for metrics oriented stream connectors.'),(0,a.kt)("h2",{id:"curl-commands"},"Curl commands"),(0,a.kt)("p",null,"Here is the list of all the curl commands that are used by the stream connector."),(0,a.kt)("h3",{id:"send-events"},"Send events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "content-type: application/json" -H "authorization: Splunk <splunk_token>" \'<http_server_url>\' -d \'{"sourcetype": "<splunk_sourcetype>","source": "<splunk_source>","index": "<splunk_index>","host": "<splunk_host>","time": <epoch_timestamp>,"event": {"event_type": "host","state": 1,"state_type": 1,"hostname":"my_host","ctime": 1630590520,"metric: pl": 0,"metric: rta": 10,"metric: rtmin": 5,"metric: rtmax": 15}}\'\n')),(0,a.kt)("p",null,"You must replace all the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<xxxx>"))," inside the above command with their appropriate value. ",(0,a.kt)("em",{parentName:"p"},"<splunk_sourcetype>")," may become ",(0,a.kt)("em",{parentName:"p"},"_json"),"."))}h.isMDXComponent=!0}}]);