"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17553],{24517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={id:"notif-escalation",title:"Les escalades de notifications"},l=void 0,c={unversionedId:"alerts-notifications/notif-escalation",id:"version-23.10/alerts-notifications/notif-escalation",title:"Les escalades de notifications",description:"Definition",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-escalation.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-escalation",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/notif-escalation",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-escalation.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"notif-escalation",title:"Les escalades de notifications"},sidebar:"version-23.10/docs",previous:{title:"Les d\xe9pendances",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/notif-dependencies"},next:{title:"Flapping",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/notif-flapping"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Principe",id:"principe",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Application de l&#39;escalade",id:"application-de-lescalade",level:3}],d={toc:p},f="wrapper";function m(e){var{components:t}=e,r=s(e,["components"]);return(0,i.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"D'une mani\xe8re g\xe9n\xe9rale, en cas de d\xe9clenchement d'une alerte, une\nnotification permet de contacter un ou plusieurs contacts (ou groupes de\ncontacts). De m\xeame, il est possible d'envoyer plusieurs notifications\nsuivant un intervalle de temps r\xe9gulier."),(0,i.kt)("p",null,"Une escalade de notifications permet de contacter diff\xe9rents groupes de\ncontacts au fil des notifications envoy\xe9es ou de changer le moyen de\nnotification (remplacer les mails par un SMS). La d\xe9finition d'une\nescalade de notification pour un h\xf4te, un groupe d'h\xf4te, un service, un\ngroupe de services ou un m\xe9ta-service \xe9crase la configuration classique\ndes notifications pour cet objet."),(0,i.kt)("p",null,"Exemple : Un service A est param\xe9tr\xe9 pour envoyer des notifications \xe0 un\ngroupe de contacts \u201cA\u201d en cas de statut non-OK. Ces notifications sont\nenvoy\xe9es toutes les 5 minutes. Si pendant un certain nombre de\nnotifications envoy\xe9es le statut du service est toujours en non-OK, il\nest possible de contacter les individus du groupe de contacts \u201cB\u201d etc\u2026"),(0,i.kt)("p",null,"Les escalades de notifications sont pratiques dans les cas o\xf9 il existe\ndans une soci\xe9t\xe9 une \xe9quipe de support de niveau 1, niveau 2, niveau 3\u2026\nLorsqu'un probl\xe8me survient l'\xe9quipe de support niveau 1 est contact\xe9e.\nSi pendant un certain temps l'\xe9quipe niveau 1 n'a pas r\xe9ussi \xe0 r\xe9soudre\nle probl\xe8me, l'\xe9quipe niveau 2 est avertie etc\u2026"),(0,i.kt)("h2",{id:"principe"},"Principe"),(0,i.kt)("p",null,"Les escalades de notifications permettent deux choses :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notifier des contacts diff\xe9rents en fonction du nombre de\nnotifications envoy\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Changer de moyens de notifications au cours du temps")),(0,i.kt)("p",null,"En cas d'utilisation des escalades de notifications, la r\xe9cup\xe9ration de\nla liste de contact est quelque peu diff\xe9rente :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Un service (ou un h\xf4te) est v\xe9rifi\xe9 \xe0 intervalle r\xe9gulier en\nfonction de la p\xe9riode temporelle de v\xe9rification d\xe9finie pour lui"),(0,i.kt)("li",{parentName:"ol"},"Lorsqu'une anomalie survient (statut non-OK), le service (ou l'h\xf4te)\npasse en \xe9tat SOFT"),(0,i.kt)("li",{parentName:"ol"},"Apr\xe8s que le nombre maximum de v\xe9rifications avant validation de\nl'\xe9tat ait eu lieu, si le service (ou l'h\xf4te) persiste en conservant\nson statut non-OK son \xe9tat passe de SOFT \xe0 HARD. Le moteur de\nsupervision met en cache le num\xe9ro de la notification pour le\nservice (ou l'h\xf4te) : c'est \xe0 dire 0.")),(0,i.kt)("p",null,"A chaque intervalle d'envoi de notification pour le service (ou l'h\xf4te)\net jusqu'\xe0 la fin du statut non-OK le moteur de supervision r\xe9alise les\nop\xe9rations suivantes :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Si aucune escalade de notification n'est d\xe9finie pour le service (ou\nl'h\xf4te) et le num\xe9ro actuel de notification, alors le traitement de\nla notification est fait de la m\xeame mani\xe8re que pour une\nnotification classique : le moteur de supervision utilise la\nconfiguration de notifications d\xe9finie pour le service (ou l'h\xf4te)."),(0,i.kt)("li",{parentName:"ol"},"Si une escalade de notification est d\xe9finie pour le service (ou\nl'h\xf4te) et le num\xe9ro actuel de notification, alors le moteur de\nsupervision se base sur la configuration de l'escalade afin de\ns\xe9lectionner les contacts \xe0 notifier et les moyens \xe0 utiliser."),(0,i.kt)("li",{parentName:"ol"},"Le m\xe9canisme de traitement d'une notification est le m\xeame que pour\nl'envoi d'une notification normale")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Pour ajouter une escalade de notification, rendez-vous dans le menu\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration > Notifications > Escalations")," et cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Add")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(43159).Z,width:"970",height:"451"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les champs ",(0,i.kt)("strong",{parentName:"li"},"Escalation Name")," et ",(0,i.kt)("strong",{parentName:"li"},"Alias")," permettent de d\xe9finir un\nnom et un alias \xe0 l'escalade de notifications."),(0,i.kt)("li",{parentName:"ul"},"Le champ ",(0,i.kt)("strong",{parentName:"li"},"First Notification")," permet de choisir le num\xe9ro de la\nnotification \xe0 partir de laquelle le groupe de contacts sera averti."),(0,i.kt)("li",{parentName:"ul"},"Le champ ",(0,i.kt)("strong",{parentName:"li"},"Last Notification")," permet de choisir le dernier num\xe9ro\nde la notification pour lequel ce groupe de contacts sera averti. Si\nle groupe de contacts est le dernier niveau de l'escalade. La valeur\nde ce champ est ",(0,i.kt)("strong",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},"Le champ ",(0,i.kt)("strong",{parentName:"li"},"Notification Interval")," d\xe9finit l'intervalle de\nnotifications entre chaque alerte."),(0,i.kt)("li",{parentName:"ul"},"Le champ ",(0,i.kt)("strong",{parentName:"li"},"Escalation Period")," d\xe9finit la p\xe9riode temporelle de\nnotifications."),(0,i.kt)("li",{parentName:"ul"},"Les champs ",(0,i.kt)("strong",{parentName:"li"},"Hosts Escalation Options")," et ",(0,i.kt)("strong",{parentName:"li"},"Services Escalation\nOptions")," d\xe9finissent les statuts d'h\xf4tes et de services pour\nlesquels l'escalade est utilis\xe9e."),(0,i.kt)("li",{parentName:"ul"},"La liste ",(0,i.kt)("strong",{parentName:"li"},"Linked Contact Groups")," d\xe9finit le groupe de contacts \xe0\ncontacter lors du d\xe9clenchement de l'escalade."),(0,i.kt)("li",{parentName:"ul"},"Le champ ",(0,i.kt)("strong",{parentName:"li"},"Comments")," permet de commenter l'escalade.")),(0,i.kt)("h3",{id:"application-de-lescalade"},"Application de l'escalade"),(0,i.kt)("p",null,"Pour s\xe9lectionner les diff\xe9rents objets qui seront concern\xe9s par cette\nescalade, les onglets ",(0,i.kt)("strong",{parentName:"p"},"Hosts Escalation"),", ",(0,i.kt)("strong",{parentName:"p"},"Services Escalation"),",\n",(0,i.kt)("strong",{parentName:"p"},"Hostgroups Escalation"),", ",(0,i.kt)("strong",{parentName:"p"},"Meta Service Escalation")," et\n",(0,i.kt)("strong",{parentName:"p"},"Servicegroups Escalation")," permettent de choisir les objets sur\nlesquels les escalades sont appliqu\xe9es."))}m.isMDXComponent=!0},43159:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/04notificationsescalation-484178295314404371e74ca99685e023.png"}}]);