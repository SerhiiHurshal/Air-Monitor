const getPlaces = (userInput: string) => ({
  type: 'GET_PLACES',
  payload: userInput,
});

export { getPlaces };
