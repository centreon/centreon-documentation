"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[45425],{45175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>d});t(67294);var a=t(3905),i=t(51715),r=t(7626);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const u={id:"applications-antivirus-clamav-ssh",title:"Antivirus ClamAV"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",id:"integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",title:"Antivirus ClamAV",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-antivirus-clamav-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-antivirus-clamav-ssh",title:"Antivirus ClamAV"},sidebar:"pp",previous:{title:"Ansible Tower CLI",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-ansible-tower"},next:{title:"Apache Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/pp/integrations/plugin-packs/procedures/applications-webservers-apache-serverstatus"}},m={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SSH",id:"configuration-ssh",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"<code>UNKNOWN: Command error: Host key verification failed.</code>",id:"unknown-command-error-host-key-verification-failed",level:4}],v={toc:d},g="wrapper";function k(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)(g,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){s(e,n,t[n])}))}return e}({},v,t),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engine version"),(0,a.kt)("li",{parentName:"ul"},"main.cvd version"),(0,a.kt)("li",{parentName:"ul"},"daily.cvd version")),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-ssh"},"Configuration SSH"),(0,a.kt)("p",null,"L'utilisation de ce connecteur de supervision requiert la cr\xe9ation d'un utilisateur sur le\nserveur ClamAV, lequel sera utilis\xe9 par le collecteur Centreon pour\ns'authentifier et ex\xe9cuter les requ\xeates SSH. Les privil\xe8ges ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," ne\nsont pas n\xe9cessaires, un utilisateur 'simple' est suffisant.\nDeux m\xe9thodes de connexion SSH sont possibles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"soit en \xe9changeant la cl\xe9 SSH publique de l'utilisateur ",(0,a.kt)("inlineCode",{parentName:"li"},"centreon-engine")," du collecteur Centreon"),(0,a.kt)("li",{parentName:"ul"},"soit en d\xe9finissant votre utilisateur et votre mot de passe directement dans les Macros d'H\xf4tes.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Clamav-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins")))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Clamav-Ssh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-antivirus-clamav-ssh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Integration de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur ',(0,a.kt)("em",{parentName:"li"},"Antivirus ClamAV")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Applications-Antivirus-Clamav-Ssh-custom")," "),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises(",(0,a.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_clamav_ssh.pl \\\n    --plugin=apps::antivirus::clamav::local::plugin \\\n    --mode=update-status \\\n    --hostname=10.0.0.1 \\\n    --remote \\\n    --critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}' \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null," La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK : clamav engine version '0.103.2/0.103.2' main.cvd version '60/60', last update 1d 3h 46m 40s daily.cvd version '25839/25839', last update 1d 3h 46m 40s | \n")),(0,a.kt)("p",null,"Dans cet exemple, une alarme de type CRITICAL sera d\xe9clench\xe9e si la derni\xe8re\nversion ",(0,a.kt)("em",{parentName:"p"},"maindb")," install\xe9e n'est pas \xe9gale \xe0 la derni\xe8re version ",(0,a.kt)("em",{parentName:"p"},"maindb"),"\ndisponible\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre --help \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \\\n    --plugin=apps::antivirus::clamav::local::plugin  \\\n    --mode=update-status  \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoute le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," /usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \\\n    --plugin=apps::antivirus::clamav::local::plugin  \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("h4",{id:"unknown-command-error-host-key-verification-failed"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error: Host key verification failed.")),(0,a.kt)("p",null,"Lors de l'utilisation des backends SSH ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"plink")," dans les contr\xf4les, il\nest n\xe9cessaire de lancer la commande manuellement une premi\xe8re fois afin de\nvalider le ",(0,a.kt)("em",{parentName:"p"},"fingerprint")," du serveur distant."))}k.isMDXComponent=!0}}]);