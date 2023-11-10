"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[27317],{41976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"analyze-resources-availability",title:"Analyze resources availability",description:"MBI tutorial"},l=void 0,u={unversionedId:"getting-started/analyze-resources-availability",id:"version-23.10/getting-started/analyze-resources-availability",title:"Analyze resources availability",description:"MBI tutorial",source:"@site/versioned_docs/version-23.10/getting-started/analyze-resources-availability.md",sourceDirName:"getting-started",slug:"/getting-started/analyze-resources-availability",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/analyze-resources-availability",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/analyze-resources-availability.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"analyze-resources-availability",title:"Analyze resources availability",description:"MBI tutorial"},sidebar:"version-23.10/docs",previous:{title:"Model your IT services",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/model-it-services"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/installation/introduction"}},c={},p=[{value:"Define your requirement",id:"define-your-requirement",level:2},{value:"Select the report design",id:"select-the-report-design",level:2},{value:"Configure the report by &quot;adding a job&quot;",id:"configure-the-report-by-adding-a-job",level:2},{value:"Retrieve the generated report",id:"retrieve-the-generated-report",level:2}],d={toc:p},g="wrapper";function h(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This quick-start guide will show you how to use Centreon MBI to generate your first report!"),(0,r.kt)("p",null,"If you are using the Centreon MBI extension for the first time and you want to\ngenerate an insightful and effective statistical report, this tutorial\nwill help you get started."),(0,r.kt)("p",null,"Follow this simple procedure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define your requirement."),(0,r.kt)("li",{parentName:"ul"},"Use the documentation to help you select the report design\n(template) that best suits your analysis."),(0,r.kt)("li",{parentName:"ul"},"Configure your report by adding a job."),(0,r.kt)("li",{parentName:"ul"},"Retrieve the report using the interface.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Centreon MBI is a Centreon ",(0,r.kt)("strong",{parentName:"p"},"extension")," that requires a valid license key. To\npurchase one and retrieve the necessary repositories, contact\n",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,r.kt)("h2",{id:"define-your-requirement"},"Define your requirement"),(0,r.kt)("p",null,"Here is an example based on a typical requirement for basic use of\nCentreon MBI: monitoring the availability of IT resources. In this\nscenario, the company's IT manager in charge of the European network\ntells us that the routers seem unreachable at times, and wants us to\nanalyze the problem. To respond, we must retrieve information on the\navailability of the routers located in Europe."),(0,r.kt)("p",null,"Now that the requirement has been identified, we can proceed to the next\nstep."),(0,r.kt)("h2",{id:"select-the-report-design"},"Select the report design"),(0,r.kt)("p",null,"Every report design meets a specific need. Ours is to analyze the\navailability of our routers in Europe. First, we will look at the\nlist of available report designs. We select\nHostgroup-Host-Availability-List. This design lists the availability of\ngroup hosts. In this case, the hosts being monitored happen to be our\nrouters."),(0,r.kt)("h2",{id:"configure-the-report-by-adding-a-job"},'Configure the report by "adding a job"'),(0,r.kt)("p",null,"In Centreon MBI, you configure a report by creating a scheduled job. Go\nto menu: Reporting \u2192 Business Intelligence \u2192 Configuration | Jobs / Add\n(for a new one):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(15071).Z,width:"1919",height:"948"})),(0,r.kt)("p",null,"The job creation form opens on the first tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(52841).Z,width:"1612",height:"814"})),(0,r.kt)("p",null,"First, under ",(0,r.kt)("em",{parentName:"p"},"Job Configuration"),", create a name for the job. This will\nbe the name of the report to be generated."),(0,r.kt)("p",null,"Note: In case of a large number of jobs, it is important to\ndefine naming rules."),(0,r.kt)("p",null,"Then specify the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Report design: Hostgroup-Host-Availability-List"),(0,r.kt)("li",{parentName:"ul"},"Language: English"),(0,r.kt)("li",{parentName:"ul"},"Output format: PDF")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(78535).Z,width:"387",height:"358"})),(0,r.kt)("p",null,"You must also link the job to a job group. This is mandatory for\nmanaging user rights and profiles. In the Scheduling parameters, choose\nthe scheduling mode. You have a choice between immediate execution and\nscheduled execution. Select immediate execution. In this configuration,\nthe report will be generated immediately, in English, in PDF format, and\nusing the last month's statistics:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(41849).Z,width:"1620",height:"808"})),(0,r.kt)("p",null,'Once the Configuration form is filled out correctly, we can proceed to\nthe "Report Parameters" tab, where we specify the conditions and scope\nof the report to be generated. We list the availability of hosts stored\nin the group "Routers" located in "Europe" (host category).'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(64024).Z,width:"1567",height:"698"})),(0,r.kt)("p",null,"Note: For most report designs, you can select a time period for the\nreport."),(0,r.kt)("p",null,'We want to analyze the availability of the routers over a 24\xd77 time\nperiod. To appear in the list, this time period must be predefined in\nCentreon and must be configured in Centreon MBI\'s general options, under\nthe "ETL Options" tab. Finally, we customize the report with our logo\n(new logos can be added to the "Logo" menu).'),(0,r.kt)("p",null,'Click "Save" to schedule the report according to the selected mode:\nimmediately.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(88678).Z,width:"1681",height:"395"})),(0,r.kt)("p",null,'If the job does not appear in the list, check that the filter applied to\nthe page is set to "All" to display all the jobs.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(99935).Z,width:"1685",height:"394"})),(0,r.kt)("h2",{id:"retrieve-the-generated-report"},"Retrieve the generated report"),(0,r.kt)("p",null,"Once the job is finished, go to ",(0,r.kt)("em",{parentName:"p"},"Report view"),', which contains the list of\nall reports generated. To view your report, simply download it by\nclicking the "Output format" icon; in this case, PDF.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(56783).Z,width:"1919",height:"947"})),(0,r.kt)("p",null,"You now have access to the requested report displaying the availability\nof the routers in Europe:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(55437).Z,width:"1355",height:"349"})),(0,r.kt)("p",null,"Congratulations! You have extracted some basic statistics from the\nreporting base."),(0,r.kt)("p",null,"Ready to generate some reports? Go back to the report list page, select\nthe design templates that suit your requirements, and you will be able\nto generate a new report."),(0,r.kt)("p",null,"We hope this tutorial has proven useful to you."))}h.isMDXComponent=!0},15071:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1_EN_createJob-558a4b84817dc66b680a1748c36075bf.png"},52841:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2_EN_createJob_FirstTab-b27b15c25c74024c4bdfba4cbc001695.png"},41849:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3_EN_createJob_FirstTab_Filled-3111a7343fe3818233123f8d6ba66e32.png"},64024:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4_EN_createJob_Parameter-4495a7e4d19b3c8a1148b9894751df7f.png"},88678:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/5_EN_generateJob-109a1db4deece463176d1b52af728d3a.png"},99935:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/6_EN_generateJob_Filter-b1e71ccddb79728924bc8272224c8032.png"},56783:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/7_EN_reportView-6b69f0ebdf98b945c2ef0481c76e77c4.png"},55437:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/8_EN_availabilityReport-e9a14f99445c027447f1097626979547.png"},78535:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/createJob_ListReport-e9c4b6997bc6cf43e3164eb46c6dd2d6.png"}}]);