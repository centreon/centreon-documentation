import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const basePathImg = './img/homepage/';

const links = {
  doc: {
    cloud: 'cloud/getting-started/architecture',
    gettingstarted: 'docs/getting-started/welcome',
    pluginpacks: 'pp/integrations/plugin-packs/getting-started/introduction',
    prerequisite: 'docs/installation/prerequisites',
    installation: 'docs/installation/introduction',
    monitoring: 'pp/integrations/plugin-packs/getting-started/introduction',
  },
  social: [
    {
      href: 'https://github.com/centreon/centreon/',
      image: '/img/homepage/social-network/github.png'
    },{
      href: 'https://twitter.com/Centreon',
      image: '/img/homepage/social-network/twitter.png'
    },{
      href: 'https://www.linkedin.com/company/centreonsoftware',
      image: '/img/homepage/social-network/linkedin.png'
    },{
      href: 'https://www.youtube.com/c/Centreon-Monitoring',
      image: '/img/homepage/social-network/youtube.png'
    }
  ],
  thewatch: 'https://thewatch.centreon.com/',
  contribute:
    'https://github.com/centreon/centreon/blob/master/CONTRIBUTING.md',
  banner:
    'https://www.centreon.com/en/blog/centreon-fall22-whats-new-in-the-22-10-software-version/',
};

const cards = [
  {
    title: "Centreon OnPrem",
    links: [
      {
        label: "Getting started",
        href: "docs/getting-started/welcome"
      },{
        label: "Installation",
        href: "docs/installation/introduction"
      },{
        label: "Setting up the monitoring",
        href: "pp/integrations/plugin-packs/getting-started/introduction"
      },{
        label: "BAM",
        href: "#"
      },{
        label: "MAP",
        href: "#"
      },{
        label: "MBI",
        href: "#"
      },
    ]
  },
  {
    title: "Centreon Cloud",
    links: [
      {
        label: "Getting started",
        href: "docs/getting-started/welcome"
      },{
        label: "Installing a poller",
        href: "#"
      },{
        label: "BAM",
        href: "#"
      },{
        label: "MAP",
        href: "#"
      },
    ]
  }
]

const versionInfo = {
  version: '22.10',
  link: 'https://www.centreon.com/en/blog/centreon-fall22-whats-new-in-the-22-10-software-version/',
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
      <img src="/img/homepage/Arrow.svg"/>
    </a>
  );
};

function BannerBlock() {
  return (
    <div className={clsx(styles.bannerContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <div className={clsx(styles.bannerWrapper)}>
          <span className={clsx(styles.badge)}>CENTREON {versionInfo.version}</span>
          <p>New software version available</p>
          <Button href={versionInfo.link} target={versionInfo.target} label="Learn more" dark="true"/>
        </div>
      </div>
    </div>
  );
}

function SearchForm() {
  function handleClick(e) {
    e.preventDefault()
    document.querySelector('.DocSearch').click()
  }
  return (
    <form className={clsx(styles.searchForm)} onClick={handleClick}>
      <div className={clsx(styles.searchForm_input)}>
        <img src="/img/homepage/Search.svg"/>
        <input type="search" placeholder="Search documentation" ></input>
      </div>
      <button className={clsx(styles.button, styles.buttonBig)}>
        Search
        <img src="/img/homepage/Arrow.svg"/>
      </button>
    </form>
  )
}

function HeadingCard(props) {
  console.log(props)
  return(
    <div className={clsx(styles.headingCard)}>
      <div className={clsx(styles.headingCardHeader)}>
        {props.card.title}
      </div>
      <div className={clsx(styles.headingCardBody)}>
        <ul>
          {props.card.links.map((link,index)=>{
            return(
              <li>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <img src="/img/homepage/ExternalLink.svg"/>
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
        return( <HeadingCard card={card}/> )
      })}
    </div>
  )
}

function HeadingBlock() {
  return (
    <div className={clsx(styles.headingContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <h1>Welcome to Centreon documentation!</h1>
        <SearchForm/>
        <HeadingCards cards={cards}/>
      </div>
    </div>
  )
}

function CommunityBlock() {
  return(
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>A strong community</span>
      <div className={clsx(styles.watchWrapper)}>
        <div>
          <img src="img/homepage/social-network/thewatch.png"/>
        </div>
        <Button href={links.thewatch} target="_blank" label="Join the community"/>
      </div>
      <div className={clsx(styles.socialWrapper)}>
        {links.social.map((link,index)=>{
          return(
            <div>
              <a href={link.href}>
                <img src={link.image}/>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function OpensourceBlock() {
  return(
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>AN OPEN SOURCE CORE</span>
      <p>Praised by hundreds of thousands of IT professionals around the world with 6,000 monthly downloads, Centreon has become the number 1 in open source monitoring in Europe.</p>
      <Button href={links.contribute} target="_blank" label="Contribute to the Open Source project"/>
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
  const { siteConfig } = useDocusaurusContext();
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
