---
id: which-install
title: Which installation should I choose?
---

There are several ways to install Centreon. Which one suits your needs best?

## To use Centreon [IT-100](IT100.html) or to test the solution

- Use a [ready-to-use virtual machine](../installation/installation-of-a-central-server/using-virtual-machines.html).

## To install Centreon in production

- Use the [Centreon ISO](../installation/installation-of-a-central-server/using-centreon-iso.html): if you want to
  install both the OS (CentOS 7) and Centreon.
- Use [RPM packages](../installation/installation-of-a-central-server/using-packages.html): if you already have the
  OS and you only want to install Centreon. The following operating systems are supported: CentOS/RedHat/OracleLinux 7 or 8. 
  > Due to RedHat's stance on CentOS 8, we suggest not to use said version for your production environment. Nevertheless,
  > the packages for CentOS 8 are compatible with the RHEL 8 and Oracle Linux 8 versions.

## To install Centreon on a Linux distribution that is not supported by Centreon

This installation will only be supported by the community.

- Use [sources](../installation/installation-of-a-central-server/using-sources.html).
  > Please note that the [IT Edition and Business Edition modules](https://www.centreon.com/editions/) do not work with
  > unsupported distributions yet.

## See also

See also the [installation prerequisites](../installation/prerequisites.html).