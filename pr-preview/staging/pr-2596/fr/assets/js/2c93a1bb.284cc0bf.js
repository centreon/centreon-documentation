"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[45802],{81508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-ibm-tsamp-ssh",title:"IBM TSAMP SSH"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh",id:"integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh",title:"IBM TSAMP SSH",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-ibm-tsamp-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-ibm-tsamp-ssh",title:"IBM TSAMP SSH"},sidebar:"pp",previous:{title:"IBM Tivoli Storage M",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-ibm-tsm-dsmadmc"},next:{title:"IP Fabric API",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-ipfabric-api"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],k={toc:m},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le Pack IBM Tivoli System Automation for Multiplatforms collecte les donn\xe9es pour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resource-groups")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"App-Ibm-Tsamp-SSH-Resource-Group-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les groupes de ressources et supervise leur statut")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Resource-groups",label:"Resource-groups",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.unknown.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of unknown resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.offline.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of offline resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.online.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of online resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.failed_offline.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of failed offline resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.stuck_online.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of stuck online resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.pending_online.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of pending online resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.pending_offline.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of pending offline resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"resource_groups.ineligible.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of ineligible resource groups"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status resource group"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current state of the resource group"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de fonctionner, le Plugin n\xe9cessite une connexion SSH entre le Poller et le serveur. L'utilisateur distant\ndoit avoir assez de privil\xe8ges pour executer la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"lssam"),". "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"IBM TSAMP SSH")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-ibm-tsamp-ssh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"IBM TSAMP SSH")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Lorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"App-Ibm-Tsamp-SSH-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant (Macro SSHUSERNAME)."))),(0,a.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"plink"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant (Macro SSHUSERNAME)."))),(0,a.kt)(l.Z,{value:"libssh backend (par d\xe9faut)",label:"libssh backend (par d\xe9faut)",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,a.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,a.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,a.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,a.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible."))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \\\n    --plugin=apps::ibm::tsamp::local::plugin \\\n    --mode=resource-groups \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=libssh \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All resource groups are ok | 'resource_groups.unknown.count'=0;;;0; 'resource_groups.offline.count'=0;;;0; 'resource_groups.online.count'=5;;;0; 'resource_groups.failed_offline.count'=0;;;0; 'resource_groups.stuck_online.count'=0;;;0; 'resource_groups.pending_online.count'=0;;;0; 'resource_groups.pending_offline.count'=0;;;0; 'resource_groups.ineligible.count'=0;;;0;\nResource group 'db2_db2inst1_db2inst1_AUDIT-rg' operational state: online [nominal: online]\nResource group 'db2_db2inst1_db2inst1_AUDIT2-rg' operational state: online [nominal: online]\nResource group 'db2_db2inst1_db2inst1_TCDB-rg' operational state: online [nominal: online]\nResource group 'db2_db2inst1_netdb101-v_0-rg' operational state: online [nominal: online]\nResource group 'db2_db2inst1_netdb102-v_0-rg' operational state: online [nominal: online]\n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le le statut des groupes de ressources (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=resource-groups"),").\nLe Plugin utilise le Backend ",(0,a.kt)("em",{parentName:"p"},"libssh")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),") avec l'utisateur ",(0,a.kt)("em",{parentName:"p"},"centreon")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon --ssh-password='centreon-password'"),")\net il se connecte \xe0 l'h\xf4te ",(0,a.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.81'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peuvent \xeatre affich\xe9s\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \\\n    --plugin=apps::ibm::tsamp::local::plugin \\\n    --mode=resource-groups \\\n    --help\n")),(0,a.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#ssh-and-cli-checks"},"Diagnostique des plugins")))}f.isMDXComponent=!0}}]);