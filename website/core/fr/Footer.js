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
      title: `Démarrer`,
      link: `getting-started/installation-first-steps`,
    },
    {
      title: `API`,
      link: `api/introduction`,
    },
    {
      title: `Releases`,
      link: `releases/introduction`,
    }],
  },
  resourcesPart: {
    headerTitle: `Ressources`,
    links: [{
      title: `Site Centreon`,
      link: `https://www.centreon.com`,
    },
    {
      title: `Blog`,
      link: `https://blog.centreon.com`,
    },
    {
      title: `Download`,
      link: `https://download.centreon.com`,
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

function ResourceColumn({ config }) {
  return (
    <div className="footerSection">
    <h5>{labels.resourcesPart.headerTitle}</h5>
    {linkElement(config, labels.resourcesPart.links)}
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
        <ResourceColumn config={config} />
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