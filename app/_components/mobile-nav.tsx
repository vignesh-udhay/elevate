import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { ROUTES } from "@/constants";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <h1 className="text-primary text-xl font-semibold lg:hidden">Elevate.</h1>

      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <span className="sr-only">Elevate</span>
          </Link>
          {ROUTES.map((route) => {
            return (
              <SheetClose key={route.name} asChild>
                <Link
                  href="#"
                  className={`text-muted-foreground hover:text-foreground`}
                >
                  {route.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
