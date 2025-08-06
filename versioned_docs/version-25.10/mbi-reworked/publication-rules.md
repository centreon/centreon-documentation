---
id: publication-rules
title: Publication rules
---

Publication rules allow you to send generated reports using different protocols such as sending it by email (SMTP). Note that using SMTP requires an [emailing server already installed](../administration/postfix.md). 

A publication rule named **Default** is automatically created when you install MBI. This rule is mandatory and can not be deleted.

Publication rules are created in **Reporting > Monitoring Business Intelligence > Publication rules**

The available protocols for publication rules are:
* CIFS which allows you to transfer files between local nodes
* Dropbox, a cloud storage service to access them from any location.
* FTP which allows you to transfer files through the internet, it is usually disregarded in favor of SFTP
* Local
* SFTP, a more secure version of SFTP; allows you to transfer files through the internet
* SMTP is the protocol used to send and receive emails.


The **global** field allows you to make a publication rule be applied to all jobs. Global publication rules do not appear for selection in the **Publication** tab when configuring a job because their configuration is already applied.
