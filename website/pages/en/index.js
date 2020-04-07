/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const translate = require('../../server/translate.js').translate;

const uriBlocks = {
  prerequisite: 'installation/prerequisites',
  installation: 'installation/introduction.html',
  monitoring: 'integrations/plugin-packs/introduction.html'
}

const basePathImg = '../img/homepage/';

/**
 * @param {string} uri
 * @param {string} [lang='en']
 * @param {string} [prefix='/docs/']
 * @returns {string} Url to link in docs or a external page
 */
function createUrl(uri, lang = 'en', prefix = 'docs') {
  return `/${prefix}/${lang}/${uri}/`;
}

const Button = props => {
  return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button buttonLink" href={props.href} target={props.target}>
          {props.label}
        </a>
      </div>
    )
}

const Image = props => (
  <div className="imageContainer">
    <img src={basePathImg + props.imageSrc} />
  </div>
)

const Card = props => {
  return (
    <div className="cardContent">
      <Image imageSrc={props.imageSrc} />
      <Button href={props.btnLink} target={'_blank'} label={props.btnLabel} />
    </div>
  )
}
function ExcellenceBlock() {
    return (
      <div className="containerBlock">
        <h1><translate>titleExcellenceBlock</translate></h1>
        <p className="subTitle"><translate>subTitleExcellenceBlock</translate></p>
        <div className="cardBar">
          <Card imageSrc={'icon-tutorial.svg'} btnLabel={<translate>btnStart</translate>} btnLink={<translate>btnLinkTutorial</translate>} />
          <Card imageSrc={'icon-install.svg'} btnLabel={<translate>btnInstall</translate>} btnLink={<translate>btnLinkInstallation</translate>} />
          <Card imageSrc={'icon-api.svg'} btnLabel={<translate>btnApi</translate>} btnLink={<translate>btnLinkApi</translate>} />
        </div>
      </div>
    )
}

function PrerequisiteBlock({ language }) {
    return (
      <div className="containerBlockPrerequisite">
        <div className="imageSectionPrerequisite">
        <Image imageSrc={'image-prerequisite-block.svg'}  />
        </div>
        <div className="containerContentPrerequisite">
        <h2 className="titleSection"><translate>titlePrerequisiteBlock</translate></h2>
        <p>
          <translate>contentPrerequisiteBlock1stPart</translate>&nbsp;
          <a href={createUrl(uriBlocks.prerequisite, language)}><translate>contentPrerequisiteBlockLinkPart</translate></a>&nbsp;
          <translate>contentPrerequisiteBlock2ndPart</translate>
        </p>
        </div>
      </div>
    )
}

function InstallationBlock({ language }) {
    return (
      <div className="containerBlockInstallation">
        <div className="imageSectionInstallation">
        <Image imageSrc={'image-installation-block.svg'}  />
        </div>
        <div className="containerContentInstallation">
        <h2 className="titleSection"><translate>titleInstallationBlock</translate></h2>
        <p>
          <translate>contentInstallationBlock1stPart</translate>&nbsp;
          <a href={createUrl(uriBlocks.installation, language)}><translate>contentInstallationBlockLinkPart</translate></a>&nbsp;
          <translate>contentInstallationBlock2ndPart</translate>&nbsp;

        </p>
        </div>
      </div>
    )
}

function MonitoringBlock({ language }) {
    return (
      <div className="containerBlockMonitoring">
        <div className="imageSectionMonitoring">
        <Image imageSrc={'image-monitoring-block.svg'}  />
        </div>
        <div className="containerContentMonitoring">
        <h2 className="titleSection"><translate>titleMonitoringBlock</translate></h2>
        <p>
          <translate>contentMonitoringBlock1stPart</translate>&nbsp;
          <a href={createUrl(uriBlocks.monitoring, language)}><translate>contentMonitoringBlockLinkPart</translate></a>&nbsp;
          <translate>contentMonitoringBlock2ndPart</translate>&nbsp;
        </p>
        </div>
      </div>
    )
}

function CommunityBlock() {
    return (
      <div className="containerBlock">
        <h2 className="titleSectionCommunity"><translate>titleCommunityBlock</translate></h2>
        <div className="cardBar">
          <ul className="socialSet">
            <a href="https://centreon.github.io/register-slack/">
              <li><Image imageSrc={'social-network/slack.svg'} /></li>
            </a>
            <a href="https://github.com/centreon/centreon">
              <li><Image imageSrc={'social-network/github.svg'} /></li>
            </a>
            <a href="https://twitter.com/CentreonFR">
              <li><Image imageSrc={'social-network/twitter.svg'} /></li>
            </a>
            <a href="https://www.linkedin.com/company/merethis/">
              <li><Image imageSrc={'social-network/linkedin.svg'} /></li>
            </a>
          </ul>
        </div>
      </div>
    )
}

function HeartOpenSourceBlock(){
    return (
      <div className="containerBlock">
        <div className="containerContentOpenSource">
          <h2 className="titleSectionOpenSource"><translate>titleHeartOpenSourceBlock</translate></h2>
          <p className="textOpenSource"><translate>contentHeartOpenSourceBlock</translate></p>
        </div>
        <div className="cardBarOpenSource">
          <Card imageSrc={'icon-openSource.svg'} btnLabel={<translate>btnOpenSource</translate>} btnLink={<translate>btnLinkOpenSource</translate>} />
        </div>
      </div>
    )
}

function Homepage({ language = 'en' }) {
  const classesDefaultContainer = 'mainContainer documentContainer postContainer homepageCustom';
    return (
      <React.Fragment>
        <Container className={classesDefaultContainer + ` bgLightBlue`}>
          <ExcellenceBlock />
        </Container>
        <Container className={classesDefaultContainer + ` homepageCustom`}>
          <PrerequisiteBlock language={language} />
        </Container>
        <Container className={classesDefaultContainer + ` bgLightBlue`}>
          <InstallationBlock language={language} />
        </Container>
        <Container className={classesDefaultContainer + ` homepageCustom`}>
          <MonitoringBlock language={language} />
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