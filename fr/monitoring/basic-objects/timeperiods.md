---
id: timeperiods
title: Les périodes temporelles
---

## Définition

Une période temporelle est la définition d’un intervalle de temps pour chacun des jours de la semaine. Ces périodes temporelles servent à activer les fonctionnalités de l’ordonnanceur sur une période donnée. Elles permettent de définir :

* Quand les commandes de vérification seront exécutées
* Quand des notifications seront envoyées.

## Configuration

Pour configurer des périodes temporelles, allez à la page : **Configuration > Utilisateurs > Périodes temporelles**.

1. Dans les champs **Nom de la période temporelle** et **Alias**, entrez un nom et une description.
2. Dans la section **Options basiques**, pour chaque jour de la semaine, définissez les plages horaires pendant lesquelles les vérifications et les notifications seront activées, en utilisant la [syntaxe décrite ci-dessous](#Syntaxe-d’une-période-de-temps). 

    - Ces définitions seront appliquées chaque semaine, indéfiniment.
    - Si vous laissez un jour vide, il n'y aura pas de supervision ce jour-là pour les actions rattachées à cette période de temps.

3. Utilisez l'onglet **Période d'exception** pour inclure dans une période de temps des jours qui n'en feraient normalement pas partie.

4. Une fois la période de temps définie, vous pouvez l'utiliser :

    - Dans le champ **Période de contrôle** d'un hôte, d'un modèle d'hôtes, d'un service ou d'un groupe de services.
    - Dans le champ **Période de notification** d'un hôte, d'un modèle d'hôte, d'un service, d'un groupe de services ou d'un contact, ou bien dans le champ **Période d'escalade** d'une escalade de notifications.

### Syntaxe d’une période de temps

Les caractères suivants permettent de définir les périodes temporelles :

* Le caractère ”:” sépare les heures des minutes. Exemple : HH:MM
* Le caractère “-” indique une continuité entre deux horaires
* Le caractère ”,” permet de séparer deux plages horaires.

Quelques exemples :

* 24 heures sur 24 et 7 jours sur 7 : pour chaque jour de la semaine, entrez 00:00-24:00.
* De 08h00 à 12h00 et de 14h00 à 18h45 les jours de semaine : 08:00-12:00,14:00-18:45 (à entrer au niveau des jours de semaine uniquement).

![image](../../assets/configuration/05timeperiod.png)

### Onglet Période d'exception

L'onglet **Période d'exception** permet d’inclure ou d'exclure dans la plage temporelle des jours exceptionnels. Les plages définies ici surchargent la définition du fonctionnement régulier de la journée.

Exemple : Un administrateur souhaite définir une période temporelle qui regroupe les heures de fermeture du bureau, c’est à dire :

* De 18h00 à 07h59 les jours de semaine
* 24 heures sur 24 les weekends
* Les jours fériés et jours de fermeture exceptionnelle.

Afin de pouvoir définir les jours fériés ainsi que les jours de fermeture exceptionnelle, il est nécessaire d’utiliser les exceptions.

Pour ajouter une exception, dans le champ **Exceptions**, cliquez sur **Ajouter une nouvelle entrée**. Définissez une plage horaire pour chaque
journée exceptionnelle. Le tableau ci-dessous présente quelques exemples
possibles :

| Jour(s)           | Plage(s) horaire(s)     | Explications                                                 |
| ----------------- | ----------------------- | ------------------------------------------------------------ |
| january 1         | 00:00-24:00             | Toute la journée le premier janvier de chaque année          |
| 2014-02-10        | 00:00-24:00             | Toute la journée du 10 février 2014                          |
| july 1 - august 1 | 00:00-24:00             | Tous les jours de chaque année du 1 juillet au 1 août        |
| november 30       | 08:00-19:00             | De 08h00 à 19h00 tous les 30 novembre de chaque année        |
| day 1 - 20        | 00:00-24:00             | Toute la journée du premier au 20 de chaque mois             |
| saturday -1       | 08:00-12:00,14:00-18:45 | Tous les derniers samedi du mois les heures ouvrées          |
| monday -2         | 00:00-24:00             | Tous les avant derniers lundi du mois toute la journée       |
| june 6 - june 21  | 00:00-00:00             | Ne pas superviser entre le 6 et le 21 juin toute la journée  |
| june 12           | 00:00-08:00,18h00-24:00 | Superviser chaque 12 juin, sauf entre 8h et 18h              |
