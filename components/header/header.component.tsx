import { LocationSelect } from './location-select/location-select';

import LogoSvg from '@images/logo.svg';

import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <LogoSvg className={styles.logo} />
    <h1 className={styles.title}>AirMonitor</h1>
    <LocationSelect />
  </header>
);

export { Header };
