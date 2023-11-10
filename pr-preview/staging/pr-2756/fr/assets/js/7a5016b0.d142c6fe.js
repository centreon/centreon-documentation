"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[83050],{8719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905),r=a(51715),s=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const u={id:"cloud-aws-transitgateway",title:"AWS Transit Gateway"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-transitgateway",id:"integrations/plugin-packs/procedures/cloud-aws-transitgateway",title:"AWS Transit Gateway",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-transitgateway.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-transitgateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/cloud-aws-transitgateway",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-transitgateway.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-transitgateway",title:"AWS Transit Gateway"},sidebar:"pp",previous:{title:"AWS Lambda",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/cloud-aws-lambda"},next:{title:"AWS VPN",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/cloud-aws-vpn"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ge AWS",id:"privil\xe8ge-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code>",id:"unknown-command-error----an-error-occurred-authfailure-",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to monitoring.eu-west-1.amazonaws.com:443 |</code>",id:"unknown-500-cant-connect-to-monitoringeu-west-1amazonawscom443-",level:4}],k={toc:m},g="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"AWS Transit Gateway connecte les VPC et les r\xe9seaux sur site via une plateforme centrale. Il simplifie votre r\xe9seau et met fin\naux relations d'appairage complexes. Il agit comme routeur cloud : chaque nouvelle connexion n'est r\xe9alis\xe9e qu'une seule fois."),(0,n.kt)("p",null,"Gr\xe2ce \xe0 sa position centrale, le AWS Transit Gateway Network Manager dispose d'une vue d'ensemble unique de votre r\xe9seau et se\nconnecte m\xeame aux dispositifs de r\xe9seau \xe9tendu d\xe9fini par logiciel (SD-WAN)."),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("em",{parentName:"p"},"AWS Transit Gateway")," s'appuie sur les APIs Amazon Cloudwatch pour la collecte des donn\xe9es et m\xe9triques relatives au service Transit Gateway."),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Passerelles de transit")," AWS Transit Gateway")),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Gateways",label:"Gateways",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Transitgateways-Gateways"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover the Transit Gateways within an AWS infrastructure")))))),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)("p",null,"Plus de d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sont disponibles sur la\ndocumentation officielle du service AWS Transit Gateway:\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/fr_fr/vpc/latest/tgw/transit-gateway-cloudwatch-metrics"},"https://docs.aws.amazon.com/fr_fr/vpc/latest/tgw/transit-gateway-cloudwatch-metrics")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Gateways-Traffic-*",label:"Gateways-Traffic-*",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gateway.traffic.in.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of bytes received by the transit gateway."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gateway.traffic.out.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of bytes sent from the transit gateway."),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gateway.packets.in.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of packets received by the transit gateway."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gateway.packets.out.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of packets sent by the transit gateway."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gateway.packets.blackholedropped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of packets dropped because they matched a blackhole route."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gateway.packets.noroutedropped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of packets dropped because they did not match a route."),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"Il est possible d'afficher l'ensemble de ces m\xe9triques de fa\xe7on relative (par seconde) plut\xf4t que de mani\xe8re absolue. Pour cela,\najoutez simplement le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"}," --per-sec")," \xe0 la commande."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Le Mod\xe8le de Service ",(0,n.kt)("em",{parentName:"p"},"Gateways-Traffic-Global")," supervise par d\xe9faut l'ensemble des ",(0,n.kt)("em",{parentName:"p"},"Gateways")," de votre infrastructure AWS.\nUtilisez le module de ",(0,n.kt)("strong",{parentName:"p"},"d\xe9couverte automatique des Services")," afin d'obtenir un Service par ",(0,n.kt)("em",{parentName:"p"},"Gateway"),".")))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"privil\xe8ge-aws"},"Privil\xe8ge AWS"),(0,n.kt)("p",null,"Un compte de service (paire d'identifiants ",(0,n.kt)("em",{parentName:"p"},"access/secret keys"),") est n\xe9cessaire\nafin de pouvoir superviser les resources AWS Transit Gateway. Ce compte doit b\xe9n\xe9ficier\ndes privil\xe8ges suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get metrics values from Cloudwatch AWS/TransitGateway namespace")))),(0,n.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,n.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible\nd'utiliser soit le binaire ",(0,n.kt)("em",{parentName:"p"},"awscli"),", soit le SDK perl ",(0,n.kt)("em",{parentName:"p"},"Paws"),". Le SDK est\nrecommand\xe9 car plus performant. "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,n.kt)(s.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Attention")," il n'est pas possible pour le moment d'utiliser perl Paws si la\nconnexion s'effectue au travers d'un proxy.")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources AWS Transit Gateway:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Transitgateway-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"AWS Transit Gateway")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources AWS Transit Gateway:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Transitgateway-Api\n")),(0,n.kt)("p",null,"2.Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,n.kt)("em",{parentName:"p"},"AWS Transit Gateway"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-transitgateway.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"AWS Transit Gateway")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1 et appliquez-lui le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"Cloud-Aws-Transitgateway-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," (certaines options comme ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl")," doivent \xeatre\najust\xe9es en fonction du contexte):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_transitgateway_api.pl \\\n    --plugin=cloud::aws::transitgateway::plugin \\\n    --mode=traffic \\\n    --custommode=awscli \\\n    --aws-secret-key='*******************' \\\n    --aws-access-key='**********' \\\n    --region='eu-west-1' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --filter-gateway='tgw-01234567890abcd' \\\n    --warning-packets-drop-blackhole='500' \\\n    --critical-packets-drop-blackhole='1000' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous : "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 'tgw-01234567890abcd' Statistic 'Average' Metrics Bytes In: 2.89 MB, Bytes Out: 2.78 MB, Packets Received (In): 3844.04 ,\nPackets Drop Blackhole: 0.00 , Packets Sent (Out): 3677.79 , Packets Drop No Route: 0.01  |\n'tgw-01234567890abcd~average#gateway.traffic.in.bytes'=3026151.39B;;;; 'tgw-01234567890abcd~average#gateway.traffic.out.bytes'=2920220.01B;;;;\n'tgw-01234567890abcd~average#gateway.packets.in.count'=3844.04;;;; 'tgw-01234567890abcd~average#gateway.packets.blackholedropped.count'=0.00;;;;\n'tgw-01234567890abcd~average#gateway.packets.out.count'=3677.79;;;; 'tgw-01234567890abcd~average#gateway.packets.noroutedropped.count'=0.01;;;;\n")),(0,n.kt)("p",null,"La commande ci-dessus collecte les statistiques de trafic d'une Transit Gateway AWS\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::aws::transitgateway::plugin --mode=traffic"),"). Cette ressource Transit Gateway est h\xe9berg\xe9e dans la r\xe9gion AWS\n",(0,n.kt)("em",{parentName:"p"},"eu-west-1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),"). La connexion \xe0 l'API Cloudwatch\ns'effectue \xe0 l'aide des identifiants ",(0,n.kt)("em",{parentName:"p"},"aws-secret-key")," et ",(0,n.kt)("em",{parentName:"p"},"aws-access-key"),"\npr\xe9alablement configur\xe9s sur la console AWS\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--aws-secret-key='****' --aws-access-key='****'"),"). "),(0,n.kt)("p",null,"Les m\xe9triques retourn\xe9es seront une moyenne sur un intervalle de 10 minutes / 600 secondes  (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),")\navec un point par minute / 60 secondes (",(0,n.kt)("inlineCode",{parentName:"p"},"--period='60'"),"). Dans l'exemple ci-dessus, on choisit de ne r\xe9cup\xe9rer que les\nstatistiques de la ",(0,n.kt)("em",{parentName:"p"},"Gateway")," portant l'ID ",(0,n.kt)("em",{parentName:"p"},"tgw-01234567890abcd")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-gateway='tgw-01234567890abcd'"),")."),(0,n.kt)("p",null,"Une alarme WARNING sera d\xe9clench\xe9e si le nombre de paquets ",(0,n.kt)("em",{parentName:"p"},"dropped")," par une r\xe8gle ",(0,n.kt)("em",{parentName:"p"},"blackhole"),"\nest sup\xe9rieur \xe0 500 sur la p\xe9riode de temps sur lesquelles sont calcul\xe9es les valeurs (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-packets-drop-blackhole='500'"),");\nl'alarme sera de type CRITICAL au-del\xe0 de 1000 paquets ",(0,n.kt)("em",{parentName:"p"},"dropped")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-packets-drop-blackhole='1000'"),")."),(0,n.kt)("p",null,"La liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_transitgateway_api.pl \\\n    --plugin=cloud::aws::transitgateway::plugin \\\n    --mode=traffic \\\n    --help\n")),(0,n.kt)("h4",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,n.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No\nmetrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,n.kt)("p",null,"Cela signifie qu'Amazon Cloudwatch n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,n.kt)("p",null,"Vous pouvez ajouter ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro ",(0,n.kt)("strong",{parentName:"p"},"EXTRAOPTIONS")," du ",(0,n.kt)("em",{parentName:"p"},"Service")," en\nquestion afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."),(0,n.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")),(0,n.kt)("p",null,"Cette erreur signifie que le r\xf4le IAM associ\xe9 au combo access-key/secret-key n'a\npas les droits suffisants pour r\xe9aliser une op\xe9ration donn\xe9e."),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-monitoringeu-west-1amazonawscom443-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |")),(0,n.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant :\n",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |"),"."),(0,n.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API AWS Cloudwatch."),(0,n.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."))}f.isMDXComponent=!0}}]);