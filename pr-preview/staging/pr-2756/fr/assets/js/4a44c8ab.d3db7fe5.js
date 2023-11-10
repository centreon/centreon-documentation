"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73401],{67504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"virtualization-vmware2-vcenter-6",title:"VMware vCenter v6"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6",id:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6",title:"VMware vCenter v6",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6.md",tags:[],version:"current",frontMatter:{id:"virtualization-vmware2-vcenter-6",title:"VMware vCenter v6"},sidebar:"pp",previous:{title:"VMware vCenter v5",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5"},next:{title:"VMware VM",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vm"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration du connecteur Centreon VMWare",id:"configuration-du-connecteur-centreon-vmware",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens les erreurs suivantes :",id:"jobtiens-les-erreurs-suivantes-",level:3},{value:"UNKNOWN: Unknown container name &#39;default&#39; |",id:"unknown-unknown-container-name-default-",level:4},{value:"UNKNOWN: Container connection problem |",id:"unknown-container-connection-problem-",level:4},{value:"UNKNOWN: Cannot get response (timeout received)",id:"unknown-cannot-get-response-timeout-received",level:4}],v={toc:d},k="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing."),(0,r.kt)("p",null,"Le connecteur de supervision Centreon s'appuie sur le SDK Centreon VMWare Connecteur pour requ\xeater l'API du vCenter."),(0,r.kt)("p",null,"Avec le connecteur, Centreon peut superviser les VMs, Datastores, ESXs, Clusters, etc."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Snapshots"),(0,r.kt)("li",{parentName:"ul"},"VM-tools")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)("p",null,"Ce pack s'appuie sur le pack \"VMware vCenter\" pour obtenir plus d'indicateurs (virtualization-vmware2-vcenter-generic)."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Vm-Snapshot-Global",label:"Vm-Snapshot-Global",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vm.snapshots.warning.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of snapshots older than 3 days (default treshold)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vm.snapshots.critical.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of snapshots older than 5 days (default threshold)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,r.kt)(l.Z,{value:"Vm-Tools-Global",label:"Vm-Tools-Global",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vm.tools.notupdated.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of VMs with VM-Tools not updated (default threshold)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vm.tools.notrunning.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of VMs with VM-Tools not running (default threshold)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vm.tools.notinstalled.current.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of VMs with VM-Tools not installed (default threshold)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-du-connecteur-centreon-vmware"},"Configuration du connecteur Centreon VMWare"),(0,r.kt)("p",null,"Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requ\xeater le vCenter."),(0,r.kt)("p",null,"Installer le daemon sur tous les pollers :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum install centreon-plugin-Virtualization-VMWare-daemon\n")),(0,r.kt)("p",null,'Pour configurer les acc\xe8s \xe0 votre infrastructure, \xe9diter le fichier\n"/etc/centreon/centreon',"_",'vmware.pm" :'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        default => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        }\n    }\n);\n\n1;\n")),(0,r.kt)("p",null,"ssurez vous d'avoir remplac\xe9 toutes les variables avec les informations n\xe9cessaires :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ip","_","hostname"),": Adresse IP ou nom d'h\xf4te du vCenter ou de l'ESX (Si il est en mode standalone),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"username"),': utilisateur avec un acc\xe8s "lecture seul" au vCenter ou \xe0 l\'ESX (Vous pouvez utilisez un utilisateur du domaine),'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"password"),": le mot de passe de l'utilisateur.")),(0,r.kt)("p",null,"Vous pouvez configurer plusieurs connexions \xe0 diff\xe9rents vCenter ou ESX\nen utilisant cette structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        'my_first_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        },\n        'my_other_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<DOMAIN>\\<username>',\n            password => '<password>'\n        },\n    },\n    port => 5700\n);\n\n1;\n")),(0,r.kt)("p",null,"Chaque entr\xe9e est un ",(0,r.kt)("strong",{parentName:"p"},"container"),"."),(0,r.kt)("p",null,"Pour d\xe9marrer le daemon et l'activer au d\xe9marrage :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start centreon_vmware\nsystemctl enable centreon_vmware\n")),(0,r.kt)("p",null,'Vous pouvez v\xe9rifiez que votre configuration est fonctionelle en consultant les journaux dans :\n"/var/log/centreon/centreon',"_",'vmware.log".'),(0,r.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,r.kt)("p",null,"Le Collecteur Centreon avec le connecteur VMWare d'install\xe9 doit acc\xe9der en HTTPS (TCP/443) au vCenter."),(0,r.kt)("p",null,"Les Collecteurs requ\xeatant le Collecteur avec le connecteur VMWare doit acc\xe9der en TCP/5700 au Collecteur avec le Connecteur VMWare."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant l'infrastructure VMWare :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'Vmware vCenter v6' depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les mod\xe8les de supervision :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-vmware2-vcenter-6.noarch\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'Vmware vCenter v6' depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,r.kt)("li",{parentName:"ul"},'Appliquez le mod\xe8le "Virt-VMWare2-VCenter-6-custom", et configurez toutes les macros : ')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWARECONTAINER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of your container in the file centreon_vmware.pm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREHOST"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Centreon server that launches the connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"By default: 5700")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=snapshot-vm \\\n    --custommode=connector \\\n    --connector-hostname='localhost' \\\n    --connector-port='5700' \\\n    --container='vcenter01' \\\n    --vm-hostname='.*' \\\n    --filter \\\n    --filter-uuid='' \\\n    --warning='259200' \\\n    --critical='432000' \\\n    --disconnect-status='ok' \\\n    --nopoweredon-skip \\\n    --check-consolidation \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;\n'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]\n")),(0,r.kt)("p",null,"Cette commande contr\xf4le les snapshots des machines virtuelles (",(0,r.kt)("inlineCode",{parentName:"p"},"--plugin=apps::vmware::connector::plugin --mode=snapshot-vm"),").\nLe plugin se connecte au daemon VMWare sur ",(0,r.kt)("strong",{parentName:"p"},"localhost")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--connector-hostname='localhost'"),") sur le port ",(0,r.kt)("strong",{parentName:"p"},"5700")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--connector-port='5700'"),").\nPuis la commande requ\xeate le ",(0,r.kt)("strong",{parentName:"p"},"container")," *",(0,r.kt)("em",{parentName:"p"},"vcenter01")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--container='vcenter01'"),")."),(0,r.kt)("p",null,"La commande d\xe9clenchera une alerte WARNING si un snapshot est plus vieux de 3 jours / 259200s (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning='259200'"),")\net une alerte CRITICAL si un snapshot est plus vieux de 5 jours / 432000s (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning='259200'"),")"),(0,r.kt)("p",null,"Vous pouvez afficher tous les modes disponibles \xe0 l'aide de la commande suivante :`"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --list-mode\n")),(0,r.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option --help \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=snapshot-vm  \\\n    --help\n")),(0,r.kt)("h3",{id:"jobtiens-les-erreurs-suivantes-"},"J'obtiens les erreurs suivantes :"),(0,r.kt)("h4",{id:"unknown-unknown-container-name-default-"},"UNKNOWN: Unknown container name 'default' |"),(0,r.kt)("p",null,"Ce message d'erreur signifie que le ",(0,r.kt)("strong",{parentName:"p"},"container* pass\xe9 en argument n'existe pas dans la configuration du connecteur VMWare.\nV\xe9rifiez la macro "),"CENTREONVMWARECONTAINER*",(0,r.kt)("em",{parentName:"p"}," sur l'h\xf4te ou v\xe9rifiez la configuration dans le fichier "),"/etc/centreon/centreon_vmware.pm*"),(0,r.kt)("h4",{id:"unknown-container-connection-problem-"},"UNKNOWN: Container connection problem |"),(0,r.kt)("p",null,"Ce message signifie que vous avez un probl\xe8me avec les identifiants li\xe9s \xe0 votre ",(0,r.kt)("strong",{parentName:"p"},"container"),".\nV\xe9rifiez les identifiants dans le fichier ",(0,r.kt)("em",{parentName:"p"},"/etc/centreon/centreon_vmware.pm"),".\nVous pouvez aussi regarder les logs pour plus d'informations: ",(0,r.kt)("em",{parentName:"p"},"/var/log/centreon/centreon_vmware.log")),(0,r.kt)("h4",{id:"unknown-cannot-get-response-timeout-received"},"UNKNOWN: Cannot get response (timeout received)"),(0,r.kt)("p",null,"Ce messsage d'erreur signifie que le plugin n'a pas eu de r\xe9ponse du daemon VMWare.\nV\xe9rifiez vos param\xe8tres de connexion et les macros ",(0,r.kt)("strong",{parentName:"p"},"CENTREONVMWAREHOST")," et ",(0,r.kt)("strong",{parentName:"p"},"CENTREONVMWAREPORT"),"."))}g.isMDXComponent=!0}}]);