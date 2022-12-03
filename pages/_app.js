import { Poppins } from '@next/font/google';
import '../styles/globals.css';
import Script from 'next/script';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
})


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-45E6DTPQCV`}
      />

      <Script strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-45E6DTPQCV');
      `}
      </Script>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}