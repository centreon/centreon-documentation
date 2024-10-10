---
id: services-templates
title: Using service templates
---

## Definition

A Template is a pre-configuration of settings of an object that could be used to
configure it. The main advantage is to be able to define default values for
certain objects to speed up the creation of similar objects.

The advantages are:

  - Simplified element definition
  - No duplication of data
  - Easy addition of new resources
  - Predefined configurations equivalent to a “catalog of indicators”
  - Templates can inherit from other templates.

## Services Templates

### Inheritance

A service or a service template can only inherit from a single service template
(parent-child type inheritance).

![image](../../assets/configuration/09heritageservice.png)

### Configuration

To add a Service Template:

Go into the **Configuration > Services > Templates** menu and click **Add**.

> Refer to the chapter covering configuration of
> *[services](services.md)* to configure a template, because the
> form is identical.

> By default, locked service templates are hidden. Check the "Locked elements"
> box to list all templates.

## Best practice

### Explanations

Good practice requires that services templates be associated with a host's
templates: on creation of a host, the services are generated automatically from
the host's templates. There are two advantages in linking service templates to
host templates:

  - The services generated automatically retain their granularity, i.e., it is
    possible to change the Attributes of a service without affecting the other
    services obtained from this template
  - The creation of new hosts is speeded up greatly: simply define
    the host and the host's templates associated with it

e.g.: We create the srvi-web-01 host according to the template below:

![image](../../assets/configuration/09hostexemple.png)

The host srvi-web-01 will automatically possess the following services:

  - Load, CPU, Memory, disk-/ from service templates linked to the host
    template “Linux-Server-RedHat-5”
  - Broken-jobs, hit-ratio, tablespaces, listener from service templates linked
    to the host template “DB-MySQL”
  - Process and connection from service templates linked to the host template
    “Web-Server-Apache”

When the services of a host are generated from host templates, it is possible
that certain services generated are not checked by the monitoring tool. In this
case, it is necessary to disable the services that are not used (but not to
delete them). In case of deletion of services, regeneration of services of the
host from host templates will re-create the deleted services.

### Configuration

The linking of service templates with host templates takes place in the
**Relations** tab of the service templates or host templates.
