"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[56484],{55644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"cloud-gcp-management-stackdriver",title:"Google Stackdriver"},m=void 0,s={unversionedId:"integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver",id:"integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver",title:"Google Stackdriver",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver.md",tags:[],version:"current",frontMatter:{id:"cloud-gcp-management-stackdriver",title:"Google Stackdriver"},sidebar:"pp",previous:{title:"Google Compute Engine",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine"},next:{title:"Google Storage",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/pp/integrations/plugin-packs/procedures/cloud-gcp-storage"}},d={},u=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Google Cloud Configuration",id:"google-cloud-configuration",level:3},{value:"Centreon",id:"centreon",level:3},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3}],g={toc:u},k="wrapper";function f(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector Google Stackdriver collects metrics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get-metrics")),(0,a.kt)("p",null,"A description of all GCP metrics can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/monitoring/api/metrics_gcp"},"https://cloud.google.com/monitoring/api/metrics_gcp")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)("p",null,"For all collected metrics, following ",(0,a.kt)("em",{parentName:"p"},"aggregation")," are available: ",(0,a.kt)("em",{parentName:"p"},"average"),", ",(0,a.kt)("em",{parentName:"p"},"minimum"),", ",(0,a.kt)("em",{parentName:"p"},"maximum")," and ",(0,a.kt)("em",{parentName:"p"},"total"),"."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Get-metrics",label:"Get-metrics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"aggregation"),"#",(0,a.kt)("em",{parentName:"td"},"metric_display_name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any metric"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("p",null,"E.g: average metric ",(0,a.kt)("em",{parentName:"p"},"https/backend_latencies")," = ",(0,a.kt)("em",{parentName:"p"},"average#https.backend_latencies")," "))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"google-cloud-configuration"},"Google Cloud Configuration"),(0,a.kt)("p",null,"Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Google Scope"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform")),(0,a.kt)("td",{parentName:"tr",align:"left"},"View and manage your data across Google Cloud Platform services")))),(0,a.kt)("p",null,"How to create a service account key: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account"},"https://developers.google.com/identity/protocols/oauth2/service-account")),(0,a.kt)("h3",{id:"centreon"},"Centreon"),(0,a.kt)("p",null,"Deploy the key file on every Poller expected to monitor Google Cloud resources. The key file\nshould be readable by centreon-engine poller."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Management-Stackdriver-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Google Stackdriver")," Monitoring Connector"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Management-Stackdriver-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-gcp-management-stackdriver\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Google Stackdriver")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"Cloud-Gcp-Storage-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPKEYFILEPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Service account key json file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPSCOPEENDPOINT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Google Scope. Default: ",(0,a.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command_line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"WARNING"),": Service account key file must be stored on Centreon Poller. ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account must have read privileges on that file. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new service linked the Host and apply ",(0,a.kt)("em",{parentName:"li"},"Cloud-Gcp-Management-Stackdriver-Get-Metrics-Api-custom")," Service Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name of the dimension to filter on.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONOPERATOR"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define the type of filter match to use. Can be: ",(0,a.kt)("em",{parentName:"td"},"equals"),", ",(0,a.kt)("em",{parentName:"td"},"regexp"),", ",(0,a.kt)("em",{parentName:"td"},"starts"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONVALUE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Value to the dimension monitor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Google Cloud API. Eg.: ",(0,a.kt)("em",{parentName:"td"},"compute.googleapis.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"METRIC"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Metric to monitor. Eg.: ",(0,a.kt)("em",{parentName:"td"},"instance/cpu/utilization"))))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_management_stackdriver_api.pl \\\n    --plugin=cloud::google::gcp::management::stackdriver::plugin \\\n    --mode=get-metrics \\\n    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \\\n    --dimension-name='metric.labels.instance_name' \\\n    --dimension-operator='equals' \\\n    --dimension-value='instance-centreon1-drb5' \\\n    --metric='instance/cpu/utilization' \\\n    --api='compute.googleapis.com' \\\n    --aggregation='average' \\\n    --warning-metric='90' \\\n    --critical-metric='95' \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Metric 'instance/cpu/utilization' of resource 'instance-centreon1-drb5' value is 0.0111772524293797 | 'average#instance.cpu.utilization'=0.0111772524293797;0:90;0:95;;\nMetric 'instance/cpu/utilization' of resource 'instance-centreon1-drb5' value is 0.0111772524293797\n")),(0,a.kt)("p",null,"The command above monitors cpu utilization of a Google Compute Engine instance (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=instance/cpu/utilization --api=compute.googleapis.com"),") identified\nby the name ",(0,a.kt)("em",{parentName:"p"},"instance-centreon1-drb5")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--dimension-name='metric.labels.instance_name' --dimension-operator='equals' --dimension-value='instance-centreon1-drb5'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization is more than 90%\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-metric='90'"),") and a CRITICAL alarm for more than 95% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-metric='95'"),")."),(0,a.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_management_stackdriver_api.pl \\\n    --plugin=cloud::google::gcp::management::stackdriver::plugin \\\n    --mode=get-metrics \\\n    --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},"Why do I get the following result ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,a.kt)("p",null,"This command result means that Google Cloud does not have any value for the requested period."),(0,a.kt)("p",null,"This result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message."))}f.isMDXComponent=!0}}]);