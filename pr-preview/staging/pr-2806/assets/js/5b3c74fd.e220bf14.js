"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[54091],{26745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={id:"create-graphical-view",title:"Create a graphical view",description:"MAP tutorial"},l=void 0,c={unversionedId:"getting-started/create-graphical-view",id:"version-23.10/getting-started/create-graphical-view",title:"Create a graphical view",description:"MAP tutorial",source:"@site/versioned_docs/version-23.10/getting-started/create-graphical-view.md",sourceDirName:"getting-started",slug:"/getting-started/create-graphical-view",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/create-graphical-view",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/create-graphical-view.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"create-graphical-view",title:"Create a graphical view",description:"MAP tutorial"},sidebar:"version-23.10/docs",previous:{title:"Tutorials for Business modules",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/category/tutorials-for-business-modules"},next:{title:"Model your IT services",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/model-it-services"}},p={},d=[{value:"Create a logical view",id:"create-a-logical-view",level:2},{value:"Before creating a view: define the objective",id:"before-creating-a-view-define-the-objective",level:3},{value:"The view designer&#39;s workspace",id:"the-view-designers-workspace",level:3},{value:"Create a new view",id:"create-a-new-view",level:3},{value:"Create a geographical view",id:"create-a-geographical-view",level:2},{value:"Display and share the view",id:"display-and-share-the-view",level:2}],u={toc:d},h="wrapper";function g(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(h,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},u,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The objective of this tutorial is to help you understand how you can provide\nreal time IT infrastructure status overviews with the data presentation\nextension called Centreon MAP to your ITOM teams and operational users."),(0,n.kt)("p",null,"With Centreon MAP, you can simply create and share synthetic real time\nmonitoring views to monitor the performance of your IT infrastructure, network,\napplications and services."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(24958).Z,width:"3360",height:"1834"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(40883).Z,width:"3360",height:"1834"})),(0,n.kt)("p",null,"For instance, this real-time view allows ITOM teams and managers to see the availability of critical business applications\nand services instantaneously. This guarantees a better reaction time in case of outage and\noptimizes MTRS (Mean Time to Restore Service)."),(0,n.kt)("p",null,"This tutorial shows you how to create views using Centreon MAP.\nAfter reading this article, you will be familiar with Centreon MAP's main features\nand you will be able to create views that meet your technical or business users'\nneeds."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Centreon MAP is a Centreon ",(0,n.kt)("strong",{parentName:"p"},"extension")," that requires a valid license key. To\npurchase one and retrieve the necessary repositories, contact\n",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,n.kt)("h2",{id:"create-a-logical-view"},"Create a logical view"),(0,n.kt)("h3",{id:"before-creating-a-view-define-the-objective"},"Before creating a view: define the objective"),(0,n.kt)("p",null,"Define what is the main objective of the view. What need does it meet? Who\nare the recipients? What are the main topics to consider before creating a view? Here\nare some questions you might consider:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Who is/are the recipient(s) (users' profiles) of this view?"),(0,n.kt)("li",{parentName:"ul"},"What level of information do users need?"),(0,n.kt)("li",{parentName:"ul"},"Do I monitor all the resources and indicators I need to create that view?"),(0,n.kt)("li",{parentName:"ul"},"What kind of information should the view contain (resources, indicators,\ngraphs, network links, etc)? It can be interesting to start drawing that view\non a paper note.")),(0,n.kt)("p",null,"Now that you have defined the objectives, let's start showing you how to make the view."),(0,n.kt)("h3",{id:"the-view-designers-workspace"},"The view designer's workspace"),(0,n.kt)("p",null,"Connect to your Centreon MAP server using the desktop client. The following\nworkspace environment should appear empty. To illustrate the explanation, we've\nopened a view. By default, no view is opened."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(69701).Z,width:"1080",height:"595"})),(0,n.kt)("p",null,"The information and area are organized as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Views"),": existing views that are accessible to you."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Element"),": objects available in opened views."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Media"),": available media (images)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Resources"),": Centreon's object that you can use in the view (drag & drop)."),(0,n.kt)("li",{parentName:"ol"},"Content of the view."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Palette"),": graphical elements that you can use in a view."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Properties"),": the selected element's properties.")),(0,n.kt)("h3",{id:"create-a-new-view"},"Create a new view"),(0,n.kt)("p",null,"Right click in the ",(0,n.kt)("strong",{parentName:"p"},"View")," panel and click ",(0,n.kt)("strong",{parentName:"p"},"Add"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(14041).Z,width:"1508",height:"865"})),(0,n.kt)("p",null,"Put resources, widgets and other elements in position using drag and drop and shortcuts."),(0,n.kt)("p",null,"Below is an example of an IT infrastructure real-time status view created in\n4 minutes or less:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(47507).Z,width:"234",height:"300"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tsgYRpYqaAU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h2",{id:"create-a-geographical-view"},"Create a geographical view"),(0,n.kt)("p",null,"If your IT is geographically spread over a city, country or even the world, you\nmay want to view it in the most appropriate way to obtain insights into the status of your IT\ninfrastructure."),(0,n.kt)("p",null,"This is easy to do using the ",(0,n.kt)("strong",{parentName:"p"},"GeoView"),". The only prerequisite is to\nhave defined Geo-coordinate parameters on your hosts (which can be consulted\nand modified in the ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts")," and ",(0,n.kt)("strong",{parentName:"p"},"Host Extended Infos")," tab)."),(0,n.kt)("p",null,"To create a ",(0,n.kt)("strong",{parentName:"p"},"GeoView"),", go to ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Map"),' and click the "+" that appears\non the ',(0,n.kt)("strong",{parentName:"p"},"Geographic view"),' line. If you do not see the "+", it means you do not have\nenough privileges on Centreon.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(98101).Z,width:"1665",height:"913"})),(0,n.kt)("h2",{id:"display-and-share-the-view"},"Display and share the view"),(0,n.kt)("p",null,"Using an access control mechanism based on Centreon ACL objects, it is easy to\nshare the right views to the right teams. As soon as a view has been shared to a\nuser, it is accessible through its browser in ",(0,n.kt)("strong",{parentName:"p"},"Centreon > Monitoring > Map")," or\neven directly on a dashboard using the ",(0,n.kt)("strong",{parentName:"p"},"Centreon Map")," widget (see example below)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(14174).Z,width:"1920",height:"944"})),(0,n.kt)("p",null,"You now have enough information to start working on Centreon Map."))}g.isMDXComponent=!0},98101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_geo_view-2573ca38e649337fce2674c09d719260.gif"},14041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_view-dfaf63a77e649747b28a7e752e0793b7.gif"},47507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex_view-b8380659b2aef45ad841a85abb13af16.jpg"},14174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share_view-7a69715bc8e3516300409fb1517b7f8a.png"},24958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tuto_ex_1-ba9f71db37180824b1619771590af4f1.png"},40883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tuto_ex_2-5fc58512ec32911de7ccbcae8bd1fe02.png"},69701:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tuto_workspace-684bf7a094eed0b6c7a2a8b78633acec.png"}}]);