import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomás Andrade | Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSerif4.className}>
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
