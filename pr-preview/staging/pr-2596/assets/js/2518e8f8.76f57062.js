"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[59288],{485:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"network-athonet-epc-snmp",title:"Athonet ePC SNMP"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-athonet-epc-snmp",id:"integrations/plugin-packs/procedures/network-athonet-epc-snmp",title:"Athonet ePC SNMP",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-athonet-epc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-athonet-epc-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-athonet-epc-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-athonet-epc-snmp.md",tags:[],version:"current",frontMatter:{id:"network-athonet-epc-snmp",title:"Athonet ePC SNMP"},sidebar:"pp",previous:{title:"ArubaOS-CX SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-aruba-aoscx-snmp"},next:{title:"Atrica Routeur",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/network-routers-atrica-snmp"}},d={},u=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],k={toc:u},N="wrapper";function g(t){var{components:e}=t,a=s(t,["components"]);return(0,n.kt)(N,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Monitoring Connector Athonet ePC SNMP collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"aggregate"),(0,n.kt)("li",{parentName:"ul"},"apns"),(0,n.kt)("li",{parentName:"ul"},"interfaces (diameter, GA, GTPC, LTE)"),(0,n.kt)("li",{parentName:"ul"},"license"),(0,n.kt)("li",{parentName:"ul"},"lte")),(0,n.kt)("p",null,"This table describes which metrics can be collected according to roles."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"center"},"MME"),(0,n.kt)("th",{parentName:"tr",align:"center"},"SPGW"),(0,n.kt)("th",{parentName:"tr",align:"center"},"HSS"),(0,n.kt)("th",{parentName:"tr",align:"center"},"PCRF"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"aggregate"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"apns"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces-diameter"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces-ga"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces-gtpc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces-lte"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Aggregate",label:"Aggregate",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"aggregate.traffic.in.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Aggregate incoming traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"aggregate.traffic.out.bytespersecond  Aggregate outgoing traffic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hss.users.roaming.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of roaming users connected"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hss.requests.authentication.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of authentication requests"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hss.location.updates.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of location updates"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Apns",label:"Apns",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritption"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"apn_name"),"#","apn.traffic.in.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the apn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"apn_name"),"#","apn.traffic.out.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the apn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"apn_name"),"#","apn.pdp_contexts.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of pdp contexts"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Interfaces-diameter",label:"Interfaces-diameter",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"diameter.interfaces.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transport status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the transport"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Interfaces-gtpc",label:"Interfaces-gtpc",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gtpc.interfaces.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Interfaces-ga",label:"Interfaces-ga",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ga.interfaces.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Interfaces-lte",label:"Interfaces-lte",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interfaces.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.traffic.in.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.traffic.out.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.users.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of connected users"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.users.idle.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of idle users"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.sessions.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active sessions from users"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.attach.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of succesfull attach request"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.attach.success.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of succesfull attach request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.pdn_context.activations.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of succesfull PDN context activation"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.pdn_context.activations.success.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of succesfull PDN context activation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.ue_context_release.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of UE context request release"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.ue_context_release.radio_lost.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of UE context request release with cause 'Radio Connection with UE lost'"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.pdn_context.reject.insufficent_resources.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of PDN Context reject with cause 'Insufficent Resources'"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.pdn_context.reject.no_apn.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of PDN Context reject with cause 'Missing or unknown APN'"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#","lte.interface.requests.pdn_context.reject.not_subscribed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of PDN Context reject with cause 'Request service option not subscribed'"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"License",label:"License",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.expires.days"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Expiration time"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.users.active.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active users on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.users.active.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of free active users on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.users.active.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of active users on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.sessions.active.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active sessions on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.sessions.active.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of free active sessions on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.sessions.active.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of active sessions on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.usim.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of provisioned usim on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.usim.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of provisioned usim on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"license.usim.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of provisioned usim on the license"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Lte",label:"Lte",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.traffic.in.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.traffic.out.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through the interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.users.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of connected users"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.users.idle.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of idle users"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.sessions.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active sessions from users"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.attach.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of succesfull attach request"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.attach.success.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of succesfull attach request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.pdn_context.activations.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of succesfull PDN context activation"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.pdn_context.activations.success.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage of succesfull PDN context activation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.ue_context_release.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of UE context request release"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.ue_context_release.radio_lost.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of UE context request release with cause 'Radio Connection with UE lost'"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.pdn_context.reject.insufficent_resources.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of PDN Context reject with cause 'Insufficent Resources'"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.pdn_context.reject.no_apn.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of PDN Context reject with cause 'Missing or unknown APN'"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lte.interface.requests.pdn_context.reject.not_subscribed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of PDN Context reject with cause 'Request service option not subscribed'"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your Athonet ePC equipments, the SNMP must be configured."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Athonet-Epc-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Athonet ePC SNMP")," Monitoring Connector"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Athonet-Epc-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-athonet-epc-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Athonet ePC SNMP")," Monitoring Connector")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,n.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,n.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,n.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("em",{parentName:"li"},"Net-Athonet-Epc-SNMP-Custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \\\n    --plugin=network::athonet::epc::snmp::plugin \\\n    --mode=lte \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='athonet_ro' \\\n    --warning-users-connected='100' \\\n    --critical-users-connected='200' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Lte traffic in: 0 B/s, traffic out: 0 B/s - connected users: 0, idle users: 0, active sessions: 0 - attach requests total: 0 success: 0 (100.00%) - pdn context activation requests total: 0 success: 0 (100.00%) - ue context release requests: 0, ue context release with radio lost requests: 0 - pdn context requests reject insufficent resources: 0, missing or unknown apn: 0, not subscribed: 0 | 'lte.traffic.in.bytespersecond'=0B/s;;;0; 'lte.traffic.out.bytespersecond'=0B/s;;;0; 'lte.users.connected.count'=0;0:100;0:200;0; 'lte.users.idle.count'=0;;;0; 'lte.sessions.active.count'=0;;;0; 'lte.requests.attach.success.count'=0;;;0;0 'lte.requests.attach.success.percentage'=100%;;;0;100 'lte.requests.pdn_context.activations.success.count'=0;;;0;0 'lte.requests.pdn_context.activations.success.percentage'=100%;;;0;100 'lte.requests.ue_context_release.total.count'=0;;;0; 'lte.requests.ue_context_release.radio_lost.count'=0;;;0; 'lte.requests.pdn_context.reject.insufficent_resources.count'=0;;;0; 'lte.requests.pdn_context.reject.no_apn.count'=0;;;0; 'lte.requests.pdn_context.reject.not_subscribed.count'=0;;;0;\nchecking lte\n    traffic in: 0 B/s, traffic out: 0 B/s\n    connected users: 0, idle users: 0, active sessions: 0\n    attach requests total: 0 success: 0 (100.00%)\n    pdn context activation requests total: 0 success: 0 (100.00%)\n    ue context release requests: 0, ue context release with radio lost requests: 0\n    pdn context requests reject insufficent resources: 0, missing or unknown apn: 0, not subscribed: 0\n")),(0,n.kt)("p",null,"The command above monitors Athonet ePC LTE statistics (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=network::athonet::epc::snmp::plugin --mode=lte"),") identified\nby the IP address ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='athonet_ro'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if there are more than 100 connected users\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-users-connected='100'"),") and a CRITICAL alarm for more than 200 (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-users-connected='200'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \\\n    --plugin=network::athonet::epc::snmp::plugin \\\n    --mode=lte \\\n    --help\n")),(0,n.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured"),(0,n.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,n.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"This error message often refers to the following issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The agent doesn't support the MIB used by the plugin"),(0,n.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.35805.10")))}g.isMDXComponent=!0}}]);