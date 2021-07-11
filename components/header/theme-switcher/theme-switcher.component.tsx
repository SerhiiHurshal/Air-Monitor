import { Theme } from '@models/client';
import classNames from 'classnames';
import styles from './theme-switcher.module.scss';

import moonIcon from '@images/theme-icons/moon.png';
import sunIcon from '@images/theme-icons/sun.png';

interface Props {
  theme: string;
  onThemeSwitch: () => void;
}

const ThemeSwitcherComponent = ({ theme, onThemeSwitch }: Props) => (
  <label className={styles.switch}>
    <input
      type='checkbox'
      className={styles.invisibleInput}
      checked={theme !== Theme.light}
      onChange={onThemeSwitch}
    />
    <span className={styles.slider}>
      <img
        src={theme === Theme.light ? sunIcon : moonIcon}
        alt='theme icon'
        width={23}
        height={23}
        className={classNames(styles.icon, {
          [styles.iconChecked]: theme !== Theme.light,
        })}
      />
    </span>
  </label>
);

export { ThemeSwitcherComponent };
