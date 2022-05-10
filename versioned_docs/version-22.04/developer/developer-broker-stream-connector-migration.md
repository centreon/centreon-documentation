---
id: developer-broker-stream-connector-migration
title : Stream connectors migration to BBDO 3.0.0
---

Centreon Broker 22.04.0 comes with a new 3.0.0 version of its BBDO protocol.
This new protocol is far more flexible than the previous one:
* it is not fixed in time, but can be upgraded without breaking changes.
* it supports more structured objets like arrays, maps and other things.
* it is generally serialized smaller buffers.

All broker events have not yet been migrated, we just made the focus on:
* **neb::host** event
* **neb::host\_status** event
* **neb::service** event
* **neb::service\_status** event

Broker can still read them but now it produces the following events:
* **neb::pb\_host** event
* **neb::pb\_adaptive\_host** event
* **neb::pb\_host\_status** event
* **neb::pb\_service** event
* **neb::pb\_adaptive\_service** event
* **neb::pb\_service\_status** event

The drawback is if you wrote streamconnectors, it could not work anymore. And
you would have to fix them.

In this part, we are going to explain what changed and then how to fix your
issue.

## An example of stream connector that won't work with BBDO 3.0

Here is a Lua code to work as stream connector that worked before BBDO 3.0 and
that will not work with Centreon Broker 22.04 if BBDO 3.0 is enabled:

```LUA
    function init(conf)
      broker_log:set_parameters(0, "/tmp/log")
    end

    function write(d)
      if d.category == 1 and d.element == 23 then
        broker_log:info(0, "Here is a service: " .. broker.json_encode(d))
      end
      if d.category == 1 and d.element == 12 then
        broker_log:info(0, "Here is a host: " .. broker.json_encode(d))
      end
      return true
    end
```

This script is very simple. The ``init()`` function initializes logs to allow
for all the logs to be written in the file ``/tmp/log``.

The ``write()`` function, called each time an event is received handles only two
events, **neb::service** event (with ``category`` 1 and ``element`` 23) and
**neb::host** event (with ``category`` 1 and ``element`` 12).

For each of them, it is serialized in JSON and written to the log file.

This script does not work with BBDO 3.0 because it waits for the legacy events
**neb::host** and **neb::service** and these events even if they can still be
forwarded by Centreon Broker, are no more produced with them new protocol. So
all the events received by the ``write()`` function do not match the expected
``category`` and ``element`` values.

Instead of **neb::service**, the produced events are **neb::pb_service** and
instead of **neb::host**, the produced events are **neb::pb_host**.

So for the script to work again, we just have to add the recognition of these
two new events.

As a result, we get the new script:

```LUA
    function init(conf)
      broker_log:set_parameters(0, "/tmp/log")
    end

    function write(d)
      if d.category == 1 and (d.element == 27 or d.element == 23) then
        broker_log:info(0, "Here is a service: " .. broker.json_encode(d))
      end
      if d.category == 1 and (d.element == 30 or d.element == 12) then
        broker_log:info(0, "Here is a host: " .. broker.json_encode(d))
      end
      return true
    end
```

Now, the script should work as expected.

If you need to get fields of a **neb::service**, for example **description**,
this same field should also be available in **neb::pb_service**. So generally,
except the new types to handle, you will have nothing more to do.

For the migration, this tabular can help:

|        **legacy object**        |         **BBDO 3.0 object**        |                                                **Comments**                                                |
|:-------------------------------:|:----------------------------------:|:----------------------------------------------------------------------------------------------------------:|
|     **neb::service** (1, 23)    |     **neb::pb_service** (1, 27)    |                                                                                                            |
|      **neb::host** (1, 12)      |      **neb::pb_host** (1, 30)      |                                                                                                            |
| **neb::service_status** (1, 24) | **neb::pb_service_status** (1, 29) | New events are lighter. Several fields can be missing. In that case, **pb_service** is useful to get them. |
| **neb::host_status** (1, 14)    | **neb::pb_host_status** (1, 32)    | New events are lighter. Several fields can be missing. Tn that case, **pb_host** is useful to get them.    |

There are also two new events with BBDO 3.0, **neb::pb_adaptive_host** and
**neb::pb_adaptive_service**. They carry configuration changes for a host or a
service. These events are designed to be small.

In a **neb::pb_adaptive_service**, there is two mandatory fields **host\_id**
and **service\_id** to know the concerned service. And all the other fields are
optional. If defined (in Lua not **nil**), the value has been set and you have
to handle it, otherwise ignore it.
