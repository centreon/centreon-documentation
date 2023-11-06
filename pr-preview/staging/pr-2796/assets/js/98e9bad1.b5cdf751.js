"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[88463],{2485:(A,g,I)=>{I.r(g),I.d(g,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});I(67294);var e=I(3905),t=I(51715),C=I(7626);function n(A,g,I){return g in A?Object.defineProperty(A,g,{value:I,enumerable:!0,configurable:!0,writable:!0}):A[g]=I,A}function a(A,g){return g=null!=g?g:{},Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(g)):function(A,g){var I=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);g&&(e=e.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),I.push.apply(I,e)}return I}(Object(g)).forEach((function(I){Object.defineProperty(A,I,Object.getOwnPropertyDescriptor(g,I))})),A}function i(A,g){if(null==A)return{};var I,e,t=function(A,g){if(null==A)return{};var I,e,t={},C=Object.keys(A);for(e=0;e<C.length;e++)I=C[e],g.indexOf(I)>=0||(t[I]=A[I]);return t}(A,g);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);for(e=0;e<C.length;e++)I=C[e],g.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(A,I)&&(t[I]=A[I])}return t}const o={id:"generic-actions",title:"Generic actions"},l=void 0,r={unversionedId:"monitoring/generic-actions",id:"version-23.10/monitoring/generic-actions",title:"Generic actions",description:"In the Configuration menu it is possible to perform certain \u201cgeneric\u201d actions on the various objects.",source:"@site/versioned_docs/version-23.10/monitoring/generic-actions.md",sourceDirName:"monitoring",slug:"/monitoring/generic-actions",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/generic-actions",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/generic-actions.md",tags:[],version:"23.10",lastUpdatedAt:1699281350,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"generic-actions",title:"Generic actions"},sidebar:"version-23.10/docs",previous:{title:"Commands",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/basic-objects/commands"},next:{title:"Anomaly detection",permalink:"/centreon-documentation/pr-preview/staging/pr-2796/docs/monitoring/anomaly-detection"}},c={},s=[{value:"Adding objects",id:"adding-objects",level:2},{value:"Duplicating objects",id:"duplicating-objects",level:2},{value:"Mass Change",id:"mass-change",level:2},{value:"Enabling/disabling objects",id:"enablingdisabling-objects",level:2},{value:"Deleting objects",id:"deleting-objects",level:2}],h={toc:s},b="wrapper";function m(A){var{components:g}=A,o=i(A,["components"]);return(0,e.kt)(b,a(function(A){for(var g=1;g<arguments.length;g++){var I=null!=arguments[g]?arguments[g]:{},e=Object.keys(I);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(I).filter((function(A){return Object.getOwnPropertyDescriptor(I,A).enumerable})))),e.forEach((function(g){n(A,g,I[g])}))}return A}({},h,o),{components:g,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"In the ",(0,e.kt)("strong",{parentName:"p"},"Configuration")," menu it is possible to perform certain \u201cgeneric\u201d actions on the various objects."),(0,e.kt)("h2",{id:"adding-objects"},"Adding objects"),(0,e.kt)("p",null,"To create a new object, click the ",(0,e.kt)("strong",{parentName:"p"},"Add")," button next to the ",(0,e.kt)("strong",{parentName:"p"},"More actions")," menu/above the list of objects."),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"image",src:I(81970).Z,width:"576",height:"244"})),(0,e.kt)("h2",{id:"duplicating-objects"},"Duplicating objects"),(0,e.kt)("p",null,"Duplicate an object to re-use its properties for the creation of a new\nobject. Example: You need to monitor 10 identical web servers:"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Add the first web server with all the necessary properties."),(0,e.kt)("li",{parentName:"ol"},"Duplicate this host 9 times."),(0,e.kt)("li",{parentName:"ol"},"All you have to do now is to change the host names and the IP addresses of each duplication to adapt them to the 9 other web servers to be monitored.")),(0,e.kt)("p",null,"Thanks to this method, it is no longer necessary to create each host individually."),(0,e.kt)("p",null,"To duplicate an object:"),(0,e.kt)(t.Z,{groupId:"sync",mdxType:"Tabs"},(0,e.kt)(C.Z,{value:"Method 1",label:"Method 1",mdxType:"TabItem"},(0,e.kt)("p",null,"For example, to duplicate a Business Activity:"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Select the Business Activity that you want to duplicate by checking the associated box.")),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Click on the duplicate icon: ",(0,e.kt)("img",{alt:"image",src:I(99657).Z+"#thumbnail1",width:"21",height:"24"}))),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Enter the number of extra copies you want to obtain:"),(0,e.kt)("p",{parentName:"li"},(0,e.kt)("img",{alt:"image",src:I(93340).Z,width:"400",height:"202"}))),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Click ",(0,e.kt)("strong",{parentName:"p"},"OK"),".")))),(0,e.kt)(C.Z,{value:"Method 2",label:"Method 2",mdxType:"TabItem"},(0,e.kt)("p",null,"For example, to duplicate a host:"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Select the host that you want to duplicate.")),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"In the ",(0,e.kt)("strong",{parentName:"p"},"Options")," column, enter the number of extra copies you want to obtain:"),(0,e.kt)("p",{parentName:"li"},(0,e.kt)("img",{alt:"image",src:I(10749).Z,width:"943",height:"29"}))),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"In the ",(0,e.kt)("strong",{parentName:"p"},"More actions")," menu, click ",(0,e.kt)("strong",{parentName:"p"},"Duplicate"),":"),(0,e.kt)("p",{parentName:"li"},(0,e.kt)("img",{alt:"image",src:I(95167).Z,width:"946",height:"140"})))))),(0,e.kt)("h2",{id:"mass-change"},"Mass Change"),(0,e.kt)("p",null,"Mass change enables you to apply a change to multiple objects."),(0,e.kt)("p",null,"Example: All the web servers previously created change SNMP communities. A massive change enables us to change this\ncommunity without it being necessary to change each sheet of each host individually."),(0,e.kt)("p",null,"To perform a mass change:"),(0,e.kt)(t.Z,{groupId:"sync",mdxType:"Tabs"},(0,e.kt)(C.Z,{value:"Method 1",label:"Method 1",mdxType:"TabItem"},(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Select the objects that you want to change."),(0,e.kt)("li",{parentName:"ol"},"Click the ",(0,e.kt)("strong",{parentName:"li"},"Massive change")," icon above the list of objects: ",(0,e.kt)("img",{alt:"image",src:I(75830).Z,width:"22",height:"20"})),(0,e.kt)("li",{parentName:"ol"},"Confirm the changes."))),(0,e.kt)(C.Z,{value:"Method 2",label:"Method 2",mdxType:"TabItem"},(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Select the objects you want to change."),(0,e.kt)("li",{parentName:"ol"},"In the ",(0,e.kt)("strong",{parentName:"li"},"More actions")," menu, click ",(0,e.kt)("strong",{parentName:"li"},"Mass Change"),"."),(0,e.kt)("li",{parentName:"ol"},"The form for the type of object opens, with 2 options next to each field:")),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Incremental"),": means that the change will be added to the existing options"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Replacement"),": means that the change will overwrite the existing options.")))),(0,e.kt)("h2",{id:"enablingdisabling-objects"},"Enabling/disabling objects"),(0,e.kt)("p",null,"The enabling and disabling of objects allows you to take objects into account or not during configuration generation.\nThe main advantage is to be able to keep the configuration of an object without applying it."),(0,e.kt)("p",null,"To enable/disable an object:"),(0,e.kt)(t.Z,{groupId:"sync",mdxType:"Tabs"},(0,e.kt)(C.Z,{value:"Method 1",label:"Method 1",mdxType:"TabItem"},(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Select the objects you want to enable/disable.")),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Click the icon you want in line with the object, or above the list:"),(0,e.kt)("ul",{parentName:"li"},(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Enable"),": ",(0,e.kt)("img",{alt:"image",src:I(32312).Z+"#thumbnail1",width:"36",height:"29"})),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Disable"),": ",(0,e.kt)("img",{alt:"image",src:I(26948).Z+"#thumbnail1",width:"38",height:"33"})))))),(0,e.kt)(C.Z,{value:"Method 2",label:"Method 2",mdxType:"TabItem"},(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Select the objects you want to change."),(0,e.kt)("li",{parentName:"ol"},"In the ",(0,e.kt)("strong",{parentName:"li"},"More actions"),"  menu, click ",(0,e.kt)("strong",{parentName:"li"},"Enable/Disable"),".")),(0,e.kt)("p",null,"You can also use the following buttons at the end of the line:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Enable"),": ",(0,e.kt)("img",{alt:"image",src:I(39407).Z+"#thumbnail1",width:"32",height:"32"})),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Disable"),": ",(0,e.kt)("img",{alt:"image",src:I(12038).Z+"#thumbnail1",width:"32",height:"32"}))),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"image",src:I(58794).Z,width:"943",height:"70"})))),(0,e.kt)("h2",{id:"deleting-objects"},"Deleting objects"),(0,e.kt)("blockquote",null,(0,e.kt)("p",{parentName:"blockquote"},"Deleting an object is final. If you delete an object by accident, you will need to re-create it. In the same way,\ndeleting an object automatically deletes all the objects that are linked to it and that cannot exist without it. Example:\nDeleting a host results in all the services associated with that host being deleted too.")),(0,e.kt)("p",null,"To delete an object:"),(0,e.kt)(t.Z,{groupId:"sync",mdxType:"Tabs"},(0,e.kt)(C.Z,{value:"Method 1",label:"Method 1",mdxType:"TabItem"},(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Select the objects you want to delete."),(0,e.kt)("li",{parentName:"ol"},"Click the ",(0,e.kt)("strong",{parentName:"li"},"Delete")," icon: ",(0,e.kt)("img",{alt:"image",src:I(43059).Z+"#thumbnail1",width:"16",height:"20"})),(0,e.kt)("li",{parentName:"ol"},"Confirm the action."))),(0,e.kt)(C.Z,{value:"Method 2",label:"Method 2",mdxType:"TabItem"},(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Select the objects you want to delete."),(0,e.kt)("li",{parentName:"ol"},"In the ",(0,e.kt)("strong",{parentName:"li"},"More actions")," menu, click ",(0,e.kt)("strong",{parentName:"li"},"Delete"),"."),(0,e.kt)("li",{parentName:"ol"},"Confirm the action.")))))}m.isMDXComponent=!0},10749:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,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"},95167:(A,g,I)=>{I.d(g,{Z:()=>e});const e=I.p+"assets/images/01duplicateobjects-083c7a85588e96b26afee387c7f72d66.png"},81970:(A,g,I)=>{I.d(g,{Z:()=>e});const e=I.p+"assets/images/add-c7255ca30fffa7fbc956e1fbd7738e7e.png"},43059:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TxSJVBzuIOESoThbEijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrElA1y0jFY2I2tyr2vCKAEPoRxajETD2RXszAc3zdw8fXuwjP8j735+hT8iYDfCLxHNMNi3iDeGbT0jnvE4dYSVKIz4knDLog8SPXZZffOBcdFnhmyMik5olDxGKxg+UOZiVDJZ4mDiuqRvlC1mWF8xZntVJjrXvyFwbz2kqa6zRHEMcSEkhChIwayqjAQoRWjRQTKdqPefiHHX+SXDK5ymDkWEAVKiTHD/4Hv7s1C9EpNykYA7pfbPtjDOjZBZp12/4+tu3mCeB/Bq60tr/aAGY/Sa+3tfARMLANXFy3NXkPuNwBhp50yZAcyU9TKBSA9zP6phwweAv0rrm9tfZx+gBkqKvlG+DgEBgvUva6x7sDnb39e6bV3w/Hk3LJvzkusAAAAAZiS0dEAKgAqACotnJIKgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UJAgwQD/4jfM8AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAcUlEQVQ4y2N8+/btfwYKAAu6wKdPvxliQo4w3Lj5EUWcl5eVYfFKawYtbQEUcca3b9/+V5PfQJbttx4GMDAxUAgYqRYGpHrj1sMABgYGBsq9MGrAqAGDzAAeHlaiNUlKcmIaMH22GYoEPs1dfUbUy84ABqIhwQqzEjkAAAAASUVORK5CYII="},12038:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADNklEQVRYR61X23HTQBQ9V0pmQPrANIClCuL8McEenAriVEBSAU4FcSrAVEBSAaKCmJHD8IdSgZwOzIcWZhL5MqsXkryWZEf6XO3uOXvuvWfvErb4fGMw0oATJrbA6ICoFy1n9kBYEtOCAOeNcL813ZbqJvov3lqatn/JhBGATt385P+SGM5K6Bc2ZsuqNZUEfKM/IaKPWwCXsZbEPO2K+dUmEkoCPoYdMp5uM4kbHnvjNGaPxd6xSo01Ar551CPot6pTM/MDCA6YZlg9evbfnwsJKteAdQvEQzBGRNRVkFkywmM7+OHl/xUIRCc3Q78MHgPTxA7c6yZi+ObgDMwyfGUiSw50O69EkYDR94jooAzCq9WF/edu2gQ8nSMPAyO8JsJJYR2zZ4n5YTqWEUgS7nITCAPnTRXI7+EbA0niQ36Mma9sMZ/IsYiALDXS93/VZfszSDglJbJQxARKLKOYM09J0z6thWMHJaJwmKE0qVfpfsy4sYV7FhMwB8vCzwREJhMBX1ohsb7X0grc1yTtlQhf/zPjB1vMrSyZ2iRh9Bf5ymDGqSRQSBIGf7aD+biQSC2R8M3+lBA5a/RJLPLN/oxA73OxObWF65RlbyMca2qDv5Nfqn0OH+3U4domkbisrLZEAvZoYQ44D2QFbvUF9cxwlPG2JpBUzc7VsUZgLQQID8sXhsodd8mJxPDkXRMnIfN94yRsg8SGJKwvQxX4Lj6hLsOSEYGxsIRrV4HuWh2+yoiqrLhNEuWcYeC3Hbgd5WUkVWChH9Y1lI2VWK0uSNPkVZ81tcXLSHFbgdmxxPx0GxWqSjS/jzw9At2SB6xsSIhx3RXuedsk1hqSLKNVLRmzw2LvfOtwvHw3VvYTzPe2mMcPmrQjygioQhE5BhZEq0k3uLtpokaScLKZKTxk8tIrCcQxPOoB+izfoGSgERE4xJiFFD6kjikdTtf2D5gwZMYIhKyfyFxPxh3hsLItLyhhPM1UHXITBcpzpOVC7A0bPUzyi2WnDKKxUo0GTCLJmadpB6xaUv84jfv7KQijpkRiYDgQ+rgueWsJFBUZjKLnF9CTz/M0RJHEBPkK9uSzTdVRbRLsHxyj9Ix2AmO2AAAAAElFTkSuQmCC"},26948:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAhCAYAAAC1ONkWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGrSURBVFhH7Za/L0RBEMf9AToNFY1Odx0N3XU6nUqroCWhVmhJiOYSIqEguEIj4RrVkSgo5BKV5v0Ny/eS2Yx9s29n9zw5yRaf5N3O/vjczrx9O1IUhRlGslgsWSyWLBbL/xZ7uH83zYVL0+t9ivE6UIk15y/M2OiRmWucl+QgfbjfNdubnT54Rhvvk4JKDDKzjbOS3NrqXb9NYmqiZda/489PH6X5NKhrzCe3snxbknLBTrrzhYgSgxAtxuXaV6+2H54p9ZzYGlWnkksRXM5la6MT1d9FJVaVLr4YZHjapJ1DXVK8iqAYUuNODg72ut6ao8V9Y3nqfQTFpH8NEIMM/eZyfFf4GAL1RnEfA4mByfGWbZNqiI8hMCfvI5GcSkqHW+RcrtZUAukgXVq8+RGfmT6xMbfm+LhfK36ARajQObs7j95+khxi1BZCJQYwoe/gbF+/2X54WynG5ZByrRRQixHSwVmF9EJoiBYD+DCjVvgb6YIY1V2KXJIYB1ccpA87CU6PX+y1BzJSzWkYWCwEl9OcX0TtYgBykIq5QP6JWApZLJYsFsuQihXmC+/n9sPTMaO3AAAAAElFTkSuQmCC"},99657:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,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YWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjBmNWNlNTk2LTRlYzUtNGE1YS1hODE4LTliZWYzMjlkNWYwZCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNjI3OWRhZi1lNmQwLTQwY2QtYTFhMS01MmI2MzBiNzhlNmUiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZmIxYmM3Ny0wNTkxLTRmMjAtYjY0YS03M2JjNGVkZDdmYjMiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTYzMDU4NTE5MzQ0NDU3NCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjI0IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ1NWM5NTE4LTFkZjAtNDlhZi1hYTQ0LWM3MjgyNmEzODRkZiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0wOS0wMlQxNDoxOTo1MyIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4Jyt0xAAAABmJLR0QAqACoAKi2ckgqAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH5QkCDBM1EwL2vgAAALhJREFUOMtjfPv27X8GKgMWBgYGhpPHXjOUF59nePbsG0mabz0MwG1oWdE5hufPv1PXpTADcdlMKmBioAFgwSZITBgHBskydPYbE28ooTBWV+djWL/uMQMDAwNWg7F6n1CkLV1jCze4vPAsdcKUj48Vr8FkRxQ+gymKfVwGU5yk0A3GGfuEgJr8Bvon/hFuKAs1S6fRMMVtKA8PK1mGSUpy4jZ0+mwzuAJSDOzqM2JgYGBgYKRFFQ0AA/NQ5XLhY8oAAAAASUVORK5CYII="},93340:(A,g,I)=>{I.d(g,{Z:()=>e});const e=I.p+"assets/images/duplicate_objects_new-3322bd5c98731efa21758d94fee3d568.png"},58794:(A,g,I)=>{I.d(g,{Z:()=>e});const e=I.p+"assets/images/enable_disable-1b071dcfc2347caac337e29a44e0a7e2.png"},39407:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJUlEQVRYR+2WyxXCIBBFIT1Yj+60jNiFVmAZahvubCdFOB44kkMITN7wSTZmHbiXYd4kWm386I356i+wWgVur12vP3p/OQ1n/9pXEbBw6u4WTPTwJZoLTODu6J5EU4EoPJBoJsDCPYkmAhDctIOiZ3UBCfx6HPqqAlK4uYmZQCqvSyM7Bz4T4PLKCeTCJwJLeU0JlMBHASSvMYFSuBWANgnGp1kIrftFzXR7qoKYQDDDa8GxK/DViR7U0Xv8sDCdaYYMd3K3dIwheqqlONpigXA+hggp8o4Enh5E7tstlJDCowKSDp+0h6Ds0B+RpCdyTj5rwtxBUwJPXoEvw1WiFA4JpHqiBhwWCCVqwUUCTkKRPiATDk1w1T8iFArFMGeznDWbV+ALBrLyDLOJa8cAAAAASUVORK5CYII="},32312:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAdCAYAAADCdc79AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGDSURBVFhH7Za/LwRBFMf9AToNFQ0V1XU0dNepKFVKBS0JtUJ7hUQj8SOhILhCI+EaFRIFhVyi0uzfMO6z8TabnTc7s7lbEZnik2zm+/btd957k9mhJEnMXyIa8hEN+fhfhh7uP8ze7qPZ2eqk8MyaFhtKZUMvz59mdeXWTIwdmpHhAxU0YojVcpRRydD2Zkc1UAaV03K5CDLU7X6Zuca59bGlxRvTvnrL4nhuzl9Ycc2FyzRHPqcLryGXmf3WkxoPWiXJEWLKa2h97c5KTmXQ+MBGT5+ZOknJt0erFLlEd1FqiBYUk4K0STMrH/W966LUkLZLEH181D5pVEr0ogbMk+gaAzc0PXmc6UUNyCm6Rl8t04aXNbTTo1dLg75aBtqcLP8MtehUBcQM1DLUwEmabZxZybkmtHjQKkeOgRx7IJG2Ywa0ff2exdEO1qy43rshZiDIkKDt3Ee+jSFUMgRcmMyCdsIENGJqv1yL8KvBFUIVgOdf//2om2jIRzTkIxoqJzHfI5HkVapvWpQAAAAASUVORK5CYII="},75830:(A,g,I)=>{I.d(g,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TxSJVBzuIOESoThbEijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrElA1y0jFY2I2tyr2vCKAEPoRxajETD2RXszAc3zdw8fXuwjP8j735+hT8iYDfCLxHNMNi3iDeGbT0jnvE4dYSVKIz4knDLog8SPXZZffOBcdFnhmyMik5olDxGKxg+UOZiVDJZ4mDiuqRvlC1mWF8xZntVJjrXvyFwbz2kqa6zRHEMcSEkhChIwayqjAQoRWjRQTKdqPefiHHX+SXDK5ymDkWEAVKiTHD/4Hv7s1C9EpNykYA7pfbPtjDOjZBZp12/4+tu3mCeB/Bq60tr/aAGY/Sa+3tfARMLANXFy3NXkPuNwBhp50yZAcyU9TKBSA9zP6phwweAv0rrm9tfZx+gBkqKvlG+DgEBgvUva6x7sDnb39e6bV3w/Hk3LJvzkusAAAAAZiS0dEAKgAqACotnJIKgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UJAgwaMlyk2FQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAt0lEQVQ4y2N8+/btfwYaABZiFJ089pqhvPg8w7Nn3/Cqk5LiYujsNWQwtxJlYCTGxfYWOxmeP/9OlEulpLgYDhx3Y2AiRjGxhjIwMMB9xcRAI8BCiuJbDwPwyqvJb4CzmXApQFZEDqBZUAxsGPPwsDJ8+fKbqOCRlOREuJhQmE6fbQbXQMjQrj4j4l1sbiXKcPCE+yAOY1LCFFfaZqIkTEl2MTlhSt8wpkaYYnUxNcIUHTDSqmoCANDiQisuPl6hAAAAAElFTkSuQmCC"}}]);