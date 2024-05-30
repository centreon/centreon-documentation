---
id: ram
title: Granting users rights on resources
---

By default, ... 

* Administrators can see all resources.
* For all other users (i.e. users with a **User** or **Editor** role), administrators must define which [resources](../resources/glossary.md#resource) they can see.
* Only administrators can access the **Resource Acces Management** screen.

Rights are granted by creating access rules. You can create as many rules as you want. If a user is mentioned in two access rules with different rights, the less restrictive rule will take precedence.

## Creating an access rule

1. Go to **Administration > ACL > Resource Access Management**, and then click the **Add** button above the list, on the left. A window appears.
2. Enter a name and a description for the rule.
3. In the **Add resource datasets** section, define which resources you want to grant access to:
   * Select a type of resource from the list, then select which of the corresponding resources you want to allow access to.
   * To refine your selection, click **Add filter** and select narrower criteria: the second filter only shows the resources that depend from the first filter. You can narrow your selection down to metrics.
   * If you want to add another batch of resources that do not depend on any of the criteria defined above, click **Add new dataset**. The list will propose all types of resources again.

   > You can also select **All resources**: users will be able to see any resources created afterwards automatically.

4. In the **Contacts/contact groups** section, define which users will be able to see these resources. If you select **All contacts**, the rule will apply to all existing contacts, and also to any contacts created in the future. Bear in mind that users are managed using the [CIAM](../ciam/ciam.md).

   > Contact groups will be implemented soon.

5. Click **Save**. The new rule appears in the list. (is it applied straightaway?)

## Managing access rules

* To duplicate a rule, click the **Duplicate** button for this rule in the **Actions** column.
* To delete a particular rule, click the **Delete** button for this rule in the **Actions** column.
* To delete several rules, select them by checking the corresponding boxes in the left column, then click the **Delete** button above the list.
* You can disable a rule instead of deleting it if you think you might use it again later: use the switch for this rule in the **Status** column. The designated users will no longer be able to see the corresponding resources.
