import React from 'react';
import styles from './HomePage.module.css';

const IMG = '/img/homepage/';

interface CardLink {
  label: string;
  href: string;
}

interface Card {
  title: string;
  href: string;
  links: CardLink[];
  isBeta?: boolean;
}

interface HomePageProps {
  heading: string;
  subheading: string;
  cards: Card[];
  banner: { version: string; label: string; link: string };
  community: { badge: string; joinLabel: string };
  opensource: { badge: string; description: string; contributeLabel: string };
}

const SOCIAL_LINKS = [
  { href: 'https://github.com/centreon/centreon/', image: IMG + 'social-network/github.png', name: 'GitHub' },
  { href: 'https://twitter.com/Centreon', image: IMG + 'social-network/twitter.png', name: 'Twitter / X' },
  { href: 'https://www.linkedin.com/company/centreonsoftware', image: IMG + 'social-network/linkedin.png', name: 'LinkedIn' },
  { href: 'https://www.youtube.com/c/Centreon-Monitoring', image: IMG + 'social-network/youtube.png', name: 'YouTube' },
];

function Button({ href, label, dark, target }: { href: string; label: string; dark?: boolean; target?: string }) {
  return (
    <a
      className={`${styles.button} ${dark ? styles.buttonDark : ''}`}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {label}
      <img src={IMG + 'arrow.svg'} alt="" />
    </a>
  );
}

function HeadingCard({ card }: { card: Card }) {
  return (
    <div className={styles.headingCard}>
      {card.isBeta && <div className={styles.headingCardBetaBadge}>BETA</div>}
      <a href={card.href} className={styles.headingCardHeader}>{card.title}</a>
      <div className={styles.headingCardBody}>
        <ul>
          {card.links.map((link, i) => (
            <li key={i}>
              <a href={link.href}>
                <span>{link.label}</span>
                <img src={IMG + 'external_link.svg'} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function HomePage({ heading, subheading, cards, banner, community, opensource }: HomePageProps) {
  return (
    <div className={styles.page}>
      {/* Heading block */}
      <div className={styles.headingContainer}>
        <div className={styles.mainContainer}>
          <h1>{heading}</h1>
          <p>{subheading}</p>
          <div className={styles.headingCards}>
            {cards.map((card, i) => <HeadingCard key={i} card={card} />)}
          </div>
        </div>
      </div>

      {/* Banner block */}
      <div className={styles.bannerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.bannerWrapper}>
            <span className={styles.badge}>CENTREON Infra Monitoring {banner.version}</span>
            <Button href={banner.link} target="_blank" label={banner.label} dark />
          </div>
        </div>
      </div>

      {/* Social block */}
      <div className={styles.socialContainer}>
        <div className={styles.mainContainer}>
          {/* Community */}
          <div className={styles.socialBlock}>
            <span className={styles.badge}>{community.badge}</span>
            <div className={styles.watchWrapper}>
              <img src={IMG + 'social-network/thewatch.png'} alt="The Watch" />
              <Button href="https://thewatch.centreon.com/" target="_blank" label={community.joinLabel} />
            </div>
            <div className={styles.socialIcons}>
              {SOCIAL_LINKS.map((s, i) => (
                <a href={s.href} key={i} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  <img src={s.image} alt={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Open source */}
          <div className={styles.socialBlock}>
            <span className={styles.badge}>{opensource.badge}</span>
            <p>{opensource.description}</p>
            <Button
              href="https://github.com/centreon/.github/blob/master/CONTRIBUTING.md"
              target="_blank"
              label={opensource.contributeLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
