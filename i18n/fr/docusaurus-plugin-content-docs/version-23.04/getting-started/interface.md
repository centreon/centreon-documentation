---
id: interface
title: Découvrir l'interface web Centreon
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Première connexion à l'interface

Pour vous connecter à l'interface web, rendez-vous à l'adresse : `http://ADRESSE_IP/centreon`.

> Remplacez **ADRESSE_IP** par l'adresse IP ou le FQDN du serveur web Centreon.

Renseignez le nom d'utilisateur et le mot de passe associé et cliquez sur le bouton **Se connecter** :

![image](../assets/getting-started/aconnection.png)

>Si vous avez installé Centreon depuis une [VM](../installation/installation-of-a-central-server/using-virtual-machines.md), les identifiants par défaut sont **admin/Centreon123!**.
Si ce n'est pas le cas, l'identifiant par défaut est **admin** et le mot de passe est celui que vous avez défini à [l'étape 5 de l'installation web](../installation/web-and-post-installation.md#étape-5--admin-information).

Vous êtes maintenant connecté à l'interface web Centreon.

## Menus

![image](../assets/getting-started/menus.png)

L'interface web de Centreon est composée de plusieurs menus, chaque menu a une fonction bien précise (cliquez sur le logo Centreon en haut à gauche de l'écran pour afficher les libellés) :

![image](../assets/getting-started/amenu.png)

* Le menu **Accueil** affiche les [vues personnalisées](create-custom-view.md). Votre espace de travail peut être vide pour l'instant. Une fois que vous aurez configuré les widgets
  personnalisables, vous verrez les données et les graphiques en fonction de votre personnalisation.
* Le menu **Supervision** regroupe l'état de tous les éléments supervisés en temps réel et en différé au travers de la
  visualisation des logs.
* Le menu **Rapports** permet de visualiser de manière intuitive (via des diagrammes) l'évolution de la supervision sur
  une période donnée.
* Le menu **Configuration** permet de configurer l'ensemble des éléments supervisés ainsi que l'infrastructure de supervision.
* Le menu **Administration** permet de configurer la plateforme Centreon (authentification, proxy, extensions...) ainsi que de visualiser l'état général des serveurs.

## Bandeau supérieur

### Section Collecteurs

![image](../assets/getting-started/banner_pollers.png)

La partie gauche du bandeau supérieur montre la santé de votre plateforme en temps réel :

* Si tous les collecteurs sont en cours d'exécution ou non : l'icône devient rouge lorsqu'un collecteur n'a pas envoyé de données au serveur central depuis au moins 15 minutes.
* Si les contrôles sont en retard ou non. Si l'icône est orange ou rouge, cela peut indiquer que vos collecteurs supervisent de trop nombreuse ressources.

Cliquez sur l'icône **Collecteurs** pour développer le menu. Dans le menu, cliquez sur **Configurer les collecteurs** pour accéder à la page **Configuration > Collecteurs > Collecteurs**.

### Section hôtes et services ("top counters")

![image](../assets/getting-started/top_counters.png)

Dans le bandeau supérieur, à côté de la section Collecteurs, des statistiques indiquent le nombre de ressources supervisées, avec un statut spécifique :

* Pour les services: le nombre de services avec le statut **CRITIQUE**, **ALERTE**, **INCONNU** et **OK**.
* Pour les hôtes : le nombre d'hôtes avec le statut **INDISPONIBLE**, **INJOIGNABLE** et **DISPONIBLE**.

Ces nombres incluent les alertes non confirmées (SOFT), mais n'incluent pas les ressources acquittées ou en maintenance. Les ressources en attente sont indiquées par une pastille bleue sur les icônes **hôtes** ou **services**.

Cliquez sur un cercle représentant un statut :

* La page **Supervision > Statut des ressources** s'ouvre.
* La page est filtrée selon le type de ressource et le statut correspondant.

Cliquez sur les icônes **hôtes** ou **services** pour développer le menu et afficher le détail des hôtes et services.

## Passer en mode sombre

Lors de votre première connexion, l'interface Centreon s'affiche en mode clair par défaut.

Dans le bandeau supérieur, cliquez sur l'icône profil et utilisez le bouton pour activer le mode sombre. Lorsque vous vous reconnecterez, le mode que vous avez sélectionné précédemment restera activé.

- Mode clair :

![image](../assets/getting-started/light_mode_switch.png)

- Mode sombre :

![image](../assets/getting-started/dark_mode_switch.png)

Vous pouvez aussi passer en mode sombre en modifiant le thème de l'interface dans les paramètres du compte.

Allez dans **Administration > Paramètres > Mon compte** et sélectionnez l'onglet **Informations générales**. 
Sélectionnez **Light** ou **Dark** dans le champ **Front-end Theme**.

![image](../assets/getting-started/front-end_theme_mode.png)

