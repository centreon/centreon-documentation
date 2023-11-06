"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"map-web-manage",title:"Managing maps in MAP"},c=void 0,s={unversionedId:"graph-views/map-web-manage",id:"version-23.10/graph-views/map-web-manage",title:"Managing maps in MAP",description:"This topic provides information about how to perform actions on your maps from the Centreon MAP interface. You can create two types of map:",source:"@site/versioned_docs/version-23.10/graph-views/map-web-manage.md",sourceDirName:"graph-views",slug:"/graph-views/map-web-manage",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/map-web-manage",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/map-web-manage.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"map-web-manage",title:"Managing maps in MAP"},sidebar:"version-23.10/docs",previous:{title:"Managing access rights in MAP",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/map-web-access"},next:{title:"Creating a standard map",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/map-web-create-standard-map"}},l={},u=[{value:"Map status information",id:"map-status-information",level:2},{value:"Performing actions on a map",id:"performing-actions-on-a-map",level:2},{value:"Duplicate a map",id:"duplicate-a-map",level:3},{value:"Delete a map",id:"delete-a-map",level:3},{value:"Edit map properties",id:"edit-map-properties",level:3},{value:"Share a map",id:"share-a-map",level:3},{value:"Copy MAP URL",id:"copy-map-url",level:3}],m={toc:u},d="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This topic provides information about how to perform actions on your maps from the Centreon MAP interface. You can create two types of map:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Standard maps:")," to view graphical representations of your monitored infrastructure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Geographic views:")," to display the resources of your IT environment across a defined geographical area.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Options that are available in the MAP interface depend on the permissions assigned to you by your administrator. See the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/graph-views/map-web-access"},"Manage access rights on MAP")," topic to know more about rights and permissions.")),(0,n.kt)("p",null,"The display of the ",(0,n.kt)("strong",{parentName:"p"},"Add a Map")," button or ",(0,n.kt)("strong",{parentName:"p"},"Add a Geographic view")," button means that you are allowed to create a map and that you belong to an access group that is granted the creator role."),(0,n.kt)("h2",{id:"map-status-information"},"Map status information"),(0,n.kt)("p",null,"The homepage displays the list of existing maps and you can visualize for each map, the worst status of all resources or containers included in the map."),(0,n.kt)("h2",{id:"performing-actions-on-a-map"},"Performing actions on a map"),(0,n.kt)("p",null,"You can perform actions on any standard map and geographic view you have access to. Use the following procedures if you need to edit map properties, share or delete a map."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The features to share and to copy a map URL are not available on a geographic view.")),(0,n.kt)("h3",{id:"duplicate-a-map"},"Duplicate a map"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"three vertical dots")," menu at the top-right of the map, then click on ",(0,n.kt)("strong",{parentName:"p"},"Duplicate"),'.\nA new map is automatically created, with "- copy" added to the initial name.'),(0,n.kt)("h3",{id:"delete-a-map"},"Delete a map"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"trash")," button and confirm the deletion by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Delete")," button."),(0,n.kt)("h3",{id:"edit-map-properties"},"Edit map properties"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"wrench")," button to edit the map properties and confirm the changes by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button."),(0,n.kt)("h3",{id:"share-a-map"},"Share a map"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"share")," button to edit the access group privileges and confirm the changes by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button."),(0,n.kt)("h3",{id:"copy-map-url"},"Copy MAP URL"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Copy MAP URL")," button is available in view mode, allowing you to easily share the map you opened."))}g.isMDXComponent=!0}}]);