"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[31108],{52244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"groups",title:"Groupes"},u=void 0,p={unversionedId:"monitoring/groups",id:"version-23.10/monitoring/groups",title:"Groupes",description:"Il est possible de regrouper des h\xf4tes ou des services au sein de groupes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/groups.md",sourceDirName:"monitoring",slug:"/monitoring/groups",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/groups",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/groups.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"groups",title:"Groupes"},sidebar:"version-23.10/docs",previous:{title:"D\xe9panner les incidents sur la d\xe9couverte des h\xf4tes",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/discovery/troubleshooting-hosts-discovery"},next:{title:"Cat\xe9gories et criticit\xe9s",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/categories"}},l={},c=[{value:"Cr\xe9er un groupes d\u2019h\xf4tes",id:"cr\xe9er-un-groupes-dh\xf4tes",level:2},{value:"Cr\xe9er un groupe de services",id:"cr\xe9er-un-groupe-de-services",level:2}],d={toc:c},m="wrapper";function g(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Il est possible de regrouper des h\xf4tes ou des services au sein de groupes."),(0,n.kt)("p",null,"D\u2019une mani\xe8re g\xe9n\xe9rale, les groupes sont des conteneurs permettant de regrouper un ensemble d\u2019objets poss\xe9dant une\npropri\xe9t\xe9 commune :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"M\xeame identit\xe9 mat\xe9rielle (serveurs Dell, HP, IBM, ...), identit\xe9 logique (\xe9quipements r\xe9seau) ou identit\xe9 g\xe9ographique\n(Europe, Asie, Afrique, Am\xe9rique du nord, ...)"),(0,n.kt)("li",{parentName:"ul"},"Appartenance \xe0 une m\xeame application (application CMS, ...) ou \xe0 un m\xeame secteur d\u2019activit\xe9 (Gestion de la paie, ...)")),(0,n.kt)("p",null,"Les groupes d\u2019h\xf4tes et de services sont utilis\xe9s pour :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La configuration des ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/access-control-lists"},"ACLs")," afin de lier un ensemble de ressources \xe0 un type de profil"),(0,n.kt)("li",{parentName:"ul"},'Permettre de visualiser les rapports de disponibilit\xe9 par groupe. G\xe9n\xe9rer un rapport de disponibilit\xe9 des ressources\n"Agence Paris".'),(0,n.kt)("li",{parentName:"ul"},"Permettre de visualiser le statut d\u2019un ensemble d\u2019objets en s\xe9lectionnant dans les filtres de recherche un groupe d\u2019objets"),(0,n.kt)("li",{parentName:"ul"},"Rechercher rapidement un \xe0 plusieurs graphiques de performances en parcourant l\u2019arbre des objets par groupes puis par ressource"),(0,n.kt)("li",{parentName:"ul"},"D\u2019une mani\xe8re g\xe9n\xe9rale, on cherche \xe0 regrouper les h\xf4tes par niveau fonctionnel. Exemple : H\xf4tes DELL, HP ou encore\nH\xf4tes Linux, Windows... On cherche \xe9galement \xe0 regrouper les services par applications m\xe9tiers. Exemple : application de\ngestion de la paie, application ERP, ...")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour les h\xf4tes appartenant \xe0 un groupe d\u2019h\xf4tes, la r\xe9tention des fichiers RRD peut \xeatre d\xe9finie au sein du groupe\nd\u2019h\xf4tes auquel il appartient. Cette d\xe9finition vient surcharger la d\xe9finition globale. Dans le cas o\xf9 un m\xeame h\xf4te\nappartient \xe0 plusieurs groupes poss\xe9dant chacun une d\xe9finition de r\xe9tention, la valeur la plus \xe9lev\xe9e sera\ns\xe9lectionn\xe9e pour l\u2019h\xf4te.")),(0,n.kt)("h2",{id:"cr\xe9er-un-groupes-dh\xf4tes"},"Cr\xe9er un groupes d\u2019h\xf4tes"),(0,n.kt)("p",null,"Rendez-vous dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > Groupes d'h\xf4tes")," et cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Ajouter"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom")," et ",(0,n.kt)("strong",{parentName:"li"},"Alias")," regroupent le nom et l\u2019alias du groupe d\u2019h\xf4tes."),(0,n.kt)("li",{parentName:"ul"},"La liste ",(0,n.kt)("strong",{parentName:"li"},"Membres")," permet d\u2019ajouter des h\xf4tes au sein du nouveau groupe d\u2019h\xf4tes."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Notes")," permet d\u2019ajouter des notes optionnelles concernant le groupe d\u2019h\xf4tes."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"URL")," d\xe9finit une URL qui peut \xeatre utilis\xe9e pour donner davantage d\u2019informations sur le groupe d\u2019h\xf4tes."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"URL d'action")," d\xe9finit une URL habituellement utilis\xe9e pour donner des informations d\u2019actions sur le groupe\nd\u2019h\xf4tes (maintenance...)."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Ic\xf4ne")," indique l\u2019ic\xf4ne \xe0 utiliser pour le groupe d\u2019h\xf4tes."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Ic\xf4ne pour la carte")," est l\u2019ic\xf4ne utilis\xe9e pour la cartographie."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Coordonn\xe9es g\xe9ographiques"),' d\xe9finit les coordonn\xe9es g\xe9ographiques utilis\xe9es par le module Centreon Map pour positionner\nl\'\xe9l\xe9ment sur la carte. D\xe9finissez "Latitude, Longitude", par exemple pour le jeu de coordonn\xe9es de Paris "48.51,2.20"'),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"R\xe9tention des fichiers RRD")," est exprim\xe9 en jours, il permet de d\xe9finir la dur\xe9e de r\xe9tention des services appartenant\n\xe0 ce groupe d\u2019h\xf4tes au sein de la base de donn\xe9es RRD. Si cette valeur est vide, la valeur sera celle par d\xe9faut\nd\xe9finie dans le menu ",(0,n.kt)("strong",{parentName:"li"},"Administration > Options > CentStorage"),"."),(0,n.kt)("li",{parentName:"ul"},"Les champs ",(0,n.kt)("strong",{parentName:"li"},"Activer/d\xe9sactiver la ressource")," et ",(0,n.kt)("strong",{parentName:"li"},"Commentaires")," permettent d\u2019activer ou de d\xe9sactiver le groupe d\u2019h\xf4tes et de commenter celui-ci.")),(0,n.kt)("h2",{id:"cr\xe9er-un-groupe-de-services"},"Cr\xe9er un groupe de services"),(0,n.kt)("p",null,"Rendez-vous dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Groupes de services")," et cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Ajouter"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom")," et ",(0,n.kt)("strong",{parentName:"li"},"Description")," regroupent le nom et la description du groupe de services."),(0,n.kt)("li",{parentName:"ul"},"La liste ",(0,n.kt)("strong",{parentName:"li"},"Services d'h\xf4te li\xe9s")," permet de choisir les diff\xe9rents services qui feront partie de ce groupe."),(0,n.kt)("li",{parentName:"ul"},"La liste ",(0,n.kt)("strong",{parentName:"li"},"Services li\xe9s au groupe d'h\xf4te")," permet de choisir les services li\xe9s \xe0 un groupe d\u2019h\xf4tes qui feront partie de\nce groupe."),(0,n.kt)("li",{parentName:"ul"},"Si un mod\xe8le de service appartient \xe0 la liste  ",(0,n.kt)("strong",{parentName:"li"},"Mod\xe8les de service li\xe9s")," alors tous les services qui h\xe9ritent de\nce mod\xe8le appartiennent \xe0 ce groupe."),(0,n.kt)("li",{parentName:"ul"},"Les champs  ",(0,n.kt)("strong",{parentName:"li"},"Statut")," et ",(0,n.kt)("strong",{parentName:"li"},"Commentaires")," permettent d\u2019activer ou de d\xe9sactiver le groupe de services et de commenter\ncelui-ci.")))}g.isMDXComponent=!0}}]);