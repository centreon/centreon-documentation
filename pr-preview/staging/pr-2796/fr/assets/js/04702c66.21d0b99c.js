"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[38622],{72804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const u={id:"cloud-aws-lambda",title:"AWS Lambda"},p=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-lambda",id:"integrations/plugin-packs/procedures/cloud-aws-lambda",title:"AWS Lambda",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-lambda.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-lambda",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-aws-lambda",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-lambda.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-lambda",title:"AWS Lambda"},sidebar:"pp",previous:{title:"AWS Health",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-aws-health"},next:{title:"AWS Transit Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-aws-transitgateway"}},c={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,u=s(e,["components"]);return(0,n.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"AWS Lambda")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Aws-Lambda-custom")),(0,n.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Lambda-Invocations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Lambda-Invocations-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les performances du cache Memcached"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Ce pack propose une r\xe8gle de d\xe9couverte d'h\xf4tes permettant de d\xe9couvrir automatiquement des ressources AWS Backup vault : "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(72650).Z,width:"610",height:"193"})),(0,n.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module : ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Lambda-Invocations",label:"Lambda-Invocations",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lambda.function.duration.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lambda.function.invocations.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lambda.function.errors.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lambda.function.deadlettererrors.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lambda.function.throttles.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lambda.function.iteratorage.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"privil\xe8ges-aws"},"Privil\xe8ges AWS"),(0,n.kt)("p",null,"Voici la liste des droits n\xe9cessaires au travers des access/secret key utilis\xe9es pour pouvoir utiliser le monitoring AWS/EC2: "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lamdba:ListFunctions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get a list of Lambda function")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/EC2 namespace on Cloudwatch.")))),(0,n.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,n.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,n.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,n.kt)("em",{parentName:"p"},"paws"),". Le SDK est recommand\xe9 car plus performant. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Attention")," il n'est pas possible d'utiliser ",(0,n.kt)("em",{parentName:"p"},"paws")," si la connexion s'effectue au travers d'un proxy.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,n.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"AWS Lambda")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Lambda-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"AWS Lambda")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"AWS Lambda")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Lambda-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"AWS Lambda")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-lambda\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"AWS Lambda")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Remplissez le champ ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse ",(0,n.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Aws-Lambda-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises doivent \xeatre renseign\xe9es :")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"FUNCTIONNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Function name (Default : '.*')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_lambda_api.pl \\\n    --plugin=cloud::aws::lambda::plugin \\\n    --mode=invocations \\\n    --custommode='awscli' \\\n    --aws-secret-key='' \\\n    --aws-access-key='' \\\n    --region='eu-west-1' \\\n    --proxyurl='' \\\n    --filter-metric='' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --name='myfunctions' \\\n    --zeroed \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Function 'myfunctions' All metrics are ok | 'myfunctions~average#lambda.function.throttles.count'=0.00;;;; 'myfunctions~average#lambda.function.errors.count'=0.00;;;; 'myfunctions~average#lambda.function.iteratorage.milliseconds'=0.00;;;; 'myfunctions~average#lambda.function.invocations.count'=0.00;;;; 'myfunctions~average#lambda.function.deadlettererrors.count'=0.00;;;; 'myfunctions~average#lambda.function.duration.milliseconds'=0.00;;;; 'myfunctions~sum#lambda.function.throttles.count'=0.00;;;; 'myfunctions~sum#lambda.function.errors.count'=0.00;;;; 'myfunctions~sum#lambda.function.iteratorage.milliseconds'=0.00;;;; 'myfunctions~sum#lambda.function.invocations.count'=0.00;;;; 'myfunctions~sum#lambda.function.deadlettererrors.count'=0.00;;;; 'myfunctions~sum#lambda.function.duration.milliseconds'=0.00;;;;\nChecking Function 'myfunctions'\n    Statistic 'Average' Metrics Throttles: 0.00, Errors: 0.00, Iterator Age: 0.00, Invocations: 0.00, Dead Letter Errors: 0.00, Duration: 0.00\n    Statistic 'Sum' Metrics Throttles: 0.00, Errors: 0.00, Iterator Age: 0.00, Invocations: 0.00, Dead Letter Errors: 0.00, Duration: 0.00\n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_lambda_api.pl \\\n    --plugin=cloud::aws::lambda::plugin \\\n    --mode=invocations \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_lambda_api.pl \\\n    --plugin=cloud::aws::lambda::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}f.isMDXComponent=!0},72650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-aws-lambda-provider-7382ba7439cf4155e24ecbf5953f02d9.png"}}]);