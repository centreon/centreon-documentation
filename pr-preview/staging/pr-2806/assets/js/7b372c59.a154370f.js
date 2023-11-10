"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36961],{25093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),i=a(51715),r=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const c={id:"cloud-microsoft-office365-management",title:"Office 365 Management"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-microsoft-office365-management",id:"integrations/plugin-packs/procedures/cloud-microsoft-office365-management",title:"Office 365 Management",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-microsoft-office365-management",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management.md",tags:[],version:"current",frontMatter:{id:"cloud-microsoft-office365-management",title:"Office 365 Management"},sidebar:"pp",previous:{title:"Office 365 Azure AD",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-azuread"},next:{title:"Office365 Exchange",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Register an application in Azure AD",id:"register-an-application-in-azure-ad",level:3},{value:"Configure your application properties in Azure AD",id:"configure-your-application-properties-in-azure-ad",level:4},{value:"Generate a new key for your application",id:"generate-a-new-key-for-your-application",level:4},{value:"Configure an X.509 certificate to enable service-to-service calls",id:"configure-an-x509-certificate-to-enable-service-to-service-calls",level:4},{value:"Specify the permissions your app requires to access the Office 365 Management APIs",id:"specify-the-permissions-your-app-requires-to-access-the-office-365-management-apis",level:4},{value:"Add permissions to Microsoft Graph",id:"add-permissions-to-microsoft-graph",level:4},{value:"Request access tokens from Azure AD",id:"request-access-tokens-from-azure-ad",level:4},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin through the CLI and what are the main parameters for ?",id:"how-to-test-the-plugin-through-the-cli-and-what-are-the-main-parameters-for-",level:4},{value:"When executing the command, I get the following error message: <code>UNKNOWN: Cannot decode json response</code>",id:"when-executing-the-command-i-get-the-following-error-message-unknown-cannot-decode-json-response",level:3},{value:"How do I get a description of the available options ?",id:"how-do-i-get-a-description-of-the-available-options-",level:3}],f={toc:d},h="wrapper";function g(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},f,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Office 365 is a line of online subscription services offered by Microsoft in their Microsoft Office product suite.\nOffice 365 covers document creation and management, emailing, video conferencing and many more collaboration offerings.\nThe Centreon Plugin relies on the Office 365 Graph API to collect and monitor the Office 365 information and metrics."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application credentials: Expiration of key and password credentials for each applications."),(0,n.kt)("li",{parentName:"ul"},"Office services: Applications available on the Office 365 portal: Exchange Online, Microsoft Intune, Skype for Business, Mobile Device Management for Office 365, OneDrive for Business, SharePoint Online, Microsoft Teams, etc..."),(0,n.kt)("li",{parentName:"ul"},"Subscriptions: Commercial subscriptions that an organization has acquired")),(0,n.kt)("h2",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"App-Credentials",label:"App-Credentials",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"password status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"app_name~key_id"),"#application.password.expires.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"key status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"app_name~key_id"),"#application.key.expires.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(r.Z,{value:"Service-Status",label:"Service-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"service status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(r.Z,{value:"Subscriptions",label:"Subscriptions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"subscription status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"skuPartNumber"),"#subscription.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"skuPartNumber"),"#subscription.free.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"skuPartNumber"),"#subscription.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"More information is available in the official Microsoft documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/use-the-api?context=graph%2Fapi%2F1.0&view=graph-rest-1.0"},"https://docs.microsoft.com/en-us/graph/use-the-api?context=graph%2Fapi%2F1.0&view=graph-rest-1.0")),(0,n.kt)("h3",{id:"register-an-application-in-azure-ad"},"Register an application in Azure AD"),(0,n.kt)("p",null,"The Office 365 Management APIs use Azure AD to provide secure authentication to Office 365 tenant data.\nTo access the Office 365 Management APIs, you need to register your app in Azure AD, and as part of the configuration, you will specify the permission levels your app needs to access the APIs."),(0,n.kt)("p",null,"To register your app in Azure AD, you need a subscription to Office 365 and a subscription to Azure that has been associated with your Office 365 subscription.\nAfter you have a Microsoft tenant with the proper subscriptions, you can register your application in Azure AD."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sign into the Azure management portal, using the credential of your Microsoft tenant that has the subscription to Office 365 you wish to use.\nYou can also access the Azure Management Portal via a link that appears in the left navigation pane in the Office admin portal."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation panel, choose ",(0,n.kt)("em",{parentName:"li"},"Active Directory"),". Make sure the ",(0,n.kt)("em",{parentName:"li"},"Directory")," tab is selected, and then select the directory name."),(0,n.kt)("li",{parentName:"ol"},"On the directory page, select ",(0,n.kt)("em",{parentName:"li"},"Applications"),". Azure AD displays a list of the applications currently installed in your tenancy."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("em",{parentName:"li"},"Add"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("em",{parentName:"li"},"Add an application my organization is developing"),"."),(0,n.kt)("li",{parentName:"ol"},'Enter the name of your application and specify the Type as "CENTREON API WEB".'),(0,n.kt)("li",{parentName:"ol"},"Enter the appropriate App properties:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"SIGN-ON URL"),": The URL where users can sign in and use your app. You can change this later as needed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"APP ID URI"),". The URI used as a unique logical identifier for your app. The URI must be in a verified custom domain for an external user to grant your app access to their data in Windows Azure AD. ")),(0,n.kt)("h4",{id:"configure-your-application-properties-in-azure-ad"},"Configure your application properties in Azure AD"),(0,n.kt)("p",null,"Now that your application is registered, there are several important properties you must specify that determine how your application functions within Azure AD\nand how tenant admins will grant consent to allow your application to access their data by using the Office 365 Management APIs."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"CLIENT ID"),": This value is automatically generated by Azure AD. Your application will use this value when requesting consent from tenant admins and when requesting app-only tokens from Azure AD."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"APPLICATION IS MULTI-TENANT"),": This property must be set to YES to allow tenant admins to grant consent to your app to access their data by using the Office 365 Management APIs.\nIf this property is set to NO, your application will only be able to access your own tenant's data."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"REPLY URL"),": This is the URL that a tenant admin will be redirected to after granting consent to allow your application to access their data by using the Office 365 Management APIs.\nYou can configure multiple reply URLs as needed. Azure automatically sets the first one to match the sign-on URL you specified when you created the application, but you can change this value as needed.")),(0,n.kt)("p",null,"Be sure to choose ",(0,n.kt)("em",{parentName:"p"},"Save")," after making any changes to these properties."),(0,n.kt)("h4",{id:"generate-a-new-key-for-your-application"},"Generate a new key for your application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Azure Management Portal, select your application and choose ",(0,n.kt)("em",{parentName:"li"},"Configure")," in the top menu. Scroll down to ",(0,n.kt)("em",{parentName:"li"},"keys"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the duration for your key, and choose ",(0,n.kt)("em",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},"Azure displays the app secret only after saving it. Select the Clipboard icon to copy the client secret to the Clipboard.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Warning : As the app secret will only be displayed once, remember to save it for later.")))),(0,n.kt)("h4",{id:"configure-an-x509-certificate-to-enable-service-to-service-calls"},"Configure an X.509 certificate to enable service-to-service calls"),(0,n.kt)("p",null,"You must configure an X.509 certificate with your application to be used as client credentials when requesting app-only access tokens from Azure AD. There are two steps to the process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Obtain an X.509 certificate: You can use a self-signed certificate or a certificate issued by publicly trusted certificate authority."),(0,n.kt)("li",{parentName:"ul"},"Modify your application manifest to include the thumbprint and public key of your certificate.")),(0,n.kt)("h4",{id:"specify-the-permissions-your-app-requires-to-access-the-office-365-management-apis"},"Specify the permissions your app requires to access the Office 365 Management APIs"),(0,n.kt)("p",null,"Finally, you need to specify exactly what permissions your app requires of the Office 365 Management APIs. To do so, you add access to the Office 365 Management APIs to your app, and then you specify the permission(s) you need:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Azure Management Portal, select your application, and choose ",(0,n.kt)("em",{parentName:"li"},"Configure")," in the top menu.\nScroll down to ",(0,n.kt)("em",{parentName:"li"},"permissions to other applications"),", and choose ",(0,n.kt)("em",{parentName:"li"},"Add application"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("em",{parentName:"li"},"Office 365 Management APIs")," so that it appears in the ",(0,n.kt)("em",{parentName:"li"},"Selected")," column, and then select the check mark in the lower right\nto save your selection and return to the main configuration page for your application."),(0,n.kt)("li",{parentName:"ol"},"The Office Management APIs now appear in the list of applications to which your application requires permissions.\nUnder both ",(0,n.kt)("em",{parentName:"li"},"Application Permissions")," and ",(0,n.kt)("em",{parentName:"li"},"Delegated Permissions"),", select the permissions your application requires.\nRefer to the specific API reference for more details about each permission.")),(0,n.kt)("h4",{id:"add-permissions-to-microsoft-graph"},"Add permissions to Microsoft Graph"),(0,n.kt)("p",null,"You also need to specify permissions for ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Graph")," for both ",(0,n.kt)("em",{parentName:"p"},"Application")," and ",(0,n.kt)("em",{parentName:"p"},"Delegated")," type of permission. You will have to set ",(0,n.kt)("strong",{parentName:"p"},"ServiceHealth.Read.All"),"."),(0,n.kt)("h4",{id:"request-access-tokens-from-azure-ad"},"Request access tokens from Azure AD"),(0,n.kt)("p",null,"After a tenant admin grants consent, your application receives an authorization code as a query string parameter\nwhen Azure AD redirects the tenant admin to your designated URL."),(0,n.kt)("p",null,"More information on how to get the token based on the authorization code is detailed here:\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis#request-an-access-token-using-the-authorization-code"},"https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis#request-an-access-token-using-the-authorization-code")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Office 365")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Office 365")," ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-microsoft-office365-management \n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,'Log into Centreon and add a new host through "Configuration > Hosts".\nIn the host configuration form, apply the "Cloud-Microsoft-Office365-Management-Api-Custom" template and set the macros marked as mandatory below:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OFFICE365TENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Office 365 tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Office 365 client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Office 365 client secret")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h4",{id:"how-to-test-the-plugin-through-the-cli-and-what-are-the-main-parameters-for-"},"How to test the Plugin through the CLI and what are the main parameters for ?"),(0,n.kt)("p",null,"Once the Centreon plugin installed, you can test it directly on the Centreon Poller by logging into the CLI with the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_management_api.pl \\\n    --plugin=cloud::microsoft::office365::management::plugin \\\n    --mode=service-status \\\n    --tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24' \\\n    --client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d' \\\n    --client-secret='9/kRTASjPoy9FJfQZg6iznX\\AkzCGertBgNq5r3tPfECJfKxj6zA=' \\\n    --filter-service-name='Exchange Online' \\\n    --critical-status='%{status} !~ /serviceOperational|serviceRestored/i' \\\n    --verbose\n\nOK: Service 'Exchange Online' status is 'serviceOperational' |\n")),(0,n.kt)("p",null,"The above command requests the Office 365 Graph API (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::microsoft::office365::management::plugin"),")\nwith a set of credentials previously defined (",(0,n.kt)("inlineCode",{parentName:"p"},"--tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24' --client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d' \n--client-secret='9/kRTASjPoy9FJfQZg6iznX\\AkzCGertBgNq5r3tPfECJfKxj6zA='"),").\nThis command aims to check  the status of the ",(0,n.kt)("em",{parentName:"p"},"Exchange Online")," service (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=service-status --filter-service-name='Exchange Online'"),").\nA CRITICAL alert would be triggered if the ",(0,n.kt)("em",{parentName:"p"},"Exchange Online")," returned service status is not ",(0,n.kt)("em",{parentName:"p"},"serviceOperational")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status}"),")."),(0,n.kt)("h3",{id:"when-executing-the-command-i-get-the-following-error-message-unknown-cannot-decode-json-response"},"When executing the command, I get the following error message: ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Cannot decode json response")),(0,n.kt)("p",null,"If you receive this message, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"--debug")," option to the command to get more information about the error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_management_api.pl\n    --plugin=cloud::microsoft::office365::management::plugin\n    --mode=service-status\n    --tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'\n    --client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'\n    --client-secret='9/kRTASjPoy9FJfQZg6iznX\\AkzCGertBgNq5r3tPfECJfKxj6zA='\n    --filter-service-name='Exchange Online'\n    --warning-status='' \\\n    --critical-status='%{status} !~ /serviceOperational|serviceRestored/i' \\\n    --debug \\\n    --verbose\n\nUNKNOWN: Cannot decode json response: malformed JSON string, neither tag, array, object, number, \nstring or atom, at character offset 0 (before \"System.Collections.G...\") at \n/usr/lib/centreon/plugins/centreon_office365_management_api.pl line xxx\n")),(0,n.kt)("p",null,"Most common reasons for this message are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check that the ",(0,n.kt)("em",{parentName:"li"},"tenant id")," / ",(0,n.kt)("em",{parentName:"li"},"client id")," / ",(0,n.kt)("em",{parentName:"li"},"client secret")," credentials are properly set. If any modification is made on\nthe associated privileges, delete the Plugin cache file: ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/centreon/centplugins/office365_managementapi_*"),"."),(0,n.kt)("li",{parentName:"ul"},"The Plugin cannot connect to the Office 365 API: there might be a third-party device (Firewall, Proxy...) dropping the flows."),(0,n.kt)("li",{parentName:"ul"},'The "lwp" web library used by the Plugin in unable to properly handle the request. Prevent this behavior by using the "curl" backend.\nJust add the following option ',(0,n.kt)("inlineCode",{parentName:"li"},"--http-backend=curl")," to the command.")),(0,n.kt)("h3",{id:"how-do-i-get-a-description-of-the-available-options-"},"How do I get a description of the available options ?"),(0,n.kt)("p",null,"The whole list of options and their usage can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_management_api.pl \\\n    --plugin=cloud::microsoft::office365::management::plugin \\\n    --mode=service-status \\\n    --help\n")))}g.isMDXComponent=!0}}]);