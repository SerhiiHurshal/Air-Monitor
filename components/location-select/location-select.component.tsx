import { ChangeEvent } from 'react';
import { place } from 'types';

interface LocationSelectComponentProps {
  options: place[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LocationSelectComponent = ({
  options,
  onInputChange,
}: LocationSelectComponentProps) => {
  return (
    <div>
      <input type='text' onChange={onInputChange} />
      {options.map((place) => (
        <p key={place.id}>{place.name}</p>
      ))}
    </div>
  );
};

export default LocationSelectComponent;
