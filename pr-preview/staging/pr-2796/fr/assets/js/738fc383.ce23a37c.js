"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[12845],{92897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var i=n(3905),s=n(51715),r=n(7626);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const l={id:"model-it-services",title:"Mod\xe9liser un service IT",description:"Tutoriel BAM"},c=void 0,p={unversionedId:"getting-started/model-it-services",id:"version-23.10/getting-started/model-it-services",title:"Mod\xe9liser un service IT",description:"Tutoriel BAM",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/model-it-services.md",sourceDirName:"getting-started",slug:"/getting-started/model-it-services",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/getting-started/model-it-services",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/model-it-services.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"model-it-services",title:"Mod\xe9liser un service IT",description:"Tutoriel BAM"},sidebar:"version-23.10/docs",previous:{title:"Cr\xe9er une vue graphique",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/getting-started/create-graphical-view"},next:{title:"Analyser la disponibilit\xe9 des ressources",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/getting-started/analyze-resources-availability"}},d={},m=[{value:"Concepts",id:"concepts",level:2},{value:"Introduction",id:"introduction",level:2},{value:"M\xe9thode d&#39;impl\xe9mentation",id:"m\xe9thode-dimpl\xe9mentation",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Reporting",id:"reporting",level:2}],A={toc:m},E="wrapper";function g(e){var{components:t}=e,l=u(e,["components"]);return(0,i.kt)(E,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},A,l),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"L'extension Centreon BAM est utilis\xe9e pour mod\xe9liser des services IT et applications\nmis \xe0 disposition des utilisateurs finaux. Il permet de conna\xeetre en\ntemps r\xe9el l'\xe9tat du service fourni et d'en suivre l'\xe9volution afin\nde comparer les r\xe9sultats \xe0 des engagements (SLA) pris aupr\xe8s des\nm\xe9tier, utilisateurs internes ou externes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Centreon BAM est une ",(0,i.kt)("strong",{parentName:"p"},"extension")," Centreon qui requiert une license valide. Pour plus d'information,\ncontactez ",(0,i.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,'Un service IT ou une application, dans Centreon BAM, correspond \xe0 un\nnouvel indicateur de supervision orient\xe9 "m\xe9tier", appel\xe9 "Activit\xe9\nm\xe9tier" (Business Activity - BA), \xe0 partir d\'une agr\xe9gation\nd\'indicateurs unitaires collect\xe9s par la supervision appel\xe9 indicateurs\nou KPI (KPI: Key Performance Indicators).'),(0,i.kt)("p",null,"Les indicateurs sont soit des services au sens Centreon soit une r\xe8gle logique\nentre plusieurs services soit une autre activit\xe9 m\xe9tier. Le\nnouvel objet cr\xe9\xe9 \xe0 partir des KPis est appel\xe9\xa0une Business Activity\n(BA)."),(0,i.kt)("p",null,"Il est possible d'utiliser des BA en tant qu'indicateurs d'autre BA afin de\ncr\xe9er des arbre d'impact et mod\xe9liser finement les services IT ou\napplications que vous souhaitez analyser."),(0,i.kt)("p",null,"L'\xe9volution du statut de la BA d\xe9terminera une qualit\xe9 de service (Qos)\ncorrespondant \xe0 la qualit\xe9 rendu par l'application aux utilisateurs de\ncette derni\xe8re. En s'appuyant sur cette mesure de Qos, on peut d\xe9finir\nles niveaux de fonctionnement la BA et ainsi des indicateurs de niveau\nde service (SLA)."),(0,i.kt)("p",null,"En cas de d\xe9faillance de la BA, il est possible d'analyser les\ndysfonctionnements qui ont conduit \xe0 la baisse de la Qos et par\nextension la diminution de la SLA."),(0,i.kt)("p",null,"Ci-dessous un exemple de ce qu'il est possible de mod\xe9liser dans\nCentreon BAM."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(16209).Z,width:"837",height:"356"})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"La construction d'une BA et de ses KPI associ\xe9s doit \xeatre r\xe9alis\xe9e de\nmani\xe8re ",(0,i.kt)("em",{parentName:"p"},"simple")," et par \xe9tape. L'id\xe9al est de commencer par int\xe9grer les\nindicateurs les plus \xe9vidents, ceux directement li\xe9s au fonctionnement g\xe9n\xe9ral\nde la BA puis d'ajouter au fur et \xe0 mesure celles qui ont un impact\npotentiel sur le fonctionnement global."),(0,i.kt)("p",null,"Tous les indicateurs ajout\xe9s aux BA doivent \xeatre initialement supervis\xe9s\npar le syst\xe8me de supervision pour conna\xeetre leurs \xe9tats de fonctionnement."),(0,i.kt)("p",null,"Une des notions importantes \xe0 comprendre lorsqu'on manipule des BA est la m\xe9thode de calcul appliqu\xe9e. Il\ny a quatre m\xe9thodes de calcul disponible afin de rendre compte de l'\xe9tat d'une BA:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Best Status"),": Lorsque vous souhaitez suivre le dysfonctionnement de TOUS les indicateurs au m\xeame moment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Worst Status"),": Lorsque vous souhaitez savoir d\xe8s qu'un indicateur ne fonctionne plus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ratio"),": Lorsque vous souhaitez mod\xe9liser des concepts de ",(0,i.kt)("strong",{parentName:"li"},"Cluster")," en sp\xe9cifiant un pourcentage ou un nombre\nde resources maximum en statut Critique que vous ne voulez pas d\xe9passez"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Impact"),": Lorsque vous souhaitez d\xe9finir finement l'impact de chaque indicateur en fonction de leurs poids (<=> s\xe9v\xe9rit\xe9)")),(0,i.kt)("p",null,"Pour plus d'information sur les m\xe9thodes de calcul, consulter ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/service-mapping/ba-management#m%C3%A9thodes-de-calcul"},"ce chapitre")),(0,i.kt)("h2",{id:"m\xe9thode-dimpl\xe9mentation"},"M\xe9thode d'impl\xe9mentation"),(0,i.kt)("p",null,"La premi\xe8re chose \xe0 faire avant de d\xe9marrer la cr\xe9ation d'une activit\xe9 m\xe9tier dans Centreon est d'avoir parfaitement\nen t\xeate / sur papier, la composition de l'application ou du service m\xe9tier cible que vous allez mod\xe9liser et de s'assurer\nque les indicateurs sont tous disponibles, c'est \xe0 dire supervis\xe9s, dans Centreon. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"La visualisation"),' d\'une activit\xe9 m\xe9tier se fait de haut en bas: vous souhaitez repr\xe9senter une application "A", dont le\nfonctionnement repose sur des concepts R\xe9seau, Backend & Frontaux, qui eux m\xeame reposent sur des serveurs et \xe9quipements r\xe9seaux dont le fonctionnement est d\xe9termin\xe9 par leurs ',(0,i.kt)("em",{parentName:"p"},"services")," (au sens Centreon)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"La cr\xe9ation")," d'une activit\xe9 m\xe9tier se fait de bas en haut: vous partez des ",(0,i.kt)("em",{parentName:"p"},"services"),' pour donner une repr\xe9sentation\ndu statut des \xe9quipements r\xe9seau et servers pour ensuite les agr\xe9ger en indicateur "R\xe9seau", Frontaux, Backend pour enfin\ncr\xe9er un indicateur de plus haut niveau repr\xe9sentant l\'application "A"'),(0,i.kt)("p",null,"Maintenant que vous avez d\xe9termin\xe9 les indicateurs qui entrent dans\nla composition de la BA, vous pouvez les cat\xe9goriser en deux cat\xe9gories:\xa0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les indicateurs cl\xe9s dont on sait qu'ils ont un impact bloquant"),(0,i.kt)("li",{parentName:"ul"},"Les indicateurs cl\xe9s dont on ne sait pas mesurer l'impact")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Dans un premier temps il est plus simple d'utiliser uniquement les indicateurs\nayant des impacts \"",(0,i.kt)("em",{parentName:"p"},"Bloquants"),'".')),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("p",null,"Prenons un exemple assez simple: la mod\xe9lisation d'un cluster de serveurs frontaux. Nous voulons nous assurer que\n20% au moins des serveurs sont fonctionnels."),(0,i.kt)("p",null,"Cela se fera en deux \xe9tapes (de bas en haut)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Premi\xe8rement, d\xe9finir ce qu'est un frontend server qui fonctionne en cr\xe9ant un premier niveau de BA"),(0,i.kt)("li",{parentName:"ul"},"Ensuite, d\xe9finir la r\xe8gle de clustering au dessus des BA en cr\xe9ant une BA parent")),(0,i.kt)("p",null,"D\xe9finissons simplement ce qu'est un serveur frontend-x qui est ok:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"un serveur qui n'est pas surcharg\xe9 (load qui n'est pas critique)"),(0,i.kt)("li",{parentName:"ul"},"un espace disque qui n'est pas proche de la saturation (statut critique dans Centreon)"),(0,i.kt)("li",{parentName:"ul"},"de la m\xe9moire physique qui n'est pas proche de la saturation (statut critique dans Centreon)")),(0,i.kt)("p",null,"Partant de ces r\xe8gles, l'\xe9tat d'un serveur frontal le plus appropri\xe9 va \xeatre d\xe9termin\xe9 par la\nr\xe8gle de calcul \"Worst status\". Voici un exemple avec le serveur (1)"),(0,i.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Concept",label:"Concept",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(26200).Z,width:"514",height:"165"}))),(0,i.kt)(r.Z,{value:"Configuration",label:"Configuration",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(57914).Z,width:"560",height:"397"})))),(0,i.kt)("p",null,'Maintenant que nous avons d\xe9fini nos 10 serveurs frontaux en suivant cette r\xe8gle, il est temps de cr\xe9er notre BA\nprincipale: le cluster des serveurs frontaux. Nous allons pour cela utiliser la r\xe8gle "Ratio" et d\xe9fnir que ce Cluster\npassera en Critique lorsque plus de 80% des serveurs frontaux seront non-ok.'),(0,i.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Concept",label:"Concept",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(48687).Z,width:"328",height:"467"}))),(0,i.kt)(r.Z,{value:"Configuration",label:"Configuration",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(38782).Z,width:"558",height:"476"})))),(0,i.kt)("p",null,"Pour rajouter de la pro-activit\xe9 dans notre gestion et \xe9viter que le cluster comptent 80% de frontaux non fonctionnels,\nnous pouvons \xe9galement ajouter la r\xe8gle suivant: \xe0 partir de 50% de serveurs frontaux non disponibles, nous voulons \xeatre\navertis"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(82418).Z,width:"561",height:"470"})),(0,i.kt)("p",null,"Au final nous obtenons cette activit\xe9 m\xe9tier \"Frontend Cluster\" nous permettant de suivre l'\xe9tat de fonctionnement\ng\xe9n\xe9ral des serveurs frontaux. Il est \xe9galement possible de r\xe9-utiliser cette BA dans une autre, notamment une BA repr\xe9sentant le fonctionnement d'une application reposant sur ces serveurs."),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"image",src:n(70362).Z,width:"893",height:"644"})),(0,i.kt)("p",null,"En suivant au quotidien l'\xe9tat de la BA, il sera possible de faire des ajustements afin de rendre compte de plus\nen plus pr\xe9cisemment de l'\xe9tat du service ou de l'application repr\xe9sent\xe9 par la BA ou ses composants."),(0,i.kt)("p",null,'La valeur finale de la SLA est li\xe9e au temps pass\xe9 dans les \xe9tats\nop\xe9rationnels, d\xe9grad\xe9s/critiques (indisponibilit\xe9/disponibilit\xe9),\nvisible dans les \xe9crans de "reporting".'),(0,i.kt)("h2",{id:"reporting"},"Reporting"),(0,i.kt)("p",null,"Maintenant que vous \xeates pro-actif sur la gestion de vos services IT et applications gr\xe2ce \xe0 un suivi temps r\xe9el\nde leur \xe9tat, il est temps d'analyser la disponibilit\xe9 par rapport aux SLA.\nCela est possible gr\xe2ce \xe0 l'extension Centreon MBI et la configuration de la section \"Reporting\" de la BA."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Comment la disponibilit\xe9 est elle calcul\xe9e ?")),(0,i.kt)("p",null,"La disponibilit\xe9 est calcul\xe9e par rapport au temps pass\xe9 dans les status OK, Warning et Critical."),(0,i.kt)("p",null,"Exemples\xa0:\xa0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supervision 24x7\xa0"),(0,i.kt)("li",{parentName:"ul"},"Sur une p\xe9riode de 1 jour, le temps pass\xe9 dans chaque seuil pour la\xa0BA:\xa0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BA en statut OK = 23hours & 30min"),(0,i.kt)("li",{parentName:"ul"},"BA en statut WARNING = 10 minutes"),(0,i.kt)("li",{parentName:"ul"},"BA en statut CRITICAL = 20 minutes")))),(0,i.kt)("p",null,"Dans le cas pr\xe9sent, la disponibilit\xe9 se calcul comme suit:\xa0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"% de disponibilit\xe9 & performance optimale ~ 97,917% (Op\xe9rationnel)"),(0,i.kt)("li",{parentName:"ul"},"% de disponibilit\xe9 ~ 0,694% (D\xe9grad\xe9)"),(0,i.kt)("li",{parentName:"ul"},"% d'indisponibilit\xe9 ~ 1,388% (Critique)")))}g.isMDXComponent=!0},82418:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/conf-ratio-with-warn-48f5468f587e92ea4d23735b876a2f40.png"},38782:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/conf-ratio-5d03b5369d0bb115202252ccad7bfa28.png"},16209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/example-bf480b024ab51085ffbd71b1d848388c.png"},70362:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/final-frontend-928358087d81056bc6f4c78ace563962.png"},26200:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgIAAAClCAYAAAAuw5WzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB6oSURBVHhe7Z17sFVl3cf7p/6xGZhqqknLbLKZNAYbtZysoYuNr02FTmMzThcs0zF7FQWxi2h4aYpSRBNJgyQETQYBIYFQ1MwbpgEhXVQQC8gR3wy6qH+t9/08Z//O+7BYm7PPOZtz9j7r85l5Zq31POu57L3O2d/vc1lrvaYQERGR2qIREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZFh4PHHH09huNEIiIhIR/D3v/+9mD17dvG9732v+Pa3v12cddZZKa4/IKwbN25sHLWfTZs2FbNmzSruvPPOtF29enUjpf8sWrRIIyAiIhKcd955xc6dOxtHPaIe/OEPfyhWrFiRAvzjH/8oHnjggSSmEccW88CWtLvuuisJ9b///e/itttu2ys/3HHHHcU3v/nNYt68eemYMkmPuqq4+OKLi127djWOiuLBBx8s/vWvfxW7d+8ubrzxxmLatGnFn/70p5RGGX/729+Ku+++e6/yYj/fYnyuv/763rzlzwuPPfZYcd999yUz0k40AiIiMuz8/ve/30v0cn7yk58UP/jBD4pt27YVy5cvLx566KFiw4YNxc0335zy3HLLLUn44fLLL0/bGTNmFNddd13xyCOPFD/+8Y/TeS+88ELarlu3Lon2VVddVezZsyeZBeJpA4LMMSahqj2Yhttvv73YsmVLI6bHQGBAyI+QX3nllSl+zpw5qYzf/e53xaWXXpriMAzf+MY30v7UqVOLHTt2FDfddFPKh8ivWbMm1Y2hyD8vhmP+/PkpH+1upxnQCIiIyLCzcOHCpkP6U6ZMScIdASFctmxZsWDBgpSOCVi7dm3qRUfvfvLkyUn4AZHO8997773Fz372s+L5559P6RgDzASiPXfu3BT3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+MO9beQ7mT59evHqq68WkydPTnEiraIREOlC2r1GgDsQckJQIRfBVowA+3l+et0RR8hFGSIPcaTlcTG6wBZIp07KJI72RLkExDxvD+czEoC4E6Cv9kSdYQygmRHIywnCCDzwwAPF5z73ud7v7H3ve1/aHn300cVvf/vblIdzCeeee27awhvf+Ma0hYMPPjhtcyNw4oknFps3by4+8pGP9NbLZ3jPe95TzJ49e6+2iLSCRkCkCznQdw0gJiHkuQgy5E7vE7FEUBGgXHhjn8AUB2JK/mXLlqU85AfiQtwjD1sEFEEMsc6hZ0851HnyySen/EwRRHuor9weoE7MAGnQrD2RnkP7aQ8jB2xzc9AMzuNzAFMcX/rSl9L+cccdl7Y33nhjaiNizijGK6+8Upx11lm9RoARg4B6ASPAOTNmzChOOOGEFEeb88/58Y9/PJkMkf6iERDpUtr5HIHyo4YRvBCZ6EkHHCNkIYqcV95HVBFujmM/z0MZVfk5j7Q8LifqJj0ox5XzIvicEzRrTxWUxXkR8nqbwTlhBMizbt26tB9xsGTJkiTsGzf2fO+kRdn5efn+/PnzU9izZ086zvMARuKUU05pHIm0jkZApEvxyYISLFiwIN2ZwCiDSH/RCIh0MYMdFfih7xoYEWzdujVNMYgMBI2ASJczUDOACdji2wdFao9GQGQE0F8z4EiAiAQaAZERAiv/Efgq4Y/A8wKq3isgIvVFIyAywqCnj9gzShCBBYE8e0BEpIxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpLYUxf8CmzKAiS+AijYAAAAASUVORK5CYII="},57914:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/frontend-1-conf-a96be9bb3eebdc3ef7630383b0d07623.png"},48687:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ratio-19e5e81b9b85915e4da52bb89edc21a9.png"}}]);