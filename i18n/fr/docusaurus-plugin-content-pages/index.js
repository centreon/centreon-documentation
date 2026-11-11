import React from 'react';
import { Redirect } from '@docusaurus/router';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from '/src/pages/index.module.css';
import HomeHero from '@site/src/components/HomeHero';

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

const versionInfo = {
  version: '26.10',
  link: 'https://centreon.com/fr/blog/actualites/centreon-infra-monitoring-26-10-lts-nouveautes/',
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
        <HomeHero />
        <BannerBlock />
        <SocialBlock />
      </main>
    </Layout>
  );
}
