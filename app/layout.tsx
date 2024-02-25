import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider/ThemeProvider";
import Navbar from "@/components/navbar/navbar";
// import ThemeProvider from "@/components/themeprovider/ThemeProvider";
// import Navbar from "@/components/home/Navbar";
// import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}