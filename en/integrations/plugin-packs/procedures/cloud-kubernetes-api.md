---
id: cloud-kubernetes-api
title: Kubernetes API
---

## Overview

Kubernetes is an open-source container-orchestration system for automating
computer application deployment, scaling, and management.

This Pack aims to monitor both infrastructure layer (nodes) and cluster
services (deployments, daemonsets, etc).

## Pack assets

The Kubernetes API Pack gives multiple choices regarding the way you can
arrange a cluster monitoring.

There is mainly three ways:

- Gather all metrics on only one Centreon host with a service per Kubernetes
  unit (i.e. deployments, daemonsets, etc) - apply
  [manual creation](#manual-creation) procedure,
- Gather all metrics on only one Centreon host with a service for each
  instances of each Kubernetes units - apply [manual creation](#manual-creation)
  and [service discovery](#service-discovery) procedures,
- Collect infrastructural metrics (master and worker nodes) with a Centreon
  host per Kubernetes node, and keep orchestration/application metrics
  on a unique host (using one of the 2 previous scenarii) - apply
  [host discovery](#host-discovery) procedure.

For all those scenarii, discovery and classic templating will be used.

You just need to choose which flavor you like the most: communicating with
the RestAPI exposed by the Kubernetes cluster, or using the CLI tool kubectl
to communicate with the cluster's control plane.

### Discovery

The Kubernetes API Pack comes with several discovery providers and rules.

Here is the list of the Host Discovery providers:

| Provider                   | Description                                                              |
|----------------------------|--------------------------------------------------------------------------|
| Kubernetes Nodes (RestAPI) | Discover Kubernetes nodes by requesting Kubernetes RestAPI               |
| Kubernetes Nodes (Kubectl) | Discover Kubernetes nodes by requesting Kubernetes cluster using kubectl |

Both providers will search for Kubernetes nodes, and link them to a minimal
host template to monitor the node usage in terms of pods allocation, cpu and
memory requets/limits.

In parallele to this discovery, unitary services can be created thanks to
the Service Discovery rules:

| Rule                                               | Description                                                        |
|----------------------------------------------------|--------------------------------------------------------------------|
| Cloud-Kubernetes-Api-CronJobs-Status               | Discover Kubernetes CronJobs to monitor their status               |
| Cloud-Kubernetes-Api-Daemonsets-Status             | Discover Kubernetes DaemonSets to monitor their status             |
| Cloud-Kubernetes-Api-Deployments-Status            | Discover Kubernetes Deployments to monitor their status            |
| Cloud-Kubernetes-Api-Nodes-Status                  | Discover Kubernetes Nodes to monitor their status                  |
| Cloud-Kubernetes-Api-Nodes-Usage                   | Discover Kubernetes Nodes to monitor their usage                   |
| Cloud-Kubernetes-Api-PersistentVolumes-Status      | Discover Kubernetes PersistentVolumes to monitor their status      |
| Cloud-Kubernetes-Api-Pods-Status                   | Discover Kubernetes Pods to monitor their status                   |
| Cloud-Kubernetes-Api-ReplicaSets-Status            | Discover Kubernetes ReplicaSets to monitor their status            |
| Cloud-Kubernetes-Api-ReplicationControllers-Status | Discover Kubernetes ReplicationControllers to monitor their status |
| Cloud-Kubernetes-Api-StatefulSets-Status           | Discover Kubernetes StatefulSets to monitor their status           |

### Templates

The Kubernetes API Pack brings 2 different host templates to be used depending
on the scenarii mentioned earlier:

- All in one host template that will gather checks and metrics with a
  service per Kubernetes unit:

    | Cloud-Kubernetes-Api         |
    |------------------------------|
    | Cluster Events               |
    | CronJob Status               |
    | DaemonSet Status             |
    | Deployment Status            |
    | Node Status                  |
    | Node Usage                   |
    | PersistentVolume Status      |
    | Pod Status                   |
    | ReplicatSet Status           |
    | ReplicationController Status |
    | StatefulSet Status           |

- A minimal host template that will only collect metrics for the Kubernetes
  nodes:

    | Cloud-Kubernetes-Node-Api |
    |---------------------------|
    | Node Usage                |
    | Node Status               |

## Monitored metrics and indicators

### Cluster events

This indicator allows to watch the number of events occurring on the cluster,
like the `kubectl get events` can provide:

```text
NAMESPACE   LAST SEEN   TYPE      REASON      OBJECT           MESSAGE
graphite    26m         Warning   Unhealthy   pod/graphite-0   Liveness probe failed: Get "http://10.244.2.10:8080/": context deadline exceeded (Client.Timeout exceeded while awaiting headers)
```

The resulting output in Centreon could look like:

```text
Event 'Warning' for object 'Pod/graphite-0' with message 'Liveness probe failed: Get "http://10.244.2.10:8080/": context deadline exceeded (Client.Timeout exceeded while awaiting headers)', Count: 1, First seen: 26m 21s ago (2021-03-11T12:26:23Z), Last seen: 26m 21s ago (2021-03-11T12:26:23Z)
```

The collected metrics will be:

| Metric                      |
|-----------------------------|
| `events.type.warning.count` |
| `events.type.normal.count`  |

It is then possible to place thresholds using the following special variables:

- `%{type}`
- `%{object}`
- `%{message}`
- `%{count}`
- `%{first_seen}`
- `%{last_seen}`
- `%{name}`
- `%{namespace}`

The defaults values are the following:

| Threshold | Value                   | Description                                             |
|-----------|-------------------------|---------------------------------------------------------|
| Warning   | `%{type} =~ /warning/i` | Will raise a warning alert if there is `warning` events |
| Critical  | `%{type} =~ /error/i`   | Will raise a critical alert if there is `error` events  |

Refer to the
[official documentation](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application-introspection/)
for more information about collected metrics and how to fine tune your
thresholds.

### CronJobs status

This indicator allows to check that CronJobs are executed as they should,
like the `kubectl get cronjobs` can provide:

```text
NAME    SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
hello   */1 * * * *   False     1        6s              2d1h
```

The resulting output in Centreon could look like:

```text
CronJob 'hello' Jobs Active: 1, Last schedule time: 6s ago (2021-03-11T12:31:00Z)
```

The collected metric for each CronJobs will be:

| Metric                      | Kubernetes metric        |
|-----------------------------|--------------------------|
| `cronjob.jobs.active.count` | `active`                 |

If the service collects metrics of several CronJobs (depending on the
chosen scenario), CronJob's name will be appended to the metric name:

| Metric                            |
|-----------------------------------|
| `hello#cronjob.jobs.active.count` |

It is then possible to place thresholds using the following special variables:

- `%{active}`
- `%{last_schedule}`
- `%{name}`
- `%{namespace}`

There is no default thresholds. An interesting one could be the following:
`%{last_schedule} > x` where `x` in seconds is the duration beyond which
the CronJob is considered not running as scheduled.

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)
for more information about collected metrics and how to fine tune your
thresholds.

### DaemonSets status

This indicator will ensure that DaemonSets are within defined bounds by
looking at the number of available and/or up-to-date pods compared to
the desired count, like the `kubectl get daemonsets` can provide:

```text
NAMESPACE     NAME                    DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                   AGE
kube-system   kube-flannel-ds-amd64   3         3         3       3            3           beta.kubernetes.io/arch=amd64   624d
kube-system   kube-proxy              3         3         3       3            3           kubernetes.io/os=linux          624d
```

The resulting output in Centreon could look like:

```text
Daemonset 'kube-flannel-ds-amd64' Pods Desired: 3, Current: 3, Available: 3, Up-to-date: 3, Ready: 3, Misscheduled: 0
Daemonset 'kube-proxy' Pods Desired: 3, Current: 3, Available: 3, Up-to-date: 3, Ready: 3, Misscheduled: 0
```

The collected metrics for each Daemonsets will be:

| Metric                              | Kubernetes metric        |
|-------------------------------------|--------------------------|
| `daemonset.pods.desired.count`      | `desiredNumberScheduled` |
| `daemonset.pods.current.count`      | `currentNumberScheduled` |
| `daemonset.pods.available.count`    | `numberAvailable`        |
| `daemonset.pods.uptodate.count`     | `updatedNumberScheduled` |
| `daemonset.pods.ready.count`        | `numberReady`            |
| `daemonset.pods.misscheduled.count` | `numberMisscheduled`     |

If the service collects metrics of several DaemonSets (depending on the
chosen scenario), DaemonSet's name will be appended to the metric name:

| Metric                                    |
|-------------------------------------------|
| `kube-proxy#daemonset.pods.desired.count` |

It is then possible to place thresholds using the following special variables:

- `%{desired}`
- `%{current}`
- `%{available}`
- `%{up_to_date}`
- `%{ready}`
- `%{misscheduled}`
- `%{name}`
- `%{namespace}`

The defaults values are the following:

| Threshold | Value                        | Description                                                                                  |
|-----------|------------------------------|----------------------------------------------------------------------------------------------|
| Warning   | `%{up_to_date} < %{desired}` | Will raise a warning alert if the number of up-to-date pods is lower than the desired number |
| Critical  | `%{available} < %{desired}`  | Will raise a critical alert if the number of available pods is lower than the desired number |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)
for more information about collected metrics and how to fine tune your
thresholds.

### Deployments status

This indicator will ensure that Deployments are within defined bounds by
looking at the number of available and/or up-to-date replicas compared to
the desired count, like the `kubectl get deployments` can provide:

```text
NAMESPACE              NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
kube-system            coredns                     2/2     2            2           624d
kube-system            tiller-deploy               1/1     1            1           624d
kubernetes-dashboard   dashboard-metrics-scraper   1/1     1            1           37d
kubernetes-dashboard   kubernetes-dashboard        1/1     1            1           37d
```

The resulting output in Centreon could look like:

```text
Deployment 'coredns' Replicas Desired: 2, Current: 2, Available: 2, Ready: 2, Up-to-date: 2
Deployment 'tiller-deploy' Replicas Desired: 1, Current: 1, Available: 1, Ready: 1, Up-to-date: 1
Deployment 'dashboard-metrics-scraper' Replicas Desired: 1, Current: 1, Available: 1, Ready: 1, Up-to-date: 1
Deployment 'kubernetes-dashboard' Replicas Desired: 1, Current: 1, Available: 1, Ready: 1, Up-to-date: 1
```

The collected metrics for each Deployments will be:

| Metric                                | Kubernetes metric              |
|---------------------------------------|--------------------------------|
| `deployment.replicas.desired.count`   | `replicas` (in `spec` entry)   |
| `deployment.replicas.current.count`   | `replicas` (in `status` entry) |
| `deployment.replicas.available.count` | `availableReplicas`            |
| `deployment.replicas.ready.count`     | `readyReplicas`                |
| `deployment.replicas.uptodate.count`  | `updatedReplicas`              |

If the service collects metrics of several Deployments (depending on the
chosen scenario), Deployment's name will be appended to the metric name:

| Metric                                            |
|---------------------------------------------------|
| `tiller-deploy#deployment.replicas.desired.count` |

It is then possible to place thresholds using the following special variables:

- `%{desired}`
- `%{current}`
- `%{available}`
- `%{ready}`
- `%{up_to_date}`
- `%{name}`
- `%{namespace}`

The defaults values are the following:

| Threshold | Value                        | Description                                                                                      |
|-----------|------------------------------|--------------------------------------------------------------------------------------------------|
| Warning   | `%{up_to_date} < %{desired}` | Will raise a warning alert if the number of up-to-date replicas is lower than the desired number |
| Critical  | `%{available} < %{desired}`  | Will raise a critical alert if the number of available replicas is lower than the desired number |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
for more information about collected metrics and how to fine tune your
thresholds.

### Nodes status

This indicator will ensure that Nodes are running well by looking at the
conditions statuses, like the `kubectl describe nodes` can list:

```text
Conditions:
  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----             ------  -----------------                 ------------------                ------                       -------
  MemoryPressure   False   Thu, 11 Mar 2021 14:20:25 +0100   Tue, 26 Jan 2021 09:38:11 +0100   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure     False   Thu, 11 Mar 2021 14:20:25 +0100   Wed, 17 Feb 2021 09:37:40 +0100   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure      False   Thu, 11 Mar 2021 14:20:25 +0100   Tue, 26 Jan 2021 09:38:11 +0100   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready            True    Thu, 11 Mar 2021 14:20:25 +0100   Tue, 26 Jan 2021 17:26:36 +0100   KubeletReady                 kubelet is posting ready status
```

The resulting output in Centreon could look like:

```text
Condition 'DiskPressure' Status is 'False', Reason: 'KubeletHasNoDiskPressure', Message: 'kubelet has no disk pressure'
Condition 'MemoryPressure' Status is 'False', Reason: 'KubeletHasSufficientMemory', Message: 'kubelet has sufficient memory available'
Condition 'PIDPressure' Status is 'False', Reason: 'KubeletHasSufficientPID', Message: 'kubelet has sufficient PID available'
Condition 'Ready' Status is 'True', Reason: 'KubeletReady', Message: 'kubelet is posting ready status'
```

No metrics are collected.

It is possible to place thresholds using the following special variables:

- `%{type}`
- `%{status}`
- `%{reason}`
- `%{message}`

The defaults values are the following:

| Threshold | Value                                                                                                                    | Description                                                                                                                                |
|-----------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Critical  | <code>(%{type} =~ /Ready/i && %{status} !~ /True/i) &#124;&#124; (%{type} =~ /.*Pressure/i && %{status} !~ /False/i)</code>  | Will raise a critical alert if the status of the `Ready` condition is not `True` or if the status of a `Pressure` condition is not `False` |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/architecture/nodes/#condition)
for more information about statuses and how to fine tune your thresholds.

### Nodes usage

This indicator will gather metrics about Nodes usage like pods allocation,
requests for CPU and memory made by those pods, and limits for CPU and
memory allowed to those same pods.

Using Kubernetes command line tool, it could look like the following:

- Nodes capacity:

    ```shell
    kubectl get nodes -o=custom-columns="NODE:.metadata.name,PODS ALLOCATABLE:.status.allocatable.pods,CPU ALLOCATABLE:.status.allocatable.cpu,MEMORY ALLOCATABLE:.status.allocatable.memory"
    NODE          PODS ALLOCATABLE   CPU ALLOCATABLE   MEMORY ALLOCATABLE
    master-node   110                2                 3778172Ki
    worker-node   110                2                 3778184Ki
    ```

- Running pods:

    ```shell
    kubectl get pods -o=custom-columns="NODE:.spec.nodeName,POD:.metadata.name,CPU REQUESTS:.spec.containers[*].resources.requests.cpu,CPU LIMITS:.spec.containers[*].resources.limits.cpu,MEMORY REQUESTS:.spec.containers[*].resources.requests.memory,MEMORY LIMITS:.spec.containers[*].resources.limits.memory"
    NODE          POD                                     CPU REQUESTS   CPU LIMITS   MEMORY REQUESTS   MEMORY LIMITS
    worker-node   coredns-74ff55c5b-g4hmt                 100m           <none>       70Mi              170Mi
    master-node   etcd-master-node                        100m           <none>       100Mi             <none>
    master-node   kube-apiserver-master-node              250m           <none>       <none>            <none>
    master-node   kube-controller-manager-master-node     200m           <none>       <none>            <none>
    master-node   kube-flannel-ds-amd64-fk59g             100m           100m         50Mi              50Mi
    worker-node   kube-flannel-ds-amd64-jwzms             100m           100m         50Mi              50Mi
    master-node   kube-proxy-kkwmb                        <none>         <none>       <none>            <none>
    worker-node   kube-proxy-vprs8                        <none>         <none>       <none>            <none>
    master-node   kube-scheduler-master-node              100m           <none>       <none>            <none>
    master-node   kubernetes-dashboard-7d75c474bb-7zc5j   <none>         <none>       <none>            <none>
    ```

From the Kubernetes dashboard, the metrics can be found in the
`Cluser > Nodes` menu:

- Listing from `Cluser > Nodes`:

    ![Cluster nodes listing](../../../assets/integrations/plugin-packs/procedures/cloud-kubernetes-api-cluster-nodes-listing.png)

- Allocation detail for a node:

    ![Node allocation detail](../../../assets/integrations/plugin-packs/procedures/cloud-kubernetes-api-cluster-nodes-detail.png)

The resulting output in Centreon could look like:

```text
Node 'master-node' CPU requests: 37.50% (0.75/2), CPU limits: 5.00% (0.1/2), Memory requests: 3.96% (150.00MB/3.70GB), Memory limits: 1.32% (50.00MB/3.70GB), Pods allocation: 7.27% (8/110)
Node 'worker-node' CPU requests: 35.00% (0.7/2), CPU limits: 115.00% (2.3/2), Memory requests: 31.51% (1.17GB/3.70GB), Memory limits: 115.21% (4.26GB/3.70GB), Pods allocation: 9.09% (10/110)
```

The collected metrics for each Nodes will be:

| Metric                       |
|------------------------------|
| `cpu.requests.percentage`    |
| `cpu.limits.percentage`      |
| `memory.requests.percentage` |
| `memory.limits.percentage`   |
| `pods.allocation.percentage` |

If the service collects metrics of several Nodes (depending on the
chosen scenario), Node's name will be appended to the metric name:

| Metric                                   |
|------------------------------------------|
| `worker-node#pods.allocation.percentage` |

Thresholds expressed in percentage can be put for all metrics, for warning
and critical alerts.

### PersistentVolumes status

This indicator will ensure that PersistentVolumes are operating correctly by
looking at the phase they are in, like the `kubectl get pv` can provide:

```text
NAME                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM                   STORAGECLASS   REASON   AGE
pv-nfs-kubestorage-001   5Gi        RWO            Retain           Available                                                   630d
pv-nfs-kubestorage-002   5Gi        RWO            Retain           Bound       tick/data-influxdb                              630d
pv-nfs-kubestorage-003   5Gi        RWO            Retain           Released    graphite/graphite-pvc                           630d
```

The resulting output in Centreon could look like:

```text
Persistent Volume 'pv-nfs-kubestorage-001' Phase is 'Available'
Persistent Volume 'pv-nfs-kubestorage-002' Phase is 'Bound'
Persistent Volume 'pv-nfs-kubestorage-003' Phase is 'Released'
```

No metrics are collected.

It is possible to place thresholds using the following special variables:

- `%{phase}`
- `%{name}`

The defaults values are the following:

| Threshold | Value                                     | Description                                                                        |
|-----------|-------------------------------------------|------------------------------------------------------------------------------------|
| Critical  | `%{phase} !~ /Bound|Available|Released/i` | Will raise a critical alert if the phase is not `Bound`, `Available` or `Released` |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
for more information about statuses and how to fine tune your thresholds.

### Pods status

This indicator will ensure that Pods and their containers are within defined
bounds by looking at the number of ready containers compared to
the desired count, like the `kubectl get pods` can provide:

```text
NAMESPACE              NAME                                                     READY   STATUS        RESTARTS   AGE
kube-system            kube-proxy-65zhn                                         1/1     Running       0          37d
kube-system            kube-proxy-kkwmb                                         1/1     Running       0          37d
kube-system            kube-proxy-vprs8                                         1/1     Running       0          37d
kube-system            tiller-deploy-7bf78cdbf7-z5n24                           1/1     Running       5          550d
kubernetes-dashboard   dashboard-metrics-scraper-79c5968bdc-vncxc               1/1     Running       0          37d
kubernetes-dashboard   kubernetes-dashboard-7448ffc97b-42rps                    1/1     Running       0          37d
```

The resulting output in Centreon could look like:

```text
Checking pod 'kube-proxy-65zhn'
    Containers Ready: 1/1 (100.00%), Status is 'Running', Restarts: 0
    Container 'kube-proxy' Status is 'running', State is 'ready', Restarts: 0
Checking pod 'kube-proxy-kkwmb'
    Containers Ready: 1/1 (100.00%), Status is 'Running', Restarts: 0
    Container 'kube-proxy' Status is 'running', State is 'ready', Restarts: 0
Checking pod 'kube-proxy-vprs8'
    Containers Ready: 1/1 (100.00%), Status is 'Running', Restarts: 0
    Container 'kube-proxy' Status is 'running', State is 'ready', Restarts: 0
Checking pod 'tiller-deploy-7bf78cdbf7-z5n24'
    Containers Ready: 1/1 (100.00%), Status is 'Running', Restarts: 5
    Container 'tiller' Status is 'running', State is 'ready', Restarts: 5
Checking pod 'dashboard-metrics-scraper-79c5968bdc-vncxc'
    Containers Ready: 1/1 (100.00%), Status is 'Running', Restarts: 0
    Container 'dashboard-metrics-scraper' Status is 'running', State is 'ready', Restarts: 0
Checking pod 'kubernetes-dashboard-7448ffc97b-42rps'
    Containers Ready: 1/1 (100.00%), Status is 'Running', Restarts: 0
    Container 'kubernetes-dashboard' Status is 'running', State is 'ready', Restarts: 0
```

The collected metrics for each Pods will be:

| Metric                      |
|-----------------------------|
| `containers.ready.count`    |
| `restarts.total.count`      |
| `containers.restarts.count` |

If the service collects metrics of several Pods (depending on the
chosen scenario), Pod's name and container's name will be appended to the
metric name:

| Metric                                                      |
|-------------------------------------------------------------|
| `coredns-74ff55c5b-g4hmt#containers.ready.count`            |
| `coredns-74ff55c5b-g4hmt#restarts.total.count`              |
| `coredns-74ff55c5b-g4hmt_coredns#containers.restarts.count` |

It is then possible to place thresholds using the following special variables:

- `%{name}`
- `%{status}`
- `%{state}` (containers only)
- `%{name}`
- `%{namespace}` (Pods only)

The defaults values are the following:

| Threshold            | Value                                                                   | Description                                                                                   |
|----------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Critical (pod)       | `%{status} !~ /running/i`                                               | Will raise a critical alert if a pod is not in a running status                               |
| Critical (container) | <code>%{status} !~ /running/i &#124;&#124; %{state} !~ /^ready$/</code> | Will raise a critical alert if a container is not in a running status or not in a ready state |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/pods/)
for more information about collected metrics and how to fine tune your
thresholds.

### ReplicaSets status

This indicator will ensure that ReplicaSets are within defined bounds by
looking at the number of ready replicas compared to the desired count,
like the `kubectl get replicasets` can provide:

```text
NAMESPACE              NAME                                   DESIRED   CURRENT   READY   AGE
kube-system            coredns-74ff55c5b                      2         2         2       44d
kube-system            tiller-deploy-7bf78cdbf7               1         1         1       630d
kubernetes-dashboard   dashboard-metrics-scraper-79c5968bdc   1         1         1       44d
kubernetes-dashboard   kubernetes-dashboard-7448ffc97b        1         1         1       44d
```

The resulting output in Centreon could look like:

```text
ReplicaSet 'coredns-74ff55c5b' Replicas Desired: 2, Current: 2, Ready: 2
ReplicaSet 'tiller-deploy-7bf78cdbf7' Replicas Desired: 1, Current: 1, Ready: 1
ReplicaSet 'dashboard-metrics-scraper-79c5968bdc' Replicas Desired: 1, Current: 1, Ready: 1
ReplicaSet 'kubernetes-dashboard-7448ffc97b' Replicas Desired: 1, Current: 1, Ready: 1
```

The collected metrics for each ReplicaSets will be:

| Metric                              | Kubernetes metric              |
|-------------------------------------|--------------------------------|
| `replicaset.replicas.desired.count` | `replicas` (in `spec` entry)   |
| `replicaset.replicas.current.count` | `replicas` (in `status` entry) |
| `replicaset.replicas.ready.count`   | `readyReplicas`                |

If the service collects metrics of several ReplicaSets (depending on the
chosen scenario), ReplicaSet's name will be appended to the metric name:

| Metric                                                       |
|--------------------------------------------------------------|
| `tiller-deploy-7bf78cdbf7#replicaset.replicas.desired.count` |

It is then possible to place thresholds using the following special variables:

- `%{desired}`
- `%{current}`
- `%{ready}`
- `%{name}`
- `%{namespace}`

The defaults values are the following:

| Threshold | Value                   | Description                                                                                  |
|-----------|-------------------------|----------------------------------------------------------------------------------------------|
| Critical  | `%{ready} < %{desired}` | Will raise a critical alert if the number of ready replicas is lower than the desired number |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)
for more information about collected metrics and how to fine tune your
thresholds.

### ReplicationControllers status

This indicator will ensure that ReplicationControllers are within defined
bounds by looking at the number of ready replicas compared to the desired
count, like the `kubectl get rc` can provide:

```text
NAMESPACE   NAME    DESIRED   CURRENT   READY   AGE
elk         nginx   3         3         3       2d19h
```

The resulting output in Centreon could look like:

```text
ReplicationController 'nginx' Replicas Desired: 3, Current: 3, Ready: 3
```

The collected metrics for each ReplicaSets will be:

| Metric                                         | Kubernetes metric              |
|------------------------------------------------|--------------------------------|
| `replicationcontroller.replicas.desired.count` | `replicas` (in `spec` entry)   |
| `replicationcontroller.replicas.current.count` | `replicas` (in `status` entry) |
| `replicationcontroller.replicas.ready.count`   | `readyReplicas`                |

If the service collects metrics of several ReplicationControllers (depending
on the chosen scenario), ReplicationController's name will be appended to
the metric name:

| Metric                                               |
|------------------------------------------------------|
| `nginx#replicationcontroller.replicas.desired.count` |

It is then possible to place thresholds using the following special variables:

- `%{desired}`
- `%{current}`
- `%{ready}`
- `%{name}`
- `%{namespace}`

The defaults values are the following:

| Threshold | Value                   | Description                                                                                  |
|-----------|-------------------------|----------------------------------------------------------------------------------------------|
| Critical  | `%{ready} < %{desired}` | Will raise a critical alert if the number of ready replicas is lower than the desired number |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/)
for more information about collected metrics and how to fine tune your
thresholds.

