"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[98982],{93532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),i=n(51715),a=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"applications-monitoring-mip-restapi",title:"Maltem Insight Rest API"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",title:"Maltem Insight Rest API",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-mip-restapi",title:"Maltem Insight Rest API"},sidebar:"pp",previous:{title:"Lync 2013",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-lync-2013-mssql"},next:{title:"McAfee Web Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"MIP",id:"mip",level:3},{value:"Centreon",id:"centreon",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4tes",id:"h\xf4tes",level:3},{value:"Services",id:"services",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,p=o(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Maltem Insight Performance (MIP) d\xe9veloppe et int\xe8gre des solutions permettant la mesure du ressenti utilisateurs. Ces mesures prennent la forme de sc\xe9narios personnalis\xe9s sur les applications web comme les clients riches. MIP met \xe0 disposition une API pour r\xe9cup\xe9rer les m\xe9triques et les statuts associ\xe9s \xe0 ces sc\xe9narios."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Une instance MIP expose une Rest API au format JSON. Le Plugin Centreon utilise ce biais pour r\xe9cup\xe9rer les donn\xe9es. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(71664).Z,width:"1050",height:"1035"})),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Ce connecteur a \xe9t\xe9 test\xe9 et valid\xe9 avec MIP en version 6.4.90"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"mip"},"MIP"),(0,r.kt)("p",null,"Afin de pouvoir interroger l'API, il est n\xe9cessaire d'avoir \xe0 disposition une cl\xe9 d'API valide. MIP vous met \xe0 disposition cette cl\xe9 au travers de son service de support. "),(0,r.kt)("h3",{id:"centreon"},"Centreon"),(0,r.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Sur chaque collecteur se connectant \xe0 une instance MIP:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision via la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),": ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"install_epp",src:n(76338).Z,width:"644",height:"446"}))),(0,r.kt)(a.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Sur chaque collecteur se connectant \xe0 une instance MIP:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur votre serveur Central: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y centreon-pack-applications-monitoring-mip-restapi`\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision via la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"install_epp",src:n(76338).Z,width:"644",height:"446"})))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4tes"},"H\xf4tes"),(0,r.kt)("p",null,"D\xe9ployez votre h\xf4te et appliquez lui le mod\xe8le ",(0,r.kt)("strong",{parentName:"p"},"App-Monitoring-Mip-Restapi-custom"),". Les macros suivantes doivent \xeatre renseign\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocole utilis\xe9 pour se connecter \xe0 l'API MIP. D\xe9faut : https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port utilis\xe9 pour se connecter \xe0 l'API MIP. D\xe9faut : 443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIHOSTNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FQDN de l'instance MIP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIKEY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cl\xe9 de l'API MIP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N'importe quelle option suppl\xe9mentaire utile (proxy, http-backend, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIPAPITIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timeout des appels \xe0 l'API")))),(0,r.kt)("p",null,"Il n'est pas n\xe9cessaire de mettre la case \"Cr\xe9er les services li\xe9s au mod\xe8le\" \xe0 'Oui' pour cet H\xf4te. "),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"Il est recommand\xe9 d'utiliser la r\xe8gle de d\xe9couverte associ\xe9e au connecteur de supervision pour d\xe9ployer les Services. Voici un guide pas-\xe0-pas pour faire cela:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Rendez-vous dans le menu "Configuration > Services" et cliquer sur "Scan" dans le sous-menu "D\xe9couverte"'),(0,r.kt)("li",{parentName:"ul"},'Compl\xe9ter le champ "H\xf4te" avec le nom utilis\xe9 dans la section pr\xe9c\xe9dente'),(0,r.kt)("li",{parentName:"ul"},"Choisir 'App-Monitoring-Mip-Scenarios' dans la liste d\xe9roulante \"R\xe8gle\" sur la droite"),(0,r.kt)("li",{parentName:"ul"},"Cliquer sur 'Scan' pour lancer la d\xe9couverte "),(0,r.kt)("li",{parentName:"ul"},"Une fois la liste des sc\xe9narios disponible, cocher les cases correspondant aux services \xe0 superviser"),(0,r.kt)("li",{parentName:"ul"},"Sauvegarder ce formulaire pour cr\xe9er les Services")))}f.isMDXComponent=!0},71664:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mip-connector-architecture-37dfc53097491d8dbcece3d486beff42.png"},76338:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mip-epp-install-cd3e254c88403319f3cecacb1c3b160f.png"}}]);