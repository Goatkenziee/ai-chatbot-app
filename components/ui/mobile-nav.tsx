"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="sm:hidden h-9 w-9"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Slide-out panel */}
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-background border-l shadow-xl animate-slide-in">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-sm">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 gap-2">
              <a
                href="#features"
                className="rounded-md px-3 py-2.5 text-sm font-medium transition hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="rounded-md px-3 py-2.5 text-sm font-medium transition hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                About
              </a>
              <hr className="my-2" />
              <Button variant="default" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Sign in
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
