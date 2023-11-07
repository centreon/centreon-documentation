"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42112],{75017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"resources-status",title:"Resources Status page"},l=void 0,c={unversionedId:"alerts-notifications/resources-status",id:"version-23.10/alerts-notifications/resources-status",title:"Resources Status page",description:"The Monitoring > Resources Status page is your main view to track",source:"@site/versioned_docs/version-23.10/alerts-notifications/resources-status.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/resources-status",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/resources-status",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/resources-status.md",tags:[],version:"23.10",lastUpdatedAt:1699374559,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"resources-status",title:"Resources Status page"},sidebar:"version-23.10/docs",previous:{title:"Possible statuses of a resource",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts"},next:{title:"Event consoles",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/event-console"}},p={},h=[{value:"Events list",id:"events-list",level:2},{value:"Compact or extended view",id:"compact-or-extended-view",level:3},{value:"Take actions on events",id:"take-actions-on-events",level:2},{value:"Acknowledge an event",id:"acknowledge-an-event",level:3},{value:"Set a planned downtime",id:"set-a-planned-downtime",level:3},{value:"Refresh a status",id:"refresh-a-status",level:3},{value:"Submit a status",id:"submit-a-status",level:3},{value:"Filtering events",id:"filtering-events",level:2},{value:"Pre-defined filters",id:"pre-defined-filters",level:3},{value:"Search criteria",id:"search-criteria",level:3},{value:"Search bar",id:"search-bar",level:3},{value:"CQL criteria",id:"cql-criteria",level:4},{value:"Using the search bar",id:"using-the-search-bar",level:4},{value:"Save your filter",id:"save-your-filter",level:3},{value:"Detail panel",id:"detail-panel",level:2},{value:"Host panel",id:"host-panel",level:3},{value:"Service panel",id:"service-panel",level:3},{value:"Timeline tab",id:"timeline-tab",level:3},{value:"Graph tab",id:"graph-tab",level:3},{value:"Notification tab",id:"notification-tab",level:3}],u={toc:h},d="wrapper";function m(e){var{components:t}=e,o=s(e,["components"]);return(0,n.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},u,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Resources Status")," page is your main view to track\nresource events & statuses, analyze them, and quickly handle them."),(0,n.kt)("p",null,"This view mixes hosts and services to provide a unified interface and a unified way to manage\nevents."),(0,n.kt)("h2",{id:"events-list"},"Events list"),(0,n.kt)("p",null,"The event list is a condensed and efficient view of all alerts and the status of all resources\nmonitored by Centreon."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(83462).Z,width:"1245",height:"777"})),(0,n.kt)("p",null,"You can add or remove columns and sort by the column of your choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(47142).Z,width:"1552",height:"836"})),(0,n.kt)("h3",{id:"compact-or-extended-view"},"Compact or extended view"),(0,n.kt)("p",null,"You can display the view in the mode that suits you best by changing the visual presentation of lines in tables."),(0,n.kt)("p",null,"Click the dedicated button to improve the readability of the information in the tables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compact view mode ",(0,n.kt)("img",{alt:"image",src:a(4765).Z,width:"26",height:"27"})),(0,n.kt)("li",{parentName:"ul"},"Extended view mode ",(0,n.kt)("img",{alt:"image",src:a(76847).Z,width:"22",height:"26"}))),(0,n.kt)("h2",{id:"take-actions-on-events"},"Take actions on events"),(0,n.kt)("h3",{id:"acknowledge-an-event"},"Acknowledge an event"),(0,n.kt)("p",null,"When one or more alerts are visible, you may need to ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/acknowledge"},"acknowledge")," them to tell\nyour team that the problem is being handled. You can do that in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By directly acknowledging the line: an ",(0,n.kt)("strong",{parentName:"p"},"Acknowledge")," button\nappears on mouseover")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By selecting multiple lines and clicking the ",(0,n.kt)("strong",{parentName:"p"},"Acknowledge"),"\nbutton above the table. You can use the ",(0,n.kt)("strong",{parentName:"p"},"Shift")," key to select several adjacent lines."),(0,n.kt)("p",{parentName:"li"},'Only "non-ok" resources can be acknowledged and you cannot acknowledge a resource that has already been acknowledged.'))),(0,n.kt)("p",null,"When a resource is acknowledged:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The alert is no longer visible in the ",(0,n.kt)("strong",{parentName:"li"},"Unhandled alerts")," filter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/notif-configuration"},"Notifications")," for this resource are stopped"),(0,n.kt)("li",{parentName:"ul"},"The color of the line for acknowledged resources changes\nto yellow.")),(0,n.kt)("p",null,"The acknowledgment can also be canceled, in which case the event will be included again in the list\nof ",(0,n.kt)("strong",{parentName:"p"},"Unhandled alerts")," and its notifications will resume: in the ",(0,n.kt)("strong",{parentName:"p"},"More actions")," menu, select ",(0,n.kt)("strong",{parentName:"p"},"Disacknowledge"),"."),(0,n.kt)("h3",{id:"set-a-planned-downtime"},"Set a planned downtime"),(0,n.kt)("p",null,"When maintenance is planned on one or multiple resources, you can set\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/downtimes"},"planned downtime")," for them in Centreon in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By directly setting planned downtime on the line:\na ",(0,n.kt)("strong",{parentName:"li"},"Set Downtime")," button appears on mouseover"),(0,n.kt)("li",{parentName:"ul"},"By selecting multiple lines and clicking the ",(0,n.kt)("strong",{parentName:"li"},"Set Downtime")," button\nabove the table.")),(0,n.kt)("p",null,"When a resource is in planned downtime, the alert is no longer visible in the\n",(0,n.kt)("strong",{parentName:"p"},"Unhandled alerts")," filter and notifications for this resource are stopped. The\ncolor of lines for resources with planned downtime is changed to light purple."),(0,n.kt)("h3",{id:"refresh-a-status"},"Refresh a status"),(0,n.kt)("p",null,"In many situations, you need to quickly re-check one or multiple resources\nto refresh their status."),(0,n.kt)("p",null,"Two types of check action are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Check")," action: a regular check that you perform only during the configured check period."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Forced check")," action: a check that you can perform at any time (in or out of the configured check period).")),(0,n.kt)("p",null,"Check your resources and refresh their status in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By directly clicking the button on the line when the mouse is over it (",(0,n.kt)("strong",{parentName:"li"},"Forced check")," only)."),(0,n.kt)("li",{parentName:"ul"},"By selecting one or multiple lines and clicking the ",(0,n.kt)("strong",{parentName:"li"},"Check")," or ",(0,n.kt)("strong",{parentName:"li"},"Forced check")," button above the table.")),(0,n.kt)("h3",{id:"submit-a-status"},"Submit a status"),(0,n.kt)("p",null,'In some cases, especially with so-called "passive" services, it can be useful\nto submit a result, i.e. a status, an output and metrics, in order to\nreset the event.\nThis can be achieved using the ',(0,n.kt)("strong",{parentName:"p"},"Submit Status")," action, available when a single passive service is selected."),(0,n.kt)("h2",{id:"filtering-events"},"Filtering events"),(0,n.kt)("p",null,"The various filters are added using an AND criterion: results will match all criteria."),(0,n.kt)("h3",{id:"pre-defined-filters"},"Pre-defined filters"),(0,n.kt)("p",null,"When you open the ",(0,n.kt)("strong",{parentName:"p"},"Resource status")," page, the default filter is ",(0,n.kt)("strong",{parentName:"p"},"Unhandled alerts"),". This filter quickly shows all alerts that are not\nyet handled so you can focus on choosing the most relevant ones to take\ncare of. You can choose two other filters, which are ",(0,n.kt)("strong",{parentName:"p"},"All alerts"),"\nand ",(0,n.kt)("strong",{parentName:"p"},"All"),"."),(0,n.kt)("p",null,"The following rules apply:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unhandled alerts"),": resource status is ",(0,n.kt)("strong",{parentName:"li"},"Warning")," or ",(0,n.kt)("strong",{parentName:"li"},"Critical")," or\n",(0,n.kt)("strong",{parentName:"li"},"Unknown")," or ",(0,n.kt)("strong",{parentName:"li"},"Down")," AND the resource is not acknowledged or in planned\ndowntime"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"All alerts"),": resource status is ",(0,n.kt)("strong",{parentName:"li"},"Warning")," or ",(0,n.kt)("strong",{parentName:"li"},"Critical")," or ",(0,n.kt)("strong",{parentName:"li"},"Unknown"),"\nor ",(0,n.kt)("strong",{parentName:"li"},"Down")," (whether or not the resource has been acknowledged/downtime has been set)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"All"),": All resources.")),(0,n.kt)("h3",{id:"search-criteria"},"Search criteria"),(0,n.kt)("p",null,"You can filter the list of resources according to a number of predefined criteria."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Search options")," icon :",(0,n.kt)("img",{alt:"image",src:a(96872).Z,width:"30",height:"25"})),(0,n.kt)("p",{parentName:"li"},"A pop-in window appears, listing the following criteria:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": display only hosts, services or metaservices. You can also filter on ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/anomaly-detection"},"Anomaly Detection services")," if the module is installed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"State"),": whether the problem is already acknowledged, in a planned downtime or simply unhandled"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts"},(0,n.kt)("strong",{parentName:"a"},"Status")),": ",(0,n.kt)("strong",{parentName:"li"},"OK"),", ",(0,n.kt)("strong",{parentName:"li"},"Up"),", ",(0,n.kt)("strong",{parentName:"li"},"Warning"),", ",(0,n.kt)("strong",{parentName:"li"},"Down"),", ",(0,n.kt)("strong",{parentName:"li"},"Critical"),", ",(0,n.kt)("strong",{parentName:"li"},"Unreachable"),", ",(0,n.kt)("strong",{parentName:"li"},"Unknown"),", ",(0,n.kt)("strong",{parentName:"li"},"Pending")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts#status-types"},(0,n.kt)("strong",{parentName:"a"},"Status type")),": SOFT or HARD"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host group")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service group")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitoring server"),": resources monitored by a specific server (or poller)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/categories"},(0,n.kt)("strong",{parentName:"a"},"Host category"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/categories"},(0,n.kt)("strong",{parentName:"a"},"Service category"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/categories"},(0,n.kt)("strong",{parentName:"a"},"Host severity")),": name of the host severity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host severity level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/categories"},(0,n.kt)("strong",{parentName:"a"},"Service severity")),": name of the service severity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service severity level"))))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click a search criterion: a list of all possible values is displayed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the values you want. The search bar displays the text for the filter you have applied, and a figure to the left of the criterion shows how many values are selected. You can click the 'x' to the right of a criterion to deselect all values.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Search"),", or click outside the pop-up. The list of resources is filtered."))),(0,n.kt)("h3",{id:"search-bar"},"Search bar"),(0,n.kt)("p",null,"If you type text into the search bar, by default the search is performed on the following fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name of the host"),(0,n.kt)("li",{parentName:"ul"},"Alias of the host"),(0,n.kt)("li",{parentName:"ul"},"Address or FQDN of the host"),(0,n.kt)("li",{parentName:"ul"},"Name of the service")),(0,n.kt)("p",null,'For instance, if you type "rta", all resources containing "rta" in one of the above fields will be displayed (e.g., a metaservice called ',(0,n.kt)("strong",{parentName:"p"},"Ping-RTA-Average"),")."),(0,n.kt)("p",null,"However, you can do a much more specific search using the ",(0,n.kt)("a",{parentName:"p",href:"#cql-criteria"},"Centreon Query Language"),". This language allows you to search only\nin one or several fields."),(0,n.kt)("h4",{id:"cql-criteria"},"CQL criteria"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"alias"),": search for hosts according to their alias"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fqdn"),": search for hosts according to their IP address or FQDN"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"host_group"),": search for hosts that belong to a host group"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"host_category"),": search for hosts that belong to a category"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"host_severity"),": search for hosts according to the name of their severity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"host_severity_level"),": search for hosts according to the level of their severity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"h.name"),": search for resources according to the name of the host displayed in the ",(0,n.kt)("strong",{parentName:"li"},"Resource")," column for the hosts, and ",(0,n.kt)("strong",{parentName:"li"},"Parent")," for the services"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"h.alias"),": search for resources according to the alias of a host or the alias of a service's parent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"h.address"),": search for resources according to the FQDN/IP address of the host or of a service's parent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"information"),": search only in the ",(0,n.kt)("strong",{parentName:"li"},"Information")," column"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"monitoring_server"),": search for all the resources that the selected poller is monitoring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name"),": search for hosts only on the name of the host, as displayed in the ",(0,n.kt)("strong",{parentName:"li"},"Resource")," column"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"parent_name"),": search for services according to their parent's name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"parent_alias"),": search for services according to their parent's alias"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"state"),": search for resources in a non-OK or non-UP state, according to whether they are unhandled, acknowledged or in downtime"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"status"),": search for resources according to their ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts"},"status")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"status_type"),": search for resources according to their ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts#status-types"},"status type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"service_category"),": search for services according to the category they belong to"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"service_group"),": search for services that belong to a service group"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"service_severity"),": search for services according to the name of their severity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"service_severity_level"),": search for services according to the level of their severity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"s.description"),": search only in the name of the service (shown in the ",(0,n.kt)("strong",{parentName:"li"},"Resource")," column)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type"),": display only hosts, services or metaservices")),(0,n.kt)("h4",{id:"using-the-search-bar"},"Using the search bar"),(0,n.kt)("p",null,"The search bar shows all applied criteria as text. Autocomplete helps you enter search terms easily: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Start typing the criterion you want. For instance, type "h": the search bar suggests all criteria starting with "h" (',(0,n.kt)("strong",{parentName:"p"},"host_group"),", ",(0,n.kt)("strong",{parentName:"p"},"h.name"),", ",(0,n.kt)("strong",{parentName:"p"},"h.alias"),", ",(0,n.kt)("strong",{parentName:"p"},"h.address"),"). Select the criterion you want using the ",(0,n.kt)("strong",{parentName:"p"},"Up")," and ",(0,n.kt)("strong",{parentName:"p"},"Down")," arrows, then press ",(0,n.kt)("strong",{parentName:"p"},"Tab")," or ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to confirm the selection. A colon is used between a criterion and its possible values (e.g. ",(0,n.kt)("strong",{parentName:"p"},"host:Linux"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"According to the type of criterion, autocomplete can suggest possible values for this criterion (e.g. for the ",(0,n.kt)("strong",{parentName:"p"},"Type")," criterion, the possible values are ",(0,n.kt)("strong",{parentName:"p"},"Host"),", ",(0,n.kt)("strong",{parentName:"p"},"Service")," and ",(0,n.kt)("strong",{parentName:"p"},"Metaservice"),"). Select the value you want using the ",(0,n.kt)("strong",{parentName:"p"},"Up")," and ",(0,n.kt)("strong",{parentName:"p"},"Down")," arrows, then press ",(0,n.kt)("strong",{parentName:"p"},"Tab")," or ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to confirm the selection. It is possible to set several values for a criterion. The values should be separated by commas. The search will retrieve all values using an OR criterion, e.g. ",(0,n.kt)("strong",{parentName:"p"},"type:service,metaservice")," will retrieve all services and metaservices.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use spaces between search criteria. Criteria are added using an AND criterion: results will match all criteria."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can use regular expressions. Wildcards are not supported: a search pattern starting with a * is not valid."),(0,n.kt)("li",{parentName:"ul"},"You cannot perform a pattern-based search inside a field that has a finite number of values (hostgroups, status, etc). For these fields, use the ",(0,n.kt)("a",{parentName:"li",href:"#search-criteria"},(0,n.kt)("strong",{parentName:"a"},"Search options"))," button."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you have entered all your search criteria, type a space character or press ",(0,n.kt)("strong",{parentName:"p"},"Esc")," to exit autocomplete, then press ",(0,n.kt)("strong",{parentName:"p"},"Enter"),"."))),(0,n.kt)("p",null,"Example:\n",(0,n.kt)("strong",{parentName:"p"},"s.description:ping h.name:linux"),': the list displays all services whose name contains "ping", for all hosts whose name contains "linux".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(89225).Z,width:"1342",height:"588"})),(0,n.kt)("h3",{id:"save-your-filter"},"Save your filter"),(0,n.kt)("p",null,'You may create some "complex" filters that set you in a specific\ncontext, using multiple criteria and even complex regular expressions.\nIn that case, you may want to save this filter and re-use it later.'),(0,n.kt)("p",null,"Use the ",(0,n.kt)("strong",{parentName:"p"},"gear icon")," next to ",(0,n.kt)("strong",{parentName:"p"},"Filter")," to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Save your current search as a new filter"),(0,n.kt)("li",{parentName:"ul"},"Save the current filter so that it is updated using the criteria currently\napplied"),(0,n.kt)("li",{parentName:"ul"},"Edit filters so that you can rename, re-order or delete them")),(0,n.kt)("p",null,"As soon as a filter is saved, it can be reused in the Filter dropdown list,\ncategorized under ",(0,n.kt)("strong",{parentName:"p"},"My Filter"),"."),(0,n.kt)("p",null,"By clicking the ",(0,n.kt)("strong",{parentName:"p"},"Edit filters")," menu, you can manage your existing filters (rename, re-order and delete):"),(0,n.kt)("h2",{id:"detail-panel"},"Detail panel"),(0,n.kt)("p",null,"When you click a line, a detail panel opens on the right side to display the main information\nconcerning the resource. This panel can be resized."),(0,n.kt)("p",null,"Depending on the type of resource, the detail panel displays different information."),(0,n.kt)("h3",{id:"host-panel"},"Host panel"),(0,n.kt)("p",null,"The host panel contains the following elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Details")," tab: Detailed information about the host's current status. You can drag and drop tiles to rearrange them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Services")," tab: A listing of its attached services and their current status (as well as their graphs if the corresponding mode is selected)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Timeline")," tab: The timeline of events that occurred for this host"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Graph")," tab: Graphs for the services for this host"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Notification")," tab: Shows whether notifications are enabled for this host, and lists the contacts and contact groups that will be notified."),(0,n.kt)("li",{parentName:"ul"},"Shortcuts to the configuration, logs and report for this host.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(66764).Z,width:"1466",height:"642"})),(0,n.kt)("p",null,"If an acknowledgment or downtime is set on the host, it will be displayed in\nthe panel and the header will be colored accordingly."),(0,n.kt)("h3",{id:"service-panel"},"Service panel"),(0,n.kt)("p",null,"The service panel contains the following elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Details")," tab: Detailed information about its current status. You can drag and drop tiles to rearrange them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Timeline")," tab: The timeline of events that occurred for this service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Graph")," tab: A graph with one curve per metric collected by this service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Notification")," tab: Shows whether notifications are enabled for this service, and lists the contacts and contact groups that will be notified."),(0,n.kt)("li",{parentName:"ul"},"Shortcuts to the configurations, logs and reports for this service and its\nrelated host."),(0,n.kt)("li",{parentName:"ul"},"Below the name of the service, the name of its parent host. Click it to open the host panel for the parent host.  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(71682).Z,width:"1466",height:"642"})),(0,n.kt)("p",null,"If an acknowledgment or downtime is set on the service, it will be displayed in\nthe panel and the header will be colored accordingly."),(0,n.kt)("h3",{id:"timeline-tab"},"Timeline tab"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Timeline")," tab shows an antichronological list of events that occurred for this service or host (status alerts, notifications sent, scheduled downtime, comments). Use the ",(0,n.kt)("strong",{parentName:"p"},"Event")," list to display only the types of event you want."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(12766).Z,width:"534",height:"429"})),(0,n.kt)("p",null,"You can export the full list of events in CSV format."),(0,n.kt)("h3",{id:"graph-tab"},"Graph tab"),(0,n.kt)("p",null,"The graph tab enables you to visually display how the metrics evolve for the selected resource. "),(0,n.kt)("p",null,"Hovering over the metric curves will display the precise time under the graph's title and also display, within the legend, the different values for that same point in time."),(0,n.kt)("p",null,"When the pointer is not hovering over curves, the legend displays Min, Max and Average values for each metric."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(31320).Z,width:"523",height:"413"})),(0,n.kt)("p",null,"Use the legend to display or hide metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click a legend item to display only the corresponding metric."),(0,n.kt)("li",{parentName:"ul"},"To display all metrics again, click the legend of the displayed metric again.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(13821).Z,width:"1390",height:"670"})),(0,n.kt)("p",null,"You can also toggle the selection of individual metrics by Ctrl+Clicking (or Cmd+Clicking for Mac users) on the corresponding tile within the legend:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(65150).Z,width:"1389",height:"669"})),(0,n.kt)("p",null,"Graphs display metric evolution over a given period. This can be defined in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A selection of preconfigured periods is available in the graph header: Last Day, Last 7 Days, Last 31 Days"),(0,n.kt)("li",{parentName:"ul"},"Datetime pickers are available for Start and End points in time. Whenever the displayed period changes, this element is updated accordingly"),(0,n.kt)("li",{parentName:"ul"},"Using the side ","[<]"," and ","[>]"," buttons that appear upon hovering the graph's border, you can translate in time by half your current timespan (backward and forward in time, respectively)"),(0,n.kt)("li",{parentName:"ul"},"Selecting a period of time within the graph will zoom in on this period")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(30787).Z,width:"1389",height:"715"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Display events")," toggle (available under the ",(0,n.kt)("strong",{parentName:"p"},"gear")," button) allows you to display some timeline events (downtime, acknowledgment, comment) directly on the graph, via annotations:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(61600).Z,width:"1391",height:"669"})),(0,n.kt)("p",null,"It is possible to add a comment directly on the graph by left-clicking anywhere at the time you want to add it, and then selecting ",(0,n.kt)("strong",{parentName:"p"},"Add a comment")," on the tooltip that appears:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(8137).Z,width:"1390",height:"670"})),(0,n.kt)("p",null,"To delete a comment, go to ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Downtimes > Comments"),"."),(0,n.kt)("p",null,"By clicking the ",(0,n.kt)("strong",{parentName:"p"},"Export")," button, you can export a snapshot of the graph, which also includes the timeline events, if the switch is toggled. Note that only the selected metrics will be exported:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(44456).Z,width:"1381",height:"717"})),(0,n.kt)("p",null,"To see a bigger version of the graph, click ",(0,n.kt)("strong",{parentName:"p"},"Go to performance page")," in the top right corner of the graph."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(93431).Z,width:"503",height:"262"})),(0,n.kt)("p",null,"The graph opens on the ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Performances > Graphs")," page, allowing you to filter the graph more precisely."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(23782).Z,width:"1860",height:"562"})),(0,n.kt)("p",null,"You can also export the data for the graph as a CSV file. This will include all metrics."),(0,n.kt)("h3",{id:"notification-tab"},"Notification tab"),(0,n.kt)("p",null,"The Notification tab shows whether notifications are enabled for the selected resource. You can see the recipients of these notifications in the ",(0,n.kt)("strong",{parentName:"p"},"Contacts")," and ",(0,n.kt)("strong",{parentName:"p"},"Contact groups")," sections."),(0,n.kt)("p",null,"To configure the recipients, click the ",(0,n.kt)("strong",{parentName:"p"},"gear icon")," in the ",(0,n.kt)("strong",{parentName:"p"},"Contacts")," or ",(0,n.kt)("strong",{parentName:"p"},"Contact groups")," section."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(31420).Z,width:"706",height:"396"})))}m.isMDXComponent=!0},4765:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAD7SURBVEhLY/wPBAx0AExQmuZg8FpUt+g0w/QtV6E84gFJFoEs2Xj8AcOMrddItozoxACy5PSt1wx+FvIMz999g7MzfbShKvADonwEs2R7ixeYLynExTC30J5h04mHRPuMKItABsMsgQEpYW6wZSCaGECURbiCB2SJv6UClIcfkJzqyAV0s2j4FUEoPnry5AmURR0gIyMDZQ3HoCPZIlBJQPNClRIwuCwCBdWzt1+hPAQAiYGqDWIA0T5K7j+IYhmIDSrViQVEJ2+Qr0DVgqmaKJgPssjXQoHoQpWkfASyDFS7gkBTnCnRloAAyRkWZBkp1QMMjJYMZAIGBgBQW3pFtvAPTQAAAABJRU5ErkJggg=="},76847:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAD3SURBVEhLY/wPBAw0AExQmuqAaIOnb7kKxsSCgXcxqQCvwSCvP3v7FcpDAJDYxuMPoDzsgKCLk/sPohgOYtctOg3l4QYEkxvI1ZtOPGQwVRMF80EG+1ooMPhbKoD5uABR6Rhk+Iyt18DspjhTgoaCANEZBGS4lDA3UYaCwNDLeWAXP3nyBMqlDpCRkRmCQUG0waBMQfVCCGQoKAuD0jKxhhMMY5Chp2+9ZvCzkGd4/u4bnJ3pow1VgR3gdTHM0O0tXmC+pBAXw9xCe3AWJ+RyvAaDDIIZCgOg3AcyHETjA3gNxuVdYrI20amCVEAzg4dxziMNMDAAAAXpekNlk0QKAAAAAElFTkSuQmCC"},93431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graph-open-953da4e28d54a715700615f78df7a2c4.png"},23782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graph-open2-e1f500ca723899b67117369993e755a2.png"},31420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/notification_tab-3c878f22d4626b000beacb69f69765a6.png"},8137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-graph-add-comment-5806175a8ac11ddca48d30dabb658f94.gif"},61600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-graph-display-events-91fbe5cdaafb132b4859344474f27b2a.gif"},44456:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-graph-export-to-png-8861316e6ed29d6a6199cfb9b06895d8.gif"},13821:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-graph-select-only-metric-4567e5483993b7ee3c6751b6271dfc05.gif"},30787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-graph-time-selection-b5163f7663b9b4bd0071a6b3fafe328b.gif"},65150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-graph-toggle-legends-6019dd1d93644ecb1430f4bf62b9d4cb.gif"},47142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-listing-order-a6efb8add575e4ad6b704e96972f3866.gif"},83462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-listing-89d1ef352236644f5bb6835ffe7eadcf.png"},66764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-panel-host-96612db04cf4fd4963e201af06e67af6.gif"},71682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-panel-service-355585ca51993fffeda6aa9f253aed4c.gif"},31320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resources-status-values-474653d2c9ac3aec72dfc54ae520fed7.png"},96872:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAQGSURBVEhLrVZraBRXFP5mdnd2N9FsEqJtmqZb1A3a1EVpU40xiZaAP3zQ+kPTiAiRYsDSpv7rg0J/tD8ECxZ/iJAiImpp8UEfImiNgkSbgi/EkKQlTaJpXKlJNpvd2dmZ6Tl3Z4MT95Wabxlm59wz97vn3O+cO5JJwBxhODSJ8ak4CtxOvPrifEj0ywTZus8J9h3pQm37abQe6MRYJG5Z02NOiUG587pdcCsyPE6HZUwPW6qPX+rDb7eH4XFlfymFmKZjxaIyfPjOcvH83tcX0XV/FAtKPKhZsgCSQ4JpmDAMwKBV7WyqQn11ufC1Ebd9ewUnO/tpj1yWJTsiMQ2b3vLjxCdN4rmZiLt7R+FRnBinVOtEyjCIWTIlHNxbh+2NS4TNRnzwzG1cvjOCAsXBWcsKlk2UIq6pegGfNq8UNo74es8oSooUVFUUwyFJMGh6jlii/x9sqcba19NEPBFRoSYMyOSUD/hVp8OB4nmKeOaIr959iOCiUhz5qBG+QjcSOrFa8BUq5J+U1ZyW08bPf8XFm0N4I7AQ57/aKIgyISfxrf4QTl35U/zfUuvHmteSqUqHX7oHEI5oKJnnRtPKSjhIXBnBxNnw040B07e1wyx6t8M8canXsj4/bBEPP56kFcchWyv1kjqv3fsHXx7/Awly29+6ClvXLqYRE/cHxyDRduWnBlY2UF5aQHpwi2cb8WdHf8fPNwbgdTmFqnkBhm5S2SSoZhNJ4vrFiMY11LWfFULJR4iGyVUMfLGjBptX+4XN1rmehGMYpH47RJFz9IOPwgiNRakULIcUaJakT0Tcc14h9otgSk1YE8yI+Hz3IHqGnsDlTK5Hobb318gEznUNQKOySEUcnlLx3YUeyoicV6q5j7DnhjdfRoDqW4CJs+HyrQdm5Y5jZkXLMfP7zj5h03Vd3J8HOQ+JOO1tmc+LhcVeFHqcwibLstiWsckYwtHsp1Am5KxjJo7GddHyigqSDYF77+r2MzSm4+0VFfhmT52wzwY5I1ZI4dz6UqSMmGbgEYnu8YSKySnNss4Otoiv3h3Bvb//nRbXNMhFS5hoCJaj2l8KNZ5AsO1HHsDSV4rRsj5AgqOUZygtpjBIYQ3Bl7CsskTYbMQfH75G7fHZY5EdVFXDgT1r0LwuME2suGQ6+gzE6WDJtmHsw5Psf78W2xq4Ac1INb/rohLhiMX96Ys+DtwzMsFrlmQJbhp7xj91WXMpdNQqT31g2CIOjUcRU3WqT8uQAnmwF7c8B03CES9v+0Ec9Oso/Yf21guV01mfFvwud7gyn0f0BkZOVadDlNIeaD1FKdaxeZUfHfvWWyP5I6eq04FLaxd9P+3esBSNwQrLOjv8r4gZrNKUiHkhswPwH0qlote09VSQAAAAAElFTkSuQmCC"},89225:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search_ping_linux-19482d99bdfad1cb57c1f60f27822e4c.gif"},12766:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timeline-c84c4b44eabf0500e243058c39232e06.png"}}]);