"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93643],{57698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"hardware-pdu-gude-epc-snmp",title:"Gude EPC PDU SNMP"},s=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp",id:"integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp",title:"Gude EPC PDU SNMP",description:"Contenu du Pack de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-pdu-gude-epc-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-pdu-gude-epc-snmp",title:"Gude EPC PDU SNMP"},sidebar:"pp",previous:{title:"Emerson PDU",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-pdu-emerson-snmp"},next:{title:"Himoinsa SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/procedures/hardware-ups-himoinsa-snmp"}},d={},m=[{value:"Contenu du Pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],k={toc:m},g="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack-de-supervision"},"Contenu du Pack de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le Pack Gude Export Power Control collecte les donn\xe9es pour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Power-channels"),(0,a.kt)("li",{parentName:"ul"},"Sp-power-channels")),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Pdu-Gude-Epc-SNMP-Sp-Power-Channel-Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9couvre les ports unitaires et supervise leur utilisation")))))),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Power-channels",label:"Power-channels",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pdu.power","_","channels.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of power channels"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the channel"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ovp status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the built-in overvoltage protection"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ps status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the power supply"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Actual Current"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.energy.active.kilowatthour"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Absolute active energy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"kWh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.frequency.hertz"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Frequency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.phase.angle.degree"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Phase angle between voltage and L line current"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.active.watt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Active power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.power.apparent.voltampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"L line mean apparent power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"VA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.power.factor.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Power factor of channel"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.power.reactive.voltampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"L line mean reactive power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Var")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"power","_","channel","_","name"),"#","pdu.interface.power_channel.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Actual voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,a.kt)(l.Z,{value:"Sp-power-channels",label:"Sp-power-channels",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pdu.singleport","_","power","_","channels.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of single power channel ports"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current state (on/off)"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the channel"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Actual Current"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.energy.active.kilowatthour"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Absolute active energy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"kWh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.frequency.hertz"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Frequency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.phase.angle.degree"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Phase angle between voltage and L line current"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.active.watt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Active power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.power.apparent.voltampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"L line mean apparent power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"VA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.power.factor.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Power factor of channel"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.power.reactive.voltampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"L line mean reactive power"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Var")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sp","_","power","_","channel","_","name"),"#","pdu.interface.power_channel.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Actual voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler votre Gude Export Power Control, le SNMP doit \xeatre configur\xe9."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"Gude EPC SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-pdu-gude-epc-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"Gude EPC SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,a.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,a.kt)("em",{parentName:"li"},"Version SNMP")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"HW-Pdu-Gude-Epc-SNMP-custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl \\\n    --plugin=hardware::pdu::gude::epc::snmp::plugin \\\n    --mode=power-channels \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='gude_ro' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 2 active power channel(s) - All power channel interfaces are ok | 'pdu.power_channels.active.count'=2;;;0; 'Meter-A#pdu.interface.power_channel.current.ampere'=2.45A;;;0; 'Meter-A#pdu.interface.power_channel.energy.active.kilowatthour'=16784.21kWh;;;0; 'Meter-A#pdu.interface.power_channel.frequency.hertz'=50.00Hz;;;0; 'Meter-A#pdu.interface.power_channel.phase.angle.degree'=-189.00;;;0; 'Meter-A#pdu.interface.power_channel.active.watt'=523.00W;;;; 'Meter-A#pdu.interface.power_channel.power.apparent.voltampere'=558.00VA;;;; 'Meter-A#pdu.interface.power_channel.power.factor.count'=0.94;;;0; 'Meter-A#pdu.interface.power_channel.power.reactive.voltampere'=-193.00Var;;;; 'Meter-A#pdu.interface.power_channel.voltage.volt'=228.00V;;;0; 'Meter-B#pdu.interface.power_channel.current.ampere'=0.78A;;;0; 'Meter-B#pdu.interface.power_channel.energy.active.kilowatthour'=7993.61kWh;;;0; 'Meter-B#pdu.interface.power_channel.frequency.hertz'=50.00Hz;;;0; 'Meter-B#pdu.interface.power_channel.phase.angle.degree'=-254.00;;;0; 'Meter-B#pdu.interface.power_channel.active.watt'=151.00W;;;; 'Meter-B#pdu.interface.power_channel.power.apparent.voltampere'=178.00VA;;;; 'Meter-B#pdu.interface.power_channel.power.factor.count'=0.85;;;0; 'Meter-B#pdu.interface.power_channel.power.reactive.voltampere'=-91.00Var;;;; 'Meter-B#pdu.interface.power_channel.voltage.volt'=228.00V;;;0;\nPower channel interface 'Meter-A' status: valid, ovp status: ok, power supply status: up, current: 2.45 A, absolute energy active: 16784.21 kWh, frequency: 50.00 Hz, phase angle: -189.00\xb0, active power: 523.00 W, apparent power: 558.00 VA, power factor: 0.94, reactive power: -193.00 Var, voltage: 228.00 V\nPower channel interface 'Meter-B' status: valid, ovp status: ok, power supply status: up, current: 0.78 A, absolute energy active: 7993.61 kWh, frequency: 50.00 Hz, phase angle: -254.00\xb0, active power: 151.00 W, apparent power: 178.00 VA, power factor: 0.85, reactive power: -91.00 Var, voltage: 228.00 V\n")),(0,a.kt)("p",null,"Cette commande contr\xf4le l'utilisation des power channels Gude (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=power-channels"),") ayant pour adresse ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,a.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,a.kt)("em",{parentName:"p"},"gude_ro")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='gude_ro'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peuvent \xeatre affich\xe9es\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl \\\n    --plugin=hardware::pdu::gude::epc::snmp::plugin \\\n    --mode=power-channels \\\n    --help\n")),(0,a.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"Diagnostique des plugins")))}f.isMDXComponent=!0}}]);