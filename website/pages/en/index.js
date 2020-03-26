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
class ExcellenceBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h1><translate>titleExcellenceBloc</translate></h1>
        <p className="subTitle"><translate>subTitleExcellenceBloc</translate></p>
        <div className="cardBar">
          <Card imageSrc={'Groupe-607.svg'} btnLabel={<translate>btnInstall</translate>} btnLink={'/docs/installation/introduction.html'} />
          <Card imageSrc={'Groupe-608.svg'} btnLabel={<translate>btnStart</translate>} btnLink={'/docs/tutorials/first-steps.html'} />
          <Card imageSrc={'Groupe-386.svg'} btnLabel={<translate>btnApi</translate>} btnLink={'/docs/api/introduction.html'} />
        </div>
      </div>
    )
  }
}

class PrerequisiteBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section"><translate>titlePrerequisiteBloc</translate></h2>
        <p><translate>contentPrerequisiteBloc</translate></p>
        <div className="cardBar">
        <Image imageSrc={'Groupe-463.svg'}  />
        </div>
      </div>
    )
  }
}

class InstallationBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section"><translate>titleInstallationBloc</translate></h2>
        <p><translate>contentInstallationBloc</translate></p>
        <div className="cardBar">
        <Image imageSrc={'Groupe-699.svg'}  />
        </div>
      </div>
    )
  }
}

class SupervisionBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section"><translate>titleSupervisionBloc</translate></h2>
        <p><translate>contentSupervisionBloc</translate></p>
        <div className="cardBar">
        <Image imageSrc={'Groupe-387.svg'}  />
        </div>

      </div>
    )
  }
}

class CommunityBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section"><translate>titleCommunityBloc</translate></h2>
      </div>
    )
  }
}

class HeartOpenSourceBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section"><translate>titleHeartOpenSourceBloc</translate></h2>
        <p><translate>contentHeartOpenSourceBloc</translate></p>
      </div>
    )
  }
}

class Homepage extends React.Component {

  render() {
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
}

module.exports = Homepage;