import { Inter } from "@next/font/google";
import "../styles/globals.css";
import Script from "next/script";
import { Albert_Sans } from '@next/font/google';
import '../styles/globals.css';
import Script from 'next/script';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const AlbertSans = Albert_Sans({
  subsets: ["latin"],
});


export default function MyApp({ Component, pageProps }) {
   
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
