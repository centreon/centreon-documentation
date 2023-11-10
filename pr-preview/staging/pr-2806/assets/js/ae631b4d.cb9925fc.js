"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[25175],{40782:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"cloud-prometheus-api",title:"Prometheus Server"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-prometheus-api",id:"integrations/plugin-packs/procedures/cloud-prometheus-api",title:"Prometheus Server",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-prometheus-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-prometheus-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-prometheus-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-prometheus-api.md",tags:[],version:"current",frontMatter:{id:"cloud-prometheus-api",title:"Prometheus Server"},sidebar:"pp",previous:{title:"OVH",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-ovh-restapi"},next:{title:"Talend TMC API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-talend-tmc-api"}},d={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"How to use the generic Expression mode ?",id:"how-to-use-the-generic-expression-mode-",level:3},{value:"<code>--query</code> option and QUERIES macro",id:"--query-option-and-queries-macro",level:4},{value:"<code>--instance</code> option and INSTANCE macro",id:"--instance-option-and-instance-macro",level:4},{value:"<code>--multiple-output</code>/<code>--output</code> options and MULTIPLEOUTPUT/OUTPUT macros",id:"--multiple-output--output-options-and-multipleoutputoutput-macros",level:4},{value:"<code>--*-status</code> options and *STATUS macros",id:"---status-options-and-status-macros",level:4},{value:"Expected output and macros summary",id:"expected-output-and-macros-summary",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: 500 Can&#39;t connect to amzprometheus.int.centreon.com:9090 (&lt;error_text) |",id:"unknown-500-cant-connect-to-amzprometheusintcentreoncom9090-error_text-",level:3},{value:"UNKNOWN: 400 Bad Request |",id:"unknown-400-bad-request-",level:3},{value:"Troubleshooting",id:"troubleshooting-1",level:3}],k={toc:c},h="wrapper";function g(t){var{components:e}=t,p=s(t,["components"]);return(0,n.kt)(h,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},k,p),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Prometheus Server")," brings 2 different host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Prometheus-Api-custom"),(0,n.kt)("li",{parentName:"ul"},"Cloud-Prometheus-Target-Name-Api-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Expression"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Prometheus-Expression-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check allowing to execute queries and use results to define thresholds"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Target-Name-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Prometheus-Target-Name-Status-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check targets status filtered by name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Target-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Prometheus-Target-Status-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check targets status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Prometheus Server")," includes a Host Discovery provider to\nautomatically discover Prometheus targets."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(82640).Z,width:"635",height:"198"})),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Expression",label:"Expression",mdxType:"TabItem"},(0,n.kt)("p",null,"Generic mode to perform PromQL queries"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Target-Name-Status",label:"Target-Name-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.down.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.dropped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.unknown.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.up.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"targets"),"#status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Target-Status",label:"Target-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.down.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.dropped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.unknown.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"targets.up.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"targets"),"#status"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The Centreon Poller should be able to perform queries against Prometheus API over\nHTTP. "),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Server")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Prometheus-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Server")," Centreon Monitoring Connector."))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Server")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Prometheus-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Server")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-prometheus-api\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Server")," Centreon Monitoring Connector.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Cloud-Prometheus-Api-Custom",label:"Cloud-Prometheus-Api-Custom",mdxType:"TabItem"},(0,n.kt)("p",null,"Template to monitor Prometheus server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Server")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Prometheus-Api-custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default : '9090')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default : 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default : '/api/v1')"))))),(0,n.kt)(o.Z,{value:"Cloud-Prometheus-Target-Name-Api-Custom",label:"Cloud-Prometheus-Target-Name-Api-Custom",mdxType:"TabItem"},(0,n.kt)("p",null,"Template to monitor Prometheus targets."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Prometheus target")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Prometheus-Target-Name-Api-Custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FILTERLABEL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filter label to filter on a specific target. Example: 'instance,10.10.1.199:9182'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIHOSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Prometheus server name or IP address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default : '9090')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default : 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default : '/api/v1')")))))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: The test below assumes that you are using the Monitoring Connector on top of a Prometheus Server.")),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser account and test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_prometheus_api.pl \\\n    --plugin=cloud::prometheus::restapi::plugin \\\n    --mode=target-status \\\n    --hostname=amzprometheus.int.centreon.com \\\n    --url-path='/api/v1' --port='9090' --proto='http' \\\n    --filter-label='job,coredns' \\\n    --warning-status='' --critical-status='%{health} !~ /up/' \n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Targets Active: 2, Dropped: 175, Up: 2, Down: 0, Unknown: 0 - All targets status are ok | 'targets.active.count'=2;;;0; 'targets.dropped.count'=175;;;0; 'targets.up.count'=2;;;0; 'targets.down.count'=0;;;0; 'targets.unknown.count'=0;;;0;\nTarget 'http://10.244.1.249:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-g4hmt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.1.249:9153][job = coredns][endpoint = http-metrics]\nTarget 'http://10.244.2.5:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-vh9zt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.2.5:9153][job = coredns][endpoint = http-metrics]\n")),(0,n.kt)("p",null,"The command above check the status of the targets (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=target-status"),") linked\nto a Prometheus server (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=amzprometheus.int.centreon.com"),")  exposing its API\nover HTTP and listnening on port 9090 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='9090' --proto='http'"),"). "),(0,n.kt)("p",null,"Only targets linked with the coredns job label are checked (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-label='job,coredns'"),"). "),(0,n.kt)("p",null,'The command triggers a CRITICAL if any of the Target status is not equal to "up". '),(0,n.kt)("h3",{id:"how-to-use-the-generic-expression-mode-"},"How to use the generic Expression mode ?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: The mode below can be used with Host that are not Prometheus Server even if the metric collection use it. The Host must inherit from the ",(0,n.kt)("em",{parentName:"p"},"Cloud-Prometheus-Api-custom")," Template and the Service needs to be created manually using the ",(0,n.kt)("em",{parentName:"p"},"Cloud-Prometheus-Expression-Api-custom")," Service Template.")),(0,n.kt)("p",null,"Nothing is better than a clear example to understand how the Expression generic mode works:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_prometheus_api.pl \\\n    --plugin=cloud::prometheus::restapi::plugin \\\n    --mode=expression \\\n    --hostname=amzprometheus.int.centreon.com \\\n    --url-path='/api/v1' --port='9090' --proto='http' \\\n    --query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100' \\\n    --output='%{instance} CPU Requests: %{cpu_requests}%' --multiple-output='Nodes CPU Requests within bounds' \\\n    --instance='node' \\\n    --warning-status='%{cpu_requests} > 60' --critical-status='%{cpu_requests} > 70' \\\n    --use-new-perfdata --verbose \n")),(0,n.kt)("h4",{id:"--query-option-and-queries-macro"},(0,n.kt)("inlineCode",{parentName:"h4"},"--query")," option and QUERIES macro"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--query")," option allows to define two things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the Centreon metric name (",(0,n.kt)("inlineCode",{parentName:"li"},"cpu_requests"),")"),(0,n.kt)("li",{parentName:"ul"},"the PromQL query (",(0,n.kt)("inlineCode",{parentName:"li"},"sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100"),")")),(0,n.kt)("p",null,"In the Service definition, you can specify several queries that's why the QUERIES macro\nexceptionnaly includes the option definition. Here, QUERIES value would be \"--query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'\". "),(0,n.kt)("h4",{id:"--instance-option-and-instance-macro"},(0,n.kt)("inlineCode",{parentName:"h4"},"--instance")," option and INSTANCE macro"),(0,n.kt)("p",null,"The instance option explicits the Prometheus metric dimension/label the Plugin will highlight\nin the graphs (",(0,n.kt)("inlineCode",{parentName:"p"},"--instance='node'"),'). The INSTANCE macro value would be "node" in this example. '),(0,n.kt)("h4",{id:"--multiple-output--output-options-and-multipleoutputoutput-macros"},(0,n.kt)("inlineCode",{parentName:"h4"},"--multiple-output"),"/",(0,n.kt)("inlineCode",{parentName:"h4"},"--output")," options and MULTIPLEOUTPUT/OUTPUT macros"),(0,n.kt)("p",null,"The output-related options gives ability to tune output messages of the\ncheck in the following cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check a metric on multiple instances"),(0,n.kt)("li",{parentName:"ul"},"Check returning an error")),(0,n.kt)("p",null,'Values can be specified through the corresponding macros, in this example the value of OUTPUT macro\nwould be "%{instance} CPU Requests: %{cpu_requests}%". Note that we use the Centreon label defined in the ',(0,n.kt)("inlineCode",{parentName:"p"},"--query"),"\noption to use the obtained value). We also use the '%{instance}' keyword to display the node name. "),(0,n.kt)("p",null,'The MULTIPLEOUTPUT value would be "Nodes CPU Requests within bounds"'),(0,n.kt)("h4",{id:"---status-options-and-status-macros"},(0,n.kt)("inlineCode",{parentName:"h4"},"--\\*-status")," options and ","*","STATUS macros"),(0,n.kt)("p",null,"--warning-status and --critical-status purpose is to define when the Plugin will raise an alert. "),(0,n.kt)("p",null,"In the command above, the check triggers a ",(0,n.kt)("em",{parentName:"p"},"WARNING")," alarm when the 'cpu_requests' value is above 60 and a\n",(0,n.kt)("em",{parentName:"p"},"CRITICAL")," one when it is above 70. "),(0,n.kt)("p",null,"Note that the Centreon label defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"--query")," options is used again to compare\nthe obtained value with thresholds. "),(0,n.kt)("p",null,"The macros value would be '%{cpu_requests} > 60' for WARNINGSTATUS and '%{cpu_requests} > 70'\nfor CRITICALSTATUS."),(0,n.kt)("h4",{id:"expected-output-and-macros-summary"},"Expected output and macros summary"),(0,n.kt)("p",null,"If everything is OK, a output similar to the one below should be displayed: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Nodes CPU Requests within bounds | 'amzkubemaster.int.centreon.com#cpu_requests'=37.5;;;; 'amzkubenode1.int.centreon.com#cpu_requests'=35;;;; 'amzkubenode2.int.centreon.com#cpu_requests'=30;;;;\namzkubemaster.int.centreon.com CPU Requests: 37.5%\namzkubenode1.int.centreon.com CPU Requests: 35%\namzkubenode2.int.centreon.com CPU Requests: 30%\n")),(0,n.kt)("p",null,"Here is a summary of the Service's macros definitions: "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"QUERIES"),(0,n.kt)("td",{parentName:"tr",align:"left"},"--query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INSTANCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URL Path to reach API (Default: '/api/v1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MULTIPLEOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nodes CPU Requests within bounds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WARNINGSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%{cpu_requests} > 60")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRITICALSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%{cpu_requests} > 70")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"--verbose --use-new-perfdata")))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"unknown-500-cant-connect-to-amzprometheusintcentreoncom9090-error_text-"},"UNKNOWN: 500 Can't connect to amzprometheus.int.centreon.com:9090 (<error_text) |"),(0,n.kt)("p",null,"When facing this error message, check that port, hostname are OK and double check the\nconnection between your Centreon Poller and the Prometheus Server. "),(0,n.kt)("p",null,"The <error_text> should give more information about the root cause "),(0,n.kt)("h3",{id:"unknown-400-bad-request-"},"UNKNOWN: 400 Bad Request |"),(0,n.kt)("p",null,"The PromQL query expression is invalid. Check that it works within the Prometheus WebUI. "),(0,n.kt)("h3",{id:"troubleshooting-1"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}g.isMDXComponent=!0},82640:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cloud-prometheus-api-provider-f12808759a770d354b7062349dc4b81f.png"}}]);