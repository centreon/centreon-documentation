---
id: troubleshooting
title: Troubleshooting MBI
---

## How do I know MBI is properly configurated?

Use the following command to verify MBI is properly configured

```shell
/usr/share/centreon-bi/tools/diagnostic.sh | less
```

Use this command to verify the CBIS service status

```shell
systemctl status cbis
```

**expected result**

## The report I generated is empty

A cronjob is launched at approximately 4h30 AM that will compile and calculate all the data of the day before. CBIS then goes into the compiled data at the scheduled time to pick out the data relevant to the report it needs to generate. If reports are being generated without data in them, it's possible CBIS is sending its SQL requests before the cronjob is finished and so the data CBIS requests does not exist yet. Try pushing back the cyclic launch hour so that CBIS does not request data before the cronjob has finished. 


lien vers notre section bonne pratiques en demandant à l'utilisateur s'il a bien suivi les recommendations

on ne sait pas dans l'interface si tes paramètres de rétention sont trop élevés (obligé de faire un df -h)

Quand une partition est trop remplie tu peux perdre des données, perdre la synchro entre central et pollers - aucun moyen simple de récupération dans Centreon, l'utilisateur est dépendant du support si sa partition est pleine


trop de choses dans general options et tout dépend de la même table : si trop de données, la requête ne passe pas, il faut faire les modifs en base (ville de paris)

## I cannot see the report design/the hosts I need

MBI follows the rules of ACLs. If you can not see certain report designs or certain resources, it is possible you have not been authorized to do so in the ACLs. 
These can be configured by an administrator inside **Administration > ACL > ACL Rules**. Here, administrators can choose which report designs, jobs and job groups each user is allowed to access.

## Using the partitions and db-content commands.