### StatefulSets status

This indicator will ensure that StatefulSets are within defined bounds by
looking at the number of ready/up-to-date replicas compared to the desired
count, like the `kubectl get statefulsets` can provide:

```text
NAMESPACE    NAME                                        READY   AGE
elk          elasticsearch-master                        2/2     44d
graphite     graphite                                    1/1     3d
prometheus   prometheus-prometheus-operator-prometheus   1/1     619d
```

The resulting output in Centreon could look like:

```text
StatefulSet 'elasticsearch-master' Replicas Desired: 2, Current: 2, Up-to-date: 2, Ready: 2
StatefulSet 'graphite' Replicas Desired: 1, Current: 1, Up-to-date: 1, Ready: 1
StatefulSet 'prometheus-prometheus-operator-prometheus' Replicas Desired: 1, Current: 1, Up-to-date: 1, Ready: 1
```

The collected metrics for each StatefulSets will be:

| Metric                                | Kubernetes metric              |
|---------------------------------------|--------------------------------|
| `statefulset.replicas.desired.count`  | `replicas` (in `spec` entry)   |
| `statefulset.replicas.current.count`  | `currentReplicas`              |
| `statefulset.replicas.ready.count`    | `readyReplicas`                |
| `statefulset.replicas.uptodate.count` | `updatedReplicas`              |

