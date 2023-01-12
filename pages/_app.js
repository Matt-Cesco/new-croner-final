import { Albert_Sans } from '@next/font/google';
import '../styles/globals.css';
import Script from 'next/script';

// If loading a variable font, you don't need to specify the font weight
const AlbertSans = Albert_Sans({
  subsets: ["latin"],
});


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={AlbertSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}