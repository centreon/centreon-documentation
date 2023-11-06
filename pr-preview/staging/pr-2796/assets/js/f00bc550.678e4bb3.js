"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9059],{25362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),o=n(51715),i=n(7626);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"anomaly-detection",title:"Anomaly detection"},p=void 0,d={unversionedId:"monitoring/anomaly-detection",id:"version-23.10/monitoring/anomaly-detection",title:"Anomaly detection",description:"Centreon Anomaly Detection is a Centreon extension that requires a valid license. To purchase one and obtain the necessary repositories and access token, contact Centreon.",source:"@site/versioned_docs/version-23.10/monitoring/anomaly-detection.md",sourceDirName:"monitoring",slug:"/monitoring/anomaly-detection",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/anomaly-detection",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/anomaly-detection.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"anomaly-detection",title:"Anomaly detection"},sidebar:"version-23.10/docs",previous:{title:"Generic actions",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/generic-actions"},next:{title:"Enable SNMP Traps",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/passive-monitoring/enable-snmp-traps"}},h={},m=[{value:"Description",id:"description",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Step 1: Installing packages",id:"step-1-installing-packages",level:3},{value:"Step 2: UI installation",id:"step-2-ui-installation",level:3},{value:"Step 3: Add your token",id:"step-3-add-your-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Step 1: Create an Anomaly Detection service",id:"step-1-create-an-anomaly-detection-service",level:3},{value:"Step 2: Assess the relevance of the predictions",id:"step-2-assess-the-relevance-of-the-predictions",level:2},{value:"Step 3: Activate status changes",id:"step-3-activate-status-changes",level:3},{value:"Activate the notification process",id:"activate-the-notification-process",level:3},{value:"Use the creation wizard",id:"use-the-creation-wizard",level:3},{value:"View the anomalies detected",id:"view-the-anomalies-detected",level:2},{value:"Forward history of data",id:"forward-history-of-data",level:2},{value:"FAQ",id:"faq",level:2},{value:"What services are offered and what is their associated SLA?",id:"what-services-are-offered-and-what-is-their-associated-sla",level:3},{value:"How long is the data stored?",id:"how-long-is-the-data-stored",level:3},{value:"What data is hosted by the service?",id:"what-data-is-hosted-by-the-service",level:3},{value:"How is the sending and storage of my data protected?",id:"how-is-the-sending-and-storage-of-my-data-protected",level:3},{value:"What is the data used for?",id:"what-is-the-data-used-for",level:3},{value:"Who has access to the data hosted by the service?",id:"who-has-access-to-the-data-hosted-by-the-service",level:3},{value:"How can I request the deletion of data?",id:"how-can-i-request-the-deletion-of-data",level:3}],u={toc:m},g="wrapper";function k(e){var{components:t}=e,c=l(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,c),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Centreon Anomaly Detection is a Centreon extension that requires a valid ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/administration/licenses"},"license"),". To purchase one and obtain the necessary repositories and access token, contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Centreon Anomaly Detection")," module detects deviations from the regular behavior of a\nservice. It uses dynamic thresholds to trigger alerts."),(0,a.kt)("p",null,'With "classic" monitoring, alerts are triggered from static thresholds. For instance, users are alerted when the ping\non a server exceeds 700 ms. However, for some services, "normal" values change over time, which means that static thresholds are\nnot that relevant. You can use Anomaly Detection when the behavior of a service is repetitive and predictable:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(81376).Z,width:"2716",height:"478"})),(0,a.kt)("p",null,"Anomaly Detection determines how the normal values evolve over time; predictions calculate a lower threshold and an upper threshold.\nWhen the behavior of the service deviates from the expected model, these thresholds are passed (i.e. the metric goes below the lower threshold or goes over the upper threshold). The service goes into a CRITICAL state and a notification is sent. Example: a server usually has little traffic at night. One night, Centreon detects network flows that are higher than normal and triggers an alert. This makes the company aware that the server has been hacked."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Collected data is sent to the Centreon SaaS platform.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Centreon computes a regular behavior model using the history of this data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the model has been calculated, predictions are then generated and retrieved\nby your Centreon platform.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The predictions act as floating thresholds, which will then be used by\nthe monitoring engine to compare the collected value with the predicted\nthresholds to highlight deviations and generate alerts. Data received during downtimes is not taken into account when computing predictions, to avoid distorting the analysis.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Models are recomputed regularly and improve over time."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use Anomaly Detection, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A token provided by Centreon to access the Centreon SaaS platform,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An internet connection from the Centreon central server. The central server must be able to reach ",(0,a.kt)("inlineCode",{parentName:"p"},"api.a.prod.mycentreon.com")," on port 443.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The SHELL environment variable ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/gettext/manual/html_node/Locale-Environment-Variables"},"LC_ALL")," must not be set, or be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),". To check the value of this variable, enter:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"echo $LC_ALL\n")))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"step-1-installing-packages"},"Step 1: Installing packages"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-anomaly-detection\n"))),(0,a.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-anomaly-detection\n"))),(0,a.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt install centreon-anomaly-detection\n")))),(0,a.kt)("h3",{id:"step-2-ui-installation"},"Step 2: UI installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager"),". An ",(0,a.kt)("strong",{parentName:"p"},"Anomaly Detection")," tile appears in the ",(0,a.kt)("strong",{parentName:"p"},"Modules")," section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the installation button in the ",(0,a.kt)("strong",{parentName:"p"},"Anomaly Detection")," tile. The module is now installed (the version number appears on a green background with a white check mark next to it).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command as a privileged user:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n")))),(0,a.kt)("h3",{id:"step-3-add-your-token"},"Step 3: Add your token"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Anomaly Detection")," and click\n",(0,a.kt)("strong",{parentName:"p"},"Add Centreon Cloud Token"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter your token and click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If your Centreon central server needs a proxy configuration to access the\nInternet, check the ",(0,a.kt)("strong",{parentName:"p"},"Use proxy")," box.")),(0,a.kt)("p",null,"Your Centreon platform is now ready to use Centreon Anomaly Detection."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To have a fully functional Anomaly Detection service, you need to complete four steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#step-1-create-an-anomaly-detection-service"},"Create an Anomaly Detection service"),". This will activate the sending of the collected data to the Centreon SaaS platform, in order to start modeling regular behavior."),(0,a.kt)("li",{parentName:"ol"},"Assess the relevance of the computed predictions."),(0,a.kt)("li",{parentName:"ol"},"Once the model seems right, ",(0,a.kt)("a",{parentName:"li",href:"#activate-the-generation-of-alerts"},"activate status changes for the service"),"."),(0,a.kt)("li",{parentName:"ol"},"When all changes in status seem relevant, ",(0,a.kt)("a",{parentName:"li",href:"#activate-the-notification-process"},"activate the notification process"),".")),(0,a.kt)("h3",{id:"step-1-create-an-anomaly-detection-service"},"Step 1: Create an Anomaly Detection service"),(0,a.kt)("p",null,"You can create an Anomaly Detection service manually, or ",(0,a.kt)("a",{parentName:"p",href:"#use-the-creation-wizard"},"use the creation wizard"),". To create an Anomaly Detection service manually:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Anomaly Detection")," and click\n",(0,a.kt)("strong",{parentName:"p"},"Create manually"),":")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the following fields:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": the name of the service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status"),": enable or disable the service. If you disable the service, after you deploy the configuration, the service will no longer be monitored (for instance, it will no longer appear on the ",(0,a.kt)("strong",{parentName:"li"},"Resources Status")," page )."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Select host - service"),": choose the host/service pair on which the Anomaly Detection service will be based."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Select metric"),": select the metric on which to apply anomaly detection."),(0,a.kt)("li",{parentName:"ul"},"For the time being, leave the ",(0,a.kt)("strong",{parentName:"li"},"Enable change of status")," and ",(0,a.kt)("strong",{parentName:"li"},"Enable notifications")," fields set to ",(0,a.kt)("strong",{parentName:"li"},"Disabled")," (they will be enabled in Steps 3 and 4)."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Categories and groups")," section, you can set a ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/categories#severities"},"severity level"),".")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The service appears on the ",(0,a.kt)("strong",{parentName:"p"},"Monitoring > Resources Status")," page. To display only Anomaly Detection services, use the ",(0,a.kt)("strong",{parentName:"p"},"Type")," filter in the ",(0,a.kt)("strong",{parentName:"p"},"Filter options")," window.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The behavior model calculation starts. However, until calculations have been made and predictions sent to your platform, the status of the service is UNKNOWN. For predictions to be computed, you need to have at least 4 hours' worth of data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The first predictions will appear in up to 36 hours. The service will then be in OK status, until status changes are enabled (Step 3)."))),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If the data to which you apply the anomaly detection has been supervised for a\ncertain time, you can ",(0,a.kt)("a",{parentName:"p",href:"#forward-history-of-data"},"transfer the data\nhistory")," to obtain a reliable model more quickly.")))),(0,a.kt)("h2",{id:"step-2-assess-the-relevance-of-the-predictions"},"Step 2: Assess the relevance of the predictions"),(0,a.kt)("p",null,"At first, the predictions you receive will not be very relevant: Anomaly Detection needs to identify several repetitions of data patterns before it can compute a correct model. This means that the length of time needed to compute the model varies according to how often your data repeats (daily, weekly, etc.). In general, you will need to wait for about 6 weeks to obtain a stable model."),(0,a.kt)("p",null,"To assess the relevance of the predictions, look at the service's graph on the  ",(0,a.kt)("strong",{parentName:"p"},"Monitoring > Performances > Graphs")," page, or on the ",(0,a.kt)("strong",{parentName:"p"},"Graphs")," tab of the details panel, find the service on the ",(0,a.kt)("strong",{parentName:"p"},"Monitoring > Resources Status")," page."),(0,a.kt)("p",null,"You can manually adjust the distance between the curve and the thresholds, if you think this is necessary (e.g if you see too many false positives, or on the contrary if the predictions do not detect enough incidents)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Resources Status")," page, click the Anomaly Detection service you want, and then click the ",(0,a.kt)("strong",{parentName:"li"},"Graph")," tab in the details panel."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Edit anomaly detection data")," icon (wrench) at the top right of the tab. The graph opens in a pop-up window."),(0,a.kt)("li",{parentName:"ol"},"Use the slider in the ",(0,a.kt)("strong",{parentName:"li"},"Manage envelope size")," section to change the range of the predictions. In the preview, checks outside the envelope are shown by red dots."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),". The new envelope size is applied from that moment on. The envelope that was already calculated stays the same (this means that the changes are not visible immediately on the graph).")),(0,a.kt)("h3",{id:"step-3-activate-status-changes"},"Step 3: Activate status changes"),(0,a.kt)("p",null,"If, by regularly checking the generated model and the data from the\n",(0,a.kt)("strong",{parentName:"p"},"Monitoring > Performances > Graphs")," menu, you think that your model is\nstable, you can activate status changes. Once you enable this option, the status of the service will switch to CRITICAL ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts#status-types"},"SOFT")," as soon as the metric goes below the lower threshold or above the upper threshold."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Anomaly Detection")," menu and click the Anomaly Detection service you want.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Alerting options")," section, enable the ",(0,a.kt)("strong",{parentName:"p"},"Enable change of status")," option.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Detect anomalies after")," field, enter the number of deviations before the service switches to a CRITICAL ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/concepts#status-types"},"HARD")," state. (When enabled, notifications are only sent when the service switches from SOFT to HARD.)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),"."))),(0,a.kt)("h3",{id:"activate-the-notification-process"},"Activate the notification process"),(0,a.kt)("p",null,"When you are satisfied that the status changes you see are relevant (they do happen when an incident starts or finishes), then your Anomaly Detection service is fully operational. You can then activate the notifications."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Anomaly Detection")," and click the Anomaly Detection service you want.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the following fields:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable notification"),": select ",(0,a.kt)("strong",{parentName:"li"},"Enabled"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Implied Contacts"),": select who will receive notifications for this service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Implied Contact Groups"),": select the contact groups that will receive notifications for this service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notification Interval"),": define how frequently notifications should be sent once the service has entered a CRITICAL HARD state and has not been acknowledged yet. The default value is ",(0,a.kt)("strong",{parentName:"li"},"0"),", which means only one notification will be sent per status change."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notification Period"),": select the ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/timeperiods"},"time period")," during which these users may receive notifications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notification Type"),": select the types of notifications you want to receive (when the service enters a CRITICAL state and/or when it goes back to normal).")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),"."))),(0,a.kt)("h3",{id:"use-the-creation-wizard"},"Use the creation wizard"),(0,a.kt)("p",null,"The creation wizard lets you highlight the services that follow patterns or have a regular stability (for which values are consistently included between two thresholds)."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Anomaly Detection")," and click\n",(0,a.kt)("strong",{parentName:"p"},"Create from analysis"),"."),(0,a.kt)("p",null,"The list of existing services on your Centreon platform is displayed, as well as a\nscore in number of stars: from 5 stars to 0, 5 stars representing high potential\nservices:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(39118).Z,width:"2876",height:"1238"})),(0,a.kt)("p",null,"After selecting a service of interest, click the ",(0,a.kt)("strong",{parentName:"p"},"ADD")," button to the left\nof the row. You arrive on the pre-filled creation form:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(54723).Z,width:"1860",height:"758"})),(0,a.kt)("p",null,"Modify the name of the service and then click the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the list is empty, it means that the calculation to determine which services\nare of interest has not yet started."),(0,a.kt)("p",{parentName:"blockquote"},"This is done every six hours via a cron launched by the ",(0,a.kt)("strong",{parentName:"p"},"gorgoned")," process\n(defined in the ",(0,a.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/cron.d/42-anomalydetection.yaml")," file)."),(0,a.kt)("p",{parentName:"blockquote"},"You can launch the first calculation manually via the following\ncommand from the central Centreon server:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"su - centreon\nperl /usr/share/centreon/bin/anomaly_detection --seasonality\n"))),(0,a.kt)("h2",{id:"view-the-anomalies-detected"},"View the anomalies detected"),(0,a.kt)("p",null,"Once you have created an Anomaly Detection service, you can see it in the following places:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Resources Status")," menu."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Status Details > Services")," menu."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Performances > Graphs")," menu."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Event Logs > Event Logs")," menu."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"service-monitoring")," widget in the ",(0,a.kt)("strong",{parentName:"li"},"Home > Custom Views")," menu."),(0,a.kt)("li",{parentName:"ul"},"You can use an Anomaly Detection service as an indicator in ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/service-mapping/ba-management"},"Centreon BAM"),"."),(0,a.kt)("li",{parentName:"ul"},"And all menus where you can operate on services.")),(0,a.kt)("h2",{id:"forward-history-of-data"},"Forward history of data"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sending data history is a very CPU-intensive process. Depending on the number\nof services monitored, the extraction of data from the ",(0,a.kt)("strong",{parentName:"p"},"centreon","_","storage"),"\ndatabase can take several tens of minutes. This will strongly impact the\nperformance of the database and may slow down the monitoring platform as a whole.")),(0,a.kt)("p",null,"To be able to send data from an Anomaly Detection service, a first check must have been made. You can ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/resources-status#refresh-a-status"},"run a check on the service from the Resources Status page"),"."),(0,a.kt)("p",null,"To send the data history of an anomaly service to our SaaS platform, connect to your Centreon\nCentral server and access the ",(0,a.kt)("strong",{parentName:"p"},"centreon")," user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"su - centreon\n")),(0,a.kt)("p",null,"Select the anomaly service using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/centreon/bin/anomaly_detection --list-services\n")),(0,a.kt)("p",null,"You will see the list of services with their ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"List of available anomaly detection services:\n\n- id: 14, hostname: fw-beijing, servicename: anomaly-nbr-connect, metric name: connection\n- id: 15, hostname: fw-brasilia, servicename: anomaly-nbr-connect, metric name: connection\n- id: 17, hostname: fw-mexico, servicename: anomaly-nbr-connect, metric name: connection\n- id: 18, hostname: fw-berlin, servicename: anomaly-nbr-connect, metric name: connection\n- id: 22, hostname: fw-brasilia, servicename: anomaly-traffic-in, metric name: traffic_in\n")),(0,a.kt)("p",null,"To send the data history of the anomaly service with ID 14 for the last 4 weeks,\nexecute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/centreon/bin/anomaly_detection --send-history 14 --history-period 4w\n")),(0,a.kt)("p",null,"Wait until the end of the process:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Sending data from 2020-03-09T09:32:31 to 2020-03-10T00:00:00\nSending data from 2020-03-10T00:00:00 to 2020-03-11T00:00:00\nSending data from 2020-03-11T00:00:00 to 2020-03-12T00:00:00\nSending data from 2020-03-12T00:00:00 to 2020-03-13T00:00:00\nSending data from 2020-03-13T00:00:00 to 2020-03-14T00:00:00\nSending data from 2020-03-14T00:00:00 to 2020-03-15T00:00:00\nSending data from 2020-03-15T00:00:00 to 2020-03-16T00:00:00\nSending data from 2020-03-16T00:00:00 to 2020-03-17T00:00:00\nSending data from 2020-03-17T00:00:00 to 2020-03-18T00:00:00\nSending data from 2020-03-18T00:00:00 to 2020-03-19T00:00:00\nSending data from 2020-03-19T00:00:00 to 2020-03-20T00:00:00\nSending data from 2020-03-20T00:00:00 to 2020-03-21T00:00:00\nSending data from 2020-03-21T00:00:00 to 2020-03-22T00:00:00\nSending data from 2020-03-22T00:00:00 to 2020-03-23T00:00:00\nSending data from 2020-03-23T00:00:00 to 2020-03-24T00:00:00\nSending data from 2020-03-24T00:00:00 to 2020-03-25T00:00:00\nSending data from 2020-03-25T00:00:00 to 2020-03-26T00:00:00\nSending data from 2020-03-26T00:00:00 to 2020-03-27T00:00:00\nSending data from 2020-03-27T00:00:00 to 2020-03-28T00:00:00\nSending data from 2020-03-28T00:00:00 to 2020-03-29T00:00:00\nSending data from 2020-03-29T00:00:00 to 2020-03-30T00:00:00\nSending data from 2020-03-30T00:00:00 to 2020-03-31T00:00:00\nSending data from 2020-03-31T00:00:00 to 2020-04-01T00:00:00\nSending data from 2020-04-01T00:00:00 to 2020-04-02T00:00:00\nSending data from 2020-04-02T00:00:00 to 2020-04-03T00:00:00\nSending data from 2020-04-03T00:00:00 to 2020-04-04T00:00:00\nSending data from 2020-04-04T00:00:00 to 2020-04-05T00:00:00\nSending data from 2020-04-05T00:00:00 to 2020-04-06T00:00:00\n")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"what-services-are-offered-and-what-is-their-associated-sla"},"What services are offered and what is their associated SLA?"),(0,a.kt)("p",null,"The anomaly detection service is currently in closed beta test phase as described in the Centreon documentation. The\npurpose of this phase is to test our algorithms and their resulting predictions (floating thresholds).\nDuring this phase, Centreon will improve the anomaly detection feature based on user feedback. No SLA will be available\nduring this phase."),(0,a.kt)("h3",{id:"how-long-is-the-data-stored"},"How long is the data stored?"),(0,a.kt)("p",null,"The data is kept for the entire validity of the license. This will allow the recalculation of models if necessary. An\nadditional period of 3 months will be added at the end of the validity of the license before deletion."),(0,a.kt)("h3",{id:"what-data-is-hosted-by-the-service"},"What data is hosted by the service?"),(0,a.kt)("p",null,"The data hosted by the anomaly detection service only concerns data linked to the services created by the user. It\nincludes the date and time of the check, the identifier of the monitored resource, the identifier of the associated\nindicator, the name of the performance data on which the computations will be performed, and the value of the\nperformance data."),(0,a.kt)("h3",{id:"how-is-the-sending-and-storage-of-my-data-protected"},"How is the sending and storage of my data protected?"),(0,a.kt)("p",null,"Sending data to our Cloud infrastructure is risk-free. Data is sent using end-to-end encryption.\nCollected data consists only in metrics and some Centreon identifiers (host name, service name). Our environment is protected by AWS Web\nApplication Firewall and AWS Shields to prevent DDoS attacks. Our architecture has been reviewed by AWS architects\n(AWS Foundational Technical Review) and we are an AWS Qualified Partner."),(0,a.kt)("h3",{id:"what-is-the-data-used-for"},"What is the data used for?"),(0,a.kt)("p",null,"The data is used to compute behavior models. These models will generate predictions used as floating\nthresholds by the Centreon platform."),(0,a.kt)("h3",{id:"who-has-access-to-the-data-hosted-by-the-service"},"Who has access to the data hosted by the service?"),(0,a.kt)("p",null,"The data is associated with the access token of the anomaly detection offer. It is hosted on the Centreon SaaS\nPlatform and partitioned by platform. Users with a token can only access their own data."),(0,a.kt)("h3",{id:"how-can-i-request-the-deletion-of-data"},"How can I request the deletion of data?"),(0,a.kt)("p",null,"The deletion of data may be requested at any time. However, the history of the data is used to create a model to\ncalculate the floating thresholds. Therefore, participation in the program or subscription to the subsequent offer\nwill be impossible.\nA request must be made via the Centreon professional support interface."))}k.isMDXComponent=!0},39118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configure_analysis_01-73f3817aaf1836f33c905ed1b658840a.png"},54723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configure_analysis_02-52703d8ef24acec99345996510b0a503.png"},81376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/simple_scheme-6a67397a48a747691f7487df7c55425b.png"}}]);