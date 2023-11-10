"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73525],{32034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>A,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const i={id:"macros",title:"Les macros"},A=void 0,l={unversionedId:"monitoring/basic-objects/macros",id:"version-23.10/monitoring/basic-objects/macros",title:"Les macros",description:"Une macro est une variable permettant de r\xe9cup\xe9rer certaines valeurs. Une macro commence et se termine toujours par le",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/macros.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/macros",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/macros",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/macros.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"macros",title:"Les macros"},sidebar:"version-23.10/docs",previous:{title:"Les p\xe9riodes temporelles",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/timeperiods"},next:{title:"Les commandes",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/monitoring/basic-objects/commands"}},m={},u=[{value:"Les macros standards",id:"les-macros-standards",level:2},{value:"Les macros personnalis\xe9es",id:"les-macros-personnalis\xe9es",level:2},{value:"D\xe9finition",id:"d\xe9finition",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Cas particulier",id:"cas-particulier",level:3},{value:"Les macros de ressources",id:"les-macros-de-ressources",level:2},{value:"Les macros d\u2019environnement",id:"les-macros-denvironnement",level:2}],c={toc:u},p="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(p,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},c,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Une macro est une variable permettant de r\xe9cup\xe9rer certaines valeurs. Une macro commence et se termine toujours par le\nsigne "$".'),(0,n.kt)("h2",{id:"les-macros-standards"},"Les macros standards"),(0,n.kt)("p",null,"Les macros standards sont des macros pr\xe9d\xe9finies dans le code source des moteurs de supervision. Ces diff\xe9rentes macros\npermettent de r\xe9cup\xe9rer la valeur de diff\xe9rents objets au sein des commandes."),(0,n.kt)("p",null,"Exemple :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La macro ",(0,n.kt)("strong",{parentName:"li"},"$HOSTADDRESS$")," permet de r\xe9cup\xe9rer l\u2019adresse IP d\u2019un h\xf4te"),(0,n.kt)("li",{parentName:"ul"},"La macro ",(0,n.kt)("strong",{parentName:"li"},"$CONTACTEMAIL$")," permet de r\xe9cup\xe9rer l\u2019adresse mail du contact")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La liste compl\xe8te des macros est disponible \xe0 cette ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/macrolist.html"},"adresse")),".")),(0,n.kt)("h2",{id:"les-macros-personnalis\xe9es"},"Les macros personnalis\xe9es"),(0,n.kt)("h3",{id:"d\xe9finition"},"D\xe9finition"),(0,n.kt)("p",null,"Les macros personnalis\xe9es sont des macros d\xe9finies par l\u2019utilisateur lors de la cr\xe9ation d\u2019un h\xf4te ou d\u2019un service.\nElles sont utilis\xe9es dans les commandes de v\xe9rifications. Les macros personnalis\xe9es commencent par $_HOST pour les\nmacros personnalis\xe9es d\u2019h\xf4tes et par $_SERVICE pour les macros personnalis\xe9es de services."),(0,n.kt)("p",null,"Il y a plusieurs avantages \xe0 utiliser les macros personnalis\xe9es \xe0 la place des arguments :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La fonction de la macro est d\xe9finie dans le nom de celle-ci. La macro $_HOSTMOTDEPASSEINTRANET$ est plus facilement\nlisible que $ARG1$"),(0,n.kt)("li",{parentName:"ul"},"Les macros h\xe9ritent des mod\xe8les d\u2019h\xf4tes et de services, la modification d\u2019une seule macro est donc possible pour un\nh\xf4te ou un service. En revanche, les arguments doivent \xeatre tous red\xe9finis en cas de modification d\u2019un seul argument"),(0,n.kt)("li",{parentName:"ul"},"Le nombre d\u2019arguments est limit\xe9 \xe0 32 contrairement aux macros personnalis\xe9es qui sont infinies")),(0,n.kt)("p",null,"Une macro d\u2019h\xf4te est utilis\xe9e pour d\xe9finir une variable qui est propre \xe0 l\u2019h\xf4te et qui ne changera pas qu\u2019importe le\nservice interrog\xe9 : des identifiants de connexion \xe0 l\u2019h\xf4te, un port de connexion pour un service particulier, une\ncommunaut\xe9 SNMP."),(0,n.kt)("p",null,"Une macro de service est plut\xf4t utilis\xe9e pour d\xe9finir des param\xe8tres propres \xe0 un service : un seuil WARNING/CRITICAL,\nune partition \xe0 interroger..."),(0,n.kt)("h3",{id:"exemple"},"Exemple"),(0,n.kt)("p",null,"Lors de la d\xe9finition d\u2019un h\xf4te, les macros suivantes sont cr\xe9\xe9es :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(29968).Z,width:"611",height:"68"})),(0,n.kt)("p",null,"Pour faire appel \xe0 ces macros dans une commande de v\xe9rification, il faudra les invoquer en utilisant les variables\nsuivantes : $_HOSTUSERLOGIN$, $_HOSTUSERPASSWORD$."),(0,n.kt)("p",null,"Lors de la d\xe9finition d\u2019un service, les macros suivantes sont cr\xe9\xe9es :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(55721).Z,width:"608",height:"103"})),(0,n.kt)("p",null,"Pour faire appel \xe0 ces macros dans une commande de v\xe9rification, il faudra les invoquer en utilisant les variables\nsuivantes : $_SERVICEPARTITION$, $_SERVICEWARNING$, $_SERVICECRITICAL$."),(0,n.kt)("h3",{id:"cas-particulier"},"Cas particulier"),(0,n.kt)("p",null,"Les champs ",(0,n.kt)("strong",{parentName:"p"},"Community SNMP & Version")," pr\xe9sent au sein d\u2019une fiche d\u2019h\xf4te g\xe9n\xe8rent automatiquement les macros\npersonnalis\xe9es suivantes : $_HOSTSNMPCOMMUNITY$ et $_HOSTSNMPVERSION$."),(0,n.kt)("h2",{id:"les-macros-de-ressources"},"Les macros de ressources"),(0,n.kt)("p",null,"Les macros de ressources sont des macros globales qui sont utilis\xe9es par le moteur de supervision. Ces macros peuvent\n\xeatre invoqu\xe9es par n\u2019importe quel type de commande. Elles se pr\xe9sentent sous la forme $USERn$ o\xf9 \u2018n\u2019 est compris entre\n1 et 256."),(0,n.kt)("p",null,"D\u2019une mani\xe8re g\xe9n\xe9rale, ces macros sont utilis\xe9es pour faire r\xe9f\xe9rence aux chemins contenant les sondes de supervision.\nPar d\xe9faut, la macro $USER1$ est cr\xe9\xe9e et sa valeur est la suivante : /usr/lib/nagios/plugins."),(0,n.kt)("p",null,"Pour ajouter une macro de ressources :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Renez-vous dans le menu ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Pollers > Resources")),(0,n.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Add"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(50498).Z,width:"1029",height:"356"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Resource Name")," d\xe9finit le nom de la macro de ressources. Exemple : $USER3$"),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"MACRO Expression")," d\xe9finit la valeur de la macro."),(0,n.kt)("li",{parentName:"ul"},"La liste ",(0,n.kt)("strong",{parentName:"li"},"Linked Instances")," permet de d\xe9finir quels seront les moteurs de supervision qui pourront acc\xe9der \xe0 cette\nmacro."),(0,n.kt)("li",{parentName:"ul"},"Les champs ",(0,n.kt)("strong",{parentName:"li"},"Status")," et ",(0,n.kt)("strong",{parentName:"li"},"Comment")," permettent d\u2019activer/d\xe9sactiver la macro ou de la commenter.")),(0,n.kt)("h2",{id:"les-macros-denvironnement"},"Les macros d\u2019environnement"),(0,n.kt)("p",null,'Les macros d\u2019environnement (aussi appel\xe9es macros \u201c\xe0 la demande\u201d ou \u201con demand\u201d en anglais) permettent de r\xe9cup\xe9rer des\ninformations \xe0 partir de tous les objets issus de la supervision. Elles sont utilis\xe9es afin de pouvoir r\xe9cup\xe9rer \xe0 un\ninstant "t" la valeur d\u2019un objet.'),(0,n.kt)("p",null,"Elles sont compl\xe9mentaires aux macros standards. Exemple :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La macro standard $CONTACTEMAIL$ fait r\xe9f\xe9rence \xe0 l\u2019adresse email du contact qui utilisera la commande de notification"),(0,n.kt)("li",{parentName:"ul"},'La macro d\u2019environnement $CONTACTEMAIL:centreon$ retournera l\u2019adresse email de l\u2019utilisateur "centreon"')),(0,n.kt)("p",null,"La documentation compl\xe8te des macros \xe0 la demande est disponible \xe0 cette ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/macros.html"},"adresse")),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"L\u2019utilisation de ces macros n\u2019est pas recommand\xe9e car la recherche d\u2019une valeur d\u2019un param\xe8tre d\u2019un objet depuis un\nautre objet est consommateur en termes de ressources.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"L\u2019activation du param\xe8tre ",(0,n.kt)("strong",{parentName:"p"},"Use large installation tweaks")," rend impossible l\u2019utilisation des macros d\u2019environnement.")))}d.isMDXComponent=!0},29968:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},50498:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01macrosressources-ee01590d1884401ec03c601b5a89a6e7.png"},55721:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);