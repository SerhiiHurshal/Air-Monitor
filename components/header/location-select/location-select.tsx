import { ChangeEvent, MouseEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces, setPlaces, setSelectedPlace } from 'redux/general/actions';
import LocationSelectComponent from './location-select.component';
import { State } from '../../../redux/state';

const LocationSelect = () => {
  const dispatch = useDispatch();
  const { avaliablePlaces } = useSelector((state: State) => state.general);
  const input = useRef<HTMLInputElement>(null);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    if (input.current) {
      input.current.value = '';
      dispatch(setPlaces([]));
    }
  };

  return (
    <LocationSelectComponent
      options={avaliablePlaces}
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect}
      input={input}
    />
  );
};

export default LocationSelect;
