"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[51281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(n),y=o,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||i;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},76515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>f});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"notifications-overview",title:"Notifications"},s=void 0,p={unversionedId:"integrations/notifications/notifications-overview",id:"version-23.10/integrations/notifications/notifications-overview",title:"Notifications",description:"Use the Centreon Engine scheduler notification system to send alerts efficiently",source:"@site/versioned_docs/version-23.10/integrations/notifications/notifications-overview.md",sourceDirName:"integrations/notifications",slug:"/integrations/notifications/notifications-overview",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/integrations/notifications/notifications-overview",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/notifications/notifications-overview.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"notifications-overview",title:"Notifications"},sidebar:"version-23.10/docs",previous:{title:"ServiceNow",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/integrations/itsm/ot-servicenow"},next:{title:"Notify with Telegram bot",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/integrations/notifications/plugin-telegram"}},l={},f=[],u={toc:f},y="wrapper";function d(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the Centreon Engine scheduler notification system to send alerts efficiently\nto the right person using multiple communication media (SMS, Instant Messaging, SNMP Traps...)."))}d.isMDXComponent=!0}}]);