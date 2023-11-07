"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[88001],{46757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),i=n(51715),s=n(7626);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"applications-cisco-ise-restapi",title:"Cisco ISE"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-cisco-ise-restapi",id:"integrations/plugin-packs/procedures/applications-cisco-ise-restapi",title:"Cisco ISE",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-cisco-ise-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-cisco-ise-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-cisco-ise-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-cisco-ise-restapi",title:"Cisco ISE"},sidebar:"pp",previous:{title:"Cisco DNA Center Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi"},next:{title:"Cisco SSMS",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant: <code>UNKNOWN: 500 Can&#39;t connect to 10.0.0.1:443 |</code>",id:"jobtiens-le-message-derreur-suivant-unknown-500-cant-connect-to-10001443-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:  ``UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |```",id:"jobtiens-le-message-derreur-suivant--unknown-501-protocol-scheme-connect-is-not-supported-",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Cisco Identity Service Engine est une solution d'administration de r\xe9seaux qui\npermet de simplifier le contr\xf4le d'acc\xe8s r\xe9seaux s\xe9curis\xe9s."),(0,r.kt)("p",null,"Le connecteur de supervision Centreon ",(0,r.kt)("em",{parentName:"p"},"Cisco ISE")," permet (par l'interrogation de l'API REST)\nde r\xe9cup\xe9rer le nombre de sessions active et de sessions ",(0,r.kt)("em",{parentName:"p"},"profiler service"),"\nainsi que le nombre que le nombre de  ",(0,r.kt)("em",{parentName:"p"},"postured endpoints"),"."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cisco Identity Service Engine")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Session",label:"Session",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions.active.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of active sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endpoints.postured.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of postured endpoints"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions.profiler.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of profiler service sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"L'utilisateur renseign\xe9 dans la Macro d'H\xf4te (plus d'information ",(0,r.kt)("a",{parentName:"p",href:"#H%C3%B4te"},"ici"),"\ndoit faire partie des groupes Admin suivants et les informations\nd'identification doivent \xeatre stock\xe9es dans la base de donn\xe9es interne de Cisco\nISE (utilisateurs administratifs internes)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Super Admin"),(0,r.kt)("li",{parentName:"ul"},"System Admin"),(0,r.kt)("li",{parentName:"ul"},"MnT Admin")),(0,r.kt)("p",null,"De plus, le collecteur Centreon en charge de la supervision des ressources doit\n\xe9galement pouvoir joindre l'API Rest de Cisco ISE sur le(s) port(s) TCP/80 ou\nTCP/443. Plus d'informations sur le site officiel de Cisco :\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.cisco.com/docs/identity-services-engine/3.0/#!introduction-to-monitoring-rest-apis/verifying-a-monitoring-node"},"https://developer.cisco.com/docs/identity-services-engine/3.0/#!introduction-to-monitoring-rest-apis/verifying-a-monitoring-node")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Cisco Identity Service Engine:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ise-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco ISE")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Cisco Identity Service Engine :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ise-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco ISE")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-cisco-ise-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco ISE")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"".'),(0,r.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre Cisco Identity Service Engine'),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Applications-Cisco-Ise-Restapi-custom"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISECUSTOMMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mode used by plugin (Default: 'xmlapi')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISEAPIURLPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the ISE API (Default: '/admin/API/mnt')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISEAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port of the ISE API instance (Default: '443')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISEAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used by the ISE API (Default : 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"USERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Username to access ISE API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password to access ISE API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"},"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \\\n    --plugin=apps::cisco::ise::restapi::plugin \\\n    --mode=session \\\n    --custommode='xmlapi' \\\n    --hostname='10.0.0.1' \\\n    --url-path='admin/API/mnt' \\\n    --username='user' \\\n    --password='password' \\\n    --port='443' \\\n    --proto='https' \\\n    --filter-counters='' \\\n    --warning-active-sessions='20' \\\n    --critical-active-sessions='50' \\\n    --warning-postured-endpoints='' \\\n    --critical-postured-endpoints='' \\\n    --warning-profiler-service-sessions='' \\\n    --critical-profiler-service-sessions='' \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK : Active sessions: 10, Postured endpoints: 20, Profiler service sessions: 20 | 'sessions.active.count'=10;0:20;0:50;0; 'endpoints.postured.count'=20;;;0 'sessions.profiler.count'=20;;;0;\n")),(0,r.kt)("p",null,"Dans cet exemple, une alarme de type WARNING est d\xe9clench\xe9e si le nombre de\nsessions actives est sup\xe9rieur \xe0 20. "),(0,r.kt)("p",null,"Une alarme CRITICAL est quant \xe0 elle d\xe9clench\xe9e si le nombre de sessions\nactives est sup\xe9rieur \xe0 50."),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \\\n    --plugin=apps::cisco::ise::restapi::plugin \\\n    --mode=session \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \\\n    --plugin=apps::cisco::ise::restapi::plugin \\\n    --list-mode \n")),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant-unknown-500-cant-connect-to-10001443-"},"J'obtiens le message d'erreur suivant: ",(0,r.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 500 Can't connect to 10.0.0.1:443 |")),(0,r.kt)("p",null,"Cette erreur signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API du\nserveur Ciso ISE. V\xe9rifiez que la requ\xeate n'est pas bloqu\xe9e par un outil externe\n(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans la\nMacro EXTRAOPTIONS de l'H\xf4te ou directement dans la commande avec l'option\n",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant--unknown-501-protocol-scheme-connect-is-not-supported-"},"J'obtiens le message d'erreur suivant:  ``UNKNOWN: 501 Protocol scheme 'connect' is not supported |```"),(0,r.kt)("p",null,"Dans certains cas, et plus sp\xe9cifiquement lors de l'usage d'un proxy\nd'entreprise, le protocole de connexion n'est pas support\xe9 par la libraire lwp\nutlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,r.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP curl. Pour ce faire,\najoutez l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," dans la Macro EXTRAOPTIONS de\nl'H\xf4te ou directement \xe0 la commande."))}f.isMDXComponent=!0}}]);