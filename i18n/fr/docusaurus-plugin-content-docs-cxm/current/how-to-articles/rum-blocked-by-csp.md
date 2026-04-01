---
id: rum-blocked-by-csp
title: Les données du RUM sont bloquées car le site utilise une politique CSP stricte
---

Dans certains environnements web dotés d’une politique de sécurité renforcée ([Content Security Policy](https://developer.mozilla.org/fr/docs/Web/HTTP/Guides/CSP)), le tag Real User Monitoring (RUM) de Centreon Experience Monitoring peut nécessiter une configuration supplémentaire. L’incident est rare, mais peut empêcher la remontée des données RUM tant que les domaines Quanta ne sont pas correctement autorisés.

## Symptôme - Les données RUM ne remontent pas

Si vous avez installé le tag Quanta RUM via GTM ou Axeptio et que vous observez que :
- le script Quanta se charge bien,
- mais aucune donnée RUM ne remonte,
- et/ou que la requête vers beacon.gif apparaît comme blocked:csp.

Votre site utilise une CSP qui nécessite une mise à jour. Ce comportement est totalement normal dans les environnements où la politique de sécurité est stricte (banque, retail avancé, sites sous WAF/CDN, etc.).

## Problème - Le tag RUM est bloqué par une CSP

Centreon Experience Monitoring utilise un script chargé depuis ``https://appstatic.quanta.io``, et envoie ensuite ses mesures de performance vers ``https://rum-metrics.quanta.io``.
Sur la grande majorité des sites, cela fonctionne automatiquement, y compris lorsqu’on installe le tag via GTM, Axeptio ou un autre gestionnaire. Cependant, certains sites mettent en place une Content Security Policy (CSP) avancée.

Il s’agit d’un mécanisme de sécurité qui définit précisément :
- quels scripts peuvent être chargés,
- vers quels domaines le navigateur peut envoyer des requêtes,
- quelles images / pixels peuvent être appelés.

**Si les domaines Quanta ne sont pas ajoutés à cette liste, le navigateur va bloquer le beacon RUM**, même si le script lui-même est correctement chargé.

> Dans Chrome DevTools, cela apparaît sous la forme ``blocked:csp`` sur la requête de type ``beacon.gif``.

## Solution - Ajouter des autorisations

Pour permettre au module RUM de fonctionner tout en respectant strictement vos règles de sécurité, il suffit d’ajouter les deux domaines Quanta dans les directives appropriées.

### 1. Autoriser le chargement du script RUM
     
     Dans la directive : ``script-src``, ajouter ``https://appstatic.quanta.io``.

### 2. Autoriser l’envoi du beacon RUM

Dans la directive : ``img-src``, ajouter ``https://rum-metrics.quanta.io``. Le beacon est envoyé sous forme d’image (``beacon.gif``), d’où la nécessité de cet ajout.

### 3. Recommandé : autoriser les envois réseau associés

   Dans la directive : ``connect-src``, ajouter ``https://rum-metrics.quanta.io``.

Même si le beacon actuel passe par ``img-src``, cet ajout garantit la compatibilité avec :
- les navigateurs utilisant ``sendBeacon``,
- les optimisations futures de l’API RUM,
- les environnements de sécurité renforcés.

## Exemple d’ajustement CSP

Voici un exemple schématique (à adapter à votre configuration existante) : 

```shell
Content-Security-Policy:
  script-src 'self' https://appstatic.quanta.io ...;
  img-src 'self' https://rum-metrics.quanta.io ...;
  connect-src 'self' https://rum-metrics.quanta.io ...;
```

Une fois ces ajouts effectués dans votre serveur/CDN/WAF, les requêtes RUM ne seront plus bloquées.
