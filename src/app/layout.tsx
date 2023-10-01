import { UserProvider } from "@/context/UserContext";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Notes Keeper",
  description: "Developed by Ankit Panchal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
