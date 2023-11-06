"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[56839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"monitoring-guide",title:"Supervision de Centreon-HA"},p=void 0,u={unversionedId:"administration/centreon-ha/monitoring-guide",id:"version-23.10/administration/centreon-ha/monitoring-guide",title:"Supervision de Centreon-HA",description:"Supervision des services de clustering et des ressources du cluster",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/centreon-ha/monitoring-guide.md",sourceDirName:"administration/centreon-ha",slug:"/administration/centreon-ha/monitoring-guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/administration/centreon-ha/monitoring-guide",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/centreon-ha/monitoring-guide.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"monitoring-guide",title:"Supervision de Centreon-HA"},sidebar:"version-23.10/docs",previous:{title:"Guide de recette du cluster",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/administration/centreon-ha/acceptance-guide"},next:{title:"Guide d'exploitation du cluster",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/administration/centreon-ha/operating-guide"}},l={},c=[{value:"Supervision des services de clustering et des ressources du cluster",id:"supervision-des-services-de-clustering-et-des-ressources-du-cluster",level:2},{value:"Supervision de la r\xe9plication MariaDB",id:"supervision-de-la-r\xe9plication-mariadb",level:2},{value:"Supervision du Quorum Device",id:"supervision-du-quorum-device",level:2}],d={toc:c},m="wrapper";function g(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"supervision-des-services-de-clustering-et-des-ressources-du-cluster"},"Supervision des services de clustering et des ressources du cluster"),(0,n.kt)("p",null,"Pour commencer, se r\xe9f\xe9rer \xe0 la ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"page de documentation du Plugin-Pack Linux SNMP")," pour installer tous les pr\xe9requis et superviser les indicateurs de sant\xe9 syst\xe8me basiques des deux serveurs centraux."),(0,n.kt)("p",null,"Puis se r\xe9f\xe9rer \xe0 la ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha"},"page de documentation du Plugin-Pack Centreon-HA")," pour superviser ces processus et ces ressources sur les deux n\u0153uds centraux."),(0,n.kt)("h2",{id:"supervision-de-la-r\xe9plication-mariadb"},"Supervision de la r\xe9plication MariaDB"),(0,n.kt)("p",null,"Se r\xe9f\xe9rer \xe0 la ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-databases-mysql"},"page de documentation du Plugin-Pack MySQL/MariaDB")," pour installer tous les pr\xe9requis et superviser les indicateurs de sant\xe9 standards de MariaDB."),(0,n.kt)("p",null,"L'adresse IP du poller doit \xeatre une source d'authentification reconnue par les bases de donn\xe9es. Ces requ\xeates ",(0,n.kt)("em",{parentName:"p"},"GRANT")," doivent donc \xeatre ex\xe9cuters sur le n\u0153ud principal (actif) et seront r\xe9pliqu\xe9es imm\xe9diatement sur le n\u0153ud secondaire (remplacer les champs encadr\xe9s par des chevrons ",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER '<login>'@'<poller ip address>' IDENTIFIED BY '<password>';\nGRANT SELECT on centreon.* TO '<login>'@'<poller ip address>' ;\nGRANT SELECT on centreon_storage.* TO '<login>'@'<poller ip address>' ;\nGRANT REPLICATION CLIENT on *.* TO '<login>'@'<poller ip address>' ;\n")),(0,n.kt)("p",null,"Apr\xe8s avoir appliqu\xe9 le mod\xe8le d'h\xf4te ",(0,n.kt)("em",{parentName:"p"},"App-DB-MySQL-custom")," et param\xe9tr\xe9 convenablement les macros ",(0,n.kt)("em",{parentName:"p"},"PORT"),", ",(0,n.kt)("em",{parentName:"p"},"USERNAME")," et ",(0,n.kt)("em",{parentName:"p"},"PASSWORD"),", s'assurer que tous les services ajout\xe9s par d\xe9faut sont supervis\xe9s correctement (pas d'\xe9tat ",(0,n.kt)("em",{parentName:"p"},"UNKNOWN"),")."),(0,n.kt)("p",null,"Puis ajouter un nouveau service en naviguant vers ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4te")," et en cliquant sur ",(0,n.kt)("strong",{parentName:"p"},"Ajouter")," et remplir le formulaire conform\xe9ment \xe0 la table ci-dessous :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Champ"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Valeur"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Description")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MariaDB-Replication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Li\xe9 aux h\xf4tes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Central node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Mod\xe8le")),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MySQL-MariaDB-Replication-custom")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PEERHOST")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adresse IP de l'autre n\u0153ud")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PEERPORT")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port du serveur MariaDB de l'autre n\u0153ud (par d\xe9faut : 3306)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PEERUSERNAME")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Identifiant de connexion au serveur MariaDB de l'autre n\u0153ud")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PEERPASSWORD")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mot de passe de connexion au serveur MariaDB de l'autre n\u0153ud")))),(0,n.kt)("p",null,"Puis cliquer sur ",(0,n.kt)("inlineCode",{parentName:"p"},"Sauvegarder"),", et exporter et appliquer la configuration du collecteur."),(0,n.kt)("p",null,"Le message affich\xe9 par ce service doit ressembler \xe0 ce qui suit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"OK: No problems. Replication is ok.\nConnection Status 'mysql:host=<host ip address>;port=3306' [OK]\nConnection Status 'mysql:host=<peer node ip address>;port=3306' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,n.kt)("h2",{id:"supervision-du-quorum-device"},"Supervision du Quorum Device"),(0,n.kt)("p",null,"Comme pour les n\u0153uds centraux, il faut commencer par appliquer le ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Plugin-Pack Linux SNMP")," pour installer tous les pr\xe9requis et superviser les indicateurs de sant\xe9 syst\xe8me basiques du serveur supportant le Quorum Device."),(0,n.kt)("p",null,"Puis ajouter un nouveau service en naviguant vers ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4te")," et en cliquant sur ",(0,n.kt)("strong",{parentName:"p"},"Ajouter")," et remplir le formulaire conform\xe9ment \xe0 la table ci-dessous :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Champ"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Valeur"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Description")),(0,n.kt)("td",{parentName:"tr",align:"left"},"proc-corosync-qnetd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Li\xe9 aux h\xf4tes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serveur supportant le Quorum Device")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Mod\xe8le")),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-HA-Process-corosync-qnetd-custom")))))}g.isMDXComponent=!0}}]);