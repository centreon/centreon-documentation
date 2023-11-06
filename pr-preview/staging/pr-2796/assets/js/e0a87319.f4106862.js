"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[59221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={id:"notif-dependencies",title:"Dependencies"},l=void 0,c={unversionedId:"alerts-notifications/notif-dependencies",id:"version-23.10/alerts-notifications/notif-dependencies",title:"Dependencies",description:"Principle",source:"@site/versioned_docs/version-23.10/alerts-notifications/notif-dependencies.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-dependencies",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-dependencies",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/notif-dependencies.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"notif-dependencies",title:"Dependencies"},sidebar:"version-23.10/docs",previous:{title:"Configuring notifications",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-configuration"},next:{title:"Escalation",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-escalation"}},p={},d=[{value:"Principle",id:"principle",level:2},{value:"Physical dependencies",id:"physical-dependencies",level:2},{value:"Logical dependencies",id:"logical-dependencies",level:2},{value:"Hosts",id:"hosts",level:3},{value:"Services",id:"services",level:3},{value:"Host groups",id:"host-groups",level:3},{value:"Service groups",id:"service-groups",level:3},{value:"Meta-services",id:"meta-services",level:3},{value:"Examples",id:"examples",level:2},{value:"Services dependencies",id:"services-dependencies",level:3},{value:"Hosts dependencies",id:"hosts-dependencies",level:3},{value:"Service Groups dependencies",id:"service-groups-dependencies",level:3}],h={toc:d},u="wrapper";function m(e){var{components:t}=e,r=s(e,["components"]);return(0,i.kt)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"principle"},"Principle"),(0,i.kt)("p",null,"Dependencies are used to satisfy two main requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduce alert fatigue"),(0,i.kt)("li",{parentName:"ul"},"Target the alerts")),(0,i.kt)("p",null,"There are two types of object dependency:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Physical")," dependencies between objects: a load balancing switch\nis situated upstream of a set of servers and downstream of a router"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logical")," dependencies between objects: the access to a website\nwith LDAP authentication depends on the status of the LDAP directory\nitself")),(0,i.kt)("h2",{id:"physical-dependencies"},"Physical dependencies"),(0,i.kt)("p",null,"Physical dependencies consist of taking into account physical links\nbetween devices. This link can only be defined for ",(0,i.kt)("strong",{parentName:"p"},"Host"),"."),(0,i.kt)("p",null,"The configuration of a physical dependency takes place in the\n",(0,i.kt)("strong",{parentName:"p"},"Relations")," tab of a configuration sheet of a host through the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration > Hosts > Hosts")," menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(94589).Z,width:"1540",height:"316"})),(0,i.kt)("p",null,"It is possible to define two settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parent Hosts"),": signifies that the hosts selected are parents of\nthis host (situated upstream). If all the parent hosts selected\nbecome unavailable or impossible to reach, the host itself will be\nconsidered by the scheduler as impossible to reach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Child Hosts"),": signifies that the host becomes the parent of all\nthe child hosts selected.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is not possible to have dependencies between hosts from different\npollers.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"All the parents of a host must be in a Not-OK status for the host\nitself to be considered impossible to reach. If only one access path\nis down (physical dependencies link), the scheduler will continue to\nmonitor this host.")),(0,i.kt)("h2",{id:"logical-dependencies"},"Logical dependencies"),(0,i.kt)("p",null,"Logical dependencies consist of installing logical links between\nmultiple objects that may or not be of different types. Example: a service\nis in charge of monitoring the access to a web page requiring an\nauthentication based on LDAP. It is logical that if the LDAP server is\ndown, the access to the web page will be difficult or even impossible.\nIn this situation, the only notification issued should concern\nthe LDAP directory, and not the website."),(0,i.kt)("h3",{id:"hosts"},"Hosts"),(0,i.kt)("p",null,"To configure a logical dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration > Notifications > Dependencies > Hosts")," menu and click\n",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(34588).Z,width:"1043",height:"389"})),(0,i.kt)("p",null,"In this case, we have two types of host that come into play: one or more\nhosts (called master hosts) of which the status controls the execution\nand notification of other hosts (called dependent hosts). If you use the\nCentreon Broker, it is also possible to control the execution and\nnotification of services (called dependent services) from master hosts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Description")," fields indicate the name and the\ndescription of the dependencies"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Parent relationship")," field should be ignored if you use the\nCentreon Engine. If it is enabled, and if the dependency links of\nthe master host become unavailable, the dependencies in the process\nof creation are not taken into account."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," field indicates the statuses of\nthe master host(s) preventing the check of the hosts or the\ndependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure Criteria")," field indicates the statuses\nof the master host(s) preventing the sending of notifications to the\nhosts or the dependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Hostnames")," list defines the master host(s)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent Host Names")," list defines the dependent hosts"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent Services")," list defines the dependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to comment on the dependencies")),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,"To configure a logical dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Services")," menu and click\n",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(52641).Z,width:"938",height:"390"})),(0,i.kt)("p",null,"In this case, we have two entities that come into play: the (\u201cmaster\u201d)\nservices, which control the execution, and the notification of other\n(\u201cdependent\u201d) services. If you use Centreon Broker, it is also possible\nto control the execution and the notification of other hosts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Description")," fields indicate the name and\ndescription of the dependencies"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Parent relationship")," field should be ignored if you use the\nCentreon Engine. If it is enabled, and if the links of dependencies\nof the master service become unavailable, the dependencies in the\nprocess of creation are no longer taken into account."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," field indicates the statuses of\nthe master service(s) preventing the check of the hosts or the\ndependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure Criteria")," field indicates the statuses\nof the master service(s) preventing the sending of notifications to\nthe hosts or the dependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Services")," list defines the master service(s)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent services")," list defines the dependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent hosts")," list defines the dependent hosts"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to comment on the dependencies")),(0,i.kt)("h3",{id:"host-groups"},"Host groups"),(0,i.kt)("p",null,"To configure a logical dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Host Groups")," menu and\nclick ",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(12623).Z,width:"991",height:"352"})),(0,i.kt)("p",null,"Two types of host group: a host group is called a master if it controls\nthe execution and the notification of other (\u201cdependent\u201d) host groups."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Description")," fields indicate the name and the\ndescription of the dependencies"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Parent relationship")," field should be ignored if you use the\nCentreon Engine. If it is enabled, and if the links of dependencies\nof the master host group become unavailable, the dependencies in the\nprocess of creation are no longer taken into account."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," field indicates the statuses of\nthe master host group(s) preventing the check of the dependent host\ngroups"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure Criteria")," field indicates the statuses\nof the master host(s) preventing the sending of notifications to the\ndependent host groups"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Host groups name")," list defines the master host group(s)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent host group name")," list defines the dependent host\ngroup(s)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to comment on the dependencies")),(0,i.kt)("h3",{id:"service-groups"},"Service groups"),(0,i.kt)("p",null,"To configure a logical dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Service Groups")," menu and\nclick ",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(52375).Z,width:"970",height:"350"})),(0,i.kt)("p",null,"Two types of service group: a service group is called a \u201cmaster\u201d if it\ncontrols the execution and the notification of other (\u201cdependent\u201d)\nservice groups."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Description")," fields indicate the name and the\ndescription of the dependencies"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Parent relationship")," field should be ignored if you use the\nCentreon Engine. If it is enabled, and if the links of dependencies\nof the master service group become unavailable, the dependencies in\nthe creation process are no longer taken into account."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," field indicates the statuses of\nthe master service group(s) preventing the check of the dependent\nservice groups"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure Criteria")," field indicates the statuses\nof the master host(s) preventing the sending of notifications to the\ndependent service groups"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Service group names")," list defines the group(s) of master\nservices"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent service group names")," list defines the group(s) of\ndependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to comment on the dependencies")),(0,i.kt)("h3",{id:"meta-services"},"Meta-services"),(0,i.kt)("p",null,"To configure a logical dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Meta Services")," menu and\nclick ",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(56876).Z,width:"1002",height:"346"})),(0,i.kt)("p",null,"Two types of meta-service: a meta-service is called a \u201cmaster\u201d if it\ncontrols the execution and the notification of other (\u201cdependent\u201d)\nmeta-services."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Description")," fields indicate the name and\ndescription of the dependencies"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Parent relationship")," field should be ignored if you use the\nCentreon Engine. If it is enabled, and if the links of dependencies\nof the master meta-service become unavailable, the dependencies in\nthe creation process are no longer taken into account."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," field Indicates the\nstatuses of the meta-master service(s) that will prevent the check\nof the meta-dependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure Criteria")," field indicates the statuses\nof the meta-service(s) preventing the sending of notifications to\nmeta-dependent services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Meta-service name")," list defines the master meta-service(s)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Dependent meta-service")," names list defines the dependent\nmeta-service(s)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Comments")," field can be used to comment on the dependencies")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"This sub-chapter illustrates the use of these dependencies via a few\nactual cases."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The dependencies are based on failure criteria in the form of \u201cdo not do if\u201d.\nDo not notify if the service is in a Critical state. Do not perform\nthe check if the service is in a Critical, Alert, Unknown, \u2026 state.")),(0,i.kt)("h3",{id:"services-dependencies"},"Services dependencies"),(0,i.kt)("p",null,"A service is checked using a Selenium scenario. This scenario connects\nto a web interface with an identifier and a password. This connection\ninformation is stored in a MariaDB database."),(0,i.kt)("p",null,"Consequently, if the database server does not reply, the Selenium\nscenario cannot be completed. It seems obvious that it is necessary to\ncreate a logical dependency link between the service that uses the\nSelenium scenario and the service that is responsible for checking the\nstatus of the MariaDB server."),(0,i.kt)("p",null,"Moreover, considering that the Selenium scenario cannot perform\nproperly, no performance data can be stored in the database. So, it is\nnecessary not only to stop the notification for the service using the\nSelenium scenario, but also the check."),(0,i.kt)("p",null,"To create this dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Services")," menu and click\n",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the name and the description of the dependency"),(0,i.kt)("li",{parentName:"ol"},"For the ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," and ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure\nCriteria")," fields, check Warning, Critical, Unknown and Pending"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Services")," list, select the service that is responsible for\nchecking the status of the MariaDB server"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Dependent Services")," list, select the service that uses the\nSelenium scenario"),(0,i.kt)("li",{parentName:"ol"},"Save")),(0,i.kt)("p",null,"From now on, if the service responsible for checking the status of the\nMariaDB server has \u201cWarning\u201d, \u201cCritical\u201d, \u201cUnknown\u201d or \u201cPending\u201d status,\nthe service responsible for executing the Selenium scenario will not be\nexecuted until the master recovers its OK status."),(0,i.kt)("h3",{id:"hosts-dependencies"},"Hosts dependencies"),(0,i.kt)("p",null,"Let us take the case of two hosts that operate as a cluster. Three\nhosts are created to be able to monitor this cluster: a host A, a host B\n(both members of the cluster) and a host C (which centralizes the\ninformation from the cluster)."),(0,i.kt)("p",null,"If host A or host B has a Not-OK status, the services of host C will\nautomatically be considered to be Not-OK. So, it is necessary to add a\ndependency that prevents the sending of notifications if host A or host\nB becomes faulty. However, performance data feedback must always be\noperational; this is why it is necessary to continue the monitoring of\nhost C."),(0,i.kt)("p",null,"To create this dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Hosts")," menu and click\n",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the name and the description of the dependency"),(0,i.kt)("li",{parentName:"ol"},"For the ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure Criteria")," field, check Warning,\nCritical, Unknown and Pending"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Host Names")," list, select host A"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Dependent Host Names")," list, select host C"),(0,i.kt)("li",{parentName:"ol"},"Save.")),(0,i.kt)("p",null,"Repeat this operation for host B."),(0,i.kt)("h3",{id:"service-groups-dependencies"},"Service Groups dependencies"),(0,i.kt)("p",null,"Let us take the example of a set of Oracle services on which the ERP\napplication bases itself. Two service groups are needed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Oracle Application group"),(0,i.kt)("li",{parentName:"ul"},"The ERP Application group")),(0,i.kt)("p",null,"If the Oracle services become critical, the services of the ERP\napplication are automatically critical. It is necessary to create a\ndependency link to prevent the check and notification of the services of\nthe application ERP if the Oracle application is Not-OK."),(0,i.kt)("p",null,"To create this dependency, go into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration> Notifications > Dependencies > Service Groups")," menu and\nclick ",(0,i.kt)("strong",{parentName:"p"},"Add"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the name and the description of the dependency"),(0,i.kt)("li",{parentName:"ol"},"For the ",(0,i.kt)("strong",{parentName:"li"},"Execution Failure Criteria")," and ",(0,i.kt)("strong",{parentName:"li"},"Notification Failure\nCriteria")," fields, check Critical and Pending"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Service Group Names")," list, select the service group Oracle\nApplication"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Dependent Service Group Names")," list, select the service\ngroup ERP Application"),(0,i.kt)("li",{parentName:"ol"},"Save")))}m.isMDXComponent=!0},34588:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03hostdependance-1c196fa749ecd9722eccc5439d20cfa4.png"},12623:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03hostgroupdependance-5acc5851da049f6501cb5bfff6f778d1.png"},56876:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03metaservicedependance-7404d4d17a59d79559877d86cd4e0934.png"},52641:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03servicedependance-a8adc07eb5f978ee0067ad6c127e953c.png"},52375:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03servicegroupdependance-ba7db17a4ea182dccdee71293599064d.png"},94589:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dep_host_config-465594ca3c0d8fe197a25111787eb7af.png"}}]);