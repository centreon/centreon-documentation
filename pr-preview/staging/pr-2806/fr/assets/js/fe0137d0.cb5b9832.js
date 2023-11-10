"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73900],{35910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"first-supervision",title:"Pr\xe9requis"},p=void 0,u={unversionedId:"getting-started/first-supervision",id:"version-23.10/getting-started/first-supervision",title:"Pr\xe9requis",description:"Ce topic vous propose d'installer les mod\xe8les de supervision fournis gratuitement avec la solution Centreon, puis de les impl\xe9menter afin de mettre votre premier \xe9quipement en supervision.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/first-supervision.md",sourceDirName:"getting-started",slug:"/getting-started/first-supervision",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/first-supervision",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/first-supervision.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"first-supervision",title:"Pr\xe9requis"},sidebar:"version-23.10/docs",previous:{title:"Setting up the monitoring",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/category/setting-up-the-monitoring"},next:{title:"Superviser votre premier serveur Linux",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/monitor-linux-server-with-snmp"}},l={},c=[{value:"Installation des mod\xe8les de supervision de base",id:"installation-des-mod\xe8les-de-supervision-de-base",level:3},{value:"D\xe9ployer une configuration",id:"d\xe9ployer-une-configuration",level:2}],d={toc:c},m="wrapper";function g(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ce topic vous propose d'installer les mod\xe8les de supervision fournis gratuitement avec la solution Centreon, puis de les impl\xe9menter afin de mettre votre premier \xe9quipement en supervision."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous disposez d'une licence ad\xe9quate, vous pouvez utiliser notre ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/discovery/introduction"},"module d'autod\xe9couverte")," afin de trouver et de configurer vos h\xf4tes facilement. Voir aussi notre tutoriel ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/autodisco-aws"},"sur la d\xe9tection d'instances AWS EC2"),".")),(0,n.kt)("h3",{id:"installation-des-mod\xe8les-de-supervision-de-base"},"Installation des mod\xe8les de supervision de base"),(0,n.kt)("p",null,"Rendez-vous dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avant toute chose, appliquez la proc\xe9dure de ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/administration/parameters/centreon-ui#configuration-du-proxy"},"configuration du proxy"),"\npour configurer et v\xe9rifier la connexion de votre serveur Centreon \xe0 internet.")),(0,n.kt)("p",null,"Commencez par installer le connecteur de supervision ",(0,n.kt)("strong",{parentName:"p"},"Base Pack")," (s'il n'est pas d\xe9j\xe0 install\xe9) en d\xe9pla\xe7ant votre curseur sur ce dernier et en cliquant sur\nl'ic\xf4ne ",(0,n.kt)("strong",{parentName:"p"},"+")," (il s'agit d'un pr\xe9-requis \xe0 l'installation de tout autre connecteur de supervision) :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(84600).Z,width:"136",height:"133"})),(0,n.kt)("p",null,"Vous pouvez aussi cliquer sur le connecteur de supervision afin d'en conna\xeetre son contenu avant de l'installer :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(37382).Z,width:"491",height:"205"})),(0,n.kt)("p",null,"Installez ensuite les connecteurs de supervision inclus gratuitement avec la solution, par exemple ",(0,n.kt)("strong",{parentName:"p"},"Linux SNMP")," et ",(0,n.kt)("strong",{parentName:"p"},"Windows SNMP")," :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(55859).Z,width:"1217",height:"478"})),(0,n.kt)("p",null,"Vous disposez maintenant des mod\xe8les de base pour configurer votre supervision !"),(0,n.kt)("h2",{id:"d\xe9ployer-une-configuration"},"D\xe9ployer une configuration"),(0,n.kt)("p",null,"Lorsque vous cr\xe9erez des h\xf4tes, vous devrez d\xe9ployer la configuration pour que la supervision d\xe9marre."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rendez-vous dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Collecteurs"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choisissez les collecteurs sur lesquels exporter la configuration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Exporter la configuration"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:r(73077).Z,width:"1327",height:"111"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cochez les cases suivantes :"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer les fichiers de configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Lancer le d\xe9bogage du moteur de supervision (-v)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D\xe9placer les fichiers g\xe9n\xe9r\xe9s")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Red\xe9marrer l'ordonnanceur"),".")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Exporter"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:r(89956).Z,width:"990",height:"444"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V\xe9rifiez qu'aucune erreur n'appara\xeet lors de la g\xe9n\xe9ration."))))}g.isMDXComponent=!0},84600:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},37382:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pp_base_generic_2-c096ffb7be1c26171a379ea29c3ea490.png"},55859:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pp_install_basic-b5c344d1d34158ebb3a1e73313b26617.gif"},73077:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/export_conf-b19ae6c0786ae8954833564e0302463c.png"},89956:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/export_conf_done-6b88e437975da2ff32814ed7522e0fe8.png"}}]);