If the service collects metrics of several StatefulSets (depending on the
chosen scenario), StatefulSet's name will be appended to the metric name:

| Metric                                        |
|-----------------------------------------------|
| `graphite#statefulset.replicas.desired.count` |

It is then possible to place thresholds using the following special variables:

- `%{desired}`
- `%{current}`
- `%{ready}`
- `%{up_to_date}`
- `%{name}`
- `%{namespace}`

The defaults values are the following:

| Threshold | Value                        | Description                                                                                      |
|-----------|------------------------------|--------------------------------------------------------------------------------------------------|
| Warning   | `%{up_to_date} < %{desired}` | Will raise a warning alert if the number of up-to-date replicas is lower than the desired number |
| Critical  | `%{ready} < %{desired}`      | Will raise a critical alert if the number of ready replicas is lower than the desired number     |

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
for more information about collected metrics and how to fine tune your
thresholds.

## Prerequisites

### Centreon Plugin

Install this Plugin on each needed Poller:

```shell
yum install centreon-plugin-Cloud-Kubernetes-Api
```

### Kubernetes

As mentioned in the introduction, two ways of communication are available:

- the RestAPI exposed by the Kubernetes cluster,
- the CLI tool kubectl to communicate with the cluster's control plane.

For better performances, we recommand to use the RestAPI.

