import { Card } from '@components/card/card';
import { Fragment, useEffect } from 'react';
import { State } from '@redux/state';

import styles from './main-content.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAirPollutionByIp } from '@redux/general/actions';

const MainContent = () => {
  const { selectedPlace, airPollutionInfo } = useSelector(
    (state: State) => state.general,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirPollutionByIp());
  }, []);

  return (
    <Fragment>
      <section className={styles.infoBlock}>
        <p>{`Current place ${selectedPlace?.name}`}</p>
        <p>{`Nearest station ${airPollutionInfo?.data.city.name}`}</p>
      </section>
      <section className={styles.cardsContainer}>
        <Card title='Weather'>
          <img src={'image'} className='content__icon' />
          <p className='content__title'>{'title'}</p>
          <div className='content__aditional-info'>
            <p className='aditional-info__text'>{`AQI value based on US EPA standard: ${'AQIUS'}`}</p>
            <p className='aditional-info__text'>
              {`AQI value based on China MEP standard: ${'AQICN'}`}{' '}
            </p>
          </div>
          <div className='card__footer' />
        </Card>
        <Card title='Air Pollution'>
          <img src={'image'} className='content__icon' />
          <p className='content__title'>{'title'}</p>
          <div className='content__aditional-info'>
            <p className='aditional-info__text'>{`AQI value based on US EPA standard: ${'AQIUS'}`}</p>
            <p className='aditional-info__text'>
              {`AQI value based on China MEP standard: ${'AQICN'}`}{' '}
            </p>
          </div>
          <div className='card__footer' />
        </Card>
      </section>
    </Fragment>
  );
};

export default MainContent;
