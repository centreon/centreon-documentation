"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[69571],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"developer-module",title:"Comment \xe9crire un module"},i=void 0,u={unversionedId:"developer/developer-module",id:"version-23.10/developer/developer-module",title:"Comment \xe9crire un module",description:"Vous souhaitez cr\xe9er un nouveau module pour Centreon ou adapter un module existant\xa0? Vous \xeates au bon endroit\xa0!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-module.md",sourceDirName:"developer",slug:"/developer/developer-module",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/developer/developer-module",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-module.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"developer-module",title:"Comment \xe9crire un module"},sidebar:"version-23.10/docs",previous:{title:"Developer resources",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/category/developer-resources"},next:{title:"Comment \xe9crire un Stream Connector",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/developer/developer-stream-connector"}},p={},d=[{value:"Base",id:"base",level:2},{value:"Avanc\xe9",id:"avanc\xe9",level:2},{value:"Connexion \xe0 la base de donn\xe9es",id:"connexion-\xe0-la-base-de-donn\xe9es",level:3},{value:"Fonctions existantes",id:"fonctions-existantes",level:3}],c={toc:d},m="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(m,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Vous souhaitez cr\xe9er un nouveau module pour Centreon ou adapter un module existant\xa0? Vous \xeates au bon endroit\xa0!"),(0,r.kt)("p",null,"Un mod\xe8le de module vide est disponible dans le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-dummy"},"d\xe9p\xf4t Centreon"),"."),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"REMARQUE\xa0:"))," La documentation principale est directement stock\xe9e dans le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-dummy/blob/master/README.md"},"d\xe9p\xf4t ",(0,r.kt)("strong",{parentName:"a"},"centreon-dummy")," fourni \xe0 titre d'exemple"),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Il faut savoir que Centreon contient une page d\xe9di\xe9e \xe0 l\u2019installation et \xe0 la d\xe9sinstallation des modules (",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire"),"). Pour que le module apparaisse sur cette page, son r\xe9pertoire doit \xeatre plac\xe9 dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"modules/")," de Centreon. Exemple\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"/usr/share/centreon/www/modules/dummy\n")),(0,r.kt)("h2",{id:"base"},"Base"),(0,r.kt)("p",null,"Les \xe9l\xe9ments essentiels que doit contenir le r\xe9pertoire de votre module sont pr\xe9sent\xe9s ci-dessous\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PHP"},"$module_conf['dummy'] = [\n    // Short module's name. Must be equal to your module's directory name\n    'name' => 'dummy',\n    // Full module's name\n    'rname' => 'Dummy Example Module',\n    // Module's version\n    'mod_release' => '23.04',\n    // Additional information\n    'infos' => 'This module is a skeleton',\n    // Allow your module to be uninstalled\n    'is_removeable' => '1',\n    // Module author's name\n    'author' => 'Centreon',\n    // Stability of module.\n    'stability' => 'stable',\n    // Last time module was updated.\n    'last_update' => '2020-12-01',\n    // Release notes link, if any.\n    'release_note' => 'https://docs.centreon.com/current/en/releases/centreon-os-extensions',\n    // Images associated with this module.\n    'images' => [\n        'images/centreon.png',\n    ],\n];\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[","php > install.php]")),(0,r.kt)("p",null,"Ce fichier PHP est ex\xe9cut\xe9 \xe0 l\u2019installation du module s\u2019il est configur\xe9 dans le fichier ",(0,r.kt)("em",{parentName:"p"},"conf.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[","php > uninstall.php]")),(0,r.kt)("p",null,"Ce fichier PHP est ex\xe9cut\xe9 \xe0 la d\xe9sinstallation du module s\u2019il est configur\xe9 dans le fichier ",(0,r.kt)("em",{parentName:"p"},"conf.php"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[","sql > install.sql]")),(0,r.kt)("p",null,"Ce fichier SQL est ex\xe9cut\xe9 lors de l\u2019installation du module s\u2019il est configur\xe9 dans le fichier ",(0,r.kt)("em",{parentName:"p"},"conf.php"),". Si vous souhaitez que votre module soit disponible dans les menus Centreon, vous devez ins\xe9rer de nouvelles entr\xe9es dans la table ",(0,r.kt)("inlineCode",{parentName:"p"},"topology")," de la base de donn\xe9es ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon"),". Un exemple est disponible \xe0 l\u2019int\xe9rieur du module ",(0,r.kt)("inlineCode",{parentName:"p"},"Dummy"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[","sql > uninstall.sql]")),(0,r.kt)("p",null,"Ce fichier SQL est ex\xe9cut\xe9 lors de la d\xe9sinstallation du module s\u2019il est configur\xe9 dans le fichier ",(0,r.kt)("em",{parentName:"p"},"conf.php"),". Il peut \xe9galement supprimer votre module des menus Centreon."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[","generate","_","files > ","*",".php]")),(0,r.kt)("p",null,"Les fichiers PHP contenus dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_files")," seront ex\xe9cut\xe9s lors de la g\xe9n\xe9ration des fichiers de configuration du moteur de supervision (dans ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Collecteurs"),"). Ces fichiers doivent g\xe9n\xe9rer des fichiers de configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[","UPGRADE > dummy-x.x > sql > upgrade.sql]")),(0,r.kt)("p",null,"Centreon propose un syst\xe8me de mise \xe0 niveau des modules. Pour l\u2019utiliser, il suffit d\u2019ajouter un r\xe9pertoire sous ",(0,r.kt)("inlineCode",{parentName:"p"},"UPGRADE")," nomm\xe9 selon le mod\xe8le suivant\xa0: ",(0,r.kt)("inlineCode",{parentName:"p"},"<module name>-<version>"),". Lorsque vous cliquez sur le bouton de mise \xe0 niveau, Centreon recherche les scripts \xe0 ex\xe9cuter, en suivant l\u2019ordre logique des versions."),(0,r.kt)("p",null,"Par exemple, si la version\xa01.0 du module d'exemple est install\xe9e et que les r\xe9pertoires suivants existent\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"ls UPGRADE\ndummy-1.1 dummy-1.2\n")),(0,r.kt)("p",null,"Centreon ex\xe9cutera les scripts dans l\u2019ordre suivant\xa0: 1.1, 1.2. Un fichier de configuration dans chaque r\xe9pertoire de mise \xe0 niveau est pr\xe9sent afin d\u2019autoriser (ou non) l\u2019ex\xe9cution."),(0,r.kt)("p",null,"Vous \xeates libre d\u2019organiser les fichiers restants (le contenu de votre module) comme vous le souhaitez."),(0,r.kt)("h2",{id:"avanc\xe9"},"Avanc\xe9"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Cette section est obsol\xe8te, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-dummy/blob/master/README.md"},"documentation du d\xe9p\xf4t d'exemple")))),(0,r.kt)("p",null,"C\u2019est fantastique, vous savez comment installer un module\xa0! Comme un module vide n\u2019est pas vraiment utile, faites travailler votre imagination. Sachant que vous pouvez presque tout faire, cela ne devrait pas \xeatre trop compliqu\xe9 :-)."),(0,r.kt)("h3",{id:"connexion-\xe0-la-base-de-donn\xe9es"},"Connexion \xe0 la base de donn\xe9es"),(0,r.kt)("p",null,"Vous pouvez utiliser les bases de donn\xe9es ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"centstorage")," en appelant le fichier suivant\xa0: ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon/www/class/centreonDB.class.php"),"."),(0,r.kt)("p",null,"Par exemple, ex\xe9cutez des requ\xeates comme celle-ci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PHP"},'$pearDB = new CentreonDB();\n$pearDB->query("SELECT * FROM host");\n')),(0,r.kt)("h3",{id:"fonctions-existantes"},"Fonctions existantes"),(0,r.kt)("p",null,"Vous pouvez acc\xe9der \xe0 la plupart des fonctions d\xe9j\xe0 d\xe9velopp\xe9es dans Centreon \xe0 l\u2019aide d\u2019instructions ",(0,r.kt)("inlineCode",{parentName:"p"},"include()"),". Elles sont g\xe9n\xe9ralement stock\xe9es dans ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon/www/class/"),"."),(0,r.kt)("p",null,"Avant de d\xe9velopper votre propre fonction, v\xe9rifiez le code existant, cela pourrait vous faire gagner du temps\xa0!"))}f.isMDXComponent=!0}}]);