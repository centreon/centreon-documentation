"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[51258],{66151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-oracle-ucp-jmx",title:"Oracle UCP JMX"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-oracle-ucp-jmx",id:"integrations/plugin-packs/procedures/applications-oracle-ucp-jmx",title:"Oracle UCP JMX",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx.md",tags:[],version:"current",frontMatter:{id:"applications-oracle-ucp-jmx",title:"Oracle UCP JMX"},sidebar:"pp",previous:{title:"Oracle GoldenGate SSH",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh"},next:{title:"Oracle VM Manager API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api"}},m={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le Pack Centreon ",(0,a.kt)("strong",{parentName:"p"},"Oracle UCP JMX")," apporte un mod\xe8le d'h\xf4te pour la supervision d'",(0,a.kt)("strong",{parentName:"p"},"Oracle Universal Connection Pool")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Oracle-Ucp-JMX-custom")),(0,a.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Connection-Pools"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Oracle-Ucp-Connection-Pools-JMX"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier l'utilisation des pools de connexion"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Oracle-Ucp-Jmx-Connection-Pool-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les pools de connexion et supervise l'utilisation")))),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique de services et sa ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte"},"planification"),"."),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Connection-Pools",label:"Connection-Pools",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"pool_name"),"#connection_pool.usage.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"pool_name"),"#connection_pool.free.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"pool_name"),"#connection_pool.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Veuillez installer l'agent Jolokia sur votre JVM : ",(0,a.kt)("a",{parentName:"p",href:"https://jolokia.org/download.html"},"Jolokia download page"),".\nDemandez \xe0 votre administrateur de le d\xe9ployer et de vous fournir l'URL."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,a.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,a.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,a.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,a.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,a.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquets\nassoci\xe9 \xe0 sa distribution :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-oracle-ucp-jmx\n"))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-oracle-ucp-jmx\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-oracle-ucp-jmx\n")))),(0,a.kt)("p",null,"Quel que soit le type de la licence (",(0,a.kt)("em",{parentName:"p"},"online")," ou ",(0,a.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,a.kt)("strong",{parentName:"p"},"Oracle UCP JMX"),"\ndepuis l'interface web et le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,a.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Oracle-Ucp-Jmx\n"))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Ucp-Jmx\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-oracle-ucp-jmx\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,a.kt)("strong",{parentName:"li"},"Oracle UCP"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"App-Oracle-Ucp-JMX-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"JOLOKIAURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Jolokia URL (eg: ",(0,a.kt)("a",{parentName:"td",href:"http://jvm.centreon.com:8080/jolokia"},"http://jvm.centreon.com:8080/jolokia"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"JOLOKIAPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"JOLOKIAUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"JOLOKIAEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \\\n    --plugin=apps::oracle::ucp::jmx::plugin \\\n    --mode=connection-pools \\\n    --url='http://jvm.centreon.com:8080/jolokia' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All connection pools are ok | 'DATASOURCE_FLUX#connection_pool.usage.count'=2B;;;0;50 'DATASOURCE_FLUX#connection_pool.free.count'=48B;;;0;50 'DATASOURCE_FLUX#connection_pool.usage.percentage'=4.00%;;;0;100 'DATASOURCE_MS#connection_pool.usage.count'=2B;;;0;50 'DATASOURCE_MS#connection_pool.free.count'=48B;;;0;50 'DATASOURCE_MS#connection_pool.usage.percentage'=4.00%;;;0;100\nConnection pool 'DATASOURCE_FLUX' total: 50 used: 2 (4.00%) free: 48 (96.00%)\nConnection pool 'DATASOURCE_MS' total: 50 used: 2 (4.00%) free: 48 (96.00%)\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \\\n    --plugin=apps::oracle::ucp::jmx::plugin \\\n    --mode=connection-pools \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \\\n    --plugin=apps::oracle::ucp::jmx::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}f.isMDXComponent=!0}}]);