"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94356],{40275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"administration",title:"Administration"},c=void 0,d={unversionedId:"monitoring/discovery/administration",id:"version-23.10/monitoring/discovery/administration",title:"Administration",description:"Mise \xe0 jour",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/discovery/administration.md",sourceDirName:"monitoring/discovery",slug:"/monitoring/discovery/administration",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/discovery/administration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/discovery/administration.md",tags:[],version:"23.10",lastUpdatedAt:1699359701,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"administration",title:"Administration"},sidebar:"version-23.10/docs",previous:{title:"D\xe9couvrir des services automatiquement",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/discovery/services-discovery"},next:{title:"D\xe9panner les incidents sur la d\xe9couverte des h\xf4tes",permalink:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/discovery/troubleshooting-hosts-discovery"}},p={},m=[{value:"Mise \xe0 jour",id:"mise-\xe0-jour",level:2},{value:"D\xe9sinstallation",id:"d\xe9sinstallation",level:2},{value:"Configuration du module Gorgone",id:"configuration-du-module-gorgone",level:2},{value:"Architecture distribu\xe9e",id:"architecture-distribu\xe9e",level:3},{value:"T\xe2che planifi\xe9e de d\xe9couverte de services",id:"t\xe2che-planifi\xe9e-de-d\xe9couverte-de-services",level:3},{value:"Acc\xe8s aux API",id:"acc\xe8s-aux-api",level:3}],g={toc:m},v="wrapper";function k(e){var{components:t}=e,u=l(e,["components"]);return(0,r.kt)(v,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mise-\xe0-jour"},"Mise \xe0 jour"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pour mettre \xe0 jour le module, ex\xe9cutez la commande suivante :")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update -y centreon-auto-discovery-server\n"))),(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update -y centreon-auto-discovery-server\n"))),(0,r.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt update centreon-auto-discovery-server\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connectez-vous sur l\u2019interface web de Centreon avec un compte ayant le\ndroit d\u2019installer des modules et rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Administration >\nExtensions > Gestionnaire"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assurez-vous que les modules ",(0,r.kt)("strong",{parentName:"p"},"License Manager")," et ",(0,r.kt)("strong",{parentName:"p"},"Gestionnaire de connecteurs de supervision"),"\nsont \xe0 jour avant de proc\xe9der \xe0 la mise \xe0 jour du module ",(0,r.kt)("strong",{parentName:"p"},"Auto Discovery"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur l\u2019ic\xf4ne de mise \xe0 jour correspondant au module ",(0,r.kt)("strong",{parentName:"p"},"Auto Discovery")," :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(68854).Z,width:"935",height:"410"})),(0,r.kt)("p",{parentName:"li"},"Le module est maintenant \xe0 jour :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(99435).Z,width:"621",height:"311"})))),(0,r.kt)("h2",{id:"d\xe9sinstallation"},"D\xe9sinstallation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La d\xe9sinstallation du module supprimera toutes les donn\xe9es associ\xe9es. Les\ndonn\xe9es ne pourront \xeatre restaur\xe9es sauf si une sauvegarde de la base de\ndonn\xe9es a \xe9t\xe9 faite.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connectez-vous sur l\u2019interface web de Centreon avec un compte ayant le\ndroit d\u2019installer des modules et rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Administration >\nExtensions > Gestionnaire"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur l\u2019ic\xf4ne de suppression correspondant au module ",(0,r.kt)("strong",{parentName:"p"},"Auto Discovery")," :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(99435).Z,width:"621",height:"311"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Une fen\xeatre de confirmation appara\xeet. Confirmez l\u2019action :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(51469).Z,width:"355",height:"251"})),(0,r.kt)("p",{parentName:"li"},"Le module est maintenant d\xe9sinstall\xe9 :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(47176).Z,width:"935",height:"410"})))),(0,r.kt)("h2",{id:"configuration-du-module-gorgone"},"Configuration du module Gorgone"),(0,r.kt)("p",null,"Le module ",(0,r.kt)("strong",{parentName:"p"},"Auto Discovery")," am\xe8ne une configuration sp\xe9cifique pour le service\nGorgone du serveur Central. La configuration par d\xe9faut est\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/41-autodiscovery.yaml"),"."),(0,r.kt)("p",null,"Une dur\xe9e maximale pour les t\xe2ches de d\xe9couverte d'h\xf4tes est configur\xe9e de\nmani\xe8re globale au module. S'il est n\xe9cessaire de la modifier (par exemple pour\nune d\xe9couverte SNMP sur un large sous-r\xe9seau), il faut \xe9diter le fichier\nde configuration et ajouter le directive ",(0,r.kt)("em",{parentName:"p"},"global_timeout"),"."),(0,r.kt)("p",null,"Si les notifications par mail ont \xe9t\xe9 activ\xe9es dans des r\xe8gles de d\xe9couverte de\nservices, les param\xe8tres relatifs au syst\xe8me d'envoi peuvent \xeatre d\xe9finis pour\nchoisir l'exp\xe9diteur, le sujet ou la commande mail."),(0,r.kt)("p",null,"Exemple de configuration :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'gorgone:\n  modules:\n    - name: autodiscovery\n      package: "gorgone::modules::centreon::autodiscovery::hooks"\n      enable: true\n      # Host Discovery\n      check_interval: 15\n      global_timeout: 300\n      # Service Discovery\n      mail_subject: Centreon Auto Discovery\n      mail_from: centreon-autodisco\n      mail_command: /bin/mail\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Assurez-vous de red\xe9marrer le service Gorgone apr\xe8s chaque modification :"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n"))),(0,r.kt)("h3",{id:"architecture-distribu\xe9e"},"Architecture distribu\xe9e"),(0,r.kt)("p",null,"La d\xe9couverte d'h\xf4tes et de services se base sur Gorgone pour effectuer les\nd\xe9couvertes \xe0 la fois sur le serveur Central et sur les Remote Servers ou\nPollers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Il est n\xe9cessaire d'avoir une communication en ZMQ entre le serveur Central\net un Remote Server pour effectuer une d\xe9couverte sur un Poller rattach\xe9 \xe0 ce\nRemote Server."),(0,r.kt)("p",{parentName:"blockquote"},"Consultez la documentation sur les diff\xe9rents types de\n",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2596/fr/docs/monitoring/monitoring-servers/communications"},"communication")," pour en savoir\nplus.")),(0,r.kt)("h3",{id:"t\xe2che-planifi\xe9e-de-d\xe9couverte-de-services"},"T\xe2che planifi\xe9e de d\xe9couverte de services"),(0,r.kt)("p",null,"Toutes les r\xe8gles de d\xe9couverte actives sont ex\xe9cut\xe9es p\xe9riodiquement \xe0 travers\nune t\xe2che ordonnanc\xe9e par le module cron de Gorgone. Le module ",(0,r.kt)("strong",{parentName:"p"},"Auto\nDiscovery")," am\xe8ne une d\xe9finition pour cette t\xe2che dans le fichier suivant :\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/cron.d/41-service-discovery.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: service_discovery\n  timespec: "30 22 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n')),(0,r.kt)("p",null,"La configuration par d\xe9faut ex\xe9cute les r\xe8gles de d\xe9couverte tous les jours \xe0\n22h30."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous aviez chang\xe9 la t\xe2che cron pour adapter la planification, vous\ndevez appliquer ces changements dans le nouveau fichier.")),(0,r.kt)("p",null,"Il est aussi possible d'ex\xe9cuter plusieurs t\xe2ches de d\xe9couverte de services\navec diff\xe9rents param\xe8tres:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: service_discovery_poller_1\n  timespec: "15 9 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n  parameters:\n    filter_pollers:\n      - Poller-1\n- id: service_discovery_poller_2_linux\n  timespec: "30 9 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n  parameters:\n    filter_pollers:\n      - Poller-2\n    filter_rules:\n      - OS-Linux-SNMP-Disk-Name\n      - OS-Linux-SNMP-Traffic-Name\n- id: service_discovery_poller_2_windows\n  timespec: "45 9 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n  parameters:\n    filter_pollers:\n      - Poller-2\n    filter_rules:\n      - OS-Windows-SNMP-Disk-Name\n      - OS-Windows-SNMP-Traffic-Name\n')),(0,r.kt)("p",null,"Voici ci-dessous la liste des param\xe8tres disponibles:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cl\xe9"),(0,r.kt)("th",{parentName:"tr",align:null},"Valeur"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter","_","rules"),(0,r.kt)("td",{parentName:"tr",align:null},"Tableau de r\xe8gles \xe0 utiliser pour la d\xe9couverte (vide pour toutes les utiliser)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"force","_","rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Ex\xe9cuter les r\xe8gles d\xe9sactiv\xe9es ('0': non forc\xe9, '1': forc\xe9)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter","_","hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"Tableau d'h\xf4tes sur lesquels effectuer la d\xe9couverte (vide pour tous les utiliser)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter","_","pollers"),(0,r.kt)("td",{parentName:"tr",align:null},"Tableau de collecteurs pour lesquels les h\xf4tes attach\xe9s se verront lancer la d\xe9couverte (vide pour tous les utiliser)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dry","_","run"),(0,r.kt)("td",{parentName:"tr",align:null},"Ex\xe9cuter la d\xe9couverte sans faire de modification ('0': modifications, '1': dry run)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no","_","generate","_","config"),(0,r.kt)("td",{parentName:"tr",align:null},"Sans g\xe9n\xe9ration de configuration (m\xeame si des changements ont eu lieu) ('0': generation, '1': pas de generation)")))),(0,r.kt)("h3",{id:"acc\xe8s-aux-api"},"Acc\xe8s aux API"),(0,r.kt)("p",null,"\xc0 l'installation de Gorgone, une configuration par d\xe9faut pour acc\xe9der aux API\nde Centreon se trouve ici ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/31-centreon-api.yaml"),"."),(0,r.kt)("p",null,"Elle d\xe9finit les acc\xe8s pour Centreon CLAPI et l'API Rest pour permettre \xe0 la\nd\xe9couverte de communiquer avec Centreon."),(0,r.kt)("p",null,"Exemple de configuration :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'gorgone:\n  tpapi:\n    - name: centreonv2\n      base_url: "http://127.0.0.1/centreon/api/latest/"\n      username: api\n      password: bpltc4aY\n    - name: clapi\n      username: cli\n      password: PYNM5kcc\n')),(0,r.kt)("p",null,"L'acc\xe8s \xe0 l'API Rest, repr\xe9sent\xe9 par ",(0,r.kt)("em",{parentName:"p"},"centreonv2"),", n\xe9cessite les identifiants\nd'un utilisateur ayant acc\xe8s \xe0 l'API de configuration. Il est utilis\xe9\npour la d\xe9couverte d'h\xf4tes."),(0,r.kt)("p",null,"L'acc\xe8s \xe0 CLAPI n\xe9cessite les identifiants d'un utilisateur ",(0,r.kt)("em",{parentName:"p"},"Administrateur"),".\nIl est utilis\xe9 pour la d\xe9couverte de services."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Un seul utilisateur peut \xeatre utilis\xe9 pour les deux acc\xe8s. De plus, les\nutilisateurs n'ont pas besoin d'avoir acc\xe8s \xe0 l'interface web.")))}k.isMDXComponent=!0},99435:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/install-after-0eff6b4c7a8ed4eba2e8c1d48aeeba89.png"},47176:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/install-before-41deca4048b7c1be4406048eb2706df0.png"},51469:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uninstall-popin-b7948c45f05ae065cae73c975a4582ea.png"},68854:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/update-29d114f6e00e0d73671fbb2e6b45a4a3.png"}}]);