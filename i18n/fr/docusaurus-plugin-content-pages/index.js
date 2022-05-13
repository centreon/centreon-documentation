import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '/src/pages/index.module.css';

const basePathImg = '/fr/img/homepage/';

const links = {
  doc: {
    api: '/fr/docs/api/introduction',
    gettingstarted: '/fr/docs/getting-started/installation-first-steps/',
    pluginpacks: '/fr/pp/integrations/plugin-packs/getting-started/introduction/',
    prerequisite: '/fr/docs/installation/prerequisites/',
    installation: '/fr/docs/installation/introduction/',
    monitoring: '/fr/pp/integrations/plugin-packs/getting-started/introduction/',
  },
  github: 'https://github.com/centreon/centreon/',
  slack: 'https://centreon.github.io/register-slack/',
  twitter: 'https://twitter.com/CentreonFR/',
  linkedin: 'https://www.linkedin.com/company/merethis/',
  contribute:
    'https://github.com/centreon/centreon/blob/master/CONTRIBUTING.md',
  banner:
    'https://thewatch.centreon.com/',
};

const stringsAndParagraphs = {
  excellenceBlock: {
    title: `Bienvenue dans la Documentation Centreon !`,
    subTitle: `La plateforme de supervision informatique orientée AIOps de Centreon offre une visibilité globale des workflows les plus complexes, du cloud jusqu’au Edge.`,
    btnStart: `Démarrer`,
    btnPp: `Plugin Packs`,
    btnApi: `Voir les APIs`,
  },
  prerequisiteBlock: {
    title: `Pré-requis`,
    content1stPart: `Nous proposons une appliance logicielle qui embarque son Linux, son SGBD et tous les composants logiciels nécessaires à un démarrage immédiat. Installez Centreon sur un serveur physique ou virtuel. Lisez ce chapitre pour comprendre les`,
    link: ` règles de dimensionnement `,
    content2ndPart: `et les architectures distribuées.`,
  },
  installationBlock: {
    title: `Installation`,
    content1stPart: `Il existe plusieurs méthodes pour installer Centreon, depuis une ISO ou depuis une image OVA. Dans tous les cas,`,
    link: ` suivez pas à pas `,
    content2ndPart: `les étapes de ce chapitre.`,
  },
  monitoringBlock: {
    title: `Supervision de bout-en-bout`,
    content1stPart: `La supervision simple et intuitive : tout ce dont vous avez besoin pour une configuration en 1-clic se trouve dans notre bibliothèque de 400 Plugin Packs. Retrouvez ici`,
    link: ` les métriques supervisées `,
    content2ndPart: `pour chacun d’entre eux.`,
  },
  communityBlock: {
    title: `A strong community`,
  },
  heartOpenSourceBlock: {
    title: `Un coeur Open Source`,
    content: `Plébiscité par des centaines de milliers de professionnels de l’IT à travers le monde avec 6 000 téléchargements mensuels, Centreon est devenu le numéro 1 de la supervision open source en Europe.`,
    btnOpen: `Contribuez au projet Open Source`,
  },
};

const Button = (props) => {
  return (
    <div>
      <a
        className={clsx(styles.button, styles.buttonLink)}
        href={props.href}
        target={props.target}
      >
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
      <h1 className={clsx(styles.containerBlockh1)}>
        {stringsAndParagraphs.excellenceBlock.title}
      </h1>
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
          btnLabel={stringsAndParagraphs.excellenceBlock.btnApi}
          btnLink={links.doc.api}
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
          <img src={basePathImg + 'thewatch-banner-fr.png'} />
        </a>
      </div>
    </div>
  );
}

function PrerequisiteBlock() {
  return (
    <div
      className={clsx(styles.mainContainer, styles.containerBlockPrerequisite)}
    >
      <div>
        <img
          className={clsx(styles.imageSectionPrerequisite)}
          src={basePathImg + 'image-prerequisite-block.svg'}
        />
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
    <div
      className={clsx(
        styles.mainContainer,
        styles.bgLightBlue,
        styles.containerBlockInstallation
      )}
    >
      <div>
        <img
          className={clsx(styles.imageSectionInstallation)}
          src={basePathImg + 'image-installation-block.svg'}
        />
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
    <div
      className={clsx(styles.mainContainer, styles.containerBlockMonitoring)}
    >
      <div>
        <img
          className={clsx(styles.imageSectionMonitoring)}
          src={basePathImg + 'image-monitoring-block.svg'}
        />
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
    <div
      className={clsx(
        styles.mainContainer,
        styles.borderTop,
        styles.containerBlock
      )}
    >
      <h2 className={clsx(styles.titleSectionCommunity)}>
        {stringsAndParagraphs.communityBlock.title}
      </h2>
      <div className={clsx(styles.cardBar)}>
        <ul className={clsx(styles.socialSet)}>
          <a href={links.slack} target={'_blank'}>
            <li>
              <img src={basePathImg + 'social-network/slack.svg'} />
            </li>
          </a>
          <a href={links.github} target={'_blank'}>
            <li>
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
    <div
      className={clsx(
        styles.mainContainer,
        styles.containerBlock,
        styles.bgLightPurple
      )}
    >
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenue dans la Documentation Centreon`}
      description='La plateforme de supervision informatique orientée AIOps de Centreon offre une visibilité globale des workflows les plus complexes, du cloud jusqu’au Edge.'
    >
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
