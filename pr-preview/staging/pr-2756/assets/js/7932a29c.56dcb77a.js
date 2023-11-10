"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94975],{96290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905),r=a(51715),o=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"cloud-aws-ec2",title:"Amazon EC2"},c=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-ec2",id:"integrations/plugin-packs/procedures/cloud-aws-ec2",title:"Amazon EC2",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-ec2.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-ec2",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-aws-ec2",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-aws-ec2.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-ec2",title:"Amazon EC2"},sidebar:"pp",previous:{title:"Amazon EBS",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-aws-ebs"},next:{title:"Amazon EFS",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-aws-efs"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisistes",id:"prerequisistes",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I test it through the CLI and what is the meaning of the command_line parameters ?",id:"how-can-i-test-it-through-the-cli-and-what-is-the-meaning-of-the-command_line-parameters-",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3},{value:"Why do I get the following result <code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code> ?",id:"why-do-i-get-the-following-result-unknown-command-error----an-error-occurred-authfailure--",level:3},{value:"Why do I get the following result <code>UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]</code>",id:"why-do-i-get-the-following-result-unknown-command-error----an-error-occurred-invalidparametervalue-",level:3}],k={toc:u},g="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2\u2019s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon\u2019s proven computing environment."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EC2 standalone instances"),(0,n.kt)("li",{parentName:"ul"},"EC2 autoscaling groups"),(0,n.kt)("li",{parentName:"ul"},"EC2 Spot fleet requests")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Ec2-Api-HostDiscovery-Ec2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover EC2 Instances from your Cloudwatch endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Ec2-Api-HostDiscovery-Asg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover EC2 Autoscalingroups from your Cloudwatch endpoint"))))),(0,n.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("p",null,"No services discovery rule available on this pack"))),(0,n.kt)("h2",{id:"monitored-metrics"},"Monitored metrics"),(0,n.kt)("p",null,"You can get more details on AWS/EC2 Cloudwatch metrics in the official AWS documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ec2/index"},"https://docs.aws.amazon.com/ec2/index"),". "),(0,n.kt)("p",null,"In addition to modes and metrics described here, it is also possible to monitor the following indicators:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instance-Types: Number of instances of each AWS Family and associated types."),(0,n.kt)("li",{parentName:"ul"},"Instance-Status: Global health check and count of EC2 instances.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Ec2-Cpu-Credit",label:"Ec2-Cpu-Credit",mdxType:"TabItem"},(0,n.kt)("p",null,"This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUCreditBalance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of earned CPU credits that an instance has accrued since it was launched or started. Unit: Credit vCPU-minutes)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUCreditUsage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of CPU credit consumed. Unit: Credits (vCPU-minutes)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUSurplusCreditBalance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of surplus credits that have been spent by an unlimited instance when its CPUCreditBalance value is zero. Credits (vCPU-minutes)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUSurplusCreditsCharged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of spent surplus credits that are not paid down by earned CPU credits, and which thus incur an additional charge. Unit: Credits(vCPU-minutes)"))))),(0,n.kt)(o.Z,{value:"Ec2-Cpu-Usage",label:"Ec2-Cpu-Usage",mdxType:"TabItem"},(0,n.kt)("p",null,"This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUUtilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The percentage of CPU utilization. Unit: Percent"))))),(0,n.kt)(o.Z,{value:"Ec2-Diskio",label:"Ec2-Diskio",mdxType:"TabItem"},(0,n.kt)("p",null,"This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ReadIOPS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average number of disk read I/O operations per second. Unit: Count/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WriteIOPS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average number of disk write I/O operations per second. Unit: Count/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ReadThroughput"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average number of bytes read from disk per second. Unit: Bytes/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WriteThroughput"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average number of bytes write to disk per second. Unit: Bytes/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ReadLatency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average amount of time taken per disk I/O read operation. Unit: Seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WriteLatency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average amount of time taken per disk I/O write operation. Unit: Seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DiskQueueDepth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of outstanding IOs (read/write requests) waiting to access the disk. Unit: Count")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These metrics are most of the time irrelevant or null when applied to an AutoscalingGroup"))),(0,n.kt)(o.Z,{value:"Ec2-Network",label:"Ec2-Network",mdxType:"TabItem"},(0,n.kt)("p",null,"This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NetworkIn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of bytes received on all network interfaces by the instance. This metric identifies the volume of incoming network traffic to a single instance. Unit: Bytes/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NetworkOut"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of bytes sent out on all network interfaces by the instance. This metric identifies the volume of outgoing network traffic from a single instance. Unit: Bytes/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NetworkPacketsIn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of packets received on all network interfaces by the instance. This metric identifies the volume of incoming traffic in terms of the number of packets on a single instance. This metric is available for basic monitoring only. Unit: Packets/Second")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NetworkPacketsOut"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of packets sent out on all network interfaces by the instance. This metric identifies the volume of outgoing traffic in terms of the number of packets on a single instance. This metric is available for basic monitoring only. Unit: Packets/Second"))))),(0,n.kt)(o.Z,{value:"EC2Spot-Active-Instances",label:"EC2Spot-Active-Instances",mdxType:"TabItem"},(0,n.kt)("p",null,"This check is available with 'Cloud-Aws-Ec2-Spot-Fleet-Request' Host Template"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ActiveInstances"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active instances for a give EC2Spot fleet request. Unit: Count.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HealthyInstances"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of healthy instances for a give EC2Spot fleet request. Unit: Count.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UnhealthyInstances"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of unhealthy instances for a give EC2Spot fleet request. Unit: Count.")))))),(0,n.kt)("h2",{id:"prerequisistes"},"Prerequisistes"),(0,n.kt)("h3",{id:"aws-configuration"},"AWS Configuration"),(0,n.kt)("p",null,"Configure a service account (access/secret key combo) for which the following privileges have to be granted:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeInstances"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display EC2 instances & ASG details")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeSpotFleetRequests"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display EC2 Spot Fleet Requests details")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/EC2 namespace on Cloudwatch")))),(0,n.kt)("h3",{id:"plugin-dependencies"},"Plugin dependencies"),(0,n.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,n.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,n.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,n.kt)("em",{parentName:"p"},"paws")," if you are using a proxy to reach AWS Cloudwatch APIs. ")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,n.kt)(o.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor Amazon EC2 ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ec2-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor Amazon EC2 resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ec2-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-ec2.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,n.kt)("li",{parentName:"ul"},'Apply the relevant Host Template. They all begins with "Cloud-Aws-Ec2*".  ')),(0,n.kt)("p",null,"All of the Host Templates share the following configuration macros:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,n.kt)("p",null,"Set additionnal macros that comes with the Host Templates: "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Cloud-Aws-Ec2-Asg-&-Cloud-Aws-Ec2-Instance",label:"Cloud-Aws-Ec2-Asg-&-Cloud-Aws-Ec2-Instance",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSINSTANCENAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the instance you want to monitor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSINSTANCETYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Type of instance to check ('instance' or 'cluster')"))))),(0,n.kt)(o.Z,{value:"Cloud-Aws-Ec2-Spot-Fleet-Request",label:"Cloud-Aws-Ec2-Spot-Fleet-Request",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SPOTFLEETREQUESTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Spot Fleet Request identifier. (e.g: sfr-abcd1234)")))))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-can-i-test-it-through-the-cli-and-what-is-the-meaning-of-the-command_line-parameters-"},"How can I test it through the CLI and what is the meaning of the command_line parameters ?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following\ncommand (Some of the parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl\n    --plugin=cloud::aws::ec2::plugin\n    --mode=cpu\n    --custommode='awscli'\n    --aws-secret-key='***'\n    --aws-access-key='AKIA5EDPTASPNBK5EMTM'\n    --region='eu-west-1'\n    --type='asg'\n    --name='centreon-front'\n    --filter-metric='Utilization'\n    --statistic='average'\n    --timeframe='600'\n    --period='60'\n    --warning-cpu-utilization='80'\n    --critical-cpu-utilization='90'\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Asg 'centreon-front' Statistic 'Average' Metrics CPU Utilization: 35.81 | 'centreon-front~average#ec2.cpu.utilization.percentage'=35.81;80;90;;\n")),(0,n.kt)("p",null,"The command above monitors the CPU Utilization (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),") of the ",(0,n.kt)("em",{parentName:"p"},"centreon-front")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--name='centreon-front'"),")\nAutoscaling Group  (",(0,n.kt)("inlineCode",{parentName:"p"},"--type='asg'"),"). This ASG is deployed  within the AWS eu-west-1 region (",(0,n.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),").\nThe collected metrics will be parsed as average statistics (",(0,n.kt)("inlineCode",{parentName:"p"},"--statistic='average'"),") over a timeframe of 600 secondes (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),")\nwith a sample of 1 point per minute (",(0,n.kt)("inlineCode",{parentName:"p"},"--period='60'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alert if the CPU Utilization is higher than 80% and a CRITICAL alert if higher than 90%."),(0,n.kt)("p",null,"All the options that can be used with this Plugin can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl --plugin=cloud::aws::ec2::plugin --mode=cpu --help\n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},"Why do I get the following result ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,n.kt)("p",null,"This command result means that Amazon Cloudwatch does not have any value for the requested period."),(0,n.kt)("p",null,"This result can be overriden by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message. "),(0,n.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-command-error----an-error-occurred-authfailure--"},"Why do I get the following result ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")," ?"),(0,n.kt)("p",null,"This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation."),(0,n.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-command-error----an-error-occurred-invalidparametervalue-"},"Why do I get the following result ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]")),(0,n.kt)("p",null,"Most of the time, this command result highlights typo/mispelling in the Amazon Dimension name (",(0,n.kt)("inlineCode",{parentName:"p"},"--name"),")."))}h.isMDXComponent=!0}}]);