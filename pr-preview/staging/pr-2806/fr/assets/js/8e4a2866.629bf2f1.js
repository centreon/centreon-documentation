"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[49444],{24915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905),a=n(51715),s=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"cloud-azure-management-discover",title:"Azure Discover"},c=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-management-discover",id:"integrations/plugin-packs/procedures/cloud-azure-management-discover",title:"Azure Discover",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-discover.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-management-discover",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-discover.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-management-discover",title:"Azure Discover"},sidebar:"pp",previous:{title:"Azure Database for MySQL",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql"},next:{title:"Azure Elastic Pool",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-elasticpool"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Param\xe9trer une d\xe9couverte",id:"param\xe9trer-une-d\xe9couverte",level:2},{value:"Param\xe8tres d&#39;acc\xe8s",id:"param\xe8tres-dacc\xe8s",level:3},{value:"Param\xe8tres de d\xe9couverte",id:"param\xe8tres-de-d\xe9couverte",level:3},{value:"Lancement de la d\xe9couverte et affichage des r\xe9sultats",id:"lancement-de-la-d\xe9couverte-et-affichage-des-r\xe9sultats",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"Les identifiants ont chang\xe9 et la d\xe9couverte ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-la-d\xe9couverte-ne-fonctionne-plus",level:3},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:3}],g={toc:m},k="wrapper";function v(e){var{components:t}=e,l=u(e,["components"]);return(0,r.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," permet de d\xe9couvrir l'ensemble des resources Azure rattach\xe9es \xe0 une souscription ou un locataire donn\xe9.\nIl s'appuie sur les API Azure Monitor afin de r\xe9cuperer les \xe9l\xe9ments de l'infrastructure. Il s'appuie sur la collection des connecteur de supervision\nafin de mod\xe9liser une infrastructure Azure dans Centreon"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," est uniquement compatible avec le ",(0,r.kt)("em",{parentName:"p"},"custom-mode")," 'api'.")),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le connecteur de supervision ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," est un pack de ",(0,r.kt)("em",{parentName:"p"},"d\xe9couverte"),". Il ne fournit pas de mod\xe8les ni d'indicateurs de supervision en propre.")),(0,r.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," fournit deux ",(0,r.kt)("em",{parentName:"p"},"providers")," de d\xe9couverte d'H\xf4tes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Microsoft Azure Management Discover")," qui permet de d\xe9couvrir l'ensemble des ressources Microsoft Azure rattach\xe9es \xe0 une ",(0,r.kt)("em",{parentName:"li"},"souscription")," donn\xe9e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Azure Tenant Discovery")," qui permet de d\xe9couvrir l'ensemble des ressources Microsoft Azure de chaque ",(0,r.kt)("em",{parentName:"li"},"souscription")," rattach\xe9e au locataire donn\xe9.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ces r\xe8gles de d\xe9couverte sont uniquement compatibles avec le ",(0,r.kt)("em",{parentName:"p"},"custom-mode")," 'api'.")),(0,r.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le Plugin sur chaque Centreon Poller cens\xe9 d\xe9couvrir les ressources Azure :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-Discover-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Sur l\'interface Web de Centreon, installez le Azure Discover Centreon Plugin Pack sur la page "Configuration > Plugin Packs > Manager" Vous serez invit\xe9 \xe0 installer plusieurs autres Azure Plugin Packs en d\xe9pendances (ils serviront \xe0 d\xe9finir les bons templates/indicateurs sur les \xe9l\xe9ments d\xe9couverts).'))),(0,r.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le Plugin sur chaque Centreon Poller cens\xe9 d\xe9couvrir les ressources Azure :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-Discover-Api\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installez le Centreon Plugin Pack RPM sur le serveur Centreon Central, installez tous les Centreon Plugin Packs pour Azure, afin de rendre toutes les d\xe9pendances disponibles :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure\\*\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'Sur l\'interface Web de Centreon, installez le Azure Discover Centreon Plugin Pack sur la page "Configuration > Plugin Packs > Manager" Vous serez invit\xe9 \xe0 installer plusieurs autres Azure Plugin Packs en d\xe9pendances (ils serviront \xe0 d\xe9finir les bons templates/indicateurs sur les \xe9l\xe9ments d\xe9couverts).')))),(0,r.kt)("h2",{id:"param\xe9trer-une-d\xe9couverte"},"Param\xe9trer une d\xe9couverte"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le descriptif du fonctionnement g\xe9n\xe9ral de la fonctionnalit\xe9 ",(0,r.kt)("em",{parentName:"p"},"Host Discovery")," est disponible ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"ici"))),(0,r.kt)("h3",{id:"param\xe8tres-dacc\xe8s"},"Param\xe8tres d'acc\xe8s"),(0,r.kt)("p",null,"Apr\xe8s avoir s\xe9lectionn\xe9 le provider ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Azure Management Discover")," ou ",(0,r.kt)("strong",{parentName:"p"},"Azure Tenant Discovery"),", renseignez les param\xe8tres d'authentification ainsi que les options\nd'acc\xe8s \xe0 l'API comme ci-apr\xe8s:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(42417).Z,width:"1440",height:"787"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez le ",(0,r.kt)("strong",{parentName:"li"},"collecteur Centreon")," depuis lequel sera lanc\xe9 la d\xe9couverte"),(0,r.kt)("li",{parentName:"ul"},"Renseignez les param\xe8tres relatifs \xe0 l'utilisation d'un ",(0,r.kt)("strong",{parentName:"li"},"proxy d'entreprise")," si besoin"),(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez le ",(0,r.kt)("strong",{parentName:"li"},"profil d'authentification Azure")," \xe0 utiliser")),(0,r.kt)("p",null,"Dans le cadre d'une premi\xe8re utilisation, vous pouvez cr\xe9er un nouveau profil d'acc\xe8s \xe0 Azure en cliquant sur '+'. Renseignez ensuite\nles informations demand\xe9es comme ci-apr\xe8s:"),(0,r.kt)(a.Z,{groupId:"provider",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Microsoft Azure Management Discover",label:"Microsoft Azure Management Discover",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(37683).Z,width:"888",height:"588"}))),(0,r.kt)(s.Z,{value:"Azure Tenant Discovery",label:"Azure Tenant Discovery",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(24681).Z,width:"1168",height:"694"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tous les champs du formulaire ",(0,r.kt)("em",{parentName:"p"},"credentials")," doivent \xeatre renseign\xe9s")),(0,r.kt)("p",null,"Cliquez sur ",(0,r.kt)("em",{parentName:"p"},"confirm")," puis sur ",(0,r.kt)("em",{parentName:"p"},"next")," pour afficher la page des param\xe8tres de la d\xe9couverte."),(0,r.kt)("h3",{id:"param\xe8tres-de-d\xe9couverte"},"Param\xe8tres de d\xe9couverte"),(0,r.kt)("p",null,"Renseignez si besoin les information ci-apr\xe8s:"),(0,r.kt)(a.Z,{groupId:"provider",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Microsoft Azure Management Discover",label:"Microsoft Azure Management Discover",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(76978).Z,width:"1420",height:"989"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure Location/Resource Group: permet de restreindre la d\xe9couverte \xe0 une ",(0,r.kt)("em",{parentName:"li"},"location")," ou un ",(0,r.kt)("em",{parentName:"li"},"resource group")," donn\xe9"),(0,r.kt)("li",{parentName:"ul"},"Filter on namespace/type: permet de restreindre la d\xe9couverte \xe0 un Service Azure sp\xe9cifique, par exemple:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Resource namespace"),": 'Microsoft.Compute'"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Resource type"),": 'virtualMachines'",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"}," Attention")," : pour l'utilisation de ce filtre, les champs ",(0,r.kt)("em",{parentName:"p"},"Resource namepsace")," et ",(0,r.kt)("em",{parentName:"p"},"Resource type")," doivent dans ce cas \xeatre ",(0,r.kt)("strong",{parentName:"p"},"tous les deux")," renseign\xe9s"))))))),(0,r.kt)(s.Z,{value:"Azure Tenant Discovery",label:"Azure Tenant Discovery",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(38108).Z,width:"895",height:"358"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tous les champs de ce formulaire sont facultatifs")),(0,r.kt)("h3",{id:"lancement-de-la-d\xe9couverte-et-affichage-des-r\xe9sultats"},"Lancement de la d\xe9couverte et affichage des r\xe9sultats"),(0,r.kt)("p",null,"L'\xe9tape 4 permet d'ajuster les ",(0,r.kt)("em",{parentName:"p"},"mappers"),"; ceux-ci sont d\xe9j\xe0 pr\xe9d\xe9finis par le connecteur de supervision, il n'est normalement pas\nn\xe9cessaire de les modifier dans le cadre d'un ",(0,r.kt)("em",{parentName:"p"},"job")," de d\xe9couverte ",(0,r.kt)("em",{parentName:"p"},"standard"),". Si besoin, r\xe9f\xe9rez-vous \xe0 la\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery#comment-utiliser-les-modificateurs"},"documentation des mappers"),"."),(0,r.kt)("p",null,"Les \xe9tapes 5 & 6 permettent d'ajuster la politique de mod\xe9lisation des r\xe9sultats si besoin. Rendez-vous\n",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery#d%C3%A9finir-les-politiques-danalyse-et-de-mise-%C3%A0-jour"},"ici")," pour plus d'informations."),(0,r.kt)("p",null,"Une fois la d\xe9couverte termin\xe9, vous pouvez afficher les r\xe9sultats en cliquant sur ",(0,r.kt)("em",{parentName:"p"},"job results"),". Les mod\xe8les relatifs aux types de resources\nAzure sont automatiquement appliqu\xe9s:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(44879).Z,width:"2345",height:"1214"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Certains \xe9l\xe9ments peuvent ne pas avoir de mod\xe8le appliqu\xe9 dans la liste des r\xe9sultats:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"les \xe9l\xe9ments ne sont pas des ressources pouvant \xeatre supervis\xe9es"),(0,r.kt)("li",{parentName:"ul"},"ces ressources ne sont pas couvertes par les connecteur de supervision Centreon"))),(0,r.kt)("p",null,"S\xe9lectionnez les \xe9l\xe9ments \xe0 mod\xe9liser dans Centreon et ",(0,r.kt)("em",{parentName:"p"},"Sauvegardez"),"."),(0,r.kt)("h2",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("h3",{id:"les-identifiants-ont-chang\xe9-et-la-d\xe9couverte-ne-fonctionne-plus"},"Les identifiants ont chang\xe9 et la d\xe9couverte ne fonctionne plus"),(0,r.kt)("p",null,"Le Plugin de d\xe9couverte utilise un fichier de cache pour conserver les informations de connexion afin de ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,r.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,r.kt)("em",{parentName:"p"},"api"),(0,r.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,r.kt)("h3",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,r.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,r.kt)("p",null,"le ",(0,r.kt)("em",{parentName:"p"},"job")," de d\xe9couverte renvoie le message suivant :\n",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,r.kt)("p",null,"Cela signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_NAME'. "),(0,r.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nn'est (ne sont) pas valide(s)."))}v.isMDXComponent=!0},42417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-accessparameters-c85305f4c20a6c1f72508719a8a6b34d.png"},24681:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-credentials-tenant-079ed7672f9e3a7a9d264392b52f83e2.png"},37683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-credentials-8a4b16407ab727352e57ebbee1cc2904.png"},38108:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-discoparameters-tenant-868f8666f825f3464285daf8c89f3024.png"},76978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-discoparameters-d99e258a4afa59a434f57b762ebebfc1.png"},44879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-results-908bb9d1f1a2e54a6e4420867347e16b.png"}}]);