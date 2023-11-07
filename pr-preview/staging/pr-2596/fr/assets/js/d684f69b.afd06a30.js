"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"web-and-post-installation",title:"Installation Web"},l=void 0,p={unversionedId:"installation/web-and-post-installation",id:"version-23.10/installation/web-and-post-installation",title:"Installation Web",description:"Installation web",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/web-and-post-installation.md",sourceDirName:"installation",slug:"/installation/web-and-post-installation",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/web-and-post-installation",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/web-and-post-installation.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"web-and-post-installation",title:"Installation Web"},sidebar:"version-23.10/docs",previous:{title:"\xc0 partir des sources",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-a-central-server/using-sources"},next:{title:"\xc0 partir des paquets",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-a-poller/using-packages"}},u={},c=[{value:"Installation web",id:"installation-web",level:2},{value:"\xc9tape 1 : Welcome to Centreon setup",id:"\xe9tape-1--welcome-to-centreon-setup",level:3},{value:"\xc9tape 2 : Dependency check up",id:"\xe9tape-2--dependency-check-up",level:3},{value:"\xc9tape 3 : Monitoring engine information",id:"\xe9tape-3--monitoring-engine-information",level:3},{value:"\xc9tape 4 : Broker module information",id:"\xe9tape-4--broker-module-information",level:3},{value:"\xc9tape 5 : Admin information",id:"\xe9tape-5--admin-information",level:3},{value:"\xc9tape 6 : Database information",id:"\xe9tape-6--database-information",level:3},{value:"\xc9tape 7 : Installation",id:"\xe9tape-7--installation",level:3},{value:"\xc9tape 8 : Modules installation",id:"\xe9tape-8--modules-installation",level:3},{value:"\xc9tape 9 : Installation finished",id:"\xe9tape-9--installation-finished",level:3},{value:"Initialisation de la supervision",id:"initialisation-de-la-supervision",level:2},{value:"Ajouter une licence",id:"ajouter-une-licence",level:2},{value:"Installer les extensions disponibles",id:"installer-les-extensions-disponibles",level:2},{value:"S\xe9curisez votre plateforme",id:"s\xe9curisez-votre-plateforme",level:2},{value:"Premiers pas",id:"premiers-pas",level:2}],d={toc:c},m="wrapper";function f(e){var{components:t}=e,o=s(e,["components"]);return(0,a.kt)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation-web"},"Installation web"),(0,a.kt)("p",null,"Connectez-vous \xe0 l'interface web via ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<IP>/centreon"),"."),(0,a.kt)("h3",{id:"\xe9tape-1--welcome-to-centreon-setup"},"\xc9tape 1 : Welcome to Centreon setup"),(0,a.kt)("p",null,"L'assistant de configuration de Centreon s'affiche. Cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(77915).Z,width:"650",height:"300"})),(0,a.kt)("h3",{id:"\xe9tape-2--dependency-check-up"},"\xc9tape 2 : Dependency check up"),(0,a.kt)("p",null,"Les modules et les pr\xe9requis n\xe9cessaires sont v\xe9rifi\xe9s. Ils doivent tous \xeatre satisfaits.\nCliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Refresh")," lorsque les actions correctrices n\xe9cessaires ont \xe9t\xe9 effectu\xe9es."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(67421).Z,width:"650",height:"300"})),(0,a.kt)("p",null,"Puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h3",{id:"\xe9tape-3--monitoring-engine-information"},"\xc9tape 3 : Monitoring engine information"),(0,a.kt)("p",null,"Definissez les chemins utilis\xe9s par le moteur de supervision. Nous recommandons\nd'utiliser ceux par d\xe9faut."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(16475).Z,width:"650",height:"357"})),(0,a.kt)("p",null,"Puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h3",{id:"\xe9tape-4--broker-module-information"},"\xc9tape 4 : Broker module information"),(0,a.kt)("p",null,"Definissez les chemins utilis\xe9s par le multiplexeur. Nous recommandons\nd'utiliser ceux par d\xe9faut."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(66607).Z,width:"650",height:"324"})),(0,a.kt)("p",null,"Puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h3",{id:"\xe9tape-5--admin-information"},"\xc9tape 5 : Admin information"),(0,a.kt)("p",null,"D\xe9finissez les informations n\xe9cessaires pour la cr\xe9ation de l'utilisateur par d\xe9faut, ",(0,a.kt)("strong",{parentName:"p"},"admin"),". Vous utiliserez ce compte pour vous connecter \xe0 Centreon la premi\xe8re fois. Le mot de passe doit \xeatre conforme \xe0 la politique de s\xe9curit\xe9 de mot de passe par d\xe9faut : 12 caract\xe8res minimum, lettres minuscules et majuscules, chiffres et caract\xe8res sp\xe9ciaux. Vous pourrez changer cette politique par la suite."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(71531).Z,width:"650",height:"343"})),(0,a.kt)("p",null,"Puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h3",{id:"\xe9tape-6--database-information"},"\xc9tape 6 : Database information"),(0,a.kt)("p",null,"Fournissez les informations de connexion \xe0 l'instance de base de donn\xe9es."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Database Host Address")," : si vous utilisez une base de donn\xe9es locale, laissez ce champ vide (la valeur par d\xe9faut \xe9tant ",(0,a.kt)("strong",{parentName:"p"},"localhost"),"). Sinon, renseignez l'adresse IP de votre base de donn\xe9es d\xe9port\xe9e.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Root user/password")," : ce compte sera utilis\xe9 pour installer les bases de donn\xe9es."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"S'il s'agit du compte par d\xe9faut (",(0,a.kt)("strong",{parentName:"li"},"root"),"), le mot de passe root de la base de donn\xe9es est celui que vous avez d\xe9fini lorsque vous avez ex\xe9cut\xe9 ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql_secure_installation")," (que vous ayez effectu\xe9 l'installation \xe0 partir des ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-a-central-server/using-packages#s%C3%A9curiser-la-base-de-donn%C3%A9es"},"paquets")," ou bien des ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-a-central-server/using-sources#s%C3%A9curisez-la-base-de-donn%C3%A9es"},"sources"),")."),(0,a.kt)("li",{parentName:"ul"},"Si vous avez d\xe9fini un utilisateur d\xe9di\xe9 avec des privil\xe8ges root sur toutes les bases, (par exemple pendant ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/installation/installation-of-a-central-server/using-packages#avec-base-de-donn%C3%A9es-d%C3%A9port%C3%A9e"},"l'installation d'une base de donn\xe9e d\xe9port\xe9e"),"), utilisez celui-ci. Cet utilisateur pourra \xeatre supprim\xe9 une fois l'installation web termin\xe9e."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Database user name/password"),": les identifiants du compte qui sera utilis\xe9 pour interagir avec les bases de donn\xe9es Centreon. Le compte sera cr\xe9\xe9 pendant l'installation de la base."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(80539).Z,width:"654",height:"460"})),(0,a.kt)("p",null,"Puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h3",{id:"\xe9tape-7--installation"},"\xc9tape 7 : Installation"),(0,a.kt)("p",null,"L'assistant de configuration cr\xe9e les fichiers de configuration et les bases de\ndonn\xe9es."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(17567).Z,width:"650",height:"311"})),(0,a.kt)("p",null,"Quand le processus est termin\xe9, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h3",{id:"\xe9tape-8--modules-installation"},"\xc9tape 8 : Modules installation"),(0,a.kt)("p",null,"S\xe9lectionnez les modules et widgets disponibles \xe0 l'installation."),(0,a.kt)("p",null,"Puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Install"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(93890).Z,width:"650",height:"494"})),(0,a.kt)("p",null,"Une fois les modules install\xe9s, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(92190).Z,width:"650",height:"494"})),(0,a.kt)("h3",{id:"\xe9tape-9--installation-finished"},"\xc9tape 9 : Installation finished"),(0,a.kt)("p",null,"\xc0 cette \xe9tape une publicit\xe9 permet de conna\xeetre les derni\xe8res nouveaut\xe9s de\nCentreon. Si votre plate-forme est connect\xe9e \xe0 Internet vous disposez des derni\xe8res\ninformations. Sinon l\u2019information pr\xe9sente dans cette version sera propos\xe9e."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(38929).Z,width:"650",height:"530"})),(0,a.kt)("p",null,"L\u2019installation est termin\xe9e, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Finish"),"."),(0,a.kt)("p",null,"Vous pouvez maintenant vous connecter en utilisant le compte ",(0,a.kt)("strong",{parentName:"p"},"admin"),", et ",(0,a.kt)("a",{parentName:"p",href:"#initialisation-de-la-supervision"},"initialiser la supervision"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(32239).Z,width:"342",height:"449"})),(0,a.kt)("h2",{id:"initialisation-de-la-supervision"},"Initialisation de la supervision"),(0,a.kt)("p",null,"Pour d\xe9marrer les processus de supervision :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Depuis l'interface web, rendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration >\nCollecteurs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"S\xe9lectionnez le collecteur ",(0,a.kt)("strong",{parentName:"p"},"Central")," dans la liste et cliquez sur\n",(0,a.kt)("strong",{parentName:"p"},"Exporter la configuration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cochez ",(0,a.kt)("strong",{parentName:"p"},"D\xe9placer les fichiers g\xe9n\xe9r\xe9s")," en plus de la s\xe9lection par d\xe9faut\net cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Exporter"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connectez-vous au serveur Central.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"D\xe9marrez/red\xe9marrez les processus de collecte :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Red\xe9marrez le gestionnaire de t\xe2ches :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"D\xe9marrez les services de supervision passive :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start snmptrapd centreontrapd\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Si vous voulez superviser ce serveur, d\xe9marrer le d\xe9mon SNMP :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start snmpd\n")))),(0,a.kt)("p",null,"La supervision est maintenant op\xe9rationnelle."),(0,a.kt)("h2",{id:"ajouter-une-licence"},"Ajouter une licence"),(0,a.kt)("p",null,"Selon votre \xe9dition de Centreon, vous pouvez devoir ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/administration/licenses"},"ajouter une licence"),"."),(0,a.kt)("h2",{id:"installer-les-extensions-disponibles"},"Installer les extensions disponibles"),(0,a.kt)("p",null,"Rendez-vous au menu ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire")," et cliquez sur\nle bouton ",(0,a.kt)("strong",{parentName:"p"},"Install all")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(62825).Z,width:"1003",height:"506"})),(0,a.kt)("h2",{id:"s\xe9curisez-votre-plateforme"},"S\xe9curisez votre plateforme"),(0,a.kt)("p",null,"N'oubliez pas de s\xe9curiser votre plateforme Centreon en suivant nos\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/administration/secure-platform"},"recommandations"),"."),(0,a.kt)("h2",{id:"premiers-pas"},"Premiers pas"),(0,a.kt)("p",null,"Rendez-vous dans le chapitre ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/getting-started/welcome"},"Premiers pas"),"\npour mettre en place votre premi\xe8re supervision."))}f.isMDXComponent=!0},71531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aadmininfo-d162b145642bab07bf27f38f3da43696.png"},66607:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/abrokerinfo2-00c20b915921b5691f637397c6157e0c.png"},67421:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acentreoncheckmodules-25d6c00d349f180a1dfe1741a30692fa.png"},77915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acentreonwelcome-b07c2b25065f0495ce4c9cbfc8957c80.png"},32239:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aconnection-52917c696dd208f7d214ae196c13e2e3.png"},17567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adbconf-cf01b28e65a0a5452815294feeb8bc65.png"},80539:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adbinfo-daa84f23e9e77d7e9d7b0330062331e3.png"},38929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aendinstall-4d2d941bd7964a581f863a6536b8a3c8.png"},16475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/amonitoringengine2-02eec9e3f93c061a1d6c33b1c1731e0c.png"},62825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extensions-manager-26872c6bebe7d1ecc645efc8e831d036.png"},93890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module_installationa-a394f7f9b335211d3f98242fd7a0004f.png"},92190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module_installationb-78aaec5a973449408601c73188d35c8b.png"}}]);