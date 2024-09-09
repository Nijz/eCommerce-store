import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hippo Store ( Digital maket Place )",
  description: "Here user's can buy stufs like UIKits and icon's and many more digital stuffs. Happy Shopping ;) ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className=" min-h-screen relative flex flex-col">
          <Providers>
            <Navbar/>
          </Providers>
          <div className=" flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
