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

const basePathImg = '/img/homepage/';

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
          <Card imageSrc={'icon-install.svg'} btnLabel={<translate>btnInstall</translate>} btnLink={<translate>btnLinkInstallation</translate>} />
          <Card imageSrc={'icon-tutorial.svg'} btnLabel={<translate>btnStart</translate>} btnLink={<translate>btnLinkTutorial</translate>} />
          <Card imageSrc={'icon-api.svg'} btnLabel={<translate>btnApi</translate>} btnLink={<translate>btnLinkApi</translate>} />
        </div>
      </div>
    )
}

function PrerequisiteBlock() {
    return (
      <div className="containerBlockPrerequisite">
        <div className="imageSection">
        <Image imageSrc={'image-prerequisite-block.svg'}  />
        </div>
        <div className="containerContentPrerequisite">
        <h2 className="title-section"><translate>titlePrerequisiteBlock</translate></h2>
        <p><translate>contentPrerequisiteBlock</translate></p>
        </div>
      </div>
    )
}

function InstallationBlock() {
    return (
      <div className="containerBlockInstallation">
        <div className="imageSection">
        <Image imageSrc={'image-installation-block.svg'}  />
        </div>
        <div className="containerContentInstallation">
        <h2 className="title-section"><translate>titleInstallationBlock</translate></h2>
        <p><translate>contentInstallationBlock</translate></p>
        </div>
      </div>
    )
}

function SupervisionBlock() {
    return (
      <div className="containerBlock">
        <h2 className="title-section"><translate>titleSupervisionBlock</translate></h2>
        <p><translate>contentSupervisionBlock</translate></p>
        <div className="imageSection">
        <Image imageSrc={'image-supervision-block.svg'}  />
        </div>
      </div>
    )
}

function CommunityBlock() {
    return (
      <div className="containerBlock">
        <h2 className="title-community"><translate>titleCommunityBlock</translate></h2>
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
        <h2 className="title-section"><translate>titleHeartOpenSourceBlock</translate></h2>
        <p><translate>contentHeartOpenSourceBlock</translate></p>
      </div>
    )
}

function Homepage() {
  const classesDefaultContainer = 'mainContainer documentContainer postContainer homepageCustom';
    return (
      <React.Fragment>
        <Container className={classesDefaultContainer + ` bgLightBlue`}>
          <ExcellenceBlock />
        </Container>
        <Container className={classesDefaultContainer + ` homepageCustom`}>
          <PrerequisiteBlock />
        </Container>
        <Container className={classesDefaultContainer + ` bgLightBlue`}>
          <InstallationBlock />
        </Container>
        <Container className={classesDefaultContainer + ` homepageCustom`}>
          <SupervisionBlock />
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