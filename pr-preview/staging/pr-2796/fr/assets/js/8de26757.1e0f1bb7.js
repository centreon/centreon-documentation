"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81983],{91910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-drbd-ssh",title:"DRBD SSH"},d=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-drbd-ssh",id:"integrations/plugin-packs/procedures/applications-drbd-ssh",title:"DRBD SSH",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-drbd-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-drbd-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-drbd-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-drbd-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-drbd-ssh",title:"DRBD SSH"},sidebar:"pp",previous:{title:"Control-M Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-controlm-restapi"},next:{title:"Dynatrace Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-dynatrace-restapi"}},c={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;ai ce message d&#39;erreur : <code>UNKNOWN: Command error: Host key verification failed.</code>. Qu&#39;est-ce que cela signifie ?",id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-",level:3}],k={toc:m},f="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"DRBD est une architecture de stockage distribu\xe9e pour GNU/Linux, permettant la r\xe9plication de p\xe9riph\xe9riques de bloc\n(disques, partitions, volumes logiques etc.) entre des serveurs.\nDRBD est un logiciel libre, mais un support existe. DRBD est compos\xe9 d'un module noyau et d'outils d'administration. "),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disques utilisant DRBD, incluant les *roles, devices et peers.")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle\nde DRDB : ",(0,r.kt)("a",{parentName:"p",href:"https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/"},"https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Resources",label:"Resources",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk-status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"peer-connection-status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peer connection status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"peer-device-replication-status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peer device replication status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"peer-device-disk-status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peer device disk status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resources.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of resources"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk.data.read.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk data read"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk.data.written.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk data written"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"peer.traffic.in.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peer traffic in"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"peer.traffic.out.bitspersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peer traffic out"),(0,r.kt)("td",{parentName:"tr",align:"left"},"b/s")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Un certain nombre de distributions fournissent DRBD via le gestionnaire de paquets des diff\xe9rentes distributions. "),(0,r.kt)("p",null,"Plus d'informations pour son d\xe9ploiement sont disponible sur la documentation officielle de DRBD:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/#ch-install-packages"},"https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/#ch-install-packages")),(0,r.kt)("p",null,"Afin de fonctionner, le Plugin n\xe9cessite une connexion SSH entre le Poller et le serveur executant DRBD. L'utilisateur distant\ndoit avoir assez de privil\xe8ges pour executer la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/sbin/drbdsetup"),". "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources DRDB :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Drbd-Ssh.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"DRBD SSH")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources DRBD :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Drbd-Ssh.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install ccentreon-pack-applications-drbd-ssh.noarch\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"DRBD SSH")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un H\xf4te par environnement DRBD\nLorsque vous ajoutez un H\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"App-Drbd-SSH-custom"),".\nUne fois celui-ci configur\xe9, certaines Macros doivent \xeatre renseign\xe9es:"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,r.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,r.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,r.kt)(i.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,r.kt)("inlineCode",{parentName:"td"},"plink"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,r.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,r.kt)(i.Z,{value:"libssh backend (par d\xe9faut)",label:"libssh backend (par d\xe9faut)",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,r.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,r.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,r.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible. "))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \\\n    --plugin=apps::drbd::local::plugin.pm \\\n    --mode=resources \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password=centreon-password \\\n    --ssh-backend=libssh \\\n    --legacy-proc \\\n    --verbose\n    \nOK: total resources: 9 - All drbd resources are ok \n| 'resources.total.count'=9;;;0; '0#disk.data.read.bytespersecond'=0B/s;;;0; '0#disk.data.written.bytespersecond'=0B/s;;;0; '0~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'0~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '1#disk.data.read.bytespersecond'=0B/s;;;0; '1#disk.data.written.bytespersecond'=0B/s;;;0; '1~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'1~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '2#disk.data.read.bytespersecond'=0B/s;;;0; '2#disk.data.written.bytespersecond'=0B/s;;;0; '2~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'2~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '3#disk.data.read.bytespersecond'=0B/s;;;0; '3#disk.data.written.bytespersecond'=0B/s;;;0; '3~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'3~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '4#disk.data.read.bytespersecond'=0B/s;;;0; '4#disk.data.written.bytespersecond'=0B/s;;;0; '4~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'4~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '5#disk.data.read.bytespersecond'=0B/s;;;0; '5#disk.data.written.bytespersecond'=0B/s;;;0; '5~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'5~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '6#disk.data.read.bytespersecond'=0B/s;;;0; '6#disk.data.written.bytespersecond'=0B/s;;;0; '6~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'6~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '7#disk.data.read.bytespersecond'=0B/s;;;0; '7#disk.data.written.bytespersecond'=0B/s;;;0; '7~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'7~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '8#disk.data.read.bytespersecond'=0B/s;;;0; '8#disk.data.written.bytespersecond'=0B/s;;;0; '8~0#peer.traffic.in.bitspersecond'=0b/s;;;0; \n'8~0#peer.traffic.out.bitspersecond'=0b/s;;;0;  \n")),(0,r.kt)("p",null,"La commande ci-dessus contr\xf4le les resources l'application DRBD (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=resources"),").\nIl y a pour adresse 10.30.2.81 (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.81"),") comme Backend SSH  (",(0,r.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),")\navec les centreon comme username ",(0,r.kt)("em",{parentName:"p"},"centreon")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),") et comme mot de passe ",(0,r.kt)("em",{parentName:"p"},"centreon-password")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),"). "),(0,r.kt)("p",null,"L'option ",(0,r.kt)("em",{parentName:"p"},"legacy-proc")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--legacy-proc"),") permet de pouvoir utiliser l'ancien fichier proc (",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/drbd"),"). Ce qui permet d'utiliser une version les versions ant\xe9rieures \xe0 la version 9 de DRBD."),(0,r.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \\\n--plugin=apps::drbd::local::plugin.pm \\\n--mode=resources --help\n")),(0,r.kt)("h3",{id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-"},"J'ai ce message d'erreur : ",(0,r.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". Qu'est-ce que cela signifie ?"),(0,r.kt)("p",null,"Cela signifie que vous n'avez pas valid\xe9 manuellement la signature (fingerprint) du serveur cible avec ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"plink")," sur le Poller Centreon."))}b.isMDXComponent=!0}}]);