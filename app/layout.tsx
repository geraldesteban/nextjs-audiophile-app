import type { ReactNode } from "react";
import { Manrope } from "next/font/google";

import "@/app/_styles/globals.css";

import Header from "@/app/_components/Navigation/Header";
import Footer from "@/app/footer";
import ScrollToTop from "./_components/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome / Audiophile",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen`}>
        <ScrollToTop />
        {/* Navigation Bar */}
        <Header />
        {/* Pages Contents */}
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;
