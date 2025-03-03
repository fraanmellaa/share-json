import { NextFont } from "next/dist/compiled/@next/font";
import {
  Roboto,
  Open_Sans,
  Montserrat,
  Lato,
  Poppins,
  Raleway,
  Noto_Sans,
  Inter,
  Roboto_Slab,
  Merriweather,
  Playfair,
} from "next/font/google";

export const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
export const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
export const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });
export const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });
export const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const playfair = Playfair({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const AvailableFonts: Array<{ name: string; font: NextFont }> = [
  { name: "Roboto", font: roboto },
  { name: "Open Sans", font: openSans },
  { name: "Montserrat", font: montserrat },
  { name: "Lato", font: lato },
  { name: "Poppins", font: poppins },
  { name: "Raleway", font: raleway },
  { name: "Noto Sans", font: notoSans },
  { name: "Inter", font: inter },
  { name: "Roboto Slab", font: robotoSlab },
  { name: "Merriweather", font: merriweather },
  { name: "Playfair", font: playfair },
];

export const DefaultFont: { name: string; font: NextFont } = AvailableFonts[0];

export const AvailableFontWeights: Array<string> = ["400", "700"];
