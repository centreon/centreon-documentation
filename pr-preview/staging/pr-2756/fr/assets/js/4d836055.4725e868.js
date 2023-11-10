"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[60619],{85038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"configure",title:"Configurer"},o=void 0,u={unversionedId:"reporting/configure",id:"version-23.10/reporting/configure",title:"Configurer",description:"Gestion des acc\xe8s aux rapports & t\xe2ches planifi\xe9es (ACL)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/reporting/configure.md",sourceDirName:"reporting",slug:"/reporting/configure",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/configure",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/reporting/configure.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"configure",title:"Configurer"},sidebar:"version-23.10/docs",previous:{title:"Les widgets",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/widgets"},next:{title:"Concepts",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/concepts"}},p={},d=[{value:"Gestion des acc\xe8s aux rapports &amp; t\xe2ches planifi\xe9es (ACL)",id:"gestion-des-acc\xe8s-aux-rapports--t\xe2ches-planifi\xe9es-acl",level:2},{value:"Options g\xe9n\xe9rales",id:"options-g\xe9n\xe9rales",level:2},{value:"Options de notification",id:"options-de-notification",level:3},{value:"Options de l&#39;ordonnanceur",id:"options-de-lordonnanceur",level:3},{value:"Propri\xe9t\xe9s du moteur CBIS",id:"propri\xe9t\xe9s-du-moteur-cbis",level:3},{value:"Propri\xe9t\xe9s d&#39;ordononnancement des rapports",id:"propri\xe9t\xe9s-dordononnancement-des-rapports",level:3},{value:"Propri\xe9t\xe9s de rapports sp\xe9cifiques",id:"propri\xe9t\xe9s-de-rapports-sp\xe9cifiques",level:3},{value:"Options de l&#39;ETL",id:"options-de-letl",level:3},{value:"Options de r\xe9t\xe9ntion des donn\xe9es",id:"options-de-r\xe9t\xe9ntion-des-donn\xe9es",level:3},{value:"Report Parameter",id:"report-parameter",level:3},{value:"Widget de reporting",id:"widget-de-reporting",level:3}],c={toc:d},m="wrapper";function g(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gestion-des-acc\xe8s-aux-rapports--t\xe2ches-planifi\xe9es-acl"},"Gestion des acc\xe8s aux rapports & t\xe2ches planifi\xe9es (ACL)"),(0,r.kt)("p",null,"Il est possible de limiter la g\xe9n\xe9ration ou la consultation de rapports\n\xe0 des groupes d'utilisateurs sp\xe9cifiques. Pour cela, il faut configurer\nles listes de contr\xf4le d'acc\xe8s (ACL) pour Centreon MBI."),(0,r.kt)("p",null,"Le filtre sur les mod\xe8les de rapport permet de :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Donner acc\xe8s aux mod\xe8les de rapports lors de la cr\xe9ation d\'une t\xe2che planifi\xe9e ("Page T\xe2ches Planifi\xe9e -> Ajouter")')),(0,r.kt)("p",null,"Le filtre sur les jobs permets de :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Donner acc\xe8s aux rapports g\xe9n\xe9r\xe9s (page "Report View")'),(0,r.kt)("li",{parentName:"ul"},'Donner acc\xe8s aux t\xe2ches planifi\xe9e, en cr\xe9er ou les modifier (page "T\xe2ches planifi\xe9es")'),(0,r.kt)("li",{parentName:"ul"},"Permettre \xe0 un utilisateur de recevoir par e-mail les rapports bas\xe9 sur les t\xe2ches planifi\xe9es")),(0,r.kt)("p",null,"Pour g\xe9rer les acc\xe8s, rendez vous \xe0 la page suivante: ",(0,r.kt)("strong",{parentName:"p"},"Administration > ACL > Centreon MBI > ACL Rules")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(28464).Z,width:"1362",height:"139"})),(0,r.kt)("p",null,"Lors de l'ajout ou d'une modification d'une r\xe8gle, un formulaire\ncompos\xe9 de 3 onglets s'ouvre."),(0,r.kt)("p",null,"Dans l'onglet \"General informations\" , les groupes d'acc\xe8s\npr\xe9alablement param\xe9tr\xe9s dans Centreon sont list\xe9s. Il est possible de\nles lier \xe0 la r\xe8gle."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(55130).Z,width:"1357",height:"662"})),(0,r.kt)("p",null,'L\'onglet "report designs" permet de lier des mod\xe8les de rapport ou\ndes groupes de mod\xe8les \xe0 cette r\xe8gle.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(80395).Z,width:"1358",height:"723"})),(0,r.kt)("p",null,"Le dernier onglet \"Jobs\" permet de lier les t\xe2ches et les groupes de\nt\xe2ches planifi\xe9es \xe0 la r\xe8gle. Si aucun mod\xe8le de rapport n'est\nselectionn\xe9 dans l'onglet pr\xe9cedent, aucune t\xe2che ne sera visible dans\ncet onglet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(48654).Z,width:"1341",height:"723"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"Un utilisateur non administrateur ne peut recevoir des notifications sur\ndes rapports qu'il n'est pas autoris\xe9 \xe0 voir, m\xeame s'il fait parti du\ngroupe de contacts relatif \xe0 la notification."),(0,r.kt)("p",{parentName:"blockquote"},"Il est possible de donner acc\xe8s aux autres menus de Centreon MBI \xe0 des\nutilisateurs soumis \xe0 des ACLs, ces utilisateurs pourront alors\nuniquement visualiser le contenu. Les pages concern\xe9es sont :"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Groupe de t\xe2ches planifi\xe9es"),(0,r.kt)("li",{parentName:"ul"},"Mod\xe8le de rapports"),(0,r.kt)("li",{parentName:"ul"},"Groupe de mod\xe8le de rapports"),(0,r.kt)("li",{parentName:"ul"},"Logos"),(0,r.kt)("li",{parentName:"ul"},"R\xe8gles de publication")),(0,r.kt)("p",{parentName:"blockquote"},'Si vous donnez acc\xe8s \xe0 la page "Options g\xe9n\xe9rales" \xe0 un utilisateur\nlimit\xe9, il aura les droits de modification, cela est fortement\nd\xe9conseill\xe9.')),(0,r.kt)("h2",{id:"options-g\xe9n\xe9rales"},"Options g\xe9n\xe9rales"),(0,r.kt)("p",null,"Les options g\xe9n\xe9rales de Centreon MBI sont utilis\xe9es pour param\xe9trer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les options d'ordonnancement des t\xe2ches planifi\xe9es et de g\xe9n\xe9ration\nde rapports"),(0,r.kt)("li",{parentName:"ul"},"La communication entre l'interface de Centreon MBI et le moteur de\ng\xe9n\xe9ration des rapports CBIS"),(0,r.kt)("li",{parentName:"ul"},"Les param\xe8tres de notification des administrateurs de Centreon MBI"),(0,r.kt)("li",{parentName:"ul"},"Le param\xe9trage de la vue interactive")),(0,r.kt)("h3",{id:"options-de-notification"},"Options de notification"),(0,r.kt)("p",null,"Le moteur de g\xe9n\xe9ration de rapports peut notifier les administrateurs\nCentreon MBI apr\xe8s la g\xe9n\xe9ration de chaque rapport. L'e-mail envoy\xe9\ncontient:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le lien de t\xe9l\xe9chargement du rapport"),(0,r.kt)("li",{parentName:"ul"},"Le fichier de log relatif au rapport g\xe9n\xe9r\xe9")),(0,r.kt)("p",null,"Cela permet aux administrateurs de contr\xf4ler les t\xe2ches \xe9chou\xe9es."),(0,r.kt)("p",null,"Le processus de notification doit \xeatre different de celui de la\npublication par e-mail:"),(0,r.kt)("p",null,"La publication par e-mail permet d'envoyer les rapports aux\nutilisateurs concern\xe9s alors que la notification envoie l'e-mail aux\nadministrateurs Centreon MBI afin de les pr\xe9venir de la g\xe9n\xe9ration du\nrapport."),(0,r.kt)("p",null,"Les param\xe8tres de notification peuvent \xeatre modifi\xe9s dans le menu:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reporting > Business Intelligence > General Options | Notification\nOptions")),(0,r.kt)("p",null,"Description des champs du formulaire:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Champs"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable job notification for administrators"),(0,r.kt)("td",{parentName:"tr",align:null},"Permet d'activer le syst\xe8me de notification par d\xe9faut pour l'application. Il est cependant possible de d\xe9sactiver la notification ensuite sur des t\xe2ches planifi\xe9es")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail from"),(0,r.kt)("td",{parentName:"tr",align:null},"Exp\xe9diteur du e-mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMTP server"),(0,r.kt)("td",{parentName:"tr",align:null},"Adresse du serveur SMTP ( Adresse IP ou nom DNS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMTP port"),(0,r.kt)("td",{parentName:"tr",align:null},"Port SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use credential"),(0,r.kt)("td",{parentName:"tr",align:null},"Utilisation d'une authentification (oui / non)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use SSL"),(0,r.kt)("td",{parentName:"tr",align:null},"Utilisation d'une authentification SSL (oui / non)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMTP user"),(0,r.kt)("td",{parentName:"tr",align:null},"Compte utilisateur SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMTP password"),(0,r.kt)("td",{parentName:"tr",align:null},"laisser vide pour ne pas modifier le mot de passe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail default title"),(0,r.kt)("td",{parentName:"tr",align:null},"Sujet du e-mail de notification par d\xe9faut")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default E-mail body"),(0,r.kt)("td",{parentName:"tr",align:null},"Corps du e-mail de notification par d\xe9faut")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default E-mail footer"),(0,r.kt)("td",{parentName:"tr",align:null},"pied de page du e-mail de notification par d\xe9faut")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centreon main server web protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Le protocole utilis\xe9 pour la connexion \xe0 l'interface Centreon ( http / https )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centreon web URL extension"),(0,r.kt)("td",{parentName:"tr",align:null},"L'extension URL du serveur Centreon ( Exemple: /centreon )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centreon main server web address"),(0,r.kt)("td",{parentName:"tr",align:null},"Adresse du serveur Centreon ( exemple:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contact groups"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de contacts des administrateurs Centreon MBI. Laisser le champs vide pour ne pas recevoir de notification apr\xe8s chaque g\xe9n\xe9ration de rapport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testing notification"),(0,r.kt)("td",{parentName:"tr",align:null},'Mettre une adresse e-mail valide dans ce champs, ensuite cliquer sur "test" pour envoyer un email de test correctement renseign\xe9')))),(0,r.kt)("h3",{id:"options-de-lordonnanceur"},"Options de l'ordonnanceur"),(0,r.kt)("p",null,"Le menu permettant de modifier les options d'ordonnancement du moteur\nde reporting se trouve dans: ",(0,r.kt)("inlineCode",{parentName:"p"},"Reporting > Business Intelligence > General Options | Scheduler\noptions")),(0,r.kt)("h3",{id:"propri\xe9t\xe9s-du-moteur-cbis"},"Propri\xe9t\xe9s du moteur CBIS"),(0,r.kt)("p",null,"L'interface de Centreon MBI communique directement avec le moteur de\ng\xe9n\xe9ration de rapports CBIS. Elle ouvre une connexion sur le port\nd'\xe9coute de CBIS pour:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avertir lors de la cr\xe9ation ou la modification de t\xe2ches planifi\xe9es"),(0,r.kt)("li",{parentName:"ul"},"Mettre \xe0 jour les langues disponibles pour la traduction de rapports"),(0,r.kt)("li",{parentName:"ul"},"Tester les r\xe8gles de publication de rapports"),(0,r.kt)("li",{parentName:"ul"},"Tester la configuration de notifications")),(0,r.kt)("p",null,"Description des param\xe8tres:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CBIS host"),(0,r.kt)("td",{parentName:"tr",align:null},"Adresse IP du serveur h\xe9b\xe9rgeant le moteur de g\xe9n\xe9ration de rapport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CBIS port"),(0,r.kt)("td",{parentName:"tr",align:null},"Le port TCP sur lequel le moteur CBIS est en \xe9coute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CBIS connection timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout pour la connexion au moteur de g\xe9n\xe9ration de rapports en secondes")))),(0,r.kt)("p",null,"Une modification faite sur un de ces param\xe8tres necessite un red\xe9marrage\ndu service CBIS."),(0,r.kt)("h3",{id:"propri\xe9t\xe9s-dordononnancement-des-rapports"},"Propri\xe9t\xe9s d'ordononnancement des rapports"),(0,r.kt)("p",null,"Description des param\xe8tres:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"All cyclic reports generation hour"),(0,r.kt)("td",{parentName:"tr",align:null},"Heure de g\xe9n\xe9ration des rapports journaliers, hebdomadaires et mensuels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day of month for the generation of monthly reports"),(0,r.kt)("td",{parentName:"tr",align:null},"Jour de mois de g\xe9n\xe9ration des rapports mensuels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day of week for the generation of weekly reports"),(0,r.kt)("td",{parentName:"tr",align:null},"Jour de semaines de g\xe9n\xe9ration des rapports hebdomadaires")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximum load allowed to the scheduler for the jobs execution"),(0,r.kt)("td",{parentName:"tr",align:null},"Poids maximal autoris\xe9 pour la g\xe9n\xe9ration de t\xe2ches parall\xe8les")))),(0,r.kt)("h3",{id:"propri\xe9t\xe9s-de-rapports-sp\xe9cifiques"},"Propri\xe9t\xe9s de rapports sp\xe9cifiques"),(0,r.kt)("p",null,"Deux rapports n\xe9cessitent un acc\xe8s au serveur Centreon afin de g\xe9n\xe9rer\ndes graphiques RRDs. Ces rapports sont:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host-graph-v2"),(0,r.kt)("li",{parentName:"ul"},"Hostgroup-graph-v2")),(0,r.kt)("p",null,"Renseignez le champs suivant:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(89515).Z,width:"1441",height:"40"})),(0,r.kt)("p",null,"Une modification sur les param\xe8tres ci-dessus n\xe9cessite un red\xe9marrage\ndu service CBIS."),(0,r.kt)("p",null,'Le th\xe8me de couleurs par d\xe9faut peut aussi \xeatre d\xe9fini dans ce menu, en\nutilisant l\'option "Default report color theme".'),(0,r.kt)("h3",{id:"options-de-letl"},"Options de l'ETL"),(0,r.kt)("p",null,"Centreon MBI int\xe8gre un ETL qui permet de\xa0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Synchroniser les donn\xe9es brutes de la supervision vers le serveur de\nreporting"),(0,r.kt)("li",{parentName:"ul"},"Alimenter les bases de donn\xe9es du serveur de reporting avec les\ndonn\xe9es statistiques"),(0,r.kt)("li",{parentName:"ul"},"Contr\xf4ler la r\xe9tention des donn\xe9es sur le serveur de reporting")),(0,r.kt)("p",null,"Avant de passer aux \xe9tapes suivantes, il est n\xe9cessaire de lire le\nchapitre ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/installation#bonnes-pratiques-de-supervision"},"des bonnes pratiques")," afin de\nvous assurer que la configuration des objets dans Centreon (groupes,\ncategories...) est conforme aux attentes de Centreon MBI."),(0,r.kt)("p",null,"Dans le menu \xab\xa0Reporting > Business Intelligence > General Options >\nETL options\xa0\xbb\xa0 de Centreon, sp\xe9cifiez les options suivants\xa0:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Options g\xe9n\xe9rales")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Une base de donn\xe9es MariaDB d\xe9di\xe9e au reporting a \xe9t\xe9 mise en place."),(0,r.kt)("td",{parentName:"tr",align:null},"Oui. Vous devez avoir un serveur de reporting d\xe9di\xe9.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Espace de stockage des fichiers temporaires sur le serveur de reporting *"),(0,r.kt)("td",{parentName:"tr",align:null},"Dossier sur le serveur de reporting dans lequel les dumps de donn\xe9es seront positionn\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type de statistiques \xe0 traiter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"S\xe9lectionnez \xab Disponibilit\xe9 uniquement \xbb si vous utilisez uniquement les rapports de disponibilit\xe9. "),(0,r.kt)("li",null,"S\xe9lectionnez \xab Performance et capacit\xe9 uniquement\xbb si vous souhaitez utiliser uniquement les rapports de capacit\xe9 et de performance"),(0,r.kt)("li",null,"S\xe9lectionnez \xabTous\xbb afin de calculer les statistiques pour les deux types de rapports.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Activer le stockage des tables temporaires en m\xe9moire (uniquement si la m\xe9moire physique allou\xe9e au serveur de reporting est suffisante)"),(0,r.kt)("td",{parentName:"tr",align:null},"Activ\xe9 uniquement si votre configuration MariaDB et la m\xe9moire physique allou\xe9e au serveur de reporting le permet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"S\xe9lection du p\xe9rim\xe8tre du reporting")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Groupes d hotes"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionnez les groupes d\u2019h\xf4tes pour lesquels vous souhaitez conserver les statistiques.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cat\xe9gories d h\xf4tes"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionnez les cat\xe9gories d\u2019h\xf4tes pour lesquels vous souhaitez conserver les statistiques.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cat\xe9gories de services"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionnez les cat\xe9gories de services pour lesquels vous souhaitez conserver les statistiques.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Calcul des donn\xe9es de disponibilit\xe9")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionner les plages de services pour le calcul des statistiques de disponibilit\xe9"),(0,r.kt)("td",{parentName:"tr",align:null},"Plages horaires (time periods) pour lesquelles les calculs de disponibilti\xe9 des h\xf4tes et des services sont r\xe9alis\xe9es")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Calcul des donn\xe9es de performance et de capacit\xe9")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Granularit\xe9 des donn\xe9es statistiques \xe0 calculer"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionnez le ou les niveaux de granularit\xe9 pour le calcul des donn\xe9es de performance (1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionner les plages de services pour le calcul des statistiques de performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Plages horaires sur les jours de la semaine pris en compte dans le calcul des donn\xe9es de capacit\xe9 et de performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Capacity statistic aggregated by month")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionner la plage de service 24h/24, 7j/7 pour le calcul des statistiques mensuelles de capacit\xe9"),(0,r.kt)("td",{parentName:"tr",align:null},"Selectionnez la plage horaire 24x7.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionner les cat\xe9gories de services li\xe9es aux indicateurs de capacit\xe9"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionnez les cat\xe9gories de services ayant \xe9t\xe9 rattach\xe9s \xe0 des services de type capacit\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exclure les m\xe9triques qui ne renvoient pas une indication d utilisation des espaces de stockage"),(0,r.kt)("td",{parentName:"tr",align:null},"Concerne uniquement les m\xe9triques li\xe9es aux services qui renvoient une information de capacit\xe9. S\xe9lectionnez uniquement les m\xe9triques qui donnent une valeur maximale ou une valeur totale de capacit\xe9 et non une valeur d\u2019utilisation. (exemple, la m\xe9trique \u201c size \u201d return\xe9e par le plugins check_centreon_snmp_remote_storage \xbb)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Param\xe8tres pour le calcul des centiles")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calculating centile aggregation by"),(0,r.kt)("td",{parentName:"tr",align:null},"Selectionnez la granularit\xe9 des calculs. Le rapport de trafic fourni en standard avec BI 2.1 utilise les donn\xe9es au Mois.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S\xe9lectionner les cat\xe9gories de services sur lesquelles aggr\xe9ger les donn\xe9es"),(0,r.kt)("td",{parentName:"tr",align:null},"Selectionnez uniquement les cat\xe9gories de services pertinente (Ex: Traffic)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Premier jour de la semaine"),(0,r.kt)("td",{parentName:"tr",align:null},"Selectionnez le premier jour \xe0 consid\xe9rer pour les statistiques \xe0 la semaine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cr\xe9er les combinaisons centile-plage horaire qui couvrent vos besoins (Format du centile : 00.0000)"),(0,r.kt)("td",{parentName:"tr",align:null},"Cr\xe9ez des combinaisons centile/plage horaire sur lesquels les statistiques seront effectu\xe9es")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(1)")," Les rapports n\xe9cessitant une granularit\xe9 des donn\xe9es \xe0 l'heure\nsont list\xe9s ci-dessous. Si vous ne souhaitez pas utiliser ces rapports,\nd\xe9sactivez le calcul des statistiques \xe0 l'heure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hotsgroup-Host-details-1"),(0,r.kt)("li",{parentName:"ul"},"Host-detail-v2"),(0,r.kt)("li",{parentName:"ul"},"Hostgroup-traffic-Average-Usage-By-Interface"),(0,r.kt)("li",{parentName:"ul"},"Hostgroup-traffic-by-Interface-And-Bandwith-Ranges")),(0,r.kt)("h3",{id:"options-de-r\xe9t\xe9ntion-des-donn\xe9es"},"Options de r\xe9t\xe9ntion des donn\xe9es"),(0,r.kt)("p",null,"Le serveur de reporting contient des donn\xe9es de statistiques dans des\ntables sp\xe9cifiques \xe0 Centreon MBI. Ces donn\xe9es sont stock\xe9es dans la\nbase de donn\xe9es ",(0,r.kt)("em",{parentName:"p"},"centreon_storage"),"."),(0,r.kt)("p",null,"L'espace utilis\xe9 par ces tables augmentera de jour en jour; il est\npossible de contr\xf4ler la volum\xe9trie de ces donn\xe9es en configurant des\nr\xe8gles de r\xe9tention."),(0,r.kt)("p",null,"Dans le menu\xa0: ",(0,r.kt)("em",{parentName:"p"},"Reporting > Monitoring Business Intelligence > Options\ng\xe9n\xe9rales > Options de r\xe9tention des donn\xe9es")," la r\xe9tention peut \xeatre\ng\xe9r\xe9e par:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type de donn\xe9es (disponibilit\xe9 ou performance)"),(0,r.kt)("li",{parentName:"ul"},"granularit\xe9 des donn\xe9es (donn\xe9es brutes de la supervision, donn\xe9es\nagr\xe9g\xe9es par heure, jour ou mois)")),(0,r.kt)("p",null,'Activez la r\xe9tention de donn\xe9es en cochant "Yes" puis param\xe9trez les\ndiff\xe9rents options de configuration.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(97720).Z,width:"1352",height:"558"})),(0,r.kt)("p",null,"Pour activer la purge automatique des donn\xe9es, \xe9ditez le cron\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/cron.d/centreon-bi-purge")," sur le serveur de reporting puis\nd\xe9-commentez la ligne suivante: :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0 20 * * * root @CENTREON_BI_HOME@/etl/dataRetentionManager.pl >> @CENTREON_BI_LOG@/dataRetentionManager.log 2>&1\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\xc9vitez les p\xe9riodes pendant lesquelles les calculs de statistiques avec\nl'ETL Centreon MBI et la g\xe9n\xe9ration des rapports sont programm\xe9s.")),(0,r.kt)("p",null,"Il est possible d'ex\xe9cuter le cron de mani\xe8re journali\xe8re ou\nhebdomadaire, cela d\xe9pendra de la charge g\xe9n\xe9r\xe9e par la purge des\ndonn\xe9es sur votre serveur de reporting."),(0,r.kt)("p",null,"Red\xe9marrez le service cron: :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl restart crond\n")),(0,r.kt)("h3",{id:"report-parameter"},"Report Parameter"),(0,r.kt)("p",null,"Cet onglet a pour but d'afficher les dimensions disponibles pour un\nutilisateur choisi en fonction de ses restrictions d'ACL et de ce qui a\n\xe9t\xe9 calcul\xe9 dans l'entrep\xf4t de donn\xe9es."),(0,r.kt)("p",null,"En cas de changement de configuration de groupes d'h\xf4tes, cat\xe9gories\nd'h\xf4tes ou de services, vous devez cliquer sur \"Update ACL resources\"\nafin que les param\xe8tres disponibles dans la page de configuration d'une\nt\xe2che planifi\xe9e soient mis \xe0 jour."),(0,r.kt)("h3",{id:"widget-de-reporting"},"Widget de reporting"),(0,r.kt)("p",null,"Cet onglet permet de v\xe9rifier que la connexion \xe0 la base de reporting\nest fonctionnelle et de modifier les param\xe8tres de connexion. Ces\nparam\xe8tres sont utilis\xe9s pour r\xe9cup\xe9rer les donn\xe9es dans les widgets."))}g.isMDXComponent=!0},89515:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaEAAAAoCAIAAABo26GzAAARGUlEQVR4nO2dz28bR5aAeyY/MNj/gM1LAthz2L2JInOJJS+QwW7WMHSTBREjLDCX5BTREJH8CTYoWPIpexx4QUHRjRCE3QEMjGXnMCBF3faQH4dc2DzNbS+bwPGyurrZXdXVXU2yKcrU911sVj9Wva5+Rfu9rnrv3b//7xsHAAAAAAAAAOAt591FKwAAAAAAAAAAUADEOAAAAAAAAABgGSDGAQAAAAAAAADLwLv/8P6iVQAAAAAAAAAAmBn2cQAAAAAAAADAMkCMAwAAAAAAAACWAWIcAAAAAAAAALAMEOMAAACA5eHb8+eLVgEAAACuiI/XP9FaiHEAAAAAAAAAwDJAjAMAAACWjU8+0d/qAAAAwDLx/Ll55yYxDgAAAAAAAABYBuwxDu9496tTL9bg3msdPnDno47X/vL49uOHtfn0fh3pP9l82ndWGie7q4tW5e2me1jfv3SqX7SblXShuDGX7h883ipfjXKLR11Zch5u1gwAAAAAAMANIDPGcdHaOeglWr2z5uZZZe9Z4ZEIOVxlr+BuASQXrXi0rnTrxrj3rKyZ+e2ffvP+d1//37efvVm0JgAAAAAAkEF6jGMc4ChtPNqvu1p7f3/nyRzCHABzw/txIP6YR3jubcPdOny2tWgl3irefPSR43xAgAPgbWPQ3m10vOreSTPjd38wGJTL5eyW6ei2NvcHGweH9bLecvtoc3/0fyyTZlJn1/+aEC9OzKwgalwTNZLWMj+KsvDZucq7BoCbQ1qMo3voBzgMZyhWm89a7S+bnWH/6BuvNq9DKwDzoeTyzyjk5qf/eP/3n/82+PDp7/5T/PH69M0v/7JAnQCgOKIYSDm1ZXq65z3H3bhbNrSUm3vVkQvc2291VRd40G51vJFM0/f5aoWKJSm2f9SYRY2ktcyHIi18dq7qrgHghmGOcXjHR5eOeONtThLh1r+43/vq1Lt8OXgQP8/v+bGP8JMaHxl8s9c4G4pcHreORQYK2dE4tYdMS+H/bX+nHrxs9xurX7TXX4lUC4p85lhjZI6GMVqyBotKCSL5sUCQ3yG+NSA8FxC15FJVORmUM1GCnipF23GTkDF2a09RYdVfO9OU3ChhFVAwzHOgQ3iDJsPYTu9QuYXhaWPnVNMh206MwxmMZGpzjXKyOFYbmFjVyj95/f+R16KVpebjyLsQokXqX73zMkdSjzyP3j45yh2t/7Nz/lfDuIYkIxP2bHisH3z288+fOc5P73z84Xvdj375/m+vP0i9VwAAhcEPA8etxt23eIvRBU66v8WKJUGNa6JG0lpuAjfzrgFg/phjHENPOL0ra6mOaHKveyI1qXN5sLmjuzQil4f6ceTWWTKYvnoSOnWl6h0371hJGcfpPa1vJlyj/CqV76y6Z6fecNRrcHXw6sIfwvvBc2qBM+sfiBhPXb5pcZyXrZ1+5AoKP/zCELCIIf1StW3Y+aruxZxeXUZ068WHtgrY9TfM88iX3ouUtwpMjWYYJ1N1kttODHaYRyvjENPZwHSq/uPvOv1UZeNkLwQttiKuDjOSu6YpnHj0OScnfkef/pvz/V87w4sX3lbchORidFfWylP3nPJY/QCH8/Uvf/z8vd//+5uf//yr5b4BAASDFz1PC3GoLQkXuNtqGNzfYsWSoMZ1UCNpLTeBm3nXAHAFGGMcgx+Fa1C9k7/Sh9d+KtyJqu5g9/cPL/TX/uHbVOlge2fH3QcPa5WHJ8+SOyAEvcu+/krfPlYgo7wMlz7P8LT1zZoewjCqlLxLV2Sp9C5fdp1VeXUwDPYGeMMg7hE4WqXw7X3Oabnsx25cvnwedp4e3017Q+4dt0RsQtm4Ib3Q3qsLp7IakxmP7uknjKwCOfTvngiB+AOSc9g5uajnE5gazTC6WbJu/XG7bnzPn9tOEnaYS6vibGB6Vet/MK8sA2kLIdjYFd2FvIXsznI8+ryTo93RYKXUORv2Xnn12Dy/uBzG4hRT9mzip/9+R+zg+Oz1B//qfPfhO3/5868cVAF4+5Ab9MXfoiwIQcKE0S/B/uamnzfBSbTUpJRyMZFjwRfRsytYQxxO5AIftQe1+qAl0zckMxMUK5YENRauRtI2upG5mfKHxC5r131TdzYORgYbmHymzdfkF8p7J+vnYZdj+04fxaCGuiwy1Ui9awCAYjDHOIZDU3M6/ePOUDgz8W3z5Qf7e8OR133c9laj160jDy10MMoPtqpnhrotCSrbcQ8kz1i+jL7b3906fOQIn1ALYUyg0ur6ysgpGu/auDgfOX4rlerIOw0jC/7UhY5W/mlR/M+RQ97wRk5p4k31mCCScu9h/Gpt8757OfJ4fxw4q+VIZjy6fsLIKpBf//ItNy5w8kBX2CowFaphTMFEdpJ3uMnNNaC08SjdBuaiqkr6QhhHK8Z3Ed6CvdesRz/JAonfUbCjKn5WznvZE/OzetedqWcTwXEV8bfX3755bb9lALhuDI52G164r8vrNHadiVMcnrc2e9H/DkYO4q4lTaJw35zy7XJWizN2gTut3Z7QsLpnTo5arNi8+0eNScU024gicj66ySqBBXl9s6fa46ip4aR2YOK8FYVUtmt5RtEF/LiJGv7LVsO4IgAAiiCzdmxe5L4Pv6Zs8mK0x0GgFOx03ZK4Hh30MKImicwzlpSJdq1HA25tr5zuX/bP+05t7PxMolLtTkW8b5cvkP1jKdU7W+6w7wSRBT/qETpaE0yLfixodfteqXemysTQfUXTKQYZqIp7mNoJI7tADv3LJTFf4sREMjeEVNUmMD0zZw+d0E7yDTe5uQasaPEsxQbmoqquedpC8H4QlqLHAuRayOjP+ugn+d1Q78hdq5ZO48dVtIMq0/cMAMvIyLXcODgRrpV0Hj1v9M93eeR8nhxodVeSLZJer6e93PY6R916IDPqSD8u6btv1e1aVosTfNl3gW1eeLFi8+4fNSYS02yjeyQCHOGuB2mzkbl1/WBEfE+Eb5CdVvuuEsVQv+/1Xgzq9bLB5iUjC3fVAIZlFCkQk5DjJFKsGtUw3TUAQIEYYxzSOcnfSf59H+EhjklQXK9cYxm896JUKrmu05cpOXy3qlQtubdHs3Xp/4dJJuMIFZ59WoSrVklRzxTXiF/2/dKS8FSnFMilf/nBw43LIK2j9GYd1aG1CkyPahhTMJGd5B1ucnOVZNvAXFTNp4DwDow3IddCeofWRz/BfjH9jtz6ZqXzNIw26gdVZukZAJaQKP1Bub5d7ez3RKbD2kSLP+4S1poHGyN/rXfedWppDtrA0923ZEtIbb3q9Oy7WosVQ41rpIZqG6LUSLrN+lfV4y6hQUbhA8P3bSqqOUKso/gCikS5frjniWM58XWRpUb6igAAmBVzjEO4UsMos4OJ7mH9qKScYy/4LX0mVzmWgnyB7KfkcIQfVbntBi+0z/tO+UfxMlnLYzIXVbUAhzzCYIl6TIlN/1iqi7BJTYRpFVh+FmauCybXo59yciprVaffk8dV5EEVfSPMjZ12ANCZfTt8dV1xxfwOvYxIifAAq3u1zJbxlfEhgWSZ0bmJocY1UkO1DWFWqs3G9wnJq342jQRye5JkYptXz1XZRpEC2rIIQjnxdZGhRvqKAACYGfNZldB/GCfX1PFzEHqOkgUga9NB0WSPJfehmGTsmxdsuHdFvkPvB88TO13kGRP/hfZoOP/tcWVddavyTEu8Vkvwrcz39slsjkk9xe6SYepplxwCE+gfP+QSFOAYnh71tyIP0yoQQ4bY1LaUrQSzMU87UZjdBq5MVRPy3MrU37Y8+ml/N2RyHHFc5e4rQ2xxhp4BAGyUXbGFLO5TKuQPcQzauzINpcz4mOYpFyuWBDUWqMZEzv7AK/xd1mJGIcQBAPMkJR+H9B9MVVEEYYmHMIuE3MiQSHwoa0OUCqgSGiPPWNJJVlISBlL++96Rez+DPn7nfe/Vy8HQcVf8jvx6K73hsZ+MIzreP8G06OEkP69HquMauLVaqcuwkG2op8ErVmfJJjDdY63ttvcOs7JRWgWCYeI+vzwEVDRztRNJUTZwBaqmI8Nh8YI7Ahlomwjt0c/4uxEmx7lwLvXY4lX+IgHATcT3Ad20fD7CfXM3ypktspt2qzNO0lDTyozOS8xwN6ixQDVSbCMFGV3Ts2kUzfxHmeyuAQAmJC3naG23Ud056F0ebO5oLoGsQ+mIUiDj8Ifc9+H09788Hu9C7x76R/HHlQ7s5EtBmmesytZGqd8ZnjZ2vKheSbhn3r23NdNPtlTg7FQUwgiiDEFIqKdlhZxgWuIyI0/Mn+HE3vuQYAtGvPxqd+w6DoP3SkHtibNm69a43ueT+NBWgRz6S6dRPRQQ1BmVzrlVwIRM9BDVv7hozeEMjn+D87STYIiCbGAmVfOtrHSCkj2KqezZolQ5Hv2MvxvBSjzoOImsvcX8IgEABGi5N2QygrR9+NJ9U+qAJloEivvrRGVGNU+5WLEkqLFQNRK2YTgIFStOLK9m5oIpAOsoZoHsdRHHvCIAAIoiva7KavNZww9nDDtf1Tv61XidS1/40X3hbgkf7FQR+2LSnAtyuHgt1YRi9rHCMqgjJ2enrip+vzljwdEgouHEX56HWVq1vRW5p0UUoNVkYiGkBEFJCxGBSlfT3Wreu2icDcfpHvWhrQJ2/cPUj0oP/oWgrq1VwKi5rJoRM7xSRbisxR9XmaudSHLbQKnk6jJxG5hdVevKSsdsKpbv5Hj0M/5ujFdi8qBKgb9IALD0JBNrJFp6+7vtoIBEcPYgkYwg/l23Gnffki1O0v0VGFzgYsUM2qLGQtUw2IbMatFptG7LjoISJ4GQvBqzRyes4upayhmrd5qddtc6SlLAti700RMrAgCgODJrx642n7Wd/pPNp0qFSHMaCHHqfk2+uQ2YOKnk2ItzxHEMz0n9kcwzlp8FoKueiSgqB2EQ0Yi9Og5TSCSODOSdlrXms7Vwg4zjrDRMR4RiVB6ePEqmHV17IQaKyoiKErN34mK6f2sVsOs/0uTZRaS5L6Fs/LEKGHDrj1vOeFAxG277y6wypdMzTzuJDZHDBkpbh4+dLBuYXtXcKysdYSq34j8Flb1H7tGoz4y6JHke/Wy/G8EGk0QSnNl7BoCbgXwd7XUam53Ad0u2CFzX9Zuib8Yd19hrdlkRUwtxJFrM7q9Ac4GLFdNVRY2Fq1E22IZT295we6IMayzlZ3U7DDWElWhVe9TqomRgtnAd6ygpArlq9JpWBABAkWTGOHyEo5KzM7+MQso14SM9sMnH0hP6HzOGzhprTG23rZesn1SlnF/MmqXMPmNfFBGl/Ghz5WMYyCQ2mYB9TlZtmlsF7IMqH02znf2s/S5T79Ty3ZxLYGobiLBP1JSq6veufMy7ELTO+0/27aWX8zz6vAvE9NVs652hZwC4GQTupBNlEE22CKrNA6fV6Mg3All5CnKFONLcX1+jyAU+cI8KFEvqjBqLVuO/NgYmZ79cPzy57e+a8NFDEbXmyUF7N7RGg0A2Zgs3aGkZRZR76UZaZq+LOIQ4AGDu2GMcAHCzkZtH1A1cFy1/T0da6R8AgOuAcBbVSGe8DqdZItmS1az3mau/jL7U7mqFiumfUOMaqPFpDqNKkqHsxDaf3lf2lGRrmaWGtVsAgBkhxgEA2YRlSpqbZ+qFlUaRh3oAAAAAAABmhBgHAFgwZNYoOmsJAAAAAADA7BDjAFgwb0diiCmSqgAAAAAAAFwtxDgAAAAAzGTnRQAAAIDrBjEOAAAAWDaeP3++aBUAAABgARDjAAAAAAAAAIBlgBgHAAAALA8fr3+yaBUAAABgYRDjAAAAAAAAAIBlgBgHAAAAAAAAACwDxDgAAAAAAAAAYBn4f4R4EA4dibMNAAAAAElFTkSuQmCC"},28464:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/AclRules-2c6a612b01f6db6983022578b804912a.png"},55130:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/AclRulesGeneralInformation-896a56cc25721371326c7a9cd0028156.png"},48654:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/AclRulesJob-1424b41a0df226784ba58c05fa8e6474.png"},80395:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/AclRulesReportDesign-18a7dcdeca93b0b5f78581ee5019ea03.png"},97720:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bi_retention-630acb0acba7833bfa2fe8ba8bd7ecaf.png"}}]);