"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[3255],{98138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-jenkins",title:"Jenkins API"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-jenkins",id:"integrations/plugin-packs/procedures/applications-jenkins",title:"Jenkins API",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-jenkins.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-jenkins",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-jenkins",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-jenkins.md",tags:[],version:"current",frontMatter:{id:"applications-jenkins",title:"Jenkins API"},sidebar:"pp",previous:{title:"JBoss Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-jboss-jmx"},next:{title:"JVM Actuator",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-jvm-actuator"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:m},g="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le Pack Centreon ",(0,a.kt)("strong",{parentName:"p"},"Jenkins API")," apporte un mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App-Jenkins-Api-custom")),(0,a.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Jobs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Jenkins-Jobs-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'\xe9tat des jobs"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Jenkins-Api-Job-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les jobs et supervise le statut")))),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique de services et sa ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte"},"planification"),"."),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Jobs",label:"Jobs",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"job_name"),"#job.score.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"job_name"),"#job.violations.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,a.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,a.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,a.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,a.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,a.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquets\nassoci\xe9 \xe0 sa distribution :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-jenkins\n"))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-jenkins\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-jenkins\n")))),(0,a.kt)("p",null,"Quel que soit le type de la licence (",(0,a.kt)("em",{parentName:"p"},"online")," ou ",(0,a.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,a.kt)("strong",{parentName:"p"},"Jenkins API"),"\ndepuis l'interface web et le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,a.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Jenkins\n"))),(0,a.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Jenkins\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-jenkins\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("strong",{parentName:"li"},"Nom"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,a.kt)("strong",{parentName:"li"},"Jenkins"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"App-Jenkins-Api-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"JENKINSAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"JENKINSAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"JENKINSAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : '443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"JENKINSAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"JENKINSAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"--insecure")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_jenkins.pl \\\n    --plugin=apps::jenkins::plugin \\\n    --mode=jobs \\\n    --hostname='10.0.0.1' \\\n    --port='443' \\\n    --proto='https' \\\n    --username='myuser' \\\n    --password='mytoken' \\\n    --filter-job-name='centreon-plugins' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All jobs are ok | 'centreon-plugins-stable#job.score.percentage'=100.00%;;;0;100 'centreon-plugins-stable#job.violations.count'=0;;;0; 'centreon-plugins-testing#job.score.percentage'=100.00%;;;0;100 'centreon-plugins-testing#job.violations.count'=0;;;0; 'centreon-plugins/update-jenkinsfile-to-s3-alt-apt#job.score.percentage'=100.00%;;;0;100 'centreon-plugins/update-jenkinsfile-to-s3-alt-apt#job.violations.count'=0;;;0;\nJob 'centreon-plugins-stable' score: 100.00 %, violations: 0\nJob 'centreon-plugins-testing' score: 100.00 %, violations: 0\nJob 'centreon-plugins/update-jenkinsfile-to-s3-alt-apt' score: 100.00 %, violations: 0\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_jenkins.pl \\\n    --plugin=apps::jenkins::plugin \\\n    --mode=jobs \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_jenkins.pl \\\n    --plugin=apps::jenkins::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}b.isMDXComponent=!0}}]);