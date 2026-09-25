import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Redirect } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  useAllPluginInstancesData,
  usePluginData,
} from "@docusaurus/useGlobalData";
import SearchBar from "@theme/SearchBar";
import Icon from "@site/src/components/Icon";
import styles from "./index.module.css";

const THE_WATCH_URL = "https://thewatch.centreon.com/";

// Key figures shown in the hero card. Each figure must be sourced: the mockup's
// marketing claims ("N°1 open source in Europe", monthly downloads) can replace
// these once validated by Product Marketing.
function getKeyFigures() {
  return [
    {
      value: "700+",
      label: translate({
        id: "home.figures.connectors",
        message: "monitoring connectors",
      }),
    },
    {
      value: "2005",
      label: translate({
        id: "home.figures.openSource",
        message: "open source since",
      }),
    },
  ];
}

// Products, in the order of the navbar switcher. `pluginId` is used to hide a
// product whose documentation is not part of the current build.
function getProducts(docsPath) {
  return [
    {
      code: "CIM",
      pluginId: "default",
      name: "Infra Monitoring",
      href: `${docsPath}/getting-started/welcome/`,
      badge: translate({ id: "home.badge.available", message: "Available" }),
      description: translate({
        id: "home.product.cim.description",
        message: "Monitor your entire infrastructure, on-premises or in the cloud.",
      }),
      tasks: [
        {
          icon: "send",
          label: translate({ id: "home.product.cim.task.poller", message: "Install a poller" }),
          href: `${docsPath}/installation/installation-of-a-poller/using-packages/`,
        },
        {
          icon: "server",
          label: translate({ id: "home.product.cim.task.host", message: "Add a host" }),
          href: `${docsPath}/monitoring/basic-objects/hosts-create/`,
        },
        {
          icon: "alert",
          label: translate({ id: "home.product.cim.task.notifications", message: "Set up notifications" }),
          href: `${docsPath}/alerts-notifications/notif-configuration/`,
        },
        {
          icon: "dashboard",
          label: translate({ id: "home.product.cim.task.dashboard", message: "Create a dashboard" }),
          href: `${docsPath}/alerts-notifications/dashboards/`,
        },
      ],
    },
    {
      code: "CXM",
      pluginId: "experience-monitoring",
      name: "Experience Monitoring",
      href: "/experience-monitoring/getting-started/welcome/",
      badge: translate({ id: "home.badge.available", message: "Available" }),
      description: translate({
        id: "home.product.cxm.description",
        message: "Measure real user experience and web performance.",
      }),
      tasks: [
        {
          icon: "discover",
          label: translate({ id: "home.product.cxm.task.start", message: "Get started with Experience Monitoring" }),
          href: "/experience-monitoring/getting-started/welcome/",
        },
        {
          icon: "journey",
          label: translate({ id: "home.product.cxm.task.journey", message: "Create a user journey" }),
          href: "/experience-monitoring/configuration/user-journey/user-journey-intro/",
        },
        {
          icon: "user",
          label: translate({ id: "home.product.cxm.task.rum", message: "Set up Real User Monitoring" }),
          href: "/experience-monitoring/rum/rum-intro/",
        },
        {
          icon: "dashboard",
          label: translate({ id: "home.product.cxm.task.dashboards", message: "Analyze performance dashboards" }),
          href: "/experience-monitoring/performance-analysis/dashboards/",
        },
      ],
    },
    {
      code: "CLM",
      pluginId: "logmanagement",
      name: "Log Management",
      href: "/logmanagement/getting-started/welcome/",
      badge: translate({ id: "home.badge.new", message: "New" }),
      isNew: true,
      description: translate({
        id: "home.product.clm.description",
        message: "Centralize and analyze your logs in real time.",
      }),
      tasks: [
        {
          icon: "send",
          label: translate({ id: "home.product.clm.task.send", message: "Send your first logs" }),
          href: "/logmanagement/collector/collector-generator/",
        },
        {
          icon: "explore",
          label: translate({ id: "home.product.clm.task.search", message: "Search your logs" }),
          href: "/logmanagement/log-explorer/",
        },
        {
          icon: "alert",
          label: translate({ id: "home.product.clm.task.alert", message: "Create a log alert" }),
          href: "/logmanagement/alert-events/",
        },
        {
          icon: "discover",
          label: translate({ id: "home.product.clm.task.concepts", message: "Learn the basics" }),
          href: "/logmanagement/getting-started/concepts/",
        },
      ],
    },
  ];
}

// The homepage has a single search input, in the hero (the navbar one is not
// rendered on this page, see src/theme/SearchBar). It searches every product.
function HeroSearch() {
  const ref = useRef(null);
  const placeholder = translate({ id: "home.hero.search", message: "What are you looking for?" });

  // The search plugin does not expose its placeholder as a prop.
  useEffect(() => {
    const input = ref.current?.querySelector("input");
    if (input) {
      input.placeholder = placeholder;
    }
  }, [placeholder]);

  return (
    <div ref={ref} className={styles.heroSearch}>
      <SearchBar placement="hero" />
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={clsx(styles.container, styles.heroInner)}>
        <div className={styles.heroMain}>
          <p className={styles.heroEyebrow}>
            <Icon name="reference" size={16} />
            {translate({ id: "home.hero.eyebrow", message: "Centreon documentation" })}
          </p>
          <h1 className={styles.heroTitle}>
            {translate({ id: "home.hero.title", message: "Search. Find. Act." })}
          </h1>
          <HeroSearch />
        </div>
        <aside className={styles.figures}>
          <p className={styles.label}>
            {translate({ id: "home.figures.title", message: "Key figures" })}
          </p>
          <dl className={styles.figuresList}>
            {getKeyFigures().map((figure) => (
              <div key={figure.value}>
                <dt>{figure.value}</dt>
                <dd>{figure.label}</dd>
              </div>
            ))}
          </dl>
          <Link to={THE_WATCH_URL} className={styles.figuresLink}>
            <Icon name="community" size={18} />
            <span>{translate({ id: "home.figures.community", message: "Join The Watch community" })}</span>
            <Icon name="arrow" size={18} className={styles.pushRight} />
          </Link>
        </aside>
      </div>
    </section>
  );
}

