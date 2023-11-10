"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10118],{97772:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var o=r(3905);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function a(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const i={id:"developer-gorgone-migrate-from-centcore",title:"Migrer depuis Centreon Centcore"},s=void 0,l={unversionedId:"developer/developer-gorgone-migrate-from-centcore",id:"version-23.10/developer/developer-gorgone-migrate-from-centcore",title:"Migrer depuis Centreon Centcore",description:"Cette proc\xe9dure d\xe9crit comment migrer de Centreon Centcore vers Centreon Gorgone.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-gorgone-migrate-from-centcore.md",sourceDirName:"developer",slug:"/developer/developer-gorgone-migrate-from-centcore",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/developer/developer-gorgone-migrate-from-centcore",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/developer/developer-gorgone-migrate-from-centcore.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"developer-gorgone-migrate-from-centcore",title:"Migrer depuis Centreon Centcore"},sidebar:"version-23.10/docs",previous:{title:"Migration d'une plate-forme avec Poller Display",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/migrate/poller-display-to-remote-server"},next:{title:"Connecter Centreon \xe0 vos autres outils",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/integrations/introduction-integrations"}},p={},u=[],g={toc:u},d="wrapper";function m(e){var{components:n}=e,r=a(e,["components"]);return(0,o.kt)(d,c(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(n){t(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cette proc\xe9dure d\xe9crit comment migrer de Centreon Centcore vers Centreon Gorgone."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Gorgone remplace Centcore depuis la version Centreon 20.04.")),(0,o.kt)("p",null,"Vous devez cr\xe9er un fichier de configuration bas\xe9 sur ",(0,o.kt)("strong",{parentName:"p"},"/etc/centreon/conf.pm"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Si vous utilisez des paquets, ex\xe9cutez la commande suivante :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ perl /usr/local/bin/gorgone_config_init.pl\n2019-09-30 11:00:00 - INFO - file '/etc/centreon-gorgone/config.yaml' created success\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Si vous utilisez des sources, ex\xe9cutez la commande suivante :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ perl ./contrib/gorgone_config_init.pl\n2019-09-30 11:00:00 - INFO - file '/etc/centreon-gorgone/config.yaml' created success\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Vous devez adapter les sections en fonction de votre propre base de donn\xe9es initiale, de votre configuration et de votre r\xe9seau.")),(0,o.kt)("p",null,"Le fichier de configuration suivant sera cr\xe9\xe9 : ",(0,o.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'name: config.yaml\ndescription: Configuration init by gorgone_config_init\nconfiguration:\n  centreon:\n    database:\n      db_configuration:\n        dsn: "mysql:host=localhost;port=3306;dbname=centreon"\n        username: "centreon"\n        password: "centreon"\n      db_realtime:\n        dsn: "mysql:host=localhost;port=3306;dbname=centreon_storage"\n        username: "centreon"\n        password: "centreon"\n  gorgone:\n    gorgonecore:\n      privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n      pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n    modules:\n      - name: httpserver\n        package: gorgone::modules::core::httpserver::hooks\n        enable: false\n        address: 0.0.0.0\n        port: 8085\n        ssl: false\n        auth:\n          enabled: false\n        allowed_hosts:\n          enabled: true\n          subnets:\n            - 127.0.0.1/32\n\n      - name: action\n        package: gorgone::modules::core::action::hooks\n        enable: true\n\n      - name: cron\n        package: gorgone::modules::core::cron::hooks\n        enable: false\n        cron: !include cron.d/*.yaml\n\n      - name: proxy\n        package: gorgone::modules::core::proxy::hooks\n        enable: true\n  \n      - name: legacycmd\n        package: gorgone::modules::centreon::legacycmd::hooks\n        enable: true\n        cmd_file: "/var/lib/centreon/centcore.cmd"\n        cache_dir: "/var/cache/centreon/"\n        cache_dir_trap: "/etc/snmp/centreon_traps/"\n        remote_dir: "/var/lib/centreon/remote-data/"\n\n      - name: engine\n        package: "gorgone::modules::centreon::engine::hooks"\n        enable: true\n        command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n      - name: pollers\n        package: gorgone::modules::centreon::pollers::hooks\n        enable: true\n\n      - name: broker\n        package: "gorgone::modules::centreon::broker::hooks"\n        enable: true\n        cache_dir: "/var/cache/centreon//broker-stats/"\n        cron:\n          - id: broker_stats\n            timespec: "*/2 * * * *"\n            action: BROKERSTATS\n            parameters:\n              timeout: 10\n')))}m.isMDXComponent=!0}}]);