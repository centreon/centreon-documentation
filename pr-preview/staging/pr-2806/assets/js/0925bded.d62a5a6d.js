"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[25276],{56763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"openid",title:"Configuring connection via OpenId Connect"},u=void 0,d={unversionedId:"connect/openid",id:"version-23.10/connect/openid",title:"Configuring connection via OpenId Connect",description:"Centreon is compatible with OAuth 2.0/OpenId Connect authentication.",source:"@site/versioned_docs/version-23.10/connect/openid.md",sourceDirName:"connect",slug:"/connect/openid",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/connect/openid",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/connect/openid.md",tags:[],version:"23.10",lastUpdatedAt:1699630797,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"openid",title:"Configuring connection via OpenId Connect"},sidebar:"version-23.10/docs",previous:{title:"Configuring a Web SSO connection",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/connect/sso"},next:{title:"Configuring connection via SAML",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/connect/saml"}},c={},m=[{value:"Configure OpenID Connect authentication",id:"configure-openid-connect-authentication",level:2},{value:"Step 1: Enable authentication",id:"step-1-enable-authentication",level:3},{value:"Step 2: Configure Identity Provider access credentials",id:"step-2-configure-identity-provider-access-credentials",level:3},{value:"Step 3: Configure authentication conditions",id:"step-3-configure-authentication-conditions",level:3},{value:"Step 4: Manage user creation",id:"step-4-manage-user-creation",level:3},{value:"Step 5: Manage Authorizations",id:"step-5-manage-authorizations",level:3},{value:"Step 6: Manage Contact groups",id:"step-6-manage-contact-groups",level:3},{value:"Step 7: Configure your Identity Provider (IdP)",id:"step-7-configure-your-identity-provider-idp",level:3},{value:"Examples of configuration",id:"examples-of-configuration",level:2}],k={toc:m},g="wrapper";function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Centreon is compatible with OAuth 2.0/OpenId Connect authentication."),(0,a.kt)("p",null,"You can use Identity Providers (IdP); these include Microsoft Azure AD, Okta, Keycloak, LemonLDAP::NG or other IdPs\nthat are compatible with the Authorization Code Flow."),(0,a.kt)("h2",{id:"configure-openid-connect-authentication"},"Configure OpenID Connect authentication"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Authentication > OpenID Connect Configuration"),"."),(0,a.kt)("h3",{id:"step-1-enable-authentication"},"Step 1: Enable authentication"),(0,a.kt)("p",null,"Enable OpenID Connect authentication:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable OpenId Connect authentication"),": enables or disables OpenId Connect authentication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authentication mode"),": indicates if the authentication should be done using only OpenId Connect or using local\nauthentication as well (",(0,a.kt)("strong",{parentName:"li"},"Mixed"),"). In mixed mode, users created manually in Centreon (and not identified via Open ID) will also be able to log in.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'When setting the parameters, we recommend that you activate the "mixed" mode. This will allow you to retain access to\nthe local ',(0,a.kt)("inlineCode",{parentName:"p"},"admin")," account in the event of a misconfiguration.")),(0,a.kt)("h3",{id:"step-2-configure-identity-provider-access-credentials"},"Step 2: Configure Identity Provider access credentials"),(0,a.kt)("p",null,"Configure Identity Provider information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Base URL"),": defines the identity provider's base URL for OpenId Connect endpoints (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorization Endpoint"),": defines the authorization endpoint, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"/authorize")," (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Endpoint"),": defines the token endpoint, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"/token")," (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client ID"),": defines the Client ID (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client Secret"),": defines the Client secret (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scopes"),": defines the scopes of the identity provider, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"openid"),". Separate scopes by spaces.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Depending on the identity provider, it is necessary to enter several scopes in order to retrieve the claim that will\nidentify users. This is indicated in the provider's configuration documentation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Login attribute path"),": defines which of the variables returned by ",(0,a.kt)("strong",{parentName:"li"},"Introspection Token Endpoint")," or ",(0,a.kt)("strong",{parentName:"li"},"User Information Endpoint"),"\nmust be used to authenticate users. For example ",(0,a.kt)("inlineCode",{parentName:"li"},"sub")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"email"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"End Session Endpoint"),": defines the logout endpoint, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"/logout"),".")),(0,a.kt)("p",null,"Depending on your identity provider, set either of the following two endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Information Endpoint"),": defines the user information endpoint, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"/userinfo"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Introspection Token Endpoint"),": defines the introspection token endpoint, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"/introspect")," (mandatory).")),(0,a.kt)("p",null,"You can also configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use Basic Auth for Token Endpoint Authentication"),": the ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization: Basic")," method will be used. Enable this option if your identity provider requires it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disable verify peer"),": allows you to disable SSL peer validation. The identity provider's certificate will not be checked: use this option for test purposes only.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can define a full URL for the endpoints in case the base of the URL is different from the others.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can enable ",(0,a.kt)("strong",{parentName:"p"},"Authentication debug")," through the ",(0,a.kt)("strong",{parentName:"p"},"Administration > Parameters > Debug")," menu to understand\nauthentication failures and improve your setup.")),(0,a.kt)("h3",{id:"step-3-configure-authentication-conditions"},"Step 3: Configure authentication conditions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can whitelist or blacklist IP addresses. If you leave the first two fields empty, all IP addresses will be authorized to access the Centreon interface."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trusted client addresses"),": If you enter IP addresses in this field, only these IP addresses will be allowed to access the Centreon interface. All other IP addresses will be blocked. IP addresses must be separated by commas."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Blacklist client addresses"),": These IP addresses will be blocked. All other IP addresses will be allowed to access the Centreon interface."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can also define conditions according to which users will be allowed to log in or not, based on the data received by a particular endpoint."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Activate ",(0,a.kt)("strong",{parentName:"p"},"Enable conditions on identity provider"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Define which attribute from which endpoint will be used to validate the conditions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"Define authorized conditions values"),", define which will be the authorized values returned by this endpoint. If you enter several values, all will have to be met for the condition to be validated. All users that try to connect with another value will be unable to log in."),(0,a.kt)("p",{parentName:"li"},"In the example below, the ",(0,a.kt)("strong",{parentName:"p"},"Conditions attribute path")," is ",(0,a.kt)("strong",{parentName:"p"},"status")," and ",(0,a.kt)("strong",{parentName:"p"},"Define authorized conditions values")," is ",(0,a.kt)("strong",{parentName:"p"},"activated"),". If the ",(0,a.kt)("strong",{parentName:"p"},"Introspection endpoint")," gives you the following response, then the user is allowed to log in:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n       ...\n       "name": "OpenId Connect OIDC",\n  "given_name": "OpenId Connect",\n  "family_name": "OIDC",\n  "preferred_username": "oidc",\n  "email": "oidc@localhost",\n  "email_verified": false,\n  ...\n  "status": "activated"\n}\n')),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Currently, only character string values can be used.")))))),(0,a.kt)("h3",{id:"step-4-manage-user-creation"},"Step 4: Manage user creation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Users automatic management",label:"Automatic management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn on ",(0,a.kt)("strong",{parentName:"p"},"Enable auto import"),", users that log in to Centreon for the first time will be created in the Centreon configuration. (Turning the option on does not automatically import all users from your infrastructure.)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable auto import"),": enables or disables automatic user import.  If auto import is disabled, you will have to ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/contacts-create"},"create each user manually")," before they can log in."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contact template"),": select a ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/contacts-templates"},"contact template")," that will be applied to newly imported users.\nIn particular, this allows you to manage the default configuration of the ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/notif-configuration"},"notifications"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Email attribute path"),": defines which of the variables returned by ",(0,a.kt)("strong",{parentName:"li"},"Introspection Token Endpoint")," or ",(0,a.kt)("strong",{parentName:"li"},"User Information Endpoint"),"\nmust be used to get the user's email address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fullname attribute path"),": defines which of the variables returned by ",(0,a.kt)("strong",{parentName:"li"},"Introspection Token Endpoint")," or ",(0,a.kt)("strong",{parentName:"li"},"User Information Endpoint"),"\nmust be used to get the user's full name."))),(0,a.kt)(o.Z,{value:"Users manual management",label:"Manual management",mdxType:"TabItem"},(0,a.kt)("p",null,"On page ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Users > Contacts/Users"),", ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/contacts-create"},"create the users")," that will log on to Centreon using OpenID."))),(0,a.kt)("h3",{id:"step-5-manage-authorizations"},"Step 5: Manage Authorizations"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Role automatic management",label:"Automatic management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn on ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", users who log in to Centreon will be automatically ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/administration/access-control-lists"},"granted rights"),", as they will be linked to ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/administration/access-control-lists#creating-an-access-group"},"access groups")," according to the rules you have defined."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define which attribute from which endpoint will be used to retrieve values for enforcing relationships with access groups."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apply only first role"),": If several roles are found for a specific user in the identity provider's information, then only the first role will be applied. If the option is turned off, all roles will be applied."),(0,a.kt)("li",{parentName:"ul"},"Match an attribute retrieved from the identity provider with the access group you want the user to belong to.")),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("strong",{parentName:"p"},"Introspection endpoint")," gives you the following response and ",(0,a.kt)("strong",{parentName:"p"},"Apply only first role")," is enabled. The ",(0,a.kt)("strong",{parentName:"p"},"Roles attribute path")," will\nbe ",(0,a.kt)("strong",{parentName:"p"},"realm_access.roles")," and ",(0,a.kt)("strong",{parentName:"p"},"Define the relation between roles and ACL access groups")," will establish a relationship\nbetween the value ",(0,a.kt)("strong",{parentName:"p"},"centreon-editor")," and a defined access group in Centreon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "realm_access": {\n        "roles": ["centreon-editor", "centreon-admin", "user"]\n    },\n    ...\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When retrieving attributes, Centreon will merge the attributes retrieved from the JWT (JSON Web Token) with those\nretrieved from the selected entry point, giving priority to the JWT attributes. Thus, if an attribute is available in\nthe JWT and in the selected entry point, then the selected attribute will be the one coming from the JWT.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each time the user logs in, authorization management is reinitialized to take into account any new information from the\nidentity provider."))),(0,a.kt)(o.Z,{value:"Role manual management",label:"Manual management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn off ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", you have to ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/administration/access-control-lists"},"grant users rights")," manually by linking them to ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/administration/access-control-lists#creating-an-access-group"},"access groups"),"."))),(0,a.kt)("h3",{id:"step-6-manage-contact-groups"},"Step 6: Manage Contact groups"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Groups automatic management",label:"Automatic management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn on ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", users who log in to Centreon will be attached to the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/contacts-groups#contact-groups"},"contact groups")," you have defined."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define which attribute from which endpoint will be used to retrieve values to create relationships with access groups."),(0,a.kt)("li",{parentName:"ul"},"Match the attributes retrieved from the identity provider with the contact groups you want the user to belong to.")),(0,a.kt)("p",null,"For example, if the ",(0,a.kt)("strong",{parentName:"p"},"Introspection endpoint")," gives you the following response, the ",(0,a.kt)("strong",{parentName:"p"},"Groups attribute path")," will\nbe ",(0,a.kt)("strong",{parentName:"p"},"groups")," and ",(0,a.kt)("strong",{parentName:"p"},"Define the relation between roles and contact groups")," will define a relationship\nbetween the value ",(0,a.kt)("strong",{parentName:"p"},"Windows")," and a defined contact group in Centreon, then between ",(0,a.kt)("strong",{parentName:"p"},"Linux")," and another contact group, etc:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "groups": ["Windows", "Linux", "DBA"],\n    ...\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When retrieving attributes, Centreon will merge the attributes retrieved from the JWT (JSON Web Token) with those\nretrieved from the selected entry point, giving priority to the JWT attributes. Thus, if an attribute is available in\nthe JWT and in the selected entry point, then the selected attribute will be the one coming from the JWT.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each time the user logs in, group management is reinitialized to take into account any new information from the identity provider."))),(0,a.kt)(o.Z,{value:"Groups manual management",label:"Manual management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn off ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", you have to manage the relationship between contact and ","[contact groups]"," manually (../monitoring/basic-objects/contacts-groups.md#contact-groups)."))),(0,a.kt)("h3",{id:"step-7-configure-your-identity-provider-idp"},"Step 7: Configure your Identity Provider (IdP)"),(0,a.kt)("p",null,"Configure your IdP to add the Centreon application to use the OpenID Connect protocol to authenticate your users,\nand to authorize the following ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect URI")," to forward your connected users to Centreon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"{protocol}://{server}:{port}/centreon/authentication/providers/configurations/openid\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"{protocol}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"{server}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{port}")," with the URI to access to your Centreon server.\nFor example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://centreon.domain.net/centreon/authentication/providers/configurations/openid"))),(0,a.kt)("h2",{id:"examples-of-configuration"},"Examples of configuration"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Microsoft Azure AD",label:"Microsoft Azure AD",mdxType:"TabItem"},(0,a.kt)("p",null,"Here is an example configuration for Microsoft Azure Active Directory:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base Url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/$%7BtenantId%7D/oauth2/v2.0"},"https://login.microsoftonline.com/${tenantId}/oauth2/v2.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authorization Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/authorize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Information Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://graph.microsoft.com/oidc/userinfo"},"https://graph.microsoft.com/oidc/userinfo"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"End Session Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope"),(0,a.kt)("td",{parentName:"tr",align:null},"openid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Login claim value"),(0,a.kt)("td",{parentName:"tr",align:null},"email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientId}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientSecret}")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"${tenantId}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientId}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientSecret}")," with your own values."))),(0,a.kt)(o.Z,{value:"Okta",label:"Okta",mdxType:"TabItem"},(0,a.kt)("p",null,"Here is an example configuration for Okta:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base Url"),(0,a.kt)("td",{parentName:"tr",align:null},"https://${theIdPdomain}/oauth2/v1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authorization Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/authorize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Introspection Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/introspect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Information Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/userinfo")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"End Session Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/logout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope"),(0,a.kt)("td",{parentName:"tr",align:null},"profile openid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Login claim value"),(0,a.kt)("td",{parentName:"tr",align:null},"username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientId}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientSecret}")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"${theIdPdomain}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientId}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientSecret}")," with your own values."))),(0,a.kt)(o.Z,{value:"Keycloak",label:"Keycloak",mdxType:"TabItem"},(0,a.kt)("p",null,"Here is an example configuration for Keycloak:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base Url"),(0,a.kt)("td",{parentName:"tr",align:null},"https://${theIdPdomain}:8080/auth/realms/master/protocol/openid-connect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authorization Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/auth")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Introspection Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/token/introspect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Information Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"End Session Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/logout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope"),(0,a.kt)("td",{parentName:"tr",align:null},"openid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Login claim value"),(0,a.kt)("td",{parentName:"tr",align:null},"email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientId}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientSecret}")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"${theIdPdomain}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientId}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientSecret}")," with your own values."))),(0,a.kt)(o.Z,{value:"LemonLDAP::NG",label:"LemonLDAP::NG",mdxType:"TabItem"},(0,a.kt)("p",null,"Here is an example configuration for LemonLDAP::NG:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base Url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://auth.example.com/oauth2"},"http://auth.example.com/oauth2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authorization Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/authorize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Introspection Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/introspect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Information Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/userinfo")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"End Session Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope"),(0,a.kt)("td",{parentName:"tr",align:null},"openid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Login claim value"),(0,a.kt)("td",{parentName:"tr",align:null},"email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientId}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"${clientSecret}")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.example.com"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientId}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"${clientSecret}")," with your own values."))),(0,a.kt)(o.Z,{value:"Others",label:"Others",mdxType:"TabItem"},(0,a.kt)("p",null,"Most of the service providers have one URL presenting the configuration parameters configuration as defined by\n",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0#ProviderConfig"},"the protocol"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "issuer": "https://server.example.com",\n    "authorization_endpoint": "https://server.example.com/connect/authorize",\n    "token_endpoint": "https://server.example.com/connect/token",\n    "token_endpoint_auth_methods_supported": ["client_secret_basic", "private_key_jwt"],\n    "token_endpoint_auth_signing_alg_values_supported": ["RS256", "ES256"],\n    "userinfo_endpoint": "https://server.example.com/connect/userinfo",\n    "check_session_iframe": "https://server.example.com/connect/check_session",\n    "end_session_endpoint": "https://server.example.com/connect/end_session",\n    "jwks_uri": "https://server.example.com/jwks.json",\n    "registration_endpoint": "https://server.example.com/connect/register",\n    "scopes_supported": ["openid", "profile", "email", "address", "phone", "offline_access"],\n    "response_types_supported": ["code", "code id_token", "id_token", "token id_token"],\n    "acr_values_supported": ["urn:mace:incommon:iap:silver", "urn:mace:incommon:iap:bronze"],\n    "subject_types_supported": ["public", "pairwise"],\n    "userinfo_signing_alg_values_supported": ["RS256", "ES256", "HS256"],\n    "userinfo_encryption_alg_values_supported": ["RSA1_5", "A128KW"],\n    "userinfo_encryption_enc_values_supported": ["A128CBC-HS256", "A128GCM"],\n    "id_token_signing_alg_values_supported": ["RS256", "ES256", "HS256"],\n    "id_token_encryption_alg_values_supported": ["RSA1_5", "A128KW"],\n    "id_token_encryption_enc_values_supported": ["A128CBC-HS256", "A128GCM"],\n    "request_object_signing_alg_values_supported": ["none", "RS256", "ES256"],\n    "display_values_supported": ["page", "popup"],\n    "claim_types_supported": ["normal", "distributed"],\n    "claims_supported": ["sub", "iss", "auth_time", "acr",\n        "name", "given_name", "family_name", "nickname",\n        "profile", "picture", "website",\n        "email", "email_verified", "locale", "zoneinfo",\n        "http://example.info/claims/groups"\n    ],\n    "claims_parameter_supported": true,\n    "service_documentation": "http://server.example.com/connect/service_documentation",\n    "ui_locales_supported": ["en-US", "en-GB", "en-CA", "fr-FR", "fr-CA"]\n}\n')),(0,a.kt)("p",null,"Retrieve the following parameters to configure your Centreon:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"issuer (Base Url)"),(0,a.kt)("li",{parentName:"ul"},"authorization_endpoint"),(0,a.kt)("li",{parentName:"ul"},"token_endpoint"),(0,a.kt)("li",{parentName:"ul"},"userinfo_endpoint"),(0,a.kt)("li",{parentName:"ul"},"end_session_endpoint"),(0,a.kt)("li",{parentName:"ul"},"scopes_supported"),(0,a.kt)("li",{parentName:"ul"},"claims_supported (Login claim value)")))))}h.isMDXComponent=!0}}]);