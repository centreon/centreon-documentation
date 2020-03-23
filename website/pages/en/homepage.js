/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

class ExcellenceBloc extends React.Component {
  render () {
    const basePathImg = './img/homepage/';

    const stringLabels = {
      h1: "L’Excellence IT au service de la Performance Métier",
      subTitle: "Notre documentation est à votre disposition pour vous aider dans toutes les étapes de l'installation à la configuration, des mises à jour et bien plus !",
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
          <Button href={'#'} target={'_blank'} label={props.btnLabel} />
        </div>
      )
    }

    return (
      <div className="containerBloc">
        <h1>{stringLabels.h1}</h1>
        <p className="subTitle">{stringLabels.subTitle}</p>
        <div className="cardBar">
          <Card imageSrc={'Groupe-607.svg'} btnLabel={'Installer'} />
          <Card imageSrc={'Groupe-608.svg'} btnLabel={'Démarrer'} />
          <Card imageSrc={'Groupe-386.svg'} btnLabel={'Voir les API'} />
        </div>
      </div>
    )
  }
}

class PrerequisiteBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2>Les prérequis</h2>
      </div>
    )
  }
}

class InstallationBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2>L'installation</h2>
      </div>
    )
  }
}

class SupervisionBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2>La supervision</h2>
      </div>
    )
  }
}

class CommunityBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2>Une communauté solide</h2>
      </div>
    )
  }
}

class HeartOpenSourceBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2>Un cœur Open Source</h2>
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