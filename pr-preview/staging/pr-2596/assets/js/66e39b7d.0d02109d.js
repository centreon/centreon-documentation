"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[92424],{149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"cloud-azure-compute-functions",title:"Azure Functions"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-compute-functions",id:"integrations/plugin-packs/procedures/cloud-azure-compute-functions",title:"Azure Functions",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-compute-functions",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-compute-functions.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-compute-functions",title:"Azure Functions"},sidebar:"pp",previous:{title:"Azure Front Door",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-azure-network-frontdoor"},next:{title:"Azure InsightsMetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-azure-management-insightsmetrics"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"The Azure credentials have changed and the Plugin does not work anymore",id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],k={toc:d},N="wrapper";function g(e){var{components:t}=e,s=p(e,["components"]);return(0,n.kt)(N,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},k,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Azure functions is a serverless plateform that allows to easily write and deploy\ncode reacting to events occuring in any Azure or 3rd party services."),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Azure Functions")," can rely on Azure API or Azure CLI\nto collect the metrics related to the Functions service."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure ",(0,n.kt)("em",{parentName:"li"},"Functions")," instances")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Azure Functions")," includes a Host Discovery ",(0,n.kt)("em",{parentName:"p"},"provider")," to automatically discover the Azure instances of a given\nsubscription and add them to the Centreon configuration.\nThis provider is named ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Functions"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(57606).Z,width:"615",height:"194"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.")),(0,n.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"App-Usage",label:"App-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.connections.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of bound sockets existing in the sandbox"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.assemblies.current.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current number of assemblies loaded across all AppDomains in this application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.handle.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total number of handles currently open by the app process"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.thread.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of threads currently active in the app process"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.appdomains.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current number of AppDomains loaded in this application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.appdomains.unloaded.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total number of AppDomains unloaded since the start of the application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(i.Z,{value:"Cpu-Time",label:"Cpu-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.cpu.consumed.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The amount of CPU consumed by the app in seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(i.Z,{value:"Data",label:"Data",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.data.in.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The amount of incoming bandwidth consumed by the app"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.data.out.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The amount of outgoing bandwidth consumed by the app"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(i.Z,{value:"Executions",label:"Executions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"functions.executions.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of function exectution"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"functions.executions.units.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of functon execution units"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(i.Z,{value:"File-System",label:"File-System",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.filesystem.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filesystem quota consumed by the app"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(i.Z,{value:"Gc-Usage",label:"Gc-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.gc.gen0.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of times the generation 0 objects are garbage collected since the start of the app process"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.gc.gen1.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of times the generation 1 objects are garbage collected since the start of the app process"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.gc.gen2.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of times the generation 2 objects are garbage collected since the start of the app process"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(i.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Status Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last related status message"))))),(0,n.kt)(i.Z,{value:"Http-Requests",label:"Http-Requests",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.http.request.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total number of requests regardless of their resulting HTTP status code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.http.request.queue.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of requests in the application request queue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.htpp.request.XXX.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The count of requests resulting in an HTTP status code = XXX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(i.Z,{value:"IO-Operations",label:"IO-Operations",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.bytes.other.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing bytes to I/O operations that don't involve data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.operations.other.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing I/O operations that aren't read or write operations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.bytes.read.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is reading bytes from I/O operations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.operations.read.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing read I/O operations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.bytes.write.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is writing bytes to I/O operations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.operations.write.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The rate at which the app process is issuing write I/O operations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,n.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.memory.average.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average amount of memory used by the app"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current amount of memory used by the app"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(i.Z,{value:"Response-Time",label:"Response-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.http.response.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The time taken for the app to serve requests"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(i.Z,{value:"Status",label:"Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"appservice.status.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Health check status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To get data from Azure Services, following methods are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure API ('api') "),(0,n.kt)("li",{parentName:"ul"},"Azure CLI ('azcli')")),(0,n.kt)("p",null,"Centreon recommends to use the API instead of the CLI for the following reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API is much more efficient by avoiding CLI binary execution"),(0,n.kt)("li",{parentName:"ul"},"API supports application authentication while CLI does not (yet)")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("p",null,"To use the 'api' custom mode, make sure to obtain the required information using the\nhow-to below. Keep it safe until including it in a Host or Host Template definition."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create an ",(0,n.kt)("em",{parentName:"p"},"application")," in Azure Active Directory:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"App registrations"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"+ Add"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("em",{parentName:"li"},"Create")," button."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get ",(0,n.kt)("em",{parentName:"p"},"Subscription ID")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Subscriptions")," in the left sidebar."),(0,n.kt)("li",{parentName:"ul"},"Select whichever subscription is needed."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Overview"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Copy the Subscription ID.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get ",(0,n.kt)("em",{parentName:"p"},"Tenant ID")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Properties"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Copy the directory ID.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get ",(0,n.kt)("em",{parentName:"p"},"Client ID")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Enterprise applications"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"All applications"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the application previously created."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Properties"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Copy the Application ID.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get ",(0,n.kt)("em",{parentName:"p"},"Client secret")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"App registrations"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the application previously created."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"All settings"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Keys"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter the key description and select the duration."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Copy and store the key value. You won't be able to retrieve it after you leave this page.")))))),(0,n.kt)(i.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("p",null,"To use the 'azcli' custom mode, install the required packages on every Centreon poller expected to\nmonitor Azure Resources using CLI:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The CLI needs at least Python version 2.7\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"},"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"),").")),(0,n.kt)("p",null,"On RPM-Based distributions, use the command below to install it using ",(0,n.kt)("em",{parentName:"p"},"root")," or 'sudo':"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\nsudo echo -e "[azure-cli]\\nname=Azure CLI\\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo\nsudo yum install azure-cli\n')),(0,n.kt)("p",null,"Then, use the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," account to obtain a token using command below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"su - centreon-engine\naz login\n")),(0,n.kt)("p",null,"The shell will output this message including an authentication code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"*To sign in, use a web browser to open the page https://microsoft.com/devicelogin* \n*and enter the code CWT4WQZAD to authenticate.*\n")),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.com/devicelogin"},"https://microsoft.com/devicelogin")," and enter the code. "),(0,n.kt)("p",null,"Connect using a monitoring service account, as a result, the shell should prompt\ninformation below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'    [\n      {\n        "cloudName": "AzureCloud",\n        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",\n        "isDefault": true,\n        "name": "N/A(tenant level account)",\n        "state": "Enabled",\n        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",\n        "user": {\n          "name": "email@mycompany.onmicrosoft.com",\n          "type": "user"\n        }\n      }\n    ]\n')),(0,n.kt)("p",null,"Credentials are now stored locally in the .accessTokens.json file so the Plugin\ncan use it. "))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Functions resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Azure Functions")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Functions resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-compute-functions.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Azure Functions")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Log into Centreon and add a new Host through "Configuration > Hosts".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("em",{parentName:"p"},"IP Address/FQDN")," field, set the following IP address: '127.0.0.1'.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("em",{parentName:"p"},"Cloud-Azure-Compute-Functions-custom")," template to apply to the Host.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.\nThese mandatory Macros differ regarding the custom mode used:"))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Id of the Functions instance"))))),(0,n.kt)(i.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Id of the Functions instance")))))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser account and test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \\\n    --plugin=cloud::azure::compute::functions::plugin \\\n    --mode=cpu-time \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='APP01' \\\n    --resource-group='xxxxxxxxx' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='Total' \\\n    --warning-cpu-time='1' \\\n    --critical-cpu-time='2'\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'APP01' Statistic 'total' Metrics CPU Time: 0.08s | 'APP01~total#appservice.cpu.consumed.seconds'=0.08s;;;0;\n")),(0,n.kt)("p",null,"The command above checks the ",(0,n.kt)("em",{parentName:"p"},"Cpu-Time")," of an Azure ",(0,n.kt)("em",{parentName:"p"},"Functions")," instance using the 'api' custom-mode\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::compute::functions::plugin --mode=cpu-time --custommode=api"),").\nThis Functions instance is identified by its id (",(0,n.kt)("inlineCode",{parentName:"p"},"--resource='APP01'"),") and the authentication parameters\nto be used with the custom mode are specified in the options (",(0,n.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx'\n--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,n.kt)("p",null,"The calculated metrics are the total (",(0,n.kt)("inlineCode",{parentName:"p"},"--aggregation='Total'"),") of values on a 900 secondes / 15 min period (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\nwith one sample per 5 minutes (",(0,n.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the ",(0,n.kt)("em",{parentName:"p"},"Cpu-time")," is reported as over 1\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-cpu-time='1'"),") and a CRITICAL alarm over 2 (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-cpu-time='2'"),")."),(0,n.kt)("p",null,"All the available options for a given mode can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \\\n    --plugin=cloud::azure::compute::functions::plugin \\\n    --mode=cpu-time \\\n    --help\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h4",{id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore"},"The Azure credentials have changed and the Plugin does not work anymore"),(0,n.kt)("p",null,"The Plugin is using a cache file to keep connection information and avoid an authentication at each call.\nIf some of the authentication parameters change, you must delete the cache file. "),(0,n.kt)("p",null,"The cache file can be found within  ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," folder with a name similar to azure",(0,n.kt)("em",{parentName:"p"},"api"),(0,n.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,n.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,n.kt)("p",null,"When I run my command I obtain the following error message:\n",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,n.kt)("p",null,"It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives\nsome hints about where the problem stands. "),(0,n.kt)("p",null,"As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. "),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party\ndevice (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,n.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,n.kt)("p",null,"This command result means that Azure does not have any value for the requested period.\nThis result can be overriden by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric has\nbeen collected and will prevent the UNKNOWN error message."))}g.isMDXComponent=!0},57606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-azure-compute-functions-provider-7e5b4c8ab32a530ce57320d2f3216152.png"}}]);