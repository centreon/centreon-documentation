---
id: upgrade-debian-in-place
title: Upgrading Centreon and Debian (12 to 13) on the same server
description: "In-place migration procedure for Debian - Debian 12 to 13"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use this procedure if you are running Centreon 24.04, 24.10 or 25.10 on Debian 12 and you wish to upgrade to Centreon 26.10 (only Debian 13 is supported for this version).

> Run every command as `root`.

<!-- ## Find your case

| Question                        | How to know                                                                   | If yes                                                                                |
| ------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Database **on the central**?    | `grep hostCentreon /etc/centreon/centreon.conf.php` → `localhost`/`127.0.0.1` | Do the **[local DB]** lines                                                           |
| Database **on another server**? | same command → an IP or a name                                                | Do **step 4b** on that server                                                         |
| **MySQL** instead of MariaDB?   | `dpkg -l centreon-mysql` → `ii`; `/etc/apt/sources.list.d/mysql.list` exists  | Use the **[MySQL]** lines; table A at the end                                         |
| **MAP** installed?              | `dpkg -l centreon-map-engine` → `ii`                                          | Do the **[MAP]** lines                                                                |
| **MBI** installed?              | a reporting server exists; `dpkg -l centreon-bi-server` on the central        | Section **11**                                                                        |
| **Business** modules?           | a file with `apt-business` in `/etc/apt/sources.list.d/`                      | It is switched in 5.2 (required on the MBI server)                                    |
| **Pollers**?                    | _Configuration > Pollers_                                                     | Section **10**, after the central                                                     |
| Apache vhost **customized**?    | `SetEnv` or other local lines in `/etc/apache2/sites-available/centreon.conf` | Merge the `.dpkg-dist` in steps 2 and 7                                               |
| Root DB access **by password**? | `mariadb -e "select 1"` (or `mysql`) → `Access denied`                        | Put the password in `/root/.my.cnf` (`[client]`, `user=root`, `password=…`, mode 600) |

Do not decide "local DB" from `systemctl is-active mariadb`: a central may run a local MariaDB/MySQL
that only holds the **MAP** database `centreon_map` (`grep -i jdbc /etc/centreon-map/map-config.properties`
→ `localhost`) while Centreon uses a remote DB. That local engine is upgraded with the central (5.3,
7.3).

**Which steps on which server**

| Server                | Steps                                           |
| --------------------- | ----------------------------------------------- |
| Central               | 1 → 9                                           |
| Remote DB server      | 1 (backups, cron), 3, 4b                        |
| MAP server (if apart) | 1, 3, then like 4b with `apt-business`, 7.2/7.3 |
| MBI reporting server  | 11 (after the central)                          |
| Poller                | 10 (after the central)                          |

Order: central steps 1–3 and DB server steps 1–3 → central step 4 → **4b** → central steps 5–9 →
MBI (11) → pollers (10).
 -->
## Step 1: Before you start

### 1.1 Take a snapshot of each server

Snapshot every server (central server, database server, MAP server, MBI server). If you have a remote database, take both snapshots at the same time, with Centreon stopped if possible. It is the only way to roll back quickly.

### 1.2 Create dumps

Snapshots let you roll back a whole server quickly, but they do not replace backups. They usually share the VM's storage, capture databases only in a crash-consistent state, and cannot restore a single database or file. Once your snapshots are done, also make the backups below.

    ```bash
    B=/root/upgrade-2610-backup; mkdir -p $B
    # On the server that hosts the database
    mysqldump --single-transaction --routines --triggers --events centreon         | gzip > $B/centreon.sql.gz
    mysqldump --single-transaction --routines --triggers --events centreon_storage | gzip > $B/centreon_storage.sql.gz
    mysqldump --single-transaction --routines --triggers --events centreon_map     | gzip > $B/centreon_map.sql.gz   # [MAP], where it lives
    zcat $B/centreon_storage.sql.gz | tail -n 1                                     # "-- Dump completed on …"
    # On every server
    tar czf $B/etc-$(hostname).tar.gz -C / etc
    dpkg -l > $B/dpkg-l.txt
    systemctl list-unit-files --state=enabled > $B/enabled-units.txt               # compared in step 9
    ```

### 1.3 Check the state of the server

Before starting the upgrade, check that the server is in the expected state: Debian 12, Centreon 25.10, enough free disk space, and working package repositories. If any result differs from the expected one, fix it before going further.

    ```bash
    cat /etc/debian_version                         # 12.x
    dpkg -l centreon-web | awk '/^ii/{print $3}'    # 25.10.x
    df -h / /var /var/lib/mysql                     # several GB free (~1,300 packages)
    apt-get update                                  # no error (a broken repository blocks the upgrade to Debian 13)
    ```

### 1.4 Check that cron and logrotate are installed (on every Centreon server)

Centreon needs **cron** to run its scheduled jobs and **logrotate** to rotate its logs. Minimal Debian images often include neither, and nothing warns you when they are missing.

