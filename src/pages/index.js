import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const basePathImg = './img/homepage/';

const links = {
  doc: {
    cloud: 'cloud/getting-started/architecture',
    gettingstarted: 'docs/getting-started/installation-first-steps',
    pluginpacks: 'pp/integrations/plugin-packs/introduction',
    prerequisite: 'docs/installation/prerequisites',
    installation: 'docs/installation/introduction',
    monitoring: 'pp/integrations/plugin-packs/introduction',
  },
  github: 'https://github.com/centreon/centreon/',
  thewatch: 'https://thewatch.centreon.com/',
  twitter: 'https://twitter.com/Centreon',
  linkedin: 'https://www.linkedin.com/company/centreonsoftware',
  contribute:'https://github.com/centreon/centreon/blob/master/CONTRIBUTING.md',
  banner: 'https://thewatch.centreon.com/',
};

const stringsAndParagraphs = {
  excellenceBlock: {
    title: `Welcome to Centreon documentation!`,
    subTitle: `Centreon’s AIOps-ready IT monitoring platform provides holistic visibility to complex IT workflows from Cloud-to-Edge.`,
    btnStart: `Centreon On Prem`,
    btnPp: `Plugin Packs`,
    btnCloud: `Centreon Cloud`,
  },
  prerequisiteBlock: {
    title: `Prerequisites`,
    content1stPart: `We provide a software appliance complete with its Linux Operating System, Databases or Web Server. Install Centreon on a virtual or physical server. Read this chapter to understand`,
    link: ` dimensioning guidelines `,
    content2ndPart: `and distributed architectures.`,
  },
  installationBlock: {
    title: `Installing`,
    content1stPart: `You may install Centreon from its ISO image or from an OVA file. Read this chapter and follow the`,
    link: ` step-by-step procedure`,
    content2ndPart: `.`,
  },
  monitoringBlock: {
    title: `Monitoring from Cloud-to-Edge`,
    content1stPart: `Monitoring should be that easy: we packaged everything you need for 1-click setup into a library of 400+ Enterprise Plugin Packs. Find here`,
    link: ` which KPIs are monitored `,
    content2ndPart: `by each one of them.`,
  },
  communityBlock: {
    title: `A strong community`,
  },
  heartOpenSourceBlock: {
    title: `An Open Source Core`,
    content: `Praised by hundreds of thousands of IT professionals around the world with 6,000 monthly downloads, Centreon has become the number 1 in open source monitoring in Europe.`,
    btnOpen: `Contribute to the Open Source project`,
  },
};

const Button = (props) => {
  return (
    <div>
      <a className={clsx(styles.button, styles.buttonLink)} href={props.href} target={props.target}>
        {props.label}
      </a>
    </div>
  );
};

const Image = (props) => (
  <div className={clsx(styles.imageContainer)}>
    <img src={basePathImg + props.imageSrc} />
  </div>
);

const Card = (props) => {
  return (
    <div className={clsx('cardContent', styles.cardContent)}>
      <Image imageSrc={props.imageSrc} />
      <Button href={props.btnLink} label={props.btnLabel} />
    </div>
  );
};

function ExcellenceBlock() {
  return (
    <header className={clsx(styles.heroBanner, styles.bgLightBlue)}>
      <h1 className={clsx(styles.containerBlockh1)}>{stringsAndParagraphs.excellenceBlock.title}</h1>
      <p className={clsx(styles.subTitle)}>
        {stringsAndParagraphs.excellenceBlock.subTitle}
      </p>
      <div className={clsx(styles.cardBar)}>
        <Card
          imageSrc={'icon-tutorial.svg'}
          btnLabel={stringsAndParagraphs.excellenceBlock.btnStart}
          btnLink={links.doc.gettingstarted}
        />
        <Card
          imageSrc={'icon-install.svg'}
          btnLabel={stringsAndParagraphs.excellenceBlock.btnPp}
          btnLink={links.doc.pluginpacks}
        />
        <Card
          imageSrc={'icon-api.svg'}
          btnLabel={stringsAndParagraphs.excellenceBlock.btnCloud}
          btnLink={links.doc.cloud}
        />
      </div>
    </header>
  );
}

function SummitBlock() {
  return (
    <div className={clsx(styles.bannerCustom)}>
      <div className={clsx(styles.bannerImage)}>
        <a href={links.banner} target={'_blank'}>
          <img src={basePathImg + 'thewatch-banner-en.png'}/>
        </a>
      </div>
    </div>
  );
}

