"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[74590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"ot-otrs-restapi",title:"OTRS RestAPI"},s=void 0,p={unversionedId:"integrations/itsm/ot-otrs-restapi",id:"version-23.10/integrations/itsm/ot-otrs-restapi",title:"OTRS RestAPI",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-otrs.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-otrs-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/integrations/itsm/ot-otrs-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-otrs.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"6 nov. 2023",frontMatter:{id:"ot-otrs-restapi",title:"OTRS RestAPI"},sidebar:"version-23.10/docs",previous:{title:"Mail",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/integrations/itsm/ot-mail"},next:{title:"Request Tracker RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/integrations/itsm/ot-request-tracker-restapi"}},c={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:u},f="wrapper";function d(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The OTRS provider uses the REST API of OTRS to retrieve data in order to open a\nticket."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(82965).Z,width:"780",height:"648"})),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"This connector is at least compatible with the following versions of OTRS:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OTRS 5"),(0,n.kt)("li",{parentName:"ul"},"OTRS 4")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"},"centreon-open-ticket"),"\ninto your Centreon instance"),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Address"),(0,n.kt)("td",{parentName:"tr",align:null},"192.168.0.8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rest link"),(0,n.kt)("td",{parentName:"tr",align:null},"nph-genericinterface.pl/Webservice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path"),(0,n.kt)("td",{parentName:"tr",align:null},"/otrs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Webservice name"),(0,n.kt)("td",{parentName:"tr",align:null},"centreon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"centreon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"MyPassword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"60")))),(0,n.kt)("h2",{id:"possibilities"},"Possibilities"),(0,n.kt)("p",null,"As of now, the provider is able to retrieve the following objects from OTRS:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Queues"),(0,n.kt)("li",{parentName:"ul"},"Priorities"),(0,n.kt)("li",{parentName:"ul"},"States"),(0,n.kt)("li",{parentName:"ul"},"Types"),(0,n.kt)("li",{parentName:"ul"},"Customer users")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Sadly, some extra configuration is required in order to gather this data from\nOTRS."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"copying custom webservice files")),(0,n.kt)("p",null,"copy the content of ",(0,n.kt)("inlineCode",{parentName:"p"},"extra/Custom")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"extra/Kernal")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/otrs/")," on your\nOTRS server."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Edit the configuration file")),(0,n.kt)("p",null,"Add the following lines in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/otrs/Kernel/Config.pm")," file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"# ---------------------------------------------------- #\n# insert your own config settings \"here\"               #\n# config settings taken from Kernel/Config/Defaults.pm #\n# ---------------------------------------------------- #\n# $Self->{SessionUseCookie} = 0;\n# $Self->{CheckMXRecord} = 0;\n$Self->{'GenericInterface::Operation::Module'}->{'Priority::PriorityGet'} =  {\n    'ConfigDialog' => 'AdminGenericInterfaceOperationDefault',\n    'Controller' => 'Priority',\n    'Name' => 'PriorityGet'\n};\n$Self->{'GenericInterface::Operation::Module'}->{'Queue::QueueGet'} =  {\n    'ConfigDialog' => 'AdminGenericInterfaceOperationDefault',\n    'Controller' => 'Queue',\n    'Name' => 'QueueGet'\n};\n$Self->{'GenericInterface::Operation::Module'}->{'State::StateGet'} =  {\n    'ConfigDialog' => 'AdminGenericInterfaceOperationDefault',\n    'Controller' => 'State',\n    'Name' => 'StateGet'\n};\n$Self->{'GenericInterface::Operation::Module'}->{'Type::TypeGet'} =  {\n    'ConfigDialog' => 'AdminGenericInterfaceOperationDefault',\n    'Controller' => 'Type',\n    'Name' => 'TypeGet'\n};\n$Self->{'GenericInterface::Operation::Module'}->{'CustomerUser::CustomerUserGet'} =  {\n    'ConfigDialog' => 'AdminGenericInterfaceOperationDefault',\n    'Controller' => 'CustomerUser',\n    'Name' => 'CustomerUserGet'\n};\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Import the webservice")),(0,n.kt)("p",null,"On your OTRS web interface, use the import web service button and select the\nappropriate yaml file wich is ",(0,n.kt)("inlineCode",{parentName:"p"},"extra/export/otrs4/centreon.yml")," or\n",(0,n.kt)("inlineCode",{parentName:"p"},"extra/export/otrs5/centreon.yml")))}d.isMDXComponent=!0},82965:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ot-otrs-architecture-e0c9a58fa6a44af63fe4b803f345d22b.png"}}]);