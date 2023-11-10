"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[38511],{4900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"integrating-pollers",title:"Int\xe9grer des Pollers dans un cluster Centreon-HA manuel"},s=void 0,u={unversionedId:"installation/installation-of-centreon-ha-manual/integrating-pollers",id:"version-23.10/installation/installation-of-centreon-ha-manual/integrating-pollers",title:"Int\xe9grer des Pollers dans un cluster Centreon-HA manuel",description:"Obtention des empreintes des n\u0153uds centraux",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/installation-of-centreon-ha-manual/integrating-pollers.md",sourceDirName:"installation/installation-of-centreon-ha-manual",slug:"/installation/installation-of-centreon-ha-manual/integrating-pollers",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/installation-of-centreon-ha-manual/integrating-pollers",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/installation-of-centreon-ha-manual/integrating-pollers.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"integrating-pollers",title:"Int\xe9grer des Pollers dans un cluster Centreon-HA manuel"},sidebar:"version-23.10/docs",previous:{title:"Installation de Centreon-HA 4 n\u0153uds \xe0 basculement manuel",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/installation-of-centreon-ha-manual/centreon-ha-4-nodes-installation-manual-failover"},next:{title:"Guide de recette du cluster",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/centreon-ha/acceptance-guide"}},c={},p=[{value:"Obtention des empreintes des n\u0153uds centraux",id:"obtention-des-empreintes-des-n\u0153uds-centraux",level:2},{value:"Ajout du poller \xe0 la configuration",id:"ajout-du-poller-\xe0-la-configuration",level:2},{value:"Configuration de Gorgone sur le Poller",id:"configuration-de-gorgone-sur-le-poller",level:2}],d={toc:p},g="wrapper";function m(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)(g,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"obtention-des-empreintes-des-n\u0153uds-centraux"},"Obtention des empreintes des n\u0153uds centraux"),(0,r.kt)("p",null,"Le service Gorgone de chaque central devra \xeatre en mesure de se connecter \xe0 celui des collecteurs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pour commencer, il faut obtenir la signature de la cl\xe9 priv\xe9e de chacun des n\u0153uds centraux :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O /root/gorgone_key_thumbprint.pl  https://raw.githubusercontent.com/centreon/centreon-gorgone/master/contrib/gorgone_key_thumbprint.pl\nperl /root/gorgone_key_thumbprint.pl --key-path /var/lib/centreon-gorgone/.keys/rsakey.priv.pem\n")),(0,r.kt)("p",null,"La commande doit afficher un retour semblable \xe0 celui-ci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2020-09-25 10:47:35 - INFO - File '/var/lib/centreon-gorgone/.keys/rsakey.priv.pem' JWK thumbprint: RsfNibuDdOvzwP75G72rpIKIG2nRhkyGQrQXE4pXa_s\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On doit maintenant avoir deux cl\xe9s, une pour chaque n\u0153ud central. Conserver ces cl\xe9s (ce qui est affich\xe9 apr\xe8s ",(0,r.kt)("inlineCode",{parentName:"li"},"JWK thumbprint:"),") pour plus tard.")),(0,r.kt)("h2",{id:"ajout-du-poller-\xe0-la-configuration"},"Ajout du poller \xe0 la configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Ajouter le poller de fa\xe7on "standard" ',(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/monitoring-servers/add-a-poller-to-configuration"},"en suivant cette proc\xe9dure avec le protocole ZeroMQ"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," doit avoir \xe9t\xe9 r\xe9\xe9crit et doit contenir des lignes de la forme suivante :"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    authorized_clients:\n    - key: tRsFMBv9X3ScNFMwvG8D652nXMsgEYMb1qsJek-Mns8\n")),(0,r.kt)("h2",{id:"configuration-de-gorgone-sur-le-poller"},"Configuration de Gorgone sur le Poller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modifier ce fichier pour que cette section ressemble \xe0 :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    authorized_clients:\n    - key: cle_1_precedemment_generee\n    - key: cle_2_precedemment_generee\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Il ne reste plus qu'\xe0 red\xe9marrer Gorgone :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart gorgoned\n")),(0,r.kt)("p",null,"\xc0 ce stade, n'importe lequel des deux n\u0153uds centraux doit pouvoir se connecter au service Gorgone du Poller, et lui transmettre les nouvelles configurations engine/broker, red\xe9marrer des services, r\xe9cup\xe9rer des statistiques..."))}m.isMDXComponent=!0}}]);