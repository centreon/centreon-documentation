/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

class FirstBloc extends React.Component {
  render () {
    const basePathImg = './img/homepage/';

    const stringLabels = {
      h1: "L’Excellence IT au service de la Performance Métier",
      subTitle: "Notre documentation est à votre disposition pour vous aider dans toutes les étapes de l'installation à la configuration, des mises à jour et bien plus !",
    }

    const Button = props => {
      return (
        <>
          <div className="pluginWrapper buttonWrapper">
            <a className="button buttonLink" href={props.href} target={props.target}>
              {props.label}
            </a>
          </div>
        </>
        )
    }

    const Image = props => (
      <div className="imageContainer">
        <img src={basePathImg + props.imageSrc} />
      </div>
    )

    const Card = props => {
      return (
        <>
        <div className="cardContent">
          <Image imageSrc={props.imageSrc} />
          <Button href={'#'} target={'_blank'} label={props.btnLabel} />
        </div>
        </>
      )
    }

    return (
      <>
      <div className="containerBloc">
        <h1>{stringLabels.h1}</h1>
        <p className="subTitle">{stringLabels.subTitle}</p>
        <div className="cardBar">
          <Card imageSrc={'Groupe-607.svg'} btnLabel={'Installer'} />
          <Card imageSrc={'Groupe-608.svg'} btnLabel={'Démarrer'} />
          <Card imageSrc={'Groupe-386.svg'} btnLabel={'Voir les API'} />
        </div>
      </div>
      </>
    )
  }
}

class Homepage extends React.Component {
  render() {
    return (
        <Container className="mainContainer documentContainer postContainer homepageCustom">
          <FirstBloc />
        </Container>
    );
  }
}

module.exports = Homepage;