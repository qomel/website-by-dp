import localFont from "next/font/local";
import { Dela_Gothic_One, Roboto } from "next/font/google";
import "./globals.css";
import HoverStyles from "@/components/HoverStyles";
import SocialLinks from "@/components/SocialLinks";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const didot = localFont({
  src: [
    {
      path: "../assets/didot-2/Didot.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/didot-2/Didot Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/didot-2/Didot Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/didot-2/Didot Title.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-didot",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela-gothic",
  display: "swap",
});

export const metadata = {
  title: "Dominik Pazurek",
  description: "Web designer & developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${didot.variable} ${delaGothicOne.variable} ${roboto.variable} h-full`}
    >
      <body className="min-h-full">
        <HoverStyles />
        <SocialLinks />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
