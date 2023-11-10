"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[12607],{80310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>c});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"cloud-aws-ebs",title:"Amazon EBS"},p=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-ebs",id:"integrations/plugin-packs/procedures/cloud-aws-ebs",title:"Amazon EBS",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-ebs.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-ebs",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ebs",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-ebs.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-ebs",title:"Amazon EBS"},sidebar:"pp",previous:{title:"Amazon Direct Connect",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-directconnect"},next:{title:"Amazon EC2",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"}},m={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques supervis\xe9es",id:"m\xe9triques-supervis\xe9es",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code>",id:"unknown-command-error----an-error-occurred-authfailure-",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]</code>",id:"unknown-command-error----an-error-occurred-invalidparametervalue-",level:4}],k={toc:c},g="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Amazon Elastic Block Store (EBS) est un service de stockage par bloc hautes performances et simple d'utilisation con\xe7u en vue d'une utilisation avec Amazon Elastic Compute Cloud (EC2)\npour les charges de travail exigeantes en d\xe9bit et en transactions \xe0 n'importe quelle \xe9chelle.\nDes charges de travail vari\xe9es, telles que des bases de donn\xe9es relationnelles et non relationnelles, des applications d'entreprise, des applications conteneuris\xe9es, des moteurs d'analyse Big Data,\ndes syst\xe8mes de fichiers et des workflows multim\xe9dias, sont largement d\xe9ploy\xe9es sur Amazon EBS."),(0,a.kt)("p",null,"Le Plugin Centreon Amazon EBS utilise l'API Amazon Cloudwatch pour collecter les m\xe9triques associ\xe9es."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Volumes EBS: standard, gp2, st1, sc1 & io1")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Ebs-Api-HostDiscovery"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte de vos volumes EBS"))))),(0,a.kt)(o.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("p",null,"Aucune r\xe8gle de d\xe9couverte de service n'est associ\xe9e \xe0 ce connecteur de supervision. "))),(0,a.kt)("h2",{id:"m\xe9triques-supervis\xe9es"},"M\xe9triques supervis\xe9es"),(0,a.kt)("p",null,"Les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sont \xe9galement d\xe9taill\xe9es dans la documentation officielle du service EBS:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/using_cloudwatch_ebs"},"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/using_cloudwatch_ebs")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Ebs-Volume-Io",label:"Ebs-Volume-Io",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeReadBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Provides information on the read operations in a specified period of time. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeWriteBytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Provides information on the write operations in a specified period of time. Unit: Bytes"))))),(0,a.kt)(o.Z,{value:"Ebs-Iops",label:"Ebs-Iops",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeReadOps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of read operations in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeWriteOps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of write operations in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeThroughputPercentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The percentage of I/O operations per second (IOPS) delivered of the total IOPS provisioned for an Amazon EBS volume. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeConsumedReadWriteOps"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total amount of read and write operations (normalized to 256K capacity units) consumed in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeQueueLength"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of read and write operation requests waiting to be completed in a specified period of time. Unit: Count"))))),(0,a.kt)(o.Z,{value:"Ebs-Time",label:"Ebs-Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeTotalReadTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of seconds spent by all read operations that completed in a specified period of time. Unit: Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeTotalWriteTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of seconds spent by all write operations that completed in a specified period of time. Unit: Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"VolumeIdleTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of seconds in a specified period of time when no read or write operations were submitted. Unit: Seconds")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ges-aws"},"Privil\xe8ges AWS"),(0,a.kt)("p",null,"Voici la liste des droits n\xe9cessaires au travers des ",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," utilis\xe9es pour pouvoir impl\xe9menter la supervision des ressources Amazon EBS: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ec2:DescribeVolumes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Describes the specified EBS volumes or all of your EBS volumes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/EBS namespace on Cloudwatch")))),(0,a.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,a.kt)("em",{parentName:"p"},"paws"),".\nLe SDK est recommand\xe9 car plus performant. "),(0,a.kt)("p",null,"Installez le binaire choisi en lan\xe7ant l'une des commandes suivantes:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(o.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est actuellement ",(0,a.kt)("strong",{parentName:"p"},"pas")," possible d'utiliser ",(0,a.kt)("em",{parentName:"p"},"paws")," dans les cas suivants:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"si la connexion s'effectue au travers d'un proxy."),(0,a.kt)("li",{parentName:"ul"},"utilisation de la fonctionnalit\xe9 de ",(0,a.kt)("em",{parentName:"li"},"D\xe9couverte d'H\xf4te")," dans Centreon."))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Amazon EBS:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ebs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Dans l'interface Centreon, installer le connecteur de supervision 'Amazon EBS' depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Amazon EBS:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ebs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision 'Amazon EBS':")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-ebs.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Dans l'interface Web de Centreon, installer le connecteur de supervision 'Amazon EBS' depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Lorsque vous ajoutez un H\xf4te \xe0 Centreon, choisissez le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"Cloud-Aws-Ebs-Custom"),". Une fois celui-ci appliqu\xe9, certaines Macros li\xe9es\n\xe0 l'H\xf4te doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSVOLUMEID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"EBS Volume ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\n(certaines options comme ",(0,a.kt)("inlineCode",{parentName:"p"},"volume-id")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyurl")," doivent \xeatre ajust\xe9es en fonction du contexte):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_ebs_api.pl \\\n    --plugin=cloud::aws::ebs::plugin \\\n    --mode=volumeio \\\n    --custommode='awscli' \\\n    --aws-secret-key='***' \\\n    --aws-access-key='***' \\\n    --region='eu-west-1' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --volume-id='vol-1234abcd' \\\n    --statistic='average' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --warning-volume-write-bytes='60000000' \\\n    --critical-volume-write-bytes='90000000' \\\n    -- verbose\n")),(0,a.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 'vol-1234abcd' Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB | \n'vol-1234abcd~average#ebs.volume.bytes.read.bytes'=29081.60B;;;; 'vol-1234abcd~average#ebs.volume.bytes.write.bytes'=57261465.60B;0:60000000;0:90000000;;\nAWS EBS Volume'vol-1234abcd'\n    Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB\n")),(0,a.kt)("p",null,"Cette commande supervise les IOs d'un volume EBS (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=volumeio"),") rattach\xe9 \xe0 la r\xe9gion ",(0,a.kt)("em",{parentName:"p"},"eu-west-1")," d'AWS (",(0,a.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),")\net ayant pour ID ",(0,a.kt)("em",{parentName:"p"},"vol-1234abcd")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-id='vol-1234abcd'"),")."),(0,a.kt)("p",null,"La m\xe9trique obtenue est une moyenne de valeurs (",(0,a.kt)("inlineCode",{parentName:"p"},"--statistic='average'"),") sur un intervalle de 10 minutes / 600 secondes  (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),") avec un point par minute / 60 secondes (",(0,a.kt)("inlineCode",{parentName:"p"},"--period='60'"),")."),(0,a.kt)("p",null,"Une alerte WARNING sera d\xe9clench\xe9e si la moyenne des \xe9criture sur le volume pour la p\xe9riode donn\xe9e est sup\xe9rieure \xe0 60MB, et CRITICAL si elle est sup\xe9rieure \xe0 90MB.\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-volume-write-bytes='60000000' --critical-volume-write-bytes='90000000'"),")."),(0,a.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl --plugin=cloud::aws::ebs::plugin --mode=volumeio --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,a.kt)("p",null,"Cela signifie qu'Amazon Cloudwatch n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,a.kt)("p",null,"Vous pouvez ajouter ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro ",(0,a.kt)("strong",{parentName:"p"},"EXTRAOPTIONS")," du ",(0,a.kt)("em",{parentName:"p"},"Service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")),(0,a.kt)("p",null,"Cette erreur signifie que le r\xf4le IAM associ\xe9 au combo access-key/secret-key n'a pas les droits suffisants pour r\xe9aliser une op\xe9ration donn\xe9e."),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-invalidparametervalue-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]")),(0,a.kt)("p",null,"Le plus souvent, cette erreur est le r\xe9sultat d'une erreur dans le nom de l'\xe9l\xe9ment supervis\xe9 (option ",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-id"),")."))}b.isMDXComponent=!0}}]);