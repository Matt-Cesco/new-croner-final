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
        id="google-tag-manager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-45E6DTPQCV`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-45E6DTPQCV');
      `}
      </Script>
      <Script id="ruler-script">
        {`
         var __raconfig = __raconfig || {};
         __raconfig.uid = '< YOUR SITE ID >';
         __raconfig.action = 'track';

         (function () {

         var ra = document.createElement('script');
         ra.type = 'text/javascript';
         ra.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.ruleranalytics.com/lib/1.0/ra-bootstrap.js.php';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(ra, s);

         }());
         `}
      </Script>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}