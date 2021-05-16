const LocationSelectComponent = ({ options, onInputChange }: any) => {
  return (
    <div>
      <input type='text' onChange={onInputChange} />
      {options.map((place: any) => (
        <p key={place.id}>{place.name}</p>
      ))}
    </div>
  );
};

export default LocationSelectComponent;
