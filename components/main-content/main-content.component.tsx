import { Fragment, useEffect } from 'react';
import { State } from '@redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo } from '@redux/general/actions';
import { WeatherCard } from './weather-card/weather-card';
import { AirPollutionCard } from './air-pollution-card/air-pollution-card';

import styles from './main-content.module.scss';

const MainContent = () => {
  const { selectedPlace, airPollutionInfo } = useSelector(
    (state: State) => state.general,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  return (
    <Fragment>
      <section className={styles.infoBlock}>
        <p className={styles.locationInfo} title={selectedPlace?.name}>
          <span className={styles.bold}>Current place:</span>
          {selectedPlace?.name}
        </p>
        <p className={styles.locationInfo} title={airPollutionInfo?.city?.name}>
          <span className={styles.bold}>Nearest station:</span>
          {airPollutionInfo?.city?.name}
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
