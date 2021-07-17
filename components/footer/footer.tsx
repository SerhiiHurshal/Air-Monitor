import MailIcon from '@images/social_media_icons/mail.svg';
import GithubIcon from '@images/social_media_icons/github.svg';
import LinkedinIcon from '@images/social_media_icons/linkedin.svg';

import styles from './footer.module.scss';
import classNames from 'classnames';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>Copyright © 2021 </p>
    <div className={styles.socialMediaIcons}>
      <a
        href='mailto:seergiygurshall@gmail.com'
        title='send email'
        className={styles.linkicon}
      >
        <MailIcon alt='email icon' className={styles.icon} />
      </a>
      <a
        href='https://github.com/SergiyGurshal/air-pollution-web-app'
        title='link to Github'
        className={styles.linkicon}
      >
        <GithubIcon alt='github icon' className={styles.icon} />
      </a>
      <a
        href='https://www.linkedin.com/in/sergiy-gurshal/'
        title='link to Linkedin'
        className={styles.linkicon}
      >
        <LinkedinIcon alt='linkedin icon' className={styles.icon} />
      </a>
    </div>
    <div className={styles.licenseTitle}>
      Icons made by
      <a
        href='https://www.flaticon.com/authors/pixel-perfect'
        title='Pixel perfect'
      >
        Pixel perfect
      </a>
      from
      <a href='https://www.flaticon.com/' title='Flaticon'>
        FlatIcon
      </a>
    </div>
    <div className={classNames(styles.licenseTitle, styles.licenseTitleLeft)}>
      Powered by
      <a href='https://www.weatherapi.com/' title='Free Weather API'>
        WeatherAPI.com
      </a>
    </div>
  </footer>
);

export { Footer };
