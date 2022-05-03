import { Provider } from "react-redux";
import store from "redux/store";
import "styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className="flex w-full justify-center mx-auto py-6 rounded-md my-8 md:w-full lg:w-1/2 max-w-lg shadow-lg ">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="worlds clocks online search by timezome , country area"
          />
          <meta name="keywords" content="timezone world clocks" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="EN" />
          <title>world clocks</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default App;
