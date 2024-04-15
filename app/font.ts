import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const droidSeff = localFont({
  src: [
    {
      path: "../public/fonts/DroidSerif-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DroidSerif-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
