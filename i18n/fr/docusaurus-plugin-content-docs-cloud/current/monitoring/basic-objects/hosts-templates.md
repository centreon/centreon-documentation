---
id: hosts-templates
title: Using host templates
---

## Definition

A Template is a pre-configuration of settings of an object that can be used to
configure it. The main advantage is to be able to define default values for
certain objects to speed up the creation of similar objects.

A template can inherit properties from another template.

Templates from Plugin Packs make monitoring hosts easy, because they provide ready-to-use check [commands](commands).

## Inheritance

A host or a host template can inherit from one or more host templates. This
heritage may be:

  - associative (addition of multiple host templates)
  - parent-child type

### Parent-child type inheritance

This is a predefinition of settings at “n” levels. The object inherits from its
Template which can itself inherit from its Template. If the child redefines a
setting, this setting overwrites that defined in the higher level templates.
Otherwise it is added to the settings.

### Associative type inheritance

This consists of adding together several templates within the same object in
order to add together all the settings available. If a host inherits from
several host templates and if the same setting is defined on several templates,
the host templates situated above the other templates has priority in relation
to its ancestors.

![image](../../assets/configuration/09hostmodels.png)

The diagram below shows a host inheriting from multiple host templates.

![image](../../assets/configuration/09hostmodelsheritage.png)

### Configuration

To add a host template:

Go into the **Configuration > Hosts > Templates** menu and click on **Add**

> Refer to the chapter covering configuration of
> [hosts](hosts-create) to configure a template because the form
> is identical.

> By default, locked host templates are hidden. Check the "Locked elements" box
> to list all templates.
