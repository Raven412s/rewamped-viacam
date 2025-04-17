import { SmoothScroll } from "@/components/Global/HOC/Smooth";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import type { Metadata } from "next";
import {
  Nunito,
  Nunito_Sans,
  Oxanium,
  Oleo_Script_Swash_Caps,
  Old_Standard_TT,
} from "next/font/google";
import { ThemeProvider } from "@/components/Global/HOC/ThemeProvider";
import Cursor from "@/components/Global/Custom/cursor/Cursor";

// Import fonts
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
});

const oleoScriptSwashCaps = Oleo_Script_Swash_Caps({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oleo-script-swash-caps",
  display: "swap",
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-old-standard-tt",
  weight: ["400", "700"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Viacam Productions",
  description: "All rights reserved | Viacam Productions®️ | @2024.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        nunito.variable,
        nunitoSans.variable,
        oxanium.variable,
        oldStandardTT.variable,
        oleoScriptSwashCaps.variable,
      )}
    >
      <body
        className="antialiased"
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <Cursor/>
            {children}
              {/* ✅ SVG Noise Filter (Must Be in DOM) */}
                <svg width="0" height="0" className="hidden">
                  <defs>
                    <filter id="grains">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"  // Lower value for softer grains (default: 0.9)
                        numOctaves="1"  // Reduce to make noise less intense (default: 3)
                        stitchTiles="stitch"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 0.3 0"  // Adjust last value for opacity (0.3 makes it subtle)
                      />
                    </filter>
                  </defs>
                </svg>

          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
