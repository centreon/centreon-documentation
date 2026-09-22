---
id: ot-bmc-remedy
title: BMC Remedy
---

> This provider is called **BMC ITSM** in the Centreon web interface.

## Feature information

|Open ticket | Close ticket (from Centreon to BMC Remedy) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✘ | ✘ |

## Prerequisites

### Network flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | BMC Remedy | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information:

- Username
- Password

The aforementioned account must be able to open a ticket through the SOAP API endpoint **arsys/services/'ARService?server=XXXX&webService=HPD_IncidentInterface_Create_WS** with the **IncidentInterface_Create_WS** namespace.
Some test commands that you can run from your Centreon central server are available in the [Test commands](#test-commands) section.

## Data sent

This open ticket provider can send the following information when opening a ticket:

- Action
- Status
- Source
- Service Type

## Test commands

The curl commands listed below must be run from your central server. You need to replace all elements between `<>`. For example `<URL>` may be replaced with `http://127.0.0.1/arsys/services/ARService?server=XXXX&webService=HPD_IncidentInterface_Create_WS`.

In the **--data** part of the curl command, all `<UPPER CASE>` information must be replaced with their appropriate values (therefore, `<TITLE>` may be replaced with "Test ticket" )

### Open a ticket

Keep in mind that the data in the command below is just an example and your footprints server may ask you to add mandatory data.

```bash
curl --location 'https://<URL>' \
--header 'text/xml;charset=UTF-8' \
--header 'SOAPAction: urn:<NAMESPACE>/HelpDesk_Submit_Service' \
--data '<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:<NAMESPACE>">
  <soapenv:Header>
    <urn:AuthenticationInfo>
      <urn:userName><USERNAME></urn:userName>
      <urn:password><PASSWORD></urn:password>
      <!--Optional:-->
      <urn:authentication/>
      <!--Optional:-->
      <urn:locale/>
      <!--Optional:-->
      <urn:timeZone/>
    </urn:AuthenticationInfo>
  </soapenv:Header>
  <soapenv:Body>
    <urn:HelpDesk_Submit_Service>
      <urn:Assigned_Group/>
      <urn:Assigned_Group_Shift_Name/>
      <urn:Assigned_Support_Company/>
      <urn:Assigned_Support_Organization/>
      <urn:Assignee/>
      <urn:Categorization_Tier_1/>
      <urn:Categorization_Tier_2/>
      <urn:Categorization_Tier_3/>
      <urn:CI_Name/>
      <urn:Closure_Manufacturer/>
      <urn:Closure_Product_Category_Tier1/>
      <urn:Closure_Product_Category_Tier2/>
      <urn:Closure_Product_Category_Tier3/>
      <urn:Closure_Product_Model_Version/>
      <urn:Closure_Product_Name/>
      <urn:Department/>
      <urn:First_Name/>
      <urn:Impact/>
      <urn:Last_Name/>
      <urn:Lookup_Keyword/>
      <urn:Manufacturer/>
      <urn:Product_Categorization_Tier_1/>
      <urn:Product_Categorization_Tier_2/>
      <urn:Product_Categorization_Tier_3/>
      <urn:Product_Model_Version/>
      <urn:Product_Name/>
      <urn:Reported_Source><SOURCE></urn:Reported_Source>
      <urn:Resolution/>
      <urn:Resolution_Category_Tier_1/>
      <urn:Resolution_Category_Tier_2/>
      <urn:Resolution_Category_Tier_3/>
      <urn:Service_Type><SERVICE TYPE></urn:Service_Type>
      <urn:Status><STATUS></urn:Status>
      <urn:z1D_Action><ACTION></urn:z1D_Action>
      <urn:Flag_Create_Request/>
      <urn:Description><TITLE></urn:Description>
      <urn:Detailed_Decription>
          <TICKET CONTENT>
      </urn:Detailed_Decription>
      <urn:Urgency/>
      <urn:z1D_WorklogDetails/>
      <urn:z1D_Details/>
      <urn:z1D_Activity_Type/>
      <urn:z1D_ActivityDate_tab/>
      <urn:z1D_CommunicationSource/>
      <urn:z1D_Secure_Log/>
      <urn:z1D_View_Access/>
      <urn:AccessMode/>
      <urn:AppInstanceServer/>
      <urn:AppInterfaceForm/>
      <urn:AppLogin/>
      <urn:AppPassword/>
      <urn:Area_Business/>
      <urn:Assigned_Group_ID/>
      <urn:Assigned_To/>
      <urn:Assignee_Groups/>
      <urn:Assignee_Login_ID/>
      <urn:Attachment_4_attachmentName/>
      <urn:Attachment_4_attachmentData/>
      <urn:Attachment_4_attachmentOrigSize/>
      <urn:Attachment_5_attachmentName/>
      <urn:Attachment_5_attachmentData/>
      <urn:Attachment_5_attachmentOrigSize/>
      <urn:Attachment_6_attachmentName/>
      <urn:Attachment_6_attachmentData/>
      <urn:Attachment_6_attachmentOrigSize/>
      <urn:Attachment_7_attachmentName/>
      <urn:Attachment_7_attachmentData/>
      <urn:Attachment_7_attachmentOrigSize/>
      <urn:Attachment_8_attachmentName/>
      <urn:Attachment_8_attachmentData/>
      <urn:Attachment_8_attachmentOrigSize/>
      <urn:Attachment_9_attachmentName/>
      <urn:Attachment_9_attachmentData/>
      <urn:Attachment_9_attachmentOrigSize/>
      <urn:BiiARS_01/>
      <urn:BiiARS_02/>
      <urn:BiiARS_03/>
      <urn:BiiARS_04/>
      <urn:BiiARS_05/>
      <urn:bOrphanedRoot/>
      <urn:CC_Business/>
      <urn:cell_name/>
      <urn:Client_Sensitivity/>
      <urn:Client_Type/>
      <urn:ClientLocale/>
      <urn:Company/>
      <urn:Component_ID/>
      <urn:Contact_Company/>
      <urn:Created_By/>
      <urn:Created_From_flag/>
      <urn:DatasetId/>
      <urn:DataTags/>
      <urn:Default_City/>
      <urn:Default_Country/>
      <urn:Desk_Location/>
      <urn:Direct_Contact_Company/>
      <urn:Direct_Contact_Department/>
      <urn:Direct_Contact_First_Name/>
      <urn:Direct_Contact_Internet_E-mail/>
      <urn:Direct_Contact_Last_Name/>
      <urn:Direct_Contact_Middle_Initial/>
      <urn:Direct_Contact_Organization/>
      <urn:Direct_Contact_Phone_Number/>
      <urn:Direct_Contact_Site/>
      <urn:Extension_Business/>
      <urn:first_name2/>
      <urn:Generic_Categorization_Tier_1/>
      <urn:Global_OR_Custom_Mapping/>
      <urn:Impact_OR_Root/>
      <urn:Incident_Number/>
      <urn:Incident_Entry_ID/>
      <urn:InstanceId/>
      <urn:Internet_E-mail/>
      <urn:last_name2/>
      <urn:Local_Business/>
      <urn:Login_ID/>
      <urn:Mail_Station/>
      <urn:MaxRetries/>
      <urn:mc_ueid/>
      <urn:Middle_Initial/>
      <urn:OptionForClosingIncident/>
      <urn:Organization/>
      <urn:Person_ID/>
      <urn:Phone_Number/>
      <urn:policy_name/>
      <urn:PortNumber/>
      <urn:Priority/>
      <urn:Priority_Weight/>
      <urn:Protocol/>
      <urn:ReconciliationIdentity/>
      <urn:Region/>
      <urn:Reported_Date/>
      <urn:Required_Resolution_DateTime/>
      <urn:Resolution_Method/>
      <urn:root_component_id_list/>
      <urn:root_incident_id_list/>
      <urn:Schema_Name/>
      <urn:Short_Description/>
      <urn:Site/>
      <urn:Site_Group/>
      <urn:Site_ID/>
      <urn:SRID/>
      <urn:SRInstanceID/>
      <urn:SRMS_Registry_Instance_ID/>
      <urn:SRMSAOIGuid/>
      <urn:status_incident/>
      <urn:Status_Reason/>
      <urn:status_reason2/>
      <urn:Submitter/>
      <urn:TemplateID/>
      <urn:TemplateID2/>
      <urn:Unavailability_Type/>
      <urn:Unavailability_Priority/>
      <urn:Unknown_User/>
      <urn:use_case/>
      <urn:Vendor_Group/>
      <urn:Vendor_Group_ID/>
      <urn:Vendor_Name/>
      <urn:Vendor_Organization/>
      <urn:Vendor_Ticket_Number/>
      <urn:VIP/>
      <urn:z1D_Char01/>
      <urn:z1D_Permission_Group_ID/>
      <urn:z1D_Permission_Group_List/>
      <urn:z1D_Char02/>
      <urn:z1D_CIUAAssignGroup/>
      <urn:z1D_CIUASupportCompany/>
      <urn:z1D_CIUASupportOrg/>
      <urn:z1D_Command/>
      <urn:z1D_SRMInteger/>
      <urn:z1D_SupportGroupID/>
      <urn:z1D_UAAssignmentMethod/>
      <urn:z2AF_Act_Attachment_1_attachmentName/>
      <urn:z2AF_Act_Attachment_1_attachmentData/>
      <urn:z2AF_Act_Attachment_1_attachmentOrigSize/>
      <urn:z2Attachment_2_attachmentName/>
      <urn:z2Attachment_2_attachmentData/>
      <urn:z2Attachment_2_attachmentOrigSize/>
      <urn:z2Attachment_3_attachmentName/>
      <urn:z2Attachment_3_attachmentData/>
      <urn:z2Attachment_3_attachmentOrigSize/>
      <urn:zTmpEventGUID/>
    </urn:HelpDesk_Submit_Service>
  </soapenv:Body>
</soapenv:Envelope>
'
```
