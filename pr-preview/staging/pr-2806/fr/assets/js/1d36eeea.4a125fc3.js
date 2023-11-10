"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73840],{6759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>k});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"applications-netbackup-ssh",title:"Symantec Netbackup SSH"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-netbackup-ssh",id:"integrations/plugin-packs/procedures/applications-netbackup-ssh",title:"Symantec Netbackup SSH",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-netbackup-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-netbackup-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-netbackup-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-netbackup-ssh",title:"Symantec Netbackup SSH"},sidebar:"pp",previous:{title:"Symantec Netbackup NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nrpe"},next:{title:"Thales Mistral VS9 Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-thales-mistral-vs9-restapi"}},c={},k=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SSH",id:"configuration-ssh",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],m={toc:k},N="wrapper";function g(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(N,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon Netbackup SSH apporte 1 mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Netbackup-SSH")),(0,n.kt)("p",null,"Il apporte les Mod\xe8les de Services suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dedup-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Dedup-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Drive-Cleaning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Drive-Cleaning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Drive-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Drive-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Job-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Job-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Tape-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-SSH-Tape-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Netbackup-Job-Per-Policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des Jobs")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Dedup-Status",label:"Dedup-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk_pool.deduplication.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Drive-Cleaning",label:"Drive-Cleaning",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"drives.unclean.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%d drives needs a reset mount time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Drive-Status",label:"Drive-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Job-Status",label:"Job-Status",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"total jobs : %s")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Per ",(0,n.kt)("em",{parentName:"li"},"job"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Tape-Usage",label:"Tape-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tape.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tape.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"configuration-ssh"},"Configuration SSH"),(0,n.kt)("p",null,"L'utilisation de ce connecteur de supervision requiert la cr\xe9ation d'un utilisateur sur le\nserveur supervis\xe9, lequel sera utilis\xe9 par le collecteur Centreon pour\ns'authentifier et ex\xe9cuter les requ\xeates SSH."),(0,n.kt)("p",null,"Deux m\xe9thodes de connexion SSH sont possibles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"soit en \xe9changeant la cl\xe9 SSH publique de l'utilisateur ",(0,n.kt)("inlineCode",{parentName:"li"},"centreon-engine")," du collecteur Centreon"),(0,n.kt)("li",{parentName:"ul"},"soit en d\xe9finissant votre utilisateur et votre mot de passe directement dans les Macros d'H\xf4tes.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"L'utilisateur distant doit pouvoir ex\xe9cuter des commandes syst\xe8me. "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("em",{parentName:"li"},"Netbackup"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Netbackup-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Netbackup SSH")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("em",{parentName:"li"},"Netbackup"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Netbackup-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("em",{parentName:"li"},"Netbackup SSH"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-netbackup-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Netbackup SSH")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address/DNS" correspondant \xe0 votre serveur ',(0,n.kt)("em",{parentName:"li"},"Netbackup"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"applications-netbackup-ssh-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises(",(0,n.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Il y a trois backends SSH disponibles pour \xe9tablir la connexion au serveur distant, ",(0,n.kt)("em",{parentName:"p"},"sshcli"),", ",(0,n.kt)("em",{parentName:"p"},"plink"),", ",(0,n.kt)("em",{parentName:"p"},"libssh")," (le plus performant).")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par d\xe9faut, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("strong",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par d\xe9faut: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,n.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par d\xe9faut, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("strong",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par d\xe9faut: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,n.kt)(l.Z,{value:"libssh backend (par d\xe9faut)",label:"libssh backend (par d\xe9faut)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par d\xe9faut, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("strong",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par d\xe9faut: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement l'empreinte du serveur cible. "))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \\\n    --plugin=apps::backup::netbackup::local::plugin \\\n    --mode=job-status \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=sshcli \\\n    --critical-status='%{status} !~ /up/i' \\ \n    --verbose\n")),(0,n.kt)("p",null,"La commande ci-dessus contr\xf4le le statut des t\xe2ches Symantec Netbackup (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=job-status"),").\nLe Plugin utilise le Backend ",(0,n.kt)("strong",{parentName:"p"},"sshcli")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='sshcli'"),") avec l'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"),\nson mot de passe (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),") et il se connecte \xe0 l'h\xf4te ",(0,n.kt)("strong",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.81'"),")."),(0,n.kt)("p",null,"Une alerte sera remont\xe9e si un job donn\xe9 n'est pas dans un statut 'up'. "),(0,n.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,n.kt)("strong",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \\\n    --plugin=apps::backup::netbackup::local::plugin \\\n    --mode=job-status \\\n    --help\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#ssh-and-cli-checks"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}g.isMDXComponent=!0}}]);