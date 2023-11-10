"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[97920],{88670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const a={id:"hosts-templates",title:"Utiliser des mod\xe8les d'h\xf4tes"},l=void 0,u={unversionedId:"monitoring/basic-objects/hosts-templates",id:"version-23.10/monitoring/basic-objects/hosts-templates",title:"Utiliser des mod\xe8les d'h\xf4tes",description:"Un mod\xe8le est une pr\xe9-configuration de param\xe8tres d\u2019un objet qui pourra \xeatre",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/hosts-templates.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/hosts-templates",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/hosts-templates",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/hosts-templates.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"hosts-templates",title:"Utiliser des mod\xe8les d'h\xf4tes"},sidebar:"version-23.10/docs",previous:{title:"Cr\xe9er des h\xf4tes automatiquement",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/hosts-create-disco"},next:{title:"Modifier le serveur de supervision pour un h\xf4te",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/hosts-switch-poller"}},d={},p=[{value:"H\xe9ritage",id:"h\xe9ritage",level:2},{value:"H\xe9ritage de type P\xe8re-Fils",id:"h\xe9ritage-de-type-p\xe8re-fils",level:3},{value:"H\xe9ritage de type associatif",id:"h\xe9ritage-de-type-associatif",level:3},{value:"Configuration",id:"configuration",level:2}],c={toc:p},m="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un mod\xe8le est une pr\xe9-configuration de param\xe8tres d\u2019un objet qui pourra \xeatre\nutilis\xe9 pour configurer ce dernier. Le principal avantage est de pouvoir d\xe9finir\ndes valeurs par d\xe9faut pour certains objets afin d\u2019acc\xe9l\xe9rer la cr\xe9ation\nd\u2019objets similaires."),(0,n.kt)("p",null,"Un mod\xe8le peut h\xe9riter des propri\xe9t\xe9s d\u2019un autre mod\xe8le."),(0,n.kt)("p",null,"Les mod\xe8les issus de connecteurs de supervision permettent de mettre facilement un h\xf4te en supervision\ncar ils fournissent les ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/commands"},"commandes")," de v\xe9rification appropri\xe9es."),(0,n.kt)("h2",{id:"h\xe9ritage"},"H\xe9ritage"),(0,n.kt)("p",null,"Un h\xf4te ou un mod\xe8le d\u2019h\xf4te peut h\xe9riter d\u2019un ou plusieurs mod\xe8les d\u2019h\xf4tes. Cet\nh\xe9ritage peut \xeatre :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"de type associatif (addition de plusieurs mod\xe8les d\u2019h\xf4te)"),(0,n.kt)("li",{parentName:"ul"},"de type p\xe8re-fils")),(0,n.kt)("h3",{id:"h\xe9ritage-de-type-p\xe8re-fils"},"H\xe9ritage de type P\xe8re-Fils"),(0,n.kt)("p",null,"Il s\u2019agit d\u2019une pr\xe9d\xe9finition de param\xe8tres \xe0 \u201cn\u201d niveaux. L\u2019objet h\xe9rite de son\nmod\xe8le qui peut lui m\xeame h\xe9riter de son mod\xe8le. Si le fils red\xe9finit un\nparam\xe8tre, ce dernier \xe9crase celui d\xe9fini dans les mod\xe8les de niveaux\nsup\xe9rieurs. Sinon, il vient compl\xe9ter le param\xe9trage."),(0,n.kt)("h3",{id:"h\xe9ritage-de-type-associatif"},"H\xe9ritage de type associatif"),(0,n.kt)("p",null,"Il s\u2019agit d\u2019additionner plusieurs mod\xe8les au sein d\u2019un m\xeame objet afin\nd\u2019additionner l\u2019ensemble des param\xe8tres disponibles. Si un h\xf4te h\xe9rite de\nplusieurs mod\xe8les d\u2019h\xf4tes et si un m\xeame param\xe8tre est d\xe9fini sur plusieurs\nmod\xe8les, alors le mod\xe8le d\u2019h\xf4te situ\xe9 au-dessus des autres mod\xe8les est\nprioritaire par rapport \xe0 ses ascendants."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(89358).Z,width:"1157",height:"132"})),(0,n.kt)("p",null,"Le sch\xe9ma ci-dessous pr\xe9sente un h\xf4te h\xe9ritant de plusieurs mod\xe8les d\u2019h\xf4tes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(768).Z,width:"961",height:"874"})),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Pour cr\xe9er un mod\xe8le d\u2019h\xf4tes :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Rendez-vous dans le menu ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes > Mod\xe8les")," et cliquez sur\nle bouton ",(0,n.kt)("strong",{parentName:"li"},"Ajouter"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rapportez-vous au chapitre de configuration des\n",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/hosts"},"h\xf4tes"))," pour configurer un mod\xe8le car le\nformulaire est identique.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Par d\xe9faut, les mod\xe8les d\u2019h\xf4te verrouill\xe9s sont masqu\xe9s. Cocher la case\n\u201cEl\xe9ments verrouill\xe9s\u201d pour les afficher tous.")),(0,n.kt)("p",null,"Lors de la cr\xe9ation d\u2019un mod\xe8le, seul le nom du mod\xe8le est obligatoire. Les\nautres attributs sont optionnels."))}g.isMDXComponent=!0},89358:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/09hostmodels-a426b91b188edde8024103e638ca9635.png"},768:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/09hostmodelsheritage-8fc4d663668086c07a3321683d28b1ae.png"}}]);