"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[67388],{24703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"applications-monitoring-alyvix-restapi",title:"Alyvix Server"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",title:"Alyvix Server",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-alyvix-restapi",title:"Alyvix Server"},sidebar:"pp",previous:{title:"ActiveMQ JMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-activemq-jmx"},next:{title:"Ansible",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-ansible-cli"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following message: <code>UNKNOWN: 500 Can&#39;t connect to 10.0.0.1:80 |</code>",id:"why-do-i-get-the-following-message-unknown-500-cant-connect-to-1000180-",level:3},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Alyvix is an open source APM software tool for visual monitoring."),(0,n.kt)("p",null,"Build end-user bots visually interacting with any Windows application like ERPs or your favourite browser.\nMeasure end-user experiences: Alyvix records the click-to-appearance responsiveness of each transaction.\nReport IT service quality to support technical and business actions."),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Alyvix Server")," aims to collect the execution status and duration of the Alyvix's ",(0,n.kt)("em",{parentName:"p"},"testcases")," and their ",(0,n.kt)("em",{parentName:"p"},"transactions"),"\nby requesting the dedicated built-in RestAPI."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("em",{parentName:"p"},"Alyvix Server")," Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"can not")," be used with the Open-Source free version of Alyvix, as the Rest API feature is only\navailable in the commercial version. Get in touch with your Centreon Sales representative to get a quote!")),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Testcases")," and ",(0,n.kt)("em",{parentName:"li"},"transactions")," details of Alyvix Server")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Testcases",label:"Testcases",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Alyvix-Restapi-Testcase-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover all the testcases handled by Alyvix Server")))))),(0,n.kt)("h2",{id:"monitored-metrics"},"Monitored metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Testcases-Global",label:"Testcases-Global",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global (for each ",(0,n.kt)("em",{parentName:"li"},"testcase"),")")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"testcase_alias"),"#testcase-state"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the case job execution"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"testcase_alias"),"#testcase-duration"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total time of the case job execution"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"testcase_alias"),"#testcase-freshness"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last execution time of the case job"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Per ",(0,n.kt)("em",{parentName:"li"},"testcase")," (for each ",(0,n.kt)("em",{parentName:"li"},"transaction"),")")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"testcase_alias"),"~",(0,n.kt)("em",{parentName:"td"},"transaction_alias"),"#transaction-state"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the the transaction job execution"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"testcase_alias"),"~",(0,n.kt)("em",{parentName:"td"},"transaction_alias"),"#transaction-duration"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total time of the transaction job execution"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Alyvix Server")," must be installed and configured on a dedicated Windows Server machine.\nThe Centreon Pollers must as well be able to reach the Alyvix Rest API on the TCP/80 or TCP/443 port(s)."),(0,n.kt)("p",null,"More information about how to configure Alyvix and set up ",(0,n.kt)("em",{parentName:"p"},"testcases")," can be found in the official documentation:\n",(0,n.kt)("a",{parentName:"p",href:"https://www.alyvix.com/learn/"},"https://www.alyvix.com/learn/"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Alyvix Server")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Alyvix-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Alyvix Server")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Alyvix Server")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Alyvix-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-alyvix-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Alyvix Server")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts". '),(0,n.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Alyvix Server settings'),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("em",{parentName:"li"},"App-Monitoring-Alyvix-Restapi-custom"),".")),(0,n.kt)("p",null,"If needed, configure the following Host Macros:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RestAPI port of the Alyvix Server (Default: '80')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIPROTOCOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocol used to reach the Alyvix Server (Default: 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIURLPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URL path of the API (Default: '/v0/')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Username to authenticate against the API (",(0,n.kt)("strong",{parentName:"td"},"not available yet"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"ALYVIXAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Password to authenticate against the API (",(0,n.kt)("strong",{parentName:"td"},"not available yet"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'This template will deploy one "Global" Service that will monitor all the ',(0,n.kt)("em",{parentName:"p"},"testcases"),".\nUse the ",(0,n.kt)("strong",{parentName:"p"},"Service Discovery")," feature if you wish to get one Service per ",(0,n.kt)("em",{parentName:"p"},"testcase"),".")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin\nby running the following command (some of the parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl")," have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \\\n    --plugin=apps::monitoring::alyvix::restapi::plugin \\\n    --mode=testcases \\\n    --hostname='10.0.0.1' \\\n    --proto='http' \\\n    --port='80' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-testcase='case_app1|case_app2' \\\n    --critical-testcase-state='%{state} eq \"FAILED\"' \\\n    --critical-transaction-state='%{state} eq \"FAILED\"' \\\n    --warning-testcase-duration='40000' \\\n    --critical-testcase-duration='60000' \\\n    --critical-testcase-freshness='600' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All test cases are ok | 'case_app1#testcase.duration.milliseconds'=3883ms;;;0; 'case_app1~1_openapp1#transaction.duration.milliseconds'=77ms;;;0;\n'case_app2#testcase.duration.milliseconds'=30658ms;;;0; 'case_app2~1_open_app1#transaction.duration.milliseconds'=3ms;;;0;\n'case_app2~2_open_app2#transaction.duration.milliseconds'=4ms;;;0; 'case_app2~3_delay#transaction.duration.milliseconds'=76ms;;;0;\n'case_app2~4_open_app1_explorer#transaction.duration.milliseconds'=0ms;;;0; 'case_app2~5_open_file#transaction.duration.milliseconds'=10000ms;;;0;\n'case_app2~6_close_app1#transaction.duration.milliseconds'=104ms;;;0; 'case_app2~7_close_app2#transaction.duration.milliseconds'=0ms;;;0;\n'case_app2~8_check_picture#transaction.duration.milliseconds'=0ms;;;0;\nchecking test case 'case_app1'\n    duration: 3883 ms, state: OK, last execution: 2020-12-11T15:22:40 (1m 16s ago)\n    transaction '1_openapp1' state: OK, duration: 77 ms\nchecking test case 'case_app2'\n    duration: 30658 ms, state: OK, last execution: 2020-12-11T15:20:39 (3m 18s ago)\n    transaction '1_open_app1' state: OK, duration: 3 ms\n    transaction '2_open_app2' state: OK, duration: 4 ms\n    transaction '3_delay' state: OK, duration: 76 ms\n    transaction '4_open_app1_explorer' state: OK, duration: 0 ms\n    transaction '5_open_file' state: OK, duration: 10000 ms\n    transaction '6_close_app1' state: OK, duration: 104 ms\n    transaction '7_close_app2' state: OK, duration: 0 ms\n    transaction '8_check_picture' state: OK, duration: 0ms\n")),(0,n.kt)("p",null,"In this example, the Plugin gets the execution status and duration of Alyvix Server ",(0,n.kt)("em",{parentName:"p"},"testcases")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=apps::monitoring::alyvix::restapi::plugin --mode=testcases"),")\nby requesting the Alyvix RestAPI at ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"http://10.0.0.1:80"},"http://10.0.0.1:80"))," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.0.0.1' --proto='http' --port='80'"),").\nOnly the ",(0,n.kt)("em",{parentName:"p"},"testcases")," named ",(0,n.kt)("em",{parentName:"p"},"case_app1")," & ",(0,n.kt)("em",{parentName:"p"},"case_app2")," will be displayed (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-testcase='case_app1|case_app2'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the execution duration of one of the ",(0,n.kt)("em",{parentName:"p"},"testcases")," is greater than 40s -40000ms-\n",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-testcase-duration='40000'"),")."),(0,n.kt)("p",null,"A CRITICAL alarm would however be triggered in the following cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the execution duration of one of the ",(0,n.kt)("em",{parentName:"li"},"testcases")," is greater than 60s -60000ms- (",(0,n.kt)("inlineCode",{parentName:"li"},"--critical-testcase-duration='60000'"),")"),(0,n.kt)("li",{parentName:"ul"},"the reported status of a ",(0,n.kt)("em",{parentName:"li"},"testcase"),' is "FAILED" (',(0,n.kt)("inlineCode",{parentName:"li"},"--critical-testcase-state='%{state} eq \"FAILED\"'"),")"),(0,n.kt)("li",{parentName:"ul"},"the reported status of at least one of a ",(0,n.kt)("em",{parentName:"li"},"testcase"),"'s ",(0,n.kt)("em",{parentName:"li"},"transaction"),' is "FAILED" (',(0,n.kt)("inlineCode",{parentName:"li"},"--critical-transaction-state='%{state} eq \"FAILED\"'"),")")),(0,n.kt)("p",null,"All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \\\n    --plugin=apps::monitoring::alyvix::restapi::plugin \\\n    --mode=testcases \\\n    --help\n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-message-unknown-500-cant-connect-to-1000180-"},"Why do I get the following message: ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 500 Can't connect to 10.0.0.1:80 |")),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Alyvix Server RestAPI.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"When using a proxy to connect to the Alyvix Server RestAPI, this error\nmessage means that the Centreon Plugin library does not support the proxy\nconnection protocol."),(0,n.kt)("p",null,"In order to prevent this issue, use the ",(0,n.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the\nfollowing option to the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}h.isMDXComponent=!0}}]);