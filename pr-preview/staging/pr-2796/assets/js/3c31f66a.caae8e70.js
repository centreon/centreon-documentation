"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[78841],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),A=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=A(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=A(a),u=r,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var A=2;A<i;A++)o[A]=a[A];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>A,toc:()=>d});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"custom-views",title:"Custom views"},s=void 0,A={unversionedId:"alerts-notifications/custom-views",id:"version-23.10/alerts-notifications/custom-views",title:"Custom views",description:"Custom views are dashboards created with widgets. You can share views with other users. See also our tutorial on custom views.",source:"@site/versioned_docs/version-23.10/alerts-notifications/custom-views.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/custom-views",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/custom-views",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/custom-views.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"custom-views",title:"Custom views"},sidebar:"version-23.10/docs",previous:{title:"Event Logs",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/event-log"},next:{title:"Acknowledging an alert",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/alerts-notifications/acknowledge"}},c={},d=[{value:"Creating a custom view",id:"creating-a-custom-view",level:2},{value:"Editing a custom view",id:"editing-a-custom-view",level:2},{value:"Editing a widget",id:"editing-a-widget",level:3},{value:"Rearranging widgets",id:"rearranging-widgets",level:3},{value:"Sharing custom views",id:"sharing-custom-views",level:2},{value:"Displaying a custom view users have shared with you",id:"displaying-a-custom-view-users-have-shared-with-you",level:2},{value:"Configuring the rotation of views",id:"configuring-the-rotation-of-views",level:2},{value:"Defining a default view",id:"defining-a-default-view",level:2},{value:"List of widgets",id:"list-of-widgets",level:2}],p={toc:d},u="wrapper";function m(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(u,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},p,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Custom views are dashboards created with widgets. You can share views with other users. See also our ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2796/docs/getting-started/create-custom-view"},"tutorial")," on custom views."),(0,n.kt)("h2",{id:"creating-a-custom-view"},"Creating a custom view"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Home > Custom Views"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Show/Hide edit mode")," icon in the top right corner of the page: ",(0,n.kt)("img",{alt:"image",src:a(7254).Z,width:"34",height:"34"})),(0,n.kt)("p",{parentName:"li"},"The control bar appears:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(24213).Z,width:"746",height:"54"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add view"),": a pop-up window is displayed."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(42948).Z,width:"317",height:"232"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Create new view"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"enter a name"),(0,n.kt)("li",{parentName:"ul"},"select the number of columns you want (i.e. the number of widgets displayed horizontally)"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Public")," to ",(0,n.kt)("a",{parentName:"li",href:"#sharing-custom-views"},"share your view")," in read-only mode with other users."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Submit"),". The view is displayed (it is empty).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add widget"),": "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"enter a title (it will be displayed above the widget) "),(0,n.kt)("li",{parentName:"ul"},"select the type of widget you want."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Submit"),". The widget appears. Some widgets require extra configuration (e.g., selecting a poller): click the wrench icon in the top right corner of the widget to ",(0,n.kt)("a",{parentName:"p",href:"#editing-a-widget"},"edit")," it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you have created the view and added all the widgets you want, click the ",(0,n.kt)("strong",{parentName:"p"},"Show/Hide edit mode")," icon again: ",(0,n.kt)("img",{alt:"image",src:a(79950).Z,width:"29",height:"28"})))),(0,n.kt)("h2",{id:"editing-a-custom-view"},"Editing a custom view"),(0,n.kt)("p",null,"On the control bar, click ",(0,n.kt)("strong",{parentName:"p"},"Edit view"),". ",(0,n.kt)("img",{alt:"image",src:a(40381).Z,width:"744",height:"251"})),(0,n.kt)("p",null,"You can rename the view, change the layout of the columns, and ",(0,n.kt)("a",{parentName:"p",href:"#sharing-a-custom-view"},"share the view")," in read-only mode with other users. You can also edit or move widgets."),(0,n.kt)("h3",{id:"editing-a-widget"},"Editing a widget"),(0,n.kt)("p",null,"To edit a widget, click the wrench icon in the top right corner of the widget: ",(0,n.kt)("img",{alt:"image",src:a(43504).Z,width:"67",height:"34"})),(0,n.kt)("h3",{id:"rearranging-widgets"},"Rearranging widgets"),(0,n.kt)("p",null,"To move a widget, click the title bar of the widget and drag it to the desired location."),(0,n.kt)("h2",{id:"sharing-custom-views"},"Sharing custom views"),(0,n.kt)("p",null,"You can share a custom view in different ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In read-only mode: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Public")," when you ",(0,n.kt)("a",{parentName:"li",href:"#creating-a-custom-view"},"create the view")," or when you ",(0,n.kt)("a",{parentName:"li",href:"#editing-a-custom-view"},"edit")," it."),(0,n.kt)("li",{parentName:"ul"},'Share the view with "locked users" or "locked user groups". All subsequent changes will be inherited by the shared views.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make the view editable:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Share the view with "unlocked users" or "unlocked user groups". Unlocked users will become the "owner" of their copy of the view and no\nchanges they make will be applied to the original view. In the same manner, no change made by the user who created the view will affect the copies.')))),(0,n.kt)("p",null,'To share a view with "locked"/"unlocked users" :'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On the control bar, click ",(0,n.kt)("strong",{parentName:"li"},"Share view"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the options you want (see above)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Share"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Although the fields are called "locked users"/"unlocked users", strictly speaking the ',(0,n.kt)("em",{parentName:"p"},"view")," will be locked or unlocked, not the users.")),(0,n.kt)("h2",{id:"displaying-a-custom-view-users-have-shared-with-you"},"Displaying a custom view users have shared with you"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Home > Custom Views")," page, click the ",(0,n.kt)("strong",{parentName:"p"},"Show/Hide edit mode")," icon in the top right corner of the page: ",(0,n.kt)("img",{alt:"image",src:a(7254).Z+"#thumbnail1",width:"34",height:"34"})),(0,n.kt)("p",{parentName:"li"},"The control bar appears:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(24213).Z,width:"746",height:"54"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add view"),", then select ",(0,n.kt)("strong",{parentName:"p"},"Load from existing view"),". A dropdown list shows all the views that other users have shared with you. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a view, then click ",(0,n.kt)("strong",{parentName:"p"},"Submit"),". The view is displayed."))),(0,n.kt)("h2",{id:"configuring-the-rotation-of-views"},"Configuring the rotation of views"),(0,n.kt)("p",null,"Once you have created several custom views, you can make all views be displayed in turn."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On the control bar, click ",(0,n.kt)("strong",{parentName:"li"},"Rotation"),". "),(0,n.kt)("li",{parentName:"ol"},"Use the slider to define the number of seconds that each view must be displayed for, then click ",(0,n.kt)("strong",{parentName:"li"},"Apply"),".")),(0,n.kt)("h2",{id:"defining-a-default-view"},"Defining a default view"),(0,n.kt)("p",null,"You can choose which view to display when you access the ",(0,n.kt)("strong",{parentName:"p"},"Home > Custom Views")," page."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the view you want."),(0,n.kt)("li",{parentName:"ol"},"On the control bar, click ",(0,n.kt)("strong",{parentName:"li"},"Set default"),".")),(0,n.kt)("h2",{id:"list-of-widgets"},"List of widgets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Widget"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Engine status"),(0,n.kt)("td",{parentName:"tr",align:null},"Display the statistics for a poller. (Select a poller in the settings.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Global health"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays a pie chart showing the status of hosts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graph monitoring"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the RRD graph for a service. You must select a service that uses performance data. You can define the timeperiod and the refresh time for the graph in the settings.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grid-map"),(0,n.kt)("td",{parentName:"tr",align:null},'Display services as colored squares. To configure this widget, select a hostgroup and fill in the "Name services" field, using commas between services (do not use special characters, e.g. slashes, in this widget).')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host monitoring"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the list of hosts as well as their status and related information. You can filter the list using the criteria you want.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostgroup monitoring"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays host groups. It can show a detailed view of services.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HTTP loader"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays a web page.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Live top 10 CPU usage"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the top 10 hosts by CPU usage. Check that the value of the parameter Metric Name matches the name of the metric used by the CPU service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Live top 10 memory usage"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the top 10 hosts by memory usage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Service monitoring"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays a list of services. Lots of options are available (sort by severity, filters, columns, etc..)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Servicegroup monitoring"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays a list of service groups.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Single metric"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the value of a single metric for the selected service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tactical overview"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the details for the hosts or services. By default hosts are displayed.")))))}m.isMDXComponent=!0},24213:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},7254:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAEPSURBVFhH7ZcxCsIwFIajo7OjXXV2k87eoINQ76CC4iHEQQ/h4NBDuJTWxdm5jmZ1Vf+QQAlokjbBIvmgvAYC/fLnkdAWpfRJGkCb15/jRWS8iIwXkfl/kf32Sm7Fg4/UODlZp1FKsvROekGHHJKQVRXWE0EKkBDvkNJJxqrIenFh9XQeswogkaeUjz5jTQQrT44Fq0DIRJOAPSqs9Ei5J5CA6A2g0x+gdiJCYhR2WQqokEE6uhKglkhZAgmIMbZivhrwWXpUFvkmsdkN+Sx9KonYlgDGIi4kgJGIKwmgLYK7w5UEMN6a2bJvXQIYi8QOJID2yZq/P56V7gzTc0KF/8GS8SIyXkTGi8g0RISQF14xq3rtb0IhAAAAAElFTkSuQmCC"},79950:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAFeSURBVEhL7Za9SgNBEIBXS2tL05pWG5E0Nr5BCkHfIQYi+gyKQvQdLCzyBjY2R2KjbepYeq2t+g03csTdm/HwUt0Hy/5w7Lcz+8Ot5Xn+GVbMelGvlFbaKEnp5GFRtHzcXs/D2+Kj6FUTlZ4PX6QwkYeTfhbubuZSe8RR6WDUDfu9TZnIEiOZZu8/bY84Kt3qbITL8Y4pJhvw9HwoNSCcZXnRi5PcU0tMROw7Nai4f9SRUoX5IrHyi+GrpJC0n551Zexg71EWRpv6ftKT72lbJCNVYhEzRmQUxhETtUcIphRUTF0WIyMDpJMMeHE/+OydnlIop9oboeKKVIWkkpQuR/xXTGlZyGHhUBEdVF2nKiqly0Lts4d6iOqIk1ImSgmvxruSVs8DEsNM72C0/Uuo1BWb0uOEUKkjTl6Z2bdoWnpDrXvI4dKXi8WxyBT/+mOmL5O1wPZvsFFaaYOE8AV0Evvdpl5l8AAAAABJRU5ErkJggg=="},42948:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view_add-2e80ad9fc663c035cfae2df6f48fafd2.png"},40381:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view_edit-69c39f350a7f4321521899603b2144fb.png"},43504:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAiCAYAAAAEYmSMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAI2SURBVGhD7Zm9TsMwFEZdNlhhAZqJoTMLRV1YWBhgoBJI8A5QCVTeAYEEvANIDF1gYGFhqYCFH7EwMLWFha4wQj7ji24cx0nbVEpVHylyrNSJ77F9bam5drv9IxySEVU6fJwMRu7p+cUtE4XLGQy3TBhOBqMvMpqNL3kNGolkLMxdq7t4jg9e5e/pqp031JPsY02gNLoIKu+NiZv7RVmPA0JODl9VTYj9o1lRXvdUzc5d/dP/7rf8Nn8Hvr+65sky742KYmlCPUkPowx0BCPKOwNsQUHA9m5B1YJCOhFZrTzEzib0AX1JG6MMWhZbOwX54ZnJC6sIyEMb/J6E6EGd1UqJRzOJjH4QkrFZrsvg+Eiic7wDeh1Te8NvByCk1fybWRy8DzMkCZBv4+1jRd2lSyiB3vqBISCOHri+fKb9IOfVqOOZaWRbKv9kmYAMCqJYGpelCQSOmQMpBCU3G9XKo2yXZQIySIJtFGmqQwoHbZFXopYCRNASzCoBGQiEpnsUNHv0oFHHcjr1EyWSJXKEnieyLiSUMzDdedbHrkAgCOQEWzZH8GiPEhfkDIqQkAweKG2P6DhK2nI72eMHSUjkCVQ/RQKI6vawYxJgEgV63VqvLt/VnZml5Sl1FyRSBjq95+8A2Go7OTDZMAkxnT9MA0HYDn9EtzIjZQASgtFLCy4kLclpYZUB0Gl95HqlH+9Mg1gZw0RoNxlmnAyGk8FwMhhOBsPJYLi/FxnunMFwy4ThZPwjxC80sky3F1TQ5QAAAABJRU5ErkJggg=="}}]);