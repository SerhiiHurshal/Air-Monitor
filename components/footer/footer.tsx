import MailIcon from '@images/social_media_icons/mail.svg';
import GithubIcon from '@images/social_media_icons/github.svg';
import LinkedinIcon from '@images/social_media_icons/linkedin.svg';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <h6 className={styles.copyright}>Copyright © 2021 </h6>
    <div className={styles.socialMediaIcons}>
      <a href='mailto:seergiygurshall@gmail.com'>
        <MailIcon alt='email icon' className={styles.icon} />
      </a>
      <a href='https://github.com/SergiyGurshal/air-pollution-web-app'>
        <GithubIcon alt='github icon' className={styles.icon} />
      </a>
      <a href='https://www.linkedin.com/in/sergiy-gurshal/'>
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
  </footer>
);

export { Footer };
