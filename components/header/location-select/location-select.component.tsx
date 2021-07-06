import { ChangeEvent, Fragment, MouseEvent } from 'react';
import { Place } from '@models/client';

import styles from './location-select.module.scss';
import classNames from 'classnames';

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
  isSearchLoading,
}: LocationSelectComponentProps) => (
  <div className={styles.selectContainer}>
    <input
      type='text'
      onChange={onInputChange}
      className={styles.input}
      placeholder='Find...'
      value={locationInputValue}
    />
    <div
      className={classNames(styles.optionsContainer, {
        [`${styles.optionsContainerWithoutScroll}`]: isSearchLoading,
      })}
    >
      {isSearchLoading ? (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  </div>
);

export { LocationSelectComponent };
