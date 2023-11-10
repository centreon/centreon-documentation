"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73464],{7452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});n(67294);var s=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"notif-flapping",title:"Flapping"},l=void 0,u={unversionedId:"alerts-notifications/notif-flapping",id:"version-23.10/alerts-notifications/notif-flapping",title:"Flapping",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-flapping.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-flapping",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/notif-flapping",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-flapping.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"notif-flapping",title:"Flapping"},sidebar:"version-23.10/docs",previous:{title:"Les escalades de notifications",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/notif-escalation"},next:{title:"Pour aller plus loin",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/alerts-notifications/notif-advanced"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Fonctionnement de la d\xe9tection de bagotement",id:"fonctionnement-de-la-d\xe9tection-de-bagotement",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Activation de la d\xe9tection des bagotements",id:"activation-de-la-d\xe9tection-des-bagotements",level:3},{value:"D\xe9tection de bagotement pour les services",id:"d\xe9tection-de-bagotement-pour-les-services",level:3},{value:"D\xe9tection de bagotement pour les h\xf4tes",id:"d\xe9tection-de-bagotement-pour-les-h\xf4tes",level:3}],p={toc:d},g="wrapper";function m(e){var{components:t}=e,o=r(e,["components"]);return(0,s.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){i(e,t,n[t])}))}return e}({},p,o),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Centreon Engine prend en charge la d\xe9tection des h\xf4tes et des services\nbagoter. Le bagotement se produit lorsqu'un service ou un h\xf4te change\nd'\xe9tat trop fr\xe9quemment, ce qui entra\xeene une temp\xeate de notifications de\nprobl\xe8mes et de r\xe9cup\xe9ration. Le battement peut indiquer des probl\xe8mes\nde configuration (c'est-\xe0-dire des seuils trop bas), des services\ng\xeanants ou de vrais probl\xe8mes de r\xe9seau."),(0,s.kt)("h2",{id:"fonctionnement-de-la-d\xe9tection-de-bagotement"},"Fonctionnement de la d\xe9tection de bagotement"),(0,s.kt)("p",null,"Chaque fois que Centreon Engine v\xe9rifie l'\xe9tat d'un h\xf4te ou d'un\nservice, il v\xe9rifie s'il l'\xe9tat de bagotement en :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Enregistrant les r\xe9sultats des 21 derni\xe8res v\xe9rifications de l'h\xf4te\nou du service"),(0,s.kt)("li",{parentName:"ul"},"Analysant les r\xe9sultats de l'historique de la v\xe9rification et\nd\xe9terminant o\xf9 se produisent les changements / transitions de\nstatuts"),(0,s.kt)("li",{parentName:"ul"},"Utilisant les transitions de statuts pour d\xe9terminer un pourcentage\nde changement pour l'h\xf4te ou le service"),(0,s.kt)("li",{parentName:"ul"},"Comparant la valeur de changement de statuts en pourcentage aux\nseuils d\xe9termin\xe9s")),(0,s.kt)("p",null,"Un h\xf4te ou un service est d\xe9termin\xe9 en \xe9tat bagotant (flapping) lorsque\nson pourcentage de changement de statuts d\xe9passe pour la premi\xe8re fois\nle seuil haut."),(0,s.kt)("p",null,"Un h\xf4te ou un service redevient en \xe9tat r\xe9gulier lorsque son pourcentage\nde changement de statuts passe en dessous du seuil bas."),(0,s.kt)("h2",{id:"exemple"},"Exemple"),(0,s.kt)("p",null,"D\xe9crivons plus en d\xe9tail le fonctionnement de la d\xe9tection de\nbagotements avec les services..."),(0,s.kt)("p",null,"L'image ci-dessous montre un historique chronologique pour un service\ndes \xe9tats des 21 derniers contr\xf4les. Les \xe9tats OK sont affich\xe9s en vert,\nles \xe9tats WARNING en jaune, les \xe9tats CRITICAL en rouge et les \xe9tats\nUNKNOWN en orange."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(1722).Z,width:"433",height:"181"})),(0,s.kt)("p",null,"L'historique des r\xe9sultats de la v\xe9rification du service sont examin\xe9s\npour d\xe9terminer o\xf9 se produisent les changements / transitions de\nstatuts. Les changements de statut se produisent lorsqu'un \xe9tat archiv\xe9\nest diff\xe9rent de l'\xe9tat archiv\xe9 qui le pr\xe9c\xe8de imm\xe9diatement\nchronologiquement. \xc9tant donn\xe9 que nous conservons les r\xe9sultats des 21\nderni\xe8res v\xe9rifications du service, il est possible d'avoir au plus 20\nchangements de statuts. Dans cet exemple, il y a 7 changements de\nstatuts, indiqu\xe9s par des fl\xe8ches bleues dans l'image ci-dessus."),(0,s.kt)("p",null,"La logique de d\xe9tection des bagotement utilise les changements de\nstatuts pour d\xe9terminer un pourcentage global de changement de statuts\npour le service. Il s'agit d'une mesure de la volatilit\xe9 / du changement\npour le service. Les services qui ne changent jamais de statuts auront\nune valeur de changement de statuts de 0%, tandis que les services qui\nchangent de statuts chaque fois qu'ils sont v\xe9rifi\xe9s auront un\nchangement de statuts de 100%. La plupart des services auront un\nchangement de statuts en pourcentage quelque part entre les deux."),(0,s.kt)("p",null,"Lors du calcul du pourcentage de changement de statuts pour le service,\nl'algorithme de d\xe9tection des bagotements donnera plus de poids aux\nnouveaux changements par rapport aux anciens. Plus pr\xe9cis\xe9ment, les\nroutines de d\xe9tection des bagotements sont con\xe7ues pour que le\nchangement de statut le plus r\xe9cent ait 50% de poids en plus que le\nchangement le plus ancien. L'image ci-dessous montre comment les\nchangements r\xe9cents ont plus de poids que les changements plus anciens\nlors du calcul du changement de statut global ou total en pourcentage\npour un service particulier."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(7009).Z,width:"459",height:"178"})),(0,s.kt)("p",null,"\xc0 l'aide des images ci-dessus, calculons le pourcentage de changement de\nstatut pour le service. Vous remarquerez qu'il y a un total de 7\nchangements de statuts (\xe0 t","_","3, t","_","4, t","_","5, t","_","9, t","_","12, t","_","16 et\nt","_","19). Sans aucune pond\xe9ration des changements au fil du temps, cela\nnous donnerait un changement d'\xe9tat total de 35%:"),(0,s.kt)("p",null,"(7 changements observ\xe9s / 20 possible changements) ","*"," 100 = 35 %"),(0,s.kt)("p",null,"\xc9tant donn\xe9 que la logique de d\xe9tection des bagotements donnera aux\nchangements d'\xe9tat plus r\xe9cents un taux plus \xe9lev\xe9 que les changements\nplus anciens, le pourcentage r\xe9el de changement calcul\xe9 sera l\xe9g\xe8rement\ninf\xe9rieur \xe0 35% dans cet exemple. Disons que le pourcentage pond\xe9r\xe9 du\nchangement d'\xe9tat s'est av\xe9r\xe9 \xeatre de 31%."),(0,s.kt)("p",null,"Le pourcentage de changement de statut calcul\xe9 pour le service (31%)\nsera ensuite compar\xe9 aux seuils de bagotements pour voir ce qui devrait\nse produire:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Si le service \xe9tait en \xe9tat r\xe9gulier auparavant, et que 31% est \xe9gal\nou sup\xe9rieur au seuil de bagotement haut, le moteur Centeron\nconsid\xe8re que le service vient de commencer \xe0 bagoter."),(0,s.kt)("li",{parentName:"ul"},"Si le service \xe9tait en \xe9tat de bagotement pr\xe9c\xe9demment et que 31%\nest inf\xe9rieur au seuil de bagotement bas, le moteur Centreon\nconsid\xe8re que le service redevient dans un \xe9tat r\xe9gulier.")),(0,s.kt)("p",null,"Si aucune de ces deux conditions n'est remplie, la logique de d\xe9tection\ndes bagotement ne fera rien d'autre avec le service, car soit le service\nest en \xe9tat de bagotement, soit en \xe9tt r\xe9gulier."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("h3",{id:"activation-de-la-d\xe9tection-des-bagotements"},"Activation de la d\xe9tection des bagotements"),(0,s.kt)("p",null,"Rendez-vous dans le menu\n",(0,s.kt)("inlineCode",{parentName:"p"},"Configuration > Pollers > Engine configuration")," et s\xe9lectionner un\nmoteur (Centreon Engine). Dans l'onglet ",(0,s.kt)("strong",{parentName:"p"},"Check Options")," ativer la\nd\xe9tection de bagotements :"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(71419).Z,width:"1398",height:"416"})),(0,s.kt)("p",null,"Vous pouvez modifier les seuils ou conserver ceux pr\xe9configur\xe9s."),(0,s.kt)("h3",{id:"d\xe9tection-de-bagotement-pour-les-services"},"D\xe9tection de bagotement pour les services"),(0,s.kt)("p",null,"Si vous activez la d\xe9tection de bagotement pour un moteur (Centreon\nEngine), le processus sera appliqu\xe9 \xe0 toutes les ressources surveill\xe9\npar ce dernier."),(0,s.kt)("p",null,"Vous pouvez d\xe9sactiver / activer la d\xe9tection de bagotement pour un h\xf4te\nvia le menu de configuration."),(0,s.kt)("p",null,"Rendez-vous dans le menu ",(0,s.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts"),", s\xe9lectionnez\nun h\xf4te et acc\xe9dez \xe0 l'onglet ",(0,s.kt)("strong",{parentName:"p"},"Data Processing")," :"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(62341).Z,width:"1170",height:"274"})),(0,s.kt)("p",null,"Vous pouvez \xe9galement adapter les seuils de bagotements pour cette ressource."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Utilisez des mod\xe8les pour faciliter la configuration.")),(0,s.kt)("h3",{id:"d\xe9tection-de-bagotement-pour-les-h\xf4tes"},"D\xe9tection de bagotement pour les h\xf4tes"),(0,s.kt)("p",null,"Si vous activez la d\xe9tection de bagotement pour un moteur (Centreon\nEngine), le processus sera appliqu\xe9 \xe0 toutes les ressources surveill\xe9\npar ce dernier."),(0,s.kt)("p",null,"Vous pouvez d\xe9sactiver / activer la d\xe9tection de bagotement pour un\nservice via le menu de configuration."),(0,s.kt)("p",null,"Rendez-vous dans le menu ",(0,s.kt)("strong",{parentName:"p"},"Configuration > Services > Services by Host"),",\ns\xe9lectionnez un service et acc\xe9dez \xe0 l'onglet ",(0,s.kt)("strong",{parentName:"p"},"Data Processing")," :"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(62341).Z,width:"1170",height:"274"})),(0,s.kt)("p",null,"Vous pouvez \xe9galement adapter les seuils de bagotements pour cette ressource."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Utilisez des mod\xe8les pour faciliter la configuration.")))}m.isMDXComponent=!0},71419:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flap_engine_conf-21e93cdce72c9ad462a488976a47bc95.png"},62341:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flap_host_conf-4ed5c616ec59f1e8cd5444fd202914c6.png"},1722:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},7009:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"}}]);