"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52912],{13876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>m,toc:()=>c});n(67294);var a=n(3905),r=n(51715),o=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"cloud-prometheus-api",title:"Prometheus Server"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-prometheus-api",id:"integrations/plugin-packs/procedures/cloud-prometheus-api",title:"Prometheus Server",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-prometheus-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-prometheus-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-prometheus-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-prometheus-api.md",tags:[],version:"current",frontMatter:{id:"cloud-prometheus-api",title:"Prometheus Server"},sidebar:"pp",previous:{title:"OVH",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-ovh-restapi"},next:{title:"Talend TMC API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-talend-tmc-api"}},d={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment tester le Plugin en ligne de commande et \xe0 quoi correspondent les options?",id:"comment-tester-le-plugin-en-ligne-de-commande-et-\xe0-quoi-correspondent-les-options",level:3},{value:"Comment utiliser le mode Expression (g\xe9n\xe9rique) ?",id:"comment-utiliser-le-mode-expression-g\xe9n\xe9rique-",level:3},{value:"Option <code>--query</code> et Macro QUERIES associ\xe9e",id:"option---query-et-macro-queries-associ\xe9e",level:4},{value:"Option <code>--instance</code> et Macro associ\xe9e",id:"option---instance-et-macro-associ\xe9e",level:4},{value:"Options <code>--multiple-output</code>/<code>--output</code> et macros MULTIPLEOUTPUT/OUTPUT associ\xe9es",id:"options---multiple-output--output-et-macros-multipleoutputoutput-associ\xe9es",level:4},{value:"Options <code>--*-status</code> et macros *STATUS associ\xe9es",id:"options----status-et-macros-status-associ\xe9es",level:4},{value:"Sortie du Plugin et r\xe9sum\xe9 des macros",id:"sortie-du-plugin-et-r\xe9sum\xe9-des-macros",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: 500 Can&#39;t connect to amzprometheus.int.centreon.com:9090 (&lt;error_text) |",id:"unknown-500-cant-connect-to-amzprometheusintcentreoncom9090-error_text-",level:3},{value:"UNKNOWN: 400 Bad Request |",id:"unknown-400-bad-request-",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,u=i(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,u),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("strong",{parentName:"p"},"Prometheus Server")," apporte 2 mod\xe8les d'h\xf4te diff\xe9rents :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-Prometheus-Api-custom"),(0,a.kt)("li",{parentName:"ul"},"Cloud-Prometheus-Target-Name-Api-custom")),(0,a.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Expression"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Prometheus-Expression-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Permet la supervision de n'importe quelle m\xe9trique collect\xe9e et stock\xe9e par Prometheus"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Target-Name-Status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Prometheus-Target-Name-Status-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le status des targets Prometheus"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Target-Status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Prometheus-Target-Status-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le status de toutes les targets Prometheus"),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("strong",{parentName:"p"},"Prometheus Server")," inclut un fournisseur de d\xe9couverte\nd'h\xf4tes nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Prometheus Targets"),". Celui-ci permet de d\xe9couvrir l'ensemble targets supervis\xe9s par un serveur Prometheus :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(99526).Z,width:"635",height:"198"})),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Expression",label:"Expression",mdxType:"TabItem"},(0,a.kt)("p",null,"Mode g\xe9n\xe9rique pour ex\xe9cuter des requ\xeates PromQL."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(o.Z,{value:"Target-Name-Status",label:"Target-Name-Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.down.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.dropped.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.unknown.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.up.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"targets"),"#status"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(o.Z,{value:"Target-Status",label:"Target-Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.down.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.dropped.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.unknown.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"targets.up.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"targets"),"#status"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Le Collecteur Centreon doit \xeatre en mesure d'executer des requ\xeates HTTP(S) vers le\nServeur Prometheus."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"Prometheus Server")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Prometheus-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"Prometheus Server")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"Prometheus Server")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Prometheus-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"Prometheus Server")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-prometheus-api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"Prometheus Server")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Cloud-Prometheus-Api-Custom",label:"Cloud-Prometheus-Api-Custom",mdxType:"TabItem"},(0,a.kt)("p",null,"Mod\xe8le permettant la supervision du serveur Prometheus."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,a.kt)("strong",{parentName:"li"},"Prometheus Server"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"Cloud-Prometheus-Api-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '9090')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '/api/v1')"))))),(0,a.kt)(o.Z,{value:"Cloud-Prometheus-Target-Name-Api-Custom",label:"Cloud-Prometheus-Target-Name-Api-Custom",mdxType:"TabItem"},(0,a.kt)("p",null,"Mod\xe8le permettant la supervision de targets Prometheus."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre target."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"Cloud-Prometheus-Target-Name-Api-Custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERLABEL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter label to filter on a specific target. Example: 'instance,10.10.1.199:9182'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIHOSTNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Prometheus server name or IP address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '9090')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMETHEUSAPIURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '/api/v1')")))))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-le-plugin-en-ligne-de-commande-et-\xe0-quoi-correspondent-les-options"},"Comment tester le Plugin en ligne de commande et \xe0 quoi correspondent les options?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Le mode d\xe9crit ci-dessous ne fonctionne que lorsque le mod\xe8le est appliqu\xe9 sur\nun h\xf4te \xe9tant un serveur Prometheus.")),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, connectez-vous au Collecteur Centreon et utilisez l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," pour lancer la commande suivante: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_prometheus_api.pl \\\n    --plugin=cloud::prometheus::restapi::plugin \\\n    --mode=target-status \\\n    --hostname=amzprometheus.int.centreon.com \\\n    --url-path='/api/v1' --port='9090' --proto='http' \\\n    --filter-label='job,coredns' \\\n    --warning-status='' --critical-status='%{health} !~ /up/' \n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Targets Active: 2, Dropped: 175, Up: 2, Down: 0, Unknown: 0 - All targets status are ok | 'targets.active.count'=2;;;0; 'targets.dropped.count'=175;;;0; 'targets.up.count'=2;;;0; 'targets.down.count'=0;;;0; 'targets.unknown.count'=0;;;0;\nTarget 'http://10.244.1.249:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-g4hmt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.1.249:9153][job = coredns][endpoint = http-metrics]\nTarget 'http://10.244.2.5:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-vh9zt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.2.5:9153][job = coredns][endpoint = http-metrics]\n")),(0,a.kt)("p",null,"La commande ci-dessus v\xe9rifie l'\xe9tat des targets (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=target-status"),") supervis\xe9es par un serveur Prometheus\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=amzprometheus.int.centreon.com"),") exposant son API en http et \xe9coutant sur le port 9090\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--port='9090' --proto='http'"),"). "),(0,a.kt)("p",null,"Seules les targets ayant comme job label ",(0,a.kt)("inlineCode",{parentName:"p"},"coredns")," sont v\xe9rifi\xe9es (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-label='job,coredns'"),"). "),(0,a.kt)("p",null,"La commande renverra un \xe9tat CRITICAL si une des targets a un \xe9tat qui est diff\xe9rent de ",(0,a.kt)("inlineCode",{parentName:"p"},"up"),". "),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_prometheus_api.pl \\\n    --plugin=cloud::prometheus::restapi::plugin \\\n    --mode=target-status \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_prometheus_api.pl \\\n    --plugin=cloud::prometheus::restapi::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"comment-utiliser-le-mode-expression-g\xe9n\xe9rique-"},"Comment utiliser le mode Expression (g\xe9n\xe9rique) ?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note : Ce mode peut \xeatre utilis\xe9 \xe0 la fois directement sur un h\xf4te \xe9tant un\nserveur Prometheus et \xe0 la fois sur un h\xf4te pour lequel Prometheus r\xe9cup\xe8re des\nm\xe9triques. Dans les deux cas, l'h\xf4te doit h\xe9rit\xe9 du mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"Cloud-Prometheus-Api-custom"),"\net le service doit \xeatre cr\xe9\xe9 manuellement au moyen du mod\xe8le de service ",(0,a.kt)("em",{parentName:"p"},"Cloud-Prometheus-Expression-Api-custom"))),(0,a.kt)("p",null,"Voici un exemple pour illustrer comment le mode ",(0,a.kt)("em",{parentName:"p"},"Expression")," fonctionne : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_prometheus_api.pl \\\n    --plugin=cloud::prometheus::restapi::plugin \\\n    --mode=expression \\\n    --hostname=amzprometheus.int.centreon.com \\\n    --url-path='/api/v1' --port='9090' --proto='http' \\\n    --query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100' \\\n    --output='%{instance} CPU Requests: %{cpu_requests}%' --multiple-output='Nodes CPU Requests within bounds' \\\n    --instance='node' \\\n    --warning-status='%{cpu_requests} > 60' --critical-status='%{cpu_requests} > 70' \\\n    --use-new-perfdata --verbose \n")),(0,a.kt)("h4",{id:"option---query-et-macro-queries-associ\xe9e"},"Option ",(0,a.kt)("inlineCode",{parentName:"h4"},"--query")," et Macro QUERIES associ\xe9e"),(0,a.kt)("p",null,"L'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--query")," permet de d\xe9finir deux param\xe8tres : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le nom de la m\xe9trique pour Centreon (",(0,a.kt)("inlineCode",{parentName:"li"},"cpu_requests"),")"),(0,a.kt)("li",{parentName:"ul"},"la requ\xeate PromQL (",(0,a.kt)("inlineCode",{parentName:"li"},"sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100"),")")),(0,a.kt)("p",null,"Dans la configuration du service, vous pouvez sp\xe9cifier plusieurs requ\xeates c'est pour cette raison\nque la macro ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERIES")," inclut exceptionnellement la d\xe9finition du nom de la m\xe9trique.\nDans le cas ci-dessus, la macro ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERIES")," vaudrait ",(0,a.kt)("inlineCode",{parentName:"p"},"--query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'"),"."),(0,a.kt)("h4",{id:"option---instance-et-macro-associ\xe9e"},"Option ",(0,a.kt)("inlineCode",{parentName:"h4"},"--instance")," et Macro associ\xe9e"),(0,a.kt)("p",null,"L'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--instance")," permet de pr\xe9ciser le label utilis\xe9 dans les graphs. La macro ",(0,a.kt)("inlineCode",{parentName:"p"},"MACRO"),"\ndans cet exemple serait ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," gr\xe2ce \xe0 l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--instance='node'"),"."),(0,a.kt)("h4",{id:"options---multiple-output--output-et-macros-multipleoutputoutput-associ\xe9es"},"Options ",(0,a.kt)("inlineCode",{parentName:"h4"},"--multiple-output"),"/",(0,a.kt)("inlineCode",{parentName:"h4"},"--output")," et macros MULTIPLEOUTPUT/OUTPUT associ\xe9es"),(0,a.kt)("p",null,"Les options d'output permettent de personnaliser les messages de sortie dans les cas suivants : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supervision d'une m\xe9trique sur plusieurs instances"),(0,a.kt)("li",{parentName:"ul"},"Check retournant une erreur ")),(0,a.kt)("p",null,"Les valeurs peuvent \xeatre sp\xe9cifi\xe9es via les macros correspondantes. Dans l'exemple ci-dessus la macro\n",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT")," vaudrait ",(0,a.kt)("inlineCode",{parentName:"p"},'"%{instance} CPU Requests: %{cpu_requests}%"'),". Notez que le label Centreon d\xe9fini dans l'option\n",(0,a.kt)("inlineCode",{parentName:"p"},"--query")," est utilis\xe9e pour afficher la valeur obtenue. La variable ",(0,a.kt)("inlineCode",{parentName:"p"},"%{instance}")," est aussi utilis\xe9e pour afficher le nom\ndu node."),(0,a.kt)("p",null,"La macro ",(0,a.kt)("inlineCode",{parentName:"p"},"MULTIOUTPUT")," vaudrait ",(0,a.kt)("inlineCode",{parentName:"p"},"Nodes CPU Requests within bounds"),"."),(0,a.kt)("h4",{id:"options----status-et-macros-status-associ\xe9es"},"Options ",(0,a.kt)("inlineCode",{parentName:"h4"},"--\\*-status")," et macros *STATUS associ\xe9es"),(0,a.kt)("p",null,"Les options ",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-status")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-status")," permettent de d\xe9finir les seuils d'alerte."),(0,a.kt)("p",null,"Toujours dans l'exemple ci-dessus, l'alerte ",(0,a.kt)("strong",{parentName:"p"},"WARNING")," sera d\xe9clench\xe9e quand la valeur de ",(0,a.kt)("inlineCode",{parentName:"p"},"cpu_requests"),"\nd\xe9passera ",(0,a.kt)("inlineCode",{parentName:"p"},"60")," et ",(0,a.kt)("strong",{parentName:"p"},"CRITICAL")," quand elle d\xe9passera ",(0,a.kt)("inlineCode",{parentName:"p"},"70"),"."),(0,a.kt)("p",null,"La macro ",(0,a.kt)("inlineCode",{parentName:"p"},"WARNINGSTATUS")," vaudrait ",(0,a.kt)("inlineCode",{parentName:"p"},"'%{cpu_requests} > 60'"),".\nLa macro ",(0,a.kt)("inlineCode",{parentName:"p"},"CRITICALSTATUS")," vaudrait ",(0,a.kt)("inlineCode",{parentName:"p"},"'%{cpu_requests} > 70'"),"."),(0,a.kt)("p",null,"Notez que le label Centreon sp\xe9cifi\xe9 dans l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--query")," est utilis\xe9 \xe0 nouveau pour comparer les valeurs\naux seuils. "),(0,a.kt)("h4",{id:"sortie-du-plugin-et-r\xe9sum\xe9-des-macros"},"Sortie du Plugin et r\xe9sum\xe9 des macros"),(0,a.kt)("p",null,"Si tout fonctionne correctement, un message similaire au suivant devrait s'afficher:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Nodes CPU Requests within bounds | 'amzkubemaster.int.centreon.com#cpu_requests'=37.5;;;; 'amzkubenode1.int.centreon.com#cpu_requests'=35;;;; 'amzkubenode2.int.centreon.com#cpu_requests'=30;;;;\namzkubemaster.int.centreon.com CPU Requests: 37.5%\namzkubenode1.int.centreon.com CPU Requests: 35%\namzkubenode2.int.centreon.com CPU Requests: 30%\n")),(0,a.kt)("p",null,"Voici un r\xe9sum\xe9 des macros \xe0 d\xe9finir au niveau du Service:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"QUERIES"),(0,a.kt)("td",{parentName:"tr",align:"left"},"--query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"INSTANCE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"URL Path to reach API (Default: '/api/v1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MULTIPLEOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nodes CPU Requests within bounds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"WARNINGSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%{cpu_requests} > 60")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CRITICALSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%{cpu_requests} > 70")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"--verbose --use-new-perfdata")))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-500-cant-connect-to-amzprometheusintcentreoncom9090-error_text-"},"UNKNOWN: 500 Can't connect to amzprometheus.int.centreon.com:9090 (<error_text) |"),(0,a.kt)("p",null,"Lorsque cette erreur est renvoy\xe9e, v\xe9rifier que les informations pour contacter\nle serveur Prometheus sont correctes (Port, Nom d'H\xf4te) et que la connexion est\npossible."),(0,a.kt)("p",null,"Le contenu de la balise <error_text> donne des indications suppl\xe9mentaires sur la\ncause du dysfonctionnement."),(0,a.kt)("h3",{id:"unknown-400-bad-request-"},"UNKNOWN: 400 Bad Request |"),(0,a.kt)("p",null,"La requ\xeate PromQL contient probablement une erreur de syntaxe. Il est n\xe9cessaire\nde valider son fonctionnement dans l'interface Prometheus. "),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0},99526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-prometheus-api-provider-f12808759a770d354b7062349dc4b81f.png"}}]);