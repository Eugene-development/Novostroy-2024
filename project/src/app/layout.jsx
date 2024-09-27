import { Inter, Roboto, Abel } from "next/font/google";
const abel = Abel({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

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
  MobileCatalog,
} from "@/UI";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />

        {process.env.NODE_ENV === "production" && (
          <>
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
                    <noscript><div><img src="https://mc.yandex.ru/watch/87611228" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                    `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-display">
        <MobileMenu />
        <MobileCatalog />

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
