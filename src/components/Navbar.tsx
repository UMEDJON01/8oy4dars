"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="navbar bg-base-100 shadow-lg p-4">
      <div className="navbar-start">
        <Link href="/" legacyBehavior>
          <a className="btn btn-ghost normal-case text-xl">MY Market</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <Link href="/login" legacyBehavior>
          <a className="btn btn-primary ml-2">Login</a>
        </Link>
      </div>
    </div>
  );
}
