import localFont from "next/font/local";
import { Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import HoverStyles from "@/components/HoverStyles";

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
      className={`${didot.variable} ${delaGothicOne.variable} h-full`}
    >
      <body className="min-h-full">
        <HoverStyles />
        {children}
      </body>
    </html>
  );
}
