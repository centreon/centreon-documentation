import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from "@docusaurus/useGlobalData";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

const basePathImg = "./img/homepage/";

const links = {
  social: [
    {
      href: "https://github.com/centreon/centreon/",
      image: basePathImg + "social-network/github.png",
    },
    {
      href: "https://twitter.com/Centreon",
      image: basePathImg + "social-network/twitter.png",
    },
    {
      href: "https://www.linkedin.com/company/centreonsoftware",
      image: basePathImg + "social-network/linkedin.png",
    },
    {
      href: "https://www.youtube.com/c/Centreon-Monitoring",
      image: basePathImg + "social-network/youtube.png",
    },
  ],
  thewatch: "https://thewatch.centreon.com/",
  contribute: "https://github.com/centreon/.github/blob/master/CONTRIBUTING.md",
};

const cards = [
  {
    title: "Infra Monitoring",
    href: "docs/getting-started/welcome/",
    links: [
      {
        label: "Infra Monitoring OnPrem",
        href: "docs/getting-started/welcome",
      },
      {
        label: "Infra Monitoring Cloud",
        href: "cloud/getting-started/welcome",
      },
      {
        label: "Monitoring Connectors",
        href: "pp/welcome",
      },
    ],
  },
  {
    title: "Experience Monitoring",
    href: "experience-monitoring/getting-started/welcome/",
    links: [
      {
        label: "Getting started with Centreon Experience Monitoring",
        href: "experience-monitoring/getting-started/welcome/",
      },
      {
        label: "Synthetic Monitoring/User journeys (STM)",
        href: "experience-monitoring/configuration/user-journey/user-journey-intro/",
      },
      {
        label: "Real User Monitoring (RUM)",
        href: "experience-monitoring/rum/rum-intro/",
      },
      {
        label: "Digital sobriety",
        href: "experience-monitoring/category/digital-sobriety/"
      },{
        label: "Experience Monitoring release notes",
        href: "experience-monitoring/release-notes/"
      },
    ],
  },
  {
    title: "Log Management",
    href: "logmanagement/getting-started/welcome/",
    links: [
      {
        label: "Log Management basics",
        href: "logmanagement/getting-started/concepts/",
      },
      {
        label: "Configuring an OpenTelemetry collector",
        href: "logmanagement/collector/",
      },
      {
        label: "Exploring and analyzing logs",
        href: "logmanagement/explore-analyze/",
      },
    ],
  },
];

const versionInfo = {
  version: "25.10",
  link: "https://www.centreon.com/centreon-announces-the-25-10-release-of-centreon-infra-monitoring-cornerstone-of-the-new-centreon-observability-platform/",
  target: "_blank",
};

const Button = (props) => {
  return (
    <a
      className={clsx(styles.button, {
        [styles.button_dark]: props.dark === "true",
      })}
      href={props.href}
      target={props.target}
    >
      {props.label}
      <img src={basePathImg + "arrow.svg"} />
    </a>
  );
};

function BannerBlock() {
  return (
    <div className={clsx(styles.bannerContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <div className={clsx(styles.bannerWrapper)}>
          {
            <span className={clsx(styles.badge)}>
              CENTREON Infra Monitoring {versionInfo.version}
            </span>
          }
          <Button
            href={versionInfo.link}
            target={versionInfo.target}
            label="New software version available"
            dark="true"
          />
        </div>
      </div>
    </div>
  );
}

function HeadingCard(props) {
  return (
    <div className={clsx(styles.headingCard)}>
      {props.card.isBeta && (
        <div className={clsx(styles.headingCardBetaBadge)}>BETA</div>
      )}
      <a href={props.card.href} className={clsx(styles.headingCardHeader)}>
        {props.card.title}
      </a>
      <div className={clsx(styles.headingCardBody)}>
        <ul>
          {props.card.links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <img src={basePathImg + "external_link.svg"} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function HeadingCards(props) {
  return (
    <div className={clsx(styles.headingCards)}>
      {props.cards.map((card, index) => {
        return <HeadingCard card={card} key={index} />;
      })}
    </div>
  );
}

function HeadingBlock() {
  return (
    <div className={clsx(styles.headingContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <h1>Welcome to Centreon documentation!</h1>
        <p>
          Use the top-right icon to switch between product documentations at any
          time.
        </p>
        <HeadingCards cards={cards} />
      </div>
    </div>
  );
}

function CommunityBlock() {
  return (
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>A strong community</span>
      <div className={clsx(styles.watchWrapper)}>
        <div>
          <img src={basePathImg + "social-network/thewatch.png"} />
        </div>
        <Button
          href={links.thewatch}
          target="_blank"
          label="Join the community"
        />
      </div>
      <div className={clsx(styles.socialWrapper)}>
        {links.social.map((link, index) => {
          return (
            <a href={link.href} key={index}>
              <img src={link.image} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function OpensourceBlock() {
  return (
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>AN OPEN SOURCE CORE</span>
      <p>
        Praised by hundreds of thousands of IT professionals around the world
        with 6,000 monthly downloads, Centreon Infra Monitoring has become the
        number 1 in open source monitoring in Europe.
      </p>
      <Button
        href={links.contribute}
        target="_blank"
        label="Contribute to the Open Source project"
      />
    </div>
  );
}

function SocialBlock() {
  return (
    <div className={clsx(styles.socialContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <CommunityBlock />
        <OpensourceBlock />
      </div>
    </div>
  );
}

export default function Home() {
  const { versions } = usePluginData("docusaurus-plugin-content-docs");
  const defaultPath = versions?.[0]?.path ?? "docs";
  const defaultPage =
    versions?.[0]?.mainDocId ?? "getting-started/installation-first-steps";
  const defaultRoute = `${defaultPath}/${defaultPage}`;

  const { siteConfig } = useDocusaurusContext();
  const {
    customFields: { version },
  } = siteConfig;

  if (version) {
    return <Redirect to={defaultRoute} />;
  }

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HeadingBlock />
        <BannerBlock />
        <SocialBlock />
      </main>
    </Layout>
  );
}
