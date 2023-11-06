"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[90158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,v=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"developer-broker-stream-connector-migration",title:"Migration des Stream Connectors vers BBDO\xa03.0.0"},l=void 0,p={unversionedId:"developer/developer-broker-stream-connector-migration",id:"version-23.10/developer/developer-broker-stream-connector-migration",title:"Migration des Stream Connectors vers BBDO\xa03.0.0",description:"Centreon Broker\xa022.04.0 et suivantes comprend une nouvelle version\xa03.0.0 de son protocole BBDO. Ce nouveau protocole est beaucoup plus souple que le pr\xe9c\xe9dent\xa0:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-broker-stream-connector-migration.md",sourceDirName:"developer",slug:"/developer/developer-broker-stream-connector-migration",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/developer/developer-broker-stream-connector-migration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-broker-stream-connector-migration.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"developer-broker-stream-connector-migration",title:"Migration des Stream Connectors vers BBDO\xa03.0.0"},sidebar:"version-23.10/docs",previous:{title:"Comment \xe9crire un Stream Connector",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/developer/developer-stream-connector"},next:{title:"Comment traduire Centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/developer/developer-translate-centreon"}},u={},c=[{value:"Exemple de Stream Connector qui ne fonctionnera pas avec BBDO 3.0",id:"exemple-de-stream-connector-qui-ne-fonctionnera-pas-avec-bbdo-30",level:2}],m={toc:c},d="wrapper";function v(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centreon Broker\xa022.04.0 et suivantes comprend une nouvelle version\xa03.0.0 de son protocole BBDO. Ce nouveau protocole est beaucoup plus souple que le pr\xe9c\xe9dent\xa0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"il n\u2019est pas fig\xe9 dans le temps, mais peut \xeatre mis \xe0 jour sans rupture\xa0;"),(0,r.kt)("li",{parentName:"ul"},"il supporte des objets plus structur\xe9s comme les tableaux, les dictionnaires et autres\xa0;"),(0,r.kt)("li",{parentName:"ul"},"la s\xe9rialisation se traduit g\xe9n\xe9ralement par des tampons plus petits.")),(0,r.kt)("p",null,"Tous les \xe9v\xe9nements du broker n\u2019ont pas encore \xe9t\xe9 migr\xe9s, nous nous sommes juste concentr\xe9s sur\xa0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::host")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::host","_","status")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::service")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::service","_","status"))),(0,r.kt)("p",null,"Le broker peut toujours les lire mais il produit maintenant les \xe9v\xe9nements suivants\xa0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::pb","_","host")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::pb","_","adaptive","_","host")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::pb","_","host","_","status")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::pb","_","service")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::pb","_","adaptive","_","service")),(0,r.kt)("li",{parentName:"ul"},"\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"li"},"neb::pb","_","service","_","status"))),(0,r.kt)("p",null,"L\u2019inconv\xe9nient est que si vous avez \xe9crit des Stream Connectors, ils pourraient ne plus fonctionner et vous devrez les r\xe9parer."),(0,r.kt)("p",null,"Dans cette section, nous allons expliquer ce qui a chang\xe9 et comment r\xe9soudre votre probl\xe8me."),(0,r.kt)("h2",{id:"exemple-de-stream-connector-qui-ne-fonctionnera-pas-avec-bbdo-30"},"Exemple de Stream Connector qui ne fonctionnera pas avec BBDO 3.0"),(0,r.kt)("p",null,"Voici du code Lua pour un Stream Connector qui fonctionnait avant BBDO\xa03.0 et qui ne fonctionnera pas avec Centreon Broker \xe0 partir de\xa022.04 si BBDO\xa03.0 est activ\xe9\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'    function init(conf)\n      broker_log:set_parameters(0, "/tmp/log")\n    end\n\n    function write(d)\n      if d.category == 1 and d.element == 23 then\n        broker_log:info(0, "Here is a service: " .. broker.json_encode(d))\n      end\n      if d.category == 1 and d.element == 12 then\n        broker_log:info(0, "Here is a host: " .. broker.json_encode(d))\n      end\n      return true\n    end\n')),(0,r.kt)("p",null,"Ce script est tr\xe8s simple. La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," initialise les journaux pour permettre \xe0 tous les journaux d\u2019\xeatre \xe9crits dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/log"),"."),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write()"),", appel\xe9e \xe0 chaque fois qu\u2019un \xe9v\xe9nement est re\xe7u, ne g\xe8re que deux \xe9v\xe9nements, l\u2019\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"p"},"neb::service")," (avec ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," 1 et ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," 23) et l\u2019\xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"p"},"neb::host")," (avec ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," 1 et ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," 12)."),(0,r.kt)("p",null,"Chaque \xe9v\xe9nement est s\xe9rialis\xe9 en JSON et \xe9crit dans le fichier journal."),(0,r.kt)("p",null,"Ce script ne fonctionne pas avec BBDO\xa03.0 car il attend les anciens \xe9v\xe9nements ",(0,r.kt)("strong",{parentName:"p"},"neb::host")," et ",(0,r.kt)("strong",{parentName:"p"},"neb::service"),", et bien que ces \xe9v\xe9nements puissent toujours \xeatre transmis par Centreon Broker, ils ne sont plus produits avec le nouveau protocole. Ainsi, tous les \xe9v\xe9nements re\xe7us par la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," ne correspondent pas aux valeurs ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," attendues."),(0,r.kt)("p",null,"Au lieu de ",(0,r.kt)("strong",{parentName:"p"},"neb::service"),", les \xe9v\xe9nements produits sont ",(0,r.kt)("strong",{parentName:"p"},"neb::pb","_","service")," et au lieu de ",(0,r.kt)("strong",{parentName:"p"},"neb::host"),", les \xe9v\xe9nements produits sont ",(0,r.kt)("strong",{parentName:"p"},"neb::pb","_","host"),"."),(0,r.kt)("p",null,"Pour que le script fonctionne \xe0 nouveau, il suffit donc d\u2019ajouter la reconnaissance de ces deux nouveaux \xe9v\xe9nements."),(0,r.kt)("p",null,"En cons\xe9quence, nous obtenons le nouveau script suivant\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'    function init(conf)\n      broker_log:set_parameters(0, "/tmp/log")\n    end\n\n    function write(d)\n      if d.category == 1 and (d.element == 27 or d.element == 23) then\n        broker_log:info(0, "Here is a service: " .. broker.json_encode(d))\n      end\n      if d.category == 1 and (d.element == 30 or d.element == 12) then\n        broker_log:info(0, "Here is a host: " .. broker.json_encode(d))\n      end\n      return true\n    end\n')),(0,r.kt)("p",null,"Maintenant, le script devrait fonctionner comme pr\xe9vu."),(0,r.kt)("p",null,"Si vous avez besoin de r\xe9cup\xe9rer des champs d\u2019un \xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"p"},"neb::service"),", par exemple la ",(0,r.kt)("strong",{parentName:"p"},"description"),", ce m\xeame champ devrait \xe9galement \xeatre disponible dans ",(0,r.kt)("strong",{parentName:"p"},"neb::pb","_","service"),". Donc en g\xe9n\xe9ral, \xe0 part les nouveaux types \xe0 g\xe9rer, vous n\u2019aurez rien d\u2019autre \xe0 faire."),(0,r.kt)("p",null,"Pour la migration, ce tableau peut vous aider\xa0:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"objet h\xe9rit\xe9")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Objet BBDO 3.0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Commentaires")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::service")," ",(0,r.kt)("br",null)," (1, 23)"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::pb","_","service")," ",(0,r.kt)("br",null)," (1, 27)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::host")," ",(0,r.kt)("br",null)," (1, 12)"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::pb","_","host")," ",(0,r.kt)("br",null)," (1, 30)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::service","_","status")," ",(0,r.kt)("br",null)," (1, 24)"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::pb","_","service","_","status")," ",(0,r.kt)("br",null)," (1, 29)"),(0,r.kt)("td",{parentName:"tr",align:null},"Les nouveaux \xe9v\xe9nements sont plus l\xe9gers. Plusieurs champs peuvent \xeatre manquants. Dans ce cas, ",(0,r.kt)("strong",{parentName:"td"},"pb","_","service")," est utile pour les obtenir.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::host","_","status")," ",(0,r.kt)("br",null)," (1, 14)"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"neb::pb","_","host","_","status")," ",(0,r.kt)("br",null)," (1, 32)"),(0,r.kt)("td",{parentName:"tr",align:null},"Les nouveaux \xe9v\xe9nements sont plus l\xe9gers. Plusieurs champs peuvent \xeatre manquants. Dans ce cas, ",(0,r.kt)("strong",{parentName:"td"},"pb","_","host")," est utile pour les obtenir.")))),(0,r.kt)("p",null,"Il existe \xe9galement deux nouveaux \xe9v\xe9nements avec BBDO\xa03.0, ",(0,r.kt)("strong",{parentName:"p"},"neb::pb","_","adaptive","_","host")," et ",(0,r.kt)("strong",{parentName:"p"},"neb::pb","_","adaptive","_","service"),". Ils apportent des changements de configuration pour un h\xf4te ou un service. Ces \xe9v\xe9nements sont con\xe7us pour \xeatre de petite taille."),(0,r.kt)("p",null,"Dans un \xe9v\xe9nement ",(0,r.kt)("strong",{parentName:"p"},"neb::pb","_","adaptive","_","service"),", il y a deux champs obligatoires, ",(0,r.kt)("strong",{parentName:"p"},"host","_","id")," et ",(0,r.kt)("strong",{parentName:"p"},"service","_","id")," pour conna\xeetre le service concern\xe9. Et tous les autres champs sont facultatifs. Si elle est d\xe9finie (en Lua pas ",(0,r.kt)("strong",{parentName:"p"},"nil"),"), la valeur a \xe9t\xe9 d\xe9finie et vous devez la g\xe9rer, sinon ignorez-la."))}v.isMDXComponent=!0}}]);