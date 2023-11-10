"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17330],{65517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"introduction",title:"Introduction \xe0 Centreon BAM"},c=void 0,p={unversionedId:"service-mapping/introduction",id:"version-23.10/service-mapping/introduction",title:"Introduction \xe0 Centreon BAM",description:'La fonctionnalit\xe9 de "Service Mapping" de Centreon se base sur',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/service-mapping/introduction.md",sourceDirName:"service-mapping",slug:"/service-mapping/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/service-mapping/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/service-mapping/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"introduction",title:"Introduction \xe0 Centreon BAM"},sidebar:"version-23.10/docs",previous:{title:"Plugin Centreon pour Grafana",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/metrology/grafana"},next:{title:"Gestion",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/service-mapping/ba-management"}},u={},l=[],d={toc:l},m="wrapper";function g(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'La fonctionnalit\xe9 de "Service Mapping" de Centreon se base sur\nl\'extension appell\xe9e "Centreon Business Activity Monitoring" (Centreon\nBAM).'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Centreon BAM est une ",(0,r.kt)("strong",{parentName:"p"},"extension")," Centreon qui requiert une ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/licenses"},"licence"),"\nvalide. Pour plus d'information, contactez\n",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,r.kt)("p",null,"Le module ",(0,r.kt)("strong",{parentName:"p"},"Centreon Business Activity Monitoring")," offre la possibilit\xe9\nde mesurer en temps r\xe9el l'activit\xe9 de la production informatique en\nagr\xe9geant les \xe9tats des diff\xe9rents points de contr\xf4le supervis\xe9s avec\n",(0,r.kt)("strong",{parentName:"p"},"Centreon"),". L'utilisateur est alors mieux inform\xe9 de l'\xe9tat de sant\xe9\nglobal de son SI et \xe0 m\xeame de prendre les meilleures d\xe9cisions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(66213).Z,width:"1616",height:"783"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Centreon BAM"),' utilise un moteur avanc\xe9 de calcul des "',(0,r.kt)("strong",{parentName:"p"},"Business\nActivities"),"\" (BA), \xe0 partir d'indicateurs de performance cl\xe9s (",(0,r.kt)("strong",{parentName:"p"},"KPI"),")\nsupervis\xe9s par ",(0,r.kt)("strong",{parentName:"p"},"Centreon"),"."),(0,r.kt)("p",null,"La repr\xe9sentation graphique des donn\xe9es est faite en temps r\xe9el, ce qui\npermet d'avoir une console d\xe9di\xe9e \xe0 la supervision de ses activit\xe9s\nm\xe9tiers."),(0,r.kt)("p",null,"Cette documentation a pour but de guider l'utilisateur sur\nl'installation, la configuration des vues m\xe9tiers, sur le d\xe9ploiement\ndes activit\xe9s m\xe9tiers ainsi que sur l'exploitation des donn\xe9es\ndisponibles au travers du module ",(0,r.kt)("strong",{parentName:"p"},"Centreon BAM"),"."),(0,r.kt)("p",null,"D\xe9finitions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BA"),' ("Business Activity") : Activit\xe9 m\xe9tier'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BV"),' ("Business View") : Regroupement d\'activit\xe9 m\xe9tier'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"KPI"),' ("Key Performance Indicator") : Indicateur pond\xe9r\xe9 rentrant\nen consid\xe9ration dans le calcul de la BA.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(66405).Z,width:"1731",height:"666"})))}g.isMDXComponent=!0},66405:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ba_detailed-4aa9740300763bb9f789206118f82944.png"},66213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/first_page-1747317d6a09d632627a430616b54871.gif"}}]);