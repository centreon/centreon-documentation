---
id: release-notes
description: "Nouveautés et améliorations de chaque version de Centreon Experience Monitoring : gestion des jetons, sondes internes, parcours utilisateurs, etc."
title: Centreon Experience Monitoring - notes de release
---

## 9 novembre 2026

**Quanta devient Centreon Experience Monitoring**

Le produit change de nom et adopte l'identité visuelle Centreon.

**Nouvelle interface**

* Nouveau logo et nouvelle barre de navigation aux couleurs Centreon.
* Nouveau design system appliqué à l'ensemble des pages.
* Nouvelle page de connexion.
* Nouveau favicon et nouveau titre d'onglet.

**Emails repensés**

* Nouvelle identité visuelle dans tous les emails, alertes, rapports et notifications.
* Nouveau pied de page avec des liens à jour vers la communauté The Watch, la documentation, le support et l'application.
* Objets d'emails mis à jour.

**Textes de l'interface**

* Plus de 100 libellés revus.
* Liens obsolètes supprimés ou redirigés vers la documentation et le support Centreon.

**Intégrations**

* Application Slack mise à jour : nom, logo et libellés des notifications.

**Nouvelle adresse**

* L'application est désormais accessible sur [https://exp.mycentreon.com](https://exp.mycentreon.com).
* L'ancienne adresse, `https://app.quanta.io`, reste pleinement fonctionnelle. Elle sera redirigée automatiquement vers la nouvelle adresse à une date annoncée à l'avance.

**Ce qui ne change pas**

* Vos identifiants, vos données, vos configurations et vos historiques sont inchangés.
* Aucune action n'est nécessaire pour continuer à utiliser le service.

**Ce que nous vous recommandons**

* Mettez à jour vos favoris.
* Utilisez la nouvelle adresse dans vos scripts et dans vos intégrations qui utilisent l'API. Attention, certains clients HTTP comme cURL ne suivent pas les redirections par défaut : vos scripts doivent pointer directement vers la nouvelle adresse avant la mise en place de la redirection.
* Si votre réseau filtre les domaines autorisés, ajoutez `exp.mycentreon.com`, en particulier si vous hébergez des [sondes internes](configuration/user-journey/stm-zones.md).

## 8 septembre 2026

**Gestion des jetons repensée**

Vous pouvez désormais créer, suivre et révoquer vos jetons d'accès depuis une interface unique et centralisée. Vous gagnez en visibilité, et la sécurité globale est renforcée.

**Sondes internes (zones STM) disponibles pour tous les utilisateurs**

Grâce à une sonde déployée directement dans votre infrastructure, vous pouvez désormais superviser vos applications internes et intranet avec le même niveau de détail que vos sites publics.

## 22 juin 2026

**Diagnostic facilité : téléchargement des logs de la sonde**

Lorsqu'un parcours utilisateur échoue, vous pouvez désormais télécharger les logs de la sonde directement depuis la vue de l'incident. Vous comprenez ainsi plus rapidement ce qui s'est passé.

**Améliorations de la sécurité**

La plateforme utilise désormais les dernières versions de Ruby et de Rails. Cette mise à jour majeure améliore les performances, la sécurité et la maintenabilité à long terme de l'application. Elle introduit également une nouvelle clé de signature : tous les utilisateurs seront déconnectés une fois lors du déploiement et devront se reconnecter. Les sessions « Se souvenir de moi » sont également réinitialisées.

## 2 février 2026

Cette version apporte un ensemble d'améliorations aux **parcours utilisateurs** et aux **tableaux de bord**, pour des scénarios plus clairs et des tableaux de bord plus parlants.

Les parcours utilisateurs disposent d'une nouvelle action [**Exécuter un script**](/configuration/user-journey/create-a-scenario.md), qui permet d'exécuter du JavaScript directement dans le navigateur pour des cas d'usage plus avancés. La vue d'ensemble du parcours a aussi été améliorée : le Hero Time est désormais la métrique par défaut (à la place du Speed Index), ce qui donne une vision plus claire des performances de chaque étape.

Côté tableaux de bord, deux nouveaux widgets sont disponibles. Vous pouvez désormais épingler une capture d'écran d'un site web sous forme de widget directement depuis la **Vue Globale**, et suivre l'état de santé de vos parcours dans le temps grâce au nouveau widget **Statut du parcours utilisateur**.
