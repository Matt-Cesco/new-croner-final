import { Montserrat } from '@next/font/google';
import '../styles/globals.css';
import Script from 'next/script';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
});


export default function MyApp({ Component, pageProps }) {
   const metaPixel = `
         window.addEventListener('mousemove',()=>{setTimeout(()=>{!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','{your-pixel-id-goes-here}');fbq('track','PageView');},250);},{once:true});
         `;
  return (
    <>
      <Script id="google-tag-manager" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-45E6DTPQCV`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-45E6DTPQCV");`}
      </Script>
      <Script id="marketo-munchkin" strategy="lazyOnload">
        {`!function(){var e=!1;function t(){!1===e&&(e=!0,Munchkin.init("CHANGE-ME"))}var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="//munchkin.marketo.net/munchkin.js",a.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&t()},a.onload=t,document.getElementsByTagName("head")[0].appendChild(a)}();`}
      </Script>
      <Script id="ruler-script" strategy="lazyOnload">
        {`window.addEventListener("mousemove",()=>{setTimeout(()=>{var t=t||{};t.uid="< YOUR SITE ID >",t.action="track",function(){var t=document.createElement("script");t.type="text/javascript",t.src=("https:"==document.location.protocol?"https://":"http://")+"www.ruleranalytics.com/lib/1.0/ra-bootstrap.js.php";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()},250)},{once:!0});
         `}
      </Script>
      <Script id="metaPixel-script" strategy="lazyOnload">
        {metaPixel}
      </Script>
      <Script id="hotjar-script" strategy="lazyOnload">
        {`window.addEventListener("mousemove",()=>{setTimeout(()=>{!function(t,e,h,s,j,n){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:3275002,hjsv:6},j=e.getElementsByTagName("head")[0],(n=e.createElement("script")).async=1,n.src=h+t._hjSettings.hjid+s+t._hjSettings.hjsv,j.appendChild(n)}(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=")},200)},{once:!0});
         `}
      </Script>
      <Script id="drift-script" strategy="lazyOnload">
        {`"use strict";window.addEventListener("scroll",()=>{setTimeout(()=>{!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),t.push(r),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),r=document.createElement("script");r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+e+"/"+t+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("h4f9nubwfutr")},1e3)},{once:!0});
        `}
      </Script>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}