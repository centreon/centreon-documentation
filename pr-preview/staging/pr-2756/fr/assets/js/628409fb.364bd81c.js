"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[19824],{10877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"applications-protocol-radius",title:"Radius Service"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-radius",id:"integrations/plugin-packs/procedures/applications-protocol-radius",title:"Radius Service",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-protocol-radius.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-radius",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-protocol-radius",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-protocol-radius.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-radius",title:"Radius Service"},sidebar:"pp",previous:{title:"Protocol WHOIS",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-protocol-whois"},next:{title:"SMTP Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-protocol-smtp"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"<code>UNKNOWN: Login endpoint returns error code &#39;Auth_TIMEOUT&#39; </code>",id:"unknown-login-endpoint-returns-error-code-auth_timeout-",level:4},{value:"<code>UNKNOWN: Login endpoint returns error code &#39;Bad Response from server&#39; </code>",id:"unknown-login-endpoint-returns-error-code-bad-response-from-server-",level:4}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"RADIUS (Remote Authentication Dial-In User Service) permet de\ncentraliser l'authentification par l'intermedaire du protocol AAA\n(Authentication, Authorization, Accounting)."),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Radius Service")," permet de r\xe9cup\xe9rer le status et le\ntemps de r\xe9ponse d'une connexion \xe0 un serveur RADIUS"),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serveur RADIUS")),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Radius-Login",label:"Radius-Login",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Login status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"radius.response.time.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Login response time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"seconds")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Pour faire fonctionner le connecteur de supervision, il est n\xe9cessaire d'avoir :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un serveur RADIUS"),(0,r.kt)("li",{parentName:"ul"},"Un utilisateur ainsi que son mot de passe pour l'authentification"),(0,r.kt)("li",{parentName:"ul"},"Le secret du serveur RADIUS")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources RADIUS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Radius\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Radius Service")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources RADIUS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Radius\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,r.kt)("em",{parentName:"li"},"Radius Service"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-radius\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Radius Service")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ajoutez un H\xf4te \xe0 Centreon depuis la page "Configuration > H\xf4tes".'),(0,r.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur RADIUS'),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Applications-Protocol-Radius-custom")," "),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUSUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUS server username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUSPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUS server password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUSADDR"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUS server address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUSSECRET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RADIUS server shared secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null," Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_radius.pl  \\\n   --plugin=apps::protocols::radius::plugin  \\\n   --mode=login  \\\n   --hostname=  \\\n   --secret=''  \\\n   --username=''  \\\n   --password=''   \\\n   --warning-status=''  \\\n   --critical-status='%{status} ne \"accepted\"'  \\\n   --warning-time='2'  \\\n   --critical-time='3'  \\\n   --use-new-perfdata \n")),(0,r.kt)("p",null," La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Radius Access Request Status: accepted | 'radius.response.time.seconds'=1s;0:2;0:3;; \n")),(0,r.kt)("p",null,"Dans cet exemple, une alarme de type WARNING sera d\xe9clench\xe9e si le temps de\nr\xe9ponse de l'identification est sup\xe9rieure \xe0 2 secondes\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-time='2'"),"); l'alarme sera de type CRITICAL au-del\xe0 de 3 secondes\nou si le status de l'identification est diff\xe9rent de \"accepted\"."),(0,r.kt)("p",null," La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_radius.pl  \\\n   --plugin=apps::protocols::radius::plugin  \\\n   --mode=login  \\\n   --help\n")),(0,r.kt)("p",null," Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoute le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_radius.pl  \\\n   --plugin=apps::protocols::radius::plugin  \\\n   --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("h4",{id:"unknown-login-endpoint-returns-error-code-auth_timeout-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint returns error code 'Auth_TIMEOUT' ")),(0,r.kt)("p",null,"Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient\npas \xe0 contacter le serveur RADIUS (firewall ou autre \xe9quipement\nen coupure)."),(0,r.kt)("h4",{id:"unknown-login-endpoint-returns-error-code-bad-response-from-server-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint returns error code 'Bad Response from server' ")),(0,r.kt)("p",null,"Cela signifie que le secret utilis\xe9 pour s'authentifier au serveur RADIUS\nest incorrect."))}f.isMDXComponent=!0}}]);