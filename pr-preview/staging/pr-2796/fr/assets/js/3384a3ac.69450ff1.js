"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[74787],{90071:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>k});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",id:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe.md",tags:[],version:"current",frontMatter:{id:"operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5"},sidebar:"pp",previous:{title:"Windows NRPE (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nrpe"},next:{title:"Windows NSClient API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"}},N={},k=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration de l&#39;h\xf4te",id:"configuration-de-lh\xf4te",level:2},{value:"D\xe9pannage",id:"d\xe9pannage",level:2}],u={toc:k},g="wrapper";function c(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(g,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Ce connecteur de supervision permet de r\xe9cup\xe9rer les m\xe9triques et les statuts collect\xe9s gr\xe2ce \xe0 l'agent de monitoring NSClient++ et son serveur NRPE embarqu\xe9. "),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le pack ",(0,n.kt)("strong",{parentName:"p"},"Windows NSClient 0.5")," apporte 1 mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OS-Windows-NSClient-05-NRPE-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Par d\xe9faut"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Active-Sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Counter-Active-Sessions-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier les sessions actives en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Counter-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Counter-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier un compteur g\xe9n\xe9rique en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Cpu-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'utilisation du Cpu en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Disks-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'utilisation des disques en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Eventlog-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Eventlog-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier les journaux d'\xe9v\xe8nements en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Files-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Files-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier des fichiers (date, taille, etc...) en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Logfiles-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Logfiles-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier un fichier de log en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Memory-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'utilisation de la m\xe9moire en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ntp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Ntp-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier la synchronisation du temps Ntp en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Pending-Reboot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Pending-Reboot-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier si un reboot est attendu en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Process-generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Process-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'\xe9tat d'un processus en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Remote-Ping"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Remote-Ping-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'\xe9tat d'un hote via un ping distant en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Services-Auto"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Services-Auto-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'\xe9tat des services d\xe9marr\xe9s en automatique en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Services-Generic-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Services-Generic-Name-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'\xe9tat d'un service en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Sessions-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier les sessions en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Swap-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'utilisation du swap en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Task-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Task-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier les t\xe2ches planifi\xe9es en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Updates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-Updates-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier si Windows a des mises \xe0 jour en attente"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Uptime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Uptime-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V\xe9rifier l'uptime en utilisant le protocole NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Service",label:"Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Winfows-NRPE-Disk-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des disques.")))),(0,n.kt)("p",null,"De plus amples informations sur la d\xe9couverte automatique des services sont disponibles sur la ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"page d\xe9di\xe9e"),"."))),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Counter-Active-Sessions",label:"Counter-Active-Sessions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sessions","_","value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Counter-Generic",label:"Counter-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Counter","_","value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total 5m"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total 1m"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total 5s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Disk",label:"Disk",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,n.kt)(l.Z,{value:"Eventlog-Generic",label:"Eventlog-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"problemCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Files-Generic",label:"Files-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Logfiles-Generic",label:"Logfiles-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","lines"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","warnings"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","criticals"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","unknowns"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,n.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"swap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,n.kt)(l.Z,{value:"Sessions",label:"Sessions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la m\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-created"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-disconnected"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-reconnected"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-active"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-disconnected-current"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Updates",label:"Updates",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"windows.pending.updates.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,n.kt)("p",null,"Pour surveiller les ressources ",(0,n.kt)("em",{parentName:"p"},"Windows")," via NRPE, installez la version Centreon de l'agent NSClient++.\nVeuillez suivre notre ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"documentation officielle")," et assurez-vous que la configuration du ",(0,n.kt)("strong",{parentName:"p"},"serveur NRPE")," est correcte."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le paquet Centreon NRPE Client sur chaque Poller cens\xe9 surveiller les ressources ",(0,n.kt)("em",{parentName:"li"},"Windows"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installez le ",(0,n.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon connecteur de supervision sur la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le paquet Centreon Plugin sur chaque Poller cens\xe9 surveiller les ressources ",(0,n.kt)("em",{parentName:"li"},"Windows"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Installez le RPM ",(0,n.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon Pack sur le serveur Centreon Central:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installez le ",(0,n.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon connecteur de supervision sur la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),".")))),(0,n.kt)("h2",{id:"configuration-de-lh\xf4te"},"Configuration de l'h\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 Centreon et ajoutez un nouvel h\xf4te via ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Remplissez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," et ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," selon les param\xe8tres de votre serveur ",(0,n.kt)("em",{parentName:"li"},"Windows"),"."),(0,n.kt)("li",{parentName:"ul"},"S\xe9lectionnez le mod\xe8le ",(0,n.kt)("em",{parentName:"li"},"OS-Windows-NSClient-05-NRPE-custom")," \xe0 appliquer \xe0 l'h\xf4te."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, remplissez les macros correspondantes. Si vous \xeates en version 21.10 ou sup\xe9rieure et que vous venez d'installer ",(0,n.kt)("strong",{parentName:"li"},"centreon-nrpe3-plugin"),", vous devrez remplacer les valeurs par d\xe9faut des macros par celles en gras :")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"check_centreon_nrpe3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,n.kt)("td",{parentName:"tr",align:null},"5666"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:null},"30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"-u -2 -P 8192")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))),(0,n.kt)("h2",{id:"d\xe9pannage"},"D\xe9pannage"),(0,n.kt)("p",null,"Veuillez trouver la documentation de d\xe9pannage pour les contr\xf4les NRPE dans le ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#nrpe-checks"},"chapitre d\xe9di\xe9")," de la documentation Centreon."))}c.isMDXComponent=!0}}]);