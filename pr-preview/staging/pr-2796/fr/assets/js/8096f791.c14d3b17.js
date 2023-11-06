"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(r),v=i,d=l["".concat(c,".").concat(v)]||l[v]||m[v]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=v;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"services-create",title:"Mettre un service en supervision"},c=void 0,p={unversionedId:"monitoring/basic-objects/services-create",id:"version-23.10/monitoring/basic-objects/services-create",title:"Mettre un service en supervision",description:"Un service est un point de contr\xf4le, ou indicateur, \xe0 superviser sur un h\xf4te. Par exemple : pourcentage d\u2019utilisation partition sur un",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/services-create.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/services-create",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/services-create",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/services-create.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"services-create",title:"Mettre un service en supervision"},sidebar:"version-23.10/docs",previous:{title:"Modifier le serveur de supervision pour un h\xf4te",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/hosts-switch-poller"},next:{title:"Cr\xe9er un service manuellement",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/services"}},u={},l=[{value:"Mettre un service en supervision",id:"mettre-un-service-en-supervision",level:2}],m={toc:l},v="wrapper";function d(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(v,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un service est un point de contr\xf4le, ou indicateur, \xe0 superviser sur un h\xf4te. Par exemple : pourcentage d\u2019utilisation partition sur un\nserveur, niveau d\u2019encre sur une imprimante..."),(0,n.kt)("p",null,"Pour consulter la liste des services supervis\xe9s, allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4tes"),"."),(0,n.kt)("p",null,"Vous pouvez :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/services"},"cr\xe9er un service manuellement")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/discovery/services-discovery"},"d\xe9couvrir des services automatiquement"),".")),(0,n.kt)("h2",{id:"mettre-un-service-en-supervision"},"Mettre un service en supervision"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un service :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Utilisez l'",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/discovery/hosts-discovery"},"autod\xe9couverte d'h\xf4tes")," : celle-ci cr\xe9e automatiquement les services associ\xe9s.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/hosts"},"Cr\xe9ez un h\xf4te manuellement")," en utilisant un ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/pluginpacks"},"connecteur de supervision"),", et cochez la case ",(0,n.kt)("strong",{parentName:"p"},"Cr\xe9er aussi les services li\xe9s aux mod\xe8les")," : les services associ\xe9s \xe0 l'h\xf4te sont cr\xe9\xe9s automatiquement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Utilisez ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/discovery/services-discovery"},"l'autod\xe9couverte de services"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez le ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/services"},"service manuellement")," et dans le champ ",(0,n.kt)("strong",{parentName:"p"},"Mod\xe8le"),", s\xe9lectionnez un ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/services-templates"},"mod\xe8le de service")," (issu ou non d'un connecteur de supervision).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez ou utilisez une ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/commands"},"commande")," de v\xe9rification existante, et liez-la \xe0 un service ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/basic-objects/services"},"cr\xe9\xe9 manuellement"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un service via ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/api/introduction"},"les API"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),"."))))}d.isMDXComponent=!0}}]);