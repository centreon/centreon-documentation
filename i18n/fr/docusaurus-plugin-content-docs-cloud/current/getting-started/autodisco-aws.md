---
id: autodisco-aws
title: Découvrir des instances AWS EC2 avec autodiscovery
---

Dans ce tutoriel, nous allons utiliser le module Auto Discovery pour détecter des instances AWS EC2 et les mettre en supervision.

## Prérequis

Vous devez disposer :

- des informations d'identification pour le groupe d'instances AWS que vous souhaitez superviser (nom, AWS Access Key et AWS Secret Key)
- de la région dans laquelle se trouvent vos instances.

## Étape 1 : Installer les dépendances du plugin Amazon EC2

Connectez-vous en SSH sur le collecteur qui supervisera vos instances EC2, puis installez le binaire awscli :

```shell
yum install awscli
```

## Étape 2 : Configurer la tâche de découverte

1. Allez à la page **Configuration > Hôtes > Découverte**, puis cliquez sur **Ajouter**.

2. Entrez un nom pour votre tâche de découverte, puis sélectionnez le fournisseur **Amazon AWS EC2**. Cliquez sur **Suivant**.

    ![image](../assets/getting-started/aws-provider.png)

3. Sélectionnez le collecteur qui supervisera vos instances EC2.

4. Si votre infrastructure le demande, renseignez les détails du proxy désiré.

5. Cliquez sur le `+` à droite de la liste **Choisir des identifants**. Renseignez les champs Nom, AWS Access Key et AWS Secret Key, 
puis cliquez sur **Confirmer**. Cliquez sur **Suivant**.

6. Entrez la région où se situent vos instances EC2 (par exemple, **eu-north-1**). Cliquez sur **Suivant**.

7. Éditez ou ajoutez des modificateurs :
    - Faites correspondre `host.name` à l'attribut `discovery.results.name`. Les noms de vos hôtes dans Centreon seront ceux définis dans cet attribut (c'est-à-dire le hostname de l'instance).
    - Dans notre exemple, nous allons exclure les instances dont le hostname contient "test".

    ![image](../assets/getting-started/aws-mapper.png)

    Cliquez sur **Suivant**.

8. Sélectionnez **Analyse manuelle** : nous devrons ajouter manuellement les hôtes à la liste des hôtes à superviser. Cliquez sur **Suivant**.

9. Sélectionnez **Exécuter immédiatement** puis cliquez sur **Finir**. La tâche de découverte apparaît dans la liste des tâches.

  ![image](../assets/getting-started/aws-listofjobs.png)

## Étape 3 : Sauvegarder les hôtes et les mettre en supervision

1. Après quelques secondes, rafraîchissez la page. Une coche verte devrait apparaître dans la colonne **Statut**.

    ![image](../assets/getting-started/aws-success.png)

2. Survolez la ligne correspondant à la tâche qui vient de se terminer puis cliquez sur **Display the job result** (l'icône flèche). Une liste d'hôtes apparaît.

   ![image](../assets/getting-started/aws-results.png)

3. Sélectionnez les hôtes que vous souhaitez ajouter à la liste des hôtes supervisés, puis cliquez sur **Enregistrer**. ![image](../assets/getting-started/aws-save.png)

4. Allez à la page **Configuration > Hôtes > Hôtes (simplifiés)** et vérifiez que les hôtes que vous avez sélectionnés à l'étape précedente apparaissent bien dans la liste. Attention, les hôtes ont été ajoutés à la liste des hôtes mais ils ne sont pas encore supervisés.

5. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). Les hôtes apparaissent à la page **Statut des ressources** : ils sont maintenant supervisés.
