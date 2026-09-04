---
id: ba-simulation
title: Simulate Business Activities
description: "Simulate the status of a Business Activity dependency tree before saving your configuration and pushing it to production"
---

Use the simulation mode to validate the behavior of a Business Activity (BA) dependency tree before saving your changes and pushing the configuration to production. You can simulate indicator statuses, adjust the values that influence status calculation, and decide afterward whether to keep or discard the changes you made.

## Access the simulation mode

- The **Simulation mode** button is located at the top right of the BA configuration page.

- The button is only enabled when the parent Business Activity has at least one indicator attached. If no indicator is configured, the button is disabled and a tooltip explains that simulation is not possible without at least one indicator.

## Use the simulation mode

- Clicking the **Simulation mode** button switches the configuration page to a dedicated mode; it does not open a new page. The full dependency tree is displayed, and by default every last-level indicator (an indicator that has no children, or cannot have any) starts with the status OK.

### Simulate a node

Click a Business Activity node in the tree to open its configuration/simulation panel. This panel has two sections:

- BA configuration

  - Change the calculation method applied to the node.
  - Change how planned downtime on indicators affects the status calculation of the node.

- BA indicators
  
  This section lists every indicator attached to the node, with the following information: Name, Status, State.

## Exit the simulation mode

- Click **Exit simulation** at any time to leave simulation mode. You are then offered three choices:

  - **Back to simulation:** The changes you made are kept in the tree.
  - **Exit without applying:** None of the changes you made to nodes or indicators during simulation are kept.
  - **Apply changes:** The changes you made to nodes and indicators are carried over to the configuration, ready to be saved the next time you save the full tree.
