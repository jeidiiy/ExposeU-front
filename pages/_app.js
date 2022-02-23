import Layout from '../src/components/Layout';
import '../styles/globals.css';
import wrapper from '../src/modules/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import persistReducer from "../src/modules";
import { createStore } from "redux";

function MyApp({ Component, pageProps }) {
  const store = createStore(persistReducer);
  const persistor = persistStore(store);
  return (
    <PersistGate persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
