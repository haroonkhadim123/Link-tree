import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full mt-10 py-6 shadow-inner">
      <div className="md:w-[80vw] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/form">Form</Link>
          <Link href="/list">List</Link>
        </ul>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          &copy;{new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
