"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="fixed inset-x-4 top-20 z-50 mx-auto max-w-sm rounded-2xl border bg-card p-6 shadow-2xl">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-muted-foreground">Navigation</span>
              <Button
                variant="ghost"
                className="w-full justify-start text-base"
                onClick={() => setOpen(false)}
              >
                New Chat
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-base"
                onClick={() => setOpen(false)}
              >
                History
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-base"
                onClick={() => setOpen(false)}
              >
                Settings
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
