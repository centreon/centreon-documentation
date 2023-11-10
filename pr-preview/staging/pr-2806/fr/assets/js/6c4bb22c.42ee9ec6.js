"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26338],{68053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const a={id:"create-geo-view",title:"Cr\xe9er une vue g\xe9ographique"},u=void 0,l={unversionedId:"graph-views/create-geo-view",id:"version-23.10/graph-views/create-geo-view",title:"Cr\xe9er une vue g\xe9ographique",description:"Cr\xe9er une vue g\xe9ographique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/create-geo-views.md",sourceDirName:"graph-views",slug:"/graph-views/create-geo-view",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/create-geo-view",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/create-geo-views.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"create-geo-view",title:"Cr\xe9er une vue g\xe9ographique"},sidebar:"version-23.10/docs",previous:{title:"Cr\xe9er une vue standard",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/create-standard-view"},next:{title:"Afficher les vues",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/display-view"}},c={},p=[{value:"Cr\xe9er une vue g\xe9ographique",id:"cr\xe9er-une-vue-g\xe9ographique",level:2},{value:"Comment les limitations de contr\xf4le d&#39;acc\xe8s (ACL) sont g\xe9r\xe9es",id:"comment-les-limitations-de-contr\xf4le-dacc\xe8s-acl-sont-g\xe9r\xe9es",level:2},{value:"Comment les ressources sont affich\xe9es",id:"comment-les-ressources-sont-affich\xe9es",level:2},{value:"Regroupement",id:"regroupement",level:3},{value:"Ressources clignotantes",id:"ressources-clignotantes",level:3},{value:"Couches de donn\xe9es dans les Geoviews",id:"couches-de-donn\xe9es-dans-les-geoviews",level:2}],d={toc:p},g="wrapper";function m(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cr\xe9er-une-vue-g\xe9ographique"},"Cr\xe9er une vue g\xe9ographique"),(0,n.kt)("p",null,"Certains utilisateurs peuvent cr\xe9er des vues g\xe9ographiques (GeoViews) en utilisant l'interface web (administrateurs Centreon, administrateur Centreon MAP, utilisateur ayant le droit de cr\xe9er une vue) :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Allez \xe0 la page ",(0,n.kt)("strong",{parentName:"li"},"Supervision > Map"),' et cliquez sur le "+" de la section ',(0,n.kt)("strong",{parentName:"li"},"Geographique"),"."),(0,n.kt)("li",{parentName:"ol"},"Donnez un nom \xe0 la vue puis d\xe9finissez les ressources \xe0 afficher sur la vue."),(0,n.kt)("li",{parentName:"ol"},"Apr\xe8s avoir configur\xe9 ces param\xe8tres, les ressources appara\xeetront sur cette vue g\xe9ographique.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(3031).Z,width:"1665",height:"913"})),(0,n.kt)("p",null,"Les ressources suivantes peuvent \xeatre affich\xe9es sur une GeoView :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"H\xf4tes appartenant \xe0 un ou des groupes d'h\xf4tes"),(0,n.kt)("li",{parentName:"ul"},"Activit\xe9s M\xe9tier appartenant \xe0 une ou plusieurs Business Views"),(0,n.kt)("li",{parentName:"ul"},"Un ou plusieurs groupes d'h\xf4tes")),(0,n.kt)("p",null,"Pr\xe9requis : D\xe9finir les coordonn\xe9es (latitude et longitude) dans le formulaire de configuration des ressources pour l'h\xf4te, les groupes d'h\xf4tes ou l'activit\xe9 m\xe9tier."),(0,n.kt)("p",null,"Exemple avec un h\xf4te :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(24590).Z,width:"1863",height:"798"})),(0,n.kt)("h2",{id:"comment-les-limitations-de-contr\xf4le-dacc\xe8s-acl-sont-g\xe9r\xe9es"},"Comment les limitations de contr\xf4le d'acc\xe8s (ACL) sont g\xe9r\xe9es"),(0,n.kt)("p",null,"D\xe8s que vous donnez acc\xe8s \xe0 ",(0,n.kt)("strong",{parentName:"p"},"Supervision > Map")," ou \xe0 une vue personnalis\xe9e contenant un widget MAP, les GeoViews sont accessibles \xe0 tout utilisateur de Centreon.\nUn utilisateur ne verra que les ressources qu'il est autoris\xe9 \xe0 voir, en fonction de son profil ACL."),(0,n.kt)("h2",{id:"comment-les-ressources-sont-affich\xe9es"},"Comment les ressources sont affich\xe9es"),(0,n.kt)("p",null,"Lorsqu'une ressource (h\xf4te, groupe d'h\xf4tes ou activit\xe9 m\xe9tier) est positionn\xe9e sur une vue g\xe9ographique, elle est affich\xe9e sous la forme d'un cercle dont la couleur est d\xe9finie par les r\xe8gles suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"H\xf4te : \xe9tat le plus d\xe9favorable entre l'h\xf4te et ses services."),(0,n.kt)("li",{parentName:"ul"},"Groupes d'h\xf4tes : \xe9tat le plus d\xe9favorable des h\xf4tes appartenant aux groupes d'h\xf4tes."),(0,n.kt)("li",{parentName:"ul"},"Activit\xe9 m\xe9tier : \xe9tat actuel")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Ordre des pires \xe9tats : Critique (rouge) ",">"," Indisponible (rouge) ",">"," Alerte (orange) ",">","\nInconnu (gris) ",">"," Injoignable (gris) ",">"," OK (vert) ",">"," Disponible (vert) ",">"," En attente (bleu)")),(0,n.kt)("h3",{id:"regroupement"},"Regroupement"),(0,n.kt)("p",null,'Lorsque plusieurs ressources sont g\xe9ographiquement proches et que vous \xeates \xe0 un "certain" niveau de zoom, elles sont regroup\xe9es en un seul cercle affichant deux choses :'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"L'\xe9tat de l'objet le plus mauvais (affich\xe9 via une couleur, soit le vert, l'orange, le rouge ou le gris)."),(0,n.kt)("li",{parentName:"ul"},"Le nombre de ressources dans cet \xe9tat.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(6795).Z,width:"983",height:"577"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Ce comportement peut \xeatre d\xe9sactiv\xe9 dans les param\xe8tres globaux de Centreon MAP"),"."),(0,n.kt)("h3",{id:"ressources-clignotantes"},"Ressources clignotantes"),(0,n.kt)("p",null,'Si une ressource est dans un \xe9tat "non-ok", elle clignote.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Ce comportement peut \xeatre d\xe9sactiv\xe9 dans les param\xe8tres globaux de Centreon MAP"),"."),(0,n.kt)("h2",{id:"couches-de-donn\xe9es-dans-les-geoviews"},"Couches de donn\xe9es dans les Geoviews"),(0,n.kt)("p",null,"Centreon MAP vous donne la possibilit\xe9 d'afficher des \"couches de donn\xe9es\" suppl\xe9mentaires sur les cartes afin d'ajouter un contexte \xe0 l'\xe9tat de votre infrastructure informatique en temps r\xe9el."),(0,n.kt)("p",null,"Vous devez d'abord ajouter des couches de donn\xe9es dans les options de Centreon MAP, puis, si la couche de donn\xe9es est activ\xe9e, vous pouvez la rendre visible ou non en la cochant \xe0 l'aide de l'ic\xf4ne en haut \xe0 gauche."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemples")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(23633).Z,width:"1665",height:"886"})))}m.isMDXComponent=!0},6795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_marker_clustering_infos-8d6371de13ef678753683ffd43c7f8f6.png"},3031:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_view_creation-2573ca38e649337fce2674c09d719260.gif"},23633:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geoview_datalayers-c02e2edc3eb84c21c4db25cb62daebfa.gif"},24590:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/host_geocoord-a0c49fc260f8a1920e16e4742beb1f8d.png"}}]);