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
      <Script id="marketo-munchkin" strategy="lazyOnload">
        {`(function() {
            var didInit = false;
            function initMunchkin() {
               if(didInit === false) {
                  didInit = true;
                  Munchkin.init('CHANGE-ME');
               }
            }
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//munchkin.marketo.net/munchkin.js';
            s.onreadystatechange = function() {
               if (this.readyState == 'complete' || this.readyState == 'loaded') {
                  initMunchkin();
               }
            };
            s.onload = initMunchkin;
            document.getElementsByTagName('head')[0].appendChild(s);
            })();`}
      </Script>
      <Script id="ruler-script" strategy="lazyOnload">
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
      <Script id="hotjar-script" strategy="lazyOnload">
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3275002,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
         `}
      </Script>
      <Script id="drift-script" strategy="lazyOnload">
        {`"use strict";
         window.addEventListener('scroll', () => {
            setTimeout(() => {
        !function() {
          var t = window.driftt = window.drift = window.driftt || [];
          if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            t.factory = function(e) {
              return function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e), t.push(n), t;
              };
            }, t.methods.forEach(function(e) {
              t[e] = t.factory(e);
            }), t.load = function(t) {
              var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
              o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(o, i);
            };
          }
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('h4f9nubwfutr');
            }, 1000);
         }, {
            once: true
         });
        `}
      </Script>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}