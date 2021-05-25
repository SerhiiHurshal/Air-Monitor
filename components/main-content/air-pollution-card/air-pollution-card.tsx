import { State } from '@redux/state';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AirPollutionCardComponent } from './air-pollution-card.component';

const AirPollutionCard = () => {
  const { aqi, forecast } = useSelector(
    (state: State) => state.general.airPollutionInfo,
  );

  const [status, setStatus] = useState('Loading...');

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBoxShadowGetIcon(aqi);
  }, [aqi]);

  const setBoxShadowGetIcon = (pollutionLevel: number) => {
    let cardStyles = cardRef.current?.parentElement?.style;

    if (cardStyles) {
      switch (true) {
        case pollutionLevel < 51:
          cardStyles.boxShadow = `0 4px 8px 0 rgba(96, 118, 49, 0.2), 0 6px 20px 0 rgba(96, 118, 49, 0.19)`;
          setStatus('Good');
          break;
        case pollutionLevel < 101:
          cardStyles.boxShadow = `0 4px 8px 0 rgba(140, 108, 29, 0.2), 0 6px 20px 0 rgba(140, 108, 29, 0.19)`;
          setStatus('Moderate');
          break;
        case pollutionLevel < 151:
          cardStyles.boxShadow = `0 4px 8px 0 rgba(151, 74, 32, 0.2), 0 6px 20px 0 rgba(151, 74, 32, 0.19)`;
          setStatus('Unhealthy for Sensitive Groups');
          break;
        case pollutionLevel < 201:
          cardStyles.boxShadow = `0 4px 8px 0 rgba(148, 36, 49, 0.2), 0 6px 20px 0 rgba(148, 36, 49, 0.19)`;
          setStatus('Unhealthy');
          break;
        case pollutionLevel < 301:
          cardStyles.boxShadow = `0 4px 8px 0 rgba(93, 69, 107, 0.2), 0 6px 20px 0 rgba(93, 69, 107, 0.19)`;
          setStatus('Very Unhealthy');
          break;
        default:
          cardStyles.boxShadow = `0 4px 8px 0 rgba(87, 51, 68, 0.2), 0 6px 20px 0 rgba(87, 51, 68, 0.19)`;
          setStatus('Hazardous');
          break;
      }
    }
  };

  const props = {
    status,
    aqi,
    avg: forecast?.daily?.pm25[0]?.avg,
    max: forecast?.daily?.pm25[0]?.max,
    min: forecast?.daily?.pm25[0]?.min,
    cardRef,
  };

  return <AirPollutionCardComponent {...props} />;
};

export { AirPollutionCard };