function PrerequisiteBlock() {
  return (
    <div className={clsx(styles.mainContainer, styles.containerBlockPrerequisite)}>
      <div>
        <img className={clsx(styles.imageSectionPrerequisite)} src={basePathImg + 'image-prerequisite-block.svg'} />
      </div>
      <div className={clsx(styles.containerContentPrerequisite)}>
        <h2 className={clsx(styles.titleSection)}>
          {stringsAndParagraphs.prerequisiteBlock.title}
        </h2>
        <p>
          {stringsAndParagraphs.prerequisiteBlock.content1stPart}
          <a href={links.doc.prerequisite}>
            {stringsAndParagraphs.prerequisiteBlock.link}
          </a>
          {stringsAndParagraphs.prerequisiteBlock.content2ndPart}
        </p>
      </div>
    </div>
  );
}

function InstallationBlock() {
  return (
    <div className={clsx(styles.mainContainer, styles.bgLightBlue, styles.containerBlockInstallation)}>
      <div>
        <img className={clsx(styles.imageSectionInstallation)} src={basePathImg + 'image-installation-block.svg'} />
      </div>
      <div className={clsx(styles.containerContentInstallation)}>
        <h2 className={clsx(styles.titleSection)}>
          {stringsAndParagraphs.installationBlock.title}
        </h2>
        <p>
          {stringsAndParagraphs.installationBlock.content1stPart}
          <a href={links.doc.installation}>
            {stringsAndParagraphs.installationBlock.link}
          </a>
          {stringsAndParagraphs.installationBlock.content2ndPart}
        </p>
      </div>
    </div>
  );
}

function MonitoringBlock() {
  return (
    <div className={clsx(styles.mainContainer, styles.containerBlockMonitoring)}>
      <div>
        <img className={clsx(styles.imageSectionMonitoring)} src={basePathImg + 'image-monitoring-block.svg'} />
      </div>
      <div className={clsx(styles.containerContentMonitoring)}>
        <h2 className={clsx(styles.titleSection)}>
          {stringsAndParagraphs.monitoringBlock.title}
        </h2>
        <p>
          {stringsAndParagraphs.monitoringBlock.content1stPart}
          <a href={links.doc.monitoring}>
            {stringsAndParagraphs.monitoringBlock.link}
          </a>
          {stringsAndParagraphs.monitoringBlock.content2ndPart}
        </p>
      </div>
    </div>
  );
}

function CommunityBlock() {
  return (
    <div className={clsx(styles.mainContainer, styles.borderTop, styles.containerBlock)}>
      <h2 className={clsx(styles.titleSectionCommunity)}>
        {stringsAndParagraphs.communityBlock.title}
      </h2>
      <div className={clsx(styles.cardBar)}>
        <ul className={clsx(styles.socialSet)}>
          <a href={links.thewatch} target={'_blank'}>
            <li>
            <img src={basePathImg + 'social-network/thewatch.png'} />
            </li>
          </a>
          <a href={links.github} target={'_blank'}>
            <li className={clsx(styles.bgDm)}>
            <img src={basePathImg + 'social-network/github.svg'} />
            </li>
          </a>
          <a href={links.twitter} target={'_blank'}>
            <li>
            <img src={basePathImg + 'social-network/twitter.svg'} />
            </li>
          </a>
          <a href={links.linkedin} target={'_blank'}>
            <li>
            <img src={basePathImg + 'social-network/linkedin.svg'} />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

function HeartOpenSourceBlock() {
  return (
    <div className={clsx(styles.mainContainer, styles.containerBlock, styles.bgLightPurple)}>
      <div className={clsx(styles.containerContentOpenSource)}>
        <h2 className={clsx(styles.titleSectionOpenSource)}>
          {stringsAndParagraphs.heartOpenSourceBlock.title}
        </h2>
        <p className={clsx(styles.textOpenSource)}>
          {stringsAndParagraphs.heartOpenSourceBlock.content}
        </p>
      </div>
      <div className={clsx(styles.cardBarOpenSource)}>
        <Card
          imageSrc={'icon-openSource.svg'}
          btnLabel={stringsAndParagraphs.heartOpenSourceBlock.btnOpen}
          btnLink={links.contribute}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'>
      <main>
      <ExcellenceBlock />
      <SummitBlock />
      <PrerequisiteBlock />
      <InstallationBlock />
      <MonitoringBlock />
      <CommunityBlock />
      <HeartOpenSourceBlock />
      </main>
    </Layout>
  );
}
