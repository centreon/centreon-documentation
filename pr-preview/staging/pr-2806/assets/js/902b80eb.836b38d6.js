"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[5334],{87368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"chart-curves",title:"Curves"},s=void 0,c={unversionedId:"metrology/chart-curves",id:"version-23.10/metrology/chart-curves",title:"Curves",description:"Definition",source:"@site/versioned_docs/version-23.10/metrology/chart_curves.md",sourceDirName:"metrology",slug:"/metrology/chart-curves",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/metrology/chart-curves",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/metrology/chart_curves.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"chart-curves",title:"Curves"},sidebar:"version-23.10/docs",previous:{title:"Graph template",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/metrology/chart-template"},next:{title:"Virtual metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/metrology/chart-virtual-metrics"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Examples of curves",id:"examples-of-curves",level:2}],h={toc:p},d="wrapper";function m(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},h,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"A curve is the representation of the evolution of performance data (metrics produced from the collection of data) visible\nvia performance graphs. A graph may contain multiple curves. It is possible to customize the curves by changing certain\nsettings: curve profile, position of the curves on the graph, legend and additional information (average, total value, etc.)."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Monitoring ",">"," Performances ",">"," Curves")," menu"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(98674).Z,width:"1109",height:"878"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Template Name")," field defines the name of the model."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Hosts/Service Data Source")," lists defines the host/service for which this curve will be used. If this information\nis not filled in, this curve definition will be applied to all services in which this metric appears."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Data Source Name")," field can be used to select the metric which will use this definition. The ",(0,n.kt)("strong",{parentName:"li"},"List of known metrics"),"\nlist can be used to choose the existing metrics already used by the services."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Stack")," box is checked, this curve will be stacked on the others (useful to see the proportion of one metric in\nrelation to another)."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Stack")," box is checked, the ",(0,n.kt)("strong",{parentName:"li"},"Order")," list can be used to define the order display / stacking of the curve (the\nsmaller the number, the closer it will be to the x-axis)."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Invert")," box is checked, the curve is reversed (opposite to the absolute value) in relation to the y-axis (useful\nfor seeing the proportion of incoming traffic compared to outgoing traffic)."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Thickness")," list expresses the thickness of the line of the curve (expressed in pixels)."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Line color")," field defines the color of the curve."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Area color")," field concerns the filling color of the curve if the Filling option is checked, (see below). It contains\nthree fields that correspond to the colors of the OK, WARNING and CRITICAL statuses, respectively."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Transparency")," field defines the level of transparency of the contour color."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Filling")," box is checked, the entire curve is filled with the color of the area defined according to the status.")),(0,n.kt)("p",null,"The attributes below concern the information situated under the graph:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Legend")," field defines the legend of the curve."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Display only the legend")," box is checked, the curve will be masked but the legend will be visible."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Empty lines after this legend")," list can be used to define a certain number of empty lines after the legend."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Print max value")," box is checked, the maximum value reached by the curve will be displayed."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Print min value")," box is checked, the minimum value reached by the curve will be displayed."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Round the min and max")," box is checked, the minimum and maximum values will be rounded."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Print Average")," box is checked, the average of the points of the curve will be displayed."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Print last value")," box is checked, the last value collected from the curve will be displayed."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"Print total value")," box is checked, the total value is displayed (sum of all the values of the curve in the selected period)."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Comment")," field can be used to comment on the curve.")),(0,n.kt)("h2",{id:"examples-of-curves"},"Examples of curves"),(0,n.kt)("p",null,"Stacked curves:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(31651).Z,width:"1093",height:"350"})),(0,n.kt)("p",null,"Reversed curves:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(16603).Z,width:"1093",height:"349"})),(0,n.kt)("p",null,"Curves with filling:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(27363).Z,width:"1092",height:"350"})))}m.isMDXComponent=!0},98674:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02addcurve-ce7e0dff59d3f32ae18462a6bcca8cec.png"},31651:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02graphempile-018f60f023f2021f9a712c5f4c9b659e.png"},16603:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02graphinverse-076b7c223710caed798861bd51b1b05d.png"},27363:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02graphremplissage-c6145ffe89545b82fe0e291c5fae09f8.png"}}]);