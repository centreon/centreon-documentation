---
id: release-notes
description: "Nouveautés et améliorations de chaque version de Centreon Experience Monitoring : gestion des jetons, sondes internes, parcours utilisateurs, etc."
title: Centreon Experience Monitoring - notes de release
---

## 9 novembre 2026

**Quanta devient Centreon Experience Monitoring**

Le produit change de nom et adopte l'identité visuelle Centreon. Vos identifiants, données, configurations et historiques sont inchangés, et aucune action n'est nécessaire pour continuer à utiliser le service.

**Interface et emails repensés**

L'interface, la page de connexion, les emails, alertes et rapports font peau neuve. Les textes de l'interface ont été revus pour plus de clarté, et les liens pointent désormais vers la documentation, le support et la communauté The Watch de Centreon. L'application Slack a également été mise à jour : nouveau nom, logo et libellés des notifications.

**Nouvelle adresse de l'application**

L'application est désormais accessible sur [https://exp.mycentreon.com](https://exp.mycentreon.com). L'ancienne adresse, `https://app.quanta.io`, continue de fonctionner et redirigera ensuite vers la nouvelle, à une date annoncée à l'avance.

**Ce que nous vous recommandons**

Mettez à jour vos favoris, et utilisez la nouvelle adresse dans vos scripts et intégrations API plutôt que de compter sur la redirection : certains clients HTTP ne suivent pas les redirections, ou perdent l'authentification lorsqu'ils sont redirigés vers un autre domaine. Si votre réseau n'autorise que certains domaines, ajoutez `exp.mycentreon.com`, en particulier si vous hébergez des [sondes internes](configuration/user-journey/stm-zones.md). Les objets des emails ayant changé, vérifiez vos éventuelles règles de tri basées sur ces objets.

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
