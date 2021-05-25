import classNames from 'classnames';
import { themeVariants } from './theme-switcher';
import styles from './theme-switcher.module.scss';

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
          [styles.buttonLight]: theme !== themeVariants.dark.toString(),
        },
        {
          [styles.buttonDark]: theme === themeVariants.dark.toString(),
        },
      )}
      onClick={onThemeSwitch}
    />
    <div className={styles.line} />
  </div>
);

export { ThemeSwitcherComponent };
