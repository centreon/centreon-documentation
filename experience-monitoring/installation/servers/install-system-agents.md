---
id: install-system-agents
title: Install System Agents
---

To add, modify, or delete a server in Experience Monitoring, you must have “Admin” or “Owner” permissions on your Organization. Ask your administrator or Experience Monitoring support to grant you the correct rights ([support@quanta.io](mailto:support@quanta.io)).

At this time, it is not possible to link a server to multiple sites, whether within the same Organization or not.

Sending information to the Experience Monitoring application requires installing the Experience Monitoring agent on all servers you wish to monitor.

> System agents must be able to communicate with our infrastructure. You may need to whitelist our [IP addresses](../experience-monitoring-ip-addresses.md).

## Get the Token

To install Experience Monitoring System Agents, you will need your **auto-registration token**. It is available in *Configuration > System.*

See where to find the token in this video:

[Find the token for system agents](https://www.loom.com/share/8e1958d64017451a8a0b7a63ab5c8185)

## Proceed with Installation

> If you are using Docker containers or autoscaling systems (AWS ASG, Azure Scale Set, or others), refer to the **Installation for Docker and Autoscaling Systems** section before installing on the OS.

### Installation for Debian

To install the Experience Monitoring agent:

1. Add the following line to the **/etc/apt/sources.list.d/quanta.list** file.
 
*For Buster (versions 10.*)*

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] http://apt.quanta.io/debian buster main
    ```

    *For Bullseye (versions 11.*)*

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bullseye main
    ```

    *For Bookworm (versions 12.*)*

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bookworm main
    ```

    If unsure of your version, you can read the **/etc/debian_version** file.

    ### `BETA` Version

> To use the **BETA** version, simply replace `main` at the end of the line with `beta`.

2. Download and add the **GPG** key for our repository:

    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```

3. Update the package list:

    ```bash
    apt update
    ```

4. Install the agent:

    ```bash
    apt install quanta-agent
    ```

You will be prompted for the token during installation, and system data should appear in Experience Monitoring within a minute.

### Installation for Ubuntu

To install the Experience Monitoring agent:

1. Add the following line to the **/etc/apt/sources.list.d/quanta.list** file.

*For Jammy*

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu jammy main
    ```

    *For Kinetic*

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu kinetic main
    ```

    *For Lunar*

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu lunar main
    ```

    ### `BETA` Version

> To use the **BETA** version, simply replace `main` at the end of the line with `beta`.

2. Download and add the **GPG** key for our repository:

    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```

3. Update the package list:

    ```bash
    apt update
    ```

4. Install the agent:

    ```bash
    apt install quanta-agent
    ```

You will be prompted for the token during installation, and system data should appear in Experience Monitoring within a minute.

### Installation for CentOS / RHEL

**Supported Versions:**

- Centos 7
- Centos 8 Stream

To install the Experience Monitoring agent:

1. Create the repository configuration file **/etc/yum.repos.d/quanta.repo**. You can download the configuration file available here: [https://rpm.quanta.io/quanta-centos-repo.txt](https://rpm.quanta.io/quanta-centos-repo.txt)

   > To use the **BETA** version, simply replace the line `baseurl=http://rpm.quanta.io/centos/$releasever/main` with `baseurl=http://rpm.quanta.io/centos/$releasever/beta`.

2. Install the **GPG** key for our repository:

    ```
    curl https://rpm.quanta.io/quanta-repo-key.gpg -o /tmp/quanta.key && rpm --import /tmp/quanta.key && rm -f /tmp/quanta.key
    ```

3. Update the package list:

    ```
    yum makecache
    ```

4. Install the agent:

    ```
    yum install quanta-agent
    ```

5. Edit the file **/etc/quanta/agent.yml** and replace *with your previously obtained **auto-registration token***:

    ```
    __YOUR_QUANTA_TOKEN__
    ```

6. Start the agent:

    ```
    systemctl start quanta-agent
    ```

7. Enable the agent to start automatically on boot:

    ```
    systemctl enable quanta-agent
    ```

You should see system data appear in Experience Monitoring within a minute.

### Installation for Docker and Autoscaling Systems

The use of the Experience Monitoring agent is fully compatible with containerized infrastructures, but **it requires a slight variation in the installation process**.

[Configuration of our agents for the cloud](cloud-configuration-of-agents.md)

#### Explanation

The **hostid** is an internal parameter that allows Experience Monitoring to uniquely identify a server. Each server must have a unique **hostid**, which is automatically configured by the installation script (using the MAC address of the first network interface without `:` characters).

However, in the case of Docker containers, the configuration prevents the installation script from finding this value. In autoscaling systems (like AWS ASG or Azure Scale Set), the image copy also duplicates the **hostid**.

#### Workaround

To have a unique **hostid**, you can configure it in the **/etc/quanta/agent.yml** file via a script at container or VM startup (**bootstrap script**). You can specify a unique identifier generated at runtime (e.g., using AWS metadata or Docker environment variables) or use a unique element like the UUID value from **/proc/sys/kernel/random/uuid**.

### Installation on Other OSs

We do not provide packages for other OSs, but [the source code is publicly available on GitHub and can be compiled](https://github.com/quanta-computing/quanta-agent).

The agent is **only compatible with Linux**.

## Modifying an Existing Installation

If you want to modify the configuration of an Experience Monitoring agent **already installed** on one of your servers, you will find its configuration in the **/etc/quanta/agent.yml** file. It contains the main connection information, including the Experience Monitoring token corresponding to the relevant site. Access to this file can be useful if you monitor multiple sites with the same Experience Monitoring account and wish to specify the correct token to associate each server with its hosted site (e.g., for separate production and pre-production servers).

Here is an excerpt from the **/etc/quanta/agent.yml** file:

```jsx
user: quanta-agent
directory: /var/run/quanta
pidfile: /var/run/quanta/agent.pid
daemonize: yes

poll_interval: 60
update_interval: 15

logger:
  level: notice
  file: syslog

hostid: [...] <- server ID, automatically generated at installation
quanta_token: [...] <- insert here the token corresponding to your site

[...]
```

## To Go Further

You can now install application modules to get metrics on your Apache, Nginx, MySQL, Varnish, Magento systems, etc.

If in doubt, refer to the [installation checklist](../installation-checklist.md).
