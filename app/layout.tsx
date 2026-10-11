import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Sourci — source with certainty", description:"A focused workspace for product sourcing." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
