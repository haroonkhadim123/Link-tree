"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent mismatch by not rendering until client mount
    return null;
  }

  const showNavbar = pathname === "/" || pathname === "/form";
  const showFooter= pathname==='/' || pathname==='/form'

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer/>}
    </>
  );
}
