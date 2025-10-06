---
id: install-system-agents
title: Install System Agents
---

# Install System Agents

To add, modify, or delete a server in Quanta, you must have “Admin” or “Owner” permissions on your Organization. Ask your administrator or Quanta support to grant you this access ([support@quanta.io](mailto:support@quanta.io)).

At this time, it is not possible to link a server to multiple sites, whether within the same Organization or not.

Sending information to the QUANTA application requires installing an agent on all servers you wish to monitor. To do so, you need to install the Quanta agent.

<aside>
💡

System agents must be able to communicate with our infrastructure. Find our IP addresses on the dedicated page:

[Quanta IP Addresses](../quanta-ip-addresses.md)

</aside>

# Get the Token

To install Quanta System Agents, you will need your **auto-registration token**. It is available in *Configuration > System.*

See where to find the token in this video:

[Find the token for system agents](https://www.loom.com/share/8e1958d64017451a8a0b7a63ab5c8185)

# Proceed with Installation

<aside>
⚠️ If you are using Docker containers or autoscaling systems (AWS ASG, Azure Scale Set, or others), refer to the section *“Installation for Docker and Autoscaling Systems”* before installing on the OS.
</aside>

## Installation for Debian

To install the Quanta agent:

1. Add the following line to the file **/etc/apt/sources.list.d/quanta.list**  
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

    If unsure of your version, you can read the file ***/etc/debian_version***.

    ### `BETA` Version

    <aside>
    💡

    To use the **BETA** version, simply replace `main` at the end of the line with `beta`.
    </aside>

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

You will be prompted for the token during installation, and system data should appear in Quanta within a minute.

## Installation for Ubuntu

To install the Quanta agent:

1. Add the following line to the file **/etc/apt/sources.list.d/quanta.list**  
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

    <aside>
    💡

    To use the **BETA** version, simply replace `main` at the end of the line with `beta`.
    </aside>

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

You will be prompted for the token during installation, and system data should appear in Quanta within a minute.

## Installation for CentOS / RHEL

**Supported Versions:**

- Centos 7
- Centos 8 Stream

To install the Quanta agent:

1. Create the repository configuration file **/etc/yum.repos.d/quanta.repo**. You can download the configuration file available here: [https://rpm.quanta.io/quanta-centos-repo.txt](https://rpm.quanta.io/quanta-centos-repo.txt)

    <aside>
    💡

    To use the **BETA** version, simply replace the line:

    ```
    baseurl=http://rpm.quanta.io/centos/$releasever/main
    ```

    with the following:

    ```
    baseurl=http://rpm.quanta.io/centos/$releasever/beta
    ```
    </aside>

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

You should see system data appear in Quanta within a minute.

## Installation for Docker and Autoscaling Systems

The use of the Quanta agent is fully compatible with “containerized” infrastructures, but **it requires a slight variation in the installation process**.

[Configuration of our agents for the cloud](cloud-configuration-of-agents.md)

### Explanation

The *hostid* is an internal parameter that allows Quanta to uniquely identify a server. Each server must have a unique *hostid*, which is automatically configured by the installation script (using the MAC address of the first network interface without “:” characters).

However, in the case of Docker containers, the configuration prevents the installation script from finding this value. In autoscaling systems (like AWS ASG or Azure Scale Set), the image copy also duplicates the *hostid*.

### Workaround

To have a unique *hostid*, you can configure it in the file /etc/quanta/agent.yml via a script at container or VM startup (*bootstrap script*). You can specify a unique identifier generated at runtime (e.g., using AWS metadata or Docker environment variables) or use a unique element like the UUID value from */proc/sys/kernel/random/uuid*.

## Installation on Other OS

We do not provide packages for other OSs, but the source code is publicly available on GitHub and can be compiled:

[https://github.com/quanta-computing/quanta-agent](https://github.com/quanta-computing/quanta-agent)

The agent is **only compatible with Linux**.

# Modifying an Existing Installation

If you want to modify the configuration of a Quanta agent **already installed** on one of your servers, you will find its configuration in the file ***/etc/quanta/agent.yml***. It contains the main connection information, including the Quanta token corresponding to the relevant site. Access to this file can be useful if you monitor multiple sites with the same Quanta account and wish to specify the correct token to associate each server with its hosted site (e.g., for separate production and pre-production servers).

Here is an excerpt from the file ***/etc/quanta/agent.yml***:

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

# To Go Further

You can now install application modules to get metrics on your Apache, Nginx, MySQL, Varnish, Magento systems, etc.

If in doubt, refer to the installation checklist:

[Quanta Installation Checklist](../installation-checklist.md)
