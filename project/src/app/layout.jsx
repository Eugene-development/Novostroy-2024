// import dynamic from "next/dynamic";

// const MobileCatalog = dynamic(() => import("@/UI/modals/MobileCatalog"), {
//   ssr: false, // отключить серверную отрисовку
// });
import Script from "next/script";
const GA_TRACKING_ID = "G-LDQHHN5N6W";
import "../css/globals.css";
import {
  Banner,
  Menu,
  Footer,
  DesignerForm,
  SalonForm,
  MeasuringForm,
  PriceForm,
  OrderInfoModal,
  MobileMenu,
} from "@/UI";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <script src="//code.jivosite.com/widget/H00b4ne6ss" async></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
						(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                  ym(87611228, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                  });
                        `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/87611228"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className="font-display">
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
          }}
        />
        <MobileMenu />

        <DesignerForm />
        <SalonForm />
        <MeasuringForm />
        <PriceForm />

        <Banner />
        <Menu />
        <OrderInfoModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