```bash
ls /etc/cron.d/ | grep -iE "centreon|centstorage"           # Centreon jobs here?
dpkg -l cron | grep -q "^ii" || apt-get install -y cron     # install if missing
systemctl enable --now cron && systemctl is-active cron     # active
dpkg -l logrotate | grep -q "^ii" || apt-get install -y logrotate
chmod 644 /etc/logrotate.d/cbd /etc/logrotate.d/centengine 2>/dev/null
logrotate -d /etc/logrotate.conf 2>&1 | grep -E "^error|Ignoring"     # nothing
```

- **Without cron**, the Centreon jobs never run and no error is shown. This affects the MBI jobs (ETL, purge, backup) in particular.
- **Without logrotate**, Centreon logs are never rotated.
- **The `chmod 644` line** is a workaround. The Broker and Engine logrotate files are shipped with permissions `0664`, so logrotate ignores them. A package upgrade can restore `0664`, so check again in step 9.

## Step 2: Update your Centreon version to the latest minor

Follow the update procedures for your version ([24.04](https://archives-docs.centreon.com/24.04/docs/update/update-centreon-platform/), [24.10](https://docs.centreon.com/docs/24.10/update/update-centreon-platform/) or [25.10](https://docs.centreon.com/docs/25.10/update/update-centreon-platform.md)). Update your central server, your pollers and your remote servers.

<!-- ```bash
apt update
DEBIAN_FRONTEND=noninteractive apt install -y --only-upgrade -o Dpkg::Options::=--force-confold "centreon*"
```

| If…                                                                                                                                    | Do                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `E: Sub-process /usr/bin/dpkg returned an error code (1)` + `chmod: … /var/lib/centreon-gorgone/.ssh/id_rsa` (MON-211050, non-RSA key) | `dpkg --configure -a` then `dpkg -l \| awk '$2 ~ /^centreon/ && $1 != "ii"'` → nothing |
| `/etc/apache2/sites-available/centreon.conf.dpkg-dist` exists (vhost customized)                                                       | Merge, see **Apache merge** below                                                      |

**Apache merge** (also used in step 7)

```bash
cd /etc/apache2/sites-available
diff centreon.conf centreon.conf.dpkg-dist                 # yours vs new
cp centreon.conf /root/upgrade-2610-backup/centreon.conf.mine
cp centreon.conf.dpkg-dist centreon.conf && rm centreon.conf.dpkg-dist
# re-add your local lines (vi), then:
apachectl configtest && systemctl reload apache2
```

**Web UI** (`http://<central>/centreon`):

1. Update wizard to the end, **Finish clicked once** (double click → HTTP 500 on the last step,
   update done anyway — MON-211065).
2. _Administration > Extensions > Manager_: modules **one at a time, wait for the new version**
   before the next (MON-211064). If a `cache:clear` error appears (`Cannot rename` / `Failed to read file` under `/var/cache/centreon/symfon_`): the module is usually updated;
   run `cd /usr/share/centreon && sudo -u www-data php bin/console cache:clear` and check the version.
3. Monitoring Connector Manager: apply the updates.
4. Export the central configuration: **Generate, Move export files, Restart**. A warning
   `The option 'auto_reschedule_checks' is no longer available` is harmless (MON-191121).

`--force-confold` keeps your modified config files; the package version is saved as `*.dpkg-dist`.
 -->

## Step 3: Update Debian 12 to the latest version

The following commands bring the server to the latest Debian 12 minor version before the major migration to Debian 13.

```bash
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get -y -o Dpkg::Options::=--force-confold full-upgrade
cat /etc/debian_version          #  latest 12.x version
systemctl reboot
```

| If…                                                                             | Do                                                                             |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `apt-get update` fails on the **MaxScale** line (`NO_PUBKEY`) in `mariadb.list` | Comment **only that line** (the file also holds the MariaDB Server repository) |
| [MySQL] `mysql-apt-config` is upgraded (seen 0.8.36 → 0.8.40)                   | Nothing: `mysql.list` is kept                                                  |

After the reboot, check that the web interface works and that the pollers are connected. You can update the servers in any order (central server or database server first).

## Step 4: Upgrade a remote database server (if applicable)

Do this only if your database runs on its own server, separate from the central. Before you start, make sure Centreon is already stopped on the central server.

### 4.1 Back up the configuration and stop the database

Run these commands on the **database server**:

```bash
B=/root/upgrade-2610-backup; mkdir -p $B/apt-bookworm
cp -a /etc/apt/sources.list /etc/apt/sources.list.d /etc/mysql $B/apt-bookworm/
systemctl stop mariadb                              # MySQL: systemctl stop mysql
```

This saves your current APT repositories and MySQL/MariaDB configuration, then stops the database.

### 4.2 Upgrade the server

1. **Update the repositories:** steps 5.1, 5.2 and 5.3. Here you only need the standard repository and the plugins repository. The `centreon-mariadb` and `centreon-mysql` packages come from the standard repository.
2. **Run the simulation (step 5.4).** You should see:
   - `mariadb-server` 11.8, or `mysql-community-server` 8.4.x-1debian13
   - `centreon-mariadb` or `centreon-mysql` at 26.10
   - no `centreon-web`, because it is not installed on this server
3. **Run the upgrade (step 6).**

### 4.3 Check the result

```bash
dpkg -l | awk 'NR>5 && $1 != "ii" && $1 != "rc"'                 # nothing
cat /etc/debian_version                                            # 13.x
systemctl is-active mariadb                                        # active (MySQL: mysql)
mariadb -e "SELECT @@version, @@read_only"                         # 11.8.x, 0 (MySQL: 8.4.x, 0)
mariadb-upgrade --check-if-upgrade-is-needed && echo "run: mariadb-upgrade" || echo "done"   # MySQL: skip this line
mariadb -e "SHOW DATABASES" | grep -E "^centreon(_storage)?$"      # both databases listed
tail -n 5 /var/log/mysql/error.log                                 # MySQL only: "ready for connections. Version: '8.4.x'"
find /etc/mysql -name "*.dpkg-dist"                                # keep your own file
systemctl enable mariadb && systemctl reboot                       # MySQL: mysql
```

For MySQL, use `mysql` instead of `mariadb` in the commands above.

### 4.4 Check the connection from the central

After the reboot, run this on the **central server**, replacing `<database server>` with the address of your database server:

```bash
timeout 3 bash -c '</dev/tcp/<database server>/3306' && echo OK
```

It should print `OK`. (This command is used because `nc` is not installed by default.)

### 4.5 Troubleshooting

| If you see | What to do |
| --- | --- |
| A file named `50-server.cnf.dpkg-dist` | **Keep your own file** and ignore the new one. The new file sets `bind-address = 127.0.0.1`, which only allows local connections, so the central could no longer reach the database. Your file should have `bind-address = 0.0.0.0` (or the server's IP address) and `utf8mb4`. |
| MariaDB does not start | Run `systemctl start mariadb`, then read the details with `journalctl -u mariadb`. The usual cause is an option in your tuning file that was removed or renamed in the new MariaDB version. |
| `read_only` is 1 | Run `mariadb -e "SET GLOBAL read_only=OFF"`, then delete the `read_only` line from your configuration. That setting is meant for replica servers. |

## Step 5: Switch the repositories (on every server you upgrade)

The commands edit your existing repository files (either deb822 *.sources files or one-line *.list files). Do not add a new file next to an old one: the 25.10 and 26.10 repositories would mix.

```bash
B=/root/upgrade-2610-backup; mkdir -p $B/apt-bookworm
cp -a /etc/apt/sources.list /etc/apt/sources.list.d $B/apt-bookworm/            # rollback
cp -a /etc/apache2/sites-available/centreon.conf $B/apache-centreon.conf.2510 2>/dev/null
ls /etc/apt/sources.list.d/
```

### 5.1 On your Debian OS

Point APT at the Debian 13 repositories instead of Debian 12. It only edits configuration files, nothing is downloaded or upgraded yet.

```bash
[ -f /etc/apt/sources.list.d/debian.sources ] && sed -i 's/bookworm/trixie/g' /etc/apt/sources.list.d/debian.sources
sed -i 's/bookworm/trixie/g' /etc/apt/sources.list
grep -rqs "trixie-backports" /etc/apt/sources.list /etc/apt/sources.list.d/ || \
  echo "deb http://deb.debian.org/debian/ trixie-backports main non-free-firmware" >> /etc/apt/sources.list
```

### 5.2 On Centreon

**5.2 Centreon** (any file name: `centreon-25.10-stable.list`, `centreon-stable.list`, …)

Point the Centreon repositories at the 26.10 packages for Debian 13. It only edits APT configuration files, nothing is upgraded yet.

```bash
for f in $(grep -lE "packages.centreon.com|centreon.jfrog.io" /etc/apt/sources.list.d/*.list); do
  sed -i -E -e 's/bookworm-25\.10-[a-z-]+/trixie-26.10-stable/g' -e 's/ (bookworm|bullseye) / trixie /g' "$f"
  echo "== $f"; cat "$f"
done
grep -qs "apt-plugins-stable/\? trixie" /etc/apt/sources.list.d/*.list || \
  echo "deb https://packages.centreon.com/apt-plugins-stable/ trixie main" > /etc/apt/sources.list.d/centreon-plugins-stable.list
mv centreon-25.10-stable.list centreon-26.10-stable.list
```

| Repository line                                                                    | Required?                                                             |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `apt-standard/ …`                                                                  | **Yes**                                                               |
| `apt-plugins-stable/ trixie`                                                       | **Yes**: trixie builds of the Perl libs (Net::Curl, Libssh::Session…) |
| `apt-business/ …`                                                                  | Only with Business modules (**required on the MBI server**)           |
| `apt-plugins-testing/ bookworm` (or `apt-plugins-testing trixie` after the switch) | Optional                                                              |
| `centreon.jfrog.io/…/apt-connectors-stable/`                                       | Optional                                                              |

File names keep `25.10`: cosmetic (`mv centreon-25.10-stable.list centreon-26.10-stable.list` if you want).

### 5.3 On the database server

Run this on every server that hosts a database: the central server (if the database is local), the remote database server, and the MAP or MBI server.

Update the database repositories for Debian 13. For MariaDB it also changes the version, from 10.11 to 11.8. It only edits APT configuration files and upgrades nothing yet.

<Tabs groupId="db">
<TabItem value="MariaDB" label="MariaDB">

```bash
for f in /etc/apt/sources.list.d/mariadb.sources /etc/apt/sources.list.d/mariadb.list; do
  [ -f "$f" ] || continue
  sed -i -e 's|mariadb-server/10.11/|mariadb-server/11.8/|' -e 's/bookworm/trixie/g' "$f"
  echo "== $f"; grep -vE "^\s*#|^\s*$" "$f"
done
```

</TabItem>
<TabItem value="MySQL" label="MySQL">

```bash
[ -f /etc/apt/sources.list.d/mysql.list ] && sed -i 's/ bookworm / trixie /g' /etc/apt/sources.list.d/mysql.list
echo "mysql-apt-config mysql-apt-config/repo-codename select trixie" | debconf-set-selections
echo "== /etc/apt/sources.list.d/mysql.list"; grep -vE "^\s*#|^\s*$" /etc/apt/sources.list.d/mysql.list
```

</TabItem>
</Tabs>

| If…                                        | Do / know                                                                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No `mariadb.*` file                        | MariaDB comes from Debian: Debian 13 ships 11.8, nothing to do                                                                                                                                |
| [MySQL] `mysql.list` points to `mysql-8.0` | **Stop**: `repo.mysql.com` trixie has no 8.0. Upgrade to 8.4 LTS on Debian 12 first (trixie has `mysql-8.4-lts`, `mysql-9.7-lts`, `mysql-innovation`, plus `mysql-apt-config`, `mysql-tools`) |
| [MySQL] debconf line skipped               | A later `mysql-apt-config` reconfiguration (`dpkg-reconfigure`, new package version) may write `bookworm` back. With it: kept (checked; prints a harmless `gpg: cannot open '/dev/tty'`)      |
| `*.disabled`, `*.old_*` files              | Ignored by apt                                                                                                                                                                                |
| MaxScale line commented in step 3          | Stays commented                                                                                                                                                                               |

### 5.4 Check and simulate

This step is a dry-run check before the real upgrade. It verifies that the repository changes are correct and simulates the upgrade, so you can spot problems while nothing has been modified yet. The comment at the end of each line is the expected result.

```bash
grep -rn bookworm /etc/apt/sources.list /etc/apt/sources.list.d/ | grep -v ":\s*#"   # nothing
apt clean && apt-get update                                                       # no W:/E:
apt-get -s full-upgrade > $B/sim.txt
tail -n 3 $B/sim.txt                                                              # N upgraded / new / removed
grep -iE "broken|unmet" $B/sim.txt                                                # nothing
grep -E "^Inst (centreon-web|php8.4-fpm|mariadb-server|mysql-community-server) " $B/sim.txt
grep -E "^Remv centreon" $B/sim.txt                                               # nothing
```

* If the simulation shows broken packages, stop and restore the sources: `cp -a $B/apt-bookworm/* /etc/apt/`.
* If everything matches the expected results, you can proceed to the real upgrade. If not, fix the repositories first. Nothing has changed on the system at this point, so the check is safe to repeat.

## Step 6: Upgrade (every server you upgrade)

This is the real upgrade to Debian 13. It runs the upgrade in the background, in two stages, and then lets you watch its progress.

```bash
systemd-run --unit=upg2610 /bin/sh -c 'export DEBIAN_FRONTEND=noninteractive; O="-o Dpkg::Options::=--force-confold -o Dpkg::Options::=--force-confdef"; apt-get -y $O upgrade --without-new-pkgs > /root/upgrade-2610-backup/upg-step1.log 2>&1 && apt-get -y $O full-upgrade > /root/upgrade-2610-backup/upg-step2.log 2>&1'
watch -n 10 'pgrep -x apt-get; pgrep -x dpkg; tail -n 2 /root/upgrade-2610-backup/upg-step2.log'   # done when both pgrep print nothing
```

- Don't interrupt it and don't reboot until it's finished, even if it seems slow (about 1,300 packages).
- Duration: central ~10–15 min, database/MBI server ~6 min, poller ~6 min.
- `systemd-run`: the upgrade survives an SSH disconnection (`openssh-server` is upgraded).
- Wait on the **processes**, not on the unit state (unreliable while systemd itself is upgraded).
- Expected in the logs: `chmod: cannot access '/var/cache/centreon/config/broker/*'` and `…/engine/*`.
- **Do not reboot yet.**

Then stop Centreon again on the central server. The 26.10 packages restart the services (and cron, if it was upgraded), but the database schema stays at 25.10 until you run the update wizard in step 8. Until then, Gorgone logs `Unknown column 'uid' in 'field list'` / `[legacycmd] Cannot get configuration for pollers` every 15 s.

```bash
systemctl stop centengine cbd gorgoned centreontrapd cron
systemctl stop centreon-map-engine 2>/dev/null      # [MAP]
```

## Step 7: Checks after the packages

### 7.1 Run checks

This step is the post-upgrade verification (7.1 to 7.4), followed by switching the web stack to PHP 8.4. It checks that the upgrade to Debian 13 went cleanly and that nothing was left half-done. The comment on each line is the expected result.

```bash
# 7.1 dpkg
dpkg -l | awk 'NR>5 && $1 != "ii" && $1 != "rc"'                                   # nothing ("rc" = removed, OK)
grep -hE "^(W|E):|dpkg: (error|erreur)" /root/upgrade-2610-backup/upg-step*.log      # nothing
cat /etc/debian_version                                                              # 13.x
dpkg -l centreon-web centreon-engine centreon-broker centreon-gorgone php8.4-fpm | awk '/^ii/{print $2, $3}'
# 7.2 Perl / libraries left on Debian 12
dpkg -l | awk '/^ii/ && $3 ~ /deb12/ {print $2, $3}'           # only obsolete Debian libs (libperl5.36, perl-modules-5.36…)
perl -MCrypt::OpenSSL::AES -MNet::Curl -MLibssh::Session -e 'print "OK\n"'   # OK
# 7.3 Config files kept by --force-confold
find /etc -name "*.dpkg-dist" -o -name "*.ucf-dist" | grep -E "apache2|centreon|php|mysql"
# 7.4 PHP 8.4
systemctl enable --now php8.4-fpm; systemctl disable --now php8.2-fpm 2>/dev/null
systemctl restart apache2
curl -s -o /dev/null -w "%{http_code}\n" http://localhost/centreon/                 # 200
```

| If… (7.2 / 7.3)                                                                                       | Do                                                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| A Centreon or `lib*-perl` package still `deb12`, or Perl not OK                                       | `apt-get install --reinstall <package>`; check `apt-plugins-stable trixie` (5.2)                                               |
| [MAP] `openjdk-17-jre-headless` still `deb12`                                                         | Normal: MAP 26.10 uses Java 25 (`openjdk-25-jre-headless`, now default). After validation: `apt purge openjdk-17-jre-headless` |
| `apache2/…/centreon.conf.dpkg-dist`                                                                   | **Apache merge** (step 2): 26.10 adds the Gorgone websocket `ProxyPass` block                                                  |
| `/etc/centreon-engine/centengine.cfg.dpkg-dist`, `/etc/centreon-broker/central-module.json.dpkg-dist` | Keep yours (generated by the export)                                                                                           |
| `/etc/mysql/mariadb.conf.d/50-server.cnf.dpkg-dist`                                                   | Keep yours (package sets `bind-address = 127.0.0.1`)                                                                           |
| [MAP] `/etc/centreon-map/map-config.properties.dpkg-dist`                                             | Keep yours: it is a template (`%CENTREON_BROKER_ADDRESS%`, `%CENTREON_PWD%`…)                                                  |

### 7.2 Check the database

If you have a local database, run this on the central server. If your database is on a separate server, run this on that server, not on the central.

This step is the database health check after the upgrade. It confirms that the new MariaDB 11.8 is running, writable, upgraded internally, and that the Centreon databases are still there. The comments give the expected result, with the MySQL variant after the dash.

```bash
systemctl is-active mariadb                                        # active   — [MySQL] mysql
mariadb -e "SELECT @@version, @@read_only"                         # 11.8.x, 0 — [MySQL] 8.4.x, 0
mariadb-upgrade --check-if-upgrade-is-needed && echo "run: mariadb-upgrade" || echo "done"   # [MySQL] skip
mariadb -e "SHOW DATABASES" | grep -E "^centreon(_storage|_map)?$"
journalctl -u mariadb --since "-1h" | grep -iE "error|warning" | tail -n 20   # [MySQL] tail /var/log/mysql/error.log
```

* If MariaDB isn't active, or the version query shows read_only = 1 (the database refuses writes), use [the troubleshooting table from step 4](#45-troubleshooting).
* If the check prints "run: mariadb-upgrade", run mariadb-upgrade. It takes its login details from /root/.my.cnf. When it works, it finishes with return code 0 after 8 phases, and running the check again reports that no upgrade is needed.
   Why this happens: the MariaDB package normally updates the database's internal system tables during the upgrade. It can't do this if the MariaDB root account has a password, and it won't warn you. MariaDB 11.8 then runs on system tables still in the 10.11 format. If root logs in through unix_socket (no password), the package does it by itself, as it did on the database servers we tested.

## Step 8: Finalize the upgrade on the central server

### 8.1 On the web interface

First, clear your browser cache so you don't see old pages from 25.10. (If you use MAP, its documentation has the same step.)

1. Run the update wizard to 26.10. Click Finish only once.
   The wizard log may show `Undefined array key "is_reverse"` in `Update-25.11.0.php`. If you use the Centreon Monitoring Agent, check the connection mode of each agent configuration. It should be set to "agent initiated", which is the default.
2. Update the modules in **Administration > Extensions > Manager**. Update them one at a time, and wait for each to finish before starting the next.
   * If you use MAP, update both the MAP module and the MAP widget. They have separate buttons.
   * Avoid **Update all**. On both test platforms, it left auto-discovery not updated until a second request. If you use it anyway, check that auto-discovery shows version 26.10.
3. Apply the updates in the Monitoring Connector Manager.

### 8.2 On the central server

To restart Centreon on the new version, run these commands on the central server:

```bash
cd /usr/share/centreon && sudo -u www-data php bin/console cache:clear
usermod -a -G centreon-broker www-data
usermod -a -G www-data centreon-broker
sudo -u www-data php /usr/share/centreon/bin/console w:m:c --dry-run   # "No invalid commands found."
systemctl restart cbd centengine gorgoned centreontrapd
systemctl start centreon-map-engine                                   # [MAP]
```

What these commands do:

* Clear the web application cache.
* Let the web server and Broker access each other's files.
* Check for invalid Engine and Broker commands. If the check lists any, run it again without **--dry-run** to remove them. (`w:m:c` is short for `web:monitoring-server:clean-engine-broker-command`.)
* Restart the monitoring services, and start the MAP engine if you use MAP.

If you use MAP, check that it works:

* `systemctl is-active centreon-map-engine` should print `active`.
* Run `for p in $(pgrep -x java); do readlink -f /proc/$p/exe; done`. The result should contain `java-25-openjdk`.
* Run `grep -E "ERROR|Connection with Broker established" /var/log/centreon-map/centreon-map-engine.log | tail -n 5`. You should see that the connection with Broker is established. A few `Error while connecting to Broker` messages are normal while Broker restarts.

### 8.3 Export the configuration from the web interface

1. Export the central server's configuration with **Generate**, **Move export files** and **Restart all** checked. If you skip **Move export files**, the new files stay in `/var/cache/centreon/config` and Engine 26.10 keeps using the old configuration.

2. Restart the services one last time

    ```bash
    systemctl restart cbd centengine centreontrapd gorgoned
    systemctl start cron
    ```

   This makes the services load the new configuration and turns scheduled jobs (cron) back on.

## Step 9: Make sure everything starts at boot, then reboot

1. Run these commands on the central server:

    ```bash
    systemctl enable centengine cbd gorgoned centreontrapd snmptrapd.socket php8.4-fpm apache2 cron
    systemctl enable centreon-map-engine 2>/dev/null                 # [MAP]
    systemctl enable mariadb                                         # [local DB] or local MAP DB — [MySQL] mysql
    diff <(awk '{print $1}' /root/upgrade-2610-backup/enabled-units.txt | sort) \
        <(systemctl list-unit-files --state=enabled | awk '{print $1}' | sort)   # php8.2 → php8.4 expected
    systemctl reboot
    ```

    What these commands do:

    * Make sure all Centreon services, the web server, PHP 8.4, cron and the database start automatically at boot.
    * Compare the list of services enabled before the upgrade (saved in step 1.2) with the current list. The only expected difference is php8.2-fpm replaced by php8.4-fpm. Anything else deserves a look.
    * Reboot the server.

2. After the reboot, check that everything works:

```bash
uname -r                                       # 6.12.x
systemctl --failed                             # 0 units
for u in centengine cbd gorgoned centreontrapd php8.4-fpm apache2 mariadb centreon-map-engine cron; do printf "%s=%s " $u $(systemctl is-active $u); done; echo
ls /etc/cron.d/                                # centreon, centstorage
ss -ulnp | grep ":162 "                        # SNMP traps: UDP 162 held by systemd
logrotate -d /etc/logrotate.conf 2>&1 | grep -E "^error|Ignoring"   # nothing (else table below)
systemctl is-active centreontrapd              # active (see the table below)
```

What you should see:

* The kernel version starts with 6.12.
* No failed services.
* Each service reports active.
* The Centreon cron files (centreon, centstorage) are in /etc/cron.d/.
* Port UDP 162, used for SNMP traps, is held by systemd.

| What you see                          | What it means and what to do                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------ |
| `snmptrapd` is inactive                         | Normal on Debian 13. It starts on demand when the first trap arrives. |
| `centreontrapd` is inactive, with exit **0/SUCCESS** | The trap database is empty. See step 10, centreontrapd. |
| `cron` is inactive                              | Run `systemctl enable --now cron` (See step 1.4.)                                               |
| `logrotate.service` failed (`Ignoring cbd` / `centengine`) | `chmod 644 /etc/logrotate.d/cbd /etc/logrotate.d/centengine`; `systemctl start logrotate` |

Finally, check the web interface:

* **Configuration > Pollers**: all pollers are running and were updated recently. There should be no duplicate **Central** entry. (The 26.10 Broker registers the central under a new instance ID, so a duplicate can appear.)
* **Resources Status**: force a check, acknowledge a problem and set a downtime, to confirm they work.
* Graphs are drawn.
* Gorgone is connected.

## Step 10: Upgrade the pollers (after the central)

Allow about 6 minutes per poller. Do each poller one at a time.

1. Back up and update Debian 12. Do the system part of step 1.2, then step 3 (Debian 12 point release and reboot).
2. Stop the monitoring services:

   ```bash
   systemctl stop centengine gorgoned centreontrapd
   ```

3. Upgrade to Debian 13 and Centreon 26.10. Do steps 5.1 and 5.2 (APT repositories, standard and plugins), then step 5.4 and step 6.
   After step 5.4, you should see `centreon-poller`, `centreon-engine`, `centreon-broker` and `centreon-gorgone` at 26.10.0, plugins built for `deb13`, and no package removed.
4. Check the result. Do steps 7.1 and 7.2. If `centengine.cfg.dpkg-dist` exists, keep your own file.
5. Reboot, then export the poller's configuration from the central server, with **Generate**, **Move export files** and **Restart** all checked.
6. Check that everything works:

   ```bash
   systemctl --failed                                     # 0 units
   systemctl is-active centengine gorgoned centreontrapd  # all active
   grep -E "Centreon Engine 26.10|Configuration loaded" /var/log/centreon-engine/centengine.log | tail -n 2
   ss -tn | grep -E ":5669|:5556"                         # Broker (5669) and Gorgone (5556) connected to the central
   ls -l /etc/snmp/centreon_traps/centreontrapd.sdb       # file is not empty
   logrotate -d /etc/logrotate.conf 2>&1 | grep -E "^error|Ignoring"   # nothing (else 1.4)
   ```

### If `centreontrapd` stops by itself

If the trap database `centreontrapd.sdb` is empty, `centreontrapd` stops one second after it starts. In `/var/log/centreon/centreontrapd.log`, you will see `MySQL error: no such table: cfg_nagios`. systemd reports `inactive (dead)` with status **0/SUCCESS**, so there is no alert, and **no SNMP trap is processed**.

To fix it:

1. In the web interface, go to **Configuration > SNMP Traps > Generate**.
2. Select the poller.
3. Check **Generate traps database**, **Apply configurations** and **Restart centreontrapd**.

The upgrade does not cause this problem. It was also seen on 25.10 after a simple reboot.

### What to expect

- Acknowledgements and downtimes survive the poller upgrade, thanks to retention.
- The `downtimes` history gets a new row when Engine restarts. This is normal.

## Step 11: Upgrade your MBI server (if applicable)

The central server needs nothing extra. `centreon-bi-server` is upgraded in step 6, and the MBI module and widgets are updated in step 8.

On the reporting server, make sure no ETL run is in progress: check with `ps -ef | grep -i etl` that none is in progress.

### 11.1 Before the upgrade

1. **Back up the server:**

   ```bash
   B=/root/upgrade-2610-backup; mkdir -p $B
   tar czf $B/etc-$(hostname).tar.gz -C / etc; dpkg -l > $B/dpkg-l.txt
   systemctl list-unit-files --state=enabled > $B/enabled-units.txt
   ```

   Also back up the reporting database, as described on the MBI page [Backing up and restoring MBI](../reporting/backup-restore.md).

2. **Make sure cron is installed** (see step 1.4).

   ```bash
   dpkg -l cron | grep -q "^ii" || apt-get install -y cron
   ```

3. **Stop the services:**

   ```bash
   systemctl stop cbis gorgoned cron
   ```

### 11.2 Upgrade

1. Do step 3 (Debian 12 point release and reboot), if not already done.
2. Do steps 5.1 and 5.2 (standard, **business** and plugins repositories), then step 5.3 (MariaDB or MySQL repository).
3. Do step 5.4, then step 6. In the simulation, you should see `centreon-bi-reporting-server`, `centreon-bi-engine`, `centreon-bi-etl` and `centreon-bi-report` at 26.10.0, plus `openjdk-25-jdk`. No package should be removed.

### 11.3 Check and restart

```bash
dpkg -l | awk 'NR>5 && $1 != "ii" && $1 != "rc"'                       # nothing
dpkg -l "centreon-bi*" | awk '/^ii/{print $2, $3}'                      # 26.10.0
java -version 2>&1 | head -n 1                                           # openjdk 25
grep ExecStart /lib/systemd/system/cbis.service | grep -o "java-[0-9]*-openjdk"   # java-25-openjdk
find /etc -name "*.dpkg-dist" | grep -E "centreon|mysql"                 # keep yours (bind-address)
systemctl is-active mariadb                                              # local reporting DB (MySQL: mysql)
systemctl start cbis; systemctl enable --now gorgoned cron
systemctl is-active cbis gorgoned cron                                   # all active
ls /etc/cron.d/ | grep centreon-bi                                       # engine, purge, backup-reporting-server
tail -n 20 /var/log/centreon-bi/cbis.$(date +%F).log                     # no "Connection test … failed"
```

Then reboot and check again that `cbis`, `gorgoned` and `cron` are active. After 07:30 on the next weekday, `/var/log/centreon-bi/centreonBIETL.log` should show the ETL run.

### Good to know

- **Java 25, not 17.** MBI 26.10 uses Java 25. `centreon-bi-engine` pulls in `openjdk-25-jdk`, and `cbis.service` runs `/usr/lib/jvm/java-25-openjdk-amd64/bin/java` directly. The Java 17 left over from Debian 12 is unused. After validation, remove it with `apt purge openjdk-17-*`.

## Known issues

Here is the table without the Ticket column:

| When | You see | Do |
| --- | --- | --- |
| MBI server | Nothing: ETL, purge, backup never run (`cron` absent) | 1.4: install/enable `cron`; check `centreonBIETL.log` next weekday |
| Reboot (central, poller) | `centreontrapd` inactive, exit 0, `no such table: cfg_nagios` | Generate the SNMP traps database, restart centreontrapd |
| Any server, after the upgrade | `logrotate.service` failed, `Ignoring cbd … writable by group or others`; or no logrotate at all (25.10) | 1.4: install logrotate, `chmod 644` cbd/centengine |
| Step 2 | dpkg error, `chmod … .ssh/id_rsa` | `dpkg --configure -a`, all `ii` |
| Steps 2, 8 (extensions) | `cache:clear` error, `Cannot rename` / `Failed to read file …/symfon_` | One module at a time; `cache:clear` alone; check versions |
| Step 8 (_Update all_) | auto-discovery still on 25.10 after the batch | Update it again, check 26.10 |
| Steps 2, 8 (wizard) | Last step sent twice, HTTP 500 | Click Finish once; update done anyway |
| Step 8 (wizard log) | `Undefined array key "is_reverse"` in `Update-25.11.0.php` | Check Monitoring Agent connection modes |
| Export | `auto_reschedule_checks is no longer available` | Warning only |
| Steps 2, 6 (package logs) | `chmod: cannot access '/var/cache/centreon/config/broker/*'` | Harmless |
| 25.10 pollers | Ack closed in history when the service enters a downtime | Pollers on latest 25.10 first; upgrade them soon |
| MBI doc | Java 17 required, no Debian 13 tab, no cron | Follow section 11 |
| Official doc | No Debian 12 → 13 path for 25.10 → 26.10 | This document |
| Step 6 → 8 | Gorgone `Unknown column 'uid'` every 15 s | Stop Centreon again after step 6 |
| Steps 2, 7 (custom Apache) | `centreon.conf.dpkg-dist`, new vhost not applied | Apache merge |
| 4b, 7.3, 11 | `50-server.cnf.dpkg-dist` with `bind-address = 127.0.0.1` | Keep yours |
| Step 7.2 | Plugins / Gorgone cannot load a Perl module | Reinstall from trixie; `apt-plugins-stable trixie` |
| Step 8 export | Engine still on the old config | Export again with **Move** checked |
| Step 9 | `snmptrapd` inactive | Normal (socket-activated) |
| MariaDB 11.8 tools | `mysql: Deprecated program name …` | Cosmetic; use `mariadb` |
| 4b, 7.5 (MariaDB root with a password) | `mariadb-upgrade --check-if-upgrade-is-needed` → needed after the upgrade, nothing logged | Run `mariadb-upgrade` yourself |
| Step 3 | `NO_PUBKEY` on the MaxScale line | Comment only that line |

## MariaDB/MySQL equivalents

| Item             | MariaDB                                               | MySQL (Oracle `repo.mysql.com`)    |
| ---------------- | ----------------------------------------------------- | ---------------------------------- |
| Service, client  | `mariadb`                                             | `mysql`                            |
| Dump             | `mysqldump` / `mariadb-dump`                          | `mysqldump`                        |
| Centreon package | `centreon-mariadb`                                    | `centreon-mysql`                   |
| Repository file  | `mariadb.sources` or `mariadb.list`                   | `mysql.list` + `mysql-apt-config`  |
| Version          | 10.11 → **11.8** (major)                              | **8.4 → 8.4** LTS, Debian 13 build |
| Data upgrade     | `mariadb-upgrade`, run by the package                 | automatic at server start          |
| Root access      | `sudo mariadb` if `unix_socket`, else `/root/.my.cnf` | `/root/.my.cnf`                    |
| Config dir       | `/etc/mysql/mariadb.conf.d/`                          | `/etc/mysql/mysql.conf.d/`         |
