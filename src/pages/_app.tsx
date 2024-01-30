import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
import '../styles/globals.scss';

const league = League_Spartan({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-league',
  display: 'swap',
  adjustFontFallback: true,
  preload: true
});

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-league: ${league.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
