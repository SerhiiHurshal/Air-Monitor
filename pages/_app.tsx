import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux/store';

import '../styles/core.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = createStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
