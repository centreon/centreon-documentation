"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71156],{88337:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});i(67294);var n=i(3905);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const s={id:"services-templates",title:"Using service templates"},c=void 0,l={unversionedId:"monitoring/basic-objects/services-templates",id:"version-23.10/monitoring/basic-objects/services-templates",title:"Using service templates",description:"Definition",source:"@site/versioned_docs/version-23.10/monitoring/basic-objects/services-templates.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/services-templates",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/services-templates",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/basic-objects/services-templates.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"services-templates",title:"Using service templates"},sidebar:"version-23.10/docs",previous:{title:"Creating services automatically",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/services-create-disco"},next:{title:"Creating Meta Services",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/meta-services"}},p={},m=[{value:"Definition",id:"definition",level:2},{value:"Services Templates",id:"services-templates",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Best practice",id:"best-practice",level:2},{value:"Explanations",id:"explanations",level:3},{value:"Configuration",id:"configuration-1",level:3}],u={toc:m},d="wrapper";function h(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){r(e,t,i[t])}))}return e}({},u,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"A Template is a pre-configuration of settings of an object that could be used to\nconfigure it. The main advantage is to be able to define default values for\ncertain objects to speed up the creation of similar objects."),(0,n.kt)("p",null,"The advantages are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simplified element definition"),(0,n.kt)("li",{parentName:"ul"},"No duplication of data"),(0,n.kt)("li",{parentName:"ul"},"Easy addition of new resources"),(0,n.kt)("li",{parentName:"ul"},"Predefined configurations equivalent to a \u201ccatalog of indicators\u201d"),(0,n.kt)("li",{parentName:"ul"},"Templates can inherit from other templates.")),(0,n.kt)("h2",{id:"services-templates"},"Services Templates"),(0,n.kt)("h3",{id:"inheritance"},"Inheritance"),(0,n.kt)("p",null,"A service or a service template can only inherit from a single service template\n(parent-child type inheritance)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:i(98680).Z,width:"959",height:"375"})),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"To add a Service Template:"),(0,n.kt)("p",null,"Go into the ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Templates")," menu and click ",(0,n.kt)("strong",{parentName:"p"},"Add"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Refer to the chapter covering configuration of\n",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/services"},"services"))," to configure a template, because the\nform is identical.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'By default, locked service templates are hidden. Check the "Locked elements"\nbox to list all templates.')),(0,n.kt)("h2",{id:"best-practice"},"Best practice"),(0,n.kt)("h3",{id:"explanations"},"Explanations"),(0,n.kt)("p",null,"Good practice requires that services templates be associated with a host's\ntemplates: on creation of a host, the services are generated automatically from\nthe host's templates. There are two advantages in linking service templates to\nhost templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The services generated automatically retain their granularity, i.e., it is\npossible to change the Attributes of a service without affecting the other\nservices obtained from this template"),(0,n.kt)("li",{parentName:"ul"},"The creation of new hosts is speeded up greatly: simply define\nthe host and the host's templates associated with it")),(0,n.kt)("p",null,"e.g.: We create the srvi-web-01 host according to the template below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:i(61355).Z,width:"606",height:"633"})),(0,n.kt)("p",null,"The host srvi-web-01 will automatically possess the following services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Load, CPU, Memory, disk-/ from service templates linked to the host\ntemplate \u201cLinux-Server-RedHat-5\u201d"),(0,n.kt)("li",{parentName:"ul"},"Broken-jobs, hit-ratio, tablespaces, listener from service templates linked\nto the host template \u201cDB-MySQL\u201d"),(0,n.kt)("li",{parentName:"ul"},"Process and connection from service templates linked to the host template\n\u201cWeb-Server-Apache\u201d")),(0,n.kt)("p",null,"When the services of a host are generated from host templates, it is possible\nthat certain services generated are not checked by the supervision tool. In this\ncase, it is necessary to disable the services that are not used (but not to\ndelete them). In case of deletion of services, regeneration of services of the\nhost from host templates will re-create the deleted services."),(0,n.kt)("h3",{id:"configuration-1"},"Configuration"),(0,n.kt)("p",null,"The linking of service templates with host templates takes place in the\n",(0,n.kt)("strong",{parentName:"p"},"Relations")," tab of the service templates or host templates."))}h.isMDXComponent=!0},98680:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/09heritageservice-39dd6c63870f3cc1ba8785d6dbf7913c.png"},61355:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/09hostexemple-38c60ef0820184d0201e7fc63bec19ae.png"}}]);