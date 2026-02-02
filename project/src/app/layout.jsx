// import dynamic from "next/dynamic";

// const MobileCatalog = dynamic(() => import("@/UI/modals/MobileCatalog"), {
//   ssr: false, // отключить серверную отрисовку
// });
//
import Script from "next/script";
import { Suspense } from "react";
import { Metrika } from "./analytics/yandex";

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
      </head>
      <body className="font-display ">
        {process.env.NODE_ENV === "production" && (
          <>
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

            <Suspense>
              <Metrika />
            </Suspense>
          </>
        )}
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
