"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[47894],{19055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),s=a(51715),i=a(7626);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const p={id:"postfix",title:"Configurer l'envoi d'emails"},m=void 0,u={unversionedId:"administration/postfix",id:"version-23.10/administration/postfix",title:"Configurer l'envoi d'emails",description:"Pour que votre Centreon puisse envoyer des emails de notification, un serveur smtp local doit \xeatre configur\xe9. Si votre syst\xe8me d'exploitation est RHEL ou Oracle Linux, Postfix est d\xe9j\xe0 install\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/postfix.md",sourceDirName:"administration",slug:"/administration/postfix",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/postfix",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/postfix.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"postfix",title:"Configurer l'envoi d'emails"},sidebar:"version-23.10/docs",previous:{title:"Statistiques de la plateforme",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/platform-statistics"},next:{title:"Mise \xe0 jour d'une plateforme Centreon 23.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/update/update-centreon-platform"}},c={},d=[{value:"\xc9tape 1 : Configurer Postfix",id:"\xe9tape-1--configurer-postfix",level:2},{value:"\xc9tape 2 : Configurer les identifiants du compte qui enverra les emails",id:"\xe9tape-2--configurer-les-identifiants-du-compte-qui-enverra-les-emails",level:2},{value:"D\xe9panner l&#39;envoi d&#39;emails avec Postfix",id:"d\xe9panner-lenvoi-demails-avec-postfix",level:2},{value:"Configuration sp\xe9cifique \xe0 Gmail",id:"configuration-sp\xe9cifique-\xe0-gmail",level:2}],f={toc:d},g="wrapper";function k(e){var{components:t}=e,p=o(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},f,p),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pour que votre Centreon puisse envoyer des emails de notification, un serveur smtp local doit \xeatre configur\xe9. Si votre syst\xe8me d'exploitation est RHEL ou Oracle Linux, Postfix est d\xe9j\xe0 install\xe9."),(0,n.kt)("p",null,"Cette page donne un exemple de configuration. Consultez la  ",(0,n.kt)("a",{parentName:"p",href:"http://www.postfix.org/BASIC_CONFIGURATION_README"},"documentation officielle Postfix")," pour plus d'informations."),(0,n.kt)("p",null,"Les commandes de notifications sont ex\xe9cut\xe9es par le collecteur qui supervise la ressource : il est n\xe9cessaire de configurer le relais mail sur tous les collecteurs."),(0,n.kt)("p",null,"Nous vous recommandons d'utiliser un compte mail d\xe9di\xe9 \xe0 l'envoi des notifications."),(0,n.kt)("h2",{id:"\xe9tape-1--configurer-postfix"},"\xc9tape 1 : Configurer Postfix"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dans le terminal de votre serveur, entrez la commande suivante :")),(0,n.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install mailx cyrus-sasl-plain\n"))),(0,n.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install s-nail cyrus-sasl-plain\n"))),(0,n.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt install mailx cyrus-sasl-plain\n")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Red\xe9marrez Postfix : "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart postfix\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configurez Postfix pour qu'il s'ex\xe9cute au d\xe9marrage :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable postfix\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\xc9ditez le fichier suivant :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/postfix/main.cf\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ajoutez les informations suivantes :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"myhostname = hostname\nrelayhost = [smtp.isp.com]:port\nsmtp_use_tls = yes\nsmtp_sasl_auth_enable = yes\nsmtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd\nsmtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt\nsmtp_sasl_security_options = noanonymous\nsmtp_sasl_tls_security_options = noanonymous\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Le param\xe8tre ",(0,n.kt)("strong",{parentName:"li"},"myhostname")," est le hostname du serveur Centreon."),(0,n.kt)("li",{parentName:"ul"},"Le param\xe8tre ",(0,n.kt)("strong",{parentName:"li"},"relayhost")," correspond au serveur de messagerie du compte qui enverra les emails.")),(0,n.kt)("p",{parentName:"li"},"Dans l'exemple suivant, Centreon utilisera un compte Gmail pour envoyer les notifications :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"myhostname = centreon-central\nrelayhost = [smtp.gmail.com]:587\nsmtp_use_tls = yes\nsmtp_sasl_auth_enable = yes\nsmtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd\nsmtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt\nsmtp_sasl_security_options = noanonymous\nsmtp_sasl_tls_security_options = noanonymous\n")))),(0,n.kt)("h2",{id:"\xe9tape-2--configurer-les-identifiants-du-compte-qui-enverra-les-emails"},"\xc9tape 2 : Configurer les identifiants du compte qui enverra les emails"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/postfix/sasl_passwd")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"touch /etc/postfix/sasl_passwd\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ajoutez la ligne suivante, en rempla\xe7ant ",(0,n.kt)("inlineCode",{parentName:"p"},"identifiant:motdepasse")," par les informations de connexion du compte qui enverra les emails de notification :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[smtp.fai.com]:port identifiant:motdepasse\n")),(0,n.kt)("p",{parentName:"li"},"Exemple:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[smtp.gmail.com]:587 username@gmail.com:XXXXXXXX\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enregistrez le fichier.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dans le terminal, entrez la commande suivante : "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"postmap /etc/postfix/sasl_passwd\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pour plus de s\xe9curit\xe9, changez les permissions sur le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"sasl_passwd")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"chown root:postfix /etc/postfix/sasl_passwd*\nchmod 640 /etc/postfix/sasl_passwd*\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rechargez Postfix pour prendre en compte les modifications:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl reload postfix\n")))),(0,n.kt)("h2",{id:"d\xe9panner-lenvoi-demails-avec-postfix"},"D\xe9panner l'envoi d'emails avec Postfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pour envoyer un email de test, utilisez la commande suivante :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "Test" | mail -s "Test" utilisateur@fai.com\n')),(0,n.kt)("p",{parentName:"li"},"  Remplacez ",(0,n.kt)("inlineCode",{parentName:"p"},"utilisateur@fai.com")," par une v\xe9ritable adresse email : le destinataire devrait recevoir l'email de test.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si le destinataire n'a pas re\xe7u l'email, v\xe9rifiez le fichier de log suivant :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"tail -f /var/log/maillog\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pour v\xe9rifier si votre service Postfix tourne, entrez:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status postfix\n")),(0,n.kt)("p",{parentName:"li"},"  Le r\xe9sultat devrait ressembler \xe0 \xe7a :"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"image",src:a(90043).Z,width:"644",height:"323"})))),(0,n.kt)("h2",{id:"configuration-sp\xe9cifique-\xe0-gmail"},"Configuration sp\xe9cifique \xe0 Gmail"),(0,n.kt)("p",null,"Si vous souhaitez envoyer des emails en utilisant un compte Gmail, vous devrez activer l'option ",(0,n.kt)("strong",{parentName:"p"},"Acc\xe8s pour les applications moins s\xe9curis\xe9es")," sur celui-ci : voir la page ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/6010255"},"Autoriser les applications moins s\xe9curis\xe9es \xe0 acc\xe9der \xe0 votre compte"),"."))}k.isMDXComponent=!0},90043:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postfix-status-ae9e2ca7127885e00ec2733602c5b75d.png"}}]);