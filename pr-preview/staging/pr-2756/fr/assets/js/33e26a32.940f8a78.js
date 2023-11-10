"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[97504],{85868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"graph-views-api",title:"Graphical views API (beta)"},s=void 0,l={unversionedId:"api/graph-views-api",id:"version-23.10/api/graph-views-api",title:"Graphical views API (beta)",description:"Cette documentation n'est disponible qu'en anglais.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/api/graph-views-api.md",sourceDirName:"api",slug:"/api/graph-views-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/api/graph-views-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/api/graph-views-api.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"graph-views-api",title:"Graphical views API (beta)"},sidebar:"version-23.10/docs",previous:{title:"Rest API (v2)",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/api/rest-api-v2"},next:{title:"Centreon HA",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/installation-of-centreon-ha/overview"}},c={},u=[],d={toc:u},m="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cette documentation n'est disponible qu'en anglais.")),(0,r.kt)("p",null,"If you want to automate standard views creation or maintenance, you may\nuse the Centreon MAP extension API."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Views created using the API are not immediately visible in the desktop client, you need to\nrestart it to see them.")),(0,r.kt)("p",null,"With this API, in beta version, you can create/update/delete standard\nviews. To be able to use the API, the account you use needs to have one\nof the following privileges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Centreon Admin"),(0,r.kt)("li",{parentName:"ul"},"Centreon MAP admin"),(0,r.kt)("li",{parentName:"ul"},"Centreon MAP view creation rights & editions rights on views you\nwant to update/delete")),(0,r.kt)("p",null,"To access the API documentation, two possibilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have Centreon MAP, go to the following URL:"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://{map_server_url}/centreon-studio/api/beta/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You don't have Centreon MAP, you can preview the API capabilities\nhere: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.centreon.com/api/centreon-map/"},"Online documentation")))),(0,r.kt)("p",null,"Because the Centreon Map API is not trivial to use, here is a scenario\nthat authenticate, then create a map and add an host on it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Authentication")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST : http://{{serverURL}}:8080/centreon-studio/api/beta/authentication\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Headers {\n    Content-Type = application/json\n    X-Client-Version = 20.04.0\n}\n\nBody {\n    "login" : "admin"\n    "password" : "denied"\n}\n')),(0,r.kt)("p",null,"In the result, retrieve the {studio-session} (token), you'll need to\nuse it all your API calls. The headers will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Headers {\n    Content-Type = application/json\n    X-client-version = 19.10.0\n    studio-session = {studio-session}\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Create a Map")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST http://{{serverURL}}:8080/centreon-studio/api/beta/maps\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Headers {\n    Content-Type = application/json\n    X-client-version = 19.10.0\n    studio-session = {studio-session}\n}\n\nBody {\n      "label": "My new Map create from API"\n   }\n')),(0,r.kt)("p",null,"Retrieve the ID of the view returned: {viewId}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.Open the Map")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET http://{{serverURL}}:8080/centreon-studio/api/beta/maps/{viewId}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'4.Create a "Shape" (Rectangle) element (not yet on the map)')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST http://{{serverURL}}:8080/centreon-studio/api/beta/centreon-resources\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Body: {\n    "label": "FR - Rectangle",\n    "abscissa": 120,\n    "ordinate": 120,\n    "width": 130,\n    "height": 53,\n    "color": "#0096ff",\n    "thickness": 1,\n    "borderColor": "#f0f0f0",\n    "line": 1,\n    "type": "RECTANGLE"\n}\n')),(0,r.kt)("p",null,"Retrieve the element id you just created : ",(0,r.kt)("inlineCode",{parentName:"p"},"{id}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Attach the element to the opened view")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT http://{{serverURL}}:8080/centreon-studio/api/beta/views/{viewId}/elements/{id}\n")))}h.isMDXComponent=!0}}]);