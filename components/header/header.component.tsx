import LogoSvg from '@images/logo.svg';

import styles from './header.module.scss';

import LocationSelect from '../location-select/location-select';

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoSvg className={styles.logo} />
      <LocationSelect />
    </header>
  );
};

export default Header;
