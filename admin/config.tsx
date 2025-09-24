// admin/config.tsx
import React from "react";
import Link from "next/link"; // optional, Admin UI is Next-based
import Image from "next/image"; // optional - you can also use a plain <img>
// If you prefer to import the file (webpack/vite), uncomment:
import logoSrc from "../public/logo.png"; // adjust path relative to this file

export function Logo() {
  // If your build supports next/image in admin UI you can use it,
  // otherwise plain <img src="/logo.svg" /> is fine.
  return (
    <Link
      href="/"
      aria-label="Home"
      style={{ display: "flex", alignItems: "center", gap: "15px" , textDecoration: "none"}}
    >
      <Image src={logoSrc} alt="پنل ادمین" height={32} priority />
      <span style={{ fontSize: "20px" , color: "black" , fontWeight: "bold" }}> پی ریزان طوس</span>
    </Link>
  );
}

export const components = {
  Logo,
};
