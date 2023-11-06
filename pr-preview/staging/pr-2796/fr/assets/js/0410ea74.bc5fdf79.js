"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[14103],{73998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"cloud-microsoft-office365-teams",title:"Office365 Teams"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",id:"integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",title:"Office365 Teams",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams.md",tags:[],version:"current",frontMatter:{id:"cloud-microsoft-office365-teams",title:"Office365 Teams"},sidebar:"pp",previous:{title:"Office365 Skype",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-skype"},next:{title:"Outscale API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/cloud-outscale"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Enregistrez une application",id:"enregistrez-une-application",level:3},{value:"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365",id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365",level:3},{value:"Aide suppl\xe9mentaire",id:"aide-suppl\xe9mentaire",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester le Plugin Office 365 Onedrive en ligne de commande et que signifient les options principales ?",id:"comment-tester-le-plugin-office-365-onedrive-en-ligne-de-commande-et-que-signifient-les-options-principales-",level:3},{value:"Le Plugin renvoie les erreurs suivantes :",id:"le-plugin-renvoie-les-erreurs-suivantes-",level:2},{value:"<code>UNKNOWN: 500 Can&#39;t connect to ...:443</code>",id:"unknown-500-cant-connect-to-443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],f={toc:m},g="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"La suite Microsoft Office 365 inclut Teams, une application qui pourvoit\ndiff\xe9rents types de services comme des espaces de travail ou des services de\nmessagerie et de visioconf\xe9rence."),(0,a.kt)("p",null,"Les informations de supervision de la suite Office sont mises \xe0 disposition par\nMicrosoft au travers d'une API de gestion Office 365."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les donn\xe9es mises \xe0 disposition par l'API de gestion Office 365 ne sont pas en temps r\xe9el et sont bas\xe9es sur une p\xe9riode de 7 jours")),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Utilisation des appareils Teams "),(0,a.kt)("li",{parentName:"ul"},"Activit\xe9 des utilisateurs")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Plus d'informations sur les m\xe9triques collect\xe9es sur la documentation officielle\nde Microsoft : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/microsoft-teams-device-usage-preview?view=o365-worldwide"},"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/microsoft-teams-device-usage-preview?view=o365-worldwide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/microsoft-teams-user-activity-preview?view=o365-worldwide"},"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/microsoft-teams-user-activity-preview?view=o365-worldwide"))),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Devices-Usage",label:"Devices-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.devices.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active devices"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.devices.","*",".count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of windows/mac/web/iOS/android devices"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(i.Z,{value:"User-Activity",label:"User-Activity",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of active users"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.messages.team.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of Team chat messages"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.messages.private.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of Private chat messages"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.call.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of calls"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.meeting.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of meetings"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("p",null,"Une fois l'h\xf4te cr\xe9e, les macros de services peuvent \xeatre configur\xe9es pour\nfiltrer les m\xe9triques par utilisateurs ou par boites mail. Plus d'informations\ndans la section ",(0,a.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration"),"."),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Si vous n'avez pas encore cr\xe9\xe9 votre compte sous Office 365, reportez-vous \xe0 la\ndocumentation d'Office 365 Management ou suivez le lien dans la partie\n'Aide suppl\xe9mentaire'."),(0,a.kt)("h3",{id:"enregistrez-une-application"},"Enregistrez une application"),(0,a.kt)("p",null,"Les API de gestion Office 365 utilisent Azure AD pour assurer l\u2019authentification\ns\xe9curis\xe9e des donn\xe9es dans Office 365. Pour acc\xe9der aux API de gestion\nOffice 365, vous devez enregistrer votre application dans Azure AD. Le terme\n",(0,a.kt)("em",{parentName:"p"},"Application")," est utilis\xe9 comme concept, faisant r\xe9f\xe9rence non seulement au\nprogramme d\u2019application, mais \xe9galement \xe0 son inscription Azure AD et \xe0 son r\xf4le\nlors des \xab dialogues \xbb d\u2019authentification/autorisation au moment de l\u2019ex\xe9cution.\n(",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"},"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"),")"),(0,a.kt)("h3",{id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365"},"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les donn\xe9es d'Team Online, vous devez sp\xe9cifier les\nautorisations que votre application requiert:\ndans le Portail de gestion Azure :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Graph :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Reports.Read.All (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"User.Read (Type : Delegated)"))),(0,a.kt)("li",{parentName:"ul"},"Office365 Management APIs :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ServiceHealth.Read (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"ActivityFeed.Read (Type : Application)")))),(0,a.kt)("h3",{id:"aide-suppl\xe9mentaire"},"Aide suppl\xe9mentaire"),(0,a.kt)("p",null,"Suivez le guide pratique pour obtenir une explication compl\xe8te sur la fa\xe7on d\u2019enregistrer une demande et d\u2019obtenir un ",(0,a.kt)("em",{parentName:"p"},"ID client")," et un ",(0,a.kt)("em",{parentName:"p"},"ID secret")," :\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis"},"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Team :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Team-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Office365 Team")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," "))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Team :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Team-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision 'Office365 Team' :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-microsoft-office365-team\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Office365 Team")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Lors de la cr\xe9ation de votre H\xf4te dans Centreon, choisissez le mod\xe8le\n",(0,a.kt)("em",{parentName:"p"},"Cloud-Microsoft-Office365-Team-Api-custom"),". Une fois celui-ci appliqu\xe9,\ncertaines Macros li\xe9es \xe0 l'H\xf4te doivent \xeatre renseign\xe9es :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Access mode for the Plugin (default: 'graphapi')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365TENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant-id of your Office365 organization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client-id of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Secret-if of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("p",null,"La m\xe9trique ",(0,a.kt)("em",{parentName:"p"},"perfdate")," enrengistre la date \xe0 laquelle celle-ci a \xe9t\xe9 collect\xe9e.\nVous pouvez la filter en param\xe9trant la macro ",(0,a.kt)("em",{parentName:"p"},"OFFICE365EXTRAOPTIONS")," avec\nl'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^(?!.*perfdate).*$'")),(0,a.kt)("p",null,"Une fois l'h\xf4te cr\xe9\xe9, il est \xe9galement possible de param\xe9trer un ensemble de m\nmacros de service selon la configuration souhait\xe9e :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERUSERS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter by specific users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERCOUNTER"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter specific counters")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-le-plugin-office-365-onedrive-en-ligne-de-commande-et-que-signifient-les-options-principales-"},"Comment tester le Plugin Office 365 Onedrive en ligne de commande et que signifient les options principales ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester directement celui-ci en ligne de\ncommande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \\\n  --plugin=cloud::microsoft::office365::teams::plugin \\\n  --mode=devices-usage \\\n  --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \\\n  --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \\\n  --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='\n")),(0,a.kt)("p",null,"R\xe9sultat attendu :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Active devices on 2020-09-26 : 45/598 (7.53%) - Users count by device type \n: Windows: 35, Mac: 2, Web: 0, iOS: 4, Android Phone: 4, Windows Phone: 0\n'active_devices'=45devices;;;0;598\n'windows'=35;;;0;\n'mac'=2;;;0;\n'web'=0;;;0;\n'ios'=4;;;0;\n'android_phone'=4;;;0;\n'windows_phone'=0;;;0;\n")),(0,a.kt)("p",null,"Les options des diff\xe9rents modes sont consultables via le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\ndu mode :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \\\n  --plugin=cloud::microsoft::office365::teams::plugin \\\n  --mode=devices-usage \\\n  --custommode='graphapi'\\\n  --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles dans le Plugin peuvent \xeatre list\xe9s via la commande\nsuivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \\\n  --plugin=cloud::microsoft::office365::teams::plugin \\\n  --list-mode\n")),(0,a.kt)("h2",{id:"le-plugin-renvoie-les-erreurs-suivantes-"},"Le Plugin renvoie les erreurs suivantes :"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to ...:443")),(0,a.kt)("p",null,"Cette erreur signifie que le Plugin Centreon n'a pas pu se connecter \xe0 l'API de\ngestion Office 365. V\xe9rifiez que la requ\xeate n'a pas bloqu\xe9e par un outil externe\n(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans\nles macros ",(0,a.kt)("em",{parentName:"p"},"EXTRAOPTIONS")," des services correspondants ou directement dans la\ncommande avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl"),"."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Dans certains cas, et plus sp\xe9cifiquement lors de l'usage d'un proxy\nd'entreprise, le protocole de connexion n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"lwp"),"\nutlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,a.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"curl"),".\nPour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}k.isMDXComponent=!0}}]);