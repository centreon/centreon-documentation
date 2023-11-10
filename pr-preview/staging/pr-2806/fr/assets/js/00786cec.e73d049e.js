"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[27813],{51060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-dynamics-365-nsclient-05-nrpe",title:"Microsoft Dynamics 365 NRPE 0.5"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",id:"integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",title:"Microsoft Dynamics 365 NRPE 0.5",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-dynamics-365-nsclient-05-nrpe.md",tags:[],version:"current",frontMatter:{id:"applications-dynamics-365-nsclient-05-nrpe",title:"Microsoft Dynamics 365 NRPE 0.5"},sidebar:"pp",previous:{title:"Microsoft Dynamics NRPE 0.5",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-dynamics-ax-nsclient-05-nrpe"},next:{title:"Microsoft Exchange NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-exchange-nrpe"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration de l&#39;h\xf4te",id:"configuration-de-lh\xf4te",level:2}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Ce connecteur de supervision permet d'obtenir des m\xe9triques et statuts collect\xe9s gr\xe2ce \xe0 l'agent de supervision NSClient++\net son serveur NRPE int\xe9gr\xe9."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS Windows Server \xe0 partir de la version 2003 SP2"),(0,r.kt)("li",{parentName:"ul"},"Poste de travail Windows \xe0 partir de la version XP")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"New-Orders",label:"New-Orders",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom du service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"New-Orders"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifiez la pr\xe9sence et l'\xe2ge des nouvelles commandes.")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,r.kt)("p",null,"Pour superviser ",(0,r.kt)("strong",{parentName:"p"},"Dynamics AX")," via NRPE, installez la version packag\xe9e Centreon de l'agent NSClient++. Suivez notre ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"documentation officielle"),"\net assurez-vous que la configuration du ",(0,r.kt)("strong",{parentName:"p"},"Serveur NRPE")," est correcte."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le package Centreon NRPE Client sur chaque collecteur :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installez le Pack Centreon ",(0,r.kt)("strong",{parentName:"li"},"Dynamics 365"),"\ndepuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),"."))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le package Centreon NRPE Client sur chaque collecteur :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installez le RPM du Pack Centreon sur le serveur Central :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe centreon-pack-applications-dynamics-365-nsclient-05-nrpe\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installez le Pack Centreon ",(0,r.kt)("strong",{parentName:"li"},"Dynamics 365"),"\ndepuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")))),(0,r.kt)("h2",{id:"configuration-de-lh\xf4te"},"Configuration de l'h\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 Centreon et ajoutez un nouvel h\xf4te via ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes > H\xf4tes"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le ",(0,r.kt)("strong",{parentName:"li"},"App-Dynamics-365-NRPE-custom")," et configurez toutes les macros obligatoires :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binaire du plugin NRPE \xe0 utiliser (D\xe9faut: 'check_centreon_nrpe3')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port NRPE du serveur cible (D\xe9faut: '5666')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Valeur timeout (D\xe9faut: '30')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 utiliser avec le binaire NRPE (D\xe9faut: '-2 -u -P 8192')")))))}f.isMDXComponent=!0}}]);