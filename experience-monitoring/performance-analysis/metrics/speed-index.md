---
id: speed-index
title: Speed Index
--- 

## What Speed Index measures

Speed Index measures how quickly the page's visual content is displayed during the loading.

A page that begins rendering elements after 1s and finishes at 5s will have a better Speed Index than a page that also finishes at 5s but only starts rendering at 4s.

> **Speed Index is expressed in seconds but should be treated as a score.** It doesn't correspond to a single event on a timeline.

## How to improve Speed Index

Anything you do to improve overall load speed will generally improve Speed Index. Two factors have a particularly strong impact:

- TTFB [(Time To First Byte)](./time-to-first-byte.md): reducing the wait for the first byte lets visual elements appear sooner.

- JavaScript and secondary loads that work on:
  - Reducing JavaScript execution time
  - Reducing the browser's work to render the page (DOM complexity, CSS classes, etc.).

## Scoring

Scoring guideline:

| Good | < 2s |
| --- | --- |
| Fair | 2s to 5s |
| Poor | > 5s |
