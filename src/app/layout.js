  import localFont from "next/font/local";
  import './globals.scss';
  import ThemeProvider from "@/components/ThemeProvider";
import ContactPopup from "@/components/ContactPopup/ContactPopup";

  const futura = localFont({
    src: [
      { path: "../assets/fonts/FuturaCyrillicBold.ttf", weight: "700", style: "normal" },
      { path: "../assets/fonts/FuturaCyrillicBook.ttf", weight: "400", style: "normal" },
      { path: "../assets/fonts/FuturaCyrillicDemi.ttf", weight: "600", style: "normal" },
      { path: "../assets/fonts/FuturaCyrillicExtraBold.ttf", weight: "800", style: "normal" },
      { path: "../assets/fonts/FuturaCyrillicHeavy.ttf", weight: "900", style: "normal" },
      { path: "../assets/fonts/FuturaCyrillicLight.ttf", weight: "300", style: "normal" },
      { path: "../assets/fonts/FuturaCyrillicMedium.ttf", weight: "500", style: "normal" }
    ],
    variable: "--font-futura",
    display: "swap"
  });

  const fustat = localFont({
  src: [
    { path: "../assets/fonts/Fustat/Fustat-Bold.ttf", weight: "800" },
    { path: "../assets/fonts/Fustat/Fustat-ExtraBold.ttf", weight: "900" },
    { path: "../assets/fonts/Fustat/Fustat-ExtraLight.ttf", weight: "300" },
    { path: "../assets/fonts/Fustat/Fustat-Light.ttf", weight: "400" },
    { path: "../assets/fonts/Fustat/Fustat-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/Fustat/Fustat-Regular.ttf", weight: "600" },
    { path: "../assets/fonts/Fustat/Fustat-SemiBold.ttf", weight: "700" },
  ],
  variable: "--font-fustat",
  display: "swap"
});

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={`${futura.variable} ${fustat.variable}`}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
          <ContactPopup />
        </body>
      </html>
    );
  }