function ProductChooser({ products }) {
  const [activeCode, setActiveCode] = useState(products[0]?.code);
  const active = products.find((product) => product.code === activeCode) ?? products[0];

  if (!active) {
    return null;
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>
        {translate({ id: "home.products.title", message: "Choose a product" })}
      </h2>
      <div className={styles.chooser}>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.code}>
              <Link
                to={product.href}
                className={clsx(
                  styles.product,
                  product.code === active.code && styles.productActive,
                )}
                onMouseEnter={() => setActiveCode(product.code)}
                onFocus={() => setActiveCode(product.code)}
              >
                <span className={styles.productCode}>{product.code}</span>
                <span className={styles.productBody}>
                  <span className={styles.productHead}>
                    <span className={styles.productName}>{product.name}</span>
                    <span className={clsx(styles.badge, product.isNew && styles.badgeNew)}>
                      {product.badge}
                    </span>
                  </span>
                  <span className={styles.productText}>{product.description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.tasks} aria-live="polite">
          <p className={styles.label}>
            {translate({ id: "home.products.getStarted", message: "Get started" })}
            {" · "}
            {active.name}
          </p>
          <ul>
            {active.tasks.map((task) => (
              <li key={task.href}>
                <Link to={task.href} className={styles.task}>
                  <Icon name={task.icon} size={20} className={styles.taskIcon} />
                  <span>{task.label}</span>
                  <Icon name="arrow" size={18} className={styles.pushRight} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function NewsAndPopular({ version, docsPath }) {
  const popular = [
    {
      label: translate({ id: "home.popular.host", message: "Add a host" }),
      href: `${docsPath}/monitoring/basic-objects/hosts-create/`,
    },
    {
      label: translate({ id: "home.popular.resourceStatus", message: "Resource Status" }),
      href: `${docsPath}/alerts-notifications/resources-status/`,
    },
    {
      label: translate({ id: "home.popular.apiTokens", message: "API tokens" }),
      href: `${docsPath}/api/api-tokens/`,
    },
  ];

  return (
    <section className={clsx(styles.container, styles.newsRow)}>
      <Link to={`${docsPath}/releases/introduction/`} className={styles.news}>
        <span className={styles.newsHead}>
          <span className={styles.newsVersion}>{version}</span>
          <span>{translate({ id: "home.news.title", message: "What's new" })}</span>
          <span className={styles.newsLink}>
            {translate({ id: "home.news.link", message: "Release notes" })}
            <Icon name="arrow" size={16} />
          </span>
        </span>
        <span className={styles.newsText}>
          {translate(
            {
              id: "home.news.text",
              message: "Discover the new features and fixes of Centreon Infra Monitoring {version}.",
            },
            { version },
          )}
        </span>
      </Link>
      <div className={styles.popular}>
        <p className={styles.popularTitle}>
          {translate({ id: "home.popular.title", message: "Popular" })}
        </p>
        <ul>
          {popular.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Previews({ docsPath }) {
  const previews = [
    {
      image: "/img/homepage/previews/resources-status.png",
      caption: translate({ id: "home.previews.status", message: "Resource Status console" }),
      href: `${docsPath}/alerts-notifications/resources-status/`,
    },
    {
      image: "/img/homepage/previews/dashboard.png",
      caption: translate({ id: "home.previews.dashboard", message: "Dashboard example" }),
      href: `${docsPath}/alerts-notifications/dashboards/`,
    },
    {
      image: "/img/homepage/previews/architecture.png",
      caption: translate({ id: "home.previews.architecture", message: "Distributed architecture" }),
      href: `${docsPath}/installation/architectures/`,
    },
  ];

  return (
    <section className={styles.previewsBand}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {translate({ id: "home.previews.title", message: "Product previews" })}
        </h2>
        <div className={styles.previews}>
          {previews.map((preview) => (
            <PreviewCard key={preview.image} {...preview} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewCard({ image, caption, href }) {
  return (
    <Link to={href} className={styles.preview}>
      <img src={useBaseUrl(image)} alt={caption} loading="lazy" />
      <span>{caption}</span>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { versions } = usePluginData("docusaurus-plugin-content-docs");
  const docsPlugins = useAllPluginInstancesData("docusaurus-plugin-content-docs");

  const latestVersion = versions?.[0];
  const docsPath = latestVersion?.path ?? "/docs";

  // Archived builds only contain one on-premises version: go straight to it.
  if (siteConfig.customFields.version) {
    const defaultPage = latestVersion?.mainDocId ?? "getting-started/installation-first-steps";
    return <Redirect to={`${docsPath}/${defaultPage}`} />;
  }

  const products = getProducts(docsPath).filter((product) => docsPlugins[product.pluginId]);

  return (
    <Layout
      title={translate({ id: "home.meta.title", message: "Documentation" })}
      description={translate({
        id: "home.meta.description",
        message:
          "Documentation for the Centreon observability platform: install, configure and use Infra Monitoring, Experience Monitoring and Log Management.",
      })}
    >
      <main className={clsx(styles.home, "home-page")}>
        <Hero />
        <ProductChooser products={products} />
        {latestVersion && <NewsAndPopular version={latestVersion.name} docsPath={docsPath} />}
        <Previews docsPath={docsPath} />
      </main>
    </Layout>
  );
}
