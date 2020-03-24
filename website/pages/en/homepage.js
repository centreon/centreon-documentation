/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const stringLabels = {
  tittleExcellenceBloc: "L’Excellence IT au service de la Performance Métier",
  subTitleExcellenceBloc: "Notre documentation est à votre disposition pour vous aider dans toutes les étapes de l'installation à la configuration, des mises à jour et bien plus !",
  tittlePrerequisiteBloc: "Les prérequis",
  contentPrerequisiteBloc: "Veuillez à bien suivre les prérequis d'installation et de dimensionnement (ressources CPU, mémoire, disques, partitionnement, etc ...).Prenez également soin de bien choisir le type d'architecture qu'il convient de pour vos besoins et avant l'installation de la plateforme.", 
  tittleInstallationBloc: "L'installation",
  contentInstallationBloc: "La plateforme de supervision peut-être installée de plusieurs manières.Cependant,nous vous recommandons vivement d'utiliser Centreon Iso(ex CES) pour installer votre plateforme.",
  tittleSupervisionBloc: "La supervision",
  contentSupervisionBloc: "Bénéficier rapidement d'une supervision prête à l'emploi grâce à nos Plugin Packs.Plus de 400 domaines IT déjà couverts: réseaux, serveurs, applications,stockage,base de données, appareils, matériels, etc. sur des infratructures physiques, virtuekkes, ou hybrides.",
}

const basePathImg = './img/homepage/';


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
class ExcellenceBloc extends React.Component {
  render () {

    return (
      <div className="containerBloc">
        <h1>{stringLabels.tittleExcellenceBloc}</h1>
        <p className="subTitle">{stringLabels.subTitleExcellenceBloc}</p>
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
        <h2 className="tittle-section">{stringLabels.tittlePrerequisiteBloc}</h2>
        <p>{stringLabels.contentPrerequisiteBloc}</p>
        <div className="cardBar">
        <Card imageSrc={'Groupe-463.svg'}  />
        </div>
      </div>
    )
  }
}

class InstallationBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section">{stringLabels.tittleSection2}</h2>
    <p>{stringLabels.contentSection2}</p>
      </div>
    )
  }
}

class SupervisionBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section">{stringLabels.tittleSupervisionBloc}</h2>
    <p>{stringLabels.contentSupervisionBloc}</p>
      </div>
    )
  }
}

class CommunityBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section">Une communauté solide</h2>
      </div>
    )
  }
}

class HeartOpenSourceBloc extends React.Component {
  render () {
    return (
      <div className="containerBloc">
        <h2 className="tittle-section">Un cœur Open Source</h2>
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