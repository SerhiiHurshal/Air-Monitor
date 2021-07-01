import { ChangeEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces, setSelectedPlace } from 'redux/general/actions';
import { LocationSelectComponent } from './location-select.component';
import { State } from '../../../redux/state';

const LocationSelect = () => {
  const dispatch = useDispatch();
  const { avaliablePlaces } = useSelector((state: State) => state.general);
  const [locationInputValue, setLocationInputValue] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationInputValue(e.target.value);
    dispatch(getPlaces(e.target.value));
  };

  const onOptionSelect = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.info) {
      const place = JSON.parse(e.currentTarget.dataset.info);

      dispatch(setSelectedPlace(place));
    }

    if (document.activeElement) {
      const activeElement = document.activeElement as HTMLElement;
      activeElement.blur();
    }
    setLocationInputValue('');
    dispatch(getPlaces.success([]));
  };

  return (
    <LocationSelectComponent
      options={avaliablePlaces}
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect}
      locationInputValue={locationInputValue}
    />
  );
};

export { LocationSelect };
