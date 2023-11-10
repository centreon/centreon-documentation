"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87555],{43089:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>d});s(67294);var i=s(3905);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})),e}function o(e,t){if(null==e)return{};var s,i,n=function(e,t){if(null==e)return{};var s,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}const l={id:"services-templates",title:"Utiliser des mod\xe8les de services"},a=void 0,c={unversionedId:"monitoring/basic-objects/services-templates",id:"version-23.10/monitoring/basic-objects/services-templates",title:"Utiliser des mod\xe8les de services",description:"D\xe9finition",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/services-templates.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/services-templates",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/services-templates",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/services-templates.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"services-templates",title:"Utiliser des mod\xe8les de services"},sidebar:"version-23.10/docs",previous:{title:"Cr\xe9er des services automatiquement",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/services-create-disco"},next:{title:"Cr\xe9er des m\xe9ta-services",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/meta-services"}},u={},d=[{value:"D\xe9finition",id:"d\xe9finition",level:2},{value:"Mod\xe8les de services",id:"mod\xe8les-de-services",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Les bonnes pratiques",id:"les-bonnes-pratiques",level:2},{value:"Explications",id:"explications",level:3},{value:"Configuration",id:"configuration-1",level:3}],p={toc:d},m="wrapper";function v(e){var{components:t}=e,l=o(e,["components"]);return(0,i.kt)(m,r(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(t){n(e,t,s[t])}))}return e}({},p,l),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"d\xe9finition"},"D\xe9finition"),(0,i.kt)("p",null,"Un mod\xe8le est une pr\xe9-configuration de param\xe8tres d\u2019un objet qui pourra \xeatre\nutilis\xe9 pour configurer ce dernier. Le principal avantage est de pouvoir d\xe9finir\ndes valeurs par d\xe9faut pour certains objets afin d\u2019acc\xe9l\xe9rer la cr\xe9ation\nd\u2019objets similaires."),(0,i.kt)("p",null,"Lors de la cr\xe9ation d\u2019un mod\xe8le, seul le nom du mod\xe8le est obligatoire. Les\nautres attributs sont optionnels."),(0,i.kt)("p",null,"Les avantages sont :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"D\xe9finition simplifi\xe9e des \xe9l\xe9ments"),(0,i.kt)("li",{parentName:"ul"},"Pas de redondance d\u2019information"),(0,i.kt)("li",{parentName:"ul"},"Facilit\xe9 d\u2019ajout de nouvelles ressources"),(0,i.kt)("li",{parentName:"ul"},"Configurations pr\xe9d\xe9finies assimil\xe9es \xe0 un \xab catalogue d\u2019indicateurs\xbb"),(0,i.kt)("li",{parentName:"ul"},"Les mod\xe8les peuvent h\xe9riter d\u2019autres mod\xe8les")),(0,i.kt)("h2",{id:"mod\xe8les-de-services"},"Mod\xe8les de services"),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"Un service ou un mod\xe8le de service ne peut h\xe9riter que d\u2019un seul mod\xe8le de\nservice (h\xe9ritage de type P\xe8re-Fils)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:s(72418).Z,width:"959",height:"375"})),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Pour ajouter un mod\xe8le de services :"),(0,i.kt)("p",null,"Rendez-vous dans le menu ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Services > Mod\xe8les")," et cliquez\nsur le bouton ",(0,i.kt)("strong",{parentName:"p"},"Ajouter")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Rapportez-vous au chapitre de configuration des\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/services"},"services"))," pour configurer un mod\xe8le car le\nformulaire est identique.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Par d\xe9faut, les mod\xe8les de service verrouill\xe9s sont masqu\xe9s. Cocher la case\n\u201cEl\xe9ments verrouill\xe9s\u201d pour les afficher tous.")),(0,i.kt)("h2",{id:"les-bonnes-pratiques"},"Les bonnes pratiques"),(0,i.kt)("h3",{id:"explications"},"Explications"),(0,i.kt)("p",null,"La bonne pratique veut que des mod\xe8les de services soient associ\xe9s \xe0 des mod\xe8les\nd\u2019h\xf4tes : lors de la cr\xe9ation d\u2019un h\xf4te, les services sont g\xe9n\xe9r\xe9s\nautomatiquement \xe0 partir des mod\xe8les d\u2019h\xf4tes. Il y a deux int\xe9r\xeats \xe0 lier les\nmod\xe8les de services aux mod\xe8les d\u2019h\xf4tes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les services g\xe9n\xe9r\xe9s automatiquement conservent leur granularit\xe9 : il est\ndonc possible de modifier les attributs d\u2019un service sans impacter les\nautres services issus de ce mod\xe8le"),(0,i.kt)("li",{parentName:"ul"},"La cr\xe9ation de nouveaux h\xf4tes est grandement acc\xe9l\xe9r\xe9e : vous n\u2019avez qu\u2019\xe0\nd\xe9finir l\u2019h\xf4te et les mod\xe8les d\u2019h\xf4tes associ\xe9s \xe0 celui-ci")),(0,i.kt)("p",null,"Exemple : Je cr\xe9\xe9 l\u2019h\xf4te srvi-web-01 selon le mod\xe8le ci-dessous :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:s(71698).Z,width:"606",height:"633"})),(0,i.kt)("p",null,"L\u2019h\xf4te srvi-web-01 poss\xe8dera automatiquement les services suivants :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load, CPU, Memory, disk-/ \xe0 partir des mod\xe8les de services issus du mod\xe8le\nd\u2019h\xf4te \u201cLinux-Server-RedHat-5\u201d"),(0,i.kt)("li",{parentName:"ul"},"broken-jobs, hit-ratio, tablespaces, listener \xe0 partir des mod\xe8les de\nservices issus du mod\xe8le d\u2019h\xf4te \u201cDB-MySQL\u201d"),(0,i.kt)("li",{parentName:"ul"},"processus et connection \xe0 partir des mod\xe8les de services issus du mod\xe8le\nd\u2019h\xf4te \u201cWeb-Server-Apache\u201d")),(0,i.kt)("p",null,"Lorsque les services d\u2019un h\xf4te sont g\xe9n\xe9r\xe9s \xe0 partir des mod\xe8les d\u2019h\xf4tes, il est\npossible que certains services g\xe9n\xe9r\xe9s ne soient plus ou pas v\xe9rifi\xe9s par\nl\u2019outil de supervision. Dans ce cas, il est n\xe9cessaire de d\xe9sactiver les\nservices inutilis\xe9s (et non de les supprimer). En cas de suppression des\nservices, la r\xe9g\xe9n\xe9ration des services de l\u2019h\xf4te \xe0 partir des mod\xe8les d\u2019h\xf4tes va\nrecr\xe9er les services supprim\xe9s."),(0,i.kt)("h3",{id:"configuration-1"},"Configuration"),(0,i.kt)("p",null,"La liaison des mod\xe8les de services avec les mod\xe8les d\u2019h\xf4tes a lieu dans l\u2019onglet\n",(0,i.kt)("strong",{parentName:"p"},"Relations")," des mod\xe8les de services ou des mod\xe8les d\u2019h\xf4tes."))}v.isMDXComponent=!0},72418:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/09heritageservice-39dd6c63870f3cc1ba8785d6dbf7913c.png"},71698:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/09hostexemple-38c60ef0820184d0201e7fc63bec19ae.png"}}]);