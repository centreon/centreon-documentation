"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94616],{45917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),i=n(51715),r=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"cloud-microsoft-office365-exchange",title:"Office365 Exchange"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",id:"integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",title:"Office365 Exchange",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange.md",tags:[],version:"current",frontMatter:{id:"cloud-microsoft-office365-exchange",title:"Office365 Exchange"},sidebar:"pp",previous:{title:"Office 365 Management",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management"},next:{title:"Office365 OneDrive",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-onedrive"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Enregistrez une application",id:"enregistrez-une-application",level:3},{value:"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365",id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365",level:3},{value:"Aide suppl\xe9mentaire",id:"aide-suppl\xe9mentaire",level:3},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester le Plugin Office 365 Exchange en ligne de commande et que signifient les options principales ?",id:"comment-tester-le-plugin-office-365-exchange-en-ligne-de-commande-et-que-signifient-les-options-principales-",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],f={toc:m},g="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"La suite Microsoft Office 365 comprend Exchange Online, la version h\xe9berg\xe9e de\nla plateforme de messagerie Exchange Server de Microsoft. "),(0,a.kt)("p",null,"Les informations de supervision de la suite Office sont mises \xe0 disposition par\nMicrosoft au travers d'une API de gestion Office 365."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les donn\xe9es mises \xe0 disposition par l'API de gestion Office 365 ne sont pas en temps r\xe9el et sont bas\xe9es sur une p\xe9riode de 7 jours")),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activit\xe9 Mail"),(0,a.kt)("li",{parentName:"ul"},"Utilisation des boites mail")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Plus d'informations sur les m\xe9triques collect\xe9es sur la documentation officielle\nde Microsoft :  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-fr/office365/admin/activity-reports/email-activity?view=o365-worldwide"},"https://docs.microsoft.com/fr-fr/office365/admin/activity-reports/email-activity?view=o365-worldwide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/mailbox-usage?view=o365-worldwide"},"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/mailbox-usage?view=o365-worldwide"))),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Email-activity",label:"Email-activity",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"active","_","users"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"exchange.users.emails.sent.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total sent mails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"exchange.users.emails.received.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total received mails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"exchange.users.emails.read.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total read mails"))))),(0,a.kt)(r.Z,{value:"Mailbox-usage",label:"Mailbox-usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"active","_","mailboxes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active mailboxes"),(0,a.kt)("td",{parentName:"tr",align:null},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"exchange.mailboxes.active.usage.total.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total usage space (active mailboxes)"),(0,a.kt)("td",{parentName:"tr",align:null},"Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"exchange.mailboxes.inactive.usage.total.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total usage space (inactive mailboxes)"),(0,a.kt)("td",{parentName:"tr",align:null},"Bytes")))))),(0,a.kt)("p",null,"Une fois l'h\xf4te cr\xe9e, les macros de services peuvent \xeatre configur\xe9es pour\nfiltrer les m\xe9triques par utilisateurs ou par boites mail. Plus d'informations\ndans la section ",(0,a.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration"),"."),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Si vous n'avez pas encore cr\xe9\xe9 votre compte sous Office 365, reportez-vous \xe0 la\ndocumentation d'Office 365 Management ou suivez le lien dans la partie\n'Aide suppl\xe9mentaire'."),(0,a.kt)("h3",{id:"enregistrez-une-application"},"Enregistrez une application"),(0,a.kt)("p",null,"Les API de gestion Office 365 utilisent Azure AD pour assurer l\u2019authentification\ns\xe9curis\xe9e des donn\xe9es dans Office 365. Pour acc\xe9der aux API de gestion\nOffice 365, vous devez enregistrer votre application dans Azure AD. Le terme\n",(0,a.kt)("em",{parentName:"p"},"Application")," est utilis\xe9 comme concept, faisant r\xe9f\xe9rence non seulement au\nprogramme d\u2019application, mais \xe9galement \xe0 son inscription Azure AD et \xe0 son r\xf4le\nlors des \xab dialogues \xbb d\u2019authentification/autorisation au moment de l\u2019ex\xe9cution.\n(",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"},"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"),")"),(0,a.kt)("h3",{id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365"},"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les donn\xe9es d'Exchange Online, vous devez sp\xe9cifier les\nautorisations que votre application requiert:\ndans le Portail de gestion Azure :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Graph :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Reports.Read.All (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"User.Read (Type : Delegated)"))),(0,a.kt)("li",{parentName:"ul"},"Office365 Management APIs :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ServiceHealth.Read (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"ActivityFeed.Read (Type : Application)")))),(0,a.kt)("h3",{id:"aide-suppl\xe9mentaire"},"Aide suppl\xe9mentaire"),(0,a.kt)("p",null,"Suivez le guide pratique pour obtenir une explication compl\xe8te sur la fa\xe7on d\u2019enregistrer une demande et d\u2019obtenir un ",(0,a.kt)("em",{parentName:"p"},"ID client")," et un ",(0,a.kt)("em",{parentName:"p"},"ID secret")," :\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis"},"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,a.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,a.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,a.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,a.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,a.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquet\nassoci\xe9 \xe0 sa distribution :"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-cloud-microsoft-office365-exchange\n"))),(0,a.kt)(r.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-microsoft-office365-exchange\n"))),(0,a.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-cloud-microsoft-office365-exchange\n")))),(0,a.kt)("p",null,"Quel que soit le type de la licence (",(0,a.kt)("em",{parentName:"p"},"online")," ou ",(0,a.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,a.kt)("strong",{parentName:"p"},"Office365 Exchange"),"\ndepuis l'interface web et le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,a.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api\n"))),(0,a.kt)(r.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api\n"))),(0,a.kt)(r.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-cloud-microsoft-office365-exchange-api\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Lors de la cr\xe9ation de votre H\xf4te dans Centreon, choisissez le mod\xe8le\n",(0,a.kt)("em",{parentName:"p"},"Cloud-Microsoft-Office365-Exchange-Api-custom"),". Une fois celui-ci appliqu\xe9,\ncertaines Macros li\xe9es \xe0 l'H\xf4te doivent \xeatre renseign\xe9es :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Access mode for the Plugin (default: 'graphapi')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365TENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant-id of your Office 365 organization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client-id of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Secret-if of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("p",null,"La m\xe9trique ",(0,a.kt)("em",{parentName:"p"},"perfdate")," enrengistre la date \xe0 laquelle celle-ci a \xe9t\xe9 collect\xe9e.\nVous pouvez la filter en param\xe9trant la macro ",(0,a.kt)("em",{parentName:"p"},"OFFICE365EXTRAOPTIONS")," avec\nl'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^(?!.*perfdate).*$'")),(0,a.kt)("p",null,"Une fois l'h\xf4te cr\xe9\xe9, il est \xe9galement possible de param\xe9trer un ensemble de Macros de Service selon la configuration souhait\xe9e:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERUSER"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter specific users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERMAILBOX"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter specific mailboxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERCOUNTER"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter specific counters (default:'active","|","total')")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-le-plugin-office-365-exchange-en-ligne-de-commande-et-que-signifient-les-options-principales-"},"Comment tester le Plugin Office 365 Exchange en ligne de commande et que signifient les options principales ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester directement celui-ci en ligne de\ncommande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \\\n--plugin=cloud::microsoft::office365::exchange::plugin \\\n--mode=email-activity \\\n--tenant='abcd1234-5678-90ab-cd12-34567890abcd' \\\n--client-id='9876dcba-5432-10dc-ba98-76543210dcba' \\\n--client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='\n")),(0,a.kt)("p",null,"R\xe9sultat attentdu :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Active mailboxes on 2019-03-10 : 141/1532 (9.20%) - Total (active mailboxes) \nSend Count: 9478, Receive Count: 62197, Read Count: 24401 | \n'active_mailboxes'=141mailboxes;;;0;1532 \n'total_send_count'=9478;;;0; \n'total_receive_count'=62197;;;0; \n'total_read_count'=24401;;;0;\n")),(0,a.kt)("p",null,"Les options des diff\xe9rents modes sont consultables via le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\ndu mode :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \\\n--plugin=cloud::microsoft::office365::exchange::plugin \\\n--mode=email-activity \\\n--custommode='graphapi'\\\n--help\n")),(0,a.kt)("p",null,"Tous les modes disponibles dans le Plugin peuvent \xeatre list\xe9s via la commande\nsuivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \\\n  --plugin=cloud::microsoft::office365::exchange::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"R\xe9f\xe9rez-vous \xe0 la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\nau d\xe9pannage des plugins bas\xe9s sur HTTP/API."))}k.isMDXComponent=!0}}]);