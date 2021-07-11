import { ChangeEvent, MouseEvent } from 'react';
import { Place } from '@models/client';

import styles from './location-select.module.scss';

interface LocationSelectComponentProps {
  options: Place[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  locationInputValue: string;
  isSearchLoading: boolean;
}

const LocationSelectComponent = ({
  options,
  onInputChange,
  onOptionSelect,
  locationInputValue,
}: LocationSelectComponentProps) => (
  <div className={styles.selectContainer}>
    <input
      type='text'
      onChange={onInputChange}
      className={styles.input}
      placeholder='Find...'
      value={locationInputValue}
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
