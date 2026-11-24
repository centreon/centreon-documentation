---
id: stm-zones-versions
title: Versions de la sonde interne
description: "Comment connaître la version de votre sonde interne, quelle version utiliser, ce qui se passe si vous ne la mettez pas à jour, et à quelle fréquence Centreon publie des mises à jour."
---

Les sondes internes sont les sondes que vous déployez dans votre propre infrastructure pour exécuter des parcours utilisateur depuis une [zone STM privée](stm-zones.md). Elles ne sont pas mises à jour automatiquement : c'est à vous de les mettre à jour.

## Comment connaître la version de ma sonde ?

Sur la page de votre organisation, ouvrez l'onglet **Zones de Monitoring Synthétique**. La version de chaque sonde est affichée dans la colonne **Version** de la liste des sondes de la zone.

## Quelle version ma sonde doit-elle avoir ?

Vos sondes doivent être dans la dernière version. Les versions précédentes ne sont pas prises en charge.

Pour mettre à jour une sonde, suivez la [procédure de mise à jour](stm-zones.md#mettre-à-jour-une-sonde).

## Que se passe-t-il si je ne mets pas à jour ma sonde ?

Si vous ne mettez pas à jour votre sonde, vous risquez de manquer d'importantes corrections de bugs et de sécurité. Pensez à vous abonner à [nos bulletins de sécurité sur notre plateforme communautaire The Watch](https://thewatch.centreon.com/latest-security-bulletins-64).

## À quelle fréquence publiez-vous des mises à jour ?

Les nouvelles versions de la sonde interne sont listées dans les [notes de release de la sonde interne](../../stm-zones-release-notes.md), avec les changements qu'elles apportent. Consultez-les régulièrement.

Notez que les changements majeurs sont annoncés à l'avance dans l'interface d'Experience Monitoring.
