---
id: pollers-containers-prerequisites
title: Prérequis pour les collecteurs en conteneur
description: "Configurer Centreon pour recevoir les connexions des collecteurs en conteneur"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page explique comment configurer votre plateforme afin de pouvoir utiliser des collecteurs en conteneur. Cette procédure n'est à réaliser qu'une seule fois pour l'ensemble de la plateforme, avant d'installer votre premier collecteur en conteneur. Elle n'a aucun impact sur les autres modes de déploiement des collecteurs.

## Quand utiliser cette procédure

Cette page décrit la marche à suivre si les conditions suivantes sont réunies :

* Vous venez d'installer une plateforme en version 26.10, ou vous avez mis à jour une plateforme qui ne comportait aucun collecteur en mode pullwss.
* Vous souhaitez utiliser des collecteurs en conteneur pour la première fois.

> Si votre plateforme comportait des collecteurs en mode pullwss et que vous souhaitez désormais utiliser des collecteurs en conteneur, suivez la procédure [Adapter les anciennes configurations de collecteurs pullwss](./adapt-legacy-pullwss.md).

### Le mode pullwss

Par défaut, c'est le serveur central qui initie la connexion vers ses collecteurs. Or un collecteur qui s'exécute dans un conteneur ne peut pas accepter de connexions entrantes : ce mode ne fonctionne donc pas.

Le mode **pullwss** inverse le sens de la connexion : c'est le collecteur qui ouvre une connexion WebSocket vers le serveur central, puis qui la maintient ouverte.

