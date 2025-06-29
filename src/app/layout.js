import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Heading from "@/components/Heading";
import AuthProvider from "@/services/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: { default: "Next Res", template: "%s | Next intro" },
  //if no title it will use default
  description: "super powerful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Heading></Heading>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
