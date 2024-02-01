import { getSSRDeviceType, SSRDeviceContext } from "hooks/isMobile";
import type { AppContext, AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
import "../styles/globals.scss";

const league = League_Spartan({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-league",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

interface MyAppProps extends AppProps {
  isSsrMobile: boolean;
  isSsrTablet: boolean;
}

function App({ Component, pageProps, isSsrMobile, isSsrTablet }: MyAppProps) {
  return (
    <>
      <SSRDeviceContext.Provider
        value={{
          isSsrMobile,
          isSsrTablet,
        }}
      >
        <style jsx global>
          {`
            :root {
              --font-league: ${league.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </SSRDeviceContext.Provider>
    </>
  );
}

interface MyAppProps extends AppProps {
  isSsrMobile: boolean;
  isSsrTablet: boolean;
}

App.getInitialProps = async (appContext: AppContext): Promise<MyAppProps> => {
  const deviceType = getSSRDeviceType(appContext);

  // Extract your initial pageProps
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    Component: appContext.Component,
    router: appContext.router,
    ...deviceType,
  };
};

export default App;