Puis cliquez sur **Sauvegarder**. Le thème de l'interface est maintenant dans le mode que vous avez choisi.

## Changer la langue de l'interface utilisateur

Dans le bandeau, cliquez sur l'icône profil, puis cliquez sur **Editer Le Profil**:

![image](../assets/getting-started/change_language_1.png)

Dans la liste de sélection des langues, sélectionnez la vôtre :

![image](../assets/getting-started/change_language_2.png)

Puis cliquez sur **Sauvegarder**. Votre interface est maintenant traduite dans votre
langue.

> Si votre langue n'apparaît pas dans la liste, vous pouvez aider la communauté Centreon à traduire l'interface web.
> Rendez-vous dans le chapitre [How to translate Centreon](../developer/developer-translate-centreon.md) pour plus d'informations.

## Réinitialiser le mot de passe

### Réinitialiser votre mot de passe avant expiration

Lorsque votre mot de passe va expirer dans les 7 prochains jours, un point orange apparaît dans le
bandeau à droite à côté de l'icône de profil :

![image](../assets/administration/password_will_expire.png)

Cliquez sur **Editer le profil**, puis modifiez votre mot de passe :

![image](../assets/administration/password_expiration.png)

### Réinitialiser votre mot de passe après expiration

Si vous n'avez pas changé votre mot de passe avant son expiration, après connexion vous serez redirigé vers une page dédiée où vous pourrez le mettre à jour :

![image](../assets/administration/password_expired.png)

Entrez votre mot de passe actuel, définissez-en un nouveau puis cliquez sur **Réinitialiser le mot de passe**.

## Définir une page par défaut après connexion

Vous pouvez configurer la page qui sera affichée par défaut lorsque vous vous connectez à l'interface, au niveau de l'utilisateur ou au niveau du modèle de contact. Vous pouvez effectuer cette procédure soit à partir de l'interface, soit à l'aide de commandes CLAPI.

### À partir de l'interface

Suivez cette procédure pour définir une page par défaut :

<Tabs groupId="sync">
<TabItem value="Pour un utilisateur" label="Pour un utilisateur">

  1. Allez à la page **Configuration > Utilisateurs > Contacts/Utilisateurs**.

  2. Sélectionnez l'utilisateur souhaité et cliquez sur l'onglet **Authentification Centreon**.
    
  3. Dans le champ **Page par défaut**, sélectionnez le nom de la page dans la liste déroulante. Puis enregistrez vos modifications.

</TabItem>
<TabItem value="Pour un modèle de contact" label="Pour un modèle de contact">

 1. Allez à la page **Configuration > Utilisateurs > Modèles de contact**.

  2. Cliquez sur le bouton **Ajouter** pour remplir le formulaire **Ajouter un modèle utilisateur**.
      
  3. Dans le champ **Page par défaut**, sélectionnez le nom de la page dans la liste déroulante. Puis enregistrez vos modifications.
  
  Les utilisateurs créés à partir de ce modèle verront cette page par défaut lorsqu'ils se connecteront.
  
</TabItem>
</Tabs>

### Avec commandes CLAPI

> Vous devez d'abord obtenir le numéro de la "page topologique" associée à la page par défaut de l'interface. Dans cet exemple, nous devons obtenir le numéro associé à la page Statut des ressources.

1. Depuis votre terminal, connectez-vous à **MariaDB** et exécutez la commande suivante :
  
  ```shell
  Use centreon ;
  ```
  
2. Récupérez le numéro de la "page topologique" pour la page Statut des ressources :
  
  ```shell
  SELECT topology_page FROM topology WHERE topology_name = "Resources Status";
  ```
  
  Vous devez obtenir le résultat suivant :
  
  ```shell
  +---------------+
  | topology_page |
  +---------------+
  |           200 |
  ```
  
3. Suivez ensuite cette procédure pour définir une page par défaut. Exécutez ces commandes avec vos identifiants personnalisés :

<Tabs groupId="sync">
<TabItem value="Pour un utilisateur" label="Pour un utilisateur">

- En modifiant un utilisateur existant (où `200` est le numéro associé à la page Statut des ressources) :
  
```shell
centreon -u admin -p 'centreon' -o contact -a setparam -v "contact alias;default_page;200"
```

- En ajoutant un nouvel utilisateur (où `200` est le numéro associé à la page Statut des ressources) :

```shell
centreon -u admin -p 'centreon' -o CONTACT -a ADD -v "user;user;user@mail.com;mypassword;1;1;en_US;local;200"
```

</TabItem>
<TabItem value="Pour un modèle de contact" label="Pour un modèle de contact">

Où `200` est le numéro associé à la page Statut des ressources :

```shell
centreon -u Admin -p 'centreon' -o CONTACTTPL -a ADD -v "new_template;new_template;user@mail.com;mypassword;1;1;en_US;local;200"
```

</TabItem>
</Tabs>
