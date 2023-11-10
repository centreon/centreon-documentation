"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9557],{3136:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>N,frontMatter:()=>o,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"applications-wsus-nsclient",title:"Microsoft WSUS"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-wsus-nsclient",id:"integrations/plugin-packs/procedures/applications-wsus-nsclient",title:"Microsoft WSUS",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-wsus-nsclient.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-wsus-nsclient",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-wsus-nsclient.md",tags:[],version:"current",frontMatter:{id:"applications-wsus-nsclient",title:"Microsoft WSUS"},sidebar:"pp",previous:{title:"Microsoft SCCM",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient"},next:{title:"MS Biztalk",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-biztalk"}},m={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(g,s(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Microsoft WSUS")," apporte 2 mod\xe8les d'h\xf4te diff\xe9rents :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Wsus-NRPE-custom"),(0,n.kt)("li",{parentName:"ul"},"App-Wsus-NSClient-05-Restapi-custom")),(0,n.kt)("p",null,"Ils apportent les mod\xe8les de service suivants: "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Computers-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Computers-Status-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le nombre d'ordinateurs dans chacun des statuts via NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Server-Statistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Server-Statistics-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le plusieurs statistiques du serveur WSUS via NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Synchronisation-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Synchronisation-Status-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la synchronisation des mises \xe0 jour avec le serveur WSUS via NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Update-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Update-Status-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le statut des mises \xe0 jour via NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"))))),(0,n.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Computers-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Computers-Status-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le nombre d'ordinateurs dans chacun des statuts via l'API"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Server-Statistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Server-Statistics-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le plusieurs statistiques du serveur WSUS via l'API"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Synchronisation-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Synchronisation-Status-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la synchronisation des mises \xe0 jour avec le serveur WSUS via l'API"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Update-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Update-Status-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le statut des mises \xe0 jour via l'API"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))))),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Computers-Status",label:"Computers-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"needing-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not-contacted"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unassigned"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"up-to-date"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"with-update-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Server-Statistics",label:"Server-Statistics",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"approved-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"computer-groups"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"computers"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"declined-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"expired-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not-approved-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stale-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updates"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Synchronisation-Status",label:"Synchronisation-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"synchronisation-progress"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"synchronisation-status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-synchronisation-duration"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-synchronisation-status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Update-Status",label:"Update-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"needed-by-computers"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"needing-files"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"up-to-date"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"with-client-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"with-server-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,n.kt)("p",null,"Pour surveiller les ressources ",(0,n.kt)("em",{parentName:"p"},"WSUS Server")," via NRPE, installez la version Centreon de l'agent NSClient++.\nVeuillez suivre notre ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"documentation officielle")," et assurez-vous que le ",(0,n.kt)("strong",{parentName:"p"},"serveur NRPE"),"\nembarqu\xe9 est correctement configur\xe9.")),(0,n.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("p",null,"Pour surveiller les ressources ",(0,n.kt)("em",{parentName:"p"},"WSUS Server")," via NSClient++ API, installez la version Centreon de l'agent NSClient++.\nVeuillez suivre notre ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"documentation officielle")," et assurez-vous que la configuration du ",(0,n.kt)("strong",{parentName:"p"},"serveur Web / RestAPI")," est correcte."))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,n.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,n.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous souhaitez utiliser le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"p"},"NRPE"),", installez le paquet centreon-nrpe3. ")),(0,n.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,n.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,n.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquets\nassoci\xe9 \xe0 sa distribution :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-wsus-nsclient\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-wsus-nsclient\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-wsus-nsclient\n")))),(0,n.kt)("p",null,"Quel que soit le type de la licence (",(0,n.kt)("em",{parentName:"p"},"online")," ou ",(0,n.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,n.kt)("strong",{parentName:"p"},"Microsoft WSUS"),"\ndepuis l'interface web et le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-nrpe3-plugin\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\nyum install centreon-plugin-Operatingsystems-Windows-Restapi\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-nrpe3-plugin\napt install centreon-plugin-operatingsystems-windows-restapi\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,n.kt)("strong",{parentName:"li"},"WSUS Server"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te de votre choix: ",(0,n.kt)("strong",{parentName:"li"},"App-Wsus-NRPE-custom")," ou ",(0,n.kt)("strong",{parentName:"li"},"App-Wsus-NSClient-05-Restapi-custom"),". "),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(D\xe9faut : 'check_centreon_nrpe')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Options sp\xe9cifiques \xe0 NRPE (D\xe9faut: -u -m 8192)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port d'\xe9coute du serveur NRPE (D\xe9faut : '5666')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout (D\xe9faut : '55')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port d'\xe9coute sur serveur WSUS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSSERVER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom/FQDN du serveur WSUS"))))),(0,n.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mot de passe pour l'authentification basique de l'API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port d'\xe9coute de l'API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Protocole de l'API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port d'\xe9coute sur serveur WSUS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSSERVER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom/FQDN du serveur WSUS")))))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les exemples suivants sont donn\xe9s pour le mod\xe8le RestAPI.")),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin \\\n    --mode=query \\\n    --hostname=10.0.0.1 \\\n    --port=\'\' \\\n    --proto=\'\' \\\n    --legacy-password=\'\' \\\n    --command=check_centreon_plugins \\\n    --arg=\'apps::microsoft::wsus::local::plugin\' \\\n    --arg=\'server-statistics\' \\\n    --arg=\' \\\n    --wsus-server="my.wsus.server.domain" \\\n    --wsus-port="443" \\\n    --filter-counters="" \\\n    --warning-computers="" \\\n    --critical-computers="" \\\n    --warning-computer-groups="" \\\n    --critical-computer-groups="" \\\n    --warning-updates="" \\\n    --critical-updates="" \\\n    --warning-approved-updates="" \\\n    --critical-approved-updates="" \\\n    --warning-declined-updates="" \\\n    --critical-declined-updates=""\\\n    --warning-not-approved-updates="" \\\n    --critical-declined-updates="" \\\n    --warning-stale-updates="" \\\n    --critical-stale-updates="" \\\n    --warning-expired-updates="" \\\n    --critical-expired-updates="" \\\n    --verbose\'\\\n    --use-new-perfdata\n')),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Computers: 120 Computer Groups: 6 Updates: 19 Approved Updates: 3 Declined Updates: 14 Not Approved Updates: 22 Stale Updates: 1 Expired Updates: 5 | \n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin \\\n    --mode=query \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);