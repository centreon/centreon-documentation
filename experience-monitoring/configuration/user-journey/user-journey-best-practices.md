---
id: user-journey-best-practices
title: User Journey Best Practices
--- 

## Managing iframes

Because of the way Experience Monitoring handles possible iframes on a page, one important point must be considered in this specific case. If iframes are present and you want to manipulate CSS selectors, you must choose selectors that are either inside an iframe or outside it — **NOT** selectors that "cross" the two contexts, which will not work.

Here is an explanatory example. Imagine the HTML is structured like this:

```html
<div class="main">
  <form id="my-form"></form>
  <iframe>
    <div class="frame-content">
      <form id="my-form">
      </form>
    </div>
  </iframe>
</div>
```

```css
.main iframe
```

⇒ returns the iframe

```css
#my-form
```

⇒ returns the first `my-form` (the one that's not inside the iframe)

```
.main iframe .frame-content
```

⇒ doesn't work, because `.frame-content` belongs to the iframe's document

```
.frame-content #my-form
```

⇒ returns the form that is inside the iframe this time

```
iframe #my-form
```

⇒ doesn't work because `#my-form` is already inside the iframe document.

> **When you want an element that is inside an iframe, you must act as if EVERYTHING outside the iframe's CONTENT does not exist.**

## Best Practices

### Prefer CSS selectors over text
    
    The advantage of choosing by text is that you can copy-paste visible text from the page. The downside is that the same text can appear elsewhere in the page — sometimes hidden — and therefore not work as expected.
    
    Of course, the more specific the text, the likelier it is to be unique.
    
    Note: a phrase visible on the site can actually be fragmented in the HTML. This commonly happens when one or more words have different styling (bold or a different color). Since Experience Monitoring searches inside the HTML for the specified string, if the text is split, it may not be found.
    
    To be sure the string you add in Experience Monitoring matches exactly what's in the HTML, we recommend right-clicking and choosing "Inspect" to copy the string directly from the HTML — this avoids errors. Also remove any leading or trailing spaces manually.

### Specify a CSS selector for forms
    
    If you don't provide a CSS selector for a form, the probe will try to fill matching fields everywhere on the page. Similarly, without a form selector, automatic submission will submit the first form found.
    
    **Specifying a CSS selector ensures the correct fields are filled and the form is submitted properly.**

### Clean utility or generated classes from CSS selectors
    
    When you use Chrome's "Copy CSS selector" feature, the generated selector often contains many CSS classes (notation `.class-name`) that may be unnecessary. Think of utility classes (e.g. `.alert-danger`) or framework-generated classes (e.g. `.menu-item-x823ds83sa9c`). These classes don't improve selector precision and can hurt maintainability (a minor change to a utility class will cause an "Element not found" error) and may even break the selector if classes are randomly generated on each load.
    
    Likewise, consider loosening strict child relationships (`>`). Removing `>` preserves hierarchical context without enforcing a direct parent-child relation, which makes the selector more resilient if an element is inserted in-between.

### Avoid the "wait" action
    
    The wait action should be a last resort when you cannot add a verification on the previous action.
    
    **It's always preferable to choose a verification** because it avoids fine-tuning durations to keep the user journey stable, and it doesn't affect interaction measurements (wait is counted in the Hero Time).
    
    There are cases where wait is necessary because no verification is possible, for example:
    
    - The page adds event handlers after onLoad: the intended action may be triggered before the page is ready to handle it (this is a site bug but can happen more often with the probe because it's faster than a human).
    - An action modifies the page but it's not possible to verify that modification. For example, if the change concerns an attribute other than `id` or `class` (which are monitored), you may need to use wait (but first question whether the action is meaningful).
    
    To avoid affecting measurements, isolate wait actions in a separate, unmeasured interaction where possible (note: verifications are not mandatory for unmeasured interactions).

### Avoid randomness
    
    Random selection may be useful for load testing but can introduce performance variations that make measurements hard to compare.
    
    **Prefer a fixed target or consistently select the first element.** This also enables more precise verifications tailored to the visited page.

### The "Run a script " action

Using a script is recommended only when none of the other available actions in the user journey configuration work. Note that a script only ensures an action is triggered; it does not guarantee the result. For this reason, you must add at least one verification after each script.

    Avoid using a script to replace a verification, to hide an instability in the website.

    Keep your scripts short, simple and with precise specifications.

### Choose verification targets wisely
    
    Verifications are used to measure the **Hero Time** — a key indicator of perceived performance. It's essential to pick elements that truly represent the user experience while avoiding redundant checks that add maintenance overhead.
    
    **Our recommendation: identify 2–3 key elements** (for example, the largest image or **background-image**, a structuring text like the main heading, and the primary call-to-action). This yields a meaningful, maintainable metric without overloading the scenario with unnecessary verifications.

### Add verifications on action targets
    
    When an action targets a text or a CSS selector, it's beneficial to add a verification for that element **in the previous action** to ensure the target has appeared (the target is by definition an important element that should be included in the Hero Time).
    
    **Example:** The 4th action in my journey is **Click the 'Add to cart' button.** I therefore add a verification in my 3rd action of type **The text "Add to cart" was inserted into the page.**

### Add a navigation verification for actions that navigate
    
    A navigation verification not only includes the navigation request time in the Hero Time but also:
    - Verifies the response status code
    - Waits for the page load event (without counting it in the Hero Time), which also allows capturing a speedIndex.

### Add verifications on important AJAX requests
    
    This validates the response code of the AJAX call and ensures the Hero Time reflects the page's most important elements.

### Clean request verifications from superfluous parameters
    
    Some requests include parameters that can vary:
    
    - Sometimes, e.g. a product ID on a dynamic step
    - Or systematically (e.g. cache-bypass like `?_=<timestamp>`).
    
    Such parameters reduce maintainability (or can cause errors when parameters change). **Ideally include only the parameters necessary to identify the page request**, so the probe won't be sensitive to additional parameters.
    
    Example: if you specify the expected request as `*/addToCart?qty=1`, then any request ending with `/addToCart` will match when `qty=1` is present, even if other parameters are present before or after in the URL.

### Filter certain 3rd-party tags (but not too much)
    
    Websites often integrate many third-party solutions. It's common to blacklist analytics trackers to avoid skewing marketing statistics.
    
    To address this, Experience Monitoring includes a default blacklist for new scenarios (it filters requests to Google Analytics, for example), but some site-specific trackers may still pass. It's a good idea to check this with your digital marketing team to ensure there is no objection to Experience Monitoring requesting their other tags.
    
    Keep in mind that some third-party tags are necessary for the page to function correctly. In such cases, do not block them.

### Protips on using CSS selectors

#### Make your CSS selectors robust and reliable

To ensure monitoring scenarios are reliable, use CSS selectors that are explicit yet resilient to HTML changes. Follow these best practices:

**1. Prefer unique IDs or explicit classes**

A selector like `div.modal-add-to-cart` is better than a generic `div.w-full` because it's more specific to a business function. Purely stylistic classes (often short, generic, or from CSS frameworks) are likely to be reused elsewhere and cause collisions.

> Simple rule: the more readable and functional a name is, the more reliable it will be.

**2. Use IDs when available**

Selectors based on an HTML `id` (like `#add-to-cart-btn`) are often safest because they're supposed to be unique on the page. If the target has an ID, prefer it.

**3. Disambiguate with cascading selectors**

When multiple elements share the same selector (e.g. several `button.qty`), specify their context to avoid errors. For example:

```css
div.modal-add-to-cart button.qty
```

This selector targets only `.qty` buttons inside that specific modal, restricting the search to a precise DOM area and making your scenario more stable against changes.

**4. Favor hierarchical selectors with one or more spaces**

A selector like `section.product-detail div.buy-zone button.cta` strikes a good balance between specificity and flexibility. It remains robust even if an extra tag level is inserted in the HTML (which would break an overly strict selector).

#### Useful examples of advanced CSS selectors

Here are some advanced CSS selector examples that can be very useful in certain situations:

**:not()**

Example 1:
**.counter.qty:not(.empty)** : `.qty` class without the `.empty` class (`<div class="qty">`)

Using `:not()` is particularly useful to indicate that the cart is no longer empty. The `:not(...)` can also detect the **disappearance** of a class on an element — think of the test in reverse.

Example 2:

Another common example is a button that starts disabled and has a `.disabled` class. Suppose the button has the ID `product-addtocart-button`. In the page's initial HTML, the button may look like:

```html
<button id="product-addtocart-button" class="add-to-cart disabled">
```

After an action (e.g. selecting a product size), the button will be enabled by removing the `.disabled` class, becoming:

```html
<button id="product-addtocart-button" class="add-to-cart">
```

You can then add a test that checks for the selector: **#product-addtocart-button:not(.disabled)**.

If you test that selector in Chrome's console while the button is disabled, it returns nothing. Once the size is selected and `.disabled` disappears, the selector returns the element. In Experience Monitoring, the selector **#product-addtocart-button:not(.disabled)** thus "appears" — a perfect test to verify the add-to-cart button is enabled before clicking it.

Example 3:
The `:not()` syntax applies to attributes as well. Experience Monitoring also monitors the appearance and disappearance of `disabled` attributes because a button's "grayed" state is frequently represented by an attribute rather than a class (site-specific subtlety!).

You can encounter a button like:

```html
<button id="product-addtocart-button" class="add-to-cart" disabled>
```

Notice `disabled` is an attribute, not a class. To detect the removal of this attribute, wait for the selector:

**#product-addtocart-button:not([disabled])**

Be aware the attribute can also be set to a string, e.g.:

```html
<button id="product-addtocart-button" class="add-to-cart" disabled="disabled">
```

If the site doesn't remove the attribute but sets it to "false" when enabling the button:

```html
<button id="product-addtocart-button" class="add-to-cart" disabled="false">
```

Then specify the expected value in the `:not()` selector like:

**#product-addtocart-button:not([disabled="disabled"])**

In that case, the selector will "appear" when the `disabled` attribute is removed OR when its value changes to anything other than "disabled" (e.g. `disabled="false"`). This still achieves the goal of detecting when the button becomes enabled.

**a[href="https://www.xxxxx.com/"]**

This selector targets an anchor (`a`) whose destination URL is `https://www.xxxxx.com/`. It can be useful but be cautious: using this is like navigating to a very specific URL. If the destination URL changes even slightly, the scenario will fail.
When buttons have clear classes or IDs, prefer those for click actions; then Experience Monitoring will adapt to small destination-URL changes like a real user.
We recommend this pattern for:

- URLs unlikely to change, e.g. `www.site.com/checkout/cart/`.
- Or when IDs/classes don't allow reliable selection and you need a fallback. For example, if you want to click a specific category in a menu and your selector ends up clicking the 8th item in a list, a small site change could break the scenario — then using `a[href="https://www.xxxxx.com/"]` is acceptable.

**button[data-role="change-store"]**

You can target elements by specific attributes. This selector clicks a button like `<button data-role="change-store">`.

> Experience Monitoring doesn't systematically monitor **all attribute state changes** after capturing the initial HTML. For performance reasons, Experience Monitoring focuses on monitoring:

- class changes (appearance/disappearance)
- `disabled` or `disable` attribute changes.

Other changes may not be detected. In the example above, if a JavaScript execution changes `button[data-role="change-store"]` to `button[data-role="checkout"]`, you should not rely on that change in a verification.

This selector is therefore intended for interactions with elements whose attributes **don't change** after initial HTML load. If in doubt, open Chrome's Network tab, click the first request of the page, then look at the Response to view the initial HTML. Use CTRL-F to search for the element.

It may be tempting to monitor a `display` attribute change, but such attributes often fluctuate too frequently to monitor without a major performance hit.

**button[id^="checkout-"]**

This selector matches buttons whose ID **starts with** `checkout-`. For example: `<button id="checkout-920284853">`.

You could have used `button#checkout-920284853` in the scenario, but the long numeric suffix suggests the ID is generated dynamically. If that number is regenerated on deployment, your selector will break (e.g. `checkout-946202742`). Using **button[id^="checkout-"]** keeps the selector resilient to that change.

These subtleties help avoid frequent maintenance. There's a balance between being restrictive enough to detect errors and flexible enough so minor site changes don't break the scenario.

**a.action-button,a.action-checkout**

The comma in the selector above means: target the `a` element with class `action-button` OR (if not present) the `a` element with class `action-checkout`.

The comma is powerful because it can implement **a conditional** in Experience Monitoring.

Example: On an e-commerce site, a common scenario clicks the first available category from the homepage, then the first product, then adds it to the cart. Some products are **configurable** (require options) while others are not. Configurable products require choosing an option like size or color before adding to cart, leaving the add-to-cart button disabled until configured.

To make a scenario adaptive across product types, use a selector like:

`select.choose-color,select.choose-size,select.choose-pattern`

Experience Monitoring will click the first existing element from left to right. Whether the product needs a color, size, or pattern, Experience Monitoring will click the available control, enabling the add-to-cart button. This is a good example of an adaptive scenario.

## To go further

As these examples show, CSS selectors offer many features that provide great flexibility for Experience Monitoring scenarios.

We've gathered the most common use cases above, but the list isn't exhaustive. For deeper reference, consult the canonical resource: w3schools.

[https://www.w3schools.com/cssref/css_selectors.asp](https://www.w3schools.com/cssref/css_selectors.asp)
