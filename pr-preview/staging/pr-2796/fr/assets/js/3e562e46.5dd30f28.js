"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42837],{3269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"virtualization-vmware2-vm",title:"VMware VM"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/virtualization-vmware2-vm",id:"integrations/plugin-packs/procedures/virtualization-vmware2-vm",title:"VMware VM",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-vmware2-vm.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-vmware2-vm",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vm",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/virtualization-vmware2-vm.md",tags:[],version:"current",frontMatter:{id:"virtualization-vmware2-vm",title:"VMware VM"},sidebar:"pp",previous:{title:"VMware vCenter v6",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques Collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration du connecteur Centreon VMWare",id:"configuration-du-connecteur-centreon-vmware",level:3},{value:"Balises et Attributs personnalis\xe9s",id:"balises-et-attributs-personnalis\xe9s",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens les erreurs suivantes :",id:"jobtiens-les-erreurs-suivantes-",level:3},{value:"UNKNOWN: Unknown container name &#39;default&#39; |",id:"unknown-unknown-container-name-default-",level:4},{value:"UNKNOWN: Cannot get response (timeout received)",id:"unknown-cannot-get-response-timeout-received",level:4},{value:"UNKNOWN: Container connection problem |",id:"unknown-container-connection-problem-",level:4},{value:"UNKNOWN: Cannot find &#39;VirtualMachine&#39; object |",id:"unknown-cannot-find-virtualmachine-object-",level:4}],k={toc:d},g="wrapper";function N(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon s'appuie sur le SDK VMWare pour requ\xeater l'API du vCenter au travers d'un connecteur d\xe9di\xe9. "),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Virtual Machines")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Virt-VMWare2-VM-HostDiscovery"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvrez vos Machines Virtuelles li\xe9es \xe0 un vCenter ou \xe0 un ESXi")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques Collect\xe9es"),(0,a.kt)("p",null,"En plus des modes et des m\xe9triques d\xe9taill\xe9es ci-apr\xe8s, il est \xe9galement possible de superviser les \xe9l\xe9ments suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VM-Cpu : Supervision avanc\xe9e du CPU (CPU ready)"),(0,a.kt)("li",{parentName:"ul"},"VM-Datastores-Iops : Utilisation de la VM en Iops sur les Datastores"),(0,a.kt)("li",{parentName:"ul"},"VM-Swap : Utilisation du swap de la VM"),(0,a.kt)("li",{parentName:"ul"},"VM-Device : Contr\xf4le un p\xe9riph\xe9rique d'une VM (Par exemple VirtualCdrom)")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Vm-Tools",label:"Vm-Tools",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the VMware Tools (installed, running and up-to-date)"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(l.Z,{value:"Vm-Thinprovisioning",label:"Vm-Thinprovisioning",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the Thinprovisoning virtualdisks"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(l.Z,{value:"Vm-Status",label:"Vm-Status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Overall status of the VM"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(l.Z,{value:"Vm-Snapshot",label:"Vm-Snapshot",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vm.snapshots.warning.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of VM's snapshot older than 3 days (default threshold)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vm.snapshots.critical.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of VM's snapshot older than 5 days (default threshold)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(l.Z,{value:"Vm-Limit",label:"Vm-Limit",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vm.limit.cpu.alerts.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Alerts on CPU limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vm.limit.memory.alerts.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Alerts on Memory limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vm.limit.disk.alerts.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Alerts on Disk limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-du-connecteur-centreon-vmware"},"Configuration du connecteur Centreon VMWare"),(0,a.kt)("p",null,"Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requ\xeater le vCenter."),(0,a.kt)("p",null,"Installer le daemon sur tous les pollers :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install centreon-plugin-Virtualization-VMWare-daemon\n")),(0,a.kt)("p",null,'Pour configurer les acc\xe8s \xe0 votre infrastructure, \xe9diter le fichier\n"/etc/centreon/centreon',"_",'vmware.pm" :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        default => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        }\n    }\n);\n\n1;\n")),(0,a.kt)("p",null,"Assurez vous d'avoir remplac\xe9 toutes les variables avec les informations n\xe9cessaires :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ip","_","hostname"),": Adresse IP ou nom d'h\xf4te du vCenter ou de l'ESX (Si il est en mode standalone),"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"username"),': utilisateur avec un acc\xe8s "lecture seul" au vCenter ou \xe0 l\'ESX (Vous pouvez utilisez un utilisateur du domaine),'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"password"),": le mot de passe de l'utilisateur.")),(0,a.kt)("p",null,"Vous pouvez configurer plusieurs connexions \xe0 diff\xe9rents vCenter ou ESX\nen utilisant cette structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},"%centreon_vmware_config = (\n    vsphere_server => {\n        'my_first_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        },\n        'my_other_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<DOMAIN>\\<username>',\n            password => '<password>'\n        },\n    },\n    port => 5700\n);\n\n1;\n")),(0,a.kt)("p",null,"Chaque entr\xe9e est un ",(0,a.kt)("strong",{parentName:"p"},"container"),"."),(0,a.kt)("p",null,"Pour d\xe9marrer le daemon et l'activer au d\xe9marrage :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start centreon_vmware\nsystemctl enable centreon_vmware\n")),(0,a.kt)("p",null,'Vous pouvez v\xe9rifiez que votre configuration est fonctionelle en consultant les journaux dans :\n"/var/log/centreon/centreon',"_",'vmware.log".'),(0,a.kt)("h3",{id:"balises-et-attributs-personnalis\xe9s"},"Balises et Attributs personnalis\xe9s"),(0,a.kt)("p",null,"Pour d\xe9couvrir les balises et les attributs personnalis\xe9s, vous devez : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"utiliser la version ",(0,a.kt)("strong",{parentName:"li"},"3.2.5")," de ",(0,a.kt)("strong",{parentName:"li"},"centreon-vmware-daemon")),(0,a.kt)("li",{parentName:"ul"},"ajouter ",(0,a.kt)("strong",{parentName:"li"},"--tags")," dans les options suppl\xe9mentaires de d\xe9couverte : allez \xe0 la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes > D\xe9couverte"),", et \xe0 la 3\xe8me \xe9tape (",(0,a.kt)("strong",{parentName:"li"},"D\xe9finir les param\xe8tres de d\xe9couverte"),"), dans la section ",(0,a.kt)("strong",{parentName:"li"},"Param\xe8tres suppl\xe9mentaires"),", dans le champ ",(0,a.kt)("strong",{parentName:"li"},"Options suppl\xe9mentaires"),", saisissez ",(0,a.kt)("strong",{parentName:"li"},"--tags"),".")),(0,a.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,a.kt)("p",null,"Le Collecteur Centreon avec le connecteur VMWare d'install\xe9 doit acc\xe9der en HTTPS (TCP/443) au vCenter."),(0,a.kt)("p",null,"Les Collecteurs requ\xeatant le Collecteur avec le connecteur VMWare doit acc\xe9der en TCP/5700 au Collecteur avec le Connecteur VMWare."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant l'infrastructure VMWare:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'Vmware VM' depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les mod\xe8les de supervision:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-virtualization-vmware2-vm\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'Vmware VM' depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,a.kt)("li",{parentName:"ul"},'Appliquez le mod\xe8le "Virt-VMWare2-VM-custom" et configurez toutes les macros :')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWARECONTAINER"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of your container in the file centreon_vmware.pm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREHOST"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The Centreon server that launches the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CENTREONVMWAREPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By default: 5700")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"VMNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the VM (defined in your VMWare infrastructure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"VMUUID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify The VM UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"VMWAREEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl\n    --plugin=apps::vmware::connector::plugin\n    --mode=tools-vm\n    --custommode=connector\n    --connector-hostname='localhost'\n    --connector-port='5700'\n    --container='vcenter01'\n    --vm-hostname='SRV-LIN-TLS'\n    --filter-uuid=''\n    --tools-notinstalled-status='critical'\n    --tools-notrunning-status='critical'\n    --tools-notup2date-status='warning'\n")),(0,a.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: VMTools are OK\n")),(0,a.kt)("p",null,"Cette commande supervise le statut des VMTools (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::vmware::connector::plugin --mode=tools-vm"),") de la VM ",(0,a.kt)("strong",{parentName:"p"},"SRV-LIN-TLS")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--vm-hostname='SRV-LIN-TLS'"),").\nLe plugin se connecte au daemon VMWare sur ",(0,a.kt)("strong",{parentName:"p"},"localhost")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--connector-hostname='localhost'"),") sur le port ",(0,a.kt)("strong",{parentName:"p"},"5700")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--connector-port='5700'"),").\nPuis la command requ\xeate le ",(0,a.kt)("strong",{parentName:"p"},"container")," ",(0,a.kt)("strong",{parentName:"p"},"vcenter01")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--container='vcenter01'"),") parce que la VM ",(0,a.kt)("strong",{parentName:"p"},"SRV-LIN-TLS")," est manag\xe9e par ",(0,a.kt)("strong",{parentName:"p"},"vcenter01"),"."),(0,a.kt)("p",null,"La commande d\xe9clenchera :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une alarme WARNING si les VMTools ne sont pas \xe0 jour (",(0,a.kt)("inlineCode",{parentName:"li"},"--tools-notup2date-status='warning'"),")"),(0,a.kt)("li",{parentName:"ul"},"Une alarme CRITICAL si les VMTools ne sont pas d\xe9marr\xe9s ou install\xe9s (",(0,a.kt)("inlineCode",{parentName:"li"},"--tools-notinstalled-status='critical' \t--tools-notrunning-status='critical'"),")")),(0,a.kt)("p",null,"Vous pouvez afficher tous les modes disponibles \xe0 l'aide de la commande suivante :`"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option --help \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=tools-vm  \\\n    --help\n")),(0,a.kt)("h3",{id:"jobtiens-les-erreurs-suivantes-"},"J'obtiens les erreurs suivantes :"),(0,a.kt)("h4",{id:"unknown-unknown-container-name-default-"},"UNKNOWN: Unknown container name 'default' |"),(0,a.kt)("p",null,"Ce message d'erreur signifie que le ",(0,a.kt)("strong",{parentName:"p"},"container* pass\xe9 en argument n'existe pas dans la configuration du connecteur VMWare.\nV\xe9rifiez la macro "),"CENTREONVMWARECONTAINER*",(0,a.kt)("em",{parentName:"p"}," sur l'h\xf4te ou v\xe9rifiez la configuration dans le fichier "),"/etc/centreon/centreon_vmware.pm*"),(0,a.kt)("h4",{id:"unknown-cannot-get-response-timeout-received"},"UNKNOWN: Cannot get response (timeout received)"),(0,a.kt)("p",null,"Ce messsage d'erreur signifie que le plugin n'a pas eu de r\xe9ponse du daemon VMWare.\nV\xe9rifiez vos param\xe8tres de connexion et les macros ",(0,a.kt)("strong",{parentName:"p"},"CENTREONVMWAREHOST")," et ",(0,a.kt)("strong",{parentName:"p"},"CENTREONVMWAREPORT"),"."),(0,a.kt)("h4",{id:"unknown-container-connection-problem-"},"UNKNOWN: Container connection problem |"),(0,a.kt)("p",null,"Ce message signifie que vous avez un probl\xe8me avec les identifiants li\xe9s \xe0 votre ",(0,a.kt)("strong",{parentName:"p"},"container"),".\nV\xe9rifiez les identifiants dans le fichier ",(0,a.kt)("em",{parentName:"p"},"/etc/centreon/centreon_vmware.pm"),".\nVous pouvez aussi regarder les logs pour plus d'informations: ",(0,a.kt)("em",{parentName:"p"},"/var/log/centreon/centreon_vmware.log")),(0,a.kt)("h4",{id:"unknown-cannot-find-virtualmachine-object-"},"UNKNOWN: Cannot find 'VirtualMachine' object |"),(0,a.kt)("p",null,"Ce message d'erreur signifie que le plugin n'a pas trouv\xe9 la machine virtuelle.\nV\xe9rifiez le nom de la machine virtuelle dans la macro ",(0,a.kt)("strong",{parentName:"p"},"HOSTVMNAME"),",\nThis error message means that the Plugin didn't find the Virtual Machine.\nCheck the Virtual Machine name in the macro ",(0,a.kt)("strong",{parentName:"p"},"HOSTVMNAME"),", il doit correspondre au nom d\xe9fini dans votre infrastructure VMWare."))}N.isMDXComponent=!0}}]);