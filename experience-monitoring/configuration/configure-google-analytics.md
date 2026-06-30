---
id: configure-google-analytics
title: Configure Google Analytics with Experience Monitoring
---

By integrating Google Analytics data into Experience Monitoring, you can correlate web scenario execution times and technical metrics such as response time and server load with business data like traffic and conversions. This helps you analyze how traffic impacts page load times and draw meaningful conclusions.

## Link Google Analytics to Experience Monitoring

> To connect/disconnect Experience Monitoring to/from Google Analytics, you must have [**Administrator** or **Owner** permissions](../configuration/manage-users-and-rights.md) on your Organization in Experience Monitoring.

Here is a [video tutorial](https://www.youtube.com/watch?v=qmeXwypUmL4&list=PLgmedpAAxo-40d8PaBsaQS7Hkrm6mdxjs&index=3) that shows how to link Experience Monitoring to your Google account. You can also follow the procedure below.

To link Experience Monitoring with your Google Analytics account:

1. Select the site for which you want to link the Google Analytics account (click its name).

2. Click **Settings** (the gear icon at the top right of the screen), then click the **Integrations** tab.

4. At the bottom of the **Business & Analytics** section, click **Connect**. You'll be redirected to Google's sign-in page — enter the credentials of the account you want to link.

5. Once authenticated, you are redirected back to Experience Monitoring. Select the Google Analytics property you want to use.

## Frequently asked questions

### Are Experience Monitoring probes counted in GA?

No, Experience Monitoring is invisible to Google Analytics — we don't call the Google Analytics tag that runs on your site's pages. Therefore your GA statistics are not affected by our probes.

### Why don't I see real-time Analytics data in Experience Monitoring?

Google Analytics data can take several hours to appear. Because we retrieve data via their API, we can only import data that is visible in GA.

### I accidentally disabled the Google Analytics module in Experience Monitoring. Can I recover history?

No problem — we always import the last 24 hours of data. Wait a little and the data should appear. If you need to recover more than 24 hours of historical data, contact [Centreon support](http://support.centreon.com/).
