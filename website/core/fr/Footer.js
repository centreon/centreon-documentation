/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const labels = {
  documentationPart: {
    headerTitle: `Documentation`,
    links: [{
      title: `Pré requis`,
      link: `#`,
    },
    {
      title: `Installation`,
      link: `#`,
    },
    {
      title: `Démarrage`,
      link: `#`,
    },
    {
      title: `Plugin Packs`,
      link: `#`,
    },
    {
      title: `Supervision`,
      link: `#`,
    },
    {
      title: `Exploitation`,
      link: `#`,
    }],
  },
  communityPart: {
    headerTitle: `Communauté`,
    links: [{
      title: `GitHub`,
      link: `#`,
    },
    {
      title: `Slack`,
      link: `#`,
    },
    {
      title: `Blog`,
      link: `#`,
    },
    {
      title: `Newsletter`,
      link: `#`,
    },
    {
      title: `Téléchargement Open Source`,
      link: `#`,
    }],
  },
  helpPart: {
    headerTitle: `Aidez-moi`,
    links: [{
      title: `FAQ`,
      link: `#`,
    },
    {
      title: `Bonnes pratiques`,
      link: `#`,
    },
    {
      title: `Tutoriels`,
      link: `#`,
    },
    {
      title: `Contactez-nous`,
      link: `#`,
    },
    {
      title: `Nos produits`,
      link: `#`,
    }],
  },
  socialPart: {
    headerTitle: `Suivez-nous`,
  }
}

const linkElement = ({ baseUrl }, listLinks) => {
  const links = listLinks.map((linkProps) => {
    return <a href={`${baseUrl}${linkProps.link}`}>{linkProps.title}</a>
  })
  return links;
}

function LogoColumn({ config }) {
  return (
    <React.Fragment>
    {config.footerIcon && (
      <a href={config.baseUrl} className="nav-home">
        <img
          src={`${config.baseUrl}${config.footerIcon}`}
          alt={config.title}
        />
      </a>
    )}
    </React.Fragment>
  )
}

function DocumentationColumn({ config }) {
  return (
    <div className="footerSection">
    <h5>{labels.documentationPart.headerTitle}</h5>
    {linkElement(config, labels.documentationPart.links)}
  </div>
  )
}

function CommunityColumn({ config }) {
  return (
    <div className="footerSection">
    <h5>{labels.communityPart.headerTitle}</h5>
    {linkElement(config, labels.communityPart.links)}
    </div>
  )
}

function HelpColumn({ config }) {
  return (
    <div className="footerSection">
    <h5>{labels.helpPart.headerTitle}</h5>
    {linkElement(config, labels.helpPart.links)}
    </div>
  )
}

function SocialColumn({ config }) {
  const repoUrl = `https://github.com/${config.organizationName}/centreon`;
  return (
    <React.Fragment>
    <div className="footerSection">
    <h5>{labels.socialPart.headerTitle}</h5>
      <div className="social">
        <a
          className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
          href={repoUrl}
          data-count-href={`${repoUrl}/stargazers`}
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star this project on GitHub">
          {config.organizationName}
        </a>
      </div>
      {config.twitterUsername && (
        <div className="contentSocial">
          <a
            href={`https://twitter.com/${config.twitterUsername}FR`}
            className="twitter-follow-button">
            Follow @{config.twitterUsername}
          </a>
        </div>
      )}
    </div>
    </React.Fragment>
  )
}

function Footer({ config }) {
  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <LogoColumn config={config} />
        <DocumentationColumn config={config} />
        <CommunityColumn config={config} />
        <HelpColumn config={config} />
        <SocialColumn config={config} />
      </section>
      <section className="copyright">
        {config.copyright && (
          <span>{config.copyright}</span>
        )}
      </section>
    </footer>
  );
}

module.exports = Footer;