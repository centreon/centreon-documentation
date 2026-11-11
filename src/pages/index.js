import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from "@docusaurus/useGlobalData";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";
import HomeHero from '@site/src/components/HomeHero';

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

const versionInfo = {
  version: "26.10",
  link: "https://centreon.com/blog/centreon-news/centreon-infra-monitoring-26-10-lts-whats-new/",
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
        <HomeHero />
        <BannerBlock />
        <SocialBlock />
      </main>
    </Layout>
  );
}
