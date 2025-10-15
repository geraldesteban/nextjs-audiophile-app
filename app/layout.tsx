import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
});
import Header from "@/app/_components/Navigation/Header";
import "@/app/_styles/globals.css";
import Footer from "@/app/footer";

export const metadata = {
  title: {
    template: "%s / Audiophile",
    default: "Welcome / Audiophile",
  },
};

type RootLayoutProps = { children: ReactNode };

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen`}>
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
