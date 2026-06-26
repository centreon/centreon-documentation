---
id: hero-time
title: Hero Time
--- 

## Concept

Hero Time is an Experience Monitoring-specific measurement. It doesn't exist elsewhere. It measures the time the Experience Monitoring probe takes between the start and the end of a step.

A step begins when an action is performed, such as clicking a link, filling a form, adding an item to the cart, etc. The step ends when all success verifications are met. These verifications can be, for example, the appearance of a popup, navigation to a new page, or a request to one of your servers. Hero Time measures the time between these two events.

## Examples

### Loading a web page

The probe arrives on the site's homepage and must click a link to one of the categories. By clicking, a new page should load. Hero Time will measure the time between the click and the completion of the HTML document download. The page rendering will continue after Hero Time ends, but the probe has already confirmed that the navigation succeeded.

### Adding an item to the cart

For a simple product (no need to choose size or color), the probe will simply click "Add to cart". When a user adds an item to the cart, they don't navigate to another page, but a popup should inform them that the item was added and the cart icon updates to show the new item count.

In this case, the expected success verifications are multiple:

- A request to **/add-to-cart?id=my-item-id** must be made and succeed.
- The popup must appear.
- The number in the cart must update.

The probe clicks "Add to cart." The request to **/add-to-cart?id=my-item-id** is initiated. Hero Time continues while the request is pending because the server hasn't responded yet.

When the server responds, the request is validated. The first verification is therefore satisfied, but Hero Time continues because the other verifications are still pending.

Once the request is validated, the popup appears almost instantly. The second verification is satisfied.

However, the cart count only updates every 10 seconds. The probe waits to see the count change. After a few seconds it changes. The final verification is satisfied and Hero Time stops.
