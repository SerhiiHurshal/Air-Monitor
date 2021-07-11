import { ChangeEvent, MouseEvent, RefObject } from 'react';
import { Place } from '@models/client';

import styles from './location-select.module.scss';
import classNames from 'classnames';

interface LocationSelectComponentProps {
  options: Place[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  locationInputValue: string;
  isSearchLoading: boolean;
  isOpen: boolean;
  setIsOpen: (flag: boolean) => void;
  dropdown: RefObject<HTMLDivElement>;
}

const LocationSelectComponent = ({
  options,
  onInputChange,
  onOptionSelect,
  locationInputValue,
  isOpen,
  setIsOpen,
  dropdown,
}: LocationSelectComponentProps) => (
  <div
    className={classNames(styles.selectContainer, {
      [styles.inputFocused]: isOpen,
    })}
    ref={dropdown}
  >
    <input
      type='text'
      onChange={onInputChange}
      onFocus={() => setIsOpen(true)}
      className={styles.input}
      placeholder='Find...'
      value={locationInputValue}
    />
    <div
      className={classNames(styles.optionsContainer, { [styles.open]: isOpen })}
    >
      {options?.length ? (
        options.map((place) => (
          <button
            key={place.id}
            className={styles.option}
            onClick={onOptionSelect}
            data-info={JSON.stringify(place)}
          >
            {place.name}
          </button>
        ))
      ) : (
        <button className={styles.option}>No places found</button>
      )}
    </div>
  </div>
);

export { LocationSelectComponent };
