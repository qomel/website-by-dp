import { Dela_Gothic_One, Playfair_Display } from "next/font/google";
import "./globals.css";

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela-gothic",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
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
      className={`${delaGothicOne.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
