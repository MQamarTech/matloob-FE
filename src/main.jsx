import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CacheBuster from 'react-cache-buster';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import { version } from '../package.json';
import { ENABLE } from '@constants';
import { store } from './store/store';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

const isCacheBusterEnable = import.meta.env.VITE_CACHE_BUSTER === ENABLE ? true : false;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CacheBuster
          currentVersion={version}
          isEnabled={isCacheBusterEnable}
          isVerboseMode={false}
          metaFileDirectory={'.'}
        >
          <App />
        </CacheBuster>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
