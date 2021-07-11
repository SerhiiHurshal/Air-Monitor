import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces, setSelectedPlace } from 'redux/general/actions';
import { LocationSelectComponent } from './location-select.component';
import { State } from '@redux/state';

const LocationSelect = () => {
  const dispatch = useDispatch();
  const { avaliablePlaces } = useSelector((state: State) => state.general);
  const { isSearchLoading } = useSelector((state: State) => state.ui);
  const [locationInputValue, setLocationInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdown?.current && !dropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationInputValue(event.target.value);

    if (event.target.value) {
      dispatch(getPlaces(event.target.value));
    }
  };

  const onOptionSelect = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.dataset.info) {
      const place = JSON.parse(event.currentTarget.dataset.info);

      dispatch(setSelectedPlace(place));
    }

    if (document.activeElement) {
      const activeElement = document.activeElement as HTMLElement;
      activeElement.blur();
    }
    setIsOpen(false);
    setLocationInputValue('');
    dispatch(getPlaces.success([]));
  };

  return (
    <LocationSelectComponent
      options={avaliablePlaces}
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect}
      locationInputValue={locationInputValue}
      isSearchLoading={isSearchLoading}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      dropdown={dropdown}
    />
  );
};

export { LocationSelect };
