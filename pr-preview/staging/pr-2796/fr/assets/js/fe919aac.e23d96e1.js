"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[19035],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(r),g=o,m=s["".concat(c,".").concat(g)]||s[g]||d[g]||l;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},90749:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});r(67294);var t=r(3905);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"developer-gorgone-pull-mode",title:"Configurer Gorgone en mode pull"},c=void 0,u={unversionedId:"developer/developer-gorgone-pull-mode",id:"version-23.10/developer/developer-gorgone-pull-mode",title:"Configurer Gorgone en mode pull",description:"Cette proc\xe9dure d\xe9crit comment configurer Gorgone entre un collecteur distant et un serveur central.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-gorgone-pull-mode.md",sourceDirName:"developer",slug:"/developer/developer-gorgone-pull-mode",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/developer/developer-gorgone-pull-mode",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-gorgone-pull-mode.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"developer-gorgone-pull-mode",title:"Configurer Gorgone en mode pull"},sidebar:"version-23.10/docs",previous:{title:"G\xe9rer la communication client/serveur",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/developer/developer-gorgone-client-server-communication"},next:{title:"Configurer Gorgone en mode rebound",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/developer/developer-gorgone-rebound-mode"}},p={},s=[{value:"C\xf4t\xe9 collecteur distant",id:"c\xf4t\xe9-collecteur-distant",level:2},{value:"Pr\xe9requis d&#39;installation",id:"pr\xe9requis-dinstallation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"C\xf4t\xe9 serveur central",id:"c\xf4t\xe9-serveur-central",level:2},{value:"Pr\xe9requis d&#39;installation",id:"pr\xe9requis-dinstallation-1",level:3},{value:"Configuration",id:"configuration-1",level:3}],d={toc:s},g="wrapper";function m(e){var{components:n}=e,r=i(e,["components"]);return(0,t.kt)(g,l(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},d,r),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Cette proc\xe9dure d\xe9crit comment configurer Gorgone entre un collecteur distant et un serveur central."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Le mode pull permet au collecteur de fonctionner comme un client et de se connecter au central (qui sera le serveur). ")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Le mode pull est utilis\xe9 lorsque des pare-feu sont install\xe9s sur les collecteurs et emp\xeachent le trafic entrant.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Le mode pull est utilis\xe9 lorsque le central est dans le Cloud et que les collecteurs ne sont pas joignables via les adresses IP habituelles. Le mode pull (ou reverse) est alors utilis\xe9 pour que chaque collecteur initie une connexion \xe0 l'adresse IP publique du central. Pour en savoir plus sur ce cas d'utilisation, consultez ",(0,t.kt)("a",{parentName:"p",href:"https://thewatch.centreon.com/product-how-to-21/how-to-use-the-gorgone-pull-mode-374"},"cet article"),"."))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Note : notre exemple utilise la configuration d\xe9crite ci-dessous (vous devez adapter la proc\xe9dure \xe0 votre propre configuration).")),(0,t.kt)("p",null,"Serveur central :"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Adresse : 10.30.2.203")),(0,t.kt)("p",null,"Collecteur distant :"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"ID : 6 (configur\xe9 dans l'interface Centreon avec le protocole ZMQ. Vous pouvez obtenir cet identifiant \xe0 partir de l'interface Centreon)."),(0,t.kt)("li",{parentName:"ul"},"Addresse : 10.30.2.179"),(0,t.kt)("li",{parentName:"ul"},"Empreinte de la cl\xe9 publique RSA : nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s")),(0,t.kt)("h2",{id:"c\xf4t\xe9-collecteur-distant"},"C\xf4t\xe9 collecteur distant"),(0,t.kt)("h3",{id:"pr\xe9requis-dinstallation"},"Pr\xe9requis d'installation"),(0,t.kt)("p",null,"Le collecteur distant et Gorgone doivent \xeatre install\xe9s."),(0,t.kt)("h3",{id:"configuration"},"Configuration"),(0,t.kt)("p",null,"Configurez le fichier ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," de la mani\xe8re suivante :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'name:  distant-server\ndescription: Configuration for distant server\ngorgone:\n  gorgonecore:\n    id: 6\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: pull\n      package: "gorgone::modules::core::pull::hooks"\n      enable: true\n      target_type: tcp\n      target_path: 10.30.2.203:5556\n      ping: 1\n')),(0,t.kt)("h2",{id:"c\xf4t\xe9-serveur-central"},"C\xf4t\xe9 serveur central"),(0,t.kt)("h3",{id:"pr\xe9requis-dinstallation-1"},"Pr\xe9requis d'installation"),(0,t.kt)("p",null,"Le serveur central et Gorgone doivent \xeatre install\xe9s."),(0,t.kt)("h3",{id:"configuration-1"},"Configuration"),(0,t.kt)("p",null,"Configurez le fichier ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/40-gorgoned.yaml")," de la mani\xe8re suivante :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'...\ngorgone:\n  gorgonecore:\n    ...\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s\n    ...\n  modules:\n    ...\n    - name: register\n      package: "gorgone::modules::core::register::hooks"\n      enable: true\n      config_file: /etc/centreon-gorgone/nodes-register-override.yml\n    ...\n')),(0,t.kt)("p",null,"Vous venez de cr\xe9er le fichier ",(0,t.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/nodes-register-override.yml")," :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"nodes:\n  - id: 6\n    type: pull\n    prevail: 1\n")))}m.isMDXComponent=!0}}]);