La méthode recommandée et sécurisée consiste à utiliser HTTPS. Des certificats sont donc nécessaires pour sécuriser la connexion. Pour simplifier la gestion du cycle de vie de ces certificats, Apache (qui héberge déjà l'interface web Centreon) sert de reverse proxy : il termine la connexion TLS et transmet le trafic vers Gorgone sur le serveur central.

## Prérequis à l'installation

* Assurez-vous que le serveur central et Gorgone sont déjà installés et à jour dans la dernière version majeure.

* Si ce n'est pas déjà fait, configurez le HTTPS sur votre serveur central. Cela peut être fait dans le cadre de la [procédure d'installation](../installation-of-a-central-server/using-packages.md#étape-3--mettre-en-place-la-configuration-tls), ou [séparément](../../administration/secure-platform.md#activer-le-mode-https-sur-le-serveur-web).

* Le collecteur doit pouvoir joindre le serveur central.

## Étape 1 : Configurer Gorgone sur le serveur central

Dans les versions précédentes de Centreon, Gorgone pouvait écouter directement les connexions pullwss sur le réseau, à condition d'être configuré manuellement. À partir de la version 26.10, la méthode recommandée consiste à utiliser Apache comme reverse proxy pour Gorgone.

1. Sur le serveur central, modifiez le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** comme suit. Le module `nodes` doit déjà être présent et ne nécessite aucune modification dans une installation par défaut. Le module `proxy` est également présent, mais pas la sous-clé `httpserver`, que vous devez ajouter.

  ```yaml
  gorgone:
    modules:
      - name: nodes
        package: "gorgone::modules::core::nodes::hooks"
        enable: true
        
      - name: proxy
        package: "gorgone::modules::core::proxy::hooks"
        enable: true
        httpserver:
          enable: true
          ssl: false
          address: "localhost"
          port: 8087

  ```

  > Attention, il s'agit d'un fichier YAML : l'indentation y est importante. Utilisez 2 espaces par niveau d'indentation.

  Explication de la configuration :

  * `ssl: false` et `address: "localhost"` : Gorgone n'accepte que les connexions provenant de la machine locale, en HTTP simple. C'est Apache qui termine le TLS pour les collecteurs et qui transmet le trafic en local ; Gorgone n'a donc pas besoin de certificat.
  * `port: 8087` : port interne utilisé uniquement pour la connexion entre Apache et Gorgone sur le même serveur. Il ne doit pas être exposé sur le réseau.

2. Redémarrez Gorgone après cette modification :

  ```shell
  systemctl restart gorgoned
  ```

3. Vérifiez que Gorgone écoute bien sur le port 8087 :

  ```shell
  sudo ss -tnlp | grep 8087
  ```

  La commande doit renvoyer une ligne semblable à celle-ci :

  ```text
  LISTEN 0      4096                [::1]:8087          [::]:*    users:(("gorgone-proxy-h",pid=2305,fd=28))
  ```

## Étape 2 : Configurer Apache comme reverse proxy

Cette étape se réalise également sur le serveur central.

### Prérequis sur les modules Apache

Assurez-vous que le module Apache `proxy_wstunnel` est activé :

<Tabs groupId="os">

<TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">
  
Contrairement aux paquets .deb, le paquet **httpd** d'Alma Linux 9 active déjà le module **proxy_wstunnel** par défaut : il n'y a donc rien à faire.

</TabItem>

<TabItem value="Debian 13" label="Debian 13">

```shell
a2enmod proxy proxy_wstunnel
systemctl restart apache2
```

</TabItem>
</Tabs>
  
### Configuration du reverse proxy Apache

1. Modifiez votre fichier de configuration Apache. Celui-ci se trouve ici :

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">
    
  ```shell
  /etc/httpd/conf.d/10-centreon.conf
  ``` 

  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  /etc/apache2/sites-availables/centreon.conf
  ```

  </TabItem>
  </Tabs>

2. Ajoutez le contenu adéquat au VirtualHost Apache :

   * Centreon fournit un exemple de fichier de configuration permettant d'activer HTTPS et d'exposer Gorgone derrière un reverse proxy, disponible ici : `/usr/share/centreon/examples/centreon.apache.https.conf`. Vous pouvez en copier-coller le contenu.
   * Cependant, si vous disposez d'une configuration personnalisée et que vous ne pouvez pas copier-coller le fichier d'exemple tel quel, voici la configuration à ajouter dans votre VirtualHost Apache :

    ```apache
        <IfModule mod_proxy_wstunnel.c>
            ProxyPass "/${base_uri}/gorgone/pullwss/websocket"  "ws://localhost:8087/"
            ProxyPassReverse "/${base_uri}/gorgone/pullwss/websocket"  "ws://localhost:8087/"
        </IfModule>
    ```

3. Redémarrez Apache

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">
    
  ```shell
  systemctl restart httpd
  ``` 

  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  systemctl restart apache2
  ```

  </TabItem>
  </Tabs>

## Étape 3 : Ajouter le collecteur à la configuration de la plateforme

Vous pouvez maintenant ajouter un collecteur en conteneur. Pour cela, [récupérez la commande adéquate depuis l'interface web Centreon](./using-containers.md). Le collecteur se connectera automatiquement au serveur central via pullwss.

## Si vous supprimez tous vos collecteurs en conteneur

Si vous veniez à supprimer à l'avenir tous vos collecteurs en conteneur, n'oubliez pas d'annuler les étapes ci-dessus.

## Dépanner l'installation

Si votre installation ne fonctionne pas, plusieurs points sont à vérifier :

### Le collecteur peut-il joindre le serveur central sur le port 443 ?

Vous pouvez le vérifier depuis le collecteur avec la commande suivante :

```shell
nc -zv <central_hostname> 443
```

### Gorgone écoute-t-il bien sur le port 8087 ?

```bash
curl --header "Connection: Upgrade" --header "Upgrade: websocket" http://localhost:8087/
```

La sortie attendue est la suivante :

```text
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Sec-WebSocket-Accept: Kfh9QIsMVZcl6xEPYxPHzW8SZ8w=
Server: Mojolicious (Perl)
Upgrade: websocket
```

### Apache2 redirige-t-il correctement le trafic vers Gorgone ?

```bash
curl -v --header "Connection: Upgrade" --header "Upgrade: websocket" https://localhost:443/centreon/gorgone/pullwss/websocket
```

La sortie attendue est la suivante :

```text
< HTTP/1.1 101 Switching Protocols
< Connection: Upgrade
< Sec-WebSocket-Accept: Kfh9QIsMVZcl6xEPYxPHzW8SZ8w=
< Server: Mojolicious (Perl)
< Upgrade: websocket
```

Si vous obtenez une page HTML indiquant `You need to enable JavaScript to run this app`, le reverse proxy Apache n'est pas configuré correctement : le trafic est redirigé vers l'interface web Centreon au lieu de Gorgone. Vérifiez votre configuration Apache et redémarrez Apache après chaque modification.
