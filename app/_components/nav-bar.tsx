import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";
import { ROUTES } from "@/constants";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
      <MobileNav />

      <nav className="hidden w-full flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:justify-between lg:text-sm lg:gap-6">
        <h1 className="text-primary text-xl font-semibold">Elevate.</h1>

        <div className="flex items-center gap-4 text-sm font-medium divide-x-2">
          {ROUTES.map((route) => {
            return (
              <Link
                key={route.name}
                href="#"
                className="pl-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                {route.name}
              </Link>
            );
          })}
        </div>

        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