#### Create a service account

Both flavors can use a service account with sufficient rights to access
Kubernetes API.

Create a dedicated service account `centreon-service-account` in the
`kube-system` namespace to access the API:

```shell
kubectl create serviceaccount centreon-service-account --namespace kube-system
```

Create a cluster role `api-access` with needed privileges for the Plugin,
and bind it to the newly created service account:

```shell
cat <<EOF | kubectl create -f -
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: api-access
rules:
  - apiGroups:
      - ""
      - apps
      - batch
    resources:
      - cronjobs
      - daemonsets
      - deployments
      - events
      - namespaces
      - nodes
      - persistentvolumes
      - pods
      - replicasets
      - replicationcontrollers
      - statefulsets
    verbs:
      - get
      - list
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: api-access
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: api-access
subjects:
- kind: ServiceAccount
  name: centreon-service-account
  namespace: kube-system
EOF
```

Refer to the official documentation for
[service account creation](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens)
or information about
[secret concept](https://kubernetes.io/docs/concepts/configuration/secret/).

#### Using RestAPI

If you chose to communicate with your Kubernetes platform's RestAPI, the
following prerequisites need to be matched:

- Expose the API with TLS,
- Retrieve token from service account.

##### Expose the API

As the API is using HTTPS, you will need a certificate.

You can make an auto-signed key/certificate couple with the following
command:

```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/kubernetesapi.key -out /etc/ssl/certs/kubernetesapi.crt
```

Then load it as `api-certificate` into the cluster, from the master node:

```shell
kubectl create secret tls api-certificate --key /etc/ssl/private/kubernetesapi.key --cert /etc/ssl/certs/kubernetesapi.crt
```

The ingress can now be created:

```shell
cat <<EOF | kubectl create -f -
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: kubernetesapi-ingress
  namespace: default
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/backend-protocol: HTTPS
spec:
  tls:
    - hosts:
      - kubernetesapi.local.domain
      secretName: api-certificate
  rules:
  - host: kubernetesapi.local.domain
    http:
      paths:
      - backend:
          serviceName: kubernetes
          servicePort: 443
        path: /
EOF
```

Adapt the host entry to your needs.

Refer to the official documentation for
[ingresses management](https://kubernetes.io/docs/concepts/services-networking/ingress/).

##### Retrieve token from service account

Retrieve the secret name from the previously created service account:

```shell
kubectl get serviceaccount centreon-service-account --namespace kube-system --output jsonpath='{.secrets[].name}'
```

Then retrieve the token from the service account secret:

```shell
kubectl get secrets centreon-service-account-token-xqw7m --namespace kube-system --output jsonpath='{.data.token}' | base64 --decode
```

This token will be used later for Centreon host configuration.

#### Using kubectl

If you chose to communicate with the cluster's control plane with kubectl, the
following prerequisites need to be matched:

- Install the kubectl tool,
- Create a kubectl configuration.

Those actions are needed on all Pollers that will do Kubernetes monitoring.

##### Install kubectl

Download the latest release with the following command:

```shell
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

> Be sure to download a version within one minor version difference of
> your cluster. To download a specific version, change the embedded curl by
> the version like `v1.20.0`.

Install the tool in the binaries directory:

```shell
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

Refer to the
[official documentation](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
for more details.

##### Create a kubectl configuration

To access the cluster, kubectl needs a configuration file with all needed
information.

Here is an example of a configuration file creation based on a service
account (created in [previous chapter](#create-a-service-account)).

You will need to fill the following information and execute the commands
on the master node:

```shell
ip=<master node ip>
port=<api port>
account=centreon-service-account
namespace=kube-system
clustername=my-kube-cluster
context=my-kube-cluster
secret=$(kubectl get serviceaccount $account --namespace $namespace --output jsonpath='{.secrets[].name}')
ca=$(kubectl get secret $secret --namespace $namespace --output jsonpath='{.data.ca\.crt}')
token=$(kubectl get secret $secret --namespace $namespace --output jsonpath='{.data.token}' | base64 --decode)
```

> The account name and namespace must match with the account created earlier.
> All others need to be adapted.

Then execute this command to generate the config file

```shell
cat <<EOF >> config
apiVersion: v1
kind: Config
clusters:
- name: ${clustername}
  cluster:
    certificate-authority-data: ${ca}
    server: https://${ip}:${port}
contexts:
- name: ${context}
  context:
    cluster: ${clustername}
    namespace: ${namespace}
    user: ${account}
current-context: ${context}
users:
- name: ${account}
  user: ${token}
EOF
```

This will create a `config` file. This file must be copied to the Pollers
Engine user's home, usually in a `.kube` directory (i.e.
`/var/lib/centreon-engine/.kube/config`).

This path will be used later in Centreon host configuration.

> You may also want to copy the configuration to Gorgone user's home
> if using Host Discovery.

Refer to the
[official documentation](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)
for more details.

## Monitoring configuration

### Manual creation

Add a host from `Configuration > Hosts` menu and choose a template
between `Cloud-Kubernetes-Api` (global monitoring, scenarii 1 and 2) and
`Cloud-Kubernetes-Node-Api` (unitary monitoring, scenario 3) from the list.

In both cases, fill the following fields:

| Field          | Description              |
|----------------|--------------------------|
| Host name      | Name of the host         |
| Alias          | Host description         |
| IP             | Host IP Address          |
| Monitored from | Monitoring Poller to use |

> IP address can either be the Kubernetes IP (node master) or the IP of each
> nodes if choosing `Cloud-Kubernetes-Node-Api` template.

Then set the values for each needed macros:

- If using RestAPI:

    | Macro                     | Description                                       | Example value               |
    |---------------------------|---------------------------------------------------|-----------------------------|
    | `KUBERNETESAPICUSTOMMODE` | Plugin custom mode                                | `api`                       |
    | `KUBERNETESAPIHOSTNAME`   | Hostname or address of the Kubernetes API service | `kubenetesapi.local.domain` |
    | `KUBERNETESAPIPORT`       | Port of the API                                   | `443`                       |
    | `KUBERNETESAPIPROTO`      | Protocol used by API                              | `https`                     |
    | `KUBERNETESAPITOKEN`      | Token retrieved from service account              | `eyJhbG...KEw`              |

- If using kubectl:

    | Macro                     | Description                    | Example value    |
    |---------------------------|--------------------------------|------------------|
    | `KUBERNETESAPICUSTOMMODE` | Plugin custom mode             | `kubectl`        |
    | `KUBECTLCONFIGFILE`       | Path to the configuration file | `~/.kube/config` |

Optional macros values can be set:

| Macro          | Description                                | Default value |
|----------------|--------------------------------------------|---------------|
| `PROXYURL`     | URL of the proxy (if needed)               | none          |
| `TIMEOUT`      | Time in seconds before the query times out | `10`          |
| `EXTRAOPTIONS` | Extra options (if needed)                  | none          |

If choosing `Cloud-Kubernetes-Api`, host will be added with all services to
check each Kubernetes unit (scenario 1).

If choosing `Cloud-Kubernetes-Node-Api`, host will be added with only one
service to check node usage (scenario 3).

Click on the **Save** button and you're good to push the configuration to
the Engines.

### Automatic discovery

#### Host discovery

Add a job from `Configuration > Discovery` menu and choose a provided
between `Kubernetes Nodes (RestAPI)` and `Kubernetes Nodes (Kubectl)`
from the list.

Set credentials to access the Kubernetes API depending on the chosen flavor:

- If using RestAPI: set the token
  [retrieved ealier](#retrieve-token-from-service-account) from the service
  account,
- If using kubectl: set the path to the
  [created configuration file](#create-a-kubectl-configuration) (prefer using
  relative path to make it work for both discovery and monitoring,
  i.e. `~/.kube/config`).

For RestAPI: hostname/address, port and protocol are needed to access
the Kubernetes API.

By default, discovery will add hosts with a minimal host template that will
only collect metrics for the Kubernetes nodes usage. It will then add a
special `KUBERNETESNODENAME` macro with node name as value (scenario 3).

If scheduled, job will add new nodes added to the cluster automatically.

#### Service discovery

In addition to [manual creation](#manual-creation), it is possible to add a
service for each instances of each Kubernetes units (scenario 2). It is then
recommended to disable the previously created services when adding host.

Launch a scan on the added host from `Configuration > Service > Scan` menu,
and add all wanted services.

If enabled, service discovery rule will add new instances created in the
cluster automatically.

## Troubleshooting

Here are some common errors and their description. You will often want to use
the `--debug` option to get the root error.

| Error                                                                                                  | Description                                                                                                                                                                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `UNKNOWN: Cannot decode json response: Can't connect to <hostname>:<port> (certificate verify failed)` | This error may appear if the TLS cetificate in self-signed. Use the option `--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE"` to omit the certificate validity.                                                                                                                                             |
| `UNKNOWN: API return error code '401' (add --debug option for detailed message)`                       | If adding `--debug` option, API response message says `Unauthorized`. It generally means that the provided token is not valid.                                                                                                                                                                            |
| `UNKNOWN: API return error code '403' (add --debug option for detailed message)`                       | If adding `--debug` option, API response message says `nodes is forbidden: User "system:serviceaccount:<namespace>:<account>" cannot list resource "nodes" in API group "" at the cluster scope`. It means that the cluster role RBAC bound to the service account does not have the necessary privileges |
| `UNKNOWN: CLI return error code '1' (add --debug option for detailed message)`                         | If adding `--debug` option, CLI response message says `error: stat ~/.kube/config:: no such file or directory`. The provided configuration file cannot be found.                                                                                                                                          |
| `UNKNOWN: CLI return error code '1' (add --debug option for detailed message)`                         | If adding `--debug` option, CLI response message says `error: error loading config file "/root/.kube/config": open /root/.kube/config: permission denied`. The provided configuration file cannot be read by current user.                                                                                |
| `UNKNOWN: CLI return error code '1' (add --debug option for detailed message)`                         | If adding `--debug` option, CLI response message says `error: error loading config file "/root/.kube/config": v1.Config.AuthInfos: []v1.NamedAuthInfo: v1.NamedAuthInfo.AuthInfo: v1.AuthInfo.ClientKeyData: decode base64: illegal base64...`. The provided configuration file is not valid.             |
| `UNKNOWN: CLI return error code '1' (add --debug option for detailed message)`                         | If adding `--debug` option, CLI response message says `The connection to the server <hostname>:<port> was refused - did you specify the right host or port?`. The provided configuration file is not valid.             |
