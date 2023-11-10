"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[99900],{24467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),i=n(51715),r=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const u={id:"cloud-microsoft-office365-management",title:"Office 365 Management"},c=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-microsoft-office365-management",id:"integrations/plugin-packs/procedures/cloud-microsoft-office365-management",title:"Office 365 Management",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-management.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-microsoft-office365-management",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-management.md",tags:[],version:"current",frontMatter:{id:"cloud-microsoft-office365-management",title:"Office 365 Management"},sidebar:"pp",previous:{title:"Office 365 Azure AD",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-azuread"},next:{title:"Office365 Exchange",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Enregistrer une application",id:"enregistrer-une-application",level:3},{value:"Configurer les propri\xe9t\xe9s de votre application dans Azure AD",id:"configurer-les-propri\xe9t\xe9s-de-votre-application-dans-azure-ad",level:4},{value:"G\xe9n\xe9rer une nouvelle cl\xe9 pour votre application",id:"g\xe9n\xe9rer-une-nouvelle-cl\xe9-pour-votre-application",level:4},{value:"Configurer un certificat X.509 pour activer les appels de service \xe0 service",id:"configurer-un-certificat-x509-pour-activer-les-appels-de-service-\xe0-service",level:4},{value:"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365",id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365",level:4},{value:"Ajout d&#39;autorisation pour Microsoft Graph",id:"ajout-dautorisation-pour-microsoft-graph",level:4},{value:"Demande d\u2019acc\xe8s \xe0 Azure AD",id:"demande-dacc\xe8s-\xe0-azure-ad",level:4},{value:"Aide suppl\xe9mentaire",id:"aide-suppl\xe9mentaire",level:4},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester et interpr\xe9ter la sonde Office 365 en ligne de commande?",id:"comment-tester-et-interpr\xe9ter-la-sonde-office-365-en-ligne-de-commande",level:4},{value:"Remarques",id:"remarques",level:5}],f={toc:m},g="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Office 365 est une suite de services en ligne propos\xe9s par Microsoft dans le cadre de sa ligne de produit Microsoft Office.\nLes informations de monitoring de la suite Office sont mises \xe0 disposition par Microsoft \xe0 travers une API de gestion Office 365."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application credentials : L'expiration des cl\xe9s et mot de passes pour les applications."),(0,a.kt)("li",{parentName:"ul"},"Services Office : Tous les services Office 365 : Office 365 Portal, Exchange Online, Microsoft Intune, Skype for Business, Mobile Device Management for Office 365, OneDrive for Business, SharePoint Online, Microsoft Teams, etc..."),(0,a.kt)("li",{parentName:"ul"},"Subscriptions : Abonnements commerciaux acquis par une organisation")),(0,a.kt)("h2",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"App-Credentials",label:"App-Credentials",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"password status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"app_name~key_id"),"#application.password.expires.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"key status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"app_name~key_id"),"#application.key.expires.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,a.kt)(r.Z,{value:"Service-Status",label:"Service-Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"service status"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(r.Z,{value:"Subscriptions",label:"Subscriptions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subscription status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"skuPartNumber"),"#subscription.usage.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"skuPartNumber"),"#subscription.free.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"skuPartNumber"),"#subscription.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"enregistrer-une-application"},"Enregistrer une application"),(0,a.kt)("p",null,"Les API de gestion Office 365 utilisent Azure AD pour assurer l\u2019authentification s\xe9curis\xe9e des donn\xe9es dans Office 365.\nPour acc\xe9der aux API de gestion Office 365, vous devez enregistrer votre application dans Azure AD.\nLe terme \xab Application \xbb est utilis\xe9 comme concept, faisant r\xe9f\xe9rence non seulement au programme d\u2019application,\nmais \xe9galement \xe0 son inscription Azure AD et \xe0 son r\xf4le lors des \xab dialogues \xbb d\u2019authentification/autorisation au moment de l\u2019ex\xe9cution.\n(",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"},"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"),")"),(0,a.kt)("p",null,"Assurez-vous d'avoir r\xe9cup\xe9r\xe9 votre Tenant ID Microsoft, vous en aurez besoin pour enregistrer votre application dans Azure AD."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connectez-vous au portail de gestion Azure, en utilisant votre Tenant Microsoft Office 365. "),(0,a.kt)("li",{parentName:"ol"},"Dans le panneau de navigation de gauche, choisissez Active Directory.\nAssurez-vous que l\u2019onglet Directory est s\xe9lectionn\xe9, puis s\xe9lectionnez le nom du r\xe9pertoire."),(0,a.kt)("li",{parentName:"ol"},"Sur la page du r\xe9pertoire, s\xe9lectionnez Applications. Azure AD affiche une liste des applications actuellement install\xe9es dans votre infrastructure."),(0,a.kt)("li",{parentName:"ol"},"Choisissez Ajouter"),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez Ajouter une application."),(0,a.kt)("li",{parentName:"ol"},'Entrez le nom de votre application et indiquez le Type comme "CENTREON API WEB".'),(0,a.kt)("li",{parentName:"ol"},"Entrez les propri\xe9t\xe9s de l\u2019application :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL de connexion : L\u2019URL o\xf9 les utilisateurs peuvent se connecter et utiliser votre application. Vous pouvez modifier cela plus tard si n\xe9cessaire."),(0,a.kt)("li",{parentName:"ul"},"URI APP ID : L\u2019URI utilis\xe9 comme identifiant logique unique pour votre application. L\u2019URI doit \xeatre dans un domaine personnalis\xe9 v\xe9rifi\xe9 pour qu\u2019un utilisateur externe puisse accorder \xe0 votre application l\u2019acc\xe8s \xe0 ses donn\xe9es dans Windows Azure AD.\nVotre application est maintenant enregistr\xe9e aupr\xe8s d\u2019Azure AD et un identifiant client lui a \xe9t\xe9 attribu\xe9. ")),(0,a.kt)("h4",{id:"configurer-les-propri\xe9t\xe9s-de-votre-application-dans-azure-ad"},"Configurer les propri\xe9t\xe9s de votre application dans Azure AD"),(0,a.kt)("p",null,"Plusieurs propri\xe9t\xe9s doivent \xeatre sp\xe9cifi\xe9es dans Azure AD:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ID CLIENT : Cette valeur est g\xe9n\xe9r\xe9e automatiquement par Azure AD. "),(0,a.kt)("li",{parentName:"ol"},"APPLICATION IS MULTI-TENANT : Cette propri\xe9t\xe9 doit \xeatre configur\xe9e sur NO ou YES si vous souhaitez superviser des informations depuis un compte Azure d'une autre entreprise."),(0,a.kt)("li",{parentName:"ol"},"REPLY URL : C\u2019est l\u2019URL vers laquelle un administrateur locataire sera redirig\xe9 apr\xe8s avoir donn\xe9 son consentement pour permettre \xe0 votre application d\u2019acc\xe9der \xe0 ses donn\xe9es en utilisant les API de gestion Office 365.")),(0,a.kt)("h4",{id:"g\xe9n\xe9rer-une-nouvelle-cl\xe9-pour-votre-application"},"G\xe9n\xe9rer une nouvelle cl\xe9 pour votre application"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Dans le Portail de gestion Azure, s\xe9lectionnez votre application et choisissez Configurer dans le menu sup\xe9rieur. Faites d\xe9filer jusqu\u2019aux cl\xe9s."),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez la dur\xe9e de votre cl\xe9 et choisissez Enregistrer."),(0,a.kt)("li",{parentName:"ol"},"Azure affiche le secret de l\u2019application seulement apr\xe8s l\u2019avoir sauvegard\xe9. S\xe9lectionnez l\u2019ic\xf4ne Presse-papiers pour copier la cl\xe9 du client.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Attention : Azure affiche uniquement la cl\xe9 priv\xe9e au moment o\xf9 vous la g\xe9n\xe9rez. Sauvegardez-la car vous ne pourrez pas r\xe9cup\xe9rer la cl\xe9 priv\xe9e plus tard.")),(0,a.kt)("h4",{id:"configurer-un-certificat-x509-pour-activer-les-appels-de-service-\xe0-service"},"Configurer un certificat X.509 pour activer les appels de service \xe0 service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Obtenez un certificat X.509. Vous pouvez utiliser un certificat auto-sign\xe9 ou un certificat d\xe9livr\xe9 par une autorit\xe9 de certification de confiance publique.\nVotre application utilisera ce certificat pour communiquer avec Azure AD, assurez-vous ainsi de conserver l\u2019acc\xe8s \xe0 la cl\xe9 priv\xe9e.")),(0,a.kt)("h4",{id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365"},"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365"),(0,a.kt)("p",null,"Enfin, vous devez sp\xe9cifier les autorisations que votre application requiert: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Dans le Portail de gestion Azure, s\xe9lectionnez votre application et choisissez ",(0,a.kt)("em",{parentName:"li"},"Configurer")," dans le menu du haut. Faites d\xe9filer jusqu\u2019aux autorisations d\u2019autres applications, puis choisissez ",(0,a.kt)("em",{parentName:"li"},"Ajouter une application"),"."),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez 'Office 365 Management APIs' puis cochez la case en bas \xe0 droite pour enregistrer votre s\xe9lection et revenir \xe0 la page de configuration principale de votre application."),(0,a.kt)("li",{parentName:"ol"},"Les API Office Management apparaissent maintenant dans la liste des applications pour lesquelles votre application n\xe9cessite des autorisations. Sous les autorisations d\u2019application et les autorisations d\xe9l\xe9gu\xe9es, s\xe9lectionnez les autorisations dont votre application a besoin.")),(0,a.kt)("h4",{id:"ajout-dautorisation-pour-microsoft-graph"},"Ajout d'autorisation pour Microsoft Graph"),(0,a.kt)("p",null,"Il est n\xe9cessaire de param\xe9trer des acc\xe8s pour ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Graph")," \xe0 la fois pour les types ",(0,a.kt)("em",{parentName:"p"},"Application")," et ",(0,a.kt)("em",{parentName:"p"},"D\xe9l\xe9gu\xe9"),", s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},"ServiceHealth.Read.All"),"."),(0,a.kt)("h4",{id:"demande-dacc\xe8s-\xe0-azure-ad"},"Demande d\u2019acc\xe8s \xe0 Azure AD"),(0,a.kt)("p",null,"Utilisez un POST HTTP vers un endpoint sp\xe9cifique au tenant, o\xf9 l\u2019ID du tenant est int\xe9gr\xe9 dans l\u2019URL."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://login.windows.net/%7Btenantid%7D/oauth2/token"},"https://login.windows.net/{tenantid}/oauth2/token"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"POST https://login.windows.net/41463f53-8812-40f4-890f-865bf6e35190/oauth2/token HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\nHost: login.windows.net\nContent-Length: 994\n\nresource=https%3A%2F%2Fmanage.office.com&amp;client_id= a6099727-6b7b-482c-b509-1df309acc563&amp;grant_type=client_credentials &amp;\nclient_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&amp;\nclient_assertion=eyJhbGciOiJSUzI1NiIsIng1dCI6Ill5ZnNoSkMzclBRLWtwR281ZFVhaVk1dDNpVSJ9.eyJhdWQiOiJodHRwczpcL1wvbG9naW4ud2luZG93cy5uZXRcLzQxNDYzZjUzLTg4MTItNDBmNC04OTBmLTg2NWJmNmUzNTE5MFwvb2F1dGgyXC90b2tlbiIsImV4cCI6MTQyNzI0ODY0OCwiaXNzIjoiYTYwOTk3MjctNmI3Yi00ODJjLWI1MDktMWRmMzA5YWNjNTYzIiwianRpIjoiMGNlMjU0YzQtODFiMS00YTJlLTg0MzYtOWE4YzNiNDlkZmI5IiwibmJmIjoxNDI3MjQ4MDQ4LCJzdWIiOiJhNjA5OTcyNy02YjdiLTQ4MmMtYjUwOS0xZGYzMDlhY2M1NjMifQ.vfDrmCjiXgoj2JrTkwyOpr-NOeQTzlXQcGlKGNpLLe0oh4Zvjdcim5C7E0UbI3Z2yb9uKQdx9G7GeqS-gVc9kNV_XSSNP4wEQj3iYNKpf_JD2ikUVIWBkOg41BiTuknRJAYOMjiuBE2a6Wyk-vPCs_JMd7Sr-N3LiNZ-TjluuVzWHfok_HWz_wH8AzdoMF3S0HtrjNd9Ld5eI7MVMt4OTpRfh-Syofi7Ow0HN07nKT5FYeC_ThBpGiIoODnMQQtDA2tM7D3D6OlLQRgLfI8ir73PVXWL7V7Zj2RcOiooIeXx38dvuSwYreJYtdphmrDBZ2ehqtduzUZhaHL1iDvLlw\n")),(0,a.kt)("h4",{id:"aide-suppl\xe9mentaire"},"Aide suppl\xe9mentaire"),(0,a.kt)("p",null,"Suivez le guide pratique pour obtenir une explication compl\xe8te sur la fa\xe7on d\u2019enregistrer une demande et d\u2019obtenir un ID client et un ID secret :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis"},"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Management:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs supervisant des ressources Office 365 Management:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les mod\xe8les de supervision:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-microsoft-office365-management \n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Choisissez le mod\xe8le d'h\xf4te correspondant \xe0 la plateforme de Management Office \"Cloud-Microsoft-Office365-Management-Api-Custom\". Une fois le mod\xe8le d'h\xf4te appliqu\xe9, il est possible de d\xe9finir l'ensemble des macros n\xe9cessaires au fonctionnement des contr\xf4les:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365TENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID correspondant \xe0 l'espace de votre entreprise au sein d'Office 365")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID correspondant \xe0 l'utilisateur de votre entreprise au sein d'Office 365")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID correspondant au mot de passe utilisateur de votre entreprise au sein d'Office 365")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h4",{id:"comment-tester-et-interpr\xe9ter-la-sonde-office-365-en-ligne-de-commande"},"Comment tester et interpr\xe9ter la sonde Office 365 en ligne de commande?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester directement celui-ci en ligne de commande depuis votre poller de supervision avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_management_api.pl \\\n    --plugin=cloud::microsoft::office365::management::plugin \\\n    --mode=service-status \\\n    --tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24' \\\n    --client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d' \\\n    --client-secret='9/kRTASjPoy9FJfQZg6iznX\\AkzCGertBgNq5r3tPfECJfKxj6zA=' \\\n    --filter-service-name='Exchange Online' \\\n    --critical-status='%{status} !~ /serviceOperational|serviceRestored/i' \\\n    --verbose\n")),(0,a.kt)("p",null,"Le retour du plugin est le suivant: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Service 'Exchange Online' status is 'serviceOperational' |\n")),(0,a.kt)("p",null,"La commande ci-dessus requ\xeate une API de gestion Office 365 (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::microsoft::office365::management::plugin"),") via le tenant (",(0,a.kt)("inlineCode",{parentName:"p"},"--tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'"),"),\nle client (",(0,a.kt)("inlineCode",{parentName:"p"},"--client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'"),"), le client secret (",(0,a.kt)("inlineCode",{parentName:"p"},"--client-secret='9/kRTASjPoy9FJfQZg6iznX\\AkzCGertBgNq5r3tPfECJfKxj6zA='"),")\net fournit l'\xe9tat du service (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=service-status"),') "Exchange Online" (',(0,a.kt)("inlineCode",{parentName:"p"},"--filter-service-name='Exchange Online'"),") ainsi que l'\xe9tat des ",(0,a.kt)("em",{parentName:"p"},"features")," du service selectionn\xe9.\nUne alerte CRITICAL sera d\xe9clench\xe9e si l'\xe9tat du service Exchange Online n'est pas 'serviceOperational'."),(0,a.kt)("p",null,"Dans le cas o\xf9 vous recevez un retour de type UNKNOWN, ex\xe9cutez le Plugin en mode debug en ajoutant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_management_api.pl\n    --plugin=cloud::microsoft::office365::management::plugin\n    --mode=service-status\n    --tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'\n    --client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'\n    --client-secret='9/kRTASjPoy9FJfQZg6iznX\\AkzCGertBgNq5r3tPfECJfKxj6zA='\n    --filter-service-name='Exchange Online'\n    --warning-status='' \\\n    --critical-status='%{status} !~ /serviceOperational|serviceRestored/i' \\\n    --debug \\\n    --verbose\n\nUNKNOWN: Cannot decode json response: malformed JSON string, neither tag, array, object, number, \nstring or atom, at character offset 0 (before \"System.Collections.G...\") at \n/usr/lib/centreon/plugins/centreon_office365_management_api.pl line xxx\n")),(0,a.kt)("h5",{id:"remarques"},"Remarques"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe9rifiez que vos ",(0,a.kt)("em",{parentName:"li"},"tenant id")," / ",(0,a.kt)("em",{parentName:"li"},"client id")," / ",(0,a.kt)("em",{parentName:"li"},"client secret")," soient correctement configur\xe9s."),(0,a.kt)("li",{parentName:"ul"},"Si la sonde a \xe9t\xe9 lanc\xe9e pour la premi\xe8re fois avec un autre user que ",(0,a.kt)("em",{parentName:"li"},"centreon-engine")," (root par exemple), il est n\xe9cessaire de supprimer le fichier de cache stock\xe9 dans ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/centreon/centplugins/office365_managementapi_*"),". Il en est de m\xeame lorsque vous avez fait une modification sur les droits\nassoci\xe9s aux param\xe8tres d'authentification utilis\xe9s."),(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut ce Plugin utilise la librairie web \"Lwp\" pour requ\xeater l'API de Microsoft Office 365.\nPour palier \xe0 certaines erreurs web, nous pr\xe9conisons d'utiliser la librairie Curl\nen appelant l'option  --http-backend=curl."),(0,a.kt)("li",{parentName:"ul"},"Les donn\xe9es \xe9tant r\xe9cup\xe9r\xe9es depuis le Cloud Azure, le temps d'ex\xe9cution des contr\xf4les peut augmenter dans le cas de latences r\xe9seau.\nIl sera alors n\xe9cessaire d'augmenter la valeur \"Service check timeout\" dans les options de logs du moteur centengine.")),(0,a.kt)("p",null,"Toutes les options des diff\xe9rents modes sont consultables via l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_management_api.pl \\\n    --plugin=cloud::microsoft::office365::management::plugin \\\n    --mode=service-status \\\n    --help\n")))}k.isMDXComponent=!0}}]);