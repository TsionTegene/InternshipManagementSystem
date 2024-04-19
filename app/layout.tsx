import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider/ThemeProvider";
import Navbar from "@/components/navbar/navbar";
import ReactQueryProvider from "@/queries/ReactQueryProvider";
import { QueryClient } from "@tanstack/react-query";
// import ThemeProvider from "@/components/themeprovider/ThemeProvider";
// import Navbar from "@/components/home/Navbar";
// import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const queryClient = new QueryClient();

export const metadata = {
  title: "IMS",
  description: "Web based Internship Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
