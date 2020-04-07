---
layout: page
title: A (Partial) List of Bluetooth GATT Services
---
In researching different Bluetooth Profiles and Services for a class, I was
very frustrated that I had to manually download a separate PDF for each
Profile/Service listed on [the official
page](https://www.bluetooth.com/specifications/gatt/). I realized that the
[UUID page](https://www.bluetooth.com/specifications/gatt/services/) for the
various services at least had XML entires for the majority of the services.
Since my goal was a simple table of services and the characteristics they
offered, I figured I could automate parsing through these files, which I did
with some [quick python](https://github.com/linkoep/gatt_scrape) using
[requests](https://requests.readthedocs.io/en/master/) to retrieve the pages
and [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) for parsing
them. Here is the result, hopefully it's useful to someone.

{% include_relative ble-gatt-svc.md %}
