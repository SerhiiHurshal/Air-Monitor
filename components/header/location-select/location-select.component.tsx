import { ChangeEvent, MouseEvent, RefObject } from 'react';
import { place } from 'models/types';

import styles from './location-select.module.scss';

interface LocationSelectComponentProps {
  options: place[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  input: RefObject<HTMLInputElement>;
}

const LocationSelectComponent = ({
  options,
  onInputChange,
  onOptionSelect,
  input,
}: LocationSelectComponentProps) => (
  <div className={styles.selectContainer}>
    <input
      type='text'
      onChange={onInputChange}
      className={styles.input}
      placeholder='Find...'
      ref={input}
    />
    <div className={styles.optionsContainer}>
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
