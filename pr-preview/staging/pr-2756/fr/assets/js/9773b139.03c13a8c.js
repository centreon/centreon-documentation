"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[24699],{99176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"acknowledge",title:"Acquitter une alerte"},c=void 0,p={unversionedId:"alerts-notifications/acknowledge",id:"version-23.10/alerts-notifications/acknowledge",title:"Acquitter une alerte",description:"Acquitter une alerte",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/acknowledge.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/acknowledge",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/acknowledge",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/acknowledge.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"acknowledge",title:"Acquitter une alerte"},sidebar:"version-23.10/docs",previous:{title:"Vues personnalis\xe9es",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/custom-views"},next:{title:"Planifier un temps d'arr\xeat",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/alerts-notifications/downtimes"}},d={},m=[{value:"Acquitter une alerte",id:"acquitter-une-alerte",level:2},{value:"Principe",id:"principe",level:3},{value:"En pratique",id:"en-pratique",level:3},{value:"Supprimer un acquittement",id:"supprimer-un-acquittement",level:3}],k={toc:m},g="wrapper";function v(e){var{components:t}=e,u=l(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},k,u),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"acquitter-une-alerte"},"Acquitter une alerte"),(0,a.kt)("h3",{id:"principe"},"Principe"),(0,a.kt)("p",null,"Lorsqu'un h\xf4te ou un service pr\xe9sente un incident et que ce dernier est\nvalid\xe9, le processus de notification est enclench\xe9, pouvant g\xe9n\xe9rer une\nnotification envoy\xe9e \xe0 un contact. Si le probl\xe8me persiste et suivant la\nconfiguration r\xe9alis\xe9e (relancer une notification \xe0 intervalle de temps\nr\xe9gulier, escalade de notification) il est possible que d'autres notifications\nsoient \xe9mises."),(0,a.kt)("p",null,"L'acquittement d'une alerte permet de stopper le processus de\nnotification (envoi de notifications), jusqu'\xe0 ce que l'h\xf4te ou le\nservice retrouve un statut nominal."),(0,a.kt)("p",null,"Exemple d'utilisation :"),(0,a.kt)("p",null,"Un service est charg\xe9 de v\xe9rifier la sant\xe9 des disques durs d'une baie\nde disques. Un disque dur physique tombe en panne sur une baie de disques,\nune notification est envoy\xe9e. L'op\xe9rateur de supervision acquitte le\nservice en pr\xe9cisant qu'une \xe9quipe est en train de r\xe9gler le probl\xe8me.\nLes notifications ne sont plus envoy\xe9es. Le service reprendra son \xe9tat\nnominal apr\xe8s changement du disque."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"L'acquittement d'une alerte signifie la prise en compte du probl\xe8me\npar un utilisateur de la supervision, et non la r\xe9solution de ce\ndernier qui ne pourra \xeatre effective que lorsque le contr\xf4le sera\nrevenu dans son \xe9tat nominal.")),(0,a.kt)("h3",{id:"en-pratique"},"En pratique"),(0,a.kt)("p",null,"Pour acquitter une alerte, plusieurs solutions sont possibles :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Page Statut des ressources",label:"Page Statut des ressources",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,a.kt)("strong",{parentName:"p"},"Supervision > Statut des ressources"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Utilisez une des m\xe9thodes suivantes :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le ou les objets que vous souhaitez acquitter, puis cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"Acquitter")," au-dessus de la liste des ressources."),(0,a.kt)("li",{parentName:"ul"},"Survolez la ressource d\xe9sir\xe9e, puis cliquez sur l'ic\xf4ne ",(0,a.kt)("strong",{parentName:"li"},"Acquitter")," qui appara\xeet \xe0 gauche :")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(16649).Z,width:"829",height:"187"})),(0,a.kt)("p",{parentName:"li"},"La fen\xeatre suivante appara\xeet :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(56753).Z,width:"588",height:"345"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le champ ",(0,a.kt)("strong",{parentName:"p"},"Commentaire")," est g\xe9n\xe9ralement utilis\xe9 pour fournir la raison de l'acquittement et est obligatoire.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si la case ",(0,a.kt)("strong",{parentName:"p"},"Notifier")," est coch\xe9e, alors une notification est envoy\xe9e aux contacts li\xe9s \xe0 l'objet pour les avertir que l'incident sur la ressource a \xe9t\xe9 acquitt\xe9 (dans le cas o\xf9 le filtre de notification d'acquittement est activ\xe9 pour ce contact).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si la case ",(0,a.kt)("strong",{parentName:"p"},"Persistant")," est coch\xe9e, alors l'acquittement sera conserv\xe9 en cas de red\xe9marrage de l'ordonnanceur. Sinon, l'acquittement dispara\xeet et le processus de notification est r\xe9activ\xe9.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si la case ",(0,a.kt)("strong",{parentName:"p"},"Persistant (non-OK)")," est coch\xe9e, alors l'acquittement sera conserv\xe9 en cas de changement de statut non-OK (Exemple DOWN \xe0 UNREACHABLE ou bien WARNING \xe0 CRITICAL). Sinon, l'acquittement dispara\xeet et le processus de notification est r\xe9activ\xe9.")))))),(0,a.kt)(i.Z,{value:"Supervision temps r\xe9el",label:"Supervision temps r\xe9el",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Status Details > Hosts")," (ou\n",(0,a.kt)("strong",{parentName:"li"},"Services"),")"),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez le ou les objets que vous souhaitez acquitter."),(0,a.kt)("li",{parentName:"ol"},"Dans le menu ",(0,a.kt)("strong",{parentName:"li"},"More actions")," cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Hosts: Acknowledge")," ou sur\n",(0,a.kt)("strong",{parentName:"li"},"Services: Acknowledge"))),(0,a.kt)("p",null,"La fen\xeatre suivante s'affiche :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(69532).Z,width:"700",height:"300"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Sticky")," est coch\xe9e, alors l'acquittement sera conserv\xe9\nen cas de changement de statut non-OK (Exemple DOWN \xe0 UNREACHABLE ou\nbien WARNING \xe0 CRITICAL). Sinon, l'acquittement dispara\xeet et le\nprocessus de notification est r\xe9activ\xe9."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Notify")," est coch\xe9e, alors une notification est envoy\xe9e\naux contacts li\xe9s \xe0 l'objet pour les avertir que l'incident sur la\nressource a \xe9t\xe9 acquitt\xe9 (dans le cas o\xf9 le filtre de notification d'acquittement est activ\xe9 pour ce contact)."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Persistent")," est coch\xe9e, alors l'acquittement sera\nconserv\xe9 en cas de red\xe9marrage de l'ordonnanceur. Sinon,\nl'acquittement dispara\xeet et le processus de notification est\nr\xe9activ\xe9."),(0,a.kt)("li",{parentName:"ul"},"Le champ ",(0,a.kt)("strong",{parentName:"li"},"Comment")," est g\xe9n\xe9ralement utilis\xe9 pour fournir la raison\nde l'acquittement et est obligatoire."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Acknowledge services attached to hosts")," est coch\xe9e,\nalors tous les services li\xe9s \xe0 l'h\xf4te seront acquitt\xe9s (option\nvisible uniquement si vous acquittez un h\xf4te)."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Force active checks")," est coch\xe9e, alors une commande\nsera envoy\xe9e \xe0 l'ordonnanceur pour recontr\xf4ler la ressource dans les plus brefs\nd\xe9lais."))),(0,a.kt)(i.Z,{value:"Page de d\xe9tail d'un objet",label:"Page de d\xe9tail d'un objet",mdxType:"TabItem"},(0,a.kt)("p",null,"A partir de la page de d\xe9tail d'un objet, cliquez sur l'ic\xf4ne activ\xe9\nassoci\xe9 au champ ",(0,a.kt)("strong",{parentName:"p"},"Acknowledged")," dans le cadre ",(0,a.kt)("strong",{parentName:"p"},"Options"),"."),(0,a.kt)("p",null,"La fen\xeatre suivante s'affiche :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(69532).Z,width:"700",height:"300"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Sticky")," est coch\xe9e, alors l'acquittement sera conserv\xe9\nen cas de changement de statut non-OK (Exemple DOWN \xe0 UNREACHABLE ou\nbien WARNING \xe0 CRITICAL). Sinon, l'acquittement dispara\xeet et le\nprocessus de notification est r\xe9activ\xe9."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Notify")," est coch\xe9e, alors une notification est envoy\xe9e\naux contacts li\xe9s \xe0 l'objet pour les avertir que l'incident sur la\nressource a \xe9t\xe9 acquitt\xe9 (dans le cas o\xf9 le filtre de notification d'acquittement est activ\xe9 pour ce contact)."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Persistent")," est coch\xe9e, alors l'acquittement sera\nconserv\xe9 en cas de red\xe9marrage de l'ordonnanceur. Sinon,\nl'acquittement dispara\xeet et le processus de notification est\nr\xe9activ\xe9."),(0,a.kt)("li",{parentName:"ul"},"Le champ ",(0,a.kt)("strong",{parentName:"li"},"Comment")," est g\xe9n\xe9ralement utilis\xe9 pour fournir la raison\nde l'acquittement et est obligatoire."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Acknowledge services attached to hosts")," est coch\xe9e,\nalors tous les services li\xe9s \xe0 l'h\xf4te seront acquitt\xe9s (option\nvisible uniquement si vous acquittez un h\xf4te)."),(0,a.kt)("li",{parentName:"ul"},"Si la case ",(0,a.kt)("strong",{parentName:"li"},"Force active checks")," est coch\xe9e, alors une commande\nsera envoy\xe9e \xe0 l'ordonnanceur pour recontr\xf4ler la ressource dans les plus brefs\nd\xe9lais.")))),(0,a.kt)("h3",{id:"supprimer-un-acquittement"},"Supprimer un acquittement"),(0,a.kt)("p",null,"Pour supprimer l'acquittement d'un incident sur un objet :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"\xc0 partir de la page Statut des ressources",label:"\xc0 partir de la page Statut des ressources",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Allez \xe0 la page ",(0,a.kt)("strong",{parentName:"li"},"Supervision > Statut des ressources"),"."),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez le ou les objets \xe0 d\xe9sacquitter."),(0,a.kt)("li",{parentName:"ol"},"Dans le menu ",(0,a.kt)("strong",{parentName:"li"},"Plus d'actions"),", cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"D\xe9sacquitter"),"."))),(0,a.kt)(i.Z,{value:"\xc0 partir de la supervision temps r\xe9el",label:"\xc0 partir de la supervision temps r\xe9el",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Status Details > Hosts")," (or\n",(0,a.kt)("strong",{parentName:"li"},"Services"),") menu"),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez les objets auxquels vous souhaitez supprimer\nl'acquittement"),(0,a.kt)("li",{parentName:"ol"},"Dans le menu ",(0,a.kt)("strong",{parentName:"li"},"More actions"),", cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Hosts: Disacknowledge"),"\nou sur ",(0,a.kt)("strong",{parentName:"li"},"Services: Disacknowledge"))))))}v.isMDXComponent=!0},69532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acknowledged-442469037c5d6bf8ef44e77ffa44df98.png"},16649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ack-hover-d6fda3744a057d8f6e6bed226f5dc483.gif"},56753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ack-popup-ec850e2c0ef26d0e3ddb066a6d7780e0.png"}}]);