import React from 'react';
import { Redirect } from '@docusaurus/router';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from '/src/pages/index.module.css';

const basePathImg = './img/homepage/';

const links = {
  social: [
    {
      href: 'https://github.com/centreon/centreon/',
      image: basePathImg + 'social-network/github.png'
    },{
      href: 'https://twitter.com/Centreon',
      image: basePathImg + 'social-network/twitter.png'
    },{
      href: 'https://www.linkedin.com/company/centreonsoftware',
      image: basePathImg + 'social-network/linkedin.png'
    },{
      href: 'https://www.youtube.com/c/Centreon-Monitoring',
      image: basePathImg + 'social-network/youtube.png'
    }
  ],
  thewatch: 'https://thewatch.centreon.com/',
  contribute:
    'https://github.com/centreon/.github/blob/master/CONTRIBUTING.md',
};

const cards = [
  {
    title: "Infra Monitoring",
    href: "docs/getting-started/welcome/",
    links: [
      {
        label: "Infra Monitoring OnPrem",
        href: "docs/getting-started/welcome",
      },
      {
        label: "Infra Monitoring Cloud",
        href: "cloud/getting-started/welcome",
      },
      {
        label: "Connecteurs de supervision",
        href: "pp/integrations/plugin-packs/getting-started/introduction/",
      },
    ],
  },
  {
    title: "Experience Monitoring",
    href: "experience-monitoring/getting-started/welcome/",
    links: [
      {
        label: "Démarrer avec Centreon Experience Monitoring",
        href: "experience-monitoring/getting-started/welcome/",
      },
      {
        label: "Le Monitoring Synthétique/Parcours utilisateur (STM)",
        href: "experience-monitoring/configuration/user-journey/user-journey-intro/",
      },
      {
        label: "Le Real User Monitoring (RUM)",
        href: "experience-monitoring/rum/rum-intro/",
      },
      {
        label: "Sobriété numérique",
        href: "experience-monitoring/category/digital-sobriety/"
      },{
        label: "Notes de release Experience Monitoring",
        href: "experience-monitoring/release-notes/"
      },
    ],
  },
  {
    title: "Log Management",
    href: "logmanagement/getting-started/welcome/",
    links: [
      {
        label: "Bases de Centreon Log Management",
        href: "logmanagement/getting-started/concepts/",
      },
      {
        label: "Configurer un collecteur OpenTelemetry",
        href: "logmanagement/collector/",
      },
      {
        label: "Explorer et analyser les logs",
        href: "logmanagement/explore-analyze/",
      },
    ],
  },
];

const versionInfo = {
  version: '25.10',
  link: 'https://www.centreon.com/fr/centreon-annonce-la-version-25-10-de-centreon-infra-monitoring-pierre-angulaire-de-la-nouvelle-centreon-observability-platform/',
  target: '_blank'
 }

const Button = (props) => {
  return (
    <a
      className={clsx(styles.button, {[styles.button_dark]: props.dark === "true"}) }
      href={props.href}
      target={props.target}
    >
      {props.label}
      <img src={basePathImg + "arrow.svg"}/>
    </a>
  );
};

function BannerBlock() {
  return (
    <div className={clsx(styles.bannerContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <div className={clsx(styles.bannerWrapper)}>
          {<span className={clsx(styles.badge)}>CENTREON INFRA MONITORING {versionInfo.version}</span>}
          <Button href={versionInfo.link} target={versionInfo.target} label="Nouvelle version logicielle disponible" dark="true"/>
        </div>
      </div>
    </div>
  );
}

function HeadingCard(props) {
  return(
    <div className={clsx(styles.headingCard)}>
        {props.card.isBeta && (
        <div className={clsx(styles.headingCardBetaBadge)}>BETA</div>
      )}
      <a href={props.card.href} className={clsx(styles.headingCardHeader)}>
        {props.card.title}
      </a>
      <div className={clsx(styles.headingCardBody)}>
        <ul>
          {props.card.links.map((link,index)=>{
            return(
              <li key={index}>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <img src={basePathImg + "external_link.svg"}/>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function HeadingCards(props){
  return(
    <div className={clsx(styles.headingCards)}>
      {props.cards.map((card,index)=>{
        return( <HeadingCard card={card} key={index}/> )
      })}
    </div>
  )
}

function HeadingBlock() {
  return (
    <div className={clsx(styles.headingContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <h1>Bienvenue dans la Documentation Centreon !</h1>
        <p>Utilisez l’icône en haut à droite pour changer de documentation produit à tout moment.</p>
        <HeadingCards cards={cards}/>
      </div>
    </div>
  )
}

function CommunityBlock() {
  return(
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>Une communauté solide</span>
      <div className={clsx(styles.watchWrapper)}>
        <div>
          <img src={basePathImg + "social-network/thewatch.png"}/>
        </div>
        <Button href={links.thewatch} target="_blank" label="Rejoignez la communauté"/>
      </div>
      <div className={clsx(styles.socialWrapper)}>
        {links.social.map((link,index)=>{
          return(
            <a href={link.href} key={index}>
              <img src={link.image}/>
            </a>
          )
        })}
      </div>
    </div>
  )
}

function OpensourceBlock() {
  return(
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>UN CŒUR OPEN SOURCE</span>
      <p>Plébiscité par des centaines de milliers de professionnels de l’IT à travers le monde avec 6 000 téléchargements mensuels, Centreon Infra Monitoring est devenu le numéro 1 de la supervision open source en Europe.</p>
      <Button href={links.contribute} target="_blank" label="Contribuer au projet Open Source"/>
    </div>
  )
}

function SocialBlock() {
  return (
    <div className={clsx(styles.socialContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <CommunityBlock/>
        <OpensourceBlock/>
      </div>
    </div>
  )
}

export default function Home() {
  const { versions } = usePluginData('docusaurus-plugin-content-docs');
  const defaultPath = versions?.[0]?.path ?? 'docs';
  const defaultPage = versions?.[0]?.mainDocId ?? 'getting-started/installation-first-steps';
  const defaultRoute = `${defaultPath}/${defaultPage}`;

  const { siteConfig } = useDocusaurusContext();
  const { customFields: { version } } = siteConfig;

  if (version) {
    return <Redirect to={defaultRoute} />;
  }

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HeadingBlock />
        <BannerBlock />
        <SocialBlock />
      </main>
    </Layout>
  );
}
