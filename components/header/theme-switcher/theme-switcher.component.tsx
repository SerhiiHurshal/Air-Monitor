import { Theme } from '@models/client';
import classNames from 'classnames';
import styles from './theme-switcher.module.scss';
import Image from 'next/image';

import moonIcon from '@images/theme-icons/moon.png';
import sunIcon from '@images/theme-icons/sun.png';

interface Props {
  theme: string;
  onThemeSwitch: () => void;
}

const ThemeSwitcherComponent = ({ theme, onThemeSwitch }: Props) => (
  <div className={styles.container}>
    <button
      aria-label='button to switch theme'
      className={classNames(
        styles.button,
        {
          [styles.buttonLight]: theme === Theme.light,
        },
        {
          [styles.buttonDark]: theme !== Theme.light,
        },
      )}
      onClick={onThemeSwitch}
    >
      <Image
        src={theme === Theme.light ? sunIcon : moonIcon}
        alt='theme icon'
        width={30}
        height={30}
      />
    </button>
    <div className={styles.line} />
  </div>
);

export { ThemeSwitcherComponent };
