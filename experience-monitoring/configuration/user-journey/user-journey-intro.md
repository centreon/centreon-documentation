---
id: user-journey-intro
title: User Journeys
---

User journeys allow you to configure a probe to regularly navigate your site following a pre-established path, measuring various web performance indicators.
The probe then sends the data to Experience Monitoring for you to review.

User journeys, along with [Real User Monitoring](https://docs.centreon.com/experience-monitoring/getting-started/real-user-monitoring/), are one of the key features of Experience Monitoring as other features like the [Digital Sobriety Score](../../digital-sobriety/digital-sobriety-concepts.md) or [Load Tests](https://docs.centreon.com/experience-monitoring/experience-monitoring/getting-started/load-tests/) depend on the path set by User Journeys to function.

You can configure multiple User Journeys to imitate a variety of different users and we recommend you do so to get a better view of the overall experience of navigating your site.
In addition to the pages visited, you can further detail if the probe should act as if navigating from a computer or a phone, what browser to use and other specificities.
This way you can better identify which type of user may be facing issues.

Additionally, User Journeys allow you to:

- Monitor the proper functioning of a typical journey and calculate its availability rate (e.g., "it was possible to browse and purchase on the ecommerce site 99.5% of the time this month").
- Alert site managers in case of a site malfunction, by sending emails, SMS, or other notifications with a detailed incident report.
- Measure and record page load times according to several key criteria (Time To First Byte, Speed Index, full page load time, or with respect to Google's [Core Web Vitals](https://web.dev/vitals/)).
- Analyze each page to [identify areas for improvement](./user-journey-improve.md) that will make the site faster (e.g., "to improve the homepage load time, optimize certain images and reduce the JavaScript code of a specific file").