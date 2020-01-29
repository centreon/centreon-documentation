# Mail Open ticket connector

## Table of contents
1. [How it works] (#how-it-works)
2. [Compatibility] (#compatibility)
3. [Requirements] (#requirements)
4. [Possibilities] (#possibilities)

## How it works <a name="how-it-works"></a>
The Mail provider sends a mail to a mailbox that an ITSM software will read and create a ticket based upon it

![architecture](img/ot-mail-architecture.png)

## Compatibility <a name="compatibility"></a>
This integration is compatible with any ITSM software that is able to create a ticket from a mail.

## Requirements
Before going any further, make sure that you correctly setup [centreon-open-ticket](https://documentation.centreon.com/docs/centreon-open-tickets/en/latest/installation/index.html)
into your Centreon instance

Our provider requires the following parameters:

| Parameter | Example of value |
| --------- | ---------------- |
| From | {$user.email} |
| To | |

## Possibilities <a name="possibilities"></a>
You can add custom headers when sending your email
