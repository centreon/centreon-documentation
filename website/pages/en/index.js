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
function ExcellenceBloc() {
    return (
      <div className="containerBloc">
        <h1><translate>titleExcellenceBloc</translate></h1>
        <p className="subTitle"><translate>subTitleExcellenceBloc</translate></p>
        <div className="cardBar">
          <Card imageSrc={'Groupe-607.svg'} btnLabel={<translate>btnInstall</translate>} btnLink={<translate>btnLinkInstallation</translate>} />
          <Card imageSrc={'Groupe-608.svg'} btnLabel={<translate>btnStart</translate>} btnLink={<translate>btnLinkTutorial</translate>} />
          <Card imageSrc={'Groupe-386.svg'} btnLabel={<translate>btnApi</translate>} btnLink={<translate>btnLinkApi</translate>} />
        </div>
      </div>
    )
}

function PrerequisiteBloc() {
    return (
      <div className="containerBlocPrerequisite">
        <div className="imageSection">
        <Image imageSrc={'Groupe-463.svg'}  />
        </div>
        <div className="containerContentPrerequisite">
        <h2 className="title-section"><translate>titlePrerequisiteBloc</translate></h2>
        <p><translate>contentPrerequisiteBloc</translate></p>
        </div>
      </div>
    )
}

function InstallationBloc() {
    return (
      <div className="containerBlocInstallation">
        <div className="imageSection">
        <Image imageSrc={'Groupe-699.svg'}  />
        </div>
        <div className="containerContentInstallation">
        <h2 className="title-section"><translate>titleInstallationBloc</translate></h2>
        <p><translate>contentInstallationBloc</translate></p>
        </div>
      </div>
    )
}

function SupervisionBloc() {
    return (
      <div className="containerBloc">
        <h2 className="title-section"><translate>titleSupervisionBloc</translate></h2>
        <p><translate>contentSupervisionBloc</translate></p>
        <div className="imageSection">
        <Image imageSrc={'Groupe-387.svg'}  />
        </div>

      </div>
    )
}

function CommunityBloc() {
    return (
      <div className="containerBloc">
        <h2 className="title-community"><translate>titleCommunityBloc</translate></h2>
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

function HeartOpenSourceBloc(){
    return (
      <div className="containerBloc">
        <h2 className="title-section"><translate>titleHeartOpenSourceBloc</translate></h2>
        <p><translate>contentHeartOpenSourceBloc</translate></p>
      </div>
    )
}

function Homepage() {

    return (
      <React.Fragment>
        <Container className="mainContainer documentContainer postContainer homepageCustom bgLightBlue">
          <ExcellenceBloc />
        </Container>
        <Container className="mainContainer documentContainer postContainer homepageCustom">
          <PrerequisiteBloc />
        </Container>
        <Container className="mainContainer documentContainer postContainer homepageCustom bgLightBlue">
          <InstallationBloc />
        </Container>
        <Container className="mainContainer documentContainer postContainer homepageCustom">
          <SupervisionBloc />
        </Container>
        <Container className="mainContainer documentContainer postContainer homepageCustom borderTop">
          <CommunityBloc />
        </Container>
        <Container className="mainContainer documentContainer postContainer homepageCustom bgLightPurple">
          <HeartOpenSourceBloc />
        </Container>
      </React.Fragment>
    );
}

module.exports = Homepage;