"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[67587],{82457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-monitoring-centreon-sql-metrics",title:"Centreon SQL Metrics"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics",title:"Centreon SQL Metrics",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-sql-metrics",title:"Centreon SQL Metrics"},sidebar:"pp",previous:{title:"Centreon Poller",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller"},next:{title:"Centreon-HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Ce connecteur de supervision construit des m\xe9triques sur la base d'informations r\xe9cup\xe9r\xe9es dans la base de donn\xe9es temps-r\xe9el de Centreon. Un article sur la plateforme the Watch vous offre une vue d'ensemble de ses capacit\xe9s autour des ",(0,r.kt)("a",{parentName:"p",href:"https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296"},"courbes virtuelles"),"."),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon SQL Metrics apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App-Monitoring-Centreon-SQL-Metrics-custom")),(0,r.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Poller-Delay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-SQL-Poller-Delay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le d\xe9lai dans la mise \xe0 jour des collecteurs"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Virtual-Curve"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-SQL-Virtual-Curves"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Combine des m\xe9triques existantes et effectue des calculs suppl\xe9mentaires"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Poller-Delay",label:"Poller-Delay",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"centreon.poller.delay.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,r.kt)(l.Z,{value:"Virtual-Curve",label:"Virtual-Curve",mdxType:"TabItem"},(0,r.kt)("p",null,"Les m\xe9triques d\xe9pendent de la configuration du service. Voir l'article sur ",(0,r.kt)("a",{parentName:"p",href:"https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296"},"The Watch"),"."))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Le collecteur ex\xe9cutant le contr\xf4le doit pouvoir se connecter au serveur de base de donn\xe9es Centreon via le port\n3306/TCP gr\xe2ce aux valeurs fournies par les options ",(0,r.kt)("strong",{parentName:"p"},"--username")," et ",(0,r.kt)("strong",{parentName:"p"},"--password"),". "),(0,r.kt)("p",null,"L'utilisateur doit avoir les droits de r\xe9aliser un 'SELECT' sur les tables ",(0,r.kt)("strong",{parentName:"p"},"index_data"),", ",(0,r.kt)("strong",{parentName:"p"},"metrics")," et ",(0,r.kt)("strong",{parentName:"p"},"instances")," de la base ",(0,r.kt)("strong",{parentName:"p"},"centreon_storage"),". "),(0,r.kt)("p",null,"Pour le service ",(0,r.kt)("strong",{parentName:"p"},"Virtual-Curve"),", le fichier de configuration associ\xe9 doit pouvoir \xeatre lu par l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur le serveur Central :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Centreon SQL Metrics")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le plugin Centreon sur le serveur Central :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur central, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"Centreon SQL Metrics")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-centreon-poller\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Centreon SQL Metrics")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"p"},"Nom"),", ",(0,r.kt)("strong",{parentName:"p"},"Alias")," et ",(0,r.kt)("strong",{parentName:"p"},"IP Address/DNS")," correspondant \xe0 votre serveur de base de donn\xe9es Centreon. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Appliquez le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"p"},"App-Monitoring-Centreon-SQL-Metrics-custom"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("em",{parentName:"p"},"Obligatoire"),") doivent \xeatre renseign\xe9es."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONDATABASEUSER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom d'utilisateur pour la base centreon_storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONDATABASEPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mot de passe pour la base centreon_storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires pour les contr\xf4les")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \\\n    --plugin=database::mysql::plugin \\\n    --dyn-mode=apps::centreon::sql::mode::pollerdelay \\\n    --host=10.25.14.139 \\\n    --username=readerstorage \\\n    --password=rostorage\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All poller delay for last update are ok | 'Central#centreon.poller.delay.seconds'=30s;;;; 'poller#centreon.poller.delay.seconds'=14s;;;;\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \\\n    --plugin=database::mysql::plugin \\\n    --dyn-mode=apps::centreon::sql::mode::pollerdelay \\\n    --help\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e")," pour le diagnostic des erreurs communes des plugins Centreon."))}f.isMDXComponent=!0}}]);