function assertIsError(error: any): asserts error is Error {
  if (!(error instanceof Error)) throw new Error(`Unknown error: ${error}`);
}

export { assertIsError };
