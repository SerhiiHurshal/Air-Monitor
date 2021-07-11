import { Fragment, useEffect } from 'react';
import { State } from '@redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo } from '@redux/general/actions';
import { WeatherCard } from './weather-card/weather-card';
import { AirPollutionCard } from './air-pollution-card/air-pollution-card';

import styles from './main-content.module.scss';
import classNames from 'classnames';

const MainContent = () => {
  const { selectedPlace, weatherInfo } = useSelector(
    (state: State) => state.general,
  );

  const { isCardLoading } = useSelector((state: State) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  return (
    <Fragment>
      <section className={styles.infoBlock}>
        <p
          className={classNames(styles.locationInfo, {
            [`${styles.locationInfoVisible}`]: !isCardLoading,
          })}
          title={selectedPlace?.name}
        >
          <span className={styles.bold}>Current place:</span>
          {selectedPlace?.name}
        </p>
        <p
          className={classNames(styles.locationInfo, {
            [`${styles.locationInfoVisible}`]: !isCardLoading,
          })}
          title={`${weatherInfo.location.name}, ${weatherInfo.location.region}`}
        >
          <span className={styles.bold}>Nearest station:</span>
          {`${weatherInfo.location.name}, ${weatherInfo.location.region}`}
        </p>
      </section>
      <section className={styles.cardsContainer}>
        <WeatherCard />
        <AirPollutionCard />
      </section>
    </Fragment>
  );
};

export { MainContent };
