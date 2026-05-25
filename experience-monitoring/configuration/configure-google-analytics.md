---
id: configure-google-analytics
title: Configure Google Analytics with Experience Monitoring
---

## Frequently asked questions

### Why integrate Google Analytics into Experience Monitoring?

Integrating this data allows you to correlate technical metrics (response time, server load, etc.) with your business data (traffic, conversion, etc.). These correlations help you draw meaningful conclusions.

### Are Experience Monitoring probes counted in GA?

**No**, Experience Monitoring is invisible to Google Analytics — we don't call the Google Analytics tag that runs on your site's pages.

Therefore your GA statistics are not affected by our probes.

### Why don't I see Analytics data in Experience Monitoring?

Google Analytics data can take several hours to appear. Because we retrieve data via their API, we can only import data that is visible in GA.

### Why don't I have real-time Analytics data?

Google Analytics data can take several hours to appear. Because we retrieve data via their API, we can only import data that is visible in GA.

### I accidentally disabled the Google Analytics module in Experience Monitoring. Can I recover history?

No problem — we always import the last 24 hours of data. Wait a little and the data should appear.

If you need to recover more than 24 hours of historical data, contact support via the "Help" button at the bottom-right of the app.

## Link Google Analytics to Experience Monitoring

With Experience Monitoring you can correlate your web scenario execution times with traffic measured by Google Analytics over the same period and analyze the effect of traffic on page load times.

> To add/remove a link you must have "Administrator" or "Owner" permissions on your Organization in Experience Monitoring.

We have a [tutorial video](https://www.youtube.com/watch?v=qmeXwypUmL4&list=PLgmedpAAxo-40d8PaBsaQS7Hkrm6mdxjs&index=3) that shows how to link your quanta to your google account.

To link Experience Monitoring with your Google Analytics account, go to the "Configuration" tab (gear icon at the top right), then select the site (click its name) for which you want to link the Google Analytics account.

Go to the "Integrations" tab.

To create the link, click "Connect". You'll be redirected to Google's sign-in page — enter the account credentials you want to link.

Once authenticated you are redirected back to Experience Monitoring, your Analytics profiles are imported into the UI and you just need to choose the profile you want to use.
