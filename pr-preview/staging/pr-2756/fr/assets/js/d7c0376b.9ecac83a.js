"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10638],{62117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});t(67294);var a=t(3905),r=t(51715),o=t(7626);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const c={id:"commands",title:"Les commandes"},m=void 0,u={unversionedId:"monitoring/basic-objects/commands",id:"version-23.10/monitoring/basic-objects/commands",title:"Les commandes",description:"D\xe9finition",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/commands.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/commands",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/commands",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/commands.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"commands",title:"Les commandes"},sidebar:"version-23.10/docs",previous:{title:"Les macros",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/macros"},next:{title:"Actions g\xe9n\xe9riques",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/generic-actions"}},p={},d=[{value:"D\xe9finition",id:"d\xe9finition",level:2},{value:"Ajouter une commande",id:"ajouter-une-commande",level:2},{value:"Les champs de configuration",id:"les-champs-de-configuration",level:2},{value:"Arguments et macros",id:"arguments-et-macros",level:2},{value:"Les connecteurs",id:"les-connecteurs",level:2},{value:"Connecteur SSH",id:"connecteur-ssh",level:3},{value:"Installation",id:"installation",level:4},{value:"Perl connector",id:"perl-connector",level:3},{value:"Installation",id:"installation-1",level:4}],g={toc:d},k="wrapper";function b(e){var{components:n}=e,c=i(e,["components"]);return(0,a.kt)(k,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){s(e,n,t[n])}))}return e}({},g,c),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"d\xe9finition"},"D\xe9finition"),(0,a.kt)("p",null,"Une commande est la d\xe9finition d\u2019une ligne de commande qui utilise un script ou une application afin de r\xe9aliser une\naction. Il est possible d\u2019ex\xe9cuter cette commande en pr\xe9cisant des arguments."),(0,a.kt)("p",null,"Il existe quatre types de commandes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verification")," sont utilis\xe9es par les ordonnanceurs afin de v\xe9rifier le statut d\u2019un h\xf4te ou d\u2019un service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notification")," sont utilis\xe9es par les ordonnanceurs pour alerter les contacts (via mail, SMS...)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discovery")," sont utilis\xe9es par les r\xe8gles de d\xe9couverte."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Miscellaneous")," sont utilis\xe9es par les modules compl\xe9mentaires (pour effectuer certaines actions), par\nl\u2019ordonnanceur pour le traitement des donn\xe9es...")),(0,a.kt)("p",null,"Toutes les commandes peuvent \xeatre configur\xe9es au sein du menu : ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Commands"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(46044).Z,width:"1809",height:"571"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Par d\xe9faut, les commandes verrouill\xe9es sont masqu\xe9es. Cocher la case "El\xe9ments verrouill\xe9s" pour les afficher toutes.')),(0,a.kt)("h2",{id:"ajouter-une-commande"},"Ajouter une commande"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Commands")),(0,a.kt)("li",{parentName:"ol"},"Cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"Add"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(83767).Z,width:"1974",height:"1278"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les champs de configuration d\u2019une commande sont les m\xeames qu\u2019importe le type de commande choisi.")),(0,a.kt)("h2",{id:"les-champs-de-configuration"},"Les champs de configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"command Name")," d\xe9finit le nom de la commande.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"Command Type")," permet de choisir le type de commande.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"Command Line")," indique l\u2019application ou le script utilis\xe9 avec la commande.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La case ",(0,a.kt)("strong",{parentName:"p"},"Enable shell"),"  permet d\u2019activer des fonctions propres \xe0 un shell tel que le pipe...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"Argument Example"),' d\xe9finir des exemples d\'arguments (chaque argument commence par un "!")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le bouton ",(0,a.kt)("strong",{parentName:"p"},"Describe arguments")," permet d\u2019ajouter une description aux arguments de type \u201c$ARGn$\u201d. Cette description\nsera visible lors de l\u2019utilisation de la commande dans un formulaire d\u2019h\xf4te ou de service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le bouton ",(0,a.kt)("strong",{parentName:"p"},"Clear arguments")," efface la description des arguments d\xe9finie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le bouton ",(0,a.kt)("strong",{parentName:"p"},"Describe macros")," permet d\u2019ajouter une description aux macros personalis\xe9es. Ces descriptions seront\nvisibles lors de l\u2019ajout de la commande sur un host ou un service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La liste de s\xe9lection ",(0,a.kt)("strong",{parentName:"p"},"Connectors")," permet de lier un connecteur \xe0 la commande. Pour davantage d\u2019informations sur\nles connecteurs reportez-vous au chapitre ",(0,a.kt)("a",{parentName:"p",href:"#les-connecteurs"},"les connecteurs"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"Graph template")," permet de lier la commande \xe0 un mod\xe8le de graphique.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"Comment")," permet de commenter la commande."))),(0,a.kt)("h2",{id:"arguments-et-macros"},"Arguments et macros"),(0,a.kt)("p",null,"Au sein du champ ",(0,a.kt)("strong",{parentName:"p"},"Command Line")," il est possible de faire appel \xe0 des\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/macros"},"macros"))," ainsi qu\u2019\xe0 des arguments."),(0,a.kt)("p",null,"Les arguments sont utilis\xe9s afin de pouvoir passer diff\xe9rents param\xe8tres aux scripts appel\xe9s par les commandes. Lors de\nl\u2019ex\xe9cution de la commande par l\u2019ordonnanceur, chacun des arguments et macros sont remplac\xe9s par leur valeur respective.\nChaque macro se pr\xe9sente sous la forme ",(0,a.kt)("strong",{parentName:"p"},"$valeur$")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$CENTREONPLUGINS$/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=cpu \\\n--hostname=$HOSTADDRESS$ --snmp-version='$_HOSTSNMPVERSION$' \\\n--snmp-community='$_HOSTSNMPCOMMUNITY$' $_HOSTSNMPEXTRAOPTIONS$ \\\n--warning-average='$_SERVICEWARNING$' \\\n--critical-average='$_SERVICECRITICAL$' $_SERVICEEXTRAOPTIONS$\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La bonne pratique veut que nous remplacions les arguments par des\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/macros#les-macros-personnalis%C3%A9es"},"macros personnalis\xe9es")),".")),(0,a.kt)("h2",{id:"les-connecteurs"},"Les connecteurs"),(0,a.kt)("h3",{id:"connecteur-ssh"},"Connecteur SSH"),(0,a.kt)("p",null,"Le connecteur Centreon SSH Connector est un logiciel Centreon gratuit, disponible sous licence Apache Software License version 2 (ASL 2.0).\nUtilis\xe9 avec Centreon Engine, il acc\xe9l\xe8re l'ex\xe9cution des contr\xf4les faits via SSH."),(0,a.kt)("h4",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Ex\xe9cutez la commande suivante en tant qu'utilisateur privil\xe9gi\xe9 :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-connector-ssh\n"))),(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-connector-ssh\n"))),(0,a.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-connector-ssh\n")))),(0,a.kt)("h3",{id:"perl-connector"},"Perl connector"),(0,a.kt)("p",null,"Le connecteur Centreon Perl Connector est un logiciel Centreon gratuit, disponible sous licence Apache Software License version 2 (ASL 2.0).\nUtilis\xe9 avec Centreon Engine, il acc\xe9l\xe8re l'ex\xe9cution des scripts Perl."),(0,a.kt)("h4",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"Ex\xe9cutez la commande suivante en tant qu'utilisateur privil\xe9gi\xe9 :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-connector-perl\n"))),(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-connector-perl\n"))),(0,a.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-connector-perl\n")))))}b.isMDXComponent=!0},83767:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/04command-bc491d2b335a9186d768e5d82688ba5b.png"},46044:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/04commandlist-01e4e53d62927daeb15bbf4ced2db8a1.png"}}]);