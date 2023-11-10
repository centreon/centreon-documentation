"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[97324],{73166:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"sc-kafka-events",title:"Kafka Event Manager"},m=void 0,u={unversionedId:"integrations/data-analytics/sc-kafka-events",id:"version-23.10/integrations/data-analytics/sc-kafka-events",title:"Kafka Event Manager",description:"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on slack.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/data-analytics/sc-kafka-events.md",sourceDirName:"integrations/data-analytics",slug:"/integrations/data-analytics/sc-kafka-events",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/data-analytics/sc-kafka-events",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/data-analytics/sc-kafka-events.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"sc-kafka-events",title:"Kafka Event Manager"},sidebar:"version-23.10/docs",previous:{title:"Warp10",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/data-analytics/sc-warp10"},next:{title:"Event Management",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/event-management/event-management-overview"}},k={},c=[{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Kafka mandatory parameters",id:"add-kafka-mandatory-parameters",level:3},{value:"Add Kafka optional parameters",id:"add-kafka-optional-parameters",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Librdkafka (library dependency) parameters",id:"librdkafka-library-dependency-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"ba_status event",id:"ba_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Test connexion",id:"test-connexion",level:2}],d={toc:c},g="wrapper";function h(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(g,s(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},d,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on ",(0,n.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"),".")),(0,n.kt)("h2",{id:"before-starting"},"Before starting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,n.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,n.kt)("strong",{parentName:"li"},"host_status"),", ",(0,n.kt)("strong",{parentName:"li"},"service_status")," and ",(0,n.kt)("strong",{parentName:"li"},"ba_status")," events. The event format is shown ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#event-format"},"there")),"."),(0,n.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Connectez vous en tant que ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," sur le serveur Centreon central en utilisant votre client SSH pr\xe9f\xe9r\xe9."),(0,n.kt)("p",null,"Lancer la commande adapt\xe9e \xe0 votre syst\xe8me :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-kafka\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-kafka\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-stream-connector-kafka\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"To configure your stream connector, you must ",(0,n.kt)("strong",{parentName:"p"},"head over")," the ",(0,n.kt)("strong",{parentName:"p"},"Configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,n.kt)("strong",{parentName:"p"},"Select")," the ",(0,n.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,n.kt)("strong",{parentName:"p"},"click")," the ",(0,n.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add")," a new ",(0,n.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,n.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Kafka events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path"),(0,n.kt)("td",{parentName:"tr",align:null},"/usr/share/centreon-broker/lua/kafka-events-apiv2.lua")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Filter category"),(0,n.kt)("td",{parentName:"tr",align:null},"Neb,Bam")))),(0,n.kt)("h3",{id:"add-kafka-mandatory-parameters"},"Add Kafka mandatory parameters"),(0,n.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,n.kt)("strong",{parentName:"p"},"click")," on the ",(0,n.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,n.kt)("strong",{parentName:"p"},"below")," the ",(0,n.kt)("strong",{parentName:"p"},"filter category")," input."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,n.kt)("th",{parentName:"tr",align:null},"Value exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"topic"),(0,n.kt)("td",{parentName:"tr",align:null},"the topic in which events are going to be written"),(0,n.kt)("td",{parentName:"tr",align:null},"Monitoring")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"brokers"),(0,n.kt)("td",{parentName:"tr",align:null},"Coma separeted list of brokers that are ready to receive data"),(0,n.kt)("td",{parentName:"tr",align:null},"broker_address1:port1,broker_address2:port2")))),(0,n.kt)("h3",{id:"add-kafka-optional-parameters"},"Add Kafka optional parameters"),(0,n.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that are associated with. To add them you must ",(0,n.kt)("strong",{parentName:"p"},"click")," on the ",(0,n.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,n.kt)("strong",{parentName:"p"},"below")," the ",(0,n.kt)("strong",{parentName:"p"},"filter category")," input."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,n.kt)("th",{parentName:"tr",align:null},"default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"logfile"),(0,n.kt)("td",{parentName:"tr",align:null},"the file in which logs are written"),(0,n.kt)("td",{parentName:"tr",align:null},"/var/log/centreon-broker/kafka-stream-connector.log")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"log_level"),(0,n.kt)("td",{parentName:"tr",align:null},"logging level from 1 (errors) to 3 (debug)"),(0,n.kt)("td",{parentName:"tr",align:null},"1")))),(0,n.kt)("h3",{id:"standard-parameters"},"Standard parameters"),(0,n.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,n.kt)("p",null,"All those parameters are documented ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"},"here")),"."),(0,n.kt)("p",null,"Some of them are overridden by this stream connector."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value for the stream connector"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"accepted_categories"),(0,n.kt)("td",{parentName:"tr",align:null},"neb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"accepted_elements"),(0,n.kt)("td",{parentName:"tr",align:null},"host_status,service_status")))),(0,n.kt)("h3",{id:"librdkafka-library-dependency-parameters"},"Librdkafka (library dependency) parameters"),(0,n.kt)("p",null,"In addition to parameters from stream connectors, there is a handfull of parameters available thanks to the librdkafka library. They are all documented in the librdkafka ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md"},"official documentation")),". To use them you just need to ",(0,n.kt)("strong",{parentName:"p"},"add")," the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"sc_kafka")," prefix"),"."),(0,n.kt)("p",null,"With that in mind, the parameter ",(0,n.kt)("strong",{parentName:"p"},"sasl.mechanism")," becomes ",(0,n.kt)("strong",{parentName:"p"},"_sc_kafka_sasl.mechanism")," in your broker configuration."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El7 and El8 repos grant access to an old librdkafka library version.")),(0,n.kt)("h2",{id:"event-bulking"},"Event bulking"),(0,n.kt)("p",null,"This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to kafka brokers."),(0,n.kt)("p",null,"To use this feature you must add the following parameter in your stream connector configuration."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"max_buffer_size"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"more than one"))))),(0,n.kt)("h2",{id:"event-format"},"Event format"),(0,n.kt)("p",null,"This stream connector will send event with the following format."),(0,n.kt)("h3",{id:"service_status-event"},"service_status event"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "my_host",\n  "service": "my_service",\n  "output": "CRITICAL: the wind broke my umbrella",\n  "state": "CRITICAL"\n}\n')),(0,n.kt)("h3",{id:"host_status-event"},"host_status event"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "my_host",\n  "output": "DOWN: putting gas in my eletric car was not a good idea",\n  "state": "DOWN"\n}\n')),(0,n.kt)("h3",{id:"ba_status-event"},"ba_status event"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ba": "my_ba",\n  "state": "CRITICAL"\n}\n')),(0,n.kt)("h3",{id:"custom-event-format"},"Custom event format"),(0,n.kt)("p",null,"This stream connector allows you to change the format of the event to suit your needs. Only the ",(0,n.kt)("strong",{parentName:"p"},"event")," part of the json is customisable. It also allows you to handle events type that are not handled by default such as ",(0,n.kt)("strong",{parentName:"p"},"acknowledgement events"),"."),(0,n.kt)("p",null,"In order to use this feature you need to ",(0,n.kt)("strong",{parentName:"p"},"configure")," a json event format file and ",(0,n.kt)("strong",{parentName:"p"},"add")," a new stream connector parameter."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"format_file"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/centreon-broker/kafka-events-format.json")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The event format configuration file must be readable by the centreon-broker user.")),(0,n.kt)("p",null,"To learn more about custom event format and templating file, ",(0,n.kt)("strong",{parentName:"p"},"head over")," the following ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation"},"documentation")),"."),(0,n.kt)("h2",{id:"test-connexion"},"Test connexion"),(0,n.kt)("p",null,"Sending data to Kafka can be quite complicated because of all the involved parameters (either from the stream connector itself or the kafka library)."),(0,n.kt)("p",null,"To make things easier, a lua connection test script is available."),(0,n.kt)("p",null,"To install it you must follow the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#installation"},"installation procdure"))," and then:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O /tmp/kafka_test_connection.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/modules/tests/kafka_test_connexion.lua \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Open")," the script and ",(0,n.kt)("strong",{parentName:"p"},"configure")," the kafka options that you want to use from the librdkafka ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md"},"official documentation")),"  (you do not need to add the ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("em",{parentName:"em"},"sc_kafka"))," prefix this time, just put the parameter inside the ",(0,n.kt)("strong",{parentName:"p"},"config[]")," brackets)."),(0,n.kt)("p",null,"There are already configuration set up as examples to guide you."),(0,n.kt)("p",null,"If it doesn't work, you should have an error message like below (with the appropriate error message). It is strongly advised to have access to kafka to check if a message is sent from the test script."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"%3|1622459610.760|FAIL|rdkafka#producer-1| [thrd:sasl_plaintext://cps-kafkan:9093/bootstrap]: sasl_plaintext://cps-kafkan:9093/bootstrap: Failed to resolve 'cps-kafkan:9093': Name or service not known\n")))}h.isMDXComponent=!0}}]);