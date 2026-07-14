import './globals.scss';
import ThemeProvider from "@/components/ThemeProvider";
import ContactPopup from "@/components/ContactPopup/ContactPopup";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <ContactPopup />
      </body>
    </html>
  );
}
