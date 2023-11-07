"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81198],{78723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"cloud-aws-cloudwatchlogs",title:"Amazon CloudWatch Logs"},c=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs",id:"integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs",title:"Amazon CloudWatch Logs",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-cloudwatchlogs",title:"Amazon CloudWatch Logs"},sidebar:"pp",previous:{title:"Amazon CloudWatch",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatch"},next:{title:"Amazon Direct Connect",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-aws-directconnect"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"Donn\xe9es collect\xe9es",id:"donn\xe9es-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code>",id:"unknown-command-error----an-error-occurred-authfailure-",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to monitoring.us-east-1.amazonaws.com:443 |</code>",id:"unknown-500-cant-connect-to-monitoringus-east-1amazonawscom443-",level:4}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"CloudWatch Logs vous permet de centraliser les journaux de tous vos syst\xe8mes ainsi que les\napplications et les services AWSque vous utilisez au sein d\u2019un seul service hautement \xe9volutif.\nVous pouvez ensuite facilement les consulter, y effectuer des recherches pour identifier des\ncodes d\u2019erreur sp\xe9cifiques ou des mod\xe8les, les filtrer en fonction de champs sp\xe9cifiques ou\nles archiver en toute s\xe9curit\xe9 \xe0 des fins d\u2019analyse ult\xe9rieure."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," Ce Plugin est susceptible de g\xe9n\xe9rer un volume importants de donn\xe9es lors des requ\xeates API.\nIl est indispensable d'utiliser les fonctionnalit\xe9s de filtrage de celui-ci (",(0,a.kt)("inlineCode",{parentName:"p"},"--group-name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--stream-name"),") afin\nde limiter les r\xe9sultats retourn\xe9s par l'API.")),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Groupes de Logs et Stream associ\xe9s ")),(0,a.kt)("h3",{id:"donn\xe9es-collect\xe9es"},"Donn\xe9es collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Get-Logs",label:"Get-Logs",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Logs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Refer to any log entry that match filters. Threshold are String on top of %{message}, %{stream","_","name}, %{since} variables")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ges-aws"},"Privil\xe8ges AWS"),(0,a.kt)("p",null,"Voici la liste des droits n\xe9cessaires au travers des ",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," utilis\xe9es pour pouvoir impl\xe9menter\nla supervision Amazon CloudWatch Logs: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CloudWatchLogs:DescribeLogGroups"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Returns information about LogGroups that meet the specified filter criteria.")))),(0,a.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,a.kt)("em",{parentName:"p"},"paws"),".\nLe SDK est recommand\xe9 car plus performant. "),(0,a.kt)("p",null,"Installez le binaire choisi en lan\xe7ant l'une des commandes suivantes:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est actuellement ",(0,a.kt)("strong",{parentName:"p"},"pas")," possible d'utiliser ",(0,a.kt)("em",{parentName:"p"},"paws")," dans les cas suivants:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"si la connexion s'effectue au travers d'un proxy."),(0,a.kt)("li",{parentName:"ul"},"utilisation de la fonctionnalit\xe9 de ",(0,a.kt)("em",{parentName:"li"},"D\xe9couverte d'H\xf4te")," dans Centreon."))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource Amazon CloudWatch Logs:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-CloudWatchLogs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Amazon CloudWatch Logs")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource Amazon CloudWatch Logs:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-CloudWatchLogs-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Amazon CloudWatch Logs"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-cloudwatchlogs\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Amazon CloudWatch Logs")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon et appliquez-lui le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Cloud-Aws-CloudWatchLogs"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\n(certaines options comme ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," doivent \xeatre ajust\xe9es en fonction du contexte):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_cloudwatchlogs_api.pl \\\n --plugin=cloud::aws::cloudwatchlogs::plugin \\\n --mode=get-logs \\\n --custommode='awscli' \\\n --aws-secret-key='****' \\\n --aws-access-key='****' \\\n --proxyurl='' \\\n --region='eu-west-1' \\\n --group-name='/aws/lambda/MyLambda_LogGroup' \\\n --stream-name='' \\\n --start-time-since='3000' \\\n --unknown-status='' \\\n --warning-status='' \\\n --critical-status='%{message} =~ /region/i' \\\n --verbose\n")),(0,a.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: 10 problem(s) detected | 'logs'=10;;;0;\ncritical: log [created: 5m 11s] [stream: 2020/07/21/[$LATEST]57eb66feaf4aa7bc46gr0e91aeac2b99] [message: [INFO] 2020-07-21T14:35:31.591Z    edcea75a-41ceaa-43ae0-8fa6-1cfea0d0dc  Set REGION: eu-west-1 -- ]\n[...]\ncritical: log [created: 10m 11s] [stream: 2020/07/21/[$LATEST]57eb66eac4cea0e91ce2b99] [message: [INFO]    2020-07-21T14:30:31.767Z    8a62ac5e-d6dd-44Da-b23e-bce42fef3  Set REGION: eu-west-1 -- ]\n")),(0,a.kt)("p",null,"Cette commande supervise les ",(0,a.kt)("em",{parentName:"p"},"logs")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=get-logs"),") Amazon CloudWatch gr\xe2ce \xe0 une paire d'identifiants ",(0,a.kt)("em",{parentName:"p"},"aws-secret-key")," et ",(0,a.kt)("em",{parentName:"p"},"aws-access-key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--aws-secret-key='****' --aws-access-key='****'"),").\nLes logs retourn\xe9s ici sont uniquement ceux inclus dans le groupe ",(0,a.kt)("em",{parentName:"p"},"MyLambda_LogGroup")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--group-name='/aws/lambda/MyLambda_LogGroup'"),") tel que d\xe9fini dans la console AWS."),(0,a.kt)("p",null,"Une alerte CRITICAL sera d\xe9clench\xe9e si des ",(0,a.kt)("em",{parentName:"p"},"logs")," contenant la cha\xeene 'region' sont pr\xe9sents dans le contenu de la ligne de log (",(0,a.kt)("inlineCode",{parentName:"p"},"'%{message} =~ /region/i'"),")."),(0,a.kt)("p",null,"La liste de tous les filtres et seuils disponibles peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_cloudwatchlogs_api.pl --plugin=cloud::aws::cloudwatchlogs::plugin --mode=get-logs --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")),(0,a.kt)("p",null,"Cette erreur signifie que le r\xf4le IAM associ\xe9 au combo access-key/secret-key n'a pas les droits suffisants pour r\xe9aliser une op\xe9ration donn\xe9e."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-monitoringus-east-1amazonawscom443-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to monitoring.us-east-1.amazonaws.com:443 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to monitoring.us-east-1.amazonaws.com:443 |"),"."),(0,a.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API AWS CloudWatch."),(0,a.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,\nil est n\xe9cessaire de le pr\xe9ciser dans la commande en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."))}f.isMDXComponent=!0}}]);