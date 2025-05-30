import { JetBrains_Mono as JetBrainsMonoFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetBrainsMono = JetBrainsMonoFont({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dileepa Malshan",
  description: "Dileepa Malshan's personal Portfolio",
  icons: {
    icon: '/public/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
      <Header/>
      <StairTransition/>
      <PageTransition>
        {children}
      </PageTransition>
      </body>
    </html>
  );
}