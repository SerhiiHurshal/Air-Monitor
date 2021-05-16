import { useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces } from 'redux/general/actions';
import LocationSelectComponent from './location-select.component';
import { State } from '../../redux/state';

const LocationSelect = () => {
  const dispatch = useDispatch();
  const { avaliablePlaces } = useSelector((state: State) => state.general);

  useEffect(() => {
    dispatch(getPlaces('Los Angeles'));
  }, []);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getPlaces(e.target.value));
  };

  return (
    <LocationSelectComponent
      options={avaliablePlaces}
      onInputChange={onInputChange}
    />
  );
};

export default LocationSelect;
