"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[41273],{83125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"notif-configuration",title:"Configurer les notifications"},l=void 0,u={unversionedId:"alerts-notifications/notif-configuration",id:"version-23.10/alerts-notifications/notif-configuration",title:"Configurer les notifications",description:"Pr\xe9requis",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-configuration.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/notif-configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/notif-configuration.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"notif-configuration",title:"Configurer les notifications"},sidebar:"version-23.10/docs",previous:{title:"Fonctionnement des notifications",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/notif-concept"},next:{title:"Les d\xe9pendances",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/notif-dependencies"}},p={},c=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configurer des notifications",id:"configurer-des-notifications",level:2},{value:"\xc9tape 1 : D\xe9finir quand les contr\xf4les doivent \xeatre faits",id:"\xe9tape-1--d\xe9finir-quand-les-contr\xf4les-doivent-\xeatre-faits",level:3},{value:"\xc9tape 2 : Configurer les notifications sur l&#39;h\xf4te ou le service",id:"\xe9tape-2--configurer-les-notifications-sur-lh\xf4te-ou-le-service",level:3},{value:"\xc9tape 3 : Activer les notifications pour les contacts choisis",id:"\xe9tape-3--activer-les-notifications-pour-les-contacts-choisis",level:3},{value:"R\xe9ference",id:"r\xe9ference",level:4},{value:"V\xe9rifier la configuration des notifications",id:"v\xe9rifier-la-configuration-des-notifications",level:3},{value:"R\xe8gles d&#39;h\xe9ritage des mod\xe8les",id:"r\xe8gles-dh\xe9ritage-des-mod\xe8les",level:2},{value:"M\xe9thode de calcul pour les contacts et groupes de contacts",id:"m\xe9thode-de-calcul-pour-les-contacts-et-groupes-de-contacts",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Les contacts ne re\xe7oivent pas d&#39;emails de notification",id:"les-contacts-ne-re\xe7oivent-pas-demails-de-notification",level:3},{value:"Mes notifications n&#39;arrivent pas suivant l&#39;intervalle sp\xe9cifi\xe9",id:"mes-notifications-narrivent-pas-suivant-lintervalle-sp\xe9cifi\xe9",level:3},{value:"Des notifications ont \xe9t\xe9 envoy\xe9es en-dehors de la p\xe9riode temporelle d\xe9finie",id:"des-notifications-ont-\xe9t\xe9-envoy\xe9es-en-dehors-de-la-p\xe9riode-temporelle-d\xe9finie",level:3}],d={toc:c},m="wrapper";function f(e){var{components:t}=e,s=o(e,["components"]);return(0,i.kt)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"V\xe9rifiez que le moteur de supervision est programm\xe9 pour envoyer des notifications."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Configuration du moteur de collecte"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cliquez sur le collecteur d\xe9sir\xe9.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dans l'onglet ",(0,i.kt)("strong",{parentName:"p"},"Options de contr\xf4le"),", dans la section ",(0,i.kt)("strong",{parentName:"p"},"Autres options"),", s\xe9lectionnez ",(0,i.kt)("strong",{parentName:"p"},"Oui")," pour l'option ",(0,i.kt)("strong",{parentName:"p"},"Notification"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Sauvegarder"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Assurez-vous que votre Centreon peut envoyer des notifications, par exemple, ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/postfix"},"des emails"),"."),(0,i.kt)("p",{parentName:"li"},"Les commandes de notifications sont ex\xe9cut\xe9es par le collecteur qui supervise la ressource : configurez la capacit\xe9 \xe0 envoyer des notifications sur tous les collecteurs."))),(0,i.kt)("h2",{id:"configurer-des-notifications"},"Configurer des notifications"),(0,i.kt)("h3",{id:"\xe9tape-1--d\xe9finir-quand-les-contr\xf4les-doivent-\xeatre-faits"},"\xc9tape 1 : D\xe9finir quand les contr\xf4les doivent \xeatre faits"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,i.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > H\xf4tes")," ou ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4te")," et s\xe9lectionnez un h\xf4te ou un service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dans le premier onglet (",(0,i.kt)("strong",{parentName:"p"},"Configuration de l'h\xf4te")," ou ",(0,i.kt)("strong",{parentName:"p"},"Informations g\xe9n\xe9rales"),"), remplissez la section ",(0,i.kt)("strong",{parentName:"p"},"Options d'ordonnancement/Options d'ordonnancement des services"),". "),(0,i.kt)("p",{parentName:"li"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te ou le service, celui-ci h\xe9ritera des valeurs de son mod\xe8le parent (voir ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A8gles-dh%C3%A9ritage-des-mod%C3%A8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),")."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Option \xe0 renseigner"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Activez les contr\xf4les actifs."),(0,i.kt)("td",{parentName:"tr",align:null},"Mettre ",(0,i.kt)("strong",{parentName:"td"},"Contr\xf4le actif activ\xe9")," \xe0 ",(0,i.kt)("strong",{parentName:"td"},"Oui"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D\xe9finissez pendant quelle ",(0,i.kt)("a",{parentName:"td",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/timeperiods"},"p\xe9riode de temps")," les contr\xf4les actifs doivent \xeatre r\xe9alis\xe9s. En-dehors de cette p\xe9riode de temps, aucun contr\xf4le n'aura lieu, ce qui signifie qu'aucune notification ne sera envoy\xe9e."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"P\xe9riode de contr\xf4le"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D\xe9finissez la fr\xe9quence \xe0 laquelle les contr\xf4les actifs doivent avoir lieu quand l'h\xf4te est dans un \xe9tat ",(0,i.kt)("strong",{parentName:"td"},"OK"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Intervalle normal de contr\xf4le"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D\xe9finissez ce qui doit se produire lorsqu'un h\xf4te ou service entre dans un \xe9tat non-DISPONIBLE ou non-OK (SOFT) :",(0,i.kt)("ul",null,(0,i.kt)("li",null,"combien de contr\xf4les doivent \xeatre faites sur l'h\xf4te ou le service avant que celui-ci entre dans un \xe9tat HARD (c'est-\xe0-dire quand les notifications commenceront \xe0 \xeatre envoy\xe9es). "),(0,i.kt)("li",null,"\xe0 quel intervalle de temps ces cont\xf4les SOFT doivent \xeatre faits"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"Nombre de contr\xf4les avant validation de l'\xe9tat")),(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"Intervalle non-r\xe9gulier de contr\xf4le"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Quand l'h\xf4te ou le service entre dans un \xe9tat HARD, les notifications commencent \xe0 \xeatre envoy\xe9es."),(0,i.kt)("td",{parentName:"tr",align:null},"Les contr\xf4les sont faits selon l'",(0,i.kt)("strong",{parentName:"td"},"Intervalle normal de contr\xf4le"),", et une notification peut \xeatre envoy\xe9e uniquement suite \xe0 un contr\xf4le")))),(0,i.kt)("h3",{id:"\xe9tape-2--configurer-les-notifications-sur-lh\xf4te-ou-le-service"},"\xc9tape 2 : Configurer les notifications sur l'h\xf4te ou le service"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pour rendre la configuration des notifications plus rapide, vous pouvez ajuster les param\xe8tres sur un mod\xe8le d'h\xf4te ou de service. Tous les h\xf4tes/services qui h\xe9ritent de ce mod\xe8le h\xe9riteront \xe9galement de ces param\xe8tres. (Voir ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A8gles-dh%C3%A9ritage-des-mod%C3%A8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),".)")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,i.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > H\xf4tes")," ou ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4te")," et s\xe9lectionnez un h\xf4te ou un service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dans l'onglet ",(0,i.kt)("strong",{parentName:"p"},"Notification")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mettez l'option ",(0,i.kt)("strong",{parentName:"p"},"Notification activ\xe9e")," \xe0 ",(0,i.kt)("strong",{parentName:"p"},"Oui"),"."),(0,i.kt)("p",{parentName:"li"},"  Si l'option est \xe0 ",(0,i.kt)("strong",{parentName:"p"},"D\xe9faut"),", la valeur appliqu\xe9e sera celle d\xe9finie sur le mod\xe8le de l'h\xf4te ou du service (voir ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A8gles-dh%C3%A9ritage-des-mod%C3%A8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),"). Si aucune valeur n'est d\xe9finie sur aucun mod\xe8le parent, la valeur par d\xe9faut est ",(0,i.kt)("strong",{parentName:"p"},"Non"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dans le champ ",(0,i.kt)("strong",{parentName:"p"},"Contacts li\xe9s/Groupes de contacts li\xe9s"),", d\xe9finissez quels contacts recevront les notifications. Les notifications doivent \xeatre activ\xe9es pour ces contacts (voir ",(0,i.kt)("a",{parentName:"p",href:"#%C3%A9tape-3-activer-les-notifications-pour-les-contacts-choisis"},"\xc9tape 3"),")."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Si les notifications sont activ\xe9es pour un h\xf4te et un contact est d\xe9fini, alors les notifications seront \xe9galement activ\xe9es pour les services li\xe9s \xe0 cet h\xf4te (sauf si l'option ",(0,i.kt)("strong",{parentName:"p"},"Notification activ\xe9e")," du service est \xe0 ",(0,i.kt)("strong",{parentName:"p"},"Non"),")."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Options de notification")," : D\xe9finissez pour quels statuts les notifications doivent \xeatre envoy\xe9es. Si aucune valeur n'est d\xe9finie ici, la valeur sera h\xe9rit\xe9e d'un mod\xe8le parent (voir ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A8gles-dh%C3%A9ritage-des-mod%C3%A8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),"). Si aucune valeur n'est d\xe9finie sur aucun mod\xe8le parent, des notifications seront envoy\xe9es pour tous les statuts, sauf pour ",(0,i.kt)("strong",{parentName:"p"},"Aucune"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Intervalle de notification")," : D\xe9finissez le nombre d'unit\xe9s de temps qui doivent s'\xe9couler avant de notifier \xe0 nouveau un contact dans le cas o\xf9 l'h\xf4te est toujours dans un \xe9tat non-DISPONIBLE/dans le cas o\xf9 le service est toujours dans un \xe9tat non-OK."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Avec l'unit\xe9 de temps par d\xe9faut de 60s, ce nombre sera des minutes."),(0,i.kt)("li",{parentName:"ul"},"Entrez 0 pour envoyer 1 seule notification."),(0,i.kt)("li",{parentName:"ul"},"Gardez \xe0 l'esprit qu'une notification ne peut \xeatre envoy\xe9e que si un contr\xf4le a eu lieu. Pour obtenir le r\xe9sultat attendu, la valeur d\xe9finie dans ce champ doit \xeatre un multiple de l'option ",(0,i.kt)("strong",{parentName:"li"},"Intervalle normal de contr\xf4le")," d\xe9finie dans le premier onglet."),(0,i.kt)("li",{parentName:"ul"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te/le service, la valeur sera h\xe9rit\xe9e d'un mod\xe8le parent (voir ",(0,i.kt)("a",{parentName:"li",href:"#r%C3%A8gles-dh%C3%A9ritage-des-mod%C3%A8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),")."),(0,i.kt)("li",{parentName:"ul"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te/le service ni sur aucun de ses mod\xe8les parents, la valeur par d\xe9faut est de 30 minutes. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"P\xe9riode de notification")," : Sp\xe9cifiez la ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/timeperiods"},"p\xe9riode de temps")," pendant laquelle des notifications peuvent \xeatre envoy\xe9es au contact pour cet h\xf4te ou service."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Si un changement d'\xe9tat survient en-dehors de cette p\xe9riode de temps, aucune notification ne sera envoy\xe9e."),(0,i.kt)("li",{parentName:"ul"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te/le service ni sur aucun de ses mod\xe8les parents, la valeur par d\xe9faut est 24x7."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"D\xe9lai de premi\xe8re notification")," : D\xe9finissez le nombre d'unit\xe9s de temps \xe0 attendre avant d'envoyer la premi\xe8re notification lorsque l'h\xf4te entre dans un \xe9tat HARD non-DISPONIBLE/lorsque le service entre dans un \xe9tat HARD non-OK. L'h\xf4te ou le service entre dans un \xe9tat HARD apr\xe8s que la valeur du ",(0,i.kt)("strong",{parentName:"p"},"Nombre de contr\xf4les avant validation de l'\xe9tat")," a \xe9t\xe9 atteinte (d\xe9finie dans le premier onglet)."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Avec l'unit\xe9 de temps par d\xe9faut de 60s, ce nombre sera des minutes."),(0,i.kt)("li",{parentName:"ul"},"Si la valeur est \xe0 0, le moteur de supervision commencera \xe0 envoyer des notifications imm\xe9diatement."),(0,i.kt)("li",{parentName:"ul"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te/le service ni sur aucun de ses mod\xe8les parents, la valeur par d\xe9faut est 0."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"D\xe9lai de premi\xe8re notification de recouvrement")," : D\xe9finissez le nombre d'unit\xe9s de temps \xe0 attendre avant d'envoyer une notification de type r\xe9cup\xe9ration lorsque l'h\xf4te entre dans un \xe9tat DISPONIBLE/quand le service entre dans un \xe9tat OK. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Avec l'unit\xe9 de temps par d\xe9faut de 60s, ce nombre sera des minutes. "),(0,i.kt)("li",{parentName:"ul"},"Si la valeur est \xe0 0, le moteur de supervision commencera \xe0 envoyer des notifications imm\xe9diatement."),(0,i.kt)("li",{parentName:"ul"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te/le service ni sur aucun de ses mod\xe8les parents, la valeur par d\xe9faut est 0."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez")," la configuration."))),(0,i.kt)("h3",{id:"\xe9tape-3--activer-les-notifications-pour-les-contacts-choisis"},"\xc9tape 3 : Activer les notifications pour les contacts choisis"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pour rendre la configuration des notifications plus rapide, vous pouvez ajuster les param\xe8tres sur un mod\xe8le de contact. Tous les contacts qui h\xe9ritent de ce mod\xe8le h\xe9riteront \xe9galement de ces param\xe8tres. (Voir ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A8gles-dh%C3%A9ritage-des-mod%C3%A8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),".)")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Utilisateurs > Contacts/Utilisateurs"),", puis cliquez sur le contact \xe0 qui vous voulez que les notifications soient envoy\xe9es.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dans l'onglet ",(0,i.kt)("strong",{parentName:"p"},"Informations g\xe9n\xe9rales"),", dans la section ",(0,i.kt)("strong",{parentName:"p"},"Notification"),", mettez l'option ",(0,i.kt)("strong",{parentName:"p"},"Activer les notifications")," \xe0 ",(0,i.kt)("strong",{parentName:"p"},"Oui"),". "),(0,i.kt)("p",{parentName:"li"},"Si l'option est \xe0 ",(0,i.kt)("strong",{parentName:"p"},"D\xe9faut"),", Centreon utilisera la valeur d\xe9finie sur le plus proche mod\xe8le parent. Si aucune valeur n'est d\xe9finie sur aucun mod\xe8le parent, ",(0,i.kt)("strong",{parentName:"p"},"D\xe9faut")," correspond \xe0 ",(0,i.kt)("strong",{parentName:"p"},"Non"),", sauf si le contact a \xe9t\xe9 configur\xe9 pour recevoir des notifications au niveau de l'h\xf4te.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dans les sections ",(0,i.kt)("strong",{parentName:"p"},"H\xf4te")," et ",(0,i.kt)("strong",{parentName:"p"},"Service"),", v\xe9rifiez que les ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A9ference"},"options")," sont coh\xe9rentes avec les valeurs d\xe9finies sur l'h\xf4te/le service :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Par exemple, si vous avez mis ",(0,i.kt)("strong",{parentName:"li"},"Options de notification d'h\xf4te")," \xe0 ",(0,i.kt)("strong",{parentName:"li"},"Aucune")," sur le contact, celui-ci ne recevra aucune notification pour cet h\xf4te, m\xeame si vous avez activ\xe9 tous les types de notifications sur l'h\xf4te. Si vous avez activ\xe9 tous les types de notifications sur le contact mais seulement celles de type ",(0,i.kt)("strong",{parentName:"li"},"Critique")," sur un service, le contact recevra uniquement des notification de type ",(0,i.kt)("strong",{parentName:"li"},"Critique")," pour ce service.        "),(0,i.kt)("li",{parentName:"ul"},"Si vous n'avez d\xe9fini aucune r\xe8gle sur le contact, les r\xe8gles appliqu\xe9es sont celles d\xe9finies sur le plus proche mod\xe8le parent."),(0,i.kt)("li",{parentName:"ul"},"Si vous avez d\xe9fini des r\xe8gles sur le contact, celles-ci prendront le pas sur les r\xe8gles d\xe9finies sur le mod\xe8le de contact. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Sauvegarder"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez")," la configuration."))),(0,i.kt)("h4",{id:"r\xe9ference"},"R\xe9ference"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(90180).Z,width:"1109",height:"335"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Options de notification d'h\xf4te/de service")," : d\xe9finissez dans quels cas le contact doit recevoir des notifications. Si vous s\xe9lectionnez ",(0,i.kt)("strong",{parentName:"p"},"Aucune"),", le contact ne recevra aucune notification d'aucun type pour les h\xf4tes ou les services. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"P\xe9riode de notification d'h\xf4te/de service")," : d\xe9finissez pendant quelle ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/basic-objects/timeperiods"},"p\xe9riode de temps")," le contact recevra des notifications. Si un changement d'\xe9tat survient hors de cette p\xe9riode, aucune notification ne sera envoy\xe9e (m\xeame si la p\xe9riode de temps correspond \xe0 celle d\xe9finie sur l'h\xf4te ou le service). N'oubliez pas que cette p\xe9riode de temps correspondra \xe0 celle du fuseau horaire d\xe9finie dans le profil de l'utilisateur (par exemple, si la p\xe9riode de notification est de 9h \xe0 5h, l'utilisateur recevra des notifications entre 9h et 5h dans son fuseau horaire, qui n'est pas n\xe9cessairement le m\xeame que le v\xf4tre).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Commandes de notification d'h\xf4te/de service")," : d\xe9finissez par quel moyen le contact doit \xeatre notifi\xe9 (email, pager, jabber)."))),(0,i.kt)("h3",{id:"v\xe9rifier-la-configuration-des-notifications"},"V\xe9rifier la configuration des notifications"),(0,i.kt)("p",null,"Vous pouvez rapidement v\xe9rifier que la configuration est bien appliqu\xe9e dans la page ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/resources-status"},"Statut des ressources"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,i.kt)("strong",{parentName:"p"},"Supervision > Statut des ressources"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cliquez sur la ressource pour laquelle vous avez configur\xe9 des notifications.\nUn panneau de d\xe9tail s'affiche sur la droite.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cliquez sur l'onglet ",(0,i.kt)("strong",{parentName:"p"},"Notification"),"."))),(0,i.kt)("p",null,"Cet onglet affiche si des notifications sont activ\xe9es pour cette ressource, ainsi que les contacts et groupes de contact qui seront notifi\xe9s."),(0,i.kt)("h2",{id:"r\xe8gles-dh\xe9ritage-des-mod\xe8les"},"R\xe8gles d'h\xe9ritage des mod\xe8les"),(0,i.kt)("p",null,"Pour les h\xf4tes et les services, la section ",(0,i.kt)("strong",{parentName:"p"},"Options d'ordonnancement/Options d'ordonnancement des services")," dans le premier onglet, et la section ",(0,i.kt)("strong",{parentName:"p"},"Options de Notification")," dans le deuxi\xe8me onglet, fonctionnent de la m\xeame mani\xe8re."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si vous renseignez une option au niveau de l'h\xf4te ou du service, sa valeur prendra le pas sur la valeur d\xe9finie dans tout mod\xe8le parent de l'h\xf4te ou du service. "),(0,i.kt)("li",{parentName:"ul"},"Si aucune valeur n'est d\xe9finie sur l'h\xf4te ou le service, les valeurs appliqu\xe9es seront celles d\xe9finies dans le mod\xe8le de l'h\xf4te ou du service, dans son mod\xe8le parent, dans le mod\xe8le parent du mod\xe8le parent, etc. La valeur qui prend le pas est toujours celle d\xe9finie sur l'objet lui-m\xeame ou le plus proche de lui.")),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("p",null,"Un service ",(0,i.kt)("strong",{parentName:"p"},"Memory")," a les mod\xe8les parents suivants : Memory < OS-Linux-Memory-SNMP-custom < OS-Linux-Memory-SNMP < generic-active-service-custom < generic-active-service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Memory")," n'a aucune valeur d\xe9finie dans ",(0,i.kt)("strong",{parentName:"li"},"Options d'ordonnancement des services"),". "),(0,i.kt)("li",{parentName:"ul"},"Son mod\xe8le parent deux niveaux au-dessus, ",(0,i.kt)("strong",{parentName:"li"},"OS-Linux-Memory-SNMP"),", a des valeurs d\xe9finies pour ",(0,i.kt)("strong",{parentName:"li"},"Nombre de contr\xf4les avant validation de l'\xe9tat"),", ",(0,i.kt)("strong",{parentName:"li"},"Intervalle normal de contr\xf4le")," et ",(0,i.kt)("strong",{parentName:"li"},"Intervalle non-r\xe9gulier de contr\xf4le")," : celles-ci seront appliqu\xe9s \xe0 ",(0,i.kt)("strong",{parentName:"li"},"Memory"),"."),(0,i.kt)("li",{parentName:"ul"},"Cependant, le mod\xe8le ",(0,i.kt)("strong",{parentName:"li"},"OS-Linux-Memory-SNMP")," n'a aucune valeur d\xe9finie pour ",(0,i.kt)("strong",{parentName:"li"},"P\xe9riode de contr\xf4le"),", ",(0,i.kt)("strong",{parentName:"li"},"Contr\xf4le actif activ\xe9"),", ",(0,i.kt)("strong",{parentName:"li"},"Contr\xf4le passif activ\xe9")," et ",(0,i.kt)("strong",{parentName:"li"},"Est volatile"),". Nous devons donc remonter de deux niveaux : ces valeurs sont d\xe9finies sur le mod\xe8le ",(0,i.kt)("strong",{parentName:"li"},"generic-active-service"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(2835).Z,width:"693",height:"1317"})),(0,i.kt)("h2",{id:"m\xe9thode-de-calcul-pour-les-contacts-et-groupes-de-contacts"},"M\xe9thode de calcul pour les contacts et groupes de contacts"),(0,i.kt)("p",null,"Depuis la version Centreon ",(0,i.kt)("strong",{parentName:"p"},"19.10"),", 3 m\xe9thodes de d\xe9termination des\ncontacts et groupes de contacts qui seront notifi\xe9s sont disponibles :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vertical Inheritance Only")," : r\xe9cup\xe8re les contacts et les groupes\nde contacts des ressources et de mod\xe8les li\xe9s, en utilisant l'option\nd'h\xe9ritage additif activ\xe9e (m\xe9thode h\xe9rit\xe9e, conserver pour la mise\n\xe0 niveau)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Closest Value")," : r\xe9cup\xe8re les contacts et groupes de contacts les\nplus proche des ressources, y compris des mod\xe8les"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cumulative inheritance")," : Cumulez tous les contacts et groupes de\ncontacts des ressources et des mod\xe8les li\xe9s (m\xe9thode utilis\xe9e pour\nla nouvelle installation)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"L'option ",(0,i.kt)("strong",{parentName:"p"},"Cumulative inheritance")," est la plus simple \xe0 configurer.")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"les-contacts-ne-re\xe7oivent-pas-demails-de-notification"},"Les contacts ne re\xe7oivent pas d'emails de notification"),(0,i.kt)("p",null,"V\xe9rifiez les points suivants :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le service postfix est-il d\xe9marr\xe9 ? Utilisez la commande suivante :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"systemctl status postfix\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le fichier suivant est-il configur\xe9 correctement ?"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"/etc/postfix/main.cf\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les notifications sont-elles activ\xe9es pour le contact ? Les notifications sont-elles configur\xe9es correctement sur le contact ?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les notifications sont-elles configur\xe9es correctement sur l'h\xf4te ou le service ?"))),(0,i.kt)("h3",{id:"mes-notifications-narrivent-pas-suivant-lintervalle-sp\xe9cifi\xe9"},"Mes notifications n'arrivent pas suivant l'intervalle sp\xe9cifi\xe9"),(0,i.kt)("p",null,"V\xe9rifiez que la valeur que vous avez d\xe9finie dans ",(0,i.kt)("strong",{parentName:"p"},"Intervalle de notification")," (dans le 2\xe8 onglet) est bien un multiple de la valeur d\xe9finie dans ",(0,i.kt)("strong",{parentName:"p"},"Intervalle normal de contr\xf4le")," (dans le 1er onglet)."),(0,i.kt)("p",null,"En effet, une notification ne peut \xeatre envoy\xe9e que suite \xe0 un contr\xf4le. Par exemple, si vous d\xe9cidez que les contr\xf4les ont lieu toutes les heures mais que les notifications doivent \xeatre envoy\xe9es toutes les 10 minutes, les notifications seront en r\xe9alit\xe9 envoy\xe9es toutes les heures, car les contr\xf4les ont lieu toutes les heures et non toutes les 10 minutes. "),(0,i.kt)("h3",{id:"des-notifications-ont-\xe9t\xe9-envoy\xe9es-en-dehors-de-la-p\xe9riode-temporelle-d\xe9finie"},"Des notifications ont \xe9t\xe9 envoy\xe9es en-dehors de la p\xe9riode temporelle d\xe9finie"),(0,i.kt)("p",null,"V\xe9rifiez le fuseau horaire de l'utilisateur \xe0 qui sont envoy\xe9es les notifications :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,i.kt)("strong",{parentName:"p"},"Configuration > Utilisateurs > Contacts/Utilisateurs"),", puis cliquez sur le contact \xe0 qui vous voulez que les notifications soient envoy\xe9es. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"V\xe9rifiez le champ ",(0,i.kt)("strong",{parentName:"p"},"Fuseau horaire/Localisation"),". La p\xe9riode de temps pendant laquelle les notifications seront envoy\xe9es \xe0 l'utilisateur est la p\xe9riode de temps dans son fuseau horaire."))))}f.isMDXComponent=!0},90180:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/notif_contact_config-8e97f06696e515e0b2a8e861de3ba0dc.png"},2835:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/template_inheritance-d0470024dd797dfdb3811d11fa7a1e0c.png"}}]);