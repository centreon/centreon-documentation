"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40758],{14584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"security",title:"Centreon and Security"},l=void 0,u={unversionedId:"security/security",id:"version-23.10/security/security",title:"Centreon and Security",description:"Organizations around the world turn to Centreon to provide business-aware monitoring of their IT",source:"@site/versioned_docs/version-23.10/security/security.md",sourceDirName:"security",slug:"/security/",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/security/",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/security/security.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"security",title:"Centreon and Security"},sidebar:"version-23.10/docs",previous:{title:"Commercial Extensions",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/releases/centreon-commercial-extensions"},next:{title:"Rotating RPM keys",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/security/key-rotation"}},c={},p=[{value:"Product security by design",id:"product-security-by-design",level:2},{value:"Secure development",id:"secure-development",level:3},{value:"Opensource security",id:"opensource-security",level:3},{value:"Security testing",id:"security-testing",level:3},{value:"Vulnerability response",id:"vulnerability-response",level:2},{value:"Vulnerability scoring",id:"vulnerability-scoring",level:3},{value:"Reporting a vulnerability",id:"reporting-a-vulnerability",level:3},{value:"Securing your Centreon installation",id:"securing-your-centreon-installation",level:2},{value:"Secure configuration",id:"secure-configuration",level:3},{value:"Security audit services",id:"security-audit-services",level:3},{value:"Centreon security contact",id:"centreon-security-contact",level:2}],d={toc:p},y="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(y,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Organizations around the world turn to Centreon to provide business-aware monitoring of their IT\nfor always-on operations and performance excellence. Centreon is committed to the security of the\ndata they rely on and is continuously improving policies, processes, and products to meet the highest\nstandards. Read more information throughout this page."),(0,r.kt)("h2",{id:"product-security-by-design"},"Product security by design"),(0,r.kt)("h3",{id:"secure-development"},"Secure development"),(0,r.kt)("p",null,"Security by Design is a primary concern throughout the Centreon development process, which ensures that\nproducts and services are designed from inception to meet data security needs, including access\ncontrols, monitoring and encryption."),(0,r.kt)("p",null,"A continuous integration pipeline is leveraged to automate the process from pull request to\nimage/package delivery. Code changes are reviewed by code quality scans as a first step, and then they must be\nvalidated by two core developers before they are accepted, and static code analysis is run on every\nbuild so potential security issues can be caught as early as possible."),(0,r.kt)("p",null,"Once deployable artifacts are available, all changes are tested by Quality Assurance engineers."),(0,r.kt)("p",null,"Centreon external users (community or enterprise users) are also able to test and use any beta\nversions by pulling the packages from \u201cunstable\u201d public repositories."),(0,r.kt)("h3",{id:"opensource-security"},"Opensource security"),(0,r.kt)("p",null,"Centreon distributes its core platform under GPLv2 and Apache Open Source licenses, which makes it\npossible for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/.github/blob/master/CONTRIBUTING.md"},"contributors")," to extend it.\nAny person who wants to contribute and participate in\ndeveloping the project must respect Centreon\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/.github/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct"),"."),(0,r.kt)("p",null,"Any contribution is posted as a pull request and provided with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/.github/blob/master/PULL_REQUEST_TEMPLATE.md"},"information")," that helps with the\nreview process by Centreon. The review includes code quality, functional tests, documentation and\nsecurity, and determines whether the contribution is accepted or rejected."),(0,r.kt)("h3",{id:"security-testing"},"Security testing"),(0,r.kt)("p",null,"On top of security checks performed through continuous integration such as release testing, manual\npenetration tests are run on a yearly basis to independently identify vulnerabilities and tune best\npractice recommendations for safe implementation."),(0,r.kt)("h2",{id:"vulnerability-response"},"Vulnerability response"),(0,r.kt)("p",null,"Upon receipt of a report for a vulnerability, Centreon will attempt to replicate the reported\nvulnerability and build an action plan with timelines depending on the computed severity."),(0,r.kt)("p",null,"Centreon will provide feedback to the reporter of the vulnerability and work with them to mitigate\nthe vulnerability."),(0,r.kt)("h3",{id:"vulnerability-scoring"},"Vulnerability scoring"),(0,r.kt)("p",null,"Centreon uses version 3.1 of the Common Vulnerability Scoring System (CVSS) as part of its standard\nprocess of evaluating reported potential vulnerabilities."),(0,r.kt)("p",null,"Centreon will compute the environmental score assuming the tested Centreon product is configured\nas defined in the online product documentation and placed behind appropriate in-depth protections."),(0,r.kt)("p",null,"Depending on the CVSS score of the vulnerability, the Centreon security team will determine the urgency\nof fixing the vulnerability:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CVSS score"),(0,r.kt)("th",{parentName:"tr",align:null},"Remediation plan"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9.0 - 10 (Critical)"),(0,r.kt)("td",{parentName:"tr",align:null},"Centreon will begin corrective action immediately, develop a fix or workaround, and provide it to customers in the shortest commercially reasonable time in the form of a patch and/or update release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7.0 - 8.9 (High)"),(0,r.kt)("td",{parentName:"tr",align:null},"Centreon will deliver a fix or workaround with the next planned maintenance as  an update release (typically within 30 days)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.0 - 6.9 (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"Centreon will deliver a fix or workaround with the next planned release (typically  within 6 months)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.1 \u2013 3.9 (Low)"),(0,r.kt)("td",{parentName:"tr",align:null},"Centreon will deliver a fix or workaround with the next two planned releases of  the Centreon product (typically within 12 months)")))),(0,r.kt)("h3",{id:"reporting-a-vulnerability"},"Reporting a vulnerability"),(0,r.kt)("p",null,"If you believe you have found a security vulnerability, please report it to us as described in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon/security/policy#reporting-a-vulnerability"},"reporting process"),"."),(0,r.kt)("p",null,"Please do not report security vulnerabilities through public GitHub issues."),(0,r.kt)("p",null,"Send an email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@centreon.com"},"security@centreon.com"),". If possible, encrypt your message with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon/security/policy#pgp-information"},"provided PGP\nkey"),"."),(0,r.kt)("p",null,"You should receive a response within 48 hours. If for some reason you do not, please follow up via\nemail to ensure we received your original message."),(0,r.kt)("h2",{id:"securing-your-centreon-installation"},"Securing your Centreon installation"),(0,r.kt)("h3",{id:"secure-configuration"},"Secure configuration"),(0,r.kt)("p",null,"The Centreon documentation includes best practices to secure the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/secure-platform"},"monitoring components")," as well as\nthe ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/graph-views/secure-your-map-platform"},"MAP platform"),". Centreon recommends that administrators carefully review those pages when\nplanning an installation and share those guidelines with their internal security teams."),(0,r.kt)("h3",{id:"security-audit-services"},"Security audit services"),(0,r.kt)("p",null,"The Centreon consulting teams provide audit services aimed at optimizing deployments and the\nvalue driven by the software. Those audit services also include security checks and recommendations\nsuch as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base system security (passwords, ACLs, hardened configuration)"),(0,r.kt)("li",{parentName:"ul"},"Database secure configuration"),(0,r.kt)("li",{parentName:"ul"},"Network access configuration"),(0,r.kt)("li",{parentName:"ul"},"Application security (encryption, users, ACLs).")),(0,r.kt)("p",null,"Please make sure to reach out to your Centreon sales representative or consulting partner to initiate\nsuch an audit and plan improvements as early as possible."),(0,r.kt)("h2",{id:"centreon-security-contact"},"Centreon security contact"),(0,r.kt)("p",null,"If you have questions about security, contact our support team if you are a customer or our Security\nTeam at ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@centreon.com"},"security@centreon.com"),"."))}m.isMDXComponent=!0}}]);