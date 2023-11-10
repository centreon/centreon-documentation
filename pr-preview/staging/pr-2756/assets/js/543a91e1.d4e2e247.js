"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62066],{64515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),o=n(51715),r=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"cloud-aws-health",title:"AWS Health"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-health",id:"integrations/plugin-packs/procedures/cloud-aws-health",title:"AWS Health",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-health.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-health",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-aws-health",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-health.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-health",title:"AWS Health"},sidebar:"pp",previous:{title:"AWS ELB",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-aws-elb"},next:{title:"AWS Lambda",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-aws-lambda"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following result:",id:"why-do-i-get-the-following-result",level:3},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code> ?",id:"unknown-command-error----an-error-occurred-authfailure--",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to health.us-east-1.amazonaws.com:443 |</code>",id:"unknown-500-cant-connect-to-healthus-east-1amazonawscom443-",level:4}],h={toc:m},k="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"AWS Health provides personalized information about events that can affect your AWS infrastructure,\nguides you through scheduled changes, and accelerates the troubleshooting of issues that affect your AWS resources and accounts."),(0,a.kt)("p",null,"The AWS Health Centreon Plugin uses the Amazon Health API to collect the related metrics and details about events."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Events related to AWS accounts and resources")),(0,a.kt)("h2",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.open.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of open events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.closed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of closed events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.upcoming.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of upcoming events")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"aws-configuration"},"AWS Configuration"),(0,a.kt)("p",null,"Configure a service account (",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," combo) for which the following privileges have to be granted:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"health:DescribeEvents"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Returns information about events that meet the specified filter criteria.")))),(0,a.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,a.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,a.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,a.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended).\nYou must install it on every Centreon poller expected to monitor AWS Health: "),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(r.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,a.kt)("em",{parentName:"p"},"paws")," in the following situations:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"if you are using a proxy to reach AWS Cloudwatch APIs. "),(0,a.kt)("li",{parentName:"ul"},"to automatically add Hosts in Centreon using the ",(0,a.kt)("em",{parentName:"li"},"Host Discovery")," feature"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor AWS Health:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Health-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"AWS Health")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor AWS Health:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Health-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-health.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"AWS Health")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts". '),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"Cloud-Aws-Health")," template to apply to the Host."),(0,a.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin\nby running the following command (Some of the parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyurl")," have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_health_api.pl \\\n    --plugin=cloud::aws::health::plugin \\\n    --mode=events \\\n    --custommode='awscli' \\\n    --aws-secret-key='****' \\\n    --aws-access-key='****' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-service='' \\\n    --filter-region='' \\\n    --filter-entity-value='' \\\n    --filter-event-category='issue' \\\n    --filter-event-status='open' \\\n    --warning-total='0' \\\n    --critical-total='1' \\\n    --display-affected-entities \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Events total: 1 | 'events.total.count'=1;;0:0;0; 'events.open.count'=1;;;0; 'events.closed.count'=0;;;0; 'events.upcoming.count'=0;;;0;\n[service: RDS][region: eu-west-1][status: open][type: AWS_RDS_HARDWARE_MAINTENANCE_SCHEDULED][start: Wed Jul 15 13:00:00 2020][affected entity: doh-sfetoto3]\n")),(0,a.kt)("p",null,"The command above monitors the ",(0,a.kt)("em",{parentName:"p"},"events")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=events"),") of an AWS account identified by the usage of API credentials (",(0,a.kt)("inlineCode",{parentName:"p"},"--aws-secret-key='****' --aws-access-key='****'"),").\nBy default, all types of events will be collected by the Plugin; it's possible though to use a set of specific filters\nto customize the types of results that will be returned by the command. In the example above, only the events categorized as ",(0,a.kt)("em",{parentName:"p"},"issues")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-event-category='issue'"),")\nand having an ",(0,a.kt)("em",{parentName:"p"},"open")," status (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-event-status='open'"),") will be displayed.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"--display-affected-entities")," option is used to include the reference of the resource to which the event is related."),(0,a.kt)("p",null,"This command would trigger a WARNING alert if the number of events is more than 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-total='0'"),") and a CRITICAL alert\nfor more than 1 event (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-total='1'"),")."),(0,a.kt)("p",null,"All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_health_api.pl --plugin=cloud::aws::health::plugin --mode=events --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-result"},"Why do I get the following result:"),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,a.kt)("p",null,"This command result means that Amazon Cloudwatch does not have any value for the requested period."),(0,a.kt)("p",null,"This result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message. "),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure--"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")," ?"),(0,a.kt)("p",null,"This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-healthus-east-1amazonawscom443-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the AWS Health API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."))}g.isMDXComponent=!0}}]);