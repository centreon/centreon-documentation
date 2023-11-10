"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77632],{62939:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>c,toc:()=>k});a(67294);var r=a(3905),n=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const m={id:"network-acmepacket-snmp",title:"Acme Packet SNMP"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-acmepacket-snmp",id:"integrations/plugin-packs/procedures/network-acmepacket-snmp",title:"Acme Packet SNMP",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-acmepacket-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-acmepacket-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-acmepacket-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-acmepacket-snmp.md",tags:[],version:"current",frontMatter:{id:"network-acmepacket-snmp",title:"Acme Packet SNMP"},sidebar:"pp",previous:{title:"A10 AX",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-loadbalancers-a10-ax-snmp"},next:{title:"Adva FSP 150 SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-adva-fsp150-snmp"}},d={},k=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],u={toc:k},N="wrapper";function g(t){var{components:e}=t,a=s(t,["components"]);return(0,r.kt)(N,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){i(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,r.kt)("p",null,"The Monitoring Connector Acme Packet SNMP collects metrics for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Codec"),(0,r.kt)("li",{parentName:"ul"},"Hardware"),(0,r.kt)("li",{parentName:"ul"},"Interfaces"),(0,r.kt)("li",{parentName:"ul"},"Policy servers"),(0,r.kt)("li",{parentName:"ul"},"Realm"),(0,r.kt)("li",{parentName:"ul"},"Security"),(0,r.kt)("li",{parentName:"ul"},"Sip"),(0,r.kt)("li",{parentName:"ul"},"System")),(0,r.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Acmepacket-SNMP-Interface-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor bandwidth utilization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Acmepacket-SNMP-Policy-Server-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover external policy servers and monitor statistics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Acmepacket-SNMP-Realm-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover realms and monitor utilization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Acmepacket-SNMP-Sip-Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Discover Sip interfaces and monitor utilization")))))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Codec",label:"Codec",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transcoding.sessions.active.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of active transcoded sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transcoding.resources.usage.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of transcoding resources currently in-use"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transcoding.resources.free.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of transcoding resources currently free"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transcoding.resources.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of transcoding resources currently in-use"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,r.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the fan"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"fan","_","description"),"#hardware.fan.speed.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Speed of the fan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"psu status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the power supply"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"temperature status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the temperature sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sensor","_","description"),"#hardware.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Temperature of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"voltage status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the voltage sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sensor","_","description"),"#hardware.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Voltage of the sensor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,r.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,r.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of the interface's ",(0,r.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,r.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,r.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,r.kt)(l.Z,{value:"Policy-servers",label:"Policy-servers",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"policy_servers.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of policy servers"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.client_transactions.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of client transactions for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.client_transactions.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of client transactions Errors received for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.server_transactions.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of server transactions for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.server_transactions.requests.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of requests received on server transaction for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.server_transactions.requests.dropped.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of requests dropped  by server transactions for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.server_transactions.responses.succeeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of success responses sent by server transactions for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.server_transactions.responses.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of error responses sent by server transactions for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.authorization_authentication_request.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of AAR messages sent by this Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.authorization_authentication_answer.succeeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of AAA success messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.authorization_authentication_answer.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of AAA error messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.session_termination_request.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of STR messages sent by this Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.session_termination_answer.succeeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of STA success messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.session_termination_answer.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of STA error messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.abort_session_request.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of ASR messages sent by this Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.abort_session_answer.succeeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of ASA success messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.abort_session_answer.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of ASA error messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.re_auth_request.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of RAR messages received by this Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.re_auth_answer.succeeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of RAA success messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"policy","_","name"),"#","policy_server.messages.re_auth_answer.errors.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of RAA error messages for Rx policy server"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Realm-usage",label:"Realm-usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.sessions.in.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of inbound sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.sessions.in.rate.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of inbound sessions rate"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.sessions.in.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of inbound sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.sessions.out.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of outbound sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.sessions.out.rate.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of outbound sessions rate"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.sessions.out.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of outbound sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.rfactor.qos.average.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Average number of QoS RFactor"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"realm","_","name"),"#","realm.rfactor.execeded.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of RFactor exceeded"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Security",label:"Security",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ipsec.tunnels.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of IPsec tunnels currently in progress"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ipsec.license.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of licensed IPsec tunnels currently in progress"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.registrations.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of registration messages received"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.registrations.protected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of protected registration messages received"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_add.requests.in.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA ADD-SA requests received"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_add.responses.out.succeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA ADD-SA success responses sent"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_add.responses.out.failed.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA ADD-SA fail responses sent"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_add.added.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA ADD-SA added"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_del.requests.in.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA DEL-SA requests received"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_del.responses.out.succeded.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA DEL-SA success responses sent"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_del.responses.out.failed.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA DEL-SA fail responses sent"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"security.ims_aka.security_association_del.deleted.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IMS-AKA DEL-SA fail responses sent"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Sip-usage",label:"Sip-usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the SIP"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sip","_","name"),"#","sip.sessions.in.rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"current number of inbound sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sip","_","name"),"#","sip.sessions.out.rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"current number of outbound sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sip","_","name"),"#","sip.stats.latency.milliseconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Average Latency"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"sip","_","name"),"#","sip.stats.asr.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Answer-to-seizure ratio"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"System-usage",label:"System-usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"health.score.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current health score"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"licence.usage.percentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of license used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"calls.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of calls"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"replication status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status of the replication"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To control your Acme Packet, the SNMP must be configured."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Acmepacket-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Acme Packet")," Monitoring Connector"))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Acmepacket-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-acmepacket-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Acme Packet")," Monitoring Connector")))),(0,r.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,r.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,r.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,r.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"Net-Acmepacket-SNMP-Custom")," Host Template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,r.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \\\n    --plugin=network::acmepacket::snmp::plugin \\\n    --mode=system-usage \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='acme_ro' \\\n    --warning-cpu-load='90' \\\n    --critical-cpu-load='95' \\\n    --verbose\n")),(0,r.kt)("p",null,"Expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: System usage is ok | 'health.score.percentage'=100.00%;;;0;100 'cpu.utilization.percentage'=2.00%;0:90;0:95;0;100 'memory.usage.percentage'=9.00%;;;0;100 'licence.usage.percentage'=0.00%;;;0;100 'sessions.current.count'=0;;;0; 'calls.current.count'=0/s;;;0;\nchecking system\n    health score: 100.00 %\n    cpu load: 2.00 %\n    memory used: 9.00 %\n    license used: 0.00 %\n    current sessions: 0\n    current calls: 0/s\n    replication state: active\n")),(0,r.kt)("p",null,"The command above monitors Acme Packet (",(0,r.kt)("inlineCode",{parentName:"p"},"--plugin=network::acmepacket::snmp::plugin --mode=system-usage"),") identified\nby the IP address ",(0,r.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,r.kt)("em",{parentName:"p"},"community")," and ",(0,r.kt)("em",{parentName:"p"},"version")," are specified (",(0,r.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='acme_ro'"),")."),(0,r.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization over 90%\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-cpu-load='90'"),") and a CRITICAL alarm over 95% (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-cpu-load='95'"),")."),(0,r.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \\\n    --plugin=network::acmepacket::snmp::plugin \\\n    --mode=system-usage \\\n    --help\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured"),(0,r.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,r.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"This error message often refers to the following issues: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The agent doesn't support the MIB used by the plugin"),(0,r.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.9148")))}g.isMDXComponent=!0}}]);