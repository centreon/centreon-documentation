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
    const globalStyle = {
      container : {
        textAlign: 'center',
        padding: '0 40px',
        margin: 'auto',
        alignItems: 'center',
      },
      subTitle: {
        margin: 'auto',
        color: 'rgba(34, 46, 59, 1)'
      },
      font: {
        h1: {
          color: 'rgba(34, 46, 59, 1)',
          fontSize: '50px',
          margin: 'auto',
        },
      },
      cardBar: {
        display: 'flex',
        flexWrap: 'wrap',
    }
    };


    const Button = props => {
      const btnStyle = {
        backgroundColor: 'rgb(0, 114, 206)',
        width: '170px',
        color: 'rgba(255, 255, 255, 1)',
        borderRadius: '5px',
        height: '45px',
      };

      return (
        <>
          <div className="pluginWrapper buttonWrapper">
            <a className="button" href={props.href} target={props.target} style={btnStyle}>
              {props.label}
            </a>
          </div>
        </>
        )
    }

    const Image = props => (
       <img src={basePathImg + props.imageSrc} />
    )

    const Card = props => {
      const cardSstyle = {
        width: '170px',
        margin: '44px',
        left: '268px',
      }

      return (
        <>
        <div className="CardLink" style={cardSstyle}>
          <Image imageSrc={props.imageSrc} />
          <Button href={'#'} target={'_blank'} label={props.btnLabel} />
        </div>
        </>
      )
    }

    return (
      <>
      <div style={globalStyle.container}>
        <h1 style={globalStyle.font.h1}>{stringLabels.h1}</h1>
        <p style={globalStyle.subTitle}>{stringLabels.subTitle}</p>
        <div style={globalStyle.cardBar}>
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
    const style = {
      background: 'rgba(0, 159, 223, 0.1)',
    }

    return (
        <Container background='dark' className="mainContainer documentContainer postContainer">
          <FirstBloc />
        </Container>
    );
  }
}

module.exports = Homepage;