"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[4305],{29141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"notif-concept",title:"Fonctionnement des notifications"},c=void 0,l={unversionedId:"alerts-notifications/notif-concept",id:"version-23.10/alerts-notifications/notif-concept",title:"Fonctionnement des notifications",description:"Avant qu'un contact soit notifi\xe9 au sein de Centreon, il est n\xe9cessaire",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-concept.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-concept",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/notif-concept",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-concept.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"notif-concept",title:"Fonctionnement des notifications"},sidebar:"version-23.10/docs",previous:{title:"Autres actions",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/other"},next:{title:"Configurer les notifications",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/notif-configuration"}},u={},p=[],d={toc:p},f="wrapper";function m(e){var{components:t}=e,a=s(e,["components"]);return(0,i.kt)(f,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Avant qu'un contact soit notifi\xe9 au sein de Centreon, il est n\xe9cessaire\nde respecter plusieurs \xe9tapes. Si aucune escalade de notification n'est\nd\xe9finie, le processus de gestion des notifications est standard.\nCelui-ci est d\xe9crit ci-dessous :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Un service (ou un h\xf4te) est v\xe9rifi\xe9 \xe0 intervalle r\xe9gulier en\nfonction de la p\xe9riode temporelle de v\xe9rifications d\xe9finie pour lui\n(Dans le cas d'un service passif, on attend que le statut du service\nchange d'\xe9tat)"),(0,i.kt)("li",{parentName:"ol"},"Lorsqu'une anomalie survient (statut non-OK), le service (ou l'h\xf4te)\npasse en \xe9tat SOFT"),(0,i.kt)("li",{parentName:"ol"},"Apr\xe8s que le nombre maximum de v\xe9rifications avant validation de\nl'\xe9tat ait eu lieu et si le service (ou l'h\xf4te) persiste en\nconservant son statut non-OK son \xe9tat passe de SOFT \xe0 HARD. Le\nmoteur de supervision met en cache le num\xe9ro de la notification pour\nle service (ou l'h\xf4te) : c'est \xe0 dire 0.")),(0,i.kt)("p",null,"A chaque intervalle d'envoi de notification pour le service (ou l'h\xf4te)\net jusqu'\xe0 la fin du statut non-OK, le moteur de supervision r\xe9alise les\nop\xe9rations suivantes :"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Le moteur de supervision v\xe9rifie que la p\xe9riode temporelle de\nnotifications d\xe9finie pour le service (ou l'h\xf4te) permet la\nnotification \xe0 l'instant o\xf9 le service (ou l'h\xf4te) est pass\xe9 en \xe9tat\nHARD. Si oui, alors on passe \xe0 l'\xe9tape suivante sinon, on attend que\nla p\xe9riode temporelle d\xe9finie pour le service (ou l'h\xf4te) permette\nla notification."),(0,i.kt)("li",{parentName:"ol"},"Le moteur de supervision v\xe9rifie que la notification est activ\xe9e\npour le statut actuel du service (ou de l'h\xf4te)")),(0,i.kt)("p",null,"Pour chaque contact associ\xe9 au service (ou \xe0 l'h\xf4te) :"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Le moteur de supervision v\xe9rifie plusieurs param\xe8tres :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Est-ce que les notifications sont activ\xe9es pour ce contact ?"),(0,i.kt)("li",{parentName:"ul"},"Est-ce que la p\xe9riode temporelle de notifications d\xe9finie pour\nle contact permet la notification ?"),(0,i.kt)("li",{parentName:"ul"},"Est-ce que le contact est configur\xe9 pour \xeatre notifi\xe9 pour le\nstatut actuel du service (ou l'h\xf4te) ?"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Si ces trois conditions sont valid\xe9es, alors le moteur de\nsupervision alerte le contact en utilisant le script de\nnotifications d\xe9finit pour le service ou l'h\xf4te.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Le moteur de supervision incr\xe9mente le num\xe9ro de notification de 1"))),(0,i.kt)("p",null,"Le sch\xe9ma ci-dessous r\xe9sume la gestion des notifications au sein de\nCentreon :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(96893).Z,width:"551",height:"1466"})))}m.isMDXComponent=!0},96893:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/hnotifications_schema-ab232ca2f342c2961b12af4af48cabc9.png"}}]);