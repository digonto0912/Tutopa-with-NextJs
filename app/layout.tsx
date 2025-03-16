import "./styles/globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Tutopa",
  title: "Tutopa: Real-Time Progress Tracking and Interactive Learning for Kids",
  description: "Tutopa: Real-Time Progress Tracking and Interactive Learning for Kids"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
