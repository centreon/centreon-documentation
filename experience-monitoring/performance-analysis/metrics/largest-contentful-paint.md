---
id: largest-contentful-paint
title: LCP - Largest Contentful Paint (Web Vitals)
--- 

> The Largest Contentful Paint is documented on [Google's Web Dev site](https://web.dev/lcp/). This page summarizes the core information.

> Largest Contentful Paint (LCP) focuses on perceived loading speed for users because it indicates when the page's main content has loaded. A fast LCP ensures that the page is usable for the user.

## What is LCP?

Largest Contentful Paint (LCP) measures the render time of the largest image or text block visible in the viewport from the start of page load.

## What is a good LCP score?

For an optimal user experience, Experience Monitoring should aim for an LCP below 2.5 seconds. To ensure this target is met for most users, check that 75% of your users (on both mobile and desktop) achieve this score. Experience Monitoring's Real User Monitoring can help you verify this.


## Which elements can be considered the largest content?

Elements that are considered include:

- `<img>`
- `<image>` inside an `<svg>` element
- `<video>` via its poster image
- An element with a background image loaded via [`url`](https://developer.mozilla.org/docs/Web/CSS/url()) (as opposed to CSS gradients)
- Block-level elements containing text nodes or inline text

Additional element types (e.g., `<svg>`, `<video>`) are considered in future evolutions of the standard.

## How is an element's size determined?

- The size reported for the largest content element is generally the visible size in the viewport. If the element extends outside the viewport, or if parts of it are clipped or overflow-hidden, those portions don't count toward the element's size.

- For image elements that have been scaled from their intrinsic size, the reported size is the smaller of the visible size and the intrinsic size. For example, images that are displayed much smaller than their intrinsic size will report only the display size; images that are stretched larger will report their intrinsic size.

- For text elements, only the size of their text nodes is considered (the smallest rectangle enclosing all text nodes).

- For all elements, margins, padding, and borders applied via CSS are not included in the size calculation.
