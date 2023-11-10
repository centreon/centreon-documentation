"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77312],{87984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>g});n(67294);var r=n(3905),i=n(51715),l=n(7626);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"ntopng",title:"Widget NtopNG"},u=void 0,c={unversionedId:"integrations/npm/ntopng",id:"version-23.10/integrations/npm/ntopng",title:"Widget NtopNG",description:"Utilisez le widget NtopNG dans des vues personnalis\xe9es pour visualiser des donn\xe9es sur l'utilisation du r\xe9seau collect\xe9es par une instance NtopNG.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/npm/ntopng.md",sourceDirName:"integrations/npm",slug:"/integrations/npm/ntopng",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/integrations/npm/ntopng",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/npm/ntopng.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"ntopng",title:"Widget NtopNG"},sidebar:"version-23.10/docs",previous:{title:"Telegram Bot notifications",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/integrations/notifications/plugin-telegram"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/mobile/introduction"}},d={},g=[{value:"Installer le widget",id:"installer-le-widget",level:2},{value:"Configurer le widget",id:"configurer-le-widget",level:2},{value:"NtopNG Probe",id:"ntopng-probe",level:3},{value:"View",id:"view",level:3},{value:"Filters",id:"filters",level:3},{value:"Misc",id:"misc",level:3},{value:"Exemples",id:"exemples",level:2},{value:"Top N Local address",id:"top-n-local-address",level:3},{value:"Top N Remote address",id:"top-n-remote-address",level:3},{value:"Top N Flows",id:"top-n-flows",level:3},{value:"Top N Applications",id:"top-n-applications",level:3}],m={toc:g},f="wrapper";function N(e){var{components:t}=e,p=s(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Utilisez le widget NtopNG dans des ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/custom-views"},"vues personnalis\xe9es")," pour visualiser des donn\xe9es sur l'utilisation du r\xe9seau collect\xe9es par une instance NtopNG."),(0,r.kt)("p",null,"Le widget peut afficher les vues suivantes (voir ",(0,r.kt)("a",{parentName:"p",href:"#exemples"},(0,r.kt)("strong",{parentName:"a"},"Exemples"))," ci-dessous) :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top N Local address")," : Affiche les n h\xf4tes locaux qui re\xe7oivent/\xe9mettent le plus de trafic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top N Remote address")," : Affiche les n h\xf4tes distants qui re\xe7oivent/\xe9mettent le plus de trafic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top N Flows")," : Affiche les flux r\xe9seaux les plus importants (client local vers distant)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top N Applications")," : Affiche les n applications qui re\xe7oivent/\xe9mettent le plus de trafic (les flux sont regroup\xe9s par application, protocolaire ou site Web comme Amazon/Google)")),(0,r.kt)("h2",{id:"installer-le-widget"},"Installer le widget"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le paquet suivant sur le serveur central :")),(0,r.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-widget-ntopng-listing\n"))),(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-widget-ntopng-listing\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install centreon-widget-ntopng-listing\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\xc0 la page ",(0,r.kt)("strong",{parentName:"li"},"Administration > Extensions > Gestionnaire"),", installez le widget ",(0,r.kt)("strong",{parentName:"li"},"NtopNG"),".")),(0,r.kt)("h2",{id:"configurer-le-widget"},"Configurer le widget"),(0,r.kt)("p",null,"Pour configurer le widget, cliquez sur l'ic\xf4ne molette dans son coin sup\xe9rieur droit. Une fen\xeatre s'ouvre :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Param\xe8tres",src:n(67452).Z,width:"406",height:"566"})),(0,r.kt)("h3",{id:"ntopng-probe"},"NtopNG Probe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Login")," : Compte qui se connectera \xe0 NtopNG (il est conseill\xe9 d'utiliser un compte non administrateur)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," : Mot de passe du compte"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Probe")," : Adresse IP du serveur NtopNG"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Protocol")," : Protocole de communication (https par d\xe9faut)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," : Port de connexion \xe0 l'interface (TCP/3000 par d\xe9faut)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interface")," : Identifiant de l'interface. Vous pouvez le voir dans l'interface NtopNG, \xe0 la page ",(0,r.kt)("strong",{parentName:"li"},"Interface")," (en s\xe9lectionnant l'interface concern\xe9e) :")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interface ID",src:n(32700).Z,width:"1153",height:"853"})),(0,r.kt)("h3",{id:"view"},"View"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mode : S\xe9lectionner les donn\xe9es que vous souhaitez afficher"),(0,r.kt)("li",{parentName:"ul"},"Top : D\xe9finir le nombre de lignes \xe0 afficher (nombre d'h\xf4tes/applications, etc.)")),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"Ces options ne concernent que la vue ",(0,r.kt)("strong",{parentName:"p"},"Top N Flows"),". Vous pouvez filtrer sur une adresse IP, sur un port, ou sur les deux \xe0 la fois."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IP Address")," : N'afficher que le trafic concernant une adresse IP particuli\xe8re (ne pas utiliser le nom d'h\xf4te)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," : N'afficher que le trafic sur ce port")),(0,r.kt)("h3",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refresh interval (seconds)")," : D\xe9finir \xe0 quelle fr\xe9quence les donn\xe9es doivent \xeatre rafra\xeechies")),(0,r.kt)("h2",{id:"exemples"},"Exemples"),(0,r.kt)("h3",{id:"top-n-local-address"},"Top N Local address"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top N Local address",src:n(91970).Z,width:"1229",height:"381"})),(0,r.kt)("h3",{id:"top-n-remote-address"},"Top N Remote address"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top N Remote address",src:n(12304).Z,width:"1224",height:"375"})),(0,r.kt)("h3",{id:"top-n-flows"},"Top N Flows"),(0,r.kt)("p",null,"Vue sans filtre :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top N Flows",src:n(33439).Z,width:"1236",height:"372"})),(0,r.kt)("p",null,"Vue avec filtre sur une adresse IP :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top N Flows Address Filter",src:n(24459).Z,width:"1235",height:"372"})),(0,r.kt)("p",null,"Vue avec filtre sur un port et une adresse IP :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top N Flows Address Port Filters",src:n(57135).Z,width:"1241",height:"252"})),(0,r.kt)("h3",{id:"top-n-applications"},"Top N Applications"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top N Applications",src:n(1621).Z,width:"1236",height:"470"})))}N.isMDXComponent=!0},32700:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/NtopNG_Interface_ID-9f51c0314743b51c1069fea50af11fe3.png"},67452:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Options-b8f96d50f7d4aab6a01cb30fd9de6b1f.png"},1621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Top_N_Applications-6f896a73e0a253ae4c56928fe7fb9604.png"},33439:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Top_N_Flows-65480fc9bf15b4ff8d355cf3c8bb3e0e.png"},24459:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Top_N_Flows_Address_Filter-f1cda09ca915c673a2bacdf6bcd15172.png"},57135:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Top_N_Flows_Address_Port_Filters-aefba07efa945eaaf352d625183b73fd.png"},91970:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Top_N_Local-ed0ad89b7a90df38526b79ad8bb5d0f1.png"},12304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widget_NtopNG_Top_N_Remote-5edae192fedeb87aef8e46d8a69e07f1.png"}}]);