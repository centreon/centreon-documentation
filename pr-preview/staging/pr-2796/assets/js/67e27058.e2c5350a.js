"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[49856],{8292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var o=n(3905),a=n(51715),r=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"cloud-gcp-storage",title:"Google Storage"},c=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-gcp-storage",id:"integrations/plugin-packs/procedures/cloud-gcp-storage",title:"Google Storage",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-gcp-storage.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-gcp-storage",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-gcp-storage",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-gcp-storage.md",tags:[],version:"current",frontMatter:{id:"cloud-gcp-storage",title:"Google Storage"},sidebar:"pp",previous:{title:"Google Stackdriver",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver"},next:{title:"IBM Softlayer",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/pp/integrations/plugin-packs/procedures/cloud-ibm-softlayer-api"}},u={},m=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Google Cloud Configuration",id:"google-cloud-configuration",level:3},{value:"Centreon",id:"centreon",level:3},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3}],g={toc:m},k="wrapper";function b(e){var{components:t}=e,p=s(e,["components"]);return(0,o.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,o.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,o.kt)("p",null,"The Monitoring Connector Google Storage collects metrics for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bucket")),(0,o.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,o.kt)("p",null,"The Centreon Monitoring Connector ",(0,o.kt)("em",{parentName:"p"},"Google Storage")," includes a Host Discovery ",(0,o.kt)("em",{parentName:"p"},"provider")," to automatically discover storages\nfor a given Google Cloud Project."),(0,o.kt)("p",null,"This provider is named ",(0,o.kt)("strong",{parentName:"p"},"Google Storage"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(38197).Z,width:"411",height:"131"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the key file must be deployed on the Poller(s) expected to discover GCP assets.")),(0,o.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,o.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,o.kt)("p",null,"For all collected metrics, we can choose the ",(0,o.kt)("em",{parentName:"p"},"aggregation"),": ",(0,o.kt)("em",{parentName:"p"},"average"),", ",(0,o.kt)("em",{parentName:"p"},"minimum"),", ",(0,o.kt)("em",{parentName:"p"},"maximum")," and ",(0,o.kt)("em",{parentName:"p"},"total"),"."),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Bucket",label:"Bucket",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,o.kt)("em",{parentName:"td"},"aggregation"),"#storage.bucket.objects.count"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of objects"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,o.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.received.volume.bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received over the network"),(0,o.kt)("td",{parentName:"tr",align:"left"},"B")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,o.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.received.volume.bytespersecond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received per second over the network"),(0,o.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,o.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.sent.volume.bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent over the network"),(0,o.kt)("td",{parentName:"tr",align:"left"},"B")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"bucket_name"),"~",(0,o.kt)("em",{parentName:"td"},"aggregation"),"#storage.network.sent.volume.bytespersecond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent per second over the network"),(0,o.kt)("td",{parentName:"tr",align:"left"},"B/s")))))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"google-cloud-configuration"},"Google Cloud Configuration"),(0,o.kt)("p",null,"Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Google Scope"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform")),(0,o.kt)("td",{parentName:"tr",align:"left"},"View and manage your data across Google Cloud Platform services")))),(0,o.kt)("p",null,"How to create a service account key: ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account"},"https://developers.google.com/identity/protocols/oauth2/service-account")),(0,o.kt)("h3",{id:"centreon"},"Centreon"),(0,o.kt)("p",null,"Deploy the key file on every Poller expected to monitor Google Cloud resources. The key file\nshould be readable by centreon-engine poller."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Storage-Api\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,o.kt)("em",{parentName:"li"},"Google Storage")," Monitoring Connector"))),(0,o.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Storage-Api\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-gcp-storage\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,o.kt)("em",{parentName:"li"},"Google Storage")," Monitoring Connector")))),(0,o.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,o.kt)("em",{parentName:"li"},"Cloud-Gcp-Storage-custom")," Host Template")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"GCPKEYFILEPATH"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Service account key json file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"GCPSCOPEENDPOINT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Google Scope. Default: ",(0,o.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONNAME"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name of the dimension to filter on. Default: resource.labels.bucket_name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONOPERATOR"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Define the type of filter match to use. Default: equals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONVALUE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket you want to monitor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"GCPEXTRAOPTIONS"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command_line (eg. a --verbose flag)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Service account key file must be stored on Centreon Poller. ",(0,o.kt)("em",{parentName:"p"},"centreon-engine")," user account must have read privileges on that file. ")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,o.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,o.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_storage_api.pl \\\n    --plugin=cloud::google::gcp::storage::plugin \\\n    --mode=bucket \\\n    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \\\n    --dimension-name='resource.labels.bucket_name' \\\n    --dimension-operator='equals' \\\n    --dimension-value='centreon-dev.appspot.com' \\\n    --aggregation='average' \\\n    --warning-bucket-objects='1000' \\\n    --critical-bucket-objects='2000' \\\n    --verbose\n")),(0,o.kt)("p",null,"Expected command output is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'centreon-dev.appspot.com' aggregation 'average' metrics objects: 0.00, received: 0.00 B, sent: 382.00 B | 'centreon-dev.appspot.com~average#storage.bucket.objects.count'=0.00;0:1000;0:2000;0; 'centreon-dev.appspot.com~average#storage.network.received.volume.bytes'=0.00B;;;0; 'centreon-dev.appspot.com~average#storage.network.sent.volume.bytes'=382.00B;;;0;\nChecking 'centreon-dev.appspot.com'\n    aggregation 'average' metrics objects: 0.00, received: 0.00 B, sent: 382.00 B\n")),(0,o.kt)("p",null,"The command above monitors bucket usage of a Google Storage (",(0,o.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::google::gcp::storage::plugin --mode=bucket"),") identified\nby the name ",(0,o.kt)("em",{parentName:"p"},"centreon-dev.appspot.com")," (",(0,o.kt)("inlineCode",{parentName:"p"},"--dimension-name='resource.labels.bucket_name' --dimension-operator='equals' --dimension-value='centreon-dev.appspot.com'"),")."),(0,o.kt)("p",null,"This command would trigger a WARNING alarm if number of objects is more than 1000\n(",(0,o.kt)("inlineCode",{parentName:"p"},"--warning-bucket-objects='1000'"),") and a CRITICAL alarm for more than 2000 (",(0,o.kt)("inlineCode",{parentName:"p"},"--critical-bucket-objects='2000'"),")."),(0,o.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_storage_api.pl \\\n    --plugin=cloud::google::gcp::storage::plugin \\\n    --mode=bucket \\\n    --help\n")),(0,o.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},"Why do I get the following result ",(0,o.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,o.kt)("p",null,"This command result means that Google Cloud does not have any value for the requested period."),(0,o.kt)("p",null,"This result can be overriden by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message."))}b.isMDXComponent=!0},38197:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZsAAACDCAYAAABbara6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABzGSURBVHhe7Z1plFTlmcf5NJ9m5syn5ESTiBqTSTRRYk5MjJMTNSbGozPR5Ji4nIiJUQc8ziQZREVEhKhRwRVZRYgoOyg2gk1kVUQEpOmm925oGhrofamu6q6u6mfq/3Y9zduXW921Xajl/zvnOVTd9b1v6/Ord7n3jvL5fILo6uqSzs5O6ejoMNHe3i5tbW0MBoPBYIwYcIb6Ay6BU9QvCCMblQw2bm1tlZaWFmlubjbR2NjIYDAYDEbMUF/AHXCIigduGZSNigZmwobY8cSJE3L8+HE5duyYHD16dDDq6+sZDAaDwRjiBrgCzoA74BC4BE6xhTNKRdPU1GQ2LNxYKjffUCBf/NfF8m//9AaDwWAwGCMGnAF3wCFwCZxiC2cUvqD5Ayt9sOEgJcNgMBiMpAMOgUvgFLhFhTMKzZ2TJ0+aZtF/Xb/ObDz+nh3S3BQQQuKhuLg4+okQkq/AGXAHHAKXwClwCxyDMZxRaOo0NDTI4cOHB1s1FA1JBMqGEALgDm3dwClwi3anjYJ5MMBTU1NjNkIQkgiUDSFEUY/AKXCLtm5GYSDnyJEjUllZSdmQpKBsCCGKegROgVvgGCMbDOKguVNWVkbZkKSgbAghinoEToFbdKLAKMyPrq2tldLSUsqGJAVlQwhR1CNwCtwCx2DcxsgGfWslJSWUDUkKyoYQoqhH4BS4BY7BjZ6jMIBTXV1tEgZlQ5KBsiGEKOoR5AW4BY4xssEATlVVlRQVFVE2JCkoG0KIoh6BU+AWOAYz0igbkjKUDSFEiSmburo6qaiokP3791M2JCkoG0KIoh6BU+AWOAbTnykbkjKUDSFEoWyIZ1A2hBBlWNmUl5fL559/TtmQpKBsCCGKegROgVsGZYM7PCkbkgqUDSFEccoGjqFsSFqgbAghCmVDPIOyIYQolA3xDMqGEKJQNsQzKBtCiELZEM+gbAghCmVDPIOyIYQolA3xDMqGEKJQNsQzvJBNOBw2dx/PmDFDbrnlFjn//PNN3HjjjTJ9+nSzDttkA4FAQCZNmiQ33HCDeb+HV6A+9u7dKw8//LBce+21pr7GjBkjf/jDH+Tdd9+V7u7u6JZD6e3tlVWrVpmkQEiqUDbEM9ItG7z74qGHHhpMluPHj5dZs2aZwGcsw7rnnnsuZgLNJM6EbFAPqA+VMgT9u9/9Tm699Va55JJLzDJ8P3ToUHSPU7z22muei5DkD5QN8Yx0ygavj7333ntNgnz55Zelq6sruuYULS0t8sgjj5gEOnfuXAmFQtE1mcmZkE1hYaGpsz//+c/mne82ENGLL75o6usvf/nLaXWKeqZsSLqgbIhnpEs2kAZ+ZSMpzp49e1iJoPXz+9//Xq677jqprKyMLs1MvJZNT0+PTJ48Wa6++mopKyuLLh0KBAPRQEh79uyJLh2AsiHphLIhnpEu2eAlSzfffLPcfvvtp/06d2PlypXml/yBAweiS06B1g+EhTEeyAtjGBjrqa+vj24xFIx37Ny5c7CbDkl57NixsmHDBjOm4aS/v19KS0tlwoQJZnsEWls4vjN5DycbHHvr1q1y3333mXPiOA8++KCpU5wjHvT4119/vXkNbyxWr14tV111lWzcuNF8R1lQJtSPhrOMidTjO++8Y/bHuNHf/vY3cz34e27evDm6hZj9sL8eb6R6xjKsu+OOOwbPv3DhQvNe+7vuustcN67fprW1VRYvXmzOrfvMnDnTXAvxHsqGeEa6ZINkheTwyiuvxJ1o3UB5kGiQyJC4kSyRlJDIkWx37doV3XIAJCvtZkLCfv75540wMN6BZWg12GNDKNu6desGj/fUU0+ZfbAvzovkGY9s7HEWPa8eB2XHoH489YAWIJIpjoPrcOt6dAOtw9dff13uvvtuueKKK+SZZ54x37EcJFqP+PvhOBAJ6g51iMkK2vLE9thP6wzHe/rppwcnMzi7RFE/Tz75pFmnx9PzY9ID6tMpG4xJYWwK+2AbjPPpPrgWvDmSeAtlQzwjHbJBUtWEv2nTpujSxMGv1/vvv98kNLRU7GStyfPXv/71kF/mEAcS6mOPPSY+ny+6dKiE8Gtaj6UtAmfywr44BraPRzYqV7SI2traoktPjVvhGtxabW4gyaI8OB4SK1p8kBWuc6QxLbdutGTqUa8H3ZsqLKW9vd0czy3ha5fobbfdZpKSosdzyh4zEfVabdloPeNvuXz58iHXraJDyxVlId5B2RDPSIdsNFEggTjHFBIBosIxMPbjlmSRhLD+rbfeMt87Oztl3LhxpyVbBe9Ov/POO4ckQuyLY2h3lI2KaCTZaPKNNeaEF0+hlYAWy0iyUBoaGky3HpItyqcB+WA5urfcpou7ySbRegQqB7SOnJSUlJg6fPXVV09rrbnVD8QNYUIq6F51oueyZaN1hmu15QRwzgULFpi6+fjjj6NLiRdQNsQzzoRs0A+PPnqsdwaSpaITDD799NPokqFgTAPdVPi1jIF1/Pd/0003me4ev98f3eoUSFJo3SBJ7du3b3Aw3pmcFRwDxxpJNhjIx4B+rPOiZQHJ4Rd/or/EkWg/+eQTefbZZwfHRjTcpou7ySbRegQqgJFapqgPjMmhjIsWLRocJ7PLoH8XWyY2en57vf4IwNiUG7gWrMe1Ee+gbCLgB1VXr8iRtn6paApLeVO/p1HZ3C/17f3SHRw4d66SDtng1zOSI5LBjh07oktPgYSLxIz+eA292VNlEwwGZdq0aSYJxRoox3/0+IWNX8349Yyy49cwhOL8xa1oEkO5UA4IAOKDAJ2onEaSDYSKY+I6MHbhDIxboZvKKYFkQJkxmULHRpYuXTrkWp2ySaYegcomVsvUreWFzzgOzm+XAWLHOvuHhI3K2JYNtsUxscytTjEmhb91LIGR9JDXsgmFRZq6+2VdRZ9M39Er97wXkDvWBuR2jwPnuLcgIM/s7JXCmpC0+PslnIPSSYdsgCYrdHfESvw2mrCTkY22KBKRDX4ZawsrXbIZKex9UgXdaLjWcePGme5DJRXZ2C2z4WSDsR3IEy0YtK7QqsHYFM41XP0kI5uRgrLxlryVDdLHia5+WbgvKP+xuFsumu2T81/rOqPx9Tk+ueatbll2MGikl2ukSzYYu8AYxh//+Edpbm6OLo2NW0IaqftHu6/i7UbTFpd2o7klRptEu9GGk1y8YOwIg9/2+IkbsUTplA1ItB7BcLJRYS9ZsuS063WrH/yL77HEMFw3WqwykzND3sqmJySyaH9QvrfwzEvGGVcu8smq0j7py45HesVNumSDxK5JDt0eIw2Mu8km3oFtHcSOd4IAfpUfPXrULMO+OIbbBAG9V8g+nlsyRbLHFGlMEkh0TMaJts4wgw2thVhAEJC5cwDdTTaJ1iMYTjba6nBb51Zn+neJNUEAdY/j2bLBsfGjIN6WMfGGvJXNnoaw/GqVXy6c7S6AMxlfi5Th/vUBOdSWW/8jpEs2wH5cDW4MRHeJEyS/oqIicx8FEo4tm3im7CLsZ4TFM/XZvgcECRGJES0Ee+ovEjh+6WP7kWSDcmHsBNsiods3NGIdyo6Wg7NMbuD4U6ZMMcfC/TDOh5TiM6ZQY3wI14lH29ig/iAr+++YTD3G07LBWJQtL1yb23RxoMfDw1hVKABTp3FurLNlo09JcCsz6hf1jHUrVqyILiVekHeywX9nGJj/0wc98p35Z79Vo/H9N3zy0q5gTo3dpFM2APec6B3oCNxdj5vz0NrBr3Id6MY63ByI/5BtNBlivdvNiFu2bBmSiGypoGvGeVOn8z4Y7It7WHB8HA9l0O0hiJ/97GdDWkJusgGQk960iPLivLhOfZoArjPeLiHIQR9eikC50CKDYOz6wp31zpaKJnWcFy0Vrc9E63E42dj3AenNlqg3HAdSw2fnvra89aZO3Qez7CBIjC1h3EdB/aLuUWb97wb1qufGzLfhWn8kdfJONr2R/58+rA3J1Uu65QKXpH+24qI5XXLTcr8UnwznTHdaumUDkMTQapgzZ455VAmSB5IFEicSH5L9cOM6SL5IjvE8ZgUk87gaDLhje2yLBIjEh2SHhGyPi8SSDdDHseBceo0oM1oAeCRLIuAaUKapU6cOmfKMz2gdoEVgy0GBSDFoj+vG9rbgEqnH4WQDsA/ErefB31VffYCZfljmHHdC3eH1ByoL/Itxn4MHD5r6tFu1irPM+rfUcxFvySvZYPZZo69f7n43IJdkUKtGY8zrPpm2vVc6enJjdpoXsslWdCzGnhJM0o+Oz4w0KYKcefJKNp2RJL7qYJ98OwNFg0BL63sR4ew+GpZAX7TQWUy+yQa/4PGrGS0hG7Qs1q5da5Kg/Xgbkjho0WAs54EHHjitm1THedCajPdxPuTMkVeyqWwJyy9X+E2XlVuyz4T497ldMu79HjnSkf0JKd9ko+MP6A5CCwZdNujO0ScTYxm6ckhq6MQNdN3hgZ2oZ31wJ5a7jT+Rs0/eyAb3sby6OyjfmufLqLEaZ2B23JgFPtlQHTJPNchm8rEbDeMpGFfhuIB36BjUxIkTTSsG9Yx/8T3Wc97I2ScvZIPxj62HQvLzt7tdE3wmxp1rA2ayQDbDMRtCiJIXskGr5vGtPfKNDO4+c8ZlkdbNK5GWWFdv9nanUTaEECXnZYNWzbryPrlmSfa0ajRuWemXzxvC5tE62QhlQwhRclo2EA2mOt+2JmCeQ+aW0DM5Lp7nk//dGJCeUH9WCoeyIYQoOS0bTB9evD8oP1iU2ZMCYgUmC+Dm08LqPnMzarZB2RBClJyVDZJzZXNYbljabaYTuyXzbAjcfHr3uoBpoeGm1GyCsiGEKDkrG0wKeHpHr3wri0WDQIsMN6EuKw6aJwtkE5QNIUTJSdng2WJ7j4fkh2/4MuKpzqkGbkK9eYVfypvCWfUYG8qGEKLkpGzq2sPyf4U9OSEajYsi1zLns17zVs9sgbIhhCg5J5tgSGRpcVCuiLRq3JJ2NsdP3+qWzbWhrJmZRtkQQpSck01Na1juKQiYF5K5Jex4Ai2ib83rkh8s9smVf09PYEbct+d3plSub87tkkmbe8zrrLMByoYQouSMbJB+e/pEXvykN+VWDWaAjS3wyxsHgrKkJPV4M9LSemN/jzz4fod8Z16HnD+r0/W88cTVb3ZLQUVfVsxMo2wIIUrOyAaTAg6eDMsvlqX+UjS0RFaXB6UnhXtb8BR5f29YAsFwRAz9Egz1y7bKLvnx7AYZ/VKr63njCYzd/HaN30yFzvTJApQNIUTJGdl0B/vlsc095plibkk6kYBs1lQkLxuIpiuy89SCBnlqw3FpaA8a2Wyv6pIfPV8pX552KCXhoOU2f28w4995Q9kQQpSckA1E83FdSH64yGd++bsl6EQiHbLpCITkgaVHZNI7x+RkZ98p2TxbIec8clC+PLU2KpzEu9TwQNGfLumWQ63hjH6yQDpkg8fyz58/XyZMmDAk8O4YBZ9Xr1495J3zmQzKifLa17Nv377o2vTT2Nho3lyZ6CsOnHWPz/YxNm3a5Gm5SW6RE7I52hmW/9kYSNuTAn4Ykc2qstS60frC/VJ81C9lxwOmO603IpstFZ1y5bPl8qWHDgwI58laOe+llqTGcPDctBc+6ZXmDJ4KnU7Z2HJB8pw5c+aQZdmCXg8SteJ2jekkGdlomWyZ4LMtHMqGJEJOyObAyZB8//X03cD53YU+eWZnj+w5FpSiYwEpikgj1dhT1y2ztzXKZdNKjWxMTCw2whmdhHBwo+d/Lu82bx/NVLySDUCS09aM3bJREeGXOP7Fd8VeZ7eEsL/+etfl2vqwz2snV7d9ALZZsmSJWe6WiO1y22C5LaBYxwfYTtfZ59C60n0gGFyzUzbDHVvBPjiWXX/23wLndZYh3jrBcqx329ZehzIjcFznOoQuJ9lBTsjms4aQXDjLPSknE5hggK6q789rkcufq5ExT5XLmL+WpRSXTS+TCyYVy7kTo6KxwrRwXkxMOCjjxXN9su945vajeSkbO4FiHZIQPuNf3Rb/agLHOk2+AMuR+PBdW0mazHQfrHfbH6GJ2LkP/sV3TZ42uq0m51iMVCacG+WxtwPYxt5OZYvQusLnWGW30XXDJXXsp9dil8V5XPyL71iu33UdymT/fXE83RbL7PPb+2GZXh/JDnJHNo5knI4wx3yhSb4ypdJIItU4xyGZwUALZ2qNjIZwHGUYLr422yd7KBuzDgkKn/Gvc1ug22jCU5zL8V2TufOzbmcnRN1Hv9sJ0QnWYztsr2Bb/aWux7CPB+xyYHtN8EDPh3W2TO3vdl0NV3Y3sF7LZyd+YJdlpDIj3MD22A/b25+d63Ac+78D57Yk88kJ2eD1yT9alL5utEsX+ORPmwKyvrpPCmt65YOKbtl4sCOlKChul8fXHZOLp1rdaFac83CJnDulekA4cbRwcK2XL/RJUQa/OtpL2eC7mwh0eyRGXQ+cSVZxLrcTM0ITtp1Y8a+dgO1z2ds50QTptt6+hlhlam9vP21/fMY5sQ3KgH+BXXbdH8uwfayyj4TzHM46iVWPzjrBOrRK7DLg+rEtjq9/a60ve529D8I+LslsckI2DV39MvEf6ZsggCcHvH1w4JXMwUgux0yyRAKTAXr6+uVwS6/UtwXF1xs28UFEOj94ZmCCgFtAOGjhnPdi84jC+UbkWu8tCJjnwGUqZ2PMxsZeHs82+t1OvkiUu3btkoKCgsEki3NjuRvOxOrELrfNcGW1y+Q8Pr4jsE7lAuzvduIfruw2OKdzO5QH5cI6YJcl3jLrMZzfsb3z+PZ35/WR7CMnZIP7TfYfD8tVEUlcNMc9OScS6Zj63B2RyxPvNciMTSekuWvo1Gc30QwGutSeGF44eOTN9yKtmvUVfUaImYpXskHCsccq8C+SEn752wkJyzVhYhmOo+uwHGEfS5Ob7gOwHL+gsRzrgduxdD0+2zJwotdjn0OX6TGGKxOOjW2xj70dwDb2dliHbRAqG3yOVXYbt3rHZz0mwL56rVgWq8z2drpOv2N71K+eB8u1PM51OI4e0z4fyQ5yQjYA99rg/TXfff3s39SJO/ubOvvkt/NrZeyiw1J5sid+2UTj3Ceq5bwX3IWDx+mMWx/IaNGAdMpGu0007CSDz84EhdCkrNjr7AQbaznQ82tyVGKdx06sw4HtdH/EcMd3lsne197Prqvt27e7tmzAcHVkYx8PYYsG4NxYrmWIVWZnndjbYZ29HvtgX6xDaxKfsb1zHcI+Jsl8ckY2eFZYdUvYTAdOdbJAqrIBEE5jRDgI7V7bXhm/bNDCGRBO02nlw9Ofd9eHTBdfJpMO2ZDkQIIeTiTZAMSGa7AFR7KXnJENfuPjbvqF+4Jy5eLUWjeXRlpHk7cF5KO6Hvn0cLd8WutLKj6pGQh8/qi6S54vPCGXxJgg4BqYNPB4pZw3MyKcaAsHkwKmbOkxLTl012UylM2Zw/mr39kKyRacLT5t1ZDsJ2dko2DA/IENgZQeW4Nxn+8u7JJr/94u18yqk5+8UCU/mVGRUvz4+Qq5dFqpnPdosbtYYoWZpVZlhHPBrA65fa1fDjZmeJMmCmVDCFFyTjboTltbFpQfpdi60fjqzEbTukC3lqsMzkSgS+3xKrlsdoss2Nub8Q/gVCgbQoiSc7IBDZ1heWJLai9Qs+OrMyLCmVxxVoVzzsQD8ptFDVJ68tRAcaZD2RBClJyUTahfpOhESK5+05cW4Yye1WkG6s+WcCCaCyeXSmGZz9y/ky1QNoQQJSdlA1r8/fLyrl65eJ67QBKN0a92GOGcMxldaiWuUvAqRj9aIuOXN5gbRDN9UoANZUMIUXJWNsGQyOG2sPxyRbd5d7+bQBIN08JBl9rjVeZufzcxpDu+8kixXP50heys9Ys/mEWmiUDZEEKUnJUN6OkTWV4yMBU61VdF24GZYRDOmWjhfPOJUnm8oNE8kSDboGwIIUpOywZdTu2BfrnrXb95ZYCbOJIN08IxXWrejeGc+3CxXPdStZSdCEpf9rmGsiGEDJLTsgEQzj9q+uTnb6dnKvRgzOqU0S80ezot+tLp5TJjc0tWigZQNoQQJedlA1ojrZu/ftSTtrGbwTCTBqLCSfMYzjkRgY39e73UNmfPVGcnlA0hRMkL2WBYfWd9SG5a1u0ujRQCkwYGbvysSqtwLn+qQpbu6ciqqc5OKBtCiJIXsgGt/n5ZvH9gKnQ6JwtofFUnDaRBOF9+uFjGrzguda3Z26oBlA0hRMkb2YCa1rD8dk23fD3NkwU0BmappTaGc25k30v/WiGf1fnNk6OzGcqGEKLklWx8vf3yfkVQvjM/zZMFNAYnDWBadHLCueCxEnm6sEmaulJ4v0GGQNkQQpS8kg0eY9Pc3S8PvO/3TjivdpwSToJdauc9WiJXzayRQy1B8/6bbIeyIYQoeSUbgCcLfFzXJ9e93S0XpulBnacFnjSALrUpiT1p4LLp5TL34zYJZNmTAmJB2RBClLyTDdJ4b5/IpA8DMmaBR62baJiHd0aEE08LZ/SkEvnV/MNyrCNkWmC5AGVDCFHyTjZK8cmQ3L7Gn7bXEMSKU4+2iT2Gg6c6X/Fslaza3xktXW5A2RBClLyVDbrTzHPTFnnbuoln0sD5j5XKlPWN0urP0kcFxICyIYQoeSsbgMkCeKsnHmWDZ6d5cf+NCZ004OhSwzTnb08rl0ffa5TqpqB5y2guQdkQQpS8lg2em9YW6JcttX3y0qe9MmFTQMa/75dx65OL/47EfQV+udeKsev8ctvabrltjU9+s7RFbpp3RG6cfVhuXVAnj7zTIEt2t5n31PTmykCNBWVDCFHyWjY2faGBls6xjrAcbU8u6iNxpC0sdVbUtISkvBkRlrKmkBw4HpQDDb1SFWnJtPlDWX/j5nBQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRKFsiGdQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRKFsiGdQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRKFsiGdQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRKFsiGdQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRKFsiGdQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRKFsiGdQNoQQhbIhnkHZEEIUyoZ4BmVDCFEoG+IZlA0hRIkpm7q6OsqGpARlQwhRnLKBY4xsjhw5IhUVFbJ//37KhiQFZUMIUdQjcArcAscMyqayslKKiorki/+yyGzU3BSI7kbIyFA2hBAAd8AhcAmcArcMkU1VVZUcOHBAfnHNKrPh+Ht2UDgkbigbQgicAXfAIXAJnAK3DMrm6NGjUlNTIyUlJfLWm9vkC9HWDYPBYDAYiQYcApfAKXALHNPY2Cijjh07ZmYLlJWVyb59+2TRwg/luh8vky/8M6XDYDAYjPgCzoA74BC4BE6BW+AYIxs0b+rr66W6utp0h+zevVu2b98uhYWF8t5778maNWtk5cqVsnz5clm2bJmJpUuXMhgMBiMPQz0AJ8ANcARcAWfAHXAIXAKnwC1wTHNzs4w6efKkMc+hQ4fMNDUM6qhwPvzwQ9m4caOsX79eCgoKzAER69atYzAYDEYehnoAToAb4Ai4QkUDh8AlcArcAscY2TQ1Ncnx48dNv1ptba2ZqoaBnb1798quXbvko48+MgfZtm2bbN26VbZs2cJgMBiMPA64AE6AG+AIuALOgDvgELgEToFb4JjW1lYZ1dLSYvrTsBBNHtgIMwhKS0tNUwhzpdH/hgPt2bPHxGeffcZgMBiMPAz1AJwAN8ARcAWcAXfAIXAJnAK3wDFtbW3y/3brZVFn8U7cAAAAAElFTkSuQmCC"}}]);