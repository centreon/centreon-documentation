"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[70905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"analyze-resources-availability",title:"Analyser la disponibilit\xe9 des ressources",description:"Tutoriel MBI"},l=void 0,u={unversionedId:"getting-started/analyze-resources-availability",id:"version-23.10/getting-started/analyze-resources-availability",title:"Analyser la disponibilit\xe9 des ressources",description:"Tutoriel MBI",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/analyze-resources-availability.md",sourceDirName:"getting-started",slug:"/getting-started/analyze-resources-availability",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/getting-started/analyze-resources-availability",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/analyze-resources-availability.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"analyze-resources-availability",title:"Analyser la disponibilit\xe9 des ressources",description:"Tutoriel MBI"},sidebar:"version-23.10/docs",previous:{title:"Mod\xe9liser un service IT",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/getting-started/model-it-services"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/installation/introduction"}},p={},c=[{value:"D\xe9finition du besoin",id:"d\xe9finition-du-besoin",level:2},{value:"S\xe9lection du mod\xe8le de rapport",id:"s\xe9lection-du-mod\xe8le-de-rapport",level:2},{value:"Configuration du rapport via l&#39;ajout d&#39;une &quot;t\xe2che planifi\xe9e&quot;",id:"configuration-du-rapport-via-lajout-dune-t\xe2che-planifi\xe9e",level:2},{value:"R\xe9cup\xe9ration du rapport g\xe9n\xe9r\xe9",id:"r\xe9cup\xe9ration-du-rapport-g\xe9n\xe9r\xe9",level:2}],d={toc:c},m="wrapper";function g(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Vous d\xe9butez avec Centreon MBI et souhaitez extraire vos premi\xe8res\nstatistiques ? Ce tutoriel est fait pour vous."),(0,r.kt)("p",null,"Gr\xe2ce \xe0 lui, apprenez \xe0 utiliser le produit et g\xe9n\xe9rez votre premier\nrapport."),(0,r.kt)("p",null,"Le principe est simple :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vous d\xe9terminez votre besoin"),(0,r.kt)("li",{parentName:"ul"},"Vous s\xe9lectionnez parmi les mod\xe8les de rapports disponibles, celui\nqui r\xe9pond \xe0 votre besoin d'analyse"),(0,r.kt)("li",{parentName:"ul"},"Vous configurez votre rapport via l'ajout d'une \"t\xe2che planifi\xe9e\""),(0,r.kt)("li",{parentName:"ul"},"Vous r\xe9cup\xe9rer votre rapport via l'interface")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Centreon MBI est une ",(0,r.kt)("strong",{parentName:"p"},"extension")," Centreon qui requiert une license valide. Pour plus d'information,\ncontactez ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,r.kt)("h2",{id:"d\xe9finition-du-besoin"},"D\xe9finition du besoin"),(0,r.kt)("p",null,"Partons d'un besoin assez simple qui est souvent le point de d\xe9part de\nl'exploitation de Centreon MBI : nous souhaitons suivre la disponibilit\xe9\nde nos ressources. Dans notre cas, le responsable du r\xe9seau Europe nous\nremonte que les routeurs semblent parfois injoignables. Pour r\xe9pondre \xe0\nson besoin d'analyse, nous allons r\xe9cup\xe9rer la disponibilit\xe9 de nos\nrouteurs qui se situent en Europe. Le besoin est \xe9tabli, passons \xe0\nl'\xe9tape suivante."),(0,r.kt)("h2",{id:"s\xe9lection-du-mod\xe8le-de-rapport"},"S\xe9lection du mod\xe8le de rapport"),(0,r.kt)("p",null,"Chaque mod\xe8le de rapport r\xe9pond \xe0 un besoin pr\xe9cis. Dans notre exemple,\nnous souhaitons analyser la disponibilit\xe9 de nos routeurs en Europe.\nPour cela, parcourons la page listant\nles ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/reporting/report-development"},"mod\xe8les de rapports disponibles")," et s\xe9lectionnons le mod\xe8le de rapport\nHostgroup-Host-Availability-List. Ce mod\xe8le affiche sous forme de liste,\nla disponibilit\xe9 des h\xf4tes d'un groupe. Dans notre exemple, les h\xf4tes\nsont nos routeurs."),(0,r.kt)("h2",{id:"configuration-du-rapport-via-lajout-dune-t\xe2che-planifi\xe9e"},"Configuration du rapport via l'ajout d'une \"t\xe2che planifi\xe9e\""),(0,r.kt)("p",null,"Dans Centreon MBI, la configuration d'un rapport correspond \xe0 la\ncr\xe9ation d'une t\xe2che planifi\xe9e. Allez dans le menu ",(0,r.kt)("em",{parentName:"p"},"Reporting \u2192\nMonitoring Business Intelligence \u2192 Configuration ","|"," T\xe2ches planifi\xe9es"),'\net cliquez sur "Ajouter" :'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(26907).Z,width:"1919",height:"946"})),(0,r.kt)("p",null,"Le formulaire de cr\xe9ation d'une nouvelle t\xe2che planifi\xe9e s'ouvre :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(67701).Z,width:"1635",height:"686"})),(0,r.kt)("p",null,"Dans ce premier onglet, partie ",(0,r.kt)("em",{parentName:"p"},"Configuration de la t\xe2che planifi\xe9e"),",\ndonnez un nom \xe0 votre t\xe2che. Ce nom correspond au nom du rapport qui\nsera g\xe9n\xe9r\xe9."),(0,r.kt)("p",null,"N.B. : Vous pourrez avoir rapidement plusieurs dizaines de t\xe2ches\nplanifi\xe9es configur\xe9es, il est donc tr\xe8s important de d\xe9finir des r\xe8gles\nde nommage."),(0,r.kt)("p",null,"Choisissez ensuite :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"le mod\xe8le de rapport sur lequel vous vous basez, dans notre exemple\n",(0,r.kt)("em",{parentName:"li"},"Hostgroup-Host-Availability-List")),(0,r.kt)("li",{parentName:"ul"},"la langue : Fran\xe7ais"),(0,r.kt)("li",{parentName:"ul"},"le format de sortie souhait\xe9 : PDF")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(79182).Z,width:"387",height:"358"})),(0,r.kt)("p",null,"Puis rattachez le rapport \xe0 un groupe. C'est une obligation li\xe9e aux\ndroits et profils utilisateurs."),(0,r.kt)("p",null,"Dans la partie Param\xe8tres d'ordonnancement, choisissez le mode de\nplanification. Vous pouvez choisir une ex\xe9cution imm\xe9diate ou une\nex\xe9cution planifi\xe9e. Dans notre exemple, il est pr\xe9f\xe9rable d'utiliser\nl'ex\xe9cution imm\xe9diate afin de visualiser directement le r\xe9sultat de la\ng\xe9n\xe9ration de la t\xe2che planifi\xe9e."),(0,r.kt)("p",null,"Dans la configuration ci-dessous, le rapport sera g\xe9n\xe9r\xe9 imm\xe9diatement,\nen fran\xe7ais, sur les donn\xe9es du mois dernier :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(59627).Z,width:"1553",height:"810"})),(0,r.kt)("p",null,'Une fois l\'onglet de configuration renseign\xe9, nous pouvons passer \xe0\nl\'onglet "Param\xe8tres du rapports". Cet onglet permet de choisir le\ncontexte sur lequel le rapport sera g\xe9n\xe9r\xe9. Sur cet exemple, nous\nchoisissons de lister la disponibilit\xe9 des h\xf4tes du groupe "Routers" qui\nse situent en "Europe".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(86372).Z,width:"1495",height:"700"})),(0,r.kt)("p",null,"N.B. : Pour la plupart des mod\xe8les de rapports, il est possible de\nchoisir la plage horaire dans laquelle vous souhaitez g\xe9n\xe9rer le\nrapport."),(0,r.kt)("p",null,"Nous choisissons d'analyser la disponibilit\xe9 sur la plage 24\xd77. Pour\n\xeatre visible dans le listing, elle doit obligatoirement et pr\xe9alablement\n\xeatre d\xe9finie dans Centreon et configur\xe9e dans les options g\xe9n\xe9rales de\nCentreon MBI, dans l'onglet \"Options de l'ETL\"."),(0,r.kt)("p",null,"Enfin, s\xe9lectionnez votre logo pour personnaliser votre rapport. Il est\npossible d'en rajouter via le menu \"Logo\" de Centreon MBI. Ces derniers\nseront alors visibles lors du param\xe9trage d'une t\xe2che planifi\xe9e."),(0,r.kt)("p",null,'En cliquant sur "Enregistrer", le rapport est planifi\xe9 selon le mode\nchoisi, dans notre cas, imm\xe9diatement. Sa g\xe9n\xe9ration va d\xe9marrer.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(35664).Z,width:"1616",height:"474"})),(0,r.kt)("p",null,'Si vous ne voyez pas la t\xe2che planifi\xe9e dans la liste, contr\xf4lez les\nfiltres s\'appliquant \xe0 la page. S\xe9lectionnez "Tous" si vous voulez \xeatre\ns\xfbr de voir toutes vos t\xe2ches planifi\xe9es.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(54968).Z,width:"1619",height:"483"})),(0,r.kt)("h2",{id:"r\xe9cup\xe9ration-du-rapport-g\xe9n\xe9r\xe9"},"R\xe9cup\xe9ration du rapport g\xe9n\xe9r\xe9"),(0,r.kt)("p",null,"Une fois la t\xe2che termin\xe9e, rendez-vous dans le menu ",(0,r.kt)("em",{parentName:"p"},"Report view"),".\nCette page contient la liste de tous les rapports g\xe9n\xe9r\xe9s."),(0,r.kt)("p",null,"Pour visualiser votre rapport, il vous suffit de le t\xe9l\xe9charger en\ncliquant sur l'ic\xf4ne du format de sortie disponible, dans notre cas,\nPDF."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(87783).Z,width:"1919",height:"947"})),(0,r.kt)("p",null,"S'ouvre alors le rapport de disponibilit\xe9 des routeurs sur le p\xe9rim\xe8tre\nEurope :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(90578).Z,width:"1360",height:"364"})),(0,r.kt)("p",null,"Bravo ! Vous savez maintenant comment extraire les statistiques de la\nbase de reporting."),(0,r.kt)("p",null,"Vous voulez g\xe9n\xe9rez d'autres rapports ? Parcourez la liste des rapports\ndisponibles, d\xe9terminer ceux qui seront utiles pour suivre et analyser\nla disponibilit\xe9 et la performance de votre SI, et lancez-vous !"))}g.isMDXComponent=!0},26907:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1_FR_createJob-f69363ddab2091c0236b541481d66c6d.png"},67701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2_FR_createJob_FirstTab-fe2f9c3b07df30f2e6336f4cb906cfb4.png"},59627:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3_FR_createJob_FirstTab_Filled-c9f5b118be0444c6ab4b8d547755af9e.png"},86372:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4_FR_createJob_Parameter-a5a43153c54c9635f906f761157deb34.png"},35664:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/5_FR_generateJob-6a8d387a30c06c060e989a51d106fd8d.png"},54968:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/6_FR_generateJob_Filter-0dba0ae10d18e2adc3ce0a914a59e26b.png"},87783:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/7_FR_reportView-69bba31440712d6a5db6c6ae9a9b558a.png"},90578:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/8_FR_availabilityReport-bddad923f5b0b5336048ee939000b8a7.png"},79182:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/createJob_ListReport-e9c4b6997bc6cf43e3164eb46c6dd2d6.png"}}]);