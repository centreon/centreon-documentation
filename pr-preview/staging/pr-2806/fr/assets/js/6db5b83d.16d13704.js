"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[55777],{80139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"interface",title:"D\xe9couvrir l'interface web Centreon"},l=void 0,u={unversionedId:"getting-started/interface",id:"version-23.10/getting-started/interface",title:"D\xe9couvrir l'interface web Centreon",description:"Premi\xe8re connexion \xe0 l'interface",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/interface.md",sourceDirName:"getting-started",slug:"/getting-started/interface",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/interface",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/interface.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"interface",title:"D\xe9couvrir l'interface web Centreon"},sidebar:"version-23.10/docs",previous:{title:"First steps with Centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/category/first-steps-with-centreon"},next:{title:"Bases de la supervision",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/concepts"}},c={},p=[{value:"Premi\xe8re connexion \xe0 l&#39;interface",id:"premi\xe8re-connexion-\xe0-linterface",level:2},{value:"Menus",id:"menus",level:2},{value:"Bandeau sup\xe9rieur",id:"bandeau-sup\xe9rieur",level:2},{value:"Section Collecteurs",id:"section-collecteurs",level:3},{value:"Section h\xf4tes et services (&quot;top counters&quot;)",id:"section-h\xf4tes-et-services-top-counters",level:3},{value:"Fonctionnalit\xe9s de personnalisation",id:"fonctionnalit\xe9s-de-personnalisation",level:2}],d={toc:p},m="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(m,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"premi\xe8re-connexion-\xe0-linterface"},"Premi\xe8re connexion \xe0 l'interface"),(0,r.kt)("p",null,"Pour vous connecter \xe0 l'interface web, rendez-vous \xe0 l'adresse : ",(0,r.kt)("inlineCode",{parentName:"p"},"http://ADRESSE_IP/centreon"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,r.kt)("strong",{parentName:"p"},"ADRESSE_IP")," par l'adresse IP ou le FQDN du serveur web Centreon.")),(0,r.kt)("p",null,"Renseignez le nom d'utilisateur et le mot de passe associ\xe9 et cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Se connecter")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(57457).Z,width:"366",height:"426"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous avez install\xe9 Centreon depuis une ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/installation/installation-of-a-central-server/using-virtual-machines"},"VM"),", les identifiants par d\xe9faut sont ",(0,r.kt)("strong",{parentName:"p"},"admin/Centreon!123"),".\nSi ce n'est pas le cas, l'identifiant par d\xe9faut est ",(0,r.kt)("strong",{parentName:"p"},"admin")," et le mot de passe est celui que vous avez d\xe9fini \xe0 ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/installation/web-and-post-installation#%C3%A9tape-5--admin-information"},"l'\xe9tape 5 de l'installation web"),".")),(0,r.kt)("p",null,"Vous \xeates maintenant connect\xe9 \xe0 l'interface web Centreon."),(0,r.kt)("h2",{id:"menus"},"Menus"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(48424).Z,width:"1079",height:"294"})),(0,r.kt)("p",null,"L'interface web de Centreon est compos\xe9e de plusieurs menus, chaque menu a une fonction bien pr\xe9cise (cliquez sur le logo Centreon en haut \xe0 gauche de l'\xe9cran pour afficher les libell\xe9s) :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(24433).Z,width:"165",height:"245"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le menu ",(0,r.kt)("strong",{parentName:"li"},"Accueil")," affiche les ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/create-custom-view"},"vues personnalis\xe9es"),". Votre espace de travail peut \xeatre vide pour l'instant. Une fois que vous aurez configur\xe9 les widgets\npersonnalisables, vous verrez les donn\xe9es et les graphiques en fonction de votre personnalisation."),(0,r.kt)("li",{parentName:"ul"},"Le menu ",(0,r.kt)("strong",{parentName:"li"},"Supervision")," regroupe l'\xe9tat de tous les \xe9l\xe9ments supervis\xe9s en temps r\xe9el et en diff\xe9r\xe9 au travers de la\nvisualisation des logs."),(0,r.kt)("li",{parentName:"ul"},"Le menu ",(0,r.kt)("strong",{parentName:"li"},"Rapports")," permet de visualiser de mani\xe8re intuitive (via des diagrammes) l'\xe9volution de la supervision sur\nune p\xe9riode donn\xe9e."),(0,r.kt)("li",{parentName:"ul"},"Le menu ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," permet de configurer l'ensemble des \xe9l\xe9ments supervis\xe9s ainsi que l'infrastructure de supervision."),(0,r.kt)("li",{parentName:"ul"},"Le menu ",(0,r.kt)("strong",{parentName:"li"},"Administration")," permet de configurer la plateforme Centreon (authentification, proxy, extensions...) ainsi que de visualiser l'\xe9tat g\xe9n\xe9ral des serveurs.")),(0,r.kt)("h2",{id:"bandeau-sup\xe9rieur"},"Bandeau sup\xe9rieur"),(0,r.kt)("h3",{id:"section-collecteurs"},"Section Collecteurs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(64293).Z,width:"1079",height:"294"})),(0,r.kt)("p",null,"La partie gauche du bandeau sup\xe9rieur montre la sant\xe9 de votre plateforme en temps r\xe9el :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si tous les collecteurs sont en cours d'ex\xe9cution ou non : l'ic\xf4ne devient rouge lorsqu'un collecteur n'a pas envoy\xe9 de donn\xe9es au serveur central depuis au moins 15 minutes."),(0,r.kt)("li",{parentName:"ul"},"Si les contr\xf4les sont en retard ou non. Si l'ic\xf4ne est orange ou rouge, cela peut indiquer que vos collecteurs supervisent de trop nombreuse ressources.")),(0,r.kt)("p",null,"Cliquez sur l'ic\xf4ne ",(0,r.kt)("strong",{parentName:"p"},"Collecteurs")," pour d\xe9velopper le menu. Dans le menu, cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Configurer les collecteurs")," pour acc\xe9der \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Collecteurs"),"."),(0,r.kt)("h3",{id:"section-h\xf4tes-et-services-top-counters"},'Section h\xf4tes et services ("top counters")'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(55169).Z,width:"1079",height:"294"})),(0,r.kt)("p",null,"Dans le bandeau sup\xe9rieur, \xe0 c\xf4t\xe9 de la section Collecteurs, des statistiques indiquent le nombre de ressources supervis\xe9es, avec un statut sp\xe9cifique :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pour les services: le nombre de services avec le statut ",(0,r.kt)("strong",{parentName:"li"},"CRITIQUE"),", ",(0,r.kt)("strong",{parentName:"li"},"ALERTE"),", ",(0,r.kt)("strong",{parentName:"li"},"INCONNU")," et ",(0,r.kt)("strong",{parentName:"li"},"OK"),"."),(0,r.kt)("li",{parentName:"ul"},"Pour les h\xf4tes : le nombre d'h\xf4tes avec le statut ",(0,r.kt)("strong",{parentName:"li"},"INDISPONIBLE"),", ",(0,r.kt)("strong",{parentName:"li"},"INJOIGNABLE")," et ",(0,r.kt)("strong",{parentName:"li"},"DISPONIBLE"),".")),(0,r.kt)("p",null,"Ces nombres incluent les alertes non confirm\xe9es (SOFT), mais n'incluent pas les ressources acquitt\xe9es ou en maintenance. Les ressources en attente sont indiqu\xe9es par une pastille bleue sur les ic\xf4nes ",(0,r.kt)("strong",{parentName:"p"},"h\xf4tes")," ou ",(0,r.kt)("strong",{parentName:"p"},"services"),"."),(0,r.kt)("p",null,"Cliquez sur un cercle repr\xe9sentant un statut :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La page ",(0,r.kt)("strong",{parentName:"li"},"Supervision > Statut des ressources")," s'ouvre."),(0,r.kt)("li",{parentName:"ul"},"La page est filtr\xe9e selon le type de ressource et le statut correspondant.")),(0,r.kt)("p",null,"Cliquez sur les ic\xf4nes ",(0,r.kt)("strong",{parentName:"p"},"h\xf4tes")," ou ",(0,r.kt)("strong",{parentName:"p"},"services")," pour d\xe9velopper le menu et afficher le d\xe9tail des h\xf4tes et services."),(0,r.kt)("h2",{id:"fonctionnalit\xe9s-de-personnalisation"},"Fonctionnalit\xe9s de personnalisation"),(0,r.kt)("p",null,"Vous pouvez profiter de ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/customization"},"fonctionnalit\xe9s de personnalisation")," pour une meilleure utilisation de Centreon :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/customization#passer-en-mode-sombre"},"Passer en mode sombre")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/customization#changer-la-langue-de-linterface-utilisateur"},"Changer la langue de l'interface utilisateur")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/customization#r%C3%A9initialiser-le-mot-de-passe"},"R\xe9initialiser le mot de passe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/customization#d%C3%A9finir-une-page-par-d%C3%A9faut-apr%C3%A8s-connexion"},"D\xe9finir une page par d\xe9faut apr\xe8s connexion"))))}g.isMDXComponent=!0},57457:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aconnection-2e08dae41f809322ffe77b41a253acb6.png"},24433:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},64293:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner_pollers-8e04b144a93fb76160121fb366b0f7ec.png"},48424:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/menus-bb668cefa78e117a1eae96b5d0cde8f7.png"},55169:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/top_counters-4b6cd087ce4a0e30671904d6ee909491.png"}}]);