/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const basePathImg = "./img/homepage/";

const links = {
  doc: {
    api: "api/introduction.html",
    gettingstarted: "getting-started/installation-first-steps.html",
    pluginpacks: "integrations/plugin-packs/introduction.html",
    prerequisite: "installation/prerequisites.html",
    installation: "installation/introduction.html",
    monitoring: "integrations/plugin-packs/introduction.html",
  },
  github: "https://github.com/centreon/centreon/",
  thewatch: "https://thewatch.centreon.com",
  twitter: "https://twitter.com/CentreonFR/",
  linkedin: "https://www.linkedin.com/company/merethis/",
  contribute:"https://github.com/centreon/centreon/blob/master/CONTRIBUTING.md",
  banner: "https://thewatch.centreon.com",
};

const stringsAndParagraphs = {
  excellenceBlock: {
    title: `Welcome to Centreon documentation !`,
    subTitle: `Centreon’s AIOps-ready IT monitoring platform provides holistic visibility to complex IT workflows from Cloud-to-Edge.`,
    btnStart: `Getting Started`,
    btnPp: `Plugin Packs`,
    btnApi: `API Reference`,
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
    <div className="pluginWrapper buttonWrapper">
      <a className="button buttonLink" href={props.href} target={props.target}>
        {props.label}
      </a>
    </div>
  );
};

const Image = (props) => (
  <div className="imageContainer">
    <img src={basePathImg + props.imageSrc} />
  </div>
);

const Card = (props) => {
  return (
    <div className="cardContent">
      <Image imageSrc={props.imageSrc} />
      <Button href={props.btnLink} label={props.btnLabel} />
    </div>
  );
};

function ExcellenceBlock() {
  return (
    <div className="containerBlock">
      <h1> {stringsAndParagraphs.excellenceBlock.title} </h1>
      <p className="subTitle">
        {stringsAndParagraphs.excellenceBlock.subTitle}
      </p>
      <div className="cardBar">
        <Card
          imageSrc={"icon-tutorial.svg"}
          btnLabel={stringsAndParagraphs.excellenceBlock.btnStart}
          btnLink={links.doc.gettingstarted}
        />
        <Card
          imageSrc={"icon-install.svg"}
          btnLabel={stringsAndParagraphs.excellenceBlock.btnPp}
          btnLink={links.doc.pluginpacks}
        />
        <Card
          imageSrc={"icon-api.svg"}
          btnLabel={stringsAndParagraphs.excellenceBlock.btnApi}
          btnLink={links.doc.api}
        />
      </div>
    </div>
  );
}

function SummitBlock() {
  return (
    <div className="containerBlockBanner">
      <div className="imageSectionBanner">
        <a href={links.banner} target={'_blank'}>
          <Image imageSrc={"thewatch-banner-en.png"} />
        </a>
      </div>
    </div>
  );
}

function PrerequisiteBlock() {
  return (
    <div className="containerBlockPrerequisite">
      <div className="imageSectionPrerequisite">
        <Image imageSrc={"image-prerequisite-block.svg"} />
      </div>
      <div className="containerContentPrerequisite">
        <h2 className="titleSection">
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
    <div className="containerBlockInstallation">
      <div className="imageSectionInstallation">
        <Image imageSrc={"image-installation-block.svg"} />
      </div>
      <div className="containerContentInstallation">
        <h2 className="titleSection">
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
    <div className="containerBlockMonitoring">
      <div className="imageSectionMonitoring">
        <Image imageSrc={"image-monitoring-block.svg"} />
      </div>
      <div className="containerContentMonitoring">
        <h2 className="titleSection">
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
    <div className="containerBlock">
      <h2 className="titleSectionCommunity">
        {stringsAndParagraphs.communityBlock.title}
      </h2>
      <div className="cardBar">
        <ul className="socialSet">
          <a href={links.thewatch} target={'_blank'}>
            <li>
              <Image imageSrc={"social-network/thewatch.png"} />
            </li>
          </a>
          <a href={links.github} target={'_blank'}>
            <li>
              <Image imageSrc={"social-network/github.svg"} />
            </li>
          </a>
          <a href={links.twitter} target={'_blank'}>
            <li>
              <Image imageSrc={"social-network/twitter.svg"} />
            </li>
          </a>
          <a href={links.linkedin} target={'_blank'}>
            <li>
              <Image imageSrc={"social-network/linkedin.svg"} />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

function HeartOpenSourceBlock() {
  return (
    <div className="containerBlock">
      <div className="containerContentOpenSource">
        <h2 className="titleSectionOpenSource">
          {stringsAndParagraphs.heartOpenSourceBlock.title}
        </h2>
        <p className="textOpenSource">
          {stringsAndParagraphs.heartOpenSourceBlock.content}
        </p>
      </div>
      <div className="cardBarOpenSource">
        <Card
          imageSrc={"icon-openSource.svg"}
          btnLabel={stringsAndParagraphs.heartOpenSourceBlock.btnOpen}
          btnLink={links.contribute}
        />
      </div>
    </div>
  );
}

function Homepage() {
  const classesDefaultContainer =
    "mainContainer documentContainer postContainer homepageCustom";
  return (
    <React.Fragment>
      <Container className={classesDefaultContainer + ` bgLightBlue`}>
        <ExcellenceBlock />
      </Container>
      <Container className={classesDefaultContainer + ` bannerCustom`}>
        <SummitBlock />
      </Container>
      <Container className={classesDefaultContainer + ` homepageCustom`}>
        <PrerequisiteBlock />
      </Container>
      <Container className={classesDefaultContainer + ` bgLightBlue`}>
        <InstallationBlock />
      </Container>
      <Container className={classesDefaultContainer + ` homepageCustom`}>
        <MonitoringBlock />
      </Container>
      <Container className={classesDefaultContainer + ` borderTop`}>
        <CommunityBlock />
      </Container>
      <Container className={classesDefaultContainer + ` bgLightPurple`}>
        <HeartOpenSourceBlock />
      </Container>
    </React.Fragment>
  );
}

module.exports = Homepage;
